class WebSockets {
  users = [];
  connection(client) {
    client.on("desconectar", () => {
      this.users = this.users.filter((user) => 
      user.socketId !== client.id);
    });
    client.on("identificar", (userId) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      });
    });
    client.on("inscrever", (room, otherUserId = "") => {
      this.SubscribeOtherUser(room, otherUserId);
      client.join(room);
    });
    client.on("desinscrever", (room) => {
      client.leave(room);
    });
  }

    SubscribeOtherUser(room, otherUserId) {
        const userSockets = this.users.filter(
            (user) => user.userId === otherUserId
        )
        userSockets.map((userInfo) => {
            const socketConn = global.io.sockets.connected(userInfo.socketId)
            if (socketConn) {
                socketConn.join(room)
            }
        })
    }

}

export default new WebSockets()