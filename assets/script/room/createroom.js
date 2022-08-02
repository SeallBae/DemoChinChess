import {
  receivedchessPosition,
  sendchessPosition,
  senduserID,
  receiveduserID,
  sendroomID,
  receivedroomID,
} from "../socket_connection";
cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad() {},
  create_room() {
    let RoomInfos = cc.director
      .getScene()
      .getChildByName("RoomInfos")
      .getComponent("RoomInfos");
    receiveduserID().then((data) => {
      var uid = data;
      console.log("uid", uid);
      fetch("https://chinese-chess-vnp.herokuapp.com/api/room", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Player1: uid, Player2: null }),
      })
        .then((response) => response.json())
        .then((data) => {
          RoomInfos.rid = data.data.id;
          console.log("roomid", RoomInfos.rid);
          cc.director.loadScene("room");
        });
    });
  },
  start() {},

  // update (dt) {},
});
