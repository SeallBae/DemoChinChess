// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import { getroombyID } from "../../axios_connection";
import { receivedroomID } from "../../socket_connection";
cc.Class({
  extends: cc.Component,

  properties: {
    waiting: {
      default: null,
      type: cc.Node,
    },
    startbutton: {
      default: null,
      type: cc.Node,
    },
  },

  onLoad() {},

  start() {},

  update(dt) {
    // waiting = this.waiting;
    // startbutton = this.startbutton;
    // receivedroomID().then((data) => {
    //   getroombyID(data).then((data) => {
    //     if (data.data.Player2 != null) {
    //       waiting.active = false;
    //       waiting.opacity = 0;
    //       startbutton.active = true;
    //       startbutton.opacity = 255;
    //     }
    //   });
    // });
  },
});
