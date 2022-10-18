from flask import request, jsonify

from app import db
from ..models.models import fator, factor_schema, factors_schema

# factors CRUD
# Create
def post_factor():
    name = request.json['name']
    description = request.json['description']

    factor = fator(name, description)
    try:
        db.session.add(factor)
        db.session.commit()
        result = factor_schema.dump(factor)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500


# Read
def get_factors():
    factors = fator.query.all()

    if factors:
        result = factors_schema.dump(factors)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_factor(id):
    factor = fator.query.get(id)

    if factor:
        result = factor_schema.dump(factor)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "factor doesn't exist", 'data': {}}), 404


# Update
def update_factor(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    factor = fator.query.get(id)

    if not factor:
        return jsonify({'message': "factor doesn't exist", 'data': {}}), 404

    try:
        factor.name = name
        factor.description = description
        db.session.commit()
        result = factor_schema.dump(factor)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500


# Delete
def delete_factor(id):
    factor = fator.query.get(id)

    if not factor:
        return jsonify({'message': "factor doesn't exist", 'data': {}}), 404

    if factor:
        try:
            db.session.delete(factor)
            db.session.commit()
            result = factor_schema.dump(factor)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500
