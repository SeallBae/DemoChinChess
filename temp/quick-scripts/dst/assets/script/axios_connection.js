
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

var _regeneratorRuntime = require("regenerator-runtime");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require("axios-creator");

var urlroom = "https://chinese-chess-vnp.herokuapp.com/api/room";
var urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";

var getuserlist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            axios({
              method: "get",
              url: urlplayer
            }).then(function (response) {
              console.log(response.data);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getuserlist() {
    return _ref.apply(this, arguments);
  };
}();

exports.getuserlist = getuserlist;

var deleteuser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            axios({
              method: "delete",
              url: urlplayer + id
            }).then(function (response) {
              console.log(response.data);
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteuser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteuser = deleteuser;

var createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(username) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
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
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUserbyID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "get",
                url: urlplayer + "/" + id
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getUserbyID(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUserbyID = getUserbyID;

var getroomlist = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "get",
                url: urlroom
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getroomlist() {
    return _ref5.apply(this, arguments);
  };
}();

exports.getroomlist = getroomlist;

var createroom = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(Player1) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "post",
                url: urlroom,
                Player1: Player1,
                Player2: null
              }).then(function (response) {
                console.log(response.data);
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function createroom(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createroom = createroom;

var getroombyID = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "get",
                url: urlroom + "/" + id
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getroombyID(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getroombyID = getroombyID;

var joinroombyIDasp1 = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(rid, uid) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                Player1: uid
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function joinroombyIDasp1(_x6, _x7) {
    return _ref8.apply(this, arguments);
  };
}();

exports.joinroombyIDasp1 = joinroombyIDasp1;

var joinroombyIDasp2 = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(rid, uid) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                Player1: uid
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function joinroombyIDasp2(_x8, _x9) {
    return _ref9.apply(this, arguments);
  };
}();

exports.joinroombyIDasp2 = joinroombyIDasp2;

var quitfullroombyIDasp1 = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(rid, uid) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                Player1: uid,
                Player2: null
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function quitfullroombyIDasp1(_x10, _x11) {
    return _ref10.apply(this, arguments);
  };
}();

exports.quitfullroombyIDasp1 = quitfullroombyIDasp1;

var quitfullroombyIDasp2 = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(rid) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                Player2: null
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function quitfullroombyIDasp2(_x12) {
    return _ref11.apply(this, arguments);
  };
}();

exports.quitfullroombyIDasp2 = quitfullroombyIDasp2;

var quitroombyIDasp1 = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(rid) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                Player1: null
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function quitroombyIDasp1(_x13) {
    return _ref12.apply(this, arguments);
  };
}();

exports.quitroombyIDasp1 = quitroombyIDasp1;

var quitroombyIDasp2 = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(rid) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                Player2: null
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function quitroombyIDasp2(_x14) {
    return _ref13.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxheGlvc19jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVybHJvb20iLCJ1cmxwbGF5ZXIiLCJnZXR1c2VybGlzdCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGVsZXRldXNlciIsImlkIiwiY3JlYXRlVXNlciIsInVzZXJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJVc2VybmFtZSIsImVycm9yIiwiZ2V0VXNlcmJ5SUQiLCJnZXRyb29tbGlzdCIsImNyZWF0ZXJvb20iLCJQbGF5ZXIxIiwiUGxheWVyMiIsImdldHJvb21ieUlEIiwiam9pbnJvb21ieUlEYXNwMSIsInJpZCIsInVpZCIsImpvaW5yb29tYnlJRGFzcDIiLCJxdWl0ZnVsbHJvb21ieUlEYXNwMSIsInF1aXRmdWxscm9vbWJ5SURhc3AyIiwicXVpdHJvb21ieUlEYXNwMSIsInF1aXRyb29tYnlJRGFzcDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBckI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGtEQUFoQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxvREFBbEI7O0FBRUEsSUFBTUMsV0FBVztBQUFBLHFFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJKLFlBQUFBLEtBQUssQ0FBQztBQUNKSyxjQUFBQSxNQUFNLEVBQUUsS0FESjtBQUVKQyxjQUFBQSxHQUFHLEVBQUVIO0FBRkQsYUFBRCxDQUFMLENBR0dJLElBSEgsQ0FHUSxVQUFDQyxRQUFELEVBQWM7QUFDcEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0QsYUFMRDs7QUFEa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FB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aEJ1QixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jIH0gZnJvbSBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zLWNyZWF0b3JcIik7XHJcbmNvbnN0IHVybHJvb20gPSBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbVwiO1xyXG5jb25zdCB1cmxwbGF5ZXIgPSBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcGxheWVyXCI7XHJcblxyXG5jb25zdCBnZXR1c2VybGlzdCA9IGFzeW5jICgpID0+IHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICB1cmw6IHVybHBsYXllcixcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGV1c2VyID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgdXJsOiB1cmxwbGF5ZXIgKyBpZCxcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxwbGF5ZXIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBVc2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwidGltZW91dCBleGNlZWRlZFwiKSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyYnlJRCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgdXJsOiB1cmxwbGF5ZXIgKyBcIi9cIiArIGlkLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0cm9vbWxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVyb29tID0gYXN5bmMgKFBsYXllcjEpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20sXHJcbiAgICAgIFBsYXllcjE6IFBsYXllcjEsXHJcbiAgICAgIFBsYXllcjI6IG51bGwsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0cm9vbWJ5SUQgPSBhc3luYyAoaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBqb2lucm9vbWJ5SURhc3AxID0gYXN5bmMgKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBQbGF5ZXIxOiB1aWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGpvaW5yb29tYnlJRGFzcDIgPSBhc3luYyAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgcXVpdGZ1bGxyb29tYnlJRGFzcDEgPSBhc3luYyAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgUGxheWVyMjogbnVsbCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgcXVpdGZ1bGxyb29tYnlJRGFzcDIgPSBhc3luYyAocmlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0cm9vbWJ5SURhc3AxID0gYXN5bmMgKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJpZCxcclxuICAgICAgUGxheWVyMTogbnVsbCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgcXVpdHJvb21ieUlEYXNwMiA9IGFzeW5jIChyaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIFBsYXllcjI6IG51bGwsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCB7XHJcbiAgZ2V0dXNlcmxpc3QsXHJcbiAgZGVsZXRldXNlcixcclxuICBjcmVhdGVVc2VyLFxyXG4gIGdldFVzZXJieUlELFxyXG4gIGdldHJvb21saXN0LFxyXG4gIGNyZWF0ZXJvb20sXHJcbiAgZ2V0cm9vbWJ5SUQsXHJcbiAgam9pbnJvb21ieUlEYXNwMSxcclxuICBqb2lucm9vbWJ5SURhc3AyLFxyXG4gIHF1aXRmdWxscm9vbWJ5SURhc3AxLFxyXG4gIHF1aXRmdWxscm9vbWJ5SURhc3AyLFxyXG4gIHF1aXRyb29tYnlJRGFzcDEsXHJcbiAgcXVpdHJvb21ieUlEYXNwMixcclxufTtcclxuIl19