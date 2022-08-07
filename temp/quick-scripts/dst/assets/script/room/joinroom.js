
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxqb2lucm9vbS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW8iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJvb21JRCIsInR5cGUiLCJMYWJlbCIsIlBhc3MiLCJvbkxvYWQiLCJqb2luX3Jvb20iLCJQbGF5ZXJJbmZvIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUm9vbUluZm9zIiwidWlkIiwic3RyaW5nIiwicGFzcyIsInRoZW4iLCJkYXRhIiwiaWQiLCJQbGF5ZXIxIiwiY29uc29sZSIsImxvZyIsInJpZCIsImxvYWRTY2VuZSIsIlBsYXllcjIiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQSxlQUFlQSxPQUFPLENBQUMsa0JBQUQsQ0FBdEI7QUFBQSxJQUFRQyxFQUFSLFlBQVFBLEVBQVI7O0FBTUE7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERTtBQUtWQyxJQUFBQSxJQUFJLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZMO0FBTEksR0FITDtBQWNQRSxFQUFBQSxNQWRPLG9CQWNFLENBQUUsQ0FkSjtBQWVQQyxFQUFBQSxTQWZPLHVCQWVLO0FBQ1YsUUFBSUMsVUFBVSxHQUFHVixFQUFFLENBQUNXLFFBQUgsQ0FDZEMsUUFEYyxHQUVkQyxjQUZjLENBRUMsWUFGRCxFQUdkQyxZQUhjLENBR0QsWUFIQyxDQUFqQjtBQUlBLFFBQUlDLFNBQVMsR0FBR2YsRUFBRSxDQUFDVyxRQUFILENBQ2JDLFFBRGEsR0FFYkMsY0FGYSxDQUVFLFdBRkYsRUFHYkMsWUFIYSxDQUdBLFdBSEEsQ0FBaEI7QUFJQSxRQUFJRSxHQUFHLEdBQUdOLFVBQVUsQ0FBQ00sR0FBckI7QUFDQSxRQUFJWixNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZYSxNQUF6QjtBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVVLE1BQXJCO0FBRUEsdUNBQVliLE1BQVosRUFBb0JlLElBQXBCLENBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQyxVQUFJQSxJQUFJLENBQUNBLElBQUwsQ0FBVUMsRUFBVixJQUFnQmpCLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUlnQixJQUFJLENBQUNBLElBQUwsQ0FBVUUsT0FBVixJQUFxQixJQUF6QixFQUErQjtBQUM3QixrREFBaUJsQixNQUFqQixFQUF5QlksR0FBekIsRUFBOEJHLElBQTlCLENBQW1DLFVBQUNDLElBQUQsRUFBVTtBQUMzQ0csWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQUwsWUFBQUEsU0FBUyxDQUFDVSxHQUFWLEdBQWdCckIsTUFBaEI7QUFDQUosWUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVllLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxXQUpEO0FBS0QsU0FORCxNQU1PLElBQUlOLElBQUksQ0FBQ0EsSUFBTCxDQUFVTyxPQUFWLElBQXFCLElBQXpCLEVBQStCO0FBQ3BDLGtEQUFpQnZCLE1BQWpCLEVBQXlCWSxHQUF6QixFQUE4QkcsSUFBOUIsQ0FBbUMsVUFBQ0MsSUFBRCxFQUFVO0FBQzNDRyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBTCxZQUFBQSxTQUFTLENBQUNVLEdBQVYsR0FBZ0JyQixNQUFoQjtBQUNBSixZQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixNQUF0QjtBQUNELFdBSkQ7QUFLRCxTQU5NLE1BTUE7QUFDTEgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNEO0FBQ0Y7QUFDRixLQWxCRDtBQW1CRCxHQS9DTTtBQWdEUEksRUFBQUEsS0FoRE8sbUJBZ0RDLENBQUUsQ0FoREgsQ0FrRFA7O0FBbERPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgaW8gfSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xyXG5pbXBvcnQge1xyXG4gIGdldHJvb21ieUlELFxyXG4gIGpvaW5yb29tYnlJRGFzcDEsXHJcbiAgam9pbnJvb21ieUlEYXNwMixcclxufSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICByb29tSUQ6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgUGFzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge30sXHJcbiAgam9pbl9yb29tKCkge1xyXG4gICAgbGV0IFBsYXllckluZm8gPSBjYy5kaXJlY3RvclxyXG4gICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJJbmZvXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJQbGF5ZXJJbmZvXCIpO1xyXG4gICAgbGV0IFJvb21JbmZvcyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJvb21JbmZvc1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUm9vbUluZm9zXCIpO1xyXG4gICAgbGV0IHVpZCA9IFBsYXllckluZm8udWlkO1xyXG4gICAgbGV0IHJvb21JRCA9IHRoaXMucm9vbUlELnN0cmluZztcclxuICAgIGxldCBwYXNzID0gdGhpcy5QYXNzLnN0cmluZztcclxuXHJcbiAgICBnZXRyb29tYnlJRChyb29tSUQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEuZGF0YS5pZCA9PSByb29tSUQpIHtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgam9pbnJvb21ieUlEYXNwMShyb29tSUQsIHVpZCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IHJvb21JRDtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLlBsYXllcjIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgam9pbnJvb21ieUlEYXNwMihyb29tSUQsIHVpZCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IHJvb21JRDtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJvb21mdWxsIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=