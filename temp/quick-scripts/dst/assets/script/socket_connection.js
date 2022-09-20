
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

var socket = io.connect("http://192.168.2.7:3000", {
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
var chess = [];

var sendchessPosition = function sendchessPosition(data) {
  socket.emit("sendChessPosition", data);
};

exports.sendchessPosition = sendchessPosition;

var receivedchessPosition = function receivedchessPosition() {
  return new Promise(function (resolve, reject) {
    socket.on("receivedChessPosition", function (data) {
      chess.push(data[data.length - 1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzb2NrZXRfY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInF1ZXJ5IiwidXNlcklkIiwic2VuZHVzZXJJRCIsImRhdGEiLCJlbWl0IiwicmVjZWl2ZWR1c2VySUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwidXNlcklEIiwic2VuZHJvb21JRCIsInJlY2VpdmVkcm9vbUlEIiwiY2hlc3MiLCJzZW5kY2hlc3NQb3NpdGlvbiIsInJlY2VpdmVkY2hlc3NQb3NpdGlvbiIsInB1c2giLCJsZW5ndGgiLCJzZW5kZGVhZGNoZXNzIiwicmVjZWl2ZWRkZWFkY2hlc3MiLCJvbmNlIiwic2VuZHN0YXRlIiwicmVjZWl2ZWRzdGF0ZSIsInNlbmROYW1lIiwiZ2V0U29ja2V0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUNDLE9BQUgsQ0FBVyx5QkFBWCxFQUFzQztBQUNuREMsRUFBQUEsb0JBQW9CLEVBQUUsS0FENkI7QUFFbkRDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxNQUFNLEVBQUU7QUFESDtBQUY0QyxDQUF0QyxDQUFmOztBQU9BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQlAsRUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVksWUFBWixFQUEwQkQsSUFBMUI7QUFDRCxDQUZEOzs7O0FBSUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1osSUFBQUEsTUFBTSxDQUFDYSxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBQ04sSUFBRCxFQUFVO0FBQ3BDLFVBQUlP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LE1BQU1MLE1BQU0sR0FBRzRCLFNBQVMsQ0FBQ3ZCLE1BQUQsQ0FBeEI7QUFDQUwsRUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVksTUFBWixFQUFvQjtBQUFFcUIsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBcEI7QUFDRCxDQUhEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5jb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KFwiaHR0cDovLzE5Mi4xNjguMi43OjMwMDBcIiwge1xyXG4gIHJlY29ubmVjdGlvbkRlbGF5TWF4OiAxMDAwMCxcclxuICBxdWVyeToge1xyXG4gICAgdXNlcklkOiAxMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNlbmR1c2VySUQgPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwic2VuZHVzZXJJRFwiLCBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHJlY2VpdmVkdXNlcklEID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlZHVzZXJJRFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgdXNlcklEID0gZGF0YTtcclxuICAgICAgcmVzb2x2ZSh1c2VySUQpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlbmRyb29tSUQgPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwic2VuZHJvb21JRFwiLCBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHJlY2VpdmVkcm9vbUlEID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlZHJvb21JRFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vY2hlc3MgbW92ZXMgZmllbGRcclxuY29uc3QgY2hlc3MgPSBbXTtcclxuY29uc3Qgc2VuZGNoZXNzUG9zaXRpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwic2VuZENoZXNzUG9zaXRpb25cIiwgZGF0YSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkY2hlc3NQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKFwicmVjZWl2ZWRDaGVzc1Bvc2l0aW9uXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNoZXNzLnB1c2goZGF0YVtkYXRhLmxlbmd0aCAtIDFdKTtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgcmVqZWN0KFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZW5kZGVhZGNoZXNzID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmRkZWFkY2hlc3NcIiwgZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCByZWNlaXZlZGRlYWRjaGVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uY2UoXCJyZWNlaXZlZGRlYWRjaGVzc1wiLCAoZGF0YSkgPT4ge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlbmRzdGF0ZSA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kc3RhdGVcIiwgZGF0YSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNvY2tldC5vbmNlKFwicmVjZWl2ZWRzdGF0ZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3Qgc2VuZE5hbWUgPSAodXNlcklkKSA9PiB7XHJcbiAgY29uc3Qgc29ja2V0ID0gZ2V0U29ja2V0KHVzZXJJZCk7XHJcbiAgc29ja2V0LmVtaXQoXCJuYW1lXCIsIHsgbmFtZTogXCJ0ZW9cIiB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2VuZE5hbWUsXHJcbiAgc2VuZHVzZXJJRCxcclxuICByZWNlaXZlZHVzZXJJRCxcclxuICBzZW5kY2hlc3NQb3NpdGlvbixcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGRlYWRjaGVzcyxcclxuICByZWNlaXZlZGRlYWRjaGVzcyxcclxuICBzZW5kcm9vbUlELFxyXG4gIHJlY2VpdmVkcm9vbUlELFxyXG4gIHNlbmRzdGF0ZSxcclxuICByZWNlaXZlZHN0YXRlLFxyXG59O1xyXG4iXX0=