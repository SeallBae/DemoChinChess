"use strict";
cc._RF.push(module, '489713er9BIp6N3d2fdSPUg', 'boardinfo');
// script/board/boardinfo.js

"use strict";

var map = cc.Class({
  "extends": cc.Component,
  properties: {
    movecode: [],
    countblackdead: 0,
    countreddead: 0,
    s: 38,
    redcastleupbound: -95,
    redcastledownbound: -171,
    redcastleleftbound: -38,
    redcastlerightbound: 38,
    redriver: -19,
    blackriver: 19,
    blackcastleupbound: 171,
    blackcastledownbound: 95,
    blackcastleleftbound: -38,
    blackcastlerightbound: 38,
    scale: 3,
    chesssize: 30
  },
  onLoad: function onLoad() {},
  test: function test() {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();