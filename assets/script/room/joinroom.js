const { io } = require("socket.io-client");
cc.Class({
  extends: cc.Component,

  properties: {
    roomID: {
      default: null,
      type: cc.Label,
    },
    Pass: {
      default: null,
      type: cc.Label,
    },
  },

  onLoad() {},
  join_room() {
    let PlayerInfo = cc.director
      .getScene()
      .getChildByName("PlayerInfo")
      .getComponent("PlayerInfo");
    let RoomInfos = cc.director
      .getScene()
      .getChildByName("RoomInfos")
      .getComponent("RoomInfos");
    let uid = PlayerInfo.uid;
    let roomID = this.roomID.string;
    let pass = this.Pass.string;
    fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.id == roomID) {
          if (data.data.Player1 == null) {
            fetch(
              "https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID,
              {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ Player1: uid }),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                RoomInfos.rid = roomID;
                cc.director.loadScene("room");
              });
          } else if (data.data.Player2 == null) {
            fetch(
              "https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID,
              {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ Player2: uid }),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                RoomInfos.rid = roomID;
                cc.director.loadScene("room");
              });
          } else {
            console.log("Roomfull!");
          }
        }
      });
  },
  start() {},

  // update (dt) {},
});
