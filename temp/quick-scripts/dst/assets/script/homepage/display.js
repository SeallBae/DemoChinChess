
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/homepage/display.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07b14V0szlPSpdbncZwe8PD', 'display');
// script/homepage/display.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    namedisplay: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    var uid = 0;
    (0, _socket_connection.receiveduserID)().then(function (data) {
      uid = data;
      var name = _this.namedisplay;
      (0, _axios_connection.getUserbyID)(uid).then(function (data) {
        name.string = data.data.Username + " #" + uid;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxob21lcGFnZVxcZGlzcGxheS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5hbWVkaXNwbGF5IiwidHlwZSIsIkxhYmVsIiwib25Mb2FkIiwidWlkIiwidGhlbiIsImRhdGEiLCJuYW1lIiwic3RyaW5nIiwiVXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJvbkRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFdBQVcsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkU7QUFESCxHQUhMO0FBU1BDLEVBQUFBLE1BVE8sb0JBU0U7QUFBQTs7QUFDUCxRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBLDZDQUNHQyxJQURILENBQ1EsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RGLE1BQUFBLEdBQUcsR0FBR0UsSUFBTjtBQUNBLFVBQUlDLElBQUksR0FBRyxLQUFJLENBQUNQLFdBQWhCO0FBQ0EseUNBQVlJLEdBQVosRUFBaUJDLElBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QkMsUUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQWNGLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxRQUFWLEdBQXFCLElBQXJCLEdBQTRCTCxHQUExQztBQUNELE9BRkQ7QUFHRCxLQVBILFdBUVMsWUFBWTtBQUNqQk0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxLQVZIO0FBV0QsR0F0Qk07QUF1QlBDLEVBQUFBLEtBdkJPLG1CQXVCQyxDQUFFLENBdkJIO0FBd0JQQyxFQUFBQSxTQXhCTyx1QkF3QkssQ0FBRSxDQXhCUCxDQXlCUDs7QUF6Qk8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZHVzZXJJRCwgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0VXNlcmJ5SUQgfSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBuYW1lZGlzcGxheToge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICB2YXIgdWlkID0gMDtcclxuICAgIHJlY2VpdmVkdXNlcklEKClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICB1aWQgPSBkYXRhO1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5uYW1lZGlzcGxheTtcclxuICAgICAgICBnZXRVc2VyYnlJRCh1aWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIG5hbWUuc3RyaW5nID0gZGF0YS5kYXRhLlVzZXJuYW1lICsgXCIgI1wiICsgdWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIG9uRGlzYWJsZSgpIHt9LFxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19