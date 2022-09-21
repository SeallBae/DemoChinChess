// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { senduserID } from "./socket_connection";

cc.Class({
  extends: cc.Component,

  properties: {
    uid: 0,
    uname: "",
    state: "",
  },

  onLoad() {
    cc.game.addPersistRootNode(this.node);
    let uid = this.uid;
    let uname = this.uname;
  },

  start() {},

  update(dt = 1000) {
    senduserID(this.uid);
    cc.game.addPersistRootNode(this.node);
  },
});
