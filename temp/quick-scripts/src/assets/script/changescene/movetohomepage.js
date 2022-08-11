"use strict";
cc._RF.push(module, '1378eRIEVVPm5uYeRs6dOAX', 'movetohomepage');
// script/changescene/movetohomepage.js

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
    cc.director.loadScene("homepage");
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();