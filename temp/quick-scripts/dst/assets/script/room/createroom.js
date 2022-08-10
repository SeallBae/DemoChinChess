
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
        console.log(data);
        RoomInfos.rid = data;
        console.log("roomid", RoomInfos.rid);
        cc.director.loadScene("room");
      });
    })["catch"](function () {
      console.log("Promise Rejected");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxjcmVhdGVyb29tLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3JlYXRlX3Jvb20iLCJSb29tSW5mb3MiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwiZGF0YSIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJyaWQiLCJsb2FkU2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFRQTs7QUFFQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUUsRUFGTDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFLENBQUUsQ0FISjtBQUlQQyxFQUFBQSxXQUpPLHlCQUlPO0FBQ1osUUFBSUMsU0FBUyxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FDYkMsUUFEYSxHQUViQyxjQUZhLENBRUUsV0FGRixFQUdiQyxZQUhhLENBR0EsV0FIQSxDQUFoQjtBQUlBLDZDQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFVBQUlDLEdBQUcsR0FBR0QsSUFBVjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixHQUFuQjtBQUNBLHdDQUFXQSxHQUFYLEVBQWdCRixJQUFoQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDN0JFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0FOLFFBQUFBLFNBQVMsQ0FBQ1UsR0FBVixHQUFnQkosSUFBaEI7QUFDQUUsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlQsU0FBUyxDQUFDVSxHQUFoQztBQUNBaEIsUUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVlVLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxPQUxEO0FBTUQsS0FURCxXQVNTLFlBQVk7QUFDbkJILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0FYRDtBQWFELEdBdEJNO0FBdUJQRyxFQUFBQSxLQXZCTyxtQkF1QkMsQ0FBRSxDQXZCSCxDQXlCUDs7QUF6Qk8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZHVzZXJJRCxcclxuICByZWNlaXZlZHVzZXJJRCxcclxuICBzZW5kcm9vbUlELFxyXG4gIHJlY2VpdmVkcm9vbUlELFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVyb29tIH0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuXHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge30sXHJcbiAgb25Mb2FkKCkge30sXHJcbiAgY3JlYXRlX3Jvb20oKSB7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHVpZCA9IGRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidWlkXCIsIHVpZCk7XHJcbiAgICAgIGNyZWF0ZXJvb20odWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgUm9vbUluZm9zLnJpZCA9IGRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29taWRcIiwgUm9vbUluZm9zLnJpZCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==