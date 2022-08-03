
(function () {
var scripts = [{"deps":{"./assets/script/board/touchmove":1,"./assets/script/room/PrepareRoom/roominfo":2,"./assets/script/Page/Login/LoginPage":3,"./assets/script/Popup":4,"./assets/script/changescene/movetoboard":5,"./assets/script/gameplay/deadredchess":6,"./assets/script/homepage/display":7,"./assets/script/temp/deleteroom":8,"./assets/script/board/chess/blackchess/canonblack":9,"./assets/script/board/chess/redchess/rookred":11,"./assets/script/Touch":12,"./assets/script/fetch":15,"./assets/script/board/update":16,"./assets/script/Blur":17,"./assets/script/board/boardinfo":18,"./assets/script/gameplay/movecodelist":19,"./assets/script/changescene/movetoroom":20,"./assets/script/gameplay/list":21,"./assets/script/room/createroom":22,"./assets/script/changescene/backtoroomlist":23,"./assets/script/room/showrooms":24,"./assets/script/room/PrepareRoom/Sendchat":26,"./assets/script/room/PrepareRoom/PrepareRoom":27,"./assets/script/gameplay/readybutton":28,"./assets/script/room/RoomInfos":29,"./assets/script/gameplay/deadblackchess":30,"./assets/script/room/PrepareRoom/Showchat":31,"./assets/script/PlayerInfo":32,"./assets/script/temp/deleteuser":33,"./assets/script/board/chess/redchess/bishopred":34,"./assets/script/board/chess/blackchess/pawnblack":35,"./assets/script/board/chess/blackchess/kingblack":36,"./assets/script/board/chess/blackchess/knightblack":37,"./assets/script/board/chess/blackchess/guardblack":38,"./assets/script/board/chess/blackchess/rookblack":39,"./assets/script/board/chess/blackchess/bishopblack":40,"./assets/script/board/chess/redchess/canonred":41,"./assets/script/Playnow":10,"./assets/script/board/chess/redchess/guardred":42,"./assets/script/board/chess/redchess/knightred":43,"./assets/script/board/chess/redchess/pawnred":44,"./assets/script/board/chess/redchess/kingred":45,"./assets/script/board/chess/redchess/redchess":46,"./assets/script/socket_connection":14,"./assets/script/axios_connection":13,"./assets/script/room/joinroom":25},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{"../../socket_connection":14},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{"../socket_connection":14,"../axios_connection":13},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{"./socket_connection":14,"./axios_connection":13,"regenerator-runtime/runtime":48},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{"regenerator-runtime/runtime":48,"axios-creator":47},"path":"preview-scripts/assets/script/axios_connection.js"},{"deps":{"socket.io-client":49},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/fetch.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{"../socket_connection":14,"../axios_connection":13},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{"socket.io-client":49},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/PrepareRoom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{"../socket_connection":14},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{"./socket_connection":14},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{"../axios_connection":13},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{"../../../socket_connection":14},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{"./lib/axios":50},"path":"preview-scripts/__node_modules/axios-creator/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/regenerator-runtime/runtime.js"},{"deps":{"./url.js":51,"./socket.js":53,"socket.io-parser":65,"debug":56,"./manager.js":52},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"./core/mergeConfig":54,"./helpers/spread":55,"./cancel/CancelToken":57,"./utils":58,"./helpers/isAxiosError":61,"./helpers/bind":62,"./cancel/isCancel":63,"./cancel/Cancel":64,"./core/Axios":60,"./defaults":59},"path":"preview-scripts/__node_modules/axios-creator/lib/axios.js"},{"deps":{"debug":56,"engine.io-client":78},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"./socket.js":53,"socket.io-parser":65,"debug":56,"@socket.io/component-emitter":69,"./on.js":66,"./contrib/backo2.js":67,"engine.io-client":78},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"socket.io-parser":65,"./on.js":66,"debug":56,"@socket.io/component-emitter":69},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{"../utils":58},"path":"preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js"},{"deps":{"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":68,"./common":70},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{"./Cancel":64},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js"},{"deps":{"./helpers/bind":62},"path":"preview-scripts/__node_modules/axios-creator/lib/utils.js"},{"deps":{"./utils":58,"./adapters/xhr":71,"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":68,"./helpers/normalizeHeaderName":72,"./core/enhanceError":74,"./adapters/http":71},"path":"preview-scripts/__node_modules/axios-creator/lib/defaults.js"},{"deps":{"./../utils":58,"./mergeConfig":54,"../helpers/buildURL":73,"./InterceptorManager":76,"../helpers/validator":75,"./dispatchRequest":77},"path":"preview-scripts/__node_modules/axios-creator/lib/core/Axios.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js"},{"deps":{"@socket.io/component-emitter":69,"debug":56,"./binary.js":79,"./is-binary.js":80},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{"ms":94},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{"./../utils":58,"./../helpers/buildURL":73,"./../core/settle":81,"./../helpers/cookies":83,"../core/createError":85,"./../helpers/isURLSameOrigin":89,"./../helpers/parseHeaders":90,"../core/buildFullPath":82},"path":"preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js"},{"deps":{"../utils":58},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js"},{"deps":{"./../utils":58},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js"},{"deps":{"./../../package.json":84},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js"},{"deps":{"./../utils":58},"path":"preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js"},{"deps":{"./../utils":58,"../cancel/isCancel":63,"../defaults":59,"./transformData":86},"path":"preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js"},{"deps":{"./contrib/parseuri.js":93,"./socket.js":88,"./util.js":91,"./transports/index.js":87,"./transport.js":92},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{"./is-binary.js":80},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"./createError":85},"path":"preview-scripts/__node_modules/axios-creator/lib/core/settle.js"},{"deps":{"../helpers/combineURLs":95,"../helpers/isAbsoluteURL":96},"path":"preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js"},{"deps":{"./../utils":58},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/package.js"},{"deps":{"./enhanceError":74},"path":"preview-scripts/__node_modules/axios-creator/lib/core/createError.js"},{"deps":{"./../utils":58,"./../defaults":59},"path":"preview-scripts/__node_modules/axios-creator/lib/core/transformData.js"},{"deps":{"./websocket.js":99,"./polling.js":97},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{"./transports/index.js":87,"./util.js":91,"./contrib/parseuri.js":93,"debug":56,"@socket.io/component-emitter":69,"engine.io-parser":101,"./contrib/parseqs.js":98},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{"./../utils":58},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js"},{"deps":{"./../utils":58},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js"},{"deps":{"./globalThis.js":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{"@socket.io/component-emitter":69,"./util.js":91,"debug":56,"engine.io-parser":101},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js"},{"deps":{"../transport.js":92,"debug":56,"../contrib/parseqs.js":98,"engine.io-parser":101,"@socket.io/component-emitter":69,"../util.js":91,"../globalThis.js":100,"../contrib/yeast.js":103,"./xmlhttprequest.js":104},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{"../transport.js":92,"../contrib/parseqs.js":98,"../contrib/yeast.js":103,"../util.js":91,"debug":56,"engine.io-parser":101,"./websocket-constructor.js":105,"buffer":102},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{"./encodePacket.js":108,"./decodePacket.js":110},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{"base64-js":106,"ieee754":107,"isarray":109},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{"../globalThis.js":100,"../contrib/has-cors.js":111},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{"../globalThis.js":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./commons.js":112},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"./commons.js":112,"./contrib/base64-arraybuffer.js":113},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"}];
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
    