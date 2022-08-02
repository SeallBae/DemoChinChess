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
    s: 94,
    redcastleupbound: -235,
    redcastledownbound: -423,
    redcastleleftbound: -94,
    redcastlerightbound: 94,
    redriver: -47,
    blackriver: 47,
    blackcastleupbound: 423,
    blackcastledownbound: 235,
    blackcastleleftbound: -94,
    blackcastlerightbound: 94,
    scale: 3,
    chesssize: 60
  },
  onLoad: function onLoad() {},
  test: function test() {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();