
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