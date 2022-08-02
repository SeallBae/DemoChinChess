"use strict";
cc._RF.push(module, 'aa6c1TRo4VL3KaFZDstwxgH', 'deleteuser');
// script/temp/deleteuser.js

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
    deluserID: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  deleteuser: function deleteuser() {
    var userID = this.deluserID.string;
    fetch("https://chinese-chess-vnp.herokuapp.com/api/player/" + userID, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      } // body: JSON.stringify({ id: '1' })

    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    });
  },
  start: function start() {
    fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      } // body: JSON.stringify({ id: '1' })

    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    });
  } // update (dt) {},

});

cc._RF.pop();