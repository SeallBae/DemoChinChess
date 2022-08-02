
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQb3B1cC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNob3ciLCJub2RlIiwiYWN0aXZlIiwib3BhY2l0eSIsInNjYWxlIiwidHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0Iiwic2hvd2NvdmVyIiwiaGlkZSIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLElBTkssa0JBTUM7QUFDRixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0IsR0FBbEI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsS0FBS0osSUFBZCxFQUNDSyxFQURELENBQ0ksR0FESixFQUNTO0FBQUNGLE1BQUFBLEtBQUssRUFBQyxDQUFQO0FBQVVELE1BQUFBLE9BQU8sRUFBQztBQUFsQixLQURULEVBQ2dDO0FBQUNJLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBRGhDLEVBRUNDLEtBRkQ7QUFHSCxHQWJJO0FBY0xDLEVBQUFBLFNBZEssdUJBY007QUFDUCxTQUFLUixJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0IsR0FBbEI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsS0FBS0osSUFBZCxFQUNDSyxFQURELENBQ0ksR0FESixFQUNTO0FBQUNGLE1BQUFBLEtBQUssRUFBQyxDQUFQO0FBQVVELE1BQUFBLE9BQU8sRUFBQztBQUFsQixLQURULEVBQ2dDO0FBQUNJLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBRGhDLEVBRUNDLEtBRkQ7QUFHSCxHQXJCSTtBQXNCTEUsRUFBQUEsSUF0Qkssa0JBc0JDO0FBQUE7O0FBQ0ZkLElBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTLEtBQUtKLElBQWQsRUFDQ0ssRUFERCxDQUNJLEdBREosRUFDUztBQUFDRixNQUFBQSxLQUFLLEVBQUMsR0FBUDtBQUFZRCxNQUFBQSxPQUFPLEVBQUM7QUFBcEIsS0FEVCxFQUNnQztBQUFDSSxNQUFBQSxNQUFNLEVBQUU7QUFBVCxLQURoQyxFQUVDSSxJQUZELENBRU0sWUFBTTtBQUFDLE1BQUEsS0FBSSxDQUFDVixJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFBeUIsS0FGdEMsRUFHQ00sS0FIRDtBQUlIO0FBM0JJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICBcclxuICAgIH0sXHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuMjtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuNSwge3NjYWxlOjEsIG9wYWNpdHk6MjU1fSx7ZWFzaW5nOiBcInF1YXJ0SW5PdXRcIn0pXHJcbiAgICAgICAgLnN0YXJ0KClcclxuICAgIH0sXHJcbiAgICBzaG93Y292ZXIoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMC4yO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMC41LCB7c2NhbGU6MSwgb3BhY2l0eToxNjB9LHtlYXNpbmc6IFwicXVhcnRJbk91dFwifSlcclxuICAgICAgICAuc3RhcnQoKVxyXG4gICAgfSxcclxuICAgIGhpZGUoKXtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuNSwge3NjYWxlOjAuMiwgb3BhY2l0eTowfSx7ZWFzaW5nOiBcInF1YXJ0SW5PdXRcIn0pXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge3RoaXMubm9kZS5hY3RpdmUgPSBmYWxzZX0pXHJcbiAgICAgICAgLnN0YXJ0KClcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbn0pO1xyXG4iXX0=