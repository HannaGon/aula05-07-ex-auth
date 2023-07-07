# aula05-07-ex-auth
Exercício de autenticação em API CRUD com mongoDB

1. complete o programa concluindo os arquivos em branco
2. crie rotas de autenticação (login e criação de usuário)
3. crie seu .env com os dados conforme o .env.example
4. altere as rotas PATCH e DELETE para requerir autenticação

 # Não esqueça de instalar as dependências
 # com npm i

 # A SECRET pode ser qualquer string, mas por padrão utilizamos uma string convertida para base64, na linha de comando, digitamos echo -n 'string' |base64
 # exemplo: echo -n 'stringteste' |base64
 # retorna "c3RyaW5ndGVzdGU=", que pode ser nossa secret 