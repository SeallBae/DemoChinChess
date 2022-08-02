
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
    fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: name
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log("data.data.id", data.data.id);
      PlayerInfo.uid = data.data.id;
      cc.director.loadScene("homepage");
    }); // receiveduserID().then((data) => {
    //   PlayerInfo.uid = data;
    //   PlayerInfo.uname = name;
    // });
  },
  update: function update(dt) {}
}); // var app = require('./socket_connection.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5bm93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVXNlcm5hbWUiLCJ0eXBlIiwiTGFiZWwiLCJQbGF5ZXJJbmZvIiwiTm9kZSIsIm9uRW5hYmxlIiwib25sb2FkIiwic3RhcnQiLCJsb2FkX3NjZW5lIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsInN0cmluZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ1aWQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQURBO0FBS1ZDLElBQUFBLFVBQVUsRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0FBRkM7QUFMRixHQUZMO0FBWVBDLEVBQUFBLFFBWk8sc0JBWUksQ0FBRSxDQVpOO0FBYVBDLEVBQUFBLE1BYk8sb0JBYUUsQ0FBRSxDQWJKO0FBY1BDLEVBQUFBLEtBZE8sbUJBY0MsQ0FBRSxDQWRIO0FBZVBDLEVBQUFBLFVBZk8sd0JBZU07QUFDWCxRQUFJTCxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQk0sWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBakI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1YsUUFBTCxDQUFjVyxNQUF6QjtBQUNBQyxJQUFBQSxLQUFLLENBQUMsb0RBQUQsRUFBdUQ7QUFDMURDLE1BQUFBLE1BQU0sRUFBRSxNQURrRDtBQUUxREMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLE1BQU0sRUFBRSxrQkFERDtBQUVQLHdCQUFnQjtBQUZULE9BRmlEO0FBTTFEQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVsQixRQUFBQSxRQUFRLEVBQUVVO0FBQVosT0FBZjtBQU5vRCxLQUF2RCxDQUFMLENBUUdTLElBUkgsQ0FRUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQVJSLEVBU0dGLElBVEgsQ0FTUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsSUFBSSxDQUFDQSxJQUFMLENBQVVHLEVBQXRDO0FBQ0F0QixNQUFBQSxVQUFVLENBQUN1QixHQUFYLEdBQWlCSixJQUFJLENBQUNBLElBQUwsQ0FBVUcsRUFBM0I7QUFFQTdCLE1BQUFBLEVBQUUsQ0FBQytCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNELEtBZEgsRUFIVyxDQWtCWDtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBckNNO0FBc0NQQyxFQUFBQSxNQXRDTyxrQkFzQ0FDLEVBdENBLEVBc0NJLENBQUU7QUF0Q04sQ0FBVCxHQXdDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZWR1c2VySUQsIHNlbmR1c2VySUQgfSBmcm9tIFwiLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIFVzZXJuYW1lOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIFBsYXllckluZm86IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbkVuYWJsZSgpIHt9LFxyXG4gIG9ubG9hZCgpIHt9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgbG9hZF9zY2VuZSgpIHtcclxuICAgIHZhciBQbGF5ZXJJbmZvID0gdGhpcy5QbGF5ZXJJbmZvLmdldENvbXBvbmVudChcIlBsYXllckluZm9cIik7XHJcbiAgICBsZXQgbmFtZSA9IHRoaXMuVXNlcm5hbWUuc3RyaW5nO1xyXG4gICAgZmV0Y2goXCJodHRwczovL2NoaW5lc2UtY2hlc3Mtdm5wLmhlcm9rdWFwcC5jb20vYXBpL3BsYXllclwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFVzZXJuYW1lOiBuYW1lIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhLmRhdGEuaWRcIiwgZGF0YS5kYXRhLmlkKTtcclxuICAgICAgICBQbGF5ZXJJbmZvLnVpZCA9IGRhdGEuZGF0YS5pZDtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaG9tZXBhZ2VcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gcmVjZWl2ZWR1c2VySUQoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgIFBsYXllckluZm8udWlkID0gZGF0YTtcclxuICAgIC8vICAgUGxheWVySW5mby51bmFtZSA9IG5hbWU7XHJcbiAgICAvLyB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4vLyB2YXIgYXBwID0gcmVxdWlyZSgnLi9zb2NrZXRfY29ubmVjdGlvbi5qcycpO1xyXG4iXX0=