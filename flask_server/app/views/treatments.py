from flask import request, jsonify

from app import db
from ..models.models import tratamento, treatment_schema, treatments_schema

# treatments CRUD
# Create
def post_treatment():
    name = request.json['name']
    description = request.json['description']

    treatment = tratamento(name, description)
    try:
        db.session.add(treatment)
        db.session.commit()
        result = treatment_schema.dump(treatment)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500


# Read
def get_treatments():
    treatments = tratamento.query.all()

    if treatments:
        result = treatments_schema.dump(treatments)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_treatment(id):
    treatment = tratamento.query.get(id)

    if treatment:
        result = treatment_schema.dump(treatment)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "treatment doesn't exist", 'data': {}}), 404


# Update
def update_treatment(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    treatment = tratamento.query.get(id)

    if not treatment:
        return jsonify({'message': "treatment doesn't exist", 'data': {}}), 404

    try:
        treatment.name = name
        treatment.description = description
        db.session.commit()
        result = treatment_schema.dump(treatment)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500


# Delete
def delete_treatment(id):
    treatment = tratamento.query.get(id)

    if not treatment:
        return jsonify({'message': "treatment doesn't exist", 'data': {}}), 404

    if treatment:
        try:
            db.session.delete(treatment)
            db.session.commit()
            result = treatment_schema.dump(treatment)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500
