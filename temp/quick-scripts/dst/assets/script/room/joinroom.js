
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/joinroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6323clwI0xJl4kOKrMKHG0j', 'joinroom');
// script/room/joinroom.js

"use strict";

var _axios_connection = require("../axios_connection");

var _require = require("socket.io-client"),
    io = _require.io;

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    roomID: {
      "default": null,
      type: cc.Label
    },
    Pass: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  join_room: function join_room() {
    var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var uid = PlayerInfo.uid;
    var roomID = this.roomID.string;
    var pass = this.Pass.string;
    (0, _axios_connection.getroombyID)(roomID).then(function (data) {
      if (data.data.id == roomID) {
        if (data.data.Player1 == null) {
          (0, _axios_connection.joinroombyIDasp1)(roomID, uid).then(function (data) {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          });
        } else if (data.data.Player2 == null) {
          (0, _axios_connection.joinroombyIDasp2)(roomID, uid).then(function (data) {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          });
        } else {
          console.log("Roomfull!");
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxqb2lucm9vbS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW8iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJvb21JRCIsInR5cGUiLCJMYWJlbCIsIlBhc3MiLCJvbkxvYWQiLCJqb2luX3Jvb20iLCJQbGF5ZXJJbmZvIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUm9vbUluZm9zIiwidWlkIiwic3RyaW5nIiwicGFzcyIsInRoZW4iLCJkYXRhIiwiaWQiLCJQbGF5ZXIxIiwiY29uc29sZSIsImxvZyIsInJpZCIsImxvYWRTY2VuZSIsIlBsYXllcjIiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQSxlQUFlQSxPQUFPLENBQUMsa0JBQUQsQ0FBdEI7QUFBQSxJQUFRQyxFQUFSLFlBQVFBLEVBQVI7O0FBTUE7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERTtBQUtWQyxJQUFBQSxJQUFJLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZMO0FBTEksR0FITDtBQWNQRSxFQUFBQSxNQWRPLG9CQWNFLENBQUUsQ0FkSjtBQWVQQyxFQUFBQSxTQWZPLHVCQWVLO0FBQ1YsUUFBSUMsVUFBVSxHQUFHVixFQUFFLENBQUNXLFFBQUgsQ0FDZEMsUUFEYyxHQUVkQyxjQUZjLENBRUMsWUFGRCxFQUdkQyxZQUhjLENBR0QsWUFIQyxDQUFqQjtBQUlBLFFBQUlDLFNBQVMsR0FBR2YsRUFBRSxDQUFDVyxRQUFILENBQ2JDLFFBRGEsR0FFYkMsY0FGYSxDQUVFLFdBRkYsRUFHYkMsWUFIYSxDQUdBLFdBSEEsQ0FBaEI7QUFJQSxRQUFJRSxHQUFHLEdBQUdOLFVBQVUsQ0FBQ00sR0FBckI7QUFDQSxRQUFJWixNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZYSxNQUF6QjtBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVVLE1BQXJCO0FBRUEsdUNBQVliLE1BQVosRUFBb0JlLElBQXBCLENBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQyxVQUFJQSxJQUFJLENBQUNBLElBQUwsQ0FBVUMsRUFBVixJQUFnQmpCLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUlnQixJQUFJLENBQUNBLElBQUwsQ0FBVUUsT0FBVixJQUFxQixJQUF6QixFQUErQjtBQUM3QixrREFBaUJsQixNQUFqQixFQUF5QlksR0FBekIsRUFBOEJHLElBQTlCLENBQW1DLFVBQUNDLElBQUQsRUFBVTtBQUMzQ0csWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQUwsWUFBQUEsU0FBUyxDQUFDVSxHQUFWLEdBQWdCckIsTUFBaEI7QUFDQUosWUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVllLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxXQUpEO0FBS0QsU0FORCxNQU1PLElBQUlOLElBQUksQ0FBQ0EsSUFBTCxDQUFVTyxPQUFWLElBQXFCLElBQXpCLEVBQStCO0FBQ3BDLGtEQUFpQnZCLE1BQWpCLEVBQXlCWSxHQUF6QixFQUE4QkcsSUFBOUIsQ0FBbUMsVUFBQ0MsSUFBRCxFQUFVO0FBQzNDRyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBTCxZQUFBQSxTQUFTLENBQUNVLEdBQVYsR0FBZ0JyQixNQUFoQjtBQUNBSixZQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixNQUF0QjtBQUNELFdBSkQ7QUFLRCxTQU5NLE1BTUE7QUFDTEgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNEO0FBQ0Y7QUFDRixLQWxCRCxXQWtCUyxZQUFZO0FBQ25CRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNELEtBcEJEO0FBcUJELEdBakRNO0FBa0RQSSxFQUFBQSxLQWxETyxtQkFrREMsQ0FBRSxDQWxESCxDQW9EUDs7QUFwRE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbyB9ID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7XHJcbmltcG9ydCB7XHJcbiAgZ2V0cm9vbWJ5SUQsXHJcbiAgam9pbnJvb21ieUlEYXNwMSxcclxuICBqb2lucm9vbWJ5SURhc3AyLFxyXG59IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHJvb21JRDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBQYXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7fSxcclxuICBqb2luX3Jvb20oKSB7XHJcbiAgICBsZXQgUGxheWVySW5mbyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckluZm9cIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlBsYXllckluZm9cIik7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICBsZXQgdWlkID0gUGxheWVySW5mby51aWQ7XHJcbiAgICBsZXQgcm9vbUlEID0gdGhpcy5yb29tSUQuc3RyaW5nO1xyXG4gICAgbGV0IHBhc3MgPSB0aGlzLlBhc3Muc3RyaW5nO1xyXG5cclxuICAgIGdldHJvb21ieUlEKHJvb21JRCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5kYXRhLmlkID09IHJvb21JRCkge1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSA9PSBudWxsKSB7XHJcbiAgICAgICAgICBqb2lucm9vbWJ5SURhc3AxKHJvb21JRCwgdWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBSb29tSW5mb3MucmlkID0gcm9vbUlEO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuUGxheWVyMiA9PSBudWxsKSB7XHJcbiAgICAgICAgICBqb2lucm9vbWJ5SURhc3AyKHJvb21JRCwgdWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBSb29tSW5mb3MucmlkID0gcm9vbUlEO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm9vbWZ1bGwhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19