window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Blur: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61abf16dOZKurWh+RfPFijO", "Blur");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      blur: function blur() {
        this.node.opacity = 160;
        this.node.pauseSystemEvents(true);
      },
      unblur: function unblur() {
        this.node.opacity = 255;
        this.node.resumeSystemEvents(true);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  1: [ function(require, module, exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len = b64.length;
      if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var validLen = b64.indexOf("=");
      -1 === validLen && (validLen = len);
      var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
      return [ validLen, placeHoldersLen ];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i;
      for (i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      if (2 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = 255 & tmp;
      }
      if (1 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      if (1 === extraBytes) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (2 === extraBytes) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }, {} ],
  2: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      var base64 = require("base64-js");
      var ieee754 = require("ieee754");
      var isArray = require("isarray");
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
      exports.kMaxLength = kMaxLength();
      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42;
            }
          };
          return 42 === arr.foo() && "function" === typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
        } catch (e) {
          return false;
        }
      }
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function createBuffer(that, length) {
        if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(length);
          that.__proto__ = Buffer.prototype;
        } else {
          null === that && (that = new Buffer(length));
          that.length = length;
        }
        return that;
      }
      function Buffer(arg, encodingOrOffset, length) {
        if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
        if ("number" === typeof arg) {
          if ("string" === typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
          return allocUnsafe(this, arg);
        }
        return from(this, arg, encodingOrOffset, length);
      }
      Buffer.poolSize = 8192;
      Buffer._augment = function(arr) {
        arr.__proto__ = Buffer.prototype;
        return arr;
      };
      function from(that, value, encodingOrOffset, length) {
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
        if ("undefined" !== typeof ArrayBuffer && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, encodingOrOffset, length);
        if ("string" === typeof value) return fromString(that, value, encodingOrOffset);
        return fromObject(that, value);
      }
      Buffer.from = function(value, encodingOrOffset, length) {
        return from(null, value, encodingOrOffset, length);
      };
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
        "undefined" !== typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
      function assertSize(size) {
        if ("number" !== typeof size) throw new TypeError('"size" argument must be a number');
        if (size < 0) throw new RangeError('"size" argument must not be negative');
      }
      function alloc(that, size, fill, encoding) {
        assertSize(size);
        if (size <= 0) return createBuffer(that, size);
        if (void 0 !== fill) return "string" === typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
        return createBuffer(that, size);
      }
      Buffer.alloc = function(size, fill, encoding) {
        return alloc(null, size, fill, encoding);
      };
      function allocUnsafe(that, size) {
        assertSize(size);
        that = createBuffer(that, size < 0 ? 0 : 0 | checked(size));
        if (!Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
        return that;
      }
      Buffer.allocUnsafe = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer.allocUnsafeSlow = function(size) {
        return allocUnsafe(null, size);
      };
      function fromString(that, string, encoding) {
        "string" === typeof encoding && "" !== encoding || (encoding = "utf8");
        if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
        var length = 0 | byteLength(string, encoding);
        that = createBuffer(that, length);
        var actual = that.write(string, encoding);
        actual !== length && (that = that.slice(0, actual));
        return that;
      }
      function fromArrayLike(that, array) {
        var length = array.length < 0 ? 0 : 0 | checked(array.length);
        that = createBuffer(that, length);
        for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
        return that;
      }
      function fromArrayBuffer(that, array, byteOffset, length) {
        array.byteLength;
        if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
        if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
        array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = array;
          that.__proto__ = Buffer.prototype;
        } else that = fromArrayLike(that, array);
        return that;
      }
      function fromObject(that, obj) {
        if (Buffer.isBuffer(obj)) {
          var len = 0 | checked(obj.length);
          that = createBuffer(that, len);
          if (0 === that.length) return that;
          obj.copy(that, 0, 0, len);
          return that;
        }
        if (obj) {
          if ("undefined" !== typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) {
            if ("number" !== typeof obj.length || isnan(obj.length)) return createBuffer(that, 0);
            return fromArrayLike(that, obj);
          }
          if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }
      function checked(length) {
        if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
        return 0 | length;
      }
      function SlowBuffer(length) {
        +length != length && (length = 0);
        return Buffer.alloc(+length);
      }
      Buffer.isBuffer = function isBuffer(b) {
        return !!(null != b && b._isBuffer);
      };
      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
        if (a === b) return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
         case "hex":
         case "utf8":
         case "utf-8":
         case "ascii":
         case "latin1":
         case "binary":
         case "base64":
         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return true;

         default:
          return false;
        }
      };
      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === list.length) return Buffer.alloc(0);
        var i;
        if (void 0 === length) {
          length = 0;
          for (i = 0; i < list.length; ++i) length += list[i].length;
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) return string.length;
        if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
        "string" !== typeof string && (string = "" + string);
        var len = string.length;
        if (0 === len) return 0;
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "ascii":
         case "latin1":
         case "binary":
          return len;

         case "utf8":
         case "utf-8":
         case void 0:
          return utf8ToBytes(string).length;

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return 2 * len;

         case "hex":
          return len >>> 1;

         case "base64":
          return base64ToBytes(string).length;

         default:
          if (loweredCase) return utf8ToBytes(string).length;
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        var loweredCase = false;
        (void 0 === start || start < 0) && (start = 0);
        if (start > this.length) return "";
        (void 0 === end || end > this.length) && (end = this.length);
        if (end <= 0) return "";
        end >>>= 0;
        start >>>= 0;
        if (end <= start) return "";
        encoding || (encoding = "utf8");
        while (true) switch (encoding) {
         case "hex":
          return hexSlice(this, start, end);

         case "utf8":
         case "utf-8":
          return utf8Slice(this, start, end);

         case "ascii":
          return asciiSlice(this, start, end);

         case "latin1":
         case "binary":
          return latin1Slice(this, start, end);

         case "base64":
          return base64Slice(this, start, end);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return utf16leSlice(this, start, end);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
        return this;
      };
      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer.prototype.toString = function toString() {
        var length = 0 | this.length;
        if (0 === length) return "";
        if (0 === arguments.length) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return 0 === Buffer.compare(this, b);
      };
      Buffer.prototype.inspect = function inspect() {
        var str = "";
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
          this.length > max && (str += " ... ");
        }
        return "<Buffer " + str + ">";
      };
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
        void 0 === start && (start = 0);
        void 0 === end && (end = target ? target.length : 0);
        void 0 === thisStart && (thisStart = 0);
        void 0 === thisEnd && (thisEnd = this.length);
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
        if (thisStart >= thisEnd && start >= end) return 0;
        if (thisStart >= thisEnd) return -1;
        if (start >= end) return 1;
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (0 === buffer.length) return -1;
        if ("string" === typeof byteOffset) {
          encoding = byteOffset;
          byteOffset = 0;
        } else byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648);
        byteOffset = +byteOffset;
        isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1);
        byteOffset < 0 && (byteOffset = buffer.length + byteOffset);
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (!dir) return -1;
          byteOffset = 0;
        }
        "string" === typeof val && (val = Buffer.from(val, encoding));
        if (Buffer.isBuffer(val)) {
          if (0 === val.length) return -1;
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        }
        if ("number" === typeof val) {
          val &= 255;
          if (Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf) return dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (void 0 !== encoding) {
          encoding = String(encoding).toLowerCase();
          if ("ucs2" === encoding || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding) {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
          return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
            -1 === foundIndex && (foundIndex = i);
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            -1 !== foundIndex && (i -= i - foundIndex);
            foundIndex = -1;
          }
        } else {
          byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength);
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return -1 !== this.indexOf(val, byteOffset, encoding);
      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (length) {
          length = Number(length);
          length > remaining && (length = remaining);
        } else length = remaining;
        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
        length > strLen / 2 && (length = strLen / 2);
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(2 * i, 2), 16);
          if (isNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
        if (void 0 === offset) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (void 0 === length && "string" === typeof offset) {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else {
          if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          offset |= 0;
          if (isFinite(length)) {
            length |= 0;
            void 0 === encoding && (encoding = "utf8");
          } else {
            encoding = length;
            length = void 0;
          }
        }
        var remaining = this.length - offset;
        (void 0 === length || length > remaining) && (length = remaining);
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        encoding || (encoding = "utf8");
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "hex":
          return hexWrite(this, string, offset, length);

         case "utf8":
         case "utf-8":
          return utf8Write(this, string, offset, length);

         case "ascii":
          return asciiWrite(this, string, offset, length);

         case "latin1":
         case "binary":
          return latin1Write(this, string, offset, length);

         case "base64":
          return base64Write(this, string, offset, length);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return ucs2Write(this, string, offset, length);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      };
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
             case 1:
              firstByte < 128 && (codePoint = firstByte);
              break;

             case 2:
              secondByte = buf[i + 1];
              if (128 === (192 & secondByte)) {
                tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte;
                tempCodePoint > 127 && (codePoint = tempCodePoint);
              }
              break;

             case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte)) {
                tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte;
                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
              }
              break;

             case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte) && 128 === (192 & fourthByte)) {
                tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte;
                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
              }
            }
          }
          if (null === codePoint) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | 1023 & codePoint;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
        var res = "";
        var i = 0;
        while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        return res;
      }
      function asciiSlice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
        return ret;
      }
      function latin1Slice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
        return ret;
      }
      function hexSlice(buf, start, end) {
        var len = buf.length;
        (!start || start < 0) && (start = 0);
        (!end || end < 0 || end > len) && (end = len);
        var out = "";
        for (var i = start; i < end; ++i) out += toHex(buf[i]);
        return out;
      }
      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = "";
        for (var i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
        return res;
      }
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = void 0 === end ? len : ~~end;
        if (start < 0) {
          start += len;
          start < 0 && (start = 0);
        } else start > len && (start = len);
        if (end < 0) {
          end += len;
          end < 0 && (end = 0);
        } else end > len && (end = len);
        end < start && (end = start);
        var newBuf;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start, end);
          newBuf.__proto__ = Buffer.prototype;
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, void 0);
          for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
        }
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        return val;
      };
      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
        return val;
      };
      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
      };
      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        if (!(128 & this[offset])) return this[offset];
        return -1 * (255 - this[offset] + 1);
      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 255, 0);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        this[offset] = 255 & value;
        return offset + 1;
      };
      function objectWriteUInt16(buf, value, offset, littleEndian) {
        value < 0 && (value = 65535 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
      }
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      function objectWriteUInt32(buf, value, offset, littleEndian) {
        value < 0 && (value = 4294967295 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
      }
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = 255 & value;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 127, -128);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        value < 0 && (value = 255 + value + 1);
        this[offset] = 255 & value;
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        value < 0 && (value = 4294967295 + value + 1);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        start || (start = 0);
        end || 0 === end || (end = this.length);
        targetStart >= target.length && (targetStart = target.length);
        targetStart || (targetStart = 0);
        end > 0 && end < start && (end = start);
        if (end === start) return 0;
        if (0 === target.length || 0 === this.length) return 0;
        if (targetStart < 0) throw new RangeError("targetStart out of bounds");
        if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        end > this.length && (end = this.length);
        target.length - targetStart < end - start && (end = target.length - targetStart + start);
        var len = end - start;
        var i;
        if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        return len;
      };
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        if ("string" === typeof val) {
          if ("string" === typeof start) {
            encoding = start;
            start = 0;
            end = this.length;
          } else if ("string" === typeof end) {
            encoding = end;
            end = this.length;
          }
          if (1 === val.length) {
            var code = val.charCodeAt(0);
            code < 256 && (val = code);
          }
          if (void 0 !== encoding && "string" !== typeof encoding) throw new TypeError("encoding must be a string");
          if ("string" === typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        } else "number" === typeof val && (val &= 255);
        if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
        if (end <= start) return this;
        start >>>= 0;
        end = void 0 === end ? this.length : end >>> 0;
        val || (val = 0);
        var i;
        if ("number" === typeof val) for (i = start; i < end; ++i) this[i] = val; else {
          var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
        }
        return this;
      };
      var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = stringtrim(str).replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) str += "=";
        return str;
      }
      function stringtrim(str) {
        if (str.trim) return str.trim();
        return str.replace(/^\s+|\s+$/g, "");
      }
      function toHex(n) {
        if (n < 16) return "0" + n.toString(16);
        return n.toString(16);
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              if (i + 1 === length) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
          } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          } else {
            if (!(codePoint < 1114112)) throw new Error("Invalid code point");
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isnan(val) {
        return val !== val;
      }
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "base64-js": 1,
    ieee754: 4,
    isarray: 3
  } ],
  3: [ function(require, module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return "[object Array]" == toString.call(arr);
    };
  }, {} ],
  4: [ function(require, module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (;nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (;nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
      if (0 === e) e = 1 - eBias; else {
        if (e === eMax) return m ? NaN : Infinity * (s ? -1 : 1);
        m += Math.pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || Infinity === value) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e += eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (;mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
      e = e << mLen | m;
      eLen += mLen;
      for (;eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
      buffer[offset + i - d] |= 128 * s;
    };
  }, {} ],
  5: [ function(require, module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        cachedSetTimeout = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) return;
      draining = false;
      currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
      queue.length && drainQueue();
    }
    function drainQueue() {
      if (draining) return;
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args));
      1 !== queue.length || draining || runTimeout(drainQueue);
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function(name) {
      return [];
    };
    process.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
      return "/";
    };
    process.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
      return 0;
    };
  }, {} ],
  6: [ function(require, module, exports) {
    exports.Emitter = Emitter;
    function Emitter(obj) {
      if (obj) return mixin(obj);
    }
    function mixin(obj) {
      for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
      return obj;
    }
    Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };
    Emitter.prototype.once = function(event, fn) {
      function on() {
        this.off(event, on);
        fn.apply(this, arguments);
      }
      on.fn = fn;
      this.on(event, on);
      return this;
    };
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }
      var callbacks = this._callbacks["$" + event];
      if (!callbacks) return this;
      if (1 == arguments.length) {
        delete this._callbacks["$" + event];
        return this;
      }
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      0 === callbacks.length && delete this._callbacks["$" + event];
      return this;
    };
    Emitter.prototype.emit = function(event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
      for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) callbacks[i].apply(this, args);
      }
      return this;
    };
    Emitter.prototype.emitReserved = Emitter.prototype.emit;
    Emitter.prototype.listeners = function(event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };
    Emitter.prototype.hasListeners = function(event) {
      return !!this.listeners(event).length;
    };
  }, {} ],
  7: [ function(require, module, exports) {
    module.exports = require("./lib/axios");
  }, {
    "./lib/axios": 9
  } ],
  8: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var settle = require("./../core/settle");
    var cookies = require("./../helpers/cookies");
    var buildURL = require("./../helpers/buildURL");
    var buildFullPath = require("../core/buildFullPath");
    var parseHeaders = require("./../helpers/parseHeaders");
    var isURLSameOrigin = require("./../helpers/isURLSameOrigin");
    var createError = require("../core/createError");
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        utils.isFormData(requestData) && delete requestHeaders["Content-Type"];
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) return;
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = responseType && "text" !== responseType && "json" !== responseType ? request.response : request.responseText;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };
          settle(resolve, reject, response);
          request = null;
        }
        "onloadend" in request ? request.onloadend = onloadend : request.onreadystatechange = function handleLoad() {
          if (!request || 4 !== request.readyState) return;
          if (0 === request.status && !(request.responseURL && 0 === request.responseURL.indexOf("file:"))) return;
          setTimeout(onloadend);
        };
        request.onabort = function handleAbort() {
          if (!request) return;
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
          config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage);
          reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          xsrfValue && (requestHeaders[config.xsrfHeaderName] = xsrfValue);
        }
        "setRequestHeader" in request && utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          "undefined" === typeof requestData && "content-type" === key.toLowerCase() ? delete requestHeaders[key] : request.setRequestHeader(key, val);
        });
        utils.isUndefined(config.withCredentials) || (request.withCredentials = !!config.withCredentials);
        responseType && "json" !== responseType && (request.responseType = config.responseType);
        "function" === typeof config.onDownloadProgress && request.addEventListener("progress", config.onDownloadProgress);
        "function" === typeof config.onUploadProgress && request.upload && request.upload.addEventListener("progress", config.onUploadProgress);
        config.cancelToken && config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) return;
          request.abort();
          reject(cancel);
          request = null;
        });
        requestData || (requestData = null);
        request.send(requestData);
      });
    };
  }, {
    "../core/buildFullPath": 15,
    "../core/createError": 16,
    "./../core/settle": 20,
    "./../helpers/buildURL": 24,
    "./../helpers/cookies": 26,
    "./../helpers/isURLSameOrigin": 29,
    "./../helpers/parseHeaders": 31,
    "./../utils": 34
  } ],
  9: [ function(require, module, exports) {
    "use strict";
    var utils = require("./utils");
    var bind = require("./helpers/bind");
    var Axios = require("./core/Axios");
    var mergeConfig = require("./core/mergeConfig");
    var defaults = require("./defaults");
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios = createInstance(defaults);
    axios.Axios = Axios;
    axios.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios.defaults, instanceConfig));
    };
    axios.Cancel = require("./cancel/Cancel");
    axios.CancelToken = require("./cancel/CancelToken");
    axios.isCancel = require("./cancel/isCancel");
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = require("./helpers/spread");
    axios.isAxiosError = require("./helpers/isAxiosError");
    module.exports = axios;
    module.exports.default = axios;
  }, {
    "./cancel/Cancel": 10,
    "./cancel/CancelToken": 11,
    "./cancel/isCancel": 12,
    "./core/Axios": 13,
    "./core/mergeConfig": 19,
    "./defaults": 22,
    "./helpers/bind": 23,
    "./helpers/isAxiosError": 28,
    "./helpers/spread": 32,
    "./utils": 34
  } ],
  10: [ function(require, module, exports) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }, {} ],
  11: [ function(require, module, exports) {
    "use strict";
    var Cancel = require("./Cancel");
    function CancelToken(executor) {
      if ("function" !== typeof executor) throw new TypeError("executor must be a function.");
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) throw this.reason;
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };
    module.exports = CancelToken;
  }, {
    "./Cancel": 10
  } ],
  12: [ function(require, module, exports) {
    "use strict";
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }, {} ],
  13: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var buildURL = require("../helpers/buildURL");
    var InterceptorManager = require("./InterceptorManager");
    var dispatchRequest = require("./dispatchRequest");
    var mergeConfig = require("./mergeConfig");
    var validator = require("../helpers/validator");
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if ("string" === typeof config) {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else config = config || {};
      config = mergeConfig(this.defaults, config);
      config.method ? config.method = config.method.toLowerCase() : this.defaults.method ? config.method = this.defaults.method.toLowerCase() : config.method = "get";
      var transitional = config.transitional;
      void 0 !== transitional && validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
        forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
        clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
      }, false);
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if ("function" === typeof interceptor.runWhen && false === interceptor.runWhen(config)) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [ dispatchRequest, void 0 ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) promise = promise.then(chain.shift(), chain.shift());
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach([ "delete", "get", "head", "options" ], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          url: url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });
    module.exports = Axios;
  }, {
    "../helpers/buildURL": 24,
    "../helpers/validator": 33,
    "./../utils": 34,
    "./InterceptorManager": 14,
    "./dispatchRequest": 17,
    "./mergeConfig": 19
  } ],
  14: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: !!options && options.synchronous,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      this.handlers[id] && (this.handlers[id] = null);
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        null !== h && fn(h);
      });
    };
    module.exports = InterceptorManager;
  }, {
    "./../utils": 34
  } ],
  15: [ function(require, module, exports) {
    "use strict";
    var isAbsoluteURL = require("../helpers/isAbsoluteURL");
    var combineURLs = require("../helpers/combineURLs");
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
      return requestedURL;
    };
  }, {
    "../helpers/combineURLs": 25,
    "../helpers/isAbsoluteURL": 27
  } ],
  16: [ function(require, module, exports) {
    "use strict";
    var enhanceError = require("./enhanceError");
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }, {
    "./enhanceError": 18
  } ],
  17: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var transformData = require("./transformData");
    var isCancel = require("../cancel/isCancel");
    var defaults = require("../defaults");
    function throwIfCancellationRequested(config) {
      config.cancelToken && config.cancelToken.throwIfRequested();
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          reason && reason.response && (reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse));
        }
        return Promise.reject(reason);
      });
    };
  }, {
    "../cancel/isCancel": 12,
    "../defaults": 22,
    "./../utils": 34,
    "./transformData": 21
  } ],
  18: [ function(require, module, exports) {
    "use strict";
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      code && (error.code = code);
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error;
    };
  }, {} ],
  19: [ function(require, module, exports) {
    "use strict";
    var utils = require("../utils");
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      var valueFromConfig2Keys = [ "url", "method", "data" ];
      var mergeDeepPropertiesKeys = [ "headers", "auth", "proxy", "params" ];
      var defaultToConfig2Keys = [ "baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding" ];
      var directMergeKeys = [ "validateStatus" ];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        if (utils.isPlainObject(source)) return utils.merge({}, source);
        if (utils.isArray(source)) return source.slice();
        return source;
      }
      function mergeDeepProperties(prop) {
        utils.isUndefined(config2[prop]) ? utils.isUndefined(config1[prop]) || (config[prop] = getMergedValue(void 0, config1[prop])) : config[prop] = getMergedValue(config1[prop], config2[prop]);
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        utils.isUndefined(config2[prop]) || (config[prop] = getMergedValue(void 0, config2[prop]));
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        utils.isUndefined(config2[prop]) ? utils.isUndefined(config1[prop]) || (config[prop] = getMergedValue(void 0, config1[prop])) : config[prop] = getMergedValue(void 0, config2[prop]);
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        prop in config2 ? config[prop] = getMergedValue(config1[prop], config2[prop]) : prop in config1 && (config[prop] = getMergedValue(void 0, config1[prop]));
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return -1 === axiosKeys.indexOf(key);
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config;
    };
  }, {
    "../utils": 34
  } ],
  20: [ function(require, module, exports) {
    "use strict";
    var createError = require("./createError");
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      response.status && validateStatus && !validateStatus(response.status) ? reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response)) : resolve(response);
    };
  }, {
    "./createError": 16
  } ],
  21: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var defaults = require("./../defaults");
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }, {
    "./../defaults": 22,
    "./../utils": 34
  } ],
  22: [ function(require, module, exports) {
    (function(process) {
      "use strict";
      var utils = require("./utils");
      var normalizeHeaderName = require("./helpers/normalizeHeaderName");
      var enhanceError = require("./core/enhanceError");
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        !utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"]) && (headers["Content-Type"] = value);
      }
      function getDefaultAdapter() {
        var adapter;
        "undefined" !== typeof XMLHttpRequest ? adapter = require("./adapters/xhr") : "undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process) && (adapter = require("./adapters/http"));
        return adapter;
      }
      var defaults = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: getDefaultAdapter(),
        transformRequest: [ function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
          if (utils.isArrayBufferView(data)) return data.buffer;
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data) || headers && "application/json" === headers["Content-Type"]) {
            setContentTypeIfUnset(headers, "application/json");
            return JSON.stringify(data);
          }
          return data;
        } ],
        transformResponse: [ function transformResponse(data) {
          var transitional = this.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && "json" === this.responseType;
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if ("SyntaxError" === e.name) throw enhanceError(e, this, "E_JSON_PARSE");
              throw e;
            }
          }
          return data;
        } ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        }
      };
      defaults.headers = {
        common: {
          Accept: "application/json, text/plain, */*"
        }
      };
      utils.forEach([ "delete", "get", "head" ], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }).call(this, require("_process"));
  }, {
    "./adapters/http": 8,
    "./adapters/xhr": 8,
    "./core/enhanceError": 18,
    "./helpers/normalizeHeaderName": 30,
    "./utils": 34,
    _process: 5
  } ],
  23: [ function(require, module, exports) {
    "use strict";
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) args[i] = arguments[i];
        return fn.apply(thisArg, args);
      };
    };
  }, {} ],
  24: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) return url;
      var serializedParams;
      if (paramsSerializer) serializedParams = paramsSerializer(params); else if (utils.isURLSearchParams(params)) serializedParams = params.toString(); else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (null === val || "undefined" === typeof val) return;
          utils.isArray(val) ? key += "[]" : val = [ val ];
          utils.forEach(val, function parseValue(v) {
            utils.isDate(v) ? v = v.toISOString() : utils.isObject(v) && (v = JSON.stringify(v));
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        -1 !== hashmarkIndex && (url = url.slice(0, hashmarkIndex));
        url += (-1 === url.indexOf("?") ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }, {
    "./../utils": 34
  } ],
  25: [ function(require, module, exports) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }, {} ],
  26: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          utils.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
          utils.isString(path) && cookie.push("path=" + path);
          utils.isString(domain) && cookie.push("domain=" + domain);
          true === secure && cookie.push("secure");
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          if (!document.cookie) return null;
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() {
          return null;
        },
        remove: function remove() {}
      };
    }();
  }, {
    "./../utils": 34
  } ],
  27: [ function(require, module, exports) {
    "use strict";
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }, {} ],
  28: [ function(require, module, exports) {
    "use strict";
    module.exports = function isAxiosError(payload) {
      return "object" === typeof payload && true === payload.isAxiosError;
    };
  }, {} ],
  29: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      if (!urlParsingNode.pathname) return function isURLSameOrigin() {
        return true;
      };
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }, {
    "./../utils": 34
  } ],
  30: [ function(require, module, exports) {
    "use strict";
    var utils = require("../utils");
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }, {
    "../utils": 34
  } ],
  31: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var ignoreDuplicateOf = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) return parsed;
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
          parsed[key] = "set-cookie" === key ? (parsed[key] ? parsed[key] : []).concat([ val ]) : parsed[key] ? parsed[key] + ", " + val : val;
        }
      });
      return parsed;
    };
  }, {
    "./../utils": 34
  } ],
  32: [ function(require, module, exports) {
    "use strict";
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }, {} ],
  33: [ function(require, module, exports) {
    "use strict";
    var pkg = require("./../../package.json");
    var validators = {};
    [ "object", "boolean", "number", "function", "string", "symbol" ].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    var currentVerArr = pkg.version.split(".");
    function isOlderVersion(version, thanVersion) {
      var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
      var destVer = version.split(".");
      for (var i = 0; i < 3; i++) {
        if (pkgVersionArr[i] > destVer[i]) return true;
        if (pkgVersionArr[i] < destVer[i]) return false;
      }
      return false;
    }
    validators.transitional = function transitional(validator, version, message) {
      var isDeprecated = version && isOlderVersion(version);
      function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (false === validator) throw new Error(formatMessage(opt, " has been removed in " + version));
        if (isDeprecated && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return !validator || validator(value, opt, opts);
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if ("object" !== typeof options) throw new TypeError("options must be an object");
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = void 0 === value || validator(value, opt, options);
          if (true !== result) throw new TypeError("option " + opt + " must be " + result);
          continue;
        }
        if (true !== allowUnknown) throw Error("Unknown option " + opt);
      }
    }
    module.exports = {
      isOlderVersion: isOlderVersion,
      assertOptions: assertOptions,
      validators: validators
    };
  }, {
    "./../../package.json": 35
  } ],
  34: [ function(require, module, exports) {
    "use strict";
    var bind = require("./helpers/bind");
    var toString = Object.prototype.toString;
    function isArray(val) {
      return "[object Array]" === toString.call(val);
    }
    function isUndefined(val) {
      return "undefined" === typeof val;
    }
    function isBuffer(val) {
      return null !== val && !isUndefined(val) && null !== val.constructor && !isUndefined(val.constructor) && "function" === typeof val.constructor.isBuffer && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return "[object ArrayBuffer]" === toString.call(val);
    }
    function isFormData(val) {
      return "undefined" !== typeof FormData && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      result = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(val) : val && val.buffer && val.buffer instanceof ArrayBuffer;
      return result;
    }
    function isString(val) {
      return "string" === typeof val;
    }
    function isNumber(val) {
      return "number" === typeof val;
    }
    function isObject(val) {
      return null !== val && "object" === typeof val;
    }
    function isPlainObject(val) {
      if ("[object Object]" !== toString.call(val)) return false;
      var prototype = Object.getPrototypeOf(val);
      return null === prototype || prototype === Object.prototype;
    }
    function isDate(val) {
      return "[object Date]" === toString.call(val);
    }
    function isFile(val) {
      return "[object File]" === toString.call(val);
    }
    function isBlob(val) {
      return "[object Blob]" === toString.call(val);
    }
    function isFunction(val) {
      return "[object Function]" === toString.call(val);
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return "undefined" !== typeof URLSearchParams && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function isStandardBrowserEnv() {
      if ("undefined" !== typeof navigator && ("ReactNative" === navigator.product || "NativeScript" === navigator.product || "NS" === navigator.product)) return false;
      return "undefined" !== typeof window && "undefined" !== typeof document;
    }
    function forEach(obj, fn) {
      if (null === obj || "undefined" === typeof obj) return;
      "object" !== typeof obj && (obj = [ obj ]);
      if (isArray(obj)) for (var i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj); else for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && fn.call(null, obj[key], key, obj);
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        isPlainObject(result[key]) && isPlainObject(val) ? result[key] = merge(result[key], val) : isPlainObject(val) ? result[key] = merge({}, val) : isArray(val) ? result[key] = val.slice() : result[key] = val;
      }
      for (var i = 0, l = arguments.length; i < l; i++) forEach(arguments[i], assignValue);
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        a[key] = thisArg && "function" === typeof val ? bind(val, thisArg) : val;
      });
      return a;
    }
    function stripBOM(content) {
      65279 === content.charCodeAt(0) && (content = content.slice(1));
      return content;
    }
    module.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isPlainObject: isPlainObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim,
      stripBOM: stripBOM
    };
  }, {
    "./helpers/bind": 23
  } ],
  35: [ function(require, module, exports) {
    module.exports = {
      name: "axios-creator",
      version: "1.0.0",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
      },
      repository: {
        type: "git",
        url: "https://github.com/ljhsai/axios-creator.git"
      },
      keywords: [ "xhr", "http", "ajax", "promise", "node", "cocos-creator" ],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: {
        url: "https://github.com/ljhsai/axios-creator/issues"
      },
      homepage: "https://axios-http.com",
      devDependencies: {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
      },
      browser: {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
      },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: {
        "follow-redirects": "^1.14.0"
      },
      bundlesize: [ {
        path: "./dist/axios.min.js",
        threshold: "5kB"
      } ]
    };
  }, {} ],
  36: [ function(require, module, exports) {
    (function(process) {
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
      function useColors() {
        if ("undefined" !== typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
        if ("undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
        return "undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) return;
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, match => {
          if ("%%" === match) return;
          index++;
          "%c" === match && (lastC = index);
        });
        args.splice(lastC, 0, c);
      }
      exports.log = console.debug || console.log || (() => {});
      function save(namespaces) {
        try {
          namespaces ? exports.storage.setItem("debug", namespaces) : exports.storage.removeItem("debug");
        } catch (error) {}
      }
      function load() {
        let r;
        try {
          r = exports.storage.getItem("debug");
        } catch (error) {}
        !r && "undefined" !== typeof process && "env" in process && (r = process.env.DEBUG);
        return r;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (error) {}
      }
      module.exports = require("./common")(exports);
      const {formatters: formatters} = module.exports;
      formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return "[UnexpectedJSONParseError]: " + error.message;
        }
      };
    }).call(this, require("_process"));
  }, {
    "./common": 37,
    _process: 5
  } ],
  37: [ function(require, module, exports) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require("ms");
      createDebug.destroy = destroy;
      Object.keys(env).forEach(key => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) return;
          const self = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          "string" !== typeof args[0] && args.unshift("%O");
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if ("%%" === match) return "%";
            index++;
            const formatter = createDebug.formatters[format];
            if ("function" === typeof formatter) {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (null !== enableOverride) return enableOverride;
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: v => {
            enableOverride = v;
          }
        });
        "function" === typeof createDebug.init && createDebug.init(debug);
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + ("undefined" === typeof delimiter ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = ("string" === typeof namespaces ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) continue;
          namespaces = split[i].replace(/\*/g, ".*?");
          "-" === namespaces[0] ? createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$")) : createDebug.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
      function disable() {
        const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => "-" + namespace) ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if ("*" === name[name.length - 1]) return true;
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) if (createDebug.skips[i].test(name)) return false;
        for (i = 0, len = createDebug.names.length; i < len; i++) if (createDebug.names[i].test(name)) return true;
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }, {
    ms: 57
  } ],
  38: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasCORS = void 0;
    let value = false;
    try {
      value = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (err) {}
    exports.hasCORS = value;
  }, {} ],
  39: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.decode = exports.encode = void 0;
    function encode(obj) {
      let str = "";
      for (let i in obj) if (obj.hasOwnProperty(i)) {
        str.length && (str += "&");
        str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
      }
      return str;
    }
    exports.encode = encode;
    function decode(qs) {
      let qry = {};
      let pairs = qs.split("&");
      for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
      return qry;
    }
    exports.decode = decode;
  }, {} ],
  40: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parse = void 0;
    const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    const parts = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
    function parse(str) {
      const src = str, b = str.indexOf("["), e = str.indexOf("]");
      -1 != b && -1 != e && (str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length));
      let m = re.exec(str || ""), uri = {}, i = 14;
      while (i--) uri[parts[i]] = m[i] || "";
      if (-1 != b && -1 != e) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
      }
      uri.pathNames = pathNames(uri, uri["path"]);
      uri.queryKey = queryKey(uri, uri["query"]);
      return uri;
    }
    exports.parse = parse;
    function pathNames(obj, path) {
      const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
      "/" != path.substr(0, 1) && 0 !== path.length || names.splice(0, 1);
      "/" == path.substr(path.length - 1, 1) && names.splice(names.length - 1, 1);
      return names;
    }
    function queryKey(uri, query) {
      const data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        $1 && (data[$1] = $2);
      });
      return data;
    }
  }, {} ],
  41: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.yeast = exports.decode = exports.encode = void 0;
    const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
    let seed = 0, i = 0, prev;
    function encode(num) {
      let encoded = "";
      do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
      } while (num > 0);
      return encoded;
    }
    exports.encode = encode;
    function decode(str) {
      let decoded = 0;
      for (i = 0; i < str.length; i++) decoded = decoded * length + map[str.charAt(i)];
      return decoded;
    }
    exports.decode = decode;
    function yeast() {
      const now = encode(+new Date());
      if (now !== prev) return seed = 0, prev = now;
      return now + "." + encode(seed++);
    }
    exports.yeast = yeast;
    for (;i < length; i++) map[alphabet[i]] = i;
  }, {} ],
  42: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.globalThisShim = void 0;
    exports.globalThisShim = (() => "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : Function("return this")())();
  }, {} ],
  43: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parse = exports.installTimerFunctions = exports.transports = exports.Transport = exports.protocol = exports.Socket = void 0;
    const socket_js_1 = require("./socket.js");
    Object.defineProperty(exports, "Socket", {
      enumerable: true,
      get: function() {
        return socket_js_1.Socket;
      }
    });
    exports.protocol = socket_js_1.Socket.protocol;
    var transport_js_1 = require("./transport.js");
    Object.defineProperty(exports, "Transport", {
      enumerable: true,
      get: function() {
        return transport_js_1.Transport;
      }
    });
    var index_js_1 = require("./transports/index.js");
    Object.defineProperty(exports, "transports", {
      enumerable: true,
      get: function() {
        return index_js_1.transports;
      }
    });
    var util_js_1 = require("./util.js");
    Object.defineProperty(exports, "installTimerFunctions", {
      enumerable: true,
      get: function() {
        return util_js_1.installTimerFunctions;
      }
    });
    var parseuri_js_1 = require("./contrib/parseuri.js");
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return parseuri_js_1.parse;
      }
    });
  }, {
    "./contrib/parseuri.js": 40,
    "./socket.js": 44,
    "./transport.js": 45,
    "./transports/index.js": 46,
    "./util.js": 51
  } ],
  44: [ function(require, module, exports) {
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Socket = void 0;
    const index_js_1 = require("./transports/index.js");
    const util_js_1 = require("./util.js");
    const parseqs_js_1 = require("./contrib/parseqs.js");
    const parseuri_js_1 = require("./contrib/parseuri.js");
    const debug_1 = __importDefault(require("debug"));
    const component_emitter_1 = require("@socket.io/component-emitter");
    const engine_io_parser_1 = require("engine.io-parser");
    const debug = (0, debug_1.default)("engine.io-client:socket");
    class Socket extends component_emitter_1.Emitter {
      constructor(uri, opts = {}) {
        super();
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = null;
        }
        if (uri) {
          uri = (0, parseuri_js_1.parse)(uri);
          opts.hostname = uri.host;
          opts.secure = "https" === uri.protocol || "wss" === uri.protocol;
          opts.port = uri.port;
          uri.query && (opts.query = uri.query);
        } else opts.host && (opts.hostname = (0, parseuri_js_1.parse)(opts.host).host);
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.secure = null != opts.secure ? opts.secure : "undefined" !== typeof location && "https:" === location.protocol;
        opts.hostname && !opts.port && (opts.port = this.secure ? "443" : "80");
        this.hostname = opts.hostname || ("undefined" !== typeof location ? location.hostname : "localhost");
        this.port = opts.port || ("undefined" !== typeof location && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = opts.transports || [ "polling", "websocket" ];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
          path: "/engine.io",
          agent: false,
          withCredentials: false,
          upgrade: true,
          timestampParam: "t",
          rememberUpgrade: false,
          rejectUnauthorized: true,
          perMessageDeflate: {
            threshold: 1024
          },
          transportOptions: {},
          closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        "string" === typeof this.opts.query && (this.opts.query = (0, parseqs_js_1.decode)(this.opts.query));
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        this.pingTimeoutTimer = null;
        if ("function" === typeof addEventListener) {
          this.opts.closeOnBeforeunload && addEventListener("beforeunload", () => {
            if (this.transport) {
              this.transport.removeAllListeners();
              this.transport.close();
            }
          }, false);
          if ("localhost" !== this.hostname) {
            this.offlineEventListener = () => {
              this.onClose("transport close", {
                description: "network connection lost"
              });
            };
            addEventListener("offline", this.offlineEventListener, false);
          }
        }
        this.open();
      }
      createTransport(name) {
        debug('creating transport "%s"', name);
        const query = Object.assign({}, this.opts.query);
        query.EIO = engine_io_parser_1.protocol;
        query.transport = name;
        this.id && (query.sid = this.id);
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
          query: query,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        });
        debug("options: %j", opts);
        return new index_js_1.transports[name](opts);
      }
      open() {
        let transport;
        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) transport = "websocket"; else {
          if (0 === this.transports.length) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          }
          transport = this.transports[0];
        }
        this.readyState = "opening";
        try {
          transport = this.createTransport(transport);
        } catch (e) {
          debug("error while creating transport: %s", e);
          this.transports.shift();
          this.open();
          return;
        }
        transport.open();
        this.setTransport(transport);
      }
      setTransport(transport) {
        debug("setting transport %s", transport.name);
        if (this.transport) {
          debug("clearing existing transport %s", this.transport.name);
          this.transport.removeAllListeners();
        }
        this.transport = transport;
        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
      }
      probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
          if (failed) return;
          debug('probe transport "%s" opened', name);
          transport.send([ {
            type: "ping",
            data: "probe"
          } ]);
          transport.once("packet", msg => {
            if (failed) return;
            if ("pong" === msg.type && "probe" === msg.data) {
              debug('probe transport "%s" pong', name);
              this.upgrading = true;
              this.emitReserved("upgrading", transport);
              if (!transport) return;
              Socket.priorWebsocketSuccess = "websocket" === transport.name;
              debug('pausing current transport "%s"', this.transport.name);
              this.transport.pause(() => {
                if (failed) return;
                if ("closed" === this.readyState) return;
                debug("changing transport and sending upgrade packet");
                cleanup();
                this.setTransport(transport);
                transport.send([ {
                  type: "upgrade"
                } ]);
                this.emitReserved("upgrade", transport);
                transport = null;
                this.upgrading = false;
                this.flush();
              });
            } else {
              debug('probe transport "%s" failed', name);
              const err = new Error("probe error");
              err.transport = transport.name;
              this.emitReserved("upgradeError", err);
            }
          });
        };
        function freezeTransport() {
          if (failed) return;
          failed = true;
          cleanup();
          transport.close();
          transport = null;
        }
        const onerror = err => {
          const error = new Error("probe error: " + err);
          error.transport = transport.name;
          freezeTransport();
          debug('probe transport "%s" failed because of error: %s', name, err);
          this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
          onerror("transport closed");
        }
        function onclose() {
          onerror("socket closed");
        }
        function onupgrade(to) {
          if (transport && to.name !== transport.name) {
            debug('"%s" works - aborting "%s"', to.name, transport.name);
            freezeTransport();
          }
        }
        const cleanup = () => {
          transport.removeListener("open", onTransportOpen);
          transport.removeListener("error", onerror);
          transport.removeListener("close", onTransportClose);
          this.off("close", onclose);
          this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
      }
      onOpen() {
        debug("socket open");
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
          debug("starting upgrade probes");
          let i = 0;
          const l = this.upgrades.length;
          for (;i < l; i++) this.probe(this.upgrades[i]);
        }
      }
      onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
          this.emitReserved("packet", packet);
          this.emitReserved("heartbeat");
          switch (packet.type) {
           case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;

           case "ping":
            this.resetPingTimeout();
            this.sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            break;

           case "error":
            const err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;

           case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
          }
        } else debug('packet received with socket readyState "%s"', this.readyState);
      }
      onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        if ("closed" === this.readyState) return;
        this.resetPingTimeout();
      }
      resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
          this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        this.opts.autoUnref && this.pingTimeoutTimer.unref();
      }
      onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        this.prevBufferLen = 0;
        0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
      }
      flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          const packets = this.getWritablePackets();
          debug("flushing %d packets in socket", packets.length);
          this.transport.send(packets);
          this.prevBufferLen = packets.length;
          this.emitReserved("flush");
        }
      }
      getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) return this.writeBuffer;
        let payloadSize = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
          const data = this.writeBuffer[i].data;
          data && (payloadSize += (0, util_js_1.byteLength)(data));
          if (i > 0 && payloadSize > this.maxPayload) {
            debug("only send %d out of %d packets", i, this.writeBuffer.length);
            return this.writeBuffer.slice(0, i);
          }
          payloadSize += 2;
        }
        debug("payload size is %d (max: %d)", payloadSize, this.maxPayload);
        return this.writeBuffer;
      }
      write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
          fn = data;
          data = void 0;
        }
        if ("function" === typeof options) {
          fn = options;
          options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) return;
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
          type: type,
          data: data,
          options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        fn && this.once("flush", fn);
        this.flush();
      }
      close() {
        const close = () => {
          this.onClose("forced close");
          debug("socket closing - telling transport to close");
          this.transport.close();
        };
        const cleanupAndClose = () => {
          this.off("upgrade", cleanupAndClose);
          this.off("upgradeError", cleanupAndClose);
          close();
        };
        const waitForUpgrade = () => {
          this.once("upgrade", cleanupAndClose);
          this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? waitForUpgrade() : close();
          }) : this.upgrading ? waitForUpgrade() : close();
        }
        return this;
      }
      onError(err) {
        debug("socket error %j", err);
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
      }
      onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          debug('socket close with reason: "%s"', reason);
          this.clearTimeoutFn(this.pingTimeoutTimer);
          this.transport.removeAllListeners("close");
          this.transport.close();
          this.transport.removeAllListeners();
          "function" === typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, false);
          this.readyState = "closed";
          this.id = null;
          this.emitReserved("close", reason, description);
          this.writeBuffer = [];
          this.prevBufferLen = 0;
        }
      }
      filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (;i < j; i++) ~this.transports.indexOf(upgrades[i]) && filteredUpgrades.push(upgrades[i]);
        return filteredUpgrades;
      }
    }
    exports.Socket = Socket;
    Socket.protocol = engine_io_parser_1.protocol;
  }, {
    "./contrib/parseqs.js": 39,
    "./contrib/parseuri.js": 40,
    "./transports/index.js": 46,
    "./util.js": 51,
    "@socket.io/component-emitter": 6,
    debug: 36,
    "engine.io-parser": 56
  } ],
  45: [ function(require, module, exports) {
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Transport = void 0;
    const engine_io_parser_1 = require("engine.io-parser");
    const component_emitter_1 = require("@socket.io/component-emitter");
    const util_js_1 = require("./util.js");
    const debug_1 = __importDefault(require("debug"));
    const debug = (0, debug_1.default)("engine.io-client:transport");
    class TransportError extends Error {
      constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
      }
    }
    class Transport extends component_emitter_1.Emitter {
      constructor(opts) {
        super();
        this.writable = false;
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
      }
      onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
      }
      open() {
        if ("closed" === this.readyState || "" === this.readyState) {
          this.readyState = "opening";
          this.doOpen();
        }
        return this;
      }
      close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.doClose();
          this.onClose();
        }
        return this;
      }
      send(packets) {
        "open" === this.readyState ? this.write(packets) : debug("transport is not open, discarding packets");
      }
      onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
      }
      onData(data) {
        const packet = (0, engine_io_parser_1.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
      }
      onPacket(packet) {
        super.emitReserved("packet", packet);
      }
      onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
      }
    }
    exports.Transport = Transport;
  }, {
    "./util.js": 51,
    "@socket.io/component-emitter": 6,
    debug: 36,
    "engine.io-parser": 56
  } ],
  46: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.transports = void 0;
    const polling_js_1 = require("./polling.js");
    const websocket_js_1 = require("./websocket.js");
    exports.transports = {
      websocket: websocket_js_1.WS,
      polling: polling_js_1.Polling
    };
  }, {
    "./polling.js": 47,
    "./websocket.js": 49
  } ],
  47: [ function(require, module, exports) {
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Request = exports.Polling = void 0;
    const transport_js_1 = require("../transport.js");
    const debug_1 = __importDefault(require("debug"));
    const yeast_js_1 = require("../contrib/yeast.js");
    const parseqs_js_1 = require("../contrib/parseqs.js");
    const engine_io_parser_1 = require("engine.io-parser");
    const xmlhttprequest_js_1 = require("./xmlhttprequest.js");
    const component_emitter_1 = require("@socket.io/component-emitter");
    const util_js_1 = require("../util.js");
    const globalThis_js_1 = require("../globalThis.js");
    const debug = (0, debug_1.default)("engine.io-client:polling");
    function empty() {}
    const hasXHR2 = function() {
      const xhr = new xmlhttprequest_js_1.XHR({
        xdomain: false
      });
      return null != xhr.responseType;
    }();
    class Polling extends transport_js_1.Transport {
      constructor(opts) {
        super(opts);
        this.polling = false;
        if ("undefined" !== typeof location) {
          const isSSL = "https:" === location.protocol;
          let port = location.port;
          port || (port = isSSL ? "443" : "80");
          this.xd = "undefined" !== typeof location && opts.hostname !== location.hostname || port !== opts.port;
          this.xs = opts.secure !== isSSL;
        }
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
      }
      get name() {
        return "polling";
      }
      doOpen() {
        this.poll();
      }
      pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
          debug("paused");
          this.readyState = "paused";
          onPause();
        };
        if (this.polling || !this.writable) {
          let total = 0;
          if (this.polling) {
            debug("we are currently polling - waiting to pause");
            total++;
            this.once("pollComplete", function() {
              debug("pre-pause polling complete");
              --total || pause();
            });
          }
          if (!this.writable) {
            debug("we are currently writing - waiting to pause");
            total++;
            this.once("drain", function() {
              debug("pre-pause writing complete");
              --total || pause();
            });
          }
        } else pause();
      }
      poll() {
        debug("polling");
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
      }
      onData(data) {
        debug("polling got data %s", data);
        const callback = packet => {
          "opening" === this.readyState && "open" === packet.type && this.onOpen();
          if ("close" === packet.type) {
            this.onClose({
              description: "transport closed by the server"
            });
            return false;
          }
          this.onPacket(packet);
        };
        (0, engine_io_parser_1.decodePayload)(data, this.socket.binaryType).forEach(callback);
        if ("closed" !== this.readyState) {
          this.polling = false;
          this.emitReserved("pollComplete");
          "open" === this.readyState ? this.poll() : debug('ignoring poll - transport state "%s"', this.readyState);
        }
      }
      doClose() {
        const close = () => {
          debug("writing close packet");
          this.write([ {
            type: "close"
          } ]);
        };
        if ("open" === this.readyState) {
          debug("transport open - closing");
          close();
        } else {
          debug("transport not open - deferring close");
          this.once("open", close);
        }
      }
      write(packets) {
        this.writable = false;
        (0, engine_io_parser_1.encodePayload)(packets, data => {
          this.doWrite(data, () => {
            this.writable = true;
            this.emitReserved("drain");
          });
        });
      }
      uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        false !== this.opts.timestampRequests && (query[this.opts.timestampParam] = (0, 
        yeast_js_1.yeast)());
        this.supportsBinary || query.sid || (query.b64 = 1);
        this.opts.port && ("https" === schema && 443 !== Number(this.opts.port) || "http" === schema && 80 !== Number(this.opts.port)) && (port = ":" + this.opts.port);
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = -1 !== this.opts.hostname.indexOf(":");
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
      }
      request(opts = {}) {
        Object.assign(opts, {
          xd: this.xd,
          xs: this.xs
        }, this.opts);
        return new Request(this.uri(), opts);
      }
      doWrite(data, fn) {
        const req = this.request({
          method: "POST",
          data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr post error", xhrStatus, context);
        });
      }
      doPoll() {
        debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
      }
    }
    exports.Polling = Polling;
    class Request extends component_emitter_1.Emitter {
      constructor(uri, opts) {
        super();
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = void 0 !== opts.data ? opts.data : null;
        this.create();
      }
      create() {
        const opts = (0, util_js_1.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = this.xhr = new xmlhttprequest_js_1.XHR(opts);
        try {
          debug("xhr open %s: %s", this.method, this.uri);
          xhr.open(this.method, this.uri, this.async);
          try {
            if (this.opts.extraHeaders) {
              xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
              for (let i in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(i) && xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          } catch (e) {}
          if ("POST" === this.method) try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
          try {
            xhr.setRequestHeader("Accept", "*/*");
          } catch (e) {}
          "withCredentials" in xhr && (xhr.withCredentials = this.opts.withCredentials);
          this.opts.requestTimeout && (xhr.timeout = this.opts.requestTimeout);
          xhr.onreadystatechange = () => {
            if (4 !== xhr.readyState) return;
            200 === xhr.status || 1223 === xhr.status ? this.onLoad() : this.setTimeoutFn(() => {
              this.onError("number" === typeof xhr.status ? xhr.status : 0);
            }, 0);
          };
          debug("xhr data %s", this.data);
          xhr.send(this.data);
        } catch (e) {
          this.setTimeoutFn(() => {
            this.onError(e);
          }, 0);
          return;
        }
        if ("undefined" !== typeof document) {
          this.index = Request.requestsCount++;
          Request.requests[this.index] = this;
        }
      }
      onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
      }
      cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) return;
        this.xhr.onreadystatechange = empty;
        if (fromError) try {
          this.xhr.abort();
        } catch (e) {}
        "undefined" !== typeof document && delete Request.requests[this.index];
        this.xhr = null;
      }
      onLoad() {
        const data = this.xhr.responseText;
        if (null !== data) {
          this.emitReserved("data", data);
          this.emitReserved("success");
          this.cleanup();
        }
      }
      abort() {
        this.cleanup();
      }
    }
    exports.Request = Request;
    Request.requestsCount = 0;
    Request.requests = {};
    if ("undefined" !== typeof document) if ("function" === typeof attachEvent) attachEvent("onunload", unloadHandler); else if ("function" === typeof addEventListener) {
      const terminationEvent = "onpagehide" in globalThis_js_1.globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
    function unloadHandler() {
      for (let i in Request.requests) Request.requests.hasOwnProperty(i) && Request.requests[i].abort();
    }
  }, {
    "../contrib/parseqs.js": 39,
    "../contrib/yeast.js": 41,
    "../globalThis.js": 42,
    "../transport.js": 45,
    "../util.js": 51,
    "./xmlhttprequest.js": 50,
    "@socket.io/component-emitter": 6,
    debug: 36,
    "engine.io-parser": 56
  } ],
  48: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaultBinaryType = exports.usingBrowserWebSocket = exports.WebSocket = exports.nextTick = void 0;
    const globalThis_js_1 = require("../globalThis.js");
    exports.nextTick = (() => {
      const isPromiseAvailable = "function" === typeof Promise && "function" === typeof Promise.resolve;
      return isPromiseAvailable ? cb => Promise.resolve().then(cb) : (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    })();
    exports.WebSocket = globalThis_js_1.globalThisShim.WebSocket || globalThis_js_1.globalThisShim.MozWebSocket;
    exports.usingBrowserWebSocket = true;
    exports.defaultBinaryType = "arraybuffer";
  }, {
    "../globalThis.js": 42
  } ],
  49: [ function(require, module, exports) {
    (function(Buffer) {
      "use strict";
      var __importDefault = this && this.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {
          default: mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WS = void 0;
      const transport_js_1 = require("../transport.js");
      const parseqs_js_1 = require("../contrib/parseqs.js");
      const yeast_js_1 = require("../contrib/yeast.js");
      const util_js_1 = require("../util.js");
      const websocket_constructor_js_1 = require("./websocket-constructor.js");
      const debug_1 = __importDefault(require("debug"));
      const engine_io_parser_1 = require("engine.io-parser");
      const debug = (0, debug_1.default)("engine.io-client:websocket");
      const isReactNative = "undefined" !== typeof navigator && "string" === typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
      class WS extends transport_js_1.Transport {
        constructor(opts) {
          super(opts);
          this.supportsBinary = !opts.forceBase64;
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check()) return;
          const uri = this.uri();
          const protocols = this.opts.protocols;
          const opts = isReactNative ? {} : (0, util_js_1.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          this.opts.extraHeaders && (opts.headers = this.opts.extraHeaders);
          try {
            this.ws = websocket_constructor_js_1.usingBrowserWebSocket && !isReactNative ? protocols ? new websocket_constructor_js_1.WebSocket(uri, protocols) : new websocket_constructor_js_1.WebSocket(uri) : new websocket_constructor_js_1.WebSocket(uri, protocols, opts);
          } catch (err) {
            return this.emitReserved("error", err);
          }
          this.ws.binaryType = this.socket.binaryType || websocket_constructor_js_1.defaultBinaryType;
          this.addEventListeners();
        }
        addEventListeners() {
          this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref();
            this.onOpen();
          };
          this.ws.onclose = closeEvent => this.onClose({
            description: "websocket connection closed",
            context: closeEvent
          });
          this.ws.onmessage = ev => this.onData(ev.data);
          this.ws.onerror = e => this.onError("websocket error", e);
        }
        write(packets) {
          this.writable = false;
          for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, engine_io_parser_1.encodePacket)(packet, this.supportsBinary, data => {
              const opts = {};
              if (!websocket_constructor_js_1.usingBrowserWebSocket) {
                packet.options && (opts.compress = packet.options.compress);
                if (this.opts.perMessageDeflate) {
                  const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
                  len < this.opts.perMessageDeflate.threshold && (opts.compress = false);
                }
              }
              try {
                websocket_constructor_js_1.usingBrowserWebSocket ? this.ws.send(data) : this.ws.send(data, opts);
              } catch (e) {
                debug("websocket closed before onclose event");
              }
              lastPacket && (0, websocket_constructor_js_1.nextTick)(() => {
                this.writable = true;
                this.emitReserved("drain");
              }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          if ("undefined" !== typeof this.ws) {
            this.ws.close();
            this.ws = null;
          }
        }
        uri() {
          let query = this.query || {};
          const schema = this.opts.secure ? "wss" : "ws";
          let port = "";
          this.opts.port && ("wss" === schema && 443 !== Number(this.opts.port) || "ws" === schema && 80 !== Number(this.opts.port)) && (port = ":" + this.opts.port);
          this.opts.timestampRequests && (query[this.opts.timestampParam] = (0, yeast_js_1.yeast)());
          this.supportsBinary || (query.b64 = 1);
          const encodedQuery = (0, parseqs_js_1.encode)(query);
          const ipv6 = -1 !== this.opts.hostname.indexOf(":");
          return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
        }
        check() {
          return !!websocket_constructor_js_1.WebSocket;
        }
      }
      exports.WS = WS;
    }).call(this, require("buffer").Buffer);
  }, {
    "../contrib/parseqs.js": 39,
    "../contrib/yeast.js": 41,
    "../transport.js": 45,
    "../util.js": 51,
    "./websocket-constructor.js": 48,
    buffer: 2,
    debug: 36,
    "engine.io-parser": 56
  } ],
  50: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.XHR = void 0;
    const has_cors_js_1 = require("../contrib/has-cors.js");
    const globalThis_js_1 = require("../globalThis.js");
    function XHR(opts) {
      const xdomain = opts.xdomain;
      try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || has_cors_js_1.hasCORS)) return new XMLHttpRequest();
      } catch (e) {}
      if (!xdomain) try {
        return new (globalThis_js_1.globalThisShim[[ "Active" ].concat("Object").join("X")])("Microsoft.XMLHTTP");
      } catch (e) {}
    }
    exports.XHR = XHR;
  }, {
    "../contrib/has-cors.js": 38,
    "../globalThis.js": 42
  } ],
  51: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.byteLength = exports.installTimerFunctions = exports.pick = void 0;
    const globalThis_js_1 = require("./globalThis.js");
    function pick(obj, ...attr) {
      return attr.reduce((acc, k) => {
        obj.hasOwnProperty(k) && (acc[k] = obj[k]);
        return acc;
      }, {});
    }
    exports.pick = pick;
    const NATIVE_SET_TIMEOUT = setTimeout;
    const NATIVE_CLEAR_TIMEOUT = clearTimeout;
    function installTimerFunctions(obj, opts) {
      if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis_js_1.globalThisShim);
      } else {
        obj.setTimeoutFn = setTimeout.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = clearTimeout.bind(globalThis_js_1.globalThisShim);
      }
    }
    exports.installTimerFunctions = installTimerFunctions;
    const BASE64_OVERHEAD = 1.33;
    function byteLength(obj) {
      if ("string" === typeof obj) return utf8Length(obj);
      return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
    exports.byteLength = byteLength;
    function utf8Length(str) {
      let c = 0, length = 0;
      for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 128) length += 1; else if (c < 2048) length += 2; else if (c < 55296 || c >= 57344) length += 3; else {
          i++;
          length += 4;
        }
      }
      return length;
    }
  }, {
    "./globalThis.js": 42
  } ],
  52: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
    const PACKET_TYPES = Object.create(null);
    exports.PACKET_TYPES = PACKET_TYPES;
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    const PACKET_TYPES_REVERSE = Object.create(null);
    exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
    Object.keys(PACKET_TYPES).forEach(key => {
      PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    const ERROR_PACKET = {
      type: "error",
      data: "parser error"
    };
    exports.ERROR_PACKET = ERROR_PACKET;
  }, {} ],
  53: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.decode = exports.encode = void 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const lookup = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;
    const encode = arraybuffer => {
      let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
      for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(3 & bytes[i]) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(15 & bytes[i + 1]) << 2 | bytes[i + 2] >> 6];
        base64 += chars[63 & bytes[i + 2]];
      }
      len % 3 === 2 ? base64 = base64.substring(0, base64.length - 1) + "=" : len % 3 === 1 && (base64 = base64.substring(0, base64.length - 2) + "==");
      return base64;
    };
    exports.encode = encode;
    const decode = base64 => {
      let bufferLength = .75 * base64.length, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
      if ("=" === base64[base64.length - 1]) {
        bufferLength--;
        "=" === base64[base64.length - 2] && bufferLength--;
      }
      const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
      for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (15 & encoded2) << 4 | encoded3 >> 2;
        bytes[p++] = (3 & encoded3) << 6 | 63 & encoded4;
      }
      return arraybuffer;
    };
    exports.decode = decode;
  }, {} ],
  54: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const commons_js_1 = require("./commons.js");
    const base64_arraybuffer_js_1 = require("./contrib/base64-arraybuffer.js");
    const withNativeArrayBuffer = "function" === typeof ArrayBuffer;
    const decodePacket = (encodedPacket, binaryType) => {
      if ("string" !== typeof encodedPacket) return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
      const type = encodedPacket.charAt(0);
      if ("b" === type) return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
      const packetType = commons_js_1.PACKET_TYPES_REVERSE[type];
      if (!packetType) return commons_js_1.ERROR_PACKET;
      return encodedPacket.length > 1 ? {
        type: commons_js_1.PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
      } : {
        type: commons_js_1.PACKET_TYPES_REVERSE[type]
      };
    };
    const decodeBase64Packet = (data, binaryType) => {
      if (withNativeArrayBuffer) {
        const decoded = (0, base64_arraybuffer_js_1.decode)(data);
        return mapBinary(decoded, binaryType);
      }
      return {
        base64: true,
        data: data
      };
    };
    const mapBinary = (data, binaryType) => {
      switch (binaryType) {
       case "blob":
        return data instanceof ArrayBuffer ? new Blob([ data ]) : data;

       case "arraybuffer":
       default:
        return data;
      }
    };
    exports.default = decodePacket;
  }, {
    "./commons.js": 52,
    "./contrib/base64-arraybuffer.js": 53
  } ],
  55: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const commons_js_1 = require("./commons.js");
    const withNativeBlob = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob);
    const withNativeArrayBuffer = "function" === typeof ArrayBuffer;
    const isView = obj => "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    const encodePacket = ({type: type, data: data}, supportsBinary, callback) => {
      if (withNativeBlob && data instanceof Blob) return supportsBinary ? callback(data) : encodeBlobAsBase64(data, callback);
      if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) return supportsBinary ? callback(data) : encodeBlobAsBase64(new Blob([ data ]), callback);
      return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
    };
    const encodeBlobAsBase64 = (data, callback) => {
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
      };
      return fileReader.readAsDataURL(data);
    };
    exports.default = encodePacket;
  }, {
    "./commons.js": 52
  } ],
  56: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacket = exports.protocol = void 0;
    const encodePacket_js_1 = require("./encodePacket.js");
    exports.encodePacket = encodePacket_js_1.default;
    const decodePacket_js_1 = require("./decodePacket.js");
    exports.decodePacket = decodePacket_js_1.default;
    const SEPARATOR = String.fromCharCode(30);
    const encodePayload = (packets, callback) => {
      const length = packets.length;
      const encodedPackets = new Array(length);
      let count = 0;
      packets.forEach((packet, i) => {
        (0, encodePacket_js_1.default)(packet, false, encodedPacket => {
          encodedPackets[i] = encodedPacket;
          ++count === length && callback(encodedPackets.join(SEPARATOR));
        });
      });
    };
    exports.encodePayload = encodePayload;
    const decodePayload = (encodedPayload, binaryType) => {
      const encodedPackets = encodedPayload.split(SEPARATOR);
      const packets = [];
      for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0, decodePacket_js_1.default)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if ("error" === decodedPacket.type) break;
      }
      return packets;
    };
    exports.decodePayload = decodePayload;
    exports.protocol = 4;
  }, {
    "./decodePacket.js": 54,
    "./encodePacket.js": 55
  } ],
  57: [ function(require, module, exports) {
    var s = 1e3;
    var m = 60 * s;
    var h = 60 * m;
    var d = 24 * h;
    var w = 7 * d;
    var y = 365.25 * d;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if ("string" === type && val.length > 0) return parse(val);
      if ("number" === type && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) return;
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) return;
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
       case "years":
       case "year":
       case "yrs":
       case "yr":
       case "y":
        return n * y;

       case "weeks":
       case "week":
       case "w":
        return n * w;

       case "days":
       case "day":
       case "d":
        return n * d;

       case "hours":
       case "hour":
       case "hrs":
       case "hr":
       case "h":
        return n * h;

       case "minutes":
       case "minute":
       case "mins":
       case "min":
       case "m":
        return n * m;

       case "seconds":
       case "second":
       case "secs":
       case "sec":
       case "s":
        return n * s;

       case "milliseconds":
       case "millisecond":
       case "msecs":
       case "msec":
       case "ms":
        return n;

       default:
        return;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) return Math.round(ms / d) + "d";
      if (msAbs >= h) return Math.round(ms / h) + "h";
      if (msAbs >= m) return Math.round(ms / m) + "m";
      if (msAbs >= s) return Math.round(ms / s) + "s";
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) return plural(ms, msAbs, d, "day");
      if (msAbs >= h) return plural(ms, msAbs, h, "hour");
      if (msAbs >= m) return plural(ms, msAbs, m, "minute");
      if (msAbs >= s) return plural(ms, msAbs, s, "second");
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= 1.5 * n;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }, {} ],
  58: [ function(require, module, exports) {
    var runtime = function(exports) {
      "use strict";
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined;
      var $Symbol = "function" === typeof Symbol ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      try {
        define({}, "");
      } catch (err) {
        define = function(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }
      exports.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
      function defineIteratorMethods(prototype) {
        [ "next", "throw", "return" ].forEach(function(method) {
          define(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" === typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
      };
      exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype); else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports.awrap = function(arg) {
        return {
          __await: arg
        };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if ("throw" !== record.type) {
            var result = record.arg;
            var value = result.value;
            if (value && "object" === typeof value && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
            return PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
          reject(record.arg);
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      });
      exports.AsyncIterator = AsyncIterator;
      exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) throw new Error("Generator is already running");
          if (state === GenStateCompleted) {
            if ("throw" === method) throw arg;
            return doneResult();
          }
          context.method = method;
          context.arg = arg;
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);
            if ("normal" === record.type) {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) continue;
              return {
                value: record.arg,
                done: context.done
              };
            }
            if ("throw" === record.type) {
              state = GenStateCompleted;
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
          context.delegate = null;
          if ("throw" === context.method) {
            if (delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);
              if ("throw" === context.method) return ContinueSentinel;
            }
            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (!info.done) return info;
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;
        if ("return" !== context.method) {
          context.method = "next";
          context.arg = undefined;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator");
      define(Gp, iteratorSymbol, function() {
        return this;
      });
      define(Gp, "toString", function() {
        return "[object Generator]";
      });
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]);
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [ {
          tryLoc: "root"
        } ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports.keys = function(object) {
        var keys = [];
        for (var key in object) keys.push(key);
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) return iteratorMethod.call(iterable);
          if ("function" === typeof iterable.next) return iterable;
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next() {
              while (++i < iterable.length) if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
              next.value = undefined;
              next.done = true;
              return next;
            };
            return next.next = next;
          }
        }
        return {
          next: doneResult
        };
      }
      exports.values = values;
      function doneResult() {
        return {
          value: undefined,
          done: true
        };
      }
      Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if ("throw" === rootRecord.type) throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function(exception) {
          if (this.done) throw exception;
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            if (caught) {
              context.method = "next";
              context.arg = undefined;
            }
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if ("root" === entry.tryLoc) return handle("end");
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
              } else {
                if (!hasFinally) throw new Error("try statement without catch or finally");
                if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        },
        complete: function(record, afterLoc) {
          if ("throw" === record.type) throw record.arg;
          if ("break" === record.type || "continue" === record.type) this.next = record.arg; else if ("return" === record.type) {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else "normal" === record.type && afterLoc && (this.next = afterLoc);
          return ContinueSentinel;
        },
        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        catch: function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if ("throw" === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
          "next" === this.method && (this.arg = undefined);
          return ContinueSentinel;
        }
      };
      return exports;
    }("object" === typeof module ? module.exports : {});
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      "object" === typeof globalThis ? globalThis.regeneratorRuntime = runtime : Function("r", "regeneratorRuntime = r")(runtime);
    }
  }, {} ],
  59: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Backoff = void 0;
    function Backoff(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 1e4;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    exports.Backoff = Backoff;
    Backoff.prototype.duration = function() {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = 0 == (1 & Math.floor(10 * rand)) ? ms - deviation : ms + deviation;
      }
      return 0 | Math.min(ms, this.max);
    };
    Backoff.prototype.reset = function() {
      this.attempts = 0;
    };
    Backoff.prototype.setMin = function(min) {
      this.ms = min;
    };
    Backoff.prototype.setMax = function(max) {
      this.max = max;
    };
    Backoff.prototype.setJitter = function(jitter) {
      this.jitter = jitter;
    };
  }, {} ],
  60: [ function(require, module, exports) {
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.connect = exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;
    const url_js_1 = require("./url.js");
    const manager_js_1 = require("./manager.js");
    Object.defineProperty(exports, "Manager", {
      enumerable: true,
      get: function() {
        return manager_js_1.Manager;
      }
    });
    const socket_js_1 = require("./socket.js");
    Object.defineProperty(exports, "Socket", {
      enumerable: true,
      get: function() {
        return socket_js_1.Socket;
      }
    });
    const debug_1 = __importDefault(require("debug"));
    const debug = debug_1.default("socket.io-client");
    const cache = {};
    function lookup(uri, opts) {
      if ("object" === typeof uri) {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      const parsed = url_js_1.url(uri, opts.path || "/socket.io");
      const source = parsed.source;
      const id = parsed.id;
      const path = parsed.path;
      const sameNamespace = cache[id] && path in cache[id]["nsps"];
      const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
      let io;
      if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_js_1.Manager(source, opts);
      } else {
        if (!cache[id]) {
          debug("new io instance for %s", source);
          cache[id] = new manager_js_1.Manager(source, opts);
        }
        io = cache[id];
      }
      parsed.query && !opts.query && (opts.query = parsed.queryKey);
      return io.socket(parsed.path, opts);
    }
    exports.io = lookup;
    exports.connect = lookup;
    exports.default = lookup;
    Object.assign(lookup, {
      Manager: manager_js_1.Manager,
      Socket: socket_js_1.Socket,
      io: lookup,
      connect: lookup
    });
    var socket_io_parser_1 = require("socket.io-parser");
    Object.defineProperty(exports, "protocol", {
      enumerable: true,
      get: function() {
        return socket_io_parser_1.protocol;
      }
    });
    module.exports = lookup;
  }, {
    "./manager.js": 61,
    "./socket.js": 63,
    "./url.js": 64,
    debug: 36,
    "socket.io-parser": 66
  } ],
  61: [ function(require, module, exports) {
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = this && this.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (null != mod) for (var k in mod) "default" !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Manager = void 0;
    const engine_io_client_1 = require("engine.io-client");
    const socket_js_1 = require("./socket.js");
    const parser = __importStar(require("socket.io-parser"));
    const on_js_1 = require("./on.js");
    const backo2_js_1 = require("./contrib/backo2.js");
    const component_emitter_1 = require("@socket.io/component-emitter");
    const debug_1 = __importDefault(require("debug"));
    const debug = debug_1.default("socket.io-client:manager");
    class Manager extends component_emitter_1.Emitter {
      constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = void 0;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        engine_io_client_1.installTimerFunctions(this, opts);
        this.reconnection(false !== opts.reconnection);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1e3);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
        this.randomizationFactor(null !== (_a = opts.randomizationFactor) && void 0 !== _a ? _a : .5);
        this.backoff = new backo2_js_1.Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = false !== opts.autoConnect;
        this._autoConnect && this.open();
      }
      reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
      }
      reconnectionAttempts(v) {
        if (void 0 === v) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      }
      reconnectionDelay(v) {
        var _a;
        if (void 0 === v) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        null === (_a = this.backoff) || void 0 === _a ? void 0 : _a.setMin(v);
        return this;
      }
      randomizationFactor(v) {
        var _a;
        if (void 0 === v) return this._randomizationFactor;
        this._randomizationFactor = v;
        null === (_a = this.backoff) || void 0 === _a ? void 0 : _a.setJitter(v);
        return this;
      }
      reconnectionDelayMax(v) {
        var _a;
        if (void 0 === v) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        null === (_a = this.backoff) || void 0 === _a ? void 0 : _a.setMax(v);
        return this;
      }
      timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
      }
      maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
      }
      open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open")) return this;
        debug("opening %s", this.uri);
        this.engine = new engine_io_client_1.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        const openSubDestroy = on_js_1.on(socket, "open", function() {
          self.onopen();
          fn && fn();
        });
        const errorSub = on_js_1.on(socket, "error", err => {
          debug("error");
          self.cleanup();
          self._readyState = "closed";
          this.emitReserved("error", err);
          fn ? fn(err) : self.maybeReconnectOnOpen();
        });
        if (false !== this._timeout) {
          const timeout = this._timeout;
          debug("connect attempt will timeout after %d", timeout);
          0 === timeout && openSubDestroy();
          const timer = this.setTimeoutFn(() => {
            debug("connect attempt timed out after %d", timeout);
            openSubDestroy();
            socket.close();
            socket.emit("error", new Error("timeout"));
          }, timeout);
          this.opts.autoUnref && timer.unref();
          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
      }
      connect(fn) {
        return this.open(fn);
      }
      onopen() {
        debug("open");
        this.cleanup();
        this._readyState = "open";
        this.emitReserved("open");
        const socket = this.engine;
        this.subs.push(on_js_1.on(socket, "ping", this.onping.bind(this)), on_js_1.on(socket, "data", this.ondata.bind(this)), on_js_1.on(socket, "error", this.onerror.bind(this)), on_js_1.on(socket, "close", this.onclose.bind(this)), on_js_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
      }
      onping() {
        this.emitReserved("ping");
      }
      ondata(data) {
        this.decoder.add(data);
      }
      ondecoded(packet) {
        this.emitReserved("packet", packet);
      }
      onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
      }
      socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
          socket = new socket_js_1.Socket(this, nsp, opts);
          this.nsps[nsp] = socket;
        }
        return socket;
      }
      _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
          const socket = this.nsps[nsp];
          if (socket.active) {
            debug("socket %s is still active, skipping close", nsp);
            return;
          }
        }
        this._close();
      }
      _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) this.engine.write(encodedPackets[i], packet.options);
      }
      cleanup() {
        debug("cleanup");
        this.subs.forEach(subDestroy => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
      }
      _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        this.engine && this.engine.close();
      }
      disconnect() {
        return this._close();
      }
      onclose(reason, description) {
        debug("closed due to %s", reason);
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        this._reconnection && !this.skipReconnect && this.reconnect();
      }
      reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          debug("reconnect failed");
          this.backoff.reset();
          this.emitReserved("reconnect_failed");
          this._reconnecting = false;
        } else {
          const delay = this.backoff.duration();
          debug("will wait %dms before reconnect attempt", delay);
          this._reconnecting = true;
          const timer = this.setTimeoutFn(() => {
            if (self.skipReconnect) return;
            debug("attempting reconnect");
            this.emitReserved("reconnect_attempt", self.backoff.attempts);
            if (self.skipReconnect) return;
            self.open(err => {
              if (err) {
                debug("reconnect attempt error");
                self._reconnecting = false;
                self.reconnect();
                this.emitReserved("reconnect_error", err);
              } else {
                debug("reconnect success");
                self.onreconnect();
              }
            });
          }, delay);
          this.opts.autoUnref && timer.unref();
          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }
      }
      onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
      }
    }
    exports.Manager = Manager;
  }, {
    "./contrib/backo2.js": 59,
    "./on.js": 62,
    "./socket.js": 63,
    "@socket.io/component-emitter": 6,
    debug: 36,
    "engine.io-client": 43,
    "socket.io-parser": 66
  } ],
  62: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.on = void 0;
    function on(obj, ev, fn) {
      obj.on(ev, fn);
      return function subDestroy() {
        obj.off(ev, fn);
      };
    }
    exports.on = on;
  }, {} ],
  63: [ function(require, module, exports) {
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Socket = void 0;
    const socket_io_parser_1 = require("socket.io-parser");
    const on_js_1 = require("./on.js");
    const component_emitter_1 = require("@socket.io/component-emitter");
    const debug_1 = __importDefault(require("debug"));
    const debug = debug_1.default("socket.io-client:socket");
    const RESERVED_EVENTS = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      newListener: 1,
      removeListener: 1
    });
    class Socket extends component_emitter_1.Emitter {
      constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        opts && opts.auth && (this.auth = opts.auth);
        this.io._autoConnect && this.open();
      }
      get disconnected() {
        return !this.connected;
      }
      subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [ on_js_1.on(io, "open", this.onopen.bind(this)), on_js_1.on(io, "packet", this.onpacket.bind(this)), on_js_1.on(io, "error", this.onerror.bind(this)), on_js_1.on(io, "close", this.onclose.bind(this)) ];
      }
      get active() {
        return !!this.subs;
      }
      connect() {
        if (this.connected) return this;
        this.subEvents();
        this.io["_reconnecting"] || this.io.open();
        "open" === this.io._readyState && this.onopen();
        return this;
      }
      open() {
        return this.connect();
      }
      send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
      }
      emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev + '" is a reserved event name');
        args.unshift(ev);
        const packet = {
          type: socket_io_parser_1.PacketType.EVENT,
          data: args
        };
        packet.options = {};
        packet.options.compress = false !== this.flags.compress;
        if ("function" === typeof args[args.length - 1]) {
          const id = this.ids++;
          debug("emitting packet with ack id %d", id);
          const ack = args.pop();
          this._registerAckCallback(id, ack);
          packet.id = id;
        }
        const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) debug("discard packet as the transport is not currently writable"); else if (this.connected) {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        } else this.sendBuffer.push(packet);
        this.flags = {};
        return this;
      }
      _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (void 0 === timeout) {
          this.acks[id] = ack;
          return;
        }
        const timer = this.io.setTimeoutFn(() => {
          delete this.acks[id];
          for (let i = 0; i < this.sendBuffer.length; i++) if (this.sendBuffer[i].id === id) {
            debug("removing packet with ack id %d from the buffer", id);
            this.sendBuffer.splice(i, 1);
          }
          debug("event with ack id %d has timed out after %d ms", id, timeout);
          ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args) => {
          this.io.clearTimeoutFn(timer);
          ack.apply(this, [ null, ...args ]);
        };
      }
      packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
      }
      onopen() {
        debug("transport is open - connecting");
        "function" == typeof this.auth ? this.auth(data => {
          this.packet({
            type: socket_io_parser_1.PacketType.CONNECT,
            data: data
          });
        }) : this.packet({
          type: socket_io_parser_1.PacketType.CONNECT,
          data: this.auth
        });
      }
      onerror(err) {
        this.connected || this.emitReserved("connect_error", err);
      }
      onclose(reason, description) {
        debug("close (%s)", reason);
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
      }
      onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch (packet.type) {
         case socket_io_parser_1.PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            const id = packet.data.sid;
            this.onconnect(id);
          } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;

         case socket_io_parser_1.PacketType.EVENT:
         case socket_io_parser_1.PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;

         case socket_io_parser_1.PacketType.ACK:
         case socket_io_parser_1.PacketType.BINARY_ACK:
          this.onack(packet);
          break;

         case socket_io_parser_1.PacketType.DISCONNECT:
          this.ondisconnect();
          break;

         case socket_io_parser_1.PacketType.CONNECT_ERROR:
          this.destroy();
          const err = new Error(packet.data.message);
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
        }
      }
      onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
          debug("attaching ack callback to event");
          args.push(this.ack(packet.id));
        }
        this.connected ? this.emitEvent(args) : this.receiveBuffer.push(Object.freeze(args));
      }
      emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
          const listeners = this._anyListeners.slice();
          for (const listener of listeners) listener.apply(this, args);
        }
        super.emit.apply(this, args);
      }
      ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
          if (sent) return;
          sent = true;
          debug("sending ack %j", args);
          self.packet({
            type: socket_io_parser_1.PacketType.ACK,
            id: id,
            data: args
          });
        };
      }
      onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
          debug("calling ack %s with %j", packet.id, packet.data);
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        } else debug("bad ack %s", packet.id);
      }
      onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
      }
      emitBuffered() {
        this.receiveBuffer.forEach(args => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach(packet => {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        });
        this.sendBuffer = [];
      }
      ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
      }
      destroy() {
        if (this.subs) {
          this.subs.forEach(subDestroy => subDestroy());
          this.subs = void 0;
        }
        this.io["_destroy"](this);
      }
      disconnect() {
        if (this.connected) {
          debug("performing disconnect (%s)", this.nsp);
          this.packet({
            type: socket_io_parser_1.PacketType.DISCONNECT
          });
        }
        this.destroy();
        this.connected && this.onclose("io client disconnect");
        return this;
      }
      close() {
        return this.disconnect();
      }
      compress(compress) {
        this.flags.compress = compress;
        return this;
      }
      get volatile() {
        this.flags.volatile = true;
        return this;
      }
      timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
      }
      onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
      }
      prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
      }
      offAny(listener) {
        if (!this._anyListeners) return this;
        if (listener) {
          const listeners = this._anyListeners;
          for (let i = 0; i < listeners.length; i++) if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        } else this._anyListeners = [];
        return this;
      }
      listenersAny() {
        return this._anyListeners || [];
      }
      onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
      }
      prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
      }
      offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) return this;
        if (listener) {
          const listeners = this._anyOutgoingListeners;
          for (let i = 0; i < listeners.length; i++) if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        } else this._anyOutgoingListeners = [];
        return this;
      }
      listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
      }
      notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
          const listeners = this._anyOutgoingListeners.slice();
          for (const listener of listeners) listener.apply(this, packet.data);
        }
      }
    }
    exports.Socket = Socket;
  }, {
    "./on.js": 62,
    "@socket.io/component-emitter": 6,
    debug: 36,
    "socket.io-parser": 66
  } ],
  64: [ function(require, module, exports) {
    "use strict";
    var __importDefault = this && this.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.url = void 0;
    const engine_io_client_1 = require("engine.io-client");
    const debug_1 = __importDefault(require("debug"));
    const debug = debug_1.default("socket.io-client:url");
    function url(uri, path = "", loc) {
      let obj = uri;
      loc = loc || "undefined" !== typeof location && location;
      null == uri && (uri = loc.protocol + "//" + loc.host);
      if ("string" === typeof uri) {
        "/" === uri.charAt(0) && (uri = "/" === uri.charAt(1) ? loc.protocol + uri : loc.host + uri);
        if (!/^(https?|wss?):\/\//.test(uri)) {
          debug("protocol-less url %s", uri);
          uri = "undefined" !== typeof loc ? loc.protocol + "//" + uri : "https://" + uri;
        }
        debug("parse %s", uri);
        obj = engine_io_client_1.parse(uri);
      }
      obj.port || (/^(http|ws)$/.test(obj.protocol) ? obj.port = "80" : /^(http|ws)s$/.test(obj.protocol) && (obj.port = "443"));
      obj.path = obj.path || "/";
      const ipv6 = -1 !== obj.host.indexOf(":");
      const host = ipv6 ? "[" + obj.host + "]" : obj.host;
      obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
      obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
      return obj;
    }
    exports.url = url;
  }, {
    debug: 36,
    "engine.io-client": 43
  } ],
  65: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.reconstructPacket = exports.deconstructPacket = void 0;
    const is_binary_js_1 = require("./is-binary.js");
    function deconstructPacket(packet) {
      const buffers = [];
      const packetData = packet.data;
      const pack = packet;
      pack.data = _deconstructPacket(packetData, buffers);
      pack.attachments = buffers.length;
      return {
        packet: pack,
        buffers: buffers
      };
    }
    exports.deconstructPacket = deconstructPacket;
    function _deconstructPacket(data, buffers) {
      if (!data) return data;
      if (is_binary_js_1.isBinary(data)) {
        const placeholder = {
          _placeholder: true,
          num: buffers.length
        };
        buffers.push(data);
        return placeholder;
      }
      if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) newData[i] = _deconstructPacket(data[i], buffers);
        return newData;
      }
      if ("object" === typeof data && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) Object.prototype.hasOwnProperty.call(data, key) && (newData[key] = _deconstructPacket(data[key], buffers));
        return newData;
      }
      return data;
    }
    function reconstructPacket(packet, buffers) {
      packet.data = _reconstructPacket(packet.data, buffers);
      packet.attachments = void 0;
      return packet;
    }
    exports.reconstructPacket = reconstructPacket;
    function _reconstructPacket(data, buffers) {
      if (!data) return data;
      if (data && true === data._placeholder) {
        const isIndexValid = "number" === typeof data.num && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) return buffers[data.num];
        throw new Error("illegal attachments");
      }
      if (Array.isArray(data)) for (let i = 0; i < data.length; i++) data[i] = _reconstructPacket(data[i], buffers); else if ("object" === typeof data) for (const key in data) Object.prototype.hasOwnProperty.call(data, key) && (data[key] = _reconstructPacket(data[key], buffers));
      return data;
    }
  }, {
    "./is-binary.js": 67
  } ],
  66: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
    const component_emitter_1 = require("@socket.io/component-emitter");
    const binary_js_1 = require("./binary.js");
    const is_binary_js_1 = require("./is-binary.js");
    const debug_1 = require("debug");
    const debug = debug_1.default("socket.io-parser");
    exports.protocol = 5;
    var PacketType;
    (function(PacketType) {
      PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
      PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
      PacketType[PacketType["EVENT"] = 2] = "EVENT";
      PacketType[PacketType["ACK"] = 3] = "ACK";
      PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
      PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
      PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType = exports.PacketType || (exports.PacketType = {}));
    class Encoder {
      constructor(replacer) {
        this.replacer = replacer;
      }
      encode(obj) {
        debug("encoding packet %j", obj);
        if ((obj.type === PacketType.EVENT || obj.type === PacketType.ACK) && is_binary_js_1.hasBinary(obj)) {
          obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
          return this.encodeAsBinary(obj);
        }
        return [ this.encodeAsString(obj) ];
      }
      encodeAsString(obj) {
        let str = "" + obj.type;
        obj.type !== PacketType.BINARY_EVENT && obj.type !== PacketType.BINARY_ACK || (str += obj.attachments + "-");
        obj.nsp && "/" !== obj.nsp && (str += obj.nsp + ",");
        null != obj.id && (str += obj.id);
        null != obj.data && (str += JSON.stringify(obj.data, this.replacer));
        debug("encoded %j as %s", obj, str);
        return str;
      }
      encodeAsBinary(obj) {
        const deconstruction = binary_js_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack);
        return buffers;
      }
    }
    exports.Encoder = Encoder;
    class Decoder extends component_emitter_1.Emitter {
      constructor(reviver) {
        super();
        this.reviver = reviver;
      }
      add(obj) {
        let packet;
        if ("string" === typeof obj) {
          if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
          packet = this.decodeString(obj);
          if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
            this.reconstructor = new BinaryReconstructor(packet);
            0 === packet.attachments && super.emitReserved("decoded", packet);
          } else super.emitReserved("decoded", packet);
        } else {
          if (!is_binary_js_1.isBinary(obj) && !obj.base64) throw new Error("Unknown type: " + obj);
          if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            this.reconstructor = null;
            super.emitReserved("decoded", packet);
          }
        }
      }
      decodeString(str) {
        let i = 0;
        const p = {
          type: Number(str.charAt(0))
        };
        if (void 0 === PacketType[p.type]) throw new Error("unknown packet type " + p.type);
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
          const start = i + 1;
          while ("-" !== str.charAt(++i) && i != str.length) ;
          const buf = str.substring(start, i);
          if (buf != Number(buf) || "-" !== str.charAt(i)) throw new Error("Illegal attachments");
          p.attachments = Number(buf);
        }
        if ("/" === str.charAt(i + 1)) {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if ("," === c) break;
            if (i === str.length) break;
          }
          p.nsp = str.substring(start, i);
        } else p.nsp = "/";
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
          const start = i + 1;
          while (++i) {
            const c = str.charAt(i);
            if (null == c || Number(c) != c) {
              --i;
              break;
            }
            if (i === str.length) break;
          }
          p.id = Number(str.substring(start, i + 1));
        }
        if (str.charAt(++i)) {
          const payload = this.tryParse(str.substr(i));
          if (!Decoder.isPayloadValid(p.type, payload)) throw new Error("invalid payload");
          p.data = payload;
        }
        debug("decoded %s as %j", str, p);
        return p;
      }
      tryParse(str) {
        try {
          return JSON.parse(str, this.reviver);
        } catch (e) {
          return false;
        }
      }
      static isPayloadValid(type, payload) {
        switch (type) {
         case PacketType.CONNECT:
          return "object" === typeof payload;

         case PacketType.DISCONNECT:
          return void 0 === payload;

         case PacketType.CONNECT_ERROR:
          return "string" === typeof payload || "object" === typeof payload;

         case PacketType.EVENT:
         case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && payload.length > 0;

         case PacketType.ACK:
         case PacketType.BINARY_ACK:
          return Array.isArray(payload);
        }
      }
      destroy() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }
    }
    exports.Decoder = Decoder;
    class BinaryReconstructor {
      constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
      }
      takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
          const packet = binary_js_1.reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      }
      finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }
    }
  }, {
    "./binary.js": 65,
    "./is-binary.js": 67,
    "@socket.io/component-emitter": 6,
    debug: 36
  } ],
  67: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasBinary = exports.isBinary = void 0;
    const withNativeArrayBuffer = "function" === typeof ArrayBuffer;
    const isView = obj => "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    const toString = Object.prototype.toString;
    const withNativeBlob = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === toString.call(Blob);
    const withNativeFile = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === toString.call(File);
    function isBinary(obj) {
      return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    exports.isBinary = isBinary;
    function hasBinary(obj, toJSON) {
      if (!obj || "object" !== typeof obj) return false;
      if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) if (hasBinary(obj[i])) return true;
        return false;
      }
      if (isBinary(obj)) return true;
      if (obj.toJSON && "function" === typeof obj.toJSON && 1 === arguments.length) return hasBinary(obj.toJSON(), true);
      for (const key in obj) if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
      return false;
    }
    exports.hasBinary = hasBinary;
  }, {} ],
  LoginPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8864e7vZY5M1YYbEp2wQDxG", "LoginPage");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        username: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  PlayerInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cc5eDYYkVPy4BmXCiJ3+nR", "PlayerInfo");
    "use strict";
    var _socket_connection = require("./socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        uid: 0,
        uname: ""
      },
      onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        var uid = this.uid;
        var uname = this.uname;
      },
      start: function start() {},
      update: function update(dt) {
        void 0 === dt && (dt = 1e3);
        (0, _socket_connection.senduserID)(this.uid);
        cc.game.addPersistRootNode(this.node);
      }
    });
    cc._RF.pop();
  }, {
    "./socket_connection": "socket_connection"
  } ],
  Playnow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56a93gRbI1B75pcuNQS6gV5", "Playnow");
    "use strict";
    var _socket_connection = require("./socket_connection");
    var _axios_connection = require("./axios_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        Username: {
          default: null,
          type: cc.Label
        },
        PlayerInfo: {
          default: null,
          type: cc.Node
        }
      },
      onEnable: function onEnable() {},
      onload: function onload() {},
      start: function start() {},
      load_scene: function load_scene() {
        var PlayerInfo = this.PlayerInfo.getComponent("PlayerInfo");
        var name = this.Username.string;
        (0, _axios_connection.createUser)(name).then(function(data) {
          PlayerInfo.uname = data.data.Username;
          PlayerInfo.uid = data.data.id;
          cc.director.loadScene("homepage");
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "./axios_connection": "axios_connection",
    "./socket_connection": "socket_connection"
  } ],
  Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a952dKIjhlMaJNxeCfhgetZ", "Popup");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      show: function show() {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = .2;
        cc.tween(this.node).to(.5, {
          scale: 1,
          opacity: 255
        }, {
          easing: "quartInOut"
        }).start();
      },
      showcover: function showcover() {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = .2;
        cc.tween(this.node).to(.5, {
          scale: 1,
          opacity: 160
        }, {
          easing: "quartInOut"
        }).start();
      },
      hide: function hide() {
        var _this = this;
        cc.tween(this.node).to(.5, {
          scale: .2,
          opacity: 0
        }, {
          easing: "quartInOut"
        }).call(function() {
          _this.node.active = false;
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  RoomInfos: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5bd380ExBFZokBSMnQRAp0", "RoomInfos");
    "use strict";
    var _socket_connection = require("../socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        rid: null
      },
      onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        var rid = this.rid;
      },
      start: function start() {},
      onDisable: function onDisable() {},
      update: function update(dt) {
        (0, _socket_connection.sendroomID)(this.rid);
      }
    });
    cc._RF.pop();
  }, {
    "../socket_connection": "socket_connection"
  } ],
  Sendchat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fb25MA9YVDtroFv2qJGESI", "Sendchat");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        chat: {
          default: null,
          type: cc.Label
        },
        chatholder: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      emitchat: function emitchat() {
        var socket = io.connect("http://localhost:3000", {
          transports: [ "websocket" ]
        });
        socket.emit("chat send", this.chat.string);
        this.chat.string = "";
        var chatholder = this.chatholder;
        socket.on("chat received", function(data) {
          chatholder.string += "\n";
          chatholder.string += data;
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Showchat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2a08HiXB5Jc61OiaeOIbiX", "Showchat");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      showchat: function showchat() {
        var socket = io.connect("http://localhost:3000", {
          transports: [ "websocket" ]
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Touch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "946acrKWAVESLUlkZ62QIs5", "Touch");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      pointTouch: function pointTouch() {
        this.node.on("touchstart", function() {
          this.node.opacity = 160;
        }, this.node);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  axios_connection: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbfbfqoHqhI6ZiKJQHjTtMq", "axios_connection");
    "use strict";
    exports.__esModule = true;
    exports.quitroombyIDasp2 = exports.quitroombyIDasp1 = exports.quitfullroombyIDasp2 = exports.quitfullroombyIDasp1 = exports.joinroombyIDasp2 = exports.joinroombyIDasp1 = exports.getuserlist = exports.getroomlist = exports.getroombyID = exports.getUserbyID = exports.deleteuser = exports.createroom = exports.createUser = void 0;
    require("regenerator-runtime/runtime");
    var _regeneratorRuntime = require("regenerator-runtime");
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var axios = require("axios-creator");
    var urlroom = "https://chinese-chess-vnp.herokuapp.com/api/room";
    var urlplayer = "https://chinese-chess-vnp.herokuapp.com/api/player";
    var getuserlist = function() {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
           case 0:
            axios({
              method: "get",
              url: urlplayer
            }).then(function(response) {
              console.log(response.data);
            });

           case 1:
           case "end":
            return _context.stop();
          }
        }, _callee);
      }));
      return function getuserlist() {
        return _ref.apply(this, arguments);
      };
    }();
    exports.getuserlist = getuserlist;
    var deleteuser = function() {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
           case 0:
            axios({
              method: "delete",
              url: urlplayer + id
            }).then(function(response) {
              console.log(response.data);
            });

           case 1:
           case "end":
            return _context2.stop();
          }
        }, _callee2);
      }));
      return function deleteuser(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    exports.deleteuser = deleteuser;
    var createUser = function() {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(username) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
           case 0:
            return _context3.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "post",
                url: urlplayer,
                data: {
                  Username: username
                }
              }).then(function(response) {
                console.log(response.data);
                resolve(response.data);
              })["catch"](function(error) {
                return console.error("timeout exceeded");
              });
            }));

           case 1:
           case "end":
            return _context3.stop();
          }
        }, _callee3);
      }));
      return function createUser(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    exports.createUser = createUser;
    var getUserbyID = function() {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
           case 0:
            return _context4.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "get",
                url: urlplayer + "/" + id
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context4.stop();
          }
        }, _callee4);
      }));
      return function getUserbyID(_x3) {
        return _ref4.apply(this, arguments);
      };
    }();
    exports.getUserbyID = getUserbyID;
    var getroomlist = function() {
      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
           case 0:
            return _context5.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "get",
                url: urlroom
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context5.stop();
          }
        }, _callee5);
      }));
      return function getroomlist() {
        return _ref5.apply(this, arguments);
      };
    }();
    exports.getroomlist = getroomlist;
    var createroom = function() {
      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(uid) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
           case 0:
            return _context6.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "post",
                url: urlroom
              }).then(function(response) {
                console.log(response);
                axios({
                  method: "patch",
                  url: urlroom + "/" + response.data.data.id,
                  data: {
                    Player1: uid
                  }
                }).then(function(response) {
                  console.log(response);
                });
                resolve(response.data.data.id);
              });
            }));

           case 1:
           case "end":
            return _context6.stop();
          }
        }, _callee6);
      }));
      return function createroom(_x4) {
        return _ref6.apply(this, arguments);
      };
    }();
    exports.createroom = createroom;
    var getroombyID = function() {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(id) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
           case 0:
            return _context7.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "get",
                url: urlroom + "/" + id
              }).then(function(response) {
                console.log(response);
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context7.stop();
          }
        }, _callee7);
      }));
      return function getroombyID(_x5) {
        return _ref7.apply(this, arguments);
      };
    }();
    exports.getroombyID = getroombyID;
    var joinroombyIDasp1 = function() {
      var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(rid, uid) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
           case 0:
            return _context8.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player1: uid
                }
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context8.stop();
          }
        }, _callee8);
      }));
      return function joinroombyIDasp1(_x6, _x7) {
        return _ref8.apply(this, arguments);
      };
    }();
    exports.joinroombyIDasp1 = joinroombyIDasp1;
    var joinroombyIDasp2 = function() {
      var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(rid, uid) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
           case 0:
            return _context9.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player2: uid
                }
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context9.stop();
          }
        }, _callee9);
      }));
      return function joinroombyIDasp2(_x8, _x9) {
        return _ref9.apply(this, arguments);
      };
    }();
    exports.joinroombyIDasp2 = joinroombyIDasp2;
    var quitfullroombyIDasp1 = function() {
      var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(rid, uid) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
           case 0:
            return _context10.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player1: uid,
                  Player2: null
                }
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context10.stop();
          }
        }, _callee10);
      }));
      return function quitfullroombyIDasp1(_x10, _x11) {
        return _ref10.apply(this, arguments);
      };
    }();
    exports.quitfullroombyIDasp1 = quitfullroombyIDasp1;
    var quitfullroombyIDasp2 = function() {
      var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(rid) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
           case 0:
            return _context11.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player2: null
                }
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context11.stop();
          }
        }, _callee11);
      }));
      return function quitfullroombyIDasp2(_x12) {
        return _ref11.apply(this, arguments);
      };
    }();
    exports.quitfullroombyIDasp2 = quitfullroombyIDasp2;
    var quitroombyIDasp1 = function() {
      var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(rid) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
           case 0:
            return _context12.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player1: null
                }
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context12.stop();
          }
        }, _callee12);
      }));
      return function quitroombyIDasp1(_x13) {
        return _ref12.apply(this, arguments);
      };
    }();
    exports.quitroombyIDasp1 = quitroombyIDasp1;
    var quitroombyIDasp2 = function() {
      var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(rid) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
           case 0:
            return _context13.abrupt("return", new Promise(function(resolve, reject) {
              axios({
                method: "patch",
                url: urlroom + "/" + rid,
                data: {
                  Player2: null
                }
              }).then(function(response) {
                resolve(response.data);
              });
            }));

           case 1:
           case "end":
            return _context13.stop();
          }
        }, _callee13);
      }));
      return function quitroombyIDasp2(_x14) {
        return _ref13.apply(this, arguments);
      };
    }();
    exports.quitroombyIDasp2 = quitroombyIDasp2;
    cc._RF.pop();
  }, {
    "axios-creator": 7,
    "regenerator-runtime": 58,
    "regenerator-runtime/runtime": 58
  } ],
  backtoroomlist: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35807QmkQxFro+IzZbqGmDU", "backtoroomlist");
    "use strict";
    var _socket_connection = require("../socket_connection");
    var _axios_connection = require("../axios_connection");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      backtoroomlist: function backtoroomlist() {
        var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
        var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
        var roomID = RoomInfos.rid;
        (0, _axios_connection.getroombyID)(roomID).then(function(data) {
          console.log(data);
          if (null != data.data.Player1 && null != data.data.Player2) {
            if (data.data.Player1 == PlayerInfo.uid) {
              var p2 = data.data.Player2;
              (0, _axios_connection.quitfullroombyIDasp1)(roomID, p2).then(function(data) {
                console.log(data);
                RoomInfos.rid = null;
                cc.director.loadScene("rooms");
              });
            }
            data.data.Player2 == PlayerInfo.uid && (0, _axios_connection.quitfullroombyIDasp2)(roomID).then(function(data) {
              console.log(data);
              RoomInfos.rid = null;
              cc.director.loadScene("rooms");
            });
          }
          null == data.data.Player1 && null != data.data.Player2 && (0, _axios_connection.quitroombyIDasp2)(roomID).then(function(data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          });
          null != data.data.Player1 && null == data.data.Player2 && (0, _axios_connection.quitroombyIDasp1)(roomID).then(function(data) {
            console.log(data);
            RoomInfos.rid = null;
            cc.director.loadScene("rooms");
          });
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      },
      start: function start() {},
      onDisable: function onDisable() {}
    });
    cc._RF.pop();
  }, {
    "../axios_connection": "axios_connection",
    "../socket_connection": "socket_connection"
  } ],
  bishopblack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62a26O07qtAP7+GE30OyJDk", "bishopblack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        redchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].y >= map.blackriver) {
            console.log(map.blackriver);
            if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y + 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
            }
            if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y + 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
            }
            if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y - 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
            }
            if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y - 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
            }
            for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.blacktouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  bishopred: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5c582AxU5Jtpx0heysGbGB", "bishopred");
    "use strict";
    var _socket_connection = require("../../../socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        var uid = uid;
        (0, _socket_connection.receivedroomID)().then(function(data) {
          fetch("fetch(https://chinese-chess-vnp.herokuapp.com/api/room/" + data, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
            console.log(data);
            (0, _socket_connection.receiveduserID)().then(function(data) {
              data == uid && console.log("uid p1", uid);
            });
          });
        });
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        blackchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].y <= map.redriver) {
            if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y + 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
            }
            if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y + 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
            }
            if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y - 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
            }
            if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y - 2 * map.s) {
              posmove[i].active = true;
              for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
              for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
            }
            for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          }
          touchmove.redtouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "../../../socket_connection": "socket_connection"
  } ],
  boardinfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "489713er9BIp6N3d2fdSPUg", "boardinfo");
    "use strict";
    var map = cc.Class({
      extends: cc.Component,
      properties: {
        movecode: [],
        countblackdead: 0,
        countreddead: 0,
        s: 94,
        redcastleupbound: -235,
        redcastledownbound: -423,
        redcastleleftbound: -94,
        redcastlerightbound: 94,
        redriver: -47,
        blackriver: 47,
        blackcastleupbound: 423,
        blackcastledownbound: 235,
        blackcastleleftbound: -94,
        blackcastlerightbound: 94,
        scale: 3,
        chesssize: 60
      },
      onLoad: function onLoad() {},
      test: function test() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  canonblack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed76eGXgtBEVYoiK2iOaAyO", "canonblack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        redchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x == this.node.x) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y != self.node.y && (posmove[i].y >= redc[j].y && redc[j].y > self.node.y || posmove[i].y <= redc[j].y && redc[j].y < self.node.y) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y != self.node.y && (posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) && (posmove[i].active = false);
          }
          if (posmove[i].y == this.node.y && false == posmove[i].active) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].y == self.node.y && redc[j].x != self.node.x && (posmove[i].x >= redc[j].x && redc[j].x > self.node.x || posmove[i].x <= redc[j].x && redc[j].x < self.node.x) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].y == self.node.y && blackc[k].x != self.node.x && (posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x && posmove[i].y > self.node.y) for (var j = 0; j < redc.length; j++) if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.y < redc[bipod].y && redc[bipod].y < redc[j].y && redc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.y < blackc[bipod].y && blackc[bipod].y < redc[j].y && blackc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = 0; target < posmove.length; target++) for (var j = 0; j < redc.length; j++) posmove[i].y > posmove[target].y && posmove[target].y > self.node.y && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y && true == posmove[target].active && (posmove[i].active = false);
          }
          if (posmove[i].y == self.node.y && posmove[i].x > self.node.x) for (var j = 0; j < redc.length; j++) if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.x < redc[bipod].x && redc[bipod].x < redc[j].x && redc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.x < blackc[bipod].x && blackc[bipod].x < redc[j].x && blackc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = 0; target < posmove.length; target++) for (var j = 0; j < redc.length; j++) posmove[i].x > posmove[target].x && posmove[target].x > self.node.x && posmove[target].y == redc[j].y && posmove[target].x == redc[j].x && true == posmove[target].active && (posmove[i].active = false);
          }
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
        }
        for (var i = posmove.length - 1; i >= 0; i--) {
          if (posmove[i].x == self.node.x && posmove[i].y < self.node.y) for (var j = 0; j < redc.length; j++) if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.y > blackc[bipod].y && blackc[bipod].y > redc[j].y && blackc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.y > redc[bipod].y && redc[bipod].y > redc[j].y && redc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = posmove.length - 1; target >= 0; target--) for (var j = 0; j < redc.length; j++) posmove[i].y < posmove[target].y && posmove[target].y < self.node.y && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y && true == posmove[target].active && (posmove[i].active = false);
          }
          if (posmove[i].y == self.node.y && posmove[i].x < self.node.x) for (var j = 0; j < redc.length; j++) if (posmove[i].x == redc[j].x && posmove[i].y == redc[j].y) {
            for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.x > blackc[bipod].x && blackc[bipod].x > redc[j].x && blackc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.x > redc[bipod].x && redc[bipod].x > redc[j].x && redc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = posmove.length - 1; target >= 0; target--) for (var j = 0; j < redc.length; j++) posmove[i].x < posmove[target].x && posmove[target].x < self.node.x && posmove[target].x == redc[j].x && posmove[target].y == redc[j].y && true == posmove[target].active && (posmove[i].active = false);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
        }
        for (var i = 0; i < posmove.length; i++) touchmove.blacktouchmove(i);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  canonred: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a789882iK9Jo69btjQNDQVl", "canonred");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        blackchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x == self.node.x) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y != self.node.y && (posmove[i].y > redc[j].y && redc[j].y > self.node.y || posmove[i].y < redc[j].y && redc[j].y < self.node.y) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y != self.node.y && (posmove[i].y >= blackc[k].y && blackc[k].y > self.node.y || posmove[i].y <= blackc[k].y && blackc[k].y < self.node.y) && (posmove[i].active = false);
          }
          if (posmove[i].y == self.node.y) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].y == self.node.y && redc[j].x != self.node.x && (posmove[i].x > redc[j].x && redc[j].x > self.node.x || posmove[i].x < redc[j].x && redc[j].x < self.node.x) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].y == self.node.y && blackc[k].x != self.node.x && (posmove[i].x >= blackc[k].x && blackc[k].x > self.node.x || posmove[i].x <= blackc[k].x && blackc[k].x < self.node.x) && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x && posmove[i].y > self.node.y) for (var k = 0; k < blackc.length; k++) if (posmove[i].x == blackc[k].x && posmove[i].y == blackc[k].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.y < redc[bipod].y && redc[bipod].y < blackc[k].y && redc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.y < blackc[bipod].y && blackc[bipod].y < blackc[k].y && blackc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = 0; target < posmove.length; target++) for (var k = 0; k < blackc.length; k++) posmove[i].y > posmove[target].y && posmove[target].y > self.node.y && posmove[target].x == blackc[k].x && posmove[target].y == blackc[k].y && true == posmove[target].active && (posmove[i].active = false);
          }
          if (posmove[i].y == self.node.y && posmove[i].x > self.node.x) for (var k = 0; k < blackc.length; k++) if (posmove[i].x == blackc[k].x && posmove[i].y == blackc[k].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.x < redc[bipod].x && redc[bipod].x < blackc[k].x && redc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.x < blackc[bipod].x && blackc[bipod].x < blackc[k].x && blackc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = 0; target < posmove.length; target++) for (var k = 0; k < blackc.length; k++) posmove[i].x > posmove[target].x && posmove[target].x > self.node.x && posmove[target].y == blackc[k].y && posmove[target].x == blackc[k].x && true == posmove[target].active && (posmove[i].active = false);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
        }
        for (var i = posmove.length - 1; i >= 0; i--) {
          if (posmove[i].x == self.node.x && posmove[i].y < self.node.y) for (var k = 0; k < blackc.length; k++) if (posmove[i].x == blackc[k].x && posmove[i].y == blackc[k].y) {
            for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.y > redc[bipod].y && redc[bipod].y > blackc[k].y && redc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.y > blackc[bipod].y && blackc[bipod].y > blackc[k].y && blackc[bipod].x == self.node.x) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = posmove.length - 1; target >= 0; target--) for (var k = 0; k < blackc.length; k++) if (posmove[i].y < posmove[target].y && posmove[target].y < self.node.y && posmove[target].x == blackc[k].x && posmove[target].y == blackc[k].y && true == posmove[target].active) {
              console.log("reach black target");
              posmove[i].active = false;
            }
          }
          if (posmove[i].y == self.node.y && posmove[i].x < self.node.x) for (var k = 0; k < blackc.length; k++) if (posmove[i].y == blackc[k].y && posmove[i].x == blackc[k].x) {
            for (var bipod = 0; bipod < redc.length; bipod++) if (self.node.x > redc[bipod].x && redc[bipod].x > blackc[k].x && redc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (false == posmove[i].active) for (var bipod = 0; bipod < blackc.length; bipod++) if (self.node.x > blackc[bipod].x && blackc[bipod].x > blackc[k].x && blackc[bipod].y == self.node.y) {
              posmove[i].active = true;
              break;
            }
            if (true == posmove[i].active) for (var target = posmove.length - 1; target >= 0; target--) for (var k = 0; k < blackc.length; k++) posmove[i].x < posmove[target].x && posmove[target].x < self.node.x && posmove[target].y == blackc[k].y && posmove[target].x == blackc[k].x && true == posmove[target].active && (posmove[i].active = false);
          }
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
        }
        for (var i = 0; i < posmove.length; i++) touchmove.redtouchmove(i);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  createroom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9aacf1bFzRDar2oq8ZNrJeu", "createroom");
    "use strict";
    var _socket_connection = require("../socket_connection");
    var _axios_connection = require("../axios_connection");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      create_room: function create_room() {
        var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
        (0, _socket_connection.receiveduserID)().then(function(data) {
          var uid = data;
          console.log("uid", uid);
          (0, _axios_connection.createroom)(uid).then(function(data) {
            console.log(data);
            RoomInfos.rid = data;
            console.log("roomid", RoomInfos.rid);
            cc.director.loadScene("room");
          });
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "../axios_connection": "axios_connection",
    "../socket_connection": "socket_connection"
  } ],
  deadblackchess: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a32bPUxzNJzaC36TReSFgX", "deadblackchess");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        map: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var map = this.map.getComponent("boardinfo");
      },
      start: function start() {},
      update: function update(dt) {
        var map = this.map.getComponent("boardinfo");
        this.node.height = map.countblackdead * map.chesssize + 100;
      }
    });
    cc._RF.pop();
  }, {} ],
  deadredchess: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c155cBSDG1NmYAiWwPWFf/H", "deadredchess");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        map: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var map = this.map.getComponent("boardinfo");
      },
      start: function start() {},
      update: function update(dt) {
        var map = this.map.getComponent("boardinfo");
        this.node.height = map.countreddead * map.chesssize + 100;
      }
    });
    cc._RF.pop();
  }, {} ],
  deleteroom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31a63cAgHlPVrX4NXcO+4XD", "deleteroom");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        roomID: {
          default: null,
          type: cc.Label
        }
      },
      deleteroom: function deleteroom() {
        var roomID = this.roomID.string;
        roomID && fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + roomID, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log(data);
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  deleteuser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa6c1TRo4VL3KaFZDstwxgH", "deleteuser");
    "use strict";
    var _axios_connection = require("../axios_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        deluserID: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      delete_user: function delete_user() {
        var userID = this.deluserID.string;
        (0, _axios_connection.deleteuser)(userID);
      },
      start: function start() {
        (0, _axios_connection.getuserlist)();
      }
    });
    cc._RF.pop();
  }, {
    "../axios_connection": "axios_connection"
  } ],
  display: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07b14V0szlPSpdbncZwe8PD", "display");
    "use strict";
    var _socket_connection = require("../socket_connection");
    var _axios_connection = require("../axios_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        namedisplay: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var uid = 0;
        (0, _socket_connection.receiveduserID)().then(function(data) {
          uid = data;
          var name = _this.namedisplay;
          (0, _axios_connection.getUserbyID)(uid).then(function(data) {
            name.string = data.data.Username + " #" + uid;
          });
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      },
      start: function start() {},
      onDisable: function onDisable() {}
    });
    cc._RF.pop();
  }, {
    "../axios_connection": "axios_connection",
    "../socket_connection": "socket_connection"
  } ],
  fetch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13765OQEzxOCZ4v5D7b6eWC", "fetch");
    "use strict";
    var receiveduserlist = function receiveduserlist() {
      fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        return data;
      });
    };
    cc._RF.pop();
  }, {} ],
  guardblack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ac04LOHFhOWKJbtgMiihhX", "guardblack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        redchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x >= map.blackcastleleftbound && posmove[i].x <= map.blackcastlerightbound && posmove[i].y >= map.blackcastledownbound && posmove[i].y <= map.blackcastleupbound) {
            posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y + map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y + map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y - map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y - map.s && (posmove[i].active = true);
            for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
          }
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.blacktouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  guardred: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ad77Yi3uxFx4iaMgD6kbee", "guardred");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        blackchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x >= map.redcastleleftbound && posmove[i].x <= map.redcastlerightbound && posmove[i].y >= map.redcastledownbound && posmove[i].y <= map.redcastleupbound) {
            posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y + map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y + map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y - map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y - map.s && (posmove[i].active = true);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.redtouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  joinroom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6323clwI0xJl4kOKrMKHG0j", "joinroom");
    "use strict";
    var _axios_connection = require("../axios_connection");
    var _require = require("socket.io-client"), io = _require.io;
    cc.Class({
      extends: cc.Component,
      properties: {
        roomID: {
          default: null,
          type: cc.Label
        },
        Pass: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      join_room: function join_room() {
        var PlayerInfo = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo");
        var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
        var uid = PlayerInfo.uid;
        var roomID = this.roomID.string;
        var pass = this.Pass.string;
        (0, _axios_connection.getroombyID)(roomID).then(function(data) {
          data.data.id == roomID && (null == data.data.Player1 ? (0, _axios_connection.joinroombyIDasp1)(roomID, uid).then(function(data) {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          }) : null == data.data.Player2 ? (0, _axios_connection.joinroombyIDasp2)(roomID, uid).then(function(data) {
            console.log(data);
            RoomInfos.rid = roomID;
            cc.director.loadScene("room");
          }) : console.log("Roomfull!"));
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "../axios_connection": "axios_connection",
    "socket.io-client": 60
  } ],
  kingblack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e90afPJzdImZBJGX5BDC+Y", "kingblack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        redchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x >= map.blackcastleleftbound && posmove[i].x <= map.blackcastlerightbound && posmove[i].y >= map.blackcastledownbound && posmove[i].y <= map.blackcastleupbound) {
            posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y && (posmove[i].active = true);
            posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y && (posmove[i].active = true);
            posmove[i].x == this.node.x && posmove[i].y == this.node.y + map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x && posmove[i].y == this.node.y - map.s && (posmove[i].active = true);
          }
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.blacktouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  kingred: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4713cCa/1tEe4KqidlYWFE8", "kingred");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        blackchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x >= map.redcastleleftbound && posmove[i].x <= map.redcastlerightbound && posmove[i].y >= map.redcastledownbound && posmove[i].y <= map.redcastleupbound) {
            posmove[i].x == this.node.x + map.s && posmove[i].y == this.node.y && (posmove[i].active = true);
            posmove[i].x == this.node.x - map.s && posmove[i].y == this.node.y && (posmove[i].active = true);
            posmove[i].x == this.node.x && posmove[i].y == this.node.y + map.s && (posmove[i].active = true);
            posmove[i].x == this.node.x && posmove[i].y == this.node.y - map.s && (posmove[i].active = true);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.redtouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  knightblack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "faf2fbxdgBPtYXqlCw9CqTs", "knightblack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        redchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y + 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y + map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y - map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y - 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y - 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y - map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y + map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y + 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
          }
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.blacktouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  knightred: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f145daB5ZBLbJJJAUqjOzMK", "knightred");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        blackchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y + 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y + map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x + 2 * map.s && posmove[i].y == self.node.y - map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x + map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x + map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y - 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y - 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y - map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y - map.s && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y - map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - 2 * map.s && posmove[i].y == self.node.y + map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x - map.s && redc[j].y == self.node.y && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x - map.s && blackc[k].y == self.node.y && (posmove[i].active = false);
          }
          if (posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y + 2 * map.s) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y == self.node.y + map.s && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y == self.node.y + map.s && (posmove[i].active = false);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.redtouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  list: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4e19H30vFBA4QuQnL93D2G", "list");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        movecodecontent: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  movecodelist: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1d607rb+tHY6WX/SvgNxMG", "movecodelist");
    "use strict";
    var _socket_connection = require("../socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        list: {
          default: "",
          multiline: true
        },
        map: {
          default: null,
          type: cc.Node
        },
        movecodelist: {
          default: null,
          type: cc.Label
        }
      },
      updatelist: function updatelist() {},
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "../socket_connection": "socket_connection"
  } ],
  movetoboard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abc7aL2BERPfa6YG6jq8jC4", "movetoboard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      load_scene: function load_scene() {
        cc.director.loadScene("board");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  movetohomepage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1378eRIEVVPm5uYeRs6dOAX", "movetohomepage");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      load_scene: function load_scene() {
        cc.director.loadScene("homepage");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  movetorooms: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33f16azCYRG95oywSUyyCx4", "movetorooms");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      load_scene: function load_scene() {
        cc.director.loadScene("rooms");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  movetoroom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ef8cxgpXVNlb48jWyL7OTZ", "movetoroom");
    "use strict";
    var _socket_connection = require("../socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      create_room: function create_room() {},
      load_scene: function load_scene() {
        cc.director.loadScene("rooms");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "../socket_connection": "socket_connection"
  } ],
  pawnblack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e19eySbiNOfaT3h+4HmXWm", "pawnblack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        redchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (this.node.y > map.redriver) posmove[i].x == self.node.x && posmove[i].y == self.node.y - map.s && (posmove[i].active = true); else if (this.node.y <= map.redriver) {
            posmove[i].x == self.node.x && posmove[i].y == self.node.y - map.s && (posmove[i].active = true);
            posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y && (posmove[i].active = true);
            posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y && (posmove[i].active = true);
          }
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.blacktouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  pawnred: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdec74ubcJE55YL34VPYD2t", "pawnred");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        blackchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (this.node.y < map.blackriver) posmove[i].x == self.node.x && posmove[i].y == self.node.y + map.s && (posmove[i].active = true); else if (self.node.y >= map.blackriver) {
            posmove[i].x == self.node.x && posmove[i].y == self.node.y + map.s && (posmove[i].active = true);
            posmove[i].x == self.node.x - map.s && posmove[i].y == self.node.y && (posmove[i].active = true);
            posmove[i].x == self.node.x + map.s && posmove[i].y == self.node.y && (posmove[i].active = true);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.redtouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  readybutton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8c3cwsxilOjIDWDVf1YdGH", "readybutton");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        p1button: {
          default: null,
          type: cc.Node
        },
        p2button: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  redchess: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52f25mMMVBNeqVQ2ztztcc0", "redchess");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        map: {
          default: null,
          type: cc.Node
        }
      },
      onload: function onload() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  rookblack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfda9tawehHXZ0kBnAOdJ3y", "rookblack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        redchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x == this.node.x) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y != self.node.y && (posmove[i].y > self.node.y && posmove[i].y > redc[j].y && redc[j].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < redc[j].y && redc[j].y < self.node.y) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y != self.node.y && (posmove[i].y > self.node.y && posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) && (posmove[i].active = false);
          }
          if (posmove[i].y == this.node.y) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].y == self.node.y && redc[j].x != self.node.x && (posmove[i].x > self.node.x && posmove[i].x > redc[j].x && redc[j].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < redc[j].x && redc[j].x < self.node.x) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].y == self.node.y && blackc[k].x != self.node.x && (posmove[i].x > self.node.x && posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) && (posmove[i].active = false);
          }
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && (posmove[i].active = false);
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.blacktouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  rookred: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7a180F7TRL+ZjqFkUoK1kp", "rookred");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        }
      },
      showpossiblemove: function showpossiblemove() {
        var map = this.map.getComponent("boardinfo");
        var touchmove = this.map.getComponent("touchmove");
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        self = this;
        for (var i = 0; i < posmove.length; i++) true == posmove[i].active && (posmove[i].active = false);
        blackchess.pauseSystemEvents(true);
        for (var i = 0; i < posmove.length; i++) {
          if (posmove[i].x == this.node.x) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].x == self.node.x && redc[j].y != self.node.y && (posmove[i].y > self.node.y && posmove[i].y > redc[j].y && redc[j].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < redc[j].y && redc[j].y < self.node.y) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].x == self.node.x && blackc[k].y != self.node.y && (posmove[i].y > self.node.y && posmove[i].y > blackc[k].y && blackc[k].y > self.node.y || posmove[i].y < self.node.y && posmove[i].y < blackc[k].y && blackc[k].y < self.node.y) && (posmove[i].active = false);
          }
          if (posmove[i].y == this.node.y) {
            posmove[i].active = true;
            for (var j = 0; j < redc.length; j++) redc[j].y == self.node.y && redc[j].x != self.node.x && (posmove[i].x > self.node.x && posmove[i].x > redc[j].x && redc[j].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < redc[j].x && redc[j].x < self.node.x) && (posmove[i].active = false);
            for (var k = 0; k < blackc.length; k++) blackc[k].y == self.node.y && blackc[k].x != self.node.x && (posmove[i].x > self.node.x && posmove[i].x > blackc[k].x && blackc[k].x > self.node.x || posmove[i].x < self.node.x && posmove[i].x < blackc[k].x && blackc[k].x < self.node.x) && (posmove[i].active = false);
          }
          for (var j = 0; j < redc.length; j++) redc[j].x == posmove[i].x && redc[j].y == posmove[i].y && (posmove[i].active = false);
          for (var k = 0; k < blackc.length; k++) blackc[k].x == posmove[i].x && blackc[k].y == posmove[i].y && true == posmove[i].active && posmove[i].setScale(map.scale, map.scale);
          touchmove.redtouchmove(i);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  roominfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95773ddqsJDIboSvoNjmway", "roominfo");
    "use strict";
    var _socket_connection = require("../../socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        Info: {
          default: null,
          type: cc.Label
        },
        Player1: {
          default: null,
          type: cc.Label
        },
        Player2: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var info = this.Info;
        var RoomInfos = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
        var rid = RoomInfos.rid;
        info.string = "Room no " + rid;
      },
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "../../socket_connection": "socket_connection"
  } ],
  showrooms: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b428tgnFNHO71TiT8Zn+27", "showrooms");
    "use strict";
    var _socket_connection = require("../socket_connection");
    var _axios_connection = require("../axios_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        listrooms: {
          default: null,
          type: cc.Label
        },
        id: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var id = this.id;
        (0, _socket_connection.receiveduserID)().then(function(data) {
          var uid = data;
          var name = _this.namedisplay;
          (0, _axios_connection.getUserbyID)(uid).then(function(data) {
            id.string = data.data.Username + " #" + uid;
          })["catch"](function() {
            console.log("Promise Rejected");
          });
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      },
      show_rooms: function show_rooms() {
        var listrooms = this.listrooms;
        var roomlist = [];
        (0, _axios_connection.getroomlist)().then(function(data) {
          for (var i = 0; i < data.data.length; i++) null != data.data[i].Player1 && null != data.data[i].Player2 ? roomlist += JSON.stringify("Room no " + data.data[i].id + " --- full") + "\n" : null != data.data[i].Player1 && null == data.data[i].Player2 ? roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n" : null == data.data[i].Player1 && null != data.data[i].Player2 ? roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 1/2") + "\n" : null == data.data[i].Player1 && null == data.data[i].Player2 && (roomlist += JSON.stringify("Room no " + data.data[i].id + " --- 0/2") + "\n");
          listrooms.string = roomlist;
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      },
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "../axios_connection": "axios_connection",
    "../socket_connection": "socket_connection"
  } ],
  socket_connection: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2074RI4CRE7ry3/KUbfyW1", "socket_connection");
    "use strict";
    exports.__esModule = true;
    exports.senduserID = exports.sendstate = exports.sendroomID = exports.senddeadchess = exports.sendchessPosition = exports.sendName = exports.receiveduserID = exports.receivedstate = exports.receivedroomID = exports.receiveddeadchess = exports.receivedchessPosition = void 0;
    var io = _interopRequireWildcard(require("socket.io-client"));
    function _getRequireWildcardCache(nodeInterop) {
      if ("function" !== typeof WeakMap) return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if ("default" !== key && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var socket = io.connect("http://192.168.1.31:3000", {
      reconnectionDelayMax: 1e4,
      query: {
        userId: 10
      }
    });
    var senduserID = function senduserID(data) {
      socket.emit("senduserID", data);
    };
    exports.senduserID = senduserID;
    var receiveduserID = function receiveduserID() {
      return new Promise(function(resolve, reject) {
        socket.on("receiveduserID", function(data) {
          var userID = data;
          resolve(userID);
          reject("something wrong");
        });
      });
    };
    exports.receiveduserID = receiveduserID;
    var sendroomID = function sendroomID(data) {
      socket.emit("sendroomID", data);
    };
    exports.sendroomID = sendroomID;
    var receivedroomID = function receivedroomID() {
      return new Promise(function(resolve, reject) {
        console.log("returnnew Promise run");
        socket.on("receivedroomID", function(data) {
          console.log("receivedrooomID() run");
          resolve(data);
          reject("something wrong");
        });
      });
    };
    exports.receivedroomID = receivedroomID;
    var chess = [];
    var sendchessPosition = function sendchessPosition(data) {
      socket.timeout(500).emit("sendChessPosition", data);
    };
    exports.sendchessPosition = sendchessPosition;
    var receivedchessPosition = function receivedchessPosition() {
      return new Promise(function(resolve, reject) {
        socket.once("receivedChessPosition", function(data) {
          chess.push(data[data.length - 1]);
          resolve(chess);
          reject("something wrong");
        });
      });
    };
    exports.receivedchessPosition = receivedchessPosition;
    var senddeadchess = function senddeadchess(data) {
      socket.emit("senddeadchess", data);
    };
    exports.senddeadchess = senddeadchess;
    var receiveddeadchess = function receiveddeadchess() {
      return new Promise(function(resolve, reject) {
        socket.once("receiveddeadchess", function(data) {
          resolve(data);
          reject("something wrong");
        });
      });
    };
    exports.receiveddeadchess = receiveddeadchess;
    var sendstate = function sendstate(data) {
      socket.emit("sendstate", data);
    };
    exports.sendstate = sendstate;
    var receivedstate = function receivedstate() {
      return new Promise(function(resolve, reject) {
        socket.once("receivedstate", function(data) {
          resolve(data);
          reject("something wrong");
        });
      });
    };
    exports.receivedstate = receivedstate;
    var sendName = function sendName(userId) {
      var socket = getSocket(userId);
      socket.emit("name", {
        name: "teo"
      });
    };
    exports.sendName = sendName;
    cc._RF.pop();
  }, {
    "socket.io-client": 60
  } ],
  touchmove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "add97JwDi1EwI+ETWKdjCct", "touchmove");
    "use strict";
    var _socket_connection = require("../socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        },
        deadredchess: {
          default: null,
          type: cc.Node
        },
        deadblackchess: {
          default: null,
          type: cc.Node
        },
        movecodelist: {
          default: null,
          type: cc.Node
        },
        updateall: {
          default: null,
          type: cc.Node
        }
      },
      redtouchmove: function redtouchmove(i) {
        var updateall = this.updateall.getComponent("update");
        var map = this.map.getComponent("boardinfo");
        var deadblackchess = this.deadblackchess;
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        true == posmove[i].active && posmove[i].on("touchstart", function() {
          if (self.node.isChildOf(redchess)) {
            var kill = 0;
            for (var k = 0; k < blackc.length; k++) if (blackc[k].x == this.x && blackc[k].y == this.y) {
              (0, _socket_connection.senddeadchess)({
                name: blackc[k].name
              });
              kill++;
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y
              });
              console.table(map.movecode);
              (0, _socket_connection.sendchessPosition)(map.movecode);
              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
              break;
            }
            if (0 == kill) {
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y
              });
              console.table(map.movecode);
              (0, _socket_connection.sendchessPosition)(map.movecode);
              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
            }
          }
          for (var reset = 0; reset < posmove.length; reset++) {
            posmove[reset].setScale(1, 1);
            posmove[reset].active = false;
          }
          blackchess.pauseSystemEvents(true);
          redchess.pauseSystemEvents(true);
          (0, _socket_connection.sendstate)("red");
          updateall.updateall();
        }, posmove[i]);
      },
      blacktouchmove: function blacktouchmove(i) {
        var updateall = this.updateall.getComponent("update");
        var map = this.map.getComponent("boardinfo");
        var deadredchess = this.deadredchess;
        var place = this.place;
        var posmove = place.getChildren();
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        redc.parent = place;
        blackc.parent = place;
        true == posmove[i].active && posmove[i].on("touchstart", function() {
          if (self.node.isChildOf(blackchess)) {
            var kill = 0;
            for (var j = 0; j < redc.length; j++) if (redc[j].x == this.x && redc[j].y == this.y) {
              (0, _socket_connection.senddeadchess)({
                name: redc[j].name
              });
              kill++;
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y
              });
              console.table(map.movecode);
              (0, _socket_connection.sendchessPosition)(map.movecode);
              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
              break;
            }
            if (0 == kill) {
              map.movecode.push({
                name: self.node.name,
                xed: self.node.x,
                yed: self.node.y,
                x: this.x,
                y: this.y
              });
              console.table(map.movecode);
              (0, _socket_connection.sendchessPosition)(map.movecode);
              this.setScale(1, 1);
              this.off("touchstart", this["function"], posmove[i]);
            }
          }
          for (var reset = 0; reset < posmove.length; reset++) {
            posmove[reset].setScale(1, 1);
            posmove[reset].active = false;
          }
          redchess.pauseSystemEvents(true);
          blackchess.pauseSystemEvents(true);
          updateall.updateall();
        }, posmove[i]);
      },
      start: function start() {},
      onLoad: function onLoad() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    "../socket_connection": "socket_connection"
  } ],
  update: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "077bfbFx0tAEKtrDKRzdXD9", "update");
    "use strict";
    var _socket_connection = require("../socket_connection");
    cc.Class({
      extends: cc.Component,
      properties: {
        movecodelist: {
          default: null,
          type: cc.Label
        },
        place: {
          default: null,
          type: cc.Node
        },
        redchess: {
          default: null,
          type: cc.Node
        },
        blackchess: {
          default: null,
          type: cc.Node
        },
        deadredchess: {
          default: null,
          type: cc.Node
        },
        deadblackchess: {
          default: null,
          type: cc.Node
        },
        map: {
          default: null,
          type: cc.Node
        },
        movelist: []
      },
      onLoad: function onLoad() {},
      updateall: function updateall() {},
      start: function start() {},
      update: function update(dt) {
        var _this = this;
        void 0 === dt && (dt = 1e4);
        var redchess = this.redchess;
        var redc = redchess.getChildren();
        var blackchess = this.blackchess;
        var blackc = blackchess.getChildren();
        var map = this.map.getComponent("boardinfo");
        var deadredchess = this.deadredchess;
        var deadblackchess = this.deadblackchess;
        var movecodelist = this.movecodelist;
        (0, _socket_connection.receivedchessPosition)().then(function(data) {
          for (var j = 0; j < redc.length; j++) if (redc[j].name == data[data.length - 1].name) {
            redc[j].x = data[data.length - 1].x;
            redc[j].y = data[data.length - 1].y;
            redchess.pauseSystemEvents(true);
            blackchess.resumeSystemEvents(true);
            break;
          }
          for (var k = 0; k < blackc.length; k++) if (blackc[k].name == data[data.length - 1].name) {
            blackc[k].x = data[data.length - 1].x;
            blackc[k].y = data[data.length - 1].y;
            blackchess.pauseSystemEvents(true);
            redchess.resumeSystemEvents(true);
            break;
          }
          0 != _this.movelist.length && _this.movelist[_this.movelist.length - 1] === JSON.stringify(data[data.length - 1]) || _this.movelist.push(JSON.stringify(data[data.length - 1]));
          movecodelist.string = _this.movelist;
        })["catch"](function() {
          console.log("Promise Rejected");
        });
        (0, _socket_connection.receiveddeadchess)().then(function(data) {
          for (var j = 0; j < redc.length; j++) if (redc[j].name == data.name) {
            map.countreddead++;
            redc[j].setScale(.8, .8);
            redc[j].x = 0;
            redc[j].y = -30 - map.countreddead * (map.chesssize / 2);
            redc[j].pauseSystemEvents(true);
            redc[j].parent = deadredchess;
          }
          for (var k = 0; k < blackc.length; k++) if (blackc[k].name == data.name) {
            map.countblackdead++;
            blackc[k].setScale(.8, .8);
            blackc[k].x = 0;
            blackc[k].y = -30 - map.countblackdead * (map.chesssize / 2);
            blackc[k].pauseSystemEvents(true);
            blackc[k].parent = deadblackchess;
          }
        })["catch"](function() {
          console.log("Promise Rejected");
        });
      }
    });
    cc._RF.pop();
  }, {
    "../socket_connection": "socket_connection"
  } ]
}, {}, [ "Blur", "LoginPage", "PlayerInfo", "Playnow", "Popup", "Touch", "axios_connection", "boardinfo", "bishopblack", "canonblack", "guardblack", "kingblack", "knightblack", "pawnblack", "rookblack", "bishopred", "canonred", "guardred", "kingred", "knightred", "pawnred", "redchess", "rookred", "touchmove", "update", "backtoroomlist", "movetoboard", "movetohomepage", "movetoroom", "movetorooms", "fetch", "deadblackchess", "deadredchess", "list", "movecodelist", "readybutton", "display", "Sendchat", "Showchat", "roominfo", "RoomInfos", "createroom", "joinroom", "showrooms", "socket_connection", "deleteroom", "deleteuser" ]);
//# sourceMappingURL=index.js.map
