
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Blur');
require('./assets/script/Page/Login/LoginPage');
require('./assets/script/PlayerInfo');
require('./assets/script/Playnow');
require('./assets/script/Popup');
require('./assets/script/Touch');
require('./assets/script/axios_connection');
require('./assets/script/board/boardinfo');
require('./assets/script/board/chess/blackchess/bishopblack');
require('./assets/script/board/chess/blackchess/canonblack');
require('./assets/script/board/chess/blackchess/guardblack');
require('./assets/script/board/chess/blackchess/kingblack');
require('./assets/script/board/chess/blackchess/knightblack');
require('./assets/script/board/chess/blackchess/pawnblack');
require('./assets/script/board/chess/blackchess/rookblack');
require('./assets/script/board/chess/redchess/bishopred');
require('./assets/script/board/chess/redchess/canonred');
require('./assets/script/board/chess/redchess/guardred');
require('./assets/script/board/chess/redchess/kingred');
require('./assets/script/board/chess/redchess/knightred');
require('./assets/script/board/chess/redchess/pawnred');
require('./assets/script/board/chess/redchess/redchess');
require('./assets/script/board/chess/redchess/rookred');
require('./assets/script/board/touchmove');
require('./assets/script/board/update');
require('./assets/script/changescene/backtoroomlist');
require('./assets/script/changescene/movetoboard');
require('./assets/script/changescene/movetohomepage');
require('./assets/script/changescene/movetoroom');
require('./assets/script/changescene/movetorooms');
require('./assets/script/fetch');
require('./assets/script/gameplay/deadblackchess');
require('./assets/script/gameplay/deadredchess');
require('./assets/script/gameplay/list');
require('./assets/script/gameplay/movecodelist');
require('./assets/script/gameplay/readybutton');
require('./assets/script/homepage/display');
require('./assets/script/room/PrepareRoom/Sendchat');
require('./assets/script/room/PrepareRoom/Showchat');
require('./assets/script/room/PrepareRoom/roominfo');
require('./assets/script/room/RoomInfos');
require('./assets/script/room/createroom');
require('./assets/script/room/joinroom');
require('./assets/script/room/showrooms');
require('./assets/script/socket_connection');
require('./assets/script/temp/deleteroom');
require('./assets/script/temp/deleteuser');

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcdG91Y2htb3ZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsImRlYWRyZWRjaGVzcyIsImRlYWRibGFja2NoZXNzIiwibW92ZWNvZGVsaXN0IiwidXBkYXRlYWxsIiwicmVkdG91Y2htb3ZlIiwiaSIsImdldENvbXBvbmVudCIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJhY3RpdmUiLCJvbiIsInNlbGYiLCJub2RlIiwiaXNDaGlsZE9mIiwia2lsbCIsImsiLCJsZW5ndGgiLCJ4IiwieSIsIm5hbWUiLCJtb3ZlY29kZSIsInB1c2giLCJ4ZWQiLCJ5ZWQiLCJjb25zb2xlIiwidGFibGUiLCJzZXRTY2FsZSIsIm9mZiIsInJlc2V0IiwicGF1c2VTeXN0ZW1FdmVudHMiLCJibGFja3RvdWNobW92ZSIsImoiLCJzdGFydCIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBREc7QUFLVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUxBO0FBU1ZFLElBQUFBLFVBQVUsRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkMsS0FURjtBQWFWRyxJQUFBQSxHQUFHLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBYks7QUFpQlZJLElBQUFBLFlBQVksRUFBRTtBQUNaLGlCQUFTLElBREc7QUFFWkwsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkcsS0FqQko7QUFxQlZLLElBQUFBLGNBQWMsRUFBRTtBQUNkLGlCQUFTLElBREs7QUFFZE4sTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkssS0FyQk47QUF5QlZNLElBQUFBLFlBQVksRUFBRTtBQUNaLGlCQUFTLElBREc7QUFFWlAsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkcsS0F6Qko7QUE2QlZPLElBQUFBLFNBQVMsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVFIsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0E3QkQsQ0FpQ1Y7O0FBakNVLEdBRkw7QUFxQ1BRLEVBQUFBLFlBckNPLHdCQXFDTUMsQ0FyQ04sRUFxQ1M7QUFDZCxRQUFJRixTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlRyxZQUFmLENBQTRCLFFBQTVCLENBQWhCO0FBQ0EsUUFBSVAsR0FBRyxHQUFHLEtBQUtBLEdBQUwsQ0FBU08sWUFBVCxDQUFzQixXQUF0QixDQUFWO0FBQ0EsUUFBSUwsY0FBYyxHQUFHLEtBQUtBLGNBQTFCO0FBQ0EsUUFBSVAsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQ0EsUUFBSWEsT0FBTyxHQUFHYixLQUFLLENBQUNjLFdBQU4sRUFBZDtBQUNBLFFBQUlYLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFFBQUlZLElBQUksR0FBR1osUUFBUSxDQUFDVyxXQUFULEVBQVg7QUFDQSxRQUFJVixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7QUFDQSxRQUFJWSxNQUFNLEdBQUdaLFVBQVUsQ0FBQ1UsV0FBWCxFQUFiO0FBQ0FDLElBQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjakIsS0FBZDtBQUNBZ0IsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCakIsS0FBaEI7O0FBRUEsUUFBSWEsT0FBTyxDQUFDRixDQUFELENBQVAsQ0FBV08sTUFBWCxJQUFxQixJQUF6QixFQUErQjtBQUM3QkwsTUFBQUEsT0FBTyxDQUFDRixDQUFELENBQVAsQ0FBV1EsRUFBWCxDQUNFLFlBREYsRUFFRSxZQUFZO0FBQ1YsWUFBSUMsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFNBQVYsQ0FBb0JuQixRQUFwQixDQUFKLEVBQW1DO0FBQ2pDLGNBQUlvQixJQUFJLEdBQUcsQ0FBWDs7QUFDQSxlQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLE1BQU0sQ0FBQ1MsTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsZ0JBQUlSLE1BQU0sQ0FBQ1EsQ0FBRCxDQUFOLENBQVVFLENBQVYsSUFBZSxLQUFLQSxDQUFwQixJQUF5QlYsTUFBTSxDQUFDUSxDQUFELENBQU4sQ0FBVUcsQ0FBVixJQUFlLEtBQUtBLENBQWpELEVBQW9EO0FBQ2xELG9EQUFjO0FBQ1pDLGdCQUFBQSxJQUFJLEVBQUVaLE1BQU0sQ0FBQ1EsQ0FBRCxDQUFOLENBQVVJO0FBREosZUFBZDtBQUdBTCxjQUFBQSxJQUFJO0FBQ0psQixjQUFBQSxHQUFHLENBQUN3QixRQUFKLENBQWFDLElBQWIsQ0FBa0I7QUFDaEJGLGdCQUFBQSxJQUFJLEVBQUVSLElBQUksQ0FBQ0MsSUFBTCxDQUFVTyxJQURBO0FBRWhCRyxnQkFBQUEsR0FBRyxFQUFFWCxJQUFJLENBQUNDLElBQUwsQ0FBVUssQ0FGQztBQUdoQk0sZ0JBQUFBLEdBQUcsRUFBRVosSUFBSSxDQUFDQyxJQUFMLENBQVVNLENBSEM7QUFJaEJELGdCQUFBQSxDQUFDLEVBQUUsS0FBS0EsQ0FKUTtBQUtoQkMsZ0JBQUFBLENBQUMsRUFBRSxLQUFLQTtBQUxRLGVBQWxCO0FBT0FNLGNBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjN0IsR0FBRyxDQUFDd0IsUUFBbEI7QUFDQSx3REFBa0J4QixHQUFHLENBQUN3QixRQUF0QixFQWJrRCxDQWNsRDtBQUNBO0FBQ0E7O0FBRUEsbUJBQUtNLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQ0EsbUJBQUtDLEdBQUwsQ0FBUyxZQUFULEVBQXVCLGdCQUF2QixFQUFzQ3ZCLE9BQU8sQ0FBQ0YsQ0FBRCxDQUE3QztBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxjQUFJWSxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ2JsQixZQUFBQSxHQUFHLENBQUN3QixRQUFKLENBQWFDLElBQWIsQ0FBa0I7QUFDaEJGLGNBQUFBLElBQUksRUFBRVIsSUFBSSxDQUFDQyxJQUFMLENBQVVPLElBREE7QUFFaEJHLGNBQUFBLEdBQUcsRUFBRVgsSUFBSSxDQUFDQyxJQUFMLENBQVVLLENBRkM7QUFHaEJNLGNBQUFBLEdBQUcsRUFBRVosSUFBSSxDQUFDQyxJQUFMLENBQVVNLENBSEM7QUFJaEJELGNBQUFBLENBQUMsRUFBRSxLQUFLQSxDQUpRO0FBS2hCQyxjQUFBQSxDQUFDLEVBQUUsS0FBS0E7QUFMUSxhQUFsQjtBQU9BTSxZQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYzdCLEdBQUcsQ0FBQ3dCLFFBQWxCO0FBQ0Esc0RBQWtCeEIsR0FBRyxDQUFDd0IsUUFBdEI7QUFDQSxpQkFBS00sUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDQSxpQkFBS0MsR0FBTCxDQUFTLFlBQVQsRUFBdUIsZ0JBQXZCLEVBQXNDdkIsT0FBTyxDQUFDRixDQUFELENBQTdDO0FBQ0Q7QUFDRjs7QUFDRCxhQUFLLElBQUkwQixLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR3hCLE9BQU8sQ0FBQ1ksTUFBcEMsRUFBNENZLEtBQUssRUFBakQsRUFBcUQ7QUFDbkR4QixVQUFBQSxPQUFPLENBQUN3QixLQUFELENBQVAsQ0FBZUYsUUFBZixDQUF3QixDQUF4QixFQUEyQixDQUEzQjtBQUNBdEIsVUFBQUEsT0FBTyxDQUFDd0IsS0FBRCxDQUFQLENBQWVuQixNQUFmLEdBQXdCLEtBQXhCO0FBQ0QsU0E1Q1MsQ0E2Q1Y7OztBQUNBZCxRQUFBQSxVQUFVLENBQUNrQyxpQkFBWCxDQUE2QixJQUE3QixFQTlDVSxDQStDVjs7QUFDQW5DLFFBQUFBLFFBQVEsQ0FBQ21DLGlCQUFULENBQTJCLElBQTNCO0FBQ0EsMENBQVUsS0FBVjtBQUNBN0IsUUFBQUEsU0FBUyxDQUFDQSxTQUFWLEdBbERVLENBbURWO0FBQ0QsT0F0REgsRUF1REVJLE9BQU8sQ0FBQ0YsQ0FBRCxDQXZEVDtBQXlERDtBQUNGLEdBN0dNO0FBOEdQNEIsRUFBQUEsY0E5R08sMEJBOEdRNUIsQ0E5R1IsRUE4R1c7QUFDaEIsUUFBSUYsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUcsWUFBZixDQUE0QixRQUE1QixDQUFoQjtBQUNBLFFBQUlQLEdBQUcsR0FBRyxLQUFLQSxHQUFMLENBQVNPLFlBQVQsQ0FBc0IsV0FBdEIsQ0FBVjtBQUNBLFFBQUlOLFlBQVksR0FBRyxLQUFLQSxZQUF4QjtBQUNBLFFBQUlOLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUNBLFFBQUlhLE9BQU8sR0FBR2IsS0FBSyxDQUFDYyxXQUFOLEVBQWQ7QUFDQSxRQUFJWCxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFDQSxRQUFJWSxJQUFJLEdBQUdaLFFBQVEsQ0FBQ1csV0FBVCxFQUFYO0FBQ0EsUUFBSVYsVUFBVSxHQUFHLEtBQUtBLFVBQXRCO0FBQ0EsUUFBSVksTUFBTSxHQUFHWixVQUFVLENBQUNVLFdBQVgsRUFBYjtBQUNBQyxJQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBY2pCLEtBQWQ7QUFDQWdCLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQmpCLEtBQWhCOztBQUNBLFFBQUlhLE9BQU8sQ0FBQ0YsQ0FBRCxDQUFQLENBQVdPLE1BQVgsSUFBcUIsSUFBekIsRUFBK0I7QUFDN0JMLE1BQUFBLE9BQU8sQ0FBQ0YsQ0FBRCxDQUFQLENBQVdRLEVBQVgsQ0FDRSxZQURGLEVBRUUsWUFBWTtBQUNWLFlBQUlDLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxTQUFWLENBQW9CbEIsVUFBcEIsQ0FBSixFQUFxQztBQUNuQyxjQUFJbUIsSUFBSSxHQUFHLENBQVg7O0FBQ0EsZUFBSyxJQUFJaUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3pCLElBQUksQ0FBQ1UsTUFBekIsRUFBaUNlLENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsZ0JBQUl6QixJQUFJLENBQUN5QixDQUFELENBQUosQ0FBUWQsQ0FBUixJQUFhLEtBQUtBLENBQWxCLElBQXVCWCxJQUFJLENBQUN5QixDQUFELENBQUosQ0FBUWIsQ0FBUixJQUFhLEtBQUtBLENBQTdDLEVBQWdEO0FBQzlDLG9EQUFjO0FBQ1pDLGdCQUFBQSxJQUFJLEVBQUViLElBQUksQ0FBQ3lCLENBQUQsQ0FBSixDQUFRWjtBQURGLGVBQWQ7QUFJQUwsY0FBQUEsSUFBSTtBQUNKbEIsY0FBQUEsR0FBRyxDQUFDd0IsUUFBSixDQUFhQyxJQUFiLENBQWtCO0FBQ2hCRixnQkFBQUEsSUFBSSxFQUFFUixJQUFJLENBQUNDLElBQUwsQ0FBVU8sSUFEQTtBQUVoQkcsZ0JBQUFBLEdBQUcsRUFBRVgsSUFBSSxDQUFDQyxJQUFMLENBQVVLLENBRkM7QUFHaEJNLGdCQUFBQSxHQUFHLEVBQUVaLElBQUksQ0FBQ0MsSUFBTCxDQUFVTSxDQUhDO0FBSWhCRCxnQkFBQUEsQ0FBQyxFQUFFLEtBQUtBLENBSlE7QUFLaEJDLGdCQUFBQSxDQUFDLEVBQUUsS0FBS0E7QUFMUSxlQUFsQjtBQU9BTSxjQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYzdCLEdBQUcsQ0FBQ3dCLFFBQWxCO0FBQ0Esd0RBQWtCeEIsR0FBRyxDQUFDd0IsUUFBdEI7QUFDQSxtQkFBS00sUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDQSxtQkFBS0MsR0FBTCxDQUFTLFlBQVQsRUFBdUIsZ0JBQXZCLEVBQXNDdkIsT0FBTyxDQUFDRixDQUFELENBQTdDO0FBQ0E7QUFDRDtBQUNGOztBQUNELGNBQUlZLElBQUksSUFBSSxDQUFaLEVBQWU7QUFDYmxCLFlBQUFBLEdBQUcsQ0FBQ3dCLFFBQUosQ0FBYUMsSUFBYixDQUFrQjtBQUNoQkYsY0FBQUEsSUFBSSxFQUFFUixJQUFJLENBQUNDLElBQUwsQ0FBVU8sSUFEQTtBQUVoQkcsY0FBQUEsR0FBRyxFQUFFWCxJQUFJLENBQUNDLElBQUwsQ0FBVUssQ0FGQztBQUdoQk0sY0FBQUEsR0FBRyxFQUFFWixJQUFJLENBQUNDLElBQUwsQ0FBVU0sQ0FIQztBQUloQkQsY0FBQUEsQ0FBQyxFQUFFLEtBQUtBLENBSlE7QUFLaEJDLGNBQUFBLENBQUMsRUFBRSxLQUFLQTtBQUxRLGFBQWxCO0FBT0FNLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjN0IsR0FBRyxDQUFDd0IsUUFBbEI7QUFDQSxzREFBa0J4QixHQUFHLENBQUN3QixRQUF0QjtBQUNBLGlCQUFLTSxRQUFMLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQUNBLGlCQUFLQyxHQUFMLENBQVMsWUFBVCxFQUF1QixnQkFBdkIsRUFBc0N2QixPQUFPLENBQUNGLENBQUQsQ0FBN0M7QUFDRDtBQUNGOztBQUNELGFBQUssSUFBSTBCLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHeEIsT0FBTyxDQUFDWSxNQUFwQyxFQUE0Q1ksS0FBSyxFQUFqRCxFQUFxRDtBQUNuRHhCLFVBQUFBLE9BQU8sQ0FBQ3dCLEtBQUQsQ0FBUCxDQUFlRixRQUFmLENBQXdCLENBQXhCLEVBQTJCLENBQTNCO0FBQ0F0QixVQUFBQSxPQUFPLENBQUN3QixLQUFELENBQVAsQ0FBZW5CLE1BQWYsR0FBd0IsS0FBeEI7QUFDRCxTQXpDUyxDQTBDVjtBQUNBOzs7QUFDQWYsUUFBQUEsUUFBUSxDQUFDbUMsaUJBQVQsQ0FBMkIsSUFBM0I7QUFDQWxDLFFBQUFBLFVBQVUsQ0FBQ2tDLGlCQUFYLENBQTZCLElBQTdCLEVBN0NVLENBOENWOztBQUNBN0IsUUFBQUEsU0FBUyxDQUFDQSxTQUFWLEdBL0NVLENBZ0RWO0FBQ0QsT0FuREgsRUFvREVJLE9BQU8sQ0FBQ0YsQ0FBRCxDQXBEVDtBQXNERDtBQUNGLEdBbExNO0FBbUxQO0FBQ0E7QUFDQTtBQUNBOEIsRUFBQUEsS0F0TE8sbUJBc0xDLENBQUUsQ0F0TEg7QUF1TFBDLEVBQUFBLE1BdkxPLG9CQXVMRSxDQUFFLENBdkxKO0FBd0xQQyxFQUFBQSxNQXhMTyxrQkF3TEFDLEVBeExBLEVBd0xJLENBQUU7QUF4TE4sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIHt0cmFuc3BvcnRzIDogWyd3ZWJzb2NrZXQnXSxcclxuLy8gICAgIHF1ZXJ5OiB7XHJcbi8vICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgY2M6XCJjY1wiLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuXHJcbmltcG9ydCB7XHJcbiAgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG4gIHNlbmRkZWFkY2hlc3MsXHJcbiAgcmVjZWl2ZWRkZWFkY2hlc3MsXHJcbiAgc2VuZHN0YXRlLFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuLy8gY29uc3QgeyBpbyB9ID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7XHJcbi8vIGltcG9ydCAqIGFzIGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbi8vIGxldCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyk7XHJcbi8vXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcGxhY2U6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICByZWRjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIGJsYWNrY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtYXA6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkcmVkY2hlc3M6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBkZWFkYmxhY2tjaGVzczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG1vdmVjb2RlbGlzdDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIHVwZGF0ZWFsbDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIC8vIHNvY2tldDogaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCB7IHRyYW5zcG9ydHMgOiBbJ3dlYnNvY2tldCddIH0pLFxyXG4gIH0sXHJcbiAgcmVkdG91Y2htb3ZlKGkpIHtcclxuICAgIGxldCB1cGRhdGVhbGwgPSB0aGlzLnVwZGF0ZWFsbC5nZXRDb21wb25lbnQoXCJ1cGRhdGVcIik7XHJcbiAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KFwiYm9hcmRpbmZvXCIpO1xyXG4gICAgbGV0IGRlYWRibGFja2NoZXNzID0gdGhpcy5kZWFkYmxhY2tjaGVzcztcclxuICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuXHJcbiAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICBwb3Ntb3ZlW2ldLm9uKFxyXG4gICAgICAgIFwidG91Y2hzdGFydFwiLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChzZWxmLm5vZGUuaXNDaGlsZE9mKHJlZGNoZXNzKSkge1xyXG4gICAgICAgICAgICB2YXIga2lsbCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGJsYWNrY1trXS54ID09IHRoaXMueCAmJiBibGFja2Nba10ueSA9PSB0aGlzLnkpIHtcclxuICAgICAgICAgICAgICAgIHNlbmRkZWFkY2hlc3Moe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBibGFja2Nba10ubmFtZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAga2lsbCsrO1xyXG4gICAgICAgICAgICAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLm5vZGUubmFtZSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGF0YSA9IHJlY2VpdmVkY2hlc3NQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2ZmKFwidG91Y2hzdGFydFwiLCB0aGlzLmZ1bmN0aW9uLCBwb3Ntb3ZlW2ldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2lsbCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogc2VsZi5ub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB4ZWQ6IHNlbGYubm9kZS54LFxyXG4gICAgICAgICAgICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgc2VuZGNoZXNzUG9zaXRpb24obWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRoaXMub2ZmKFwidG91Y2hzdGFydFwiLCB0aGlzLmZ1bmN0aW9uLCBwb3Ntb3ZlW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yICh2YXIgcmVzZXQgPSAwOyByZXNldCA8IHBvc21vdmUubGVuZ3RoOyByZXNldCsrKSB7XHJcbiAgICAgICAgICAgIHBvc21vdmVbcmVzZXRdLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICBwb3Ntb3ZlW3Jlc2V0XS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vYmxhY2t0dXJuXHJcbiAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYmxhY2tjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyk7XHJcbiAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIHNlbmRzdGF0ZShcInJlZFwiKTtcclxuICAgICAgICAgIHVwZGF0ZWFsbC51cGRhdGVhbGwoKTtcclxuICAgICAgICAgIC8vIHVwZGF0ZWFsbC51cGRhdGVhbGwoc2VsZi5ub2RlLm5hbWUsIHNlbGYubm9kZS54LCBzZWxmLm5vZGUueSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3Ntb3ZlW2ldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBibGFja3RvdWNobW92ZShpKSB7XHJcbiAgICBsZXQgdXBkYXRlYWxsID0gdGhpcy51cGRhdGVhbGwuZ2V0Q29tcG9uZW50KFwidXBkYXRlXCIpO1xyXG4gICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudChcImJvYXJkaW5mb1wiKTtcclxuICAgIGxldCBkZWFkcmVkY2hlc3MgPSB0aGlzLmRlYWRyZWRjaGVzcztcclxuICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgIHBvc21vdmVbaV0ub24oXHJcbiAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHNlbGYubm9kZS5pc0NoaWxkT2YoYmxhY2tjaGVzcykpIHtcclxuICAgICAgICAgICAgdmFyIGtpbGwgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBpZiAocmVkY1tqXS54ID09IHRoaXMueCAmJiByZWRjW2pdLnkgPT0gdGhpcy55KSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kZGVhZGNoZXNzKHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogcmVkY1tqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAga2lsbCsrO1xyXG4gICAgICAgICAgICAgICAgbWFwLm1vdmVjb2RlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgeGVkOiBzZWxmLm5vZGUueCxcclxuICAgICAgICAgICAgICAgICAgeWVkOiBzZWxmLm5vZGUueSxcclxuICAgICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICAgIHNlbmRjaGVzc1Bvc2l0aW9uKG1hcC5tb3ZlY29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChraWxsID09IDApIHtcclxuICAgICAgICAgICAgICBtYXAubW92ZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxmLm5vZGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHhlZDogc2VsZi5ub2RlLngsXHJcbiAgICAgICAgICAgICAgICB5ZWQ6IHNlbGYubm9kZS55LFxyXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUudGFibGUobWFwLm1vdmVjb2RlKTtcclxuICAgICAgICAgICAgICBzZW5kY2hlc3NQb3NpdGlvbihtYXAubW92ZWNvZGUpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuZnVuY3Rpb24sIHBvc21vdmVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKHZhciByZXNldCA9IDA7IHJlc2V0IDwgcG9zbW92ZS5sZW5ndGg7IHJlc2V0KyspIHtcclxuICAgICAgICAgICAgcG9zbW92ZVtyZXNldF0uc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIHBvc21vdmVbcmVzZXRdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9yZWR0dXJuXHJcbiAgICAgICAgICAvLyBuZXdwb3NpdGlvbihzZWxmLm5vZGUubmFtZSwgc2VsZi5ub2RlLngsIHNlbGYubm9kZS55KTtcclxuICAgICAgICAgIHJlZGNoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgYmxhY2tjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgIC8vIG1vdmVjb2RlbGlzdC51cGRhdGVsaXN0KCk7XHJcbiAgICAgICAgICB1cGRhdGVhbGwudXBkYXRlYWxsKCk7XHJcbiAgICAgICAgICAvLyB1cGRhdGVhbGwudXBkYXRlYWxsKHNlbGYubm9kZS5uYW1lLCBzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zbW92ZVtpXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gbmV3cG9zaXRpb24obmFtZSwgeCwgeSl7XHJcbiAgLy8gICAgIHJldHVybiAnbmFtZScsIHgsIHk7XHJcbiAgLy8gfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/PrepareRoom/roominfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95773ddqsJDIboSvoNjmway', 'roominfo');
// script/room/PrepareRoom/roominfo.js

"use strict";

var _socket_connection = require("../../socket_connection");

