
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

var _axios_connection = require("../axios_connection");

var _socket_connection = require("../socket_connection");

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
    movelist: [],
    rid: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {
    var _this = this;

    if (dt === void 0) {
      dt = 10000;
    }

    var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var rid = RoomInfos.rid;
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
        if ( // (redc[j].name == data.Name && (redc[j].x != data.X || redc[j].y != data.Y)) ||
        // (redc[j].name == data.Name && (redc[j].x != data.X && redc[j].y != data.Y))
        redc[j].name == data.Name) {
          if (PlayerInfo.state == "Player1") {
            redchess.pauseSystemEvents(true);
            blackchess.pauseSystemEvents(true);
          }

          if (PlayerInfo.state == "Player2") {
            redchess.pauseSystemEvents(true);
            blackchess.resumeSystemEvents(true);
          }

          if (redc[j].x != data.X || redc[j].y != data.Y || redc[j].x != data.X && redc[j].y != data.Y) {
            //move chess
            cc.tween(redc[j]).delay(0.1).to(0.125, {
              position: cc.v2(redc[j].x, redc[j].y + 5),
              scale: 1.1
            }).delay(0.125).to(0.5, {
              position: cc.v2(data.X, data.Y),
              scale: 1.3
            }).delay(0.125).to(0.125, {
              position: cc.v2(data.X, data.Y),
              scale: 1
            }).start();
          }

          break;
        }
      }

      for (var k = 0; k < blackc.length; k++) {
        if ( // (blackc[k].name == data.Name && (blackc[k].x != data.X || blackc[k].y != data.Y)) ||
        // (blackc[k].name == data.Name && (blackc[k].x != data.X && blackc[k].y != data.Y))
        blackc[k].name == data.Name) {
          if (PlayerInfo.state == "Player1") {
            redchess.resumeSystemEvents(true);
            blackchess.pauseSystemEvents(true);
          }

          if (PlayerInfo.state == "Player2") {
            redchess.pauseSystemEvents(true);
            blackchess.pauseSystemEvents(true);
          }

          if (blackc[k].x != data.X || blackc[k].y != data.Y || blackc[k].x != data.X && blackc[k].y != data.Y) {
            //move chess
            cc.tween(blackc[k]).delay(0.1).to(0.125, {
              position: cc.v2(blackc[k].x, blackc[k].y + 5),
              scale: 1.1
            }).delay(0.125).to(0.5, {
              position: cc.v2(data.X, data.Y),
              scale: 1.3
            }).delay(0.125).to(0.125, {
              position: cc.v2(data.X, data.Y),
              scale: 1
            }).start();
          }

          break;
        }
      } // if (
      //   this.movelist.length == 0 ||
      //   this.movelist[this.movelist.length - 1] !==
      //     JSON.stringify(data[data.length - 1])
      // ) {
      //   this.movelist.push(JSON.stringify(data[data.length - 1]));
      // }
      // movecodelist.string = this.movelist;

    })["catch"](function () {
      console.log("Promise Rejected");
    });
    (0, _socket_connection.receiveddeadchess)().then(function (data) {
      for (var j = 0; j < redc.length; j++) {
        if (redc[j].name == data.name) {
          map.countreddead++; // redc[j].setScale(0.8, 0.8);

          cc.tween(redc[j]).delay(1).to(0, {
            // position: cc.v2(187.5 - map.countreddead * map.chesssize, 0),
            position: cc.v2(0, 0)
          }).call(function () {
            _this.node.pauseSystemEvents(true);

            _this.node.parent = deadredchess;
          }).start(); // redc[j].anchorX = 1;
          // redc[j].anchorY = 0.5;
          // redc[j].y = 0;
          // redc[j].x = 187.5 - map.countreddead * map.chesssize;
          // redc[j].pauseSystemEvents(true);
          // redc[j].parent = deadredchess;
        }
      }

      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].name == data.name) {
          map.countblackdead++;
          cc.tween(blackc[k]).delay(1).to(0, {
            // position: cc.v2(-187.5 + map.countblackdead * map.chesssize, 0),
            position: cc.v2(0, 0)
          }).call(function () {
            _this.node.pauseSystemEvents(true);

            _this.node.parent = deadblackchess;
          }).start(); // blackc[k].anchorX = 0;
          // blackc[k].anchorY = 0.5;
          // blackc[k].y = 0;
          // blackc[k].x = -187.5 + map.countblackdead * map.chesssize;
          // blackc[k].pauseSystemEvents(true);
          // blackc[k].parent = deadblackchess;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdXBkYXRlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW92ZWNvZGVsaXN0IiwidHlwZSIsIkxhYmVsIiwicGxhY2UiLCJOb2RlIiwicmVkY2hlc3MiLCJibGFja2NoZXNzIiwiZGVhZHJlZGNoZXNzIiwiZGVhZGJsYWNrY2hlc3MiLCJtYXAiLCJtb3ZlbGlzdCIsInJpZCIsIm9uTG9hZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJQbGF5ZXJJbmZvIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUm9vbUluZm9zIiwicmVkYyIsImdldENoaWxkcmVuIiwiYmxhY2tjIiwidGhlbiIsImRhdGEiLCJqIiwibGVuZ3RoIiwibmFtZSIsIk5hbWUiLCJzdGF0ZSIsInBhdXNlU3lzdGVtRXZlbnRzIiwicmVzdW1lU3lzdGVtRXZlbnRzIiwieCIsIlgiLCJ5IiwiWSIsInR3ZWVuIiwiZGVsYXkiLCJ0byIsInBvc2l0aW9uIiwidjIiLCJzY2FsZSIsImsiLCJjb25zb2xlIiwibG9nIiwiY291bnRyZWRkZWFkIiwiY2FsbCIsIm5vZGUiLCJwYXJlbnQiLCJjb3VudGJsYWNrZGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFPQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFlBQVksRUFBRTtBQUNaLGlCQUFTLElBREc7QUFFWkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkcsS0FESjtBQUtWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZKLEtBTEc7QUFTVkMsSUFBQUEsUUFBUSxFQUFF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R0FBUixDQUFZLGtCQUFaO0FBQ0QsS0FwREg7QUFxREQ7QUE1T00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0bGFzdG1vdmVoaXN0b3J5LCBnZXRyb29tYnlJRCB9IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uLFxyXG4gIHJlY2VpdmVkZGVhZGNoZXNzLFxyXG4gIHJlY2VpdmVkcm9vbUlELFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbW92ZWNvZGVsaXN0OiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIHBsYWNlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgZGVhZHJlZGNoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgZGVhZGJsYWNrY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtYXA6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtb3ZlbGlzdDogW10sXHJcbiAgICByaWQ6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgdXBkYXRlKGR0ID0gMTAwMDApIHtcclxuICAgIGxldCBQbGF5ZXJJbmZvID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVySW5mb1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUGxheWVySW5mb1wiKTtcclxuICAgIGxldCBSb29tSW5mb3MgPSBjYy5kaXJlY3RvclxyXG4gICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSb29tSW5mb3NcIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlJvb21JbmZvc1wiKTtcclxuICAgIHZhciByaWQgPSBSb29tSW5mb3MucmlkO1xyXG4gICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgIHZhciByZWRjID0gcmVkY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoXCJib2FyZGluZm9cIik7XHJcbiAgICBsZXQgZGVhZHJlZGNoZXNzID0gdGhpcy5kZWFkcmVkY2hlc3M7XHJcbiAgICBsZXQgZGVhZGJsYWNrY2hlc3MgPSB0aGlzLmRlYWRibGFja2NoZXNzO1xyXG4gICAgdmFyIG1vdmVjb2RlbGlzdCA9IHRoaXMubW92ZWNvZGVsaXN0O1xyXG5cclxuICAgIHJlY2VpdmVkY2hlc3NQb3NpdGlvbigpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7ICAgXHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIC8vIChyZWRjW2pdLm5hbWUgPT0gZGF0YS5OYW1lICYmIChyZWRjW2pdLnggIT0gZGF0YS5YIHx8IHJlZGNbal0ueSAhPSBkYXRhLlkpKSB8fFxyXG4gICAgICAgICAgICAvLyAocmVkY1tqXS5uYW1lID09IGRhdGEuTmFtZSAmJiAocmVkY1tqXS54ICE9IGRhdGEuWCAmJiByZWRjW2pdLnkgIT0gZGF0YS5ZKSlcclxuICAgICAgICAgICAgcmVkY1tqXS5uYW1lID09IGRhdGEuTmFtZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLnN0YXRlID09IFwiUGxheWVyMVwiKXtcclxuICAgICAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLnN0YXRlID09IFwiUGxheWVyMlwiKSB7XHJcbiAgICAgICAgICAgICAgcmVkY2hlc3MucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgYmxhY2tjaGVzcy5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBcclxuICAgICAgICAgICAgICAocmVkY1tqXS54ICE9IGRhdGEuWCB8fCByZWRjW2pdLnkgIT0gZGF0YS5ZKSB8fFxyXG4gICAgICAgICAgICAgIChyZWRjW2pdLnggIT0gZGF0YS5YICYmIHJlZGNbal0ueSAhPSBkYXRhLlkpXHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgLy9tb3ZlIGNoZXNzXHJcbiAgICAgICAgICAgICAgY2MudHdlZW4ocmVkY1tqXSlcclxuICAgICAgICAgICAgICAuZGVsYXkoMC4xKVxyXG4gICAgICAgICAgICAgIC50bygwLjEyNSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgICByZWRjW2pdLngsXHJcbiAgICAgICAgICAgICAgICAgIHJlZGNbal0ueSArIDVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMS4xLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmRlbGF5KDAuMTI1KVxyXG4gICAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICAgIDAuNSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuWCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLlkgXHJcbiAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAuZGVsYXkoMC4xMjUpXHJcbiAgICAgICAgICAgICAgLnRvKFxyXG4gICAgICAgICAgICAgICAgMC4xMjUsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MihcclxuICAgICAgICAgICAgICAgICAgZGF0YS5YLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhLlksXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIC8vIChibGFja2Nba10ubmFtZSA9PSBkYXRhLk5hbWUgJiYgKGJsYWNrY1trXS54ICE9IGRhdGEuWCB8fCBibGFja2Nba10ueSAhPSBkYXRhLlkpKSB8fFxyXG4gICAgICAgICAgICAvLyAoYmxhY2tjW2tdLm5hbWUgPT0gZGF0YS5OYW1lICYmIChibGFja2Nba10ueCAhPSBkYXRhLlggJiYgYmxhY2tjW2tdLnkgIT0gZGF0YS5ZKSlcclxuICAgICAgICAgICAgYmxhY2tjW2tdLm5hbWUgPT0gZGF0YS5OYW1lXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFBsYXllckluZm8uc3RhdGUgPT0gXCJQbGF5ZXIxXCIpe1xyXG4gICAgICAgICAgICAgIHJlZGNoZXNzLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJJbmZvLnN0YXRlID09IFwiUGxheWVyMlwiKSB7XHJcbiAgICAgICAgICAgICAgcmVkY2hlc3MucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgYmxhY2tjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgKGJsYWNrY1trXS54ICE9IGRhdGEuWCB8fCBibGFja2Nba10ueSAhPSBkYXRhLlkpIHx8XHJcbiAgICAgICAgICAgICAgKGJsYWNrY1trXS54ICE9IGRhdGEuWCAmJiBibGFja2Nba10ueSAhPSBkYXRhLlkpXHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgLy9tb3ZlIGNoZXNzXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGJsYWNrY1trXSlcclxuICAgICAgICAgICAgLmRlbGF5KDAuMSlcclxuICAgICAgICAgICAgLnRvKDAuMTI1LCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgYmxhY2tjW2tdLngsXHJcbiAgICAgICAgICAgICAgICBibGFja2Nba10ueSArIDVcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjEyNSlcclxuICAgICAgICAgICAgLnRvKFxyXG4gICAgICAgICAgICAgIDAuNSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuWCxcclxuICAgICAgICAgICAgICAgICAgZGF0YS5ZLFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjMsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuZGVsYXkoMC4xMjUpXHJcbiAgICAgICAgICAgIC50bygwLjEyNSwge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MihcclxuICAgICAgICAgICAgICAgIGRhdGEuWCxcclxuICAgICAgICAgICAgICAgIGRhdGEuWVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKFxyXG4gICAgICAgIC8vICAgdGhpcy5tb3ZlbGlzdC5sZW5ndGggPT0gMCB8fFxyXG4gICAgICAgIC8vICAgdGhpcy5tb3ZlbGlzdFt0aGlzLm1vdmVsaXN0Lmxlbmd0aCAtIDFdICE9PVxyXG4gICAgICAgIC8vICAgICBKU09OLnN0cmluZ2lmeShkYXRhW2RhdGEubGVuZ3RoIC0gMV0pXHJcbiAgICAgICAgLy8gKSB7XHJcbiAgICAgICAgLy8gICB0aGlzLm1vdmVsaXN0LnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YVtkYXRhLmxlbmd0aCAtIDFdKSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIG1vdmVjb2RlbGlzdC5zdHJpbmcgPSB0aGlzLm1vdmVsaXN0O1xyXG5cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJlY2VpdmVkZGVhZGNoZXNzKClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChyZWRjW2pdLm5hbWUgPT0gZGF0YS5uYW1lKSB7XHJcbiAgICAgICAgICAgIG1hcC5jb3VudHJlZGRlYWQrKztcclxuICAgICAgICAgICAgLy8gcmVkY1tqXS5zZXRTY2FsZSgwLjgsIDAuOCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHJlZGNbal0pXHJcbiAgICAgICAgICAgICAgLmRlbGF5KDEpXHJcbiAgICAgICAgICAgICAgLnRvKDAsIHtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBjYy52MigxODcuNSAtIG1hcC5jb3VudHJlZGRlYWQgKiBtYXAuY2hlc3NzaXplLCAwKSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigwLCAwKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBkZWFkcmVkY2hlc3M7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlZGNbal0uYW5jaG9yWCA9IDE7XHJcbiAgICAgICAgICAgIC8vIHJlZGNbal0uYW5jaG9yWSA9IDAuNTtcclxuICAgICAgICAgICAgLy8gcmVkY1tqXS55ID0gMDtcclxuICAgICAgICAgICAgLy8gcmVkY1tqXS54ID0gMTg3LjUgLSBtYXAuY291bnRyZWRkZWFkICogbWFwLmNoZXNzc2l6ZTtcclxuICAgICAgICAgICAgLy8gcmVkY1tqXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgLy8gcmVkY1tqXS5wYXJlbnQgPSBkZWFkcmVkY2hlc3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICBpZiAoYmxhY2tjW2tdLm5hbWUgPT0gZGF0YS5uYW1lKSB7XHJcbiAgICAgICAgICAgIG1hcC5jb3VudGJsYWNrZGVhZCsrO1xyXG4gICAgICAgICAgICBjYy50d2VlbihibGFja2Nba10pXHJcbiAgICAgICAgICAgICAgLmRlbGF5KDEpXHJcbiAgICAgICAgICAgICAgLnRvKDAsIHtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBjYy52MigtMTg3LjUgKyBtYXAuY291bnRibGFja2RlYWQgKiBtYXAuY2hlc3NzaXplLCAwKSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigwLCAwKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBkZWFkYmxhY2tjaGVzcztcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYmxhY2tjW2tdLmFuY2hvclggPSAwO1xyXG4gICAgICAgICAgICAvLyBibGFja2Nba10uYW5jaG9yWSA9IDAuNTtcclxuICAgICAgICAgICAgLy8gYmxhY2tjW2tdLnkgPSAwO1xyXG4gICAgICAgICAgICAvLyBibGFja2Nba10ueCA9IC0xODcuNSArIG1hcC5jb3VudGJsYWNrZGVhZCAqIG1hcC5jaGVzc3NpemU7XHJcbiAgICAgICAgICAgIC8vIGJsYWNrY1trXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgLy8gYmxhY2tjW2tdLnBhcmVudCA9IGRlYWRibGFja2NoZXNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=