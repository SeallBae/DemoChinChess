"use strict";
cc._RF.push(module, '33f16azCYRG95oywSUyyCx4', 'movetorooms');
// script/changescene/movetorooms.js

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
  load_scene: function load_scene() {
    cc.director.loadScene("daucuocvangrooms");
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();