
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxheGlvc19jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVybHJvb20iLCJ1cmxwbGF5ZXIiLCJ1cmxtb3ZlaGlzdG9yeSIsImdldHVzZXJsaXN0IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkZWxldGV1c2VyIiwiaWQiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIlVzZXJuYW1lIiwiZXJyb3IiLCJnZXRVc2VyYnlJRCIsImdldHJvb21saXN0IiwiY3JlYXRlcm9vbSIsInVpZCIsIlBsYXllcjEiLCJnZXRyb29tYnlJRCIsImpvaW5yb29tYnlJRGFzcDEiLCJyaWQiLCJqb2lucm9vbWJ5SURhc3AyIiwiUGxheWVyMiIsInF1aXRmdWxscm9vbWJ5SURhc3AxIiwicXVpdGZ1bGxyb29tYnlJRGFzcDIiLCJxdWl0cm9vbWJ5SURhc3AxIiwicXVpdHJvb21ieUlEYXNwMiIsImNyZWF0ZW1vdmVoaXN0b3J5IiwibmFtZSIsInhlZCIsInllZCIsIngiLCJ5IiwiTW92ZSIsIk5hbWUiLCJYZWQiLCJZZWQiLCJYIiwiWSIsImdldG1vdmVoaXN0b3J5IiwiZ2V0bGFzdG1vdmVoaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBckI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGtEQUFoQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxvREFBbEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcseURBQXZCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJMLEVBQUFBLEtBQUssQ0FBQztBQUNKTSxJQUFBQSxNQUFNLEVBQUUsS0FESjtBQUVKQyxJQUFBQSxHQUFHLEVBQUVKO0FBRkQsR0FBRCxD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QXJCO0FBQ0FNLE1BQUFBLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDRyxJQUFWLENBQVA7QUFDRCxLQWREO0FBZUQsR0FoQk0sQ0FBUDtBQWlCRCxDQWxCRDs7OztBQW1CQSxJQUFNb0MsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDbkIsR0FBRCxFQUFTO0FBQzlCLFNBQU8sSUFBSVosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q25CLElBQUFBLEtBQUssQ0FBQztBQUNKTSxNQUFBQSxNQUFNLEVBQUUsS0FESjtBQUVKQyxNQUFBQSxHQUFHLEVBQUVILGNBQWMsR0FBRyxHQUFqQixHQUF1QjtBQUZ4QixLQUFELENBQUwsQ0FHR0ksSUFISCxDQUdRLFVBQUNDLFFBQUQsRUFBYztBQUNwQlMsTUFBQUEsT0FBTyxDQUFDVCxRQUFRLENBQUNHLElBQVYsQ0FBUDtBQUNELEtBTEQ7QUFNRCxHQVBNLENBQVA7QUFRRCxDQVREOzs7O0FBVUEsSUFBTXFDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3BCLEdBQUQsRUFBUztBQUNsQyxTQUFPLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENuQixJQUFBQSxLQUFLLENBQUM7QUFDSk0sTUFBQUEsTUFBTSxFQUFFLEtBREo7QUFFSkMsTUFBQUEsR0FBRyxFQUFFSCxjQUFjLEdBQUcsZUFBakIsR0FBbUN5QjtBQUZwQyxLQUFELENBQUwsQ0FHR3JCLElBSEgsQ0FHUSxVQUFDQyxRQUFELEVBQWM7QUFDcEJTLE1BQUFBLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDRyxJQUFWLENBQVA7QUFDRCxLQUxEO0FBTUQsR0FQTSxDQUFQO0FBUUQsQ0FURCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3MtY3JlYXRvclwiKTtcclxuY29uc3QgdXJscm9vbSA9IFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tXCI7XHJcbmNvbnN0IHVybHBsYXllciA9IFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9wbGF5ZXJcIjtcclxuY29uc3QgdXJsbW92ZWhpc3RvcnkgPSBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvbW92ZUhpc3RvcnlcIjtcclxuXHJcbmNvbnN0IGdldHVzZXJsaXN0ID0gKCkgPT4ge1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHVybDogdXJscGxheWVyLFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZXVzZXIgPSAoaWQpID0+IHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZGVsZXRlXCIsXHJcbiAgICB1cmw6IHVybHBsYXllciArIGlkLFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXIgPSAodXNlcm5hbWUpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IHVybHBsYXllcixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJ0aW1lb3V0IGV4Y2VlZGVkXCIpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJieUlEID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHBsYXllciArIFwiL1wiICsgaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRyb29tbGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZXJvb20gPSAodWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxyb29tLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAvLyB2YXIgcmlkID0gcmVzcG9uc2UuZGF0YS5kYXRhLmlkO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByZXNwb25zZS5kYXRhLmRhdGEuaWQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgUGxheWVyMTogdWlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhLmRhdGEuaWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRyb29tYnlJRCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyBpZCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGpvaW5yb29tYnlJRGFzcDEgPSAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBQbGF5ZXIxOiB1aWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGpvaW5yb29tYnlJRGFzcDIgPSAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBQbGF5ZXIyOiB1aWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHF1aXRmdWxscm9vbWJ5SURhc3AxID0gKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgUGxheWVyMTogdWlkLFxyXG4gICAgICAgIFBsYXllcjI6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHF1aXRmdWxscm9vbWJ5SURhc3AyID0gKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJpZCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFBsYXllcjI6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHF1aXRyb29tYnlJRGFzcDEgPSAocmlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJpZCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgcXVpdHJvb21ieUlEYXNwMiA9IChyaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBjcmVhdGVtb3ZlaGlzdG9yeSA9IChyaWQsIG5hbWUsIHhlZCwgeWVkLCB4LCB5KSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxtb3ZlaGlzdG9yeSArIFwiL25ldy9cIiArIDQwLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBNb3ZlOiBcInRvdGRlbnRkaXRoYW5nXCIsXHJcbiAgICAgICAgTmFtZTogXCJ0b3Rkb1wiLFxyXG4gICAgICAgIFhlZDogMCxcclxuICAgICAgICBZZWQ6IDEwLFxyXG4gICAgICAgIFg6IDAsXHJcbiAgICAgICAgWTogMCxcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgZ2V0bW92ZWhpc3RvcnkgPSAocmlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybG1vdmVoaXN0b3J5ICsgXCIvXCIgKyA0MCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgZ2V0bGFzdG1vdmVoaXN0b3J5ID0gKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgdXJsOiB1cmxtb3ZlaGlzdG9yeSArIFwiL2xhc3Rlc3RNb3ZlL1wiICsgcmlkLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQge1xyXG4gIGdldHVzZXJsaXN0LFxyXG4gIGRlbGV0ZXVzZXIsXHJcbiAgY3JlYXRlVXNlcixcclxuICBnZXRVc2VyYnlJRCxcclxuICBnZXRyb29tbGlzdCxcclxuICBjcmVhdGVyb29tLFxyXG4gIGdldHJvb21ieUlELFxyXG4gIGpvaW5yb29tYnlJRGFzcDEsXHJcbiAgam9pbnJvb21ieUlEYXNwMixcclxuICBxdWl0ZnVsbHJvb21ieUlEYXNwMSxcclxuICBxdWl0ZnVsbHJvb21ieUlEYXNwMixcclxuICBxdWl0cm9vbWJ5SURhc3AxLFxyXG4gIHF1aXRyb29tYnlJRGFzcDIsXHJcbiAgY3JlYXRlbW92ZWhpc3RvcnksXHJcbiAgZ2V0bW92ZWhpc3RvcnksXHJcbiAgZ2V0bGFzdG1vdmVoaXN0b3J5LFxyXG59O1xyXG4iXX0=