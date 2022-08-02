"use strict";
cc._RF.push(module, 'ed76eGXgtBEVYoiK2iOaAyO', 'canonblack');
// script/board/chess/blackchess/canonblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //vertical
      if (posmove[i].x == this.node.x) {
        posmove[i].active = true; //verticalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y != self.node.y) {
            if (posmove[i].y >= redc[j].y && redc[j].y > self.node.y || posmove[i].y <= redc[j].y && redc[j].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y != self.node.y) {
            if (posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }
      } //horizontal


      if (posmove[i].y == this.node.y && posmove[i].active == false) {
        posmove[i].active = true; //horizontalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].y == self.node.y && redc[j].x != self.node.x) {
            if (posmove[i].x >= redc[j].x && redc[j].x > self.node.x || posmove[i].x <= redc[j].x && redc[j].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].y == self.node.y && blackc[k].x != self.node.x) {
            if (posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }
      } //canonshot
      //up


      if (posmove[i].x == self.node.x && posmove[i].y > self.node.y) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.y < redc[bipod].y && redc[bipod].y < redc[j].y && redc[bipod].x == self.node.x) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.y < blackc[bipod].y && blackc[bipod].y < redc[j].y && blackc[bipod].x == self.node.x) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = 0; target < posmove.length; target++) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].y > posmove[target].y && posmove[target].y > self.node.y && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //right


      if (posmove[i].y == self.node.y && posmove[i].x > self.node.x) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.x < redc[bipod].x && redc[bipod].x < redc[j].x && redc[bipod].y == self.node.y) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.x < blackc[bipod].x && blackc[bipod].x < redc[j].x && blackc[bipod].y == self.node.y) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = 0; target < posmove.length; target++) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].x > posmove[target].x && posmove[target].x > self.node.x && posmove[target].y == redc[j].y && posmove[target].x == redc[j].x) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //block other chess


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
          posmove[i].active = false;
        }
      }
    } // down and left canon shots


    for (var i = posmove.length - 1; i >= 0; i--) {
      //canonshot
      //down
      if (posmove[i].x == self.node.x && posmove[i].y < self.node.y) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < blackc.length; bipod++) {
              if (self.node.y > blackc[bipod].y && blackc[bipod].y > redc[j].y && blackc[bipod].x == self.node.x) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < redc.length; bipod++) {
                if (self.node.y > redc[bipod].y && redc[bipod].y > redc[j].y && redc[bipod].x == self.node.x) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = posmove.length - 1; target >= 0; target--) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].y < posmove[target].y && posmove[target].y < self.node.y && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //left


      if (posmove[i].y == self.node.y && posmove[i].x < self.node.x) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < blackc.length; bipod++) {
              if (self.node.x > blackc[bipod].x && blackc[bipod].x > redc[j].x && blackc[bipod].y == self.node.y) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < redc.length; bipod++) {
                if (self.node.x > redc[bipod].x && redc[bipod].x > redc[j].x && redc[bipod].y == self.node.y) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = posmove.length - 1; target >= 0; target--) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].x < posmove[target].x && posmove[target].x < self.node.x && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }
    }

    for (var i = 0; i < posmove.length; i++) {
      touchmove.blacktouchmove(i);
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();