cc.Class({
  "extends": cc.Component,
  properties: {
    Info: {
      "default": null,
      type: cc.Label
    },
    Player1: {
      "default": null,
      type: cc.Label
    },
    Player2: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    var info = this.Info;
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var rid = RoomInfos.rid;
    info.string = "Room no " + rid;
  },
  start: function start() {},
  update: function update(dt) {// let p1 = this.Player1;
    // let p2 = this.Player2;
    // let RoomInfos = cc.director
    //   .getScene()
    //   .getChildByName("RoomInfos")
    //   .getComponent("RoomInfos");
    // var rid = RoomInfos.rid;
    // fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + rid, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.data.Player1) {
    //       p1.string = "P1: Ready";
    //     } else {
    //       p1.string = "P1: Waiting...";
    //     }
    //     if (data.data.Player2) {
    //       p2.string = "P1: Ready";
    //     } else {
    //       p2.string = "P1: Waiting...";
    //     }
    //   });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxQcmVwYXJlUm9vbVxccm9vbWluZm8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJJbmZvIiwidHlwZSIsIkxhYmVsIiwiUGxheWVyMSIsIlBsYXllcjIiLCJvbkxvYWQiLCJpbmZvIiwiUm9vbUluZm9zIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwicmlkIiwic3RyaW5nIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkwsS0FESTtBQUtWQyxJQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGLEtBTEM7QUFTVkUsSUFBQUEsT0FBTyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRjtBQVRDLEdBSEw7QUFpQlBHLEVBQUFBLE1BakJPLG9CQWlCRTtBQUNQLFFBQUlDLElBQUksR0FBRyxLQUFLTixJQUFoQjtBQUNBLFFBQUlPLFNBQVMsR0FBR1gsRUFBRSxDQUFDWSxRQUFILENBQ2JDLFFBRGEsR0FFYkMsY0FGYSxDQUVFLFdBRkYsRUFHYkMsWUFIYSxDQUdBLFdBSEEsQ0FBaEI7QUFJQSxRQUFJQyxHQUFHLEdBQUdMLFNBQVMsQ0FBQ0ssR0FBcEI7QUFDQU4sSUFBQUEsSUFBSSxDQUFDTyxNQUFMLEdBQWMsYUFBYUQsR0FBM0I7QUFDRCxHQXpCTTtBQTBCUEUsRUFBQUEsS0ExQk8sbUJBMEJDLENBQUUsQ0ExQkg7QUE0QlBDLEVBQUFBLE1BNUJPLGtCQTRCQUMsRUE1QkEsRUE0QkksQ0FDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQXhETSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWNlaXZlZHJvb21JRCwgc2VuZHJvb21JRCB9IGZyb20gXCIuLi8uLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgSW5mbzoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBQbGF5ZXIxOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIFBsYXllcjI6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IGluZm8gPSB0aGlzLkluZm87XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICB2YXIgcmlkID0gUm9vbUluZm9zLnJpZDtcclxuICAgIGluZm8uc3RyaW5nID0gXCJSb29tIG5vIFwiICsgcmlkO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgdXBkYXRlKGR0KSB7XHJcbiAgICAvLyBsZXQgcDEgPSB0aGlzLlBsYXllcjE7XHJcbiAgICAvLyBsZXQgcDIgPSB0aGlzLlBsYXllcjI7XHJcbiAgICAvLyBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgIC8vICAgLmdldFNjZW5lKClcclxuICAgIC8vICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAvLyAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICAvLyB2YXIgcmlkID0gUm9vbUluZm9zLnJpZDtcclxuICAgIC8vIGZldGNoKFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tL1wiICsgcmlkLCB7XHJcbiAgICAvLyAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEpIHtcclxuICAgIC8vICAgICAgIHAxLnN0cmluZyA9IFwiUDE6IFJlYWR5XCI7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHAxLnN0cmluZyA9IFwiUDE6IFdhaXRpbmcuLi5cIjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIyKSB7XHJcbiAgICAvLyAgICAgICBwMi5zdHJpbmcgPSBcIlAxOiBSZWFkeVwiO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICBwMi5zdHJpbmcgPSBcIlAxOiBXYWl0aW5nLi4uXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KTtcclxuICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Page/Login/LoginPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8864e7vZY5M1YYbEp2wQDxG', 'LoginPage');
// script/Page/Login/LoginPage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    username: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQYWdlXFxMb2dpblxcTG9naW5QYWdlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFDO0FBQ0wsaUJBQVMsSUFESjtBQUVMQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSjtBQURELEdBSFA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSyxDQUFFLENBVlA7QUFZTEMsRUFBQUEsS0FaSyxtQkFZSSxDQUdSLENBZkksQ0FpQkw7O0FBakJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a952dKIjhlMaJNxeCfhgetZ', 'Popup');
// script/Popup.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  show: function show() {
    this.node.active = true;
    this.node.opacity = 0;
    this.node.scale = 0.2;
    cc.tween(this.node).to(0.5, {
      scale: 1,
      opacity: 255
    }, {
      easing: "quartInOut"
    }).start();
  },
  showcover: function showcover() {
    this.node.active = true;
    this.node.opacity = 0;
    this.node.scale = 0.2;
    cc.tween(this.node).to(0.5, {
      scale: 1,
      opacity: 160
    }, {
      easing: "quartInOut"
    }).start();
  },
  hide: function hide() {
    var _this = this;

    cc.tween(this.node).to(0.5, {
      scale: 0.2,
      opacity: 0
    }, {
      easing: "quartInOut"
    }).call(function () {
      _this.node.active = false;
    }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQb3B1cC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNob3ciLCJub2RlIiwiYWN0aXZlIiwib3BhY2l0eSIsInNjYWxlIiwidHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0Iiwic2hvd2NvdmVyIiwiaGlkZSIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLElBTkssa0JBTUM7QUFDRixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0IsR0FBbEI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsS0FBS0osSUFBZCxFQUNDSyxFQURELENBQ0ksR0FESixFQUNTO0FBQUNGLE1BQUFBLEtBQUssRUFBQyxDQUFQO0FBQVVELE1BQUFBLE9BQU8sRUFBQztBQUFsQixLQURULEVBQ2dDO0FBQUNJLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBRGhDLEVBRUNDLEtBRkQ7QUFHSCxHQWJJO0FBY0xDLEVBQUFBLFNBZEssdUJBY007QUFDUCxTQUFLUixJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0IsR0FBbEI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVMsS0FBS0osSUFBZCxFQUNDSyxFQURELENBQ0ksR0FESixFQUNTO0FBQUNGLE1BQUFBLEtBQUssRUFBQyxDQUFQO0FBQVVELE1BQUFBLE9BQU8sRUFBQztBQUFsQixLQURULEVBQ2dDO0FBQUNJLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBRGhDLEVBRUNDLEtBRkQ7QUFHSCxHQXJCSTtBQXNCTEUsRUFBQUEsSUF0Qkssa0JBc0JDO0FBQUE7O0FBQ0ZkLElBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTLEtBQUtKLElBQWQsRUFDQ0ssRUFERCxDQUNJLEdBREosRUFDUztBQUFDRixNQUFBQSxLQUFLLEVBQUMsR0FBUDtBQUFZRCxNQUFBQSxPQUFPLEVBQUM7QUFBcEIsS0FEVCxFQUNnQztBQUFDSSxNQUFBQSxNQUFNLEVBQUU7QUFBVCxLQURoQyxFQUVDSSxJQUZELENBRU0sWUFBTTtBQUFDLE1BQUEsS0FBSSxDQUFDVixJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFBeUIsS0FGdEMsRUFHQ00sS0FIRDtBQUlIO0FBM0JJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICBcclxuICAgIH0sXHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuMjtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuNSwge3NjYWxlOjEsIG9wYWNpdHk6MjU1fSx7ZWFzaW5nOiBcInF1YXJ0SW5PdXRcIn0pXHJcbiAgICAgICAgLnN0YXJ0KClcclxuICAgIH0sXHJcbiAgICBzaG93Y292ZXIoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMC4yO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMC41LCB7c2NhbGU6MSwgb3BhY2l0eToxNjB9LHtlYXNpbmc6IFwicXVhcnRJbk91dFwifSlcclxuICAgICAgICAuc3RhcnQoKVxyXG4gICAgfSxcclxuICAgIGhpZGUoKXtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuNSwge3NjYWxlOjAuMiwgb3BhY2l0eTowfSx7ZWFzaW5nOiBcInF1YXJ0SW5PdXRcIn0pXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge3RoaXMubm9kZS5hY3RpdmUgPSBmYWxzZX0pXHJcbiAgICAgICAgLnN0YXJ0KClcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/changescene/movetohomepage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1378eRIEVVPm5uYeRs6dOAX', 'movetohomepage');
// script/changescene/movetohomepage.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  load_scene: function load_scene() {
    cc.director.loadScene("homepage");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcbW92ZXRvaG9tZXBhZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJsb2FkX3NjZW5lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSyxDQUFFLENBUFA7QUFRTEMsRUFBQUEsVUFSSyx3QkFRTztBQUNSTCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNILEdBVkk7QUFXTEMsRUFBQUEsS0FYSyxtQkFXSSxDQUVSLENBYkksQ0FlTDs7QUFmSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge30sXHJcbiAgICBsb2FkX3NjZW5lKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaG9tZXBhZ2VcIik7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/homepage/display.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07b14V0szlPSpdbncZwe8PD', 'display');
// script/homepage/display.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    namedisplay: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    var uid = 0;
    (0, _socket_connection.receiveduserID)().then(function (data) {
      uid = data;
      var name = _this.namedisplay;
      (0, _axios_connection.getUserbyID)(uid).then(function (data) {
        name.string = data.data.Username + " #" + uid;
      });
    })["catch"](function () {
      console.log("Promise Rejected");
    });
  },
  start: function start() {},
  onDisable: function onDisable() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxob21lcGFnZVxcZGlzcGxheS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5hbWVkaXNwbGF5IiwidHlwZSIsIkxhYmVsIiwib25Mb2FkIiwidWlkIiwidGhlbiIsImRhdGEiLCJuYW1lIiwic3RyaW5nIiwiVXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJvbkRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFdBQVcsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkU7QUFESCxHQUhMO0FBU1BDLEVBQUFBLE1BVE8sb0JBU0U7QUFBQTs7QUFDUCxRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBLDZDQUNHQyxJQURILENBQ1EsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RGLE1BQUFBLEdBQUcsR0FBR0UsSUFBTjtBQUNBLFVBQUlDLElBQUksR0FBRyxLQUFJLENBQUNQLFdBQWhCO0FBQ0EseUNBQVlJLEdBQVosRUFBaUJDLElBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QkMsUUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQWNGLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxRQUFWLEdBQXFCLElBQXJCLEdBQTRCTCxHQUExQztBQUNELE9BRkQ7QUFHRCxLQVBILFdBUVMsWUFBWTtBQUNqQk0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxLQVZIO0FBV0QsR0F0Qk07QUF1QlBDLEVBQUFBLEtBdkJPLG1CQXVCQyxDQUFFLENBdkJIO0FBd0JQQyxFQUFBQSxTQXhCTyx1QkF3QkssQ0FBRSxDQXhCUCxDQXlCUDs7QUF6Qk8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZHVzZXJJRCwgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0VXNlcmJ5SUQgfSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBuYW1lZGlzcGxheToge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICB2YXIgdWlkID0gMDtcclxuICAgIHJlY2VpdmVkdXNlcklEKClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICB1aWQgPSBkYXRhO1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5uYW1lZGlzcGxheTtcclxuICAgICAgICBnZXRVc2VyYnlJRCh1aWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIG5hbWUuc3RyaW5nID0gZGF0YS5kYXRhLlVzZXJuYW1lICsgXCIgI1wiICsgdWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIG9uRGlzYWJsZSgpIHt9LFxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/temp/deleteuser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa6c1TRo4VL3KaFZDstwxgH', 'deleteuser');
// script/temp/deleteuser.js

"use strict";

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    deluserID: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  delete_user: function delete_user() {
    var userID = this.deluserID.string;
    (0, _axios_connection.deleteuser)(userID);
  },
  start: function start() {
    (0, _axios_connection.getuserlist)();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0ZW1wXFxkZWxldGV1c2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGVsdXNlcklEIiwidHlwZSIsIkxhYmVsIiwib25Mb2FkIiwiZGVsZXRlX3VzZXIiLCJ1c2VySUQiLCJzdHJpbmciLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQTtBQURELEdBSEw7QUFTUEMsRUFBQUEsTUFUTyxvQkFTRSxDQUFFLENBVEo7QUFVUEMsRUFBQUEsV0FWTyx5QkFVTztBQUNaLFFBQUlDLE1BQU0sR0FBRyxLQUFLTCxTQUFMLENBQWVNLE1BQTVCO0FBQ0Esc0NBQVdELE1BQVg7QUFDRCxHQWJNO0FBZVBFLEVBQUFBLEtBZk8sbUJBZUM7QUFDTjtBQUNELEdBakJNLENBbUJQOztBQW5CTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgZ2V0dXNlcmxpc3QsIGRlbGV0ZXVzZXIgfSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgZGVsdXNlcklEOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIGRlbGV0ZV91c2VyKCkge1xyXG4gICAgbGV0IHVzZXJJRCA9IHRoaXMuZGVsdXNlcklELnN0cmluZztcclxuICAgIGRlbGV0ZXVzZXIodXNlcklEKTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGdldHVzZXJsaXN0KCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/socket_connection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2074RI4CRE7ry3/KUbfyW1', 'socket_connection');
// script/socket_connection.js

"use strict";

exports.__esModule = true;
exports.senduserID = exports.sendstate = exports.sendroomID = exports.senddeadchess = exports.sendchessPosition = exports.sendName = exports.receiveduserID = exports.receivedstate = exports.receivedroomID = exports.receiveddeadchess = exports.receivedchessPosition = void 0;

var io = _interopRequireWildcard(require("socket.io-client"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var socket = io.connect("http://192.168.1.31:3000", {
  reconnectionDelayMax: 10000,
  query: {
    userId: 10
  }
});

var senduserID = function senduserID(data) {
  socket.emit("senduserID", data);
};

exports.senduserID = senduserID;

var receiveduserID = function receiveduserID() {
  return new Promise(function (resolve, reject) {
    socket.on("receiveduserID", function (data) {
      var userID = data;
      resolve(userID);
      reject("something wrong");
    });
  });
};

exports.receiveduserID = receiveduserID;

var sendroomID = function sendroomID(data) {
  socket.emit("sendroomID", data);
};

exports.sendroomID = sendroomID;

var receivedroomID = function receivedroomID() {
  return new Promise(function (resolve, reject) {
    console.log("returnnew Promise run");
    socket.on("receivedroomID", function (data) {
      console.log("receivedrooomID() run");
      resolve(data);
      reject("something wrong");
    });
  });
}; //chess moves field


exports.receivedroomID = receivedroomID;
var chess = [];

var sendchessPosition = function sendchessPosition(data) {
  socket.timeout(500).emit("sendChessPosition", data);
};

exports.sendchessPosition = sendchessPosition;

var receivedchessPosition = function receivedchessPosition() {
  return new Promise(function (resolve, reject) {
    socket.once("receivedChessPosition", function (data) {
      chess.push(data[data.length - 1]);
      resolve(chess);
      reject("something wrong");
    });
  });
};

exports.receivedchessPosition = receivedchessPosition;

var senddeadchess = function senddeadchess(data) {
  socket.emit("senddeadchess", data);
};

exports.senddeadchess = senddeadchess;

var receiveddeadchess = function receiveddeadchess() {
  return new Promise(function (resolve, reject) {
    socket.once("receiveddeadchess", function (data) {
      resolve(data);
      reject("something wrong");
    });
  });
};

exports.receiveddeadchess = receiveddeadchess;

var sendstate = function sendstate(data) {
  socket.emit("sendstate", data);
};

exports.sendstate = sendstate;

var receivedstate = function receivedstate() {
  return new Promise(function (resolve, reject) {
    socket.once("receivedstate", function (data) {
      resolve(data);
      reject("something wrong");
    });
  });
};

exports.receivedstate = receivedstate;

var sendName = function sendName(userId) {
  var socket = getSocket(userId);
  socket.emit("name", {
    name: "teo"
  });
};

exports.sendName = sendName;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzb2NrZXRfY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNvbm5lY3QiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInF1ZXJ5IiwidXNlcklkIiwic2VuZHVzZXJJRCIsImRhdGEiLCJlbWl0IiwicmVjZWl2ZWR1c2VySUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwidXNlcklEIiwic2VuZHJvb21JRCIsInJlY2VpdmVkcm9vbUlEIiwiY29uc29sZSIsImxvZyIsImNoZXNzIiwic2VuZGNoZXNzUG9zaXRpb24iLCJ0aW1lb3V0IiwicmVjZWl2ZWRjaGVzc1Bvc2l0aW9uIiwib25jZSIsInB1c2giLCJsZW5ndGgiLCJzZW5kZGVhZGNoZXNzIiwicmVjZWl2ZWRkZWFkY2hlc3MiLCJzZW5kc3RhdGUiLCJyZWNlaXZlZHN0YXRlIiwic2VuZE5hbWUiLCJnZXRTb2NrZXQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXLDBCQUFYLEVBQXVDO0FBQ3BEQyxFQUFBQSxvQkFBb0IsRUFBRSxLQUQ4QjtBQUVwREMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE1BQU0sRUFBRTtBQURIO0FBRjZDLENBQXZDLENBQWY7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCUCxFQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWSxZQUFaLEVBQTBCRCxJQUExQjtBQUNELENBRkQ7Ozs7QUFJQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDWixJQUFBQSxNQUFNLENBQUNhLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixV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Q0osSUFBRCxDQUFQO0FBQ0FLLE1BQUFBLE1BQU0sQ0FBQyxpQkFBRCxDQUFOO0FBQ0QsS0FIRDtBQUlELEdBTE0sQ0FBUDtBQU1ELENBUEQ7Ozs7QUFRQSxJQUFNa0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3pCLE1BQUQsRUFBWTtBQUMzQixNQUFNTCxNQUFNLEdBQUcrQixTQUFTLENBQUMxQixNQUFELENBQXhCO0FBQ0FMLEVBQUFBLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLE1BQVosRUFBb0I7QUFBRXdCLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXBCO0FBQ0QsQ0FIRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly8xOTIuMTY4LjEuMzE6MzAwMFwiLCB7XHJcbiAgcmVjb25uZWN0aW9uRGVsYXlNYXg6IDEwMDAwLFxyXG4gIHF1ZXJ5OiB7XHJcbiAgICB1c2VySWQ6IDEwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc2VuZHVzZXJJRCA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kdXNlcklEXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWR1c2VySUQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNvY2tldC5vbihcInJlY2VpdmVkdXNlcklEXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciB1c2VySUQgPSBkYXRhO1xyXG4gICAgICByZXNvbHZlKHVzZXJJRCk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZHJvb21JRCA9IChkYXRhKSA9PiB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZW5kcm9vbUlEXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVjZWl2ZWRyb29tSUQgPSAoKSA9PiB7ICBcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXR1cm5uZXcgUHJvbWlzZSBydW5cIik7XHJcbiAgICBzb2NrZXQub24oXCJyZWNlaXZlZHJvb21JRFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkcm9vb21JRCgpIHJ1blwiKTtcclxuICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgcmVqZWN0KFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vL2NoZXNzIG1vdmVzIGZpZWxkXHJcbmNvbnN0IGNoZXNzID0gW107XHJcbmNvbnN0IHNlbmRjaGVzc1Bvc2l0aW9uID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQudGltZW91dCg1MDApLmVtaXQoXCJzZW5kQ2hlc3NQb3NpdGlvblwiLCBkYXRhKTtcclxufTtcclxuY29uc3QgcmVjZWl2ZWRjaGVzc1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub25jZShcInJlY2VpdmVkQ2hlc3NQb3NpdGlvblwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjaGVzcy5wdXNoKGRhdGFbZGF0YS5sZW5ndGggLSAxXSk7XHJcbiAgICAgIHJlc29sdmUoY2hlc3MpO1xyXG4gICAgICByZWplY3QoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlbmRkZWFkY2hlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwic2VuZGRlYWRjaGVzc1wiLCBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHJlY2VpdmVkZGVhZGNoZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzb2NrZXQub25jZShcInJlY2VpdmVkZGVhZGNoZXNzXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZHN0YXRlID0gKGRhdGEpID0+IHtcclxuICBzb2NrZXQuZW1pdChcInNlbmRzdGF0ZVwiLCBkYXRhKTtcclxufTtcclxuY29uc3QgcmVjZWl2ZWRzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uY2UoXCJyZWNlaXZlZHN0YXRlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIHJlamVjdChcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBzZW5kTmFtZSA9ICh1c2VySWQpID0+IHtcclxuICBjb25zdCBzb2NrZXQgPSBnZXRTb2NrZXQodXNlcklkKTtcclxuICBzb2NrZXQuZW1pdChcIm5hbWVcIiwgeyBuYW1lOiBcInRlb1wiIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBzZW5kTmFtZSxcclxuICBzZW5kdXNlcklELFxyXG4gIHJlY2VpdmVkdXNlcklELFxyXG4gIHNlbmRjaGVzc1Bvc2l0aW9uLFxyXG4gIHJlY2VpdmVkY2hlc3NQb3NpdGlvbixcclxuICBzZW5kZGVhZGNoZXNzLFxyXG4gIHJlY2VpdmVkZGVhZGNoZXNzLFxyXG4gIHNlbmRyb29tSUQsXHJcbiAgcmVjZWl2ZWRyb29tSUQsXHJcbiAgc2VuZHN0YXRlLFxyXG4gIHJlY2VpdmVkc3RhdGUsXHJcbn07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Playnow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56a93gRbI1B75pcuNQS6gV5', 'Playnow');
// script/Playnow.js

"use strict";

var _socket_connection = require("./socket_connection");

var _axios_connection = require("./axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    Username: {
      "default": null,
      type: cc.Label
    },
    PlayerInfo: {
      "default": null,
      type: cc.Node
    }
  },
  onEnable: function onEnable() {},
  onload: function onload() {},
  start: function start() {},
  load_scene: function load_scene() {
    var PlayerInfo = this.PlayerInfo.getComponent("PlayerInfo");
    var name = this.Username.string;
    (0, _axios_connection.createUser)(name).then(function (data) {
      PlayerInfo.uname = data.data.Username;
      PlayerInfo.uid = data.data.id;
      cc.director.loadScene("homepage");
    })["catch"](function () {
      console.log("Promise Rejected");
    });
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5bm93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVXNlcm5hbWUiLCJ0eXBlIiwiTGFiZWwiLCJQbGF5ZXJJbmZvIiwiTm9kZSIsIm9uRW5hYmxlIiwib25sb2FkIiwic3RhcnQiLCJsb2FkX3NjZW5lIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsInN0cmluZyIsInRoZW4iLCJkYXRhIiwidW5hbWUiLCJ1aWQiLCJpZCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxRQUFRLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBREE7QUFLVkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7QUFGQztBQUxGLEdBRkw7QUFZUEMsRUFBQUEsUUFaTyxzQkFZSSxDQUFFLENBWk47QUFhUEMsRUFBQUEsTUFiTyxvQkFhRSxDQUFFLENBYko7QUFjUEMsRUFBQUEsS0FkTyxtQkFjQyxDQUFFLENBZEg7QUFlUEMsRUFBQUEsVUFmTyx3QkFlTTtBQUVYLFFBQUlMLFVBQVUsR0FBRyxLQUFLQSxVQUFMLENBQWdCTSxZQUFoQixDQUE2QixZQUE3QixDQUFqQjtBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLVixRQUFMLENBQWNXLE1BQXpCO0FBQ0Esc0NBQVdELElBQVgsRUFDQ0UsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBUTtBQUNaVixNQUFBQSxVQUFVLENBQUNXLEtBQVgsR0FBbUJELElBQUksQ0FBQ0EsSUFBTCxDQUFVYixRQUE3QjtBQUNBRyxNQUFBQSxVQUFVLENBQUNZLEdBQVgsR0FBaUJGLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxFQUEzQjtBQUNBcEIsTUFBQUEsRUFBRSxDQUFDcUIsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQXRCO0FBQ0QsS0FMRCxXQUtTLFlBQVk7QUFDbkJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0FQRDtBQVFELEdBM0JNO0FBNEJQQyxFQUFBQSxNQTVCTyxrQkE0QkFDLEVBNUJBLEVBNEJJLENBQUU7QUE1Qk4sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZHVzZXJJRCB9IGZyb20gXCIuL3NvY2tldF9jb25uZWN0aW9uXCJcclxuaW1wb3J0IHsgY3JlYXRlVXNlciB9IGZyb20gXCIuL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBVc2VybmFtZToge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBQbGF5ZXJJbmZvOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb25FbmFibGUoKSB7fSxcclxuICBvbmxvYWQoKSB7fSxcclxuICBzdGFydCgpIHt9LFxyXG4gIGxvYWRfc2NlbmUoKSB7XHJcbiAgICBcclxuICAgIHZhciBQbGF5ZXJJbmZvID0gdGhpcy5QbGF5ZXJJbmZvLmdldENvbXBvbmVudChcIlBsYXllckluZm9cIik7XHJcbiAgICBsZXQgbmFtZSA9IHRoaXMuVXNlcm5hbWUuc3RyaW5nO1xyXG4gICAgY3JlYXRlVXNlcihuYW1lKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgIFBsYXllckluZm8udW5hbWUgPSBkYXRhLmRhdGEuVXNlcm5hbWU7XHJcbiAgICAgIFBsYXllckluZm8udWlkID0gZGF0YS5kYXRhLmlkO1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJob21lcGFnZVwiKVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Touch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '946acrKWAVESLUlkZ62QIs5', 'Touch');
// script/Touch.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  pointTouch: function pointTouch() {
    this.node.on('touchstart', function () {
      this.node.opacity = 160;
    }, this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUb3VjaC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInBvaW50VG91Y2giLCJub2RlIiwib24iLCJvcGFjaXR5Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0ssQ0FBRSxDQVBQO0FBUUxDLEVBQUFBLFVBUkssd0JBUU87QUFDUixTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxZQUFiLEVBQTJCLFlBQVU7QUFDakMsV0FBS0QsSUFBTCxDQUFVRSxPQUFWLEdBQW9CLEdBQXBCO0FBQ0gsS0FGRCxFQUVHLEtBQUtGLElBRlI7QUFHSCxHQVpJO0FBYUxHLEVBQUFBLEtBYkssbUJBYUksQ0FFUixDQWZJLENBaUJMOztBQWpCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge30sXHJcbiAgICBwb2ludFRvdWNoKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNjA7XHJcbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/fetch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13765OQEzxOCZ4v5D7b6eWC', 'fetch');
// script/fetch.js

"use strict";

var receiveduserlist = function receiveduserlist() {
  fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}; // export{ sendUsername, receiveduserlist};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmZXRjaC5qcyJdLCJuYW1lcyI6WyJyZWNlaXZlZHVzZXJsaXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCQyxFQUFBQSxLQUFLLENBQUMsb0RBQUQsRUFBdUQ7QUFDMURDLElBQUFBLE1BQU0sRUFBRSxLQURrRDtBQUUxREMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLE1BQU0sRUFBRSxrQkFERDtBQUVQLHNCQUFnQjtBQUZUO0FBRmlELEdBQXZELENBQUwsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEdBUFIsRUFRR0YsSUFSSCxDQVFRLFVBQUNHLElBQUQsRUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQVZIO0FBV0QsQ0FaRCxFQWFBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWNlaXZlZHVzZXJsaXN0ID0gKCkgPT4ge1xyXG4gIGZldGNoKFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9wbGF5ZXJcIiwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxufTtcclxuLy8gZXhwb3J0eyBzZW5kVXNlcm5hbWUsIHJlY2VpdmVkdXNlcmxpc3R9O1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Blur.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61abf16dOZKurWh+RfPFijO', 'Blur');
// script/Blur.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  blur: function blur() {
    this.node.opacity = 160;
    this.node.pauseSystemEvents(true);
  },
  unblur: function unblur() {
    this.node.opacity = 255;
    this.node.resumeSystemEvents(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCbHVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiYmx1ciIsIm5vZGUiLCJvcGFjaXR5IiwicGF1c2VTeXN0ZW1FdmVudHMiLCJ1bmJsdXIiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSyxDQUFFLENBUFA7QUFRTEMsRUFBQUEsSUFSSyxrQkFRQztBQUVGLFNBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQixHQUFwQjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsaUJBQVYsQ0FBNEIsSUFBNUI7QUFDSCxHQVpJO0FBYUxDLEVBQUFBLE1BYkssb0JBYUc7QUFDSixTQUFLSCxJQUFMLENBQVVDLE9BQVYsR0FBb0IsR0FBcEI7QUFDQSxTQUFLRCxJQUFMLENBQVVJLGtCQUFWLENBQTZCLElBQTdCO0FBQ0gsR0FoQkk7QUFpQkxDLEVBQUFBLEtBakJLLG1CQWlCSSxDQUVSLENBbkJJLENBcUJMOztBQXJCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge30sXHJcbiAgICBibHVyKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNjA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgfSxcclxuICAgIHVuYmx1cigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMubm9kZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/boardinfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '489713er9BIp6N3d2fdSPUg', 'boardinfo');
// script/board/boardinfo.js

"use strict";

var map = cc.Class({
  "extends": cc.Component,
  properties: {
    movecode: [],
    countblackdead: 0,
    countreddead: 0,
    s: 94,
    redcastleupbound: -235,
    redcastledownbound: -423,
    redcastleleftbound: -94,
    redcastlerightbound: 94,
    redriver: -47,
    blackriver: 47,
    blackcastleupbound: 423,
    blackcastledownbound: 235,
    blackcastleleftbound: -94,
    blackcastlerightbound: 94,
    scale: 3,
    chesssize: 60
  },
  onLoad: function onLoad() {},
  test: function test() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcYm9hcmRpbmZvLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW92ZWNvZGUiLCJjb3VudGJsYWNrZGVhZCIsImNvdW50cmVkZGVhZCIsInMiLCJyZWRjYXN0bGV1cGJvdW5kIiwicmVkY2FzdGxlZG93bmJvdW5kIiwicmVkY2FzdGxlbGVmdGJvdW5kIiwicmVkY2FzdGxlcmlnaHRib3VuZCIsInJlZHJpdmVyIiwiYmxhY2tyaXZlciIsImJsYWNrY2FzdGxldXBib3VuZCIsImJsYWNrY2FzdGxlZG93bmJvdW5kIiwiYmxhY2tjYXN0bGVsZWZ0Ym91bmQiLCJibGFja2Nhc3RsZXJpZ2h0Ym91bmQiLCJzY2FsZSIsImNoZXNzc2l6ZSIsIm9uTG9hZCIsInRlc3QiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2pCLGFBQVNELEVBQUUsQ0FBQ0UsU0FESztBQUdqQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFFBQVEsRUFBRSxFQURBO0FBRVZDLElBQUFBLGNBQWMsRUFBRSxDQUZOO0FBR1ZDLElBQUFBLFlBQVksRUFBRSxDQUhKO0FBSVZDLElBQUFBLENBQUMsRUFBRSxFQUpPO0FBS1ZDLElBQUFBLGdCQUFnQixFQUFFLENBQUMsR0FMVDtBQU1WQyxJQUFBQSxrQkFBa0IsRUFBRSxDQUFDLEdBTlg7QUFPVkMsSUFBQUEsa0JBQWtCLEVBQUUsQ0FBQyxFQVBYO0FBUVZDLElBQUFBLG1CQUFtQixFQUFFLEVBUlg7QUFTVkMsSUFBQUEsUUFBUSxFQUFFLENBQUMsRUFURDtBQVVWQyxJQUFBQSxVQUFVLEVBQUUsRUFWRjtBQVdWQyxJQUFBQSxrQkFBa0IsRUFBRSxHQVhWO0FBWVZDLElBQUFBLG9CQUFvQixFQUFFLEdBWlo7QUFhVkMsSUFBQUEsb0JBQW9CLEVBQUUsQ0FBQyxFQWJiO0FBY1ZDLElBQUFBLHFCQUFxQixFQUFFLEVBZGI7QUFlVkMsSUFBQUEsS0FBSyxFQUFFLENBZkc7QUFnQlZDLElBQUFBLFNBQVMsRUFBRTtBQWhCRCxHQUhLO0FBc0JqQkMsRUFBQUEsTUF0QmlCLG9CQXNCUixDQUFFLENBdEJNO0FBd0JqQkMsRUFBQUEsSUF4QmlCLGtCQXdCVixDQUFFLENBeEJRO0FBMEJqQkMsRUFBQUEsS0ExQmlCLG1CQTBCVCxDQUFFLENBMUJPLENBNEJqQjs7QUE1QmlCLENBQVQsQ0FBViIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IGNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbW92ZWNvZGU6IFtdLFxyXG4gICAgY291bnRibGFja2RlYWQ6IDAsXHJcbiAgICBjb3VudHJlZGRlYWQ6IDAsXHJcbiAgICBzOiA5NCxcclxuICAgIHJlZGNhc3RsZXVwYm91bmQ6IC0yMzUsXHJcbiAgICByZWRjYXN0bGVkb3duYm91bmQ6IC00MjMsXHJcbiAgICByZWRjYXN0bGVsZWZ0Ym91bmQ6IC05NCxcclxuICAgIHJlZGNhc3RsZXJpZ2h0Ym91bmQ6IDk0LFxyXG4gICAgcmVkcml2ZXI6IC00NyxcclxuICAgIGJsYWNrcml2ZXI6IDQ3LFxyXG4gICAgYmxhY2tjYXN0bGV1cGJvdW5kOiA0MjMsXHJcbiAgICBibGFja2Nhc3RsZWRvd25ib3VuZDogMjM1LFxyXG4gICAgYmxhY2tjYXN0bGVsZWZ0Ym91bmQ6IC05NCxcclxuICAgIGJsYWNrY2FzdGxlcmlnaHRib3VuZDogOTQsXHJcbiAgICBzY2FsZTogMyxcclxuICAgIGNoZXNzc2l6ZTogNjAsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge30sXHJcblxyXG4gIHRlc3QoKSB7fSxcclxuXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/axios_connection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbfbfqoHqhI6ZiKJQHjTtMq', 'axios_connection');
// script/axios_connection.js

"use strict";

exports.__esModule = true;
exports.quitroombyIDasp2 = exports.quitroombyIDasp1 = exports.quitfullroombyIDasp2 = exports.quitfullroombyIDasp1 = exports.joinroombyIDasp2 = exports.joinroombyIDasp1 = exports.getuserlist = exports.getroomlist = exports.getroombyID = exports.getUserbyID = exports.deleteuser = exports.createroom = exports.createUser = void 0;

require("regenerator-runtime/runtime");

var _regeneratorRuntime = require("regenerator-runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require("axios-creator");

var urlroom = "https://chinese-chess-vnp.herokuapp.com/api/room";
var urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";

var getuserlist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            axios({
              method: "get",
              url: urlplayer
            }).then(function (response) {
              console.log(response.data);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getuserlist() {
    return _ref.apply(this, arguments);
  };
}();

exports.getuserlist = getuserlist;

var deleteuser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            axios({
              method: "delete",
              url: urlplayer + id
            }).then(function (response) {
              console.log(response.data);
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteuser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteuser = deleteuser;

var createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(username) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "post",
                url: urlplayer,
                data: {
                  Username: username
                }
              }).then(function (response) {
                console.log(response.data);
                resolve(response.data);
              })["catch"](function (error) {
                return console.error("timeout exceeded");
              });
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUserbyID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "get",
                url: urlplayer + "/" + id
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getUserbyID(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUserbyID = getUserbyID;

var getroomlist = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "get",
                url: urlroom
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getroomlist() {
    return _ref5.apply(this, arguments);
  };
}();

exports.getroomlist = getroomlist;

var createroom = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(uid) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "post",
                url: urlroom
              }).then(function (response) {
                console.log(response); // var rid = response.data.data.id;

                // var rid = response.data.data.id;
                axios({
                  method: "patch",
                  url: urlroom + "/" + response.data.data.id,
                  data: {
                    Player1: uid
                  }
                }).then(function (response) {
                  console.log(response);
                });
                resolve(response.data.data.id);
              });
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function createroom(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createroom = createroom;

var getroombyID = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "get",
                url: urlroom + "/" + id
              }).then(function (response) {
                console.log(response);
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getroombyID(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getroombyID = getroombyID;

var joinroombyIDasp1 = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(rid, uid) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player1: uid
                }
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function joinroombyIDasp1(_x6, _x7) {
    return _ref8.apply(this, arguments);
  };
}();

exports.joinroombyIDasp1 = joinroombyIDasp1;

var joinroombyIDasp2 = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(rid, uid) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player2: uid
                }
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function joinroombyIDasp2(_x8, _x9) {
    return _ref9.apply(this, arguments);
  };
}();

exports.joinroombyIDasp2 = joinroombyIDasp2;

var quitfullroombyIDasp1 = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(rid, uid) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player1: uid,
                  Player2: null
                }
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function quitfullroombyIDasp1(_x10, _x11) {
    return _ref10.apply(this, arguments);
  };
}();

exports.quitfullroombyIDasp1 = quitfullroombyIDasp1;

var quitfullroombyIDasp2 = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(rid) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player2: null
                }
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function quitfullroombyIDasp2(_x12) {
    return _ref11.apply(this, arguments);
  };
}();

exports.quitfullroombyIDasp2 = quitfullroombyIDasp2;

var quitroombyIDasp1 = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(rid) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player1: null
                }
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function quitroombyIDasp1(_x13) {
    return _ref12.apply(this, arguments);
  };
}();

