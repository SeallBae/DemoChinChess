
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/PrepareRoom/roominfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95773ddqsJDIboSvoNjmway', 'roominfo');
// script/room/PrepareRoom/roominfo.js

"use strict";

var _socket_connection = require("../../socket_connection");

cc.Class({
  "extends": cc.Component,
  properties: {
    ID: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    var ID = this.ID;
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var rid = RoomInfos.rid;
    ID.string = rid;
  },
  start: function start() {},
  update: function update(dt) {// let p1 = this.Player1;
    // let p2 = this.Player2;
    // let RoomInfos = cc.director
    //   .getScene()
    //   .getChildByName("RoomInfos")
    //   .getComponent("RoomInfos");
    // var rid = RoomInfos.rid;
    // fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + rid, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.data.Player1) {
    //       p1.string = "P1: Ready";
    //     } else {
    //       p1.string = "P1: Waiting...";
    //     }
    //     if (data.data.Player2) {
    //       p2.string = "P1: Ready";
    //     } else {
    //       p2.string = "P1: Waiting...";
    //     }
    //   });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxQcmVwYXJlUm9vbVxccm9vbWluZm8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJJRCIsInR5cGUiLCJMYWJlbCIsIm9uTG9hZCIsIlJvb21JbmZvcyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInJpZCIsInN0cmluZyIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxFQUFFLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZQO0FBRE0sR0FITDtBQVNQQyxFQUFBQSxNQVRPLG9CQVNFO0FBQ1AsUUFBSUgsRUFBRSxHQUFHLEtBQUtBLEVBQWQ7QUFDQSxRQUFJSSxTQUFTLEdBQUdSLEVBQUUsQ0FBQ1MsUUFBSCxDQUNiQyxRQURhLEdBRWJDLGNBRmEsQ0FFRSxXQUZGLEVBR2JDLFlBSGEsQ0FHQSxXQUhBLENBQWhCO0FBSUEsUUFBSUMsR0FBRyxHQUFHTCxTQUFTLENBQUNLLEdBQXBCO0FBQ0FULElBQUFBLEVBQUUsQ0FBQ1UsTUFBSCxHQUFZRCxHQUFaO0FBQ0QsR0FqQk07QUFrQlBFLEVBQUFBLEtBbEJPLG1CQWtCQyxDQUFFLENBbEJIO0FBb0JQQyxFQUFBQSxNQXBCTyxrQkFvQkFDLEVBcEJBLEVBb0JJLENBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFoRE0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZWRyb29tSUQsIHNlbmRyb29tSUQgfSBmcm9tIFwiLi4vLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIElEOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCBJRCA9IHRoaXMuSUQ7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICB2YXIgcmlkID0gUm9vbUluZm9zLnJpZDtcclxuICAgIElELnN0cmluZyA9IHJpZDtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgLy8gbGV0IHAxID0gdGhpcy5QbGF5ZXIxO1xyXG4gICAgLy8gbGV0IHAyID0gdGhpcy5QbGF5ZXIyO1xyXG4gICAgLy8gbGV0IFJvb21JbmZvcyA9IGNjLmRpcmVjdG9yXHJcbiAgICAvLyAgIC5nZXRTY2VuZSgpXHJcbiAgICAvLyAgIC5nZXRDaGlsZEJ5TmFtZShcIlJvb21JbmZvc1wiKVxyXG4gICAgLy8gICAuZ2V0Q29tcG9uZW50KFwiUm9vbUluZm9zXCIpO1xyXG4gICAgLy8gdmFyIHJpZCA9IFJvb21JbmZvcy5yaWQ7XHJcbiAgICAvLyBmZXRjaChcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbS9cIiArIHJpZCwge1xyXG4gICAgLy8gICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSlcclxuICAgIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIxKSB7XHJcbiAgICAvLyAgICAgICBwMS5zdHJpbmcgPSBcIlAxOiBSZWFkeVwiO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICBwMS5zdHJpbmcgPSBcIlAxOiBXYWl0aW5nLi4uXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMikge1xyXG4gICAgLy8gICAgICAgcDIuc3RyaW5nID0gXCJQMTogUmVhZHlcIjtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgcDIuc3RyaW5nID0gXCJQMTogV2FpdGluZy4uLlwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==