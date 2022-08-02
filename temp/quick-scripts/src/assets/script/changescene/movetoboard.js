"use strict";
cc._RF.push(module, 'abc7aL2BERPfa6YG6jq8jC4', 'movetoboard');
// script/changescene/movetoboard.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  load_scene: function load_scene() {
    cc.director.loadScene("board");
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();