exports.quitroombyIDasp1 = quitroombyIDasp1;

var quitroombyIDasp2 = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(rid) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player2: null
                }
              }).then(function (response) {
                resolve(response.data);
              });
            }));

          case 1:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function quitroombyIDasp2(_x14) {
    return _ref13.apply(this, arguments);
  };
}();

exports.quitroombyIDasp2 = quitroombyIDasp2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxheGlvc19jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInVybHJvb20iLCJ1cmxwbGF5ZXIiLCJnZXR1c2VybGlzdCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGVsZXRldXNlciIsImlkIiwiY3JlYXRlVXNlciIsInVzZXJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJVc2VybmFtZSIsImVycm9yIiwiZ2V0VXNlcmJ5SUQiLCJnZXRyb29tbGlzdCIsImNyZWF0ZXJvb20iLCJ1aWQiLCJQbGF5ZXIxIiwiZ2V0cm9vbWJ5SUQiLCJqb2lucm9vbWJ5SURhc3AxIiwicmlkIiwiam9pbnJvb21ieUlEYXNwMiIsIlBsYXllcjIiLCJxdWl0ZnVsbHJvb21ieUlEYXNwMSIsInF1aXRmdWxscm9vbWJ5SURhc3AyIiwicXVpdHJvb21ieUlEYXNwMSIsInF1aXRyb29tYnlJRGFzcDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBckI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGtEQUFoQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxvREFBbEI7O0FBRUEsSUFBTUMsV0FBVztBQUFBLHFFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJKLFlBQUFBLEtBQUssQ0FBQztBQUNKSyxjQUFBQSxNQUFNLEVBQUUsS0FESjtBQUVKQyxjQUFBQSxHQUFHLEVBQUVIO0FBRkQsYUFBRCxDQUFMLENBR0dJLElBSEgsQ0FHUSxVQUFDQyxRQUFELEVBQWM7QUFDcEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0QsYUFMRDs7QUFEa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FB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aEJzQixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7Ozs7QUFhQSxJQUFNQyxnQkFBZ0I7QUFBQSx1RUFBRyxtQkFBT04sR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQ2hCLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENsQixjQUFBQSxLQUFLLENBQUM7QUFDSkssZ0JBQUFBLE1BQU0sRUFBRSxPQURKO0FBRUpDLGdCQUFBQSxHQUFHLEVBQUVKLE9BQU8sR0FBRyxHQUFWLEdBQWdCMEIsR0FGakI7QUFHSmpCLGdCQUFBQSxJQUFJLEVBQUM7QUFDSG1CLGtCQUFBQSxPQUFPLEVBQUU7QUFETjtBQUhELGVBQUQsQ0FBTCxDQU1HdkIsSUFOSCxDQU1RLFVBQUNDLFFBQUQsRUFBYztBQUNwQlMsZ0JBQUFBLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDRyxJQUFWLENBQVA7QUFDRCxlQVJEO0FBU0QsYUFWTSxDQURnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQnVCLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3MtY3JlYXRvclwiKTtcclxuY29uc3QgdXJscm9vbSA9IFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tXCI7XHJcbmNvbnN0IHVybHBsYXllciA9IFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9wbGF5ZXJcIjtcclxuXHJcbmNvbnN0IGdldHVzZXJsaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHVybDogdXJscGxheWVyLFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZXVzZXIgPSBhc3luYyAoaWQpID0+IHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZGVsZXRlXCIsXHJcbiAgICB1cmw6IHVybHBsYXllciArIGlkLFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IHVybHBsYXllcixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIFVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJ0aW1lb3V0IGV4Y2VlZGVkXCIpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJieUlEID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHBsYXllciArIFwiL1wiICsgaWQsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRyb29tbGlzdCA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogdXJscm9vbSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZXJvb20gPSBhc3luYyAodWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiB1cmxyb29tLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyAgXHJcbiAgICAgIC8vIHZhciByaWQgPSByZXNwb25zZS5kYXRhLmRhdGEuaWQ7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJlc3BvbnNlLmRhdGEuZGF0YS5pZCxcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCkgXHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldHJvb21ieUlEID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIGlkLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBqb2lucm9vbWJ5SURhc3AxID0gYXN5bmMgKHJpZCwgdWlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBQbGF5ZXIxOiB1aWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGpvaW5yb29tYnlJRGFzcDIgPSBhc3luYyAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIFBsYXllcjI6IHVpZCxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3QgcXVpdGZ1bGxyb29tYnlJRGFzcDEgPSBhc3luYyAocmlkLCB1aWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIFBsYXllcjE6IHVpZCxcclxuICAgICAgICBQbGF5ZXIyOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0ZnVsbHJvb21ieUlEYXNwMiA9IGFzeW5jIChyaWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicGF0Y2hcIixcclxuICAgICAgdXJsOiB1cmxyb29tICsgXCIvXCIgKyByaWQsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIFBsYXllcjI6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHF1aXRyb29tYnlJRGFzcDEgPSBhc3luYyAocmlkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBhdGNoXCIsXHJcbiAgICAgIHVybDogdXJscm9vbSArIFwiL1wiICsgcmlkLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBQbGF5ZXIxOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBxdWl0cm9vbWJ5SURhc3AyID0gYXN5bmMgKHJpZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwYXRjaFwiLFxyXG4gICAgICB1cmw6IHVybHJvb20gKyBcIi9cIiArIHJpZCxcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgUGxheWVyMjogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IHtcclxuICBnZXR1c2VybGlzdCxcclxuICBkZWxldGV1c2VyLFxyXG4gIGNyZWF0ZVVzZXIsXHJcbiAgZ2V0VXNlcmJ5SUQsXHJcbiAgZ2V0cm9vbWxpc3QsXHJcbiAgY3JlYXRlcm9vbSxcclxuICBnZXRyb29tYnlJRCxcclxuICBqb2lucm9vbWJ5SURhc3AxLFxyXG4gIGpvaW5yb29tYnlJRGFzcDIsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDEsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDIsXHJcbiAgcXVpdHJvb21ieUlEYXNwMSxcclxuICBxdWl0cm9vbWJ5SURhc3AyLFxyXG59O1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/changescene/movetoroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ef8cxgpXVNlb48jWyL7OTZ', 'movetoroom');
// script/changescene/movetoroom.js

"use strict";

var _socket_connection = require("../socket_connection");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  create_room: function create_room() {},
  load_scene: function load_scene() {
    cc.director.loadScene("rooms");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcbW92ZXRvcm9vbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImNyZWF0ZV9yb29tIiwibG9hZF9zY2VuZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRSxFQUhMO0FBSVBDLEVBQUFBLE1BSk8sb0JBSUUsQ0FBRSxDQUpKO0FBS1BDLEVBQUFBLFdBTE8seUJBS08sQ0FBRSxDQUxUO0FBTVBDLEVBQUFBLFVBTk8sd0JBTU07QUFDWE4sSUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVlDLFNBQVosQ0FBc0IsT0FBdEI7QUFDRCxHQVJNO0FBU1BDLEVBQUFBLEtBVE8sbUJBU0MsQ0FBRSxDQVRILENBV1A7O0FBWE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHt9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIGNyZWF0ZV9yb29tKCkge30sXHJcbiAgbG9hZF9zY2VuZSgpIHtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/changescene/movetorooms.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33f16azCYRG95oywSUyyCx4', 'movetorooms');
// script/changescene/movetorooms.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  load_scene: function load_scene() {
    cc.director.loadScene("rooms");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcbW92ZXRvcm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJsb2FkX3NjZW5lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSyxDQUFFLENBUFA7QUFRTEMsRUFBQUEsVUFSSyx3QkFRTztBQUNSTCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixPQUF0QjtBQUNILEdBVkk7QUFXTEMsRUFBQUEsS0FYSyxtQkFXSSxDQUVSLENBYkksQ0FlTDs7QUFmSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge30sXHJcbiAgICBsb2FkX3NjZW5lKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbXNcIik7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/changescene/movetoboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abc7aL2BERPfa6YG6jq8jC4', 'movetoboard');
// script/changescene/movetoboard.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  load_scene: function load_scene() {
    cc.director.loadScene("board");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcbW92ZXRvYm9hcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJsb2FkX3NjZW5lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFLEVBSEw7QUFJUEMsRUFBQUEsTUFKTyxvQkFJRSxDQUFFLENBSko7QUFLUEMsRUFBQUEsVUFMTyx3QkFLTTtBQUNYTCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixPQUF0QjtBQUNELEdBUE07QUFRUEMsRUFBQUEsS0FSTyxtQkFRQyxDQUFFLENBUkgsQ0FVUDs7QUFWTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7fSxcclxuICBvbkxvYWQoKSB7fSxcclxuICBsb2FkX3NjZW5lKCkge1xyXG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYm9hcmRcIik7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameplay/movecodelist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d607rb+tHY6WX/SvgNxMG', 'movecodelist');
// script/gameplay/movecodelist.js

"use strict";

var _socket_connection = require("../socket_connection");

cc.Class({
  "extends": cc.Component,
  properties: {
    list: {
      "default": "",
      multiline: true
    },
    map: {
      "default": null,
      type: cc.Node
    },
    movecodelist: {
      "default": null,
      type: cc.Label
    }
  },
  updatelist: function updatelist() {// let socket = io.connect("http://localhost:3000", { transports : ['websocket'] });
  },
  // })
  start: function start() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lcGxheVxcbW92ZWNvZGVsaXN0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdCIsIm11bHRpbGluZSIsIm1hcCIsInR5cGUiLCJOb2RlIiwibW92ZWNvZGVsaXN0IiwiTGFiZWwiLCJ1cGRhdGVsaXN0Iiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFNQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLEVBREw7QUFFSkMsTUFBQUEsU0FBUyxFQUFFO0FBRlAsS0FESTtBQUtWQyxJQUFBQSxHQUFHLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUZOLEtBTEs7QUFTVkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1osaUJBQVMsSUFERztBQUVaRixNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ1U7QUFGRztBQVRKLEdBSEw7QUFrQlBDLEVBQUFBLFVBbEJPLHdCQWtCTSxDQUNYO0FBQ0QsR0FwQk07QUFzQlA7QUFDQUMsRUFBQUEsS0F2Qk8sbUJBdUJDLENBQUUsQ0F2Qkg7QUF3QlBDLEVBQUFBLE1BeEJPLGtCQXdCQUMsRUF4QkEsRUF3QkksQ0FBRTtBQXhCTixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGRlYWRjaGVzcyxcclxuICByZWNlaXZlZGRlYWRjaGVzcyxcclxufSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbGlzdDoge1xyXG4gICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgICBtdWx0aWxpbmU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbWFwOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgbW92ZWNvZGVsaXN0OiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB1cGRhdGVsaXN0KCkge1xyXG4gICAgLy8gbGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwgeyB0cmFuc3BvcnRzIDogWyd3ZWJzb2NrZXQnXSB9KTtcclxuICB9LFxyXG5cclxuICAvLyB9KVxyXG4gIHN0YXJ0KCkge30sXHJcbiAgdXBkYXRlKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameplay/readybutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8c3cwsxilOjIDWDVf1YdGH', 'readybutton');
// script/gameplay/readybutton.js

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
    p1button: {
      "default": null,
      type: cc.Node
    },
    p2button: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {},
  start: function start() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lcGxheVxccmVhZHlidXR0b24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwMWJ1dHRvbiIsInR5cGUiLCJOb2RlIiwicDJidXR0b24iLCJvbkxvYWQiLCJzdGFydCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFDO0FBQ0wsaUJBQVMsSUFESjtBQUVMQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSixLQUREO0FBS1JDLElBQUFBLFFBQVEsRUFBQztBQUNMLGlCQUFTLElBREo7QUFFTEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRko7QUFMRCxHQUhQO0FBY0xFLEVBQUFBLE1BZEssb0JBY0ssQ0FBRSxDQWRQO0FBZ0JMQyxFQUFBQSxLQWhCSyxtQkFnQkksQ0FFUixDQWxCSTtBQW9CTEMsRUFBQUEsTUFwQkssa0JBb0JHQyxFQXBCSCxFQW9CTyxDQUVYO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwMWJ1dHRvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwMmJ1dHRvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/changescene/backtoroomlist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35807QmkQxFro+IzZbqGmDU', 'backtoroomlist');
// script/changescene/backtoroomlist.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  backtoroomlist: function backtoroomlist() {
    var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var roomID = RoomInfos.rid;
    (0, _axios_connection.getroombyID)(roomID).then(function (data) {
      console.log(data);

      if (data.data.Player1 != null && data.data.Player2 != null) {
        if (data.data.Player1 == PlayerInfo.uid) {
          var p2 = data.data.Player2;
          (0, _axios_connection.quitfullroombyIDasp1)(roomID, p2).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }

        if (data.data.Player2 == PlayerInfo.uid) {
          (0, _axios_connection.quitfullroombyIDasp2)(roomID).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }
      }

      if (data.data.Player1 == null && data.data.Player2 != null) {
        (0, _axios_connection.quitroombyIDasp2)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("rooms");
        }); // .catch(function () {
        //   console.log("Promise Rejected");
        // });
      }

      if (data.data.Player1 != null && data.data.Player2 == null) {
        (0, _axios_connection.quitroombyIDasp1)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("rooms");
        }); // .catch(function () {
        //   console.log("Promise Rejected");
        // });
      }
    })["catch"](function () {
      console.log("Promise Rejected");
    });
  },
  start: function start() {},
  onDisable: function onDisable() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcYmFja3Rvcm9vbWxpc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJiYWNrdG9yb29tbGlzdCIsIlBsYXllckluZm8iLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJSb29tSW5mb3MiLCJyb29tSUQiLCJyaWQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIxIiwiUGxheWVyMiIsInVpZCIsInAyIiwibG9hZFNjZW5lIiwic3RhcnQiLCJvbkRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBQ0E7O0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRSxFQUhMO0FBSVBDLEVBQUFBLE1BSk8sb0JBSUUsQ0FBRSxDQUpKO0FBTVBDLEVBQUFBLGNBTk8sNEJBTVU7QUFDZixRQUFJQyxVQUFVLEdBQUdOLEVBQUUsQ0FBQ08sUUFBSCxDQUNkQyxRQURjLEdBRWRDLGNBRmMsQ0FFQyxZQUZELEVBR2RDLFlBSGMsQ0FHRCxZQUhDLENBQWpCO0FBSUEsUUFBSUMsU0FBUyxHQUFHWCxFQUFFLENBQUNPLFFBQUgsQ0FDYkMsUUFEYSxHQUViQyxjQUZhLENBRUUsV0FGRixFQUdiQyxZQUhhLENBR0EsV0FIQSxDQUFoQjtBQUtBLFFBQUlFLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxHQUF2QjtBQUNBLHVDQUFZRCxNQUFaLEVBQW9CRSxJQUFwQixDQUF5QixVQUFDQyxJQUFELEVBQVU7QUFDakNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUNBLFVBQUlBLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxPQUFWLElBQXFCLElBQXJCLElBQTZCSCxJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBVixJQUFxQixJQUF0RCxFQUE0RDtBQUMxRCxZQUFJSixJQUFJLENBQUNBLElBQUwsQ0FBVUcsT0FBVixJQUFxQlosVUFBVSxDQUFDYyxHQUFwQyxFQUF5QztBQUN2QyxjQUFJQyxFQUFFLEdBQUdOLElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFuQjtBQUNBLHNEQUFxQlAsTUFBckIsRUFBNkJTLEVBQTdCLEVBQWlDUCxJQUFqQyxDQUFzQyxVQUFDQyxJQUFELEVBQVU7QUFDOUNDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FKLFlBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixZQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixPQUF0QjtBQUNELFdBSkQsRUFGdUMsQ0FPdkM7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0QsWUFBSVAsSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQVYsSUFBcUJiLFVBQVUsQ0FBQ2MsR0FBcEMsRUFBeUM7QUFDdkMsc0RBQXFCUixNQUFyQixFQUE2QkUsSUFBN0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBSixZQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0IsSUFBaEI7QUFDQWIsWUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVllLFNBQVosQ0FBc0IsT0FBdEI7QUFDRCxXQUpELEVBRHVDLENBS3JDO0FBQ0E7QUFDQTtBQUNIO0FBQ0Y7O0FBQ0QsVUFBSVAsSUFBSSxDQUFDQSxJQUFMLENBQVVHLE9BQVYsSUFBcUIsSUFBckIsSUFBNkJILElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFWLElBQXFCLElBQXRELEVBQTREO0FBQzFELGdEQUFpQlAsTUFBakIsRUFBeUJFLElBQXpCLENBQThCLFVBQUNDLElBQUQsRUFBVTtBQUN0Q0MsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUosVUFBQUEsU0FBUyxDQUFDRSxHQUFWLEdBQWdCLElBQWhCO0FBQ0FiLFVBQUFBLEVBQUUsQ0FBQ08sUUFBSCxDQUFZZSxTQUFaLENBQXNCLE9BQXRCO0FBQ0QsU0FKRCxFQUQwRCxDQUt4RDtBQUNBO0FBQ0E7QUFDSDs7QUFDRCxVQUFJUCxJQUFJLENBQUNBLElBQUwsQ0FBVUcsT0FBVixJQUFxQixJQUFyQixJQUE2QkgsSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQVYsSUFBcUIsSUFBdEQsRUFBNEQ7QUFDMUQsZ0RBQWlCUCxNQUFqQixFQUF5QkUsSUFBekIsQ0FBOEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RDQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBSixVQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0IsSUFBaEI7QUFDQWIsVUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVllLFNBQVosQ0FBc0IsT0FBdEI7QUFDRCxTQUpELEVBRDBELENBS3hEO0FBQ0E7QUFDQTtBQUNIO0FBQ0YsS0ExQ0QsV0EwQ1MsWUFBWTtBQUNuQk4sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxLQTVDRDtBQTZDRCxHQTlETTtBQStEUE0sRUFBQUEsS0EvRE8sbUJBK0RDLENBQUUsQ0EvREg7QUFnRVBDLEVBQUFBLFNBaEVPLHVCQWdFSyxDQUFFLENBaEVQLENBaUVQOztBQWpFTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IHJlY2VpdmVkcm9vbUlEIH0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0cm9vbWJ5SUQsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDEsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDIsXHJcbiAgcXVpdHJvb21ieUlEYXNwMSxcclxuICBxdWl0cm9vbWJ5SURhc3AyLFxyXG59IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7fSxcclxuICBvbkxvYWQoKSB7fSxcclxuXHJcbiAgYmFja3Rvcm9vbWxpc3QoKSB7XHJcbiAgICB2YXIgUGxheWVySW5mbyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckluZm9cIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlBsYXllckluZm9cIik7XHJcbiAgICB2YXIgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcblxyXG4gICAgbGV0IHJvb21JRCA9IFJvb21JbmZvcy5yaWQ7XHJcbiAgICBnZXRyb29tYnlJRChyb29tSUQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSAhPSBudWxsICYmIGRhdGEuZGF0YS5QbGF5ZXIyICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEgPT0gUGxheWVySW5mby51aWQpIHtcclxuICAgICAgICAgIGxldCBwMiA9IGRhdGEuZGF0YS5QbGF5ZXIyO1xyXG4gICAgICAgICAgcXVpdGZ1bGxyb29tYnlJRGFzcDEocm9vbUlELCBwMikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vIC5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjIgPT0gUGxheWVySW5mby51aWQpIHtcclxuICAgICAgICAgIHF1aXRmdWxscm9vbWJ5SURhc3AyKHJvb21JRCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgICAgfSkvLyAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSA9PSBudWxsICYmIGRhdGEuZGF0YS5QbGF5ZXIyICE9IG51bGwpIHtcclxuICAgICAgICBxdWl0cm9vbWJ5SURhc3AyKHJvb21JRCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBSb29tSW5mb3MucmlkID0gbnVsbDtcclxuICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgIH0pLy8gLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgICAgICAgLy8gfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIxICE9IG51bGwgJiYgZGF0YS5kYXRhLlBsYXllcjIgPT0gbnVsbCkge1xyXG4gICAgICAgIHF1aXRyb29tYnlJRGFzcDEocm9vbUlEKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIFJvb21JbmZvcy5yaWQgPSBudWxsO1xyXG4gICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbXNcIik7XHJcbiAgICAgICAgfSkvLyAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgb25EaXNhYmxlKCkge30sXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameplay/list.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4e19H30vFBA4QuQnL93D2G', 'list');
