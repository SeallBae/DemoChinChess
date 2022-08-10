"use strict";
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
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    (0, _socket_connection.receiveduserID)().then(function (data) {
      var uid = data;
      console.log("uid", uid);
      (0, _axios_connection.createroom)(uid).then(function (data) {
        console.log(data);
        RoomInfos.rid = data;
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