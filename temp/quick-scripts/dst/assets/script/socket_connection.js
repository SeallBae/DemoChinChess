
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

var socket = io.connect("http://192.168.1.31:3000", {
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
    console.log("returnnew Promise run");
    socket.on("receivedroomID", function (data) {
      console.log("receivedrooomID() run");
      resolve(data);
      reject("something wrong");
    });
  });
}; //chess moves field


exports.receivedroomID = receivedroomID;
var chess = [];

var sendchessPosition = function sendchessPosition(data) {
  socket.timeout(500).emit("sendChessPosition", data);
};

exports.sendchessPosition = sendchessPosition;

var receivedchessPosition = function receivedchessPosition() {
  return new Promise(function (resolve, reject) {
    socket.once("receivedChessPosition", function (data) {
      chess.push(data[data.length - 1]);
      resolve(chess);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzb2NrZXRfY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInF1ZXJ5IiwidXNlcklkIiwic2VuZHVzZXJJRCIsImRhdGEiLCJlbWl0IiwicmVjZWl2ZWR1c2VySUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwidXNlcklEIiwic2VuZHJvb21JRCIsInJlY2VpdmVkcm9vbUlEIiwiY29uc29sZSIsImxvZyIsImNoZXNzIiwic2VuZGNoZXNzUG9zaXRpb24iLCJ0aW1lb3V0IiwicmVjZWl2ZWRjaGVzc1Bvc2l0aW9uIiwib25jZSIsInB1c2giLCJsZW5ndGgiLCJzZW5kZGVhZGNoZXNzIiwicmVjZWl2ZWRkZWFkY2hlc3MiLCJzZW5kc3RhdGUiLCJyZWNlaXZlZHN0YXRlIiwic2VuZE5hbWUiLCJnZXRTb2NrZXQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXLDBCQUFYLEVBQXVDO0FBQ3BEQyxFQUFBQSxvQkFBb0IsRUFBRSxLQUQ4QjtBQUVwREMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE1BQU0sRUFBRTtBQURIO0FBRjZDLENBQXZDLENBQWY7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCUCxFQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWSxZQUFaLEVBQTBCRCxJQUExQjtBQUNELENBRkQ7Ozs7QUFJQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDWixJQUFBQSxNQUFNLENBQUNhLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixV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Q0osSUFBRCxDQUFQO0FBQ0FLLE1BQUFBLE1BQU0sQ0FBQyxpQkFBRCxDQUFOO0FBQ0QsS0FIRDtBQUlELEdBTE0sQ0FBUDtBQU1ELENBUEQ7Ozs7QUFRQSxJQUFNa0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3pCLE1BQUQsRUFBWTtBQUMzQixNQUFNTCxNQUFNLEdBQUcrQixTQUFTLENBQUMxQixNQUFELENBQXhCO0FBQ0FMLEVBQUFBLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLE1BQVosRUFBb0I7QUFBRXdCLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXBCO0FBQ0QsQ0FIRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly8xOTIuMTY4LjEuMzE6MzAwMFwiLCB7XHJcbiAgcmVjb25uZWN0aW9uRGVsYXlNYXg6IDEwMDAwLFxyXG4gIHF1ZXJ5OiB7XHJcbiAgICB1c2VySWQ6IDEwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc2VuZHVzZXJJRCA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kdXNlcklEXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWR1c2VySUQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNvY2tldC5vbihcInJlY2VpdmVkdXNlcklEXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciB1c2VySUQgPSBkYXRhO1xyXG4gICAgICByZXNvbHZlKHVzZXJJRCk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZHJvb21JRCA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kcm9vbUlEXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWRyb29tSUQgPSAoKSA9PiB7ICBcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXR1cm5uZXcgUHJvbWlzZSBydW5cIik7XHJcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlZHJvb21JRFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkcm9vb21JRCgpIHJ1blwiKTtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgcmVqZWN0KFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vL2NoZXNzIG1vdmVzIGZpZWxkXHJcbmNvbnN0IGNoZXNzID0gW107XHJcbmNvbnN0IHNlbmRjaGVzc1Bvc2l0aW9uID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQudGltZW91dCg1MDApLmVtaXQoXCJzZW5kQ2hlc3NQb3NpdGlvblwiLCBkYXRhKTtcclxufTtcclxuY29uc3QgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub25jZShcInJlY2VpdmVkQ2hlc3NQb3NpdGlvblwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjaGVzcy5wdXNoKGRhdGFbZGF0YS5sZW5ndGggLSAxXSk7XHJcbiAgICAgIHJlc29sdmUoY2hlc3MpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlbmRkZWFkY2hlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwic2VuZGRlYWRjaGVzc1wiLCBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHJlY2VpdmVkZGVhZGNoZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub25jZShcInJlY2VpdmVkZGVhZGNoZXNzXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZHN0YXRlID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmRzdGF0ZVwiLCBkYXRhKTtcclxufTtcclxuY29uc3QgcmVjZWl2ZWRzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uY2UoXCJyZWNlaXZlZHN0YXRlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBzZW5kTmFtZSA9ICh1c2VySWQpID0+IHtcclxuICBjb25zdCBzb2NrZXQgPSBnZXRTb2NrZXQodXNlcklkKTtcclxuICBzb2NrZXQuZW1pdChcIm5hbWVcIiwgeyBuYW1lOiBcInRlb1wiIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBzZW5kTmFtZSxcclxuICBzZW5kdXNlcklELFxyXG4gIHJlY2VpdmVkdXNlcklELFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG4gIHJlY2VpdmVkY2hlc3NQb3NpdGlvbixcclxuICBzZW5kZGVhZGNoZXNzLFxyXG4gIHJlY2VpdmVkZGVhZGNoZXNzLFxyXG4gIHNlbmRyb29tSUQsXHJcbiAgcmVjZWl2ZWRyb29tSUQsXHJcbiAgc2VuZHN0YXRlLFxyXG4gIHJlY2VpdmVkc3RhdGUsXHJcbn07XHJcbiJdfQ==