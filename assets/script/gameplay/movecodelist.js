
import {
  receivedchessPosition,
  sendchessPosition,
  senddeadchess,
  receiveddeadchess,
} from "../socket_connection";
cc.Class({
  extends: cc.Component,

  properties: {
    list: {
      default: "",
      multiline: true,
    },
    map: {
      default: null,
      type: cc.Node,
    },
    movecodelist: {
      default: null,
      type: cc.Label,
    },
  },

  updatelist() {
    // let socket = io.connect("http://localhost:3000", { transports : ['websocket'] });
  },

  // })
  start() {},
  update(dt) {},
});
