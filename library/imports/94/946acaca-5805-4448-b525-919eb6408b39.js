"use strict";
cc._RF.push(module, '946acrKWAVESLUlkZ62QIs5', 'Touch');
// script/Touch.js

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
  onLoad: function onLoad() {},
  pointTouch: function pointTouch() {
    this.node.on('touchstart', function () {
      this.node.opacity = 160;
    }, this.node);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();