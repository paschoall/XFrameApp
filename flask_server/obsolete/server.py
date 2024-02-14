from flask import Flask, Response, request
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint
from sqlalchemy.sql.expression import select,func
from dotenv import load_dotenv
import json
import os

load_dotenv()
MYSQL_USER = os.environ["MYSQL_USER"]
MYSQL_PASSWORD = os.environ["MYSQL_PASSWORD"]

app = Flask(__name__)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://"+MYSQL_USER+":"+MYSQL_PASSWORD+"@localhost/variable_selection_tool"

ma = Marshmallow(app)
db = SQLAlchemy(app)

# Define Models
class variavel_independente(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable=False, unique = True)
    description = db.Column(db.String(1000), nullable=False)

    # create A String
    def __repr__(self):
        return "<Name: %r, Description: %r>" % (self.name, self.description)

    def __init__(self,name,description):
        self.name=name
        self.description=description

    def to_json(self):
        return {"id": self.id, "name": self.name, "description": self.description}

class variavel_dependente(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable=False, unique = True)
    description = db.Column(db.String(1000), nullable=False)

    # create A String
    def __repr__(self):
        return "<Name: %r, Description: %r>" % (self.name, self.description)

    def __init__(self,name,description):
        self.name=name
        self.description=description

    def to_json(self):
        return {"id": self.id, "name": self.name, "description": self.description}

class metrica(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable=False, unique = True)
    description = db.Column(db.String(1000), nullable=False)
    instrument = db.Column(db.String(100))
    # create A String
    def __repr__(self):
        return "<name: %r>" % (self.name)

    def __init__(self,name,description):
        self.name=name

    def to_json(self):
        return {"id": self.id, "name": self.name}

class referencia(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    referencia = db.Column(db.String(1000), nullable=False, unique = True)

    # create A String
    def __repr__(self):
        return "<referencia: %r>" % (self.referencia)

    def __init__(self,name,description):
        self.referencia=referencia

    def to_json(self):
        return {"id": self.id, "referencia": self.referencia}

class referencia_vi(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    id_vi = db.Column(db.Integer, nullable=False)
    id_ref = db.Column(db.Integer, nullable=False)
    __table_args__ = (UniqueConstraint('id_vi', 'id_ref', name='vi_ref_uc'),
    )
    def __init__(self,id_vi,id_ref):
        self.id_vi=id_vi
        self.id_ref=id_ref

    def to_json(self):
        return {"id": self.id, "id_vi": self.id_vi, "id_ref": self.id_ref}

class referencia_vd(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    id_vd = db.Column(db.Integer, nullable=False)
    id_ref = db.Column(db.Integer, nullable=False)
    __table_args__ = (UniqueConstraint('id_vd', 'id_ref', name='vd_ref_uc'),
    )
    def __init__(self,id_vd,id_ref):
        self.id_vd=id_vd
        self.id_ref=id_ref

    def to_json(self):
        return {"id": self.id, "id_vd": self.id_vd, "id_ref": self.id_ref}

class vi_vd(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    id_vi = db.Column(db.Integer, nullable=False)
    id_vd = db.Column(db.Integer, nullable=False)
    __table_args__ = (UniqueConstraint('id_vi', 'id_vd', name='vi_vd_uc'),
    )
    def __init__(self,id_vi,id_vd):
        self.id_vi=id_vi
        self.id_vd=id_vd

    def to_json(self):
        return {"id": self.id, "id_vi": self.id_vi, "id_vd": self.id_vd}

# CRUD Routes
# CREATE
@app.route("/variavel_independente", methods=["POST"])
def create_variavel_independente():
    body = request.get_json()
    try:
        variavel_i = variavel_independente(body["name"], body["description"])
        db.session.add(variavel_i)
        db.session.commit()
        return generate_response(201, "variable", variavel_i.to_json(), "Variable added!")

    except Exception as e:
        print(e)
        return generate_response(400, "variable", {}, "Error trying to add the variable!")
        
@app.route("/variavel_dependente", methods=["POST"])
def create_variavel_dependente():
    body = request.get_json()
    try:
        variavel_d = variavel_dependente(body["name"], body["description"])
        db.session.add(variavel_d)
        db.session.commit()
        return generate_response(201, "variable", variavel_d.to_json(), "Variable added!")

    except Exception as e:
        print(e)
        return generate_response(400, "variable", {}, "Error trying to add the variable!")
        
# READ
@app.route("/variaveis_independentes", methods=["GET"])
def select_variaveis_independente():
    vi_list = variavel_independente.query.all()
    variables_json = [variables.to_json() for variables in vi_list]
    return generate_response(200, "variables", variables_json)

@app.route("/variavel_independente/<id>", methods=["GET"])
def select_variavel_independente(id):
    variavel_i = variavel_independente.query.filter_by(id=id).first()
    variavel_i_json = variavel_i.to_json()
    return generate_response(200, "variable", variavel_i_json)

@app.route("/variaveis_dependentes", methods=["GET"])
def select_variaveis_dependente():
    vi_list = variavel_dependente.query.all()
    variables_json = [variables.to_json() for variables in vi_list]
    return generate_response(200, "variables", variables_json)

@app.route("/variavel_dependente/<id>", methods=["GET"])
def select_variavel_dependente(id):
    variavel_d = variavel_dependente.query.filter_by(id=id).first()
    variavel_d_json = variavel_d.to_json()
    return generate_response(200, "variable", variavel_d_json)

# UPDATE
@app.route("/variavel_independente/<id>", methods=["PUT"])
def update_variavel_independente(id):
    variavel_i = variavel_independente.query.filter_by(id=id).first()
    body = request.get_json()
    try:
        if("name" in body):
            variavel_independente.name = body["name"]
        if("job" in body):
            variavel_independente.description = body["description"]
        db.session.add(variavel_i)
        db.session.commit()
        return generate_response(200, "variable", variavel_i.to_json())
    except Exception as e:
        print(e)
        return generate_response(400, "variable", {}, "Error trying to upadate the variable!")

@app.route("/variavel_dependente/<id>", methods=["PUT"])
def update_variavel_dependente(id):
    variavel_d = variavel_dependente.query.filter_by(id=id).first()
    body = request.get_json()
    try:
        if("name" in body):
            variavel_dependente.name = body["name"]
        if("job" in body):
            variavel_dependente.description = body["description"]
        db.session.add(variavel_d)
        db.session.commit()
        return generate_response(200, "variable", variavel_d.to_json())
    except Exception as e:
        print(e)
        return generate_response(400, "variable", {}, "Error trying to upadate the variable!")

# DELETE
@app.route("/variavel_independente/<id>", methods=["DELETE"])
def delete_variavel_independente(id):
    variavel_i = variavel_independente.query.filter_by(id=id).first()
    try:
        db.session.delete(variavel_i)
        sql_txt = select(func.max(variavel_independente.id))
        db.session.commit()
        return generate_response(200, "variable", variavel_i.to_json())
    except Exception as e:
        print(e)
        return generate_response(400, "variable", {}, "Error trying to delete the variable!")

@app.route("/variavel_dependente/<id>", methods=["DELETE"])
def delete_variavel_dependente(id):
    variavel_d = variavel_dependente.query.filter_by(id=id).first()
    try:
        db.session.delete(variavel_d)
        sql_txt = select(func.max(variavel_dependente.id))
        db.session.commit()
        return generate_response(200, "variable", variavel_d.to_json())
    except Exception as e:
        print(e)
        return generate_response(400, "variable", {}, "Error trying to delete the variable!")

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
    
    