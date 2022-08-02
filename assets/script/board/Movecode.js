// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var movecode = cc.Class({
    name: 'MCode',
    properties:{
        id: 0
    }
})
cc.Class({
    extends: cc.Component,

    properties: {
        movecode:{
            default: [],
            type: movecode
        }
    },
    start () {
        
    },

    // update (dt) {},
});
