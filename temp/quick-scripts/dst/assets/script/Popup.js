
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
  },
  disappear: function disappear() {
    this.node.opacity = 0;
    this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQb3B1cC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNob3ciLCJub2RlIiwiYWN0aXZlIiwib3BhY2l0eSIsInNjYWxlIiwidHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0Iiwic2hvd2NvdmVyIiwiaGlkZSIsImNhbGwiLCJkaXNhcHBlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRSxFQUhMO0FBSVBDLEVBQUFBLElBSk8sa0JBSUE7QUFDTCxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0IsR0FBbEI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsS0FBS0osSUFBZCxFQUNHSyxFQURILENBQ00sR0FETixFQUNXO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlELE1BQUFBLE9BQU8sRUFBRTtBQUFyQixLQURYLEVBQ3VDO0FBQUVJLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBRHZDLEVBRUdDLEtBRkg7QUFHRCxHQVhNO0FBWVBDLEVBQUFBLFNBWk8sdUJBWUs7QUFDVixTQUFLUixJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0IsR0FBbEI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsS0FBS0osSUFBZCxFQUNHSyxFQURILENBQ00sR0FETixFQUNXO0FBQUVGLE1BQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlELE1BQUFBLE9BQU8sRUFBRTtBQUFyQixLQURYLEVBQ3VDO0FBQUVJLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBRHZDLEVBRUdDLEtBRkg7QUFHRCxHQW5CTTtBQW9CUEUsRUFBQUEsSUFwQk8sa0JBb0JBO0FBQUE7O0FBQ0xkLElBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTLEtBQUtKLElBQWQsRUFDR0ssRUFESCxDQUNNLEdBRE4sRUFDVztBQUFFRixNQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjRCxNQUFBQSxPQUFPLEVBQUU7QUFBdkIsS0FEWCxFQUN1QztBQUFFSSxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUR2QyxFQUVHSSxJQUZILENBRVEsWUFBTTtBQUNWLE1BQUEsS0FBSSxDQUFDVixJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDRCxLQUpILEVBS0dNLEtBTEg7QUFNRCxHQTNCTTtBQTRCUEksRUFBQUEsU0E1Qk8sdUJBNEJLO0FBQ1YsU0FBS1gsSUFBTCxDQUFVRSxPQUFWLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0Q7QUEvQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7fSxcclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjI7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfSxcclxuICBzaG93Y292ZXIoKSB7XHJcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuMjtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSwgb3BhY2l0eTogMTYwIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9LFxyXG4gIGhpZGUoKSB7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMiwgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfSxcclxuICBkaXNhcHBlYXIoKSB7XHJcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==