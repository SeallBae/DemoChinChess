"use strict";
cc._RF.push(module, 'aaf59iF+dhLp5Ly+mraLwIg', 'Movecode');
// script/board/Movecode.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var movecode = cc.Class({
  name: 'MCode',
  properties: {
    id: 0
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    movecode: {
      "default": [],
      type: movecode
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();