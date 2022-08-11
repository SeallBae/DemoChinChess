
(function () {
var scripts = [{"deps":{"./assets/script/Playnow":10,"./assets/script/Popup":4,"./assets/script/Touch":11,"./assets/script/axios_connection":16,"./assets/script/fetch":12,"./assets/script/socket_connection":9,"./assets/script/Blur":13,"./assets/script/board/touchmove":1,"./assets/script/board/update":14,"./assets/script/board/boardinfo":15,"./assets/script/changescene/movetoboard":19,"./assets/script/changescene/movetohomepage":5,"./assets/script/changescene/movetoroom":17,"./assets/script/changescene/movetorooms":18,"./assets/script/changescene/backtoroomlist":22,"./assets/script/gameplay/deadredchess":6,"./assets/script/gameplay/list":23,"./assets/script/gameplay/movecodelist":20,"./assets/script/gameplay/readybutton":21,"./assets/script/gameplay/deadblackchess":24,"./assets/script/homepage/display":7,"./assets/script/room/createroom":25,"./assets/script/room/joinroom":31,"./assets/script/room/showrooms":27,"./assets/script/room/PrepareRoom/Showchat":26,"./assets/script/room/PrepareRoom/roominfo":2,"./assets/script/room/PrepareRoom/Sendchat":29,"./assets/script/room/RoomInfos":32,"./assets/script/temp/deleteuser":8,"./assets/script/temp/deleteroom":30,"./assets/script/PlayerInfo":28,"./assets/script/Page/Login/LoginPage":3,"./assets/script/board/chess/blackchess/guardblack":33,"./assets/script/board/chess/blackchess/kingblack":35,"./assets/script/board/chess/blackchess/knightblack":38,"./assets/script/board/chess/blackchess/pawnblack":37,"./assets/script/board/chess/blackchess/rookblack":36,"./assets/script/board/chess/blackchess/bishopblack":39,"./assets/script/board/chess/redchess/canonred":41,"./assets/script/board/chess/redchess/guardred":34,"./assets/script/board/chess/redchess/kingred":45,"./assets/script/board/chess/redchess/knightred":40,"./assets/script/board/chess/redchess/pawnred":43,"./assets/script/board/chess/redchess/redchess":42,"./assets/script/board/chess/redchess/rookred":44,"./assets/script/board/chess/redchess/bishopred":46,"./assets/script/board/chess/blackchess/canonblack":47},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../socket_connection":9},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{"../../socket_connection":9},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetohomepage.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{"../socket_connection":9,"../axios_connection":16},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{"../axios_connection":16},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{"socket.io-client":50},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{"./socket_connection":9,"./axios_connection":16},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{},"path":"preview-scripts/assets/script/fetch.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{"../socket_connection":9},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{"regenerator-runtime/runtime":48,"regenerator-runtime":48,"axios-creator":49},"path":"preview-scripts/assets/script/axios_connection.js"},{"deps":{"../socket_connection":9},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetorooms.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{"../socket_connection":9},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{"../socket_connection":9,"../axios_connection":16},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{"../socket_connection":9,"../axios_connection":16},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{"../socket_connection":9,"../axios_connection":16},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{"./socket_connection":9},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{"../axios_connection":16,"socket.io-client":50},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{"../socket_connection":9},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{"../../../socket_connection":9},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{},"path":"preview-scripts/__node_modules/regenerator-runtime/runtime.js"},{"deps":{"./lib/axios":51},"path":"preview-scripts/__node_modules/axios-creator/index.js"},{"deps":{"./manager.js":52,"./socket.js":54,"socket.io-parser":66,"debug":55,"./url.js":53},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"./utils":60,"./helpers/spread":56,"./helpers/isAxiosError":62,"./helpers/bind":61,"./core/mergeConfig":57,"./cancel/CancelToken":58,"./cancel/isCancel":64,"./cancel/Cancel":65,"./core/Axios":63,"./defaults":59},"path":"preview-scripts/__node_modules/axios-creator/lib/axios.js"},{"deps":{"./socket.js":54,"socket.io-parser":66,"debug":55,"engine.io-client":72,"@socket.io/component-emitter":70,"./on.js":67,"./contrib/backo2.js":68},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"debug":55,"engine.io-client":72},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"socket.io-parser":66,"./on.js":67,"debug":55,"@socket.io/component-emitter":70},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":69,"./common":71},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js"},{"deps":{"../utils":60},"path":"preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js"},{"deps":{"./Cancel":65},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js"},{"deps":{"./utils":60,"./adapters/xhr":74,"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":69,"./helpers/normalizeHeaderName":75,"./core/enhanceError":73,"./adapters/http":74},"path":"preview-scripts/__node_modules/axios-creator/lib/defaults.js"},{"deps":{"./helpers/bind":61},"path":"preview-scripts/__node_modules/axios-creator/lib/utils.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js"},{"deps":{"./../utils":60,"./mergeConfig":57,"../helpers/buildURL":76,"./InterceptorManager":78,"./dispatchRequest":77,"../helpers/validator":79},"path":"preview-scripts/__node_modules/axios-creator/lib/core/Axios.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js"},{"deps":{"@socket.io/component-emitter":70,"debug":55,"./is-binary.js":80,"./binary.js":81},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{"ms":87},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{"./contrib/parseuri.js":83,"./util.js":85,"./socket.js":84,"./transports/index.js":82,"./transport.js":86},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js"},{"deps":{"./../utils":60,"./../helpers/buildURL":76,"./../core/settle":89,"./../helpers/cookies":90,"./../helpers/parseHeaders":92,"./../helpers/isURLSameOrigin":91,"../core/createError":93,"../core/buildFullPath":88},"path":"preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js"},{"deps":{"../utils":60},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js"},{"deps":{"./../utils":60},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js"},{"deps":{"./../utils":60,"../cancel/isCancel":64,"../defaults":59,"./transformData":94},"path":"preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js"},{"deps":{"./../utils":60},"path":"preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js"},{"deps":{"./../../package.json":95},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"./is-binary.js":80},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{"./websocket.js":96,"./polling.js":97},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{"./transports/index.js":82,"./util.js":85,"./contrib/parseuri.js":83,"debug":55,"@socket.io/component-emitter":70,"engine.io-parser":102,"./contrib/parseqs.js":99},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{"./globalThis.js":98},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{"@socket.io/component-emitter":70,"./util.js":85,"debug":55,"engine.io-parser":102},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{"../helpers/isAbsoluteURL":100,"../helpers/combineURLs":101},"path":"preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js"},{"deps":{"./createError":93},"path":"preview-scripts/__node_modules/axios-creator/lib/core/settle.js"},{"deps":{"./../utils":60},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js"},{"deps":{"./../utils":60},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js"},{"deps":{"./../utils":60},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js"},{"deps":{"./enhanceError":73},"path":"preview-scripts/__node_modules/axios-creator/lib/core/createError.js"},{"deps":{"./../utils":60,"./../defaults":59},"path":"preview-scripts/__node_modules/axios-creator/lib/core/transformData.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/package.js"},{"deps":{"../transport.js":86,"../contrib/parseqs.js":99,"../util.js":85,"debug":55,"engine.io-parser":102,"../contrib/yeast.js":104,"./websocket-constructor.js":105,"buffer":103},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{"../transport.js":86,"debug":55,"../contrib/yeast.js":104,"../contrib/parseqs.js":99,"engine.io-parser":102,"@socket.io/component-emitter":70,"../util.js":85,"../globalThis.js":98,"./xmlhttprequest.js":106},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js"},{"deps":{"./encodePacket.js":111,"./decodePacket.js":110},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{"base64-js":107,"ieee754":108,"isarray":109},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{"../globalThis.js":98},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{"../globalThis.js":98,"../contrib/has-cors.js":112},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"./commons.js":113,"./contrib/base64-arraybuffer.js":114},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{"./commons.js":113},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"}];
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
    