// script/gameplay/list.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    movecodecontent: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {// let movecodelist = this.movecodelist.getComponent('movecodelist');
  },
  start: function start() {},
  update: function update(dt) {// let movecodecontent = this.movecodecontent.getComponent('movecodelist');
    // this.node.height = movecodecontent.list.length*40+100;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lcGxheVxcbGlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vdmVjb2RlY29udGVudCIsInR5cGUiLCJOb2RlIiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGVBQWUsRUFBQztBQUNaLGlCQUFTLElBREc7QUFFWkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkc7QUFEUixHQUhQO0FBU0xDLEVBQUFBLE1BVEssb0JBU0ssQ0FDTjtBQUNILEdBWEk7QUFhTEMsRUFBQUEsS0FiSyxtQkFhSSxDQUVSLENBZkk7QUFpQkxDLEVBQUFBLE1BakJLLGtCQWlCR0MsRUFqQkgsRUFpQk8sQ0FDUjtBQUNBO0FBQ0g7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbW92ZWNvZGVjb250ZW50OntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8gbGV0IG1vdmVjb2RlbGlzdCA9IHRoaXMubW92ZWNvZGVsaXN0LmdldENvbXBvbmVudCgnbW92ZWNvZGVsaXN0Jyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyBsZXQgbW92ZWNvZGVjb250ZW50ID0gdGhpcy5tb3ZlY29kZWNvbnRlbnQuZ2V0Q29tcG9uZW50KCdtb3ZlY29kZWxpc3QnKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuaGVpZ2h0ID0gbW92ZWNvZGVjb250ZW50Lmxpc3QubGVuZ3RoKjQwKzEwMDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameplay/deadblackchess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a32bPUxzNJzaC36TReSFgX', 'deadblackchess');
// script/gameplay/deadblackchess.js

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
    this.node.height = map.countblackdead * map.chesssize + 100;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lcGxheVxcZGVhZGJsYWNrY2hlc3MuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXAiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsImdldENvbXBvbmVudCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJub2RlIiwiaGVpZ2h0IiwiY291bnRibGFja2RlYWQiLCJjaGVzc3NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUM7QUFDQSxpQkFBUyxJQURUO0FBRUFDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZUO0FBREksR0FIUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLO0FBQ04sUUFBSUgsR0FBRyxHQUFHLEtBQUtBLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQixXQUF0QixDQUFWO0FBQ0gsR0FaSTtBQWNMQyxFQUFBQSxLQWRLLG1CQWNJLENBRVIsQ0FoQkk7QUFrQkxDLEVBQUFBLE1BbEJLLGtCQWtCR0MsRUFsQkgsRUFrQk87QUFDUixRQUFJUCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxDQUFTSSxZQUFULENBQXNCLFdBQXRCLENBQVY7QUFDQSxTQUFLSSxJQUFMLENBQVVDLE1BQVYsR0FBbUJULEdBQUcsQ0FBQ1UsY0FBSixHQUFtQlYsR0FBRyxDQUFDVyxTQUF2QixHQUFpQyxHQUFwRDtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KCdib2FyZGluZm8nKTtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gbWFwLmNvdW50YmxhY2tkZWFkKm1hcC5jaGVzc3NpemUrMTAwO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/createroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9aacf1bFzRDar2oq8ZNrJeu', 'createroom');
// script/room/createroom.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  create_room: function create_room() {
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    (0, _socket_connection.receiveduserID)().then(function (data) {
      var uid = data;
      console.log("uid", uid);
      (0, _axios_connection.createroom)(uid).then(function (data) {
        console.log(data);
        RoomInfos.rid = data;
        console.log("roomid", RoomInfos.rid);
        cc.director.loadScene("room");
      });
    })["catch"](function () {
      console.log("Promise Rejected");
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxjcmVhdGVyb29tLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3JlYXRlX3Jvb20iLCJSb29tSW5mb3MiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwiZGF0YSIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJyaWQiLCJsb2FkU2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFRQTs7QUFFQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUUsRUFGTDtBQUdQQyxFQUFBQSxNQUhPLG9CQUdFLENBQUUsQ0FISjtBQUlQQyxFQUFBQSxXQUpPLHlCQUlPO0FBQ1osUUFBSUMsU0FBUyxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FDYkMsUUFEYSxHQUViQyxjQUZhLENBRUUsV0FGRixFQUdiQyxZQUhhLENBR0EsV0FIQSxDQUFoQjtBQUlBLDZDQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFVBQUlDLEdBQUcsR0FBR0QsSUFBVjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixHQUFuQjtBQUNBLHdDQUFXQSxHQUFYLEVBQWdCRixJQUFoQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDN0JFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0FOLFFBQUFBLFNBQVMsQ0FBQ1UsR0FBVixHQUFnQkosSUFBaEI7QUFDQUUsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlQsU0FBUyxDQUFDVSxHQUFoQztBQUNBaEIsUUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVlVLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxPQUxEO0FBTUQsS0FURCxXQVNTLFlBQVk7QUFDbkJILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0FYRDtBQWFELEdBdEJNO0FBdUJQRyxFQUFBQSxLQXZCTyxtQkF1QkMsQ0FBRSxDQXZCSCxDQXlCUDs7QUF6Qk8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICByZWNlaXZlZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZGNoZXNzUG9zaXRpb24sXHJcbiAgc2VuZHVzZXJJRCxcclxuICByZWNlaXZlZHVzZXJJRCxcclxuICBzZW5kcm9vbUlELFxyXG4gIHJlY2VpdmVkcm9vbUlELFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVyb29tIH0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuXHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge30sXHJcbiAgb25Mb2FkKCkge30sXHJcbiAgY3JlYXRlX3Jvb20oKSB7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHVpZCA9IGRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidWlkXCIsIHVpZCk7XHJcbiAgICAgIGNyZWF0ZXJvb20odWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgUm9vbUluZm9zLnJpZCA9IGRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29taWRcIiwgUm9vbUluZm9zLnJpZCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/PrepareRoom/Showchat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2a08HiXB5Jc61OiaeOIbiX', 'Showchat');
// script/room/PrepareRoom/Showchat.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  showchat: function showchat() {
    var socket = io.connect("http://localhost:3000", {
      transports: ['websocket']
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxQcmVwYXJlUm9vbVxcU2hvd2NoYXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzaG93Y2hhdCIsInNvY2tldCIsImlvIiwiY29ubmVjdCIsInRyYW5zcG9ydHMiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsUUFOSyxzQkFNSztBQUNOLFFBQUlDLE1BQU0sR0FBR0MsRUFBRSxDQUFDQyxPQUFILENBQVcsdUJBQVgsRUFBb0M7QUFBRUMsTUFBQUEsVUFBVSxFQUFHLENBQUMsV0FBRDtBQUFmLEtBQXBDLENBQWI7QUFHSCxHQVZJO0FBV0xDLEVBQUFBLEtBWEssbUJBV0ksQ0FFUixDQWJJLENBZUw7O0FBZkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHNob3djaGF0KCl7XHJcbiAgICAgICAgbGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwgeyB0cmFuc3BvcnRzIDogWyd3ZWJzb2NrZXQnXSB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/showrooms.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b428tgnFNHO71TiT8Zn+27', 'showrooms');
// script/room/showrooms.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    listrooms: {
      "default": null,
      type: cc.Label
    },
    id: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    var id = this.id;
    (0, _socket_connection.receiveduserID)().then(function (data) {
      var uid = data;
      var name = _this.namedisplay;
      (0, _axios_connection.getUserbyID)(uid).then(function (data) {
        id.string = data.data.Username + " #" + uid;
      })["catch"](function () {
        console.log("Promise Rejected");
      });
    })["catch"](function () {
      console.log("Promise Rejected");
    });
  },
  show_rooms: function show_rooms() {
    var listrooms = this.listrooms;
    var roomlist = [];
    (0, _axios_connection.getroomlist)().then(function (data) {
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].Player1 != null && data.data[i].Player2 != null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- full") + "\n";
        } else if (data.data[i].Player1 != null && data.data[i].Player2 == null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n";
        } else if (data.data[i].Player1 == null && data.data[i].Player2 != null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n";
        } else if (data.data[i].Player1 == null && data.data[i].Player2 == null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 0/2") + "\n";
        }
      }

      listrooms.string = roomlist;
    })["catch"](function () {
      console.log("Promise Rejected");
    });
  },
  start: function start() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxzaG93cm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0cm9vbXMiLCJ0eXBlIiwiTGFiZWwiLCJpZCIsIm9uTG9hZCIsInRoZW4iLCJkYXRhIiwidWlkIiwibmFtZSIsIm5hbWVkaXNwbGF5Iiwic3RyaW5nIiwiVXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2hvd19yb29tcyIsInJvb21saXN0IiwiaSIsImxlbmd0aCIsIlBsYXllcjEiLCJQbGF5ZXIyIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFNBQVMsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FERDtBQUtWQyxJQUFBQSxFQUFFLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZQO0FBTE0sR0FGTDtBQVlQRSxFQUFBQSxNQVpPLG9CQVlFO0FBQUE7O0FBQ1AsUUFBSUQsRUFBRSxHQUFHLEtBQUtBLEVBQWQ7QUFDQSw2Q0FBaUJFLElBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJQyxHQUFHLEdBQUdELElBQVY7QUFDQSxVQUFJRSxJQUFJLEdBQUcsS0FBSSxDQUFDQyxXQUFoQjtBQUNBLHlDQUFZRixHQUFaLEVBQWlCRixJQUFqQixDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDOUJILFFBQUFBLEVBQUUsQ0FBQ08sTUFBSCxHQUFZSixJQUFJLENBQUNBLElBQUwsQ0FBVUssUUFBVixHQUFxQixJQUFyQixHQUE0QkosR0FBeEM7QUFDRCxPQUZELFdBRVMsWUFBWTtBQUNuQkssUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxPQUpEO0FBS0QsS0FSRCxXQVFTLFlBQVk7QUFDbkJELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0FWRDtBQVdELEdBekJNO0FBMEJQQyxFQUFBQSxVQTFCTyx3QkEwQk07QUFDWCxRQUFJZCxTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQSxRQUFJZSxRQUFRLEdBQUcsRUFBZjtBQUNBLHlDQUFjVixJQUFkLENBQW1CLFVBQUNDLElBQUQsRUFBVTtBQUMzQixXQUFLLElBQUlVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLElBQUksQ0FBQ0EsSUFBTCxDQUFVVyxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxZQUFJVixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRSxPQUFiLElBQXdCLElBQXhCLElBQWdDWixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRyxPQUFiLElBQXdCLElBQTVELEVBQWtFO0FBQ2hFSixVQUFBQSxRQUFRLElBQ05LLElBQUksQ0FBQ0MsU0FBTCxDQUFlLGFBQWFmLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFiLEVBQTFCLEdBQStCLFdBQTlDLElBQTZELElBRC9EO0FBRUQsU0FIRCxNQUdPLElBQ0xHLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFFLE9BQWIsSUFBd0IsSUFBeEIsSUFDQVosSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYUcsT0FBYixJQUF3QixJQUZuQixFQUdMO0FBQ0FKLFVBQUFBLFFBQVEsSUFDTkssSUFBSSxDQUFDQyxTQUFMLENBQWUsYUFBYWYsSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYWIsRUFBMUIsR0FBK0IsVUFBOUMsSUFBNEQsSUFEOUQ7QUFFRCxTQU5NLE1BTUEsSUFDTEcsSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYUUsT0FBYixJQUF3QixJQUF4QixJQUNBWixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRyxPQUFiLElBQXdCLElBRm5CLEVBR0w7QUFDQUosVUFBQUEsUUFBUSxJQUNOSyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxhQUFhZixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhYixFQUExQixHQUErQixVQUE5QyxJQUE0RCxJQUQ5RDtBQUVELFNBTk0sTUFNQSxJQUNMRyxJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRSxPQUFiLElBQXdCLElBQXhCLElBQ0FaLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFHLE9BQWIsSUFBd0IsSUFGbkIsRUFHTDtBQUNBSixVQUFBQSxRQUFRLElBQ05LLElBQUksQ0FBQ0MsU0FBTCxDQUFlLGFBQWFmLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFiLEVBQTFCLEdBQStCLFVBQTlDLElBQTRELElBRDlEO0FBRUQ7QUFDRjs7QUFDREgsTUFBQUEsU0FBUyxDQUFDVSxNQUFWLEdBQW1CSyxRQUFuQjtBQUNELEtBMUJELFdBMkJPLFlBQVk7QUFDakJILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0E3QkQ7QUE4QkQsR0EzRE07QUE0RFBTLEVBQUFBLEtBNURPLG1CQTREQyxDQUFFLENBNURIO0FBNkRQQyxFQUFBQSxNQTdETyxrQkE2REFDLEVBN0RBLEVBNkRJLENBQUU7QUE3RE4sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0VXNlcmJ5SUQsIGdldHJvb21saXN0IH0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbGlzdHJvb21zOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIGlkOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCBpZCA9IHRoaXMuaWQ7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgbGV0IHVpZCA9IGRhdGE7XHJcbiAgICAgIGxldCBuYW1lID0gdGhpcy5uYW1lZGlzcGxheTtcclxuICAgICAgZ2V0VXNlcmJ5SUQodWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWQuc3RyaW5nID0gZGF0YS5kYXRhLlVzZXJuYW1lICsgXCIgI1wiICsgdWlkO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzaG93X3Jvb21zKCkge1xyXG4gICAgbGV0IGxpc3Ryb29tcyA9IHRoaXMubGlzdHJvb21zO1xyXG4gICAgbGV0IHJvb21saXN0ID0gW107XHJcbiAgICBnZXRyb29tbGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhW2ldLlBsYXllcjEgIT0gbnVsbCAmJiBkYXRhLmRhdGFbaV0uUGxheWVyMiAhPSBudWxsKSB7XHJcbiAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gZnVsbFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIxICE9IG51bGwgJiZcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIyID09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSAxLzJcIikgKyBcIlxcblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMSA9PSBudWxsICYmXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMiAhPSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gMS8yXCIpICsgXCJcXG5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjEgPT0gbnVsbCAmJlxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjIgPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIDAvMlwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3Ryb29tcy5zdHJpbmcgPSByb29tbGlzdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgdXBkYXRlKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PlayerInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cc5eDYYkVPy4BmXCiJ3+nR', 'PlayerInfo');
// script/PlayerInfo.js

"use strict";

