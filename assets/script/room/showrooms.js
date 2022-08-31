import { receiveduserID } from "../socket_connection";
import { getUserbyID, getroomlist } from "../axios_connection";
// const fetch = require('node-fetch')

cc.Class({
  extends: cc.Component,
  properties: {
    listrooms: {
      default: null,
      type: cc.Label,
    },
    // id: {
    //   default: null,
    //   type: cc.Label,
    // },
  },
  onLoad() {
    // let id = this.id;
    // receiveduserID().then((data) => {
    //   let uid = data;
    //   let name = this.namedisplay;
    //   getUserbyID(uid).then((data) => {
    //     id.string = data.data.Username + " #" + uid;
    //   }).catch(function () {
    //     console.log("Promise Rejected");
    //   });
    // }).catch(function () {
    //   console.log("Promise Rejected");
    // });
  },
  show_rooms() {
    let listrooms = this.listrooms;
    let roomlist = [];
    getroomlist()
      .then((data) => {
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
      })
      .catch(function () {
        console.log("Promise Rejected");
      });
  },
  start() {},
  update(dt) {},
});
