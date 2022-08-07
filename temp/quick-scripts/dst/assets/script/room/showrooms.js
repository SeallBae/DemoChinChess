
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/room/showrooms.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b428tgnFNHO71TiT8Zn+27', 'showrooms');
// script/room/showrooms.js

"use strict";

var _socket_connection = require("../socket_connection");

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    listrooms: {
      "default": null,
      type: cc.Label
    },
    id: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    var id = this.id;
    (0, _socket_connection.receiveduserID)().then(function (data) {
      uid = data;
      var name = _this.namedisplay;
      (0, _axios_connection.getUserbyID)(uid).then(function (data) {
        id.string = data.data.Username + " #" + uid;
      });
    });
  },
  show_rooms: function show_rooms() {
    var listrooms = this.listrooms;
    roomlist = [];
    (0, _axios_connection.getroomlist)().then(function (data) {
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].Player1 != null && data.data[i].Player2 != null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- full") + "\n";
        } else if (data.data[i].Player1 != null && data.data[i].Player2 == null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n";
        } else if (data.data[i].Player1 == null && data.data[i].Player2 != null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n";
        } else if (data.data[i].Player1 == null && data.data[i].Player2 == null) {
          roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 0/2") + "\n";
        }
      }

      listrooms.string = roomlist;
    });
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxzaG93cm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0cm9vbXMiLCJ0eXBlIiwiTGFiZWwiLCJpZCIsIm9uTG9hZCIsInRoZW4iLCJkYXRhIiwidWlkIiwibmFtZSIsIm5hbWVkaXNwbGF5Iiwic3RyaW5nIiwiVXNlcm5hbWUiLCJzaG93X3Jvb21zIiwicm9vbWxpc3QiLCJpIiwibGVuZ3RoIiwiUGxheWVyMSIsIlBsYXllcjIiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQUREO0FBS1ZDLElBQUFBLEVBQUUsRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlA7QUFMTSxHQUZMO0FBWVBFLEVBQUFBLE1BWk8sb0JBWUU7QUFBQTs7QUFDUCxRQUFJRCxFQUFFLEdBQUcsS0FBS0EsRUFBZDtBQUNBLDZDQUFpQkUsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCQyxNQUFBQSxHQUFHLEdBQUdELElBQU47QUFDQSxVQUFJRSxJQUFJLEdBQUcsS0FBSSxDQUFDQyxXQUFoQjtBQUNBLHlDQUFZRixHQUFaLEVBQWlCRixJQUFqQixDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDOUJILFFBQUFBLEVBQUUsQ0FBQ08sTUFBSCxHQUFZSixJQUFJLENBQUNBLElBQUwsQ0FBVUssUUFBVixHQUFxQixJQUFyQixHQUE0QkosR0FBeEM7QUFDRCxPQUZEO0FBR0QsS0FORDtBQU9ELEdBckJNO0FBc0JQSyxFQUFBQSxVQXRCTyx3QkFzQk07QUFDWCxRQUFJWixTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQWEsSUFBQUEsUUFBUSxHQUFHLEVBQVg7QUFDQSx5Q0FBY1IsSUFBZCxDQUFtQixVQUFDQyxJQUFELEVBQVU7QUFDM0IsV0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUixJQUFJLENBQUNBLElBQUwsQ0FBVVMsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsWUFBSVIsSUFBSSxDQUFDQSxJQUFMLENBQVVRLENBQVYsRUFBYUUsT0FBYixJQUF3QixJQUF4QixJQUFnQ1YsSUFBSSxDQUFDQSxJQUFMLENBQVVRLENBQVYsRUFBYUcsT0FBYixJQUF3QixJQUE1RCxFQUFrRTtBQUNoRUosVUFBQUEsUUFBUSxJQUNOSyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxhQUFhYixJQUFJLENBQUNBLElBQUwsQ0FBVVEsQ0FBVixFQUFhWCxFQUExQixHQUErQixXQUE5QyxJQUE2RCxJQUQvRDtBQUVELFNBSEQsTUFHTyxJQUNMRyxJQUFJLENBQUNBLElBQUwsQ0FBVVEsQ0FBVixFQUFhRSxPQUFiLElBQXdCLElBQXhCLElBQ0FWLElBQUksQ0FBQ0EsSUFBTCxDQUFVUSxDQUFWLEVBQWFHLE9BQWIsSUFBd0IsSUFGbkIsRUFHTDtBQUNBSixVQUFBQSxRQUFRLElBQ05LLElBQUksQ0FBQ0MsU0FBTCxDQUFlLGFBQWFiLElBQUksQ0FBQ0EsSUFBTCxDQUFVUSxDQUFWLEVBQWFYLEVBQTFCLEdBQStCLFVBQTlDLElBQTRELElBRDlEO0FBRUQsU0FOTSxNQU1BLElBQ0xHLElBQUksQ0FBQ0EsSUFBTCxDQUFVUSxDQUFWLEVBQWFFLE9BQWIsSUFBd0IsSUFBeEIsSUFDQVYsSUFBSSxDQUFDQSxJQUFMLENBQVVRLENBQVYsRUFBYUcsT0FBYixJQUF3QixJQUZuQixFQUdMO0FBQ0FKLFVBQUFBLFFBQVEsSUFDTkssSUFBSSxDQUFDQyxTQUFMLENBQWUsYUFBYWIsSUFBSSxDQUFDQSxJQUFMLENBQVVRLENBQVYsRUFBYVgsRUFBMUIsR0FBK0IsVUFBOUMsSUFBNEQsSUFEOUQ7QUFFRCxTQU5NLE1BTUEsSUFDTEcsSUFBSSxDQUFDQSxJQUFMLENBQVVRLENBQVYsRUFBYUUsT0FBYixJQUF3QixJQUF4QixJQUNBVixJQUFJLENBQUNBLElBQUwsQ0FBVVEsQ0FBVixFQUFhRyxPQUFiLElBQXdCLElBRm5CLEVBR0w7QUFDQUosVUFBQUEsUUFBUSxJQUNOSyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxhQUFhYixJQUFJLENBQUNBLElBQUwsQ0FBVVEsQ0FBVixFQUFhWCxFQUExQixHQUErQixVQUE5QyxJQUE0RCxJQUQ5RDtBQUVEO0FBQ0Y7O0FBQ0RILE1BQUFBLFNBQVMsQ0FBQ1UsTUFBVixHQUFtQkcsUUFBbkI7QUFDRCxLQTFCRDtBQTJCRCxHQXBETTtBQXFEUE8sRUFBQUEsS0FyRE8sbUJBcURDLENBQUUsQ0FyREg7QUFzRFBDLEVBQUFBLE1BdERPLGtCQXNEQUMsRUF0REEsRUFzREksQ0FBRTtBQXRETixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWNlaXZlZHVzZXJJRCB9IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyYnlJRCwgZ2V0cm9vbWxpc3QgfSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsaXN0cm9vbXM6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgaWQ6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IGlkID0gdGhpcy5pZDtcclxuICAgIHJlY2VpdmVkdXNlcklEKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB1aWQgPSBkYXRhO1xyXG4gICAgICBsZXQgbmFtZSA9IHRoaXMubmFtZWRpc3BsYXk7XHJcbiAgICAgIGdldFVzZXJieUlEKHVpZCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlkLnN0cmluZyA9IGRhdGEuZGF0YS5Vc2VybmFtZSArIFwiICNcIiArIHVpZDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNob3dfcm9vbXMoKSB7XHJcbiAgICBsZXQgbGlzdHJvb21zID0gdGhpcy5saXN0cm9vbXM7XHJcbiAgICByb29tbGlzdCA9IFtdO1xyXG4gICAgZ2V0cm9vbWxpc3QoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YVtpXS5QbGF5ZXIxICE9IG51bGwgJiYgZGF0YS5kYXRhW2ldLlBsYXllcjIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIGZ1bGxcIikgKyBcIlxcblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMSAhPSBudWxsICYmXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMiA9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gMS8yXCIpICsgXCJcXG5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjEgPT0gbnVsbCAmJlxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjIgIT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIDEvMlwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIxID09IG51bGwgJiZcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIyID09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSAwLzJcIikgKyBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0cm9vbXMuc3RyaW5nID0gcm9vbWxpc3Q7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgdXBkYXRlKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==