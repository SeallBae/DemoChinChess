
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
    s: 38,
    redcastleupbound: -95,
    redcastledownbound: -171,
    redcastleleftbound: -38,
    redcastlerightbound: 38,
    redriver: -19,
    blackriver: 19,
    blackcastleupbound: 171,
    blackcastledownbound: 95,
    blackcastleleftbound: -38,
    blackcastlerightbound: 38,
    scale: 3,
    chesssize: 30
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib2FyZFxcYm9hcmRpbmZvLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW92ZWNvZGUiLCJjb3VudGJsYWNrZGVhZCIsImNvdW50cmVkZGVhZCIsInMiLCJyZWRjYXN0bGV1cGJvdW5kIiwicmVkY2FzdGxlZG93bmJvdW5kIiwicmVkY2FzdGxlbGVmdGJvdW5kIiwicmVkY2FzdGxlcmlnaHRib3VuZCIsInJlZHJpdmVyIiwiYmxhY2tyaXZlciIsImJsYWNrY2FzdGxldXBib3VuZCIsImJsYWNrY2FzdGxlZG93bmJvdW5kIiwiYmxhY2tjYXN0bGVsZWZ0Ym91bmQiLCJibGFja2Nhc3RsZXJpZ2h0Ym91bmQiLCJzY2FsZSIsImNoZXNzc2l6ZSIsIm9uTG9hZCIsInRlc3QiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2pCLGFBQVNELEVBQUUsQ0FBQ0UsU0FESztBQUdqQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFFBQVEsRUFBRSxFQURBO0FBRVZDLElBQUFBLGNBQWMsRUFBRSxDQUZOO0FBR1ZDLElBQUFBLFlBQVksRUFBRSxDQUhKO0FBSVZDLElBQUFBLENBQUMsRUFBRSxFQUpPO0FBS1ZDLElBQUFBLGdCQUFnQixFQUFFLENBQUMsRUFMVDtBQU1WQyxJQUFBQSxrQkFBa0IsRUFBRSxDQUFDLEdBTlg7QUFPVkMsSUFBQUEsa0JBQWtCLEVBQUUsQ0FBQyxFQVBYO0FBUVZDLElBQUFBLG1CQUFtQixFQUFFLEVBUlg7QUFTVkMsSUFBQUEsUUFBUSxFQUFFLENBQUMsRUFURDtBQVVWQyxJQUFBQSxVQUFVLEVBQUUsRUFWRjtBQVdWQyxJQUFBQSxrQkFBa0IsRUFBRSxHQVhWO0FBWVZDLElBQUFBLG9CQUFvQixFQUFFLEVBWlo7QUFhVkMsSUFBQUEsb0JBQW9CLEVBQUUsQ0FBQyxFQWJiO0FBY1ZDLElBQUFBLHFCQUFxQixFQUFFLEVBZGI7QUFlVkMsSUFBQUEsS0FBSyxFQUFFLENBZkc7QUFnQlZDLElBQUFBLFNBQVMsRUFBRTtBQWhCRCxHQUhLO0FBc0JqQkMsRUFBQUEsTUF0QmlCLG9CQXNCUixDQUFFLENBdEJNO0FBd0JqQkMsRUFBQUEsSUF4QmlCLGtCQXdCVixDQUFFLENBeEJRO0FBMEJqQkMsRUFBQUEsS0ExQmlCLG1CQTBCVCxDQUFFLENBMUJPLENBNEJqQjs7QUE1QmlCLENBQVQsQ0FBViIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IGNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIG1vdmVjb2RlOiBbXSxcclxuICAgIGNvdW50YmxhY2tkZWFkOiAwLFxyXG4gICAgY291bnRyZWRkZWFkOiAwLFxyXG4gICAgczogMzgsXHJcbiAgICByZWRjYXN0bGV1cGJvdW5kOiAtOTUsXHJcbiAgICByZWRjYXN0bGVkb3duYm91bmQ6IC0xNzEsXHJcbiAgICByZWRjYXN0bGVsZWZ0Ym91bmQ6IC0zOCxcclxuICAgIHJlZGNhc3RsZXJpZ2h0Ym91bmQ6IDM4LFxyXG4gICAgcmVkcml2ZXI6IC0xOSxcclxuICAgIGJsYWNrcml2ZXI6IDE5LFxyXG4gICAgYmxhY2tjYXN0bGV1cGJvdW5kOiAxNzEsXHJcbiAgICBibGFja2Nhc3RsZWRvd25ib3VuZDogOTUsXHJcbiAgICBibGFja2Nhc3RsZWxlZnRib3VuZDogLTM4LFxyXG4gICAgYmxhY2tjYXN0bGVyaWdodGJvdW5kOiAzOCxcclxuICAgIHNjYWxlOiAzLFxyXG4gICAgY2hlc3NzaXplOiAzMCxcclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7fSxcclxuXHJcbiAgdGVzdCgpIHt9LFxyXG5cclxuICBzdGFydCgpIHt9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==