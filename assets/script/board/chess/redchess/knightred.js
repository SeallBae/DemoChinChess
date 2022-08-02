// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
            type: cc.Node
        },
        map:{
            default: null,
            type: cc.Node,
        }
    },

    showpossiblemove(){
        let map = this.map.getComponent('boardinfo');
        let touchmove = this.map.getComponent('touchmove');
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
                //deactive before another click
                for (var i = 0; i < posmove.length; i++) {
                    if (posmove[i].active == true) {
                        posmove[i].active = false;
                    }
                }
                //redturn
                blackchess.pauseSystemEvents(true);
                //logic moving
                for (var i = 0; i < posmove.length; i++) {
                    //move1
                    if ((posmove[i].x == self.node.x + map.s) && (posmove[i].y == self.node.y + map.s * 2)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x)) && (redc[j].y == (self.node.y + map.s))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x)) && (blackc[k].y == (self.node.y + map.s))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //move2
                    if ((posmove[i].x == self.node.x + map.s * 2) && (posmove[i].y == self.node.y + map.s)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x + map.s)) && (redc[j].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x + map.s)) && (blackc[k].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //move3
                    if ((posmove[i].x == self.node.x + map.s * 2) && (posmove[i].y == self.node.y - map.s)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x + map.s)) && (redc[j].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x + map.s)) && (blackc[k].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //move4
                    if ((posmove[i].x == self.node.x + map.s) && (posmove[i].y == self.node.y - map.s * 2)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x)) && (redc[j].y == (self.node.y - map.s))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x)) && (blackc[k].y == (self.node.y - map.s))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //move5
                    if ((posmove[i].x == self.node.x - map.s) && (posmove[i].y == self.node.y - map.s * 2)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x)) && (redc[j].y == (self.node.y - map.s))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x)) && (blackc[k].y == (self.node.y - map.s))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //move6
                    if ((posmove[i].x == self.node.x - map.s * 2) && (posmove[i].y == self.node.y - map.s)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x - map.s)) && (redc[j].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x - map.s)) && (blackc[k].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //move7
                    if ((posmove[i].x == self.node.x - map.s * 2) && (posmove[i].y == self.node.y + map.s)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x - map.s)) && (redc[j].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x - map.s)) && (blackc[k].y == (self.node.y))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //move8
                    if ((posmove[i].x == self.node.x - map.s) && (posmove[i].y == self.node.y + map.s * 2)) {
                        posmove[i].active = true;
                        for (var j = 0; j < redc.length; j++) {
                            if ((redc[j].x == (self.node.x)) && (redc[j].y == (self.node.y + map.s))) {
                                posmove[i].active = false;
                            }
                        }
                        for (var k = 0; k < blackc.length; k++) {
                            if ((blackc[k].x == (self.node.x)) && (blackc[k].y == (self.node.y + map.s))) {
                                posmove[i].active = false;
                            }
                        }
                    }
                    //block other chess
                    for (var j = 0; j < redc.length; j++) {
                        if ((redc[j].x == posmove[i].x) && (redc[j].y == posmove[i].y)) {
                            posmove[i].active = false;
                        }
                    }
                    //hightlight killable
                    for (var k = 0; k < blackc.length; k++) {
                        if ((blackc[k].x == posmove[i].x) &&
                            (blackc[k].y == posmove[i].y) &&
                            (posmove[i].active == true)) {
                            posmove[i].setScale(map.scale, map.scale);
                        }
                    }
                    //touchmove
                    touchmove.redtouchmove(i);
                }
    },
    start () {

    },

    // update (dt) {},
});
