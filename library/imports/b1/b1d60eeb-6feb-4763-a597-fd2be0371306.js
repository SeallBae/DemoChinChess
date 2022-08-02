"use strict";
cc._RF.push(module, 'b1d607rb+tHY6WX/SvgNxMG', 'movecodelist');
// script/gameplay/movecodelist.js

"use strict";

var _socket_connection = require("../socket_connection");

movecode = [];
list = []; // let socket = io("http://localhost:3000", {
//     query: {
//       userId: 1,
//     },
// });
// import * as io from "socket.io-client";
// let socket = io.connect('http://localhost:3000/');

cc.Class({
  "extends": cc.Component,
  properties: {
    list: {
      "default": "",
      multiline: true
    },
    map: {
      "default": null,
      type: cc.Node
    },
    movecodelist: {
      "default": null,
      type: cc.Label
    }
  },
  updatelist: function updatelist() {// let socket = io.connect("http://localhost:3000", { transports : ['websocket'] });
  },
  // })
  start: function start() {},
  update: function update(dt) {}
});

cc._RF.pop();