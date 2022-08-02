"use strict";
cc._RF.push(module, '56a93gRbI1B75pcuNQS6gV5', 'Playnow');
// script/Playnow.js

"use strict";

var _socket_connection = require("./socket_connection");

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
    fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: name
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log("data.data.id", data.data.id);
      PlayerInfo.uid = data.data.id;
      cc.director.loadScene("homepage");
    }); // receiveduserID().then((data) => {
    //   PlayerInfo.uid = data;
    //   PlayerInfo.uname = name;
    // });
  },
  update: function update(dt) {}
}); // var app = require('./socket_connection.js');

cc._RF.pop();