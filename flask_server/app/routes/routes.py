import json

from flask import Response, request
from flask import jsonify

from app import app
from ..views import users, models

# # CRUD Routes
# # CREATE
# @app.route("/maple_character", methods=["POST"])
# def create_maple_character():
#     body = request.get_json()
#     try:
#         character = Character(body["name"], body["job"], body["level"], body["stats"])
#         db.session.add(character)
#         db.session.commit()
#         return generate_response(201, "character", character.to_json(), "Character added!")

#     except Exception as e:
#         print(e)
#         return generate_response(400, "character", {}, "Error trying to add the character!")

# # READ
# @app.route("/maple_characters", methods=["GET"])
# def select_maple_characters():
#     characters_list = Character.query.all()
#     # print(characters_list)
#     characters_json = [characters.to_json() for characters in characters_list]
#     return generate_response(200, "characters", characters_json)

# @app.route("/maple_character/<id>", methods=["GET"])
# def select_maple_character(id):
#     character = Character.query.filter_by(id=id).first()
#     character_json = character.to_json()
#     return generate_response(200, "character", character_json)

# # UPDATE
# @app.route("/maple_character/<id>", methods=["PUT"])
# def update_maple_character(id):
#     character = Character.query.filter_by(id=id).first()
#     body = request.get_json()
#     try:
#         if("name" in body):
#             character.name = body["name"]
#         if("job" in body):
#             character.job = body["job"]
#         if("level" in body):
#             character.level = body["level"]
#         if("stats" in body):
#             character.stats = body["stats"]
#         db.session.add(character)
#         db.session.commit()
#         return generate_response(200, "character", character.to_json())
#     except Exception as e:
#         print(e)
#         return generate_response(400, "character", {}, "Error trying to upadate the character!")

# # DELETE
# @app.route("/maple_character/<id>", methods=["DELETE"])
# def delete_maple_character(id):
#     character = Character.query.filter_by(id=id).first()
#     try:
#         db.session.delete(character)
#         sql_txt = select(func.max(Character.id))
#         # max_id = db.session.execute(sql_txt).scalar()
#         # db.session.execute(f"ALTER TABLE maple.character AUTO_INCREMENT = {max_id};")
#         db.session.commit()
#         return generate_response(200, "character", character.to_json())
#     except Exception as e:
#         print(e)
#         return generate_response(400, "character", {}, "Error trying to delete the character!")


# Members API Route
@app.route("/")
def members():
    return jsonify({"message": 'Hello world!'})

# Create
@app.route("/users", methods=['POST'])
def post_user():
    return users.post_user()


# Read
@app.route("/users", methods=['GET'])
def get_users():
    return users.get_users()


@app.route("/users/<id>", methods=['GET'])
def get_user(id):
    return users.get_user(id)

# Update
@app.route("/users/<id>", methods=['PUT'])
def update_user(id):
    return users.update_user(id)

# Delete
@app.route("/users/<id>", methods=['DELETE'])
def delete_user(id):
    return users.delete_user(id)


@app.route("/independent_variables", methods=['POST'])
def post_independent_variable():
    return models.post_independent_variable()
# def generate_response(status, content_name, content, message=False):
#     body = {}
#     body[content_name] = content
#     if(message):
#         body["message"] = message
#     return Response(json.dumps(body), status=status, mimetype="application/json")
