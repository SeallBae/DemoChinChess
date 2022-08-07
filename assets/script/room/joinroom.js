const { io } = require("socket.io-client");
import {
  getroombyID,
  joinroombyIDasp1,
  joinroombyIDasp2,
} from "../axios_connection";
// const fetch = require('node-fetch')
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

    getroombyID(roomID).then((data) => {
      if (data.data.id == roomID) {
        if (data.data.Player1 == null) {
          joinroombyIDasp1(roomID, uid).then((data) => {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          });
        } else if (data.data.Player2 == null) {
          joinroombyIDasp2(roomID, uid).then((data) => {
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
