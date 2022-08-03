
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
      (0, _axios_connection.receivedUserbyID)(uid).then(function (data) {
        id.string = data.data.Username + " #" + uid;
      });
    });
  },
  show_rooms: function show_rooms() {
    var listrooms = this.listrooms;
    roomlist = [];
    fetch("https://chinese-chess-vnp.herokuapp.com/api/room", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }) // .then(function(body){
    //     return body.text();
    // })
    .then(function (data) {
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
  start: function start() {// receiveduserID()
    //   .then((data) => {
    //     console.log(data);
    //     id.string = "abc";
    //   })
    //   .catch((error) => {
    //     console.log("something wrongs");
    //   });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxzaG93cm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0cm9vbXMiLCJ0eXBlIiwiTGFiZWwiLCJpZCIsIm9uTG9hZCIsInRoZW4iLCJkYXRhIiwidWlkIiwibmFtZSIsIm5hbWVkaXNwbGF5Iiwic3RyaW5nIiwiVXNlcm5hbWUiLCJzaG93X3Jvb21zIiwicm9vbWxpc3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJyZXNwb25zZSIsImpzb24iLCJpIiwibGVuZ3RoIiwiUGxheWVyMSIsIlBsYXllcjIiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQUREO0FBS1ZDLElBQUFBLEVBQUUsRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlA7QUFMTSxHQUZMO0FBWVBFLEVBQUFBLE1BWk8sb0JBWUU7QUFBQTs7QUFDUCxRQUFJRCxFQUFFLEdBQUcsS0FBS0EsRUFBZDtBQUNBLDZDQUFpQkUsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCQyxNQUFBQSxHQUFHLEdBQUdELElBQU47QUFDQSxVQUFJRSxJQUFJLEdBQUcsS0FBSSxDQUFDQyxXQUFoQjtBQUNBLDhDQUFpQkYsR0FBakIsRUFBc0JGLElBQXRCLENBQTJCLFVBQUFDLElBQUksRUFBRTtBQUMvQkgsUUFBQUEsRUFBRSxDQUFD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ZHVzZXJJRCB9IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5pbXBvcnQge3JlY2VpdmVkVXNlcmJ5SUR9IGZyb20gXCIuLi9heGlvc19jb25uZWN0aW9uXCI7XHJcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGxpc3Ryb29tczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpZDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgaWQgPSB0aGlzLmlkO1xyXG4gICAgcmVjZWl2ZWR1c2VySUQoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHVpZCA9IGRhdGE7XHJcbiAgICAgIGxldCBuYW1lID0gdGhpcy5uYW1lZGlzcGxheTtcclxuICAgICAgcmVjZWl2ZWRVc2VyYnlJRCh1aWQpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgIGlkLnN0cmluZyA9IGRhdGEuZGF0YS5Vc2VybmFtZSArIFwiICNcIiArIHVpZDtcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2hvd19yb29tcygpIHtcclxuICAgIGxldCBsaXN0cm9vbXMgPSB0aGlzLmxpc3Ryb29tcztcclxuICAgIHJvb21saXN0ID0gW107XHJcbiAgICBmZXRjaChcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLy8gLnRoZW4oZnVuY3Rpb24oYm9keSl7XHJcbiAgICAgIC8vICAgICByZXR1cm4gYm9keS50ZXh0KCk7XHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChkYXRhLmRhdGFbaV0uUGxheWVyMSAhPSBudWxsICYmIGRhdGEuZGF0YVtpXS5QbGF5ZXIyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gZnVsbFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIyID09IG51bGxcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSAxLzJcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjEgPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMiAhPSBudWxsXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gMS8yXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIxID09IG51bGwgJiZcclxuICAgICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjIgPT0gbnVsbFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIDAvMlwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3Ryb29tcy5zdHJpbmcgPSByb29tbGlzdDtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHtcclxuICAgIC8vIHJlY2VpdmVkdXNlcklEKClcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vICAgICBpZC5zdHJpbmcgPSBcImFiY1wiO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd3JvbmdzXCIpO1xyXG4gICAgLy8gICB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=