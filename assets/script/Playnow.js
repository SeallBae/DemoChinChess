import { receiveduserID, senduserID } from "./socket_connection";
cc.Class({
  extends: cc.Component,
  properties: {
    Username: {
      default: null,
      type: cc.Label,
    },
    PlayerInfo: {
      default: null,
      type: cc.Node,
    },
  },
  onEnable() {},
  onload() {},
  start() {},
  load_scene() {
    var PlayerInfo = this.PlayerInfo.getComponent("PlayerInfo");
    let name = this.Username.string;
    fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Username: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data.data.id", data.data.id);
        PlayerInfo.uid = data.data.id;

        cc.director.loadScene("homepage");
      });
    // receiveduserID().then((data) => {
    //   PlayerInfo.uid = data;
    //   PlayerInfo.uname = name;
    // });
  },
  update(dt) {},
});
// var app = require('./socket_connection.js');
