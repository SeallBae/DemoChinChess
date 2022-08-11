
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/temp/deleteuser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa6c1TRo4VL3KaFZDstwxgH', 'deleteuser');
// script/temp/deleteuser.js

"use strict";

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    deluserID: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  delete_user: function delete_user() {
    var userID = this.deluserID.string;
    (0, _axios_connection.deleteuser)(userID);
  },
  start: function start() {
    (0, _axios_connection.getuserlist)();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0ZW1wXFxkZWxldGV1c2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGVsdXNlcklEIiwidHlwZSIsIkxhYmVsIiwib25Mb2FkIiwiZGVsZXRlX3VzZXIiLCJ1c2VySUQiLCJzdHJpbmciLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQTtBQURELEdBSEw7QUFTUEMsRUFBQUEsTUFUTyxvQkFTRSxDQUFFLENBVEo7QUFVUEMsRUFBQUEsV0FWTyx5QkFVTztBQUNaLFFBQUlDLE1BQU0sR0FBRyxLQUFLTCxTQUFMLENBQWVNLE1BQTVCO0FBQ0Esc0NBQVdELE1BQVg7QUFDRCxHQWJNO0FBZVBFLEVBQUFBLEtBZk8sbUJBZUM7QUFDTjtBQUNELEdBakJNLENBbUJQOztBQW5CTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgZ2V0dXNlcmxpc3QsIGRlbGV0ZXVzZXIgfSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgZGVsdXNlcklEOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHt9LFxyXG4gIGRlbGV0ZV91c2VyKCkge1xyXG4gICAgbGV0IHVzZXJJRCA9IHRoaXMuZGVsdXNlcklELnN0cmluZztcclxuICAgIGRlbGV0ZXVzZXIodXNlcklEKTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGdldHVzZXJsaXN0KCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=