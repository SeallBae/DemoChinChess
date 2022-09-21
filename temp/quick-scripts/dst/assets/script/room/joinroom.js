
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
            PlayerInfo.state = "Player1";
            cc.director.loadScene("room");
          });
        } else if (data.data.Player2 == null) {
          (0, _axios_connection.joinroombyIDasp2)(roomID, uid).then(function (data) {
            console.log(data);
            RoomInfos.rid = roomID;
            PlayerInfo.state = "Player2";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxqb2lucm9vbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJvb21JRCIsInR5cGUiLCJMYWJlbCIsIlBhc3MiLCJvbkxvYWQiLCJqb2luX3Jvb20iLCJQbGF5ZXJJbmZvIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUm9vbUluZm9zIiwidWlkIiwic3RyaW5nIiwicGFzcyIsInRoZW4iLCJkYXRhIiwiaWQiLCJQbGF5ZXIxIiwiY29uc29sZSIsImxvZyIsInJpZCIsInN0YXRlIiwibG9hZFNjZW5lIiwiUGxheWVyMiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUtBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxNQUFNLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBREU7QUFLVkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTDtBQUxJLEdBSEw7QUFjUEUsRUFBQUEsTUFkTyxvQkFjRSxDQUFFLENBZEo7QUFlUEMsRUFBQUEsU0FmTyx1QkFlSztBQUNWLFFBQUlDLFVBQVUsR0FBR1YsRUFBRSxDQUFDVyxRQUFILENBQ2RDLFFBRGMsR0FFZEMsY0FGYyxDQUVDLFlBRkQsRUFHZEMsWUFIYyxDQUdELFlBSEMsQ0FBakI7QUFJQSxRQUFJQyxTQUFTLEdBQUdmLEVBQUUsQ0FBQ1csUUFBSCxDQUNiQyxRQURhLEdBRWJDLGNBRmEsQ0FFRSxXQUZGLEVBR2JDLFlBSGEsQ0FHQSxXQUhBLENBQWhCO0FBSUEsUUFBSUUsR0FBRyxHQUFHTixVQUFVLENBQUNNLEdBQXJCO0FBQ0EsUUFBSVosTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWWEsTUFBekI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVVSxNQUFyQjtBQUVBLHVDQUFZYixNQUFaLEVBQW9CZSxJQUFwQixDQUF5QixVQUFDQyxJQUFELEVBQVU7QUFDakMsVUFBSUEsSUFBSSxDQUFDQSxJQUFMLENBQVVDLEVBQVYsSUFBZ0JqQixNQUFwQixFQUE0QjtBQUMxQixZQUFJZ0IsSUFBSSxDQUFDQSxJQUFMLENBQVVFLE9BQVYsSUFBcUIsSUFBekIsRUFBK0I7QUFDN0Isa0RBQWlCbEIsTUFBakIsRUFBeUJZLEdBQXpCLEVBQThCRyxJQUE5QixDQUFtQyxVQUFDQyxJQUFELEVBQVU7QUFDM0NHLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FMLFlBQUFBLFNBQVMsQ0FBQ1UsR0FBVixHQUFnQnJCLE1BQWhCO0FBQ0FNLFlBQUFBLFVBQVUsQ0FBQ2dCLEtBQVgsR0FBbUIsU0FBbkI7QUFDQTFCLFlBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZZ0IsU0FBWixDQUFzQixNQUF0QjtBQUNELFdBTEQ7QUFNRCxTQVBELE1BT08sSUFBSVAsSUFBSSxDQUFDQSxJQUFMLENBQVVRLE9BQVYsSUFBcUIsSUFBekIsRUFBK0I7QUFDcEMsa0RBQWlCeEIsTUFBakIsRUFBeUJZLEdBQXpCLEVBQThCRyxJQUE5QixDQUFtQyxVQUFDQyxJQUFELEVBQVU7QUFDM0NHLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FMLFlBQUFBLFNBQVMsQ0FBQ1UsR0FBVixHQUFnQnJCLE1BQWhCO0FBQ0FNLFlBQUFBLFVBQVUsQ0FBQ2dCLEtBQVgsR0FBbUIsU0FBbkI7QUFDQTFCLFlBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZZ0IsU0FBWixDQUFzQixNQUF0QjtBQUNELFdBTEQ7QUFNRCxTQVBNLE1BT0E7QUFDTEosVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNEO0FBQ0Y7QUFDRixLQXBCRCxXQW9CUyxZQUFZO0FBQ25CRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNELEtBdEJEO0FBdUJELEdBbkRNO0FBb0RQSyxFQUFBQSxLQXBETyxtQkFvREMsQ0FBRSxDQXBESCxDQXNEUDs7QUF0RE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBnZXRyb29tYnlJRCxcclxuICBqb2lucm9vbWJ5SURhc3AxLFxyXG4gIGpvaW5yb29tYnlJRGFzcDIsXHJcbn0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcm9vbUlEOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIFBhc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIGpvaW5fcm9vbSgpIHtcclxuICAgIGxldCBQbGF5ZXJJbmZvID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVySW5mb1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUGxheWVySW5mb1wiKTtcclxuICAgIGxldCBSb29tSW5mb3MgPSBjYy5kaXJlY3RvclxyXG4gICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSb29tSW5mb3NcIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlJvb21JbmZvc1wiKTtcclxuICAgIGxldCB1aWQgPSBQbGF5ZXJJbmZvLnVpZDtcclxuICAgIGxldCByb29tSUQgPSB0aGlzLnJvb21JRC5zdHJpbmc7XHJcbiAgICBsZXQgcGFzcyA9IHRoaXMuUGFzcy5zdHJpbmc7XHJcblxyXG4gICAgZ2V0cm9vbWJ5SUQocm9vbUlEKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmRhdGEuaWQgPT0gcm9vbUlEKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIxID09IG51bGwpIHtcclxuICAgICAgICAgIGpvaW5yb29tYnlJRGFzcDEocm9vbUlELCB1aWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIFJvb21JbmZvcy5yaWQgPSByb29tSUQ7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8uc3RhdGUgPSBcIlBsYXllcjFcIjtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLlBsYXllcjIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgam9pbnJvb21ieUlEYXNwMihyb29tSUQsIHVpZCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IHJvb21JRDtcclxuICAgICAgICAgICAgUGxheWVySW5mby5zdGF0ZSA9IFwiUGxheWVyMlwiO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm9vbWZ1bGwhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19