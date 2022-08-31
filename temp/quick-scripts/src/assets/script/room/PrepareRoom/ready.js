"use strict";
cc._RF.push(module, '70d19pJT7BEV6aRveYIWgtp', 'ready');
// script/room/PrepareRoom/ready.js

"use strict";

var _axios_connection = require("../../axios_connection");

var _socket_connection = require("../../socket_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    waiting: {
      "default": null,
      type: cc.Node
    },
    startbutton: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {// waiting = this.waiting;
    // startbutton = this.startbutton;
    // receivedroomID().then((data) => {
    //   getroombyID(data).then((data) => {
    //     if (data.data.Player2 != null) {
    //       waiting.active = false;
    //       waiting.opacity = 0;
    //       startbutton.active = true;
    //       startbutton.opacity = 255;
    //     }
    //   });
    // });
  }
});

cc._RF.pop();