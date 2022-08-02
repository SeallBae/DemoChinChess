"use strict";
cc._RF.push(module, '2ef8cxgpXVNlb48jWyL7OTZ', 'movetoroom');
// script/changescene/movetoroom.js

"use strict";

var _socket_connection = require("../socket_connection");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  create_room: function create_room() {},
  load_scene: function load_scene() {
    cc.director.loadScene("rooms");
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();