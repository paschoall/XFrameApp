import datetime
from functools import wraps

from flask import jsonify, request
import jwt
from werkzeug.security import check_password_hash

from app import app
from .users import user_by_username

def auth():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return jsonify({'message': 'could not verify', 'WWW-Authenticate': 'Basic auth="Login required"'}), 401

    user = user_by_username(auth.username)
    if not user:
        return jsonify({'message': 'user not found', 'data': {}}), 401
    
    if user and check_password_hash(user.password, auth.password):
        token = jwt.encode({'username': user.username, 'exp': datetime.datetime.now() + datetime.timedelta(hours=12)},
                            app.config['SECRET_KEY'])
        return jsonify({'message': 'Successfully validated', 'token': token,
                        'exp': datetime.datetime.now() + datetime.timedelta(hours=12)})
    
    return jsonify({'message': 'could not verify', 'WWW-Authenticate': 'Basic auth="Login required"'}), 401


