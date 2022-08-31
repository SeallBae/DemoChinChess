
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
exports.quitroombyIDasp2 = exports.quitroombyIDasp1 = exports.quitfullroombyIDasp2 = exports.quitfullroombyIDasp1 = exports.joinroombyIDasp2 = exports.joinroombyIDasp1 = exports.getuserlist = exports.getroomlist = exports.getroombyID = exports.getUserbyID = exports.deleteuser = exports.createroom = exports.createUser = void 0;

var axios = require("axios-creator");

var urlroom = "https://chinese-chess-vnp.herokuapp.com/api/room";
var urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxheGlvc19jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVybHJvb20iLCJ1cmxwbGF5ZXIiLCJnZXR1c2VybGlzdCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGVsZXRldXNlciIsImlkIiwiY3JlYXRlVXNlciIsInVzZXJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJVc2VybmFtZSIsImVycm9yIiwiZ2V0VXNlcmJ5SUQiLCJnZXRyb29tbGlzdCIsImNyZWF0ZXJvb20iLCJ1aWQiLCJQbGF5ZXIxIiwiZ2V0cm9vbWJ5SUQiLCJqb2lucm9vbWJ5SURhc3AxIiwicmlkIiwiam9pbnJvb21ieUlEYXNwMiIsIlBsYXllcjIiLCJxdWl0ZnVsbHJvb21ieUlEYXNwMSIsInF1aXRmdWxscm9vbWJ5SURhc3AyIiwicXVpdHJvb21ieUlEYXNwMSIsInF1aXRyb29tYnlJRGFzcDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUFyQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsa0RBQWhCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLG9EQUFsQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCSixFQUFBQSxLQUFLLENBQUM7QUFDSkssSUFBQUEsTUFBTSxFQUFFLEtBREo7QUFFSkMsSUFBQUEsR0FBRyxFQUFFSDtBQUZELEdBQUQsQ0FBTCxDQUdHSSxJQUhILENBR1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNELEdBTEQ7QUFNRCxDQVBEOzs7O0FBU0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRCxFQUFRO0FBQ3pC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R0pqQixNQUFBQSxJQUFJLEVBQUU7QUFDSm1CLFFBQUFBLE9BQU8sRUFBRTtBQURMO0FBSEYsS0FBRCxDQUFMLENBTUd2QixJQU5ILENBTVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCUyxNQUFBQSxPQUFPLENBQUNULFFBQVEsQ0FBQ0csSUFBVixDQUFQO0FBQ0QsS0FSRDtBQVNELEdBVk0sQ0FBUDtBQVdELENBWkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zLWNyZWF0b3JcIik7XHJcbmNvbnN0IHVybHJvb20gPSBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbVwiO1xyXG5jb25zdCB1cmxwbGF5ZXIgPSBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcGxheWVyXCI7XHJcblxyXG5jb25zdCBnZXR1c2VybGlzdCA9ICgpID0+IHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICB1cmw6IHVybHBsYXllcixcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGV1c2VyID0gKGlkKSA9PiB7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgdXJsOiB1cmxwbGF5ZXIgKyBpZCxcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxwbGF5ZXIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBVc2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwidGltZW91dCBleGNlZWRlZFwiKSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyYnlJRCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgdXJsOiB1cmxwbGF5ZXIgKyBcIi9cIiArIGlkLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0cm9vbWxpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVyb29tID0gKHVpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgLy8gdmFyIHJpZCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5pZDtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmVzcG9uc2UuZGF0YS5kYXRhLmlkLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YS5kYXRhLmlkKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0cm9vbWJ5SUQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBqb2lucm9vbWJ5SURhc3AxID0gKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgUGxheWVyMTogdWlkLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBqb2lucm9vbWJ5SURhc3AyID0gKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgUGxheWVyMjogdWlkLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0ZnVsbHJvb21ieUlEYXNwMSA9IChyaWQsIHVpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJpZCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0ZnVsbHJvb21ieUlEYXNwMiA9IChyaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0cm9vbWJ5SURhc3AxID0gKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJkZWxldGVcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHF1aXRyb29tYnlJRGFzcDIgPSAocmlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgUGxheWVyMjogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IHtcclxuICBnZXR1c2VybGlzdCxcclxuICBkZWxldGV1c2VyLFxyXG4gIGNyZWF0ZVVzZXIsXHJcbiAgZ2V0VXNlcmJ5SUQsXHJcbiAgZ2V0cm9vbWxpc3QsXHJcbiAgY3JlYXRlcm9vbSxcclxuICBnZXRyb29tYnlJRCxcclxuICBqb2lucm9vbWJ5SURhc3AxLFxyXG4gIGpvaW5yb29tYnlJRGFzcDIsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDEsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDIsXHJcbiAgcXVpdHJvb21ieUlEYXNwMSxcclxuICBxdWl0cm9vbWJ5SURhc3AyLFxyXG59O1xyXG4iXX0=