"use strict";
cc._RF.push(module, '52f25mMMVBNeqVQ2ztztcc0', 'redchess');
// script/board/chess/redchess/redchess.js

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
    map: {
      "default": null,
      type: cc.Node
    }
  },
  onload: function onload() {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();