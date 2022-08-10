
(function () {
var scripts = [{"deps":{"./assets/script/Playnow":4,"./assets/script/Popup":12,"./assets/script/Touch":9,"./assets/script/axios_connection":10,"./assets/script/fetch":11,"./assets/script/socket_connection":17,"./assets/script/Blur":15,"./assets/script/board/touchmove":1,"./assets/script/board/update":14,"./assets/script/board/boardinfo":13,"./assets/script/changescene/movetoboard":5,"./assets/script/changescene/movetoroom":16,"./assets/script/changescene/backtoroomlist":18,"./assets/script/gameplay/deadredchess":7,"./assets/script/gameplay/list":19,"./assets/script/gameplay/movecodelist":20,"./assets/script/gameplay/readybutton":22,"./assets/script/gameplay/deadblackchess":23,"./assets/script/homepage/display":6,"./assets/script/room/createroom":26,"./assets/script/room/joinroom":25,"./assets/script/room/showrooms":24,"./assets/script/room/PrepareRoom/Showchat":21,"./assets/script/room/PrepareRoom/roominfo":29,"./assets/script/room/PrepareRoom/Sendchat":2,"./assets/script/room/RoomInfos":28,"./assets/script/temp/deleteuser":8,"./assets/script/temp/deleteroom":27,"./assets/script/PlayerInfo":30,"./assets/script/Page/Login/LoginPage":3,"./assets/script/board/chess/blackchess/guardblack":31,"./assets/script/board/chess/blackchess/kingblack":34,"./assets/script/board/chess/blackchess/knightblack":33,"./assets/script/board/chess/blackchess/pawnblack":35,"./assets/script/board/chess/blackchess/rookblack":36,"./assets/script/board/chess/blackchess/bishopblack":37,"./assets/script/board/chess/redchess/canonred":32,"./assets/script/board/chess/redchess/guardred":41,"./assets/script/board/chess/redchess/kingred":43,"./assets/script/board/chess/redchess/knightred":38,"./assets/script/board/chess/redchess/pawnred":39,"./assets/script/board/chess/redchess/redchess":45,"./assets/script/board/chess/redchess/rookred":42,"./assets/script/board/chess/redchess/bishopred":40,"./assets/script/board/chess/blackchess/canonblack":44},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../socket_connection":17},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{"./socket_connection":17,"./axios_connection":10,"regenerator-runtime/runtime":46},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{"../socket_connection":17,"../axios_connection":10},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{"../axios_connection":10},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{"regenerator-runtime":46,"regenerator-runtime/runtime":46,"axios-creator":47},"path":"preview-scripts/assets/script/axios_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/fetch.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{"../socket_connection":17},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{"../socket_connection":17},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{"socket.io-client":48},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{"../socket_connection":17,"../axios_connection":10},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{"../socket_connection":17},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{"../socket_connection":17,"../axios_connection":10},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{"../axios_connection":10,"socket.io-client":48},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{"../socket_connection":17,"../axios_connection":10},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{"../socket_connection":17},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{"../../socket_connection":17},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{"./socket_connection":17},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{"../../../socket_connection":17},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{},"path":"preview-scripts/__node_modules/regenerator-runtime/runtime.js"},{"deps":{"./lib/axios":49},"path":"preview-scripts/__node_modules/axios-creator/index.js"},{"deps":{"socket.io-parser":64,"debug":56,"./socket.js":52,"./url.js":50,"./manager.js":51},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"./utils":59,"./helpers/spread":58,"./helpers/isAxiosError":53,"./helpers/bind":60,"./core/mergeConfig":61,"./cancel/CancelToken":54,"./cancel/isCancel":62,"./cancel/Cancel":63,"./core/Axios":55,"./defaults":57},"path":"preview-scripts/__node_modules/axios-creator/lib/axios.js"},{"deps":{"engine.io-client":76,"debug":56},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"./socket.js":52,"./on.js":66,"./contrib/backo2.js":67,"debug":56,"@socket.io/component-emitter":77,"socket.io-parser":64,"engine.io-client":76},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"./on.js":66,"socket.io-parser":64,"debug":56,"@socket.io/component-emitter":77},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js"},{"deps":{"./Cancel":63},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js"},{"deps":{"./../utils":59,"./mergeConfig":61,"../helpers/buildURL":70,"./InterceptorManager":69,"./dispatchRequest":68,"../helpers/validator":71},"path":"preview-scripts/__node_modules/axios-creator/lib/core/Axios.js"},{"deps":{"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":65,"./common":73},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{"./utils":59,"./adapters/xhr":75,"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":65,"./helpers/normalizeHeaderName":72,"./core/enhanceError":74,"./adapters/http":75},"path":"preview-scripts/__node_modules/axios-creator/lib/defaults.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js"},{"deps":{"./helpers/bind":60},"path":"preview-scripts/__node_modules/axios-creator/lib/utils.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js"},{"deps":{"../utils":59},"path":"preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js"},{"deps":{"debug":56,"@socket.io/component-emitter":77,"./binary.js":79,"./is-binary.js":78},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{"./../utils":59,"../cancel/isCancel":62,"../defaults":57,"./transformData":81},"path":"preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js"},{"deps":{"./../utils":59},"path":"preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js"},{"deps":{"./../utils":59},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js"},{"deps":{"./../../package.json":80},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js"},{"deps":{"../utils":59},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js"},{"deps":{"ms":86},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js"},{"deps":{"./../utils":59,"./../helpers/buildURL":70,"./../core/settle":83,"./../helpers/cookies":85,"./../helpers/parseHeaders":84,"./../helpers/isURLSameOrigin":88,"../core/createError":87,"../core/buildFullPath":82},"path":"preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js"},{"deps":{"./contrib/parseuri.js":93,"./util.js":89,"./transports/index.js":91,"./socket.js":92,"./transport.js":90},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"./is-binary.js":78},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/package.js"},{"deps":{"./../utils":59,"./../defaults":57},"path":"preview-scripts/__node_modules/axios-creator/lib/core/transformData.js"},{"deps":{"../helpers/isAbsoluteURL":95,"../helpers/combineURLs":94},"path":"preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js"},{"deps":{"./createError":87},"path":"preview-scripts/__node_modules/axios-creator/lib/core/settle.js"},{"deps":{"./../utils":59},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js"},{"deps":{"./../utils":59},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{"./enhanceError":74},"path":"preview-scripts/__node_modules/axios-creator/lib/core/createError.js"},{"deps":{"./../utils":59},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js"},{"deps":{"./globalThis.js":96},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{"@socket.io/component-emitter":77,"./util.js":89,"debug":56,"engine.io-parser":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{"./polling.js":99,"./websocket.js":98},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{"./transports/index.js":91,"./util.js":89,"./contrib/parseuri.js":93,"debug":56,"@socket.io/component-emitter":77,"./contrib/parseqs.js":97,"engine.io-parser":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{"../transport.js":90,"../contrib/parseqs.js":97,"../contrib/yeast.js":103,"../util.js":89,"debug":56,"./websocket-constructor.js":102,"buffer":101,"engine.io-parser":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{"../transport.js":90,"debug":56,"../contrib/parseqs.js":97,"@socket.io/component-emitter":77,"../util.js":89,"../globalThis.js":96,"../contrib/yeast.js":103,"./xmlhttprequest.js":108,"engine.io-parser":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{"./encodePacket.js":107,"./decodePacket.js":109},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{"base64-js":104,"ieee754":105,"isarray":106},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{"../globalThis.js":96},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"./commons.js":110},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{"../globalThis.js":96,"../contrib/has-cors.js":112},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{"./commons.js":110,"./contrib/base64-arraybuffer.js":111},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"}];
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
    