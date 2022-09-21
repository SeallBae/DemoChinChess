
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
    uname: "",
    state: ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5ZXJJbmZvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidWlkIiwidW5hbWUiLCJzdGF0ZSIsIm9uTG9hZCIsImdhbWUiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEdBQUcsRUFBRSxDQURLO0FBRVZDLElBQUFBLEtBQUssRUFBRSxFQUZHO0FBR1ZDLElBQUFBLEtBQUssRUFBRTtBQUhHLEdBSEw7QUFTUEMsRUFBQUEsTUFUTyxvQkFTRTtBQUNQUCxJQUFBQSxFQUFFLENBQUNRLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS0MsSUFBaEM7QUFDQSxRQUFJTixHQUFHLEdBQUcsS0FBS0EsR0FBZjtBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUNELEdBYk07QUFlUE0sRUFBQUEsS0FmTyxtQkFlQyxDQUFFLENBZkg7QUFpQlBDLEVBQUFBLE1BakJPLGtCQWlCQUMsRUFqQkEsRUFpQlc7QUFBQSxRQUFYQSxFQUFXO0FBQVhBLE1BQUFBLEVBQVcsR0FBTixJQUFNO0FBQUE7O0FBQ2hCLHVDQUFXLEtBQUtULEdBQWhCO0FBQ0FKLElBQUFBLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxrQkFBUixDQUEyQixLQUFLQyxJQUFoQztBQUNEO0FBcEJNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgc2VuZHVzZXJJRCB9IGZyb20gXCIuL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB1aWQ6IDAsXHJcbiAgICB1bmFtZTogXCJcIixcclxuICAgIHN0YXRlOiBcIlwiLFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICBsZXQgdWlkID0gdGhpcy51aWQ7XHJcbiAgICBsZXQgdW5hbWUgPSB0aGlzLnVuYW1lO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge30sXHJcblxyXG4gIHVwZGF0ZShkdCA9IDEwMDApIHtcclxuICAgIHNlbmR1c2VySUQodGhpcy51aWQpO1xyXG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICB9LFxyXG59KTtcclxuIl19