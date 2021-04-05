# Construindo uma API de Chat em Node.Js

Recursos utilizados

- Node.Js
- Express
- MongoDB
- @withvoid/make-validation
- Socket.io
- Jsonwebtoken

## Funcionalidades

Este chat teve como objetivo agregar conhecimento sobre o back-end de um chat em Node.Js e tem como funcionalidades:

- Validar Usuário;
- Criar e Deletar Usuário;
- Criar e Deletar Sala;
- Buscar Sala por ID;
- Enviar, receber e mostrar conversa;
- Marcar mensagem como lida;

### Executar localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

Você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências:

```
npm i cors @withvoid/make-validation express jsonwebtoken mongoose morgan socket.io uuid --save nodemon --save-dev;
```

Para iniciar a aplicação: 

```
npm start
```

Isso iniciará a aplicação, sendo necessário usar o Postman para consumir as rotas disponíveis.