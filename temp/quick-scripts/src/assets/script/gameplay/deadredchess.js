"use strict";
cc._RF.push(module, 'c155cBSDG1NmYAiWwPWFf/H', 'deadredchess');
// script/gameplay/deadredchess.js

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
  onLoad: function onLoad() {
    var map = this.map.getComponent("boardinfo");
  },
  start: function start() {},
  update: function update(dt) {
    var map = this.map.getComponent("boardinfo");
  }
});

cc._RF.pop();