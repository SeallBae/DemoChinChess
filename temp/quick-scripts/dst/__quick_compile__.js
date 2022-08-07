
(function () {
var scripts = [{"deps":{"./assets/script/Playnow":4,"./assets/script/Popup":10,"./assets/script/Touch":11,"./assets/script/axios_connection":13,"./assets/script/fetch":14,"./assets/script/socket_connection":15,"./assets/script/Blur":17,"./assets/script/board/touchmove":1,"./assets/script/board/update":12,"./assets/script/board/boardinfo":33,"./assets/script/changescene/movetoboard":16,"./assets/script/changescene/movetoroom":5,"./assets/script/changescene/backtoroomlist":19,"./assets/script/gameplay/deadredchess":8,"./assets/script/gameplay/list":30,"./assets/script/gameplay/movecodelist":18,"./assets/script/gameplay/readybutton":29,"./assets/script/gameplay/deadblackchess":21,"./assets/script/homepage/display":6,"./assets/script/room/createroom":31,"./assets/script/room/joinroom":20,"./assets/script/room/showrooms":24,"./assets/script/room/PrepareRoom/Sendchat":2,"./assets/script/room/PrepareRoom/Showchat":25,"./assets/script/room/PrepareRoom/roominfo":26,"./assets/script/room/PrepareRoom/PrepareRoom":28,"./assets/script/room/RoomInfos":23,"./assets/script/temp/deleteuser":9,"./assets/script/temp/deleteroom":27,"./assets/script/PlayerInfo":22,"./assets/script/Page/Login/LoginPage":3,"./assets/script/board/chess/blackchess/guardblack":34,"./assets/script/board/chess/blackchess/kingblack":36,"./assets/script/board/chess/blackchess/knightblack":39,"./assets/script/board/chess/blackchess/pawnblack":35,"./assets/script/board/chess/blackchess/rookblack":42,"./assets/script/board/chess/blackchess/bishopblack":43,"./assets/script/board/chess/redchess/canonred":38,"./assets/script/board/chess/redchess/guardred":37,"./assets/script/board/chess/redchess/kingred":32,"./assets/script/board/chess/redchess/knightred":40,"./assets/script/board/chess/redchess/pawnred":41,"./assets/script/board/chess/redchess/redchess":44,"./assets/script/board/chess/redchess/rookred":46,"./assets/script/board/chess/redchess/bishopred":45,"./assets/script/board/chess/blackchess/canonblack":7},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{"./socket_connection":15,"./axios_connection":13,"regenerator-runtime/runtime":47},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{"../socket_connection":15,"../axios_connection":13},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{"../axios_connection":13},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{"regenerator-runtime":98,"regenerator-runtime/runtime":98,"axios-creator":99},"path":"preview-scripts/assets/script/axios_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/fetch.js"},{"deps":{"socket.io-client":48},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{"../socket_connection":15,"../axios_connection":13},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{"../axios_connection":13,"socket.io-client":128},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{"./socket_connection":15},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{"../socket_connection":15,"../axios_connection":13},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{"../../socket_connection":15},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/PrepareRoom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{"../socket_connection":15,"../axios_connection":13},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{"../../../socket_connection":15},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/__node_modules/regenerator-runtime/runtime.js"},{"deps":{"./url":49,"socket.io-parser":53,"debug":52,"./socket":50,"./manager":51},"path":"preview-scripts/__node_modules/socket.io-client/lib/index.js"},{"deps":{"debug":52,"parseuri":55},"path":"preview-scripts/__node_modules/socket.io-client/lib/url.js"},{"deps":{"socket.io-parser":53,"debug":52,"component-emitter":54,"component-bind":56,"parseqs":57,"to-array":58,"./on":59,"has-binary2":61},"path":"preview-scripts/__node_modules/socket.io-client/lib/socket.js"},{"deps":{"./socket":50,"socket.io-parser":53,"./on":59,"debug":52,"component-emitter":54,"component-bind":56,"indexof":60,"backo2":62,"engine.io-client":67},"path":"preview-scripts/__node_modules/socket.io-client/lib/manager.js"},{"deps":{"../../../../process/browser.js":66,"./debug":63},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/browser.js"},{"deps":{"debug":52,"component-emitter":54,"./is-buffer":64,"./binary":65,"isarray":68},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseuri/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-bind/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/parseqs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/to-array/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/lib/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/indexof/index.js"},{"deps":{"isarray":70,"buffer":69},"path":"preview-scripts/__node_modules/has-binary2/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/backo2/index.js"},{"deps":{"ms":71},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/debug/src/debug.js"},{"deps":{"buffer":69},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/is-buffer.js"},{"deps":{"isarray":68,"./is-buffer":64},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/binary.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"engine.io-parser":73,"./socket":72},"path":"preview-scripts/__node_modules/engine.io-client/lib/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/isarray/index.js"},{"deps":{"base64-js":74,"ieee754":75,"isarray":83},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-binary2/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/ms/index.js"},{"deps":{"component-emitter":54,"indexof":60,"engine.io-parser":73,"parseuri":55,"parseqs":57,"./transport":77,"./transports/index":76,"debug":84},"path":"preview-scripts/__node_modules/engine.io-client/lib/socket.js"},{"deps":{"has-binary2":61,"./keys":78,"blob":79,"after":80,"arraybuffer.slice":81,"./utf8":82,"base64-arraybuffer":85},"path":"preview-scripts/__node_modules/engine.io-parser/lib/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./polling-jsonp":87,"./polling-xhr":86,"xmlhttprequest-ssl":88,"./websocket":89},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/index.js"},{"deps":{"engine.io-parser":73,"component-emitter":54},"path":"preview-scripts/__node_modules/engine.io-client/lib/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/keys.js"},{"deps":{},"path":"preview-scripts/__node_modules/blob/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/after/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/arraybuffer.slice/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/lib/utf8.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"../../../../process/browser.js":66,"./debug":90},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-arraybuffer/lib/base64-arraybuffer.js"},{"deps":{"xmlhttprequest-ssl":88,"component-emitter":54,"debug":84,"component-inherit":91,"../globalThis":92,"./polling":93},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-xhr.js"},{"deps":{"./polling":93,"component-inherit":91,"../globalThis":92},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling-jsonp.js"},{"deps":{"./globalThis":92,"has-cors":95},"path":"preview-scripts/__node_modules/engine.io-client/lib/xmlhttprequest.js"},{"deps":{"../transport":77,"engine.io-parser":73,"parseqs":57,"component-inherit":91,"debug":84,"buffer":69,"ws":94,"yeast":96},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/websocket.js"},{"deps":{"ms":97},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/debug/src/debug.js"},{"deps":{},"path":"preview-scripts/__node_modules/component-inherit/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/lib/globalThis.browser.js"},{"deps":{"../transport":77,"parseqs":57,"engine.io-parser":73,"component-inherit":91,"yeast":96,"debug":84,"xmlhttprequest-ssl":88},"path":"preview-scripts/__node_modules/engine.io-client/lib/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{},"path":"preview-scripts/__node_modules/has-cors/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/yeast/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/node_modules/ms/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/regenerator-runtime/runtime.js"},{"deps":{"./lib/axios":100},"path":"preview-scripts/__node_modules/axios-creator/index.js"},{"deps":{"./utils":106,"./helpers/spread":104,"./helpers/isAxiosError":101,"./helpers/bind":105,"./core/mergeConfig":102,"./cancel/CancelToken":108,"./cancel/isCancel":110,"./cancel/Cancel":109,"./core/Axios":107,"./defaults":103},"path":"preview-scripts/__node_modules/axios-creator/lib/axios.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js"},{"deps":{"../utils":106},"path":"preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js"},{"deps":{"./utils":106,"./adapters/xhr":113,"../../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":66,"./helpers/normalizeHeaderName":111,"./core/enhanceError":112,"./adapters/http":113},"path":"preview-scripts/__node_modules/axios-creator/lib/defaults.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js"},{"deps":{"./helpers/bind":105},"path":"preview-scripts/__node_modules/axios-creator/lib/utils.js"},{"deps":{"./../utils":106,"./mergeConfig":102,"../helpers/buildURL":120,"./InterceptorManager":114,"./dispatchRequest":117,"../helpers/validator":115},"path":"preview-scripts/__node_modules/axios-creator/lib/core/Axios.js"},{"deps":{"./Cancel":109},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js"},{"deps":{"../utils":106},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js"},{"deps":{"./../utils":106,"./../helpers/buildURL":120,"./../core/settle":116,"./../helpers/cookies":119,"./../helpers/parseHeaders":124,"./../helpers/isURLSameOrigin":127,"../core/createError":121,"../core/buildFullPath":118},"path":"preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js"},{"deps":{"./../utils":106},"path":"preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js"},{"deps":{"./../../package.json":122},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js"},{"deps":{"./createError":121},"path":"preview-scripts/__node_modules/axios-creator/lib/core/settle.js"},{"deps":{"./../utils":106,"../cancel/isCancel":110,"../defaults":103,"./transformData":126},"path":"preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js"},{"deps":{"../helpers/isAbsoluteURL":123,"../helpers/combineURLs":125},"path":"preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js"},{"deps":{"./../utils":106},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js"},{"deps":{"./../utils":106},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js"},{"deps":{"./enhanceError":112},"path":"preview-scripts/__node_modules/axios-creator/lib/core/createError.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/package.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js"},{"deps":{"./../utils":106},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js"},{"deps":{"./../utils":106,"./../defaults":103},"path":"preview-scripts/__node_modules/axios-creator/lib/core/transformData.js"},{"deps":{"./../utils":106},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js"},{"deps":{"socket.io-parser":135,"debug":132,"./socket.js":129,"./url.js":131,"./manager.js":130},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"./on.js":134,"socket.io-parser":135,"debug":132,"@socket.io/component-emitter":142},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{"./socket.js":129,"./on.js":134,"./contrib/backo2.js":133,"debug":132,"@socket.io/component-emitter":142,"socket.io-parser":135,"engine.io-client":137},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"engine.io-client":137,"debug":132},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"../../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":66,"./common":136},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{"debug":132,"@socket.io/component-emitter":142,"./binary.js":146,"./is-binary.js":145},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{"ms":138},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{"./contrib/parseuri.js":143,"./util.js":141,"./transports/index.js":144,"./socket.js":140,"./transport.js":139},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{"@socket.io/component-emitter":142,"./util.js":141,"debug":132,"engine.io-parser":149},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{"./transports/index.js":144,"./util.js":141,"./contrib/parseuri.js":143,"debug":132,"@socket.io/component-emitter":142,"./contrib/parseqs.js":148,"engine.io-parser":149},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{"./globalThis.js":147},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{"./polling.js":150,"./websocket.js":153},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"./is-binary.js":145},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{"./encodePacket.js":151,"./decodePacket.js":152},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{"../transport.js":139,"debug":132,"../contrib/parseqs.js":148,"@socket.io/component-emitter":142,"../util.js":141,"../globalThis.js":147,"../contrib/yeast.js":155,"./xmlhttprequest.js":156,"engine.io-parser":149},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{"./commons.js":154},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{"./commons.js":154,"./contrib/base64-arraybuffer.js":157},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{"../transport.js":139,"../contrib/parseqs.js":148,"../contrib/yeast.js":155,"../util.js":141,"debug":132,"./websocket-constructor.js":158,"buffer":69,"engine.io-parser":149},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{"../globalThis.js":147,"../contrib/has-cors.js":159},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"},{"deps":{"../globalThis.js":147},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    