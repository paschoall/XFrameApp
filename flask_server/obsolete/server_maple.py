from flask import Flask, Response, request
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import select,func
from dotenv import load_dotenv
import datetime
import json
import os

load_dotenv()
MYSQL_USER = os.environ["MYSQL_USER"]
MYSQL_PASSWORD = os.environ["MYSQL_PASSWORD"]

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://"+MYSQL_USER+":"+MYSQL_PASSWORD+"@localhost/maple"

ma = Marshmallow(app)
db = SQLAlchemy(app)

from routes import routes

# Define Models

# Models for user authentication
class Users(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), unique = True, nullable=False)
    password = db.Column(db.String(200), nullable = False)
    name = db.Column(db.String(60), nullable=False)
    email = db.Column(db.String(50), unique = True, nullable=False)
    created_on = db.Column(db.DateTime, default = datetime.datetime.now())
    
    def __init__(self,username,password,name,email):
        self.username=username
        self.password=password
        self.name=name
        self.email=email

class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'name', 'email', 'password', 'created_on')

user_schema = UsersSchema()
user_schema = UsersSchema(many=True)

# Models for variable data
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




if __name__ == "__main__":
    app.run(debug=True)
    
    