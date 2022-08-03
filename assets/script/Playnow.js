import 'regenerator-runtime/runtime'
import { senduserID } from "./socket_connection"
import { createUser } from "./axios_connection";
// const fetch = require('node-fetch')
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
    createUser(name)
    .then((data)=>{
      PlayerInfo.uname = data.data.Username;
      PlayerInfo.uid = data.data.id;
      cc.director.loadScene("homepage")
    });
  },
  update(dt) {},
});

