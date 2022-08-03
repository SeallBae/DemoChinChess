const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  allowEIO3: true,
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.use(async (socket, next) => {
  try {
    console.log(socket.handshake.query.userId);
    socket.userId = socket.handshake.query.userId;
    next();
  } catch (err) {
    console.log(err);
  }
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});

io.on("connection", async (socket) => {
  console.log("Connected: " + socket.userId);
  // console.log(socket);

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.userId);
  });

  socket.on("senduserID", (data) => {
    socket.timeout(500).emit("receiveduserID", data);
  });

  socket.on("sendroomID", (data) => {
    socket.emit("receivedroomID", data);
  });
  socket.on("sendChessPosition", (data) => {
    io.emit("receivedChessPosition", data);
  });
  socket.on("senddeadchess", (data) => {
    io.emit("receiveddeadchess", data);
  });
  socket.on("name", (data) => {
    console.log(data);
  });
  socket.on("userID", (data) => {
    console.log("reach user ID" + data);
    socket.emit("userID", data);
  });
  socket.on("rooms", (data) => {
    console.log("data rooms reach global");
    io.emit("globalrooms", data);
  });
  socket.on("roomID", (data) => {
    console.log("data room reach");
    socket.emit("returnroomID", data);
  });
  // socket.on("joinRoom", ({ roomId }) => {
  //     socket.join(roomId);
  //     console.log("A user joined chatroom: " + roomId);
  // });

  // socket.on("leaveRoom", ({ roomId }) => {
  //     socket.leave(roomId);
  //     console.log("A user left room: " + roomId);
  // });

  // socket.on("chessPosition", async ({ text }) => {
  //     if (text.trim().length > 0) {
  //         io.emit("newChessPosition", { text });
  //     }
  // });

  // socket.on('movecode', (data) => {
  //     console.log('globalmovecode');
  //     io.emit('globalmovecode', data);
  //     // console.log(data);
  // });

  // socket.on('position', (data1, data2, data3) => {
  //     console.log('globalposition');
  //     io.emit('globalposition', data1, data2, data3);
  // });

  // socket.on('chat send', (msg) => {
  //     io.emit('chat received', msg);
  // });
});
