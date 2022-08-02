
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameplay/deadredchess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c155cBSDG1NmYAiWwPWFf/H', 'deadredchess');
// script/gameplay/deadredchess.js

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
    this.node.height = map.countreddead * map.chesssize + 100;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lcGxheVxcZGVhZHJlZGNoZXNzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFwIiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJnZXRDb21wb25lbnQiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsImhlaWdodCIsImNvdW50cmVkZGVhZCIsImNoZXNzc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEdBQUcsRUFBQztBQUNBLGlCQUFTLElBRFQ7QUFFQUMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlQ7QUFESSxHQUhQO0FBVUxDLEVBQUFBLE1BVkssb0JBVUs7QUFDTixRQUFJSCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxDQUFTSSxZQUFULENBQXNCLFdBQXRCLENBQVY7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0ksQ0FFUixDQWhCSTtBQWtCTEMsRUFBQUEsTUFsQkssa0JBa0JHQyxFQWxCSCxFQWtCTztBQUNSLFFBQUlQLEdBQUcsR0FBRyxLQUFLQSxHQUFMLENBQVNJLFlBQVQsQ0FBc0IsV0FBdEIsQ0FBVjtBQUNBLFNBQUtJLElBQUwsQ0FBVUMsTUFBVixHQUFtQlQsR0FBRyxDQUFDVSxZQUFKLEdBQWlCVixHQUFHLENBQUNXLFNBQXJCLEdBQStCLEdBQWxEO0FBQ0g7QUFyQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbWFwOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ2JvYXJkaW5mbycpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IG1hcC5jb3VudHJlZGRlYWQqbWFwLmNoZXNzc2l6ZSsxMDA7XHJcbiAgICB9LFxyXG59KTtcclxuIl19