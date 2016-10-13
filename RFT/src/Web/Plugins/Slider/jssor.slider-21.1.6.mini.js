(function(i, f, c, k, d, l, h) {
    new(function() {});
    var e = i.$JssorEasing$ = {
            $EaseSwing: function(a) {
                return -c.cos(a * c.PI) / 2 + .5
            },
            $EaseLinear: function(a) {
                return a
            },
            $EaseInQuad: function(a) {
                return a * a
            },
            $EaseOutQuad: function(a) {
                return -a * (a - 2)
            },
            $EaseInOutQuad: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            $EaseInCubic: function(a) {
                return a * a * a
            },
            $EaseOutCubic: function(a) {
                return (a -= 1) * a * a + 1
            },
            $EaseInOutCubic: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            $EaseInQuart: function(a) {
                return a * a * a * a
            },
            $EaseOutQuart: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            $EaseInOutQuart: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            $EaseInQuint: function(a) {
                return a * a * a * a * a
            },
            $EaseOutQuint: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            $EaseInOutQuint: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            $EaseInSine: function(a) {
                return 1 - c.cos(c.PI / 2 * a)
            },
            $EaseOutSine: function(a) {
                return c.sin(c.PI / 2 * a)
            },
            $EaseInOutSine: function(a) {
                return -1 / 2 * (c.cos(c.PI * a) - 1)
            },
            $EaseInExpo: function(a) {
                return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
            },
            $EaseOutExpo: function(a) {
                return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
            },
            $EaseInOutExpo: function(a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
            },
            $EaseInCirc: function(a) {
                return -(c.sqrt(1 - a * a) - 1)
            },
            $EaseOutCirc: function(a) {
                return c.sqrt(1 - (a -= 1) * a)
            },
            $EaseInOutCirc: function(a) {
                return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
            },
            $EaseInElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
            },
            $EaseOutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
            },
            $EaseInOutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
            },
            $EaseInBack: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            $EaseOutBack: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            $EaseInOutBack: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            $EaseInBounce: function(a) {
                return 1 - e.$EaseOutBounce(1 - a)
            },
            $EaseOutBounce: function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            $EaseInOutBounce: function(a) {
                return a < 1 / 2 ? e.$EaseInBounce(a * 2) * .5 : e.$EaseOutBounce(a * 2 - 1) * .5 + .5
            },
            $EaseGoBack: function(a) {
                return 1 - c.abs(2 - 1)
            },
            $EaseInWave: function(a) {
                return 1 - c.cos(a * c.PI * 2)
            },
            $EaseOutWave: function(a) {
                return c.sin(a * c.PI * 2)
            },
            $EaseOutJump: function(a) {
                return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
            },
            $EaseInJump: function(a) {
                return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
            }
        },
        g = i.$Jease$ = {
            $Swing: e.$EaseSwing,
            $Linear: e.$EaseLinear,
            $InQuad: e.$EaseInQuad,
            $OutQuad: e.$EaseOutQuad,
            $InOutQuad: e.$EaseInOutQuad,
            $InCubic: e.$EaseInCubic,
            $OutCubic: e.$EaseOutCubic,
            $InOutCubic: e.$EaseInOutCubic,
            $InQuart: e.$EaseInQuart,
            $OutQuart: e.$EaseOutQuart,
            $InOutQuart: e.$EaseInOutQuart,
            $InQuint: e.$EaseInQuint,
            $OutQuint: e.$EaseOutQuint,
            $InOutQuint: e.$EaseInOutQuint,
            $InSine: e.$EaseInSine,
            $OutSine: e.$EaseOutSine,
            $InOutSine: e.$EaseInOutSine,
            $InExpo: e.$EaseInExpo,
            $OutExpo: e.$EaseOutExpo,
            $InOutExpo: e.$EaseInOutExpo,
            $InCirc: e.$EaseInCirc,
            $OutCirc: e.$EaseOutCirc,
            $InOutCirc: e.$EaseInOutCirc,
            $InElastic: e.$EaseInElastic,
            $OutElastic: e.$EaseOutElastic,
            $InOutElastic: e.$EaseInOutElastic,
            $InBack: e.$EaseInBack,
            $OutBack: e.$EaseOutBack,
            $InOutBack: e.$EaseInOutBack,
            $InBounce: e.$EaseInBounce,
            $OutBounce: e.$EaseOutBounce,
            $InOutBounce: e.$EaseInOutBounce,
            $GoBack: e.$EaseGoBack,
            $InWave: e.$EaseInWave,
            $OutWave: e.$EaseOutWave,
            $OutJump: e.$EaseOutJump,
            $InJump: e.$EaseInJump
        };
    var b = new function() {
        var g = this,
            Ab = /\S+/g,
            K = 1,
            ib = 2,
            mb = 3,
            lb = 4,
            qb = 5,
            L, s = 0,
            j = 0,
            t = 0,
            z = 0,
            A = 0,
            D = navigator,
            vb = D.appName,
            o = D.userAgent,
            q = parseFloat;

        function Ib() {
            if (!L) {
                L = {
                    yf: "ontouchstart" in i || "createTouch" in f
                };
                var a;
                if (D.pointerEnabled || (a = D.msPointerEnabled)) L.zd = a ? "msTouchAction" : "touchAction"
            }
            return L
        }

        function v(h) {
            if (!s) {
                s = -1;
                if (vb == "Microsoft Internet Explorer" && !!i.attachEvent && !!i.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    s = K;
                    t = q(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on z=@_jscript_version@*/ ;
                    j = f.documentMode || t
                } else if (vb == "Netscape" && !!i.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        g = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = ib;
                        j = q(o.substring(d + 8))
                    } else if (b >= 0) {
                        var k = o.substring(0, b).lastIndexOf("/");
                        s = g >= 0 ? lb : mb;
                        j = q(o.substring(k + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            s = K;
                            j = t = q(a[1])
                        }
                    }
                    if (c >= 0) A = q(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        s = qb;
                        j = q(a[2])
                    }
                }
            }
            return h == s
        }

        function r() {
            return v(K)
        }

        function S() {
            return r() && (j < 6 || f.compatMode == "BackCompat")
        }

        function kb() {
            return v(mb)
        }

        function pb() {
            return v(qb)
        }

        function fb() {
            return kb() && A > 534 && A < 535
        }

        function H() {
            v();
            return A > 537 || j > 42 || s == K && j >= 11
        }

        function Q() {
            return r() && j < 9
        }

        function gb(a) {
            var b, c;
            return function(f) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, d) {
                        var b = a;
                        if (d) b = g + e;
                        if (f.style[b] != h) return c = b
                    })
                }
                return c
            }
        }

        function eb(b) {
            var a;
            return function(c) {
                a = a || gb(b)(c) || b;
                return a
            }
        }
        var M = eb("transform");

        function ub(a) {
            return {}.toString.call(a)
        }
        var rb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            rb["[object " + a + "]"] = a.toLowerCase()
        });

        function n(b, d) {
            var a, c;
            if (ub(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function F(a) {
            return a == k ? String(a) : rb[ub(a)] || "object"
        }

        function sb(a) {
            for (var b in a) return d
        }

        function B(a) {
            try {
                return F(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function p(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function yb(b, a) {
            setTimeout(b, a || 0)
        }

        function C(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function T(b, a) {
            if (j < 9) b.style.filter = a
        }
        g.Tf = Ib;
        g.Bd = r;
        g.Kf = kb;
        g.nd = pb;
        g.Pf = H;
        g.gb = Q;
        gb("transform");
        g.sd = function() {
            return j
        };
        g.Of = function() {
            v();
            return A
        };
        g.$Delay = yb;

        function ab(a) {
            a.constructor === ab.caller && a.Fd && a.Fd.apply(a, ab.caller.arguments)
        }
        g.Fd = ab;
        g.hb = function(a) {
            if (g.Nf(a)) a = f.getElementById(a);
            return a
        };

        function u(a) {
            return a || i.event
        }
        g.Hd = u;
        g.ec = function(b) {
            b = u(b);
            var a = b.target || b.srcElement || f;
            if (a.nodeType == 3) a = g.Id(a);
            return a
        };
        g.Od = function(a) {
            a = u(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function G(c, d, a) {
            if (a !== h) c.style[d] = a == h ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && i.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, k);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function cb(b, c, a, d) {
            if (a !== h) {
                if (a == k) a = "";
                else d && (a += "px");
                G(b, c, a)
            } else return q(G(b, c))
        }

        function m(c, a) {
            var d = a ? cb : G,
                b;
            if (a & 4) b = eb(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Db(b) {
            if (r() && t < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? q(a[1]) / 100 : 1
            } else return q(b.style.opacity || "1")
        }

        function Fb(b, a, f) {
            if (r() && t < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = C(h, [i], d);
                T(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var N = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };
        if (!H()) N = E(N, {
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateZ: ["translateZ", 1]
        });

        function O(d, a) {
            var c = "";
            if (a) {
                if (r() && j && j < 10) {
                    delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ
                }
                b.a(a, function(d, b) {
                    var a = N[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (P[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (H()) {
                    if (a.$TranslateX || a.$TranslateY || a.$TranslateZ) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
                    if (a.$ScaleX == h) a.$ScaleX = 1;
                    if (a.$ScaleY == h) a.$ScaleY = 1;
                    if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
                }
            }
            d.style[M(d)] = c
        }
        g.Pc = m("transformOrigin", 4);
        g.Mf = m("backfaceVisibility", 4);
        g.Lf = m("transformStyle", 4);
        g.Yf = m("perspective", 6);
        g.Xf = m("perspectiveOrigin", 4);
        g.Zf = function(a, b) {
            if (r() && t < 9 || t < 10 && S()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = M(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = C(e, [g], f);
                a.style[c] = d
            }
        };
        g.Ib = function(b, a) {
            return function(c) {
                c = u(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !g.ag(a, d)) && b(c)
            }
        };
        g.c = function(a, c, d, b) {
            a = g.hb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        g.R = function(a, c, d, b) {
            a = g.hb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        g.Jb = function(a) {
            a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = l
        };
        g.Wf = function(a) {
            a = u(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        g.H = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        g.Vf = function(a, b) {
            if (b == h) return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            g.rc(a);
            a.appendChild(c)
        };
        g.yb = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function tb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : k; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (X(a, b) == c) return a;
                    if (!e) {
                        var d = tb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        g.u = tb;

        function V(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : k; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    X(a, b) == d && c.push(a);
                    if (!f) {
                        var e = V(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function nb(a, c, d) {
            for (a = a ? a.firstChild : k; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = nb(a, c, d);
                        if (b) return b
                    }
                }
        }
        g.xf = nb;

        function hb(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : k; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = hb(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        g.qf = hb;
        g.pf = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function E() {
            var e = arguments,
                d, c, b, a, g = 1 & e[0],
                f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== h) {
                            a = c[b];
                            var i = d[b];
                            d[b] = g && (B(i) || B(a)) ? E(g, {}, i, a) : a
                        }
                    }
                return d
        }
        g.o = E;

        function bb(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (B(a) && B(b)) {
                        a = bb(a, b);
                        e = !sb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        g.Zc = function(a) {
            return F(a) == "function"
        };
        g.Nf = function(a) {
            return F(a) == "string"
        };
        g.Zb = function(a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        g.a = n;
        g.cd = B;

        function U(a) {
            return f.createElement(a)
        }
        g.fb = function() {
            return U("DIV")
        };
        g.Ff = function() {
            return U("SPAN")
        };
        g.ad = function() {};

        function Y(b, c, a) {
            if (a == h) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function X(a, b) {
            return Y(a, b) || Y(a, "data-" + b)
        }
        g.s = Y;
        g.j = X;

        function x(b, a) {
            if (a == h) return b.className;
            b.className = a
        }
        g.gd = x;

        function xb(b) {
            var a = {};
            n(b, function(b) {
                a[b] = b
            });
            return a
        }

        function zb(b, a) {
            return b.match(a || Ab)
        }

        function R(b, a) {
            return xb(zb(b || "", a))
        }
        g.zf = zb;

        function db(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function J(a, c, b) {
            x(a, db(" ", E(bb(R(x(a)), R(c)), R(b))))
        }
        g.Id = function(a) {
            return a.parentNode
        };
        g.M = function(a) {
            g.bb(a, "none")
        };
        g.v = function(a, b) {
            g.bb(a, b ? "none" : "")
        };
        g.Ng = function(b, a) {
            b.removeAttribute(a)
        };
        g.Fg = function() {
            return r() && j < 10
        };
        g.Gg = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.$Top || a.F || 0) + "px " + c.round(a.$Right) + "px " + c.round(a.$Bottom) + "px " + c.round(a.$Left || a.C || 0) + "px)";
            else if (a !== h) {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = C(g, f, "");
                b.Xb(d, e)
            }
        };
        g.P = function() {
            return +new Date
        };
        g.G = function(b, a) {
            b.appendChild(a)
        };
        g.Lb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        g.Bb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        g.kg = function(a, b) {
            n(a, function(a) {
                g.Bb(a, b)
            })
        };
        g.rc = function(a) {
            g.kg(g.yb(a, d), a)
        };
        g.lg = function(a, b) {
            var c = g.Id(a);
            b & 1 && g.B(a, (g.l(c) - g.l(a)) / 2);
            b & 2 && g.z(a, (g.m(c) - g.m(a)) / 2)
        };
        g.vc = function(b, a) {
            return parseInt(b, a || 10)
        };
        g.ng = q;
        g.ag = function(b, a) {
            var c = f.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return l
            }
            return b === a
        };

        function Z(d, c, b) {
            var a = d.cloneNode(!c);
            !b && g.Ng(a, "id");
            return a
        }
        g.T = Z;
        g.Eb = function(e, f) {
            var a = new Image;

            function b(e, d) {
                g.R(a, "load", b);
                g.R(a, "abort", c);
                g.R(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (pb() && j < 11.6 || !e) b(!e);
            else {
                g.c(a, "load", b);
                g.c(a, "abort", c);
                g.c(a, "error", c);
                a.src = e
            }
        };
        g.vg = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function(a) {
                g.Eb(a.src, b)
            });
            b()
        };
        g.td = function(a, g, i, h) {
            if (h) a = Z(a);
            var c = V(a, g);
            if (!c.length) c = b.pf(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = Z(i);
                x(e, x(d));
                b.Xb(e, d.style.cssText);
                b.Lb(e, d);
                b.Bb(d)
            }
            return a
        };

        function Gb(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                e = [],
                q, k = 0,
                i = 0,
                d = 0;

            function j() {
                J(a, q, e[d || k || i & 2 || i]);
                b.W(a, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                j();
                g.R(f, "mouseup", c);
                g.R(f, "touchend", c);
                g.R(f, "touchcancel", c)
            }

            function o(a) {
                if (d) g.Jb(a);
                else {
                    k = 4;
                    j();
                    g.c(f, "mouseup", c);
                    g.c(f, "touchend", c);
                    g.c(f, "touchcancel", c)
                }
            }
            l.yd = function(a) {
                if (a === h) return i;
                i = a & 2 || a & 1;
                j()
            };
            l.$Enable = function(a) {
                if (a === h) return !d;
                d = a ? 0 : 3;
                j()
            };
            l.$Elmt = a = g.hb(a);
            var m = b.zf(x(a));
            if (m) p = m.shift();
            n(r, function(a) {
                e.push(p + a)
            });
            q = db(" ", e);
            e.unshift("");
            g.c(a, "mousedown", o);
            g.c(a, "touchstart", o)
        }
        g.Tb = function(a) {
            return new Gb(a)
        };
        g.W = G;
        g.kb = m("overflow");
        g.z = m("top", 2);
        g.B = m("left", 2);
        g.l = m("width", 2);
        g.m = m("height", 2);
        g.Sf = m("marginLeft", 2);
        g.Uf = m("marginTop", 2);
        g.A = m("position");
        g.bb = m("display");
        g.D = m("zIndex", 1);
        g.Gb = function(b, a, c) {
            if (a != h) Fb(b, a, c);
            else return Db(b)
        };
        g.Xb = function(a, b) {
            if (b != h) a.style.cssText = b;
            else return a.style.cssText
        };
        var W = {
            $Opacity: g.Gb,
            $Top: g.z,
            $Left: g.B,
            S: g.l,
            N: g.m,
            Cb: g.A,
            Jh: g.bb,
            $ZIndex: g.D
        };

        function w(f, l) {
            var e = Q(),
                b = H(),
                d = fb(),
                i = M(f);

            function j(b, d, a) {
                var e = b.ob(p(-d / 2, -a / 2)),
                    f = b.ob(p(d / 2, -a / 2)),
                    g = b.ob(p(d / 2, a / 2)),
                    h = b.ob(p(-d / 2, a / 2));
                b.ob(p(300, 300));
                return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var n = a.$TranslateZ || 0,
                    p = (a.$RotateX || 0) % 360,
                    q = (a.$RotateY || 0) % 360,
                    u = (a.$Rotate || 0) % 360,
                    l = a.$ScaleX,
                    m = a.$ScaleY,
                    f = a.Ih;
                if (l == h) l = 1;
                if (m == h) m = 1;
                if (f == h) f = 1;
                if (e) {
                    n = 0;
                    p = 0;
                    q = 0;
                    f = 0
                }
                var c = new Cb(a.$TranslateX, a.$TranslateY, n);
                c.$RotateX(p);
                c.$RotateY(q);
                c.se(u);
                c.ne(a.$SkewX, a.$SkewY);
                c.$Scale(l, m, f);
                if (b) {
                    c.$Move(a.C, a.F);
                    d.style[i] = c.Sd()
                } else if (!z || z < 9) {
                    var o = "",
                        k = {
                            x: 0,
                            y: 0
                        };
                    if (a.$OriginalWidth) k = j(c, a.$OriginalWidth, a.$OriginalHeight);
                    g.Uf(d, k.y);
                    g.Sf(d, k.x);
                    o = c.Td();
                    var s = d.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        r = C(s, [t], o);
                    T(d, r)
                }
            }
            w = function(e, c) {
                c = c || {};
                var i = c.C,
                    j = c.F,
                    f;
                n(W, function(a, b) {
                    f = c[b];
                    f !== h && a(e, f)
                });
                g.Gg(e, c.$Clip);
                if (!b) {
                    i != h && g.B(e, (c.Tc || 0) + i);
                    j != h && g.z(e, (c.Nc || 0) + j)
                }
                if (c.me)
                    if (d) yb(g.H(k, O, e, c));
                    else a(e, c)
            };
            g.Db = O;
            if (d) g.Db = w;
            if (e) g.Db = a;
            else if (!b) a = O;
            g.K = w;
            w(f, l)
        }
        g.Db = w;
        g.K = w;

        function Cb(i, j, o) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, j || 0, o || 0, 1],
                h = c.sin,
                g = c.cos,
                l = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function m(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
                return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
            }

            function e(c, a) {
                return m.apply(k, (a || b).concat(c))
            }
            d.$Scale = function(a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.$Move = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.$RotateX = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateY = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.se = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.ne = function(a, c) {
                if (a || c) {
                    i = f(a);
                    j = f(c);
                    b = e([1, l(j), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.ob = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.Sd = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.Td = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new(function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function(b, c) {
                return a.Jc(b, c, 0)
            };
            a.$ScaleY = function(b, c) {
                return a.Jc(b, 0, c)
            };
            a.Jc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.ob = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return p(a[0][0], a[1][0])
            }
        });
        var P = {
            Tc: 0,
            Nc: 0,
            C: 0,
            F: 0,
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        g.sc = function(a) {
            var c = a || {};
            if (a)
                if (b.Zc(a)) c = {
                    jc: c
                };
                else if (b.Zc(a.$Clip)) c.$Clip = {
                jc: a.$Clip
            };
            return c
        };

        function wb(c, a) {
            var b = {};
            n(c, function(c, d) {
                var e = c;
                if (a[d] != h)
                    if (g.Zb(c)) e = c + a[d];
                    else e = wb(c, a[d]);
                b[d] = e
            });
            return b
        }
        g.ge = wb;
        g.jd = function(l, m, x, q, z, A, n) {
            var a = m;
            if (l) {
                a = {};
                for (var g in m) {
                    var B = A[g] || 1,
                        w = z[g] || [0, 1],
                        f = (x - w[0]) / w[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * B;
                    var u = c.floor(f);
                    if (f != u) f -= u;
                    var i = q.jc || e.$EaseSwing,
                        j, C = l[g],
                        p = m[g];
                    if (b.Zb(p)) {
                        i = q[g] || i;
                        var y = i(f);
                        j = C + p * y
                    } else {
                        j = b.o({
                            bc: {}
                        }, l[g]);
                        var v = q[g] || {};
                        b.a(p.bc || p, function(d, a) {
                            i = v[a] || v.jc || i;
                            var c = i(f),
                                b = d * c;
                            j.bc[a] = b;
                            j[a] += b
                        })
                    }
                    a[g] = j
                }
                var t = b.a(m, function(b, a) {
                    return P[a] != h
                });
                t && b.a(P, function(c, b) {
                    if (a[b] == h && l[b] !== h) a[b] = l[b]
                });
                if (t) {
                    if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = n.$OriginalWidth;
                    a.$OriginalHeight = n.$OriginalHeight;
                    a.me = d
                }
            }
            if (m.$Clip && n.$Move) {
                var o = a.$Clip.bc,
                    s = (o.$Top || 0) + (o.$Bottom || 0),
                    r = (o.$Left || 0) + (o.$Right || 0);
                a.$Left = (a.$Left || 0) + r;
                a.$Top = (a.$Top || 0) + s;
                a.$Clip.$Left -= r;
                a.$Clip.$Right -= r;
                a.$Clip.$Top -= s;
                a.$Clip.$Bottom -= s
            }
            if (a.$Clip && b.Fg() && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.F && !a.$Clip.C && a.$Clip.$Right == n.$OriginalWidth && a.$Clip.$Bottom == n.$OriginalHeight) a.$Clip = k;
            return a
        }
    };

    function n() {
        var a = this,
            d = [];

        function h(a, b) {
            d.push({
                kc: a,
                fc: b
            })
        }

        function g(a, c) {
            b.a(d, function(b, e) {
                b.kc == a && b.fc === c && d.splice(e, 1)
            })
        }
        a.$On = a.addEventListener = h;
        a.$Off = a.removeEventListener = g;
        a.k = function(a) {
            var c = [].slice.call(arguments, 1);
            b.a(d, function(b) {
                b.kc == a && b.fc.apply(i, c)
            })
        }
    }
    var m = function(z, C, h, L, O, J) {
        z = z || 0;
        var a = this,
            q, n, o, v, A = 0,
            H, I, G, B, y = 0,
            g = 0,
            m = 0,
            D, j, f, e, p, w = [],
            x;

        function P(a) {
            f += a;
            e += a;
            j += a;
            g += a;
            m += a;
            y += a
        }

        function u(o) {
            var i = o;
            if (p && (i >= e || i <= f)) i = ((i - f) % p + p) % p + f;
            if (!D || v || g != i) {
                var k = c.min(i, e);
                k = c.max(k, f);
                if (!D || v || k != m) {
                    if (J) {
                        var l = (k - j) / (C || 1);
                        if (h.$Reverse) l = 1 - l;
                        var n = b.jd(O, J, l, H, G, I, h);
                        if (x) b.a(n, function(b, a) {
                            x[a] && x[a](L, b)
                        });
                        else b.K(L, n)
                    }
                    a.tc(m - j, k - j);
                    m = k;
                    b.a(w, function(b, c) {
                        var a = o < g ? w[w.length - c - 1] : b;
                        a.r(m - y)
                    });
                    var r = g,
                        q = m;
                    g = i;
                    D = d;
                    a.dc(r, q)
                }
            }
        }

        function E(a, b, d) {
            b && a.$Shift(e);
            if (!d) {
                f = c.min(f, a.uc() + y);
                e = c.max(e, a.ac() + y)
            }
            w.push(a)
        }
        var r = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.msRequestAnimationFrame;
        if (b.Kf() && b.sd() < 7) r = k;
        r = r || function(a) {
            b.$Delay(a, h.$Interval)
        };

        function K() {
            if (q) {
                var d = b.P(),
                    e = c.min(d - A, h.ed),
                    a = g + e * o;
                A = d;
                if (a * o >= n * o) a = n;
                u(a);
                if (!v && a * o >= n * o) M(B);
                else r(K)
            }
        }

        function t(h, i, j) {
            if (!q) {
                q = d;
                v = j;
                B = i;
                h = c.max(h, f);
                h = c.min(h, e);
                n = h;
                o = n < g ? -1 : 1;
                a.Xc();
                A = b.P();
                r(K)
            }
        }

        function M(b) {
            if (q) {
                v = q = B = l;
                a.Wc();
                b && b()
            }
        }
        a.$Play = function(a, b, c) {
            t(a ? g + a : e, b, c)
        };
        a.kd = t;
        a.mb = M;
        a.Ve = function(a) {
            t(a)
        };
        a.Z = function() {
            return g
        };
        a.fd = function() {
            return n
        };
        a.tb = function() {
            return m
        };
        a.r = u;
        a.$Move = function(a) {
            u(g + a)
        };
        a.$IsPlaying = function() {
            return q
        };
        a.jf = function(a) {
            p = a
        };
        a.$Shift = P;
        a.zb = function(a, b) {
            E(a, 0, b)
        };
        a.pc = function(a) {
            E(a, 1)
        };
        a.ff = function(a) {
            e += a
        };
        a.uc = function() {
            return f
        };
        a.ac = function() {
            return e
        };
        a.dc = a.Xc = a.Wc = a.tc = b.ad;
        a.oc = b.P();
        h = b.o({
            $Interval: 16,
            ed: 50
        }, h);
        p = h.Fc;
        x = h.Re;
        f = j = z;
        e = z + C;
        I = h.$Round || {};
        G = h.$During || {};
        H = b.sc(h.$Easing)
    };
    var p = i.$JssorSlideshowFormations$ = new function() {
        var h = this,
            b = 0,
            a = 1,
            f = 2,
            e = 3,
            s = 1,
            r = 2,
            t = 4,
            q = 8,
            w = 256,
            x = 512,
            v = 1024,
            u = 2048,
            j = u + s,
            i = u + r,
            o = x + s,
            m = x + r,
            n = w + t,
            k = w + q,
            l = v + t,
            p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }
        h.$FormationStraight = function(f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Ob, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) {
                    switch (s) {
                        case j:
                            c = h - (a * e + (q - b));
                            break;
                        case l:
                            c = h - (b * d + (p - a));
                            break;
                        case o:
                            c = h - (a * e + b);
                        case n:
                            c = h - (b * d + a);
                            break;
                        case i:
                            c = a * e + b;
                            break;
                        case k:
                            c = b * d + (p - a);
                            break;
                        case m:
                            c = a * e + (q - b);
                            break;
                        default:
                            c = b * d + a
                    }
                    g(r, c, [b, a])
                }
            return r
        };
        h.$FormationSwirl = function(q) {
            var x = q.$Cols,
                y = q.$Rows,
                B = q.$Assembly,
                w = q.Ob,
                A = [],
                z = [],
                u = 0,
                c = 0,
                h = 0,
                r = x - 1,
                s = y - 1,
                t, p, v = 0;
            switch (B) {
                case j:
                    c = r;
                    h = 0;
                    p = [f, a, e, b];
                    break;
                case l:
                    c = 0;
                    h = s;
                    p = [b, e, a, f];
                    break;
                case o:
                    c = r;
                    h = s;
                    p = [e, a, f, b];
                    break;
                case n:
                    c = r;
                    h = s;
                    p = [a, e, b, f];
                    break;
                case i:
                    c = 0;
                    h = 0;
                    p = [f, b, e, a];
                    break;
                case k:
                    c = r;
                    h = 0;
                    p = [a, f, b, e];
                    break;
                case m:
                    c = 0;
                    h = s;
                    p = [e, b, f, a];
                    break;
                default:
                    c = 0;
                    h = 0;
                    p = [b, f, a, e]
            }
            u = 0;
            while (u < w) {
                t = h + "," + c;
                if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
                    z[t] = d;
                    g(A, u++, [h, c])
                } else switch (p[v++ % p.length]) {
                    case b:
                        c--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        c++;
                        break;
                    case e:
                        h++
                }
                switch (p[v % p.length]) {
                    case b:
                        c++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        c--;
                        break;
                    case e:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function(p) {
            var w = p.$Cols,
                x = p.$Rows,
                z = p.$Assembly,
                v = p.Ob,
                t = [],
                u = 0,
                c = 0,
                d = 0,
                q = w - 1,
                r = x - 1,
                y, h, s = 0;
            switch (z) {
                case j:
                    c = q;
                    d = 0;
                    h = [f, a, e, a];
                    break;
                case l:
                    c = 0;
                    d = r;
                    h = [b, e, a, e];
                    break;
                case o:
                    c = q;
                    d = r;
                    h = [e, a, f, a];
                    break;
                case n:
                    c = q;
                    d = r;
                    h = [a, e, b, e];
                    break;
                case i:
                    c = 0;
                    d = 0;
                    h = [f, b, e, b];
                    break;
                case k:
                    c = q;
                    d = 0;
                    h = [a, f, b, f];
                    break;
                case m:
                    c = 0;
                    d = r;
                    h = [e, b, f, b];
                    break;
                default:
                    c = 0;
                    d = 0;
                    h = [b, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = d + "," + c;
                if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") {
                    g(t, u++, [d, c]);
                    switch (h[s % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            d++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            d--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case b:
                            c--;
                            break;
                        case f:
                            d--;
                            break;
                        case a:
                            c++;
                            break;
                        case e:
                            d++
                    }
                    switch (h[s++ % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            d++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            d--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function(q) {
            var u = q.$Cols,
                v = q.$Rows,
                e = q.$Assembly,
                t = q.Ob,
                r = [],
                s = 0,
                c = 0,
                d = 0,
                f = u - 1,
                h = v - 1,
                x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0,
                        b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f,
                        b = 0;
                    break;
                default:
                    e = p;
                    var a = f,
                        b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e)) g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h) b = h;
                        else if (b < 0) b = 0;
                        else if (a > f) a = f;
                        else if (a < 0) a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function(i) {
            var a = i.$Cols || 1,
                b = i.$Rows || 1,
                j = [],
                d, e, f, h, k;
            f = a < b ? (b - a) / 2 : 0;
            h = a > b ? (a - b) / 2 : 0;
            k = c.round(c.max(a / 2, b / 2)) + 1;
            for (d = 0; d < a; d++)
                for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function(f) {
            var d = f.$Cols || 1,
                e = f.$Rows || 1,
                h = [],
                a, b, i;
            i = c.round(c.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)
                for (b = 0; b < e; b++) g(h, i - c.min(a + 1, b + 1, d - a, e - b), [b, a]);
            return h
        };
        h.$FormationRandom = function(d) {
            for (var e = [], a, b = 0; b < d.$Rows; b++)
                for (a = 0; a < d.$Cols; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
            return e
        };
        h.$FormationCircle = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.sqrt(c.pow(b - i, 2) + c.pow(a - j, 2))), [a, b]);
            return h
        };
        h.$FormationCross = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.min(c.abs(b - i), c.abs(a - j))), [a, b]);
            return h
        };
        h.$FormationRectangleCross = function(f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.max(d, e) + 1, b = 0; b < h; b++)
                for (a = 0; a < i; a++) g(j, c.round(k - c.max(d - c.abs(b - d), e - c.abs(a - e))) - 1, [a, b]);
            return j
        }
    };
    i.$JssorSlideshowRunner$ = function(j, s, q, u, z) {
        var f = this,
            v, g, a, y = 0,
            x = u.$TransitionsOrder,
            r, h = 8;

        function t(a) {
            if (a.$Top) a.F = a.$Top;
            if (a.$Left) a.C = a.$Left;
            b.a(a, function(a) {
                b.cd(a) && t(a)
            })
        }

        function i(g, f) {
            var a = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: l,
                $SlideOut: l,
                $Reverse: l,
                $Formation: p.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: e.$EaseSwing,
                $Round: {},
                Sb: [],
                $During: {}
            };
            b.o(a, g);
            t(a);
            a.Ob = a.$Cols * a.$Rows;
            a.$Easing = b.sc(a.$Easing);
            a.Le = c.ceil(a.$Duration / a.$Interval);
            a.He = function(c, b) {
                c /= a.$Cols;
                b /= a.$Rows;
                var f = c + "x" + b;
                if (!a.Sb[f]) {
                    a.Sb[f] = {
                        S: c,
                        N: b
                    };
                    for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.Sb[f][e + "," + d] = {
                            $Top: e * b,
                            $Right: d * c + c,
                            $Bottom: e * b + b,
                            $Left: d * c
                        }
                }
                return a.Sb[f]
            };
            if (a.$Brother) {
                a.$Brother = i(a.$Brother, f);
                a.$SlideOut = d
            }
            return a
        }

        function o(B, h, a, w, o, m) {
            var z = this,
                u, v = {},
                i = {},
                n = [],
                f, e, s, q = a.$ChessMode.$Column || 0,
                r = a.$ChessMode.$Row || 0,
                g = a.He(o, m),
                p = C(a),
                D = p.length - 1,
                t = a.$Duration + a.$Delay * D,
                x = w + t,
                j = a.$SlideOut,
                y;
            x += 50;

            function C(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            z.Ad = x;
            z.Rb = function(d) {
                d -= w;
                var e = d < t;
                if (e || y) {
                    y = e;
                    if (!j) d = t - d;
                    var f = c.ceil(d / a.$Interval);
                    b.a(i, function(a, e) {
                        var d = c.max(f, a.Ge);
                        d = c.min(d, a.length - 1);
                        if (a.wd != d) {
                            if (!a.wd && !j) b.v(n[e]);
                            else d == a.Ie && j && b.M(n[e]);
                            a.wd = d;
                            b.K(n[e], a[d])
                        }
                    })
                }
            };
            h = b.T(h);
            b.Db(h, k);
            if (b.gb()) {
                var E = !h["no-image"],
                    A = b.qf(h);
                b.a(A, function(a) {
                    (E || a["jssor-slider"]) && b.Gb(a, b.Gb(a), d)
                })
            }
            b.a(p, function(h, k) {
                b.a(h, function(G) {
                    var K = G[0],
                        J = G[1],
                        t = K + "," + J,
                        n = l,
                        p = l,
                        x = l;
                    if (q && J % 2) {
                        if (q & 3) n = !n;
                        if (q & 12) p = !p;
                        if (q & 16) x = !x
                    }
                    if (r && K % 2) {
                        if (r & 3) n = !n;
                        if (r & 12) p = !p;
                        if (r & 16) x = !x
                    }
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var C = p ? a.$Bottom : a.$Top,
                        z = p ? a.$Top : a.$Bottom,
                        B = n ? a.$Right : a.$Left,
                        A = n ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    s = {};
                    e = {
                        F: 0,
                        C: 0,
                        $Opacity: 1,
                        S: o,
                        N: m
                    };
                    f = b.o({}, e);
                    u = b.o({}, g[t]);
                    if (a.$Opacity) e.$Opacity = 2 - a.$Opacity;
                    if (a.$ZIndex) {
                        e.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = a.$Cols * a.$Rows > 1 || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var H = d;
                        if (b.gb())
                            if (a.$Cols * a.$Rows > 1) H = l;
                            else I = l;
                        if (H) {
                            e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (b.gb() || b.nd()) e.$Zoom = c.min(e.$Zoom, 2);
                            var N = a.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        var h = u.bc = {};
                        if (a.$Clip) {
                            var w = a.$ScaleClip || 1;
                            if (C && z) {
                                h.$Top = g.N / 2 * w;
                                h.$Bottom = -h.$Top
                            } else if (C) h.$Bottom = -g.N * w;
                            else if (z) h.$Top = g.N * w;
                            if (B && A) {
                                h.$Left = g.S / 2 * w;
                                h.$Right = -h.$Left
                            } else if (B) h.$Right = -g.S * w;
                            else if (A) h.$Left = g.S * w
                        }
                        s.$Clip = u;
                        f.$Clip = g[t]
                    }
                    var L = n ? 1 : -1,
                        M = p ? 1 : -1;
                    if (a.x) e.C += o * a.x * L;
                    if (a.y) e.F += m * a.y * M;
                    b.a(e, function(a, c) {
                        if (b.Zb(a))
                            if (a != f[c]) s[c] = a - f[c]
                    });
                    v[t] = j ? f : e;
                    var D = a.Le,
                        y = c.round(k * a.$Delay / a.$Interval);
                    i[t] = new Array(y);
                    i[t].Ge = y;
                    i[t].Ie = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = b.jd(f, s, F / D, a.$Easing, a.$During, a.$Round, {
                            $Move: a.$Move,
                            $OriginalWidth: o,
                            $OriginalHeight: m
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        i[t].push(E)
                    }
                })
            });
            p.reverse();
            b.a(p, function(a) {
                b.a(a, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = h;
                    if (e || f) a = b.T(h);
                    b.K(a, v[d]);
                    b.kb(a, "hidden");
                    b.A(a, "absolute");
                    B.Ke(a);
                    n[d] = a;
                    b.v(a, !j)
                })
            })
        }

        function w() {
            var b = this,
                c = 0;
            m.call(b, 0, v);
            b.dc = function(d, b) {
                if (b - c > h) {
                    c = b;
                    a && a.Rb(b);
                    g && g.Rb(b)
                }
            };
            b.hc = r
        }
        f.Je = function() {
            var a = 0,
                b = u.$Transitions,
                d = b.length;
            if (x) a = y++ % d;
            else a = c.floor(c.random() * d);
            b[a] && (b[a].pb = a);
            return b[a]
        };
        f.Me = function(w, x, l, m, b) {
            r = b;
            b = i(b, h);
            var k = m.rd,
                e = l.rd;
            k["no-image"] = !m.Qb;
            e["no-image"] = !l.Qb;
            var n = k,
                p = e,
                u = b,
                d = b.$Brother || i({}, h);
            if (!b.$SlideOut) {
                n = e;
                p = k
            }
            var t = d.$Shift || 0;
            g = new o(j, p, d, c.max(t - d.$Interval, 0), s, q);
            a = new o(j, n, u, c.max(d.$Interval - t, 0), s, q);
            g.Rb(0);
            a.Rb(0);
            v = c.max(g.Ad, a.Ad);
            f.pb = w
        };
        f.vb = function() {
            j.vb();
            g = k;
            a = k
        };
        f.Ne = function() {
            var b = k;
            if (a) b = new w;
            return b
        };
        if (b.gb() || b.nd() || z && b.Of() < 537) h = 16;
        n.call(f);
        m.call(f, -1e7, 1e7)
    };
    var j = i.$JssorSlider$ = function(p, hc) {
        var g = this;

        function Fc() {
            var a = this;
            m.call(a, -1e8, 2e8);
            a.ze = function() {
                var b = a.tb(),
                    d = c.floor(b),
                    f = t(d),
                    e = b - c.floor(b);
                return {
                    pb: f,
                    xe: d,
                    Cb: e
                }
            };
            a.dc = function(b, a) {
                var e = c.floor(a);
                if (e != a && a > b) e++;
                Wb(e, d);
                g.k(j.$EVT_POSITION_CHANGE, t(a), t(b), a, b)
            }
        }

        function Ec() {
            var a = this;
            m.call(a, 0, 0, {
                Fc: r
            });
            b.a(C, function(b) {
                D & 1 && b.jf(r);
                a.pc(b);
                b.$Shift(gb / dc)
            })
        }

        function Dc() {
            var a = this,
                b = Vb.$Elmt;
            m.call(a, -1, 2, {
                $Easing: e.$EaseLinear,
                Re: {
                    Cb: bc
                },
                Fc: r
            }, b, {
                Cb: 1
            }, {
                Cb: -2
            });
            a.Ub = b
        }

        function rc(o, n) {
            var b = this,
                e, f, h, i, c;
            m.call(b, -1e8, 2e8, {
                ed: 100
            });
            b.Xc = function() {
                O = d;
                R = k;
                g.k(j.$EVT_SWIPE_START, t(w.Z()), w.Z())
            };
            b.Wc = function() {
                O = l;
                i = l;
                var a = w.ze();
                g.k(j.$EVT_SWIPE_END, t(w.Z()), w.Z());
                !a.Cb && Hc(a.xe, s)
            };
            b.dc = function(j, g) {
                var b;
                if (i) b = c;
                else {
                    b = f;
                    if (h) {
                        var d = g / h;
                        b = a.$SlideEasing(d) * (f - e) + e
                    }
                }
                w.r(b)
            };
            b.Nb = function(a, d, c, g) {
                e = a;
                f = d;
                h = c;
                w.r(a);
                b.r(0);
                b.kd(c, g)
            };
            b.Be = function(a) {
                i = d;
                c = a;
                b.$Play(a, k, d)
            };
            b.hf = function(a) {
                c = a
            };
            w = new Fc;
            w.zb(o);
            w.zb(n)
        }

        function sc() {
            var c = this,
                a = Zb();
            b.D(a, 0);
            b.W(a, "pointerEvents", "none");
            c.$Elmt = a;
            c.Ke = function(c) {
                b.G(a, c);
                b.v(a)
            };
            c.vb = function() {
                b.M(a);
                b.rc(a)
            }
        }

        function Bc(i, f) {
            var e = this,
                q, L, x, o, y = [],
                w, B, W, H, S, F, h, v, p;
            m.call(e, -u, u + 1, {});

            function E(a) {
                q && q.hd();
                T(i, a, 0);
                F = d;
                q = new I.$Class(i, I, b.ng(b.j(i, "idle")) || qc);
                q.r(0)
            }

            function Y() {
                q.oc < I.oc && E()
            }

            function O(p, r, n) {
                if (!H) {
                    H = d;
                    if (o && n) {
                        var h = n.width,
                            c = n.height,
                            m = h,
                            k = c;
                        if (h && c && a.$FillMode) {
                            if (a.$FillMode & 3 && (!(a.$FillMode & 4) || h > K || c > J)) {
                                var i = l,
                                    q = K / J * c / h;
                                if (a.$FillMode & 1) i = q > 1;
                                else if (a.$FillMode & 2) i = q < 1;
                                m = i ? h * J / c : K;
                                k = i ? J : c * K / h
                            }
                            b.l(o, m);
                            b.m(o, k);
                            b.z(o, (J - k) / 2);
                            b.B(o, (K - m) / 2)
                        }
                        b.A(o, "absolute");
                        g.k(j.$EVT_LOAD_END, f)
                    }
                }
                b.M(r);
                p && p(e)
            }

            function X(b, c, d, g) {
                if (g == R && s == f && P)
                    if (!Gc) {
                        var a = t(b);
                        A.Me(a, f, c, e, d);
                        c.Ue();
                        U.$Shift(a - U.uc() - 1);
                        U.r(a);
                        z.Nb(b, b, 0)
                    }
            }

            function ab(b) {
                if (b == R && s == f) {
                    if (!h) {
                        var a = k;
                        if (A)
                            if (A.pb == f) a = A.Ne();
                            else A.vb();
                        Y();
                        h = new zc(i, f, a, q);
                        h.md(p)
                    }!h.$IsPlaying() && h.mc()
                }
            }

            function G(d, g, l) {
                if (d == f) {
                    if (d != g) C[g] && C[g].Vc();
                    else !l && h && h.Vd();
                    p && p.$Enable();
                    var m = R = b.P();
                    e.Eb(b.H(k, ab, m))
                } else {
                    var j = c.min(f, d),
                        i = c.max(f, d),
                        o = c.min(i - j, j + r - i),
                        n = u + a.$LazyLoading - 1;
                    (!S || o <= n) && e.Eb()
                }
            }

            function bb() {
                if (s == f && h) {
                    h.mb();
                    p && p.$Quit();
                    p && p.$Disable();
                    h.bd()
                }
            }

            function eb() {
                s == f && h && h.mb()
            }

            function Z(a) {
                !M && g.k(j.$EVT_CLICK, f, a)
            }

            function Q() {
                p = v.pInstance;
                h && h.md(p)
            }
            e.Eb = function(c, a) {
                a = a || x;
                if (y.length && !H) {
                    b.v(a);
                    if (!W) {
                        W = d;
                        g.k(j.$EVT_LOAD_START, f);
                        b.a(y, function(a) {
                            if (!b.s(a, "src")) {
                                a.src = b.j(a, "src2");
                                b.bb(a, a["display-origin"])
                            }
                        })
                    }
                    b.vg(y, o, b.H(k, O, c, a))
                } else O(c, a)
            };
            e.ke = function() {
                var i = f;
                if (a.$AutoPlaySteps < 0) i -= r;
                var d = i + a.$AutoPlaySteps * xc;
                if (D & 2) d = t(d);
                if (!(D & 1) && !db) d = c.max(0, c.min(d, r - u));
                if (d != f) {
                    if (A) {
                        var g = A.Je(r);
                        if (g) {
                            var j = R = b.P(),
                                h = C[t(d)];
                            return h.Eb(b.H(k, X, d, h, g, j), x)
                        }
                    }
                    ob(d)
                } else if (a.$Loop) {
                    e.Vc();
                    G(f, f)
                }
            };
            e.ic = function() {
                G(f, f, d)
            };
            e.Vc = function() {
                p && p.$Quit();
                p && p.$Disable();
                e.Dd();
                h && h.og();
                h = k;
                E()
            };
            e.Ue = function() {
                b.M(i)
            };
            e.Dd = function() {
                b.v(i)
            };
            e.jg = function() {
                p && p.$Enable()
            };

            function T(a, c, e) {
                if (b.s(a, "jssor-slider")) return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        y.push(a);
                        if (!b.s(a, "src")) {
                            S = d;
                            a["display-origin"] = b.bb(a);
                            b.M(a)
                        }
                    }
                    b.gb() && b.D(a, (b.D(a) || 0) + 1)
                }
                var f = b.yb(a);
                b.a(f, function(f) {
                    var h = f.tagName,
                        i = b.j(f, "u");
                    if (i == "player" && !v) {
                        v = f;
                        if (v.pInstance) Q();
                        else b.c(v, "dataavailable", Q)
                    }
                    if (i == "caption") {
                        if (c) {
                            b.Pc(f, b.j(f, "to"));
                            b.Mf(f, b.j(f, "bf"));
                            b.j(f, "3d") && b.Lf(f, "preserve-3d")
                        } else if (!b.Bd()) {
                            var g = b.T(f, l, d);
                            b.Lb(g, f, a);
                            b.Bb(f, a);
                            f = g;
                            c = d
                        }
                    } else if (!F && !e && !o) {
                        if (h == "A") {
                            if (b.j(f, "u") == "image") o = b.xf(f, "IMG");
                            else o = b.u(f, "image", d);
                            if (o) {
                                w = f;
                                b.bb(w, "block");
                                b.K(w, V);
                                B = b.T(w, d);
                                b.A(w, "relative");
                                b.Gb(B, 0);
                                b.W(B, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && b.j(f, "u") == "image") o = f;
                        if (o) {
                            o.border = 0;
                            b.K(o, V)
                        }
                    }
                    T(f, c, e + 1)
                })
            }
            e.tc = function(c, b) {
                var a = u - b;
                bc(L, a)
            };
            e.pb = f;
            n.call(e);
            b.Yf(i, b.j(i, "p"));
            b.Xf(i, b.j(i, "po"));
            var N = b.u(i, "thumb", d);
            if (N) {
                e.Mg = b.T(N);
                b.M(N)
            }
            b.v(i);
            x = b.T(cb);
            b.D(x, 1e3);
            b.c(i, "click", Z);
            E(d);
            e.Qb = o;
            e.Mc = B;
            e.rd = i;
            e.Ub = L = i;
            b.G(L, x);
            g.$On(203, G);
            g.$On(28, eb);
            g.$On(24, bb)
        }

        function zc(y, f, p, q) {
            var a = this,
                n = 0,
                u = 0,
                h, i, e, c, k, t, r, o = C[f];
            m.call(a, 0, 0);

            function v() {
                b.rc(N);
                fc && k && o.Mc && b.G(N, o.Mc);
                b.v(N, !k && o.Qb)
            }

            function w() {
                a.mc()
            }

            function x(b) {
                r = b;
                a.mb();
                a.mc()
            }
            a.mc = function() {
                var b = a.tb();
                if (!B && !O && !r && s == f) {
                    if (!b) {
                        if (h && !k) {
                            k = d;
                            a.bd(d);
                            g.k(j.$EVT_SLIDESHOW_START, f, n, u, h, c)
                        }
                        v()
                    }
                    var l, p = j.$EVT_STATE_CHANGE;
                    if (b != c)
                        if (b == e) l = c;
                        else if (b == i) l = e;
                    else if (!b) l = i;
                    else l = a.fd();
                    g.k(p, f, b, n, i, e, c);
                    var m = P && (!E || F);
                    if (b == c)(e != c && !(E & 12) || m) && o.ke();
                    else(m || b != e) && a.kd(l, w)
                }
            };
            a.Vd = function() {
                e == c && e == a.tb() && a.r(i)
            };
            a.og = function() {
                A && A.pb == f && A.vb();
                var b = a.tb();
                b < c && g.k(j.$EVT_STATE_CHANGE, f, -b - 1, n, i, e, c)
            };
            a.bd = function(a) {
                p && b.kb(ib, a && p.hc.$Outside ? "" : "hidden")
            };
            a.tc = function(b, a) {
                if (k && a >= h) {
                    k = l;
                    v();
                    o.Dd();
                    A.vb();
                    g.k(j.$EVT_SLIDESHOW_END, f, n, u, h, c)
                }
                g.k(j.$EVT_PROGRESS_CHANGE, f, a, n, i, e, c)
            };
            a.md = function(a) {
                if (a && !t) {
                    t = a;
                    a.$On($JssorPlayer$.De, x)
                }
            };
            p && a.pc(p);
            h = a.ac();
            a.pc(q);
            i = h + q.Oc;
            e = h + q.Uc;
            c = a.ac()
        }

        function Mb(a, c, d) {
            b.B(a, c);
            b.z(a, d)
        }

        function bc(c, b) {
            var a = x > 0 ? x : hb,
                d = Bb * b * (a & 1),
                e = Cb * b * (a >> 1 & 1);
            Mb(c, d, e)
        }

        function Rb() {
            qb = O;
            Kb = z.fd();
            G = w.Z()
        }

        function ic() {
            Rb();
            if (B || !F && E & 12) {
                z.mb();
                g.k(j.Af)
            }
        }

        function gc(f) {
            if (!B && (F || !(E & 12)) && !z.$IsPlaying()) {
                var d = w.Z(),
                    b = c.ceil(G);
                if (f && c.abs(H) >= a.$MinDragOffsetToSlide) {
                    b = c.ceil(d);
                    b += fb
                }
                if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
                var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5);
                if (!M && qb) z.Ve(Kb);
                else if (d == b) {
                    ub.jg();
                    ub.ic()
                } else z.Nb(d, b, e * Xb)
            }
        }

        function Ib(a) {
            !b.j(b.ec(a), "nodrag") && b.Jb(a)
        }

        function vc(a) {
            ac(a, 1)
        }

        function ac(a, c) {
            a = b.Hd(a);
            var i = b.ec(a);
            if (!L && !b.j(i, "nodrag") && wc() && (!c || a.touches.length == 1)) {
                B = d;
                Ab = l;
                R = k;
                b.c(f, c ? "touchmove" : "mousemove", Db);
                b.P();
                M = 0;
                ic();
                if (!qb) x = 0;
                if (c) {
                    var h = a.touches[0];
                    vb = h.clientX;
                    wb = h.clientY
                } else {
                    var e = b.Od(a);
                    vb = e.x;
                    wb = e.y
                }
                H = 0;
                bb = 0;
                fb = 0;
                g.k(j.$EVT_DRAG_START, t(G), G, a)
            }
        }

        function Db(e) {
            if (B) {
                e = b.Hd(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = b.Od(e);
                if (f) {
                    var j = f.x - vb,
                        k = f.y - wb;
                    if (c.floor(G) != G) x = x || hb & L;
                    if ((j || k) && !x) {
                        if (L == 3)
                            if (c.abs(k) > c.abs(j)) x = 2;
                            else x = 1;
                        else x = L;
                        if (kb && x == 1 && c.abs(k) - c.abs(j) > 3) Ab = d
                    }
                    if (x) {
                        var a = k,
                            i = Cb;
                        if (x == 1) {
                            a = j;
                            i = Bb
                        }
                        if (!(D & 1)) {
                            if (a > 0) {
                                var g = i * s,
                                    h = a - g;
                                if (h > 0) a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (r - u - s),
                                    h = -a - g;
                                if (h > 0) a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - bb < -2) fb = 0;
                        else if (H - bb > 2) fb = -1;
                        bb = H;
                        H = a;
                        tb = G - H / i / (Z || 1);
                        if (H && x && !Ab) {
                            b.Jb(e);
                            if (!O) z.Be(tb);
                            else z.hf(tb)
                        }
                    }
                }
            }
        }

        function nb() {
            tc();
            if (B) {
                B = l;
                b.P();
                b.R(f, "mousemove", Db);
                b.R(f, "touchmove", Db);
                M = H;
                z.mb();
                var a = w.Z();
                g.k(j.$EVT_DRAG_END, t(a), a, t(G), G);
                E & 12 && Rb();
                gc(d)
            }
        }

        function mc(c) {
            if (M) {
                b.Wf(c);
                var a = b.ec(c);
                while (a && v !== a) {
                    a.tagName == "A" && b.Jb(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function Lb(a) {
            C[s];
            s = t(a);
            ub = C[s];
            Wb(a);
            return s
        }

        function Hc(a, b) {
            x = 0;
            Lb(a);
            g.k(j.$EVT_PARK, t(a), b)
        }

        function Wb(a, c) {
            yb = a;
            b.a(S, function(b) {
                b.wc(t(a), a, c)
            })
        }

        function wc() {
            var b = j.ld || 0,
                a = Y;
            if (kb) a & 1 && (a &= 1);
            j.ld |= a;
            return L = a & ~b
        }

        function tc() {
            if (L) {
                j.ld &= ~Y;
                L = 0
            }
        }

        function Zb() {
            var a = b.fb();
            b.K(a, V);
            b.A(a, "absolute");
            return a
        }

        function t(a) {
            return (a % r + r) % r
        }

        function nc(b, d) {
            if (d)
                if (!D) {
                    b = c.min(c.max(b + yb, 0), r - u);
                    d = l
                } else if (D & 2) {
                b = t(b + yb);
                d = l
            }
            ob(b, a.$SlideDuration, d)
        }

        function zb() {
            b.a(S, function(a) {
                a.qc(a.Mb.$ChanceToShow <= F)
            })
        }

        function kc() {
            if (!F) {
                F = 1;
                zb();
                if (!B) {
                    E & 12 && gc();
                    E & 3 && C[s].ic()
                }
            }
        }

        function jc() {
            if (F) {
                F = 0;
                zb();
                B || !(E & 12) || ic()
            }
        }

        function lc() {
            V = {
                S: K,
                N: J,
                $Top: 0,
                $Left: 0
            };
            b.a(T, function(a) {
                b.K(a, V);
                b.A(a, "absolute");
                b.kb(a, "hidden");
                b.M(a)
            });
            b.K(cb, V)
        }

        function mb(b, a) {
            ob(b, a, d)
        }

        function ob(g, f, k) {
            if (Tb && (!B && (F || !(E & 12)) || a.$NaviQuitDrag)) {
                O = d;
                B = l;
                z.mb();
                if (f == h) f = Xb;
                var e = Eb.tb(),
                    b = g;
                if (k) {
                    b = e + g;
                    if (g > 0) b = c.ceil(b);
                    else b = c.floor(b)
                }
                if (D & 2) b = t(b);
                if (!(D & 1)) b = c.max(0, c.min(b, r - u));
                var j = (b - e) % r;
                b = e + j;
                var i = e == b ? 0 : f * c.abs(j);
                i = c.min(i, f * u * 1.5);
                z.Nb(e, b, i || 1)
            }
        }
        g.$PlayTo = ob;
        g.$GoTo = function(a) {
            w.r(Lb(a))
        };
        g.$Next = function() {
            mb(1)
        };
        g.$Prev = function() {
            mb(-1)
        };
        g.$Pause = function() {
            P = l
        };
        g.$Play = function() {
            if (!P) {
                P = d;
                C[s] && C[s].ic()
            }
        };
        g.$SetSlideshowTransitions = function(b) {
            a.$SlideshowOptions.$Transitions = b
        };
        g.$SetCaptionTransitions = function(a) {
            I.$Transitions = a;
            I.oc = b.P()
        };
        g.$SlidesCount = function() {
            return T.length
        };
        g.$CurrentIndex = function() {
            return s
        };
        g.$IsAutoPlaying = function() {
            return P
        };
        g.$IsDragging = function() {
            return B
        };
        g.$IsSliding = function() {
            return O
        };
        g.$IsMouseOver = function() {
            return !F
        };
        g.$LastDragSucceded = function() {
            return M
        };

        function X() {
            return b.l(y || p)
        }

        function jb() {
            return b.m(y || p)
        }
        g.$OriginalWidth = g.$GetOriginalWidth = X;
        g.$OriginalHeight = g.$GetOriginalHeight = jb;

        function Gb(c, d) {
            if (c == h) return b.l(p);
            if (!y) {
                var a = b.fb(f);
                b.gd(a, b.gd(p));
                b.Xb(a, b.Xb(p));
                b.bb(a, "block");
                b.A(a, "relative");
                b.z(a, 0);
                b.B(a, 0);
                b.kb(a, "visible");
                y = b.fb(f);
                b.A(y, "absolute");
                b.z(y, 0);
                b.B(y, 0);
                b.l(y, b.l(p));
                b.m(y, b.m(p));
                b.Pc(y, "0 0");
                b.G(y, a);
                var i = b.yb(p);
                b.G(p, y);
                b.W(p, "backgroundImage", "");
                b.a(i, function(c) {
                    b.G(b.j(c, "noscale") ? p : a, c);
                    b.j(c, "autocenter") && Nb.push(c)
                })
            }
            Z = c / (d ? b.m : b.l)(y);
            b.Zf(y, Z);
            var g = d ? Z * X() : c,
                e = d ? c : Z * jb();
            b.l(p, g);
            b.m(p, e);
            b.a(Nb, function(a) {
                var c = b.vc(b.j(a, "autocenter"));
                b.lg(a, c)
            })
        }
        g.$ScaleHeight = g.$GetScaleHeight = function(a) {
            if (a == h) return b.m(p);
            Gb(a, d)
        };
        g.$ScaleWidth = g.$SetScaleWidth = g.$GetScaleWidth = Gb;
        g.xd = function(a) {
            var d = c.ceil(t(gb / dc)),
                b = t(a - s + d);
            if (b > u) {
                if (a - s > r / 2) a -= r;
                else if (a - s <= -r / 2) a += r
            } else a = s + b - d;
            return a
        };
        n.call(g);
        g.$Elmt = p = b.hb(p);
        var a = b.o({
            $FillMode: 0,
            $LazyLoading: 1,
            $ArrowKeyNavigation: 1,
            $StartIndex: 0,
            $AutoPlay: l,
            $Loop: 1,
            $HWA: d,
            $NaviQuitDrag: d,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: e.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $Cols: 1,
            $Align: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, hc);
        a.$HWA = a.$HWA && b.Pf();
        if (a.$Idle != h) a.$AutoPlayInterval = a.$Idle;
        if (a.$ParkingPosition != h) a.$Align = a.$ParkingPosition;
        var hb = a.$PlayOrientation & 3,
            xc = (a.$PlayOrientation & 4) / -4 || 1,
            eb = a.$SlideshowOptions,
            I = b.o({
                $Class: q,
                $PlayInMode: 1,
                $PlayOutMode: 1,
                $HWA: a.$HWA
            }, a.$CaptionSliderOptions);
        I.$Transitions = I.$Transitions || I.$CaptionTransitions;
        var rb = a.$BulletNavigatorOptions,
            W = a.$ArrowNavigatorOptions,
            ab = a.$ThumbnailNavigatorOptions,
            Q = !a.$UISearchMode,
            y, v = b.u(p, "slides", Q),
            cb = b.u(p, "loading", Q) || b.fb(f),
            Jb = b.u(p, "navigator", Q),
            ec = b.u(p, "arrowleft", Q),
            cc = b.u(p, "arrowright", Q),
            Hb = b.u(p, "thumbnavigator", Q),
            pc = b.l(v),
            oc = b.m(v),
            V, T = [],
            yc = b.yb(v);
        b.a(yc, function(a) {
            if (a.tagName == "DIV" && !b.j(a, "u")) T.push(a);
            else b.gb() && b.D(a, (b.D(a) || 0) + 1)
        });
        var s = -1,
            yb, ub, r = T.length,
            K = a.$SlideWidth || pc,
            J = a.$SlideHeight || oc,
            Yb = a.$SlideSpacing,
            Bb = K + Yb,
            Cb = J + Yb,
            dc = hb & 1 ? Bb : Cb,
            u = c.min(a.$Cols, r),
            ib, x, L, Ab, S = [],
            Sb, Ub, Qb, fc, Gc, P, E = a.$PauseOnHover,
            qc = a.$AutoPlayInterval,
            Xb = a.$SlideDuration,
            sb, db, gb, Tb = u < r,
            D = Tb ? a.$Loop : 0,
            Y, M, F = 1,
            O, B, R, vb = 0,
            wb = 0,
            H, bb, fb, Eb, w, U, z, Vb = new sc,
            Z, Nb = [];
        if (r) {
            if (a.$HWA) Mb = function(a, c, d) {
                b.Db(a, {
                    $TranslateX: c,
                    $TranslateY: d
                })
            };
            P = a.$AutoPlay;
            g.Mb = hc;
            lc();
            b.s(p, "jssor-slider", d);
            b.D(v, b.D(v) || 0);
            b.A(v, "absolute");
            ib = b.T(v, d);
            b.Lb(ib, v);
            if (eb) {
                fc = eb.$ShowLink;
                sb = eb.$Class;
                db = u == 1 && r > 1 && sb && (!b.Bd() || b.sd() >= 8)
            }
            gb = db || u >= r || !(D & 1) ? 0 : a.$Align;
            Y = (u > 1 || gb ? hb : -1) & a.$DragOrientation;
            var xb = v,
                C = [],
                A, N, Fb = b.Tf(),
                kb = Fb.yf,
                G, qb, Kb, tb;
            Fb.zd && b.W(xb, Fb.zd, ([k, "pan-y", "pan-x", "none"])[Y] || "");
            U = new Dc;
            if (db) A = new sb(Vb, K, J, eb, kb);
            b.G(ib, U.Ub);
            b.kb(v, "hidden");
            N = Zb();
            b.W(N, "backgroundColor", "#000");
            b.Gb(N, 0);
            b.Lb(N, xb.firstChild, xb);
            for (var pb = 0; pb < T.length; pb++) {
                var Ac = T[pb],
                    Cc = new Bc(Ac, pb);
                C.push(Cc)
            }
            b.M(cb);
            Eb = new Ec;
            z = new rc(Eb, U);
            b.c(v, "click", mc, d);
            b.c(p, "mouseout", b.Ib(kc, p));
            b.c(p, "mouseover", b.Ib(jc, p));
            if (Y) {
                b.c(v, "mousedown", ac);
                b.c(v, "touchstart", vc);
                b.c(v, "dragstart", Ib);
                b.c(v, "selectstart", Ib);
                b.c(f, "mouseup", nb);
                b.c(f, "touchend", nb);
                b.c(f, "touchcancel", nb);
                b.c(i, "blur", nb)
            }
            E &= kb ? 10 : 5;
            if (Jb && rb) {
                Sb = new rb.$Class(Jb, rb, X(), jb());
                S.push(Sb)
            }
            if (W && ec && cc) {
                W.$Loop = D;
                W.$Cols = u;
                Ub = new W.$Class(ec, cc, W, X(), jb());
                S.push(Ub)
            }
            if (Hb && ab) {
                ab.$StartIndex = a.$StartIndex;
                Qb = new ab.$Class(Hb, ab);
                S.push(Qb)
            }
            b.a(S, function(a) {
                a.Ec(r, C, cb);
                a.$On(o.cc, nc)
            });
            b.W(p, "visibility", "visible");
            Gb(X());
            zb();
            a.$ArrowKeyNavigation && b.c(f, "keydown", function(b) {
                if (b.keyCode == 37) mb(-a.$ArrowKeyNavigation);
                else b.keyCode == 39 && mb(a.$ArrowKeyNavigation)
            });
            var lb = a.$StartIndex;
            if (!(D & 1)) lb = c.max(0, c.min(lb, r - u));
            z.Nb(lb, lb, 0)
        }
    };
    j.$EVT_CLICK = 21;
    j.$EVT_DRAG_START = 22;
    j.$EVT_DRAG_END = 23;
    j.$EVT_SWIPE_START = 24;
    j.$EVT_SWIPE_END = 25;
    j.$EVT_LOAD_START = 26;
    j.$EVT_LOAD_END = 27;
    j.Af = 28;
    j.$EVT_POSITION_CHANGE = 202;
    j.$EVT_PARK = 203;
    j.$EVT_SLIDESHOW_START = 206;
    j.$EVT_SLIDESHOW_END = 207;
    j.$EVT_PROGRESS_CHANGE = 208;
    j.$EVT_STATE_CHANGE = 209;
    var o = {
        cc: 1
    };
    i.$JssorBulletNavigator$ = function(e, C) {
        var f = this;
        n.call(f);
        e = b.hb(e);
        var s, A, z, r, j = 0,
            a, m, i, w, x, h, g, q, p, B = [],
            y = [];

        function v(a) {
            a != -1 && y[a].yd(a == j)
        }

        function t(a) {
            f.k(o.cc, a * m)
        }
        f.$Elmt = e;
        f.wc = function(a) {
            if (a != r) {
                var d = j,
                    b = c.floor(a / m);
                j = b;
                r = a;
                v(d);
                v(b)
            }
        };
        f.qc = function(a) {
            b.v(e, a)
        };
        var u;
        f.Ec = function(E) {
            if (!u) {
                s = c.ceil(E / m);
                j = 0;
                var o = q + w,
                    r = p + x,
                    n = c.ceil(s / i) - 1;
                A = q + o * (!h ? n : i - 1);
                z = p + r * (h ? n : i - 1);
                b.l(e, A);
                b.m(e, z);
                for (var f = 0; f < s; f++) {
                    var C = b.Ff();
                    b.Vf(C, f + 1);
                    var l = b.td(g, "numbertemplate", C, d);
                    b.A(l, "absolute");
                    var v = f % (n + 1);
                    b.B(l, !h ? o * v : f % i * o);
                    b.z(l, h ? r * v : c.floor(f / (n + 1)) * r);
                    b.G(e, l);
                    B[f] = l;
                    a.$ActionMode & 1 && b.c(l, "click", b.H(k, t, f));
                    a.$ActionMode & 2 && b.c(l, "mouseover", b.Ib(b.H(k, t, f), l));
                    y[f] = b.Tb(l)
                }
                u = d
            }
        };
        f.Mb = a = b.o({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, C);
        g = b.u(e, "prototype");
        q = b.l(g);
        p = b.m(g);
        b.Bb(g, e);
        m = a.$Steps || 1;
        i = a.$Rows || 1;
        w = a.$SpacingX;
        x = a.$SpacingY;
        h = a.$Orientation - 1;
        a.$Scale == l && b.s(e, "noscale", d);
        a.$AutoCenter && b.s(e, "autocenter", a.$AutoCenter)
    };
    i.$JssorArrowNavigator$ = function(a, g, h) {
        var c = this;
        n.call(c);
        var r, q, e, f, i;
        b.l(a);
        b.m(a);

        function j(a) {
            c.k(o.cc, a, d)
        }

        function p(c) {
            b.v(a, c || !h.$Loop && e == 0);
            b.v(g, c || !h.$Loop && e >= q - h.$Cols);
            r = c
        }
        c.wc = function(b, a, c) {
            if (c) e = a;
            else {
                e = b;
                p(r)
            }
        };
        c.qc = p;
        var m;
        c.Ec = function(c) {
            q = c;
            e = 0;
            if (!m) {
                b.c(a, "click", b.H(k, j, -i));
                b.c(g, "click", b.H(k, j, i));
                b.Tb(a);
                b.Tb(g);
                m = d
            }
        };
        c.Mb = f = b.o({
            $Steps: 1
        }, h);
        i = f.$Steps;
        if (f.$Scale == l) {
            b.s(a, "noscale", d);
            b.s(g, "noscale", d)
        }
        if (f.$AutoCenter) {
            b.s(a, "autocenter", f.$AutoCenter);
            b.s(g, "autocenter", f.$AutoCenter)
        }
    };
    i.$JssorThumbnailNavigator$ = function(g, B) {
        var h = this,
            y, p, a, v = [],
            z, x, e, q, r, u, t, m, s, f, i;
        n.call(h);
        g = b.hb(g);

        function A(n, f) {
            var g = this,
                c, m, l;

            function q() {
                m.yd(p == f)
            }

            function j(d) {
                if (d || !s.$LastDragSucceded()) {
                    var a = e - f % e,
                        b = s.xd((f + a) / e - 1),
                        c = b * e + e - a;
                    h.k(o.cc, c)
                }
            }
            g.pb = f;
            g.Ed = q;
            l = n.Mg || n.Qb || b.fb();
            g.Ub = c = b.td(i, "thumbnailtemplate", l, d);
            m = b.Tb(c);
            a.$ActionMode & 1 && b.c(c, "click", b.H(k, j, 0));
            a.$ActionMode & 2 && b.c(c, "mouseover", b.Ib(b.H(k, j, 1), c))
        }
        h.wc = function(b, d, f) {
            var a = p;
            p = b;
            a != -1 && v[a].Ed();
            v[b].Ed();
            !f && s.$PlayTo(s.xd(c.floor(d / e)))
        };
        h.qc = function(a) {
            b.v(g, a)
        };
        var w;
        h.Ec = function(F, D) {
            if (!w) {
                y = F;
                c.ceil(y / e);
                p = -1;
                m = c.min(m, D.length);
                var h = a.$Orientation & 1,
                    n = u + (u + q) * (e - 1) * (1 - h),
                    k = t + (t + r) * (e - 1) * h,
                    B = n + (n + q) * (m - 1) * h,
                    o = k + (k + r) * (m - 1) * (1 - h);
                b.A(f, "absolute");
                b.kb(f, "hidden");
                a.$AutoCenter & 1 && b.B(f, (z - B) / 2);
                a.$AutoCenter & 2 && b.z(f, (x - o) / 2);
                b.l(f, B);
                b.m(f, o);
                var i = [];
                b.a(D, function(l, g) {
                    var j = new A(l, g),
                        d = j.Ub,
                        a = c.floor(g / e),
                        k = g % e;
                    b.B(d, (u + q) * k * (1 - h));
                    b.z(d, (t + r) * k * h);
                    if (!i[a]) {
                        i[a] = b.fb();
                        b.G(f, i[a])
                    }
                    b.G(i[a], d);
                    v.push(j)
                });
                var E = b.o({
                    $AutoPlay: l,
                    $NaviQuitDrag: l,
                    $SlideWidth: n,
                    $SlideHeight: k,
                    $SlideSpacing: q * h + r * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: a.$Orientation,
                    $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
                }, a);
                s = new j(g, E);
                w = d
            }
        };
        h.Mb = a = b.o({
            $SpacingX: 0,
            $SpacingY: 0,
            $Cols: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, B);
        z = b.l(g);
        x = b.m(g);
        f = b.u(g, "slides", d);
        i = b.u(f, "prototype");
        u = b.l(i);
        t = b.m(i);
        b.Bb(i, f);
        e = a.$Rows || 1;
        q = a.$SpacingX;
        r = a.$SpacingY;
        m = a.$Cols;
        a.$Scale == l && b.s(g, "noscale", d)
    };

    function q(e, d, c) {
        var a = this;
        m.call(a, 0, c);
        a.hd = b.ad;
        a.Oc = 0;
        a.Uc = c
    }
    i.$JssorCaptionSlideo$ = function(n, f, l) {
        var a = this,
            o, h = {},
            i = f.$Transitions,
            c = new m(0, 0);
        m.call(a, 0, 0);

        function j(d, c) {
            var a = {};
            b.a(d, function(d, f) {
                var e = h[f];
                if (e) {
                    if (b.cd(d)) d = j(d, c || f == "e");
                    else if (c)
                        if (b.Zb(d)) d = o[d];
                    a[e] = d
                }
            });
            return a
        }

        function k(e, c) {
            var a = [],
                d = b.yb(e);
            b.a(d, function(d) {
                var h = b.j(d, "u") == "caption";
                if (h) {
                    var e = b.j(d, "t"),
                        g = i[b.vc(e)] || i[e],
                        f = {
                            $Elmt: d,
                            hc: g
                        };
                    a.push(f)
                }
                if (c < 5) a = a.concat(k(d, c + 1))
            });
            return a
        }

        function r(e, f, a) {
            b.a(f, function(h) {
                var f = b.o(d, {}, j(h)),
                    g = b.sc(f.$Easing);
                delete f.$Easing;
                if (f.$Left) {
                    f.C = f.$Left;
                    g.C = g.$Left;
                    delete f.$Left
                }
                if (f.$Top) {
                    f.F = f.$Top;
                    g.F = g.$Top;
                    delete f.$Top
                }
                var i = {
                        $Easing: g,
                        $OriginalWidth: a.S,
                        $OriginalHeight: a.N
                    },
                    k = new m(h.b, h.d, i, e, a, f);
                c.zb(k);
                a = b.ge(a, f)
            });
            return a
        }

        function q(a) {
            b.a(a, function(f) {
                var a = f.$Elmt,
                    e = b.l(a),
                    d = b.m(a),
                    c = {
                        $Left: b.B(a),
                        $Top: b.z(a),
                        C: 0,
                        F: 0,
                        $Opacity: 1,
                        $ZIndex: b.D(a) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        S: e,
                        N: d,
                        $Clip: {
                            $Top: 0,
                            $Right: e,
                            $Bottom: d,
                            $Left: 0
                        }
                    };
                c.Tc = c.$Left;
                c.Nc = c.$Top;
                r(a, f.hc, c)
            })
        }

        function t(g, f, h) {
            var e = g.b - f;
            if (e) {
                var b = new m(f, e);
                b.zb(c, d);
                b.$Shift(h);
                a.zb(b)
            }
            a.ff(g.d);
            return e
        }

        function s(f) {
            var d = c.uc(),
                e = 0;
            b.a(f, function(c, f) {
                c = b.o({
                    d: l
                }, c);
                t(c, d, e);
                d = c.b;
                e += c.d;
                if (!f || c.t == 2) {
                    a.Oc = d;
                    a.Uc = d + c.d
                }
            })
        }
        a.hd = function() {
            a.r(-1, d)
        };
        o = [g.$Swing, g.$Linear, g.$InQuad, g.$OutQuad, g.$InOutQuad, g.$InCubic, g.$OutCubic, g.$InOutCubic, g.$InQuart, g.$OutQuart, g.$InOutQuart, g.$InQuint, g.$OutQuint, g.$InOutQuint, g.$InSine, g.$OutSine, g.$InOutSine, g.$InExpo, g.$OutExpo, g.$InOutExpo, g.$InCirc, g.$OutCirc, g.$InOutCirc, g.$InElastic, g.$OutElastic, g.$InOutElastic, g.$InBack, g.$OutBack, g.$InOutBack, g.$InBounce, g.$OutBounce, g.$InOutBounce, g.$GoBack, g.$InWave, g.$OutWave, g.$OutJump, g.$InJump];
        var u = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        b.a(u, function(b, a) {
            h[b] = a
        });
        q(k(n, 1));
        c.r(-1);
        var p = f.$Breaks || [],
            e = [].concat(p[b.vc(b.j(n, "b"))] || []);
        e.push({
            b: c.ac(),
            d: e.length ? 0 : l
        });
        s(e);
        a.r(-1)
    }
})(window, document, Math, null, true, false)
