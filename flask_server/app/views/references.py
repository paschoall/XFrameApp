from flask import request, jsonify

from app import db
from ..models.models import referencia, reference_schema, references_schema

# References CRUD
# Create
def post_reference():
    reference = request.json['reference']
    bib_reference = request.json['bib_reference']

    ref = referencia(reference, bib_reference)
    try:
        db.session.add(ref)
        db.session.commit()
        result = reference_schema.dump(ref)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        if(e.orig.args[0] == 1062):
            return jsonify({'message': e.orig.args[1], 'data': {}}), 409
        return jsonify({'message': 'unable to register', 'data': {}}), 500


# Read
def get_references():
    references = referencia.query.all()

    if references:
        result = references_schema.dump(references)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_reference(id):
    reference = referencia.query.get(id)

    if reference:
        result = reference_schema.dump(reference)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "reference doesn't exist", 'data': {}}), 404


# Update
def update_reference(id):
    if ("reference" in request.json):
        reference = request.json['reference']
        bib_reference = request.json['bib_reference']

    ref = referencia.query.get(id)

    if not ref:
        return jsonify({'message': "reference doesn't exist", 'data': {}}), 404

    try:
        ref.referencia = reference
        ref.referencia_bib = bib_reference
        # db.session.add(user)
        db.session.commit()
        result = reference_schema.dump(ref)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        if(e.orig.args[0] == 1062):
            return jsonify({'message': e.orig.args[1], 'data': {}}), 409
        return jsonify({'message': 'unable to update', 'data': {}}), 500


# Delete
def delete_reference(id):
    reference = referencia.query.get(id)

    if not reference:
        return jsonify({'message': "reference doesn't exist", 'data': {}}), 404

    if reference:
        try:
            db.session.delete(reference)
            db.session.commit()
            result = reference_schema.dump(reference)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500
