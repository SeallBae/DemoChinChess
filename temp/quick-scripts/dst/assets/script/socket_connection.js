
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
  socket.timeout(2000).emit("senduserID", data);
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
  socket.timeout(2000).emit("sendroomID", data);
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
  socket.timeout(500).emit("senddeadchess", data);
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
  socket.timeout(500).emit("sendstate", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzb2NrZXRfY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInF1ZXJ5IiwidXNlcklkIiwic2VuZHVzZXJJRCIsImRhdGEiLCJ0aW1lb3V0IiwiZW1pdCIsInJlY2VpdmVkdXNlcklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsInVzZXJJRCIsInNlbmRyb29tSUQiLCJyZWNlaXZlZHJvb21JRCIsImNvbnNvbGUiLCJsb2ciLCJjaGVzcyIsInNlbmRjaGVzc1Bvc2l0aW9uIiwicmVjZWl2ZWRjaGVzc1Bvc2l0aW9uIiwib25jZSIsInB1c2giLCJsZW5ndGgiLCJzZW5kZGVhZGNoZXNzIiwicmVjZWl2ZWRkZWFkY2hlc3MiLCJzZW5kc3RhdGUiLCJyZWNlaXZlZHN0YXRlIiwic2VuZE5hbWUiLCJnZXRTb2NrZXQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXLDBCQUFYLEVBQXVDO0FBQ3BEQyxFQUFBQSxvQkFBb0IsRUFBRSxLQUQ4QjtBQUVwREMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE1BQU0sRUFBRTtBQURIO0FBRjZDLENBQXZDLENBQWY7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCUCxFQUFBQSxNQUFNLENBQUNRLE9BQVAsQ0FBZSxJQUFmLEVBQXFCQyxJQUFyQixDQUEwQixZQUExQixFQUF3Q0YsSUFBeEM7QUFDRCxDQUZEOzs7O0FBSUEsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2IsSUFBQUEsTUFBTSxDQUFD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VUMsTUFBVixFQUFxQjtBQUN0Q2IsSUFBQUEsTUFBTSxDQUFDdUIsSUFBUCxDQUFZLGVBQVosRUFBNkIsVUFBQ2hCLElBQUQsRUFBVTtBQUNyQ0ssTUFBQUEsT0FBTyxDQUFDTCxJQUFELENBQVA7QUFDQU0sTUFBQUEsTUFBTSxDQUFDLGlCQUFELENBQU47QUFDRCxLQUhEO0FBSUQsR0FMTSxDQUFQO0FBTUQsQ0FQRDs7OztBQVFBLElBQU1pQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDekIsTUFBRCxFQUFZO0FBQzNCLE1BQU1MLE1BQU0sR0FBRytCLFNBQVMsQ0FBQzFCLE1BQUQsQ0FBeEI7QUFDQUwsRUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVksTUFBWixFQUFvQjtBQUFFdUIsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBcEI7QUFDRCxDQUhEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5jb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KFwiaHR0cDovLzE5Mi4xNjguMS4zMTozMDAwXCIsIHtcclxuICByZWNvbm5lY3Rpb25EZWxheU1heDogMTAwMDAsXHJcbiAgcXVlcnk6IHtcclxuICAgIHVzZXJJZDogMTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzZW5kdXNlcklEID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQudGltZW91dCgyMDAwKS5lbWl0KFwic2VuZHVzZXJJRFwiLCBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHJlY2VpdmVkdXNlcklEID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlZHVzZXJJRFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgdXNlcklEID0gZGF0YTtcclxuICAgICAgcmVzb2x2ZSh1c2VySUQpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlbmRyb29tSUQgPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC50aW1lb3V0KDIwMDApLmVtaXQoXCJzZW5kcm9vbUlEXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWRyb29tSUQgPSAoKSA9PiB7ICBcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXR1cm5uZXcgUHJvbWlzZSBydW5cIik7XHJcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlZHJvb21JRFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkcm9vb21JRCgpIHJ1blwiKTtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgcmVqZWN0KFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vL2NoZXNzIG1vdmVzIGZpZWxkXHJcbmNvbnN0IGNoZXNzID0gW107XHJcbmNvbnN0IHNlbmRjaGVzc1Bvc2l0aW9uID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQudGltZW91dCg1MDApLmVtaXQoXCJzZW5kQ2hlc3NQb3NpdGlvblwiLCBkYXRhKTtcclxufTtcclxuY29uc3QgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub25jZShcInJlY2VpdmVkQ2hlc3NQb3NpdGlvblwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjaGVzcy5wdXNoKGRhdGFbZGF0YS5sZW5ndGggLSAxXSk7XHJcbiAgICAgIHJlc29sdmUoY2hlc3MpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlbmRkZWFkY2hlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC50aW1lb3V0KDUwMCkuZW1pdChcInNlbmRkZWFkY2hlc3NcIiwgZGF0YSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkZGVhZGNoZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub25jZShcInJlY2VpdmVkZGVhZGNoZXNzXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZHN0YXRlID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQudGltZW91dCg1MDApLmVtaXQoXCJzZW5kc3RhdGVcIiwgZGF0YSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNvY2tldC5vbmNlKFwicmVjZWl2ZWRzdGF0ZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3Qgc2VuZE5hbWUgPSAodXNlcklkKSA9PiB7XHJcbiAgY29uc3Qgc29ja2V0ID0gZ2V0U29ja2V0KHVzZXJJZCk7XHJcbiAgc29ja2V0LmVtaXQoXCJuYW1lXCIsIHsgbmFtZTogXCJ0ZW9cIiB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2VuZE5hbWUsXHJcbiAgc2VuZHVzZXJJRCxcclxuICByZWNlaXZlZHVzZXJJRCxcclxuICBzZW5kY2hlc3NQb3NpdGlvbixcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGRlYWRjaGVzcyxcclxuICByZWNlaXZlZGRlYWRjaGVzcyxcclxuICBzZW5kcm9vbUlELFxyXG4gIHJlY2VpdmVkcm9vbUlELFxyXG4gIHNlbmRzdGF0ZSxcclxuICByZWNlaXZlZHN0YXRlLFxyXG59O1xyXG4iXX0=