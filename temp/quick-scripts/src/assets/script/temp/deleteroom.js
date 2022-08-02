"use strict";
cc._RF.push(module, '31a63cAgHlPVrX4NXcO+4XD', 'deleteroom');
// script/temp/deleteroom.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    roomID: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  deleteroom: function deleteroom() {
    var roomID = this.roomID.string;

    if (roomID) {
      fetch('https://chinese-chess-vnp.herokuapp.com/api/room/' + roomID, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        } // body: JSON.stringify({ id: '1' })

      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      });
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();