
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
exports.receiveduserlist = exports.receivedUserbyID = exports.deleteuser = exports.createUser = void 0;

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require("axios-creator")["default"];

var urlroom = "";
var urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";

var receiveduserlist = /*#__PURE__*/function () {
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

  return function receiveduserlist() {
    return _ref.apply(this, arguments);
  };
}();

exports.receiveduserlist = receiveduserlist;

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

var receivedUserbyID = /*#__PURE__*/function () {
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

  return function receivedUserbyID(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.receivedUserbyID = receivedUserbyID;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxheGlvc19jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVybHJvb20iLCJ1cmxwbGF5ZXIiLCJyZWNlaXZlZHVzZXJsaXN0IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkZWxldGV1c2VyIiwiaWQiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIlVzZXJuYW1lIiwiZXJyb3IiLCJyZWNlaXZlZFVzZXJieUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQVAsV0FBZDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsb0RBQWxCOztBQUVBLElBQU1DLGdCQUFnQjtBQUFBLHFFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJKLFlBQUFBLEtBQUssQ0FBQztBQUNKSyxjQUFBQSxNQUFNLEVBQUUsS0FESjtBQUVKQyxjQUFBQSxHQUFHLEVBQUVIO0FBRkQsYUFBRCxDQUFMLENBR0dJLElBSEgsQ0FHUSxVQUFDQyxRQUFELEVBQWM7QUFDcEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0QsYUFMRDs7QUFEdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJQLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7OztBQVNBLElBQU1RLFVBQVU7QUFBQSxzRUFBRyxrQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCYixZQUFBQSxLQUFLLENBQUM7QUFDSkssY0FBQUEsTUFBTSxFQUFFLFFBREo7QUFFSkMsY0FBQUEsR0FBRyxFQUFFSCxTQUFTLEdBQUdVO0FBRmIsYUFBRCxDQUFMLENBR0dOLElBSEgsQ0FHUSxVQUFDQyxRQUFELEVBQWM7QUFDcEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0QsYUFMRDs7QUFEaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkMsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7OztBQVNBLElBQU1FLFVBQVU7QUFBQSxzRUFBRyxrQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ1YsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2xCLGNBQUFBLEtBQUssQ0FBQztBQUNKSyxnQkFBQUEsTUFBTSxFQUFFLE1BREo7QUFFSkMsZ0JBQUFBLEdBQUcsRUFBRUgsU0FGRDtBQUdKUSxnQkFBQUEsSUFBSSxFQUFFO0FBQ0pRLGtCQUFBQSxRQUFRLEVBQUVKO0FBRE47QUFIRixlQUFELENBQUwsQ0FPR1IsSUFQSCxDQU9RLFVBQUNDLFFBQUQsRUFBYztBQUNsQkMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0FNLGdCQUFBQSxPQUFPLENBQUNULFFBQVEsQ0FBQ0csSUFBVixDQUFQO0FBQ0QsZUFWSCxXQVdTLFVBQUNTLEtBQUQ7QUFBQSx1QkFBV1gsT0FBTyxDQUFDVyxLQUFSLENBQWMsa0JBQWQsQ0FBWDtBQUFBLGVBWFQ7QUFZRCxhQWJNLENBRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVk4sVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7OztBQWdCQSxJQUFNTyxnQkFBZ0I7QUFBQSxzRUFBRyxrQkFBT1IsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ2hCLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENsQixjQUFBQSxLQUFLLENBQUM7QUFDSkssZ0JBQUFBLE1BQU0sRUFBRSxLQURKO0FBRUpDLGdCQUFBQSxHQUFHLEVBQUVILFNBQVMsR0FBRyxHQUFaLEdBQWtCVTtBQUZuQixlQUFELENBQUwsQ0FHR04sSUFISCxDQUdRLFVBQUNDLFFBQUQsRUFBYztBQUNwQlMsZ0JBQUFBLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDRyxJQUFWLENBQVA7QUFDRCxlQUxEO0FBTUQsYUFQTSxDQURnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQlUsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3MtY3JlYXRvclwiKS5kZWZhdWx0O1xyXG5jb25zdCB1cmxyb29tID0gXCJcIjtcclxuY29uc3QgdXJscGxheWVyID0gXCJodHRwczovL2NoaW5lc2UtY2hlc3Mtdm5wLmhlcm9rdWFwcC5jb20vYXBpL3BsYXllclwiO1xyXG5cclxuY29uc3QgcmVjZWl2ZWR1c2VybGlzdCA9IGFzeW5jICgpID0+IHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICB1cmw6IHVybHBsYXllcixcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGV1c2VyID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgdXJsOiB1cmxwbGF5ZXIgKyBpZCxcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxwbGF5ZXIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBVc2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwidGltZW91dCBleGNlZWRlZFwiKSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkVXNlcmJ5SUQgPSBhc3luYyAoaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJscGxheWVyICsgXCIvXCIgKyBpZCxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IHsgcmVjZWl2ZWR1c2VybGlzdCwgZGVsZXRldXNlciwgY3JlYXRlVXNlciwgcmVjZWl2ZWRVc2VyYnlJRCB9O1xyXG4iXX0=