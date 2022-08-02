
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
    Info: {
      "default": null,
      type: cc.Label
    },
    Player1: {
      "default": null,
      type: cc.Label
    },
    Player2: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    var info = this.Info;
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var rid = RoomInfos.rid;
    info.string = "Room no " + rid;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxQcmVwYXJlUm9vbVxccm9vbWluZm8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJJbmZvIiwidHlwZSIsIkxhYmVsIiwiUGxheWVyMSIsIlBsYXllcjIiLCJvbkxvYWQiLCJpbmZvIiwiUm9vbUluZm9zIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwicmlkIiwic3RyaW5nIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkwsS0FESTtBQUtWQyxJQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGLEtBTEM7QUFTVkUsSUFBQUEsT0FBTyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRjtBQVRDLEdBSEw7QUFpQlBHLEVBQUFBLE1BakJPLG9CQWlCRTtBQUNQLFFBQUlDLElBQUksR0FBRyxLQUFLTixJQUFoQjtBQUNBLFFBQUlPLFNBQVMsR0FBR1gsRUFBRSxDQUFDWSxRQUFILENBQ2JDLFFBRGEsR0FFYkMsY0FGYSxDQUVFLFdBRkYsRUFHYkMsWUFIYSxDQUdBLFdBSEEsQ0FBaEI7QUFJQSxRQUFJQyxHQUFHLEdBQUdMLFNBQVMsQ0FBQ0ssR0FBcEI7QUFDQU4sSUFBQUEsSUFBSSxDQUFDTyxNQUFMLEdBQWMsYUFBYUQsR0FBM0I7QUFDRCxHQXpCTTtBQTBCUEUsRUFBQUEsS0ExQk8sbUJBMEJDLENBQUUsQ0ExQkg7QUE0QlBDLEVBQUFBLE1BNUJPLGtCQTRCQUMsRUE1QkEsRUE0QkksQ0FDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQXhETSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWNlaXZlZHJvb21JRCwgc2VuZHJvb21JRCB9IGZyb20gXCIuLi8uLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgSW5mbzoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBQbGF5ZXIxOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIFBsYXllcjI6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IGluZm8gPSB0aGlzLkluZm87XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICB2YXIgcmlkID0gUm9vbUluZm9zLnJpZDtcclxuICAgIGluZm8uc3RyaW5nID0gXCJSb29tIG5vIFwiICsgcmlkO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgdXBkYXRlKGR0KSB7XHJcbiAgICAvLyBsZXQgcDEgPSB0aGlzLlBsYXllcjE7XHJcbiAgICAvLyBsZXQgcDIgPSB0aGlzLlBsYXllcjI7XHJcbiAgICAvLyBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgIC8vICAgLmdldFNjZW5lKClcclxuICAgIC8vICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAvLyAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICAvLyB2YXIgcmlkID0gUm9vbUluZm9zLnJpZDtcclxuICAgIC8vIGZldGNoKFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tL1wiICsgcmlkLCB7XHJcbiAgICAvLyAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEpIHtcclxuICAgIC8vICAgICAgIHAxLnN0cmluZyA9IFwiUDE6IFJlYWR5XCI7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHAxLnN0cmluZyA9IFwiUDE6IFdhaXRpbmcuLi5cIjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIyKSB7XHJcbiAgICAvLyAgICAgICBwMi5zdHJpbmcgPSBcIlAxOiBSZWFkeVwiO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICBwMi5zdHJpbmcgPSBcIlAxOiBXYWl0aW5nLi4uXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KTtcclxuICB9LFxyXG59KTtcclxuIl19