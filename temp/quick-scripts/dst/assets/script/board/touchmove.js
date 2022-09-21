
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
    }
  },
  redtouchmove: function redtouchmove(i) {
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var rid = RoomInfos.rid;
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

              (0, _axios_connection.createmovehistory)(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
                (0, _axios_connection.getlastmovehistory)(rid).then(function (data) {
                  (0, _socket_connection.sendchessPosition)(data);
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
            (0, _axios_connection.createmovehistory)(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
              (0, _axios_connection.getlastmovehistory)(rid).then(function (data) {
                (0, _socket_connection.sendchessPosition)(data);
              });
            });
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
    var rid = RoomInfos.rid;
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
              //     sendchessPosition(map.movecode);
              //   });

              (0, _axios_connection.createmovehistory)(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
                (0, _axios_connection.getlastmovehistory)(rid).then(function (data) {
                  (0, _socket_connection.sendchessPosition)(data);
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
            (0, _axios_connection.createmovehistory)(rid, self.node.name, self.node.x, self.node.y, this.x, this.y).then(function (data) {
              (0, _axios_connection.getlastmovehistory)(rid).then(function (data) {
                (0, _socket_connection.sendchessPosition)(data);
              });
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdG91Y2htb3ZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsImRlYWRyZWRjaGVzcyIsImRlYWRibGFja2NoZXNzIiwibW92ZWNvZGVsaXN0IiwidXBkYXRlYWxsIiwicmVkdG91Y2htb3ZlIiwiaSIsIlJvb21JbmZvcyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInJpZCIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJhY3RpdmUiLCJvbiIsInNlbGYiLCJub2RlIiwiaXNDaGlsZE9mIiwia2lsbCIsImsiLCJsZW5ndGgiLCJ4IiwieSIsIm5hbWUiLCJ0aGVuIiwiZGF0YSIsInNldFNjYWxlIiwib2ZmIiwicmVzZXQiLCJibGFja3RvdWNobW92ZSIsImoiLCJzdGFydCIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQUNBOztBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBREc7QUFLVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUxBO0FBU1ZFLElBQUFBLFVBQVUsRUFBRTtBQUNWLGlCQUFTLElBREM7QUFF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Q0Q7QUFDRixPQXpFSCxFQTBFRUwsT0FBTyxDQUFDUCxDQUFELENBMUVUO0FBNEVEO0FBQ0YsR0FqT007QUFrT1A7QUFDQTtBQUNBO0FBQ0E4QixFQUFBQSxLQXJPTyxtQkFxT0MsQ0FBRSxDQXJPSDtBQXNPUEMsRUFBQUEsTUF0T08sb0JBc09FLENBQUUsQ0F0T0o7QUF1T1BDLEVBQUFBLE1Bdk9PLGtCQXVPQUMsRUF2T0EsRUF1T0ksQ0FBRTtBQXZPTixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwge3RyYW5zcG9ydHMgOiBbJ3dlYnNvY2tldCddLFxyXG4vLyAgICAgcXVlcnk6IHtcclxuLy8gICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICBjYzpcImNjXCIsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0pO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlbW92ZWhpc3RvcnksIGdldG1vdmVoaXN0b3J5LGdldGxhc3Rtb3ZlaGlzdG9yeSB9IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmRkZWFkY2hlc3MsXHJcbiAgcmVjZWl2ZWRkZWFkY2hlc3MsXHJcbiAgc2VuZHN0YXRlLFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuLy8gY29uc3QgeyBpbyB9ID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7XHJcbi8vIGltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbi8vIGxldCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyk7XHJcbi8vXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcGxhY2U6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICByZWRjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIGJsYWNrY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtYXA6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkYmxhY2tjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG1vdmVjb2RlbGlzdDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIHVwZGF0ZWFsbDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlZHRvdWNobW92ZShpKSB7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICB2YXIgcmlkID0gUm9vbUluZm9zLnJpZDtcclxuICAgIGxldCB1cGRhdGVhbGwgPSB0aGlzLnVwZGF0ZWFsbC5nZXRDb21wb25lbnQoXCJ1cGRhdGVcIik7XHJcbiAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KFwiYm9hcmRpbmZvXCIpO1xyXG4gICAgbGV0IGRlYWRibGFja2NoZXNzID0gdGhpcy5kZWFkYmxhY2tjaGVzcztcclxuICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuXHJcbiAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICBwb3Ntb3ZlW2ldLm9uKFxyXG4gICAgICAgIFwidG91Y2hzdGFydFwiLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChzZWxmLm5vZGUuaXNDaGlsZE9mKHJlZGNoZXNzKSkge1xyXG4gICAgICAgICAgICB2YXIga2lsbCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGJsYWNrY1trXS54ID09IHRoaXMueCAmJiBibGFja2Nba10ueSA9PSB0aGlzLnkpIHtcclxuICAgICAgICAgICAgICAgIHNlbmRkZWFkY2hlc3Moe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBibGFja2Nba10ubmFtZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAga2lsbCsrO1xyXG5cclxuICAgICAgICAgICAgICAvLyAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgLy8gcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uKClcclxuICAgICAgICAgICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIG1hcC5tb3ZlY29kZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgLy8gICAgIG1hcC5tb3ZlY29kZS5wdXNoKHtcclxuICAgICAgICAgICAgICAvLyAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAvLyAgICAgICB4ZWQ6IHNlbGYubm9kZS54LFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHllZDogc2VsZi5ub2RlLnksXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHk6IHRoaXMueSxcclxuICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS50YWJsZShtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIC8vICAgICBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVtb3ZlaGlzdG9yeShyaWQsIHNlbGYubm9kZS5uYW1lLCBzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnksIHRoaXMueCwgdGhpcy55KS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgICAgZ2V0bGFzdG1vdmVoaXN0b3J5KHJpZCkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGNoZXNzUG9zaXRpb24oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5mdW5jdGlvbiwgcG9zbW92ZVtpXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtpbGwgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAvLyBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIC8vIHJlY2VpdmVkY2hlc3NQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICBtYXAubW92ZWNvZGUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgIC8vICAgICBtYXAubW92ZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgbmFtZTogc2VsZi5ub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAvLyAgICAgICB5ZWQ6IHNlbGYubm9kZS55LFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHg6IHRoaXMueCxcclxuICAgICAgICAgICAgICAvLyAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vICAgfSlcclxuICAgICAgICAgICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAvLyAgICAgc2VuZGNoZXNzUG9zaXRpb24obWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgICAgICAgIGNyZWF0ZW1vdmVoaXN0b3J5KHJpZCwgc2VsZi5ub2RlLm5hbWUsIHNlbGYubm9kZS54LCBzZWxmLm5vZGUueSwgdGhpcy54LCB0aGlzLnkpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgZ2V0bGFzdG1vdmVoaXN0b3J5KHJpZCkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgIHNlbmRjaGVzc1Bvc2l0aW9uKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICB0aGlzLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5mdW5jdGlvbiwgcG9zbW92ZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAodmFyIHJlc2V0ID0gMDsgcmVzZXQgPCBwb3Ntb3ZlLmxlbmd0aDsgcmVzZXQrKykge1xyXG4gICAgICAgICAgICBwb3Ntb3ZlW3Jlc2V0XS5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3Ntb3ZlW2ldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBibGFja3RvdWNobW92ZShpKSB7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICB2YXIgcmlkID0gUm9vbUluZm9zLnJpZDtcclxuICAgIGxldCB1cGRhdGVhbGwgPSB0aGlzLnVwZGF0ZWFsbC5nZXRDb21wb25lbnQoXCJ1cGRhdGVcIik7XHJcbiAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KFwiYm9hcmRpbmZvXCIpO1xyXG4gICAgbGV0IGRlYWRyZWRjaGVzcyA9IHRoaXMuZGVhZHJlZGNoZXNzO1xyXG4gICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgIHZhciBwb3Ntb3ZlID0gcGxhY2UuZ2V0Q2hpbGRyZW4oKTtcclxuICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgYmxhY2tjaGVzcyA9IHRoaXMuYmxhY2tjaGVzcztcclxuICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgYmxhY2tjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgcG9zbW92ZVtpXS5vbihcclxuICAgICAgICBcInRvdWNoc3RhcnRcIixcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5ub2RlLmlzQ2hpbGRPZihibGFja2NoZXNzKSkge1xyXG4gICAgICAgICAgICB2YXIga2lsbCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIGlmIChyZWRjW2pdLnggPT0gdGhpcy54ICYmIHJlZGNbal0ueSA9PSB0aGlzLnkpIHtcclxuICAgICAgICAgICAgICAgIHNlbmRkZWFkY2hlc3Moe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiByZWRjW2pdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGtpbGwrKztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXAubW92ZWNvZGUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgbmFtZTogc2VsZi5ub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB4ZWQ6IHNlbGYubm9kZS54LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgeWVkOiBzZWxmLm5vZGUueSwgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS50YWJsZShtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlbW92ZWhpc3RvcnkocmlkLCBzZWxmLm5vZGUubmFtZSwgc2VsZi5ub2RlLngsIHNlbGYubm9kZS55LCB0aGlzLngsIHRoaXMueSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0bGFzdG1vdmVoaXN0b3J5KHJpZCkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZW5kY2hlc3NQb3NpdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChraWxsID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gc2VuZGNoZXNzUG9zaXRpb24obWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAvLyByZWNlaXZlZGNoZXNzUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAvLyAgICAgbWFwLm1vdmVjb2RlID0gZGF0YTtcclxuICAgICAgICAgICAgICAvLyAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgIC8vICAgICAgIG5hbWU6IHNlbGYubm9kZS5uYW1lLFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAvLyAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLnRhYmxlKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAgICAgICBjcmVhdGVtb3ZlaGlzdG9yeShyaWQsIHNlbGYubm9kZS5uYW1lLCBzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnksIHRoaXMueCwgdGhpcy55KS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGdldGxhc3Rtb3ZlaGlzdG9yeShyaWQpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgICBzZW5kY2hlc3NQb3NpdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKHZhciByZXNldCA9IDA7IHJlc2V0IDwgcG9zbW92ZS5sZW5ndGg7IHJlc2V0KyspIHtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIHBvc21vdmVbcmVzZXRdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zbW92ZVtpXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gbmV3cG9zaXRpb24obmFtZSwgeCwgeSl7XHJcbiAgLy8gICAgIHJldHVybiAnbmFtZScsIHgsIHk7XHJcbiAgLy8gfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=