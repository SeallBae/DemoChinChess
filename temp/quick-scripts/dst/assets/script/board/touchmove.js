
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
        } //blackturn


        blackchess.pauseSystemEvents(true); // console.log(blackchess.pauseSystemEvents);

        redchess.pauseSystemEvents(true);
        (0, _socket_connection.sendstate)("red");
        updateall.updateall(); // updateall.updateall(self.node.name, self.node.x, self.node.y);
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
        } //redturn
        // newposition(self.node.name, self.node.x, self.node.y);


        redchess.pauseSystemEvents(true);
        blackchess.pauseSystemEvents(true); // movecodelist.updatelist();

        updateall.updateall(); // updateall.updateall(self.node.name, self.node.x, self.node.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdG91Y2htb3ZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsImRlYWRyZWRjaGVzcyIsImRlYWRibGFja2NoZXNzIiwibW92ZWNvZGVsaXN0IiwidXBkYXRlYWxsIiwicmVkdG91Y2htb3ZlIiwiaSIsImdldENvbXBvbmVudCIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJhY3RpdmUiLCJvbiIsInNlbGYiLCJub2RlIiwiaXNDaGlsZE9mIiwia2lsbCIsImsiLCJsZW5ndGgiLCJ4IiwieSIsIm5hbWUiLCJtb3ZlY29kZSIsInB1c2giLCJ4ZWQiLCJ5ZWQiLCJjb25zb2xlIiwidGFibGUiLCJzZXRTY2FsZSIsIm9mZiIsInJlc2V0IiwicGF1c2VTeXN0ZW1FdmVudHMiLCJibGFja3RvdWNobW92ZSIsImoiLCJzdGFydCIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBREc7QUFLVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUxBO0FBU1ZFLElBQUFBLFVBQVUsRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkgsTUFBQUEs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REgsRUFvREVJLE9BQU8sQ0FBQ0YsQ0FBRCxDQXBEVDtBQXNERDtBQUNGLEdBbExNO0FBbUxQO0FBQ0E7QUFDQTtBQUNBOEIsRUFBQUEsS0F0TE8sbUJBc0xDLENBQUUsQ0F0TEg7QUF1TFBDLEVBQUFBLE1BdkxPLG9CQXVMRSxDQUFFLENBdkxKO0FBd0xQQyxFQUFBQSxNQXhMTyxrQkF3TEFDLEVBeExBLEVBd0xJLENBQUU7QUF4TE4sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIHt0cmFuc3BvcnRzIDogWyd3ZWJzb2NrZXQnXSxcclxuLy8gICAgIHF1ZXJ5OiB7XHJcbi8vICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgY2M6XCJjY1wiLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuXHJcbmltcG9ydCB7XHJcbiAgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmRkZWFkY2hlc3MsXHJcbiAgcmVjZWl2ZWRkZWFkY2hlc3MsXHJcbiAgc2VuZHN0YXRlLFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuLy8gY29uc3QgeyBpbyB9ID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7XHJcbi8vIGltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbi8vIGxldCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyk7XHJcbi8vXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcGxhY2U6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICByZWRjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIGJsYWNrY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtYXA6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkYmxhY2tjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG1vdmVjb2RlbGlzdDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIHVwZGF0ZWFsbDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIC8vIHNvY2tldDogaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCB7IHRyYW5zcG9ydHMgOiBbJ3dlYnNvY2tldCddIH0pLFxyXG4gIH0sXHJcbiAgcmVkdG91Y2htb3ZlKGkpIHtcclxuICAgIGxldCB1cGRhdGVhbGwgPSB0aGlzLnVwZGF0ZWFsbC5nZXRDb21wb25lbnQoXCJ1cGRhdGVcIik7XHJcbiAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KFwiYm9hcmRpbmZvXCIpO1xyXG4gICAgbGV0IGRlYWRibGFja2NoZXNzID0gdGhpcy5kZWFkYmxhY2tjaGVzcztcclxuICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuXHJcbiAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICBwb3Ntb3ZlW2ldLm9uKFxyXG4gICAgICAgIFwidG91Y2hzdGFydFwiLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChzZWxmLm5vZGUuaXNDaGlsZE9mKHJlZGNoZXNzKSkge1xyXG4gICAgICAgICAgICB2YXIga2lsbCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGJsYWNrY1trXS54ID09IHRoaXMueCAmJiBibGFja2Nba10ueSA9PSB0aGlzLnkpIHtcclxuICAgICAgICAgICAgICAgIHNlbmRkZWFkY2hlc3Moe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBibGFja2Nba10ubmFtZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAga2lsbCsrO1xyXG4gICAgICAgICAgICAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLm5vZGUubmFtZSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGF0YSA9IHJlY2VpdmVkY2hlc3NQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2ZmKFwidG91Y2hzdGFydFwiLCB0aGlzLmZ1bmN0aW9uLCBwb3Ntb3ZlW2ldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2lsbCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogc2VsZi5ub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB4ZWQ6IHNlbGYubm9kZS54LFxyXG4gICAgICAgICAgICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgc2VuZGNoZXNzUG9zaXRpb24obWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRoaXMub2ZmKFwidG91Y2hzdGFydFwiLCB0aGlzLmZ1bmN0aW9uLCBwb3Ntb3ZlW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yICh2YXIgcmVzZXQgPSAwOyByZXNldCA8IHBvc21vdmUubGVuZ3RoOyByZXNldCsrKSB7XHJcbiAgICAgICAgICAgIHBvc21vdmVbcmVzZXRdLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICBwb3Ntb3ZlW3Jlc2V0XS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vYmxhY2t0dXJuXHJcbiAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYmxhY2tjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyk7XHJcbiAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIHNlbmRzdGF0ZShcInJlZFwiKTtcclxuICAgICAgICAgIHVwZGF0ZWFsbC51cGRhdGVhbGwoKTtcclxuICAgICAgICAgIC8vIHVwZGF0ZWFsbC51cGRhdGVhbGwoc2VsZi5ub2RlLm5hbWUsIHNlbGYubm9kZS54LCBzZWxmLm5vZGUueSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3Ntb3ZlW2ldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBibGFja3RvdWNobW92ZShpKSB7XHJcbiAgICBsZXQgdXBkYXRlYWxsID0gdGhpcy51cGRhdGVhbGwuZ2V0Q29tcG9uZW50KFwidXBkYXRlXCIpO1xyXG4gICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudChcImJvYXJkaW5mb1wiKTtcclxuICAgIGxldCBkZWFkcmVkY2hlc3MgPSB0aGlzLmRlYWRyZWRjaGVzcztcclxuICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgIHBvc21vdmVbaV0ub24oXHJcbiAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHNlbGYubm9kZS5pc0NoaWxkT2YoYmxhY2tjaGVzcykpIHtcclxuICAgICAgICAgICAgdmFyIGtpbGwgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBpZiAocmVkY1tqXS54ID09IHRoaXMueCAmJiByZWRjW2pdLnkgPT0gdGhpcy55KSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kZGVhZGNoZXNzKHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogcmVkY1tqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAga2lsbCsrO1xyXG4gICAgICAgICAgICAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChraWxsID09IDApIHtcclxuICAgICAgICAgICAgICBtYXAubW92ZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgICB5ZWQ6IHNlbGYubm9kZS55LFxyXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKHZhciByZXNldCA9IDA7IHJlc2V0IDwgcG9zbW92ZS5sZW5ndGg7IHJlc2V0KyspIHtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIHBvc21vdmVbcmVzZXRdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9yZWR0dXJuXHJcbiAgICAgICAgICAvLyBuZXdwb3NpdGlvbihzZWxmLm5vZGUubmFtZSwgc2VsZi5ub2RlLngsIHNlbGYubm9kZS55KTtcclxuICAgICAgICAgIHJlZGNoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgYmxhY2tjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIC8vIG1vdmVjb2RlbGlzdC51cGRhdGVsaXN0KCk7XHJcbiAgICAgICAgICB1cGRhdGVhbGwudXBkYXRlYWxsKCk7XHJcbiAgICAgICAgICAvLyB1cGRhdGVhbGwudXBkYXRlYWxsKHNlbGYubm9kZS5uYW1lLCBzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zbW92ZVtpXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gbmV3cG9zaXRpb24obmFtZSwgeCwgeSl7XHJcbiAgLy8gICAgIHJldHVybiAnbmFtZScsIHgsIHk7XHJcbiAgLy8gfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=