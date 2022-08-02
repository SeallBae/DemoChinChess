"use strict";
cc._RF.push(module, 'a7a180F7TRL+ZjqFkUoK1kp', 'rookred');
// script/board/chess/redchess/rookred.js

"use strict";

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
    var map = this.map.getComponent('boardinfo');
    var touchmove = this.map.getComponent('touchmove');
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;
    self = this; //deactive before another click

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].active == true) {
        posmove[i].active = false;
      }
    } //redturn


    blackchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //vertical
      if (posmove[i].x == this.node.x) {
        posmove[i].active = true; //verticalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y != self.node.y) {
            if (posmove[i].y > self.node.y && posmove[i].y > redc[j].y && redc[j].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < redc[j].y && redc[j].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y != self.node.y) {
            if (posmove[i].y > self.node.y && posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }
      } //horizontal


      if (posmove[i].y == this.node.y) {
        posmove[i].active = true; //horizontalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].y == self.node.y && redc[j].x != self.node.x) {
            if (posmove[i].x > self.node.x && posmove[i].x > redc[j].x && redc[j].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < redc[j].x && redc[j].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].y == self.node.y && blackc[k].x != self.node.x) {
            if (posmove[i].x > self.node.x && posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) {
              posmove[i].active = false;
            }
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
      } //touchmove


      touchmove.redtouchmove(i);
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();