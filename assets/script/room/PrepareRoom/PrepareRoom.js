// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// let io = require("index.js")

// let socket = io.connect("http://localhost:3000", { transports : ['websocket'] },{query: { userID: 2,}});
// const { joinroom } = require('joinroom');
cc.Class({
  extends: cc.Component,

  properties: {

  },
  onLoad() {
  },

  start() {
    // console.log(Global.ID);
    // fetch('https://chinese-chess-vnp.herokuapp.com/api/room' + ID, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         // body: JSON.stringify({ Player1: '1' })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             // cc.director.loadScene("room");
    //           });
  },

  // update (dt) {},
});
