from flask import request, jsonify
from werkzeug.security import generate_password_hash

from app import db
from ..models.users import Users, user_schema, users_schema

# Create
def post_user():
    username = request.json['username']
    password = request.json['password']
    name = request.json['name']
    email = request.json['email']
    pass_hash = generate_password_hash(password)
    user = Users(username, pass_hash, name, email)
    try:
        db.session.add(user)
        db.session.commit()
        result = user_schema.dump(user)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        if(e.orig.args[0] == 1062):
            return jsonify({'message': e.orig.args[1], 'data': {}}), 409
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_users():
    users = Users.query.all()

    if users:
        result = users_schema.dump(users)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_user(id):
    user = Users.query.get(id)

    if user:
        result = user_schema.dump(user)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "user doesn't exist", 'data': {}}), 404

# Update
def update_user(id):
    if ("username" in request.json):
        username = request.json['username']
    if ("password" in request.json):
        password = request.json['password']
    if ("name" in request.json):
        name = request.json['name']
    if ("email" in request.json):
        email = request.json['email']

    user = Users.query.get(id)

    if not user:
        return jsonify({'message': "user doesn't exist", 'data': {}}), 404

    pass_hash = generate_password_hash(password)

    try:
        user.username = username
        user.password = pass_hash
        user.name = name
        user.email = email
        # db.session.add(user)
        db.session.commit()
        result = user_schema.dump(user)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        if(e.orig.args[0] == 1062):
            return jsonify({'message': e.orig.args[1], 'data': {}}), 409
        return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_user(id):
    user = Users.query.get(id)

    if not user:
        return jsonify({'message': "user doesn't exist", 'data': {}}), 404

    if user:
        try:
            db.session.delete(user)
            db.session.commit()
            result = user_schema.dump(user)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500

def user_by_username(username):
    try: 
        return Users.query.filter(Users.username == username).one()
    except:
        return None