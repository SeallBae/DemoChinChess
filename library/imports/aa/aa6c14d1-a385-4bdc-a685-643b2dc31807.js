"use strict";
cc._RF.push(module, 'aa6c1TRo4VL3KaFZDstwxgH', 'deleteuser');
// script/temp/deleteuser.js

"use strict";

var _axios_connection = require("../axios_connection");

// const fetch = require('node-fetch')
cc.Class({
  "extends": cc.Component,
  properties: {
    deluserID: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  delete_user: function delete_user() {
    var userID = this.deluserID.string;
    (0, _axios_connection.deleteuser)(userID);
  },
  start: function start() {
    (0, _axios_connection.receiveduserlist)();
  } // update (dt) {},

});

cc._RF.pop();