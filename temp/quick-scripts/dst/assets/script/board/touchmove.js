
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

var _axios_connection = require("../axios_connection");

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
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
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
              kill++; //   sendchessPosition(map.movecode);
              // receivedchessPosition()
              //   .then((data) => {
              //     map.movecode = data;
              //     map.movecode.push({
              //       name: self.node.name,
              //       xed: self.node.x,
              //       yed: self.node.y,
              //       x: this.x,
              //       y: this.y,
              //     });
              //   })
              //   .then((data) => {
              //     console.table(map.movecode);
              //     sendchessPosition(map.movecode);
              //   });

              (0, _axios_connection.createmovehistory)(RoomInfos.rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
                (0, _axios_connection.getmovehistory)(RoomInfos).then(function (data) {
                  console.log(data);
                  console.log(RoomInfos.rid);
                });
              });
              redchess.pauseSystemEvents(true);
              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
              break;
            }
          }

          if (kill == 0) {
            // sendchessPosition(map.movecode);
            // receivedchessPosition()
            //   .then((data) => {
            //     map.movecode = data;
            //     map.movecode.push({
            //       name: self.node.name,
            //       xed: self.node.x,
            //       yed: self.node.y,
            //       x: this.x,
            //       y: this.y,
            //     });
            //   })
            //   .then((data) => {
            //     console.table(map.movecode);
            //     sendchessPosition(map.movecode);
            //   });
            (0, _axios_connection.createmovehistory)(RoomInfos.rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
              (0, _axios_connection.getmovehistory)(RoomInfos).then(function (data) {
                console.log(data);
                console.log(RoomInfos.rid);
              });
            });
            redchess.pauseSystemEvents(true);
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
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
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
              kill++; // sendchessPosition(map.movecode);
              // receivedchessPosition()
              //   .then((data) => {
              //     console.log(data);
              //     map.movecode = data;
              //     console.log(map.movecode);
              //     map.movecode.push({
              //       name: self.node.name,
              //       xed: self.node.x,
              //       yed: self.node.y,
              //       x: this.x,
              //       y: this.y,
              //     });
              //   })
              //   .then((data) => {
              //     console.table(map.movecode);
              //     sendchessPosition(map.movecChijode);
              //   });

              blackchess.pauseSystemEvents(true);
              (0, _axios_connection.createmovehistory)(RoomInfos.rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
                (0, _axios_connection.getmovehistory)(RoomInfos).then(function (data) {
                  console.log(data);
                });
              });
              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
              break;
            }
          }

          if (kill == 0) {
            // sendchessPosition(map.movecode);
            // receivedchessPosition()
            //   .then((data) => {
            //     map.movecode = data;
            //     map.movecode.push({
            //       name: self.node.name,
            //       xed: self.node.x,
            //       yed: self.node.y,
            //       x: this.x,
            //       y: this.y,
            //     });
            //   })
            //   .then((data) => {
            //     console.table(map.movecode);
            //     sendchessPosition(map.movecode);
            //   });
            (0, _axios_connection.createmovehistory)(RoomInfos.rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
              (0, _axios_connection.getmovehistory)(RoomInfos).then(function (data) {
                console.log(data);
              });
            });
            blackchess.pauseSystemEvents(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdG91Y2htb3ZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsImRlYWRyZWRjaGVzcyIsImRlYWRibGFja2NoZXNzIiwibW92ZWNvZGVsaXN0IiwidXBkYXRlYWxsIiwicmVkdG91Y2htb3ZlIiwiaSIsIlJvb21JbmZvcyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJhY3RpdmUiLCJvbiIsInNlbGYiLCJub2RlIiwiaXNDaGlsZE9mIiwia2lsbCIsImsiLCJsZW5ndGgiLCJ4IiwieSIsIm5hbWUiLCJyaWQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwYXVzZVN5c3RlbUV2ZW50cyIsInNldFNjYWxlIiwib2ZmIiwicmVzZXQiLCJibGFja3RvdWNobW92ZSIsImoiLCJzdGFydCIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQUNBOztBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBREc7QUFLVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUxBO0FBU1ZF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VUFBVSxDQUFDa0MsaUJBQVgsQ0FBNkIsSUFBN0I7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDQSxpQkFBS0MsR0FBTCxDQUFTLFlBQVQsRUFBdUIsZ0JBQXZCLEVBQXNDdkIsT0FBTyxDQUFDTixDQUFELENBQTdDO0FBQ0Q7QUFDRjs7QUFDRCxhQUFLLElBQUk4QixLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR3hCLE9BQU8sQ0FBQ1ksTUFBcEMsRUFBNENZLEtBQUssRUFBakQsRUFBcUQ7QUFDbkR4QixVQUFBQSxPQUFPLENBQUN3QixLQUFELENBQVAsQ0FBZUYsUUFBZixDQUF3QixDQUF4QixFQUEyQixDQUEzQjtBQUNBdEIsVUFBQUEsT0FBTyxDQUFDd0IsS0FBRCxDQUFQLENBQWVuQixNQUFmLEdBQXdCLEtBQXhCO0FBQ0Q7QUFDRixPQTNFSCxFQTRFRUwsT0FBTyxDQUFDTixDQUFELENBNUVUO0FBOEVEO0FBQ0YsR0F2T007QUF3T1A7QUFDQTtBQUNBO0FBQ0FpQyxFQUFBQSxLQTNPTyxtQkEyT0MsQ0FBRSxDQTNPSDtBQTRPUEMsRUFBQUEsTUE1T08sb0JBNE9FLENBQUUsQ0E1T0o7QUE2T1BDLEVBQUFBLE1BN09PLGtCQTZPQUMsRUE3T0EsRUE2T0ksQ0FBRTtBQTdPTixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwge3RyYW5zcG9ydHMgOiBbJ3dlYnNvY2tldCddLFxyXG4vLyAgICAgcXVlcnk6IHtcclxuLy8gICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICBjYzpcImNjXCIsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0pO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlbW92ZWhpc3RvcnksIGdldG1vdmVoaXN0b3J5IH0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHtcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGRlYWRjaGVzcyxcclxuICByZWNlaXZlZGRlYWRjaGVzcyxcclxuICBzZW5kc3RhdGUsXHJcbn0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcblxyXG4vLyBjb25zdCB7IGlvIH0gPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTtcclxuLy8gaW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuLy8gbGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nKTtcclxuLy9cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBwbGFjZToge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIHJlZGNoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgYmxhY2tjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG1hcDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIGRlYWRyZWRjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIGRlYWRibGFja2NoZXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgbW92ZWNvZGVsaXN0OiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlYWxsOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgLy8gc29ja2V0OiBpby5jb25uZWN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIHsgdHJhbnNwb3J0cyA6IFsnd2Vic29ja2V0J10gfSksXHJcbiAgfSxcclxuICByZWR0b3VjaG1vdmUoaSkge1xyXG4gICAgbGV0IFJvb21JbmZvcyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJvb21JbmZvc1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUm9vbUluZm9zXCIpO1xyXG4gICAgbGV0IHVwZGF0ZWFsbCA9IHRoaXMudXBkYXRlYWxsLmdldENvbXBvbmVudChcInVwZGF0ZVwiKTtcclxuICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoXCJib2FyZGluZm9cIik7XHJcbiAgICBsZXQgZGVhZGJsYWNrY2hlc3MgPSB0aGlzLmRlYWRibGFja2NoZXNzO1xyXG4gICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgIHZhciBwb3Ntb3ZlID0gcGxhY2UuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgYmxhY2tjaGVzcyA9IHRoaXMuYmxhY2tjaGVzcztcclxuICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgYmxhY2tjLnBhcmVudCA9IHBsYWNlO1xyXG5cclxuICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgIHBvc21vdmVbaV0ub24oXHJcbiAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHNlbGYubm9kZS5pc0NoaWxkT2YocmVkY2hlc3MpKSB7XHJcbiAgICAgICAgICAgIHZhciBraWxsID0gMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICBpZiAoYmxhY2tjW2tdLnggPT0gdGhpcy54ICYmIGJsYWNrY1trXS55ID09IHRoaXMueSkge1xyXG4gICAgICAgICAgICAgICAgc2VuZGRlYWRjaGVzcyh7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGJsYWNrY1trXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBraWxsKys7XHJcblxyXG4gICAgICAgICAgICAgIC8vICAgc2VuZGNoZXNzUG9zaXRpb24obWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAvLyByZWNlaXZlZGNoZXNzUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAvLyAgICAgbWFwLm1vdmVjb2RlID0gZGF0YTtcclxuICAgICAgICAgICAgICAvLyAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgIC8vICAgICAgIG5hbWU6IHNlbGYubm9kZS5uYW1lLFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAvLyAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLnRhYmxlKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZW1vdmVoaXN0b3J5KFJvb21JbmZvcy5yaWQsIHNlbGYubm9kZS5uYW1lLCBzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnksIHRoaXMueCwgdGhpcy55KS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgICAgZ2V0bW92ZWhpc3RvcnkoUm9vbUluZm9zKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhSb29tSW5mb3MucmlkKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5mdW5jdGlvbiwgcG9zbW92ZVtpXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtpbGwgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAvLyBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIC8vIHJlY2VpdmVkY2hlc3NQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICBtYXAubW92ZWNvZGUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgIC8vICAgICBtYXAubW92ZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgbmFtZTogc2VsZi5ub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAvLyAgICAgICB5ZWQ6IHNlbGYubm9kZS55LFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHg6IHRoaXMueCxcclxuICAgICAgICAgICAgICAvLyAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vICAgfSlcclxuICAgICAgICAgICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAvLyAgICAgc2VuZGNoZXNzUG9zaXRpb24obWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgICAgICAgIGNyZWF0ZW1vdmVoaXN0b3J5KFJvb21JbmZvcy5yaWQsIHNlbGYubm9kZS5uYW1lLCBzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnksIHRoaXMueCwgdGhpcy55KS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGdldG1vdmVoaXN0b3J5KFJvb21JbmZvcykudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhSb29tSW5mb3MucmlkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHJlZGNoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKHZhciByZXNldCA9IDA7IHJlc2V0IDwgcG9zbW92ZS5sZW5ndGg7IHJlc2V0KyspIHtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIHBvc21vdmVbcmVzZXRdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zbW92ZVtpXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYmxhY2t0b3VjaG1vdmUoaSkge1xyXG4gICAgbGV0IFJvb21JbmZvcyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJvb21JbmZvc1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUm9vbUluZm9zXCIpO1xyXG4gICAgbGV0IHVwZGF0ZWFsbCA9IHRoaXMudXBkYXRlYWxsLmdldENvbXBvbmVudChcInVwZGF0ZVwiKTtcclxuICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoXCJib2FyZGluZm9cIik7XHJcbiAgICBsZXQgZGVhZHJlZGNoZXNzID0gdGhpcy5kZWFkcmVkY2hlc3M7XHJcbiAgICB2YXIgcGxhY2UgPSB0aGlzLnBsYWNlO1xyXG4gICAgdmFyIHBvc21vdmUgPSBwbGFjZS5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgIHZhciByZWRjID0gcmVkY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHJlZGMucGFyZW50ID0gcGxhY2U7XHJcbiAgICBibGFja2MucGFyZW50ID0gcGxhY2U7XHJcbiAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICBwb3Ntb3ZlW2ldLm9uKFxyXG4gICAgICAgIFwidG91Y2hzdGFydFwiLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChzZWxmLm5vZGUuaXNDaGlsZE9mKGJsYWNrY2hlc3MpKSB7XHJcbiAgICAgICAgICAgIHZhciBraWxsID0gMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlZGNbal0ueCA9PSB0aGlzLnggJiYgcmVkY1tqXS55ID09IHRoaXMueSkge1xyXG4gICAgICAgICAgICAgICAgc2VuZGRlYWRjaGVzcyh7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IHJlZGNbal0ubmFtZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAga2lsbCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZWNlaXZlZGNoZXNzUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcC5tb3ZlY29kZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXAubW92ZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB5ZWQ6IHNlbGYubm9kZS55LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNDaGlqb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGJsYWNrY2hlc3MucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVtb3ZlaGlzdG9yeShSb29tSW5mb3MucmlkLCBzZWxmLm5vZGUubmFtZSwgc2VsZi5ub2RlLngsIHNlbGYubm9kZS55LCB0aGlzLngsIHRoaXMueSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgIGdldG1vdmVoaXN0b3J5KFJvb21JbmZvcykudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChraWxsID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gc2VuZGNoZXNzUG9zaXRpb24obWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAvLyByZWNlaXZlZGNoZXNzUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAvLyAgICAgbWFwLm1vdmVjb2RlID0gZGF0YTtcclxuICAgICAgICAgICAgICAvLyAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgIC8vICAgICAgIG5hbWU6IHNlbGYubm9kZS5uYW1lLFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAvLyAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLnRhYmxlKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAgICAgICBjcmVhdGVtb3ZlaGlzdG9yeShSb29tSW5mb3MucmlkLCBzZWxmLm5vZGUubmFtZSwgc2VsZi5ub2RlLngsIHNlbGYubm9kZS55LCB0aGlzLngsIHRoaXMueSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBnZXRtb3ZlaGlzdG9yeShSb29tSW5mb3MpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIGJsYWNrY2hlc3MucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICB0aGlzLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5mdW5jdGlvbiwgcG9zbW92ZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAodmFyIHJlc2V0ID0gMDsgcmVzZXQgPCBwb3Ntb3ZlLmxlbmd0aDsgcmVzZXQrKykge1xyXG4gICAgICAgICAgICBwb3Ntb3ZlW3Jlc2V0XS5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3Ntb3ZlW2ldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBuZXdwb3NpdGlvbihuYW1lLCB4LCB5KXtcclxuICAvLyAgICAgcmV0dXJuICduYW1lJywgeCwgeTtcclxuICAvLyB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgb25Mb2FkKCkge30sXHJcbiAgdXBkYXRlKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==