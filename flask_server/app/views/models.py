from flask import request, jsonify

from app import db
from ..models.models import variavel_independente, variavel_dependente, variable_schema, variables_schema
from ..models.models import metrica, metric_schema, metrics_schema
from ..models.models import referencia, reference_schema, references_schema
from ..models.models import referencia_vi, vi_reference_schema, vi_references_schema
from ..models.models import referencia_vd, vd_reference_schema, vd_references_schema
from ..models.models import referencia_metrica, metric_reference_schema, metric_references_schema
from ..models.models import vi_vd, vi_vd_schema, vi_vds_schema


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
# def get_users():
#     users = Users.query.all()

#     if users:
#         result = users_schema.dump(users)
#         return jsonify({'message': "successfully fetched", 'data': result})

#     return jsonify({'message': "nothing found", 'data': {}})


# def get_user(id):
#     user = Users.query.get(id)

#     if user:
#         result = user_schema.dump(user)
#         return jsonify({'message': "successfully fetched", 'data': result}), 200

#     return jsonify({'message': "user doesn't exist", 'data': {}}), 404

# Update
# def update_user(id):
#     if ("username" in request.json):
#         username = request.json['username']
#     if ("password" in request.json):
#         password = request.json['password']
#     if ("name" in request.json):
#         name = request.json['name']
#     if ("email" in request.json):
#         email = request.json['email']

#     user = Users.query.get(id)

#     if not user:
#         return jsonify({'message': "user doesn't exist", 'data': {}}), 404

#     pass_hash = generate_password_hash(password)

#     try:
#         user.username = username
#         user.password = pass_hash
#         user.name = name
#         user.email = email
#         # db.session.add(user)
#         db.session.commit()
#         result = user_schema.dump(user)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
# def delete_user(id):
#     user = Users.query.get(id)

#     if not user:
#         return jsonify({'message': "user doesn't exist", 'data': {}}), 404

#     if user:
#         try:
#             db.session.delete(user)
#             db.session.commit()
#             result = user_schema.dump(user)
#             return jsonify({'message': "successfully deleted", 'data': result}), 200
#         except Exception as e:
#             print(e)
#             return jsonify({'message': "unable to delete", 'data': {}}), 500
