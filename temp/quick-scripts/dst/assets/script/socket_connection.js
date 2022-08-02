
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

var socket = io.connect("http://localhost:3000", {
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
  console.log("receivedroomID() run");
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
  socket.emit("sendChessPosition", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzb2NrZXRfY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInF1ZXJ5IiwidXNlcklkIiwic2VuZHVzZXJJRCIsImRhdGEiLCJlbWl0IiwicmVjZWl2ZWR1c2VySUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwidXNlcklEIiwic2VuZHJvb21JRCIsInJlY2VpdmVkcm9vbUlEIiwiY29uc29sZSIsImxvZyIsImNoZXNzIiwic2VuZGNoZXNzUG9zaXRpb24iLCJyZWNlaXZlZGNoZXNzUG9zaXRpb24iLCJvbmNlIiwicHVzaCIsImxlbmd0aCIsInNlbmRkZWFkY2hlc3MiLCJyZWNlaXZlZGRlYWRjaGVzcyIsInNlbmRzdGF0ZSIsInJlY2VpdmVkc3RhdGUiLCJzZW5kTmFtZSIsImdldFNvY2tldCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDQyxPQUFILENBQVcsdUJBQVgsRUFBb0M7QUFDakRDLEVBQUFBLG9CQUFvQixFQUFFLEtBRDJCO0FBRWpEQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFO0FBREg7QUFGMEMsQ0FBcEMsQ0FBZjs7QUFPQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0JQLEVBQUFBLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLFlBQVosRUFBMEJELElBQTFCO0FBQ0QsQ0FGRDs7OztBQUlBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENaLElBQUFBLE1BQU0sQ0FBQ2EsRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQUNOLElBQUQs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SixJQUFELENBQVA7QUFDQUssTUFBQUEsTUFBTSxDQUFDLGlCQUFELENBQU47QUFDRCxLQUhEO0FBSUQsR0FMTSxDQUFQO0FBTUQsQ0FQRDs7OztBQVFBLElBQU1pQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDeEIsTUFBRCxFQUFZO0FBQzNCLE1BQU1MLE1BQU0sR0FBRzhCLFNBQVMsQ0FBQ3pCLE1BQUQsQ0FBeEI7QUFDQUwsRUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVksTUFBWixFQUFvQjtBQUFFdUIsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBcEI7QUFDRCxDQUhEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5jb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIHtcclxuICByZWNvbm5lY3Rpb25EZWxheU1heDogMTAwMDAsXHJcbiAgcXVlcnk6IHtcclxuICAgIHVzZXJJZDogMTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzZW5kdXNlcklEID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmR1c2VySURcIiwgZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCByZWNlaXZlZHVzZXJJRCA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKFwicmVjZWl2ZWR1c2VySURcIiwgKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHVzZXJJRCA9IGRhdGE7XHJcbiAgICAgIHJlc29sdmUodXNlcklEKTtcclxuICAgICAgcmVqZWN0KFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZW5kcm9vbUlEID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmRyb29tSURcIiwgZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCByZWNlaXZlZHJvb21JRCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInJlY2VpdmVkcm9vbUlEKCkgcnVuXCIpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJldHVybm5ldyBQcm9taXNlIHJ1blwiKTtcclxuICAgIHNvY2tldC5vbihcInJlY2VpdmVkcm9vbUlEXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWRyb29vbUlEKCkgcnVuXCIpO1xyXG4gICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vY2hlc3MgbW92ZXMgZmllbGRcclxuY29uc3QgY2hlc3MgPSBbXTtcclxuY29uc3Qgc2VuZGNoZXNzUG9zaXRpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwic2VuZENoZXNzUG9zaXRpb25cIiwgZGF0YSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkY2hlc3NQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uY2UoXCJyZWNlaXZlZENoZXNzUG9zaXRpb25cIiwgKGRhdGEpID0+IHtcclxuICAgICAgY2hlc3MucHVzaChkYXRhW2RhdGEubGVuZ3RoIC0gMV0pO1xyXG4gICAgICByZXNvbHZlKGNoZXNzKTtcclxuICAgICAgcmVqZWN0KFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZW5kZGVhZGNoZXNzID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmRkZWFkY2hlc3NcIiwgZGF0YSk7XHJcbn07XHJcbmNvbnN0IHJlY2VpdmVkZGVhZGNoZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub25jZShcInJlY2VpdmVkZGVhZGNoZXNzXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZHN0YXRlID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmRzdGF0ZVwiLCBkYXRhKTtcclxufTtcclxuY29uc3QgcmVjZWl2ZWRzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uY2UoXCJyZWNlaXZlZHN0YXRlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBzZW5kTmFtZSA9ICh1c2VySWQpID0+IHtcclxuICBjb25zdCBzb2NrZXQgPSBnZXRTb2NrZXQodXNlcklkKTtcclxuICBzb2NrZXQuZW1pdChcIm5hbWVcIiwgeyBuYW1lOiBcInRlb1wiIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBzZW5kTmFtZSxcclxuICBzZW5kdXNlcklELFxyXG4gIHJlY2VpdmVkdXNlcklELFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG4gIHJlY2VpdmVkY2hlc3NQb3NpdGlvbixcclxuICBzZW5kZGVhZGNoZXNzLFxyXG4gIHJlY2VpdmVkZGVhZGNoZXNzLFxyXG4gIHNlbmRyb29tSUQsXHJcbiAgcmVjZWl2ZWRyb29tSUQsXHJcbiAgc2VuZHN0YXRlLFxyXG4gIHJlY2VpdmVkc3RhdGUsXHJcbn07XHJcbiJdfQ==