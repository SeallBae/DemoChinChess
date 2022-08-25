
(function () {
var scripts = [{"deps":{"./assets/script/PlayerInfo":4,"./assets/script/Playnow":8,"./assets/script/Popup":11,"./assets/script/Touch":17,"./assets/script/axios_connection":10,"./assets/script/fetch":12,"./assets/script/socket_connection":15,"./assets/script/Blur":18,"./assets/script/board/touchmove":1,"./assets/script/board/update":9,"./assets/script/board/boardinfo":14,"./assets/script/changescene/movetoboard":6,"./assets/script/changescene/movetocotuong":20,"./assets/script/changescene/movetohomepage":13,"./assets/script/changescene/movetoroom":19,"./assets/script/changescene/movetorooms":36,"./assets/script/changescene/backtoroomlist":22,"./assets/script/gameplay/deadredchess":5,"./assets/script/gameplay/list":21,"./assets/script/gameplay/movecodelist":23,"./assets/script/gameplay/readybutton":32,"./assets/script/gameplay/deadblackchess":24,"./assets/script/homepage/display":34,"./assets/script/room/createroom":30,"./assets/script/room/joinroom":25,"./assets/script/room/showrooms":26,"./assets/script/room/PrepareRoom/Showchat":2,"./assets/script/room/PrepareRoom/roominfo":28,"./assets/script/room/PrepareRoom/Sendchat":29,"./assets/script/room/RoomInfos":27,"./assets/script/temp/deleteuser":16,"./assets/script/temp/deleteroom":33,"./assets/sdkhub/js-sdkhub":7,"./assets/script/Login":31,"./assets/script/Page/Login/LoginPage":3,"./assets/script/board/chess/blackchess/guardblack":35,"./assets/script/board/chess/blackchess/kingblack":38,"./assets/script/board/chess/blackchess/knightblack":47,"./assets/script/board/chess/blackchess/pawnblack":44,"./assets/script/board/chess/blackchess/rookblack":39,"./assets/script/board/chess/blackchess/bishopblack":45,"./assets/script/board/chess/redchess/canonred":37,"./assets/script/board/chess/redchess/guardred":40,"./assets/script/board/chess/redchess/kingred":43,"./assets/script/board/chess/redchess/knightred":42,"./assets/script/board/chess/redchess/pawnred":41,"./assets/script/board/chess/redchess/redchess":46,"./assets/script/board/chess/redchess/rookred":50,"./assets/script/board/chess/redchess/bishopred":49,"./assets/script/board/chess/blackchess/canonblack":48},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{"./socket_connection":15},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{},"path":"preview-scripts/assets/sdkhub/js-sdkhub.js"},{"deps":{"./socket_connection":15,"./axios_connection":10},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{"regenerator-runtime/runtime":51,"regenerator-runtime":51,"axios-creator":52},"path":"preview-scripts/assets/script/axios_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{},"path":"preview-scripts/assets/script/fetch.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetohomepage.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{"socket.io-client":53},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{"../axios_connection":10},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetocotuong.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{"../socket_connection":15,"../axios_connection":10},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{"../axios_connection":10,"socket.io-client":53},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{"../socket_connection":15,"../axios_connection":10},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{"../socket_connection":15},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{"../../socket_connection":15},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{"../socket_connection":15,"../axios_connection":10},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{},"path":"preview-scripts/assets/script/Login.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{"../socket_connection":15,"../axios_connection":10},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetorooms.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{"../../../socket_connection":15},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/__node_modules/regenerator-runtime/runtime.js"},{"deps":{"./lib/axios":54},"path":"preview-scripts/__node_modules/axios-creator/index.js"},{"deps":{"./url.js":55,"./socket.js":57,"socket.io-parser":60,"debug":58,"./manager.js":56},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"./cancel/isCancel":59,"./helpers/spread":61,"./utils":63,"./helpers/bind":65,"./cancel/Cancel":66,"./helpers/isAxiosError":67,"./cancel/CancelToken":70,"./core/mergeConfig":71,"./core/Axios":62,"./defaults":64},"path":"preview-scripts/__node_modules/axios-creator/lib/axios.js"},{"deps":{"debug":58,"engine.io-client":75},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"./socket.js":57,"socket.io-parser":60,"debug":58,"@socket.io/component-emitter":73,"./on.js":68,"./contrib/backo2.js":69,"engine.io-client":75},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"socket.io-parser":60,"./on.js":68,"debug":58,"@socket.io/component-emitter":73},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":72,"./common":74},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js"},{"deps":{"@socket.io/component-emitter":73,"debug":58,"./binary.js":76,"./is-binary.js":79},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js"},{"deps":{"./../utils":63,"./mergeConfig":71,"./InterceptorManager":77,"../helpers/buildURL":81,"./dispatchRequest":80,"../helpers/validator":84},"path":"preview-scripts/__node_modules/axios-creator/lib/core/Axios.js"},{"deps":{"./helpers/bind":65},"path":"preview-scripts/__node_modules/axios-creator/lib/utils.js"},{"deps":{"./utils":63,"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":72,"./adapters/xhr":82,"./helpers/normalizeHeaderName":78,"./core/enhanceError":83,"./adapters/http":82},"path":"preview-scripts/__node_modules/axios-creator/lib/defaults.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{"./Cancel":66},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js"},{"deps":{"../utils":63},"path":"preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{"ms":90},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{"./contrib/parseuri.js":89,"./socket.js":85,"./util.js":88,"./transports/index.js":86,"./transport.js":87},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{"./is-binary.js":79},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{"./../utils":63},"path":"preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js"},{"deps":{"../utils":63},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"./../utils":63,"../cancel/isCancel":59,"../defaults":64,"./transformData":91},"path":"preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js"},{"deps":{"./../utils":63},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js"},{"deps":{"./../utils":63,"./../helpers/buildURL":81,"./../core/settle":92,"./../helpers/parseHeaders":94,"./../helpers/cookies":95,"./../helpers/isURLSameOrigin":97,"../core/createError":98,"../core/buildFullPath":93},"path":"preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js"},{"deps":{"./../../package.json":96},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js"},{"deps":{"./transports/index.js":86,"./util.js":88,"./contrib/parseuri.js":89,"debug":58,"@socket.io/component-emitter":73,"engine.io-parser":105,"./contrib/parseqs.js":99},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{"./websocket.js":102,"./polling.js":100},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{"@socket.io/component-emitter":73,"./util.js":88,"debug":58,"engine.io-parser":105},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{"./globalThis.js":101},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{"./../utils":63,"./../defaults":64},"path":"preview-scripts/__node_modules/axios-creator/lib/core/transformData.js"},{"deps":{"./createError":98},"path":"preview-scripts/__node_modules/axios-creator/lib/core/settle.js"},{"deps":{"../helpers/isAbsoluteURL":103,"../helpers/combineURLs":104},"path":"preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js"},{"deps":{"./../utils":63},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js"},{"deps":{"./../utils":63},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/package.js"},{"deps":{"./../utils":63},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js"},{"deps":{"./enhanceError":83},"path":"preview-scripts/__node_modules/axios-creator/lib/core/createError.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{"../transport.js":87,"debug":58,"../contrib/parseqs.js":99,"engine.io-parser":105,"@socket.io/component-emitter":73,"../util.js":88,"../globalThis.js":101,"../contrib/yeast.js":109,"./xmlhttprequest.js":107},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{"../transport.js":87,"../contrib/parseqs.js":99,"../contrib/yeast.js":109,"../util.js":88,"debug":58,"engine.io-parser":105,"./websocket-constructor.js":108,"buffer":106},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js"},{"deps":{"./encodePacket.js":113,"./decodePacket.js":112},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{"base64-js":110,"ieee754":111,"isarray":114},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{"../globalThis.js":101,"../contrib/has-cors.js":115},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{"../globalThis.js":101},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./commons.js":116,"./contrib/base64-arraybuffer.js":117},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{"./commons.js":116},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"}];
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
    