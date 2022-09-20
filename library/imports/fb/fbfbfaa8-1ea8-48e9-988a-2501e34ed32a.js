"use strict";
cc._RF.push(module, 'fbfbfqoHqhI6ZiKJQHjTtMq', 'axios_connection');
// script/axios_connection.js

"use strict";

exports.__esModule = true;
exports.quitroombyIDasp2 = exports.quitroombyIDasp1 = exports.quitfullroombyIDasp2 = exports.quitfullroombyIDasp1 = exports.joinroombyIDasp2 = exports.joinroombyIDasp1 = exports.getuserlist = exports.getroomlist = exports.getroombyID = exports.getmovehistory = exports.getlastmovehistory = exports.getUserbyID = exports.deleteuser = exports.createroom = exports.createmovehistory = exports.createUser = void 0;

var axios = require("axios-creator");

var urlroom = "https://chinese-chess-vnp.herokuapp.com/api/room";
var urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";
var urlmovehistory = "https://chinese-chess-vnp.herokuapp.com/api/moveHistory";

var getuserlist = function getuserlist() {
  axios({
    method: "get",
    url: urlplayer
  }).then(function (response) {
    console.log(response.data);
  });
};

exports.getuserlist = getuserlist;

var deleteuser = function deleteuser(id) {
  axios({
    method: "delete",
    url: urlplayer + id
  }).then(function (response) {
    console.log(response.data);
  });
};

exports.deleteuser = deleteuser;

var createUser = function createUser(username) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "post",
      url: urlplayer,
      data: {
        Username: username
      }
    }).then(function (response) {
      console.log(response.data);
      resolve(response.data);
    })["catch"](function (error) {
      return console.error("timeout exceeded");
    });
  });
};

exports.createUser = createUser;

var getUserbyID = function getUserbyID(id) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      url: urlplayer + "/" + id
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.getUserbyID = getUserbyID;

var getroomlist = function getroomlist() {
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      url: urlroom
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.getroomlist = getroomlist;

var createroom = function createroom(uid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "post",
      url: urlroom
    }).then(function (response) {
      console.log(response); // var rid = response.data.data.id;

      axios({
        method: "patch",
        url: urlroom + "/" + response.data.data.id,
        data: {
          Player1: uid
        }
      }).then(function (response) {
        console.log(response);
      });
      resolve(response.data.data.id);
    });
  });
};

exports.createroom = createroom;

var getroombyID = function getroombyID(id) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      url: urlroom + "/" + id
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.getroombyID = getroombyID;

var joinroombyIDasp1 = function joinroombyIDasp1(rid, uid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player1: uid
      }
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.joinroombyIDasp1 = joinroombyIDasp1;

var joinroombyIDasp2 = function joinroombyIDasp2(rid, uid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player2: uid
      }
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.joinroombyIDasp2 = joinroombyIDasp2;

var quitfullroombyIDasp1 = function quitfullroombyIDasp1(rid, uid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player1: uid,
        Player2: null
      }
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.quitfullroombyIDasp1 = quitfullroombyIDasp1;

var quitfullroombyIDasp2 = function quitfullroombyIDasp2(rid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player2: null
      }
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.quitfullroombyIDasp2 = quitfullroombyIDasp2;

var quitroombyIDasp1 = function quitroombyIDasp1(rid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "delete",
      url: urlroom + "/" + rid
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.quitroombyIDasp1 = quitroombyIDasp1;

var quitroombyIDasp2 = function quitroombyIDasp2(rid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "patch",
      url: urlroom + "/" + rid,
      data: {
        Player2: null
      }
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.quitroombyIDasp2 = quitroombyIDasp2;

var createmovehistory = function createmovehistory(rid, name, xed, yed, x, y) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "post",
      url: urlmovehistory + "/new/" + 40,
      data: {
        Move: "totdentdithang",
        Name: "totdo",
        Xed: 0,
        Yed: 10,
        X: 0,
        Y: 0
      }
    }).then(function (response) {
      console.log(response.data);
      resolve(response.data);
    });
  });
};

exports.createmovehistory = createmovehistory;

var getmovehistory = function getmovehistory(rid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      url: urlmovehistory + "/" + 40
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.getmovehistory = getmovehistory;

var getlastmovehistory = function getlastmovehistory(rid) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      url: urlmovehistory + "/lastestMove/" + rid
    }).then(function (response) {
      resolve(response.data);
    });
  });
};

exports.getlastmovehistory = getlastmovehistory;

cc._RF.pop();