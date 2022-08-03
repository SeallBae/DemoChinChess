
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Blur');
require('./assets/script/Page/Login/LoginPage');
require('./assets/script/PlayerInfo');
require('./assets/script/Playnow');
require('./assets/script/Popup');
require('./assets/script/Touch');
require('./assets/script/axios_connection');
require('./assets/script/board/boardinfo');
require('./assets/script/board/chess/blackchess/bishopblack');
require('./assets/script/board/chess/blackchess/canonblack');
require('./assets/script/board/chess/blackchess/guardblack');
require('./assets/script/board/chess/blackchess/kingblack');
require('./assets/script/board/chess/blackchess/knightblack');
require('./assets/script/board/chess/blackchess/pawnblack');
require('./assets/script/board/chess/blackchess/rookblack');
require('./assets/script/board/chess/redchess/bishopred');
require('./assets/script/board/chess/redchess/canonred');
require('./assets/script/board/chess/redchess/guardred');
require('./assets/script/board/chess/redchess/kingred');
require('./assets/script/board/chess/redchess/knightred');
require('./assets/script/board/chess/redchess/pawnred');
require('./assets/script/board/chess/redchess/redchess');
require('./assets/script/board/chess/redchess/rookred');
require('./assets/script/board/touchmove');
require('./assets/script/board/update');
require('./assets/script/changescene/backtoroomlist');
require('./assets/script/changescene/movetoboard');
require('./assets/script/changescene/movetoroom');
require('./assets/script/fetch');
require('./assets/script/gameplay/deadblackchess');
require('./assets/script/gameplay/deadredchess');
require('./assets/script/gameplay/list');
require('./assets/script/gameplay/movecodelist');
require('./assets/script/gameplay/readybutton');
require('./assets/script/homepage/display');
require('./assets/script/room/PrepareRoom/PrepareRoom');
require('./assets/script/room/PrepareRoom/Sendchat');
require('./assets/script/room/PrepareRoom/Showchat');
require('./assets/script/room/PrepareRoom/roominfo');
require('./assets/script/room/RoomInfos');
require('./assets/script/room/createroom');
require('./assets/script/room/joinroom');
require('./assets/script/room/showrooms');
require('./assets/script/socket_connection');
require('./assets/script/temp/deleteroom');
require('./assets/script/temp/deleteuser');

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