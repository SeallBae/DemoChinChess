
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

    // let PlayerInfo = cc.director
    //   .getScene()
    //   .getChildByName("PlayerInfo")
    //   .getComponent("PlayerInfo");
    (0, _socket_connection.receiveduserID)().then(function (data) {
      var id = _this.id;
      var uid = data;
      fetch("https://chinese-chess-vnp.herokuapp.com/api/player/" + uid, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxzaG93cm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0cm9vbXMiLCJ0eXBlIiwiTGFiZWwiLCJpZCIsIm9uTG9hZCIsInRoZW4iLCJkYXRhIiwidWlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwicmVzcG9uc2UiLCJqc29uIiwic3RyaW5nIiwiVXNlcm5hbWUiLCJzaG93X3Jvb21zIiwicm9vbWxpc3QiLCJpIiwibGVuZ3RoIiwiUGxheWVyMSIsIlBsYXllcjIiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFNBQVMsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FERDtBQUtWQyxJQUFBQSxFQUFFLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZQO0FBTE0sR0FGTDtBQVlQRSxFQUFBQSxNQVpPLG9CQVlFO0FBQUE7O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaUJDLElBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJSCxFQUFFLEdBQUcsS0FBSSxDQUFDQSxFQUFkO0FBQ0EsVUFBSUksR0FBRyxHQUFHRCxJQUFWO0FBQ0FFLE1BQUFBLEtBQUssQ0FBQyx3REFBd0RELEdBQXpELEVBQThEO0FBQ2pFRSxRQUFBQSxNQUFNLEVBQUUsS0FEeUQ7QUFFakVDLFFBQUFBLE9BQU8sRUFBRTtBQUNQQyxVQUFBQSxNQUFNLEVBQUUsa0JBREQ7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQXBGTTtBQXFGUEMsRUFBQUEsTUFyRk8sa0JBcUZBQyxFQXJGQSxFQXFGSSxDQUFFO0FBckZOLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlY2VpdmVkdXNlcklEIH0gZnJvbSBcIi4uL3NvY2tldF9jb25uZWN0aW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGxpc3Ryb29tczoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpZDoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyBsZXQgUGxheWVySW5mbyA9IGNjLmRpcmVjdG9yXHJcbiAgICAvLyAgIC5nZXRTY2VuZSgpXHJcbiAgICAvLyAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckluZm9cIilcclxuICAgIC8vICAgLmdldENvbXBvbmVudChcIlBsYXllckluZm9cIik7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgbGV0IGlkID0gdGhpcy5pZDtcclxuICAgICAgbGV0IHVpZCA9IGRhdGE7XHJcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9wbGF5ZXIvXCIgKyB1aWQsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIGlkLnN0cmluZyA9IGRhdGEuZGF0YS5Vc2VybmFtZSArIFwiICNcIiArIHVpZDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2hvd19yb29tcygpIHtcclxuICAgIGxldCBsaXN0cm9vbXMgPSB0aGlzLmxpc3Ryb29tcztcclxuICAgIHJvb21saXN0ID0gW107XHJcbiAgICBmZXRjaChcImh0dHBzOi8vY2hpbmVzZS1jaGVzcy12bnAuaGVyb2t1YXBwLmNvbS9hcGkvcm9vbVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLy8gLnRoZW4oZnVuY3Rpb24oYm9keSl7XHJcbiAgICAgIC8vICAgICByZXR1cm4gYm9keS50ZXh0KCk7XHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChkYXRhLmRhdGFbaV0uUGxheWVyMSAhPSBudWxsICYmIGRhdGEuZGF0YVtpXS5QbGF5ZXIyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gZnVsbFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIyID09IG51bGxcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSAxLzJcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjEgPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMiAhPSBudWxsXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gMS8yXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIxID09IG51bGwgJiZcclxuICAgICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjIgPT0gbnVsbFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIDAvMlwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3Ryb29tcy5zdHJpbmcgPSByb29tbGlzdDtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHtcclxuICAgIC8vIHJlY2VpdmVkdXNlcklEKClcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vICAgICBpZC5zdHJpbmcgPSBcImFiY1wiO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd3JvbmdzXCIpO1xyXG4gICAgLy8gICB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=