
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
  load_scene: function load_scene() {// cc.director.loadScene("rooms");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFuZ2VzY2VuZVxcbW92ZXRvcm9vbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImNyZWF0ZV9yb29tIiwibG9hZF9zY2VuZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUUsRUFITDtBQUlQQyxFQUFBQSxNQUpPLG9CQUlFLENBQUUsQ0FKSjtBQUtQQyxFQUFBQSxXQUxPLHlCQUtPLENBQUUsQ0FMVDtBQU1QQyxFQUFBQSxVQU5PLHdCQU1NLENBQ1g7QUFDRCxHQVJNO0FBU1BDLEVBQUFBLEtBVE8sbUJBU0MsQ0FBRSxDQVRILENBV1A7O0FBWE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHt9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIGNyZWF0ZV9yb29tKCkge30sXHJcbiAgbG9hZF9zY2VuZSgpIHtcclxuICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21zXCIpO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=