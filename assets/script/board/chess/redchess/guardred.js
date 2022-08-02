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
                    if ((posmove[i].x >= map.redcastleleftbound) && (posmove[i].x <= map.redcastlerightbound) &&
                        (posmove[i].y >= map.redcastledownbound) && (posmove[i].y <= map.redcastleupbound)) {
                        //upright
                        if (((posmove[i].x == this.node.x + map.s) && (posmove[i].y == this.node.y + map.s))) {
                            posmove[i].active = true;
                        }
                        //upleft
                        if (((posmove[i].x == this.node.x - map.s) && (posmove[i].y == this.node.y + map.s))) {
                            posmove[i].active = true;
                        }
                        //downright
                        if (((posmove[i].x == this.node.x + map.s) && (posmove[i].y == this.node.y - map.s))) {
                            posmove[i].active = true;
                        }
                        //downleft
                        if (((posmove[i].x == this.node.x - map.s) && (posmove[i].y == this.node.y - map.s))) {
                            posmove[i].active = true;
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
