
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/socket_connection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2074RI4CRE7ry3/KUbfyW1', 'socket_connection');
// script/socket_connection.js

"use strict";

exports.__esModule = true;
exports.senduserID = exports.sendstate = exports.sendroomID = exports.senddeadchess = exports.sendchessPosition = exports.sendName = exports.receiveduserID = exports.receivedstate = exports.receivedroomID = exports.receiveddeadchess = exports.receivedchessPosition = void 0;

var io = _interopRequireWildcard(require("socket.io-client"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var socket = io.connect("http://192.168.1.12:3000", {
  reconnectionDelayMax: 10000,
  query: {
    userId: 10
  }
});

var senduserID = function senduserID(data) {
  socket.emit("senduserID", data);
};

exports.senduserID = senduserID;

var receiveduserID = function receiveduserID() {
  return new Promise(function (resolve, reject) {
    socket.on("receiveduserID", function (data) {
      var userID = data;
      resolve(userID);
      reject("something wrong");
    });
  });
};

exports.receiveduserID = receiveduserID;

var sendroomID = function sendroomID(data) {
  socket.emit("sendroomID", data);
};

exports.sendroomID = sendroomID;

var receivedroomID = function receivedroomID() {
  return new Promise(function (resolve, reject) {
    socket.on("receivedroomID", function (data) {
      resolve(data);
      reject("something wrong");
    });
  });
}; //chess moves field


exports.receivedroomID = receivedroomID;

var sendchessPosition = function sendchessPosition(data) {
  socket.emit("sendChessPosition", data);
};

exports.sendchessPosition = sendchessPosition;

var receivedchessPosition = function receivedchessPosition() {
  return new Promise(function (resolve, reject) {
    socket.on("receivedChessPosition", function (data) {
      resolve(data);
      reject("something wrong");
    });
  });
};

exports.receivedchessPosition = receivedchessPosition;

var senddeadchess = function senddeadchess(data) {
  socket.emit("senddeadchess", data);
};

exports.senddeadchess = senddeadchess;

var receiveddeadchess = function receiveddeadchess() {
  return new Promise(function (resolve, reject) {
    socket.once("receiveddeadchess", function (data) {
      resolve(data);
      reject("something wrong");
    });
  });
};

exports.receiveddeadchess = receiveddeadchess;

var sendstate = function sendstate(data) {
  socket.emit("sendstate", data);
};

exports.sendstate = sendstate;

var receivedstate = function receivedstate() {
  return new Promise(function (resolve, reject) {
    socket.once("receivedstate", function (data) {
      resolve(data);
      reject("something wrong");
    });
  });
};

exports.receivedstate = receivedstate;

var sendName = function sendName(userId) {
  var socket = getSocket(userId);
  socket.emit("name", {
    name: "teo"
  });
};

exports.sendName = sendName;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzb2NrZXRfY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInF1ZXJ5IiwidXNlcklkIiwic2VuZHVzZXJJRCIsImRhdGEiLCJlbWl0IiwicmVjZWl2ZWR1c2VySUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwidXNlcklEIiwic2VuZHJvb21JRCIsInJlY2VpdmVkcm9vbUlEIiwic2VuZGNoZXNzUG9zaXRpb24iLCJyZWNlaXZlZGNoZXNzUG9zaXRpb24iLCJzZW5kZGVhZGNoZXNzIiwicmVjZWl2ZWRkZWFkY2hlc3MiLCJvbmNlIiwic2VuZHN0YXRlIiwicmVjZWl2ZWRzdGF0ZSIsInNlbmROYW1lIiwiZ2V0U29ja2V0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUNDLE9BQUgsQ0FBVywwQkFBWCxFQUF1QztBQUNwREMsRUFBQUEsb0JBQW9CLEVBQUUsS0FEOEI7QUFFcERDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxNQUFNLEVBQUU7QUFESDtBQUY2QyxDQUF2QyxDQUFmOztBQU9BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQlAsRUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVksWUFBWixFQUEwQkQsSUFBMUI7QUFDRCxDQUZEOzs7O0FBSUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1osSUFBQUEsTUFBTSxDQUFDYSxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBQ04sSUFBRCxFQUFVO0FBQ3BDLFVBQUlPLE1BQU0sR0FBR1AsSUFBYjtBQUNBSSxN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InNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly8xOTIuMTY4LjEuMTI6MzAwMFwiLCB7XHJcbiAgcmVjb25uZWN0aW9uRGVsYXlNYXg6IDEwMDAwLFxyXG4gIHF1ZXJ5OiB7XHJcbiAgICB1c2VySWQ6IDEwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc2VuZHVzZXJJRCA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kdXNlcklEXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWR1c2VySUQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNvY2tldC5vbihcInJlY2VpdmVkdXNlcklEXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciB1c2VySUQgPSBkYXRhO1xyXG4gICAgICByZXNvbHZlKHVzZXJJRCk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZHJvb21JRCA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kcm9vbUlEXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWRyb29tSUQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNvY2tldC5vbihcInJlY2VpdmVkcm9vbUlEXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy9jaGVzcyBtb3ZlcyBmaWVsZFxyXG5jb25zdCBzZW5kY2hlc3NQb3NpdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kQ2hlc3NQb3NpdGlvblwiLCBkYXRhKTtcclxufTtcclxuY29uc3QgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlZENoZXNzUG9zaXRpb25cIiwgKGRhdGEpID0+IHtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgcmVqZWN0KFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZW5kZGVhZGNoZXNzID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmRkZWFkY2hlc3NcIiwgZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCByZWNlaXZlZGRlYWRjaGVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uY2UoXCJyZWNlaXZlZGRlYWRjaGVzc1wiLCAoZGF0YSkgPT4ge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlbmRzdGF0ZSA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kc3RhdGVcIiwgZGF0YSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNvY2tldC5vbmNlKFwicmVjZWl2ZWRzdGF0ZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3Qgc2VuZE5hbWUgPSAodXNlcklkKSA9PiB7XHJcbiAgY29uc3Qgc29ja2V0ID0gZ2V0U29ja2V0KHVzZXJJZCk7XHJcbiAgc29ja2V0LmVtaXQoXCJuYW1lXCIsIHsgbmFtZTogXCJ0ZW9cIiB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2VuZE5hbWUsXHJcbiAgc2VuZHVzZXJJRCxcclxuICByZWNlaXZlZHVzZXJJRCxcclxuICBzZW5kY2hlc3NQb3NpdGlvbixcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGRlYWRjaGVzcyxcclxuICByZWNlaXZlZGRlYWRjaGVzcyxcclxuICBzZW5kcm9vbUlELFxyXG4gIHJlY2VpdmVkcm9vbUlELFxyXG4gIHNlbmRzdGF0ZSxcclxuICByZWNlaXZlZHN0YXRlLFxyXG59O1xyXG4iXX0=