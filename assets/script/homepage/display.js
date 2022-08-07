import { senduserID, receiveduserID } from "../socket_connection";
import { getUserbyID } from "../axios_connection";
// const fetch = require('node-fetch')
cc.Class({
  extends: cc.Component,

  properties: {
    namedisplay: {
      default: null,
      type: cc.Label,
    },
  },
  onLoad() {
    var uid = 0;
    receiveduserID().then((data) => {
      uid = data;
      let name = this.namedisplay;
      getUserbyID(uid).then((data) => {
        name.string = data.data.Username + " #" + uid;
      });
    });
  },
  start() {},
  onDisable() {},
  // update (dt) {},
});
