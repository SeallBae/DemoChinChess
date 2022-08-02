"use strict";
cc._RF.push(module, 'd5c582AxU5Jtpx0heysGbGB', 'bishopred');
// script/board/chess/redchess/bishopred.js

"use strict";

var _socket_connection = require("../../../socket_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    place: {
      "default": null,
      type: cc.Node
    },
    redchess: {
      "default": null,
      type: cc.Node
    },
    blackchess: {
      "default": null,
      type: cc.Node
    },
    map: {
      "default": null,
      type: cc.Node
    }
  },
  showpossiblemove: function showpossiblemove() {
    var map = this.map.getComponent("boardinfo");
    var touchmove = this.map.getComponent("touchmove");
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;
    self = this;
    var uid = uid;
    (0, _socket_connection.receivedroomID)().then(function (data) {
      fetch("fetch(https://chinese-chess-vnp.herokuapp.com/api/room/" + data, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        (0, _socket_connection.receiveduserID)().then(function (data) {
          if (data == uid) {
            console.log("uid p1", uid);
          }
        });
      });
    }); //deactive before another click

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].active == true) {
        posmove[i].active = false;
      }
    } //redturn


    blackchess.pauseSystemEvents(true); //logic move

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].y <= map.redriver) {
        //upright
        if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y + map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }
        } //upleft


        if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y + map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }
        } //downright


        if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y - map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
          }
        } //downleft


        if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y - map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
          }
        } //block other chess


        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y) {
            posmove[i].active = false;
          }
        } //hightlight killable


        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && posmove[i].active == true) {
            posmove[i].setScale(map.scale, map.scale);
          }
        }
      } //touchmove


      touchmove.redtouchmove(i);
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();