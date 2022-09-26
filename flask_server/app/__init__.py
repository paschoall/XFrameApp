import os

from dotenv import load_dotenv
from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

load_dotenv()
MYSQL_USER = os.environ["MYSQL_USER"]
MYSQL_PASSWORD = os.environ["MYSQL_PASSWORD"]

app = Flask(__name__)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://"+MYSQL_USER+":"+MYSQL_PASSWORD+"@localhost/variable_selection_tool"
ma = Marshmallow(app)
db = SQLAlchemy(app)

from .models import users, models
from .routes import routes

if __name__ == "__main__":
    app.run(debug=True)
    
    