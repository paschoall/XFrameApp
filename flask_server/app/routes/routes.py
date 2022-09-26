import json

from flask import Response, request
from flask import jsonify

from app import app
from ..views import helper
from ..views import users, variables, metrics, references, relationships

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

@app.route("/auth", methods=['POST'])
def authenticate():
    return helper.auth()
# Users CRUD
# Create
@app.route("/user", methods=['POST'])
def post_user():
    return users.post_user()
# Read
@app.route("/users", methods=['GET'])
def get_users():
    return users.get_users()
@app.route("/user/<id>", methods=['GET'])
def get_user(id):
    return users.get_user(id)
# Update
@app.route("/user/<id>", methods=['PUT'])
def update_user(id):
    return users.update_user(id)
# Delete
@app.route("/user/<id>", methods=['DELETE'])
def delete_user(id):
    return users.delete_user(id)

# Variables CRUD
@app.route("/independent_variable", methods=['POST'])
def post_independent_variable():
    return variables.post_independent_variable()
@app.route("/dependent_variable", methods=['POST'])
def post_dependent_variable():
    return variables.post_dependent_variable()


@app.route("/independent_variables", methods=['GET'])
def get_independent_variables():
    return variables.get_independent_variables()
@app.route("/independent_variable/<id>", methods=['GET'])
def get_independent_variable(id):
    return variables.get_independent_variable(id)

@app.route("/dependent_variables", methods=['GET'])
def get_dependent_variables():
    return variables.get_dependent_variables()
@app.route("/dependent_variable/<id>", methods=['GET'])
def get_dependent_variable(id):
    return variables.get_dependent_variable(id)


@app.route("/independent_variable/<id>", methods=['PUT'])
def update_independent_variable(id):
    return variables.update_independent_variable(id)
@app.route("/dependent_variable/<id>", methods=['PUT'])
def update_dependent_variable(id):
    return variables.update_dependent_variable(id)


@app.route("/independent_variable/<id>", methods=['DELETE'])
def delete_independent_variable(id):
    return variables.delete_independent_variable(id)
@app.route("/dependent_variable/<id>", methods=['DELETE'])
def delete_dependent_variable(id):
    return variables.delete_dependent_variable(id)

# Metrics CRUD
@app.route("/metric", methods=['POST'])
def post_metric():
    return metrics.post_metric()
@app.route("/metrics", methods=['GET'])
def get_metrics():
    return metrics.get_metrics()
@app.route("/metric/<id>", methods=['GET'])
def get_metric(id):
    return metrics.get_metric(id)
@app.route("/metric/<id>", methods=['PUT'])
def update_metric(id):
    return metrics.update_metric(id)
@app.route("/metric/<id>", methods=['DELETE'])
def delete_metric(id):
    return metrics.delete_metric(id)

# References CRUD
@app.route("/reference", methods=['POST'])
def post_reference():
    return references.post_reference()
@app.route("/references", methods=['GET'])
def get_references():
    return references.get_references()
@app.route("/reference/<id>", methods=['GET'])
def get_reference(id):
    return references.get_reference(id)
@app.route("/reference/<id>", methods=['PUT'])
def update_reference(id):
    return references.update_reference(id)
@app.route("/reference/<id>", methods=['DELETE'])
def delete_reference(id):
    return references.delete_reference(id)

# Relationships CRUD
@app.route("/metric_reference", methods=['POST'])
def post_metric_reference():
    return relationships.post_metric_reference()
@app.route("/metric_references", methods=['GET'])
def get_metric_references():
    return relationships.get_metric_references()
@app.route("/metric_reference/<id>", methods=['GET'])
def get_metric_reference(id):
    return relationships.get_metric_reference(id)
@app.route("/metric_reference/<id>", methods=['PUT'])
def update_metric_reference(id):
    return relationships.update_metric_reference(id)
@app.route("/metric_reference/<id>", methods=['DELETE'])
def delete_metric_reference(id):
    return relationships.delete_metric_reference(id)
@app.route("/vi_reference", methods=['POST'])
def post_vi_reference():
    return relationships.post_vi_reference()
@app.route("/vi_references", methods=['GET'])
def get_vi_references():
    return relationships.get_vi_references()
@app.route("/vi_reference/<id>", methods=['GET'])
def get_vi_reference(id):
    return relationships.get_vi_reference(id)
@app.route("/vi_reference/<id>", methods=['PUT'])
def update_vi_reference(id):
    return relationships.update_vi_reference(id)
@app.route("/vi_reference/<id>", methods=['DELETE'])
def delete_vi_reference(id):
    return relationships.delete_vi_reference(id)
@app.route("/vd_reference", methods=['POST'])
def post_vd_reference():
    return relationships.post_vd_reference()
@app.route("/vd_references", methods=['GET'])
def get_vd_references():
    return relationships.get_vd_references()
@app.route("/vd_reference/<id>", methods=['GET'])
def get_vd_reference(id):
    return relationships.get_vd_reference(id)
@app.route("/vd_reference/<id>", methods=['PUT'])
def update_vd_reference(id):
    return relationships.update_vd_reference(id)
@app.route("/vd_reference/<id>", methods=['DELETE'])
def delete_vd_reference(id):
    return relationships.delete_vd_reference(id)
@app.route("/vi_vd_relationship", methods=['POST'])
def post_vi_vd_relationship():
    return relationships.post_vi_vd_relationship()
@app.route("/vi_vd_relationships", methods=['GET'])
def get_vi_vd_relationships():
    return relationships.get_vi_vd_relationships()
@app.route("/vi_vd_relationship/<id>", methods=['GET'])
def get_vi_vd_relationship(id):
    return relationships.get_vi_vd_relationship(id)
@app.route("/vi_vd_relationship/<id>", methods=['PUT'])
def update_vi_vd_relationship(id):
    return relationships.update_vi_vd_relationship(id)
@app.route("/vi_vd_relationship/<id>", methods=['DELETE'])
def delete_vi_vd_relationship(id):
    return relationships.delete_vi_vd_relationship(id)