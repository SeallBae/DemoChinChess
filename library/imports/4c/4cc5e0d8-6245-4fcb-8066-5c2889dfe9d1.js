"use strict";
cc._RF.push(module, '4cc5eDYYkVPy4BmXCiJ3+nR', 'PlayerInfo');
// script/PlayerInfo.js

"use strict";

var _socket_connection = require("./socket_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    uid: 0,
    uname: "",
    state: ""
  },
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
    var uid = this.uid;
    var uname = this.uname;
  },
  start: function start() {},
  update: function update(dt) {
    if (dt === void 0) {
      dt = 1000;
    }

    (0, _socket_connection.senduserID)(this.uid);
    cc.game.addPersistRootNode(this.node);
  }
});

cc._RF.pop();