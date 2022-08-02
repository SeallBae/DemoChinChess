
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

var _require = require("socket.io-client"),
    io = _require.io;

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
    fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.data.id == roomID) {
        if (data.data.Player1 == null) {
          fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              Player1: uid
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          });
        } else if (data.data.Player2 == null) {
          fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              Player2: uid
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxqb2lucm9vbS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW8iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJvb21JRCIsInR5cGUiLCJMYWJlbCIsIlBhc3MiLCJvbkxvYWQiLCJqb2luX3Jvb20iLCJQbGF5ZXJJbmZvIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUm9vbUluZm9zIiwidWlkIiwic3RyaW5nIiwicGFzcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaWQiLCJQbGF5ZXIxIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicmlkIiwibG9hZFNjZW5lIiwiUGxheWVyMiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWVBLE9BQU8sQ0FBQyxrQkFBRCxDQUF0QjtBQUFBLElBQVFDLEVBQVIsWUFBUUEsRUFBUjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERTtBQUtWQyxJQUFBQSxJQUFJLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZMO0FBTEksR0FITDtBQWNQRSxFQUFBQSxNQWRPLG9CQWNFLENBQUUsQ0FkSjtBQWVQQyxFQUFBQSxTQWZPLHVCQWVLO0FBQ1YsUUFBSUMsVUFBVSxHQUFHVixFQUFFLENBQUNXLFFBQUgsQ0FDZEMsUUFEYyxHQUVkQyxjQUZjLENBRUMsWUFGRCxF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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGlvIH0gPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcm9vbUlEOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIFBhc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIGpvaW5fcm9vbSgpIHtcclxuICAgIGxldCBQbGF5ZXJJbmZvID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVySW5mb1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUGxheWVySW5mb1wiKTtcclxuICAgIGxldCBSb29tSW5mb3MgPSBjYy5kaXJlY3RvclxyXG4gICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSb29tSW5mb3NcIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlJvb21JbmZvc1wiKTtcclxuICAgIGxldCB1aWQgPSBQbGF5ZXJJbmZvLnVpZDtcclxuICAgIGxldCByb29tSUQgPSB0aGlzLnJvb21JRC5zdHJpbmc7XHJcbiAgICBsZXQgcGFzcyA9IHRoaXMuUGFzcy5zdHJpbmc7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbS9cIiArIHJvb21JRCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5pZCA9PSByb29tSUQpIHtcclxuICAgICAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tL1wiICsgcm9vbUlELFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFBsYXllcjE6IHVpZCB9KSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBSb29tSW5mb3MucmlkID0gcm9vbUlEO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVwiKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLlBsYXllcjIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgICBcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbS9cIiArIHJvb21JRCxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBQbGF5ZXIyOiB1aWQgfSksXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IHJvb21JRDtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21cIik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJvb21mdWxsIVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=