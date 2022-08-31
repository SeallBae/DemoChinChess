
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/PrepareRoom/ready.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70d19pJT7BEV6aRveYIWgtp', 'ready');
// script/room/PrepareRoom/ready.js

"use strict";

var _axios_connection = require("../../axios_connection");

var _socket_connection = require("../../socket_connection");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    waiting: {
      "default": null,
      type: cc.Node
    },
    startbutton: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {// waiting = this.waiting;
    // startbutton = this.startbutton;
    // receivedroomID().then((data) => {
    //   getroombyID(data).then((data) => {
    //     if (data.data.Player2 != null) {
    //       waiting.active = false;
    //       waiting.opacity = 0;
    //       startbutton.active = true;
    //       startbutton.opacity = 255;
    //     }
    //   });
    // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxQcmVwYXJlUm9vbVxccmVhZHkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ3YWl0aW5nIiwidHlwZSIsIk5vZGUiLCJzdGFydGJ1dHRvbiIsIm9uTG9hZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGLEtBREM7QUFLVkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1gsaUJBQVMsSUFERTtBQUVYRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRTtBQUxILEdBSEw7QUFjUEUsRUFBQUEsTUFkTyxvQkFjRSxDQUFFLENBZEo7QUFnQlBDLEVBQUFBLEtBaEJPLG1CQWdCQyxDQUFFLENBaEJIO0FBa0JQQyxFQUFBQSxNQWxCTyxrQkFrQkFDLEVBbEJBLEVBa0JJLENBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUEvQk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCB7IGdldHJvb21ieUlEIH0gZnJvbSBcIi4uLy4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgcmVjZWl2ZWRyb29tSUQgfSBmcm9tIFwiLi4vLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgd2FpdGluZzoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIHN0YXJ0YnV0dG9uOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHt9LFxyXG5cclxuICBzdGFydCgpIHt9LFxyXG5cclxuICB1cGRhdGUoZHQpIHtcclxuICAgIC8vIHdhaXRpbmcgPSB0aGlzLndhaXRpbmc7XHJcbiAgICAvLyBzdGFydGJ1dHRvbiA9IHRoaXMuc3RhcnRidXR0b247XHJcbiAgICAvLyByZWNlaXZlZHJvb21JRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgZ2V0cm9vbWJ5SUQoZGF0YSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChkYXRhLmRhdGEuUGxheWVyMiAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICB3YWl0aW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgd2FpdGluZy5vcGFjaXR5ID0gMDtcclxuICAgIC8vICAgICAgIHN0YXJ0YnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICBzdGFydGJ1dHRvbi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9KTtcclxuICB9LFxyXG59KTtcclxuIl19