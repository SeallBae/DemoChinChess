// let socket = io("http://localhost:3000", {transports : ['websocket'],
//     query: {
//       userId: 1,
//       cc:"cc",
//     },
//   });

import { createmovehistory, getmovehistory,getlastmovehistory } from "../axios_connection";
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
    let RoomInfos = cc.director
      .getScene()
      .getChildByName("RoomInfos")
      .getComponent("RoomInfos");
    var rid = RoomInfos.rid;
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

              //   sendchessPosition(map.movecode);
              // receivedchessPosition()
              //   .then((data) => {
              //     map.movecode = data;
              //     map.movecode.push({
              //       name: self.node.name,
              //       xed: self.node.x,
              //       yed: self.node.y,
              //       x: this.x,
              //       y: this.y,
              //     });
              //   })
              //   .then((data) => {
              //     console.table(map.movecode);
              //     sendchessPosition(map.movecode);
              //   });
                createmovehistory(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(data=>{
                  getlastmovehistory(rid).then(data=>{
                    sendchessPosition(data);
                  })
                });
                
                redchess.pauseSystemEvents(true);
                this.setScale(1, 1);
                this.off("touchstart", this.function, posmove[i]);
                break;
              }
            }
            if (kill == 0) {

              // sendchessPosition(map.movecode);
              // receivedchessPosition()
              //   .then((data) => {
              //     map.movecode = data;
              //     map.movecode.push({
              //       name: self.node.name,
              //       xed: self.node.x,
              //       yed: self.node.y,
              //       x: this.x,
              //       y: this.y,
              //     });
              //   })
              //   .then((data) => {
              //     console.table(map.movecode);
              //     sendchessPosition(map.movecode);
              //   });
              createmovehistory(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(data=>{
                getlastmovehistory(rid).then(data=>{
                  sendchessPosition(data);
                })
              });

              redchess.pauseSystemEvents(true);
              this.setScale(1, 1);
              this.off("touchstart", this.function, posmove[i]);
            }
          }
          for (var reset = 0; reset < posmove.length; reset++) {
            posmove[reset].setScale(1, 1);
            posmove[reset].active = false;
          }
        },
        posmove[i]
      );
    }
  },
  blacktouchmove(i) {
    let RoomInfos = cc.director
      .getScene()
      .getChildByName("RoomInfos")
      .getComponent("RoomInfos");
    var rid = RoomInfos.rid;
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

                // sendchessPosition(map.movecode);
                // receivedchessPosition()
                //   .then((data) => {
                //     console.log(data);
                //     map.movecode = data;
                //     console.log(map.movecode);
                //     map.movecode.push({
                //       name: self.node.name,
                //       xed: self.node.x,
                //       yed: self.node.y,
                //       x: this.x,
                //       y: this.y,
                //     });
                //   })
                //   .then((data) => {
                //     console.table(map.movecode);
                //     sendchessPosition(map.movecChijode);
                //   });
                createmovehistory(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(data=>{
                    getlastmovehistory(rid).then(data=>{
                      sendchessPosition(data);
                    })
                  });

                blackchess.pauseSystemEvents(true);
                this.setScale(1, 1);
                this.off("touchstart", this.function, posmove[i]);
                break;
              }
            }
            if (kill == 0) {

              // sendchessPosition(map.movecode);
              // receivedchessPosition()
              //   .then((data) => {
              //     map.movecode = data;
              //     map.movecode.push({
              //       name: self.node.name,
              //       xed: self.node.x,
              //       yed: self.node.y,
              //       x: this.x,
              //       y: this.y,
              //     });
              //   })
              //   .then((data) => {
              //     console.table(map.movecode);
              //     sendchessPosition(map.movecode);
              //   });
              createmovehistory(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(data=>{
                getlastmovehistory(rid).then(data=>{
                  sendchessPosition(data);
                })
              });

              blackchess.pauseSystemEvents(true);
              this.setScale(1, 1);
              this.off("touchstart", this.function, posmove[i]);
            }
          }
          for (var reset = 0; reset < posmove.length; reset++) {
            posmove[reset].setScale(1, 1);
            posmove[reset].active = false;
          }
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
