"use strict";
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