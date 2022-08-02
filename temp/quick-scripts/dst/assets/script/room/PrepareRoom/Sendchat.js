
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/PrepareRoom/Sendchat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fb25MA9YVDtroFv2qJGESI', 'Sendchat');
// script/room/PrepareRoom/Sendchat.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    chat: {
      "default": null,
      type: cc.Label
    },
    chatholder: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  emitchat: function emitchat() {
    var socket = io.connect("http://localhost:3000", {
      transports: ['websocket']
    });
    socket.emit('chat send', this.chat.string);
    this.chat.string = "";
    var chatholder = this.chatholder;
    socket.on('chat received', function (data) {
      chatholder.string += "\n";
      chatholder.string += data;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxQcmVwYXJlUm9vbVxcU2VuZGNoYXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGF0IiwidHlwZSIsIkxhYmVsIiwiY2hhdGhvbGRlciIsIm9uTG9hZCIsImVtaXRjaGF0Iiwic29ja2V0IiwiaW8iLCJjb25uZWN0IiwidHJhbnNwb3J0cyIsImVtaXQiLCJzdHJpbmciLCJvbiIsImRhdGEiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBQztBQUNELGlCQUFTLElBRFI7QUFFREMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlIsS0FERztBQUtSQyxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGO0FBTEgsR0FIUDtBQWFMRSxFQUFBQSxNQWJLLG9CQWFLLENBQUUsQ0FiUDtBQWNMQyxFQUFBQSxRQWRLLHNCQWNLO0FBQ04sUUFBSUMsTUFBTSxHQUFHQyxFQUFFLENBQUNDLE9BQUgsQ0FBVyx1QkFBWCxFQUFvQztBQUFFQyxNQUFBQSxVQUFVLEVBQUcsQ0FBQyxXQUFEO0FBQWYsS0FBcEMsQ0FBYjtBQUVBSCxJQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxXQUFaLEVBQXlCLEtBQUtWLElBQUwsQ0FBVVcsTUFBbkM7QUFDQSxTQUFLWCxJQUFMLENBQVVXLE1BQVYsR0FBbUIsRUFBbkI7QUFFQSxRQUFJUixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7QUFDQUcsSUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFDQyxJQUFELEVBQVE7QUFDL0JWLE1BQUFBLFVBQVUsQ0FBQ1EsTUFBWCxJQUFxQixJQUFyQjtBQUNBUixNQUFBQSxVQUFVLENBQUNRLE1BQVgsSUFBcUJFLElBQXJCO0FBQ0gsS0FIRDtBQUlILEdBekJJO0FBMkJMQyxFQUFBQSxLQTNCSyxtQkEyQkksQ0FFUixDQTdCSSxDQStCTDs7QUEvQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNoYXQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYXRob2xkZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHt9LFxyXG4gICAgZW1pdGNoYXQoKXtcclxuICAgICAgICBsZXQgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCB7IHRyYW5zcG9ydHMgOiBbJ3dlYnNvY2tldCddIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQuZW1pdCgnY2hhdCBzZW5kJywgdGhpcy5jaGF0LnN0cmluZyk7XHJcbiAgICAgICAgdGhpcy5jaGF0LnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNoYXRob2xkZXIgPSB0aGlzLmNoYXRob2xkZXI7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdjaGF0IHJlY2VpdmVkJywgKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNoYXRob2xkZXIuc3RyaW5nICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIGNoYXRob2xkZXIuc3RyaW5nICs9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19