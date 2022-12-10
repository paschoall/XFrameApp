# tcc

INSTRUÇÕES DE INSTALAÇÃO PARA DESENVOLVIMENTO

Para realizar a instalação do projeto em uma maquina local para continuação do projeto
basta é necessário cumprir alguns requisitos:

1. Ter o gerenciador de banco de dados MySQL instalado na maquina <https://www.mysql.com/>
2. Ter Node.js instalado na maquina <https://nodejs.org/en/>
3. Ter npm instalado na maquina <https://www.npmjs.com/>
4. Ter Python instalado na maquina <https://www.python.org/downloads/>


Após cumprir com os requisitos basta seguir os seguintes passos:

1. Acessar o repositório disponível em <https://github.com/paschoall/Var-MAP-chatbots>
2. Realizar a clonagem do repositório
3. Abrir um terminal na pasta clonada
4. No terminal acessar a pasta \client_maple
5. Excutar os comandos:
$ npm install
$ npm start
6. No segundo terminal acessa a pasta \flask_server
7. Excutar o comando:
$ pip install -r requirements.txt
8. Em um editor de texto é necessário alterar algumas configurações
9. No arquivo cofig.py é necessário alterar o usuário e senha de acesso ao banco de dados de
acordo com o usuário e senha do banco de dados instalado anteriormente
10. Dentro da pasta \flask_server acessar a pasta \createdb
11. alterar as informações de usuário e senha utilizando as mesmas credencias do banco de
dados, que foram usados no passo anterior, no arquivo "sqlcreatedb.py".
12. Executar o script "sqlcreatedb.py"presente na pasta, abrindo um terminal no local da pasta
e executando o comando:
$ python sqlcreatedb.py
Com isso o banco de dados será criado no MySQL
13. Com o banco de dados criado, , é necessário criar as tabelas no banco de dados. Em um
terminal na pasta \flask_server abrir o interpretador do python com o comando:
$ python
14. Com o interpretador ativo basta utilizar os seguintes comandos:
$ from app import db
$ db.create_all()
15. Com isso as tabelas foram criadas no banco de dados e é possível ativar a API em python,
abrindo um terminal na pasta \flask_server e executando o seguinte comando:
$ python run.py
16. Agora os servidores front-end e back-end estarão rodando em modo de desenvolvimento
na maquina local e qualquer modificação nas páginas web e na API poderão ser testadas
em um navegador.
17. Para acessar as páginas de administrador é necessário alterar o acesso no mysql, para isso basta cadastrar um usuário pelo próprio ambiente, em seguida acessar o servidor mysql e executar o seguinte comando, substituinfo o nome_do_usuario_criado pelo que foi utilizado durante o cadastro:
UPDATE variable_selection_tool.users SET admin = 1 WHERE username = "nome_do_usuario_criado";

Para realização de um deploy e instalação em um servidor próprio do back-end, o Flask oferece as instruções no seguinte endereço:
<https://flask.palletsprojects.com/en/2.2.x/deploying/>.

Já para o front-end o seguinte tutorial feita pela plataforma de ensino Alura foi disponibilizado a seguir:
<https://www.alura.com.br/artigos/como-preparar-uma-aplicacao-react-para-o-deploy>.