var _socket_connection = require("./socket_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    uid: 0,
    uname: ""
  },
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
    var uid = this.uid;
    var uname = this.uname;
  },
  start: function start() {},
  update: function update(dt) {
    if (dt === void 0) {
      dt = 1000;
    }

    (0, _socket_connection.senduserID)(this.uid);
    cc.game.addPersistRootNode(this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5ZXJJbmZvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidWlkIiwidW5hbWUiLCJvbkxvYWQiLCJnYW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxHQUFHLEVBQUUsQ0FESztBQUVWQyxJQUFBQSxLQUFLLEVBQUU7QUFGRyxHQUhMO0FBUVBDLEVBQUFBLE1BUk8sb0JBUUU7QUFDUE4sSUFBQUEsRUFBRSxDQUFDTyxJQUFILENBQVFDLGtCQUFSLENBQTJCLEtBQUtDLElBQWhDO0FBQ0EsUUFBSUwsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDQSxRQUFJQyxLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFDRCxHQVpNO0FBY1BLLEVBQUFBLEtBZE8sbUJBY0MsQ0FBRSxDQWRIO0FBZ0JQQyxFQUFBQSxNQWhCTyxrQkFnQkFDLEVBaEJBLEVBZ0JXO0FBQUEsUUFBWEEsRUFBVztBQUFYQSxNQUFBQSxFQUFXLEdBQU4sSUFBTTtBQUFBOztBQUNoQix1Q0FBVyxLQUFLUixHQUFoQjtBQUNBSixJQUFBQSxFQUFFLENBQUNPLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS0MsSUFBaEM7QUFDRDtBQW5CTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IHNlbmR1c2VySUQgfSBmcm9tIFwiLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdWlkOiAwLFxyXG4gICAgdW5hbWU6IFwiXCIsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIGxldCB1aWQgPSB0aGlzLnVpZDtcclxuICAgIGxldCB1bmFtZSA9IHRoaXMudW5hbWU7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgdXBkYXRlKGR0ID0gMTAwMCkge1xyXG4gICAgc2VuZHVzZXJJRCh0aGlzLnVpZCk7XHJcbiAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/PrepareRoom/Sendchat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fb25MA9YVDtroFv2qJGESI', 'Sendchat');
// script/room/PrepareRoom/Sendchat.js

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
    chat: {
      "default": null,
      type: cc.Label
    },
    chatholder: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  emitchat: function emitchat() {
    var socket = io.connect("http://localhost:3000", {
      transports: ['websocket']
    });
    socket.emit('chat send', this.chat.string);
    this.chat.string = "";
    var chatholder = this.chatholder;
    socket.on('chat received', function (data) {
      chatholder.string += "\n";
      chatholder.string += data;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxQcmVwYXJlUm9vbVxcU2VuZGNoYXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGF0IiwidHlwZSIsIkxhYmVsIiwiY2hhdGhvbGRlciIsIm9uTG9hZCIsImVtaXRjaGF0Iiwic29ja2V0IiwiaW8iLCJjb25uZWN0IiwidHJhbnNwb3J0cyIsImVtaXQiLCJzdHJpbmciLCJvbiIsImRhdGEiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBQztBQUNELGlCQUFTLElBRFI7QUFFREMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlIsS0FERztBQUtSQyxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGO0FBTEgsR0FIUDtBQWFMRSxFQUFBQSxNQWJLLG9CQWFLLENBQUUsQ0FiUDtBQWNMQyxFQUFBQSxRQWRLLHNCQWNLO0FBQ04sUUFBSUMsTUFBTSxHQUFHQyxFQUFFLENBQUNDLE9BQUgsQ0FBVyx1QkFBWCxFQUFvQztBQUFFQyxNQUFBQSxVQUFVLEVBQUcsQ0FBQyxXQUFEO0FBQWYsS0FBcEMsQ0FBYjtBQUVBSCxJQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxXQUFaLEVBQXlCLEtBQUtWLElBQUwsQ0FBVVcsTUFBbkM7QUFDQSxTQUFLWCxJQUFMLENBQVVXLE1BQVYsR0FBbUIsRUFBbkI7QUFFQSxRQUFJUixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7QUFDQUcsSUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFDQyxJQUFELEVBQVE7QUFDL0JWLE1BQUFBLFVBQVUsQ0FBQ1EsTUFBWCxJQUFxQixJQUFyQjtBQUNBUixNQUFBQSxVQUFVLENBQUNRLE1BQVgsSUFBcUJFLElBQXJCO0FBQ0gsS0FIRDtBQUlILEdBekJJO0FBMkJMQyxFQUFBQSxLQTNCSyxtQkEyQkksQ0FFUixDQTdCSSxDQStCTDs7QUEvQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNoYXQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYXRob2xkZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHt9LFxyXG4gICAgZW1pdGNoYXQoKXtcclxuICAgICAgICBsZXQgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCB7IHRyYW5zcG9ydHMgOiBbJ3dlYnNvY2tldCddIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQuZW1pdCgnY2hhdCBzZW5kJywgdGhpcy5jaGF0LnN0cmluZyk7XHJcbiAgICAgICAgdGhpcy5jaGF0LnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNoYXRob2xkZXIgPSB0aGlzLmNoYXRob2xkZXI7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdjaGF0IHJlY2VpdmVkJywgKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNoYXRob2xkZXIuc3RyaW5nICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIGNoYXRob2xkZXIuc3RyaW5nICs9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/temp/deleteroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31a63cAgHlPVrX4NXcO+4XD', 'deleteroom');
// script/temp/deleteroom.js

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
    roomID: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  deleteroom: function deleteroom() {
    var roomID = this.roomID.string;

    if (roomID) {
      fetch('https://chinese-chess-vnp.herokuapp.com/api/room/' + roomID, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        } // body: JSON.stringify({ id: '1' })

      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0ZW1wXFxkZWxldGVyb29tLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicm9vbUlEIiwidHlwZSIsIkxhYmVsIiwiZGVsZXRlcm9vbSIsInN0cmluZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTjtBQURDLEdBSFA7QUFVTDtBQUVBO0FBQ0FDLEVBQUFBLFVBYkssd0JBYU87QUFDUixRQUFJSCxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZSSxNQUF6Qjs7QUFDQSxRQUFJSixNQUFKLEVBQVc7QUFDUEssTUFBQUEsS0FBSyxDQUFDLHNEQUFzREwsTUFBdkQsRUFBK0Q7QUFDaEVNLFFBQUFBLE1BQU0sRUFBRSxRQUR3RDtBQUVoRUMsUUFBQUEsT0FBTyxFQUFFO0FBQ0wsb0JBQVUsa0JBREw7QUFFTCwwQkFBZ0I7QUFGWCxTQUZ1RCxDQU1oRTs7QUFOZ0UsT0FBL0QsQ0FBTCxDQVFLQyxJQVJMLENBUVUsVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsT0FSbEIsRUFTS0YsSUFUTCxDQVNVLFVBQUFHLElBQUksRUFBSTtBQUNWQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILE9BWEw7QUFZSDtBQUVKLEdBOUJJO0FBK0JMRyxFQUFBQSxLQS9CSyxtQkErQkksQ0FFUixDQWpDSSxDQW1DTDs7QUFuQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJvb21JRDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcbiAgICBkZWxldGVyb29tKCl7XHJcbiAgICAgICAgbGV0IHJvb21JRCA9IHRoaXMucm9vbUlELnN0cmluZztcclxuICAgICAgICBpZiAocm9vbUlEKXtcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbS8nICsgcm9vbUlELCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQ6ICcxJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/joinroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6323clwI0xJl4kOKrMKHG0j', 'joinroom');
// script/room/joinroom.js

"use strict";

var _axios_connection = require("../axios_connection");

var _require = require("socket.io-client"),
    io = _require.io;

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    roomID: {
      "default": null,
      type: cc.Label
    },
    Pass: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  join_room: function join_room() {
    var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
    var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
    var uid = PlayerInfo.uid;
    var roomID = this.roomID.string;
    var pass = this.Pass.string;
    (0, _axios_connection.getroombyID)(roomID).then(function (data) {
      if (data.data.id == roomID) {
        if (data.data.Player1 == null) {
          (0, _axios_connection.joinroombyIDasp1)(roomID, uid).then(function (data) {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          });
        } else if (data.data.Player2 == null) {
          (0, _axios_connection.joinroombyIDasp2)(roomID, uid).then(function (data) {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          });
        } else {
          console.log("Roomfull!");
        }
      }
    })["catch"](function () {
      console.log("Promise Rejected");
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxqb2lucm9vbS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW8iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJvb21JRCIsInR5cGUiLCJMYWJlbCIsIlBhc3MiLCJvbkxvYWQiLCJqb2luX3Jvb20iLCJQbGF5ZXJJbmZvIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUm9vbUluZm9zIiwidWlkIiwic3RyaW5nIiwicGFzcyIsInRoZW4iLCJkYXRhIiwiaWQiLCJQbGF5ZXIxIiwiY29uc29sZSIsImxvZyIsInJpZCIsImxvYWRTY2VuZSIsIlBsYXllcjIiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQSxlQUFlQSxPQUFPLENBQUMsa0JBQUQsQ0FBdEI7QUFBQSxJQUFRQyxFQUFSLFlBQVFBLEVBQVI7O0FBTUE7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERTtBQUtWQyxJQUFBQSxJQUFJLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZMO0FBTEksR0FITDtBQWNQRSxFQUFBQSxNQWRPLG9CQWNFLENBQUUsQ0FkSjtBQWVQQyxFQUFBQSxTQWZPLHVCQWVLO0FBQ1YsUUFBSUMsVUFBVSxHQUFHVixFQUFFLENBQUNXLFFBQUgsQ0FDZEMsUUFEYyxHQUVkQyxjQUZjLENBRUMsWUFGRCxFQUdkQyxZQUhjLENBR0QsWUFIQyxDQUFqQjtBQUlBLFFBQUlDLFNBQVMsR0FBR2YsRUFBRSxDQUFDVyxRQUFILENBQ2JDLFFBRGEsR0FFYkMsY0FGYSxDQUVFLFdBRkYsRUFHYkMsWUFIYSxDQUdBLFdBSEEsQ0FBaEI7QUFJQSxRQUFJRSxHQUFHLEdBQUdOLFVBQVUsQ0FBQ00sR0FBckI7QUFDQSxRQUFJWixNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZYSxNQUF6QjtBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVVLE1BQXJCO0FBRUEsdUNBQVliLE1BQVosRUFBb0JlLElBQXBCLENBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQyxVQUFJQSxJQUFJLENBQUNBLElBQUwsQ0FBVUMsRUFBVixJQUFnQmpCLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUlnQixJQUFJLENBQUNBLElBQUwsQ0FBVUUsT0FBVixJQUFxQixJQUF6QixFQUErQjtBQUM3QixrREFBaUJsQixNQUFqQixFQUF5QlksR0FBekIsRUFBOEJHLElBQTlCLENBQW1DLFVBQUNDLElBQUQsRUFBVTtBQUMzQ0csWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQUwsWUFBQUEsU0FBUyxDQUFDVSxHQUFWLEdBQWdCckIsTUFBaEI7QUFDQUosWUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVllLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxXQUpEO0FBS0QsU0FORCxNQU1PLElBQUlOLElBQUksQ0FBQ0EsSUFBTCxDQUFVTyxPQUFWLElBQXFCLElBQXpCLEVBQStCO0FBQ3BDLGtEQUFpQnZCLE1BQWpCLEVBQXlCWSxHQUF6QixFQUE4QkcsSUFBOUIsQ0FBbUMsVUFBQ0MsSUFBRCxFQUFVO0FBQzNDRyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBTCxZQUFBQSxTQUFTLENBQUNVLEdBQVYsR0FBZ0JyQixNQUFoQjtBQUNBSixZQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixNQUF0QjtBQUNELFdBSkQ7QUFLRCxTQU5NLE1BTUE7QUFDTEgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNEO0FBQ0Y7QUFDRixLQWxCRCxXQWtCUyxZQUFZO0FBQ25CRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNELEtBcEJEO0FBcUJELEdBakRNO0FBa0RQSSxFQUFBQSxLQWxETyxtQkFrREMsQ0FBRSxDQWxESCxDQW9EUDs7QUFwRE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbyB9ID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7XHJcbmltcG9ydCB7XHJcbiAgZ2V0cm9vbWJ5SUQsXHJcbiAgam9pbnJvb21ieUlEYXNwMSxcclxuICBqb2lucm9vbWJ5SURhc3AyLFxyXG59IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHJvb21JRDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBQYXNzOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7fSxcclxuICBqb2luX3Jvb20oKSB7XHJcbiAgICBsZXQgUGxheWVySW5mbyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckluZm9cIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlBsYXllckluZm9cIik7XHJcbiAgICBsZXQgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcbiAgICBsZXQgdWlkID0gUGxheWVySW5mby51aWQ7XHJcbiAgICBsZXQgcm9vbUlEID0gdGhpcy5yb29tSUQuc3RyaW5nO1xyXG4gICAgbGV0IHBhc3MgPSB0aGlzLlBhc3Muc3RyaW5nO1xyXG5cclxuICAgIGdldHJvb21ieUlEKHJvb21JRCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5kYXRhLmlkID09IHJvb21JRCkge1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSA9PSBudWxsKSB7XHJcbiAgICAgICAgICBqb2lucm9vbWJ5SURhc3AxKHJvb21JRCwgdWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBSb29tSW5mb3MucmlkID0gcm9vbUlEO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuUGxheWVyMiA9PSBudWxsKSB7XHJcbiAgICAgICAgICBqb2lucm9vbWJ5SURhc3AyKHJvb21JRCwgdWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBSb29tSW5mb3MucmlkID0gcm9vbUlEO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm9vbWZ1bGwhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/RoomInfos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5bd380ExBFZokBSMnQRAp0', 'RoomInfos');
// script/room/RoomInfos.js

"use strict";

var _socket_connection = require("../socket_connection");

cc.Class({
  "extends": cc.Component,
  properties: {
    rid: null
  },
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
    var rid = this.rid;
  },
  start: function start() {},
  onDisable: function onDisable() {},
  update: function update(dt) {
    (0, _socket_connection.sendroomID)(this.rid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxSb29tSW5mb3MuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyaWQiLCJvbkxvYWQiLCJnYW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsInN0YXJ0Iiwib25EaXNhYmxlIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxHQUFHLEVBQUU7QUFESyxHQUhMO0FBT1BDLEVBQUFBLE1BUE8sb0JBT0U7QUFDUEwsSUFBQUEsRUFBRSxDQUFDTSxJQUFILENBQVFDLGtCQUFSLENBQTJCLEtBQUtDLElBQWhDO0FBQ0EsUUFBSUosR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDRCxHQVZNO0FBWVBLLEVBQUFBLEtBWk8sbUJBWUMsQ0FBRSxDQVpIO0FBYVBDLEVBQUFBLFNBYk8sdUJBYUssQ0FBRSxDQWJQO0FBY1BDLEVBQUFBLE1BZE8sa0JBY0FDLEVBZEEsRUFjSTtBQUNULHVDQUFXLEtBQUtSLEdBQWhCO0FBQ0Q7QUFoQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZHJvb21JRCB9IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgcmlkOiBudWxsLFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICBsZXQgcmlkID0gdGhpcy5yaWQ7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7fSxcclxuICBvbkRpc2FibGUoKSB7fSxcclxuICB1cGRhdGUoZHQpIHtcclxuICAgIHNlbmRyb29tSUQodGhpcy5yaWQpO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/blackchess/guardblack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ac04LOHFhOWKJbtgMiihhX', 'guardblack');
// script/board/chess/blackchess/guardblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].x >= map.blackcastleleftbound && posmove[i].x <= map.blackcastlerightbound && posmove[i].y >= map.blackcastledownbound && posmove[i].y <= map.blackcastleupbound) {
        //upright
        if (posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y + map.s) {
          posmove[i].active = true;
        } //upleft


        if (posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y + map.s) {
          posmove[i].active = true;
        } //downright


        if (posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y - map.s) {
          posmove[i].active = true;
        } //downleft


        if (posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y - map.s) {
          posmove[i].active = true;
        } //block other chess


        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
            posmove[i].active = false;
          }
        }
      } //block other chess


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
          posmove[i].active = false;
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }

      touchmove.blacktouchmove(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXGJsYWNrY2hlc3NcXGd1YXJkYmxhY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGFjZSIsInR5cGUiLCJOb2RlIiwicmVkY2hlc3MiLCJibGFja2NoZXNzIiwibWFwIiwic2hvd3Bvc3NpYmxlbW92ZSIsImdldENvbXBvbmVudCIsInRvdWNobW92ZSIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJzZWxmIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsInBhdXNlU3lzdGVtRXZlbnRzIiwieCIsImJsYWNrY2FzdGxlbGVmdGJvdW5kIiwiYmxhY2tjYXN0bGVyaWdodGJvdW5kIiwieSIsImJsYWNrY2FzdGxlZG93bmJvdW5kIiwiYmxhY2tjYXN0bGV1cGJvdW5kIiwibm9kZSIsInMiLCJqIiwiayIsInNldFNjYWxlIiwic2NhbGUiLCJibGFja3RvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJB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TUFBWCxJQUFxQixJQUYxQixFQUVpQztBQUM3QlIsVUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV2MsUUFBWCxDQUFvQnhCLEdBQUcsQ0FBQ3lCLEtBQXhCLEVBQStCekIsR0FBRyxDQUFDeUIsS0FBbkM7QUFDSDtBQUNKOztBQUNEdEIsTUFBQUEsU0FBUyxDQUFDdUIsY0FBVixDQUF5QmhCLENBQXpCO0FBQ0g7QUFDWixHQTFGSTtBQTRGTGlCLEVBQUFBLEtBNUZLLG1CQTRGSSxDQUVSLENBOUZJLENBZ0dMOztBQWhHSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGNoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93cG9zc2libGVtb3ZlKCl7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICAgICAgbGV0IHRvdWNobW92ZSA9IHRoaXMubWFwLmdldENvbXBvbmVudCgndG91Y2htb3ZlJyk7XHJcbiAgICAgICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgICAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgICAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICAgICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vZGVhY3RpdmUgYmVmb3JlIGFub3RoZXIgY2xpY2tcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9ibGFja3R1cm5cclxuICAgICAgICAgICAgICAgIHJlZGNoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9sb2dpYyBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID49IG1hcC5ibGFja2Nhc3RsZWxlZnRib3VuZCkgJiYgKHBvc21vdmVbaV0ueCA8PSBtYXAuYmxhY2tjYXN0bGVyaWdodGJvdW5kKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVtpXS55ID49IG1hcC5ibGFja2Nhc3RsZWRvd25ib3VuZCkgJiYgKHBvc21vdmVbaV0ueSA8PSBtYXAuYmxhY2tjYXN0bGV1cGJvdW5kKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VwcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS54ID09IHRoaXMubm9kZS54ICsgbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgKyBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy91cGxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS54ID09IHRoaXMubm9kZS54IC0gbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgKyBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kb3ducmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS54ID09IHRoaXMubm9kZS54ICsgbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgLSBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kb3dubGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnggPT0gdGhpcy5ub2RlLnggLSBtYXAucykgJiYgKHBvc21vdmVbaV0ueSA9PSB0aGlzLm5vZGUueSAtIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Jsb2NrIG90aGVyIGNoZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gcG9zbW92ZVtpXS54KSAmJiAocmVkY1tqXS55ID09IHBvc21vdmVbaV0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IHBvc21vdmVbaV0ueCkgJiYgKGJsYWNrY1trXS55ID09IHBvc21vdmVbaV0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vYmxvY2sgb3RoZXIgY2hlc3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IHBvc21vdmVbaV0ueCkgJiYgKGJsYWNrY1trXS55ID09IHBvc21vdmVbaV0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IHBvc21vdmVbaV0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2pdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmUuYmxhY2t0b3VjaG1vdmUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/guardred.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ad77Yi3uxFx4iaMgD6kbee', 'guardred');
// script/board/chess/redchess/guardred.js

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


    blackchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].x >= map.redcastleleftbound && posmove[i].x <= map.redcastlerightbound && posmove[i].y >= map.redcastledownbound && posmove[i].y <= map.redcastleupbound) {
        //upright
        if (posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y + map.s) {
          posmove[i].active = true;
        } //upleft


        if (posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y + map.s) {
          posmove[i].active = true;
        } //downright


        if (posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y - map.s) {
          posmove[i].active = true;
        } //downleft


        if (posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y - map.s) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxndWFyZHJlZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYWNlIiwidHlwZSIsIk5vZGUiLCJyZWRjaGVzcyIsImJsYWNrY2hlc3MiLCJtYXAiLCJzaG93cG9zc2libGVtb3ZlIiwiZ2V0Q29tcG9uZW50IiwidG91Y2htb3ZlIiwicG9zbW92ZSIsImdldENoaWxkcmVuIiwicmVkYyIsImJsYWNrYyIsInBhcmVudCIsInNlbGYiLCJpIiwibGVuZ3RoIiwiYWN0aXZlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJ4IiwicmVkY2FzdGxlbGVmdGJvdW5kIiwicmVkY2FzdGxlcmlnaHRib3VuZCIsInkiLCJyZWRjYXN0bGVkb3duYm91bmQiLCJyZWRjYXN0bGV1cGJvdW5kIiwibm9kZSIsInMiLCJqIiwiayIsInNldFNjYWxlIiwic2NhbGUiLCJyZWR0b3VjaG1vdmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRk4sS0FEQztBQUtSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBTEY7QUFTUkUsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQVRKO0FBYVJHLElBQUFBLEdBQUcsRUFBQztBQUNBLGlCQUFTLElBRFQ7QUFFQUos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Q0FBQyxFQUFwQyxFQUF3QztBQUNwQyxZQUFLaEIsTUFBTSxDQUFDZ0IsQ0FBRCxDQUFOLENBQVVULENBQVYsSUFBZVYsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBM0IsSUFDQ1AsTUFBTSxDQUFDZ0IsQ0FBRCxDQUFOLENBQVVOLENBQVYsSUFBZWIsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FEM0IsSUFFQ2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxJQUFxQixJQUYxQixFQUVpQztBQUM3QlIsVUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV2MsUUFBWCxDQUFvQnhCLEdBQUcsQ0FBQ3lCLEtBQXhCLEVBQStCekIsR0FBRyxDQUFDeUIsS0FBbkM7QUFDSDtBQUNKLE9BakNvQyxDQWtDckM7OztBQUNBdEIsTUFBQUEsU0FBUyxDQUFDdUIsWUFBVixDQUF1QmhCLENBQXZCO0FBQ0g7QUFFWixHQWpGSTtBQW1GTGlCLEVBQUFBLEtBbkZLLG1CQW1GSSxDQUVSLENBckZJLENBdUZMOztBQXZGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGNoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93cG9zc2libGVtb3ZlKCl7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICAgICAgbGV0IHRvdWNobW92ZSA9IHRoaXMubWFwLmdldENvbXBvbmVudCgndG91Y2htb3ZlJyk7XHJcbiAgICAgICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgICAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgICAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICAgICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vZGVhY3RpdmUgYmVmb3JlIGFub3RoZXIgY2xpY2tcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9yZWR0dXJuXHJcbiAgICAgICAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9sb2dpYyBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID49IG1hcC5yZWRjYXN0bGVsZWZ0Ym91bmQpICYmIChwb3Ntb3ZlW2ldLnggPD0gbWFwLnJlZGNhc3RsZXJpZ2h0Ym91bmQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW2ldLnkgPj0gbWFwLnJlZGNhc3RsZWRvd25ib3VuZCkgJiYgKHBvc21vdmVbaV0ueSA8PSBtYXAucmVkY2FzdGxldXBib3VuZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy91cHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCArIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55ICsgbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdXBsZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCAtIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55ICsgbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZG93bnJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCArIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55IC0gbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZG93bmxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS54ID09IHRoaXMubm9kZS54IC0gbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgLSBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ibG9jayBvdGhlciBjaGVzc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSBwb3Ntb3ZlW2ldLngpICYmIChyZWRjW2pdLnkgPT0gcG9zbW92ZVtpXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2hpZ2h0bGlnaHQga2lsbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IHBvc21vdmVbaV0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibGFja2Nba10ueSA9PSBwb3Ntb3ZlW2ldLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uc2V0U2NhbGUobWFwLnNjYWxlLCBtYXAuc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdG91Y2htb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlLnJlZHRvdWNobW92ZShpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/blackchess/kingblack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e90afPJzdImZBJGX5BDC+Y', 'kingblack');
// script/board/chess/blackchess/kingblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logicmove

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].x >= map.blackcastleleftbound && posmove[i].x <= map.blackcastlerightbound && posmove[i].y >= map.blackcastledownbound && posmove[i].y <= map.blackcastleupbound) {
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


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
          posmove[i].active = false;
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }

      touchmove.blacktouchmove(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXGJsYWNrY2hlc3NcXGtpbmdibGFjay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYWNlIiwidHlwZSIsIk5vZGUiLCJyZWRjaGVzcyIsImJsYWNrY2hlc3MiLCJtYXAiLCJzaG93cG9zc2libGVtb3ZlIiwiZ2V0Q29tcG9uZW50IiwidG91Y2htb3ZlIiwicG9zbW92ZSIsImdldENoaWxkcmVuIiwicmVkYyIsImJsYWNrYyIsInBhcmVudCIsInNlbGYiLCJpIiwibGVuZ3RoIiwiYWN0aXZlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJ4IiwiYmxhY2tjYXN0bGVsZWZ0Ym91bmQiLCJibGFja2Nhc3RsZXJpZ2h0Ym91bmQiLCJ5IiwiYmxhY2tjYXN0bGVkb3duYm91bmQiLCJibGFja2Nhc3RsZXVwYm91bmQiLCJub2RlIiwicyIsImsiLCJqIiwic2V0U2NhbGUiLCJzY2FsZSIsImJsYWNrdG91Y2htb3ZlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBREM7QUFLUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVORixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQUxGO0FBU1JFLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FUSjtBQWFSRyxJQUFBQSxHQUFHLEVBQUM7QUFDQSxpQkFB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LENBQVdJLENBQXpCLElBQ0NSLElBQUksQ0FBQ2lCLENBQUQsQ0FBSixDQUFRTixDQUFSLElBQWFiLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBRHpCLElBRUNiLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsSUFBcUIsSUFGMUIsRUFFaUM7QUFDN0JSLFVBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdjLFFBQVgsQ0FBb0J4QixHQUFHLENBQUN5QixLQUF4QixFQUErQnpCLEdBQUcsQ0FBQ3lCLEtBQW5DO0FBQ0g7QUFDSjs7QUFDRHRCLE1BQUFBLFNBQVMsQ0FBQ3VCLGNBQVYsQ0FBeUJoQixDQUF6QjtBQUNIO0FBQ1osR0EvRUk7QUFpRkxpQixFQUFBQSxLQWpGSyxtQkFpRkksQ0FFUixDQW5GSSxDQXFGTDs7QUFyRkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBsYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmxhY2tjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hvd3Bvc3NpYmxlbW92ZSgpe1xyXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ2JvYXJkaW5mbycpO1xyXG4gICAgICAgIGxldCB0b3VjaG1vdmUgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ3RvdWNobW92ZScpO1xyXG4gICAgICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICAgICAgdmFyIHBvc21vdmUgPSBwbGFjZS5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICAgICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBibGFja2MucGFyZW50ID0gcGxhY2U7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvL2RlYWN0aXZlIGJlZm9yZSBhbm90aGVyIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vYmxhY2t0dXJuXHJcbiAgICAgICAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vbG9naWNtb3ZlXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA+PSBtYXAuYmxhY2tjYXN0bGVsZWZ0Ym91bmQpICYmIChwb3Ntb3ZlW2ldLnggPD0gbWFwLmJsYWNrY2FzdGxlcmlnaHRib3VuZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0ueSA+PSBtYXAuYmxhY2tjYXN0bGVkb3duYm91bmQpICYmIChwb3Ntb3ZlW2ldLnkgPD0gbWFwLmJsYWNrY2FzdGxldXBib3VuZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCArIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCAtIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gdGhpcy5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgKyBtYXAucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gdGhpcy5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gdGhpcy5ub2RlLnkgLSBtYXAucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2Jsb2NrIG90aGVyIGNoZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSBwb3Ntb3ZlW2ldLngpICYmIChibGFja2Nba10ueSA9PSBwb3Ntb3ZlW2ldLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaHRsaWdodCBraWxsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSBwb3Ntb3ZlW2ldLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVkY1tqXS55ID09IHBvc21vdmVbaV0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5zZXRTY2FsZShtYXAuc2NhbGUsIG1hcC5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlLmJsYWNrdG91Y2htb3ZlKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/blackchess/rookblack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfda9tawehHXZ0kBnAOdJ3y', 'rookblack');
// script/board/chess/blackchess/rookblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //vertical
      if (posmove[i].x == this.node.x) {
        posmove[i].active = true; //verticalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y != self.node.y) {
            if (posmove[i].y > self.node.y && posmove[i].y > redc[j].y && redc[j].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < redc[j].y && redc[j].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y != self.node.y) {
            if (posmove[i].y > self.node.y && posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }
      } //horizontal


      if (posmove[i].y == this.node.y) {
        posmove[i].active = true; //horizontalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].y == self.node.y && redc[j].x != self.node.x) {
            if (posmove[i].x > self.node.x && posmove[i].x > redc[j].x && redc[j].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < redc[j].x && redc[j].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].y == self.node.y && blackc[k].x != self.node.x) {
            if (posmove[i].x > self.node.x && posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }
      } //block other chess


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
          posmove[i].active = false;
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }

      touchmove.blacktouchmove(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXGJsYWNrY2hlc3NcXHJvb2tibGFjay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYWNlIiwidHlwZSIsIk5vZGUiLCJyZWRjaGVzcyIsImJsYWNrY2hlc3MiLCJtYXAiLCJzaG93cG9zc2libGVtb3ZlIiwiZ2V0Q29tcG9uZW50IiwidG91Y2htb3ZlIiwicG9zbW92ZSIsImdldENoaWxkcmVuIiwicmVkYyIsImJsYWNrYyIsInBhcmVudCIsInNlbGYiLCJpIiwibGVuZ3RoIiwiYWN0aXZlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJ4Iiwibm9kZSIsImoiLCJ5IiwiayIsInNldFNjYWxlIiwic2NhbGUiLCJibGFja3RvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJBQVMsSUFEVDtBQUVBSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGVDtBQWJJLEdBSFA7QUFzQkxJLEVBQUFBLGdCQXRCSyw4QkFzQmE7QUFDZCxRQUFJRCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxDQUFTRSxZQUFULENBQXNCLFdBQXRCLENBQVY7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0gsR0FBTCxDQUFTRSxZQUFULENBQXNCLFdBQXRCLENBQWhCO0FBQ0EsUUFBSVAsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQ0EsUUFBSVMsT0FBTyxHQUFHVCxLQUFLLENBQUNVLFdBQU4sRUFBZDtBQUNBLFFBQUlQLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFFBQUlRLElBQUksR0FBR1IsUUFBUSxDQUFDTyxXQUFULEVBQVg7QUFDQSxRQUFJTixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7QUFDQSxRQUFJUSxNQUFNLEdBQUdSLFVBQVUsQ0FBQ00sV0FBWCxFQUFiO0FBQ0FDLElBQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjYixLQUFkO0FBQ0FZLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQmIsS0FBaEI7QUFDQWMsSUFBQUEsSUFBSSxHQUFHLElBQVAsQ0FYYyxDQVlOOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sT0FBTyxDQUFDTyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxVQUFJTixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLElBQXFCLElBQXpCLEVBQStCO0FBQzNCUixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSixLQWpCSyxDQWtCTjs7O0FBQ0FkLElBQUFBLFFBQVEsQ0FBQ2UsaUJBQVQsQ0FBMkIsSUFBM0IsRUFuQk0sQ0FvQk47O0FBQ0EsU0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixPQUFPLENBQUNPLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDO0FBQ0EsVUFBSU4sT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxJQUFnQixLQUFLQyxJQUFMLENBQVVELENBQTlCLEVBQWlDO0FBQzdCVixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCLENBRDZCLENBRTdCOztBQUNBLGFBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsSUFBSSxDQUFDSyxNQUF6QixFQUFpQ0ssQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFJVixJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRRixDQUFSLElBQWNMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUF4QixJQUErQlIsSUFBSSxDQUFDVSxDQUFELENBQUosQ0FBUUMsQ0FBUixJQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBM0QsRUFBZ0U7QUFDNUQsZ0JBQU1iLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsR0FBZVIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQTFCLElBQWlDYixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXTyxDQUFYLEdBQWVYLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLENBQVFDLENBQXhELElBQStEWCxJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRQyxDQUFSLEdBQVlSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUF0RixJQUNLYixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXTyxDQUFYLEdBQWVSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUExQixJQUFpQ2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxHQUFlWCxJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRQyxDQUF4RCxJQUErRFgsSUFBSSxDQUFDVSxDQUFELENBQUosQ0FBUUMsQ0FBUixHQUFZUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FEN0YsRUFDa0c7QUFDOUZiLGNBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxNQUFNLENBQUNJLE1BQTNCLEVBQW1DTyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUlYLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLENBQVVKLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUExQixJQUFpQ1AsTUFBTSxDQUFDVyxDQUFELENBQU4sQ0FBVUQsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQS9ELEVBQW9FO0FBQ2hFLGdCQUFNYixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXTyxDQUFYLEdBQWVSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUExQixJQUFpQ2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxHQUFlVixNQUFNLENBQUNXLENBQUQsQ0FBTixDQUFVRCxDQUExRCxJQUFpRVYsTUFBTSxDQUFDVyxDQUFELENBQU4sQ0FBVUQsQ0FBVixHQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBMUYsSUFDS2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxHQUFlUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBMUIsSUFBaUNiLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsR0FBZVYsTUFBTSxDQUFDVyxDQUFELENBQU4sQ0FBVUQsQ0FBMUQsSUFBaUVWLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLENBQVVELENBQVYsR0FBY1IsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBRGpHLEVBQ3NHO0FBQ2xHYixjQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osT0FyQm9DLENBc0JyQzs7O0FBQ0EsVUFBS1IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxJQUFnQixLQUFLRixJQUFMLENBQVVFLENBQS9CLEVBQW1DO0FBQy9CYixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCLENBRCtCLENBRS9COztBQUNBLGFBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsSUFBSSxDQUFDSyxNQUF6QixFQUFpQ0ssQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFJVixJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRQyxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUF4QixJQUErQlgsSUFBSSxDQUFDVSxDQUFELENBQUosQ0FBUUYsQ0FBUixJQUFjTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBM0QsRUFBZ0U7QUFDNUQsZ0JBQU1WLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsR0FBZUwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQTFCLElBQWlDVixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUFYLEdBQWVSLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLENBQVFGLENBQXhELElBQStEUixJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRRixDQUFSLEdBQVlMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUF0RixJQUNLVixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUFYLEdBQWVMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUExQixJQUFpQ1YsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxHQUFlUixJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRRixDQUF4RCxJQUErRFIsSUFBSSxDQUFDVSxDQUFELENBQUosQ0FBUUYsQ0FBUixHQUFZTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FEN0YsRUFDa0c7QUFDOUZWLGNBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxNQUFNLENBQUNJLE1BQTNCLEVBQW1DTyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUlYLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLENBQVVELENBQVYsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUExQixJQUFpQ1YsTUFBTSxDQUFDVyxDQUFELENBQU4sQ0FBVUosQ0FBVixJQUFnQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQS9ELEVBQW9FO0FBQ2hFLGdCQUFNVixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUFYLEdBQWVMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUExQixJQUFpQ1YsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxHQUFlUCxNQUFNLENBQUNXLENBQUQsQ0FBTixDQUFVSixDQUExRCxJQUFpRVAsTUFBTSxDQUFDVyxDQUFELENBQU4sQ0FBVUosQ0FBVixHQUFjTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBMUYsSUFDS1YsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxHQUFlTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBMUIsSUFBaUNWLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsR0FBZVAsTUFBTSxDQUFDVyxDQUFELENBQU4sQ0FBVUosQ0FBMUQsSUFBaUVQLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLENBQVVKLENBQVYsR0FBY0wsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBRGpHLEVBQ3NHO0FBQ2xHVixjQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osT0ExQ29DLENBMkNyQzs7O0FBQ0EsV0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxNQUFNLENBQUNJLE1BQTNCLEVBQW1DTyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFlBQUtYLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLENBQVVKLENBQVYsSUFBZVYsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBM0IsSUFBa0NQLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLENBQVVELENBQVYsSUFBZWIsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBaEUsRUFBb0U7QUFDaEViLFVBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKLE9BaERvQyxDQWlEckM7OztBQUNBLFdBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsSUFBSSxDQUFDSyxNQUF6QixFQUFpQ0ssQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFLVixJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRRixDQUFSLElBQWFWLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQXpCLElBQ0NSLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLENBQVFDLENBQVIsSUFBYWIsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FEekIsSUFFQ2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxJQUFxQixJQUYxQixFQUVpQztBQUM3QlIsVUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV1MsUUFBWCxDQUFvQm5CLEdBQUcsQ0FBQ29CLEtBQXhCLEVBQStCcEIsR0FBRyxDQUFDb0IsS0FBbkM7QUFDSDtBQUNKOztBQUNEakIsTUFBQUEsU0FBUyxDQUFDa0IsY0FBVixDQUF5QlgsQ0FBekI7QUFDSDtBQUNaLEdBdEdJO0FBdUdMWSxFQUFBQSxLQXZHSyxtQkF1R0ksQ0FFUixDQXpHSSxDQTJHTDs7QUEzR0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBsYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmxhY2tjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hvd3Bvc3NpYmxlbW92ZSgpe1xyXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ2JvYXJkaW5mbycpO1xyXG4gICAgICAgIGxldCB0b3VjaG1vdmUgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ3RvdWNobW92ZScpO1xyXG4gICAgICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICAgICAgdmFyIHBvc21vdmUgPSBwbGFjZS5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICAgICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBibGFja2MucGFyZW50ID0gcGxhY2U7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvL2RlYWN0aXZlIGJlZm9yZSBhbm90aGVyIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vYmxhY2t0dXJuXHJcbiAgICAgICAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vbG9naWMgbW92aW5nXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmVydGljYWxibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWRjW2pdLnggPT0gKHNlbGYubm9kZS54KSAmJiAocmVkY1tqXS55ICE9IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS55ID4gc2VsZi5ub2RlLnkpICYmIChwb3Ntb3ZlW2ldLnkgPiByZWRjW2pdLnkpICYmIChyZWRjW2pdLnkgPiBzZWxmLm5vZGUueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS55IDwgc2VsZi5ub2RlLnkpICYmIChwb3Ntb3ZlW2ldLnkgPCByZWRjW2pdLnkpICYmIChyZWRjW2pdLnkgPCBzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54KSAmJiAoYmxhY2tjW2tdLnkgIT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnkgPiBzZWxmLm5vZGUueSkgJiYgKHBvc21vdmVbaV0ueSA+IGJsYWNrY1trXS55KSAmJiAoYmxhY2tjW2tdLnkgPiBzZWxmLm5vZGUueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS55IDwgc2VsZi5ub2RlLnkpICYmIChwb3Ntb3ZlW2ldLnkgPCBibGFja2Nba10ueSkgJiYgKGJsYWNrY1trXS55IDwgc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2hvcml6b250YWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueSA9PSB0aGlzLm5vZGUueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2hvcml6b250YWxibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55KSAmJiAocmVkY1tqXS54ICE9IChzZWxmLm5vZGUueCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS54ID4gc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnggPiByZWRjW2pdLngpICYmIChyZWRjW2pdLnggPiBzZWxmLm5vZGUueCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS54IDwgc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnggPCByZWRjW2pdLngpICYmIChyZWRjW2pdLnggPCBzZWxmLm5vZGUueCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhY2tjW2tdLnkgPT0gKHNlbGYubm9kZS55KSAmJiAoYmxhY2tjW2tdLnggIT0gKHNlbGYubm9kZS54KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnggPiBzZWxmLm5vZGUueCkgJiYgKHBvc21vdmVbaV0ueCA+IGJsYWNrY1trXS54KSAmJiAoYmxhY2tjW2tdLnggPiBzZWxmLm5vZGUueCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS54IDwgc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnggPCBibGFja2Nba10ueCkgJiYgKGJsYWNrY1trXS54IDwgc2VsZi5ub2RlLngpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2Jsb2NrIG90aGVyIGNoZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSBwb3Ntb3ZlW2ldLngpICYmIChibGFja2Nba10ueSA9PSBwb3Ntb3ZlW2ldLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaHRsaWdodCBraWxsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSBwb3Ntb3ZlW2ldLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVkY1tqXS55ID09IHBvc21vdmVbaV0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5zZXRTY2FsZShtYXAuc2NhbGUsIG1hcC5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlLmJsYWNrdG91Y2htb3ZlKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/blackchess/pawnblack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e19eySbiNOfaT3h+4HmXWm', 'pawnblack');
// script/board/chess/blackchess/pawnblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logicmove

    for (var i = 0; i < posmove.length; i++) {
      if (this.node.y > map.redriver) {
        //downward
        if (posmove[i].x == self.node.x && posmove[i].y == self.node.y - map.s) {
          posmove[i].active = true;
        }
      } else if (this.node.y <= map.redriver) {
        //downward
        if (posmove[i].x == self.node.x && posmove[i].y == self.node.y - map.s) {
          posmove[i].active = true;
        } //left


        if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y) {
          posmove[i].active = true;
        } //right


        if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y) {
          posmove[i].active = true;
        }
      } //block other chess


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
          posmove[i].active = false;
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }

      touchmove.blacktouchmove(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXGJsYWNrY2hlc3NcXHBhd25ibGFjay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYWNlIiwidHlwZSIsIk5vZGUiLCJyZWRjaGVzcyIsImJsYWNrY2hlc3MiLCJtYXAiLCJzaG93cG9zc2libGVtb3ZlIiwiZ2V0Q29tcG9uZW50IiwidG91Y2htb3ZlIiwicG9zbW92ZSIsImdldENoaWxkcmVuIiwicmVkYyIsImJsYWNrYyIsInBhcmVudCIsInNlbGYiLCJpIiwibGVuZ3RoIiwiYWN0aXZlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJub2RlIiwieSIsInJlZHJpdmVyIiwieCIsInMiLCJrIiwiaiIsInNldFNjYWxlIiwic2NhbGUiLCJibGFja3RvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJBQVMsSUFEVDtBQUVBSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGVDtBQWJJLEdBSFA7QUFzQkxJLEVBQUFBLGdCQXRCSyw4QkFz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V1csUUFBWCxDQUFvQnJCLEdBQUcsQ0FBQ3NCLEtBQXhCLEVBQStCdEIsR0FBRyxDQUFDc0IsS0FBbkM7QUFDSDtBQUNKOztBQUNEbkIsTUFBQUEsU0FBUyxDQUFDb0IsY0FBVixDQUF5QmIsQ0FBekI7QUFDSDtBQUNaLEdBaEZJO0FBa0ZMYyxFQUFBQSxLQWxGSyxtQkFrRkksQ0FFUixDQXBGSSxDQXNGTDs7QUF0RkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBsYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmxhY2tjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hvd3Bvc3NpYmxlbW92ZSgpe1xyXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ2JvYXJkaW5mbycpO1xyXG4gICAgICAgIGxldCB0b3VjaG1vdmUgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ3RvdWNobW92ZScpO1xyXG4gICAgICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICAgICAgdmFyIHBvc21vdmUgPSBwbGFjZS5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICAgICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBibGFja2MucGFyZW50ID0gcGxhY2U7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvL2RlYWN0aXZlIGJlZm9yZSBhbm90aGVyIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vYmxhY2t0dXJuXHJcbiAgICAgICAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vbG9naWNtb3ZlXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgPiBtYXAucmVkcml2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kb3dud2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCkgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS55IDw9IG1hcC5yZWRyaXZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rvd253YXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54KSAmJiAocG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55IC0gbWFwLnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54IC0gbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCArIG1hcC5zKSAmJiAocG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vYmxvY2sgb3RoZXIgY2hlc3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IHBvc21vdmVbaV0ueCkgJiYgKGJsYWNrY1trXS55ID09IHBvc21vdmVbaV0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IHBvc21vdmVbaV0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2pdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmUuYmxhY2t0b3VjaG1vdmUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/blackchess/knightblack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'faf2fbxdgBPtYXqlCw9CqTs', 'knightblack');
// script/board/chess/blackchess/knightblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //move1
      if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y + map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y + map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s) {
            posmove[i].active = false;
          }
        }
      } //move2


      if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y + map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move3


      if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y - map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move4


      if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y - map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }
      } //move5


      if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y - map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }
      } //move6


      if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y - map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move7


      if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y + map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move8


      if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y + map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y + map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s) {
            posmove[i].active = false;
          }
        }
      } //block other chess


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
          posmove[i].active = false;
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }

      touchmove.blacktouchmove(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXGJsYWNrY2hlc3NcXGtuaWdodGJsYWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsInNob3dwb3NzaWJsZW1vdmUiLCJnZXRDb21wb25lbnQiLCJ0b3VjaG1vdmUiLCJwb3Ntb3ZlIiwiZ2V0Q2hpbGRyZW4iLCJyZWRjIiwiYmxhY2tjIiwicGFyZW50Iiwic2VsZiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIngiLCJub2RlIiwicyIsInkiLCJqIiwiayIsInNldFNjYWxlIiwic2NhbGUiLCJibGFja3RvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJBQVMsSUFEVDtBQUVBSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGVDtBQWJJLEdBSFA7QUFzQkxJLEVBQUFBLGdCQXRCSyw4QkFzQmE7QUFDZCxRQUFJRCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxDQUFTRSxZQUFULENBQXNCLFdBQXRCLENBQVY7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0gsR0FBTCxDQUFTRSxZQUFULENBQXNCLFdBQXRCLENBQWhCO0FBQ0EsUUFBSVAsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQ0EsUUFBSVMsT0FBTyxHQUFHVCxLQUFLLENBQUNVLFdBQU4sRUFBZDtBQUNBLFFBQUlQLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFFBQUlRLElBQUksR0FBR1IsUUFBUSxDQUFDTyxXQUFULEVBQVg7QUFDQSxRQUFJTixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7QUFDQSxRQUFJUSxNQUFNLEdBQUdSLFVBQVUsQ0FBQ00sV0FBWCxFQUFiO0FBQ0FDLElBQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjYixLQUFkO0FBQ0FZLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQmIsS0FBaEI7QUFDQWMsSUFBQUEsSUFBSSxHQUFHLElBQVAsQ0FYYyxDQVlOOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sT0FBTyxDQUFDTyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxVQUFJTixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLElBQXFCLElBQXpCLEVBQStCO0FBQzNCUixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSixLQWpCSyxDQWtCTjs7O0FBQ0FkLElBQUFBLFFBQVEsQ0FBQ2UsaUJBQVQsQ0FBMkIsSUFBM0IsRUFuQk0sQ0FvQk47O0FBQ0EsU0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixPQUFPLENBQUNPLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDO0FBQ0EsVUFBS04sT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxJQUFnQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQVYsR0FBY2QsR0FBRyxDQUFDZ0IsQ0FBbkMsSUFBMENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBcEYsRUFBd0Y7QUFDcEZaLFFBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsSUFBcEI7O0FBQ0EsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixJQUFJLENBQUNLLE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQUtaLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFKLENBQVIsSUFBY0wsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQXpCLElBQWlDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFyRSxFQUEwRTtBQUN0RVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUEzQixJQUFtQ1AsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXpFLEVBQThFO0FBQzFFWixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BZG9DLENBZXJDOzs7QUFDQSxVQUFLUixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUFYLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBdkMsSUFBOENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFwRixFQUF3RjtBQUNwRlosUUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixJQUFwQjs7QUFDQSxhQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNPLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBS1osSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUosQ0FBUixJQUFjTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFqQyxJQUF5Q1YsSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUQsQ0FBUixJQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBckUsRUFBMEU7QUFDdEViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKOztBQUNELGFBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDSSxNQUEzQixFQUFtQ1EsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxjQUFLWixNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVTCxDQUFWLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFuQyxJQUEyQ1QsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQXpFLEVBQThFO0FBQzFFYixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BNUJvQyxDQTZCckM7OztBQUNBLFVBQUtSLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQUosR0FBUSxDQUF2QyxJQUE4Q1osT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXBGLEVBQXdGO0FBQ3BGWixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCOztBQUNBLGFBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFLWixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRSixDQUFSLElBQWNMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQWpDLElBQXlDVixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFyRSxFQUEwRTtBQUN0RWIsWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQW5DLElBQTJDVCxNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVRixDQUFWLElBQWdCUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBekUsRUFBOEU7QUFDMUViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKO0FBQ0osT0ExQ29DLENBMkNyQzs7O0FBQ0EsVUFBS1IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxJQUFnQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQVYsR0FBY2QsR0FBRyxDQUFDZ0IsQ0FBbkMsSUFBMENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBcEYsRUFBd0Y7QUFDcEZaLFFBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsSUFBcEI7O0FBQ0EsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixJQUFJLENBQUNLLE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQUtaLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFKLENBQVIsSUFBY0wsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQXpCLElBQWlDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFyRSxFQUEwRTtBQUN0RVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUEzQixJQUFtQ1AsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXpFLEVBQThFO0FBQzFFWixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BeERvQyxDQXlEckM7OztBQUNBLFVBQUtSLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQW5DLElBQTBDWixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXTyxDQUFYLElBQWdCUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBVixHQUFjakIsR0FBRyxDQUFDZ0IsQ0FBSixHQUFRLENBQXBGLEVBQXdGO0FBQ3BGWixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCOztBQUNBLGFBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFLWixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRSixDQUFSLElBQWNMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUF6QixJQUFpQ1IsSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUQsQ0FBUixJQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBVixHQUFjakIsR0FBRyxDQUFDZ0IsQ0FBckUsRUFBMEU7QUFDdEVaLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKOztBQUNELGFBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDSSxNQUEzQixFQUFtQ1EsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxjQUFLWixNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVTCxDQUFWLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBM0IsSUFBbUNQLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVGLENBQVYsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUF6RSxFQUE4RTtBQUMxRVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7QUFDSixPQXRFb0MsQ0F1RXJDOzs7QUFDQSxVQUFLUixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUFYLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBdkMsSUFBOENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFwRixFQUF3RjtBQUNwRlosUUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixJQUFwQjs7QUFDQSxhQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNPLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBS1osSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUosQ0FBUixJQUFjTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFqQyxJQUF5Q1YsSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUQsQ0FBUixJQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBckUsRUFBMEU7QUFDdEViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKOztBQUNELGFBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDSSxNQUEzQixFQUFtQ1EsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxjQUFLWixNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVTCxDQUFWLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFuQyxJQUEyQ1QsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQXpFLEVBQThFO0FBQzFFYixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BcEZvQyxDQXFGckM7OztBQUNBLFVBQUtSLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQUosR0FBUSxDQUF2QyxJQUE4Q1osT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXBGLEVBQXdGO0FBQ3BGWixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCOztBQUNBLGFBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFLWixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRSixDQUFSLElBQWNMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQWpDLElBQXlDVixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFyRSxFQUEwRTtBQUN0RWIsWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQW5DLElBQTJDVCxNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVRixDQUFWLElBQWdCUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBekUsRUFBOEU7QUFDMUViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKO0FBQ0osT0FsR29DLENBbUdyQzs7O0FBQ0EsVUFBS1IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxJQUFnQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQVYsR0FBY2QsR0FBRyxDQUFDZ0IsQ0FBbkMsSUFBMENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBcEYsRUFBd0Y7QUFDcEZaLFFBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsSUFBcEI7O0FBQ0EsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixJQUFJLENBQUNLLE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQUtaLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFKLENBQVIsSUFBY0wsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQXpCLElBQWlDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFyRSxFQUEwRTtBQUN0RVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUEzQixJQUFtQ1AsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXpFLEVBQThFO0FBQzFFWixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BaEhvQyxDQWlIckM7OztBQUNBLFdBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDSSxNQUEzQixFQUFtQ1EsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxZQUFLWixNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVTCxDQUFWLElBQWVWLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQTNCLElBQWtDUCxNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVRixDQUFWLElBQWViLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQWhFLEVBQW9FO0FBQ2hFYixVQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSixPQXRIb0MsQ0F1SHJDOzs7QUFDQSxXQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNPLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBS1osSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUosQ0FBUixJQUFhVixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUF6QixJQUNDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWFiLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBRHpCLElBRUNiLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsSUFBcUIsSUFGMUIsRUFFaUM7QUFDN0JSLFVBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdVLFFBQVgsQ0FBb0JwQixHQUFHLENBQUNxQixLQUF4QixFQUErQnJCLEdBQUcsQ0FBQ3FCLEtBQW5DO0FBQ0g7QUFDSjs7QUFDRGxCLE1BQUFBLFNBQVMsQ0FBQ21CLGNBQVYsQ0FBeUJaLENBQXpCO0FBQ0g7QUFDWixHQTVLSTtBQTZLTGEsRUFBQUEsS0E3S0ssbUJBNktJLENBRVIsQ0EvS0ksQ0FpTEw7O0FBakxLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwbGFjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkY2hlc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJsYWNrY2hlc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFwOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dwb3NzaWJsZW1vdmUoKXtcclxuICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KCdib2FyZGluZm8nKTtcclxuICAgICAgICBsZXQgdG91Y2htb3ZlID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KCd0b3VjaG1vdmUnKTtcclxuICAgICAgICB2YXIgcGxhY2UgPSB0aGlzLnBsYWNlO1xyXG4gICAgICAgIHZhciBwb3Ntb3ZlID0gcGxhY2UuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgICAgIHZhciByZWRjID0gcmVkY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgYmxhY2tjaGVzcyA9IHRoaXMuYmxhY2tjaGVzcztcclxuICAgICAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHJlZGMucGFyZW50ID0gcGxhY2U7XHJcbiAgICAgICAgYmxhY2tjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgLy9kZWFjdGl2ZSBiZWZvcmUgYW5vdGhlciBjbGlja1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3Ntb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2JsYWNrdHVyblxyXG4gICAgICAgICAgICAgICAgcmVkY2hlc3MucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2xvZ2ljIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3Ntb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb3ZlMVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54ICsgbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAucyAqIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLngpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSArIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IChzZWxmLm5vZGUueCkpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkgKyBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL21vdmUyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggKyBtYXAucyAqIDIpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IChzZWxmLm5vZGUueCArIG1hcC5zKSkgJiYgKHJlZGNbal0ueSA9PSAoc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54ICsgbWFwLnMpKSAmJiAoYmxhY2tjW2tdLnkgPT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbW92ZTNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCArIG1hcC5zICogMikgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gKHNlbGYubm9kZS54ICsgbWFwLnMpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSAoc2VsZi5ub2RlLnggKyBtYXAucykpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb3ZlNFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54ICsgbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgLSBtYXAucyAqIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLngpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSAtIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IChzZWxmLm5vZGUueCkpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkgLSBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL21vdmU1XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggLSBtYXAucykgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zICogMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IChzZWxmLm5vZGUueCkpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55IC0gbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54KSkgJiYgKGJsYWNrY1trXS55ID09IChzZWxmLm5vZGUueSAtIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbW92ZTZcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCAtIG1hcC5zICogMikgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gKHNlbGYubm9kZS54IC0gbWFwLnMpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb3ZlN1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54IC0gbWFwLnMgKiAyKSAmJiAocG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55ICsgbWFwLnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IChzZWxmLm5vZGUueCAtIG1hcC5zKSkgJiYgKGJsYWNrY1trXS55ID09IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL21vdmU4XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggLSBtYXAucykgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSArIG1hcC5zICogMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IChzZWxmLm5vZGUueCkpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55ICsgbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54KSkgJiYgKGJsYWNrY1trXS55ID09IChzZWxmLm5vZGUueSArIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vYmxvY2sgb3RoZXIgY2hlc3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IHBvc21vdmVbaV0ueCkgJiYgKGJsYWNrY1trXS55ID09IHBvc21vdmVbaV0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IHBvc21vdmVbaV0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2pdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmUuYmxhY2t0b3VjaG1vdmUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/blackchess/bishopblack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62a26O07qtAP7+GE30OyJDk', 'bishopblack');
// script/board/chess/blackchess/bishopblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logicmove

    for (var i = 0; i < posmove.length; i++) {
      if (posmove[i].y >= map.blackriver) {
        console.log(map.blackriver); //upright

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


        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
            posmove[i].active = false;
          }
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      } //touchmove


      touchmove.blacktouchmove(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXGJsYWNrY2hlc3NcXGJpc2hvcGJsYWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsInNob3dwb3NzaWJsZW1vdmUiLCJnZXRDb21wb25lbnQiLCJ0b3VjaG1vdmUiLCJwb3Ntb3ZlIiwiZ2V0Q2hpbGRyZW4iLCJyZWRjIiwiYmxhY2tjIiwicGFyZW50Iiwic2VsZiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsInkiLCJibGFja3JpdmVyIiwiY29uc29sZSIsImxvZyIsIngiLCJub2RlIiwicyIsImoiLCJrIiwic2V0U2NhbGUiLCJzY2FsZSIsImJsYWNrdG91Y2htb3ZlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBREM7QUFLUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVORixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQUxGO0FBU1JFLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FUSjtBQWFSRyxJQUFBQSxHQUFHLEVBQUM7QUFDQSxpQkFBUyxJQURUO0FBRUFKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZUO0FBYkksR0FIUDtBQXNC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b0U7QUFDaEVWLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKO0FBQ0osT0FqRW9DLENBa0VyQzs7O0FBQ0EsV0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZixJQUFJLENBQUNLLE1BQXpCLEVBQWlDVSxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQUtmLElBQUksQ0FBQ2UsQ0FBRCxDQUFKLENBQVFILENBQVIsSUFBYWQsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV1EsQ0FBekIsSUFDQ1osSUFBSSxDQUFDZSxDQUFELENBQUosQ0FBUVAsQ0FBUixJQUFhVixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUR6QixJQUVDVixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLElBQXFCLElBRjFCLEVBRWlDO0FBQzdCUixVQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXYSxRQUFYLENBQW9CdkIsR0FBRyxDQUFDd0IsS0FBeEIsRUFBK0J4QixHQUFHLENBQUN3QixLQUFuQztBQUNIO0FBQ0osT0F6RW9DLENBMEVyQzs7O0FBQ0FyQixNQUFBQSxTQUFTLENBQUNzQixjQUFWLENBQXlCZixDQUF6QjtBQUNIO0FBQ1osR0F4SEk7QUEwSExnQixFQUFBQSxLQTFISyxtQkEwSEksQ0FFUixDQTVISSxDQThITDs7QUE5SEssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBsYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmxhY2tjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hvd3Bvc3NpYmxlbW92ZSgpe1xyXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ2JvYXJkaW5mbycpO1xyXG4gICAgICAgIGxldCB0b3VjaG1vdmUgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ3RvdWNobW92ZScpO1xyXG4gICAgICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICAgICAgdmFyIHBvc21vdmUgPSBwbGFjZS5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICAgICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBibGFja2MucGFyZW50ID0gcGxhY2U7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvL2RlYWN0aXZlIGJlZm9yZSBhbm90aGVyIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vYmxhY2t0dXJuXHJcbiAgICAgICAgICAgICAgICByZWRjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vbG9naWNtb3ZlXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS55ID49IG1hcC5ibGFja3JpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hcC5ibGFja3JpdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VwcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gKHNlbGYubm9kZS54ICsgbWFwLnMgKiAyKSkgJiYgKHBvc21vdmVbaV0ueSA9PSAoc2VsZi5ub2RlLnkgKyBtYXAucyAqIDIpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gKHNlbGYubm9kZS54ICsgbWFwLnMpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSArIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54ICsgbWFwLnMpKSAmJiAoYmxhY2tjW2tdLnkgPT0gKHNlbGYubm9kZS55ICsgbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VwbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucyAqIDIpKSAmJiAocG9zbW92ZVtpXS55ID09IChzZWxmLm5vZGUueSArIG1hcC5zICogMikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55ICsgbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkgKyBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZG93bnJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IChzZWxmLm5vZGUueCArIG1hcC5zICogMikpICYmIChwb3Ntb3ZlW2ldLnkgPT0gKHNlbGYubm9kZS55IC0gbWFwLnMgKiAyKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IChzZWxmLm5vZGUueCArIG1hcC5zKSkgJiYgKHJlZGNbal0ueSA9PSAoc2VsZi5ub2RlLnkgLSBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IChzZWxmLm5vZGUueCArIG1hcC5zKSkgJiYgKGJsYWNrY1trXS55ID09IChzZWxmLm5vZGUueSAtIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kb3dubGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucyAqIDIpKSAmJiAocG9zbW92ZVtpXS55ID09IChzZWxmLm5vZGUueSAtIG1hcC5zICogMikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55IC0gbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkgLSBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYmxvY2sgb3RoZXIgY2hlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gcG9zbW92ZVtpXS54KSAmJiAoYmxhY2tjW2tdLnkgPT0gcG9zbW92ZVtpXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IHBvc21vdmVbaV0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2pdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL3RvdWNobW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZS5ibGFja3RvdWNobW92ZShpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/knightred.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f145daB5ZBLbJJJAUqjOzMK', 'knightred');
// script/board/chess/redchess/knightred.js

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


    blackchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //move1
      if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y + map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y + map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s) {
            posmove[i].active = false;
          }
        }
      } //move2


      if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y + map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move3


      if (posmove[i].x == self.node.x + map.s * 2 && posmove[i].y == self.node.y - map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x + map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move4


      if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y - map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }
      } //move5


      if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y - map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s) {
            posmove[i].active = false;
          }
        }
      } //move6


      if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y - map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move7


      if (posmove[i].x == self.node.x - map.s * 2 && posmove[i].y == self.node.y + map.s) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x - map.s && redc[j].y == self.node.y) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y) {
            posmove[i].active = false;
          }
        }
      } //move8


      if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y + map.s * 2) {
        posmove[i].active = true;

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y == self.node.y + map.s) {
            posmove[i].active = false;
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxrbmlnaHRyZWQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGFjZSIsInR5cGUiLCJOb2RlIiwicmVkY2hlc3MiLCJibGFja2NoZXNzIiwibWFwIiwic2hvd3Bvc3NpYmxlbW92ZSIsImdldENvbXBvbmVudCIsInRvdWNobW92ZSIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJzZWxmIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsInBhdXNlU3lzdGVtRXZlbnRzIiwieCIsIm5vZGUiLCJzIiwieSIsImoiLCJrIiwic2V0U2NhbGUiLCJzY2FsZSIsInJlZHRvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJBQVMsSUFEVDtBQUVBSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGVDtBQWJJLEdBSFA7QUFzQkxJLEVBQUFBLGdCQXRCSyw4QkFzQmE7QUFDZCxRQUFJRCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxDQUFTRSxZQUFULENBQXNCLFdBQXRCLENBQVY7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0gsR0FBTCxDQUFTRSxZQUFULENBQXNCLFdBQXRCLENBQWhCO0FBQ0EsUUFBSVAsS0FBSyxHQUFHLEtBQUtBLEtBQWpCO0FBQ0EsUUFBSVMsT0FBTyxHQUFHVCxLQUFLLENBQUNVLFdBQU4sRUFBZDtBQUNBLFFBQUlQLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFFBQUlRLElBQUksR0FBR1IsUUFBUSxDQUFDTyxXQUFULEVBQVg7QUFDQSxRQUFJTixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7QUFDQSxRQUFJUSxNQUFNLEdBQUdSLFVBQVUsQ0FBQ00sV0FBWCxFQUFiO0FBQ0FDLElBQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjYixLQUFkO0FBQ0FZLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQmIsS0FBaEI7QUFDQWMsSUFBQUEsSUFBSSxHQUFHLElBQVAsQ0FYYyxDQVlOOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sT0FBTyxDQUFDTyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxVQUFJTixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLElBQXFCLElBQXpCLEVBQStCO0FBQzNCUixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSixLQWpCSyxDQWtCTjs7O0FBQ0FiLElBQUFBLFVBQVUsQ0FBQ2MsaUJBQVgsQ0FBNkIsSUFBN0IsRUFuQk0sQ0FvQk47O0FBQ0EsU0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixPQUFPLENBQUNPLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDO0FBQ0EsVUFBS04sT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxJQUFnQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQVYsR0FBY2QsR0FBRyxDQUFDZ0IsQ0FBbkMsSUFBMENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBcEYsRUFBd0Y7QUFDcEZaLFFBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsSUFBcEI7O0FBQ0EsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixJQUFJLENBQUNLLE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQUtaLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFKLENBQVIsSUFBY0wsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQXpCLElBQWlDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFyRSxFQUEwRTtBQUN0RVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUEzQixJQUFtQ1AsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXpFLEVBQThFO0FBQzFFWixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BZG9DLENBZXJDOzs7QUFDQSxVQUFLUixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUFYLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBdkMsSUFBOENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFwRixFQUF3RjtBQUNwRlosUUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixJQUFwQjs7QUFDQSxhQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNPLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBS1osSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUosQ0FBUixJQUFjTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFqQyxJQUF5Q1YsSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUQsQ0FBUixJQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBckUsRUFBMEU7QUFDdEViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKOztBQUNELGFBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDSSxNQUEzQixFQUFtQ1EsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxjQUFLWixNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVTCxDQUFWLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFuQyxJQUEyQ1QsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQXpFLEVBQThFO0FBQzFFYixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BNUJvQyxDQTZCckM7OztBQUNBLFVBQUtSLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQUosR0FBUSxDQUF2QyxJQUE4Q1osT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXBGLEVBQXdGO0FBQ3BGWixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCOztBQUNBLGFBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFLWixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRSixDQUFSLElBQWNMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQWpDLElBQXlDVixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFyRSxFQUEwRTtBQUN0RWIsWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQW5DLElBQTJDVCxNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVRixDQUFWLElBQWdCUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBekUsRUFBOEU7QUFDMUViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKO0FBQ0osT0ExQ29DLENBMkNyQzs7O0FBQ0EsVUFBS1IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxJQUFnQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQVYsR0FBY2QsR0FBRyxDQUFDZ0IsQ0FBbkMsSUFBMENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBcEYsRUFBd0Y7QUFDcEZaLFFBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsSUFBcEI7O0FBQ0EsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixJQUFJLENBQUNLLE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQUtaLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFKLENBQVIsSUFBY0wsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQXpCLElBQWlDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFyRSxFQUEwRTtBQUN0RVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUEzQixJQUFtQ1AsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXpFLEVBQThFO0FBQzFFWixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BeERvQyxDQXlEckM7OztBQUNBLFVBQUtSLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQW5DLElBQTBDWixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXTyxDQUFYLElBQWdCUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBVixHQUFjakIsR0FBRyxDQUFDZ0IsQ0FBSixHQUFRLENBQXBGLEVBQXdGO0FBQ3BGWixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCOztBQUNBLGFBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFLWixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRSixDQUFSLElBQWNMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUF6QixJQUFpQ1IsSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUQsQ0FBUixJQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBVixHQUFjakIsR0FBRyxDQUFDZ0IsQ0FBckUsRUFBMEU7QUFDdEVaLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKOztBQUNELGFBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDSSxNQUEzQixFQUFtQ1EsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxjQUFLWixNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVTCxDQUFWLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBM0IsSUFBbUNQLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVGLENBQVYsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUF6RSxFQUE4RTtBQUMxRVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7QUFDSixPQXRFb0MsQ0F1RXJDOzs7QUFDQSxVQUFLUixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUFYLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBdkMsSUFBOENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFwRixFQUF3RjtBQUNwRlosUUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixJQUFwQjs7QUFDQSxhQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNPLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBS1osSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUosQ0FBUixJQUFjTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFqQyxJQUF5Q1YsSUFBSSxDQUFDWSxDQUFELENBQUosQ0FBUUQsQ0FBUixJQUFjUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBckUsRUFBMEU7QUFDdEViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKOztBQUNELGFBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDSSxNQUEzQixFQUFtQ1EsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxjQUFLWixNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVTCxDQUFWLElBQWdCTCxJQUFJLENBQUNNLElBQUwsQ0FBVUQsQ0FBVixHQUFjZCxHQUFHLENBQUNnQixDQUFuQyxJQUEyQ1QsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQXpFLEVBQThFO0FBQzFFYixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BcEZvQyxDQXFGckM7OztBQUNBLFVBQUtSLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQVgsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQUosR0FBUSxDQUF2QyxJQUE4Q1osT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBWCxJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXBGLEVBQXdGO0FBQ3BGWixRQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLElBQXBCOztBQUNBLGFBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFLWixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRSixDQUFSLElBQWNMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQWpDLElBQXlDVixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFyRSxFQUEwRTtBQUN0RWIsWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUFWLEdBQWNkLEdBQUcsQ0FBQ2dCLENBQW5DLElBQTJDVCxNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVRixDQUFWLElBQWdCUixJQUFJLENBQUNNLElBQUwsQ0FBVUUsQ0FBekUsRUFBOEU7QUFDMUViLFlBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKO0FBQ0osT0FsR29DLENBbUdyQzs7O0FBQ0EsVUFBS1IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0ksQ0FBWCxJQUFnQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQVYsR0FBY2QsR0FBRyxDQUFDZ0IsQ0FBbkMsSUFBMENaLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQVgsSUFBZ0JSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFKLEdBQVEsQ0FBcEYsRUFBd0Y7QUFDcEZaLFFBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsSUFBcEI7O0FBQ0EsYUFBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixJQUFJLENBQUNLLE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQUtaLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFKLENBQVIsSUFBY0wsSUFBSSxDQUFDTSxJQUFMLENBQVVELENBQXpCLElBQWlDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWNSLElBQUksQ0FBQ00sSUFBTCxDQUFVRSxDQUFWLEdBQWNqQixHQUFHLENBQUNnQixDQUFyRSxFQUEwRTtBQUN0RVosWUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixNQUFNLENBQUNJLE1BQTNCLEVBQW1DUSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLGNBQUtaLE1BQU0sQ0FBQ1ksQ0FBRCxDQUFOLENBQVVMLENBQVYsSUFBZ0JMLElBQUksQ0FBQ00sSUFBTCxDQUFVRCxDQUEzQixJQUFtQ1AsTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUYsQ0FBVixJQUFnQlIsSUFBSSxDQUFDTSxJQUFMLENBQVVFLENBQVYsR0FBY2pCLEdBQUcsQ0FBQ2dCLENBQXpFLEVBQThFO0FBQzFFWixZQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BaEhvQyxDQWlIckM7OztBQUNBLFdBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFLWixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRSixDQUFSLElBQWFWLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQXpCLElBQWdDUixJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRCxDQUFSLElBQWFiLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBQTVELEVBQWdFO0FBQzVEYixVQUFBQSxPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSixPQXRIb0MsQ0F1SHJDOzs7QUFDQSxXQUFLLElBQUlPLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNRLENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsWUFBS1osTUFBTSxDQUFDWSxDQUFELENBQU4sQ0FBVUwsQ0FBVixJQUFlVixPQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXSSxDQUEzQixJQUNDUCxNQUFNLENBQUNZLENBQUQsQ0FBTixDQUFVRixDQUFWLElBQWViLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdPLENBRDNCLElBRUNiLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsSUFBcUIsSUFGMUIsRUFFaUM7QUFDN0JSLFVBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdVLFFBQVgsQ0FBb0JwQixHQUFHLENBQUNxQixLQUF4QixFQUErQnJCLEdBQUcsQ0FBQ3FCLEtBQW5DO0FBQ0g7QUFDSixPQTlIb0MsQ0ErSHJDOzs7QUFDQWxCLE1BQUFBLFNBQVMsQ0FBQ21CLFlBQVYsQ0FBdUJaLENBQXZCO0FBQ0g7QUFDWixHQTdLSTtBQThLTGEsRUFBQUEsS0E5S0ssbUJBOEtJLENBRVIsQ0FoTEksQ0FrTEw7O0FBbExLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwbGFjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkY2hlc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJsYWNrY2hlc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFwOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dwb3NzaWJsZW1vdmUoKXtcclxuICAgICAgICBsZXQgbWFwID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KCdib2FyZGluZm8nKTtcclxuICAgICAgICBsZXQgdG91Y2htb3ZlID0gdGhpcy5tYXAuZ2V0Q29tcG9uZW50KCd0b3VjaG1vdmUnKTtcclxuICAgICAgICB2YXIgcGxhY2UgPSB0aGlzLnBsYWNlO1xyXG4gICAgICAgIHZhciBwb3Ntb3ZlID0gcGxhY2UuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgcmVkY2hlc3MgPSB0aGlzLnJlZGNoZXNzO1xyXG4gICAgICAgIHZhciByZWRjID0gcmVkY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgYmxhY2tjaGVzcyA9IHRoaXMuYmxhY2tjaGVzcztcclxuICAgICAgICB2YXIgYmxhY2tjID0gYmxhY2tjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHJlZGMucGFyZW50ID0gcGxhY2U7XHJcbiAgICAgICAgYmxhY2tjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgLy9kZWFjdGl2ZSBiZWZvcmUgYW5vdGhlciBjbGlja1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3Ntb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3JlZHR1cm5cclxuICAgICAgICAgICAgICAgIGJsYWNrY2hlc3MucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2xvZ2ljIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3Ntb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb3ZlMVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54ICsgbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAucyAqIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLngpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSArIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IChzZWxmLm5vZGUueCkpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkgKyBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL21vdmUyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggKyBtYXAucyAqIDIpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IChzZWxmLm5vZGUueCArIG1hcC5zKSkgJiYgKHJlZGNbal0ueSA9PSAoc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54ICsgbWFwLnMpKSAmJiAoYmxhY2tjW2tdLnkgPT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbW92ZTNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCArIG1hcC5zICogMikgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gKHNlbGYubm9kZS54ICsgbWFwLnMpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSAoc2VsZi5ub2RlLnggKyBtYXAucykpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb3ZlNFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54ICsgbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgLSBtYXAucyAqIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLngpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSAtIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IChzZWxmLm5vZGUueCkpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkgLSBtYXAucykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL21vdmU1XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggLSBtYXAucykgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zICogMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IChzZWxmLm5vZGUueCkpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55IC0gbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54KSkgJiYgKGJsYWNrY1trXS55ID09IChzZWxmLm5vZGUueSAtIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbW92ZTZcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCAtIG1hcC5zICogMikgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSAtIG1hcC5zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gKHNlbGYubm9kZS54IC0gbWFwLnMpKSAmJiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb3ZlN1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54IC0gbWFwLnMgKiAyKSAmJiAocG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55ICsgbWFwLnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLnggLSBtYXAucykpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IChzZWxmLm5vZGUueCAtIG1hcC5zKSkgJiYgKGJsYWNrY1trXS55ID09IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL21vdmU4XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggLSBtYXAucykgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSArIG1hcC5zICogMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IChzZWxmLm5vZGUueCkpICYmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55ICsgbWFwLnMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54KSkgJiYgKGJsYWNrY1trXS55ID09IChzZWxmLm5vZGUueSArIG1hcC5zKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vYmxvY2sgb3RoZXIgY2hlc3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gcG9zbW92ZVtpXS54KSAmJiAocmVkY1tqXS55ID09IHBvc21vdmVbaV0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSBwb3Ntb3ZlW2ldLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2tdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL3RvdWNobW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZS5yZWR0b3VjaG1vdmUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/canonred.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a789882iK9Jo69btjQNDQVl', 'canonred');
// script/board/chess/redchess/canonred.js

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


    blackchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //vertical
      if (posmove[i].x == self.node.x) {
        posmove[i].active = true; //verticalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y != self.node.y) {
            if (posmove[i].y > redc[j].y && redc[j].y > self.node.y || posmove[i].y < redc[j].y && redc[j].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y != self.node.y) {
            if (posmove[i].y >= blackc[k].y && blackc[k].y > self.node.y || posmove[i].y <= blackc[k].y && blackc[k].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }
      } //horizontal


      if (posmove[i].y == self.node.y) {
        posmove[i].active = true; //horizontalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].y == self.node.y && redc[j].x != self.node.x) {
            if (posmove[i].x > redc[j].x && redc[j].x > self.node.x || posmove[i].x < redc[j].x && redc[j].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].y == self.node.y && blackc[k].x != self.node.x) {
            if (posmove[i].x >= blackc[k].x && blackc[k].x > self.node.x || posmove[i].x <= blackc[k].x && blackc[k].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }
      } //canonshot
      //up


      if (posmove[i].x == self.node.x && posmove[i].y > self.node.y) {
        for (var k = 0; k < blackc.length; k++) {
          if (posmove[i].x == blackc[k].x && posmove[i].y == blackc[k].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.y < redc[bipod].y && redc[bipod].y < blackc[k].y && redc[bipod].x == self.node.x) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.y < blackc[bipod].y && blackc[bipod].y < blackc[k].y && blackc[bipod].x == self.node.x) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = 0; target < posmove.length; target++) {
                for (var k = 0; k < blackc.length; k++) {
                  if (posmove[i].y > posmove[target].y && posmove[target].y > self.node.y && posmove[target].x == blackc[k].x && posmove[target].y == blackc[k].y) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //right


      if (posmove[i].y == self.node.y && posmove[i].x > self.node.x) {
        for (var k = 0; k < blackc.length; k++) {
          if (posmove[i].x == blackc[k].x && posmove[i].y == blackc[k].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.x < redc[bipod].x && redc[bipod].x < blackc[k].x && redc[bipod].y == self.node.y) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.x < blackc[bipod].x && blackc[bipod].x < blackc[k].x && blackc[bipod].y == self.node.y) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = 0; target < posmove.length; target++) {
                for (var k = 0; k < blackc.length; k++) {
                  if (posmove[i].x > posmove[target].x && posmove[target].x > self.node.x && posmove[target].y == blackc[k].y && posmove[target].x == blackc[k].x) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
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
    } // down and left canon shots


    for (var i = posmove.length - 1; i >= 0; i--) {
      //canonshot
      //down
      if (posmove[i].x == self.node.x && posmove[i].y < self.node.y) {
        for (var k = 0; k < blackc.length; k++) {
          if (posmove[i].x == blackc[k].x && posmove[i].y == blackc[k].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.y > redc[bipod].y && redc[bipod].y > blackc[k].y && redc[bipod].x == self.node.x) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.y > blackc[bipod].y && blackc[bipod].y > blackc[k].y && blackc[bipod].x == self.node.x) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = posmove.length - 1; target >= 0; target--) {
                for (var k = 0; k < blackc.length; k++) {
                  if (posmove[i].y < posmove[target].y && posmove[target].y < self.node.y && posmove[target].x == blackc[k].x && posmove[target].y == blackc[k].y) {
                    if (posmove[target].active == true) {
                      console.log('reach black target');
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //left


      if (posmove[i].y == self.node.y && posmove[i].x < self.node.x) {
        for (var k = 0; k < blackc.length; k++) {
          if (posmove[i].y == blackc[k].y && posmove[i].x == blackc[k].x) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.x > redc[bipod].x && redc[bipod].x > blackc[k].x && redc[bipod].y == self.node.y) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.x > blackc[bipod].x && blackc[bipod].x > blackc[k].x && blackc[bipod].y == self.node.y) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = posmove.length - 1; target >= 0; target--) {
                for (var k = 0; k < blackc.length; k++) {
                  if (posmove[i].x < posmove[target].x && posmove[target].x < self.node.x && posmove[target].y == blackc[k].y && posmove[target].x == blackc[k].x) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //hightlight killable


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }
    }

    for (var i = 0; i < posmove.length; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxjYW5vbnJlZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYWNlIiwidHlwZSIsIk5vZGUiLCJyZWRjaGVzcyIsImJsYWNrY2hlc3MiLCJtYXAiLCJzaG93cG9zc2libGVtb3ZlIiwiZ2V0Q29tcG9uZW50IiwidG91Y2htb3ZlIiwicG9zbW92ZSIsImdldENoaWxkcmVuIiwicmVkYyIsImJsYWNrYyIsInBhcmVudCIsInNlbGYiLCJpIiwibGVuZ3RoIiwiYWN0aXZlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJ4Iiwibm9kZSIsImoiLCJ5IiwiayIsImJpcG9kIiwidGFyZ2V0Iiwic2V0U2NhbGUiLCJzY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJyZWR0b3VjaG1vdmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRk4sS0FEQztBQUtSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBTEY7QUFTUkUsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQVRKO0FBYVJHLElBQUFBLEdBQUcsRUFBQztBQUNBLGlCQUFTLElBRFQ7QUFFQUosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlQ7QUFiSSxHQUhQO0FBc0JMSSxFQUFB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LENBQXZCO0FBQ0g7QUFFWixHQXZSSTtBQXlSTGdCLEVBQUFBLEtBelJLLG1CQXlSSSxDQUVSLENBM1JJLENBNlJMOztBQTdSSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGNoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93cG9zc2libGVtb3ZlKCl7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICAgICAgbGV0IHRvdWNobW92ZSA9IHRoaXMubWFwLmdldENvbXBvbmVudCgndG91Y2htb3ZlJyk7XHJcbiAgICAgICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgICAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgICAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICAgICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vZGVhY3RpdmUgYmVmb3JlIGFub3RoZXIgY2xpY2tcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9yZWR0dXJuXHJcbiAgICAgICAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9sb2dpYyBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy92ZXJ0aWNhbGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gc2VsZi5ub2RlLngpICYmIChyZWRjW2pdLnkgIT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS55ID4gcmVkY1tqXS55KSAmJiAocmVkY1tqXS55ID4gc2VsZi5ub2RlLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoKHBvc21vdmVbaV0ueSA8IHJlZGNbal0ueSkgJiYgKHJlZGNbal0ueSA8IHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gc2VsZi5ub2RlLngpICYmIChibGFja2Nba10ueSAhPSBzZWxmLm5vZGUueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnkgPj0gYmxhY2tjW2tdLnkpICYmIChibGFja2Nba10ueSA+IHNlbGYubm9kZS55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChwb3Ntb3ZlW2ldLnkgPD0gYmxhY2tjW2tdLnkpICYmIChibGFja2Nba10ueSA8IHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ob3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaG9yaXpvbnRhbGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnkgPT0gc2VsZi5ub2RlLnkpICYmIChyZWRjW2pdLnggIT0gc2VsZi5ub2RlLngpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS54ID4gcmVkY1tqXS54KSAmJiAocmVkY1tqXS54ID4gc2VsZi5ub2RlLngpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoKHBvc21vdmVbaV0ueCA8IHJlZGNbal0ueCkgJiYgKHJlZGNbal0ueCA8IHNlbGYubm9kZS54KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnkgPT0gc2VsZi5ub2RlLnkpICYmIChibGFja2Nba10ueCAhPSBzZWxmLm5vZGUueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnggPj0gYmxhY2tjW2tdLngpICYmIChibGFja2Nba10ueCA+IHNlbGYubm9kZS54KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChwb3Ntb3ZlW2ldLnggPD0gYmxhY2tjW2tdLngpICYmIChibGFja2Nba10ueCA8IHNlbGYubm9kZS54KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYW5vbnNob3RcclxuICAgICAgICAgICAgICAgICAgICAvL3VwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnkgPiBzZWxmLm5vZGUueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IGJsYWNrY1trXS54KSAmJiAocG9zbW92ZVtpXS55ID09IGJsYWNrY1trXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJpcG9kID0gMDsgYmlwb2QgPCByZWRjLmxlbmd0aDsgYmlwb2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYubm9kZS55IDwgcmVkY1tiaXBvZF0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2JpcG9kXS55IDwgYmxhY2tjW2tdLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVkY1tiaXBvZF0ueCA9PSBzZWxmLm5vZGUueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiaXBvZCA9IDA7IGJpcG9kIDwgYmxhY2tjLmxlbmd0aDsgYmlwb2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLm5vZGUueSA8IGJsYWNrY1tiaXBvZF0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2JpcG9kXS55IDwgYmxhY2tjW2tdLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1tiaXBvZF0ueCA9PSBzZWxmLm5vZGUueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ly9jaGVjayB3aGV0aGVyIHRhcmdldCBpcyBhbHJlYWR5IGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdGFyZ2V0ID0gMDsgdGFyZ2V0IDwgcG9zbW92ZS5sZW5ndGg7IHRhcmdldCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS55ID4gcG9zbW92ZVt0YXJnZXRdLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW3RhcmdldF0ueSA+IHNlbGYubm9kZS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnggPT0gYmxhY2tjW2tdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW3RhcmdldF0ueSA9PSBibGFja2Nba10ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbdGFyZ2V0XS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55KSAmJiAocG9zbW92ZVtpXS54ID4gc2VsZi5ub2RlLngpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBibGFja2Nba10ueCkgJiYgKHBvc21vdmVbaV0ueSA9PSBibGFja2Nba10ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiaXBvZCA9IDA7IGJpcG9kIDwgcmVkYy5sZW5ndGg7IGJpcG9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLm5vZGUueCA8IHJlZGNbYmlwb2RdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVkY1tiaXBvZF0ueCA8IGJsYWNrY1trXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZGNbYmlwb2RdLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmlwb2QgPSAwOyBiaXBvZCA8IGJsYWNrYy5sZW5ndGg7IGJpcG9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2VsZi5ub2RlLnggPCBibGFja2NbYmlwb2RdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1tiaXBvZF0ueCA8IGJsYWNrY1trXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibGFja2NbYmlwb2RdLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS8vY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYWxyZWFkeSBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRhcmdldCA9IDA7IHRhcmdldCA8IHBvc21vdmUubGVuZ3RoOyB0YXJnZXQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA+IHBvc21vdmVbdGFyZ2V0XS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnggPiBzZWxmLm5vZGUueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbdGFyZ2V0XS55ID09IGJsYWNrY1trXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnggPT0gYmxhY2tjW2tdLngpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW3RhcmdldF0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vYmxvY2sgb3RoZXIgY2hlc3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZWRjW2pdLnggPT0gcG9zbW92ZVtpXS54KSAmJiAocmVkY1tqXS55ID09IHBvc21vdmVbaV0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSBwb3Ntb3ZlW2ldLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2tdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGRvd24gYW5kIGxlZnQgY2Fub24gc2hvdHNcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBwb3Ntb3ZlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYW5vbnNob3RcclxuICAgICAgICAgICAgICAgICAgICAvL2Rvd25cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSBzZWxmLm5vZGUueCkgJiYgKHBvc21vdmVbaV0ueSA8IHNlbGYubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gYmxhY2tjW2tdLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gYmxhY2tjW2tdLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmlwb2QgPSAwOyBiaXBvZCA8IHJlZGMubGVuZ3RoOyBiaXBvZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2VsZi5ub2RlLnkgPiByZWRjW2JpcG9kXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZGNbYmlwb2RdLnkgPiBibGFja2Nba10ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2JpcG9kXS54ID09IHNlbGYubm9kZS54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJpcG9kID0gMDsgYmlwb2QgPCBibGFja2MubGVuZ3RoOyBiaXBvZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYubm9kZS55ID4gYmxhY2tjW2JpcG9kXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibGFja2NbYmlwb2RdLnkgPiBibGFja2Nba10ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2JpcG9kXS54ID09IHNlbGYubm9kZS54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vL2NoZWNrIHdoZXRoZXIgdGFyZ2V0IGlzIGFscmVhZHkgZm91bmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0YXJnZXQgPSBwb3Ntb3ZlLmxlbmd0aCAtIDE7IHRhcmdldCA+PSAwOyB0YXJnZXQtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueSA8IHBvc21vdmVbdGFyZ2V0XS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnkgPCBzZWxmLm5vZGUueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbdGFyZ2V0XS54ID09IGJsYWNrY1trXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnkgPT0gYmxhY2tjW2tdLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW3RhcmdldF0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWFjaCBibGFjayB0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55KSAmJiAocG9zbW92ZVtpXS54IDwgc2VsZi5ub2RlLngpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueSA9PSBibGFja2Nba10ueSkgJiYgKHBvc21vdmVbaV0ueCA9PSBibGFja2Nba10ueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiaXBvZCA9IDA7IGJpcG9kIDwgcmVkYy5sZW5ndGg7IGJpcG9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLm5vZGUueCA+IHJlZGNbYmlwb2RdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVkY1tiaXBvZF0ueCA+IGJsYWNrY1trXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZGNbYmlwb2RdLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmlwb2QgPSAwOyBiaXBvZCA8IGJsYWNrYy5sZW5ndGg7IGJpcG9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2VsZi5ub2RlLnggPiBibGFja2NbYmlwb2RdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1tiaXBvZF0ueCA+IGJsYWNrY1trXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibGFja2NbYmlwb2RdLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS8vY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYWxyZWFkeSBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRhcmdldCA9IHBvc21vdmUubGVuZ3RoIC0gMTsgdGFyZ2V0ID49IDA7IHRhcmdldC0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54IDwgcG9zbW92ZVt0YXJnZXRdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW3RhcmdldF0ueCA8IHNlbGYubm9kZS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnkgPT0gYmxhY2tjW2tdLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW3RhcmdldF0ueCA9PSBibGFja2Nba10ueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbdGFyZ2V0XS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSBwb3Ntb3ZlW2ldLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2tdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZS5yZWR0b3VjaG1vdmUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/redchess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52f25mMMVBNeqVQ2ztztcc0', 'redchess');
// script/board/chess/redchess/redchess.js

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
  onload: function onload() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxyZWRjaGVzcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1hcCIsInR5cGUiLCJOb2RlIiwib25sb2FkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUM7QUFDQSxpQkFBUyxJQURUO0FBRUFDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZUO0FBREksR0FIUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVHLENBSVAsQ0FkSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBQ1IsQ0FqQkksQ0FtQkw7O0FBbkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25sb2FkKCl7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/pawnred.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdec74ubcJE55YL34VPYD2t', 'pawnred');
// script/board/chess/redchess/pawnred.js

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
      if (this.node.y < map.blackriver) {
        //foward
        if (posmove[i].x == self.node.x && posmove[i].y == self.node.y + map.s) {
          posmove[i].active = true;
        }
      } else if (self.node.y >= map.blackriver) {
        //foward
        if (posmove[i].x == self.node.x && posmove[i].y == self.node.y + map.s) {
          posmove[i].active = true;
        } //left


        if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y) {
          posmove[i].active = true;
        } //right


        if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxwYXducmVkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsInNob3dwb3NzaWJsZW1vdmUiLCJnZXRDb21wb25lbnQiLCJ0b3VjaG1vdmUiLCJwb3Ntb3ZlIiwiZ2V0Q2hpbGRyZW4iLCJyZWRjIiwiYmxhY2tjIiwicGFyZW50Iiwic2VsZiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIm5vZGUiLCJ5IiwiYmxhY2tyaXZlciIsIngiLCJzIiwiaiIsImsiLCJzZXRTY2FsZSIsInNjYWxlIiwicmVkdG91Y2htb3ZlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBREM7QUFLUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVORixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQUxGO0FBU1JFLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FUSjtBQWFSRyxJQUFBQSxHQUFHLEVBQUM7QUFDQSxpQkFBUyxJQURUO0FBRUFKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZUO0FBYkksR0FIUDtBQXNCTEksRUFBQUEsZ0JBdEJLLDhCQXNCYTtB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QUFXVyxRQUFYLENBQW9CckIsR0FBRyxDQUFDc0IsS0FBeEIsRUFBK0J0QixHQUFHLENBQUNzQixLQUFuQztBQUNIO0FBQ0osT0FsQ29DLENBbUNyQzs7O0FBQ0FuQixNQUFBQSxTQUFTLENBQUNvQixZQUFWLENBQXVCYixDQUF2QjtBQUNIO0FBQ1osR0FqRkk7QUFtRkxjLEVBQUFBLEtBbkZLLG1CQW1GSSxDQUVSLENBckZJLENBdUZMOztBQXZGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGNoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93cG9zc2libGVtb3ZlKCl7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICAgICAgbGV0IHRvdWNobW92ZSA9IHRoaXMubWFwLmdldENvbXBvbmVudCgndG91Y2htb3ZlJyk7XHJcbiAgICAgICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgICAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgICAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICAgICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vZGVhY3RpdmUgYmVmb3JlIGFub3RoZXIgY2xpY2tcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9yZWR0dXJuXHJcbiAgICAgICAgICAgICAgICBibGFja2NoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9sb2dpY21vdmVcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueSA8IG1hcC5ibGFja3JpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZm93YXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54KSAmJiAocG9zbW92ZVtpXS55ID09IHNlbGYubm9kZS55ICsgbWFwLnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5ub2RlLnkgPj0gbWFwLmJsYWNrcml2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3dhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkgKyBtYXAucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLnggLSBtYXAucykgJiYgKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54ICsgbWFwLnMpICYmIChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ibG9jayBvdGhlciBjaGVzc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZGNbal0ueCA9PSBwb3Ntb3ZlW2ldLngpICYmIChyZWRjW2pdLnkgPT0gcG9zbW92ZVtpXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2hpZ2h0bGlnaHQga2lsbGFibGVcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGJsYWNrYy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGJsYWNrY1trXS54ID09IHBvc21vdmVbaV0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibGFja2Nba10ueSA9PSBwb3Ntb3ZlW2ldLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uc2V0U2NhbGUobWFwLnNjYWxlLCBtYXAuc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdG91Y2htb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlLnJlZHRvdWNobW92ZShpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/redchess/rookred.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7a180F7TRL+ZjqFkUoK1kp', 'rookred');
// script/board/chess/redchess/rookred.js

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


    blackchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //vertical
      if (posmove[i].x == this.node.x) {
        posmove[i].active = true; //verticalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y != self.node.y) {
            if (posmove[i].y > self.node.y && posmove[i].y > redc[j].y && redc[j].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < redc[j].y && redc[j].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y != self.node.y) {
            if (posmove[i].y > self.node.y && posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }
      } //horizontal


      if (posmove[i].y == this.node.y) {
        posmove[i].active = true; //horizontalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].y == self.node.y && redc[j].x != self.node.x) {
            if (posmove[i].x > self.node.x && posmove[i].x > redc[j].x && redc[j].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < redc[j].x && redc[j].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].y == self.node.y && blackc[k].x != self.node.x) {
            if (posmove[i].x > self.node.x && posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) {
              posmove[i].active = false;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXHJlZGNoZXNzXFxyb29rcmVkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGxhY2UiLCJ0eXBlIiwiTm9kZSIsInJlZGNoZXNzIiwiYmxhY2tjaGVzcyIsIm1hcCIsInNob3dwb3NzaWJsZW1vdmUiLCJnZXRDb21wb25lbnQiLCJ0b3VjaG1vdmUiLCJwb3Ntb3ZlIiwiZ2V0Q2hpbGRyZW4iLCJyZWRjIiwiYmxhY2tjIiwicGFyZW50Iiwic2VsZiIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIngiLCJub2RlIiwiaiIsInkiLCJrIiwic2V0U2NhbGUiLCJzY2FsZSIsInJlZHRvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJBQVMsSUFEVDtBQUVBSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGVDtBQWJJLEdBSFA7QUFzQkxJLEVBQUFBLGdCQXRCSyw4QkFzQmE7QUFDZCxRQUFJRCxHQUFHLEdB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SUFBYWIsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FBNUQsRUFBZ0U7QUFDNURiLFVBQUFBLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdFLE1BQVgsR0FBb0IsS0FBcEI7QUFDSDtBQUNKLE9BaERvQyxDQWlEckM7OztBQUNBLFdBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1gsTUFBTSxDQUFDSSxNQUEzQixFQUFtQ08sQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxZQUFLWCxNQUFNLENBQUNXLENBQUQsQ0FBTixDQUFVSixDQUFWLElBQWVWLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQTNCLElBQ0NQLE1BQU0sQ0FBQ1csQ0FBRCxDQUFOLENBQVVELENBQVYsSUFBZWIsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FEM0IsSUFFQ2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxJQUFxQixJQUYxQixFQUVpQztBQUM3QlIsVUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV1MsUUFBWCxDQUFvQm5CLEdBQUcsQ0FBQ29CLEtBQXhCLEVBQStCcEIsR0FBRyxDQUFDb0IsS0FBbkM7QUFDSDtBQUNKLE9BeERvQyxDQXlEckM7OztBQUNBakIsTUFBQUEsU0FBUyxDQUFDa0IsWUFBVixDQUF1QlgsQ0FBdkI7QUFDSDtBQUNaLEdBdkdJO0FBeUdMWSxFQUFBQSxLQXpHSyxtQkF5R0ksQ0FFUixDQTNHSSxDQTZHTDs7QUE3R0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBsYWNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmxhY2tjaGVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hvd3Bvc3NpYmxlbW92ZSgpe1xyXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ2JvYXJkaW5mbycpO1xyXG4gICAgICAgIGxldCB0b3VjaG1vdmUgPSB0aGlzLm1hcC5nZXRDb21wb25lbnQoJ3RvdWNobW92ZScpO1xyXG4gICAgICAgIHZhciBwbGFjZSA9IHRoaXMucGxhY2U7XHJcbiAgICAgICAgdmFyIHBvc21vdmUgPSBwbGFjZS5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciByZWRjaGVzcyA9IHRoaXMucmVkY2hlc3M7XHJcbiAgICAgICAgdmFyIHJlZGMgPSByZWRjaGVzcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBibGFja2NoZXNzID0gdGhpcy5ibGFja2NoZXNzO1xyXG4gICAgICAgIHZhciBibGFja2MgPSBibGFja2NoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgcmVkYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBibGFja2MucGFyZW50ID0gcGxhY2U7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvL2RlYWN0aXZlIGJlZm9yZSBhbm90aGVyIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vcmVkdHVyblxyXG4gICAgICAgICAgICAgICAgYmxhY2tjaGVzcy5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vbG9naWMgbW92aW5nXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc21vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0ueCA9PSB0aGlzLm5vZGUueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmVydGljYWxibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWRjW2pdLnggPT0gKHNlbGYubm9kZS54KSAmJiAocmVkY1tqXS55ICE9IChzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS55ID4gc2VsZi5ub2RlLnkpICYmIChwb3Ntb3ZlW2ldLnkgPiByZWRjW2pdLnkpICYmIChyZWRjW2pdLnkgPiBzZWxmLm5vZGUueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS55IDwgc2VsZi5ub2RlLnkpICYmIChwb3Ntb3ZlW2ldLnkgPCByZWRjW2pdLnkpICYmIChyZWRjW2pdLnkgPCBzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54KSAmJiAoYmxhY2tjW2tdLnkgIT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnkgPiBzZWxmLm5vZGUueSkgJiYgKHBvc21vdmVbaV0ueSA+IGJsYWNrY1trXS55KSAmJiAoYmxhY2tjW2tdLnkgPiBzZWxmLm5vZGUueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS55IDwgc2VsZi5ub2RlLnkpICYmIChwb3Ntb3ZlW2ldLnkgPCBibGFja2Nba10ueSkgJiYgKGJsYWNrY1trXS55IDwgc2VsZi5ub2RlLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2hvcml6b250YWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueSA9PSB0aGlzLm5vZGUueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2hvcml6b250YWxibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWRjW2pdLnkgPT0gKHNlbGYubm9kZS55KSAmJiAocmVkY1tqXS54ICE9IChzZWxmLm5vZGUueCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgocG9zbW92ZVtpXS54ID4gc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnggPiByZWRjW2pdLngpICYmIChyZWRjW2pdLnggPiBzZWxmLm5vZGUueCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS54IDwgc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnggPCByZWRjW2pdLngpICYmIChyZWRjW2pdLnggPCBzZWxmLm5vZGUueCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhY2tjW2tdLnkgPT0gKHNlbGYubm9kZS55KSAmJiAoYmxhY2tjW2tdLnggIT0gKHNlbGYubm9kZS54KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnggPiBzZWxmLm5vZGUueCkgJiYgKHBvc21vdmVbaV0ueCA+IGJsYWNrY1trXS54KSAmJiAoYmxhY2tjW2tdLnggPiBzZWxmLm5vZGUueCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS54IDwgc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnggPCBibGFja2Nba10ueCkgJiYgKGJsYWNrY1trXS54IDwgc2VsZi5ub2RlLngpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2Jsb2NrIG90aGVyIGNoZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IHBvc21vdmVbaV0ueCkgJiYgKHJlZGNbal0ueSA9PSBwb3Ntb3ZlW2ldLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaHRsaWdodCBraWxsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmxhY2tjW2tdLnggPT0gcG9zbW92ZVtpXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1trXS55ID09IHBvc21vdmVbaV0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5zZXRTY2FsZShtYXAuc2NhbGUsIG1hcC5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy90b3VjaG1vdmVcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmUucmVkdG91Y2htb3ZlKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/board/chess/blackchess/canonblack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed76eGXgtBEVYoiK2iOaAyO', 'canonblack');
// script/board/chess/blackchess/canonblack.js

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
    } //blackturn


    redchess.pauseSystemEvents(true); //logic moving

    for (var i = 0; i < posmove.length; i++) {
      //vertical
      if (posmove[i].x == this.node.x) {
        posmove[i].active = true; //verticalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].x == self.node.x && redc[j].y != self.node.y) {
            if (posmove[i].y >= redc[j].y && redc[j].y > self.node.y || posmove[i].y <= redc[j].y && redc[j].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].x == self.node.x && blackc[k].y != self.node.y) {
            if (posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) {
              posmove[i].active = false;
            }
          }
        }
      } //horizontal


      if (posmove[i].y == this.node.y && posmove[i].active == false) {
        posmove[i].active = true; //horizontalblock

        for (var j = 0; j < redc.length; j++) {
          if (redc[j].y == self.node.y && redc[j].x != self.node.x) {
            if (posmove[i].x >= redc[j].x && redc[j].x > self.node.x || posmove[i].x <= redc[j].x && redc[j].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }

        for (var k = 0; k < blackc.length; k++) {
          if (blackc[k].y == self.node.y && blackc[k].x != self.node.x) {
            if (posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) {
              posmove[i].active = false;
            }
          }
        }
      } //canonshot
      //up


      if (posmove[i].x == self.node.x && posmove[i].y > self.node.y) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.y < redc[bipod].y && redc[bipod].y < redc[j].y && redc[bipod].x == self.node.x) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.y < blackc[bipod].y && blackc[bipod].y < redc[j].y && blackc[bipod].x == self.node.x) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = 0; target < posmove.length; target++) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].y > posmove[target].y && posmove[target].y > self.node.y && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //right


      if (posmove[i].y == self.node.y && posmove[i].x > self.node.x) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) {
              if (self.node.x < redc[bipod].x && redc[bipod].x < redc[j].x && redc[bipod].y == self.node.y) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < blackc.length; bipod++) {
                if (self.node.x < blackc[bipod].x && blackc[bipod].x < redc[j].x && blackc[bipod].y == self.node.y) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = 0; target < posmove.length; target++) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].x > posmove[target].x && posmove[target].x > self.node.x && posmove[target].y == redc[j].y && posmove[target].x == redc[j].x) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //block other chess


      for (var k = 0; k < blackc.length; k++) {
        if (blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y) {
          posmove[i].active = false;
        }
      }
    } // down and left canon shots


    for (var i = posmove.length - 1; i >= 0; i--) {
      //canonshot
      //down
      if (posmove[i].x == self.node.x && posmove[i].y < self.node.y) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < blackc.length; bipod++) {
              if (self.node.y > blackc[bipod].y && blackc[bipod].y > redc[j].y && blackc[bipod].x == self.node.x) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < redc.length; bipod++) {
                if (self.node.y > redc[bipod].y && redc[bipod].y > redc[j].y && redc[bipod].x == self.node.x) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = posmove.length - 1; target >= 0; target--) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].y < posmove[target].y && posmove[target].y < self.node.y && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //left


      if (posmove[i].y == self.node.y && posmove[i].x < self.node.x) {
        for (var j = 0; j < redc.length; j++) {
          if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < blackc.length; bipod++) {
              if (self.node.x > blackc[bipod].x && blackc[bipod].x > redc[j].x && blackc[bipod].y == self.node.y) {
                posmove[i].active = true;
                break;
              }
            }

            if (posmove[i].active == false) {
              for (var bipod = 0; bipod < redc.length; bipod++) {
                if (self.node.x > redc[bipod].x && redc[bipod].x > redc[j].x && redc[bipod].y == self.node.y) {
                  posmove[i].active = true;
                  break;
                }
              }
            } //check whether target is already found


            if (posmove[i].active == true) {
              for (var target = posmove.length - 1; target >= 0; target--) {
                for (var j = 0; j < redc.length; j++) {
                  if (posmove[i].x < posmove[target].x && posmove[target].x < self.node.x && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y) {
                    if (posmove[target].active == true) {
                      posmove[i].active = false;
                    }
                  }
                }
              }
            }
          }
        }
      } //hightlight killable


      for (var j = 0; j < redc.length; j++) {
        if (redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && posmove[i].active == true) {
          posmove[i].setScale(map.scale, map.scale);
        }
      }
    }

    for (var i = 0; i < posmove.length; i++) {
      touchmove.blacktouchmove(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcY2hlc3NcXGJsYWNrY2hlc3NcXGNhbm9uYmxhY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGFjZSIsInR5cGUiLCJOb2RlIiwicmVkY2hlc3MiLCJibGFja2NoZXNzIiwibWFwIiwic2hvd3Bvc3NpYmxlbW92ZSIsImdldENvbXBvbmVudCIsInRvdWNobW92ZSIsInBvc21vdmUiLCJnZXRDaGlsZHJlbiIsInJlZGMiLCJibGFja2MiLCJwYXJlbnQiLCJzZWxmIiwiaSIsImxlbmd0aCIsImFjdGl2ZSIsInBhdXNlU3lzdGVtRXZlbnRzIiwieCIsIm5vZGUiLCJqIiwieSIsImsiLCJiaXBvZCIsInRhcmdldCIsInNldFNjYWxlIiwic2NhbGUiLCJibGFja3RvdWNobW92ZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FMRjtBQVNSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBVEo7QUFhUkcsSUFBQUEsR0FBRyxFQUFDO0FBQ0EsaUJBQVMsSUFEVDtBQUVBSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGVDtBQWJJLEdBSFA7QUFzQkxJLEVBQUFBLGdCQXRCSyw4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QyxFQUFzQztBQUNsQyxZQUFLVixJQUFJLENBQUNVLENBQUQsQ0FBSixDQUFRRixDQUFSLElBQWFWLE9BQU8sQ0FBQ00sQ0FBRCxDQUFQLENBQVdJLENBQXpCLElBQ0NSLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLENBQVFDLENBQVIsSUFBYWIsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV08sQ0FEekIsSUFFQ2IsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV0UsTUFBWCxJQUFxQixJQUYxQixFQUVpQztBQUM3QlIsVUFBQUEsT0FBTyxDQUFDTSxDQUFELENBQVAsQ0FBV1csUUFBWCxDQUFvQnJCLEdBQUcsQ0FBQ3NCLEtBQXhCLEVBQStCdEIsR0FBRyxDQUFDc0IsS0FBbkM7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsU0FBSyxJQUFJWixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixPQUFPLENBQUNPLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDUCxNQUFBQSxTQUFTLENBQUNvQixjQUFWLENBQXlCYixDQUF6QjtBQUNIO0FBSVosR0FoUkk7QUFrUkxjLEVBQUFBLEtBbFJLLG1CQWtSSSxDQUVSLENBcFJJLENBc1JMOztBQXRSSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxhY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGNoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibGFja2NoZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93cG9zc2libGVtb3ZlKCl7XHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwLmdldENvbXBvbmVudCgnYm9hcmRpbmZvJyk7XHJcbiAgICAgICAgbGV0IHRvdWNobW92ZSA9IHRoaXMubWFwLmdldENvbXBvbmVudCgndG91Y2htb3ZlJyk7XHJcbiAgICAgICAgdmFyIHBsYWNlID0gdGhpcy5wbGFjZTtcclxuICAgICAgICB2YXIgcG9zbW92ZSA9IHBsYWNlLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHJlZGNoZXNzID0gdGhpcy5yZWRjaGVzcztcclxuICAgICAgICB2YXIgcmVkYyA9IHJlZGNoZXNzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIGJsYWNrY2hlc3MgPSB0aGlzLmJsYWNrY2hlc3M7XHJcbiAgICAgICAgdmFyIGJsYWNrYyA9IGJsYWNrY2hlc3MuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICByZWRjLnBhcmVudCA9IHBsYWNlO1xyXG4gICAgICAgIGJsYWNrYy5wYXJlbnQgPSBwbGFjZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vZGVhY3RpdmUgYmVmb3JlIGFub3RoZXIgY2xpY2tcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9ibGFja3R1cm5cclxuICAgICAgICAgICAgICAgIHJlZGNoZXNzLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9sb2dpYyBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS54ID09IHRoaXMubm9kZS54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy92ZXJ0aWNhbGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZGNbal0ueCA9PSAoc2VsZi5ub2RlLngpICYmIChyZWRjW2pdLnkgIT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnkgPj0gcmVkY1tqXS55KSAmJiAocmVkY1tqXS55ID4gc2VsZi5ub2RlLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoKHBvc21vdmVbaV0ueSA8PSByZWRjW2pdLnkpICYmIChyZWRjW2pdLnkgPCBzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYmxhY2tjLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhY2tjW2tdLnggPT0gKHNlbGYubm9kZS54KSAmJiAoYmxhY2tjW2tdLnkgIT0gKHNlbGYubm9kZS55KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChwb3Ntb3ZlW2ldLnkgPiBibGFja2Nba10ueSkgJiYgKGJsYWNrY1trXS55ID4gc2VsZi5ub2RlLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoKHBvc21vdmVbaV0ueSA8IGJsYWNrY1trXS55KSAmJiAoYmxhY2tjW2tdLnkgPCBzZWxmLm5vZGUueSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS55ID09IHRoaXMubm9kZS55KSAmJiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ob3Jpem9udGFsYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVkY1tqXS55ID09IChzZWxmLm5vZGUueSkgJiYgKHJlZGNbal0ueCAhPSAoc2VsZi5ub2RlLngpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKHBvc21vdmVbaV0ueCA+PSByZWRjW2pdLngpICYmIChyZWRjW2pdLnggPiBzZWxmLm5vZGUueCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS54IDw9IHJlZGNbal0ueCkgJiYgKHJlZGNbal0ueCA8IHNlbGYubm9kZS54KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibGFja2Nba10ueSA9PSAoc2VsZi5ub2RlLnkpICYmIChibGFja2Nba10ueCAhPSAoc2VsZi5ub2RlLngpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKHBvc21vdmVbaV0ueCA+IGJsYWNrY1trXS54KSAmJiAoYmxhY2tjW2tdLnggPiBzZWxmLm5vZGUueCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgocG9zbW92ZVtpXS54IDwgYmxhY2tjW2tdLngpICYmIChibGFja2Nba10ueCA8IHNlbGYubm9kZS54KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYW5vbnNob3RcclxuICAgICAgICAgICAgICAgICAgICAvL3VwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gc2VsZi5ub2RlLngpICYmIChwb3Ntb3ZlW2ldLnkgPiBzZWxmLm5vZGUueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSByZWRjW2pdLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gcmVkY1tqXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJpcG9kID0gMDsgYmlwb2QgPCByZWRjLmxlbmd0aDsgYmlwb2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYubm9kZS55IDwgcmVkY1tiaXBvZF0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2JpcG9kXS55IDwgcmVkY1tqXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZGNbYmlwb2RdLnggPT0gc2VsZi5ub2RlLngpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmlwb2QgPSAwOyBiaXBvZCA8IGJsYWNrYy5sZW5ndGg7IGJpcG9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2VsZi5ub2RlLnkgPCBibGFja2NbYmlwb2RdLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1tiaXBvZF0ueSA8IHJlZGNbal0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2JpcG9kXS54ID09IHNlbGYubm9kZS54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vL2NoZWNrIHdoZXRoZXIgdGFyZ2V0IGlzIGFscmVhZHkgZm91bmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0YXJnZXQgPSAwOyB0YXJnZXQgPCBwb3Ntb3ZlLmxlbmd0aDsgdGFyZ2V0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS55ID4gcG9zbW92ZVt0YXJnZXRdLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW3RhcmdldF0ueSA+IHNlbGYubm9kZS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnggPT0gcmVkY1tqXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnkgPT0gcmVkY1tqXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVt0YXJnZXRdLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL3JpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnkgPT0gc2VsZi5ub2RlLnkpICYmIChwb3Ntb3ZlW2ldLnggPiBzZWxmLm5vZGUueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA9PSByZWRjW2pdLngpICYmIChwb3Ntb3ZlW2ldLnkgPT0gcmVkY1tqXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJpcG9kID0gMDsgYmlwb2QgPCByZWRjLmxlbmd0aDsgYmlwb2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYubm9kZS54IDwgcmVkY1tiaXBvZF0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2JpcG9kXS54IDwgcmVkY1tqXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZGNbYmlwb2RdLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmlwb2QgPSAwOyBiaXBvZCA8IGJsYWNrYy5sZW5ndGg7IGJpcG9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2VsZi5ub2RlLnggPCBibGFja2NbYmlwb2RdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1tiaXBvZF0ueCA8IHJlZGNbal0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2JpcG9kXS55ID09IHNlbGYubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc21vdmVbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vL2NoZWNrIHdoZXRoZXIgdGFyZ2V0IGlzIGFscmVhZHkgZm91bmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0YXJnZXQgPSAwOyB0YXJnZXQgPCBwb3Ntb3ZlLmxlbmd0aDsgdGFyZ2V0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID4gcG9zbW92ZVt0YXJnZXRdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW3RhcmdldF0ueCA+IHNlbGYubm9kZS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnkgPT0gcmVkY1tqXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnggPT0gcmVkY1tqXS54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVt0YXJnZXRdLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2Jsb2NrIG90aGVyIGNoZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBibGFja2MubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChibGFja2Nba10ueCA9PSBwb3Ntb3ZlW2ldLngpICYmIChibGFja2Nba10ueSA9PSBwb3Ntb3ZlW2ldLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZG93biBhbmQgbGVmdCBjYW5vbiBzaG90c1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHBvc21vdmUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2Nhbm9uc2hvdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vZG93blxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHNlbGYubm9kZS54KSAmJiAocG9zbW92ZVtpXS55IDwgc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwb3Ntb3ZlW2ldLnggPT0gcmVkY1tqXS54KSAmJiAocG9zbW92ZVtpXS55ID09IHJlZGNbal0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiaXBvZCA9IDA7IGJpcG9kIDwgYmxhY2tjLmxlbmd0aDsgYmlwb2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYubm9kZS55ID4gYmxhY2tjW2JpcG9kXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsYWNrY1tiaXBvZF0ueSA+IHJlZGNbal0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibGFja2NbYmlwb2RdLnggPT0gc2VsZi5ub2RlLngpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVtpXS5hY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmlwb2QgPSAwOyBiaXBvZCA8IHJlZGMubGVuZ3RoOyBiaXBvZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYubm9kZS55ID4gcmVkY1tiaXBvZF0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVkY1tiaXBvZF0ueSA+IHJlZGNbal0ueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVkY1tiaXBvZF0ueCA9PSBzZWxmLm5vZGUueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ly9jaGVjayB3aGV0aGVyIHRhcmdldCBpcyBhbHJlYWR5IGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdGFyZ2V0ID0gcG9zbW92ZS5sZW5ndGggLSAxOyB0YXJnZXQgPj0gMDsgdGFyZ2V0LS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVkYy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS55IDwgcG9zbW92ZVt0YXJnZXRdLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3Ntb3ZlW3RhcmdldF0ueSA8IHNlbGYubm9kZS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnggPT0gcmVkY1tqXS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnkgPT0gcmVkY1tqXS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zbW92ZVt0YXJnZXRdLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2xlZnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueSA9PSBzZWxmLm5vZGUueSkgJiYgKHBvc21vdmVbaV0ueCA8IHNlbGYubm9kZS54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocG9zbW92ZVtpXS54ID09IHJlZGNbal0ueCkgJiYgKHBvc21vdmVbaV0ueSA9PSByZWRjW2pdLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmlwb2QgPSAwOyBiaXBvZCA8IGJsYWNrYy5sZW5ndGg7IGJpcG9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLm5vZGUueCA+IGJsYWNrY1tiaXBvZF0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibGFja2NbYmlwb2RdLnggPiByZWRjW2pdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxhY2tjW2JpcG9kXS55ID09IHNlbGYubm9kZS55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbaV0uYWN0aXZlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGJpcG9kID0gMDsgYmlwb2QgPCByZWRjLmxlbmd0aDsgYmlwb2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLm5vZGUueCA+IHJlZGNbYmlwb2RdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZGNbYmlwb2RdLnggPiByZWRjW2pdLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZGNbYmlwb2RdLnkgPT0gc2VsZi5ub2RlLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS8vY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYWxyZWFkeSBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3Ntb3ZlW2ldLmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRhcmdldCA9IHBvc21vdmUubGVuZ3RoIC0gMTsgdGFyZ2V0ID49IDA7IHRhcmdldC0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZGMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc21vdmVbaV0ueCA8IHBvc21vdmVbdGFyZ2V0XS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zbW92ZVt0YXJnZXRdLnggPCBzZWxmLm5vZGUueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbdGFyZ2V0XS54ID09IHJlZGNbal0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbdGFyZ2V0XS55ID09IHJlZGNbal0ueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc21vdmVbdGFyZ2V0XS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zbW92ZVtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdodGxpZ2h0IGtpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZWRjLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVkY1tqXS54ID09IHBvc21vdmVbaV0ueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWRjW2pdLnkgPT0gcG9zbW92ZVtpXS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc21vdmVbaV0uYWN0aXZlID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3Ntb3ZlW2ldLnNldFNjYWxlKG1hcC5zY2FsZSwgbWFwLnNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZS5ibGFja3RvdWNobW92ZShpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/regenerator-runtime/runtime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}module.exports = require('./lib/axios');
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/build/cjs/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.connect = exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;
const url_js_1 = require("./url.js");
const manager_js_1 = require("./manager.js");
Object.defineProperty(exports, "Manager", { enumerable: true, get: function () { return manager_js_1.Manager; } });
const socket_js_1 = require("./socket.js");
Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return socket_js_1.Socket; } });
const debug_1 = __importDefault(require("debug")); // debug()
const debug = debug_1.default("socket.io-client"); // debug()
/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url_js_1.url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_js_1.Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_js_1.Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
exports.io = lookup;
exports.connect = lookup;
exports.default = lookup;
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: manager_js_1.Manager,
    Socket: socket_js_1.Socket,
    io: lookup,
    connect: lookup,
});
/**
 * Protocol version.
 *
 * @public
 */
