import { receiveduserID } from "../socket_connection";

cc.Class({
  extends: cc.Component,
  properties: {
    listrooms: {
      default: null,
      type: cc.Label,
    },
    id: {
      default: null,
      type: cc.Label,
    },
  },
  onLoad() {
    // let PlayerInfo = cc.director
    //   .getScene()
    //   .getChildByName("PlayerInfo")
    //   .getComponent("PlayerInfo");
    receiveduserID().then((data) => {
      let id = this.id;
      let uid = data;
      fetch("https://chinese-chess-vnp.herokuapp.com/api/player/" + uid, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(function (data) {
          id.string = data.data.Username + " #" + uid;
        });
    });
  },
  show_rooms() {
    let listrooms = this.listrooms;
    roomlist = [];
    fetch("https://chinese-chess-vnp.herokuapp.com/api/room", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      // .then(function(body){
      //     return body.text();
      // })
      .then(function (data) {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].Player1 != null && data.data[i].Player2 != null) {
            roomlist +=
              JSON.stringify("Room no " + data.data[i].id + " --- full") + "\n";
          } else if (
            data.data[i].Player1 != null &&
            data.data[i].Player2 == null
          ) {
            roomlist +=
              JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n";
          } else if (
            data.data[i].Player1 == null &&
            data.data[i].Player2 != null
          ) {
            roomlist +=
              JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n";
          } else if (
            data.data[i].Player1 == null &&
            data.data[i].Player2 == null
          ) {
            roomlist +=
              JSON.stringify("Room no " + data.data[i].id + " --- 0/2") + "\n";
          }
        }
        listrooms.string = roomlist;
      });
  },
  start() {
    // receiveduserID()
    //   .then((data) => {
    //     console.log(data);
    //     id.string = "abc";
    //   })
    //   .catch((error) => {
    //     console.log("something wrongs");
    //   });
  },
  update(dt) {},
});
