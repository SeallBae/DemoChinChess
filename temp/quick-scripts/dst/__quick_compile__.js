
(function () {
var scripts = [{"deps":{"./assets/script/board/touchmove":1,"./assets/script/room/PrepareRoom/Showchat":2,"./assets/script/Page/Login/LoginPage":3,"./assets/script/Playnow":4,"./assets/script/changescene/movetoroom":5,"./assets/script/gameplay/list":6,"./assets/script/homepage/display":7,"./assets/sdkhub/js-sdkhub":8,"./assets/script/temp/deleteroom":9,"./assets/script/PlayerInfo":10,"./assets/script/fetch":11,"./assets/script/Popup":12,"./assets/script/Touch":15,"./assets/script/board/boardinfo":16,"./assets/script/board/update":17,"./assets/script/Blur":18,"./assets/script/changescene/movetohomepage":19,"./assets/script/changescene/movetoboard":20,"./assets/script/changescene/movetocotuong":21,"./assets/script/changescene/backtoroomlist":22,"./assets/script/gameplay/deadredchess":23,"./assets/script/gameplay/movecodelist":24,"./assets/script/room/createroom":25,"./assets/script/gameplay/readybutton":26,"./assets/script/room/PrepareRoom/ready":27,"./assets/script/room/PrepareRoom/roominfo":28,"./assets/script/room/showrooms":29,"./assets/script/room/joinroom":30,"./assets/script/room/PrepareRoom/Sendchat":31,"./assets/script/gameplay/deadblackchess":32,"./assets/script/room/RoomInfos":33,"./assets/script/Login":34,"./assets/script/temp/deleteuser":35,"./assets/script/changescene/movetorooms":36,"./assets/script/board/chess/blackchess/guardblack":37,"./assets/script/board/chess/redchess/canonred":38,"./assets/script/board/chess/blackchess/kingblack":39,"./assets/script/board/chess/blackchess/pawnblack":40,"./assets/script/board/chess/blackchess/bishopblack":41,"./assets/script/board/chess/blackchess/rookblack":42,"./assets/script/board/chess/blackchess/knightblack":43,"./assets/script/board/chess/redchess/kingred":44,"./assets/script/board/chess/redchess/guardred":45,"./assets/script/board/chess/redchess/pawnred":46,"./assets/script/board/chess/redchess/knightred":47,"./assets/script/board/chess/redchess/redchess":48,"./assets/script/board/chess/redchess/bishopred":49,"./assets/script/board/chess/redchess/rookred":50,"./assets/script/board/chess/blackchess/canonblack":51,"./assets/script/axios_connection":13,"./assets/script/socket_connection":14},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../axios_connection":13,"../socket_connection":14},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{"./socket_connection":14,"./axios_connection":13},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{"../socket_connection":14,"../axios_connection":13},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{},"path":"preview-scripts/assets/sdkhub/js-sdkhub.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{"./socket_connection":14},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{},"path":"preview-scripts/assets/script/fetch.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{"axios-creator":52},"path":"preview-scripts/assets/script/axios_connection.js"},{"deps":{"socket.io-client":53},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{"../axios_connection":13,"../socket_connection":14},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetohomepage.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetocotuong.js"},{"deps":{"../socket_connection":14,"../axios_connection":13},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{"../socket_connection":14,"../axios_connection":13},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{"../../axios_connection":13,"../../socket_connection":14},"path":"preview-scripts/assets/script/room/PrepareRoom/ready.js"},{"deps":{"../../socket_connection":14},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{"../socket_connection":14,"../axios_connection":13},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{"../axios_connection":13},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{},"path":"preview-scripts/assets/script/Login.js"},{"deps":{"../axios_connection":13},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetorooms.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{"../../../socket_connection":14},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{"./lib/axios":54},"path":"preview-scripts/__node_modules/axios-creator/index.js"},{"deps":{"./url.js":55,"./socket.js":57,"socket.io-parser":62,"debug":58,"./manager.js":56},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"./helpers/spread":59,"./cancel/isCancel":61,"./utils":64,"./helpers/isAxiosError":65,"./helpers/bind":66,"./cancel/CancelToken":67,"./cancel/Cancel":68,"./core/mergeConfig":69,"./core/Axios":60,"./defaults":63},"path":"preview-scripts/__node_modules/axios-creator/lib/axios.js"},{"deps":{"debug":58,"engine.io-client":75},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"./socket.js":57,"socket.io-parser":62,"debug":58,"@socket.io/component-emitter":74,"./contrib/backo2.js":70,"./on.js":71,"engine.io-client":75},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"socket.io-parser":62,"./on.js":71,"debug":58,"@socket.io/component-emitter":74},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":72,"./common":73},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js"},{"deps":{"./../utils":64,"./mergeConfig":69,"./InterceptorManager":77,"../helpers/buildURL":78,"../helpers/validator":79,"./dispatchRequest":76},"path":"preview-scripts/__node_modules/axios-creator/lib/core/Axios.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js"},{"deps":{"@socket.io/component-emitter":74,"debug":58,"./is-binary.js":82,"./binary.js":83},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{"./utils":64,"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":72,"./adapters/xhr":84,"./core/enhanceError":80,"./helpers/normalizeHeaderName":81,"./adapters/http":84},"path":"preview-scripts/__node_modules/axios-creator/lib/defaults.js"},{"deps":{"./helpers/bind":66},"path":"preview-scripts/__node_modules/axios-creator/lib/utils.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js"},{"deps":{"./Cancel":68},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js"},{"deps":{"../utils":64},"path":"preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"ms":90},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{"./contrib/parseuri.js":88,"./util.js":85,"./socket.js":86,"./transports/index.js":87,"./transport.js":89},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{"./../utils":64,"../cancel/isCancel":61,"../defaults":63,"./transformData":92},"path":"preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js"},{"deps":{"./../utils":64},"path":"preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js"},{"deps":{"./../utils":64},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js"},{"deps":{"./../../package.json":91},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js"},{"deps":{"../utils":64},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"./is-binary.js":82},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{"./../utils":64,"./../helpers/buildURL":78,"./../core/settle":93,"./../helpers/cookies":95,"./../helpers/parseHeaders":96,"./../helpers/isURLSameOrigin":97,"../core/createError":98,"../core/buildFullPath":94},"path":"preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js"},{"deps":{"./globalThis.js":101},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{"./transports/index.js":87,"./util.js":85,"./contrib/parseuri.js":88,"debug":58,"@socket.io/component-emitter":74,"engine.io-parser":105,"./contrib/parseqs.js":102},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{"./websocket.js":99,"./polling.js":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{"@socket.io/component-emitter":74,"./util.js":85,"debug":58,"engine.io-parser":105},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/package.js"},{"deps":{"./../utils":64,"./../defaults":63},"path":"preview-scripts/__node_modules/axios-creator/lib/core/transformData.js"},{"deps":{"./createError":98},"path":"preview-scripts/__node_modules/axios-creator/lib/core/settle.js"},{"deps":{"../helpers/combineURLs":103,"../helpers/isAbsoluteURL":104},"path":"preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js"},{"deps":{"./../utils":64},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js"},{"deps":{"./../utils":64},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js"},{"deps":{"./../utils":64},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js"},{"deps":{"./enhanceError":80},"path":"preview-scripts/__node_modules/axios-creator/lib/core/createError.js"},{"deps":{"../transport.js":89,"../contrib/parseqs.js":102,"../util.js":85,"debug":58,"engine.io-parser":105,"../contrib/yeast.js":108,"./websocket-constructor.js":109,"buffer":106},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{"../transport.js":89,"debug":58,"../contrib/yeast.js":108,"../contrib/parseqs.js":102,"engine.io-parser":105,"@socket.io/component-emitter":74,"../util.js":85,"../globalThis.js":101,"./xmlhttprequest.js":107},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js"},{"deps":{"./encodePacket.js":113,"./decodePacket.js":114},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{"base64-js":110,"ieee754":111,"isarray":112},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{"../globalThis.js":101,"../contrib/has-cors.js":115},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{"../globalThis.js":101},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"./commons.js":116},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{"./commons.js":116,"./contrib/base64-arraybuffer.js":117},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"}];
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
    