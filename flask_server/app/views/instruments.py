from flask import request, jsonify

from app import db
from ..models.models import instrumento, instrument_schema, instruments_schema

# instruments CRUD
# Create
def post_instrument():
    name = request.json['name']
    description = request.json['description']

    instrument = instrumento(name, description)
    try:
        db.session.add(instrument)
        db.session.commit()
        result = instrument_schema.dump(instrument)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500


# Read
def get_instruments():
    instruments = instrumento.query.all()

    if instruments:
        result = instruments_schema.dump(instruments)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_instrument(id):
    instrument = instrumento.query.get(id)

    if instrument:
        result = instrument_schema.dump(instrument)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "instrument doesn't exist", 'data': {}}), 404


# Update
def update_instrument(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    instrument = instrumento.query.get(id)

    if not instrument:
        return jsonify({'message': "instrument doesn't exist", 'data': {}}), 404

    try:
        instrument.name = name
        instrument.description = description
        db.session.commit()
        result = instrument_schema.dump(instrument)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500


# Delete
def delete_instrument(id):
    instrument = instrumento.query.get(id)

    if not instrument:
        return jsonify({'message': "instrument doesn't exist", 'data': {}}), 404

    if instrument:
        try:
            db.session.delete(instrument)
            db.session.commit()
            result = instrument_schema.dump(instrument)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500
