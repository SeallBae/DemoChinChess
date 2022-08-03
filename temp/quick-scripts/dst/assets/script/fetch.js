
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/fetch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmZXRjaC5qcyJdLCJuYW1lcyI6WyJyZWNlaXZlZHVzZXJsaXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCQyxFQUFBQSxLQUFLLENBQUMsb0RBQUQsRUFBdUQ7QUFDMURDLElBQUFBLE1BQU0sRUFBRSxLQURrRDtBQUUxREMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLE1BQU0sRUFBRSxrQkFERDtBQUVQLHNCQUFnQjtBQUZUO0FBRmlELEdBQXZELENBQUwsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEdBUFIsRUFRR0YsSUFSSCxDQVFRLFVBQUNHLElBQUQsRUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQVZIO0FBV0QsQ0FaRCxFQWFBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWNlaXZlZHVzZXJsaXN0ID0gKCkgPT4ge1xyXG4gIGZldGNoKFwiaHR0cHM6Ly9jaGluZXNlLWNoZXNzLXZucC5oZXJva3VhcHAuY29tL2FwaS9wbGF5ZXJcIiwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxufTtcclxuLy8gZXhwb3J0eyBzZW5kVXNlcm5hbWUsIHJlY2VpdmVkdXNlcmxpc3R9O1xyXG4iXX0=