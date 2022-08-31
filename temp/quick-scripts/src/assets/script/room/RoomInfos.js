"use strict";
cc._RF.push(module, 'd5bd380ExBFZokBSMnQRAp0', 'RoomInfos');
// script/room/RoomInfos.js

"use strict";

var _socket_connection = require("../socket_connection");

cc.Class({
  "extends": cc.Component,
  properties: {
    rid: null
  },
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
    var rid = this.rid;
  },
  start: function start() {},
  onDisable: function onDisable() {},
  update: function update(dt) {
    cc.game.addPersistRootNode(this.node);
    (0, _socket_connection.sendroomID)(this.rid);
  }
});

cc._RF.pop();