"use strict";
cc._RF.push(module, '35807QmkQxFro+IzZbqGmDU', 'backtoroomlist');
// script/changescene/backtoroomlist.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  backtoroomlist: function backtoroomlist() {
    var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var roomID = RoomInfos.rid;
    (0, _axios_connection.getroombyID)(roomID).then(function (data) {
      console.log(data);

      if (data.data.Player1 != null && data.data.Player2 != null) {
        if (data.data.Player1 == PlayerInfo.uid) {
          var p2 = data.data.Player2;
          (0, _axios_connection.quitfullroombyIDasp1)(roomID, p2).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }

        if (data.data.Player2 == PlayerInfo.uid) {
          (0, _axios_connection.quitfullroombyIDasp2)(roomID).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }
      }

      if (data.data.Player1 == null && data.data.Player2 != null) {
        (0, _axios_connection.quitroombyIDasp2)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("rooms");
        }); // .catch(function () {
        //   console.log("Promise Rejected");
        // });
      }

      if (data.data.Player1 != null && data.data.Player2 == null) {
        (0, _axios_connection.quitroombyIDasp1)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("rooms");
        }); // .catch(function () {
        //   console.log("Promise Rejected");
        // });
      }
    })["catch"](function () {
      console.log("Promise Rejected");
    });
  },
  start: function start() {},
  onDisable: function onDisable() {} // update (dt) {},

});

cc._RF.pop();