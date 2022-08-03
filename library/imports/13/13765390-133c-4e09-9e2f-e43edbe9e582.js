"use strict";
cc._RF.push(module, '13765OQEzxOCZ4v5D7b6eWC', 'fetch');
// script/fetch.js

"use strict";

var receiveduserlist = function receiveduserlist() {
  fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}; // export{ sendUsername, receiveduserlist};

cc._RF.pop();