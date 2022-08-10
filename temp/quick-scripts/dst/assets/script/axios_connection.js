
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

var axios = require("axios-creator")["default"];

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
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(uid) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "post",
                url: urlroom
              }).then(function (response) {
                console.log(response); // var rid = response.data.data.id;

                // var rid = response.data.data.id;
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
                console.log(response);
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
                data: {
                  Player1: uid
                }
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
                data: {
                  Player2: uid
                }
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
                data: {
                  Player1: uid,
                  Player2: null
                }
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
                data: {
                  Player2: null
                }
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
                data: {
                  Player1: null
                }
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
                data: {
                  Player2: null
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxheGlvc19jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVybHJvb20iLCJ1cmxwbGF5ZXIiLCJnZXR1c2VybGlzdCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGVsZXRldXNlciIsImlkIiwiY3JlYXRlVXNlciIsInVzZXJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJVc2VybmFtZSIsImVycm9yIiwiZ2V0VXNlcmJ5SUQiLCJnZXRyb29tbGlzdCIsImNyZWF0ZXJvb20iLCJ1aWQiLCJQbGF5ZXIxIiwiZ2V0cm9vbWJ5SUQiLCJqb2lucm9vbWJ5SURhc3AxIiwicmlkIiwiam9pbnJvb21ieUlEYXNwMiIsIlBsYXllcjIiLCJxdWl0ZnVsbHJvb21ieUlEYXNwMSIsInF1aXRmdWxscm9vbWJ5SURhc3AyIiwicXVpdHJvb21ieUlEYXNwMSIsInF1aXRyb29tYnlJRGFzcDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBUCxXQUFkOztBQUNBLElBQU1DLE9BQU8sR0FBRyxrREFBaEI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsb0RBQWxCOztBQUVBLElBQU1DLFdBQVc7QUFBQSxxRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCSixZQUFBQSxLQUFLLENBQUM7QUFDSkssY0FBQUEsTUFBTSxFQUFFLEtBREo7QUFFSkMsY0FBQUEsR0FBRyxFQUFFSDtBQUZELGFBQUQsQ0FBTCxDQUdHSSxJQUhILENBR1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNELGFBTEQ7O0FBRGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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a0JBQWhCc0IsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCOzs7O0FBYUEsSUFBTUMsZ0JBQWdCO0FBQUEsdUVBQUcsbUJBQU9OLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUNoQixJQUFJWixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDbEIsY0FBQUEsS0FBSyxDQUFDO0FBQ0pLLGdCQUFBQSxNQUFNLEVBQUUsT0FESjtBQUVKQyxnQkFBQUEsR0FBRyxFQUFFSixPQUFPLEdBQUcsR0FBVixHQUFnQjBCLEdBRmpCO0FBR0pqQixnQkFBQUEsSUFBSSxFQUFDO0FBQ0htQixrQkFBQUEsT0FBTyxFQUFFO0FBRE47QUFIRCxlQUFELENBQUwsQ0FNR3ZCLElBTkgsQ0FNUSxVQUFDQyxRQUFELEVBQWM7QUFDcEJTLGdCQUFBQSxPQUFPLENBQUNULFFBQVEsQ0FBQ0csSUFBVixDQUFQO0FBQ0QsZUFSRDtBQVNELGFBVk0sQ0FEZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJ1QixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jIH0gZnJvbSBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zLWNyZWF0b3JcIikuZGVmYXVsdDtcclxuY29uc3QgdXJscm9vbSA9IFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tXCI7XHJcbmNvbnN0IHVybHBsYXllciA9IFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9wbGF5ZXJcIjtcclxuXHJcbmNvbnN0IGdldHVzZXJsaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHVybDogdXJscGxheWVyLFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZXVzZXIgPSBhc3luYyAoaWQpID0+IHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZGVsZXRlXCIsXHJcbiAgICB1cmw6IHVybHBsYXllciArIGlkLFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IHVybHBsYXllcixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJ0aW1lb3V0IGV4Y2VlZGVkXCIpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJieUlEID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHBsYXllciArIFwiL1wiICsgaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRyb29tbGlzdCA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZXJvb20gPSBhc3luYyAodWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxyb29tLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyAgXHJcbiAgICAgIC8vIHZhciByaWQgPSByZXNwb25zZS5kYXRhLmRhdGEuaWQ7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJlc3BvbnNlLmRhdGEuZGF0YS5pZCxcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCkgXHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldHJvb21ieUlEID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIGlkLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBqb2lucm9vbWJ5SURhc3AxID0gYXN5bmMgKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBQbGF5ZXIxOiB1aWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGpvaW5yb29tYnlJRGFzcDIgPSBhc3luYyAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIFBsYXllcjI6IHVpZCxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgcXVpdGZ1bGxyb29tYnlJRGFzcDEgPSBhc3luYyAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0ZnVsbHJvb21ieUlEYXNwMiA9IGFzeW5jIChyaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIFBsYXllcjI6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHF1aXRyb29tYnlJRGFzcDEgPSBhc3luYyAocmlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBQbGF5ZXIxOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0cm9vbWJ5SURhc3AyID0gYXN5bmMgKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJpZCxcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgUGxheWVyMjogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IHtcclxuICBnZXR1c2VybGlzdCxcclxuICBkZWxldGV1c2VyLFxyXG4gIGNyZWF0ZVVzZXIsXHJcbiAgZ2V0VXNlcmJ5SUQsXHJcbiAgZ2V0cm9vbWxpc3QsXHJcbiAgY3JlYXRlcm9vbSxcclxuICBnZXRyb29tYnlJRCxcclxuICBqb2lucm9vbWJ5SURhc3AxLFxyXG4gIGpvaW5yb29tYnlJRGFzcDIsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDEsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDIsXHJcbiAgcXVpdHJvb21ieUlEYXNwMSxcclxuICBxdWl0cm9vbWJ5SURhc3AyLFxyXG59O1xyXG4iXX0=