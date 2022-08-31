
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
            cc.director.loadScene("daucuocvangrooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }

        if (data.data.Player2 == PlayerInfo.uid) {
          (0, _axios_connection.quitfullroombyIDasp2)(roomID).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("daucuocvangrooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }
      }

      if (data.data.Player1 == null && data.data.Player2 != null) {
        (0, _axios_connection.quitroombyIDasp2)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("daucuocvangrooms");
        }); // .catch(function () {
        //   console.log("Promise Rejected");
        // });
      }

      if (data.data.Player1 != null && data.data.Player2 == null) {
        (0, _axios_connection.quitroombyIDasp1)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("daucuocvangrooms");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcYmFja3Rvcm9vbWxpc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJiYWNrdG9yb29tbGlzdCIsIlBsYXllckluZm8iLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJSb29tSW5mb3MiLCJyb29tSUQiLCJyaWQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIxIiwiUGxheWVyMiIsInVpZCIsInAyIiwibG9hZFNjZW5lIiwic3RhcnQiLCJvbkRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBQ0E7O0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRSxFQUhMO0FBSVBDLEVBQUFBLE1BSk8sb0JBSUUsQ0FBRSxDQUpKO0FBTVBDLEVBQUFBLGNBTk8sNEJBTVU7QUFDZixRQUFJQyxVQUFVLEdBQUdOLEVBQUUsQ0FBQ08sUUFBSCxDQUNkQyxRQURjLEdBRWRDLGNBRmMsQ0FFQyxZQUZELEVBR2RDLFlBSGMsQ0FHRCxZQUhDLENBQWpCO0FBSUEsUUFBSUMsU0FBUyxHQUFHWCxFQUFFLENBQUNPLFFBQUgsQ0FDYkMsUUFEYSxHQUViQyxjQUZhLENBRUUsV0FGRixFQUdiQyxZQUhhLENBR0EsV0FIQSxDQUFoQjtBQUtBLFFBQUlFLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxHQUF2QjtBQUNBLHVDQUFZRCxNQUFaLEVBQ0dFLElBREgsQ0FDUSxVQUFDQyxJQUFELEVBQVU7QUFDZEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBQ0EsVUFBSUEsSUFBSSxDQUFDQSxJQUFMLENBQVVHLE9BQVYsSUFBcUIsSUFBckIsSUFBNkJILElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFWLElBQXFCLElBQXRELEVBQTREO0FBQzFELFlBQUlKLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxPQUFWLElBQXFCWixVQUFVLENBQUNjLEdBQXBDLEVBQXlDO0FBQ3ZDLGNBQUlDLEVBQUUsR0FBR04sSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQW5CO0FBQ0Esc0RBQXFCUCxNQUFyQixFQUE2QlMsRUFBN0IsRUFBaUNQLElBQWpDLENBQXNDLFVBQUNDLElBQUQsRUFBVTtBQUM5Q0MsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUosWUFBQUEsU0FBUyxDQUFDRSxHQUFWLEdBQWdCLElBQWhCO0FBQ0FiLFlBQUFBLEVBQUUsQ0FBQ08sUUFBSCxDQUFZZSxTQUFaLENBQXNCLGtCQUF0QjtBQUNELFdBSkQsRUFGdUMsQ0FPdkM7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0QsWUFBSVAsSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQVYsSUFBcUJiLFVBQVUsQ0FBQ2MsR0FBcEMsRUFBeUM7QUFDdkMsc0RBQXFCUixNQUFyQixFQUE2QkUsSUFBN0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBSixZQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0IsSUFBaEI7QUFDQWIsWUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVllLFNBQVosQ0FBc0Isa0JBQXRCO0FBQ0QsV0FKRCxFQUR1QyxDQUtuQztBQUNKO0FBQ0E7QUFDRDtBQUNGOztBQUNELFVBQUlQLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxPQUFWLElBQXFCLElBQXJCLElBQTZCSCxJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBVixJQUFxQixJQUF0RCxFQUE0RDtBQUMxRCxnREFBaUJQLE1BQWpCLEVBQXlCRSxJQUF6QixDQUE4QixVQUFDQyxJQUFELEVBQVU7QUFDdENDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FKLFVBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixVQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixrQkFBdEI7QUFDRCxTQUpELEVBRDBELENBS3REO0FBQ0o7QUFDQTtBQUNEOztBQUNELFVBQUlQLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxPQUFWLElBQXFCLElBQXJCLElBQTZCSCxJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBVixJQUFxQixJQUF0RCxFQUE0RDtBQUMxRCxnREFBaUJQLE1BQWpCLEVBQXlCRSxJQUF6QixDQUE4QixVQUFDQyxJQUFELEVBQVU7QUFDdENDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FKLFVBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixVQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixrQkFBdEI7QUFDRCxTQUpELEVBRDBELENBS3REO0FBQ0o7QUFDQTtBQUNEO0FBQ0YsS0EzQ0gsV0E0Q1MsWUFBWTtBQUNqQk4sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxLQTlDSDtBQStDRCxHQWhFTTtBQWlFUE0sRUFBQUEsS0FqRU8sbUJBaUVDLENBQUUsQ0FqRUg7QUFrRVBDLEVBQUFBLFNBbEVPLHVCQWtFSyxDQUFFLENBbEVQLENBbUVQOztBQW5FTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IHJlY2VpdmVkcm9vbUlEIH0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0cm9vbWJ5SUQsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDEsXHJcbiAgcXVpdGZ1bGxyb29tYnlJRGFzcDIsXHJcbiAgcXVpdHJvb21ieUlEYXNwMSxcclxuICBxdWl0cm9vbWJ5SURhc3AyLFxyXG59IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7fSxcclxuICBvbkxvYWQoKSB7fSxcclxuXHJcbiAgYmFja3Rvcm9vbWxpc3QoKSB7XHJcbiAgICB2YXIgUGxheWVySW5mbyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckluZm9cIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlBsYXllckluZm9cIik7XHJcbiAgICB2YXIgUm9vbUluZm9zID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUm9vbUluZm9zXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJSb29tSW5mb3NcIik7XHJcblxyXG4gICAgdmFyIHJvb21JRCA9IFJvb21JbmZvcy5yaWQ7XHJcbiAgICBnZXRyb29tYnlJRChyb29tSUQpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIxICE9IG51bGwgJiYgZGF0YS5kYXRhLlBsYXllcjIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIxID09IFBsYXllckluZm8udWlkKSB7XHJcbiAgICAgICAgICAgIGxldCBwMiA9IGRhdGEuZGF0YS5QbGF5ZXIyO1xyXG4gICAgICAgICAgICBxdWl0ZnVsbHJvb21ieUlEYXNwMShyb29tSUQsIHAyKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZGF1Y3VvY3Zhbmdyb29tc1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIC5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMiA9PSBQbGF5ZXJJbmZvLnVpZCkge1xyXG4gICAgICAgICAgICBxdWl0ZnVsbHJvb21ieUlEYXNwMihyb29tSUQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICBSb29tSW5mb3MucmlkID0gbnVsbDtcclxuICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkYXVjdW9jdmFuZ3Jvb21zXCIpO1xyXG4gICAgICAgICAgICB9KTsgLy8gLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEgPT0gbnVsbCAmJiBkYXRhLmRhdGEuUGxheWVyMiAhPSBudWxsKSB7XHJcbiAgICAgICAgICBxdWl0cm9vbWJ5SURhc3AyKHJvb21JRCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImRhdWN1b2N2YW5ncm9vbXNcIik7XHJcbiAgICAgICAgICB9KTsgLy8gLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSAhPSBudWxsICYmIGRhdGEuZGF0YS5QbGF5ZXIyID09IG51bGwpIHtcclxuICAgICAgICAgIHF1aXRyb29tYnlJRGFzcDEocm9vbUlEKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBSb29tSW5mb3MucmlkID0gbnVsbDtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZGF1Y3VvY3Zhbmdyb29tc1wiKTtcclxuICAgICAgICAgIH0pOyAvLyAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgb25EaXNhYmxlKCkge30sXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=