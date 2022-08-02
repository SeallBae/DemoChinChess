"use strict";
cc._RF.push(module, 'f2a08HiXB5Jc61OiaeOIbiX', 'Showchat');
// script/room/PrepareRoom/Showchat.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  showchat: function showchat() {
    var socket = io.connect("http://localhost:3000", {
      transports: ['websocket']
    });
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();