var socket_io_parser_1 = require("socket.io-parser");
Object.defineProperty(exports, "protocol", { enumerable: true, get: function () { return socket_io_parser_1.protocol; } });

module.exports = lookup;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/axios.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const engine_io_client_1 = require("engine.io-client");
const socket_js_1 = require("./socket.js");
const parser = __importStar(require("socket.io-parser"));
const on_js_1 = require("./on.js");
const backo2_js_1 = require("./contrib/backo2.js");
const component_emitter_1 = require("@socket.io/component-emitter");
const debug_1 = __importDefault(require("debug")); // debug()
const debug = debug_1.default("socket.io-client:manager"); // debug()
class Manager extends component_emitter_1.Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        engine_io_client_1.installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new backo2_js_1.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
            return this;
        debug("opening %s", this.uri);
        this.engine = new engine_io_client_1.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on_js_1.on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = on_js_1.on(socket, "error", (err) => {
            debug("error");
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
            }
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            debug("connect attempt will timeout after %d", timeout);
            if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
            }
            // set timer
            const timer = this.setTimeoutFn(() => {
                debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                // @ts-ignore
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        debug("open");
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on_js_1.on(socket, "ping", this.onping.bind(this)), on_js_1.on(socket, "data", this.ondata.bind(this)), on_js_1.on(socket, "error", this.onerror.bind(this)), on_js_1.on(socket, "close", this.onclose.bind(this)), on_js_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new socket_js_1.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                debug("socket %s is still active, skipping close", nsp);
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
        debug("closed due to %s", reason);
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                debug("attempting reconnect");
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        debug("reconnect attempt error");
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        debug("reconnect success");
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
exports.Manager = Manager;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/build/cjs/url.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = void 0;
const engine_io_client_1 = require("engine.io-client");
const debug_1 = __importDefault(require("debug")); // debug()
const debug = debug_1.default("socket.io-client:url"); // debug()
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        debug("parse %s", uri);
        obj = engine_io_client_1.parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
exports.url = url;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const socket_io_parser_1 = require("socket.io-parser");
const on_js_1 = require("./on.js");
const component_emitter_1 = require("@socket.io/component-emitter");
const debug_1 = __importDefault(require("debug")); // debug()
const debug = debug_1.default("socket.io-client:socket"); // debug()
/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
class Socket extends component_emitter_1.Emitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */
    constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on_js_1.on(io, "open", this.onopen.bind(this)),
            on_js_1.on(io, "packet", this.onpacket.bind(this)),
            on_js_1.on(io, "error", this.onerror.bind(this)),
            on_js_1.on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            debug("emitting packet with ack id %d", id);
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
            debug("discard packet as the transport is not currently writable");
        }
        else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    debug("removing packet with ack id %d from the buffer", id);
                    this.sendBuffer.splice(i, 1);
                }
            }
            debug("event with ack id %d has timed out after %d ms", id, timeout);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [null, ...args]);
        };
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data });
            });
        }
        else {
            this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: this.auth });
        }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        debug("close (%s)", reason);
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser_1.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser_1.PacketType.EVENT:
            case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.ACK:
            case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser_1.PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            debug("sending ack %j", args);
            self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
        else {
            debug("bad ack %s", packet.id);
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */
    disconnect() {
        if (this.connected) {
            debug("performing disconnect (%s)", this.nsp);
            this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * ```
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     * ```
     *
     * @returns self
     * @public
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     *
     * <pre><code>
     *
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(event);
     * });
     *
     * </pre></code>
     *
     * @public
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     *
     * <pre><code>
     *
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(event);
     * });
     *
     * </pre></code>
     *
     * @public
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     *
     * <pre><code>
     *
     * const handler = (event, ...args) => {
     *   console.log(event);
     * }
     *
     * socket.onAnyOutgoing(handler);
     *
     * // then later
     * socket.offAnyOutgoing(handler);
     *
     * </pre></code>
     *
     * @public
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}
exports.Socket = Socket;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/debug/src/browser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (process){
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = require('./common')(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

}).call(this,require("../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js"))
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/defaults.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (process){
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');
var enhanceError = require('./core/enhanceError');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

}).call(this,require("../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js"))
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var bind = require('./helpers/bind');

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/Axios.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
var validator = require('../helpers/validator');

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
const component_emitter_1 = require("@socket.io/component-emitter");
const binary_js_1 = require("./binary.js");
const is_binary_js_1 = require("./is-binary.js");
const debug_1 = require("debug"); // debug()
const debug = debug_1.default("socket.io-parser"); // debug()
/**
 * Protocol version.
 *
 * @public
 */
