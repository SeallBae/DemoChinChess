
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/createroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9aacf1bFzRDar2oq8ZNrJeu', 'createroom');
// script/room/createroom.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  create_room: function create_room() {
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    (0, _socket_connection.receiveduserID)().then(function (data) {
      var uid = data;
      console.log("uid", uid);
      (0, _axios_connection.createroom)(uid).then(function (data) {
        RoomInfos.rid = data.data.id;
        console.log("roomid", RoomInfos.rid);
        cc.director.loadScene("room");
      });
    });
  },
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxjcmVhdGVyb29tLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3JlYXRlX3Jvb20iLCJSb29tSW5mb3MiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwiZGF0YSIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJyaWQiLCJpZCIsImxvYWRTY2VuZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVFBOztBQUVBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRSxFQUZMO0FBR1BDLEVBQUFBLE1BSE8sb0JBR0UsQ0FBRSxDQUhKO0FBSVBDLEVBQUFBLFdBSk8seUJBSU87QUFDWixRQUFJQyxTQUFTLEdBQUdOLEVBQUUsQ0FBQ08sUUFBSCxDQUNiQyxRQURhLEdBRWJDLGNBRmEsQ0FFRSxXQUZGLEVBR2JDLFlBSGEsQ0FHQSxXQUhBLENBQWhCO0FBSUEsNkNBQWlCQyxJQUFqQixDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDOUIsVUFBSUMsR0FBRyxHQUFHRCxJQUFWO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLEdBQW5CO0FBQ0Esd0NBQVdBLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUM3Qk4sUUFBQUEsU0FBUyxDQUFDVSxHQUFWLEdBQWdCSixJQUFJLENBQUNBLElBQUwsQ0FBVUssRUFBMUI7QUFDQUgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlQsU0FBUyxDQUFDVSxHQUFoQztBQUNBaEIsUUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVlXLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxPQUpEO0FBS0QsS0FSRDtBQVNELEdBbEJNO0FBbUJQQyxFQUFBQSxLQW5CTyxtQkFtQkMsQ0FBRSxDQW5CSCxDQXFCUDs7QUFyQk8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZHVzZXJJRCxcclxuICByZWNlaXZlZHVzZXJJRCxcclxuICBzZW5kcm9vbUlELFxyXG4gIHJlY2VpdmVkcm9vbUlELFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVyb29tIH0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuXHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge30sXHJcbiAgb25Mb2FkKCkge30sXHJcbiAgY3JlYXRlX3Jvb20oKSB7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHVpZCA9IGRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidWlkXCIsIHVpZCk7XHJcbiAgICAgIGNyZWF0ZXJvb20odWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgUm9vbUluZm9zLnJpZCA9IGRhdGEuZGF0YS5pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJvb21pZFwiLCBSb29tSW5mb3MucmlkKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=