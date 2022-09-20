
(function () {
var scripts = [{"deps":{"./assets/script/PlayerInfo":4,"./assets/script/Playnow":14,"./assets/script/Popup":31,"./assets/script/Touch":11,"./assets/script/axios_connection":21,"./assets/script/fetch":34,"./assets/script/socket_connection":18,"./assets/script/Blur":13,"./assets/script/board/touchmove":16,"./assets/script/board/update":1,"./assets/script/board/boardinfo":12,"./assets/script/changescene/movetoboard":5,"./assets/script/changescene/movetocotuong":19,"./assets/script/changescene/movetohomepage":15,"./assets/script/changescene/movetoroom":17,"./assets/script/changescene/movetorooms":22,"./assets/script/changescene/backtoroomlist":20,"./assets/script/gameplay/deadredchess":23,"./assets/script/gameplay/list":7,"./assets/script/gameplay/movecodelist":24,"./assets/script/gameplay/readybutton":27,"./assets/script/gameplay/deadblackchess":37,"./assets/script/homepage/display":8,"./assets/script/room/createroom":26,"./assets/script/room/joinroom":28,"./assets/script/room/showrooms":25,"./assets/script/room/PrepareRoom/Showchat":35,"./assets/script/room/PrepareRoom/ready":30,"./assets/script/room/PrepareRoom/roominfo":2,"./assets/script/room/PrepareRoom/Sendchat":33,"./assets/script/room/RoomInfos":29,"./assets/script/temp/deleteuser":10,"./assets/script/temp/deleteroom":36,"./assets/sdkhub/js-sdkhub":9,"./assets/script/Login":32,"./assets/script/Page/Login/LoginPage":3,"./assets/script/board/chess/blackchess/guardblack":41,"./assets/script/board/chess/blackchess/kingblack":39,"./assets/script/board/chess/blackchess/knightblack":45,"./assets/script/board/chess/blackchess/pawnblack":47,"./assets/script/board/chess/blackchess/rookblack":40,"./assets/script/board/chess/blackchess/bishopblack":44,"./assets/script/board/chess/redchess/canonred":51,"./assets/script/board/chess/redchess/guardred":49,"./assets/script/board/chess/redchess/kingred":38,"./assets/script/board/chess/redchess/knightred":46,"./assets/script/board/chess/redchess/pawnred":42,"./assets/script/board/chess/redchess/redchess":50,"./assets/script/board/chess/redchess/rookred":48,"./assets/script/board/chess/redchess/bishopred":43,"./assets/script/board/chess/blackchess/canonblack":6},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../axios_connection":21,"../socket_connection":18},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{"../../socket_connection":18},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{"./socket_connection":18},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{"../socket_connection":18,"../axios_connection":21},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{},"path":"preview-scripts/assets/sdkhub/js-sdkhub.js"},{"deps":{"../axios_connection":21},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{"./socket_connection":18,"./axios_connection":21},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetohomepage.js"},{"deps":{"../axios_connection":21,"../socket_connection":18},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{"../socket_connection":18},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{"socket.io-client":53},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetocotuong.js"},{"deps":{"../socket_connection":18,"../axios_connection":21},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{"axios-creator":52},"path":"preview-scripts/assets/script/axios_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetorooms.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{"../socket_connection":18},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{"../socket_connection":18,"../axios_connection":21},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{"../socket_connection":18,"../axios_connection":21},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{"../axios_connection":21},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{"../socket_connection":18},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{"../../axios_connection":21,"../../socket_connection":18},"path":"preview-scripts/assets/script/room/PrepareRoom/ready.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{},"path":"preview-scripts/assets/script/Login.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{},"path":"preview-scripts/assets/script/fetch.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{"../../../socket_connection":18},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{"./lib/axios":54},"path":"preview-scripts/__node_modules/axios-creator/index.js"},{"deps":{"./url.js":55,"./socket.js":56,"debug":58,"socket.io-parser":70,"./manager.js":57},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"./helpers/spread":59,"./cancel/isCancel":60,"./utils":62,"./helpers/isAxiosError":63,"./core/mergeConfig":64,"./helpers/bind":65,"./cancel/Cancel":66,"./cancel/CancelToken":68,"./core/Axios":67,"./defaults":61},"path":"preview-scripts/__node_modules/axios-creator/lib/axios.js"},{"deps":{"debug":58,"engine.io-client":81},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"socket.io-parser":70,"debug":58,"@socket.io/component-emitter":79,"./on.js":73},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{"./socket.js":56,"socket.io-parser":70,"./on.js":73,"debug":58,"./contrib/backo2.js":72,"@socket.io/component-emitter":79,"engine.io-client":81},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":69,"./common":71},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/spread.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/isCancel.js"},{"deps":{"./utils":62,"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":69,"./adapters/xhr":75,"./helpers/normalizeHeaderName":74,"./core/enhanceError":76,"./adapters/http":75},"path":"preview-scripts/__node_modules/axios-creator/lib/defaults.js"},{"deps":{"./helpers/bind":65},"path":"preview-scripts/__node_modules/axios-creator/lib/utils.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAxiosError.js"},{"deps":{"../utils":62},"path":"preview-scripts/__node_modules/axios-creator/lib/core/mergeConfig.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/bind.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/Cancel.js"},{"deps":{"./../utils":62,"./mergeConfig":64,"./InterceptorManager":77,"../helpers/buildURL":78,"./dispatchRequest":80,"../helpers/validator":82},"path":"preview-scripts/__node_modules/axios-creator/lib/core/Axios.js"},{"deps":{"./Cancel":66},"path":"preview-scripts/__node_modules/axios-creator/lib/cancel/CancelToken.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"@socket.io/component-emitter":79,"debug":58,"./binary.js":84,"./is-binary.js":85},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{"ms":83},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{"../utils":62},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/normalizeHeaderName.js"},{"deps":{"./../utils":62,"./../helpers/buildURL":78,"./../helpers/parseHeaders":87,"./../core/settle":88,"./../helpers/cookies":89,"./../helpers/isURLSameOrigin":90,"../core/createError":96,"../core/buildFullPath":86},"path":"preview-scripts/__node_modules/axios-creator/lib/adapters/xhr.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/core/enhanceError.js"},{"deps":{"./../utils":62},"path":"preview-scripts/__node_modules/axios-creator/lib/core/InterceptorManager.js"},{"deps":{"./../utils":62},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/buildURL.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{"./../utils":62,"../cancel/isCancel":60,"../defaults":61,"./transformData":92},"path":"preview-scripts/__node_modules/axios-creator/lib/core/dispatchRequest.js"},{"deps":{"./contrib/parseuri.js":94,"./transport.js":98,"./util.js":95,"./socket.js":91,"./transports/index.js":97},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{"./../../package.json":93},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/validator.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{"./is-binary.js":85},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"../helpers/isAbsoluteURL":99,"../helpers/combineURLs":100},"path":"preview-scripts/__node_modules/axios-creator/lib/core/buildFullPath.js"},{"deps":{"./../utils":62},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/parseHeaders.js"},{"deps":{"./createError":96},"path":"preview-scripts/__node_modules/axios-creator/lib/core/settle.js"},{"deps":{"./../utils":62},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/cookies.js"},{"deps":{"./../utils":62},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isURLSameOrigin.js"},{"deps":{"./transports/index.js":97,"./util.js":95,"./contrib/parseuri.js":94,"debug":58,"@socket.io/component-emitter":79,"./contrib/parseqs.js":102,"engine.io-parser":103},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{"./../utils":62,"./../defaults":61},"path":"preview-scripts/__node_modules/axios-creator/lib/core/transformData.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/package.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{"./globalThis.js":101},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{"./enhanceError":76},"path":"preview-scripts/__node_modules/axios-creator/lib/core/createError.js"},{"deps":{"./polling.js":104,"./websocket.js":105},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{"engine.io-parser":103,"@socket.io/component-emitter":79,"./util.js":95,"debug":58},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/isAbsoluteURL.js"},{"deps":{},"path":"preview-scripts/__node_modules/axios-creator/lib/helpers/combineURLs.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{"./encodePacket.js":106,"./decodePacket.js":107},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{"../transport.js":98,"debug":58,"../contrib/parseqs.js":102,"engine.io-parser":103,"@socket.io/component-emitter":79,"../util.js":95,"../globalThis.js":101,"../contrib/yeast.js":108,"./xmlhttprequest.js":110},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{"../transport.js":98,"../contrib/parseqs.js":102,"../contrib/yeast.js":108,"../util.js":95,"debug":58,"engine.io-parser":103,"./websocket-constructor.js":113,"buffer":111},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{"./commons.js":109},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{"./commons.js":109,"./contrib/base64-arraybuffer.js":112},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{"../globalThis.js":101,"../contrib/has-cors.js":116},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{"base64-js":114,"ieee754":115,"isarray":117},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"},{"deps":{"../globalThis.js":101},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"}];
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
    