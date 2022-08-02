"use strict";
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