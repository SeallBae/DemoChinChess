
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
    })["catch"](function () {
      console.log("Promise Rejected");
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
    })["catch"](function () {
      console.log("Promise Rejected");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdXBkYXRlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW92ZWNvZGVsaXN0IiwidHlwZSIsIkxhYmVsIiwicGxhY2UiLCJOb2RlIiwicmVkY2hlc3MiLCJibGFja2NoZXNzIiwiZGVhZHJlZGNoZXNzIiwiZGVhZGJsYWNrY2hlc3MiLCJtYXAiLCJtb3ZlbGlzdCIsIm9uTG9hZCIsInVwZGF0ZWFsbCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJyZWRjIiwiZ2V0Q2hpbGRyZW4iLCJibGFja2MiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwiZGF0YSIsImoiLCJsZW5ndGgiLCJuYW1lIiwieCIsInkiLCJwYXVzZVN5c3RlbUV2ZW50cyIsInJlc3VtZVN5c3RlbUV2ZW50cyIsImsiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJjb3VudHJlZGRlYWQiLCJzZXRTY2FsZSIsImNoZXNzc2l6ZSIsInBhcmVudCIsImNvdW50YmxhY2tkZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOztBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFlBQVksRUFBRTtBQUNaLGlCQUFTLElBREc7QUFFWkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkcsS0FESjtBQUtWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZKLEtBTEc7QUFTVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FB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bkI7QUFDRDtBQUNGO0FBQ0YsS0FyQkQsV0FxQlMsWUFBWTtBQUNuQjBCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0F2QkQ7QUF3QkQ7QUExR00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vIGltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbi8vIGxldCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyk7XFxcclxuaW1wb3J0IHtcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgcmVjZWl2ZWRkZWFkY2hlc3MsXHJcbiAgc2VuZGNoZXNzUG9zaXRpb24sXHJcbn0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBtb3ZlY29kZWxpc3Q6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgcGxhY2U6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICByZWRjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIGJsYWNrY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkYmxhY2tjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG1hcDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG1vdmVsaXN0OiBbXSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7fSxcclxuICB1cGRhdGVhbGwoKSB7XHJcbiAgICAvLyBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KFwiYm9hcmRpbmZvXCIpO1xyXG4gICAgLy8gbGlzdCArPSBKU09OLnN0cmluZ2lmeShtYXAubW92ZWNvZGVbbWFwLm1vdmVjb2RlLmxlbmd0aCAtIDFdKSArIFwiXFxuXCI7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIHVwZGF0ZShkdCA9IDEwMDAwKSB7XHJcbiAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudChcImJvYXJkaW5mb1wiKTtcclxuICAgIGxldCBkZWFkcmVkY2hlc3MgPSB0aGlzLmRlYWRyZWRjaGVzcztcclxuICAgIGxldCBkZWFkYmxhY2tjaGVzcyA9IHRoaXMuZGVhZGJsYWNrY2hlc3M7XHJcbiAgICB2YXIgbW92ZWNvZGVsaXN0ID0gdGhpcy5tb3ZlY29kZWxpc3Q7XHJcblxyXG4gICAgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAocmVkY1tqXS5uYW1lID09IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5uYW1lKSB7XHJcbiAgICAgICAgICByZWRjW2pdLnggPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueDtcclxuICAgICAgICAgIHJlZGNbal0ueSA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXS55O1xyXG4gICAgICAgICAgcmVkY2hlc3MucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICBibGFja2NoZXNzLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGlmIChibGFja2Nba10ubmFtZSA9PSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ubmFtZSkge1xyXG4gICAgICAgICAgYmxhY2tjW2tdLnggPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueDtcclxuICAgICAgICAgIGJsYWNrY1trXS55ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnk7XHJcbiAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgcmVkY2hlc3MucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICggIFxyXG4gICAgICAgIHRoaXMubW92ZWxpc3QubGVuZ3RoID09IDAgfHxcclxuICAgICAgICB0aGlzLm1vdmVsaXN0W3RoaXMubW92ZWxpc3QubGVuZ3RoIC0gMV0gIT09XHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhW2RhdGEubGVuZ3RoIC0gMV0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubW92ZWxpc3QucHVzaChKU09OLnN0cmluZ2lmeShkYXRhW2RhdGEubGVuZ3RoIC0gMV0pKTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlY29kZWxpc3Quc3RyaW5nID0gdGhpcy5tb3ZlbGlzdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICAgIHJlY2VpdmVkZGVhZGNoZXNzKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAocmVkY1tqXS5uYW1lID09IGRhdGEubmFtZSkge1xyXG4gICAgICAgICAgbWFwLmNvdW50cmVkZGVhZCsrO1xyXG4gICAgICAgICAgcmVkY1tqXS5zZXRTY2FsZSgwLjgsIDAuOCk7XHJcbiAgICAgICAgICByZWRjW2pdLnggPSAwO1xyXG4gICAgICAgICAgcmVkY1tqXS55ID0gLTMwIC0gbWFwLmNvdW50cmVkZGVhZCAqIChtYXAuY2hlc3NzaXplIC8gMik7XHJcbiAgICAgICAgICByZWRjW2pdLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgcmVkY1tqXS5wYXJlbnQgPSBkZWFkcmVkY2hlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgaWYgKGJsYWNrY1trXS5uYW1lID09IGRhdGEubmFtZSkge1xyXG4gICAgICAgICAgbWFwLmNvdW50YmxhY2tkZWFkKys7XHJcbiAgICAgICAgICBibGFja2Nba10uc2V0U2NhbGUoMC44LCAwLjgpO1xyXG4gICAgICAgICAgYmxhY2tjW2tdLnggPSAwO1xyXG4gICAgICAgICAgYmxhY2tjW2tdLnkgPSAtMzAgLSBtYXAuY291bnRibGFja2RlYWQgKiAobWFwLmNoZXNzc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgYmxhY2tjW2tdLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgYmxhY2tjW2tdLnBhcmVudCA9IGRlYWRibGFja2NoZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuIl19