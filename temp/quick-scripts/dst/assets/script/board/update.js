
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/update.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '077bfbFx0tAEKtrDKRzdXD9', 'update');
// script/board/update.js

"use strict";

var _socket_connection = require("../socket_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// import * as io from "socket.io-client";
// let socket = io.connect('http://localhost:3000/');\
cc.Class({
  "extends": cc.Component,
  properties: {
    movecodelist: {
      "default": null,
      type: cc.Label
    },
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
    deadredchess: {
      "default": null,
      type: cc.Node
    },
    deadblackchess: {
      "default": null,
      type: cc.Node
    },
    map: {
      "default": null,
      type: cc.Node
    },
    movelist: []
  },
  onLoad: function onLoad() {},
  updateall: function updateall() {// let map = this.map.getComponent("boardinfo");
    // list += JSON.stringify(map.movecode[map.movecode.length - 1]) + "\n";
  },
  start: function start() {},
  update: function update(dt) {
    var _this = this;

    if (dt === void 0) {
      dt = 10000;
    }

    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    var map = this.map.getComponent("boardinfo");
    var deadredchess = this.deadredchess;
    var deadblackchess = this.deadblackchess;
    var movecodelist = this.movecodelist;
    (0, _socket_connection.receivedchessPosition)().then(function (data) {
      for (var j = 0; j < redc.length; j++) {
        if (redc[j].name == data[data.length - 1].name) {
          redc[j].x = data[data.length - 1].x;
          redc[j].y = data[data.length - 1].y;
          redchess.pauseSystemEvents(true);
          blackchess.resumeSystemEvents(true);
          break;
        }
      }

      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].name == data[data.length - 1].name) {
          blackc[k].x = data[data.length - 1].x;
          blackc[k].y = data[data.length - 1].y;
          blackchess.pauseSystemEvents(true);
          redchess.resumeSystemEvents(true);
          break;
        }
      }

      if (_this.movelist.length == 0 || _this.movelist[_this.movelist.length - 1] !== JSON.stringify(data[data.length - 1])) {
        _this.movelist.push(JSON.stringify(data[data.length - 1]));
      }

      movecodelist.string = _this.movelist;
    });
    (0, _socket_connection.receiveddeadchess)().then(function (data) {
      for (var j = 0; j < redc.length; j++) {
        if (redc[j].name == data.name) {
          map.countreddead++;
          redc[j].setScale(0.8, 0.8);
          redc[j].x = 0;
          redc[j].y = -30 - map.countreddead * (map.chesssize / 2);
          redc[j].pauseSystemEvents(true);
          redc[j].parent = deadredchess;
        }
      }

      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].name == data.name) {
          map.countblackdead++;
          blackc[k].setScale(0.8, 0.8);
          blackc[k].x = 0;
          blackc[k].y = -30 - map.countblackdead * (map.chesssize / 2);
          blackc[k].pauseSystemEvents(true);
          blackc[k].parent = deadblackchess;
        }
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdXBkYXRlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW92ZWNvZGVsaXN0IiwidHlwZSIsIkxhYmVsIiwicGxhY2UiLCJOb2RlIiwicmVkY2hlc3MiLCJibGFja2NoZXNzIiwiZGVhZHJlZGNoZXNzIiwiZGVhZGJsYWNrY2hlc3MiLCJtYXAiLCJtb3ZlbGlzdCIsIm9uTG9hZCIsInVwZGF0ZWFsbCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJyZWRjIiwiZ2V0Q2hpbGRyZW4iLCJibGFja2MiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwiZGF0YSIsImoiLCJsZW5ndGgiLCJuYW1lIiwieCIsInkiLCJwYXVzZVN5c3RlbUV2ZW50cyIsInJlc3VtZVN5c3RlbUV2ZW50cyIsImsiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsInN0cmluZyIsImNvdW50cmVkZGVhZCIsInNldFNjYWxlIiwiY2hlc3NzaXplIiwicGFyZW50IiwiY291bnRibGFja2RlYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7O0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1osaUJBQVMsSUFERztBQUVaQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRyxLQURKO0FBS1ZDLElBQUFBLEtBQUssRUFBRTtBQUNMLGlCQUFTLElBREo7QUFFTEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0FBRkosS0FMRztBQVNWQyxJQUFBQSxRQUFRLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZELEtBVEE7QUFh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IExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyBpbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG4vLyBsZXQgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycpO1xcXHJcbmltcG9ydCB7XHJcbiAgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uLFxyXG4gIHJlY2VpdmVkZGVhZGNoZXNzLFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbW92ZWNvZGVsaXN0OiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIHBsYWNlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgZGVhZHJlZGNoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgZGVhZGJsYWNrY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtYXA6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtb3ZlbGlzdDogW10sXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge30sXHJcbiAgdXBkYXRlYWxsKCkge1xyXG4gICAgLy8gbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudChcImJvYXJkaW5mb1wiKTtcclxuICAgIC8vIGxpc3QgKz0gSlNPTi5zdHJpbmdpZnkobWFwLm1vdmVjb2RlW21hcC5tb3ZlY29kZS5sZW5ndGggLSAxXSkgKyBcIlxcblwiO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuICB1cGRhdGUoZHQgPSAxMDAwMCkge1xyXG4gICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgIHZhciByZWRjID0gcmVkY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoXCJib2FyZGluZm9cIik7XHJcbiAgICBsZXQgZGVhZHJlZGNoZXNzID0gdGhpcy5kZWFkcmVkY2hlc3M7XHJcbiAgICBsZXQgZGVhZGJsYWNrY2hlc3MgPSB0aGlzLmRlYWRibGFja2NoZXNzO1xyXG4gICAgdmFyIG1vdmVjb2RlbGlzdCA9IHRoaXMubW92ZWNvZGVsaXN0O1xyXG5cclxuICAgIHJlY2VpdmVkY2hlc3NQb3NpdGlvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKHJlZGNbal0ubmFtZSA9PSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ubmFtZSkge1xyXG4gICAgICAgICAgcmVkY1tqXS54ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLng7XHJcbiAgICAgICAgICByZWRjW2pdLnkgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueTtcclxuICAgICAgICAgIHJlZGNoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgYmxhY2tjaGVzcy5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBpZiAoYmxhY2tjW2tdLm5hbWUgPT0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLm5hbWUpIHtcclxuICAgICAgICAgIGJsYWNrY1trXS54ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLng7XHJcbiAgICAgICAgICBibGFja2Nba10ueSA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXS55O1xyXG4gICAgICAgICAgYmxhY2tjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIHJlZGNoZXNzLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5tb3ZlbGlzdC5sZW5ndGggPT0gMCB8fFxyXG4gICAgICAgIHRoaXMubW92ZWxpc3RbdGhpcy5tb3ZlbGlzdC5sZW5ndGggLSAxXSAhPT1cclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGFbZGF0YS5sZW5ndGggLSAxXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlbGlzdC5wdXNoKEpTT04uc3RyaW5naWZ5KGRhdGFbZGF0YS5sZW5ndGggLSAxXSkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmVjb2RlbGlzdC5zdHJpbmcgPSB0aGlzLm1vdmVsaXN0O1xyXG4gICAgfSk7XHJcbiAgICByZWNlaXZlZGRlYWRjaGVzcygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKHJlZGNbal0ubmFtZSA9PSBkYXRhLm5hbWUpIHtcclxuICAgICAgICAgIG1hcC5jb3VudHJlZGRlYWQrKztcclxuICAgICAgICAgIHJlZGNbal0uc2V0U2NhbGUoMC44LCAwLjgpO1xyXG4gICAgICAgICAgcmVkY1tqXS54ID0gMDtcclxuICAgICAgICAgIHJlZGNbal0ueSA9IC0zMCAtIG1hcC5jb3VudHJlZGRlYWQgKiAobWFwLmNoZXNzc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgcmVkY1tqXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIHJlZGNbal0ucGFyZW50ID0gZGVhZHJlZGNoZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGlmIChibGFja2Nba10ubmFtZSA9PSBkYXRhLm5hbWUpIHtcclxuICAgICAgICAgIG1hcC5jb3VudGJsYWNrZGVhZCsrO1xyXG4gICAgICAgICAgYmxhY2tjW2tdLnNldFNjYWxlKDAuOCwgMC44KTtcclxuICAgICAgICAgIGJsYWNrY1trXS54ID0gMDtcclxuICAgICAgICAgIGJsYWNrY1trXS55ID0gLTMwIC0gbWFwLmNvdW50YmxhY2tkZWFkICogKG1hcC5jaGVzc3NpemUgLyAyKTtcclxuICAgICAgICAgIGJsYWNrY1trXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIGJsYWNrY1trXS5wYXJlbnQgPSBkZWFkYmxhY2tjaGVzcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=