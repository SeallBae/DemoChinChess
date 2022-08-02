"use strict";
cc._RF.push(module, '61abf16dOZKurWh+RfPFijO', 'Blur');
// script/Blur.js

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
  blur: function blur() {
    this.node.opacity = 160;
    this.node.pauseSystemEvents(true);
  },
  unblur: function unblur() {
    this.node.opacity = 255;
    this.node.resumeSystemEvents(true);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();