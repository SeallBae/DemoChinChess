"use strict";
cc._RF.push(module, 'bdec74ubcJE55YL34VPYD2t', 'pawnred');
// script/board/chess/redchess/pawnred.js

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


    blackchess.pauseSystemEvents(true); //logicmove

    for (var i = 0; i < posmove.length; i++) {
      if (this.node.y < map.blackriver) {
        //foward
        if (posmove[i].x == self.node.x && posmove[i].y == self.node.y + map.s) {
          posmove[i].active = true;
        }
      } else if (self.node.y >= map.blackriver) {
        //foward
        if (posmove[i].x == self.node.x && posmove[i].y == self.node.y + map.s) {
          posmove[i].active = true;
        } //left


        if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y) {
          posmove[i].active = true;
        } //right


        if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y) {
          posmove[i].active = true;
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