
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameplay/deadblackchess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a32bPUxzNJzaC36TReSFgX', 'deadblackchess');
// script/gameplay/deadblackchess.js

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
    map: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    var map = this.map.getComponent('boardinfo');
  },
  start: function start() {},
  update: function update(dt) {
    var map = this.map.getComponent('boardinfo');
    this.node.height = map.countblackdead * map.chesssize + 100;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lcGxheVxcZGVhZGJsYWNrY2hlc3MuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXAiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsImdldENvbXBvbmVudCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJub2RlIiwiaGVpZ2h0IiwiY291bnRibGFja2RlYWQiLCJjaGVzc3NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUM7QUFDQSxpQkFBUyxJQURUO0FBRUFDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZUO0FBREksR0FIUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLO0FBQ04sUUFBSUgsR0FBRyxHQUFHLEtBQUtBLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQixXQUF0QixDQUFWO0FBQ0gsR0FaSTtBQWNMQyxFQUFBQSxLQWRLLG1CQWNJLENBRVIsQ0FoQkk7QUFrQkxDLEVBQUFBLE1BbEJLLGtCQWtCR0MsRUFsQkgsRUFrQk87QUFDUixRQUFJUCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxDQUFTSSxZQUFULENBQXNCLFdBQXRCLENBQVY7QUFDQSxTQUFLSSxJQUFMLENBQVVDLE1BQVYsR0FBbUJULEdBQUcsQ0FBQ1UsY0FBSixHQUFtQlYsR0FBRyxDQUFDVyxTQUF2QixHQUFpQyxHQUFwRDtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KCdib2FyZGluZm8nKTtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gbWFwLmNvdW50YmxhY2tkZWFkKm1hcC5jaGVzc3NpemUrMTAwO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==