exports.protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (is_binary_js_1.hasBinary(obj)) {
                obj.type =
                    obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = binary_js_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends component_emitter_1.Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT ||
                packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (is_binary_js_1.isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        debug("decoded %s as %j", str, p);
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
        }
    }
}
exports.Decoder = Decoder;
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = binary_js_1.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/build/cjs/on.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on = void 0;
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
exports.on = on;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backoff = void 0;
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
exports.Backoff = Backoff;
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/process/browser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/@socket.io/component-emitter/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
/**
 * Expose `Emitter`.
 */

exports.Emitter = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/debug/src/common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = require('ms');
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.installTimerFunctions = exports.transports = exports.Transport = exports.protocol = exports.Socket = void 0;
const socket_js_1 = require("./socket.js");
Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return socket_js_1.Socket; } });
exports.protocol = socket_js_1.Socket.protocol;
var transport_js_1 = require("./transport.js");
Object.defineProperty(exports, "Transport", { enumerable: true, get: function () { return transport_js_1.Transport; } });
var index_js_1 = require("./transports/index.js");
Object.defineProperty(exports, "transports", { enumerable: true, get: function () { return index_js_1.transports; } });
var util_js_1 = require("./util.js");
Object.defineProperty(exports, "installTimerFunctions", { enumerable: true, get: function () { return util_js_1.installTimerFunctions; } });
var parseuri_js_1 = require("./contrib/parseuri.js");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parseuri_js_1.parse; } });

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var pkg = require('./../../package.json');

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBinary = exports.isBinary = void 0;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
exports.isBinary = isBinary;
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}
exports.hasBinary = hasBinary;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reconstructPacket = exports.deconstructPacket = void 0;
const is_binary_js_1 = require("./is-binary.js");
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
exports.deconstructPacket = deconstructPacket;
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (is_binary_js_1.isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
exports.reconstructPacket = reconstructPacket;
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transports = void 0;
const polling_js_1 = require("./polling.js");
const websocket_js_1 = require("./websocket.js");
exports.transports = {
    websocket: websocket_js_1.WS,
    polling: polling_js_1.Polling
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
// imported from https://github.com/galkn/parseuri
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
exports.parse = parse;
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const index_js_1 = require("./transports/index.js");
const util_js_1 = require("./util.js");
const parseqs_js_1 = require("./contrib/parseqs.js");
const parseuri_js_1 = require("./contrib/parseuri.js");
const debug_1 = __importDefault(require("debug")); // debug()
const component_emitter_1 = require("@socket.io/component-emitter");
const engine_io_parser_1 = require("engine.io-parser");
const debug = (0, debug_1.default)("engine.io-client:socket"); // debug()
class Socket extends component_emitter_1.Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */
    constructor(uri, opts = {}) {
        super();
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = (0, parseuri_js_1.parse)(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
                opts.query = uri.query;
        }
        else if (opts.host) {
            opts.hostname = (0, parseuri_js_1.parse)(opts.host).host;
        }
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = opts.transports || ["polling", "websocket"];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") {
            this.opts.query = (0, parseqs_js_1.decode)(this.opts.query);
        }
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                addEventListener("beforeunload", () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                }, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                    this.onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */
    createTransport(name) {
        debug('creating transport "%s"', name);
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = engine_io_parser_1.protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        debug("options: %j", opts);
        return new index_js_1.transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */
    open() {
        let transport;
        if (this.opts.rememberUpgrade &&
            Socket.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
        }
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        else {
            transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        }
        catch (e) {
            debug("error while creating transport: %s", e);
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */
    setTransport(transport) {
        debug("setting transport %s", transport.name);
        if (this.transport) {
            debug("clearing existing transport %s", this.transport.name);
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", reason => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */
    probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            debug('probe transport "%s" opened', name);
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", msg => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    debug('probe transport "%s" pong', name);
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    debug('pausing current transport "%s"', this.transport.name);
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        debug("changing transport and sending upgrade packet");
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    debug('probe transport "%s" failed', name);
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = err => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            debug('probe transport "%s" failed because of error: %s', name, err);
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api private
     */
    onOpen() {
        debug("socket open");
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState &&
            this.opts.upgrade &&
            this.transport.pause) {
            debug("starting upgrade probes");
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
                this.probe(this.upgrades[i]);
            }
        }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */
    onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
            debug('packet received with socket readyState "%s"', this.readyState);
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @api private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this.getWritablePackets();
            debug("flushing %d packets in socket", packets.length);
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += (0, util_js_1.byteLength)(data);
            }
            if (i > 0 && payloadSize > this.maxPayload) {
                debug("only send %d out of %d packets", i, this.writeBuffer.length);
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        debug("payload size is %d (max: %d)", payloadSize, this.maxPayload);
        return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */
    write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */
    sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api public
     */
    close() {
        const close = () => {
            this.onClose("forced close");
            debug("socket closing - telling transport to close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */
    onError(err) {
        debug("socket error %j", err);
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */
    onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            debug('socket close with reason: "%s"', reason);
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */
    filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
exports.Socket = Socket;
Socket.protocol = engine_io_parser_1.protocol;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.byteLength = exports.installTimerFunctions = exports.pick = void 0;
const globalThis_js_1 = require("./globalThis.js");
function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
exports.pick = pick;
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis_js_1.globalThisShim);
    }
    else {
        obj.setTimeoutFn = setTimeout.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = clearTimeout.bind(globalThis_js_1.globalThisShim);
    }
}
exports.installTimerFunctions = installTimerFunctions;
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
exports.byteLength = byteLength;
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const engine_io_parser_1 = require("engine.io-parser");
const component_emitter_1 = require("@socket.io/component-emitter");
const util_js_1 = require("./util.js");
const debug_1 = __importDefault(require("debug")); // debug()
const debug = (0, debug_1.default)("engine.io-client:transport"); // debug()
class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends component_emitter_1.Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */
    constructor(opts) {
        super();
        this.writable = false;
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @api protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */
    open() {
        if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
        }
        return this;
    }
    /**
     * Closes the transport.
     *
     * @api public
     */
    close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */
    send(packets) {
        if ("open" === this.readyState) {
            this.write(packets);
        }
        else {
            // this might happen if the transport was silently closed in the beforeunload event handler
            debug("transport is not open, discarding packets");
        }
    }
    /**
     * Called upon open
     *
     * @api protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */
    onData(data) {
        const packet = (0, engine_io_parser_1.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @api protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
}
exports.Transport = Transport;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/ms/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/settle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          if (!document.cookie) return null;
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      if (!urlParsingNode.pathname) {
        return function isURLSameOrigin() {
          return true;
        };
      }

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/createError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/core/transformData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

var utils = require('./../utils');
var defaults = require('./../defaults');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/package.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}module.exports = {
  "name": "axios-creator",
  "version": "1.0.0",
  "description": "Promise based HTTP client for the browser and node.js",
  "main": "index.js",
  "scripts": {
    "test": "grunt test",
    "start": "node ./sandbox/server.js",
    "build": "NODE_ENV=production grunt build",
    "preversion": "npm test",
    "version": "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
    "postversion": "git push && git push --tags",
    "examples": "node ./examples/server.js",
    "coveralls": "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    "fix": "eslint --fix lib/**/*.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ljhsai/axios-creator.git"
  },
  "keywords": [
    "xhr",
    "http",
    "ajax",
    "promise",
    "node",
    "cocos-creator"
  ],
  "author": "Matt Zabriskie",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ljhsai/axios-creator/issues"
  },
  "homepage": "https://axios-http.com",
  "devDependencies": {
    "coveralls": "^3.0.0",
    "es6-promise": "^4.2.4",
    "grunt": "^1.3.0",
    "grunt-banner": "^0.6.0",
    "grunt-cli": "^1.2.0",
    "grunt-contrib-clean": "^1.1.0",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-eslint": "^23.0.0",
    "grunt-karma": "^4.0.0",
    "grunt-mocha-test": "^0.13.3",
    "grunt-ts": "^6.0.0-beta.19",
    "grunt-webpack": "^4.0.2",
    "istanbul-instrumenter-loader": "^1.0.0",
    "jasmine-core": "^2.4.1",
    "karma": "^6.3.2",
    "karma-chrome-launcher": "^3.1.0",
    "karma-firefox-launcher": "^2.1.0",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-ajax": "^0.1.13",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^4.3.6",
    "karma-sinon": "^1.0.5",
    "karma-sourcemap-loader": "^0.3.8",
    "karma-webpack": "^4.0.2",
    "load-grunt-tasks": "^3.5.2",
    "minimist": "^1.2.0",
    "mocha": "^8.2.1",
    "sinon": "^4.5.0",
    "terser-webpack-plugin": "^4.2.3",
    "typescript": "^4.0.5",
    "url-search-params": "^0.10.0",
    "webpack": "^4.44.2",
    "webpack-dev-server": "^3.11.0"
  },
  "browser": {
    "./lib/adapters/http.js": "./lib/adapters/xhr.js"
  },
  "jsdelivr": "dist/axios.min.js",
  "unpkg": "dist/axios.min.js",
  "typings": "./index.d.ts",
  "dependencies": {
    "follow-redirects": "^1.14.0"
  },
  "bundlesize": [
    {
      "path": "./dist/axios.min.js",
      "threshold": "5kB"
    }
  ]
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (Buffer){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS = void 0;
const transport_js_1 = require("../transport.js");
const parseqs_js_1 = require("../contrib/parseqs.js");
const yeast_js_1 = require("../contrib/yeast.js");
const util_js_1 = require("../util.js");
const websocket_constructor_js_1 = require("./websocket-constructor.js");
const debug_1 = __importDefault(require("debug")); // debug()
const engine_io_parser_1 = require("engine.io-parser");
const debug = (0, debug_1.default)("engine.io-client:websocket"); // debug()
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class WS extends transport_js_1.Transport {
    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */
    constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Transport name.
     *
     * @api public
     */
    get name() {
        return "websocket";
    }
    /**
     * Opens socket.
     *
     * @api private
     */
    doOpen() {
        if (!this.check()) {
            // let probe timeout
            return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : (0, util_js_1.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws =
                websocket_constructor_js_1.usingBrowserWebSocket && !isReactNative
                    ? protocols
                        ? new websocket_constructor_js_1.WebSocket(uri, protocols)
                        : new websocket_constructor_js_1.WebSocket(uri)
                    : new websocket_constructor_js_1.WebSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || websocket_constructor_js_1.defaultBinaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = closeEvent => this.onClose({
            description: "websocket connection closed",
            context: closeEvent
        });
        this.ws.onmessage = ev => this.onData(ev.data);
        this.ws.onerror = e => this.onError("websocket error", e);
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, engine_io_parser_1.encodePacket)(packet, this.supportsBinary, data => {
                // always create a new object (GH-437)
                const opts = {};
                if (!websocket_constructor_js_1.usingBrowserWebSocket) {
                    if (packet.options) {
                        opts.compress = packet.options.compress;
                    }
                    if (this.opts.perMessageDeflate) {
                        const len = 
                        // @ts-ignore
                        "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) {
                            opts.compress = false;
                        }
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (websocket_constructor_js_1.usingBrowserWebSocket) {
                        // TypeError is thrown when passing the second argument on Safari
                        this.ws.send(data);
                    }
                    else {
                        this.ws.send(data, opts);
                    }
                }
                catch (e) {
                    debug("websocket closed before onclose event");
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0, websocket_constructor_js_1.nextTick)(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    /**
     * Closes socket.
     *
     * @api private
     */
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port &&
            (("wss" === schema && Number(this.opts.port) !== 443) ||
                ("ws" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */
    check() {
        return !!websocket_constructor_js_1.WebSocket;
    }
}
exports.WS = WS;

}).call(this,require("buffer").Buffer)
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.Polling = void 0;
const transport_js_1 = require("../transport.js");
const debug_1 = __importDefault(require("debug")); // debug()
const yeast_js_1 = require("../contrib/yeast.js");
const parseqs_js_1 = require("../contrib/parseqs.js");
const engine_io_parser_1 = require("engine.io-parser");
const xmlhttprequest_js_1 = require("./xmlhttprequest.js");
const component_emitter_1 = require("@socket.io/component-emitter");
const util_js_1 = require("../util.js");
const globalThis_js_1 = require("../globalThis.js");
const debug = (0, debug_1.default)("engine.io-client:polling"); // debug()
function empty() { }
const hasXHR2 = (function () {
    const xhr = new xmlhttprequest_js_1.XHR({
        xdomain: false
    });
    return null != xhr.responseType;
})();
class Polling extends transport_js_1.Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */
    constructor(opts) {
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
            this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    /**
     * Transport name.
     */
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */
    doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            debug("paused");
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                debug("we are currently polling - waiting to pause");
                total++;
                this.once("pollComplete", function () {
                    debug("pre-pause polling complete");
                    --total || pause();
                });
            }
            if (!this.writable) {
                debug("we are currently writing - waiting to pause");
                total++;
                this.once("drain", function () {
                    debug("pre-pause writing complete");
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @api public
     */
    poll() {
        debug("polling");
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */
    onData(data) {
        debug("polling got data %s", data);
        const callback = packet => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, engine_io_parser_1.decodePayload)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this.poll();
            }
            else {
                debug('ignoring poll - transport state "%s"', this.readyState);
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @api private
     */
    doClose() {
        const close = () => {
            debug("writing close packet");
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            debug("transport open - closing");
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            debug("transport not open - deferring close");
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */
    write(packets) {
        this.writable = false;
        (0, engine_io_parser_1.encodePayload)(packets, data => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        // avoid port if default for schema
        if (this.opts.port &&
            (("https" === schema && Number(this.opts.port) !== 443) ||
                ("http" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */
    doPoll() {
        debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
exports.Polling = Polling;
class Request extends component_emitter_1.Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */
    constructor(uri, opts) {
        super();
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */
    create() {
        const opts = (0, util_js_1.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = (this.xhr = new xmlhttprequest_js_1.XHR(opts));
        try {
            debug("xhr open %s: %s", this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this.opts.extraHeaders) {
                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this.method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this.onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            debug("xhr data %s", this.data);
            xhr.send(this.data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @api private
     */
    onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @api private
     */
    cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this.xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this.index];
        }
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @api private
     */
    onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @api public
     */
    abort() {
        this.cleanup();
    }
}
exports.Request = Request;
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThis_js_1.globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalThisShim = void 0;
exports.globalThisShim = (() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
function encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
exports.encode = encode;
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}
exports.decode = decode;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacket = exports.protocol = void 0;
const encodePacket_js_1 = require("./encodePacket.js");
exports.encodePacket = encodePacket_js_1.default;
const decodePacket_js_1 = require("./decodePacket.js");
exports.decodePacket = decodePacket_js_1.default;
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        (0, encodePacket_js_1.default)(packet, false, encodedPacket => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
exports.encodePayload = encodePayload;
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0, decodePacket_js_1.default)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
exports.decodePayload = decodePayload;
exports.protocol = 4;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/buffer/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}// imported from https://github.com/unshiftio/yeast
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.yeast = exports.decode = exports.encode = void 0;
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {};
let seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
    let encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
}
exports.encode = encode;
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
    let decoded = 0;
    for (i = 0; i < str.length; i++) {
        decoded = decoded * length + map[str.charAt(i)];
    }
    return decoded;
}
exports.decode = decode;
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
        return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
exports.yeast = yeast;
//
// Map each character to its index.
//
for (; i < length; i++)
    map[alphabet[i]] = i;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBinaryType = exports.usingBrowserWebSocket = exports.WebSocket = exports.nextTick = void 0;
const globalThis_js_1 = require("../globalThis.js");
exports.nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return cb => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
exports.WebSocket = globalThis_js_1.globalThisShim.WebSocket || globalThis_js_1.globalThisShim.MozWebSocket;
exports.usingBrowserWebSocket = true;
exports.defaultBinaryType = "arraybuffer";

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
// browser shim for xmlhttprequest module
Object.defineProperty(exports, "__esModule", { value: true });
exports.XHR = void 0;
const has_cors_js_1 = require("../contrib/has-cors.js");
const globalThis_js_1 = require("../globalThis.js");
function XHR(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || has_cors_js_1.hasCORS)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new globalThis_js_1.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
}
exports.XHR = XHR;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/base64-js/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/ieee754/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/buffer/node_modules/isarray/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commons_js_1 = require("./commons.js");
const base64_arraybuffer_js_1 = require("./contrib/base64-arraybuffer.js");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
    }
    const packetType = commons_js_1.PACKET_TYPES_REVERSE[type];
    if (!packetType) {
        return commons_js_1.ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: commons_js_1.PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1)
        }
        : {
            type: commons_js_1.PACKET_TYPES_REVERSE[type]
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer) {
        const decoded = (0, base64_arraybuffer_js_1.decode)(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            return data instanceof ArrayBuffer ? new Blob([data]) : data;
        case "arraybuffer":
        default:
            return data; // assuming the data is already an ArrayBuffer
    }
};
exports.default = decodePacket;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commons_js_1 = require("./commons.js");
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = obj => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer &&
        (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
};
exports.default = encodePacket;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCORS = void 0;
// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
exports.hasCORS = value;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
exports.PACKET_TYPES = PACKET_TYPES;
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
Object.keys(PACKET_TYPES).forEach(key => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
exports.ERROR_PACKET = ERROR_PACKET;

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
const encode = (arraybuffer) => {
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
exports.encode = encode;
const decode = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};
exports.decode = decode;

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
//------QC-SOURCE-SPLIT------
