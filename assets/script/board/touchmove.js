// let socket = io("http://localhost:3000", {transports : ['websocket'],
//     query: {
//       userId: 1,
//       cc:"cc",
//     },
//   });

import {
  receivedchessPosition,
  sendchessPosition,
  senddeadchess,
  receiveddeadchess,
  sendstate,
} from "../socket_connection";

// const { io } = require("socket.io-client");
// import * as io from "socket.io-client";
// let socket = io.connect('http://localhost:3000/');
//
cc.Class({
  extends: cc.Component,
  properties: {
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
    map: {
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
    movecodelist: {
      default: null,
      type: cc.Node,
    },
    updateall: {
      default: null,
      type: cc.Node,
    },
    // socket: io.connect("http://localhost:3000", { transports : ['websocket'] }),
  },
  redtouchmove(i) {
    let updateall = this.updateall.getComponent("update");
    let map = this.map.getComponent("boardinfo");
    let deadblackchess = this.deadblackchess;
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;

    if (posmove[i].active == true) {
      posmove[i].on(
        "touchstart",
        function () {
          if (self.node.isChildOf(redchess)) {
            var kill = 0;
            for (var k = 0; k < blackc.length; k++) {
              if (blackc[k].x == this.x && blackc[k].y == this.y) {
                senddeadchess({
                  name: blackc[k].name,
                });
                kill++;
                map.movecode.push({
                  name: self.node.name,
                  xed: self.node.x,
                  yed: self.node.y,
                  x: this.x,
                  y: this.y,
                });
                console.table(map.movecode);
                sendchessPosition(map.movecode);
                // console.log(self.node.name, this.x, this.y);
                // const data = receivedchessPosition();
                // console.log(data);

                this.setScale(1, 1);
                this.off("touchstart", this.function, posmove[i]);
                break;
              }
            }
            if (kill == 0) {
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y,
              });
              console.table(map.movecode);
              sendchessPosition(map.movecode);
              this.setScale(1, 1);
              this.off("touchstart", this.function, posmove[i]);
            }
          }
          for (var reset = 0; reset < posmove.length; reset++) {
            posmove[reset].setScale(1, 1);
            posmove[reset].active = false;
          }
          //blackturn
          blackchess.pauseSystemEvents(true);
          // console.log(blackchess.pauseSystemEvents);
          redchess.pauseSystemEvents(true);
          sendstate("red");
          updateall.updateall();
          // updateall.updateall(self.node.name, self.node.x, self.node.y);
        },
        posmove[i]
      );
    }
  },
  blacktouchmove(i) {
    let updateall = this.updateall.getComponent("update");
    let map = this.map.getComponent("boardinfo");
    let deadredchess = this.deadredchess;
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;
    if (posmove[i].active == true) {
      posmove[i].on(
        "touchstart",
        function () {
          if (self.node.isChildOf(blackchess)) {
            var kill = 0;
            for (var j = 0; j < redc.length; j++) {
              if (redc[j].x == this.x && redc[j].y == this.y) {
                senddeadchess({
                  name: redc[j].name,
                });

                kill++;
                map.movecode.push({
                  name: self.node.name,
                  xed: self.node.x,
                  yed: self.node.y,
                  x: this.x,
                  y: this.y,
                });
                console.table(map.movecode);
                sendchessPosition(map.movecode);
                this.setScale(1, 1);
                this.off("touchstart", this.function, posmove[i]);
                break;
              }
            }
            if (kill == 0) {
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y,
              });
              console.table(map.movecode);
              sendchessPosition(map.movecode);
              this.setScale(1, 1);
              this.off("touchstart", this.function, posmove[i]);
            }
          }
          for (var reset = 0; reset < posmove.length; reset++) {
            posmove[reset].setScale(1, 1);
            posmove[reset].active = false;
          }
          //redturn
          // newposition(self.node.name, self.node.x, self.node.y);
          redchess.pauseSystemEvents(true);
          blackchess.pauseSystemEvents(true);
          // movecodelist.updatelist();
          updateall.updateall();
          // updateall.updateall(self.node.name, self.node.x, self.node.y);
        },
        posmove[i]
      );
    }
  },
  // newposition(name, x, y){
  //     return 'name', x, y;
  // },
  start() {},
  onLoad() {},
  update(dt) {},
});