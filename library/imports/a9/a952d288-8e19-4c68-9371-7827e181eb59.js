"use strict";
cc._RF.push(module, 'a952dKIjhlMaJNxeCfhgetZ', 'Popup');
// script/Popup.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  show: function show() {
    this.node.active = true;
    this.node.opacity = 0;
    this.node.scale = 0.2;
    cc.tween(this.node).to(0.5, {
      scale: 1,
      opacity: 255
    }, {
      easing: "quartInOut"
    }).start();
  },
  showcover: function showcover() {
    this.node.active = true;
    this.node.opacity = 0;
    this.node.scale = 0.2;
    cc.tween(this.node).to(0.5, {
      scale: 1,
      opacity: 160
    }, {
      easing: "quartInOut"
    }).start();
  },
  hide: function hide() {
    var _this = this;

    cc.tween(this.node).to(0.5, {
      scale: 0.2,
      opacity: 0
    }, {
      easing: "quartInOut"
    }).call(function () {
      _this.node.active = false;
    }).start();
  },
  disappear: function disappear() {
    this.node.opacity = 0;
    this.node.active = false;
  }
});

cc._RF.pop();