// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// import * as io from "socket.io-client";
// let socket = io.connect('http://localhost:3000/');\
import { getroombyID } from "../axios_connection";
import {
  receivedchessPosition,
  receiveddeadchess,
  receivedroomID,
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
    rid: {
      default: null,
      type: cc.Label,
    },
  },

  onLoad() {},
  updateall() {
    // let map = this.map.getComponent("boardinfo");
    // list += JSON.stringify(map.movecode[map.movecode.length - 1]) + "\n";
  },
  start() {},
  update(dt = 10000) {
    let PlayerInfo = cc.director
      .getScene()
      .getChildByName("PlayerInfo")
      .getComponent("PlayerInfo");
    var rid = this.rid.string;
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    let map = this.map.getComponent("boardinfo");
    let deadredchess = this.deadredchess;
    let deadblackchess = this.deadblackchess;
    var movecodelist = this.movecodelist;

    receivedchessPosition()
      .then((data) => {
        for (var j = 0; j < redc.length; j++) {
          if (
            redc[j].name == data[data.length - 1].name &&
            (redc[j].x != data[data.length - 1].x ||
              redc[j].y != data[data.length - 1].y ||
              (redc[j].x != data[data.length - 1].x &&
                redc[j].y != data[data.length - 1].y))
          ) {
            //move chess
            cc.tween(redc[j])
              .delay(0.1)
              .to(0.125, {
                position: cc.v2(
                  data[data.length - 1].xed,
                  data[data.length - 1].yed + 5
                ),
                scale: 1.1,
              })
              .delay(0.125)
              .to(
                0.5,
                {
                  position: cc.v2(
                    data[data.length - 1].x,
                    data[data.length - 1].y + 15
                  ),
                  scale: 1.3,
                },
                { easing: "backIn" }
              )
              .delay(0.125)
              .to(0.125, {
                position: cc.v2(
                  data[data.length - 1].x,
                  data[data.length - 1].y
                ),
                scale: 1,
              })
              .start();

            getroombyID(rid).then((data) => {
              if (data.data.Player1 == PlayerInfo.uid) {
                redchess.pauseSystemEvents(true);
                blackchess.pauseSystemEvents(true);
              }
              if (data.data.Player2 == PlayerInfo.uid) {
                redchess.pauseSystemEvents(true);
                blackchess.resumeSystemEvents(true);
              }
            });
            // redchess.pauseSystemEvents(true);
            // blackchess.resumeSystemEvents(true);
            break;
          }
        }
        for (var k = 0; k < blackc.length; k++) {
          if (
            blackc[k].name == data[data.length - 1].name &&
            (blackc[k].x != data[data.length - 1].x ||
              blackc[k].y != data[data.length - 1].y ||
              (blackc[k].x != data[data.length - 1].x &&
                blackc[k].y != data[data.length - 1].y))
          ) {
            //move chess
            cc.tween(blackc[k])
              .delay(0.1)
              .to(0.125, {
                position: cc.v2(
                  data[data.length - 1].xed,
                  data[data.length - 1].yed + 5
                ),
                scale: 1.1,
              })
              .delay(0.125)
              .to(
                0.5,
                {
                  position: cc.v2(
                    data[data.length - 1].x,
                    data[data.length - 1].y + 15
                  ),
                  scale: 1.3,
                },
                { easing: "backIn" }
              )
              .delay(0.125)
              .to(0.125, {
                position: cc.v2(
                  data[data.length - 1].x,
                  data[data.length - 1].y
                ),
                scale: 1,
              })
              .start();
            getroombyID(rid).then((data) => {
              if (data.data.Player1 == PlayerInfo.uid) {
                redchess.resumeSystemEvents(true);
                blackchess.pauseSystemEvents(true);
              }
              if (data.data.Player2 == PlayerInfo.uid) {
                redchess.pauseSystemEvents(true);
                blackchess.pauseSystemEvents(true);
              }
            });
            // blackchess.pauseSystemEvents(true);
            // redchess.resumeSystemEvents(true);
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
      })
      .catch(function () {
        console.log("Promise Rejected");
      });
    receiveddeadchess()
      .then((data) => {
        for (var j = 0; j < redc.length; j++) {
          if (redc[j].name == data.name) {
            map.countreddead++;
            // redc[j].setScale(0.8, 0.8);
            cc.tween(redc[j])
              .delay(1)
              .to(0, {
                position: cc.v2(187.5 - map.countreddead * map.chesssize, 0),
              })
              .call(() => {
                this.node.pauseSystemEvents(true);
                this.node.parent = deadredchess;
              })
              .start();

            // redc[j].anchorX = 1;
            // redc[j].anchorY = 0.5;
            // redc[j].y = 0;
            // redc[j].x = 187.5 - map.countreddead * map.chesssize;
            // redc[j].pauseSystemEvents(true);
            // redc[j].parent = deadredchess;
          }
        }
        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].name == data.name) {
            map.countblackdead++;
            cc.tween(blackc[k])
              .delay(1)
              .to(0, {
                position: cc.v2(-187.5 + map.countblackdead * map.chesssize, 0),
              })
              .call(() => {
                this.node.pauseSystemEvents(true);
                this.node.parent = deadblackchess;
              })
              .start();

            // blackc[k].anchorX = 0;
            // blackc[k].anchorY = 0.5;
            // blackc[k].y = 0;
            // blackc[k].x = -187.5 + map.countblackdead * map.chesssize;
            // blackc[k].pauseSystemEvents(true);
            // blackc[k].parent = deadblackchess;
          }
        }
      })
      .catch(function () {
        console.log("Promise Rejected");
      });
  },
});
