
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/kingred.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4713cCa/1tEe4KqidlYWFE8', 'kingred');
// script/board/chess/redchess/kingred.js

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
    place: {
      "default": null,
      type: cc.Node
    },
    redchess: {
      "default": null,
      type: cc.Node
    },
    blackchess: {
      "default": null,
      type: cc.Node
    },
    map: {
      "default": null,
      type: cc.Node
    }
  },
  showpossiblemove: function showpossiblemove() {
    var map = this.map.getComponent('boardinfo');
    var touchmove = this.map.getComponent('touchmove');
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;
    self = this; //deactive before another click

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].active == true) {
        posmove[i].active = false;
      }
    } //redturn


    blackchess.pauseSystemEvents(true); //logicmove

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].x >= map.redcastleleftbound && posmove[i].x <= map.redcastlerightbound && posmove[i].y >= map.redcastledownbound && posmove[i].y <= map.redcastleupbound) {
        //right
        if (posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y) {
          posmove[i].active = true;
        } //left


        if (posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y) {
          posmove[i].active = true;
        } //up


        if (posmove[i].x == this.node.x && posmove[i].y == this.node.y + map.s) {
          posmove[i].active = true;
        } //down


        if (posmove[i].x == this.node.x && posmove[i].y == this.node.y - map.s) {
          posmove[i].active = true;
        }
      } //block other chess


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y) {
          posmove[i].active = false;
        }
      } //hightlight killable


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      } //touchmove


      touchmove.redtouchmove(i);
    }
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxraW5ncmVkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsInNob3dwb3NzaWJsZW1vdmUiLCJnZXRDb21wb25lbnQiLCJ0b3VjaG1vdmUiLCJwb3Ntb3ZlIiwiZ2V0Q2hpbGRyZW4iLCJyZWRjIiwiYmxhY2tjIiwicGFyZW50Iiwic2VsZiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIngiLCJyZWRjYXN0bGVsZWZ0Ym91bmQiLCJyZWRjYXN0bGVyaWdodGJvdW5kIiwieSIsInJlZGNhc3RsZWRvd25ib3VuZCIsInJlZGNhc3RsZXVwYm91bmQiLCJub2RlIiwicyIsImoiLCJrIiwic2V0U2NhbGUiLCJzY2FsZSIsInJlZHRvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJBQVMsSUFEVDtBQUVBSixN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M0IsSUFDQ1AsTUFBTSxDQUFDZ0IsQ0FBRCxDQUFOLENBQVVOLENBQVYsSUFBZWIsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FEM0IsSUFFQ2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxJQUFxQixJQUYxQixFQUVpQztBQUM3QlIsVUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV2MsUUFBWCxDQUFvQnhCLEdBQUcsQ0FBQ3lCLEtBQXhCLEVBQStCekIsR0FBRyxDQUFDeUIsS0FBbkM7QUFDSDtBQUNKLE9BakNvQyxDQWtDckM7OztBQUNBdEIsTUFBQUEsU0FBUyxDQUFDdUIsWUFBVixDQUF1QmhCLENBQXZCO0FBQ0g7QUFDWixHQWhGSTtBQWtGTGlCLEVBQUFBLEtBbEZLLG1CQWtGSSxDQUVSLENBcEZJLENBc0ZMOztBQXRGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGNoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93cG9zc2libGVtb3ZlKCl7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICAgICAgbGV0IHRvdWNobW92ZSA9IHRoaXMubWFwLmdldENvbXBvbmVudCgndG91Y2htb3ZlJyk7XHJcbiAgICAgICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgICAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgICAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICAgICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vZGVhY3RpdmUgYmVmb3JlIGFub3RoZXIgY2xpY2tcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9yZWR0dXJuXHJcbiAgICAgICAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9sb2dpY21vdmVcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID49IG1hcC5yZWRjYXN0bGVsZWZ0Ym91bmQpICYmIChwb3Ntb3ZlW2ldLnggPD0gbWFwLnJlZGNhc3RsZXJpZ2h0Ym91bmQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW2ldLnkgPj0gbWFwLnJlZGNhc3RsZWRvd25ib3VuZCkgJiYgKHBvc21vdmVbaV0ueSA8PSBtYXAucmVkY2FzdGxldXBib3VuZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCArIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCAtIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gdGhpcy5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgKyBtYXAucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gdGhpcy5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgLSBtYXAucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2Jsb2NrIG90aGVyIGNoZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IHBvc21vdmVbaV0ueCkgJiYgKHJlZGNbal0ueSA9PSBwb3Ntb3ZlW2ldLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaHRsaWdodCBraWxsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gcG9zbW92ZVtpXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1trXS55ID09IHBvc21vdmVbaV0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5zZXRTY2FsZShtYXAuc2NhbGUsIG1hcC5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy90b3VjaG1vdmVcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmUucmVkdG91Y2htb3ZlKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==