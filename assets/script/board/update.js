import { getlastmovehistory, getroombyID } from "../axios_connection";
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
  start() {},
  update(dt = 10000) {
    let PlayerInfo = cc.director
      .getScene()
      .getChildByName("PlayerInfo")
      .getComponent("PlayerInfo");
    let RoomInfos = cc.director
      .getScene()
      .getChildByName("RoomInfos")
      .getComponent("RoomInfos");
    var rid = RoomInfos.rid;
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
        console.log("dataname" + data.Name);
        
        for (var j = 0; j < redc.length; j++) {
          if (
            redc[j].name == data.Name
          ) {
            //move chess
            cc.tween(redc[j])
              .delay(0.1)
              .to(0.125, {
                position: cc.v2(
                  data.Xed,
                  data.Yed + 5
                ),
                scale: 1.1,
              })
              .delay(0.125)
              .to(
                0.5,
                {
                  position: cc.v2(
                    data.X,
                    data.Y + 15
                  ),
                  scale: 1.3,
                },
                { easing: "backIn" }
              )
              .delay(0.125)
              .to(0.125, {
                position: cc.v2(
                  data.X,
                  data.Y,
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
            break;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (
            blackc[k].name == data.Name
          ) {
            //move chess
            cc.tween(blackc[k])
              .delay(0.1)
              .to(0.125, {
                position: cc.v2(
                  data.Xed,
                  data.Yed + 5
                ),
                scale: 1.1,
              })
              .delay(0.125)
              .to(
                0.5,
                {
                  position: cc.v2(
                    data.X,
                    data.Y + 15
                  ),
                  scale: 1.3,
                },
                { easing: "backIn" }
              )
              .delay(0.125)
              .to(0.125, {
                position: cc.v2(
                  data.X,
                  data.Y
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
            break;
          }
        }

        // if (
        //   this.movelist.length == 0 ||
        //   this.movelist[this.movelist.length - 1] !==
        //     JSON.stringify(data[data.length - 1])
        // ) {
        //   this.movelist.push(JSON.stringify(data[data.length - 1]));
        // }
        // movecodelist.string = this.movelist;

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
