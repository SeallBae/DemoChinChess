
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
    var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    (0, _socket_connection.receiveduserID)().then(function (data) {
      var uid = data;
      console.log("uid", uid);
      (0, _axios_connection.createroom)(uid).then(function (data) {
        console.log(data);
        RoomInfos.rid = data;
        PlayerInfo.state = "Player1";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxjcmVhdGVyb29tLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3JlYXRlX3Jvb20iLCJQbGF5ZXJJbmZvIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUm9vbUluZm9zIiwidGhlbiIsImRhdGEiLCJ1aWQiLCJjb25zb2xlIiwibG9nIiwicmlkIiwic3RhdGUiLCJsb2FkU2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFRQTs7QUFFQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUUsRUFGTDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFLENBQUUsQ0FISjtBQUlQQyxFQUFBQSxXQUpPLHlCQUlPO0FBQ1osUUFBSUMsVUFBVSxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FDZEMsUUFEYyxHQUVkQyxjQUZjLENBRUMsWUFGRCxFQUdkQyxZQUhjLENBR0QsWUFIQyxDQUFqQjtBQUlBLFFBQUlDLFNBQVMsR0FBR1gsRUFBRSxDQUFDTyxRQUFILENBQ2JDLFFBRGEsR0FFYkMsY0FGYSxDQUVFLFdBRkYsRUFHYkMsWUFIYSxDQUdBLFdBSEEsQ0FBaEI7QUFJQSw2Q0FBaUJFLElBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJQyxHQUFHLEdBQUdELElBQVY7QUFDQUUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkYsR0FBbkI7QUFDQSx3Q0FBV0EsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzdCRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBRixRQUFBQSxTQUFTLENBQUNNLEdBQVYsR0FBZ0JKLElBQWhCO0FBQ0FQLFFBQUFBLFVBQVUsQ0FBQ1ksS0FBWCxHQUFtQixTQUFuQjtBQUNBSCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTCxTQUFTLENBQUNNLEdBQWhDO0FBQ0FqQixRQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWVksU0FBWixDQUFzQixNQUF0QjtBQUNELE9BTkQ7QUFPRCxLQVZELFdBVVMsWUFBWTtBQUNuQkosTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxLQVpEO0FBY0QsR0EzQk07QUE0QlBJLEVBQUFBLEtBNUJPLG1CQTRCQyxDQUFFLENBNUJILENBOEJQOztBQTlCTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHJlY2VpdmVkY2hlc3NQb3NpdGlvbixcclxuICBzZW5kY2hlc3NQb3NpdGlvbixcclxuICBzZW5kdXNlcklELFxyXG4gIHJlY2VpdmVkdXNlcklELFxyXG4gIHNlbmRyb29tSUQsXHJcbiAgcmVjZWl2ZWRyb29tSUQsXHJcbn0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZXJvb20gfSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG5cclxuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7fSxcclxuICBvbkxvYWQoKSB7fSxcclxuICBjcmVhdGVfcm9vbSgpIHtcclxuICAgIGxldCBQbGF5ZXJJbmZvID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVySW5mb1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUGxheWVySW5mb1wiKTtcclxuICAgIGxldCBSb29tSW5mb3MgPSBjYy5kaXJlY3RvclxyXG4gICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSb29tSW5mb3NcIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlJvb21JbmZvc1wiKTtcclxuICAgIHJlY2VpdmVkdXNlcklEKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgdWlkID0gZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJ1aWRcIiwgdWlkKTtcclxuICAgICAgY3JlYXRlcm9vbSh1aWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBSb29tSW5mb3MucmlkID0gZGF0YTtcclxuICAgICAgICBQbGF5ZXJJbmZvLnN0YXRlID0gXCJQbGF5ZXIxXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29taWRcIiwgUm9vbUluZm9zLnJpZCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==