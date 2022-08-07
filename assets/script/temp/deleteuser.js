import { getuserlist, deleteuser } from "../axios_connection";
// const fetch = require('node-fetch')

cc.Class({
  extends: cc.Component,

  properties: {
    deluserID: {
      default: null,
      type: cc.Label,
    },
  },
  onLoad() {},
  delete_user() {
    let userID = this.deluserID.string;
    deleteuser(userID);
  },

  start() {
    getuserlist();
  },

  // update (dt) {},
});
