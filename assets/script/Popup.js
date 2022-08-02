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
    show(){
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
        .to(0.5, {scale:1, opacity:255},{easing: "quartInOut"})
        .start()
    },
    showcover(){
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
        .to(0.5, {scale:1, opacity:160},{easing: "quartInOut"})
        .start()
    },
    hide(){
        cc.tween(this.node)
        .to(0.5, {scale:0.2, opacity:0},{easing: "quartInOut"})
        .call(() => {this.node.active = false})
        .start()
    },
    

});
