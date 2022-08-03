"use strict";
cc._RF.push(module, '56a93gRbI1B75pcuNQS6gV5', 'Playnow');
// script/Playnow.js

"use strict";

require("regenerator-runtime/runtime");

var _socket_connection = require("./socket_connection");

var _axios_connection = require("./axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    Username: {
      "default": null,
      type: cc.Label
    },
    PlayerInfo: {
      "default": null,
      type: cc.Node
    }
  },
  onEnable: function onEnable() {},
  onload: function onload() {},
  start: function start() {},
  load_scene: function load_scene() {
    var PlayerInfo = this.PlayerInfo.getComponent("PlayerInfo");
    var name = this.Username.string;
    (0, _axios_connection.createUser)(name).then(function (data) {
      PlayerInfo.uname = data.data.Username;
      PlayerInfo.uid = data.data.id;
      cc.director.loadScene("homepage");
    });
  },
  update: function update(dt) {}
});

cc._RF.pop();