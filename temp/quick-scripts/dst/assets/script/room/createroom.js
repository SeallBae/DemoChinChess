
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
      fetch("https://chinese-chess-vnp.herokuapp.com/api/room", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Player1: uid,
          Player2: null
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxjcmVhdGVyb29tLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3JlYXRlX3Jvb20iLCJSb29tSW5mb3MiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwiZGF0YSIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlBsYXllcjEiLCJQbGF5ZXIyIiwicmVzcG9uc2UiLCJqc29uIiwicmlkIiwiaWQiLCJsb2FkU2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFTQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUUsRUFGTDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFLENBQUUsQ0FISjtBQUlQQyxFQUFBQSxXQUpPLHlCQUlPO0FBQ1osUUFBSUMsU0FBUyxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FDYkMsUUFEYSxHQUViQyxjQUZhLENBRUUsV0FGRixFQUdiQyxZQUhhLENBR0EsV0FIQSxDQUFoQjtBQUlBLDZDQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFVBQUlDLEdBQUcsR0FBR0QsSUFBVjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixHQUFuQjtBQUNBRyxNQUFBQSxLQUFLLENBQUMsa0RBQUQsRUFBcUQ7QUFDeERDLFFBQUFBLE1BQU0sRUFBRSxNQURnRDtBQUV4REMsUUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFVBQUFBLE1BQU0sRUFBRSxrQkFERDtBQUVQLDBCQUFnQjtBQUZULFNBRitDO0FBTXhEQyxRQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVDLFVBQUFBLE9BQU8sRUFBRVYsR0FBWDtBQUFnQlcsVUFBQUEsT0FBTyxFQUFFO0FBQXpCLFNBQWY7QUFOa0QsT0FBckQsQ0FBTCxDQVFHYixJQVJILENBUVEsVUFBQ2MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsT0FSUixFQVNHZixJQVRILENBU1EsVUFBQ0MsSUFBRCxFQUFVO0FBQ2ROLFFBQUFBLFNBQVMsQ0FBQ3FCLEdBQVYsR0FBZ0JmLElBQUksQ0FBQ0EsSUFBTCxDQUFVZ0IsRUFBMUI7QUFDQWQsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlQsU0FBUyxDQUFDcUIsR0FBaEM7QUFDQTNCLFFBQUFBLEVBQUUsQ0FBQ08sUUFBSCxDQUFZc0IsU0FBWixDQUFzQixNQUF0QjtBQUNELE9BYkg7QUFjRCxLQWpCRDtBQWtCRCxHQTNCTTtBQTRCUEMsRUFBQUEsS0E1Qk8sbUJBNEJDLENBQUUsQ0E1QkgsQ0E4QlA7O0FBOUJPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmR1c2VySUQsXHJcbiAgcmVjZWl2ZWR1c2VySUQsXHJcbiAgc2VuZHJvb21JRCxcclxuICByZWNlaXZlZHJvb21JRCxcclxufSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuXHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge30sXHJcbiAgb25Mb2FkKCkge30sXHJcbiAgY3JlYXRlX3Jvb20oKSB7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHVpZCA9IGRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidWlkXCIsIHVpZCk7XHJcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgUGxheWVyMTogdWlkLCBQbGF5ZXIyOiBudWxsIH0pLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBSb29tSW5mb3MucmlkID0gZGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyb29taWRcIiwgUm9vbUluZm9zLnJpZCk7XHJcbiAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==