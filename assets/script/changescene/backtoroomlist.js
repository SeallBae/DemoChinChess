// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { receivedroomID } from "../socket_connection";
import {
  getroombyID,
  quitfullroombyIDasp1,
  quitfullroombyIDasp2,
  quitroombyIDasp1,
  quitroombyIDasp2,
} from "../axios_connection";

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

    var roomID = RoomInfos.rid;
    getroombyID(roomID)
      .then((data) => {
        console.log(data);
        if (data.data.Player1 != null && data.data.Player2 != null) {
          if (data.data.Player1 == PlayerInfo.uid) {
            let p2 = data.data.Player2;
            quitfullroombyIDasp1(roomID, p2).then((data) => {
              console.log(data);
              RoomInfos.rid = null;
              cc.director.loadScene("daucuocvangrooms");
            });
            // .catch(function () {
            //   console.log("Promise Rejected");
            // });
          }
          if (data.data.Player2 == PlayerInfo.uid) {
            quitfullroombyIDasp2(roomID).then((data) => {
              console.log(data);
              RoomInfos.rid = null;
              cc.director.loadScene("daucuocvangrooms");
            }); // .catch(function () {
            //   console.log("Promise Rejected");
            // });
          }
        }
        if (data.data.Player1 == null && data.data.Player2 != null) {
          quitroombyIDasp2(roomID).then((data) => {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("daucuocvangrooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }
        if (data.data.Player1 != null && data.data.Player2 == null) {
          quitroombyIDasp1(roomID).then((data) => {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("daucuocvangrooms");
          }); // .catch(function () {
          //   console.log("Promise Rejected");
          // });
        }
      })
      .catch(function () {
        console.log("Promise Rejected");
      });
  },
  start() {},
  onDisable() {},
  // update (dt) {},
});
