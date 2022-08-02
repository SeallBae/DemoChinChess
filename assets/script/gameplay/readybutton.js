// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        p1button:{
            default: null,
            type: cc.Node,
        },
        p2button:{
            default: null,
            type: cc.Node,
        },
    },

    onLoad () {},

    start () {
        
    },

    update (dt) {

    },
});
