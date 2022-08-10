window.__require = function e(t, n, o) {
function r(i, c) {
if (!n[i]) {
if (!t[i]) {
var a = i.split("/");
a = a[a.length - 1];
if (!t[a]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(a, !0);
if (s) return s(a, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = a;
}
var l = n[i] = {
exports: {}
};
t[i][0].call(l.exports, function(e) {
return r(t[i][1][e] || e);
}, l, l.exports, e, t, n, o);
}
return n[i].exports;
}
for (var s = "function" == typeof __require && __require, i = 0; i < o.length; i++) r(o[i]);
return r;
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
var t = u(e), n = t[0], o = t[1];
return 3 * (n + o) / 4 - o;
};
n.toByteArray = function(e) {
var t, n, o = u(e), i = o[0], c = o[1], a = new s(l(0, i, c)), f = 0, h = c > 0 ? i - 4 : i;
for (n = 0; n < h; n += 4) {
t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)];
a[f++] = t >> 16 & 255;
a[f++] = t >> 8 & 255;
a[f++] = 255 & t;
}
if (2 === c) {
t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4;
a[f++] = 255 & t;
}
if (1 === c) {
t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2;
a[f++] = t >> 8 & 255;
a[f++] = 255 & t;
}
return a;
};
n.fromByteArray = function(e) {
for (var t, n = e.length, r = n % 3, s = [], i = 0, c = n - r; i < c; i += 16383) s.push(f(e, i, i + 16383 > c ? c : i + 16383));
if (1 === r) {
t = e[n - 1];
s.push(o[t >> 2] + o[t << 4 & 63] + "==");
} else if (2 === r) {
t = (e[n - 2] << 8) + e[n - 1];
s.push(o[t >> 10] + o[t >> 4 & 63] + o[t << 2 & 63] + "=");
}
return s.join("");
};
for (var o = [], r = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, a = i.length; c < a; ++c) {
o[c] = i[c];
r[i.charCodeAt(c)] = c;
}
r["-".charCodeAt(0)] = 62;
r["_".charCodeAt(0)] = 63;
function u(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = e.indexOf("=");
-1 === n && (n = t);
return [ n, n === t ? 0 : 4 - n % 4 ];
}
function l(e, t, n) {
return 3 * (t + n) / 4 - n;
}
function f(e, t, n) {
for (var r, s, i = [], c = t; c < n; c += 3) {
r = (e[c] << 16 & 16711680) + (e[c + 1] << 8 & 65280) + (255 & e[c + 2]);
i.push(o[(s = r) >> 18 & 63] + o[s >> 12 & 63] + o[s >> 6 & 63] + o[63 & s]);
}
return i.join("");
}
}, {} ],
2: [ function(e, t, n) {
(function(t) {
"use strict";
var o = e("base64-js"), r = e("ieee754"), s = e("isarray");
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
return h(this, e);
}
return u(this, e, t, n);
}
a.poolSize = 8192;
a._augment = function(e) {
e.__proto__ = a.prototype;
return e;
};
function u(e, t, n, o) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? y(e, t, n, o) : "string" == typeof t ? d(e, t, n) : g(e, t);
}
a.from = function(e, t, n) {
return u(null, e, t, n);
};
if (a.TYPED_ARRAY_SUPPORT) {
a.prototype.__proto__ = Uint8Array.prototype;
a.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
value: null,
configurable: !0
});
}
function l(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function f(e, t, n, o) {
l(t);
return t <= 0 ? c(e, t) : void 0 !== n ? "string" == typeof o ? c(e, t).fill(n, o) : c(e, t).fill(n) : c(e, t);
}
a.alloc = function(e, t, n) {
return f(null, e, t, n);
};
function h(e, t) {
l(t);
e = c(e, t < 0 ? 0 : 0 | m(t));
if (!a.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
return e;
}
a.allocUnsafe = function(e) {
return h(null, e);
};
a.allocUnsafeSlow = function(e) {
return h(null, e);
};
function d(e, t, n) {
"string" == typeof n && "" !== n || (n = "utf8");
if (!a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var o = 0 | v(t, n), r = (e = c(e, o)).write(t, n);
r !== o && (e = e.slice(0, r));
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
if ("Buffer" === t.type && s(t.data)) return p(e, t.data);
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
for (var n = e.length, o = t.length, r = 0, s = Math.min(n, o); r < s; ++r) if (e[r] !== t[r]) {
n = e[r];
o = t[r];
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
if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return a.alloc(0);
var n;
if (void 0 === t) {
t = 0;
for (n = 0; n < e.length; ++n) t += e[n].length;
}
var o = a.allocUnsafe(t), r = 0;
for (n = 0; n < e.length; ++n) {
var i = e[n];
if (!a.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
i.copy(o, r);
r += i.length;
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
return K(e).length;

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
if (o) return K(e).length;
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
return j(this, t, n);

case "ascii":
return N(this, t, n);

case "latin1":
case "binary":
return F(this, t, n);

case "base64":
return T(this, t, n);

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
return 0 === e ? "" : 0 === arguments.length ? j(this, 0, e) : b.apply(this, arguments);
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
a.prototype.compare = function(e, t, n, o, r) {
if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
void 0 === t && (t = 0);
void 0 === n && (n = e ? e.length : 0);
void 0 === o && (o = 0);
void 0 === r && (r = this.length);
if (t < 0 || n > e.length || o < 0 || r > this.length) throw new RangeError("out of range index");
if (o >= r && t >= n) return 0;
if (o >= r) return -1;
if (t >= n) return 1;
if (this === e) return 0;
for (var s = (r >>>= 0) - (o >>>= 0), i = (n >>>= 0) - (t >>>= 0), c = Math.min(s, i), u = this.slice(o, r), l = e.slice(t, n), f = 0; f < c; ++f) if (u[f] !== l[f]) {
s = u[f];
i = l[f];
break;
}
return s < i ? -1 : i < s ? 1 : 0;
};
function w(e, t, n, o, r) {
if (0 === e.length) return -1;
if ("string" == typeof n) {
o = n;
n = 0;
} else n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648);
n = +n;
isNaN(n) && (n = r ? 0 : e.length - 1);
n < 0 && (n = e.length + n);
if (n >= e.length) {
if (r) return -1;
n = e.length - 1;
} else if (n < 0) {
if (!r) return -1;
n = 0;
}
"string" == typeof t && (t = a.from(t, o));
if (a.isBuffer(t)) return 0 === t.length ? -1 : k(e, t, n, o, r);
if ("number" == typeof t) {
t &= 255;
return a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : k(e, [ t ], n, o, r);
}
throw new TypeError("val must be string, number or Buffer");
}
function k(e, t, n, o, r) {
var s, i = 1, c = e.length, a = t.length;
if (void 0 !== o && ("ucs2" === (o = String(o).toLowerCase()) || "ucs-2" === o || "utf16le" === o || "utf-16le" === o)) {
if (e.length < 2 || t.length < 2) return -1;
i = 2;
c /= 2;
a /= 2;
n /= 2;
}
function u(e, t) {
return 1 === i ? e[t] : e.readUInt16BE(t * i);
}
if (r) {
var l = -1;
for (s = n; s < c; s++) if (u(e, s) === u(t, -1 === l ? 0 : s - l)) {
-1 === l && (l = s);
if (s - l + 1 === a) return l * i;
} else {
-1 !== l && (s -= s - l);
l = -1;
}
} else {
n + a > c && (n = c - a);
for (s = n; s >= 0; s--) {
for (var f = !0, h = 0; h < a; h++) if (u(e, s + h) !== u(t, h)) {
f = !1;
break;
}
if (f) return s;
}
}
return -1;
}
a.prototype.includes = function(e, t, n) {
return -1 !== this.indexOf(e, t, n);
};
a.prototype.indexOf = function(e, t, n) {
return w(this, e, t, n, !0);
};
a.prototype.lastIndexOf = function(e, t, n) {
return w(this, e, t, n, !1);
};
function _(e, t, n, o) {
n = Number(n) || 0;
var r = e.length - n;
o ? (o = Number(o)) > r && (o = r) : o = r;
var s = t.length;
if (s % 2 != 0) throw new TypeError("Invalid hex string");
o > s / 2 && (o = s / 2);
for (var i = 0; i < o; ++i) {
var c = parseInt(t.substr(2 * i, 2), 16);
if (isNaN(c)) return i;
e[n + i] = c;
}
return i;
}
function C(e, t, n, o) {
return Z(K(t, e.length - n), e, n, o);
}
function R(e, t, n, o) {
return Z(W(t), e, n, o);
}
function E(e, t, n, o) {
return R(e, t, n, o);
}
function P(e, t, n, o) {
return Z(G(t), e, n, o);
}
function S(e, t, n, o) {
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
var r = this.length - t;
(void 0 === n || n > r) && (n = r);
if (e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
o || (o = "utf8");
for (var s = !1; ;) switch (o) {
case "hex":
return _(this, e, t, n);

case "utf8":
case "utf-8":
return C(this, e, t, n);

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
return S(this, e, t, n);

default:
if (s) throw new TypeError("Unknown encoding: " + o);
o = ("" + o).toLowerCase();
s = !0;
}
};
a.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function T(e, t, n) {
return 0 === t && n === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, n));
}
function j(e, t, n) {
n = Math.min(e.length, n);
for (var o = [], r = t; r < n; ) {
var s = e[r], i = null, c = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
if (r + c <= n) {
var a, u, l, f;
switch (c) {
case 1:
s < 128 && (i = s);
break;

case 2:
128 == (192 & (a = e[r + 1])) && (f = (31 & s) << 6 | 63 & a) > 127 && (i = f);
break;

case 3:
a = e[r + 1];
u = e[r + 2];
128 == (192 & a) && 128 == (192 & u) && (f = (15 & s) << 12 | (63 & a) << 6 | 63 & u) > 2047 && (f < 55296 || f > 57343) && (i = f);
break;

case 4:
a = e[r + 1];
u = e[r + 2];
l = e[r + 3];
128 == (192 & a) && 128 == (192 & u) && 128 == (192 & l) && (f = (15 & s) << 18 | (63 & a) << 12 | (63 & u) << 6 | 63 & l) > 65535 && f < 1114112 && (i = f);
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
r += c;
}
return O(o);
}
var A = 4096;
function O(e) {
var t = e.length;
if (t <= A) return String.fromCharCode.apply(String, e);
for (var n = "", o = 0; o < t; ) n += String.fromCharCode.apply(String, e.slice(o, o += A));
return n;
}
function N(e, t, n) {
var o = "";
n = Math.min(e.length, n);
for (var r = t; r < n; ++r) o += String.fromCharCode(127 & e[r]);
return o;
}
function F(e, t, n) {
var o = "";
n = Math.min(e.length, n);
for (var r = t; r < n; ++r) o += String.fromCharCode(e[r]);
return o;
}
function B(e, t, n) {
var o, r = e.length;
(!t || t < 0) && (t = 0);
(!n || n < 0 || n > r) && (n = r);
for (var s = "", i = t; i < n; ++i) s += (o = e[i]) < 16 ? "0" + o.toString(16) : o.toString(16);
return s;
}
function L(e, t, n) {
for (var o = e.slice(t, n), r = "", s = 0; s < o.length; s += 2) r += String.fromCharCode(o[s] + 256 * o[s + 1]);
return r;
}
a.prototype.slice = function(e, t) {
var n, o = this.length;
(e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o);
(t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o);
t < e && (t = e);
if (a.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = a.prototype; else {
var r = t - e;
n = new a(r, void 0);
for (var s = 0; s < r; ++s) n[s] = this[s + e];
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
for (var o = this[e], r = 1, s = 0; ++s < t && (r *= 256); ) o += this[e + s] * r;
return o;
};
a.prototype.readUIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || I(e, t, this.length);
for (var o = this[e + --t], r = 1; t > 0 && (r *= 256); ) o += this[e + --t] * r;
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
for (var o = this[e], r = 1, s = 0; ++s < t && (r *= 256); ) o += this[e + s] * r;
o >= (r *= 128) && (o -= Math.pow(2, 8 * t));
return o;
};
a.prototype.readIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || I(e, t, this.length);
for (var o = t, r = 1, s = this[e + --o]; o > 0 && (r *= 256); ) s += this[e + --o] * r;
s >= (r *= 128) && (s -= Math.pow(2, 8 * t));
return s;
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
return r.read(this, e, !0, 23, 4);
};
a.prototype.readFloatBE = function(e, t) {
t || I(e, 4, this.length);
return r.read(this, e, !1, 23, 4);
};
a.prototype.readDoubleLE = function(e, t) {
t || I(e, 8, this.length);
return r.read(this, e, !0, 52, 8);
};
a.prototype.readDoubleBE = function(e, t) {
t || I(e, 8, this.length);
return r.read(this, e, !1, 52, 8);
};
function D(e, t, n, o, r, s) {
if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > r || t < s) throw new RangeError('"value" argument is out of bounds');
if (n + o > e.length) throw new RangeError("Index out of range");
}
a.prototype.writeUIntLE = function(e, t, n, o) {
e = +e;
t |= 0;
n |= 0;
o || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var r = 1, s = 0;
this[t] = 255 & e;
for (;++s < n && (r *= 256); ) this[t + s] = e / r & 255;
return t + n;
};
a.prototype.writeUIntBE = function(e, t, n, o) {
e = +e;
t |= 0;
n |= 0;
o || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var r = n - 1, s = 1;
this[t + r] = 255 & e;
for (;--r >= 0 && (s *= 256); ) this[t + r] = e / s & 255;
return t + n;
};
a.prototype.writeUInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 1, 255, 0);
a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
this[t] = 255 & e;
return t + 1;
};
function M(e, t, n, o) {
t < 0 && (t = 65535 + t + 1);
for (var r = 0, s = Math.min(e.length - n, 2); r < s; ++r) e[n + r] = (t & 255 << 8 * (o ? r : 1 - r)) >>> 8 * (o ? r : 1 - r);
}
a.prototype.writeUInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 2, 65535, 0);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else M(this, e, t, !0);
return t + 2;
};
a.prototype.writeUInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 2, 65535, 0);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else M(this, e, t, !1);
return t + 2;
};
function U(e, t, n, o) {
t < 0 && (t = 4294967295 + t + 1);
for (var r = 0, s = Math.min(e.length - n, 4); r < s; ++r) e[n + r] = t >>> 8 * (o ? r : 3 - r) & 255;
}
a.prototype.writeUInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 4, 4294967295, 0);
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
n || D(this, e, t, 4, 4294967295, 0);
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
var r = Math.pow(2, 8 * n - 1);
D(this, e, t, n, r - 1, -r);
}
var s = 0, i = 1, c = 0;
this[t] = 255 & e;
for (;++s < n && (i *= 256); ) {
e < 0 && 0 === c && 0 !== this[t + s - 1] && (c = 1);
this[t + s] = (e / i >> 0) - c & 255;
}
return t + n;
};
a.prototype.writeIntBE = function(e, t, n, o) {
e = +e;
t |= 0;
if (!o) {
var r = Math.pow(2, 8 * n - 1);
D(this, e, t, n, r - 1, -r);
}
var s = n - 1, i = 1, c = 0;
this[t + s] = 255 & e;
for (;--s >= 0 && (i *= 256); ) {
e < 0 && 0 === c && 0 !== this[t + s + 1] && (c = 1);
this[t + s] = (e / i >> 0) - c & 255;
}
return t + n;
};
a.prototype.writeInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 1, 127, -128);
a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
e < 0 && (e = 255 + e + 1);
this[t] = 255 & e;
return t + 1;
};
a.prototype.writeInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 2, 32767, -32768);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else M(this, e, t, !0);
return t + 2;
};
a.prototype.writeInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 2, 32767, -32768);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else M(this, e, t, !1);
return t + 2;
};
a.prototype.writeInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || D(this, e, t, 4, 2147483647, -2147483648);
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
n || D(this, e, t, 4, 2147483647, -2147483648);
e < 0 && (e = 4294967295 + e + 1);
if (a.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else U(this, e, t, !1);
return t + 4;
};
function q(e, t, n, o) {
if (n + o > e.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function Y(e, t, n, o, s) {
s || q(e, 0, n, 4);
r.write(e, t, n, o, 23, 4);
return n + 4;
}
a.prototype.writeFloatLE = function(e, t, n) {
return Y(this, e, t, !0, n);
};
a.prototype.writeFloatBE = function(e, t, n) {
return Y(this, e, t, !1, n);
};
function z(e, t, n, o, s) {
s || q(e, 0, n, 8);
r.write(e, t, n, o, 52, 8);
return n + 8;
}
a.prototype.writeDoubleLE = function(e, t, n) {
return z(this, e, t, !0, n);
};
a.prototype.writeDoubleBE = function(e, t, n) {
return z(this, e, t, !1, n);
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
var r, s = o - n;
if (this === e && n < t && t < o) for (r = s - 1; r >= 0; --r) e[r + t] = this[r + n]; else if (s < 1e3 || !a.TYPED_ARRAY_SUPPORT) for (r = 0; r < s; ++r) e[r + t] = this[r + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
return s;
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
var r = e.charCodeAt(0);
r < 256 && (e = r);
}
if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
if ("string" == typeof o && !a.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
} else "number" == typeof e && (e &= 255);
if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
if (n <= t) return this;
t >>>= 0;
n = void 0 === n ? this.length : n >>> 0;
e || (e = 0);
var s;
if ("number" == typeof e) for (s = t; s < n; ++s) this[s] = e; else {
var i = a.isBuffer(e) ? e : K(new a(e, o).toString()), c = i.length;
for (s = 0; s < n - t; ++s) this[s + t] = i[s % c];
}
return this;
};
var H = /[^+\/0-9A-Za-z-_]/g;
function J(e) {
if ((e = V(e).replace(H, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function V(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function K(e, t) {
t = t || Infinity;
for (var n, o = e.length, r = null, s = [], i = 0; i < o; ++i) {
if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
if (!r) {
if (n > 56319) {
(t -= 3) > -1 && s.push(239, 191, 189);
continue;
}
if (i + 1 === o) {
(t -= 3) > -1 && s.push(239, 191, 189);
continue;
}
r = n;
continue;
}
if (n < 56320) {
(t -= 3) > -1 && s.push(239, 191, 189);
r = n;
continue;
}
n = 65536 + (r - 55296 << 10 | n - 56320);
} else r && (t -= 3) > -1 && s.push(239, 191, 189);
r = null;
if (n < 128) {
if ((t -= 1) < 0) break;
s.push(n);
} else if (n < 2048) {
if ((t -= 2) < 0) break;
s.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((t -= 3) < 0) break;
s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return s;
}
function W(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
return t;
}
function X(e, t) {
for (var n, o, r, s = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) {
o = (n = e.charCodeAt(i)) >> 8;
r = n % 256;
s.push(r);
s.push(o);
}
return s;
}
function G(e) {
return o.toByteArray(J(e));
}
function Z(e, t, n, o) {
for (var r = 0; r < o && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
return r;
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
n.read = function(e, t, n, o, r) {
var s, i, c = 8 * r - o - 1, a = (1 << c) - 1, u = a >> 1, l = -7, f = n ? r - 1 : 0, h = n ? -1 : 1, d = e[t + f];
f += h;
s = d & (1 << -l) - 1;
d >>= -l;
l += c;
for (;l > 0; s = 256 * s + e[t + f], f += h, l -= 8) ;
i = s & (1 << -l) - 1;
s >>= -l;
l += o;
for (;l > 0; i = 256 * i + e[t + f], f += h, l -= 8) ;
if (0 === s) s = 1 - u; else {
if (s === a) return i ? NaN : Infinity * (d ? -1 : 1);
i += Math.pow(2, o);
s -= u;
}
return (d ? -1 : 1) * i * Math.pow(2, s - o);
};
n.write = function(e, t, n, o, r, s) {
var i, c, a, u = 8 * s - r - 1, l = (1 << u) - 1, f = l >> 1, h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = o ? 0 : s - 1, p = o ? 1 : -1, y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
t = Math.abs(t);
if (isNaN(t) || Infinity === t) {
c = isNaN(t) ? 1 : 0;
i = l;
} else {
i = Math.floor(Math.log(t) / Math.LN2);
if (t * (a = Math.pow(2, -i)) < 1) {
i--;
a *= 2;
}
if ((t += i + f >= 1 ? h / a : h * Math.pow(2, 1 - f)) * a >= 2) {
i++;
a /= 2;
}
if (i + f >= l) {
c = 0;
i = l;
} else if (i + f >= 1) {
c = (t * a - 1) * Math.pow(2, r);
i += f;
} else {
c = t * Math.pow(2, f - 1) * Math.pow(2, r);
i = 0;
}
}
for (;r >= 8; e[n + d] = 255 & c, d += p, c /= 256, r -= 8) ;
i = i << r | c;
u += r;
for (;u > 0; e[n + d] = 255 & i, d += p, i /= 256, u -= 8) ;
e[n + d - p] |= 128 * y;
};
}, {} ],
5: [ function(e, t) {
var n, o, r = t.exports = {};
function s() {
throw new Error("setTimeout has not been defined");
}
function i() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
n = "function" == typeof setTimeout ? setTimeout : s;
} catch (e) {
n = s;
}
try {
o = "function" == typeof clearTimeout ? clearTimeout : i;
} catch (e) {
o = i;
}
})();
function c(e) {
if (n === setTimeout) return setTimeout(e, 0);
if ((n === s || !n) && setTimeout) {
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
var u, l = [], f = !1, h = -1;
function d() {
if (f && u) {
f = !1;
u.length ? l = u.concat(l) : h = -1;
l.length && p();
}
}
function p() {
if (!f) {
var e = c(d);
f = !0;
for (var t = l.length; t; ) {
u = l;
l = [];
for (;++h < t; ) u && u[h].run();
h = -1;
t = l.length;
}
u = null;
f = !1;
a(e);
}
}
r.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
l.push(new y(e, t));
1 !== l.length || f || c(p);
};
function y(e, t) {
this.fun = e;
this.array = t;
}
y.prototype.run = function() {
this.fun.apply(null, this.array);
};
r.title = "browser";
r.browser = !0;
r.env = {};
r.argv = [];
r.version = "";
r.versions = {};
function g() {}
r.on = g;
r.addListener = g;
r.once = g;
r.off = g;
r.removeListener = g;
r.removeAllListeners = g;
r.emit = g;
r.prependListener = g;
r.prependOnceListener = g;
r.listeners = function() {
return [];
};
r.binding = function() {
throw new Error("process.binding is not supported");
};
r.cwd = function() {
return "/";
};
r.chdir = function() {
throw new Error("process.chdir is not supported");
};
r.umask = function() {
return 0;
};
}, {} ],
6: [ function(e, t, n) {
n.Emitter = o;
function o(e) {
if (e) return r(e);
}
function r(e) {
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
for (var r = 0; r < o.length; r++) if ((n = o[r]) === t || n.fn === t) {
o.splice(r, 1);
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
for (var r = (n = n.slice(0)).length; o < r; ++o) n[o].apply(this, t);
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
7: [ function(e, t) {
t.exports = e("./lib/axios");
}, {
"./lib/axios": 9
} ],
8: [ function(e, t) {
"use strict";
var n = e("./../utils"), o = e("./../core/settle"), r = e("./../helpers/cookies"), s = e("./../helpers/buildURL"), i = e("../core/buildFullPath"), c = e("./../helpers/parseHeaders"), a = e("./../helpers/isURLSameOrigin"), u = e("../core/createError");
t.exports = function(e) {
return new Promise(function(t, l) {
var f = e.data, h = e.headers, d = e.responseType;
n.isFormData(f) && delete h["Content-Type"];
var p = new XMLHttpRequest();
if (e.auth) {
var y = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
h.Authorization = "Basic " + btoa(y + ":" + g);
}
var m = i(e.baseURL, e.url);
p.open(e.method.toUpperCase(), s(m, e.params, e.paramsSerializer), !0);
p.timeout = e.timeout;
function v() {
if (p) {
var n = "getAllResponseHeaders" in p ? c(p.getAllResponseHeaders()) : null, r = {
data: d && "text" !== d && "json" !== d ? p.response : p.responseText,
status: p.status,
statusText: p.statusText,
headers: n,
config: e,
request: p
};
o(t, l, r);
p = null;
}
}
"onloadend" in p ? p.onloadend = v : p.onreadystatechange = function() {
p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:")) && setTimeout(v);
};
p.onabort = function() {
if (p) {
l(u("Request aborted", e, "ECONNABORTED", p));
p = null;
}
};
p.onerror = function() {
l(u("Network Error", e, null, p));
p = null;
};
p.ontimeout = function() {
var t = "timeout of " + e.timeout + "ms exceeded";
e.timeoutErrorMessage && (t = e.timeoutErrorMessage);
l(u(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", p));
p = null;
};
if (n.isStandardBrowserEnv()) {
var b = (e.withCredentials || a(m)) && e.xsrfCookieName ? r.read(e.xsrfCookieName) : void 0;
b && (h[e.xsrfHeaderName] = b);
}
"setRequestHeader" in p && n.forEach(h, function(e, t) {
"undefined" == typeof f && "content-type" === t.toLowerCase() ? delete h[t] : p.setRequestHeader(t, e);
});
n.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials);
d && "json" !== d && (p.responseType = e.responseType);
"function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress);
"function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress);
e.cancelToken && e.cancelToken.promise.then(function(e) {
if (p) {
p.abort();
l(e);
p = null;
}
});
f || (f = null);
p.send(f);
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
9: [ function(e, t) {
"use strict";
var n = e("./utils"), o = e("./helpers/bind"), r = e("./core/Axios"), s = e("./core/mergeConfig");
function i(e) {
var t = new r(e), s = o(r.prototype.request, t);
n.extend(s, r.prototype, t);
n.extend(s, t);
return s;
}
var c = i(e("./defaults"));
c.Axios = r;
c.create = function(e) {
return i(s(c.defaults, e));
};
c.Cancel = e("./cancel/Cancel");
c.CancelToken = e("./cancel/CancelToken");
c.isCancel = e("./cancel/isCancel");
c.all = function(e) {
return Promise.all(e);
};
c.spread = e("./helpers/spread");
c.isAxiosError = e("./helpers/isAxiosError");
t.exports = c;
t.exports.default = c;
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
10: [ function(e, t) {
"use strict";
function n(e) {
this.message = e;
}
n.prototype.toString = function() {
return "Cancel" + (this.message ? ": " + this.message : "");
};
n.prototype.__CANCEL__ = !0;
t.exports = n;
}, {} ],
11: [ function(e, t) {
"use strict";
var n = e("./Cancel");
function o(e) {
if ("function" != typeof e) throw new TypeError("executor must be a function.");
var t;
this.promise = new Promise(function(e) {
t = e;
});
var o = this;
e(function(e) {
if (!o.reason) {
o.reason = new n(e);
t(o.reason);
}
});
}
o.prototype.throwIfRequested = function() {
if (this.reason) throw this.reason;
};
o.source = function() {
var e;
return {
token: new o(function(t) {
e = t;
}),
cancel: e
};
};
t.exports = o;
}, {
"./Cancel": 10
} ],
12: [ function(e, t) {
"use strict";
t.exports = function(e) {
return !(!e || !e.__CANCEL__);
};
}, {} ],
13: [ function(e, t) {
"use strict";
var n = e("./../utils"), o = e("../helpers/buildURL"), r = e("./InterceptorManager"), s = e("./dispatchRequest"), i = e("./mergeConfig"), c = e("../helpers/validator"), a = c.validators;
function u(e) {
this.defaults = e;
this.interceptors = {
request: new r(),
response: new r()
};
}
u.prototype.request = function(e) {
"string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {};
(e = i(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
var t = e.transitional;
void 0 !== t && c.assertOptions(t, {
silentJSONParsing: a.transitional(a.boolean, "1.0.0"),
forcedJSONParsing: a.transitional(a.boolean, "1.0.0"),
clarifyTimeoutError: a.transitional(a.boolean, "1.0.0")
}, !1);
var n = [], o = !0;
this.interceptors.request.forEach(function(t) {
if ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) {
o = o && t.synchronous;
n.unshift(t.fulfilled, t.rejected);
}
});
var r, u = [];
this.interceptors.response.forEach(function(e) {
u.push(e.fulfilled, e.rejected);
});
if (!o) {
var l = [ s, void 0 ];
Array.prototype.unshift.apply(l, n);
l.concat(u);
r = Promise.resolve(e);
for (;l.length; ) r = r.then(l.shift(), l.shift());
return r;
}
for (var f = e; n.length; ) {
var h = n.shift(), d = n.shift();
try {
f = h(f);
} catch (e) {
d(e);
break;
}
}
try {
r = s(f);
} catch (e) {
return Promise.reject(e);
}
for (;u.length; ) r = r.then(u.shift(), u.shift());
return r;
};
u.prototype.getUri = function(e) {
e = i(this.defaults, e);
return o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};
n.forEach([ "delete", "get", "head", "options" ], function(e) {
u.prototype[e] = function(t, n) {
return this.request(i(n || {}, {
method: e,
url: t,
data: (n || {}).data
}));
};
});
n.forEach([ "post", "put", "patch" ], function(e) {
u.prototype[e] = function(t, n, o) {
return this.request(i(o || {}, {
method: e,
url: t,
data: n
}));
};
});
t.exports = u;
}, {
"../helpers/buildURL": 24,
"../helpers/validator": 33,
"./../utils": 34,
"./InterceptorManager": 14,
"./dispatchRequest": 17,
"./mergeConfig": 19
} ],
14: [ function(e, t) {
"use strict";
var n = e("./../utils");
function o() {
this.handlers = [];
}
o.prototype.use = function(e, t, n) {
this.handlers.push({
fulfilled: e,
rejected: t,
synchronous: !!n && n.synchronous,
runWhen: n ? n.runWhen : null
});
return this.handlers.length - 1;
};
o.prototype.eject = function(e) {
this.handlers[e] && (this.handlers[e] = null);
};
o.prototype.forEach = function(e) {
n.forEach(this.handlers, function(t) {
null !== t && e(t);
});
};
t.exports = o;
}, {
"./../utils": 34
} ],
15: [ function(e, t) {
"use strict";
var n = e("../helpers/isAbsoluteURL"), o = e("../helpers/combineURLs");
t.exports = function(e, t) {
return e && !n(t) ? o(e, t) : t;
};
}, {
"../helpers/combineURLs": 25,
"../helpers/isAbsoluteURL": 27
} ],
16: [ function(e, t) {
"use strict";
var n = e("./enhanceError");
t.exports = function(e, t, o, r, s) {
var i = new Error(e);
return n(i, t, o, r, s);
};
}, {
"./enhanceError": 18
} ],
17: [ function(e, t) {
"use strict";
var n = e("./../utils"), o = e("./transformData"), r = e("../cancel/isCancel"), s = e("../defaults");
function i(e) {
e.cancelToken && e.cancelToken.throwIfRequested();
}
t.exports = function(e) {
i(e);
e.headers = e.headers || {};
e.data = o.call(e, e.data, e.headers, e.transformRequest);
e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers);
n.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
delete e.headers[t];
});
return (e.adapter || s.adapter)(e).then(function(t) {
i(e);
t.data = o.call(e, t.data, t.headers, e.transformResponse);
return t;
}, function(t) {
if (!r(t)) {
i(e);
t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse));
}
return Promise.reject(t);
});
};
}, {
"../cancel/isCancel": 12,
"../defaults": 22,
"./../utils": 34,
"./transformData": 21
} ],
18: [ function(e, t) {
"use strict";
t.exports = function(e, t, n, o, r) {
e.config = t;
n && (e.code = n);
e.request = o;
e.response = r;
e.isAxiosError = !0;
e.toJSON = function() {
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
return e;
};
}, {} ],
19: [ function(e, t) {
"use strict";
var n = e("../utils");
t.exports = function(e, t) {
t = t || {};
var o = {}, r = [ "url", "method", "data" ], s = [ "headers", "auth", "proxy", "params" ], i = [ "baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding" ], c = [ "validateStatus" ];
function a(e, t) {
return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t;
}
function u(r) {
n.isUndefined(t[r]) ? n.isUndefined(e[r]) || (o[r] = a(void 0, e[r])) : o[r] = a(e[r], t[r]);
}
n.forEach(r, function(e) {
n.isUndefined(t[e]) || (o[e] = a(void 0, t[e]));
});
n.forEach(s, u);
n.forEach(i, function(r) {
n.isUndefined(t[r]) ? n.isUndefined(e[r]) || (o[r] = a(void 0, e[r])) : o[r] = a(void 0, t[r]);
});
n.forEach(c, function(n) {
n in t ? o[n] = a(e[n], t[n]) : n in e && (o[n] = a(void 0, e[n]));
});
var l = r.concat(s).concat(i).concat(c), f = Object.keys(e).concat(Object.keys(t)).filter(function(e) {
return -1 === l.indexOf(e);
});
n.forEach(f, u);
return o;
};
}, {
"../utils": 34
} ],
20: [ function(e, t) {
"use strict";
var n = e("./createError");
t.exports = function(e, t, o) {
var r = o.config.validateStatus;
o.status && r && !r(o.status) ? t(n("Request failed with status code " + o.status, o.config, null, o.request, o)) : e(o);
};
}, {
"./createError": 16
} ],
21: [ function(e, t) {
"use strict";
var n = e("./../utils"), o = e("./../defaults");
t.exports = function(e, t, r) {
var s = this || o;
n.forEach(r, function(n) {
e = n.call(s, e, t);
});
return e;
};
}, {
"./../defaults": 22,
"./../utils": 34
} ],
22: [ function(e, t) {
(function(n) {
"use strict";
var o = e("./utils"), r = e("./helpers/normalizeHeaderName"), s = e("./core/enhanceError"), i = {
"Content-Type": "application/x-www-form-urlencoded"
};
function c(e, t) {
!o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
var a = {
transitional: {
silentJSONParsing: !0,
forcedJSONParsing: !0,
clarifyTimeoutError: !1
},
adapter: function() {
var t;
"undefined" != typeof XMLHttpRequest ? t = e("./adapters/xhr") : "undefined" != typeof n && "[object process]" === Object.prototype.toString.call(n) && (t = e("./adapters/http"));
return t;
}(),
transformRequest: [ function(e, t) {
r(t, "Accept");
r(t, "Content-Type");
if (o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e)) return e;
if (o.isArrayBufferView(e)) return e.buffer;
if (o.isURLSearchParams(e)) {
c(t, "application/x-www-form-urlencoded;charset=utf-8");
return e.toString();
}
if (o.isObject(e) || t && "application/json" === t["Content-Type"]) {
c(t, "application/json");
return JSON.stringify(e);
}
return e;
} ],
transformResponse: [ function(e) {
var t = this.transitional, n = t && t.silentJSONParsing, r = t && t.forcedJSONParsing, i = !n && "json" === this.responseType;
if (i || r && o.isString(e) && e.length) try {
return JSON.parse(e);
} catch (e) {
if (i) {
if ("SyntaxError" === e.name) throw s(e, this, "E_JSON_PARSE");
throw e;
}
}
return e;
} ],
timeout: 0,
xsrfCookieName: "XSRF-TOKEN",
xsrfHeaderName: "X-XSRF-TOKEN",
maxContentLength: -1,
maxBodyLength: -1,
validateStatus: function(e) {
return e >= 200 && e < 300;
},
headers: {
common: {
Accept: "application/json, text/plain, */*"
}
}
};
o.forEach([ "delete", "get", "head" ], function(e) {
a.headers[e] = {};
});
o.forEach([ "post", "put", "patch" ], function(e) {
a.headers[e] = o.merge(i);
});
t.exports = a;
}).call(this, e("_process"));
}, {
"./adapters/http": 8,
"./adapters/xhr": 8,
"./core/enhanceError": 18,
"./helpers/normalizeHeaderName": 30,
"./utils": 34,
_process: 5
} ],
23: [ function(e, t) {
"use strict";
t.exports = function(e, t) {
return function() {
for (var n = new Array(arguments.length), o = 0; o < n.length; o++) n[o] = arguments[o];
return e.apply(t, n);
};
};
}, {} ],
24: [ function(e, t) {
"use strict";
var n = e("./../utils");
function o(e) {
return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
t.exports = function(e, t, r) {
if (!t) return e;
var s;
if (r) s = r(t); else if (n.isURLSearchParams(t)) s = t.toString(); else {
var i = [];
n.forEach(t, function(e, t) {
if (null !== e && "undefined" != typeof e) {
n.isArray(e) ? t += "[]" : e = [ e ];
n.forEach(e, function(e) {
n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e));
i.push(o(t) + "=" + o(e));
});
}
});
s = i.join("&");
}
if (s) {
var c = e.indexOf("#");
-1 !== c && (e = e.slice(0, c));
e += (-1 === e.indexOf("?") ? "?" : "&") + s;
}
return e;
};
}, {
"./../utils": 34
} ],
25: [ function(e, t) {
"use strict";
t.exports = function(e, t) {
return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
};
}, {} ],
26: [ function(e, t) {
"use strict";
var n = e("./../utils");
t.exports = n.isStandardBrowserEnv() ? {
write: function(e, t, o, r, s, i) {
var c = [];
c.push(e + "=" + encodeURIComponent(t));
n.isNumber(o) && c.push("expires=" + new Date(o).toGMTString());
n.isString(r) && c.push("path=" + r);
n.isString(s) && c.push("domain=" + s);
!0 === i && c.push("secure");
document.cookie = c.join("; ");
},
read: function(e) {
if (!document.cookie) return null;
var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
return t ? decodeURIComponent(t[3]) : null;
},
remove: function(e) {
this.write(e, "", Date.now() - 864e5);
}
} : {
write: function() {},
read: function() {
return null;
},
remove: function() {}
};
}, {
"./../utils": 34
} ],
27: [ function(e, t) {
"use strict";
t.exports = function(e) {
return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
};
}, {} ],
28: [ function(e, t) {
"use strict";
t.exports = function(e) {
return "object" == typeof e && !0 === e.isAxiosError;
};
}, {} ],
29: [ function(e, t) {
"use strict";
var n = e("./../utils");
t.exports = n.isStandardBrowserEnv() ? function() {
var e, t = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
if (!o.pathname) return function() {
return !0;
};
function r(e) {
var n = e;
if (t) {
o.setAttribute("href", n);
n = o.href;
}
o.setAttribute("href", n);
return {
href: o.href,
protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
host: o.host,
search: o.search ? o.search.replace(/^\?/, "") : "",
hash: o.hash ? o.hash.replace(/^#/, "") : "",
hostname: o.hostname,
port: o.port,
pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
};
}
e = r(window.location.href);
return function(t) {
var o = n.isString(t) ? r(t) : t;
return o.protocol === e.protocol && o.host === e.host;
};
}() : function() {
return !0;
};
}, {
"./../utils": 34
} ],
30: [ function(e, t) {
"use strict";
var n = e("../utils");
t.exports = function(e, t) {
n.forEach(e, function(n, o) {
if (o !== t && o.toUpperCase() === t.toUpperCase()) {
e[t] = n;
delete e[o];
}
});
};
}, {
"../utils": 34
} ],
31: [ function(e, t) {
"use strict";
var n = e("./../utils"), o = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
t.exports = function(e) {
var t, r, s, i = {};
if (!e) return i;
n.forEach(e.split("\n"), function(e) {
s = e.indexOf(":");
t = n.trim(e.substr(0, s)).toLowerCase();
r = n.trim(e.substr(s + 1));
if (t) {
if (i[t] && o.indexOf(t) >= 0) return;
i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([ r ]) : i[t] ? i[t] + ", " + r : r;
}
});
return i;
};
}, {
"./../utils": 34
} ],
32: [ function(e, t) {
"use strict";
t.exports = function(e) {
return function(t) {
return e.apply(null, t);
};
};
}, {} ],
33: [ function(e, t) {
"use strict";
var n = e("./../../package.json"), o = {};
[ "object", "boolean", "number", "function", "string", "symbol" ].forEach(function(e, t) {
o[e] = function(n) {
return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
};
});
var r = {}, s = n.version.split(".");
function i(e, t) {
for (var n = t ? t.split(".") : s, o = e.split("."), r = 0; r < 3; r++) {
if (n[r] > o[r]) return !0;
if (n[r] < o[r]) return !1;
}
return !1;
}
o.transitional = function(e, t, o) {
var s = t && i(t);
function c(e, t) {
return "[Axios v" + n.version + "] Transitional option '" + e + "'" + t + (o ? ". " + o : "");
}
return function(n, o, i) {
if (!1 === e) throw new Error(c(o, " has been removed in " + t));
if (s && !r[o]) {
r[o] = !0;
console.warn(c(o, " has been deprecated since v" + t + " and will be removed in the near future"));
}
return !e || e(n, o, i);
};
};
t.exports = {
isOlderVersion: i,
assertOptions: function(e, t, n) {
if ("object" != typeof e) throw new TypeError("options must be an object");
for (var o = Object.keys(e), r = o.length; r-- > 0; ) {
var s = o[r], i = t[s];
if (i) {
var c = e[s], a = void 0 === c || i(c, s, e);
if (!0 !== a) throw new TypeError("option " + s + " must be " + a);
} else if (!0 !== n) throw Error("Unknown option " + s);
}
},
validators: o
};
}, {
"./../../package.json": 35
} ],
34: [ function(e, t) {
"use strict";
var n = e("./helpers/bind"), o = Object.prototype.toString;
function r(e) {
return "[object Array]" === o.call(e);
}
function s(e) {
return "undefined" == typeof e;
}
function i(e) {
return null !== e && "object" == typeof e;
}
function c(e) {
if ("[object Object]" !== o.call(e)) return !1;
var t = Object.getPrototypeOf(e);
return null === t || t === Object.prototype;
}
function a(e) {
return "[object Function]" === o.call(e);
}
function u(e, t) {
if (null !== e && "undefined" != typeof e) {
"object" != typeof e && (e = [ e ]);
if (r(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
}
t.exports = {
isArray: r,
isArrayBuffer: function(e) {
return "[object ArrayBuffer]" === o.call(e);
},
isBuffer: function(e) {
return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
},
isFormData: function(e) {
return "undefined" != typeof FormData && e instanceof FormData;
},
isArrayBufferView: function(e) {
return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
},
isString: function(e) {
return "string" == typeof e;
},
isNumber: function(e) {
return "number" == typeof e;
},
isObject: i,
isPlainObject: c,
isUndefined: s,
isDate: function(e) {
return "[object Date]" === o.call(e);
},
isFile: function(e) {
return "[object File]" === o.call(e);
},
isBlob: function(e) {
return "[object Blob]" === o.call(e);
},
isFunction: a,
isStream: function(e) {
return i(e) && a(e.pipe);
},
isURLSearchParams: function(e) {
return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
},
isStandardBrowserEnv: function() {
return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
},
forEach: u,
merge: function e() {
var t = {};
function n(n, o) {
c(t[o]) && c(n) ? t[o] = e(t[o], n) : c(n) ? t[o] = e({}, n) : r(n) ? t[o] = n.slice() : t[o] = n;
}
for (var o = 0, s = arguments.length; o < s; o++) u(arguments[o], n);
return t;
},
extend: function(e, t, o) {
u(t, function(t, r) {
e[r] = o && "function" == typeof t ? n(t, o) : t;
});
return e;
},
trim: function(e) {
return e.replace(/^\s*/, "").replace(/\s*$/, "");
},
stripBOM: function(e) {
65279 === e.charCodeAt(0) && (e = e.slice(1));
return e;
}
};
}, {
"./helpers/bind": 23
} ],
35: [ function(e, t) {
t.exports = {
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
36: [ function(e, t, n) {
(function(o) {
n.formatArgs = function(e) {
e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff);
if (!this.useColors) return;
const n = "color: " + this.color;
e.splice(1, 0, n, "color: inherit");
let o = 0, r = 0;
e[0].replace(/%[a-zA-Z%]/g, e => {
if ("%%" !== e) {
o++;
"%c" === e && (r = o);
}
});
e.splice(r, 0, n);
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
const {formatters: r} = t.exports;
r.j = function(e) {
try {
return JSON.stringify(e);
} catch (e) {
return "[UnexpectedJSONParseError]: " + e.message;
}
};
}).call(this, e("_process"));
}, {
"./common": 37,
_process: 5
} ],
37: [ function(e, t) {
t.exports = function(t) {
n.debug = n;
n.default = n;
n.coerce = function(e) {
return e instanceof Error ? e.stack || e.message : e;
};
n.disable = function() {
const e = [ ...n.names.map(r), ...n.skips.map(r).map(e => "-" + e) ].join(",");
n.enable("");
return e;
};
n.enable = function(e) {
n.save(e);
n.namespaces = e;
n.names = [];
n.skips = [];
let t;
const o = ("string" == typeof e ? e : "").split(/[\s,]+/), r = o.length;
for (t = 0; t < r; t++) o[t] && ("-" === (e = o[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.slice(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
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
let t, r, s, i = null;
function c(...e) {
if (!c.enabled) return;
const o = c, r = Number(new Date()), s = r - (t || r);
o.diff = s;
o.prev = t;
o.curr = r;
t = r;
e[0] = n.coerce(e[0]);
"string" != typeof e[0] && e.unshift("%O");
let i = 0;
e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, r) => {
if ("%%" === t) return "%";
i++;
const s = n.formatters[r];
if ("function" == typeof s) {
const n = e[i];
t = s.call(o, n);
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
if (r !== n.namespaces) {
r = n.namespaces;
s = n.enabled(e);
}
return s;
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
function r(e) {
return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
}
n.enable(n.load());
return n;
};
}, {
ms: 57
} ],
38: [ function(e, t, n) {
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
39: [ function(e, t, n) {
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
40: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.parse = void 0;
const o = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
n.parse = function(e) {
const t = e, n = e.indexOf("["), c = e.indexOf("]");
-1 != n && -1 != c && (e = e.substring(0, n) + e.substring(n, c).replace(/:/g, ";") + e.substring(c, e.length));
let a = o.exec(e || ""), u = {}, l = 14;
for (;l--; ) u[r[l]] = a[l] || "";
if (-1 != n && -1 != c) {
u.source = t;
u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":");
u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
u.ipv6uri = !0;
}
u.pathNames = s(0, u.path);
u.queryKey = i(0, u.query);
return u;
};
function s(e, t) {
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
41: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.yeast = n.decode = n.encode = void 0;
const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), r = 64, s = {};
let i, c = 0, a = 0;
function u(e) {
let t = "";
do {
t = o[e % r] + t;
e = Math.floor(e / r);
} while (e > 0);
return t;
}
n.encode = u;
n.decode = function(e) {
let t = 0;
for (a = 0; a < e.length; a++) t = t * r + s[e.charAt(a)];
return t;
};
n.yeast = function() {
const e = u(+new Date());
return e !== i ? (c = 0, i = e) : e + "." + u(c++);
};
for (;a < r; a++) s[o[a]] = a;
}, {} ],
42: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.globalThisShim = void 0;
n.globalThisShim = (() => "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("", "return this")())();
}, {} ],
43: [ function(e, t, n) {
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
var r = e("./transport.js");
Object.defineProperty(n, "Transport", {
enumerable: !0,
get: function() {
return r.Transport;
}
});
var s = e("./transports/index.js");
Object.defineProperty(n, "transports", {
enumerable: !0,
get: function() {
return s.transports;
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
"./contrib/parseuri.js": 40,
"./socket.js": 44,
"./transport.js": 45,
"./transports/index.js": 46,
"./util.js": 51
} ],
44: [ function(e, t, n) {
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
const r = e("./transports/index.js"), s = e("./util.js"), i = e("./contrib/parseqs.js"), c = e("./contrib/parseuri.js"), a = o(e("debug")), u = e("@socket.io/component-emitter"), l = e("engine.io-parser"), f = (0, 
a.default)("engine.io-client:socket");
class h extends u.Emitter {
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
(0, s.installTimerFunctions)(this, t);
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
t.EIO = l.protocol;
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
return new r.transports[e](n);
}
open() {
let e;
if (this.opts.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket"; else {
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
h.priorWebsocketSuccess = !1;
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
h.priorWebsocketSuccess = "websocket" === t.name;
f('pausing current transport "%s"', this.transport.name);
this.transport.pause(() => {
if (!n && "closed" !== this.readyState) {
f("changing transport and sending upgrade packet");
u();
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
function r() {
if (!n) {
n = !0;
u();
t.close();
t = null;
}
}
const s = n => {
const o = new Error("probe error: " + n);
o.transport = t.name;
r();
f('probe transport "%s" failed because of error: %s', e, n);
this.emitReserved("upgradeError", o);
};
function i() {
s("transport closed");
}
function c() {
s("socket closed");
}
function a(e) {
if (t && e.name !== t.name) {
f('"%s" works - aborting "%s"', e.name, t.name);
r();
}
}
const u = () => {
t.removeListener("open", o);
t.removeListener("error", s);
t.removeListener("close", i);
this.off("close", c);
this.off("upgrading", a);
};
t.once("open", o);
t.once("error", s);
t.once("close", i);
this.once("close", c);
this.once("upgrading", a);
t.open();
}
onOpen() {
f("socket open");
this.readyState = "open";
h.priorWebsocketSuccess = "websocket" === this.transport.name;
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
n && (e += (0, s.byteLength)(n));
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
const r = {
type: e,
data: t,
options: n
};
this.emitReserved("packetCreate", r);
this.writeBuffer.push(r);
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
h.priorWebsocketSuccess = !1;
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
n.Socket = h;
h.protocol = l.protocol;
}, {
"./contrib/parseqs.js": 39,
"./contrib/parseuri.js": 40,
"./transports/index.js": 46,
"./util.js": 51,
"@socket.io/component-emitter": 6,
debug: 36,
"engine.io-parser": 56
} ],
45: [ function(e, t, n) {
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
const r = e("engine.io-parser"), s = e("@socket.io/component-emitter"), i = e("./util.js"), c = (0, 
o(e("debug")).default)("engine.io-client:transport");
class a extends Error {
constructor(e, t, n) {
super(e);
this.description = t;
this.context = n;
this.type = "TransportError";
}
}
n.Transport = class extends s.Emitter {
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
const t = (0, r.decodePacket)(e, this.socket.binaryType);
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
"./util.js": 51,
"@socket.io/component-emitter": 6,
debug: 36,
"engine.io-parser": 56
} ],
46: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.transports = void 0;
const o = e("./polling.js"), r = e("./websocket.js");
n.transports = {
websocket: r.WS,
polling: o.Polling
};
}, {
"./polling.js": 47,
"./websocket.js": 49
} ],
47: [ function(e, t, n) {
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
const r = e("../transport.js"), s = o(e("debug")), i = e("../contrib/yeast.js"), c = e("../contrib/parseqs.js"), a = e("engine.io-parser"), u = e("./xmlhttprequest.js"), l = e("@socket.io/component-emitter"), f = e("../util.js"), h = e("../globalThis.js"), d = (0, 
s.default)("engine.io-client:polling");
function p() {}
const y = null != new u.XHR({
xdomain: !1
}).responseType;
n.Polling = class extends r.Transport {
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
class g extends l.Emitter {
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
const t = this.xhr = new u.XHR(e);
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
const e = "onpagehide" in h.globalThisShim ? "pagehide" : "unload";
addEventListener(e, m, !1);
}
function m() {
for (let e in g.requests) g.requests.hasOwnProperty(e) && g.requests[e].abort();
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
48: [ function(e, t, n) {
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
"../globalThis.js": 42
} ],
49: [ function(e, t, n) {
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
const r = e("../transport.js"), s = e("../contrib/parseqs.js"), i = e("../contrib/yeast.js"), c = e("../util.js"), a = e("./websocket-constructor.js"), u = o(e("debug")), l = e("engine.io-parser"), f = (0, 
u.default)("engine.io-client:websocket"), h = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
n.WS = class extends r.Transport {
constructor(e) {
super(e);
this.supportsBinary = !e.forceBase64;
}
get name() {
return "websocket";
}
doOpen() {
if (!this.check()) return;
const e = this.uri(), t = this.opts.protocols, n = h ? {} : (0, c.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
try {
this.ws = a.usingBrowserWebSocket && !h ? t ? new a.WebSocket(e, t) : new a.WebSocket(e) : new a.WebSocket(e, t, n);
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
const o = e[n], r = n === e.length - 1;
(0, l.encodePacket)(o, this.supportsBinary, e => {
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
r && (0, a.nextTick)(() => {
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
const o = (0, s.encode)(e);
return t + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (o.length ? "?" + o : "");
}
check() {
return !!a.WebSocket;
}
};
}).call(this, e("buffer").Buffer);
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
50: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.XHR = void 0;
const o = e("../contrib/has-cors.js"), r = e("../globalThis.js");
n.XHR = function(e) {
const t = e.xdomain;
try {
if ("undefined" != typeof XMLHttpRequest && (!t || o.hasCORS)) return new XMLHttpRequest();
} catch (e) {}
if (!t) try {
return new (r.globalThisShim[[ "Active" ].concat("Object").join("X")])("Microsoft.XMLHTTP");
} catch (e) {}
};
}, {
"../contrib/has-cors.js": 38,
"../globalThis.js": 42
} ],
51: [ function(e, t, n) {
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
const r = setTimeout, s = clearTimeout;
n.installTimerFunctions = function(e, t) {
if (t.useNativeTimers) {
e.setTimeoutFn = r.bind(o.globalThisShim);
e.clearTimeoutFn = s.bind(o.globalThisShim);
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
for (let o = 0, r = e.length; o < r; o++) if ((t = e.charCodeAt(o)) < 128) n += 1; else if (t < 2048) n += 2; else if (t < 55296 || t >= 57344) n += 3; else {
o++;
n += 4;
}
return n;
}
}, {
"./globalThis.js": 42
} ],
52: [ function(e, t, n) {
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
const r = Object.create(null);
n.PACKET_TYPES_REVERSE = r;
Object.keys(o).forEach(e => {
r[o[e]] = e;
});
n.ERROR_PACKET = {
type: "error",
data: "parser error"
};
}, {} ],
53: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.decode = n.encode = void 0;
const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
for (let e = 0; e < o.length; e++) r[o.charCodeAt(e)] = e;
n.encode = e => {
let t, n = new Uint8Array(e), r = n.length, s = "";
for (t = 0; t < r; t += 3) {
s += o[n[t] >> 2];
s += o[(3 & n[t]) << 4 | n[t + 1] >> 4];
s += o[(15 & n[t + 1]) << 2 | n[t + 2] >> 6];
s += o[63 & n[t + 2]];
}
r % 3 == 2 ? s = s.substring(0, s.length - 1) + "=" : r % 3 == 1 && (s = s.substring(0, s.length - 2) + "==");
return s;
};
n.decode = e => {
let t, n, o, s, i, c = .75 * e.length, a = e.length, u = 0;
if ("=" === e[e.length - 1]) {
c--;
"=" === e[e.length - 2] && c--;
}
const l = new ArrayBuffer(c), f = new Uint8Array(l);
for (t = 0; t < a; t += 4) {
n = r[e.charCodeAt(t)];
o = r[e.charCodeAt(t + 1)];
s = r[e.charCodeAt(t + 2)];
i = r[e.charCodeAt(t + 3)];
f[u++] = n << 2 | o >> 4;
f[u++] = (15 & o) << 4 | s >> 2;
f[u++] = (3 & s) << 6 | 63 & i;
}
return l;
};
}, {} ],
54: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
const o = e("./commons.js"), r = e("./contrib/base64-arraybuffer.js"), s = "function" == typeof ArrayBuffer, i = (e, t) => {
if (s) {
const n = (0, r.decode)(e);
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
"./commons.js": 52,
"./contrib/base64-arraybuffer.js": 53
} ],
55: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
const o = e("./commons.js"), r = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), s = "function" == typeof ArrayBuffer, i = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, c = (e, t) => {
const n = new FileReader();
n.onload = function() {
const e = n.result.split(",")[1];
t("b" + e);
};
return n.readAsDataURL(e);
};
n.default = ({type: e, data: t}, n, a) => r && t instanceof Blob ? n ? a(t) : c(t, a) : s && (t instanceof ArrayBuffer || i(t)) ? n ? a(t) : c(new Blob([ t ]), a) : a(o.PACKET_TYPES[e] + (t || ""));
}, {
"./commons.js": 52
} ],
56: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.decodePayload = n.decodePacket = n.encodePayload = n.encodePacket = n.protocol = void 0;
const o = e("./encodePacket.js");
n.encodePacket = o.default;
const r = e("./decodePacket.js");
n.decodePacket = r.default;
const s = String.fromCharCode(30);
n.encodePayload = (e, t) => {
const n = e.length, r = new Array(n);
let i = 0;
e.forEach((e, c) => {
(0, o.default)(e, !1, e => {
r[c] = e;
++i === n && t(r.join(s));
});
});
};
n.decodePayload = (e, t) => {
const n = e.split(s), o = [];
for (let e = 0; e < n.length; e++) {
const s = (0, r.default)(n[e], t);
o.push(s);
if ("error" === s.type) break;
}
return o;
};
n.protocol = 4;
}, {
"./decodePacket.js": 54,
"./encodePacket.js": 55
} ],
57: [ function(e, t) {
var n = 1e3, o = 60 * n, r = 60 * o, s = 24 * r, i = 7 * s, c = 365.25 * s;
t.exports = function(e, t) {
t = t || {};
var i, c, f = typeof e;
if ("string" === f && e.length > 0) return a(e);
if ("number" === f && isFinite(e)) return t.long ? (i = e, (c = Math.abs(i)) >= s ? l(i, c, s, "day") : c >= r ? l(i, c, r, "hour") : c >= o ? l(i, c, o, "minute") : c >= n ? l(i, c, n, "second") : i + " ms") : u(e);
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
return a * s;

case "hours":
case "hour":
case "hrs":
case "hr":
case "h":
return a * r;

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
function u(e) {
var t = Math.abs(e);
return t >= s ? Math.round(e / s) + "d" : t >= r ? Math.round(e / r) + "h" : t >= o ? Math.round(e / o) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms";
}
function l(e, t, n, o) {
var r = t >= 1.5 * n;
return Math.round(e / n) + " " + o + (r ? "s" : "");
}
}, {} ],
58: [ function(e, t) {
var n = function(e) {
"use strict";
var t, n = Object.prototype, o = n.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {}, s = r.iterator || "@@iterator", i = r.asyncIterator || "@@asyncIterator", c = r.toStringTag || "@@toStringTag";
function a(e, t, n) {
Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
});
return e[t];
}
try {
a({}, "");
} catch (e) {
a = function(e, t, n) {
return e[t] = n;
};
}
function u(e, t, n, o) {
var r = t && t.prototype instanceof g ? t : g, s = Object.create(r.prototype), i = new T(o || []);
s._invoke = R(e, n, i);
return s;
}
e.wrap = u;
function l(e, t, n) {
try {
return {
type: "normal",
arg: e.call(t, n)
};
} catch (e) {
return {
type: "throw",
arg: e
};
}
}
var f = "suspendedStart", h = "suspendedYield", d = "executing", p = "completed", y = {};
function g() {}
function m() {}
function v() {}
var b = {};
a(b, s, function() {
return this;
});
var x = Object.getPrototypeOf, w = x && x(x(j([])));
w && w !== n && o.call(w, s) && (b = w);
var k = v.prototype = g.prototype = Object.create(b);
m.prototype = v;
a(k, "constructor", v);
a(v, "constructor", m);
m.displayName = a(v, c, "GeneratorFunction");
function _(e) {
[ "next", "throw", "return" ].forEach(function(t) {
a(e, t, function(e) {
return this._invoke(t, e);
});
});
}
e.isGeneratorFunction = function(e) {
var t = "function" == typeof e && e.constructor;
return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
};
e.mark = function(e) {
if (Object.setPrototypeOf) Object.setPrototypeOf(e, v); else {
e.__proto__ = v;
a(e, c, "GeneratorFunction");
}
e.prototype = Object.create(k);
return e;
};
e.awrap = function(e) {
return {
__await: e
};
};
function C(e, t) {
function n(r, s, i, c) {
var a = l(e[r], e, s);
if ("throw" !== a.type) {
var u = a.arg, f = u.value;
return f && "object" == typeof f && o.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
n("next", e, i, c);
}, function(e) {
n("throw", e, i, c);
}) : t.resolve(f).then(function(e) {
u.value = e;
i(u);
}, function(e) {
return n("throw", e, i, c);
});
}
c(a.arg);
}
var r;
this._invoke = function(e, o) {
function s() {
return new t(function(t, r) {
n(e, o, t, r);
});
}
return r = r ? r.then(s, s) : s();
};
}
_(C.prototype);
a(C.prototype, i, function() {
return this;
});
e.AsyncIterator = C;
e.async = function(t, n, o, r, s) {
void 0 === s && (s = Promise);
var i = new C(u(t, n, o, r), s);
return e.isGeneratorFunction(n) ? i : i.next().then(function(e) {
return e.done ? e.value : i.next();
});
};
function R(e, t, n) {
var o = f;
return function(r, s) {
if (o === d) throw new Error("Generator is already running");
if (o === p) {
if ("throw" === r) throw s;
return A();
}
n.method = r;
n.arg = s;
for (;;) {
var i = n.delegate;
if (i) {
var c = E(i, n);
if (c) {
if (c === y) continue;
return c;
}
}
if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
if (o === f) {
o = p;
throw n.arg;
}
n.dispatchException(n.arg);
} else "return" === n.method && n.abrupt("return", n.arg);
o = d;
var a = l(e, t, n);
if ("normal" === a.type) {
o = n.done ? p : h;
if (a.arg === y) continue;
return {
value: a.arg,
done: n.done
};
}
if ("throw" === a.type) {
o = p;
n.method = "throw";
n.arg = a.arg;
}
}
};
}
function E(e, n) {
var o = e.iterator[n.method];
if (o === t) {
n.delegate = null;
if ("throw" === n.method) {
if (e.iterator.return) {
n.method = "return";
n.arg = t;
E(e, n);
if ("throw" === n.method) return y;
}
n.method = "throw";
n.arg = new TypeError("The iterator does not provide a 'throw' method");
}
return y;
}
var r = l(o, e.iterator, n.arg);
if ("throw" === r.type) {
n.method = "throw";
n.arg = r.arg;
n.delegate = null;
return y;
}
var s = r.arg;
if (!s) {
n.method = "throw";
n.arg = new TypeError("iterator result is not an object");
n.delegate = null;
return y;
}
if (!s.done) return s;
n[e.resultName] = s.value;
n.next = e.nextLoc;
if ("return" !== n.method) {
n.method = "next";
n.arg = t;
}
n.delegate = null;
return y;
}
_(k);
a(k, c, "Generator");
a(k, s, function() {
return this;
});
a(k, "toString", function() {
return "[object Generator]";
});
function P(e) {
var t = {
tryLoc: e[0]
};
1 in e && (t.catchLoc = e[1]);
if (2 in e) {
t.finallyLoc = e[2];
t.afterLoc = e[3];
}
this.tryEntries.push(t);
}
function S(e) {
var t = e.completion || {};
t.type = "normal";
delete t.arg;
e.completion = t;
}
function T(e) {
this.tryEntries = [ {
tryLoc: "root"
} ];
e.forEach(P, this);
this.reset(!0);
}
e.keys = function(e) {
var t = [];
for (var n in e) t.push(n);
t.reverse();
return function n() {
for (;t.length; ) {
var o = t.pop();
if (o in e) {
n.value = o;
n.done = !1;
return n;
}
}
n.done = !0;
return n;
};
};
function j(e) {
if (e) {
var n = e[s];
if (n) return n.call(e);
if ("function" == typeof e.next) return e;
if (!isNaN(e.length)) {
var r = -1, i = function n() {
for (;++r < e.length; ) if (o.call(e, r)) {
n.value = e[r];
n.done = !1;
return n;
}
n.value = t;
n.done = !0;
return n;
};
return i.next = i;
}
}
return {
next: A
};
}
e.values = j;
function A() {
return {
value: t,
done: !0
};
}
T.prototype = {
constructor: T,
reset: function(e) {
this.prev = 0;
this.next = 0;
this.sent = this._sent = t;
this.done = !1;
this.delegate = null;
this.method = "next";
this.arg = t;
this.tryEntries.forEach(S);
if (!e) for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
},
stop: function() {
this.done = !0;
var e = this.tryEntries[0].completion;
if ("throw" === e.type) throw e.arg;
return this.rval;
},
dispatchException: function(e) {
if (this.done) throw e;
var n = this;
function r(o, r) {
c.type = "throw";
c.arg = e;
n.next = o;
if (r) {
n.method = "next";
n.arg = t;
}
return !!r;
}
for (var s = this.tryEntries.length - 1; s >= 0; --s) {
var i = this.tryEntries[s], c = i.completion;
if ("root" === i.tryLoc) return r("end");
if (i.tryLoc <= this.prev) {
var a = o.call(i, "catchLoc"), u = o.call(i, "finallyLoc");
if (a && u) {
if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
if (this.prev < i.finallyLoc) return r(i.finallyLoc);
} else if (a) {
if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
} else {
if (!u) throw new Error("try statement without catch or finally");
if (this.prev < i.finallyLoc) return r(i.finallyLoc);
}
}
}
},
abrupt: function(e, t) {
for (var n = this.tryEntries.length - 1; n >= 0; --n) {
var r = this.tryEntries[n];
if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
var s = r;
break;
}
}
s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
var i = s ? s.completion : {};
i.type = e;
i.arg = t;
if (s) {
this.method = "next";
this.next = s.finallyLoc;
return y;
}
return this.complete(i);
},
complete: function(e, t) {
if ("throw" === e.type) throw e.arg;
if ("break" === e.type || "continue" === e.type) this.next = e.arg; else if ("return" === e.type) {
this.rval = this.arg = e.arg;
this.method = "return";
this.next = "end";
} else "normal" === e.type && t && (this.next = t);
return y;
},
finish: function(e) {
for (var t = this.tryEntries.length - 1; t >= 0; --t) {
var n = this.tryEntries[t];
if (n.finallyLoc === e) {
this.complete(n.completion, n.afterLoc);
S(n);
return y;
}
}
},
catch: function(e) {
for (var t = this.tryEntries.length - 1; t >= 0; --t) {
var n = this.tryEntries[t];
if (n.tryLoc === e) {
var o = n.completion;
if ("throw" === o.type) {
var r = o.arg;
S(n);
}
return r;
}
}
throw new Error("illegal catch attempt");
},
delegateYield: function(e, n, o) {
this.delegate = {
iterator: j(e),
resultName: n,
nextLoc: o
};
"next" === this.method && (this.arg = t);
return y;
}
};
return e;
}("object" == typeof t ? t.exports : {});
try {
regeneratorRuntime = n;
} catch (e) {
"object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("n", "regeneratorRuntime=n")(n);
}
}, {} ],
59: [ function(e, t, n) {
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
60: [ function(e, t, n) {
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
const r = e("./url.js"), s = e("./manager.js");
Object.defineProperty(n, "Manager", {
enumerable: !0,
get: function() {
return s.Manager;
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
function u(e, t) {
if ("object" == typeof e) {
t = e;
e = void 0;
}
t = t || {};
const n = r.url(e, t.path || "/socket.io"), o = n.source, i = n.id, u = n.path, l = a[i] && u in a[i].nsps;
let f;
if (t.forceNew || t["force new connection"] || !1 === t.multiplex || l) {
c("ignoring socket cache for %s", o);
f = new s.Manager(o, t);
} else {
if (!a[i]) {
c("new io instance for %s", o);
a[i] = new s.Manager(o, t);
}
f = a[i];
}
n.query && !t.query && (t.query = n.queryKey);
return f.socket(n.path, t);
}
n.io = u;
n.connect = u;
n.default = u;
Object.assign(u, {
Manager: s.Manager,
Socket: i.Socket,
io: u,
connect: u
});
var l = e("socket.io-parser");
Object.defineProperty(n, "protocol", {
enumerable: !0,
get: function() {
return l.protocol;
}
});
t.exports = u;
}, {
"./manager.js": 61,
"./socket.js": 63,
"./url.js": 64,
debug: 36,
"socket.io-parser": 66
} ],
61: [ function(e, t, n) {
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
}), r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
Object.defineProperty(e, "default", {
enumerable: !0,
value: t
});
} : function(e, t) {
e.default = t;
}), s = this && this.__importStar || function(e) {
if (e && e.__esModule) return e;
var t = {};
if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
r(t, e);
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
const c = e("engine.io-client"), a = e("./socket.js"), u = s(e("socket.io-parser")), l = e("./on.js"), f = e("./contrib/backo2.js"), h = e("@socket.io/component-emitter"), d = i(e("debug")).default("socket.io-client:manager");
n.Manager = class extends h.Emitter {
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
const o = t.parser || u;
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
const o = l.on(t, "open", function() {
n.onopen();
e && e();
}), r = l.on(t, "error", t => {
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
this.subs.push(r);
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
this.subs.push(l.on(e, "ping", this.onping.bind(this)), l.on(e, "data", this.ondata.bind(this)), l.on(e, "error", this.onerror.bind(this)), l.on(e, "close", this.onclose.bind(this)), l.on(this.decoder, "decoded", this.ondecoded.bind(this)));
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
"./contrib/backo2.js": 59,
"./on.js": 62,
"./socket.js": 63,
"@socket.io/component-emitter": 6,
debug: 36,
"engine.io-client": 43,
"socket.io-parser": 66
} ],
62: [ function(e, t, n) {
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
63: [ function(e, t, n) {
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
const r = e("socket.io-parser"), s = e("./on.js"), i = e("@socket.io/component-emitter"), c = o(e("debug")).default("socket.io-client:socket"), a = Object.freeze({
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
this.subs = [ s.on(e, "open", this.onopen.bind(this)), s.on(e, "packet", this.onpacket.bind(this)), s.on(e, "error", this.onerror.bind(this)), s.on(e, "close", this.onclose.bind(this)) ];
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
type: r.PacketType.EVENT,
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
type: r.PacketType.CONNECT,
data: e
});
}) : this.packet({
type: r.PacketType.CONNECT,
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
case r.PacketType.CONNECT:
if (e.data && e.data.sid) {
const t = e.data.sid;
this.onconnect(t);
} else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
break;

case r.PacketType.EVENT:
case r.PacketType.BINARY_EVENT:
this.onevent(e);
break;

case r.PacketType.ACK:
case r.PacketType.BINARY_ACK:
this.onack(e);
break;

case r.PacketType.DISCONNECT:
this.ondisconnect();
break;

case r.PacketType.CONNECT_ERROR:
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
type: r.PacketType.ACK,
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
type: r.PacketType.DISCONNECT
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
"./on.js": 62,
"@socket.io/component-emitter": 6,
debug: 36,
"socket.io-parser": 66
} ],
64: [ function(e, t, n) {
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
const r = e("engine.io-client"), s = o(e("debug")).default("socket.io-client:url");
n.url = function(e, t = "", n) {
let o = e;
n = n || "undefined" != typeof location && location;
null == e && (e = n.protocol + "//" + n.host);
if ("string" == typeof e) {
"/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e);
if (!/^(https?|wss?):\/\//.test(e)) {
s("protocol-less url %s", e);
e = "undefined" != typeof n ? n.protocol + "//" + e : "https://" + e;
}
s("parse %s", e);
o = r.parse(e);
}
o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443"));
o.path = o.path || "/";
const i = -1 !== o.host.indexOf(":") ? "[" + o.host + "]" : o.host;
o.id = o.protocol + "://" + i + ":" + o.port + t;
o.href = o.protocol + "://" + i + (n && n.port === o.port ? "" : ":" + o.port);
return o;
};
}, {
debug: 36,
"engine.io-client": 43
} ],
65: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.reconstructPacket = n.deconstructPacket = void 0;
const o = e("./is-binary.js");
n.deconstructPacket = function(e) {
const t = [], n = e.data, o = e;
o.data = r(n, t);
o.attachments = t.length;
return {
packet: o,
buffers: t
};
};
function r(e, t) {
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
for (let o = 0; o < e.length; o++) n[o] = r(e[o], t);
return n;
}
if ("object" == typeof e && !(e instanceof Date)) {
const n = {};
for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = r(e[o], t));
return n;
}
return e;
}
n.reconstructPacket = function(e, t) {
e.data = s(e.data, t);
e.attachments = void 0;
return e;
};
function s(e, t) {
if (!e) return e;
if (e && !0 === e._placeholder) {
if ("number" == typeof e.num && e.num >= 0 && e.num < t.length) return t[e.num];
throw new Error("illegal attachments");
}
if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = s(e[n], t); else if ("object" == typeof e) for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = s(e[n], t));
return e;
}
}, {
"./is-binary.js": 67
} ],
66: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Decoder = n.Encoder = n.PacketType = n.protocol = void 0;
const o = e("@socket.io/component-emitter"), r = e("./binary.js"), s = e("./is-binary.js"), i = e("debug").default("socket.io-parser");
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
if ((e.type === c.EVENT || e.type === c.ACK) && s.hasBinary(e)) {
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
const t = r.deconstructPacket(e), n = this.encodeAsString(t.packet), o = t.buffers;
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
this.reconstructor = new u(t);
0 === t.attachments && super.emitReserved("decoded", t);
} else super.emitReserved("decoded", t);
} else {
if (!s.isBinary(e) && !e.base64) throw new Error("Unknown type: " + e);
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
const r = e.substring(o, t);
if (r != Number(r) || "-" !== e.charAt(t)) throw new Error("Illegal attachments");
n.attachments = Number(r);
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
class u {
constructor(e) {
this.packet = e;
this.buffers = [];
this.reconPack = e;
}
takeBinaryData(e) {
this.buffers.push(e);
if (this.buffers.length === this.reconPack.attachments) {
const e = r.reconstructPacket(this.reconPack, this.buffers);
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
"./binary.js": 65,
"./is-binary.js": 67,
"@socket.io/component-emitter": 6,
debug: 36
} ],
67: [ function(e, t, n) {
"use strict";
Object.defineProperty(n, "__esModule", {
value: !0
});
n.hasBinary = n.isBinary = void 0;
const o = "function" == typeof ArrayBuffer, r = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, s = Object.prototype.toString, i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === s.call(Blob), c = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === s.call(File);
function a(e) {
return o && (e instanceof ArrayBuffer || r(e)) || i && e instanceof Blob || c && e instanceof File;
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
update: function(e) {
void 0 === e && (e = 1e3);
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
e("regenerator-runtime/runtime");
e("./socket_connection");
var n = e("./axios_connection");
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
(0, n.createUser)(t).then(function(t) {
e.uname = t.data.Username;
e.uid = t.data.id;
cc.director.loadScene("homepage");
});
},
update: function() {}
});
cc._RF.pop();
}, {
"./axios_connection": "axios_connection",
"./socket_connection": "socket_connection",
"regenerator-runtime/runtime": 58
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
axios_connection: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fbfbfqoHqhI6ZiKJQHjTtMq", "axios_connection");
n.__esModule = !0;
n.quitroombyIDasp2 = n.quitroombyIDasp1 = n.quitfullroombyIDasp2 = n.quitfullroombyIDasp1 = n.joinroombyIDasp2 = n.joinroombyIDasp1 = n.getuserlist = n.getroomlist = n.getroombyID = n.getUserbyID = n.deleteuser = n.createroom = n.createUser = void 0;
e("regenerator-runtime");
e("regenerator-runtime/runtime");
function o(e, t, n, o, r, s, i) {
try {
var c = e[s](i), a = c.value;
} catch (e) {
n(e);
return;
}
c.done ? t(a) : Promise.resolve(a).then(o, r);
}
function r(e) {
return function() {
var t = this, n = arguments;
return new Promise(function(r, s) {
var i = e.apply(t, n);
function c(e) {
o(i, r, s, c, a, "next", e);
}
function a(e) {
o(i, r, s, c, a, "throw", e);
}
c(void 0);
});
};
}
var s = e("axios-creator").default, i = "https://chinese-chess-vnp.herokuapp.com/api/room", c = "https://chinese-chess-vnp.herokuapp.com/api/player", a = function() {
var e = r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
s({
method: "get",
url: c
}).then(function(e) {
console.log(e.data);
});

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
n.getuserlist = a;
var u = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
s({
method: "delete",
url: c + t
}).then(function(e) {
console.log(e.data);
});

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.deleteuser = u;
var l = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "post",
url: c,
data: {
Username: t
}
}).then(function(t) {
console.log(t.data);
e(t.data);
}).catch(function() {
return console.error("timeout exceeded");
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.createUser = l;
var f = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "get",
url: c + "/" + t
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.getUserbyID = f;
var h = function() {
var e = r(regeneratorRuntime.mark(function e() {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "get",
url: i
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function() {
return e.apply(this, arguments);
};
}();
n.getroomlist = h;
var d = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "post",
url: i
}).then(function(n) {
console.log(n);
s({
method: "patch",
url: i + "/" + n.data.data.id,
data: {
Player1: t
}
}).then(function(e) {
console.log(e);
});
e(n.data.data.id);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.createroom = d;
var p = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "get",
url: i + "/" + t
}).then(function(t) {
console.log(t);
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.getroombyID = p;
var y = function() {
var e = r(regeneratorRuntime.mark(function e(t, n) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "patch",
url: i + "/" + t,
data: {
Player1: n
}
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t, n) {
return e.apply(this, arguments);
};
}();
n.joinroombyIDasp1 = y;
var g = function() {
var e = r(regeneratorRuntime.mark(function e(t, n) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "patch",
url: i + "/" + t,
data: {
Player2: n
}
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t, n) {
return e.apply(this, arguments);
};
}();
n.joinroombyIDasp2 = g;
var m = function() {
var e = r(regeneratorRuntime.mark(function e(t, n) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "patch",
url: i + "/" + t,
data: {
Player1: n,
Player2: null
}
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t, n) {
return e.apply(this, arguments);
};
}();
n.quitfullroombyIDasp1 = m;
var v = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "patch",
url: i + "/" + t,
data: {
Player2: null
}
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.quitfullroombyIDasp2 = v;
var b = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "patch",
url: i + "/" + t,
data: {
Player1: null
}
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.quitroombyIDasp1 = b;
var x = function() {
var e = r(regeneratorRuntime.mark(function e(t) {
return regeneratorRuntime.wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", new Promise(function(e) {
s({
method: "patch",
url: i + "/" + t,
data: {
Player2: null
}
}).then(function(t) {
e(t.data);
});
}));

case 1:
case "end":
return e.stop();
}
}, e);
}));
return function(t) {
return e.apply(this, arguments);
};
}();
n.quitroombyIDasp2 = x;
cc._RF.pop();
}, {
"axios-creator": 7,
"regenerator-runtime": 58,
"regenerator-runtime/runtime": 58
} ],
backtoroomlist: [ function(e, t) {
"use strict";
cc._RF.push(t, "35807QmkQxFro+IzZbqGmDU", "backtoroomlist");
e("../socket_connection");
var n = e("../axios_connection");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
backtoroomlist: function() {
var e = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo"), t = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos"), o = t.rid;
(0, n.getroombyID)(o).then(function(r) {
console.log(r);
if (null != r.data.Player1 && null != r.data.Player2) {
if (r.data.Player1 == e.uid) {
var s = r.data.Player2;
(0, n.quitfullroombyIDasp1)(o, s).then(function(e) {
console.log(e);
t.rid = null;
cc.director.loadScene("rooms");
});
}
r.data.Player2 == e.uid && (0, n.quitfullroombyIDasp2)(o).then(function(e) {
console.log(e);
t.rid = null;
cc.director.loadScene("rooms");
});
}
null == r.data.Player1 && null != r.data.Player2 && (0, n.quitroombyIDasp2)(o).then(function(e) {
console.log(e);
t.rid = null;
cc.director.loadScene("rooms");
});
null != r.data.Player1 && null == r.data.Player2 && (0, n.quitroombyIDasp1)(o).then(function(e) {
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
"../axios_connection": "axios_connection",
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess, s = r.getChildren(), i = this.blackchess.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].y >= e.blackriver) {
console.log(e.blackriver);
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (var a = 0; a < s.length; a++) s[a].x == self.node.x + e.s && s[a].y == self.node.y + e.s && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == self.node.x + e.s && i[u].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x - e.s && s[a].y == self.node.y + e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x - e.s && i[u].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x + e.s && s[a].y == self.node.y - e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x + e.s && i[u].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x - e.s && s[a].y == self.node.y - e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x - e.s && i[u].y == self.node.y - e.s && (o[c].active = !1);
}
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && (o[c].active = !1);
}
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), o = this.place, r = o.getChildren(), s = this.redchess.getChildren(), i = this.blackchess, c = i.getChildren();
s.parent = o;
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
for (var u = 0; u < r.length; u++) 1 == r[u].active && (r[u].active = !1);
i.pauseSystemEvents(!0);
for (u = 0; u < r.length; u++) {
if (r[u].y <= e.redriver) {
if (r[u].x == self.node.x + 2 * e.s && r[u].y == self.node.y + 2 * e.s) {
r[u].active = !0;
for (var l = 0; l < s.length; l++) s[l].x == self.node.x + e.s && s[l].y == self.node.y + e.s && (r[u].active = !1);
for (var f = 0; f < c.length; f++) c[f].x == self.node.x + e.s && c[f].y == self.node.y + e.s && (r[u].active = !1);
}
if (r[u].x == self.node.x - 2 * e.s && r[u].y == self.node.y + 2 * e.s) {
r[u].active = !0;
for (l = 0; l < s.length; l++) s[l].x == self.node.x - e.s && s[l].y == self.node.y + e.s && (r[u].active = !1);
for (f = 0; f < c.length; f++) c[f].x == self.node.x - e.s && c[f].y == self.node.y + e.s && (r[u].active = !1);
}
if (r[u].x == self.node.x + 2 * e.s && r[u].y == self.node.y - 2 * e.s) {
r[u].active = !0;
for (l = 0; l < s.length; l++) s[l].x == self.node.x + e.s && s[l].y == self.node.y - e.s && (r[u].active = !1);
for (f = 0; f < c.length; f++) c[f].x == self.node.x + e.s && c[f].y == self.node.y - e.s && (r[u].active = !1);
}
if (r[u].x == self.node.x - 2 * e.s && r[u].y == self.node.y - 2 * e.s) {
r[u].active = !0;
for (l = 0; l < s.length; l++) s[l].x == self.node.x - e.s && s[l].y == self.node.y - e.s && (r[u].active = !1);
for (f = 0; f < c.length; f++) c[f].x == self.node.x - e.s && c[f].y == self.node.y - e.s && (r[u].active = !1);
}
for (l = 0; l < s.length; l++) s[l].x == r[u].x && s[l].y == r[u].y && (r[u].active = !1);
for (f = 0; f < c.length; f++) c[f].x == r[u].x && c[f].y == r[u].y && 1 == r[u].active && r[u].setScale(e.scale, e.scale);
}
t.redtouchmove(u);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess, s = r.getChildren(), i = this.blackchess.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == this.node.x) {
o[c].active = !0;
for (var a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y != self.node.y && (o[c].y >= s[a].y && s[a].y > self.node.y || o[c].y <= s[a].y && s[a].y < self.node.y) && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y != self.node.y && (o[c].y > i[u].y && i[u].y > self.node.y || o[c].y < i[u].y && i[u].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == this.node.y && 0 == o[c].active) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].y == self.node.y && s[a].x != self.node.x && (o[c].x >= s[a].x && s[a].x > self.node.x || o[c].x <= s[a].x && s[a].x < self.node.x) && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].y == self.node.y && i[u].x != self.node.x && (o[c].x > i[u].x && i[u].x > self.node.x || o[c].x < i[u].x && i[u].x < self.node.x) && (o[c].active = !1);
}
if (o[c].x == self.node.x && o[c].y > self.node.y) for (a = 0; a < s.length; a++) if (o[c].x == s[a].x && o[c].y == s[a].y) {
for (var l = 0; l < s.length; l++) if (self.node.y < s[l].y && s[l].y < s[a].y && s[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < i.length; l++) if (self.node.y < i[l].y && i[l].y < s[a].y && i[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (var f = 0; f < o.length; f++) for (a = 0; a < s.length; a++) o[c].y > o[f].y && o[f].y > self.node.y && o[f].x == s[a].x && o[f].y == s[a].y && 1 == o[f].active && (o[c].active = !1);
}
if (o[c].y == self.node.y && o[c].x > self.node.x) for (a = 0; a < s.length; a++) if (o[c].x == s[a].x && o[c].y == s[a].y) {
for (l = 0; l < s.length; l++) if (self.node.x < s[l].x && s[l].x < s[a].x && s[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < i.length; l++) if (self.node.x < i[l].x && i[l].x < s[a].x && i[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = 0; f < o.length; f++) for (a = 0; a < s.length; a++) o[c].x > o[f].x && o[f].x > self.node.x && o[f].y == s[a].y && o[f].x == s[a].x && 1 == o[f].active && (o[c].active = !1);
}
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && (o[c].active = !1);
}
for (c = o.length - 1; c >= 0; c--) {
if (o[c].x == self.node.x && o[c].y < self.node.y) for (a = 0; a < s.length; a++) if (o[c].x == s[a].x && o[c].y == s[a].y) {
for (l = 0; l < i.length; l++) if (self.node.y > i[l].y && i[l].y > s[a].y && i[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < s.length; l++) if (self.node.y > s[l].y && s[l].y > s[a].y && s[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (a = 0; a < s.length; a++) o[c].y < o[f].y && o[f].y < self.node.y && o[f].x == s[a].x && o[f].y == s[a].y && 1 == o[f].active && (o[c].active = !1);
}
if (o[c].y == self.node.y && o[c].x < self.node.x) for (a = 0; a < s.length; a++) if (o[c].x == s[a].x && o[c].y == s[a].y) {
for (l = 0; l < i.length; l++) if (self.node.x > i[l].x && i[l].x > s[a].x && i[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < s.length; l++) if (self.node.x > s[l].x && s[l].x > s[a].x && s[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (a = 0; a < s.length; a++) o[c].x < o[f].x && o[f].x < self.node.x && o[f].x == s[a].x && o[f].y == s[a].y && 1 == o[f].active && (o[c].active = !1);
}
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess.getChildren(), s = this.blackchess, i = s.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == self.node.x) {
o[c].active = !0;
for (var a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y != self.node.y && (o[c].y > r[a].y && r[a].y > self.node.y || o[c].y < r[a].y && r[a].y < self.node.y) && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y != self.node.y && (o[c].y >= i[u].y && i[u].y > self.node.y || o[c].y <= i[u].y && i[u].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == self.node.y) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].y == self.node.y && r[a].x != self.node.x && (o[c].x > r[a].x && r[a].x > self.node.x || o[c].x < r[a].x && r[a].x < self.node.x) && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].y == self.node.y && i[u].x != self.node.x && (o[c].x >= i[u].x && i[u].x > self.node.x || o[c].x <= i[u].x && i[u].x < self.node.x) && (o[c].active = !1);
}
if (o[c].x == self.node.x && o[c].y > self.node.y) for (u = 0; u < i.length; u++) if (o[c].x == i[u].x && o[c].y == i[u].y) {
for (var l = 0; l < r.length; l++) if (self.node.y < r[l].y && r[l].y < i[u].y && r[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < i.length; l++) if (self.node.y < i[l].y && i[l].y < i[u].y && i[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (var f = 0; f < o.length; f++) for (u = 0; u < i.length; u++) o[c].y > o[f].y && o[f].y > self.node.y && o[f].x == i[u].x && o[f].y == i[u].y && 1 == o[f].active && (o[c].active = !1);
}
if (o[c].y == self.node.y && o[c].x > self.node.x) for (u = 0; u < i.length; u++) if (o[c].x == i[u].x && o[c].y == i[u].y) {
for (l = 0; l < r.length; l++) if (self.node.x < r[l].x && r[l].x < i[u].x && r[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < i.length; l++) if (self.node.x < i[l].x && i[l].x < i[u].x && i[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = 0; f < o.length; f++) for (u = 0; u < i.length; u++) o[c].x > o[f].x && o[f].x > self.node.x && o[f].y == i[u].y && o[f].x == i[u].x && 1 == o[f].active && (o[c].active = !1);
}
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
}
for (c = o.length - 1; c >= 0; c--) {
if (o[c].x == self.node.x && o[c].y < self.node.y) for (u = 0; u < i.length; u++) if (o[c].x == i[u].x && o[c].y == i[u].y) {
for (l = 0; l < r.length; l++) if (self.node.y > r[l].y && r[l].y > i[u].y && r[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < i.length; l++) if (self.node.y > i[l].y && i[l].y > i[u].y && i[l].x == self.node.x) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (u = 0; u < i.length; u++) if (o[c].y < o[f].y && o[f].y < self.node.y && o[f].x == i[u].x && o[f].y == i[u].y && 1 == o[f].active) {
console.log("reach black target");
o[c].active = !1;
}
}
if (o[c].y == self.node.y && o[c].x < self.node.x) for (u = 0; u < i.length; u++) if (o[c].y == i[u].y && o[c].x == i[u].x) {
for (l = 0; l < r.length; l++) if (self.node.x > r[l].x && r[l].x > i[u].x && r[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (0 == o[c].active) for (l = 0; l < i.length; l++) if (self.node.x > i[l].x && i[l].x > i[u].x && i[l].y == self.node.y) {
o[c].active = !0;
break;
}
if (1 == o[c].active) for (f = o.length - 1; f >= 0; f--) for (u = 0; u < i.length; u++) o[c].x < o[f].x && o[f].x < self.node.x && o[f].y == i[u].y && o[f].x == i[u].x && 1 == o[f].active && (o[c].active = !1);
}
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var n = e("../socket_connection"), o = e("../axios_connection");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
create_room: function() {
var e = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos");
(0, n.receiveduserID)().then(function(t) {
var n = t;
console.log("uid", n);
(0, o.createroom)(n).then(function(t) {
console.log(t);
e.rid = t;
console.log("roomid", e.rid);
cc.director.loadScene("room");
});
});
},
start: function() {}
});
cc._RF.pop();
}, {
"../axios_connection": "axios_connection",
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
var n = e("../axios_connection");
cc.Class({
extends: cc.Component,
properties: {
deluserID: {
default: null,
type: cc.Label
}
},
onLoad: function() {},
delete_user: function() {
var e = this.deluserID.string;
(0, n.deleteuser)(e);
},
start: function() {
(0, n.getuserlist)();
}
});
cc._RF.pop();
}, {
"../axios_connection": "axios_connection"
} ],
display: [ function(e, t) {
"use strict";
cc._RF.push(t, "07b14V0szlPSpdbncZwe8PD", "display");
var n = e("../socket_connection"), o = e("../axios_connection");
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
t = n;
var r = e.namedisplay;
(0, o.getUserbyID)(t).then(function(e) {
r.string = e.data.Username + " #" + t;
});
}).catch(function() {
console.log("Promise Rejected");
});
},
start: function() {},
onDisable: function() {}
});
cc._RF.pop();
}, {
"../axios_connection": "axios_connection",
"../socket_connection": "socket_connection"
} ],
fetch: [ function(e, t) {
"use strict";
cc._RF.push(t, "13765OQEzxOCZ4v5D7b6eWC", "fetch");
cc._RF.pop();
}, {} ],
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess, s = r.getChildren(), i = this.blackchess.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.blackcastleleftbound && o[c].x <= e.blackcastlerightbound && o[c].y >= e.blackcastledownbound && o[c].y <= e.blackcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x + e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
for (var a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && (o[c].active = !1);
}
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && (o[c].active = !1);
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess.getChildren(), s = this.blackchess, i = s.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.redcastleleftbound && o[c].x <= e.redcastlerightbound && o[c].y >= e.redcastledownbound && o[c].y <= e.redcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x + e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y - e.s && (o[c].active = !0);
}
for (var a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var n = e("../axios_connection");
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
var e = cc.director.getScene().getChildByName("PlayerInfo").getComponent("PlayerInfo"), t = cc.director.getScene().getChildByName("RoomInfos").getComponent("RoomInfos"), o = e.uid, r = this.roomID.string;
this.Pass.string;
(0, n.getroombyID)(r).then(function(e) {
e.data.id == r && (null == e.data.Player1 ? (0, n.joinroombyIDasp1)(r, o).then(function(e) {
console.log(e);
t.rid = r;
cc.director.loadScene("room");
}) : null == e.data.Player2 ? (0, n.joinroombyIDasp2)(r, o).then(function(e) {
console.log(e);
t.rid = r;
cc.director.loadScene("room");
}) : console.log("Roomfull!"));
});
},
start: function() {}
});
cc._RF.pop();
}, {
"../axios_connection": "axios_connection",
"socket.io-client": 60
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess, s = r.getChildren(), i = this.blackchess.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.blackcastleleftbound && o[c].x <= e.blackcastlerightbound && o[c].y >= e.blackcastledownbound && o[c].y <= e.blackcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y - e.s && (o[c].active = !0);
}
for (var a = 0; a < i.length; a++) i[a].x == o[c].x && i[a].y == o[c].y && (o[c].active = !1);
for (var u = 0; u < s.length; u++) s[u].x == o[c].x && s[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess.getChildren(), s = this.blackchess, i = s.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x >= e.redcastleleftbound && o[c].x <= e.redcastlerightbound && o[c].y >= e.redcastledownbound && o[c].y <= e.redcastleupbound) {
o[c].x == this.node.x + e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x - e.s && o[c].y == this.node.y && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y + e.s && (o[c].active = !0);
o[c].x == this.node.x && o[c].y == this.node.y - e.s && (o[c].active = !0);
}
for (var a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess, s = r.getChildren(), i = this.blackchess.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (var a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y + e.s && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x + e.s && s[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x + e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x + e.s && s[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x + e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y - e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y - e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x - e.s && s[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x - e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x - e.s && s[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x - e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y == self.node.y + e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y + e.s && (o[c].active = !1);
}
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && (o[c].active = !1);
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess.getChildren(), s = this.blackchess, i = s.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (var a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y + e.s && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y + e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x + e.s && r[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x + e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x + e.s && r[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x + e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x + e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y - e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y - 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y - e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y - e.s && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y - e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x - e.s && r[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x - e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - 2 * e.s && o[c].y == self.node.y + e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x - e.s && r[a].y == self.node.y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x - e.s && i[u].y == self.node.y && (o[c].active = !1);
}
if (o[c].x == self.node.x - e.s && o[c].y == self.node.y + 2 * e.s) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y == self.node.y + e.s && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y == self.node.y + e.s && (o[c].active = !1);
}
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess, s = r.getChildren(), i = this.blackchess.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (this.node.y > e.redriver) o[c].x == self.node.x && o[c].y == self.node.y - e.s && (o[c].active = !0); else if (this.node.y <= e.redriver) {
o[c].x == self.node.x && o[c].y == self.node.y - e.s && (o[c].active = !0);
o[c].x == self.node.x - e.s && o[c].y == self.node.y && (o[c].active = !0);
o[c].x == self.node.x + e.s && o[c].y == self.node.y && (o[c].active = !0);
}
for (var a = 0; a < i.length; a++) i[a].x == o[c].x && i[a].y == o[c].y && (o[c].active = !1);
for (var u = 0; u < s.length; u++) s[u].x == o[c].x && s[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess.getChildren(), s = this.blackchess, i = s.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (this.node.y < e.blackriver) o[c].x == self.node.x && o[c].y == self.node.y + e.s && (o[c].active = !0); else if (self.node.y >= e.blackriver) {
o[c].x == self.node.x && o[c].y == self.node.y + e.s && (o[c].active = !0);
o[c].x == self.node.x - e.s && o[c].y == self.node.y && (o[c].active = !0);
o[c].x == self.node.x + e.s && o[c].y == self.node.y && (o[c].active = !0);
}
for (var a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess, s = r.getChildren(), i = this.blackchess.getChildren();
s.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
r.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == this.node.x) {
o[c].active = !0;
for (var a = 0; a < s.length; a++) s[a].x == self.node.x && s[a].y != self.node.y && (o[c].y > self.node.y && o[c].y > s[a].y && s[a].y > self.node.y || o[c].y < self.node.y && o[c].y < s[a].y && s[a].y < self.node.y) && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y != self.node.y && (o[c].y > self.node.y && o[c].y > i[u].y && i[u].y > self.node.y || o[c].y < self.node.y && o[c].y < i[u].y && i[u].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == this.node.y) {
o[c].active = !0;
for (a = 0; a < s.length; a++) s[a].y == self.node.y && s[a].x != self.node.x && (o[c].x > self.node.x && o[c].x > s[a].x && s[a].x > self.node.x || o[c].x < self.node.x && o[c].x < s[a].x && s[a].x < self.node.x) && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].y == self.node.y && i[u].x != self.node.x && (o[c].x > self.node.x && o[c].x > i[u].x && i[u].x > self.node.x || o[c].x < self.node.x && o[c].x < i[u].x && i[u].x < self.node.x) && (o[c].active = !1);
}
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && (o[c].active = !1);
for (a = 0; a < s.length; a++) s[a].x == o[c].x && s[a].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var e = this.map.getComponent("boardinfo"), t = this.map.getComponent("touchmove"), n = this.place, o = n.getChildren(), r = this.redchess.getChildren(), s = this.blackchess, i = s.getChildren();
r.parent = n;
i.parent = n;
self = this;
for (var c = 0; c < o.length; c++) 1 == o[c].active && (o[c].active = !1);
s.pauseSystemEvents(!0);
for (c = 0; c < o.length; c++) {
if (o[c].x == this.node.x) {
o[c].active = !0;
for (var a = 0; a < r.length; a++) r[a].x == self.node.x && r[a].y != self.node.y && (o[c].y > self.node.y && o[c].y > r[a].y && r[a].y > self.node.y || o[c].y < self.node.y && o[c].y < r[a].y && r[a].y < self.node.y) && (o[c].active = !1);
for (var u = 0; u < i.length; u++) i[u].x == self.node.x && i[u].y != self.node.y && (o[c].y > self.node.y && o[c].y > i[u].y && i[u].y > self.node.y || o[c].y < self.node.y && o[c].y < i[u].y && i[u].y < self.node.y) && (o[c].active = !1);
}
if (o[c].y == this.node.y) {
o[c].active = !0;
for (a = 0; a < r.length; a++) r[a].y == self.node.y && r[a].x != self.node.x && (o[c].x > self.node.x && o[c].x > r[a].x && r[a].x > self.node.x || o[c].x < self.node.x && o[c].x < r[a].x && r[a].x < self.node.x) && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].y == self.node.y && i[u].x != self.node.x && (o[c].x > self.node.x && o[c].x > i[u].x && i[u].x > self.node.x || o[c].x < self.node.x && o[c].x < i[u].x && i[u].x < self.node.x) && (o[c].active = !1);
}
for (a = 0; a < r.length; a++) r[a].x == o[c].x && r[a].y == o[c].y && (o[c].active = !1);
for (u = 0; u < i.length; u++) i[u].x == o[c].x && i[u].y == o[c].y && 1 == o[c].active && o[c].setScale(e.scale, e.scale);
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
var n = e("../socket_connection"), o = e("../axios_connection");
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
var e = this, t = this.id;
(0, n.receiveduserID)().then(function(n) {
uid = n;
e.namedisplay;
(0, o.getUserbyID)(uid).then(function(e) {
t.string = e.data.Username + " #" + uid;
});
});
},
show_rooms: function() {
var e = this.listrooms;
roomlist = [];
(0, o.getroomlist)().then(function(t) {
for (var n = 0; n < t.data.length; n++) null != t.data[n].Player1 && null != t.data[n].Player2 ? roomlist += JSON.stringify("Room no " + t.data[n].id + " --- full") + "\n" : null != t.data[n].Player1 && null == t.data[n].Player2 ? roomlist += JSON.stringify("Room no " + t.data[n].id + " --- 1/2") + "\n" : null == t.data[n].Player1 && null != t.data[n].Player2 ? roomlist += JSON.stringify("Room no " + t.data[n].id + " --- 1/2") + "\n" : null == t.data[n].Player1 && null == t.data[n].Player2 && (roomlist += JSON.stringify("Room no " + t.data[n].id + " --- 0/2") + "\n");
e.string = roomlist;
});
},
start: function() {},
update: function() {}
});
cc._RF.pop();
}, {
"../axios_connection": "axios_connection",
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
var r = function(e) {
if (e && e.__esModule) return e;
if (null === e || "object" != typeof e && "function" != typeof e) return {
default: e
};
var t = o(void 0);
if (t && t.has(e)) return t.get(e);
var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
for (var s in e) if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
var i = r ? Object.getOwnPropertyDescriptor(e, s) : null;
i && (i.get || i.set) ? Object.defineProperty(n, s, i) : n[s] = e[s];
}
n.default = e;
t && t.set(e, n);
return n;
}(e("socket.io-client")).connect("http://192.168.1.31:3000", {
reconnectionDelayMax: 1e4,
query: {
userId: 10
}
});
n.senduserID = function(e) {
r.timeout(2e3).emit("senduserID", e);
};
n.receiveduserID = function() {
return new Promise(function(e) {
r.on("receiveduserID", function(t) {
e(t);
});
});
};
n.sendroomID = function(e) {
r.timeout(2e3).emit("sendroomID", e);
};
n.receivedroomID = function() {
console.log("receivedroomID() run");
return new Promise(function(e) {
console.log("returnnew Promise run");
r.on("receivedroomID", function(t) {
console.log("receivedrooomID() run");
e(t);
});
});
};
var s = [];
n.sendchessPosition = function(e) {
r.timeout(500).emit("sendChessPosition", e);
};
n.receivedchessPosition = function() {
return new Promise(function(e) {
r.once("receivedChessPosition", function(t) {
s.push(t[t.length - 1]);
e(s);
});
});
};
n.senddeadchess = function(e) {
r.timeout(500).emit("senddeadchess", e);
};
n.receiveddeadchess = function() {
return new Promise(function(e) {
r.once("receiveddeadchess", function(t) {
e(t);
});
});
};
n.sendstate = function(e) {
r.timeout(500).emit("sendstate", e);
};
n.receivedstate = function() {
return new Promise(function(e) {
r.once("receivedstate", function(t) {
e(t);
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
"socket.io-client": 60
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
var t = this.updateall.getComponent("update"), o = this.map.getComponent("boardinfo"), r = (this.deadblackchess, 
this.place), s = r.getChildren(), i = this.redchess, c = i.getChildren(), a = this.blackchess, u = a.getChildren();
c.parent = r;
u.parent = r;
1 == s[e].active && s[e].on("touchstart", function() {
if (self.node.isChildOf(i)) {
for (var r = 0, c = 0; c < u.length; c++) if (u[c].x == this.x && u[c].y == this.y) {
(0, n.senddeadchess)({
name: u[c].name
});
r++;
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
this.off("touchstart", this.function, s[e]);
break;
}
if (0 == r) {
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
this.off("touchstart", this.function, s[e]);
}
}
for (var l = 0; l < s.length; l++) {
s[l].setScale(1, 1);
s[l].active = !1;
}
a.pauseSystemEvents(!0);
i.pauseSystemEvents(!0);
(0, n.sendstate)("red");
t.updateall();
}, s[e]);
},
blacktouchmove: function(e) {
var t = this.updateall.getComponent("update"), o = this.map.getComponent("boardinfo"), r = (this.deadredchess, 
this.place), s = r.getChildren(), i = this.redchess, c = i.getChildren(), a = this.blackchess, u = a.getChildren();
c.parent = r;
u.parent = r;
1 == s[e].active && s[e].on("touchstart", function() {
if (self.node.isChildOf(a)) {
for (var r = 0, u = 0; u < c.length; u++) if (c[u].x == this.x && c[u].y == this.y) {
(0, n.senddeadchess)({
name: c[u].name
});
r++;
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
this.off("touchstart", this.function, s[e]);
break;
}
if (0 == r) {
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
this.off("touchstart", this.function, s[e]);
}
}
for (var l = 0; l < s.length; l++) {
s[l].setScale(1, 1);
s[l].active = !1;
}
i.pauseSystemEvents(!0);
a.pauseSystemEvents(!0);
t.updateall();
}, s[e]);
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
var o = this.redchess, r = o.getChildren(), s = this.blackchess, i = s.getChildren(), c = this.map.getComponent("boardinfo"), a = this.deadredchess, u = this.deadblackchess, l = this.movecodelist;
(0, n.receivedchessPosition)().then(function(e) {
for (var n = 0; n < r.length; n++) if (r[n].name == e[e.length - 1].name) {
r[n].x = e[e.length - 1].x;
r[n].y = e[e.length - 1].y;
o.pauseSystemEvents(!0);
s.resumeSystemEvents(!0);
break;
}
for (var c = 0; c < i.length; c++) if (i[c].name == e[e.length - 1].name) {
i[c].x = e[e.length - 1].x;
i[c].y = e[e.length - 1].y;
s.pauseSystemEvents(!0);
o.resumeSystemEvents(!0);
break;
}
0 != t.movelist.length && t.movelist[t.movelist.length - 1] === JSON.stringify(e[e.length - 1]) || t.movelist.push(JSON.stringify(e[e.length - 1]));
l.string = t.movelist;
});
(0, n.receiveddeadchess)().then(function(e) {
for (var t = 0; t < r.length; t++) if (r[t].name == e.name) {
c.countreddead++;
r[t].setScale(.8, .8);
r[t].x = 0;
r[t].y = -30 - c.countreddead * (c.chesssize / 2);
r[t].pauseSystemEvents(!0);
r[t].parent = a;
}
for (var n = 0; n < i.length; n++) if (i[n].name == e.name) {
c.countblackdead++;
i[n].setScale(.8, .8);
i[n].x = 0;
i[n].y = -30 - c.countblackdead * (c.chesssize / 2);
i[n].pauseSystemEvents(!0);
i[n].parent = u;
}
});
}
});
cc._RF.pop();
}, {
"../socket_connection": "socket_connection"
} ]
}, {}, [ "Blur", "LoginPage", "PlayerInfo", "Playnow", "Popup", "Touch", "axios_connection", "boardinfo", "bishopblack", "canonblack", "guardblack", "kingblack", "knightblack", "pawnblack", "rookblack", "bishopred", "canonred", "guardred", "kingred", "knightred", "pawnred", "redchess", "rookred", "touchmove", "update", "backtoroomlist", "movetoboard", "movetoroom", "fetch", "deadblackchess", "deadredchess", "list", "movecodelist", "readybutton", "display", "PrepareRoom", "Sendchat", "Showchat", "roominfo", "RoomInfos", "createroom", "joinroom", "showrooms", "socket_connection", "deleteroom", "deleteuser" ]);