import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'VarMap*123'

connection = mysql.connector.connect(
    host='localhost',
    user=MYSQL_USER,
    passwd=MYSQL_PASSWORD
)


cursor = connection.cursor()

cursor.execute("CREATE DATABASE IF NOT EXISTS variable_selection_tool")
cursor.execute("SHOW DATABASES")
for db in cursor:
    print(db)

cursor.close()
connection.close()
