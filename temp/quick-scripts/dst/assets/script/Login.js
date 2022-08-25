
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41304xTsLxGmLZBRCGUQ66e', 'Login');
// script/Login.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var clickEventHandler = new cc.Component.EventHandler();
    clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs

    clickEventHandler.component = "Login"; // This is the code file name

    clickEventHandler.handler = "callback";
    clickEventHandler.customEventData = "foobar";
    var button = this.node.getComponent(cc.Button);
    button.clickEvents.push(clickEventHandler);
  },
  callback: function callback(event, customEventData) {
    // here event is a Event object, you can get events sent to the event node node
    var node = event.target;
    var button = node.getComponent(cc.Button); // console.log(this.node.name);

    if (this.node.name === "SignInWithFacebook") {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Login", "FBHandleLogin", "()V");
    } else if (this.node.name === "SignInWithGoogle") {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/GGLogin", "GGHandleLogin", "()V");
    } // here the customEventData parameter is equal to you set before the "foobar"

  } // start () {
  // },
  // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0Iiwibm9kZSIsImNvbXBvbmVudCIsImhhbmRsZXIiLCJjdXN0b21FdmVudERhdGEiLCJidXR0b24iLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJjbGlja0V2ZW50cyIsInB1c2giLCJjYWxsYmFjayIsImV2ZW50IiwibmFtZSIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBc0JMO0FBRUFDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUdaLFFBQUlDLGlCQUFpQixHQUFHLElBQUlMLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhSSxZQUFqQixFQUF4QjtBQUNBRCxJQUFBQSxpQkFBaUIsQ0FBQ0UsTUFBbEIsR0FBMkIsS0FBS0MsSUFBaEMsQ0FKWSxDQUkwQjs7QUFDdENILElBQUFBLGlCQUFpQixDQUFDSSxTQUFsQixHQUE4QixPQUE5QixDQUxZLENBSzBCOztBQUN0Q0osSUFBQUEsaUJBQWlCLENBQUNLLE9BQWxCLEdBQTRCLFVBQTVCO0FBQ0FMLElBQUFBLGlCQUFpQixDQUFDTSxlQUFsQixHQUFvQyxRQUFwQztBQUVBLFFBQUlDLE1BQU0sR0FBRyxLQUFLSixJQUFMLENBQVVLLFlBQVYsQ0FBdUJiLEVBQUUsQ0FBQ2MsTUFBMUIsQ0FBYjtBQUNBRixJQUFBQSxNQUFNLENBQUNHLFdBQVAsQ0FBbUJDLElBQW5CLENBQXdCWCxpQkFBeEI7QUFDSCxHQW5DQTtBQXFDRFksRUFBQUEsUUFBUSxFQUFFLGtCQUFVQyxLQUFWLEVBQWlCUCxlQUFqQixFQUFrQztBQUN4QztBQUNBLFFBQUlILElBQUksR0FBR1UsS0FBSyxDQUFDWCxNQUFqQjtBQUNBLFFBQUlLLE1BQU0sR0FBR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCYixFQUFFLENBQUNjLE1BQXJCLENBQWIsQ0FId0MsQ0FLeEM7O0FBRUEsUUFBRyxLQUFLTixJQUFMLENBQVVXLElBQVYsS0FBbUIsb0JBQXRCLEVBQTJDO0FBQ3ZDQyxNQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0MsK0JBQWhDLEVBQWlFLGVBQWpFLEVBQWtGLEtBQWxGO0FBQ0gsS0FGRCxNQUVNLElBQUcsS0FBS2QsSUFBTCxDQUFVVyxJQUFWLEtBQW1CLGtCQUF0QixFQUF5QztBQUMzQ0MsTUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDLGlDQUFoQyxFQUFtRSxlQUFuRSxFQUFvRixLQUFwRjtBQUNILEtBWHVDLENBYXhDOztBQUNILEdBbkRBLENBb0RMO0FBQ0E7QUFFQTs7QUF2REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IC8vIFRoaXMgbm9kZSBpcyB0aGUgbm9kZSB0byB3aGljaCB5b3VyIGV2ZW50IGhhbmRsZXIgY29kZSBjb21wb25lbnQgYmVsb25nc1xyXG4gICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkxvZ2luXCI7Ly8gVGhpcyBpcyB0aGUgY29kZSBmaWxlIG5hbWVcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiY2FsbGJhY2tcIjtcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJmb29iYXJcIjtcclxuXHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICAgICAgLy8gaGVyZSBldmVudCBpcyBhIEV2ZW50IG9iamVjdCwgeW91IGNhbiBnZXQgZXZlbnRzIHNlbnQgdG8gdGhlIGV2ZW50IG5vZGUgbm9kZVxyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJTaWduSW5XaXRoRmFjZWJvb2tcIil7XHJcbiAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvTG9naW5cIiwgXCJGQkhhbmRsZUxvZ2luXCIsIFwiKClWXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PT0gXCJTaWduSW5XaXRoR29vZ2xlXCIpe1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0dHTG9naW5cIiwgXCJHR0hhbmRsZUxvZ2luXCIsIFwiKClWXCIpOyAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGhlcmUgdGhlIGN1c3RvbUV2ZW50RGF0YSBwYXJhbWV0ZXIgaXMgZXF1YWwgdG8geW91IHNldCBiZWZvcmUgdGhlIFwiZm9vYmFyXCJcclxuICAgICAgICB9XHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19