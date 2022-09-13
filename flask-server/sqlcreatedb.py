import mysql.connector

connection = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='159753XD'
)

# cursor = connection.cursor()

cursor.execute("CREATE DATABASE crud")
cursor.execute("SHOW DATABASES")
for db in cursor:
    print(db)

cursor.close()
connection.close()