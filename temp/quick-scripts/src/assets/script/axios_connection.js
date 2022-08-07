"use strict";
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