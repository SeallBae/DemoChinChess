
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