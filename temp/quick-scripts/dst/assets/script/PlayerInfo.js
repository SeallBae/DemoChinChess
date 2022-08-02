
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
    (0, _socket_connection.senduserID)(this.uid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5ZXJJbmZvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidWlkIiwidW5hbWUiLCJvbkxvYWQiLCJnYW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxHQUFHLEVBQUUsQ0FESztBQUVWQyxJQUFBQSxLQUFLLEVBQUU7QUFGRyxHQUhMO0FBUVBDLEVBQUFBLE1BUk8sb0JBUUU7QUFDUE4sSUFBQUEsRUFBRSxDQUFDTyxJQUFILENBQVFDLGtCQUFSLENBQTJCLEtBQUtDLElBQWhDO0FBQ0EsUUFBSUwsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDQSxRQUFJQyxLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFDRCxHQVpNO0FBY1BLLEVBQUFBLEtBZE8sbUJBY0MsQ0FBRSxDQWRIO0FBZ0JQQyxFQUFBQSxNQWhCTyxrQkFnQkFDLEVBaEJBLEVBZ0JJO0FBQ1QsdUNBQVcsS0FBS1IsR0FBaEI7QUFDRDtBQWxCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IHNlbmR1c2VySUQgfSBmcm9tIFwiLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdWlkOiAwLFxyXG4gICAgdW5hbWU6IFwiXCIsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIGxldCB1aWQgPSB0aGlzLnVpZDtcclxuICAgIGxldCB1bmFtZSA9IHRoaXMudW5hbWU7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgdXBkYXRlKGR0KSB7XHJcbiAgICBzZW5kdXNlcklEKHRoaXMudWlkKTtcclxuICB9LFxyXG59KTtcclxuIl19