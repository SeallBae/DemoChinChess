import { sendroomID } from "../socket_connection";

cc.Class({
  extends: cc.Component,

  properties: {
    rid: null,
  },

  onLoad() {
    cc.game.addPersistRootNode(this.node);
    let rid = this.rid;
  },

  start() {},
  onDisable() {},
  update(dt) {
    cc.game.addPersistRootNode(this.node);
    sendroomID(this.rid);
  },
});
