import {
  receivedchessPosition,
  sendchessPosition,
  senduserID,
  receiveduserID,
  sendroomID,
  receivedroomID,
} from "../socket_connection";
import { createroom } from "../axios_connection";

// const fetch = require('node-fetch')
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
      createroom(uid).then((data) => {
        console.log(data);
        RoomInfos.rid = data;
        console.log("roomid", RoomInfos.rid);
        cc.director.loadScene("room");
      });
    }).catch(function () {
      console.log("Promise Rejected");
    });
    
  },
  start() {},

  // update (dt) {},
});
