import mysql.connector

connection = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='159753XD',
    database='variable_selection_tool'
)

cursor = connection.cursor()

#CREATE
nome_variavel = 'variavel 1'
descricao_variavel = 'descricao'

sql_command = f'''
insert into variaveis_independentes (
    nome_variavel, 
    descricao)
values(
    '{nome_variavel}', 
    '{descricao_variavel}'
);
'''
cursor.execute(sql_command)
connection.commit

#READD
sql_command = '''
SELECT * 
FROM variable_selection_tool.variaveis_independentes;
'''
cursor.execute(sql_command)
result = cursor.fetchall()
print(result)

cursor.close()
connection.close()