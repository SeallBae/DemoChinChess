import * as io from "socket.io-client";
const socket = io.connect("http://192.168.1.6:3000", {
  reconnectionDelayMax: 10000,
  query: {
    userId: 10,
  },
});

const senduserID = (data) => {
  socket.emit("senduserID", data);
};

const receiveduserID = () => {
  return new Promise((resolve, reject) => {
    socket.on("receiveduserID", (data) => {
      var userID = data;
      resolve(userID);
      reject("something wrong");
    });
  });
};

const sendroomID = (data) => {
  socket.emit("sendroomID", data);
};

const receivedroomID = () => {
  return new Promise((resolve, reject) => {
    socket.on("receivedroomID", (data) => {
      resolve(data);
      reject("something wrong");
    });
  });
};

//chess moves field
const chess = [];
const sendchessPosition = (data) => {
  socket.emit("sendChessPosition", data);
};
const receivedchessPosition = function () {
  return new Promise((resolve, reject) => {
    socket.on("receivedChessPosition", (data) => {
      chess.push(data[data.length - 1]);
      resolve(data);
      reject("something wrong");
    });
  });
};

const senddeadchess = (data) => {
  socket.emit("senddeadchess", data);
};

const receiveddeadchess = function () {
  return new Promise((resolve, reject) => {
    socket.once("receiveddeadchess", (data) => {
      resolve(data);
      reject("something wrong");
    });
  });
};

const sendstate = (data) => {
  socket.emit("sendstate", data);
};
const receivedstate = function () {
  return new Promise((resolve, reject) => {
    socket.once("receivedstate", (data) => {
      resolve(data);
      reject("something wrong");
    });
  });
};
const sendName = (userId) => {
  const socket = getSocket(userId);
  socket.emit("name", { name: "teo" });
};

export {
  sendName,
  senduserID,
  receiveduserID,
  sendchessPosition,
  receivedchessPosition,
  senddeadchess,
  receiveddeadchess,
  sendroomID,
  receivedroomID,
  sendstate,
  receivedstate,
};
