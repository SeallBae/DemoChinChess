
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
    fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);

      if (data.data.Player1 != null && data.data.Player2 != null) {
        if (data.data.Player1 == PlayerInfo.uid) {
          var p2 = data.data.Player2;
          fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              Player1: p2,
              Player2: null
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          });
        }

        if (data.data.Player2 == PlayerInfo.uid) {
          fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              Player2: null
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          });
        }
      }

      if (data.data.Player1 == null && data.data.Player2 != null) {
        fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Player2: null
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data);
          RoomInfos.rid = null;
          cc.director.loadScene("rooms");
        });
      }

      if (data.data.Player1 != null && data.data.Player2 == null) {
        fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Player1: null
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcYmFja3Rvcm9vbWxpc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJiYWNrdG9yb29tbGlzdCIsIlBsYXllckluZm8iLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJSb29tSW5mb3MiLCJyb29tSUQiLCJyaWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIxIiwiUGxheWVyMiIsInVpZCIsInAyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkU2NlbmUiLCJzdGFydCIsIm9uRGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFLEVBSEw7QUFJUEMsRUFBQUEsTUFKTyxvQkFJRSxDQUFFLENBSko7QUFLUEMsRUFBQUEsY0FMTyw0QkFLVTtBQUNmLFFBQUlDLFVBQVUsR0FBR04sRUFBRSxDQUFDTyxRQUFILENBQ2RDLFFBRGMsR0FFZEMsY0FGYyxDQUVDLFlBRkQsRUFHZEMsWUFIYyxDQUdELFlBSEMsQ0FBakI7QUFJQSxRQUFJQyxTQUFTLEdBQUdYLEVBQUUsQ0FBQ08sUUFBSCxDQUNiQyxRQURhLEdBRWJDLGNBRmEsQ0FFRSxXQUZGLEVBR2JDLFlBSGEsQ0FHQSxXQUhBLENBQWhCO0FBS0EsUUFBSUUsTUFBTSxHQUFHRCxTQUFTLENBQUNFLEdBQXZCO0FBQ0FDLElBQUFBLEtBQUssQ0FBQyxzREFBc0RGLE1BQXZELEVBQStEO0FBQ2xFRyxNQUFBQSxNQUFNLEVBQUUsS0FEMEQ7QUFFbEVDLE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxNQUFNLEVBQUUsa0JBREQ7QUFFUCx3QkFBZ0I7QUFGVDtBQUZ5RCxLQUEvRCxDQUFMLENBT0dDLElBUEgsQ0FPUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQVBSLEVBUUdGLElBUkgsQ0FRUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBQ0EsVUFBSUEsSUFBSSxDQUFDQSxJQUFMLENBQVVHLE9BQVYsSUFBcUIsSUFBckIsSUFBNkJILElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFWLElBQXFCLElBQXRELEVBQTREO0FBQzFELFlBQUlKLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxPQUFWLElBQXFCbEIsVUFBVSxDQUFDb0IsR0FBcEMsRUFBeUM7QUFDdkMsY0FBSUMsRUFBRSxHQUFHTixJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBbkI7QUFDQVgsVUFBQUEsS0FBSyxDQUNILHNEQUFzREYsTUFEbkQsRUFFSDtBQUNFRyxZQUFBQSxNQUFNLEVBQUUsT0FEVjtBQUVFQyxZQUFBQSxPQUFPLEVBQUU7QUFDUEMsY0FBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsOEJBQWdCO0FBRlQsYUFGWDtBQU1FVyxZQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVOLGNBQUFBLE9BQU8sRUFBRUcsRUFBWDtBQUFlRixjQUFBQSxPQUFPLEVBQUU7QUFBeEIsYUFBZjtBQU5SLFdBRkcsQ0FBTCxDQVdHUCxJQVhILENBV1EsVUFBQ0MsUUFBRDtBQUFBLG1CQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLFdBWFIsRUFZR0YsSUFaSCxDQVlRLFVBQUNHLElBQUQsRUFBVTtBQUNkQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBVixZQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0IsSUFBaEI7QUFDQWIsWUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVl3QixTQUFaLENBQXNCLE9BQXRCO0FBQ0QsV0FoQkg7QUFpQkQ7O0FBQ0QsWUFBSVYsSUFBSSxDQUFDQSxJQUFMLENBQVVJLE9BQVYsSUFBcUJuQixVQUFVLENBQUNvQixHQUFwQyxFQUF5QztBQUN2Q1osVUFBQUEsS0FBSyxDQUNILHNEQUFzREYsTUFEbkQsRUFFSDtBQUNFRyxZQUFBQSxNQUFNLEVBQUUsT0FEVjtBQUVFQyxZQUFBQSxPQUFPLEVBQUU7QUFDUEMsY0FBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsOEJBQWdCO0FBRlQsYUFGWDtBQU1FVyxZQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVMLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQWY7QUFOUixXQUZHLENBQUwsQ0FXR1AsSUFYSCxDQVdRLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxXQVhSLEVBWUdGLElBWkgsQ0FZUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVYsWUFBQUEsU0FBUyxDQUFDRSxHQUFWLEdBQWdCLElBQWhCO0FBQ0FiLFlBQUFBLEVBQUUsQ0FBQ08sUUFBSCxDQUFZd0IsU0FBWixDQUFzQixPQUF0QjtBQUNELFdBaEJIO0FBaUJEO0FBQ0Y7O0FBQ0QsVUFBSVYsSUFBSSxDQUFDQSxJQUFMLENBQVVHLE9BQVYsSUFBcUIsSUFBckIsSUFBNkJILElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFWLElBQXFCLElBQXRELEVBQTREO0FBQzFEWCxRQUFBQSxLQUFLLENBQUMsc0RBQXNERixNQUF2RCxFQUErRDtBQUNsRUcsVUFBQUEsTUFBTSxFQUFFLE9BRDBEO0FBRWxFQyxVQUFBQSxPQUFPLEVBQUU7QUFDUEMsWUFBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsNEJBQWdCO0FBRlQsV0FGeUQ7QUFNbEVXLFVBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUwsWUFBQUEsT0FBTyxFQUFFO0FBQVgsV0FBZjtBQU40RCxTQUEvRCxDQUFMLENBUUdQLElBUkgsQ0FRUSxVQUFDQyxRQUFEO0FBQUEsaUJBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsU0FSUixFQVNHRixJQVRILENBU1EsVUFBQ0csSUFBRCxFQUFVO0FBQ2RDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FWLFVBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixVQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWXdCLFNBQVosQ0FBc0IsT0FBdEI7QUFDRCxTQWJIO0FBY0Q7O0FBQ0QsVUFBSVYsSUFBSSxDQUFDQSxJQUFMLENBQVVHLE9BQVYsSUFBcUIsSUFBckIsSUFBNkJILElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFWLElBQXFCLElBQXRELEVBQTREO0FBQzFEWCxRQUFBQSxLQUFLLENBQUMsc0RBQXNERixNQUF2RCxFQUErRDtBQUNsRUcsVUFBQUEsTUFBTSxFQUFFLE9BRDBEO0FBRWxFQyxVQUFBQSxPQUFPLEVBQUU7QUFDUEMsWUFBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsNEJBQWdCO0FBRlQsV0FGeUQ7QUFNbEVXLFVBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRU4sWUFBQUEsT0FBTyxFQUFFO0FBQVgsV0FBZjtBQU40RCxTQUEvRCxDQUFMLENBUUdOLElBUkgsQ0FRUSxVQUFDQyxRQUFEO0FBQUEsaUJBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsU0FSUixFQVNHRixJQVRILENBU1EsVUFBQ0csSUFBRCxFQUFVO0FBQ2RDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FWLFVBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixJQUFoQjtBQUNBYixVQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWXdCLFNBQVosQ0FBc0IsT0FBdEI7QUFDRCxTQWJIO0FBY0Q7QUFDRixLQW5GSDtBQW9GRCxHQXBHTTtBQXFHUEMsRUFBQUEsS0FyR08sbUJBcUdDLENBQUUsQ0FyR0g7QUFzR1BDLEVBQUFBLFNBdEdPLHVCQXNHSyxDQUFFLENBdEdQLENBdUdQOztBQXZHTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IHJlY2VpdmVkcm9vbUlEIH0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7fSxcclxuICBvbkxvYWQoKSB7fSxcclxuICBiYWNrdG9yb29tbGlzdCgpIHtcclxuICAgIHZhciBQbGF5ZXJJbmZvID0gY2MuZGlyZWN0b3JcclxuICAgICAgLmdldFNjZW5lKClcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVySW5mb1wiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KFwiUGxheWVySW5mb1wiKTtcclxuICAgIHZhciBSb29tSW5mb3MgPSBjYy5kaXJlY3RvclxyXG4gICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJSb29tSW5mb3NcIilcclxuICAgICAgLmdldENvbXBvbmVudChcIlJvb21JbmZvc1wiKTtcclxuXHJcbiAgICBsZXQgcm9vbUlEID0gUm9vbUluZm9zLnJpZDtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tL1wiICsgcm9vbUlELCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEgIT0gbnVsbCAmJiBkYXRhLmRhdGEuUGxheWVyMiAhPSBudWxsKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEgPT0gUGxheWVySW5mby51aWQpIHtcclxuICAgICAgICAgICAgbGV0IHAyID0gZGF0YS5kYXRhLlBsYXllcjI7XHJcbiAgICAgICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9yb29tL1wiICsgcm9vbUlELFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFBsYXllcjE6IHAyLCBQbGF5ZXIyOiBudWxsIH0pLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIFJvb21JbmZvcy5yaWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbXNcIik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjIgPT0gUGxheWVySW5mby51aWQpIHtcclxuICAgICAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICAgICAgXCJodHRwczovL2NoaW5lc2UtY2hlc3Mtdm5wLmhlcm9rdWFwcC5jb20vYXBpL3Jvb20vXCIgKyByb29tSUQsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgUGxheWVyMjogbnVsbCB9KSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBSb29tSW5mb3MucmlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5kYXRhLlBsYXllcjEgPT0gbnVsbCAmJiBkYXRhLmRhdGEuUGxheWVyMiAhPSBudWxsKSB7XHJcbiAgICAgICAgICBmZXRjaChcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbS9cIiArIHJvb21JRCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgUGxheWVyMjogbnVsbCB9KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIFJvb21JbmZvcy5yaWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5QbGF5ZXIxICE9IG51bGwgJiYgZGF0YS5kYXRhLlBsYXllcjIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgZmV0Y2goXCJodHRwczovL2NoaW5lc2UtY2hlc3Mtdm5wLmhlcm9rdWFwcC5jb20vYXBpL3Jvb20vXCIgKyByb29tSUQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFBsYXllcjE6IG51bGwgfSksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICBSb29tSW5mb3MucmlkID0gbnVsbDtcclxuICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tc1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgb25EaXNhYmxlKCkge30sXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=