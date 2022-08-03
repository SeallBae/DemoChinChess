
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