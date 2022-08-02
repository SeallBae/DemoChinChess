import { senduserID, receiveduserID } from "../socket_connection";
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
      console.log("data", data);
      uid = data;
      let name = this.namedisplay;
      console.log("uid", uid);
      fetch("https://chinese-chess-vnp.herokuapp.com/api/player/" + uid, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(function (data) {
          name.string = data.data.Username + " #" + uid;
        });
    });
  },

  start() {},
  onDisable() {},
  // update (dt) {},
});
