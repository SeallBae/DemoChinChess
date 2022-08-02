// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {},
    blur(){
        
        this.node.opacity = 160;
        this.node.pauseSystemEvents(true);
    },
    unblur(){
        this.node.opacity = 255;
        this.node.resumeSystemEvents(true);
    },
    start () {

    },

    // update (dt) {},
});
