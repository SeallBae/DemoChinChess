"use strict";
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