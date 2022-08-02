
(function () {
var scripts = [{"deps":{"./assets/script/board/boardinfo":1,"./assets/script/room/PrepareRoom/Sendchat":2,"./assets/script/Page/Login/LoginPage":3,"./assets/script/Touch":4,"./assets/script/gameplay/deadredchess":5,"./assets/script/changescene/movetoroom":6,"./assets/script/homepage/display":7,"./assets/script/temp/deleteuser":8,"./assets/script/Playnow":9,"./assets/script/Popup":10,"./assets/script/board/chess/blackchess/canonblack":11,"./assets/script/Blur":12,"./assets/script/board/touchmove":13,"./assets/script/board/Movecode":14,"./assets/script/board/update":15,"./assets/script/changescene/movetoboard":17,"./assets/script/changescene/backtoroomlist":18,"./assets/script/gameplay/movecodelist":19,"./assets/script/gameplay/list":20,"./assets/script/gameplay/readybutton":21,"./assets/script/gameplay/deadblackchess":22,"./assets/script/room/createroom":24,"./assets/script/room/showrooms":25,"./assets/script/room/PrepareRoom/Showchat":26,"./assets/script/room/RoomInfos":27,"./assets/script/room/PrepareRoom/PrepareRoom":28,"./assets/script/room/PrepareRoom/roominfo":29,"./assets/script/board/chess/redchess/rookred":30,"./assets/script/temp/deleteroom":31,"./assets/script/PlayerInfo":32,"./assets/script/board/chess/redchess/bishopred":33,"./assets/script/board/chess/blackchess/guardblack":34,"./assets/script/board/chess/blackchess/kingblack":35,"./assets/script/board/chess/blackchess/knightblack":36,"./assets/script/board/chess/blackchess/pawnblack":37,"./assets/script/board/chess/blackchess/rookblack":38,"./assets/script/board/chess/redchess/guardred":39,"./assets/script/board/chess/redchess/kingred":40,"./assets/script/board/chess/blackchess/bishopblack":41,"./assets/script/board/chess/redchess/canonred":42,"./assets/script/board/chess/redchess/knightred":43,"./assets/script/board/chess/redchess/redchess":44,"./assets/script/board/chess/redchess/pawnred":45,"./assets/script/socket_connection":16,"./assets/script/room/joinroom":23},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/board/boardinfo.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Sendchat.js"},{"deps":{},"path":"preview-scripts/assets/script/Page/Login/LoginPage.js"},{"deps":{},"path":"preview-scripts/assets/script/Touch.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadredchess.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/changescene/movetoroom.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/homepage/display.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteuser.js"},{"deps":{"./socket_connection":16},"path":"preview-scripts/assets/script/Playnow.js"},{"deps":{},"path":"preview-scripts/assets/script/Popup.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/canonblack.js"},{"deps":{},"path":"preview-scripts/assets/script/Blur.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/board/touchmove.js"},{"deps":{},"path":"preview-scripts/assets/script/board/Movecode.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/board/update.js"},{"deps":{"socket.io-client":46},"path":"preview-scripts/assets/script/socket_connection.js"},{"deps":{},"path":"preview-scripts/assets/script/changescene/movetoboard.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/changescene/backtoroomlist.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/gameplay/movecodelist.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/list.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/readybutton.js"},{"deps":{},"path":"preview-scripts/assets/script/gameplay/deadblackchess.js"},{"deps":{"socket.io-client":46},"path":"preview-scripts/assets/script/room/joinroom.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/room/createroom.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/room/showrooms.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/Showchat.js"},{"deps":{"../socket_connection":16},"path":"preview-scripts/assets/script/room/RoomInfos.js"},{"deps":{},"path":"preview-scripts/assets/script/room/PrepareRoom/PrepareRoom.js"},{"deps":{"../../socket_connection":16},"path":"preview-scripts/assets/script/room/PrepareRoom/roominfo.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/rookred.js"},{"deps":{},"path":"preview-scripts/assets/script/temp/deleteroom.js"},{"deps":{"./socket_connection":16},"path":"preview-scripts/assets/script/PlayerInfo.js"},{"deps":{"../../../socket_connection":16},"path":"preview-scripts/assets/script/board/chess/redchess/bishopred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/guardblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/kingblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/knightblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/pawnblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/rookblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/guardred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/kingred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/blackchess/bishopblack.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/canonred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/knightred.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/redchess.js"},{"deps":{},"path":"preview-scripts/assets/script/board/chess/redchess/pawnred.js"},{"deps":{"./socket.js":47,"./manager.js":48,"socket.io-parser":51,"debug":50,"./url.js":49},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/index.js"},{"deps":{"socket.io-parser":51,"debug":50,"@socket.io/component-emitter":55,"./on.js":52},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/socket.js"},{"deps":{"./socket.js":47,"socket.io-parser":51,"./on.js":52,"debug":50,"engine.io-client":59,"./contrib/backo2.js":54,"@socket.io/component-emitter":55},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/manager.js"},{"deps":{"debug":50,"engine.io-client":59},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/url.js"},{"deps":{"../../../../../CocosDashboard/resources/.editors/Creator/2.4.9/resources/app.asar/node_modules/process/browser.js":53,"./common":56},"path":"preview-scripts/__node_modules/debug/src/browser.js"},{"deps":{"@socket.io/component-emitter":55,"debug":50,"./is-binary.js":57,"./binary.js":58},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/on.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/build/cjs/contrib/backo2.js"},{"deps":{},"path":"preview-scripts/__node_modules/@socket.io/component-emitter/index.js"},{"deps":{"ms":61},"path":"preview-scripts/__node_modules/debug/src/common.js"},{"deps":{},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/is-binary.js"},{"deps":{"./is-binary.js":57},"path":"preview-scripts/__node_modules/socket.io-client/node_modules/socket.io-parser/build/cjs/binary.js"},{"deps":{"./contrib/parseuri.js":65,"./transport.js":62,"./util.js":63,"./transports/index.js":60,"./socket.js":64},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/index.js"},{"deps":{"./websocket.js":68,"./polling.js":69},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ms/index.js"},{"deps":{"@socket.io/component-emitter":55,"./util.js":63,"debug":50,"engine.io-parser":71},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transport.js"},{"deps":{"./globalThis.js":66},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/util.js"},{"deps":{"./transports/index.js":60,"./util.js":63,"./contrib/parseuri.js":65,"debug":50,"@socket.io/component-emitter":55,"./contrib/parseqs.js":67,"engine.io-parser":71},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/socket.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseuri.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/globalThis.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/parseqs.js"},{"deps":{"../transport.js":62,"../contrib/parseqs.js":67,"../util.js":63,"debug":50,"engine.io-parser":71,"../contrib/yeast.js":72,"./websocket-constructor.js":73,"buffer":70},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket.js"},{"deps":{"../transport.js":62,"debug":50,"../contrib/yeast.js":72,"../contrib/parseqs.js":67,"engine.io-parser":71,"@socket.io/component-emitter":55,"../util.js":63,"../globalThis.js":66,"./xmlhttprequest.js":74},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/polling.js"},{"deps":{"base64-js":75,"ieee754":76,"isarray":77},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{"./encodePacket.js":79,"./decodePacket.js":78},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/yeast.js"},{"deps":{"../globalThis.js":66},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/websocket-constructor.browser.js"},{"deps":{"../globalThis.js":66,"../contrib/has-cors.js":80},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/transports/xmlhttprequest.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{"./commons.js":81,"./contrib/base64-arraybuffer.js":82},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"},{"deps":{"./commons.js":81},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-client/build/cjs/contrib/has-cors.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/commons.js"},{"deps":{},"path":"preview-scripts/__node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"}];
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
    