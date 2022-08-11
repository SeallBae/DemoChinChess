
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
      var uid = data;
      var name = _this.namedisplay;
      (0, _axios_connection.getUserbyID)(uid).then(function (data) {
        id.string = data.data.Username + " #" + uid;
      })["catch"](function () {
        console.log("Promise Rejected");
      });
    })["catch"](function () {
      console.log("Promise Rejected");
    });
  },
  show_rooms: function show_rooms() {
    var listrooms = this.listrooms;
    var roomlist = [];
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
    })["catch"](function () {
      console.log("Promise Rejected");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxzaG93cm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0cm9vbXMiLCJ0eXBlIiwiTGFiZWwiLCJpZCIsIm9uTG9hZCIsInRoZW4iLCJkYXRhIiwidWlkIiwibmFtZSIsIm5hbWVkaXNwbGF5Iiwic3RyaW5nIiwiVXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2hvd19yb29tcyIsInJvb21saXN0IiwiaSIsImxlbmd0aCIsIlBsYXllcjEiLCJQbGF5ZXIyIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFNBQVMsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FERDtBQUtWQyxJQUFBQSxFQUFFLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZQO0FBTE0sR0FGTDtBQVlQRSxFQUFBQSxNQVpPLG9CQVlFO0FBQUE7O0FBQ1AsUUFBSUQsRUFBRSxHQUFHLEtBQUtBLEVBQWQ7QUFDQSw2Q0FBaUJFLElBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJQyxHQUFHLEdBQUdELElBQVY7QUFDQSxVQUFJRSxJQUFJLEdBQUcsS0FBSSxDQUFDQyxXQUFoQjtBQUNBLHlDQUFZRixHQUFaLEVBQWlCRixJQUFqQixDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDOUJILFFBQUFBLEVBQUUsQ0FBQ08sTUFBSCxHQUFZSixJQUFJLENBQUNBLElBQUwsQ0FBVUssUUFBVixHQUFxQixJQUFyQixHQUE0QkosR0FBeEM7QUFDRCxPQUZELFdBRVMsWUFBWTtBQUNuQkssUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxPQUpEO0FBS0QsS0FSRCxXQVFTLFlBQVk7QUFDbkJELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0FWRDtBQVdELEdBekJNO0FBMEJQQyxFQUFBQSxVQTFCTyx3QkEwQk07QUFDWCxRQUFJZCxTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQSxRQUFJZSxRQUFRLEdBQUcsRUFBZjtBQUNBLHlDQUFjVixJQUFkLENBQW1CLFVBQUNDLElBQUQsRUFBVTtBQUMzQixXQUFLLElBQUlVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLElBQUksQ0FBQ0EsSUFBTCxDQUFVVyxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxZQUFJVixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRSxPQUFiLElBQXdCLElBQXhCLElBQWdDWixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRyxPQUFiLElBQXdCLElBQTVELEVBQWtFO0FBQ2hFSixVQUFBQSxRQUFRLElBQ05LLElBQUksQ0FBQ0MsU0FBTCxDQUFlLGFBQWFmLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFiLEVBQTFCLEdBQStCLFdBQTlDLElBQTZELElBRC9EO0FBRUQsU0FIRCxNQUdPLElBQ0xHLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFFLE9BQWIsSUFBd0IsSUFBeEIsSUFDQVosSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYUcsT0FBYixJQUF3QixJQUZuQixFQUdMO0FBQ0FKLFVBQUFBLFFBQVEsSUFDTkssSUFBSSxDQUFDQyxTQUFMLENBQWUsYUFBYWYsSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYWIsRUFBMUIsR0FBK0IsVUFBOUMsSUFBNEQsSUFEOUQ7QUFFRCxTQU5NLE1BTUEsSUFDTEcsSUFBSSxDQUFDQSxJQUFMLENBQVVVLENBQVYsRUFBYUUsT0FBYixJQUF3QixJQUF4QixJQUNBWixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRyxPQUFiLElBQXdCLElBRm5CLEVBR0w7QUFDQUosVUFBQUEsUUFBUSxJQUNOSyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxhQUFhZixJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhYixFQUExQixHQUErQixVQUE5QyxJQUE0RCxJQUQ5RDtBQUVELFNBTk0sTUFNQSxJQUNMRyxJQUFJLENBQUNBLElBQUwsQ0FBVVUsQ0FBVixFQUFhRSxPQUFiLElBQXdCLElBQXhCLElBQ0FaLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFHLE9BQWIsSUFBd0IsSUFGbkIsRUFHTDtBQUNBSixVQUFBQSxRQUFRLElBQ05LLElBQUksQ0FBQ0MsU0FBTCxDQUFlLGFBQWFmLElBQUksQ0FBQ0EsSUFBTCxDQUFVVSxDQUFWLEVBQWFiLEVBQTFCLEdBQStCLFVBQTlDLElBQTRELElBRDlEO0FBRUQ7QUFDRjs7QUFDREgsTUFBQUEsU0FBUyxDQUFDVSxNQUFWLEdBQW1CSyxRQUFuQjtBQUNELEtBMUJELFdBMkJPLFlBQVk7QUFDakJILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsS0E3QkQ7QUE4QkQsR0EzRE07QUE0RFBTLEVBQUFBLEtBNURPLG1CQTREQyxDQUFFLENBNURIO0FBNkRQQyxFQUFBQSxNQTdETyxrQkE2REFDLEVBN0RBLEVBNkRJLENBQUU7QUE3RE4sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZWR1c2VySUQgfSBmcm9tIFwiLi4vc29ja2V0X2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0VXNlcmJ5SUQsIGdldHJvb21saXN0IH0gZnJvbSBcIi4uL2F4aW9zX2Nvbm5lY3Rpb25cIjtcclxuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbGlzdHJvb21zOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIGlkOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCBpZCA9IHRoaXMuaWQ7XHJcbiAgICByZWNlaXZlZHVzZXJJRCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgbGV0IHVpZCA9IGRhdGE7XHJcbiAgICAgIGxldCBuYW1lID0gdGhpcy5uYW1lZGlzcGxheTtcclxuICAgICAgZ2V0VXNlcmJ5SUQodWlkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWQuc3RyaW5nID0gZGF0YS5kYXRhLlVzZXJuYW1lICsgXCIgI1wiICsgdWlkO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQcm9taXNlIFJlamVjdGVkXCIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzaG93X3Jvb21zKCkge1xyXG4gICAgbGV0IGxpc3Ryb29tcyA9IHRoaXMubGlzdHJvb21zO1xyXG4gICAgbGV0IHJvb21saXN0ID0gW107XHJcbiAgICBnZXRyb29tbGlzdCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhW2ldLlBsYXllcjEgIT0gbnVsbCAmJiBkYXRhLmRhdGFbaV0uUGxheWVyMiAhPSBudWxsKSB7XHJcbiAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gZnVsbFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIxICE9IG51bGwgJiZcclxuICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIyID09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSAxLzJcIikgKyBcIlxcblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMSA9PSBudWxsICYmXHJcbiAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMiAhPSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gMS8yXCIpICsgXCJcXG5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjEgPT0gbnVsbCAmJlxyXG4gICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjIgPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIDAvMlwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3Ryb29tcy5zdHJpbmcgPSByb29tbGlzdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgdXBkYXRlKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==