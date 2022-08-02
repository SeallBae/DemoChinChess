
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

movecode = [];
list = []; // let socket = io("http://localhost:3000", {
//     query: {
//       userId: 1,
//     },
// });
// import * as io from "socket.io-client";
// let socket = io.connect('http://localhost:3000/');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lcGxheVxcbW92ZWNvZGVsaXN0LmpzIl0sIm5hbWVzIjpbIm1vdmVjb2RlIiwibGlzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXVsdGlsaW5lIiwibWFwIiwidHlwZSIsIk5vZGUiLCJtb3ZlY29kZWxpc3QiLCJMYWJlbCIsInVwZGF0ZWxpc3QiLCJzdGFydCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOztBQVRBQSxRQUFRLEdBQUcsRUFBWDtBQUNBQyxJQUFJLEdBQUcsRUFBUCxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkosSUFBQUEsSUFBSSxFQUFFO0FBQ0osaUJBQVMsRUFETDtBQUVKSyxNQUFBQSxTQUFTLEVBQUU7QUFGUCxLQURJO0FBS1ZDLElBQUFBLEdBQUcsRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTixFQUFFLENBQUNPO0FBRk4sS0FMSztBQVNWQyxJQUFBQSxZQUFZLEVBQUU7QUFDWixpQkFBUyxJQURHO0FBRVpGLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDUztBQUZHO0FBVEosR0FITDtBQWtCUEMsRUFBQUEsVUFsQk8sd0JBa0JNLENBQ1g7QUFDRCxHQXBCTTtBQXNCUDtBQUNBQyxFQUFBQSxLQXZCTyxtQkF1QkMsQ0FBRSxDQXZCSDtBQXdCUEMsRUFBQUEsTUF4Qk8sa0JBd0JBQyxFQXhCQSxFQXdCSSxDQUFFO0FBeEJOLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vdmVjb2RlID0gW107XHJcbmxpc3QgPSBbXTtcclxuLy8gbGV0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIHtcclxuLy8gICAgIHF1ZXJ5OiB7XHJcbi8vICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG4vLyBpbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG4vLyBsZXQgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycpO1xyXG5pbXBvcnQge1xyXG4gIHJlY2VpdmVkY2hlc3NQb3NpdGlvbixcclxuICBzZW5kY2hlc3NQb3NpdGlvbixcclxuICBzZW5kZGVhZGNoZXNzLFxyXG4gIHJlY2VpdmVkZGVhZGNoZXNzLFxyXG59IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsaXN0OiB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICAgIG11bHRpbGluZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBtYXA6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBtb3ZlY29kZWxpc3Q6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZWxpc3QoKSB7XHJcbiAgICAvLyBsZXQgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCB7IHRyYW5zcG9ydHMgOiBbJ3dlYnNvY2tldCddIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIH0pXHJcbiAgc3RhcnQoKSB7fSxcclxuICB1cGRhdGUoZHQpIHt9LFxyXG59KTtcclxuIl19