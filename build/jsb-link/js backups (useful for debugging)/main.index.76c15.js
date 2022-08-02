window.__require = function e(t, n, o) {
function s(i, c) {
if (!n[i]) {
if (!t[i]) {
var a = i.split("/");
a = a[a.length - 1];
if (!t[a]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = a;
}
var h = n[i] = {
exports: {}
};
t[i][0].call(h.exports, function(e) {
return s(t[i][1][e] || e);
}, h, h.exports, e, t, n, o);
}
return n[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < o.length; i++) s(o[i]);
return s;
}({
Blur: [ function(e, t) {
"use strict";
cc._RF.push(t, "61abf16dOZKurWh+RfPFijO", "Blur");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
blur: function() {
this.node.opacity = 160;
this.node.pauseSystemEvents(!0);
},
unblur: function() {
this.node.opacity = 255;
this.node.resumeSystemEvents(!0);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
1: [ function(e, t, n) {
"use strict";
n.byteLength = function(e) {
var t = l(e), n = t[0], o = t[1];
return 3 * (n + o) / 4 - o;
};
n.toByteArray = function(e) {
var t, n, o = l(e), i = o[0], c = o[1], a = new r(h(0, i, c)), f = 0, u = c > 0 ? i - 4 : i;
for (n = 0; n < u; n += 4) {
t = s[e.charCodeAt(n)] << 18 | s[e.charCodeAt(n + 1)] << 12 | s[e.charCodeAt(n + 2)] << 6 | s[e.charCodeAt(n + 3)];
a[f++] = t >> 16 & 255;
a[f++] = t >> 8 & 255;
a[f++] = 255 & t;
}
if (2 === c) {
t = s[e.charCodeAt(n)] << 2 | s[e.charCodeAt(n + 1)] >> 4;
a[f++] = 255 & t;
}
if (1 === c) {
t = s[e.charCodeAt(n)] << 10 | s[e.charCodeAt(n + 1)] << 4 | s[e.charCodeAt(n + 2)] >> 2;
a[f++] = t >> 8 & 255;
a[f++] = 255 & t;
}
return a;
};
n.fromByteArray = function(e) {
for (var t, n = e.length, s = n % 3, r = [], i = 0, c = n - s; i < c; i += 16383) r.push(f(e, i, i + 16383 > c ? c : i + 16383));
if (1 === s) {
t = e[n - 1];
r.push(o[t >> 2] + o[t << 4 & 63] + "==");
} else if (2 === s) {
t = (e[n - 2] << 8) + e[n - 1];
r.push(o[t >> 10] + o[t >> 4 & 63] + o[t << 2 & 63] + "=");
}
return r.join("");
};
for (var o = [], s = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, a = i.length; c < a; ++c) {
o[c] = i[c];
s[i.charCodeAt(c)] = c;
}
s["-".charCodeAt(0)] = 62;
s["_".charCodeAt(0)] = 63;
function l(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = e.indexOf("=");
-1 === n && (n = t);
return [ n, n === t ? 0 : 4 - n % 4 ];
}
function h(e, t, n) {
return 3 * (t + n) / 4 - n;
}
function f(e, t, n) {
for (var s, r, i = [], c = t; c < n; c += 3) {
s = (e[c] << 16 & 16711680) + (e[c + 1] << 8 & 65280) + (255 & e[c + 2]);
i.push(o[(r = s) >> 18 & 63] + o[r >> 12 & 63] + o[r >> 6 & 63] + o[63 & r]);
}
return i.join("");
}
}, {} ],
2: [ function(e, t, n) {
(function(t) {
"use strict";
var o = e("base64-js"), s = e("ieee754"), r = e("isarray");
n.Buffer = a;
n.SlowBuffer = function(e) {
+e != e && (e = 0);
return a.alloc(+e);
};
n.INSPECT_MAX_BYTES = 50;
a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
try {
var e = new Uint8Array(1);
e.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
};
return 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
} catch (e) {
return !1;
}
}();
n.kMaxLength = i();
function i() {
return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function c(e, t) {
if (i() < t) throw new RangeError("Invalid typed array length");
if (a.TYPED_ARRAY_SUPPORT) (e = new Uint8Array(t)).__proto__ = a.prototype; else {
null === e && (e = new a(t));
e.length = t;
}
return e;
}
function a(e, t, n) {
if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, n);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return u(this, e);
}
return l(this, e, t, n);
}
a.poolSize = 8192;
a._augment = function(e) {
e.__proto__ = a.prototype;
return e;
};
function l(e, t, n, o) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? y(e, t, n, o) : "string" == typeof t ? d(e, t, n) : g(e, t);
}
a.from = function(e, t, n) {
return l(null, e, t, n);
};
if (a.TYPED_ARRAY_SUPPORT) {
a.prototype.__proto__ = Uint8Array.prototype;
a.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
value: null,
configurable: !0
});
}
function h(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function f(e, t, n, o) {
h(t);
return t <= 0 ? c(e, t) : void 0 !== n ? "string" == typeof o ? c(e, t).fill(n, o) : c(e, t).fill(n) : c(e, t);
}
a.alloc = function(e, t, n) {
return f(null, e, t, n);
};
function u(e, t) {
h(t);
e = c(e, t < 0 ? 0 : 0 | m(t));
if (!a.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
return e;
}
a.allocUnsafe = function(e) {
return u(null, e);
};
a.allocUnsafeSlow = function(e) {
return u(null, e);
};
function d(e, t, n) {
"string" == typeof n && "" !== n || (n = "utf8");
if (!a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var o = 0 | v(t, n), s = (e = c(e, o)).write(t, n);
s !== o && (e = e.slice(0, s));
return e;
}
function p(e, t) {
var n = t.length < 0 ? 0 : 0 | m(t.length);
e = c(e, n);
for (var o = 0; o < n; o += 1) e[o] = 255 & t[o];
return e;
}
function y(e, t, n, o) {
t.byteLength;
if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < n + (o || 0)) throw new RangeError("'length' is out of bounds");
t = void 0 === n && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, n) : new Uint8Array(t, n, o);
a.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = a.prototype : e = p(e, t);
return e;
}
function g(e, t) {
if (a.isBuffer(t)) {
var n = 0 | m(t.length);
if (0 === (e = c(e, n)).length) return e;
t.copy(e, 0, 0, n);
return e;
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? c(e, 0) : p(e, t);
if ("Buffer" === t.type && r(t.data)) return p(e, t.data);
}
var o;
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function m(e) {
if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
return 0 | e;
}
a.isBuffer = function(e) {
return !(null == e || !e._isBuffer);
};
a.compare = function(e, t) {
if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
if (e === t) return 0;
for (var n = e.length, o = t.length, s = 0, r = Math.min(n, o); s < r; ++s) if (e[s] !== t[s]) {
n = e[s];
o = t[s];
break;
}
return n < o ? -1 : o < n ? 1 : 0;
};
a.isEncoding = function(e) {
switch (String(e).toLowerCase()) {
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
return !0;

default:
return !1;
}
};
a.concat = function(e, t) {
if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return a.alloc(0);
var n;
if (void 0 === t) {
t = 0;
for (n = 0; n < e.length; ++n) t += e[n].length;
}
var o = a.allocUnsafe(t), s = 0;
for (n = 0; n < e.length; ++n) {
var i = e[n];
if (!a.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
i.copy(o, s);
s += i.length;
}
return o;
};
function v(e, t) {
if (a.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var n = e.length;
if (0 === n) return 0;
for (var o = !1; ;) switch (t) {
case "ascii":
case "latin1":
case "binary":
return n;

case "utf8":
case "utf-8":
case void 0:
return W(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return G(e).length;

default:
if (o) return W(e).length;
t = ("" + t).toLowerCase();
o = !0;
}
}
a.byteLength = v;
function b(e, t, n) {
var o = !1;
(void 0 === t || t < 0) && (t = 0);
if (t > this.length) return "";
(void 0 === n || n > this.length) && (n = this.length);
if (n <= 0) return "";
if ((n >>>= 0) <= (t >>>= 0)) return "";
e || (e = "utf8");
for (;;) switch (e) {
case "hex":
return B(this, t, n);

case "utf8":
case "utf-8":
return A(this, t, n);

case "ascii":
return F(this, t, n);

case "latin1":
case "binary":
return N(this, t, n);

case "base64":
return S(this, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return L(this, t, n);

default:
if (o) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase();
o = !0;
}
}
a.prototype._isBuffer = !0;
function x(e, t, n) {
var o = e[t];
e[t] = e[n];
e[n] = o;
}
a.prototype.swap16 = function() {
var e = this.length;
if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var t = 0; t < e; t += 2) x(this, t, t + 1);
return this;
};
a.prototype.swap32 = function() {
var e = this.length;
if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var t = 0; t < e; t += 4) {
x(this, t, t + 3);
x(this, t + 1, t + 2);
}
return this;
};
a.prototype.swap64 = function() {
var e = this.length;
if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var t = 0; t < e; t += 8) {
x(this, t, t + 7);
x(this, t + 1, t + 6);
x(this, t + 2, t + 5);
x(this, t + 3, t + 4);
}
return this;
};
a.prototype.toString = function() {
var e = 0 | this.length;
return 0 === e ? "" : 0 === arguments.length ? A(this, 0, e) : b.apply(this, arguments);
};
a.prototype.equals = function(e) {
if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e || 0 === a.compare(this, e);
};
a.prototype.inspect = function() {
var e = "", t = n.INSPECT_MAX_BYTES;
if (this.length > 0) {
e = this.toString("hex", 0, t).match(/.{2}/g).join(" ");
this.length > t && (e += " ... ");
}
return "<Buffer " + e + ">";
};
a.prototype.compare = function(e, t, n, o, s) {
if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
void 0 === t && (t = 0);
void 0 === n && (n = e ? e.length : 0);
void 0 === o && (o = 0);
void 0 === s && (s = this.length);
if (t < 0 || n > e.length || o < 0 || s > this.length) throw new RangeError("out of range index");
if (o >= s && t >= n) return 0;
if (o >= s) return -1;
if (t >= n) return 1;
if (this === e) return 0;
for (var r = (s >>>= 0) - (o >>>= 0), i = (n >>>= 0) - (t >>>= 0), c = Math.min(r, i), l = this.slice(o, s), h = e.slice(t, n), f = 0; f < c; ++f) if (l[f] !== h[f]) {
r = l[f];
i = h[f];
break;
}
return r < i ? -1 : i < r ? 1 : 0;
};
function k(e, t, n, o, s) {
if (0 === e.length) return -1;
if ("string" == typeof n) {
o = n;
n = 0;
} else n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648);
n = +n;
isNaN(n) && (n = s ? 0 : e.length - 1);
n < 0 && (n = e.length + n);
if (n >= e.length) {
if (s) return -1;
n = e.length - 1;
} else if (n < 0) {
if (!s) return -1;
n = 0;
}
"string" == typeof t && (t = a.from(t, o));
if (a.isBuffer(t)) return 0 === t.length ? -1 : C(e, t, n, o, s);
if ("number" == typeof t) {
t &= 255;
return a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : C(e, [ t ], n, o, s);
}
throw new TypeError("val must be string, number or Buffer");
}
function C(e, t, n, o, s) {
var r, i = 1, c = e.length, a = t.length;
if (void 0 !== o && ("ucs2" === (o = String(o).toLowerCase()) || "ucs-2" === o || "utf16le" === o || "utf-16le" === o)) {
if (e.length < 2 || t.length < 2) return -1;
i = 2;
c /= 2;
a /= 2;
n /= 2;
}
function l(e, t) {
return 1 === i ? e[t] : e.readUInt16BE(t * i);
}
if (s) {
var h = -1;
for (r = n; r < c; r++) if (l(e, r) === l(t, -1 === h ? 0 : r - h)) {
-1 === h && (h = r);
if (r - h + 1 === a) return h * i;
} else {
-1 !== h && (r -= r - h);
h = -1;
}
} else {
n + a > c && (n = c - a);
for (r = n; r >= 0; r--) {
for (var f = !0, u = 0; u < a; u++) if (l(e, r + u) !== l(t, u)) {
f = !1;
break;
}
if (f) return r;
}
}
return -1;
}
a.prototype.includes = function(e, t, n) {
return -1 !== this.indexOf(e, t, n);
};
a.prototype.indexOf = function(e, t, n) {
return k(this, e, t, n, !0);
};
a.prototype.lastIndexOf = function(e, t, n) {
return k(this, e, t, n, !1);
};
function _(e, t, n, o) {
n = Number(n) || 0;
var s = e.length - n;
o ? (o = Number(o)) > s && (o = s) : o = s;
var r = t.length;
if (r % 2 != 0) throw new TypeError("Invalid hex string");
o > r / 2 && (o = r / 2);
for (var i = 0; i < o; ++i) {
var c = parseInt(t.substr(2 * i, 2), 16);
if (isNaN(c)) return i;
e[n + i] = c;
}
return i;
}
function w(e, t, n, o) {
return Z(W(t, e.length - n), e, n, o);
}
function R(e, t, n, o) {
return Z(H(t), e, n, o);
}
function E(e, t, n, o) {
return R(e, t, n, o);
}
function P(e, t, n, o) {
return Z(G(t), e, n, o);
}
function T(e, t, n, o) {
return Z(X(t, e.length - n), e, n, o);
}
a.prototype.write = function(e, t, n, o) {
if (void 0 === t) {
o = "utf8";
n = this.length;
t = 0;
} else if (void 0 === n && "string" == typeof t) {
o = t;
n = this.length;
t = 0;
} else {
if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
t |= 0;
if (isFinite(n)) {
n |= 0;
void 0 === o && (o = "utf8");
} else {
o = n;
n = void 0;
}
}
var s = this.length - t;
(void 0 === n || n > s) && (n = s);
if (e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
o || (o = "utf8");
for (var r = !1; ;) switch (o) {
case "hex":
return _(this, e, t, n);

case "utf8":
case "utf-8":
return w(this, e, t, n);

case "ascii":
return R(this, e, t, n);

case "latin1":
case "binary":
return E(this, e, t, n);

case "base64":
return P(this, e, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return T(this, e, t, n);

default:
if (r) throw new TypeError("Unknown encoding: " + o);
o = ("" + o).toLowerCase();
r = !0;
}
};
a.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function S(e, t, n) {
return 0 === t && n === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, n));
}
function A(e, t, n) {
n = Math.min(e.length, n);
for (var o = [], s = t; s < n; ) {
var r = e[s], i = null, c = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
if (s + c <= n) {
var a, l, h, f;
switch (c) {
case 1:
r < 128 && (i = r);
break;

case 2:
128 == (192 & (a = e[s + 1])) && (f = (31 & r) << 6 | 63 & a) > 127 && (i = f);
break;

case 3:
a = e[s + 1];
l = e[s + 2];
128 == (192 & a) && 128 == (192 & l) && (f = (15 & r) << 12 | (63 & a) << 6 | 63 & l) > 2047 && (f < 55296 || f > 57343) && (i = f);
break;

case 4:
a = e[s + 1];
l = e[s + 2];
h = e[s + 3];
128 == (192 & a) && 128 == (192 & l) && 128 == (192 & h) && (f = (15 & r) << 18 | (63 & a) << 12 | (63 & l) << 6 | 63 & h) > 65535 && f < 1114112 && (i = f);
}
}
if (null === i) {
i = 65533;
c = 1;
} else if (i > 65535) {
i -= 65536;
o.push(i >>> 10 & 1023 | 55296);
i = 56320 | 1023 & i;
}
o.push(i);
s += c;
}
return O(o);
}
var j = 4096;
function O(e) {
var t = e.length;
if (t <= j) return String.fromCharCode.apply(String, e);
for (var n = "", o = 0; o < t; ) n += String.fromCharCode.apply(String, e.slice(o, o += j));
return n;
}
function F(e, t, n) {
var o = "";
n = Math.min(e.length, n);
for (var s = t; s < n; ++s) o += String.fromCharCode(127 & e[s]);
return o;
}
function N(e, t, n) {
var o = "";
n = Math.min(e.length, n);
for (var s = t; s < n; ++s) o += String.fromCharCode(e[s]);
return o;
}
function B(e, t, n) {
var o, s = e.length;
(!t || t < 0) && (t = 0);
(!n || n < 0 || n > s) && (n = s);
for (var r = "", i = t; i < n; ++i) r += (o = e[i]) < 16 ? "0" + o.toString(16) : o.toString(16);
return r;
}
function L(e, t, n) {
for (var o = e.slice(t, n), s = "", r = 0; r < o.length; r += 2) s += String.fromCharCode(o[r] + 256 * o[r + 1]);
return s;
}
a.prototype.slice = function(e, t) {
var n, o = this.length;
(e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o);
(t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o);
t < e && (t = e);
if (a.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = a.prototype; else {
var s = t - e;
n = new a(s, void 0);
for (var r = 0; r < s; ++r) n[r] = this[r + e];
}
return n;
};
function I(e, t, n) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
a.prototype.readUIntLE = function(e, t, n) {
e |= 0;
t |= 0;
n || I(e, t, this.length);
for (var o = this[e], s = 1, r = 0; ++r < t && (s *= 256); ) o += this[e + r] * s;
return o;
};
a.prototype.readUIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || I(e, t, this.length);
for (var o = this[e + --t], s = 1; t > 0 && (s *= 256); ) o += this[e + --t] * s;
return o;
};
a.prototype.readUInt8 = function(e, t) {
t || I(e, 1, this.length);
return this[e];
};
a.prototype.readUInt16LE = function(e, t) {
t || I(e, 2, this.length);
return this[e] | this[e + 1] << 8;
};
a.prototype.readUInt16BE = function(e, t) {
t || I(e, 2, this.length);
return this[e] << 8 | this[e + 1];
};
a.prototype.readUInt32LE = function(e, t) {
t || I(e, 4, this.length);
return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
};
a.prototype.readUInt32BE = function(e, t) {
t || I(e, 4, this.length);
return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
a.prototype.readIntLE = function(e, t, n) {
e |= 0;
t |= 0;
n || I(e, t, this.length);
for (var o = this[e], s = 1, r = 0; ++r < t && (s *= 256); ) o += this[e + r] * s;
o >= (s *= 128) && (o -= Math.pow(2, 8 * t));
return o;
};
a.prototype.readIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || I(e, t, this.length);
for (var o = t, s = 1, r = this[e + --o]; o > 0 && (s *= 256); ) r += this[e + --o] * s;
r >= (s *= 128) && (r -= Math.pow(2, 8 * t));
return r;
};
a.prototype.readInt8 = function(e, t) {
t || I(e, 1, this.length);
return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
};
a.prototype.readInt16LE = function(e, t) {
t || I(e, 2, this.length);
var n = this[e] | this[e + 1] << 8;
return 32768 & n ? 4294901760 | n : n;
};
a.prototype.readInt16BE = function(e, t) {
t || I(e, 2, this.length);
var n = this[e + 1] | this[e] << 8;
return 32768 & n ? 4294901760 | n : n;
};
a.prototype.readInt32LE = function(e, t) {
t || I(e, 4, this.length);
return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
a.prototype.readInt32BE = function(e, t) {
t || I(e, 4, this.length);
return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
a.prototype.readFloatLE = function(e, t) {
t || I(e, 4, this.length);
return s.read(this, e, !0, 23, 4);
};
a.prototype.readFloatBE = function(e, t) {
t || I(e, 4, this.length);
return s.read(this, e, !1, 23, 4);
};
a.prototype.readDoubleLE = function(e, t) {
t || I(e, 8, this.length);
return s.read(this, e, !0, 52, 8);
};
a.prototype.readDoubleBE = function(e, t) {
t || I(e, 8, this.length);
return s.read(this, e, !1, 52, 8);
};
function M(e, t, n, o, s, r) {
if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > s || t < r) throw new RangeError('"value" argument is out of bounds');
if (n + o > e.length) throw new RangeError("Index out of range");
}
a.prototype.writeUIntLE = function(e, t, n, o) {
e = +e;
t |= 0;
n |= 0;
o || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var s = 1, r = 0;
this[t] = 255 & e;
for (;++r < n && (s *= 256); ) this[t + r] = e / s & 255;
return t + n;
};
a.prototype.writeUIntBE = function(e, t, n, o) {
e = +e;
t |= 0;
n |= 0;
o || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var s = n - 1, r = 1;
this[t + s] = 255 & e;
for (;--s >= 0 && (r *= 256); ) this[t + s] = e / r & 255;
return t + n;
};
a.prototype.writeUInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 1, 255, 0);
a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
this[t] = 255 & e;
return t + 1;
};
function D(e, t, n, o) {
t < 0 && (t = 65535 + t + 1);
for (var s = 0, r = Math.min(e.length - n, 2); s < r; ++s) e[n + s] = (t & 255 << 8 * (o ? s : 1 - s)) >>> 8 * (o ? s : 1 - s);
}
a.prototype.writeUInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 2, 65535, 0);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else D(this, e, t, !0);
return t + 2;
};
a.prototype.writeUInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 2, 65535, 0);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else D(this, e, t, !1);
return t + 2;
};
function U(e, t, n, o) {
t < 0 && (t = 4294967295 + t + 1);
for (var s = 0, r = Math.min(e.length - n, 4); s < r; ++s) e[n + s] = t >>> 8 * (o ? s : 3 - s) & 255;
}
a.prototype.writeUInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 4, 4294967295, 0);
if (a.TYPED_ARRAY_SUPPORT) {
this[t + 3] = e >>> 24;
this[t + 2] = e >>> 16;
this[t + 1] = e >>> 8;
this[t] = 255 & e;
} else U(this, e, t, !0);
return t + 4;
};
a.prototype.writeUInt32BE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 4, 4294967295, 0);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else U(this, e, t, !1);
return t + 4;
};
a.prototype.writeIntLE = function(e, t, n, o) {
e = +e;
t |= 0;
if (!o) {
var s = Math.pow(2, 8 * n - 1);
M(this, e, t, n, s - 1, -s);
}
var r = 0, i = 1, c = 0;
this[t] = 255 & e;
for (;++r < n && (i *= 256); ) {
e < 0 && 0 === c && 0 !== this[t + r - 1] && (c = 1);
this[t + r] = (e / i >> 0) - c & 255;
}
return t + n;
};
a.prototype.writeIntBE = function(e, t, n, o) {
e = +e;
t |= 0;
if (!o) {
var s = Math.pow(2, 8 * n - 1);
M(this, e, t, n, s - 1, -s);
}
var r = n - 1, i = 1, c = 0;
this[t + r] = 255 & e;
for (;--r >= 0 && (i *= 256); ) {
e < 0 && 0 === c && 0 !== this[t + r + 1] && (c = 1);
this[t + r] = (e / i >> 0) - c & 255;
}
return t + n;
};
a.prototype.writeInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 1, 127, -128);
a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
e < 0 && (e = 255 + e + 1);
this[t] = 255 & e;
return t + 1;
};
a.prototype.writeInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 2, 32767, -32768);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else D(this, e, t, !0);
return t + 2;
};
a.prototype.writeInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 2, 32767, -32768);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else D(this, e, t, !1);
return t + 2;
};
a.prototype.writeInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 4, 2147483647, -2147483648);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
this[t + 2] = e >>> 16;
this[t + 3] = e >>> 24;
} else U(this, e, t, !0);
return t + 4;
};
a.prototype.writeInt32BE = function(e, t, n) {
e = +e;
t |= 0;
n || M(this, e, t, 4, 2147483647, -2147483648);
e < 0 && (e = 4294967295 + e + 1);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else U(this, e, t, !1);
return t + 4;
};
function Y(e, t, n, o) {
if (n + o > e.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function q(e, t, n, o, r) {
r || Y(e, 0, n, 4);
s.write(e, t, n, o, 23, 4);
return n + 4;
}
a.prototype.writeFloatLE = function(e, t, n) {
return q(this, e, t, !0, n);
};
a.prototype.writeFloatBE = function(e, t, n) {
return q(this, e, t, !1, n);
};
function J(e, t, n, o, r) {
r || Y(e, 0, n, 8);
s.write(e, t, n, o, 52, 8);
return n + 8;
}
a.prototype.writeDoubleLE = function(e, t, n) {
return J(this, e, t, !0, n);
};
a.prototype.writeDoubleBE = function(e, t, n) {
return J(this, e, t, !1, n);
};
a.prototype.copy = function(e, t, n, o) {
n || (n = 0);
o || 0 === o || (o = this.length);
t >= e.length && (t = e.length);
t || (t = 0);
o > 0 && o < n && (o = n);
if (o === n) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (t < 0) throw new RangeError("targetStart out of bounds");
if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
if (o < 0) throw new RangeError("sourceEnd out of bounds");
o > this.length && (o = this.length);
e.length - t < o - n && (o = e.length - t + n);
var s, r = o - n;
if (this === e && n < t && t < o) for (s = r - 1; s >= 0; --s) e[s + t] = this[s + n]; else if (r < 1e3 || !a.TYPED_ARRAY_SUPPORT) for (s = 0; s < r; ++s) e[s + t] = this[s + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + r), t);
return r;
};
a.prototype.fill = function(e, t, n, o) {
if ("string" == typeof e) {
if ("string" == typeof t) {
o = t;
t = 0;
n = this.length;
} else if ("string" == typeof n) {
o = n;
n = this.length;
}
if (1 === e.length) {
var s = e.charCodeAt(0);
s < 256 && (e = s);
}
if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
if ("string" == typeof o && !a.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
} else "number" == typeof e && (e &= 255);
if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
if (n <= t) return this;
t >>>= 0;
n = void 0 === n ? this.length : n >>> 0;
e || (e = 0);
var r;
if ("number" == typeof e) for (r = t; r < n; ++r) this[r] = e; else {
var i = a.isBuffer(e) ? e : W(new a(e, o).toString()), c = i.length;
for (r = 0; r < n - t; ++r) this[r + t] = i[r % c];
}
return this;
};
var K = /[^+\/0-9A-Za-z-_]/g;
function V(e) {
if ((e = z(e).replace(K, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function z(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function W(e, t) {
t = t || Infinity;
for (var n, o = e.length, s = null, r = [], i = 0; i < o; ++i) {
if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
if (!s) {
if (n > 56319) {
(t -= 3) > -1 && r.push(239, 191, 189);
continue;
}
if (i + 1 === o) {
(t -= 3) > -1 && r.push(239, 191, 189);
continue;
}
s = n;
continue;
}
if (n < 56320) {
(t -= 3) > -1 && r.push(239, 191, 189);
s = n;
continue;
}
n = 65536 + (s - 55296 << 10 | n - 56320);
} else s && (t -= 3) > -1 && r.push(239, 191, 189);
s = null;
if (n < 128) {
if ((t -= 1) < 0) break;
r.push(n);
} else if (n < 2048) {
if ((t -= 2) < 0) break;
r.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((t -= 3) < 0) break;
r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return r;
}
function H(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
return t;
}
function X(e, t) {
for (var n, o, s, r = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) {
o = (n = e.charCodeAt(i)) >> 8;
s = n % 256;
r.push(s);
r.push(o);
}
return r;
}
function G(e) {
return o.toByteArray(V(e));
}
function Z(e, t, n, o) {
for (var s = 0; s < o && !(s + n >= t.length || s >= e.length); ++s) t[s + n] = e[s];
return s;
}
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 1,
ieee754: 4,
isarray: 3
} ],
3: [ function(e, t) {
var n = {}.toString;
t.exports = Array.isArray || function(e) {
return "[object Array]" == n.call(e);
};
}, {} ],
4: [ function(e, t, n) {
n.read = function(e, t, n, o, s) {
var r, i, c = 8 * s - o - 1, a = (1 << c) - 1, l = a >> 1, h = -7, f = n ? s - 1 : 0, u = n ? -1 : 1, d = e[t + f];
f += u;
r = d & (1 << -h) - 1;
d >>= -h;
h += c;
for (;h > 0; r = 256 * r + e[t + f], f += u, h -= 8) ;
i = r & (1 << -h) - 1;
r >>= -h;
h += o;
for (;h > 0; i = 256 * i + e[t + f], f += u, h -= 8) ;
if (0 === r) r = 1 - l; else {
if (r === a) return i ? NaN : Infinity * (d ? -1 : 1);
i += Math.pow(2, o);
r -= l;
}
return (d ? -1 : 1) * i * Math.pow(2, r - o);
};
n.write = function(e, t, n, o, s, r) {
var i, c, a, l = 8 * r - s - 1, h = (1 << l) - 1, f = h >> 1, u = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = o ? 0 : r - 1, p = o ? 1 : -1, y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
t = Math.abs(t);
if (isNaN(t) || Infinity === t) {
c = isNaN(t) ? 1 : 0;
i = h;
} else {
i = Math.floor(Math.log(t) / Math.LN2);
if (t * (a = Math.pow(2, -i)) < 1) {
i--;
a *= 2;
}
if ((t += i + f >= 1 ? u / a : u * Math.pow(2, 1 - f)) * a >= 2) {
i++;
a /= 2;
}
if (i + f >= h) {
c = 0;
i = h;
} else if (i + f >= 1) {
c = (t * a - 1) * Math.pow(2, s);
i += f;
} else {
c = t * Math.pow(2, f - 1) * Math.pow(2, s);
i = 0;
}
}
for (;s >= 8; e[n + d] = 255 & c, d += p, c /= 256, s -= 8) ;
i = i << s | c;
l += s;
for (;l > 0; e[n + d] = 255 & i, d += p, i /= 256, l -= 8) ;
e[n + d - p] |= 128 * y;
};
}, {} ],
5: [ function(e, t) {
var n, o, s = t.exports = {};
function r() {
throw new Error("setTimeout has not been defined");
}
function i() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
n = "function" == typeof setTimeout ? setTimeout : r;
} catch (e) {
n = r;
}
try {
o = "function" == typeof clearTimeout ? clearTimeout : i;
} catch (e) {
o = i;
}
})();
function c(e) {
if (n === setTimeout) return setTimeout(e, 0);
if ((n === r || !n) && setTimeout) {
n = setTimeout;
return setTimeout(e, 0);
}
try {
return n(e, 0);
} catch (t) {
try {
return n.call(null, e, 0);
} catch (t) {
return n.call(this, e, 0);
}
}
}
function a(e) {
if (o === clearTimeout) return clearTimeout(e);
if ((o === i || !o) && clearTimeout) {
o = clearTimeout;
return clearTimeout(e);
}
try {
return o(e);
} catch (t) {
try {
return o.call(null, e);
} catch (t) {
return o.call(this, e);
}
}
}
var l, h = [], f = !1, u = -1;
function d() {
if (f && l) {
f = !1;
l.length ? h = l.concat(h) : u = -1;
h.length && p();
}
}
function p() {
if (!f) {
var e = c(d);
f = !0;
for (var t = h.length; t; ) {
l = h;
h = [];
for (;++u < t; ) l && l[u].run();
u = -1;
t = h.length;
}
l = null;
f = !1;
a(e);
}
}
s.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
h.push(new y(e, t));
1 !== h.length || f || c(p);
};
function y(e, t) {
this.fun = e;
this.array = t;
}
y.prototype.run = function() {
this.fun.apply(null, this.array);
};
s.title = "browser";
s.browser = !0;
s.env = {};
s.argv = [];
s.version = "";
s.versions = {};
function g() {}
s.on = g;
s.addListener = g;
s.once = g;
s.off = g;
s.removeListener = g;
s.removeAllListeners = g;
s.emit = g;
s.prependListener = g;
s.prependOnceListener = g;
s.listeners = function() {
return [];
};
s.binding = function() {
throw new Error("process.binding is not supported");
};
s.cwd = function() {
return "/";
};
s.chdir = function() {
throw new Error("process.chdir is not supported");
};
s.umask = function() {
return 0;
};
}, {} ],
6: [ function(e, t, n) {
n.Emitter = o;
function o(e) {
if (e) return s(e);
}
function s(e) {
for (var t in o.prototype) e[t] = o.prototype[t];
return e;
}
o.prototype.on = o.prototype.addEventListener = function(e, t) {
this._callbacks = this._callbacks || {};
(this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t);
return this;
};
o.prototype.once = function(e, t) {
function n() {
this.off(e, n);
t.apply(this, arguments);
}
n.fn = t;
this.on(e, n);
return this;
};
o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function(e, t) {
this._callbacks = this._callbacks || {};
if (0 == arguments.length) {
this._callbacks = {};
return this;
}
var n, o = this._callbacks["$" + e];
if (!o) return this;
if (1 == arguments.length) {
delete this._callbacks["$" + e];
return this;
}
for (var s = 0; s < o.length; s++) if ((n = o[s]) === t || n.fn === t) {
o.splice(s, 1);
break;
}
0 === o.length && delete this._callbacks["$" + e];
return this;
};
o.prototype.emit = function(e) {
this._callbacks = this._callbacks || {};
for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
if (n) {
o = 0;
for (var s = (n = n.slice(0)).length; o < s; ++o) n[o].apply(this, t);
}
return this;
};
o.prototype.emitReserved = o.prototype.emit;
o.prototype.listeners = function(e) {
this._callbacks = this._callbacks || {};
return this._callbacks["$" + e] || [];
};
o.prototype.hasListeners = function(e) {
return !!this.listeners(e).length;
};
}, {} ],
7: [ function(e, t, n) {
(function(o) {
n.formatArgs = function(e) {
e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff);
if (!this.useColors) return;
const n = "color: " + this.color;
e.splice(1, 0, n, "color: inherit");
let o = 0, s = 0;
e[0].replace(/%[a-zA-Z%]/g, e => {
if ("%%" !== e) {
o++;
"%c" === e && (s = o);
}
});
e.splice(s, 0, n);
};
n.save = function(e) {
try {
e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug");
} catch (e) {}
};
n.load = function() {
let e;
try {
e = n.storage.getItem("debug");
} catch (e) {}
!e && "undefined" != typeof o && "env" in o && (e = o.env.DEBUG);
return e;
};
n.useColors = function() {
return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
};
n.storage = function() {
try {
return localStorage;
} catch (e) {}
}();
n.destroy = (() => {
let e = !1;
return () => {
if (!e) {
e = !0;
console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
}
};
})();
n.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
n.log = console.debug || console.log || (() => {});
t.exports = e("./common")(n);
const {formatters: s} = t.exports;
s.j = function(e) {
try {
return JSON.stringify(e);
} catch (e) {
return "[UnexpectedJSONParseError]: " + e.message;
}
};
}).call(this, e("_process"));
}, {
"./common": 8,
_process: 5
} ],
8: [ function(e, t) {
t.exports = function(t) {
n.debug = n;
n.default = n;
n.coerce = function(e) {
return e instanceof Error ? e.stack || e.message : e;
};
n.disable = function() {
const e = [ ...n.names.map(s), ...n.skips.map(s).map(e => "-" + e) ].join(",");
n.enable("");
return e;
};
n.enable = function(e) {
n.save(e);
n.namespaces = e;
n.names = [];
n.skips = [];
let t;
const o = ("string" == typeof e ? e : "").split(/[\s,]+/), s = o.length;
for (t = 0; t < s; t++) o[t] && ("-" === (e = o[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.slice(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
};
n.enabled = function(e) {
if ("*" === e[e.length - 1]) return !0;
let t, o;
for (t = 0, o = n.skips.length; t < o; t++) if (n.skips[t].test(e)) return !1;
for (t = 0, o = n.names.length; t < o; t++) if (n.names[t].test(e)) return !0;
return !1;
};
n.humanize = e("ms");
n.destroy = function() {
console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
};
Object.keys(t).forEach(e => {
n[e] = t[e];
});
n.names = [];
n.skips = [];
n.formatters = {};
n.selectColor = function(e) {
let t = 0;
for (let n = 0; n < e.length; n++) {
t = (t << 5) - t + e.charCodeAt(n);
t |= 0;
}
return n.colors[Math.abs(t) % n.colors.length];
};
function n(e) {
let t, s, r, i = null;
function c(...e) {
if (!c.enabled) return;
const o = c, s = Number(new Date()), r = s - (t || s);
o.diff = r;
o.prev = t;
o.curr = s;
t = s;
e[0] = n.coerce(e[0]);
"string" != typeof e[0] && e.unshift("%O");
let i = 0;
e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, s) => {
if ("%%" === t) return "%";
i++;
const r = n.formatters[s];
if ("function" == typeof r) {
const n = e[i];
t = r.call(o, n);
e.splice(i, 1);
i--;
}
return t;
});
n.formatArgs.call(o, e);
(o.log || n.log).apply(o, e);
}
c.namespace = e;
c.useColors = n.useColors();
c.color = n.selectColor(e);
c.extend = o;
c.destroy = n.destroy;
Object.defineProperty(c, "enabled", {
enumerable: !0,
configurable: !1,
get: () => {
if (null !== i) return i;
if (s !== n.namespaces) {
s = n.namespaces;
r = n.enabled(e);
}
return r;
},
set: e => {
i = e;
}
});
"function" == typeof n.init && n.init(c);
return c;
}
function o(e, t) {
const o = n(this.namespace + ("undefined" == typeof t ? ":" : t) + e);
o.log = this.log;
return o;
}
function s(e) {
return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
}
n.enable(n.load());
return n;
};
}, {
ms: 28
} ],
9: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.hasCORS = void 0;
let o = !1;
try {
o = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
} catch (e) {}
n.hasCORS = o;
}, {} ],
10: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.decode = n.encode = void 0;
n.encode = function(e) {
let t = "";
for (let n in e) if (e.hasOwnProperty(n)) {
t.length && (t += "&");
t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
}
return t;
};
n.decode = function(e) {
let t = {}, n = e.split("&");
for (let e = 0, o = n.length; e < o; e++) {
let o = n[e].split("=");
t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
}
return t;
};
}, {} ],
11: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.parse = void 0;
const o = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, s = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
n.parse = function(e) {
const t = e, n = e.indexOf("["), c = e.indexOf("]");
-1 != n && -1 != c && (e = e.substring(0, n) + e.substring(n, c).replace(/:/g, ";") + e.substring(c, e.length));
let a = o.exec(e || ""), l = {}, h = 14;
for (;h--; ) l[s[h]] = a[h] || "";
if (-1 != n && -1 != c) {
l.source = t;
l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":");
l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
l.ipv6uri = !0;
}
l.pathNames = r(0, l.path);
l.queryKey = i(0, l.query);
return l;
};
function r(e, t) {
const n = t.replace(/\/{2,9}/g, "/").split("/");
"/" != t.substr(0, 1) && 0 !== t.length || n.splice(0, 1);
"/" == t.substr(t.length - 1, 1) && n.splice(n.length - 1, 1);
return n;
}
function i(e, t) {
const n = {};
t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(e, t, o) {
t && (n[t] = o);
});
return n;
}
}, {} ],
12: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.yeast = n.decode = n.encode = void 0;
const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, r = {};
let i, c = 0, a = 0;
function l(e) {
let t = "";
do {
t = o[e % s] + t;
e = Math.floor(e / s);
} while (e > 0);
return t;
}
n.encode = l;
n.decode = function(e) {
let t = 0;
for (a = 0; a < e.length; a++) t = t * s + r[e.charAt(a)];
return t;
};
n.yeast = function() {
const e = l(+new Date());
return e !== i ? (c = 0, i = e) : e + "." + l(c++);
};
for (;a < s; a++) r[o[a]] = a;
}, {} ],
13: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.globalThisShim = void 0;
n.globalThisShim = (() => "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("", "return this")())();
}, {} ],
14: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.parse = n.installTimerFunctions = n.transports = n.Transport = n.protocol = n.Socket = void 0;
const o = e("./socket.js");
Object.defineProperty(n, "Socket", {
enumerable: !0,
get: function() {
return o.Socket;
}
});
n.protocol = o.Socket.protocol;
var s = e("./transport.js");
Object.defineProperty(n, "Transport", {
enumerable: !0,
get: function() {
return s.Transport;
}
});
var r = e("./transports/index.js");
Object.defineProperty(n, "transports", {
enumerable: !0,
get: function() {
return r.transports;
}
});
var i = e("./util.js");
Object.defineProperty(n, "installTimerFunctions", {
enumerable: !0,
get: function() {
return i.installTimerFunctions;
}
});
var c = e("./contrib/parseuri.js");
Object.defineProperty(n, "parse", {
enumerable: !0,
get: function() {
return c.parse;
}
});
}, {
"./contrib/parseuri.js": 11,
"./socket.js": 15,
"./transport.js": 16,
"./transports/index.js": 17,
"./util.js": 22
} ],
15: [ function(e, t, n) {
"use strict";
var o = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Socket = void 0;
const s = e("./transports/index.js"), r = e("./util.js"), i = e("./contrib/parseqs.js"), c = e("./contrib/parseuri.js"), a = o(e("debug")), l = e("@socket.io/component-emitter"), h = e("engine.io-parser"), f = (0, 
a.default)("engine.io-client:socket");
class u extends l.Emitter {
constructor(e, t = {}) {
super();
if (e && "object" == typeof e) {
t = e;
e = null;
}
if (e) {
e = (0, c.parse)(e);
t.hostname = e.host;
t.secure = "https" === e.protocol || "wss" === e.protocol;
t.port = e.port;
e.query && (t.query = e.query);
} else t.host && (t.hostname = (0, c.parse)(t.host).host);
(0, r.installTimerFunctions)(this, t);
this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol;
t.hostname && !t.port && (t.port = this.secure ? "443" : "80");
this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost");
this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80");
this.transports = t.transports || [ "polling", "websocket" ];
this.readyState = "";
this.writeBuffer = [];
this.prevBufferLen = 0;
this.opts = Object.assign({
path: "/engine.io",
agent: !1,
withCredentials: !1,
upgrade: !0,
timestampParam: "t",
rememberUpgrade: !1,
rejectUnauthorized: !0,
perMessageDeflate: {
threshold: 1024
},
transportOptions: {},
closeOnBeforeunload: !0
}, t);
this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
"string" == typeof this.opts.query && (this.opts.query = (0, i.decode)(this.opts.query));
this.id = null;
this.upgrades = null;
this.pingInterval = null;
this.pingTimeout = null;
this.pingTimeoutTimer = null;
if ("function" == typeof addEventListener) {
this.opts.closeOnBeforeunload && addEventListener("beforeunload", () => {
if (this.transport) {
this.transport.removeAllListeners();
this.transport.close();
}
}, !1);
if ("localhost" !== this.hostname) {
this.offlineEventListener = () => {
this.onClose("transport close", {
description: "network connection lost"
});
};
addEventListener("offline", this.offlineEventListener, !1);
}
}
this.open();
}
createTransport(e) {
f('creating transport "%s"', e);
const t = Object.assign({}, this.opts.query);
t.EIO = h.protocol;
t.transport = e;
this.id && (t.sid = this.id);
const n = Object.assign({}, this.opts.transportOptions[e], this.opts, {
query: t,
socket: this,
hostname: this.hostname,
secure: this.secure,
port: this.port
});
f("options: %j", n);
return new s.transports[e](n);
}
open() {
let e;
if (this.opts.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket"; else {
if (0 === this.transports.length) {
this.setTimeoutFn(() => {
this.emitReserved("error", "No transports available");
}, 0);
return;
}
e = this.transports[0];
}
this.readyState = "opening";
try {
e = this.createTransport(e);
} catch (e) {
f("error while creating transport: %s", e);
this.transports.shift();
this.open();
return;
}
e.open();
this.setTransport(e);
}
setTransport(e) {
f("setting transport %s", e.name);
if (this.transport) {
f("clearing existing transport %s", this.transport.name);
this.transport.removeAllListeners();
}
this.transport = e;
e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", e => this.onClose("transport close", e));
}
probe(e) {
f('probing transport "%s"', e);
let t = this.createTransport(e), n = !1;
u.priorWebsocketSuccess = !1;
const o = () => {
if (!n) {
f('probe transport "%s" opened', e);
t.send([ {
type: "ping",
data: "probe"
} ]);
t.once("packet", o => {
if (!n) if ("pong" === o.type && "probe" === o.data) {
f('probe transport "%s" pong', e);
this.upgrading = !0;
this.emitReserved("upgrading", t);
if (!t) return;
u.priorWebsocketSuccess = "websocket" === t.name;
f('pausing current transport "%s"', this.transport.name);
this.transport.pause(() => {
if (!n && "closed" !== this.readyState) {
f("changing transport and sending upgrade packet");
l();
this.setTransport(t);
t.send([ {
type: "upgrade"
} ]);
this.emitReserved("upgrade", t);
t = null;
this.upgrading = !1;
this.flush();
}
});
} else {
f('probe transport "%s" failed', e);
const n = new Error("probe error");
n.transport = t.name;
this.emitReserved("upgradeError", n);
}
});
}
};
function s() {
if (!n) {
n = !0;
l();
t.close();
t = null;
}
}
const r = n => {
const o = new Error("probe error: " + n);
o.transport = t.name;
s();
f('probe transport "%s" failed because of error: %s', e, n);
this.emitReserved("upgradeError", o);
};
function i() {
r("transport closed");
}
function c() {
r("socket closed");
}
function a(e) {
if (t && e.name !== t.name) {
f('"%s" works - aborting "%s"', e.name, t.name);
s();
}
}
const l = () => {
t.removeListener("open", o);
t.removeListener("error", r);
t.removeListener("close", i);
this.off("close", c);
this.off("upgrading", a);
};
t.once("open", o);
t.once("error", r);
t.once("close", i);
this.once("close", c);
this.once("upgrading", a);
t.open();
}
onOpen() {
f("socket open");
this.readyState = "open";
u.priorWebsocketSuccess = "websocket" === this.transport.name;
this.emitReserved("open");
this.flush();
if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
f("starting upgrade probes");
let e = 0;
const t = this.upgrades.length;
for (;e < t; e++) this.probe(this.upgrades[e]);
}
}
onPacket(e) {
if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
f('socket receive: type "%s", data "%s"', e.type, e.data);
this.emitReserved("packet", e);
this.emitReserved("heartbeat");
switch (e.type) {
case "open":
this.onHandshake(JSON.parse(e.data));
break;

case "ping":
this.resetPingTimeout();
this.sendPacket("pong");
this.emitReserved("ping");
this.emitReserved("pong");
break;

case "error":
const t = new Error("server error");
t.code = e.data;
this.onError(t);
break;

case "message":
this.emitReserved("data", e.data);
this.emitReserved("message", e.data);
}
} else f('packet received with socket readyState "%s"', this.readyState);
}
onHandshake(e) {
this.emitReserved("handshake", e);
this.id = e.sid;
this.transport.query.sid = e.sid;
this.upgrades = this.filterUpgrades(e.upgrades);
this.pingInterval = e.pingInterval;
this.pingTimeout = e.pingTimeout;
this.maxPayload = e.maxPayload;
this.onOpen();
"closed" !== this.readyState && this.resetPingTimeout();
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
const e = this.getWritablePackets();
f("flushing %d packets in socket", e.length);
this.transport.send(e);
this.prevBufferLen = e.length;
this.emitReserved("flush");
}
}
getWritablePackets() {
if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
let e = 1;
for (let t = 0; t < this.writeBuffer.length; t++) {
const n = this.writeBuffer[t].data;
n && (e += (0, r.byteLength)(n));
if (t > 0 && e > this.maxPayload) {
f("only send %d out of %d packets", t, this.writeBuffer.length);
return this.writeBuffer.slice(0, t);
}
e += 2;
}
f("payload size is %d (max: %d)", e, this.maxPayload);
return this.writeBuffer;
}
write(e, t, n) {
this.sendPacket("message", e, t, n);
return this;
}
send(e, t, n) {
this.sendPacket("message", e, t, n);
return this;
}
sendPacket(e, t, n, o) {
if ("function" == typeof t) {
o = t;
t = void 0;
}
if ("function" == typeof n) {
o = n;
n = null;
}
if ("closing" === this.readyState || "closed" === this.readyState) return;
(n = n || {}).compress = !1 !== n.compress;
const s = {
type: e,
data: t,
options: n
};
this.emitReserved("packetCreate", s);
this.writeBuffer.push(s);
o && this.once("flush", o);
this.flush();
}
close() {
const e = () => {
this.onClose("forced close");
f("socket closing - telling transport to close");
this.transport.close();
}, t = () => {
this.off("upgrade", t);
this.off("upgradeError", t);
e();
}, n = () => {
this.once("upgrade", t);
this.once("upgradeError", t);
};
if ("opening" === this.readyState || "open" === this.readyState) {
this.readyState = "closing";
this.writeBuffer.length ? this.once("drain", () => {
this.upgrading ? n() : e();
}) : this.upgrading ? n() : e();
}
return this;
}
onError(e) {
f("socket error %j", e);
u.priorWebsocketSuccess = !1;
this.emitReserved("error", e);
this.onClose("transport error", e);
}
onClose(e, t) {
if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
f('socket close with reason: "%s"', e);
this.clearTimeoutFn(this.pingTimeoutTimer);
this.transport.removeAllListeners("close");
this.transport.close();
this.transport.removeAllListeners();
"function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1);
this.readyState = "closed";
this.id = null;
this.emitReserved("close", e, t);
this.writeBuffer = [];
this.prevBufferLen = 0;
}
}
filterUpgrades(e) {
const t = [];
let n = 0;
const o = e.length;
for (;n < o; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
return t;
}
}
n.Socket = u;
u.protocol = h.protocol;
}, {
"./contrib/parseqs.js": 10,
"./contrib/parseuri.js": 11,
"./transports/index.js": 17,
"./util.js": 22,
"@socket.io/component-emitter": 6,
debug: 7,
"engine.io-parser": 27
} ],
16: [ function(e, t, n) {
"use strict";
var o = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Transport = void 0;
const s = e("engine.io-parser"), r = e("@socket.io/component-emitter"), i = e("./util.js"), c = (0, 
o(e("debug")).default)("engine.io-client:transport");
class a extends Error {
constructor(e, t, n) {
super(e);
this.description = t;
this.context = n;
this.type = "TransportError";
}
}
n.Transport = class extends r.Emitter {
constructor(e) {
super();
this.writable = !1;
(0, i.installTimerFunctions)(this, e);
this.opts = e;
this.query = e.query;
this.readyState = "";
this.socket = e.socket;
}
onError(e, t, n) {
super.emitReserved("error", new a(e, t, n));
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
send(e) {
"open" === this.readyState ? this.write(e) : c("transport is not open, discarding packets");
}
onOpen() {
this.readyState = "open";
this.writable = !0;
super.emitReserved("open");
}
onData(e) {
const t = (0, s.decodePacket)(e, this.socket.binaryType);
this.onPacket(t);
}
onPacket(e) {
super.emitReserved("packet", e);
}
onClose(e) {
this.readyState = "closed";
super.emitReserved("close", e);
}
};
}, {
"./util.js": 22,
"@socket.io/component-emitter": 6,
debug: 7,
"engine.io-parser": 27
} ],
17: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.transports = void 0;
const o = e("./polling.js"), s = e("./websocket.js");
n.transports = {
websocket: s.WS,
polling: o.Polling
};
}, {
"./polling.js": 18,
"./websocket.js": 20
} ],
18: [ function(e, t, n) {
"use strict";
var o = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Request = n.Polling = void 0;
const s = e("../transport.js"), r = o(e("debug")), i = e("../contrib/yeast.js"), c = e("../contrib/parseqs.js"), a = e("engine.io-parser"), l = e("./xmlhttprequest.js"), h = e("@socket.io/component-emitter"), f = e("../util.js"), u = e("../globalThis.js"), d = (0, 
r.default)("engine.io-client:polling");
function p() {}
const y = null != new l.XHR({
xdomain: !1
}).responseType;
n.Polling = class extends s.Transport {
constructor(e) {
super(e);
this.polling = !1;
if ("undefined" != typeof location) {
const t = "https:" === location.protocol;
let n = location.port;
n || (n = t ? "443" : "80");
this.xd = "undefined" != typeof location && e.hostname !== location.hostname || n !== e.port;
this.xs = e.secure !== t;
}
const t = e && e.forceBase64;
this.supportsBinary = y && !t;
}
get name() {
return "polling";
}
doOpen() {
this.poll();
}
pause(e) {
this.readyState = "pausing";
const t = () => {
d("paused");
this.readyState = "paused";
e();
};
if (this.polling || !this.writable) {
let e = 0;
if (this.polling) {
d("we are currently polling - waiting to pause");
e++;
this.once("pollComplete", function() {
d("pre-pause polling complete");
--e || t();
});
}
if (!this.writable) {
d("we are currently writing - waiting to pause");
e++;
this.once("drain", function() {
d("pre-pause writing complete");
--e || t();
});
}
} else t();
}
poll() {
d("polling");
this.polling = !0;
this.doPoll();
this.emitReserved("poll");
}
onData(e) {
d("polling got data %s", e);
(0, a.decodePayload)(e, this.socket.binaryType).forEach(e => {
"opening" === this.readyState && "open" === e.type && this.onOpen();
if ("close" === e.type) {
this.onClose({
description: "transport closed by the server"
});
return !1;
}
this.onPacket(e);
});
if ("closed" !== this.readyState) {
this.polling = !1;
this.emitReserved("pollComplete");
"open" === this.readyState ? this.poll() : d('ignoring poll - transport state "%s"', this.readyState);
}
}
doClose() {
const e = () => {
d("writing close packet");
this.write([ {
type: "close"
} ]);
};
if ("open" === this.readyState) {
d("transport open - closing");
e();
} else {
d("transport not open - deferring close");
this.once("open", e);
}
}
write(e) {
this.writable = !1;
(0, a.encodePayload)(e, e => {
this.doWrite(e, () => {
this.writable = !0;
this.emitReserved("drain");
});
});
}
uri() {
let e = this.query || {};
const t = this.opts.secure ? "https" : "http";
let n = "";
!1 !== this.opts.timestampRequests && (e[this.opts.timestampParam] = (0, i.yeast)());
this.supportsBinary || e.sid || (e.b64 = 1);
this.opts.port && ("https" === t && 443 !== Number(this.opts.port) || "http" === t && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port);
const o = (0, c.encode)(e);
return t + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (o.length ? "?" + o : "");
}
request(e = {}) {
Object.assign(e, {
xd: this.xd,
xs: this.xs
}, this.opts);
return new g(this.uri(), e);
}
doWrite(e, t) {
const n = this.request({
method: "POST",
data: e
});
n.on("success", t);
n.on("error", (e, t) => {
this.onError("xhr post error", e, t);
});
}
doPoll() {
d("xhr poll");
const e = this.request();
e.on("data", this.onData.bind(this));
e.on("error", (e, t) => {
this.onError("xhr poll error", e, t);
});
this.pollXhr = e;
}
};
class g extends h.Emitter {
constructor(e, t) {
super();
(0, f.installTimerFunctions)(this, t);
this.opts = t;
this.method = t.method || "GET";
this.uri = e;
this.async = !1 !== t.async;
this.data = void 0 !== t.data ? t.data : null;
this.create();
}
create() {
const e = (0, f.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
e.xdomain = !!this.opts.xd;
e.xscheme = !!this.opts.xs;
const t = this.xhr = new l.XHR(e);
try {
d("xhr open %s: %s", this.method, this.uri);
t.open(this.method, this.uri, this.async);
try {
if (this.opts.extraHeaders) {
t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
for (let e in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(e) && t.setRequestHeader(e, this.opts.extraHeaders[e]);
}
} catch (e) {}
if ("POST" === this.method) try {
t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
} catch (e) {}
try {
t.setRequestHeader("Accept", "*/*");
} catch (e) {}
"withCredentials" in t && (t.withCredentials = this.opts.withCredentials);
this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout);
t.onreadystatechange = () => {
4 === t.readyState && (200 === t.status || 1223 === t.status ? this.onLoad() : this.setTimeoutFn(() => {
this.onError("number" == typeof t.status ? t.status : 0);
}, 0));
};
d("xhr data %s", this.data);
t.send(this.data);
} catch (e) {
this.setTimeoutFn(() => {
this.onError(e);
}, 0);
return;
}
if ("undefined" != typeof document) {
this.index = g.requestsCount++;
g.requests[this.index] = this;
}
}
onError(e) {
this.emitReserved("error", e, this.xhr);
this.cleanup(!0);
}
cleanup(e) {
if ("undefined" != typeof this.xhr && null !== this.xhr) {
this.xhr.onreadystatechange = p;
if (e) try {
this.xhr.abort();
} catch (e) {}
"undefined" != typeof document && delete g.requests[this.index];
this.xhr = null;
}
}
onLoad() {
const e = this.xhr.responseText;
if (null !== e) {
this.emitReserved("data", e);
this.emitReserved("success");
this.cleanup();
}
}
abort() {
this.cleanup();
}
}
n.Request = g;
g.requestsCount = 0;
g.requests = {};
if ("undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", m); else if ("function" == typeof addEventListener) {
const e = "onpagehide" in u.globalThisShim ? "pagehide" : "unload";
addEventListener(e, m, !1);
}
function m() {
for (let e in g.requests) g.requests.hasOwnProperty(e) && g.requests[e].abort();
}
}, {
"../contrib/parseqs.js": 10,
"../contrib/yeast.js": 12,
"../globalThis.js": 13,
"../transport.js": 16,
"../util.js": 22,
"./xmlhttprequest.js": 21,
"@socket.io/component-emitter": 6,
debug: 7,
"engine.io-parser": 27
} ],
19: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.defaultBinaryType = n.usingBrowserWebSocket = n.WebSocket = n.nextTick = void 0;
const o = e("../globalThis.js");
n.nextTick = "function" == typeof Promise && "function" == typeof Promise.resolve ? e => Promise.resolve().then(e) : (e, t) => t(e, 0);
n.WebSocket = o.globalThisShim.WebSocket || o.globalThisShim.MozWebSocket;
n.usingBrowserWebSocket = !0;
n.defaultBinaryType = "arraybuffer";
}, {
"../globalThis.js": 13
} ],
20: [ function(e, t, n) {
(function(t) {
"use strict";
var o = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.WS = void 0;
const s = e("../transport.js"), r = e("../contrib/parseqs.js"), i = e("../contrib/yeast.js"), c = e("../util.js"), a = e("./websocket-constructor.js"), l = o(e("debug")), h = e("engine.io-parser"), f = (0, 
l.default)("engine.io-client:websocket"), u = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
n.WS = class extends s.Transport {
constructor(e) {
super(e);
this.supportsBinary = !e.forceBase64;
}
get name() {
return "websocket";
}
doOpen() {
if (!this.check()) return;
const e = this.uri(), t = this.opts.protocols, n = u ? {} : (0, c.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
try {
this.ws = a.usingBrowserWebSocket && !u ? t ? new a.WebSocket(e, t) : new a.WebSocket(e) : new a.WebSocket(e, t, n);
} catch (e) {
return this.emitReserved("error", e);
}
this.ws.binaryType = this.socket.binaryType || a.defaultBinaryType;
this.addEventListeners();
}
addEventListeners() {
this.ws.onopen = () => {
this.opts.autoUnref && this.ws._socket.unref();
this.onOpen();
};
this.ws.onclose = e => this.onClose({
description: "websocket connection closed",
context: e
});
this.ws.onmessage = e => this.onData(e.data);
this.ws.onerror = e => this.onError("websocket error", e);
}
write(e) {
this.writable = !1;
for (let n = 0; n < e.length; n++) {
const o = e[n], s = n === e.length - 1;
(0, h.encodePacket)(o, this.supportsBinary, e => {
const n = {};
if (!a.usingBrowserWebSocket) {
o.options && (n.compress = o.options.compress);
this.opts.perMessageDeflate && ("string" == typeof e ? t.byteLength(e) : e.length) < this.opts.perMessageDeflate.threshold && (n.compress = !1);
}
try {
a.usingBrowserWebSocket ? this.ws.send(e) : this.ws.send(e, n);
} catch (e) {
f("websocket closed before onclose event");
}
s && (0, a.nextTick)(() => {
this.writable = !0;
this.emitReserved("drain");
}, this.setTimeoutFn);
});
}
}
doClose() {
if ("undefined" != typeof this.ws) {
this.ws.close();
this.ws = null;
}
}
uri() {
let e = this.query || {};
const t = this.opts.secure ? "wss" : "ws";
let n = "";
this.opts.port && ("wss" === t && 443 !== Number(this.opts.port) || "ws" === t && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port);
this.opts.timestampRequests && (e[this.opts.timestampParam] = (0, i.yeast)());
this.supportsBinary || (e.b64 = 1);
const o = (0, r.encode)(e);
return t + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (o.length ? "?" + o : "");
}
check() {
return !!a.WebSocket;
}
};
}).call(this, e("buffer").Buffer);
}, {
"../contrib/parseqs.js": 10,
"../contrib/yeast.js": 12,
"../transport.js": 16,
"../util.js": 22,
"./websocket-constructor.js": 19,
buffer: 2,
debug: 7,
"engine.io-parser": 27
} ],
21: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.XHR = void 0;
const o = e("../contrib/has-cors.js"), s = e("../globalThis.js");
n.XHR = function(e) {
const t = e.xdomain;
try {
if ("undefined" != typeof XMLHttpRequest && (!t || o.hasCORS)) return new XMLHttpRequest();
} catch (e) {}
if (!t) try {
return new (s.globalThisShim[[ "Active" ].concat("Object").join("X")])("Microsoft.XMLHTTP");
} catch (e) {}
};
}, {
"../contrib/has-cors.js": 9,
"../globalThis.js": 13
} ],
22: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.byteLength = n.installTimerFunctions = n.pick = void 0;
const o = e("./globalThis.js");
n.pick = function(e, ...t) {
return t.reduce((t, n) => {
e.hasOwnProperty(n) && (t[n] = e[n]);
return t;
}, {});
};
const s = setTimeout, r = clearTimeout;
n.installTimerFunctions = function(e, t) {
if (t.useNativeTimers) {
e.setTimeoutFn = s.bind(o.globalThisShim);
e.clearTimeoutFn = r.bind(o.globalThisShim);
} else {
e.setTimeoutFn = setTimeout.bind(o.globalThisShim);
e.clearTimeoutFn = clearTimeout.bind(o.globalThisShim);
}
};
n.byteLength = function(e) {
return "string" == typeof e ? i(e) : Math.ceil(1.33 * (e.byteLength || e.size));
};
function i(e) {
let t = 0, n = 0;
for (let o = 0, s = e.length; o < s; o++) if ((t = e.charCodeAt(o)) < 128) n += 1; else if (t < 2048) n += 2; else if (t < 55296 || t >= 57344) n += 3; else {
o++;
n += 4;
}
return n;
}
}, {
"./globalThis.js": 13
} ],
23: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ERROR_PACKET = n.PACKET_TYPES_REVERSE = n.PACKET_TYPES = void 0;
const o = Object.create(null);
n.PACKET_TYPES = o;
o.open = "0";
o.close = "1";
o.ping = "2";
o.pong = "3";
o.message = "4";
o.upgrade = "5";
o.noop = "6";
const s = Object.create(null);
n.PACKET_TYPES_REVERSE = s;
Object.keys(o).forEach(e => {
s[o[e]] = e;
});
n.ERROR_PACKET = {
type: "error",
data: "parser error"
};
}, {} ],
24: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.decode = n.encode = void 0;
const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
for (let e = 0; e < o.length; e++) s[o.charCodeAt(e)] = e;
n.encode = e => {
let t, n = new Uint8Array(e), s = n.length, r = "";
for (t = 0; t < s; t += 3) {
r += o[n[t] >> 2];
r += o[(3 & n[t]) << 4 | n[t + 1] >> 4];
r += o[(15 & n[t + 1]) << 2 | n[t + 2] >> 6];
r += o[63 & n[t + 2]];
}
s % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : s % 3 == 1 && (r = r.substring(0, r.length - 2) + "==");
return r;
};
n.decode = e => {
let t, n, o, r, i, c = .75 * e.length, a = e.length, l = 0;
if ("=" === e[e.length - 1]) {
c--;
"=" === e[e.length - 2] && c--;
}
const h = new ArrayBuffer(c), f = new Uint8Array(h);
for (t = 0; t < a; t += 4) {
n = s[e.charCodeAt(t)];
o = s[e.charCodeAt(t + 1)];
r = s[e.charCodeAt(t + 2)];
i = s[e.charCodeAt(t + 3)];
f[l++] = n << 2 | o >> 4;
f[l++] = (15 & o) << 4 | r >> 2;
f[l++] = (3 & r) << 6 | 63 & i;
}
return h;
};
}, {} ],
25: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
const o = e("./commons.js"), s = e("./contrib/base64-arraybuffer.js"), r = "function" == typeof ArrayBuffer, i = (e, t) => {
if (r) {
const n = (0, s.decode)(e);
return c(n, t);
}
return {
base64: !0,
data: e
};
}, c = (e, t) => {
switch (t) {
case "blob":
return e instanceof ArrayBuffer ? new Blob([ e ]) : e;

case "arraybuffer":
default:
return e;
}
};
n.default = (e, t) => {
if ("string" != typeof e) return {
type: "message",
data: c(e, t)
};
const n = e.charAt(0);
return "b" === n ? {
type: "message",
data: i(e.substring(1), t)
} : o.PACKET_TYPES_REVERSE[n] ? e.length > 1 ? {
type: o.PACKET_TYPES_REVERSE[n],
data: e.substring(1)
} : {
type: o.PACKET_TYPES_REVERSE[n]
} : o.ERROR_PACKET;
};
}, {
"./commons.js": 23,
"./contrib/base64-arraybuffer.js": 24
} ],
26: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
const o = e("./commons.js"), s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), r = "function" == typeof ArrayBuffer, i = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, c = (e, t) => {
const n = new FileReader();
n.onload = function() {
const e = n.result.split(",")[1];
t("b" + e);
};
return n.readAsDataURL(e);
};
n.default = ({type: e, data: t}, n, a) => s && t instanceof Blob ? n ? a(t) : c(t, a) : r && (t instanceof ArrayBuffer || i(t)) ? n ? a(t) : c(new Blob([ t ]), a) : a(o.PACKET_TYPES[e] + (t || ""));
}, {
"./commons.js": 23
} ],
27: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.decodePayload = n.decodePacket = n.encodePayload = n.encodePacket = n.protocol = void 0;
const o = e("./encodePacket.js");
n.encodePacket = o.default;
const s = e("./decodePacket.js");
n.decodePacket = s.default;
const r = String.fromCharCode(30);
n.encodePayload = (e, t) => {
const n = e.length, s = new Array(n);
let i = 0;
e.forEach((e, c) => {
(0, o.default)(e, !1, e => {
s[c] = e;
++i === n && t(s.join(r));
});
});
};
n.decodePayload = (e, t) => {
const n = e.split(r), o = [];
for (let e = 0; e < n.length; e++) {
const r = (0, s.default)(n[e], t);
o.push(r);
if ("error" === r.type) break;
}
return o;
};
n.protocol = 4;
}, {
"./decodePacket.js": 25,
"./encodePacket.js": 26
} ],
28: [ function(e, t) {
var n = 1e3, o = 60 * n, s = 60 * o, r = 24 * s, i = 7 * r, c = 365.25 * r;
t.exports = function(e, t) {
t = t || {};
var i, c, f = typeof e;
if ("string" === f && e.length > 0) return a(e);
if ("number" === f && isFinite(e)) return t.long ? (i = e, (c = Math.abs(i)) >= r ? h(i, c, r, "day") : c >= s ? h(i, c, s, "hour") : c >= o ? h(i, c, o, "minute") : c >= n ? h(i, c, n, "second") : i + " ms") : l(e);
throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
};
function a(e) {
if (!((e = String(e)).length > 100)) {
var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
if (t) {
var a = parseFloat(t[1]);
switch ((t[2] || "ms").toLowerCase()) {
case "years":
case "year":
case "yrs":
case "yr":
case "y":
return a * c;

case "weeks":
case "week":
case "w":
return a * i;

case "days":
case "day":
case "d":
return a * r;

case "hours":
case "hour":
case "hrs":
case "hr":
case "h":
return a * s;

case "minutes":
case "minute":
case "mins":
case "min":
case "m":
return a * o;

case "seconds":
case "second":
case "secs":
case "sec":
case "s":
return a * n;

case "milliseconds":
case "millisecond":
case "msecs":
case "msec":
case "ms":
return a;

default:
return;
}
}
}
}
function l(e) {
var t = Math.abs(e);
return t >= r ? Math.round(e / r) + "d" : t >= s ? Math.round(e / s) + "h" : t >= o ? Math.round(e / o) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms";
}
function h(e, t, n, o) {
var s = t >= 1.5 * n;
return Math.round(e / n) + " " + o + (s ? "s" : "");
}
}, {} ],
29: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Backoff = void 0;
function o(e) {
e = e || {};
this.ms = e.min || 100;
this.max = e.max || 1e4;
this.factor = e.factor || 2;
this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0;
this.attempts = 0;
}
n.Backoff = o;
o.prototype.duration = function() {
var e = this.ms * Math.pow(this.factor, this.attempts++);
if (this.jitter) {
var t = Math.random(), n = Math.floor(t * this.jitter * e);
e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
}
return 0 | Math.min(e, this.max);
};
o.prototype.reset = function() {
this.attempts = 0;
};
o.prototype.setMin = function(e) {
this.ms = e;
};
o.prototype.setMax = function(e) {
this.max = e;
};
o.prototype.setJitter = function(e) {
this.jitter = e;
};
}, {} ],
30: [ function(e, t, n) {
"use strict";
var o = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = n.connect = n.io = n.Socket = n.Manager = n.protocol = void 0;
const s = e("./url.js"), r = e("./manager.js");
Object.defineProperty(n, "Manager", {
enumerable: !0,
get: function() {
return r.Manager;
}
});
const i = e("./socket.js");
Object.defineProperty(n, "Socket", {
enumerable: !0,
get: function() {
return i.Socket;
}
});
const c = o(e("debug")).default("socket.io-client"), a = {};
function l(e, t) {
if ("object" == typeof e) {
t = e;
e = void 0;
}
t = t || {};
const n = s.url(e, t.path || "/socket.io"), o = n.source, i = n.id, l = n.path, h = a[i] && l in a[i].nsps;
let f;
if (t.forceNew || t["force new connection"] || !1 === t.multiplex || h) {
c("ignoring socket cache for %s", o);
f = new r.Manager(o, t);
} else {
if (!a[i]) {
c("new io instance for %s", o);
a[i] = new r.Manager(o, t);
}
f = a[i];
}
n.query && !t.query && (t.query = n.queryKey);
return f.socket(n.path, t);
}
n.io = l;
n.connect = l;
n.default = l;
Object.assign(l, {
Manager: r.Manager,
Socket: i.Socket,
io: l,
connect: l
});
var h = e("socket.io-parser");
Object.defineProperty(n, "protocol", {
enumerable: !0,
get: function() {
return h.protocol;
}
});
t.exports = l;
}, {
"./manager.js": 31,
"./socket.js": 33,
"./url.js": 34,
debug: 7,
"socket.io-parser": 36
} ],
31: [ function(e, t, n) {
"use strict";
var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
void 0 === o && (o = n);
Object.defineProperty(e, o, {
enumerable: !0,
get: function() {
return t[n];
}
});
} : function(e, t, n, o) {
void 0 === o && (o = n);
e[o] = t[n];
}), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
Object.defineProperty(e, "default", {
enumerable: !0,
value: t
});
} : function(e, t) {
e.default = t;
}), r = this && this.__importStar || function(e) {
if (e && e.__esModule) return e;
var t = {};
if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
s(t, e);
return t;
}, i = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Manager = void 0;
const c = e("engine.io-client"), a = e("./socket.js"), l = r(e("socket.io-parser")), h = e("./on.js"), f = e("./contrib/backo2.js"), u = e("@socket.io/component-emitter"), d = i(e("debug")).default("socket.io-client:manager");
n.Manager = class extends u.Emitter {
constructor(e, t) {
var n;
super();
this.nsps = {};
this.subs = [];
if (e && "object" == typeof e) {
t = e;
e = void 0;
}
(t = t || {}).path = t.path || "/socket.io";
this.opts = t;
c.installTimerFunctions(this, t);
this.reconnection(!1 !== t.reconnection);
this.reconnectionAttempts(t.reconnectionAttempts || Infinity);
this.reconnectionDelay(t.reconnectionDelay || 1e3);
this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3);
this.randomizationFactor(null !== (n = t.randomizationFactor) && void 0 !== n ? n : .5);
this.backoff = new f.Backoff({
min: this.reconnectionDelay(),
max: this.reconnectionDelayMax(),
jitter: this.randomizationFactor()
});
this.timeout(null == t.timeout ? 2e4 : t.timeout);
this._readyState = "closed";
this.uri = e;
const o = t.parser || l;
this.encoder = new o.Encoder();
this.decoder = new o.Decoder();
this._autoConnect = !1 !== t.autoConnect;
this._autoConnect && this.open();
}
reconnection(e) {
if (!arguments.length) return this._reconnection;
this._reconnection = !!e;
return this;
}
reconnectionAttempts(e) {
if (void 0 === e) return this._reconnectionAttempts;
this._reconnectionAttempts = e;
return this;
}
reconnectionDelay(e) {
var t;
if (void 0 === e) return this._reconnectionDelay;
this._reconnectionDelay = e;
null === (t = this.backoff) || void 0 === t || t.setMin(e);
return this;
}
randomizationFactor(e) {
var t;
if (void 0 === e) return this._randomizationFactor;
this._randomizationFactor = e;
null === (t = this.backoff) || void 0 === t || t.setJitter(e);
return this;
}
reconnectionDelayMax(e) {
var t;
if (void 0 === e) return this._reconnectionDelayMax;
this._reconnectionDelayMax = e;
null === (t = this.backoff) || void 0 === t || t.setMax(e);
return this;
}
timeout(e) {
if (!arguments.length) return this._timeout;
this._timeout = e;
return this;
}
maybeReconnectOnOpen() {
!this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
}
open(e) {
d("readyState %s", this._readyState);
if (~this._readyState.indexOf("open")) return this;
d("opening %s", this.uri);
this.engine = new c.Socket(this.uri, this.opts);
const t = this.engine, n = this;
this._readyState = "opening";
this.skipReconnect = !1;
const o = h.on(t, "open", function() {
n.onopen();
e && e();
}), s = h.on(t, "error", t => {
d("error");
n.cleanup();
n._readyState = "closed";
this.emitReserved("error", t);
e ? e(t) : n.maybeReconnectOnOpen();
});
if (!1 !== this._timeout) {
const e = this._timeout;
d("connect attempt will timeout after %d", e);
0 === e && o();
const n = this.setTimeoutFn(() => {
d("connect attempt timed out after %d", e);
o();
t.close();
t.emit("error", new Error("timeout"));
}, e);
this.opts.autoUnref && n.unref();
this.subs.push(function() {
clearTimeout(n);
});
}
this.subs.push(o);
this.subs.push(s);
return this;
}
connect(e) {
return this.open(e);
}
onopen() {
d("open");
this.cleanup();
this._readyState = "open";
this.emitReserved("open");
const e = this.engine;
this.subs.push(h.on(e, "ping", this.onping.bind(this)), h.on(e, "data", this.ondata.bind(this)), h.on(e, "error", this.onerror.bind(this)), h.on(e, "close", this.onclose.bind(this)), h.on(this.decoder, "decoded", this.ondecoded.bind(this)));
}
onping() {
this.emitReserved("ping");
}
ondata(e) {
this.decoder.add(e);
}
ondecoded(e) {
this.emitReserved("packet", e);
}
onerror(e) {
d("error", e);
this.emitReserved("error", e);
}
socket(e, t) {
let n = this.nsps[e];
if (!n) {
n = new a.Socket(this, e, t);
this.nsps[e] = n;
}
return n;
}
_destroy(e) {
const t = Object.keys(this.nsps);
for (const e of t) if (this.nsps[e].active) {
d("socket %s is still active, skipping close", e);
return;
}
this._close();
}
_packet(e) {
d("writing packet %j", e);
const t = this.encoder.encode(e);
for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
}
cleanup() {
d("cleanup");
this.subs.forEach(e => e());
this.subs.length = 0;
this.decoder.destroy();
}
_close() {
d("disconnect");
this.skipReconnect = !0;
this._reconnecting = !1;
this.onclose("forced close");
this.engine && this.engine.close();
}
disconnect() {
return this._close();
}
onclose(e, t) {
d("closed due to %s", e);
this.cleanup();
this.backoff.reset();
this._readyState = "closed";
this.emitReserved("close", e, t);
this._reconnection && !this.skipReconnect && this.reconnect();
}
reconnect() {
if (this._reconnecting || this.skipReconnect) return this;
const e = this;
if (this.backoff.attempts >= this._reconnectionAttempts) {
d("reconnect failed");
this.backoff.reset();
this.emitReserved("reconnect_failed");
this._reconnecting = !1;
} else {
const t = this.backoff.duration();
d("will wait %dms before reconnect attempt", t);
this._reconnecting = !0;
const n = this.setTimeoutFn(() => {
if (!e.skipReconnect) {
d("attempting reconnect");
this.emitReserved("reconnect_attempt", e.backoff.attempts);
e.skipReconnect || e.open(t => {
if (t) {
d("reconnect attempt error");
e._reconnecting = !1;
e.reconnect();
this.emitReserved("reconnect_error", t);
} else {
d("reconnect success");
e.onreconnect();
}
});
}
}, t);
this.opts.autoUnref && n.unref();
this.subs.push(function() {
clearTimeout(n);
});
}
}
onreconnect() {
const e = this.backoff.attempts;
this._reconnecting = !1;
this.backoff.reset();
this.emitReserved("reconnect", e);
}
};
}, {
"./contrib/backo2.js": 29,
"./on.js": 32,
"./socket.js": 33,
"@socket.io/component-emitter": 6,
debug: 7,
"engine.io-client": 14,
"socket.io-parser": 36
} ],
32: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.on = void 0;
n.on = function(e, t, n) {
e.on(t, n);
return function() {
e.off(t, n);
};
};
}, {} ],
33: [ function(e, t, n) {
"use strict";
var o = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Socket = void 0;
const s = e("socket.io-parser"), r = e("./on.js"), i = e("@socket.io/component-emitter"), c = o(e("debug")).default("socket.io-client:socket"), a = Object.freeze({
connect: 1,
connect_error: 1,
disconnect: 1,
disconnecting: 1,
newListener: 1,
removeListener: 1
});
n.Socket = class extends i.Emitter {
constructor(e, t, n) {
super();
this.connected = !1;
this.receiveBuffer = [];
this.sendBuffer = [];
this.ids = 0;
this.acks = {};
this.flags = {};
this.io = e;
this.nsp = t;
n && n.auth && (this.auth = n.auth);
this.io._autoConnect && this.open();
}
get disconnected() {
return !this.connected;
}
subEvents() {
if (this.subs) return;
const e = this.io;
this.subs = [ r.on(e, "open", this.onopen.bind(this)), r.on(e, "packet", this.onpacket.bind(this)), r.on(e, "error", this.onerror.bind(this)), r.on(e, "close", this.onclose.bind(this)) ];
}
get active() {
return !!this.subs;
}
connect() {
if (this.connected) return this;
this.subEvents();
this.io._reconnecting || this.io.open();
"open" === this.io._readyState && this.onopen();
return this;
}
open() {
return this.connect();
}
send(...e) {
e.unshift("message");
this.emit.apply(this, e);
return this;
}
emit(e, ...t) {
if (a.hasOwnProperty(e)) throw new Error('"' + e + '" is a reserved event name');
t.unshift(e);
const n = {
type: s.PacketType.EVENT,
data: t,
options: {}
};
n.options.compress = !1 !== this.flags.compress;
if ("function" == typeof t[t.length - 1]) {
const e = this.ids++;
c("emitting packet with ack id %d", e);
const o = t.pop();
this._registerAckCallback(e, o);
n.id = e;
}
const o = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
if (!this.flags.volatile || o && this.connected) if (this.connected) {
this.notifyOutgoingListeners(n);
this.packet(n);
} else this.sendBuffer.push(n); else c("discard packet as the transport is not currently writable");
this.flags = {};
return this;
}
_registerAckCallback(e, t) {
const n = this.flags.timeout;
if (void 0 === n) {
this.acks[e] = t;
return;
}
const o = this.io.setTimeoutFn(() => {
delete this.acks[e];
for (let t = 0; t < this.sendBuffer.length; t++) if (this.sendBuffer[t].id === e) {
c("removing packet with ack id %d from the buffer", e);
this.sendBuffer.splice(t, 1);
}
c("event with ack id %d has timed out after %d ms", e, n);
t.call(this, new Error("operation has timed out"));
}, n);
this.acks[e] = (...e) => {
this.io.clearTimeoutFn(o);
t.apply(this, [ null, ...e ]);
};
}
packet(e) {
e.nsp = this.nsp;
this.io._packet(e);
}
onopen() {
c("transport is open - connecting");
"function" == typeof this.auth ? this.auth(e => {
this.packet({
type: s.PacketType.CONNECT,
data: e
});
}) : this.packet({
type: s.PacketType.CONNECT,
data: this.auth
});
}
onerror(e) {
this.connected || this.emitReserved("connect_error", e);
}
onclose(e, t) {
c("close (%s)", e);
this.connected = !1;
delete this.id;
this.emitReserved("disconnect", e, t);
}
onpacket(e) {
if (e.nsp === this.nsp) switch (e.type) {
case s.PacketType.CONNECT:
if (e.data && e.data.sid) {
const t = e.data.sid;
this.onconnect(t);
} else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
break;

case s.PacketType.EVENT:
case s.PacketType.BINARY_EVENT:
this.onevent(e);
break;

case s.PacketType.ACK:
case s.PacketType.BINARY_ACK:
this.onack(e);
break;

case s.PacketType.DISCONNECT:
this.ondisconnect();
break;

case s.PacketType.CONNECT_ERROR:
this.destroy();
const t = new Error(e.data.message);
t.data = e.data.data;
this.emitReserved("connect_error", t);
}
}
onevent(e) {
const t = e.data || [];
c("emitting event %j", t);
if (null != e.id) {
c("attaching ack callback to event");
t.push(this.ack(e.id));
}
this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
}
emitEvent(e) {
if (this._anyListeners && this._anyListeners.length) {
const t = this._anyListeners.slice();
for (const n of t) n.apply(this, e);
}
super.emit.apply(this, e);
}
ack(e) {
const t = this;
let n = !1;
return function(...o) {
if (!n) {
n = !0;
c("sending ack %j", o);
t.packet({
type: s.PacketType.ACK,
id: e,
data: o
});
}
};
}
onack(e) {
const t = this.acks[e.id];
if ("function" == typeof t) {
c("calling ack %s with %j", e.id, e.data);
t.apply(this, e.data);
delete this.acks[e.id];
} else c("bad ack %s", e.id);
}
onconnect(e) {
c("socket connected with id %s", e);
this.id = e;
this.connected = !0;
this.emitBuffered();
this.emitReserved("connect");
}
emitBuffered() {
this.receiveBuffer.forEach(e => this.emitEvent(e));
this.receiveBuffer = [];
this.sendBuffer.forEach(e => {
this.notifyOutgoingListeners(e);
this.packet(e);
});
this.sendBuffer = [];
}
ondisconnect() {
c("server disconnect (%s)", this.nsp);
this.destroy();
this.onclose("io server disconnect");
}
destroy() {
if (this.subs) {
this.subs.forEach(e => e());
this.subs = void 0;
}
this.io._destroy(this);
}
disconnect() {
if (this.connected) {
c("performing disconnect (%s)", this.nsp);
this.packet({
type: s.PacketType.DISCONNECT
});
}
this.destroy();
this.connected && this.onclose("io client disconnect");
return this;
}
close() {
return this.disconnect();
}
compress(e) {
this.flags.compress = e;
return this;
}
get volatile() {
this.flags.volatile = !0;
return this;
}
timeout(e) {
this.flags.timeout = e;
return this;
}
onAny(e) {
this._anyListeners = this._anyListeners || [];
this._anyListeners.push(e);
return this;
}
prependAny(e) {
this._anyListeners = this._anyListeners || [];
this._anyListeners.unshift(e);
return this;
}
offAny(e) {
if (!this._anyListeners) return this;
if (e) {
const t = this._anyListeners;
for (let n = 0; n < t.length; n++) if (e === t[n]) {
t.splice(n, 1);
return this;
}
} else this._anyListeners = [];
return this;
}
listenersAny() {
return this._anyListeners || [];
}
onAnyOutgoing(e) {
this._anyOutgoingListeners = this._anyOutgoingListeners || [];
this._anyOutgoingListeners.push(e);
return this;
}
prependAnyOutgoing(e) {
this._anyOutgoingListeners = this._anyOutgoingListeners || [];
this._anyOutgoingListeners.unshift(e);
return this;
}
offAnyOutgoing(e) {
if (!this._anyOutgoingListeners) return this;
if (e) {
const t = this._anyOutgoingListeners;
for (let n = 0; n < t.length; n++) if (e === t[n]) {
t.splice(n, 1);
return this;
}
} else this._anyOutgoingListeners = [];
return this;
}
listenersAnyOutgoing() {
return this._anyOutgoingListeners || [];
}
notifyOutgoingListeners(e) {
if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
const t = this._anyOutgoingListeners.slice();
for (const n of t) n.apply(this, e.data);
}
}
};
}, {
"./on.js": 32,
"@socket.io/component-emitter": 6,
debug: 7,
"socket.io-parser": 36
} ],
34: [ function(e, t, n) {
"use strict";
var o = this && this.__importDefault || function(e) {
return e && e.__esModule ? e : {
default: e
};
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.url = void 0;
const s = e("engine.io-client"), r = o(e("debug")).default("socket.io-client:url");
n.url = function(e, t = "", n) {
let o = e;
n = n || "undefined" != typeof location && location;
null == e && (e = n.protocol + "//" + n.host);
if ("string" == typeof e) {
"/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e);
if (!/^(https?|wss?):\/\//.test(e)) {
r("protocol-less url %s", e);
e = "undefined" != typeof n ? n.protocol + "//" + e : "https://" + e;
}
r("parse %s", e);
o = s.parse(e);
}
o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443"));
o.path = o.path || "/";
const i = -1 !== o.host.indexOf(":") ? "[" + o.host + "]" : o.host;
o.id = o.protocol + "://" + i + ":" + o.port + t;
o.href = o.protocol + "://" + i + (n && n.port === o.port ? "" : ":" + o.port);
return o;
};
}, {
debug: 7,
"engine.io-client": 14
} ],
35: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.reconstructPacket = n.deconstructPacket = void 0;
const o = e("./is-binary.js");
n.deconstructPacket = function(e) {
const t = [], n = e.data, o = e;
o.data = s(n, t);
o.attachments = t.length;
return {
packet: o,
buffers: t
};
};
function s(e, t) {
if (!e) return e;
if (o.isBinary(e)) {
const n = {
_placeholder: !0,
num: t.length
};
t.push(e);
return n;
}
if (Array.isArray(e)) {
const n = new Array(e.length);
for (let o = 0; o < e.length; o++) n[o] = s(e[o], t);
return n;
}
if ("object" == typeof e && !(e instanceof Date)) {
const n = {};
for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = s(e[o], t));
return n;
}
return e;
}
n.reconstructPacket = function(e, t) {
e.data = r(e.data, t);
e.attachments = void 0;
return e;
};
function r(e, t) {
if (!e) return e;
if (e && !0 === e._placeholder) {
if ("number" == typeof e.num && e.num >= 0 && e.num < t.length) return t[e.num];
throw new Error("illegal attachments");
}
if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = r(e[n], t); else if ("object" == typeof e) for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = r(e[n], t));
return e;
}
}, {
"./is-binary.js": 37
} ],
36: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Decoder = n.Encoder = n.PacketType = n.protocol = void 0;
const o = e("@socket.io/component-emitter"), s = e("./binary.js"), r = e("./is-binary.js"), i = e("debug").default("socket.io-parser");
n.protocol = 5;
var c;
(function(e) {
e[e.CONNECT = 0] = "CONNECT";
e[e.DISCONNECT = 1] = "DISCONNECT";
e[e.EVENT = 2] = "EVENT";
e[e.ACK = 3] = "ACK";
e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR";
e[e.BINARY_EVENT = 5] = "BINARY_EVENT";
e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(c = n.PacketType || (n.PacketType = {}));
n.Encoder = class {
constructor(e) {
this.replacer = e;
}
encode(e) {
i("encoding packet %j", e);
if ((e.type === c.EVENT || e.type === c.ACK) && r.hasBinary(e)) {
e.type = e.type === c.EVENT ? c.BINARY_EVENT : c.BINARY_ACK;
return this.encodeAsBinary(e);
}
return [ this.encodeAsString(e) ];
}
encodeAsString(e) {
let t = "" + e.type;
e.type !== c.BINARY_EVENT && e.type !== c.BINARY_ACK || (t += e.attachments + "-");
e.nsp && "/" !== e.nsp && (t += e.nsp + ",");
null != e.id && (t += e.id);
null != e.data && (t += JSON.stringify(e.data, this.replacer));
i("encoded %j as %s", e, t);
return t;
}
encodeAsBinary(e) {
const t = s.deconstructPacket(e), n = this.encodeAsString(t.packet), o = t.buffers;
o.unshift(n);
return o;
}
};
class a extends o.Emitter {
constructor(e) {
super();
this.reviver = e;
}
add(e) {
let t;
if ("string" == typeof e) {
if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
if ((t = this.decodeString(e)).type === c.BINARY_EVENT || t.type === c.BINARY_ACK) {
this.reconstructor = new l(t);
0 === t.attachments && super.emitReserved("decoded", t);
} else super.emitReserved("decoded", t);
} else {
if (!r.isBinary(e) && !e.base64) throw new Error("Unknown type: " + e);
if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
if (t = this.reconstructor.takeBinaryData(e)) {
this.reconstructor = null;
super.emitReserved("decoded", t);
}
}
}
decodeString(e) {
let t = 0;
const n = {
type: Number(e.charAt(0))
};
if (void 0 === c[n.type]) throw new Error("unknown packet type " + n.type);
if (n.type === c.BINARY_EVENT || n.type === c.BINARY_ACK) {
const o = t + 1;
for (;"-" !== e.charAt(++t) && t != e.length; ) ;
const s = e.substring(o, t);
if (s != Number(s) || "-" !== e.charAt(t)) throw new Error("Illegal attachments");
n.attachments = Number(s);
}
if ("/" === e.charAt(t + 1)) {
const o = t + 1;
for (;++t && "," !== e.charAt(t) && t !== e.length; ) ;
n.nsp = e.substring(o, t);
} else n.nsp = "/";
const o = e.charAt(t + 1);
if ("" !== o && Number(o) == o) {
const o = t + 1;
for (;++t; ) {
const n = e.charAt(t);
if (null == n || Number(n) != n) {
--t;
break;
}
if (t === e.length) break;
}
n.id = Number(e.substring(o, t + 1));
}
if (e.charAt(++t)) {
const o = this.tryParse(e.substr(t));
if (!a.isPayloadValid(n.type, o)) throw new Error("invalid payload");
n.data = o;
}
i("decoded %s as %j", e, n);
return n;
}
tryParse(e) {
try {
return JSON.parse(e, this.reviver);
} catch (e) {
return !1;
}
}
static isPayloadValid(e, t) {
switch (e) {
case c.CONNECT:
return "object" == typeof t;

case c.DISCONNECT:
return void 0 === t;

case c.CONNECT_ERROR:
return "string" == typeof t || "object" == typeof t;

case c.EVENT:
case c.BINARY_EVENT:
return Array.isArray(t) && t.length > 0;

case c.ACK:
case c.BINARY_ACK:
return Array.isArray(t);
}
}
destroy() {
this.reconstructor && this.reconstructor.finishedReconstruction();
}
}
n.Decoder = a;
class l {
constructor(e) {
this.packet = e;
this.buffers = [];
this.reconPack = e;
}
takeBinaryData(e) {
this.buffers.push(e);
if (this.buffers.length === this.reconPack.attachments) {
const e = s.reconstructPacket(this.reconPack, this.buffers);
this.finishedReconstruction();
return e;
}
return null;
}
finishedReconstruction() {
this.reconPack = null;
this.buffers = [];
}
}
}, {
"./binary.js": 35,
"./is-binary.js": 37,
"@socket.io/component-emitter": 6,
debug: 7
} ],
37: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.hasBinary = n.isBinary = void 0;
const o = "function" == typeof ArrayBuffer, s = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, r = Object.prototype.toString, i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === r.call(Blob), c = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === r.call(File);
function a(e) {
return o && (e instanceof ArrayBuffer || s(e)) || i && e instanceof Blob || c && e instanceof File;
}
n.isBinary = a;
n.hasBinary = function e(t) {
if (!t || "object" != typeof t) return !1;
if (Array.isArray(t)) {
for (let n = 0, o = t.length; n < o; n++) if (e(t[n])) return !0;
return !1;
}
if (a(t)) return !0;
if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return e(t.toJSON(), !0);
for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return !0;
return !1;
};
}, {} ],
LoginPage: [ function(e, t) {
"use strict";
cc._RF.push(t, "8864e7vZY5M1YYbEp2wQDxG", "LoginPage");
cc.Class({
extends: cc.Component,
properties: {
username: {
default: null,
type: cc.Node
}
},
onLoad: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
Movecode: [ function(e, t) {
"use strict";
cc._RF.push(t, "aaf59iF+dhLp5Ly+mraLwIg", "Movecode");
var n = cc.Class({
name: "MCode",
properties: {
id: 0
}
});
cc.Class({
extends: cc.Component,
properties: {
movecode: {
default: [],
type: n
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
PlayerInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "4cc5eDYYkVPy4BmXCiJ3+nR", "PlayerInfo");
var n = e("./socket_connection");
cc.Class({
extends: cc.Component,
properties: {
uid: 0,
uname: ""
},
onLoad: function() {
cc.game.addPersistRootNode(this.node);
this.uid, this.uname;
},
start: function() {},
update: function() {
(0, n.senduserID)(this.uid);
}
});
cc._RF.pop();
}, {
"./socket_connection": "socket_connection"
} ],
Playnow: [ function(e, t) {
"use strict";
cc._RF.push(t, "56a93gRbI1B75pcuNQS6gV5", "Playnow");
e("./socket_connection");
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
onEnable: function() {},
onload: function() {},
start: function() {},
load_scene: function() {
var e = this.PlayerInfo.getComponent("PlayerInfo"), t = this.Username.string;
fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
method: "POST",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Username: t
})
}).then(function(e) {
return e.json();
}).then(function(t) {
console.log("data.data.id", t.data.id);
e.uid = t.data.id;
cc.director.loadScene("homepage");
});
},
update: function() {}
});
cc._RF.pop();
}, {
"./socket_connection": "socket_connection"
} ],
Popup: [ function(e, t) {
"use strict";
cc._RF.push(t, "a952dKIjhlMaJNxeCfhgetZ", "Popup");
cc.Class({
extends: cc.Component,
properties: {},
show: function() {
this.node.active = !0;
this.node.opacity = 0;
this.node.scale = .2;
cc.tween(this.node).to(.5, {
scale: 1,
opacity: 255
}, {
easing: "quartInOut"
}).start();
},
showcover: function() {
this.node.active = !0;
this.node.opacity = 0;
this.node.scale = .2;
cc.tween(this.node).to(.5, {
scale: 1,
opacity: 160
}, {
easing: "quartInOut"
}).start();
},
hide: function() {
var e = this;
cc.tween(this.node).to(.5, {
scale: .2,
opacity: 0
}, {
easing: "quartInOut"
}).call(function() {
e.node.active = !1;
}).start();
}
});
cc._RF.pop();
}, {} ],
PrepareRoom: [ function(e, t) {
"use strict";
cc._RF.push(t, "e7c4aDhlfBNtbEPosbj4i1M", "PrepareRoom");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
RoomInfos: [ function(e, t) {
"use strict";
cc._RF.push(t, "d5bd380ExBFZokBSMnQRAp0", "RoomInfos");
var n = e("../socket_connection");
cc.Class({
extends: cc.Component,
properties: {
rid: null
},
onLoad: function() {
cc.game.addPersistRootNode(this.node);
this.rid;
},
start: function() {},
onDisable: function() {},
update: function() {
(0, n.sendroomID)(this.rid);
}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
Sendchat: [ function(e, t) {
"use strict";
cc._RF.push(t, "6fb25MA9YVDtroFv2qJGESI", "Sendchat");
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
onLoad: function() {},
emitchat: function() {
var e = io.connect("http://localhost:3000", {
transports: [ "websocket" ]
});
e.emit("chat send", this.chat.string);
this.chat.string = "";
var t = this.chatholder;
e.on("chat received", function(e) {
t.string += "\n";
t.string += e;
});
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Showchat: [ function(e, t) {
"use strict";
cc._RF.push(t, "f2a08HiXB5Jc61OiaeOIbiX", "Showchat");
cc.Class({
extends: cc.Component,
properties: {},
showchat: function() {
io.connect("http://localhost:3000", {
transports: [ "websocket" ]
});
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Touch: [ function(e, t) {
"use strict";
cc._RF.push(t, "946acrKWAVESLUlkZ62QIs5", "Touch");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
pointTouch: function() {
this.node.on("touchstart", function() {
this.node.opacity = 160;
}, this.node);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
backtoroomlist: [ function(e, t) {
"use strict";
cc._RF.push(t, "35807QmkQxFro+IzZbqGmDU", "backtoroomlist");
e("../socket_connection");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
backtoroomlist: function() {
var e = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo"), t = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos"), n = t.rid;
fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + n, {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(o) {
console.log(o);
if (null != o.data.Player1 && null != o.data.Player2) {
if (o.data.Player1 == e.uid) {
var s = o.data.Player2;
fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + n, {
method: "PATCH",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Player1: s,
Player2: null
})
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
t.rid = null;
cc.director.loadScene("rooms");
});
}
o.data.Player2 == e.uid && fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + n, {
method: "PATCH",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Player2: null
})
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
t.rid = null;
cc.director.loadScene("rooms");
});
}
null == o.data.Player1 && null != o.data.Player2 && fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + n, {
method: "PATCH",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Player2: null
})
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
t.rid = null;
cc.director.loadScene("rooms");
});
null != o.data.Player1 && null == o.data.Player2 && fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + n, {
method: "PATCH",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Player1: null
})
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
t.rid = null;
cc.director.loadScene("rooms");
});
});
},
start: function() {},
onDisable: function() {}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
bishopblack: [ function(e, t) {
"use strict";
cc._RF.push(t, "62a26O07qtAP7+GE30OyJDk", "bishopblack");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess, r = s.getChildren(), i = this.blackchess.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].y >= e.blackriver) {
console.log(e.blackriver);
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (var a = 0; a < r.length; a++) r[a].x == self.node.x + e.s && r[a].y == self.node.y + e.s && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == self.node.x + e.s && i[l].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x - e.s && r[a].y == self.node.y + e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x - e.s && i[l].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x + e.s && r[a].y == self.node.y - e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x + e.s && i[l].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x - e.s && r[a].y == self.node.y - e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x - e.s && i[l].y == self.node.y - e.s && (o[c].active = !1);
}
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && (o[c].active = !1);
}
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.blacktouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
bishopred: [ function(e, t) {
"use strict";
cc._RF.push(t, "d5c582AxU5Jtpx0heysGbGB", "bishopred");
var n = e("../../../socket_connection");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), o = this.place, s = o.getChildren(), r = this.redchess.getChildren(), i = this.blackchess, c = i.getChildren();
r.parent = o;
c.parent = o;
self = this;
var a = a;
(0, n.receivedroomID)().then(function(e) {
fetch("fetch(https://chinese-chess-vnp.herokuapp.com/api/room/" + e, {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
(0, n.receiveduserID)().then(function(e) {
e == a && console.log("uid p1", a);
});
});
});
for (var l = 0; l < s.length; l++) 1 == s[l].active && (s[l].active = !1);
i.pauseSystemEvents(!0);
for (l = 0; l < s.length; l++) {
if (s[l].y <= e.redriver) {
if (s[l].x == self.node.x + 2 * e.s && s[l].y == self.node.y + 2 * e.s) {
s[l].active = !0;
for (var h = 0; h < r.length; h++) r[h].x == self.node.x + e.s && r[h].y == self.node.y + e.s && (s[l].active = !1);
for (var f = 0; f < c.length; f++) c[f].x == self.node.x + e.s && c[f].y == self.node.y + e.s && (s[l].active = !1);
}
if (s[l].x == self.node.x - 2 * e.s && s[l].y == self.node.y + 2 * e.s) {
s[l].active = !0;
for (h = 0; h < r.length; h++) r[h].x == self.node.x - e.s && r[h].y == self.node.y + e.s && (s[l].active = !1);
for (f = 0; f < c.length; f++) c[f].x == self.node.x - e.s && c[f].y == self.node.y + e.s && (s[l].active = !1);
}
if (s[l].x == self.node.x + 2 * e.s && s[l].y == self.node.y - 2 * e.s) {
s[l].active = !0;
for (h = 0; h < r.length; h++) r[h].x == self.node.x + e.s && r[h].y == self.node.y - e.s && (s[l].active = !1);
for (f = 0; f < c.length; f++) c[f].x == self.node.x + e.s && c[f].y == self.node.y - e.s && (s[l].active = !1);
}
if (s[l].x == self.node.x - 2 * e.s && s[l].y == self.node.y - 2 * e.s) {
s[l].active = !0;
for (h = 0; h < r.length; h++) r[h].x == self.node.x - e.s && r[h].y == self.node.y - e.s && (s[l].active = !1);
for (f = 0; f < c.length; f++) c[f].x == self.node.x - e.s && c[f].y == self.node.y - e.s && (s[l].active = !1);
}
for (h = 0; h < r.length; h++) r[h].x == s[l].x && r[h].y == s[l].y && (s[l].active = !1);
for (f = 0; f < c.length; f++) c[f].x == s[l].x && c[f].y == s[l].y && 1 == s[l].active && s[l].setScale(e.scale, e.scale);
}
t.redtouchmove(l);
}
},
start: function() {}
});
cc._RF.pop();
}, {
"../../../socket_connection": "socket_connection"
} ],
boardinfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "489713er9BIp6N3d2fdSPUg", "boardinfo");
cc.Class({
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
onLoad: function() {},
test: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
canonblack: [ function(e, t) {
"use strict";
cc._RF.push(t, "ed76eGXgtBEVYoiK2iOaAyO", "canonblack");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess, r = s.getChildren(), i = this.blackchess.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == this.node.x) {
o[c].active = !0;
for (var a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y != self.node.y && (o[c].y >= r[a].y && r[a].y > self.node.y || o[c].y <= r[a].y && r[a].y < self.node.y) && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y != self.node.y && (o[c].y > i[l].y && i[l].y > self.node.y || o[c].y < i[l].y && i[l].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == this.node.y && 0 == o[c].active) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].y == self.node.y && r[a].x != self.node.x && (o[c].x >= r[a].x && r[a].x > self.node.x || o[c].x <= r[a].x && r[a].x < self.node.x) && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].y == self.node.y && i[l].x != self.node.x && (o[c].x > i[l].x && i[l].x > self.node.x || o[c].x < i[l].x && i[l].x < self.node.x) && (o[c].active = !1);
}
if (o[c].x == self.node.x && o[c].y > self.node.y) for (a = 0; a < r.length; a++) if (o[c].x == r[a].x && o[c].y == r[a].y) {
for (var h = 0; h < r.length; h++) if (self.node.y < r[h].y && r[h].y < r[a].y && r[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < i.length; h++) if (self.node.y < i[h].y && i[h].y < r[a].y && i[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (var f = 0; f < o.length; f++) for (a = 0; a < r.length; a++) o[c].y > o[f].y && o[f].y > self.node.y && o[f].x == r[a].x && o[f].y == r[a].y && 1 == o[f].active && (o[c].active = !1);
}
if (o[c].y == self.node.y && o[c].x > self.node.x) for (a = 0; a < r.length; a++) if (o[c].x == r[a].x && o[c].y == r[a].y) {
for (h = 0; h < r.length; h++) if (self.node.x < r[h].x && r[h].x < r[a].x && r[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < i.length; h++) if (self.node.x < i[h].x && i[h].x < r[a].x && i[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = 0; f < o.length; f++) for (a = 0; a < r.length; a++) o[c].x > o[f].x && o[f].x > self.node.x && o[f].y == r[a].y && o[f].x == r[a].x && 1 == o[f].active && (o[c].active = !1);
}
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && (o[c].active = !1);
}
for (c = o.length - 1; c >= 0; c--) {
if (o[c].x == self.node.x && o[c].y < self.node.y) for (a = 0; a < r.length; a++) if (o[c].x == r[a].x && o[c].y == r[a].y) {
for (h = 0; h < i.length; h++) if (self.node.y > i[h].y && i[h].y > r[a].y && i[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < r.length; h++) if (self.node.y > r[h].y && r[h].y > r[a].y && r[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (a = 0; a < r.length; a++) o[c].y < o[f].y && o[f].y < self.node.y && o[f].x == r[a].x && o[f].y == r[a].y && 1 == o[f].active && (o[c].active = !1);
}
if (o[c].y == self.node.y && o[c].x < self.node.x) for (a = 0; a < r.length; a++) if (o[c].x == r[a].x && o[c].y == r[a].y) {
for (h = 0; h < i.length; h++) if (self.node.x > i[h].x && i[h].x > r[a].x && i[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < r.length; h++) if (self.node.x > r[h].x && r[h].x > r[a].x && r[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (a = 0; a < r.length; a++) o[c].x < o[f].x && o[f].x < self.node.x && o[f].x == r[a].x && o[f].y == r[a].y && 1 == o[f].active && (o[c].active = !1);
}
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
}
for (c = 0; c < o.length; c++) t.blacktouchmove(c);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
canonred: [ function(e, t) {
"use strict";
cc._RF.push(t, "a789882iK9Jo69btjQNDQVl", "canonred");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess.getChildren(), r = this.blackchess, i = r.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == self.node.x) {
o[c].active = !0;
for (var a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y != self.node.y && (o[c].y > s[a].y && s[a].y > self.node.y || o[c].y < s[a].y && s[a].y < self.node.y) && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y != self.node.y && (o[c].y >= i[l].y && i[l].y > self.node.y || o[c].y <= i[l].y && i[l].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == self.node.y) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].y == self.node.y && s[a].x != self.node.x && (o[c].x > s[a].x && s[a].x > self.node.x || o[c].x < s[a].x && s[a].x < self.node.x) && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].y == self.node.y && i[l].x != self.node.x && (o[c].x >= i[l].x && i[l].x > self.node.x || o[c].x <= i[l].x && i[l].x < self.node.x) && (o[c].active = !1);
}
if (o[c].x == self.node.x && o[c].y > self.node.y) for (l = 0; l < i.length; l++) if (o[c].x == i[l].x && o[c].y == i[l].y) {
for (var h = 0; h < s.length; h++) if (self.node.y < s[h].y && s[h].y < i[l].y && s[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < i.length; h++) if (self.node.y < i[h].y && i[h].y < i[l].y && i[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (var f = 0; f < o.length; f++) for (l = 0; l < i.length; l++) o[c].y > o[f].y && o[f].y > self.node.y && o[f].x == i[l].x && o[f].y == i[l].y && 1 == o[f].active && (o[c].active = !1);
}
if (o[c].y == self.node.y && o[c].x > self.node.x) for (l = 0; l < i.length; l++) if (o[c].x == i[l].x && o[c].y == i[l].y) {
for (h = 0; h < s.length; h++) if (self.node.x < s[h].x && s[h].x < i[l].x && s[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < i.length; h++) if (self.node.x < i[h].x && i[h].x < i[l].x && i[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = 0; f < o.length; f++) for (l = 0; l < i.length; l++) o[c].x > o[f].x && o[f].x > self.node.x && o[f].y == i[l].y && o[f].x == i[l].x && 1 == o[f].active && (o[c].active = !1);
}
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
}
for (c = o.length - 1; c >= 0; c--) {
if (o[c].x == self.node.x && o[c].y < self.node.y) for (l = 0; l < i.length; l++) if (o[c].x == i[l].x && o[c].y == i[l].y) {
for (h = 0; h < s.length; h++) if (self.node.y > s[h].y && s[h].y > i[l].y && s[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < i.length; h++) if (self.node.y > i[h].y && i[h].y > i[l].y && i[h].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (l = 0; l < i.length; l++) if (o[c].y < o[f].y && o[f].y < self.node.y && o[f].x == i[l].x && o[f].y == i[l].y && 1 == o[f].active) {
console.log("reach black target");
o[c].active = !1;
}
}
if (o[c].y == self.node.y && o[c].x < self.node.x) for (l = 0; l < i.length; l++) if (o[c].y == i[l].y && o[c].x == i[l].x) {
for (h = 0; h < s.length; h++) if (self.node.x > s[h].x && s[h].x > i[l].x && s[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (h = 0; h < i.length; h++) if (self.node.x > i[h].x && i[h].x > i[l].x && i[h].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (l = 0; l < i.length; l++) o[c].x < o[f].x && o[f].x < self.node.x && o[f].y == i[l].y && o[f].x == i[l].x && 1 == o[f].active && (o[c].active = !1);
}
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
}
for (c = 0; c < o.length; c++) t.redtouchmove(c);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
createroom: [ function(e, t) {
"use strict";
cc._RF.push(t, "9aacf1bFzRDar2oq8ZNrJeu", "createroom");
var n = e("../socket_connection");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
create_room: function() {
var e = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
(0, n.receiveduserID)().then(function(t) {
var n = t;
console.log("uid", n);
fetch("https://chinese-chess-vnp.herokuapp.com/api/room", {
method: "POST",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Player1: n,
Player2: null
})
}).then(function(e) {
return e.json();
}).then(function(t) {
e.rid = t.data.id;
console.log("roomid", e.rid);
cc.director.loadScene("room");
});
});
},
start: function() {}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
deadblackchess: [ function(e, t) {
"use strict";
cc._RF.push(t, "6a32bPUxzNJzaC36TReSFgX", "deadblackchess");
cc.Class({
extends: cc.Component,
properties: {
map: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.map.getComponent("boardinfo");
},
start: function() {},
update: function() {
var e = this.map.getComponent("boardinfo");
this.node.height = e.countblackdead * e.chesssize + 100;
}
});
cc._RF.pop();
}, {} ],
deadredchess: [ function(e, t) {
"use strict";
cc._RF.push(t, "c155cBSDG1NmYAiWwPWFf/H", "deadredchess");
cc.Class({
extends: cc.Component,
properties: {
map: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.map.getComponent("boardinfo");
},
start: function() {},
update: function() {
var e = this.map.getComponent("boardinfo");
this.node.height = e.countreddead * e.chesssize + 100;
}
});
cc._RF.pop();
}, {} ],
deleteroom: [ function(e, t) {
"use strict";
cc._RF.push(t, "31a63cAgHlPVrX4NXcO+4XD", "deleteroom");
cc.Class({
extends: cc.Component,
properties: {
roomID: {
default: null,
type: cc.Label
}
},
deleteroom: function() {
var e = this.roomID.string;
e && fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + e, {
method: "DELETE",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
});
},
start: function() {}
});
cc._RF.pop();
}, {} ],
deleteuser: [ function(e, t) {
"use strict";
cc._RF.push(t, "aa6c1TRo4VL3KaFZDstwxgH", "deleteuser");
cc.Class({
extends: cc.Component,
properties: {
deluserID: {
default: null,
type: cc.Label
}
},
onLoad: function() {},
deleteuser: function() {
var e = this.deluserID.string;
fetch("https://chinese-chess-vnp.herokuapp.com/api/player/" + e, {
method: "DELETE",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
});
},
start: function() {
fetch("https://chinese-chess-vnp.herokuapp.com/api/player", {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
});
}
});
cc._RF.pop();
}, {} ],
display: [ function(e, t) {
"use strict";
cc._RF.push(t, "07b14V0szlPSpdbncZwe8PD", "display");
var n = e("../socket_connection");
cc.Class({
extends: cc.Component,
properties: {
namedisplay: {
default: null,
type: cc.Label
}
},
onLoad: function() {
var e = this, t = 0;
(0, n.receiveduserID)().then(function(n) {
console.log("data", n);
t = n;
var o = e.namedisplay;
console.log("uid", t);
fetch("https://chinese-chess-vnp.herokuapp.com/api/player/" + t, {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(e) {
o.string = e.data.Username + " #" + t;
});
});
},
start: function() {},
onDisable: function() {}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
guardblack: [ function(e, t) {
"use strict";
cc._RF.push(t, "5ac04LOHFhOWKJbtgMiihhX", "guardblack");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess, r = s.getChildren(), i = this.blackchess.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.blackcastleleftbound && o[c].x <= e.blackcastlerightbound && o[c].y >= e.blackcastledownbound && o[c].y <= e.blackcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x + e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
for (var a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && (o[c].active = !1);
}
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && (o[c].active = !1);
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.blacktouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
guardred: [ function(e, t) {
"use strict";
cc._RF.push(t, "3ad77Yi3uxFx4iaMgD6kbee", "guardred");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess.getChildren(), r = this.blackchess, i = r.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.redcastleleftbound && o[c].x <= e.redcastlerightbound && o[c].y >= e.redcastledownbound && o[c].y <= e.redcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x + e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
}
for (var a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.redtouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
joinroom: [ function(e, t) {
"use strict";
cc._RF.push(t, "6323clwI0xJl4kOKrMKHG0j", "joinroom");
e("socket.io-client").io;
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
onLoad: function() {},
join_room: function() {
var e = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo"), t = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos"), n = e.uid, o = this.roomID.string;
this.Pass.string;
fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + o, {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(e) {
e.data.id == o && (null == e.data.Player1 ? fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + o, {
method: "PATCH",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Player1: n
})
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
t.rid = o;
cc.director.loadScene("room");
}) : null == e.data.Player2 ? fetch("https://chinese-chess-vnp.herokuapp.com/api/room/" + o, {
method: "PATCH",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify({
Player2: n
})
}).then(function(e) {
return e.json();
}).then(function(e) {
console.log(e);
t.rid = o;
cc.director.loadScene("room");
}) : console.log("Roomfull!"));
});
},
start: function() {}
});
cc._RF.pop();
}, {
"socket.io-client": 30
} ],
kingblack: [ function(e, t) {
"use strict";
cc._RF.push(t, "5e90afPJzdImZBJGX5BDC+Y", "kingblack");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess, r = s.getChildren(), i = this.blackchess.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.blackcastleleftbound && o[c].x <= e.blackcastlerightbound && o[c].y >= e.blackcastledownbound && o[c].y <= e.blackcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y - e.s && (o[c].active = !0);
}
for (var a = 0; a < i.length; a++) i[a].x == o[c].x && i[a].y == o[c].y && (o[c].active = !1);
for (var l = 0; l < r.length; l++) r[l].x == o[c].x && r[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.blacktouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
kingred: [ function(e, t) {
"use strict";
cc._RF.push(t, "4713cCa/1tEe4KqidlYWFE8", "kingred");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess.getChildren(), r = this.blackchess, i = r.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.redcastleleftbound && o[c].x <= e.redcastlerightbound && o[c].y >= e.redcastledownbound && o[c].y <= e.redcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y - e.s && (o[c].active = !0);
}
for (var a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.redtouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
knightblack: [ function(e, t) {
"use strict";
cc._RF.push(t, "faf2fbxdgBPtYXqlCw9CqTs", "knightblack");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess, r = s.getChildren(), i = this.blackchess.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (var a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y + e.s && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x + e.s && r[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x + e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x + e.s && r[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x + e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y - e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y - e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x - e.s && r[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x - e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x - e.s && r[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x - e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y + e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y + e.s && (o[c].active = !1);
}
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && (o[c].active = !1);
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.blacktouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
knightred: [ function(e, t) {
"use strict";
cc._RF.push(t, "f145daB5ZBLbJJJAUqjOzMK", "knightred");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess.getChildren(), r = this.blackchess, i = r.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (var a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y + e.s && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x + e.s && s[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x + e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x + e.s && s[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x + e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y - e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y - e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x - e.s && s[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x - e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x - e.s && s[a].y == self.node.y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x - e.s && i[l].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y + e.s && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y == self.node.y + e.s && (o[c].active = !1);
}
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.redtouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
list: [ function(e, t) {
"use strict";
cc._RF.push(t, "a4e19H30vFBA4QuQnL93D2G", "list");
cc.Class({
extends: cc.Component,
properties: {
movecodecontent: {
default: null,
type: cc.Node
}
},
onLoad: function() {},
start: function() {},
update: function() {}
});
cc._RF.pop();
}, {} ],
movecodelist: [ function(e, t) {
"use strict";
cc._RF.push(t, "b1d607rb+tHY6WX/SvgNxMG", "movecodelist");
e("../socket_connection");
movecode = [];
list = [];
cc.Class({
extends: cc.Component,
properties: {
list: {
default: "",
multiline: !0
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
updatelist: function() {},
start: function() {},
update: function() {}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
movetoboard: [ function(e, t) {
"use strict";
cc._RF.push(t, "abc7aL2BERPfa6YG6jq8jC4", "movetoboard");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
load_scene: function() {
cc.director.loadScene("board");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
movetoroom: [ function(e, t) {
"use strict";
cc._RF.push(t, "2ef8cxgpXVNlb48jWyL7OTZ", "movetoroom");
e("../socket_connection");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
create_room: function() {},
load_scene: function() {
cc.director.loadScene("rooms");
},
start: function() {}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
pawnblack: [ function(e, t) {
"use strict";
cc._RF.push(t, "0e19eySbiNOfaT3h+4HmXWm", "pawnblack");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess, r = s.getChildren(), i = this.blackchess.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (this.node.y > e.redriver) o[c].x == self.node.x && o[c].y == self.node.y - e.s && (o[c].active = !0); else if (this.node.y <= e.redriver) {
o[c].x == self.node.x && o[c].y == self.node.y - e.s && (o[c].active = !0);
o[c].x == self.node.x - e.s && o[c].y == self.node.y && (o[c].active = !0);
o[c].x == self.node.x + e.s && o[c].y == self.node.y && (o[c].active = !0);
}
for (var a = 0; a < i.length; a++) i[a].x == o[c].x && i[a].y == o[c].y && (o[c].active = !1);
for (var l = 0; l < r.length; l++) r[l].x == o[c].x && r[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.blacktouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
pawnred: [ function(e, t) {
"use strict";
cc._RF.push(t, "bdec74ubcJE55YL34VPYD2t", "pawnred");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess.getChildren(), r = this.blackchess, i = r.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (this.node.y < e.blackriver) o[c].x == self.node.x && o[c].y == self.node.y + e.s && (o[c].active = !0); else if (self.node.y >= e.blackriver) {
o[c].x == self.node.x && o[c].y == self.node.y + e.s && (o[c].active = !0);
o[c].x == self.node.x - e.s && o[c].y == self.node.y && (o[c].active = !0);
o[c].x == self.node.x + e.s && o[c].y == self.node.y && (o[c].active = !0);
}
for (var a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.redtouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
readybutton: [ function(e, t) {
"use strict";
cc._RF.push(t, "c8c3cwsxilOjIDWDVf1YdGH", "readybutton");
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
onLoad: function() {},
start: function() {},
update: function() {}
});
cc._RF.pop();
}, {} ],
redchess: [ function(e, t) {
"use strict";
cc._RF.push(t, "52f25mMMVBNeqVQ2ztztcc0", "redchess");
cc.Class({
extends: cc.Component,
properties: {
map: {
default: null,
type: cc.Node
}
},
onload: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
rookblack: [ function(e, t) {
"use strict";
cc._RF.push(t, "dfda9tawehHXZ0kBnAOdJ3y", "rookblack");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess, r = s.getChildren(), i = this.blackchess.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == this.node.x) {
o[c].active = !0;
for (var a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y != self.node.y && (o[c].y > self.node.y && o[c].y > r[a].y && r[a].y > self.node.y || o[c].y < self.node.y && o[c].y < r[a].y && r[a].y < self.node.y) && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y != self.node.y && (o[c].y > self.node.y && o[c].y > i[l].y && i[l].y > self.node.y || o[c].y < self.node.y && o[c].y < i[l].y && i[l].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == this.node.y) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].y == self.node.y && r[a].x != self.node.x && (o[c].x > self.node.x && o[c].x > r[a].x && r[a].x > self.node.x || o[c].x < self.node.x && o[c].x < r[a].x && r[a].x < self.node.x) && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].y == self.node.y && i[l].x != self.node.x && (o[c].x > self.node.x && o[c].x > i[l].x && i[l].x > self.node.x || o[c].x < self.node.x && o[c].x < i[l].x && i[l].x < self.node.x) && (o[c].active = !1);
}
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && (o[c].active = !1);
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.blacktouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
rookred: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7a180F7TRL+ZjqFkUoK1kp", "rookred");
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
showpossiblemove: function() {
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), s = this.redchess.getChildren(), r = this.blackchess, i = r.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == this.node.x) {
o[c].active = !0;
for (var a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y != self.node.y && (o[c].y > self.node.y && o[c].y > s[a].y && s[a].y > self.node.y || o[c].y < self.node.y && o[c].y < s[a].y && s[a].y < self.node.y) && (o[c].active = !1);
for (var l = 0; l < i.length; l++) i[l].x == self.node.x && i[l].y != self.node.y && (o[c].y > self.node.y && o[c].y > i[l].y && i[l].y > self.node.y || o[c].y < self.node.y && o[c].y < i[l].y && i[l].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == this.node.y) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].y == self.node.y && s[a].x != self.node.x && (o[c].x > self.node.x && o[c].x > s[a].x && s[a].x > self.node.x || o[c].x < self.node.x && o[c].x < s[a].x && s[a].x < self.node.x) && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].y == self.node.y && i[l].x != self.node.x && (o[c].x > self.node.x && o[c].x > i[l].x && i[l].x > self.node.x || o[c].x < self.node.x && o[c].x < i[l].x && i[l].x < self.node.x) && (o[c].active = !1);
}
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && (o[c].active = !1);
for (l = 0; l < i.length; l++) i[l].x == o[c].x && i[l].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
t.redtouchmove(c);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
roominfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "95773ddqsJDIboSvoNjmway", "roominfo");
e("../../socket_connection");
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
onLoad: function() {
var e = this.Info, t = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos").rid;
e.string = "Room no " + t;
},
start: function() {},
update: function() {}
});
cc._RF.pop();
}, {
"../../socket_connection": "socket_connection"
} ],
showrooms: [ function(e, t) {
"use strict";
cc._RF.push(t, "6b428tgnFNHO71TiT8Zn+27", "showrooms");
var n = e("../socket_connection");
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
onLoad: function() {
var e = this;
(0, n.receiveduserID)().then(function(t) {
var n = e.id, o = t;
fetch("https://chinese-chess-vnp.herokuapp.com/api/player/" + o, {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(e) {
n.string = e.data.Username + " #" + o;
});
});
},
show_rooms: function() {
var e = this.listrooms;
roomlist = [];
fetch("https://chinese-chess-vnp.herokuapp.com/api/room", {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}).then(function(e) {
return e.json();
}).then(function(t) {
for (var n = 0; n < t.data.length; n++) null != t.data[n].Player1 && null != t.data[n].Player2 ? roomlist += JSON.stringify("Room no " + t.data[n].id + " --- full") + "\n" : null != t.data[n].Player1 && null == t.data[n].Player2 ? roomlist += JSON.stringify("Room no " + t.data[n].id + " --- 1/2") + "\n" : null == t.data[n].Player1 && null != t.data[n].Player2 ? roomlist += JSON.stringify("Room no " + t.data[n].id + " --- 1/2") + "\n" : null == t.data[n].Player1 && null == t.data[n].Player2 && (roomlist += JSON.stringify("Room no " + t.data[n].id + " --- 0/2") + "\n");
e.string = roomlist;
});
},
start: function() {},
update: function() {}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
socket_connection: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f2074RI4CRE7ry3/KUbfyW1", "socket_connection");
n.__esModule = !0;
n.senduserID = n.sendstate = n.sendroomID = n.senddeadchess = n.sendchessPosition = n.sendName = n.receiveduserID = n.receivedstate = n.receivedroomID = n.receiveddeadchess = n.receivedchessPosition = void 0;
function o(e) {
if ("function" != typeof WeakMap) return null;
var t = new WeakMap(), n = new WeakMap();
return (o = function(e) {
return e ? n : t;
})(e);
}
var s = function(e) {
if (e && e.__esModule) return e;
if (null === e || "object" != typeof e && "function" != typeof e) return {
default: e
};
var t = o(void 0);
if (t && t.has(e)) return t.get(e);
var n = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
for (var r in e) if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
var i = s ? Object.getOwnPropertyDescriptor(e, r) : null;
i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
}
n.default = e;
t && t.set(e, n);
return n;
}(e("socket.io-client")).connect("http://localhost:3000", {
reconnectionDelayMax: 1e4,
query: {
userId: 10
}
});
n.senduserID = function(e) {
s.emit("senduserID", e);
};
n.receiveduserID = function() {
return new Promise(function(e, t) {
s.on("receiveduserID", function(n) {
e(n);
t("something wrong");
});
});
};
n.sendroomID = function(e) {
s.emit("sendroomID", e);
};
n.receivedroomID = function() {
console.log("receivedroomID() run");
return new Promise(function(e, t) {
console.log("returnnew Promise run");
s.on("receivedroomID", function(n) {
console.log("receivedrooomID() run");
e(n);
t("something wrong");
});
});
};
var r = [];
n.sendchessPosition = function(e) {
s.emit("sendChessPosition", e);
};
n.receivedchessPosition = function() {
return new Promise(function(e, t) {
s.once("receivedChessPosition", function(n) {
r.push(n[n.length - 1]);
e(r);
t("something wrong");
});
});
};
n.senddeadchess = function(e) {
s.emit("senddeadchess", e);
};
n.receiveddeadchess = function() {
return new Promise(function(e, t) {
s.once("receiveddeadchess", function(n) {
e(n);
t("something wrong");
});
});
};
n.sendstate = function(e) {
s.emit("sendstate", e);
};
n.receivedstate = function() {
return new Promise(function(e, t) {
s.once("receivedstate", function(n) {
e(n);
t("something wrong");
});
});
};
n.sendName = function(e) {
getSocket(e).emit("name", {
name: "teo"
});
};
cc._RF.pop();
}, {
"socket.io-client": 30
} ],
touchmove: [ function(e, t) {
"use strict";
cc._RF.push(t, "add97JwDi1EwI+ETWKdjCct", "touchmove");
var n = e("../socket_connection");
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
redtouchmove: function(e) {
var t = this.updateall.getComponent("update"), o = this.map.getComponent("boardinfo"), s = (this.deadblackchess, 
this.place), r = s.getChildren(), i = this.redchess, c = i.getChildren(), a = this.blackchess, l = a.getChildren();
c.parent = s;
l.parent = s;
1 == r[e].active && r[e].on("touchstart", function() {
if (self.node.isChildOf(i)) {
for (var s = 0, c = 0; c < l.length; c++) if (l[c].x == this.x && l[c].y == this.y) {
(0, n.senddeadchess)({
name: l[c].name
});
s++;
o.movecode.push({
name: self.node.name,
xed: self.node.x,
yed: self.node.y,
x: this.x,
y: this.y
});
console.table(o.movecode);
(0, n.sendchessPosition)(o.movecode);
this.setScale(1, 1);
this.off("touchstart", this.function, r[e]);
break;
}
if (0 == s) {
o.movecode.push({
name: self.node.name,
xed: self.node.x,
yed: self.node.y,
x: this.x,
y: this.y
});
console.table(o.movecode);
(0, n.sendchessPosition)(o.movecode);
this.setScale(1, 1);
this.off("touchstart", this.function, r[e]);
}
}
for (var h = 0; h < r.length; h++) {
r[h].setScale(1, 1);
r[h].active = !1;
}
a.pauseSystemEvents(!0);
i.pauseSystemEvents(!0);
(0, n.sendstate)("red");
t.updateall();
}, r[e]);
},
blacktouchmove: function(e) {
var t = this.updateall.getComponent("update"), o = this.map.getComponent("boardinfo"), s = (this.deadredchess, 
this.place), r = s.getChildren(), i = this.redchess, c = i.getChildren(), a = this.blackchess, l = a.getChildren();
c.parent = s;
l.parent = s;
1 == r[e].active && r[e].on("touchstart", function() {
if (self.node.isChildOf(a)) {
for (var s = 0, l = 0; l < c.length; l++) if (c[l].x == this.x && c[l].y == this.y) {
(0, n.senddeadchess)({
name: c[l].name
});
s++;
o.movecode.push({
name: self.node.name,
xed: self.node.x,
yed: self.node.y,
x: this.x,
y: this.y
});
console.table(o.movecode);
(0, n.sendchessPosition)(o.movecode);
this.setScale(1, 1);
this.off("touchstart", this.function, r[e]);
break;
}
if (0 == s) {
o.movecode.push({
name: self.node.name,
xed: self.node.x,
yed: self.node.y,
x: this.x,
y: this.y
});
console.table(o.movecode);
(0, n.sendchessPosition)(o.movecode);
this.setScale(1, 1);
this.off("touchstart", this.function, r[e]);
}
}
for (var h = 0; h < r.length; h++) {
r[h].setScale(1, 1);
r[h].active = !1;
}
i.pauseSystemEvents(!0);
a.pauseSystemEvents(!0);
t.updateall();
}, r[e]);
},
start: function() {},
onLoad: function() {},
update: function() {}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ],
update: [ function(e, t) {
"use strict";
cc._RF.push(t, "077bfbFx0tAEKtrDKRzdXD9", "update");
var n = e("../socket_connection");
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
onLoad: function() {},
updateall: function() {},
start: function() {},
update: function(e) {
var t = this;
void 0 === e && (e = 1e4);
var o = this.redchess, s = o.getChildren(), r = this.blackchess, i = r.getChildren(), c = this.map.getComponent("boardinfo"), a = this.deadredchess, l = this.deadblackchess, h = this.movecodelist;
(0, n.receivedchessPosition)().then(function(e) {
for (var n = 0; n < s.length; n++) if (s[n].name == e[e.length - 1].name) {
s[n].x = e[e.length - 1].x;
s[n].y = e[e.length - 1].y;
o.pauseSystemEvents(!0);
r.resumeSystemEvents(!0);
break;
}
for (var c = 0; c < i.length; c++) if (i[c].name == e[e.length - 1].name) {
i[c].x = e[e.length - 1].x;
i[c].y = e[e.length - 1].y;
r.pauseSystemEvents(!0);
o.resumeSystemEvents(!0);
break;
}
0 != t.movelist.length && t.movelist[t.movelist.length - 1] === JSON.stringify(e[e.length - 1]) || t.movelist.push(JSON.stringify(e[e.length - 1]));
h.string = t.movelist;
});
(0, n.receiveddeadchess)().then(function(e) {
for (var t = 0; t < s.length; t++) if (s[t].name == e.name) {
c.countreddead++;
s[t].setScale(.8, .8);
s[t].x = 0;
s[t].y = -30 - c.countreddead * (c.chesssize / 2);
s[t].pauseSystemEvents(!0);
s[t].parent = a;
}
for (var n = 0; n < i.length; n++) if (i[n].name == e.name) {
c.countblackdead++;
i[n].setScale(.8, .8);
i[n].x = 0;
i[n].y = -30 - c.countblackdead * (c.chesssize / 2);
i[n].pauseSystemEvents(!0);
i[n].parent = l;
}
});
}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ]
}, {}, [ "Blur", "LoginPage", "PlayerInfo", "Playnow", "Popup", "Touch", "Movecode", "boardinfo", "bishopblack", "canonblack", "guardblack", "kingblack", "knightblack", "pawnblack", "rookblack", "bishopred", "canonred", "guardred", "kingred", "knightred", "pawnred", "redchess", "rookred", "touchmove", "update", "backtoroomlist", "movetoboard", "movetoroom", "deadblackchess", "deadredchess", "list", "movecodelist", "readybutton", "display", "PrepareRoom", "Sendchat", "Showchat", "roominfo", "RoomInfos", "createroom", "joinroom", "showrooms", "socket_connection", "deleteroom", "deleteuser" ]);