from flask import request, jsonify

from app import db
from ..models.models import variavel_independente, variavel_dependente, variable_schema, variables_schema

# Variables CRUD
# Create
def post_independent_variable():
    name = request.json['name']
    description = request.json['description']

    independent_variable = variavel_independente(name, description)
    try:
        db.session.add(independent_variable)
        db.session.commit()
        result = variable_schema.dump(independent_variable)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

def post_dependent_variable():
    name = request.json['name']
    description = request.json['description']

    dependent_variable = variavel_dependente(name, description)
    try:
        db.session.add(dependent_variable)
        db.session.commit()
        result = variable_schema.dump(dependent_variable)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_independent_variables():
    independent_variables = variavel_independente.query.all()

    if independent_variables:
        result = variables_schema.dump(independent_variables)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_independent_variable(id):
    independent_variable = variavel_independente.query.get(id)

    if independent_variable:
        result = variable_schema.dump(independent_variable)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "variable doesn't exist", 'data': {}}), 404


def get_dependent_variables():
    dependent_variables = variavel_dependente.query.all()

    if dependent_variables:
        result = variables_schema.dump(dependent_variables)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_dependent_variable(id):
    dependent_variable = variavel_dependente.query.get(id)

    if dependent_variable:
        result = variable_schema.dump(dependent_variable)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "variable doesn't exist", 'data': {}}), 404

# Update
def update_independent_variable(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    independent_variable = variavel_independente.query.get(id)

    if not independent_variable:
        return jsonify({'message': "variable doesn't exist", 'data': {}}), 404

    try:
        independent_variable.name = name
        independent_variable.description = description
        # db.session.add(user)
        db.session.commit()
        result = variable_schema.dump(independent_variable)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500


def update_dependent_variable(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    dependent_variable = variavel_dependente.query.get(id)

    if not dependent_variable:
        return jsonify({'message': "variable doesn't exist", 'data': {}}), 404

    try:
        dependent_variable.name = name
        dependent_variable.description = description
        db.session.commit()
        result = variable_schema.dump(dependent_variable)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_independent_variable(id):
    independent_variable = variavel_independente.query.get(id)

    if not independent_variable:
        return jsonify({'message': "variable doesn't exist", 'data': {}}), 404

    if independent_variable:
        try:
            db.session.delete(independent_variable)
            db.session.commit()
            result = variable_schema.dump(independent_variable)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500

def delete_dependent_variable(id):
    dependent_variable = variavel_dependente.query.get(id)

    if not dependent_variable:
        return jsonify({'message': "variable doesn't exist", 'data': {}}), 404

    if dependent_variable:
        try:
            db.session.delete(dependent_variable)
            db.session.commit()
            result = variable_schema.dump(dependent_variable)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500
