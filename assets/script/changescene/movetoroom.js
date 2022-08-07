import { receiveduserID } from "../socket_connection";

cc.Class({
  extends: cc.Component,

  properties: {},
  onLoad() {},
  create_room() {},
  load_scene() {
    cc.director.loadScene("rooms");
  },
  start() {},

  // update (dt) {},
});
