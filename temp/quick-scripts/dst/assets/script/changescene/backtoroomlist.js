
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
          });
        }

        if (data.data.Player2 == PlayerInfo.uid) {
          (0, _axios_connection.quitfullroombyIDasp2)(rid).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          });
        }
      }

      if (data.data.Player1 == null && data.data.Player2 != null) {
        (0, _axios_connection.quitroombyIDasp2)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("rooms");
        });
      }

      if (data.data.Player1 != null && data.data.Player2 == null) {
        (0, _axios_connection.quitroombyIDasp1)(roomID).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("rooms");
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcYmFja3Rvcm9vbWxpc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJiYWNrdG9yb29tbGlzdCIsIlBsYXllckluZm8iLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJSb29tSW5mb3MiLCJyb29tSUQiLCJyaWQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIxIiwiUGxheWVyMiIsInVpZCIsInAyIiwibG9hZFNjZW5lIiwic3RhcnQiLCJvbkRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBQ0E7O0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRSxFQUhMO0FBSVBDLEVBQUFBLE1BSk8sb0JBSUUsQ0FBRSxDQUpKO0FBTVBDLEVBQUFBLGNBTk8sNEJBTVU7QUFDZixRQUFJQyxVQUFVLEdBQUdOLEVBQUUsQ0FBQ08sUUFBSCxDQUNkQyxRQURjLEdBRWRDLGNBRmMsQ0FFQyxZQUZELEVBR2RDLFlBSGMsQ0FHRCxZQUhDLENBQWpCO0FBSUEsUUFBSUMsU0FBUyxHQUFHWCxFQUFFLENBQUNPLFFBQUgsQ0FDYkMsUUFEYSxHQUViQyxjQUZhLENBRUUsV0FGRixFQUdiQyxZQUhhLENBR0EsV0FIQSxDQUFoQjtBQUtBLFFBQUlFLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxHQUF2QjtBQUNBLHVDQUFZRCxNQUFaLEVBQW9CRSxJQUFwQixDQUF5QixVQUFDQyxJQUFELEVBQVU7QUFDakNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUNBLFVBQUlBLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxPQUFWLElBQXFCLElBQXJCLElBQTZCSCxJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBVixJQUFxQixJQUF0RCxFQUE0RDtBQUMxRCxZQUFJSixJQUFJLENBQUNBLElBQUwsQ0FBVUcsT0FBVixJQUFxQlosVUFBVSxDQUFDYyxHQUFwQyxFQUF5QztBQUN2QyxjQUFJQyxFQUFFLEdBQUdOLElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFuQjtBQUNBLHNEQUFxQlAsTUFBckIsRUFBNkJTLEVBQTdCLEVBQWlDUCxJQUFqQyxDQUFzQyxVQUFDQyxJQUFELEVBQVU7QUFDOUNDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FKLFlBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixZQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixPQUF0QjtBQUNELFdBSkQ7QUFLRDs7QUFDRCxZQUFJUCxJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBVixJQUFxQmIsVUFBVSxDQUFDYyxHQUFwQyxFQUF5QztBQUN2QyxzREFBcUJQLEdBQXJCLEVBQTBCQyxJQUExQixDQUErQixVQUFDQyxJQUFELEVBQVU7QUFDdkNDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FKLFlBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixZQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixPQUF0QjtBQUNELFdBSkQ7QUFLRDtBQUNGOztBQUNELFVBQUlQLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxPQUFWLElBQXFCLElBQXJCLElBQTZCSCxJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBVixJQUFxQixJQUF0RCxFQUE0RDtBQUMxRCxnREFBaUJQLE1BQWpCLEVBQXlCRSxJQUF6QixDQUE4QixVQUFDQyxJQUFELEVBQVU7QUFDdENDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FKLFVBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixVQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWWUsU0FBWixDQUFzQixPQUF0QjtBQUNELFNBSkQ7QUFLRDs7QUFDRCxVQUFJUCxJQUFJLENBQUNBLElBQUwsQ0FBVUcsT0FBVixJQUFxQixJQUFyQixJQUE2QkgsSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQVYsSUFBcUIsSUFBdEQsRUFBNEQ7QUFDMUQsZ0RBQWlCUCxNQUFqQixFQUF5QkUsSUFBekIsQ0FBOEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RDQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBSixVQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0IsSUFBaEI7QUFDQWIsVUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVllLFNBQVosQ0FBc0IsT0FBdEI7QUFDRCxTQUpEO0FBS0Q7QUFDRixLQWpDRDtBQWtDRCxHQW5ETTtBQW9EUEMsRUFBQUEsS0FwRE8sbUJBb0RDLENBQUUsQ0FwREg7QUFxRFBDLEVBQUFBLFNBckRPLHVCQXFESyxDQUFFLENBckRQLENBc0RQOztBQXRETyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IHJlY2VpdmVkcm9vbUlEIH0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0cm9vbWJ5SUQsXHJcbiAgam9pbnJvb21ieUlEYXNwMSxcclxuICBqb2lucm9vbWJ5SURhc3AyLFxyXG4gIHF1aXRmdWxscm9vbWJ5SURhc3AxLFxyXG4gIHF1aXRmdWxscm9vbWJ5SURhc3AyLFxyXG4gIHF1aXRyb29tYnlJRGFzcDEsXHJcbiAgcXVpdHJvb21ieUlEYXNwMixcclxufSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge30sXHJcbiAgb25Mb2FkKCkge30sXHJcblxyXG4gIGJhY2t0b3Jvb21saXN0KCkge1xyXG4gICAgdmFyIFBsYXllckluZm8gPSBjYy5kaXJlY3RvclxyXG4gICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJJbmZvXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoXCJQbGF5ZXJJbmZvXCIpO1xyXG4gICAgdmFyIFJvb21JbmZvcyA9IGNjLmRpcmVjdG9yXHJcbiAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJvb21JbmZvc1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUm9vbUluZm9zXCIpO1xyXG5cclxuICAgIGxldCByb29tSUQgPSBSb29tSW5mb3MucmlkO1xyXG4gICAgZ2V0cm9vbWJ5SUQocm9vbUlEKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEgIT0gbnVsbCAmJiBkYXRhLmRhdGEuUGxheWVyMiAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIxID09IFBsYXllckluZm8udWlkKSB7XHJcbiAgICAgICAgICBsZXQgcDIgPSBkYXRhLmRhdGEuUGxheWVyMjtcclxuICAgICAgICAgIHF1aXRmdWxscm9vbWJ5SURhc3AxKHJvb21JRCwgcDIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIFJvb21JbmZvcy5yaWQgPSBudWxsO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tc1wiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjIgPT0gUGxheWVySW5mby51aWQpIHtcclxuICAgICAgICAgIHF1aXRmdWxscm9vbWJ5SURhc3AyKHJpZCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgUm9vbUluZm9zLnJpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSA9PSBudWxsICYmIGRhdGEuZGF0YS5QbGF5ZXIyICE9IG51bGwpIHtcclxuICAgICAgICBxdWl0cm9vbWJ5SURhc3AyKHJvb21JRCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBSb29tSW5mb3MucmlkID0gbnVsbDtcclxuICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMSAhPSBudWxsICYmIGRhdGEuZGF0YS5QbGF5ZXIyID09IG51bGwpIHtcclxuICAgICAgICBxdWl0cm9vbWJ5SURhc3AxKHJvb21JRCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBSb29tSW5mb3MucmlkID0gbnVsbDtcclxuICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgb25EaXNhYmxlKCkge30sXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=