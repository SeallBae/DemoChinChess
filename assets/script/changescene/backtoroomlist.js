// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { receivedroomID } from "../socket_connection";

cc.Class({
  extends: cc.Component,

  properties: {},
  onLoad() {},
  backtoroomlist() {
    var PlayerInfo = cc.director
      .getScene()
      .getChildByName("PlayerInfo")
      .getComponent("PlayerInfo");
    var RoomInfos = cc.director
      .getScene()
      .getChildByName("RoomInfos")
      .getComponent("RoomInfos");

    let roomID = RoomInfos.rid;
    fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.data.Player1 != null && data.data.Player2 != null) {
          if (data.data.Player1 == PlayerInfo.uid) {
            let p2 = data.data.Player2;
            fetch(
              "https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID,
              {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ Player1: p2, Player2: null }),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                RoomInfos.rid = null;
                cc.director.loadScene("rooms");
              });
          }
          if (data.data.Player2 == PlayerInfo.uid) {
            fetch(
              "https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID,
              {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ Player2: null }),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                RoomInfos.rid = null;
                cc.director.loadScene("rooms");
              });
          }
        }
        if (data.data.Player1 == null && data.data.Player2 != null) {
          fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Player2: null }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              RoomInfos.rid = null;
              cc.director.loadScene("rooms");
            });
        }
        if (data.data.Player1 != null && data.data.Player2 == null) {
          fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Player1: null }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              RoomInfos.rid = null;
              cc.director.loadScene("rooms");
            });
        }
      });
  },
  start() {},
  onDisable() {},
  // update (dt) {},
});
