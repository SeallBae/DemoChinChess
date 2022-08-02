"use strict";
cc._RF.push(module, '6fb25MA9YVDtroFv2qJGESI', 'Sendchat');
// script/room/PrepareRoom/Sendchat.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    chat: {
      "default": null,
      type: cc.Label
    },
    chatholder: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  emitchat: function emitchat() {
    var socket = io.connect("http://localhost:3000", {
      transports: ['websocket']
    });
    socket.emit('chat send', this.chat.string);
    this.chat.string = "";
    var chatholder = this.chatholder;
    socket.on('chat received', function (data) {
      chatholder.string += "\n";
      chatholder.string += data;
    });
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();