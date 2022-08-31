
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
    } // id: {
    //   default: null,
    //   type: cc.Label,
    // },

  },
  onLoad: function onLoad() {// let id = this.id;
    // receiveduserID().then((data) => {
    //   let uid = data;
    //   let name = this.namedisplay;
    //   getUserbyID(uid).then((data) => {
    //     id.string = data.data.Username + " #" + uid;
    //   }).catch(function () {
    //     console.log("Promise Rejected");
    //   });
    // }).catch(function () {
    //   console.log("Promise Rejected");
    // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb29tXFxzaG93cm9vbXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0cm9vbXMiLCJ0eXBlIiwiTGFiZWwiLCJvbkxvYWQiLCJzaG93X3Jvb21zIiwicm9vbWxpc3QiLCJ0aGVuIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJQbGF5ZXIxIiwiUGxheWVyMiIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBRVBDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxTQUFTLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtBREQsQ0FLVjtBQUNBO0FBQ0E7QUFDQTs7QUFSVSxHQUZMO0FBWVBDLEVBQUFBLE1BWk8sb0JBWUUsQ0FDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQXpCTTtBQTBCUEMsRUFBQUEsVUExQk8sd0JBMEJNO0FBQ1gsUUFBSUosU0FBUyxHQUFHLEtBQUtBLFNBQXJCO0FBQ0EsUUFBSUssUUFBUSxHQUFHLEVBQWY7QUFDQSx5Q0FDR0MsSUFESCxDQUNRLFVBQUNDLElBQUQsRUFBVTtBQUNkLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsSUFBSSxDQUFDQSxJQUFMLENBQVVFLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLFlBQUlELElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxDQUFWLEVBQWFFLE9BQWIsSUFBd0IsSUFBeEIsSUFBZ0NILElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxDQUFWLEVBQWFHLE9BQWIsSUFBd0IsSUFBNUQsRUFBa0U7QUFDaEVOLFVBQUFBLFFBQVEsSUFDTk8sSUFBSSxDQUFDQyxTQUFMLENBQWUsYUFBYU4sSUFBSSxDQUFDQSxJQUFMLENBQVVDLENBQVYsRUFBYU0sRUFBMUIsR0FBK0IsV0FBOUMsSUFBNkQsSUFEL0Q7QUFFRCxTQUhELE1BR08sSUFDTFAsSUFBSSxDQUFDQSxJQUFMLENBQVVDLENBQVYsRUFBYUUsT0FBYixJQUF3QixJQUF4QixJQUNBSCxJQUFJLENBQUNBLElBQUwsQ0FBVUMsQ0FBVixFQUFhRyxPQUFiLElBQXdCLElBRm5CLEVBR0w7QUFDQU4sVUFBQUEsUUFBUSxJQUNOTyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxhQUFhTixJQUFJLENBQUNBLElBQUwsQ0FBVUMsQ0FBVixFQUFhTSxFQUExQixHQUErQixVQUE5QyxJQUE0RCxJQUQ5RDtBQUVELFNBTk0sTUFNQSxJQUNMUCxJQUFJLENBQUNBLElBQUwsQ0FBVUMsQ0FBVixFQUFhRSxPQUFiLElBQXdCLElBQXhCLElBQ0FILElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxDQUFWLEVBQWFHLE9BQWIsSUFBd0IsSUFGbkIsRUFHTDtBQUNBTixVQUFBQSxRQUFRLElBQ05PLElBQUksQ0FBQ0MsU0FBTCxDQUFlLGFBQWFOLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxDQUFWLEVBQWFNLEVBQTFCLEdBQStCLFVBQTlDLElBQTRELElBRDlEO0FBRUQsU0FOTSxNQU1BLElBQ0xQLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxDQUFWLEVBQWFFLE9BQWIsSUFBd0IsSUFBeEIsSUFDQUgsSUFBSSxDQUFDQSxJQUFMLENBQVVDLENBQVYsRUFBYUcsT0FBYixJQUF3QixJQUZuQixFQUdMO0FBQ0FOLFVBQUFBLFFBQVEsSUFDTk8sSUFBSSxDQUFDQyxTQUFMLENBQWUsYUFBYU4sSUFBSSxDQUFDQSxJQUFMLENBQVVDLENBQVYsRUFBYU0sRUFBMUIsR0FBK0IsVUFBOUMsSUFBNEQsSUFEOUQ7QUFFRDtBQUNGOztBQUNEZCxNQUFBQSxTQUFTLENBQUNlLE1BQVYsR0FBbUJWLFFBQW5CO0FBQ0QsS0EzQkgsV0E0QlMsWUFBWTtBQUNqQlcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxLQTlCSDtBQStCRCxHQTVETTtBQTZEUEMsRUFBQUEsS0E3RE8sbUJBNkRDLENBQUUsQ0E3REg7QUE4RFBDLEVBQUFBLE1BOURPLGtCQThEQUMsRUE5REEsRUE4REksQ0FBRTtBQTlETixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWNlaXZlZHVzZXJJRCB9IGZyb20gXCIuLi9zb2NrZXRfY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyYnlJRCwgZ2V0cm9vbWxpc3QgfSBmcm9tIFwiLi4vYXhpb3NfY29ubmVjdGlvblwiO1xyXG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsaXN0cm9vbXM6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgLy8gaWQ6IHtcclxuICAgIC8vICAgZGVmYXVsdDogbnVsbCxcclxuICAgIC8vICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gbGV0IGlkID0gdGhpcy5pZDtcclxuICAgIC8vIHJlY2VpdmVkdXNlcklEKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICBsZXQgdWlkID0gZGF0YTtcclxuICAgIC8vICAgbGV0IG5hbWUgPSB0aGlzLm5hbWVkaXNwbGF5O1xyXG4gICAgLy8gICBnZXRVc2VyYnlJRCh1aWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBpZC5zdHJpbmcgPSBkYXRhLmRhdGEuVXNlcm5hbWUgKyBcIiAjXCIgKyB1aWQ7XHJcbiAgICAvLyAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcIlByb21pc2UgUmVqZWN0ZWRcIik7XHJcbiAgICAvLyB9KTtcclxuICB9LFxyXG4gIHNob3dfcm9vbXMoKSB7XHJcbiAgICBsZXQgbGlzdHJvb21zID0gdGhpcy5saXN0cm9vbXM7XHJcbiAgICBsZXQgcm9vbWxpc3QgPSBbXTtcclxuICAgIGdldHJvb21saXN0KClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YVtpXS5QbGF5ZXIxICE9IG51bGwgJiYgZGF0YS5kYXRhW2ldLlBsYXllcjIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSBmdWxsXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIxICE9IG51bGwgJiZcclxuICAgICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjIgPT0gbnVsbFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJvb21saXN0ICs9XHJcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCJSb29tIG5vIFwiICsgZGF0YS5kYXRhW2ldLmlkICsgXCIgLS0tIDEvMlwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMSA9PSBudWxsICYmXHJcbiAgICAgICAgICAgIGRhdGEuZGF0YVtpXS5QbGF5ZXIyICE9IG51bGxcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByb29tbGlzdCArPVxyXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiUm9vbSBubyBcIiArIGRhdGEuZGF0YVtpXS5pZCArIFwiIC0tLSAxLzJcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgZGF0YS5kYXRhW2ldLlBsYXllcjEgPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICBkYXRhLmRhdGFbaV0uUGxheWVyMiA9PSBudWxsXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcm9vbWxpc3QgKz1cclxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIlJvb20gbm8gXCIgKyBkYXRhLmRhdGFbaV0uaWQgKyBcIiAtLS0gMC8yXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdHJvb21zLnN0cmluZyA9IHJvb21saXN0O1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZSBSZWplY3RlZFwiKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG4gIHVwZGF0ZShkdCkge30sXHJcbn0pO1xyXG4iXX0=