from flask import Flask, Response, request
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import select,func
from dotenv import load_dotenv
import json
import os

load_dotenv()
MYSQL_USER = os.environ["MYSQL_USER"]
MYSQL_PASSWORD = os.environ["MYSQL_PASSWORD"]

app = Flask(__name__)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://"+MYSQL_USER+":"+MYSQL_PASSWORD+"@localhost/maple"

ma = Marshmallow(app)
db = SQLAlchemy(app)

# Define Models
class Class(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(40), nullable=False, unique = True)
    type = db.Column(db.String(200), nullable=False)
    legion_bonus = db.Column(db.String(200), nullable=False)
    
    def __init__(self,name,type,legion_bonus):
        self.name=name
        self.type=type
        self.legion_bonus=legion_bonus

    # create A String
    def __repr__(self):
        return "<Name %r>" % self.name

class Character(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(12), nullable=False, unique = True)
    job = db.Column(db.String(40), nullable=False)
    level = db.Column(db.Integer)
    stats = db.Column(db.Integer)

    # create A String
    def __repr__(self):
        return "<Name: %r, Job: %r>" % (self.name, self.job)

    def __init__(self,name,job,level,stats):
        self.name=name
        self.job=job
        self.level=level
        self.stats=stats

    def to_json(self):
        return {"id": self.id, "name": self.name, "job": self.job, "level": self.level, "stats": self.stats}

# CRUD Routes
# CREATE
@app.route("/maple_character", methods=["POST"])
def create_maple_character():
    body = request.get_json()
    try:
        character = Character(body["name"], body["job"], body["level"], body["stats"])
        db.session.add(character)
        db.session.commit()
        return generate_response(201, "character", character.to_json(), "Character added!")

    except Exception as e:
        print(e)
        return generate_response(400, "character", {}, "Error trying to add the character!")
        
# READ
@app.route("/maple_characters", methods=["GET"])
def select_maple_characters():
    characters_list = Character.query.all()
    # print(characters_list)
    characters_json = [characters.to_json() for characters in characters_list]
    return generate_response(200, "characters", characters_json)

@app.route("/maple_character/<id>", methods=["GET"])
def select_maple_character(id):
    character = Character.query.filter_by(id=id).first()
    character_json = character.to_json()
    return generate_response(200, "character", character_json)

# UPDATE
@app.route("/maple_character/<id>", methods=["PUT"])
def update_maple_character(id):
    character = Character.query.filter_by(id=id).first()
    body = request.get_json()
    try:
        if("name" in body):
            character.name = body["name"]
        if("job" in body):
            character.job = body["job"]
        if("level" in body):
            character.level = body["level"]
        if("stats" in body):
            character.stats = body["stats"]
        db.session.add(character)
        db.session.commit()
        return generate_response(200, "character", character.to_json())
    except Exception as e:
        print(e)
        return generate_response(400, "character", {}, "Error trying to upadate the character!")

# DELETE
@app.route("/maple_character/<id>", methods=["DELETE"])
def delete_maple_character(id):
    character = Character.query.filter_by(id=id).first()
    try:
        db.session.delete(character)
        sql_txt = select(func.max(Character.id))
        # max_id = db.session.execute(sql_txt).scalar()
        # db.session.execute(f"ALTER TABLE maple.character AUTO_INCREMENT = {max_id};")
        db.session.commit()
        return generate_response(200, "character", character.to_json())
    except Exception as e:
        print(e)
        return generate_response(400, "character", {}, "Error trying to delete the character!")


# Members API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


def generate_response(status, content_name, content, message=False):
    body = {}
    body[content_name] = content
    if(message):
        body["message"] = message
    return Response(json.dumps(body), status=status, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
    
    