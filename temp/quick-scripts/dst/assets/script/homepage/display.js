
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
      (0, _axios_connection.receivedUserbyID)(uid).then(function (data) {
        name.string = data.data.Username + " #" + uid;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxob21lcGFnZVxcZGlzcGxheS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5hbWVkaXNwbGF5IiwidHlwZSIsIkxhYmVsIiwib25Mb2FkIiwidWlkIiwidGhlbiIsImRhdGEiLCJuYW1lIiwic3RyaW5nIiwiVXNlcm5hbWUiLCJzdGFydCIsIm9uRGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1gsaUJBQVMsSUFERTtBQUVYQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRTtBQURILEdBSEw7QUFTUEMsRUFBQUEsTUFUTyxvQkFTRTtBQUFBOztBQUNQLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsNkNBQWlCQyxJQUFqQixDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDOUJGLE1BQUFBLEdBQUcsR0FBR0UsSUFBTjtBQUNBLFVBQUlDLElBQUksR0FBRyxLQUFJLENBQUNQLFdBQWhCO0FBQ0EsOENBQWlCSSxHQUFqQixFQUFzQkMsSUFBdEIsQ0FBMkIsVUFBQUMsSUFBSSxFQUFFO0FBQy9CQyxRQUFBQSxJQUFJLENBQUNDLE1BQUwsR0FBY0YsSUFBSSxDQUFDQSxJQUFMLENBQVVHLFFBQVYsR0FBcUIsSUFBckIsR0FBNEJMLEdBQTFDO0FBQ0QsT0FGRDtBQUdELEtBTkQ7QUFPRCxHQWxCTTtBQW1CUE0sRUFBQUEsS0FuQk8sbUJBbUJDLENBQUUsQ0FuQkg7QUFvQlBDLEVBQUFBLFNBcEJPLHVCQW9CSyxDQUFFLENBcEJQLENBcUJQOztBQXJCTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZW5kdXNlcklELCByZWNlaXZlZHVzZXJJRCB9IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5pbXBvcnQge3JlY2VpdmVkVXNlcmJ5SUR9IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIG5hbWVkaXNwbGF5OiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHZhciB1aWQgPSAwO1xyXG4gICAgcmVjZWl2ZWR1c2VySUQoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHVpZCA9IGRhdGE7XHJcbiAgICAgIGxldCBuYW1lID0gdGhpcy5uYW1lZGlzcGxheTtcclxuICAgICAgcmVjZWl2ZWRVc2VyYnlJRCh1aWQpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgIG5hbWUuc3RyaW5nID0gZGF0YS5kYXRhLlVzZXJuYW1lICsgXCIgI1wiICsgdWlkO1xyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIG9uRGlzYWJsZSgpIHt9LFxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19