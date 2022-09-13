from flask import Flask, Response, request
from flask_sqlalchemy import SQLAlchemy
import mysql.connector
import json

#password = ''
app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:159753XD@localhost/crud'

db = SQLAlchemy(app)

class variaveis_dependentes(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    nome_variavel = db.Column(db.String(50))
    descricao = db.Column(db.String(100))

    # def __init__(self, nome_variavel, descricao):
    #     self.nome_variavel = nome_variavel
    #     self.descricao = descricao


#SELECT
@app.route("/variaveis_dependentes", methods=["GET"])
def select_variaveis_dependentes():
    lista_variaveis_dependentes = variaveis_dependentes.query.all()
    print(lista_variaveis_dependentes)

    return Response()
#CREATE
#REMOVE
#UPDAGE
#DELETE

# Members API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    db.create_all
    app.run(debug=True)