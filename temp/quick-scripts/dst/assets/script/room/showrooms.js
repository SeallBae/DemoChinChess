
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
      })["catch"](function () {
        console.log("Promise Rejected");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxzaG93cm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0cm9vbXMiLCJ0eXBlIiwiTGFiZWwiLCJpZCIsIm9uTG9hZCIsInRoZW4iLCJkYXRhIiwidWlkIiwibmFtZSIsIm5hbWVkaXNwbGF5Iiwic3RyaW5nIiwiVXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2hvd19yb29tcyIsInJvb21saXN0IiwiaSIsImxlbmd0aCIsIlBsYXllcjEiLCJQbGF5ZXIyIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFNBQVMsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FERDtBQUtWQyxJQUFBQSxFQUFFLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZQO0FBTE0sR0FGTDtBQVlQRSxFQUFBQSxNQVpPLG9CQVlFO0FBQUE7O0FBQ1AsUUFBSUQsRUFBRSxHQUFHLEtBQUtBLEVBQWQ7QUFDQSw2Q0FBaUJFLElBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QkMsTUFBQUEsR0FBRyxHQUFHRCxJQUFOO0FBQ0EsVUFBSUUsSUFBSSxHQUFHLEtBQUksQ0FBQ0MsV0FBaEI7QUFDQSx5Q0FBWUYsR0FBWixFQUFpQkYsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCSCxRQUFBQSxFQUFFLENBQUNPLE1BQUgsR0FBWUosSUFBSSxDQUFDQSxJQUFMLENBQVVLLFFBQVYsR0FBcUIsSUFBckIsR0FBNEJKLEdBQXhDO0FBQ0QsT0FGRCxXQUVTLFlBQVk7QUFDbkJLLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsT0FKRDtBQUtELEtBUkQ7QUFTRCxHQXZCTTtBQXdCUEMsRUFBQUEsVUF4Qk8sd0JBd0JNO0FBQ1gsUUFBSWQsU0FBUyxHQUFHLEtBQUtBLFNBQXJCO0FBQ0FlLElBQUFBLFFBQVEsR0FBRyxFQUFYO0FBQ0EseUNBQWNWLElBQWQsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCLFdBQUssSUFBSVUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsSUFBSSxDQUFDQSxJQUFMLENBQVVXLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLFlBQUlWLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFFLE9BQWIsSUFBd0IsSUFBeEIsSUFBZ0NaLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFHLE9BQWIsSUFBd0IsSUFBNUQsRUFBa0U7QUFDaEVKLFVBQUFBLFFBQVEsSUFDTkssSUFBSSxDQUFDQyxTQUFMLENBQWUsYUFBYWYsSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYWIsRUFBMUIsR0FBK0IsV0FBOUMsSUFBNkQsSUFEL0Q7QUFFRCxTQUhELE1BR08sSUFDTEcsSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYUUsT0FBYixJQUF3QixJQUF4QixJQUNBWixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRyxPQUFiLElBQXdCLElBRm5CLEVBR0w7QUFDQUosVUFBQUEsUUFBUSxJQUNOSyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxhQUFhZixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhYixFQUExQixHQUErQixVQUE5QyxJQUE0RCxJQUQ5RDtBQUVELFNBTk0sTUFNQSxJQUNMRyxJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRSxPQUFiLElBQXdCLElBQXhCLElBQ0FaLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFHLE9BQWIsSUFBd0IsSUFGbkIsRUFHTDtBQUNBSixVQUFBQSxRQUFRLElBQ05LLElBQUksQ0FBQ0MsU0FBTCxDQUFlLGFBQWFmLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFiLEVBQTFCLEdBQStCLFVBQTlDLElBQTRELElBRDlEO0FBRUQsU0FOTSxNQU1BLElBQ0xHLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFFLE9BQWIsSUFBd0IsSUFBeEIsSUFDQVosSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYUcsT0FBYixJQUF3QixJQUZuQixFQUdMO0FBQ0FKLFVBQUFBLFFBQVEsSUFDTkssSUFBSSxDQUFDQyxTQUFMLENBQWUsYUFBYWYsSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYWIsRUFBMUIsR0FBK0IsVUFBOUMsSUFBNEQsSUFEOUQ7QUFFRDtBQUNGOztBQUNESCxNQUFBQSxTQUFTLENBQUNVLE1BQVYsR0FBbUJLLFFBQW5CO0FBQ0QsS0ExQkQ7QUEyQkQsR0F0RE07QUF1RFBPLEVBQUFBLEtBdkRPLG1CQXVEQyxDQUFFLENBdkRIO0FBd0RQQyxFQUFBQSxNQXhETyxrQkF3REFDLEVBeERBLEVBd0RJLENBQUU7QUF4RE4sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0VXNlcmJ5SUQsIGdldHJvb21saXN0IH0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbGlzdHJvb21zOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIGlkOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCBpZCA9IHRoaXMuaWQ7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdWlkID0gZGF0YTtcclxuICAgICAgbGV0IG5hbWUgPSB0aGlzLm5hbWVkaXNwbGF5O1xyXG4gICAgICBnZXRVc2VyYnlJRCh1aWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZC5zdHJpbmcgPSBkYXRhLmRhdGEuVXNlcm5hbWUgKyBcIiAjXCIgKyB1aWQ7XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzaG93X3Jvb21zKCkge1xyXG4gICAgbGV0IGxpc3Ryb29tcyA9IHRoaXMubGlzdHJvb21zO1xyXG4gICAgcm9vbWxpc3QgPSBbXTtcclxuICAgIGdldHJvb21saXN0KCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGFbaV0uUGxheWVyMSAhPSBudWxsICYmIGRhdGEuZGF0YVtpXS5QbGF5ZXIyICE9IG51bGwpIHtcclxuICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSBmdWxsXCIpICsgXCJcXG5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjEgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjIgPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIDEvMlwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIxID09IG51bGwgJiZcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIyICE9IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSAxLzJcIikgKyBcIlxcblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMSA9PSBudWxsICYmXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMiA9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gMC8yXCIpICsgXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdHJvb21zLnN0cmluZyA9IHJvb21saXN0O1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=