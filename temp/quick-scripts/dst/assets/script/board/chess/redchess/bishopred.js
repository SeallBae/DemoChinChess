
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/bishopred.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5c582AxU5Jtpx0heysGbGB', 'bishopred');
// script/board/chess/redchess/bishopred.js

"use strict";

var _socket_connection = require("../../../socket_connection");

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
    var map = this.map.getComponent("boardinfo");
    var touchmove = this.map.getComponent("touchmove");
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;
    self = this;
    var uid = uid;
    (0, _socket_connection.receivedroomID)().then(function (data) {
      fetch("fetch(https://chinese-chess-vnp.herokuapp.com/api/room/" + data, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        (0, _socket_connection.receiveduserID)().then(function (data) {
          if (data == uid) {
            console.log("uid p1", uid);
          }
        });
      });
    }); //deactive before another click

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].active == true) {
        posmove[i].active = false;
      }
    } //redturn


    blackchess.pauseSystemEvents(true); //logic move

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].y <= map.redriver) {
        //upright
        if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y + map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }
        } //upleft


        if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y + map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y + map.s) {
              posmove[i].active = false;
            }
          }
        } //downright


        if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y - map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
          }
        } //downleft


        if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y - map.s * 2) {
          posmove[i].active = true;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
          }

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y - map.s) {
              posmove[i].active = false;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxiaXNob3ByZWQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGFjZSIsInR5cGUiLCJOb2RlIiwicmVkY2hlc3MiLCJibGFja2NoZXNzIiwibWFwIiwic2hvd3Bvc3NpYmxlbW92ZSIsImdldENvbXBvbmVudCIsInRvdWNobW92ZSIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJzZWxmIiwidWlkIiwidGhlbiIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsInBhdXNlU3lzdGVtRXZlbnRzIiwieSIsInJlZHJpdmVyIiwieCIsIm5vZGUiLCJzIiwiaiIsImsiLCJzZXRTY2FsZSIsInNjYWxlIiwicmVkdG91Y2htb3ZlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBREc7QUFLVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUxBO0FBU1ZFLElBQUFBLFVBQVUsRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkMsS0FURjtBQWFWRyxJQUFBQSxHQUFHLEVB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LENBQUQsQ0FBUCxDQUFXTSxDQUExQixJQUNBcEIsTUFBTSxDQUFDd0IsQ0FBRCxDQUFOLENBQVVOLENBQVYsSUFBZXJCLE9BQU8sQ0FBQ2lCLENBQUQsQ0FBUCxDQUFXSSxDQUQxQixJQUVBckIsT0FBTyxDQUFDaUIsQ0FBRCxDQUFQLENBQVdFLE1BQVgsSUFBcUIsSUFIdkIsRUFJRTtBQUNBbkIsWUFBQUEsT0FBTyxDQUFDaUIsQ0FBRCxDQUFQLENBQVdXLFFBQVgsQ0FBb0JoQyxHQUFHLENBQUNpQyxLQUF4QixFQUErQmpDLEdBQUcsQ0FBQ2lDLEtBQW5DO0FBQ0Q7QUFDRjtBQUNGLE9BOUdzQyxDQStHdkM7OztBQUNBOUIsTUFBQUEsU0FBUyxDQUFDK0IsWUFBVixDQUF1QmIsQ0FBdkI7QUFDRDtBQUNGLEdBakxNO0FBbUxQYyxFQUFBQSxLQW5MTyxtQkFtTEMsQ0FBRSxDQW5MSCxDQXFMUDs7QUFyTE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyByZWNlaXZlZHJvb21JRCwgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vLi4vLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHBsYWNlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgbWFwOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2hvd3Bvc3NpYmxlbW92ZSgpIHtcclxuICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoXCJib2FyZGluZm9cIik7XHJcbiAgICBsZXQgdG91Y2htb3ZlID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KFwidG91Y2htb3ZlXCIpO1xyXG4gICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgIHZhciBwb3Ntb3ZlID0gcGxhY2UuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgYmxhY2tjaGVzcyA9IHRoaXMuYmxhY2tjaGVzcztcclxuICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgYmxhY2tjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIHVpZCA9IHVpZDtcclxuICAgIHJlY2VpdmVkcm9vbUlEKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBmZXRjaChcImZldGNoKGh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbS9cIiArIGRhdGEsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgcmVjZWl2ZWR1c2VySUQoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IHVpZCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidWlkIHAxXCIsIHVpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9kZWFjdGl2ZSBiZWZvcmUgYW5vdGhlciBjbGlja1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3Ntb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9yZWR0dXJuXHJcbiAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgLy9sb2dpYyBtb3ZlXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHBvc21vdmVbaV0ueSA8PSBtYXAucmVkcml2ZXIpIHtcclxuICAgICAgICAvL3VwcmlnaHRcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggKyBtYXAucyAqIDIgJiZcclxuICAgICAgICAgIHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSArIG1hcC5zICogMlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICByZWRjW2pdLnggPT0gc2VsZi5ub2RlLnggKyBtYXAucyAmJlxyXG4gICAgICAgICAgICAgIHJlZGNbal0ueSA9PSBzZWxmLm5vZGUueSArIG1hcC5zXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBibGFja2Nba10ueCA9PSBzZWxmLm5vZGUueCArIG1hcC5zICYmXHJcbiAgICAgICAgICAgICAgYmxhY2tjW2tdLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAuc1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdXBsZWZ0XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54IC0gbWFwLnMgKiAyICYmXHJcbiAgICAgICAgICBwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAucyAqIDJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgcmVkY1tqXS54ID09IHNlbGYubm9kZS54IC0gbWFwLnMgJiZcclxuICAgICAgICAgICAgICByZWRjW2pdLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAuc1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgYmxhY2tjW2tdLnggPT0gc2VsZi5ub2RlLnggLSBtYXAucyAmJlxyXG4gICAgICAgICAgICAgIGJsYWNrY1trXS55ID09IHNlbGYubm9kZS55ICsgbWFwLnNcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2Rvd25yaWdodFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCArIG1hcC5zICogMiAmJlxyXG4gICAgICAgICAgcG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55IC0gbWFwLnMgKiAyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHJlZGNbal0ueCA9PSBzZWxmLm5vZGUueCArIG1hcC5zICYmXHJcbiAgICAgICAgICAgICAgcmVkY1tqXS55ID09IHNlbGYubm9kZS55IC0gbWFwLnNcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGJsYWNrY1trXS54ID09IHNlbGYubm9kZS54ICsgbWFwLnMgJiZcclxuICAgICAgICAgICAgICBibGFja2Nba10ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9kb3dubGVmdFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCAtIG1hcC5zICogMiAmJlxyXG4gICAgICAgICAgcG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55IC0gbWFwLnMgKiAyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHJlZGNbal0ueCA9PSBzZWxmLm5vZGUueCAtIG1hcC5zICYmXHJcbiAgICAgICAgICAgICAgcmVkY1tqXS55ID09IHNlbGYubm9kZS55IC0gbWFwLnNcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGJsYWNrY1trXS54ID09IHNlbGYubm9kZS54IC0gbWFwLnMgJiZcclxuICAgICAgICAgICAgICBibGFja2Nba10ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9ibG9jayBvdGhlciBjaGVzc1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKHJlZGNbal0ueCA9PSBwb3Ntb3ZlW2ldLnggJiYgcmVkY1tqXS55ID09IHBvc21vdmVbaV0ueSkge1xyXG4gICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2hpZ2h0bGlnaHQga2lsbGFibGVcclxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBibGFja2Nba10ueCA9PSBwb3Ntb3ZlW2ldLnggJiZcclxuICAgICAgICAgICAgYmxhY2tjW2tdLnkgPT0gcG9zbW92ZVtpXS55ICYmXHJcbiAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID09IHRydWVcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy90b3VjaG1vdmVcclxuICAgICAgdG91Y2htb3ZlLnJlZHRvdWNobW92ZShpKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzdGFydCgpIHt9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==