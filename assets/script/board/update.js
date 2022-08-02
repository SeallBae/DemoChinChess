// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// import * as io from "socket.io-client";
// let socket = io.connect('http://localhost:3000/');\
import {
  receivedchessPosition,
  receiveddeadchess,
  sendchessPosition,
} from "../socket_connection";

cc.Class({
  extends: cc.Component,

  properties: {
    movecodelist: {
      default: null,
      type: cc.Label,
    },
    place: {
      default: null,
      type: cc.Node,
    },
    redchess: {
      default: null,
      type: cc.Node,
    },
    blackchess: {
      default: null,
      type: cc.Node,
    },
    deadredchess: {
      default: null,
      type: cc.Node,
    },
    deadblackchess: {
      default: null,
      type: cc.Node,
    },
    map: {
      default: null,
      type: cc.Node,
    },
    movelist: [],
  },

  onLoad() {},
  updateall() {
    // let map = this.map.getComponent("boardinfo");
    // list += JSON.stringify(map.movecode[map.movecode.length - 1]) + "\n";
  },
  start() {},
  update(dt = 10000) {
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    let map = this.map.getComponent("boardinfo");
    let deadredchess = this.deadredchess;
    let deadblackchess = this.deadblackchess;
    var movecodelist = this.movecodelist;

    receivedchessPosition().then((data) => {
      for (var j = 0; j < redc.length; j++) {
        if (redc[j].name == data[data.length - 1].name) {
          redc[j].x = data[data.length - 1].x;
          redc[j].y = data[data.length - 1].y;
          redchess.pauseSystemEvents(true);
          blackchess.resumeSystemEvents(true);
          break;
        }
      }
      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].name == data[data.length - 1].name) {
          blackc[k].x = data[data.length - 1].x;
          blackc[k].y = data[data.length - 1].y;
          blackchess.pauseSystemEvents(true);
          redchess.resumeSystemEvents(true);
          break;
        }
      }
      if (
        this.movelist.length == 0 ||
        this.movelist[this.movelist.length - 1] !==
          JSON.stringify(data[data.length - 1])
      ) {
        this.movelist.push(JSON.stringify(data[data.length - 1]));
      }
      movecodelist.string = this.movelist;
    });
    receiveddeadchess().then((data) => {
      for (var j = 0; j < redc.length; j++) {
        if (redc[j].name == data.name) {
          map.countreddead++;
          redc[j].setScale(0.8, 0.8);
          redc[j].x = 0;
          redc[j].y = -30 - map.countreddead * (map.chesssize / 2);
          redc[j].pauseSystemEvents(true);
          redc[j].parent = deadredchess;
        }
      }
      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].name == data.name) {
          map.countblackdead++;
          blackc[k].setScale(0.8, 0.8);
          blackc[k].x = 0;
          blackc[k].y = -30 - map.countblackdead * (map.chesssize / 2);
          blackc[k].pauseSystemEvents(true);
          blackc[k].parent = deadblackchess;
        }
      }
    });
  },
});
