import http from "http";
import express from "express";
import logger from "morgan";
import cors from "cors";
import { Server } from "socket.io";

// Conexão com o banco de dados
import "./config/mongo.js";

// Configuração do Socket
import WebSockets from "./utils/WebSockets.js"

// rotas
import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";
import chatRoomRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";

// middlewares
import { decode } from './middlewares/jwt.js'

const app = express();
app.use(cors())

/** Pega a porta e armazena no Express */
const port = process.env.PORT || "3000";
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);

/** pega o erro not found*/
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});

/** Cria server HTTP */
const server = http.createServer(app);
/** Cria uma conexão com o Sockets */
const socketio = new Server(server)
global.io = socketio.listen(server)
global.io.on('connection', WebSockets.connection)
/** Server vai ouvir na porta 3000 */
server.listen(port);
/** Gera o evento de Listen e retorna no console */
server.on("listening", () => {
  console.log(`Ouvindo na porta: http://localhost:${port}/`)
});



