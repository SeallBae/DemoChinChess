
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/touchmove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'add97JwDi1EwI+ETWKdjCct', 'touchmove');
// script/board/touchmove.js

"use strict";

var _socket_connection = require("../socket_connection");

// let socket = io("http://localhost:3000", {transports : ['websocket'],
//     query: {
//       userId: 1,
//       cc:"cc",
//     },
//   });
// const { io } = require("socket.io-client");
// import * as io from "socket.io-client";
// let socket = io.connect('http://localhost:3000/');
//
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
    },
    deadredchess: {
      "default": null,
      type: cc.Node
    },
    deadblackchess: {
      "default": null,
      type: cc.Node
    },
    movecodelist: {
      "default": null,
      type: cc.Node
    },
    updateall: {
      "default": null,
      type: cc.Node
    } // socket: io.connect("http://localhost:3000", { transports : ['websocket'] }),

  },
  redtouchmove: function redtouchmove(i) {
    var updateall = this.updateall.getComponent("update");
    var map = this.map.getComponent("boardinfo");
    var deadblackchess = this.deadblackchess;
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;

    if (posmove[i].active == true) {
      posmove[i].on("touchstart", function () {
        if (self.node.isChildOf(redchess)) {
          var kill = 0;

          for (var k = 0; k < blackc.length; k++) {
            if (blackc[k].x == this.x && blackc[k].y == this.y) {
              (0, _socket_connection.senddeadchess)({
                name: blackc[k].name
              });
              kill++;
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y
              });
              console.table(map.movecode);
              (0, _socket_connection.sendchessPosition)(map.movecode); // console.log(self.node.name, this.x, this.y);
              // const data = receivedchessPosition();
              // console.log(data);

              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
              break;
            }
          }

          if (kill == 0) {
            map.movecode.push({
              name: self.node.name,
              xed: self.node.x,
              yed: self.node.y,
              x: this.x,
              y: this.y
            });
            console.table(map.movecode);
            (0, _socket_connection.sendchessPosition)(map.movecode);
            this.setScale(1, 1);
            this.off("touchstart", this["function"], posmove[i]);
          }
        }

        for (var reset = 0; reset < posmove.length; reset++) {
          posmove[reset].setScale(1, 1);
          posmove[reset].active = false;
        }
      }, posmove[i]);
    }
  },
  blacktouchmove: function blacktouchmove(i) {
    var updateall = this.updateall.getComponent("update");
    var map = this.map.getComponent("boardinfo");
    var deadredchess = this.deadredchess;
    var place = this.place;
    var posmove = place.getChildren();
    var redchess = this.redchess;
    var redc = redchess.getChildren();
    var blackchess = this.blackchess;
    var blackc = blackchess.getChildren();
    redc.parent = place;
    blackc.parent = place;

    if (posmove[i].active == true) {
      posmove[i].on("touchstart", function () {
        if (self.node.isChildOf(blackchess)) {
          var kill = 0;

          for (var j = 0; j < redc.length; j++) {
            if (redc[j].x == this.x && redc[j].y == this.y) {
              (0, _socket_connection.senddeadchess)({
                name: redc[j].name
              });
              kill++;
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y
              });
              console.table(map.movecode);
              (0, _socket_connection.sendchessPosition)(map.movecode);
              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
              break;
            }
          }

          if (kill == 0) {
            map.movecode.push({
              name: self.node.name,
              xed: self.node.x,
              yed: self.node.y,
              x: this.x,
              y: this.y
            });
            console.table(map.movecode);
            (0, _socket_connection.sendchessPosition)(map.movecode);
            this.setScale(1, 1);
            this.off("touchstart", this["function"], posmove[i]);
          }
        }

        for (var reset = 0; reset < posmove.length; reset++) {
          posmove[reset].setScale(1, 1);
          posmove[reset].active = false;
        }
      }, posmove[i]);
    }
  },
  // newposition(name, x, y){
  //     return 'name', x, y;
  // },
  start: function start() {},
  onLoad: function onLoad() {},
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdG91Y2htb3ZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsImRlYWRyZWRjaGVzcyIsImRlYWRibGFja2NoZXNzIiwibW92ZWNvZGVsaXN0IiwidXBkYXRlYWxsIiwicmVkdG91Y2htb3ZlIiwiaSIsImdldENvbXBvbmVudCIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJhY3RpdmUiLCJvbiIsInNlbGYiLCJub2RlIiwiaXNDaGlsZE9mIiwia2lsbCIsImsiLCJsZW5ndGgiLCJ4IiwieSIsIm5hbWUiLCJtb3ZlY29kZSIsInB1c2giLCJ4ZWQiLCJ5ZWQiLCJjb25zb2xlIiwidGFibGUiLCJzZXRTY2FsZSIsIm9mZiIsInJlc2V0IiwiYmxhY2t0b3VjaG1vdmUiLCJqIiwic3RhcnQiLCJvbkxvYWQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0wsaUJBQVMsSUFESjtBQUVMQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSixLQURHO0FBS1ZDLElBQUFBLFFBQVEsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FMQTtBQVNWRSxJQUFBQSxVQUFVLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFD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R0FBRyxFQUFFWixJQUFJLENBQUNDLElBQUwsQ0FBVU0sQ0FIQztBQUloQkQsY0FBQUEsQ0FBQyxFQUFFLEtBQUtBLENBSlE7QUFLaEJDLGNBQUFBLENBQUMsRUFBRSxLQUFLQTtBQUxRLGFBQWxCO0FBT0FNLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjN0IsR0FBRyxDQUFDd0IsUUFBbEI7QUFDQSxzREFBa0J4QixHQUFHLENBQUN3QixRQUF0QjtBQUNBLGlCQUFLTSxRQUFMLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQUNBLGlCQUFLQyxHQUFMLENBQVMsWUFBVCxFQUF1QixnQkFBdkIsRUFBc0N2QixPQUFPLENBQUNGLENBQUQsQ0FBN0M7QUFDRDtBQUNGOztBQUNELGFBQUssSUFBSTBCLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHeEIsT0FBTyxDQUFDWSxNQUFwQyxFQUE0Q1ksS0FBSyxFQUFqRCxFQUFxRDtBQUNuRHhCLFVBQUFBLE9BQU8sQ0FBQ3dCLEtBQUQsQ0FBUCxDQUFlRixRQUFmLENBQXdCLENBQXhCLEVBQTJCLENBQTNCO0FBQ0F0QixVQUFBQSxPQUFPLENBQUN3QixLQUFELENBQVAsQ0FBZW5CLE1BQWYsR0FBd0IsS0FBeEI7QUFDRDtBQUNGLE9BNUNILEVBNkNFTCxPQUFPLENBQUNGLENBQUQsQ0E3Q1Q7QUErQ0Q7QUFDRixHQXBLTTtBQXFLUDtBQUNBO0FBQ0E7QUFDQTZCLEVBQUFBLEtBeEtPLG1CQXdLQyxDQUFFLENBeEtIO0FBeUtQQyxFQUFBQSxNQXpLTyxvQkF5S0UsQ0FBRSxDQXpLSjtBQTBLUEMsRUFBQUEsTUExS08sa0JBMEtBQyxFQTFLQSxFQTBLSSxDQUFFO0FBMUtOLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCB7dHJhbnNwb3J0cyA6IFsnd2Vic29ja2V0J10sXHJcbi8vICAgICBxdWVyeToge1xyXG4vLyAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgIGNjOlwiY2NcIixcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcblxyXG5pbXBvcnQge1xyXG4gIHJlY2VpdmVkY2hlc3NQb3NpdGlvbixcclxuICBzZW5kY2hlc3NQb3NpdGlvbixcclxuICBzZW5kZGVhZGNoZXNzLFxyXG4gIHJlY2VpdmVkZGVhZGNoZXNzLFxyXG4gIHNlbmRzdGF0ZSxcclxufSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuXHJcbi8vIGNvbnN0IHsgaW8gfSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xyXG4vLyBpbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG4vLyBsZXQgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycpO1xyXG4vL1xyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHBsYWNlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgbWFwOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgZGVhZHJlZGNoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgZGVhZGJsYWNrY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtb3ZlY29kZWxpc3Q6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICB1cGRhdGVhbGw6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICAvLyBzb2NrZXQ6IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwgeyB0cmFuc3BvcnRzIDogWyd3ZWJzb2NrZXQnXSB9KSxcclxuICB9LFxyXG4gIHJlZHRvdWNobW92ZShpKSB7XHJcbiAgICBsZXQgdXBkYXRlYWxsID0gdGhpcy51cGRhdGVhbGwuZ2V0Q29tcG9uZW50KFwidXBkYXRlXCIpO1xyXG4gICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudChcImJvYXJkaW5mb1wiKTtcclxuICAgIGxldCBkZWFkYmxhY2tjaGVzcyA9IHRoaXMuZGVhZGJsYWNrY2hlc3M7XHJcbiAgICB2YXIgcGxhY2UgPSB0aGlzLnBsYWNlO1xyXG4gICAgdmFyIHBvc21vdmUgPSBwbGFjZS5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgIHZhciByZWRjID0gcmVkY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHJlZGMucGFyZW50ID0gcGxhY2U7XHJcbiAgICBibGFja2MucGFyZW50ID0gcGxhY2U7XHJcblxyXG4gICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgcG9zbW92ZVtpXS5vbihcclxuICAgICAgICBcInRvdWNoc3RhcnRcIixcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5ub2RlLmlzQ2hpbGRPZihyZWRjaGVzcykpIHtcclxuICAgICAgICAgICAgdmFyIGtpbGwgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgIGlmIChibGFja2Nba10ueCA9PSB0aGlzLnggJiYgYmxhY2tjW2tdLnkgPT0gdGhpcy55KSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kZGVhZGNoZXNzKHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogYmxhY2tjW2tdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGtpbGwrKztcclxuICAgICAgICAgICAgICAgIG1hcC5tb3ZlY29kZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogc2VsZi5ub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgICAgIHllZDogc2VsZi5ub2RlLnksXHJcbiAgICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcclxuICAgICAgICAgICAgICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZi5ub2RlLm5hbWUsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGEgPSByZWNlaXZlZGNoZXNzUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5mdW5jdGlvbiwgcG9zbW92ZVtpXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtpbGwgPT0gMCkge1xyXG4gICAgICAgICAgICAgIG1hcC5tb3ZlY29kZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHNlbGYubm9kZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAgIHllZDogc2VsZi5ub2RlLnksXHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS50YWJsZShtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICB0aGlzLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5mdW5jdGlvbiwgcG9zbW92ZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAodmFyIHJlc2V0ID0gMDsgcmVzZXQgPCBwb3Ntb3ZlLmxlbmd0aDsgcmVzZXQrKykge1xyXG4gICAgICAgICAgICBwb3Ntb3ZlW3Jlc2V0XS5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3Ntb3ZlW2ldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBibGFja3RvdWNobW92ZShpKSB7XHJcbiAgICBsZXQgdXBkYXRlYWxsID0gdGhpcy51cGRhdGVhbGwuZ2V0Q29tcG9uZW50KFwidXBkYXRlXCIpO1xyXG4gICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudChcImJvYXJkaW5mb1wiKTtcclxuICAgIGxldCBkZWFkcmVkY2hlc3MgPSB0aGlzLmRlYWRyZWRjaGVzcztcclxuICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgIHBvc21vdmVbaV0ub24oXHJcbiAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHNlbGYubm9kZS5pc0NoaWxkT2YoYmxhY2tjaGVzcykpIHtcclxuICAgICAgICAgICAgdmFyIGtpbGwgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBpZiAocmVkY1tqXS54ID09IHRoaXMueCAmJiByZWRjW2pdLnkgPT0gdGhpcy55KSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kZGVhZGNoZXNzKHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogcmVkY1tqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAga2lsbCsrO1xyXG4gICAgICAgICAgICAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChraWxsID09IDApIHtcclxuICAgICAgICAgICAgICBtYXAubW92ZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgICB5ZWQ6IHNlbGYubm9kZS55LFxyXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKHZhciByZXNldCA9IDA7IHJlc2V0IDwgcG9zbW92ZS5sZW5ndGg7IHJlc2V0KyspIHtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIHBvc21vdmVbcmVzZXRdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zbW92ZVtpXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gbmV3cG9zaXRpb24obmFtZSwgeCwgeSl7XHJcbiAgLy8gICAgIHJldHVybiAnbmFtZScsIHgsIHk7XHJcbiAgLy8gfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=