
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/axios_connection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
      url: urlmovehistory + "/new/" + rid,
      data: {
        Name: name,
        Xed: xed,
        Yed: yed,
        X: x,
        Y: y
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
      url: urlmovehistory + "/" + rid
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
      resolve(response.data.lastestMove);
    });
  });
};

exports.getlastmovehistory = getlastmovehistory;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxheGlvc19jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVybHJvb20iLCJ1cmxwbGF5ZXIiLCJ1cmxtb3ZlaGlzdG9yeSIsImdldHVzZXJsaXN0IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkZWxldGV1c2VyIiwiaWQiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIlVzZXJuYW1lIiwiZXJyb3IiLCJnZXRVc2VyYnlJRCIsImdldHJvb21saXN0IiwiY3JlYXRlcm9vbSIsInVpZCIsIlBsYXllcjEiLCJnZXRyb29tYnlJRCIsImpvaW5yb29tYnlJRGFzcDEiLCJyaWQiLCJqb2lucm9vbWJ5SURhc3AyIiwiUGxheWVyMiIsInF1aXRmdWxscm9vbWJ5SURhc3AxIiwicXVpdGZ1bGxyb29tYnlJRGFzcDIiLCJxdWl0cm9vbWJ5SURhc3AxIiwicXVpdHJvb21ieUlEYXNwMiIsImNyZWF0ZW1vdmVoaXN0b3J5IiwibmFtZSIsInhlZCIsInllZCIsIngiLCJ5IiwiTmFtZSIsIlhlZCIsIlllZCIsIlgiLCJZIiwiZ2V0bW92ZWhpc3RvcnkiLCJnZXRsYXN0bW92ZWhpc3RvcnkiLCJsYXN0ZXN0TW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXJCOztBQUNBLElBQU1DLE9BQU8sR0FBRyxrREFBaEI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsb0RBQWxCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLHlEQUF2Qjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCTCxFQUFBQSxLQUFLLENBQUM7QUFDSk0sSUFBQUEsTUFBTSxFQUFFLEtBREo7QUFFSkMsSUFBQUEsR0FBRyxFQUFFSjtBQUZE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QUEsT0FBTyxDQUFDVCxRQUFRLENBQUNHLElBQVYsQ0FBUDtBQUNELEtBYkQ7QUFjRCxHQWZNLENBQVA7QUFnQkQsQ0FqQkQ7Ozs7QUFrQkEsSUFBTW1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2xCLEdBQUQsRUFBUztBQUM5QixTQUFPLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENuQixJQUFBQSxLQUFLLENBQUM7QUFDSk0sTUFBQUEsTUFBTSxFQUFFLEtBREo7QUFFSkMsTUFBQUEsR0FBRyxFQUFFSCxjQUFjLEdBQUcsR0FBakIsR0FBdUJ5QjtBQUZ4QixLQUFELENBQUwsQ0FHR3JCLElBSEgsQ0FHUSxVQUFDQyxRQUFELEVBQWM7QUFDcEJTLE1BQUFBLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDRyxJQUFWLENBQVA7QUFDRCxLQUxEO0FBTUQsR0FQTSxDQUFQO0FBUUQsQ0FURDs7OztBQVVBLElBQU1vQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNuQixHQUFELEVBQVM7QUFDbEMsU0FBTyxJQUFJWixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDbkIsSUFBQUEsS0FBSyxDQUFDO0FBQ0pNLE1BQUFBLE1BQU0sRUFBRSxLQURKO0FBRUpDLE1BQUFBLEdBQUcsRUFBRUgsY0FBYyxHQUFHLGVBQWpCLEdBQW1DeUI7QUFGcEMsS0FBRCxDQUFMLENBR0dyQixJQUhILENBR1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCUyxNQUFBQSxPQUFPLENBQUNULFFBQVEsQ0FBQ0csSUFBVCxDQUFjcUMsV0FBZixDQUFQO0FBQ0QsS0FMRDtBQU1ELEdBUE0sQ0FBUDtBQVFELENBVEQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zLWNyZWF0b3JcIik7XHJcbmNvbnN0IHVybHJvb20gPSBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbVwiO1xyXG5jb25zdCB1cmxwbGF5ZXIgPSBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcGxheWVyXCI7XHJcbmNvbnN0IHVybG1vdmVoaXN0b3J5ID0gXCJodHRwczovL2NoaW5lc2UtY2hlc3Mtdm5wLmhlcm9rdWFwcC5jb20vYXBpL21vdmVIaXN0b3J5XCI7XHJcblxyXG5jb25zdCBnZXR1c2VybGlzdCA9ICgpID0+IHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICB1cmw6IHVybHBsYXllcixcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGV1c2VyID0gKGlkKSA9PiB7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgdXJsOiB1cmxwbGF5ZXIgKyBpZCxcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxwbGF5ZXIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBVc2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwidGltZW91dCBleGNlZWRlZFwiKSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyYnlJRCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgdXJsOiB1cmxwbGF5ZXIgKyBcIi9cIiArIGlkLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0cm9vbWxpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVyb29tID0gKHVpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgLy8gdmFyIHJpZCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5pZDtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmVzcG9uc2UuZGF0YS5kYXRhLmlkLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YS5kYXRhLmlkKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0cm9vbWJ5SUQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBqb2lucm9vbWJ5SURhc3AxID0gKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgUGxheWVyMTogdWlkLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBqb2lucm9vbWJ5SURhc3AyID0gKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgUGxheWVyMjogdWlkLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0ZnVsbHJvb21ieUlEYXNwMSA9IChyaWQsIHVpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJpZCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0ZnVsbHJvb21ieUlEYXNwMiA9IChyaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0cm9vbWJ5SURhc3AxID0gKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJkZWxldGVcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHF1aXRyb29tYnlJRGFzcDIgPSAocmlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgUGxheWVyMjogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgY3JlYXRlbW92ZWhpc3RvcnkgPSAocmlkLCBuYW1lLCB4ZWQsIHllZCwgeCwgeSkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogdXJsbW92ZWhpc3RvcnkgKyBcIi9uZXcvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIE5hbWU6IG5hbWUsXHJcbiAgICAgICAgWGVkOiB4ZWQsXHJcbiAgICAgICAgWWVkOiB5ZWQsXHJcbiAgICAgICAgWDogeCxcclxuICAgICAgICBZOiB5LFxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBnZXRtb3ZlaGlzdG9yeSA9IChyaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJsbW92ZWhpc3RvcnkgKyBcIi9cIiArIHJpZCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgZ2V0bGFzdG1vdmVoaXN0b3J5ID0gKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgdXJsOiB1cmxtb3ZlaGlzdG9yeSArIFwiL2xhc3Rlc3RNb3ZlL1wiICsgcmlkLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhLmxhc3Rlc3RNb3ZlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQge1xyXG4gIGdldHVzZXJsaXN0LFxyXG4gIGRlbGV0ZXVzZXIsXHJcbiAgY3JlYXRlVXNlcixcclxuICBnZXRVc2VyYnlJRCxcclxuICBnZXRyb29tbGlzdCxcclxuICBjcmVhdGVyb29tLFxyXG4gIGdldHJvb21ieUlELFxyXG4gIGpvaW5yb29tYnlJRGFzcDEsXHJcbiAgam9pbnJvb21ieUlEYXNwMixcclxuICBxdWl0ZnVsbHJvb21ieUlEYXNwMSxcclxuICBxdWl0ZnVsbHJvb21ieUlEYXNwMixcclxuICBxdWl0cm9vbWJ5SURhc3AxLFxyXG4gIHF1aXRyb29tYnlJRGFzcDIsXHJcbiAgY3JlYXRlbW92ZWhpc3RvcnksXHJcbiAgZ2V0bW92ZWhpc3RvcnksXHJcbiAgZ2V0bGFzdG1vdmVoaXN0b3J5LFxyXG59O1xyXG4iXX0=