/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var Xv = Object.create;
    var Cr = Object.defineProperty;
    var Gv = Object.getOwnPropertyDescriptor;
    var Vv = Object.getOwnPropertyNames;
    var Uv = Object.getPrototypeOf
      , Wv = Object.prototype.hasOwnProperty;
    var ve = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var f = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Pe = (e, t) => {
        for (var r in t)
            Cr(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , ua = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of Vv(t))
                !Wv.call(e, o) && o !== r && Cr(e, o, {
                    get: () => t[o],
                    enumerable: !(n = Gv(t, o)) || n.enumerable
                });
        return e
    }
    ;
    var le = (e, t, r) => (r = e != null ? Xv(Uv(e)) : {},
    ua(t || !e || !e.__esModule ? Cr(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , Ye = e => ua(Cr({}, "__esModule", {
        value: !0
    }), e);
    var Hn = f( () => {
        "use strict";
        window.tram = function(e) {
            function t(c, _) {
                var S = new y.Bare;
                return S.init(c, _)
            }
            function r(c) {
                return c.replace(/[A-Z]/g, function(_) {
                    return "-" + _.toLowerCase()
                })
            }
            function n(c) {
                var _ = parseInt(c.slice(1), 16)
                  , S = _ >> 16 & 255
                  , x = _ >> 8 & 255
                  , T = 255 & _;
                return [S, x, T]
            }
            function o(c, _, S) {
                return "#" + (1 << 24 | c << 16 | _ << 8 | S).toString(16).slice(1)
            }
            function i() {}
            function a(c, _) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof _ + "] " + _)
            }
            function u(c, _, S) {
                l("Units do not match [" + c + "]: " + _ + ", " + S)
            }
            function s(c, _, S) {
                if (_ !== void 0 && (S = _),
                c === void 0)
                    return S;
                var x = S;
                return Ce.test(c) || !Xe.test(c) ? x = parseInt(c, 10) : Xe.test(c) && (x = 1e3 * parseFloat(c)),
                0 > x && (x = 0),
                x === x ? x : S
            }
            function l(c) {
                oe.debug && window && window.console.warn(c)
            }
            function m(c) {
                for (var _ = -1, S = c ? c.length : 0, x = []; ++_ < S; ) {
                    var T = c[_];
                    T && x.push(T)
                }
                return x
            }
            var g = function(c, _, S) {
                function x(ie) {
                    return typeof ie == "object"
                }
                function T(ie) {
                    return typeof ie == "function"
                }
                function L() {}
                function Z(ie, he) {
                    function V() {
                        var Se = new ae;
                        return T(Se.init) && Se.init.apply(Se, arguments),
                        Se
                    }
                    function ae() {}
                    he === S && (he = ie,
                    ie = Object),
                    V.Bare = ae;
                    var se, _e = L[c] = ie[c], je = ae[c] = V[c] = new L;
                    return je.constructor = V,
                    V.mixin = function(Se) {
                        return ae[c] = V[c] = Z(V, Se)[c],
                        V
                    }
                    ,
                    V.open = function(Se) {
                        if (se = {},
                        T(Se) ? se = Se.call(V, je, _e, V, ie) : x(Se) && (se = Se),
                        x(se))
                            for (var er in se)
                                _.call(se, er) && (je[er] = se[er]);
                        return T(je.init) || (je.init = ie),
                        V
                    }
                    ,
                    V.open(he)
                }
                return Z
            }("prototype", {}.hasOwnProperty)
              , h = {
                ease: ["ease", function(c, _, S, x) {
                    var T = (c /= x) * c
                      , L = T * c;
                    return _ + S * (-2.75 * L * T + 11 * T * T + -15.5 * L + 8 * T + .25 * c)
                }
                ],
                "ease-in": ["ease-in", function(c, _, S, x) {
                    var T = (c /= x) * c
                      , L = T * c;
                    return _ + S * (-1 * L * T + 3 * T * T + -3 * L + 2 * T)
                }
                ],
                "ease-out": ["ease-out", function(c, _, S, x) {
                    var T = (c /= x) * c
                      , L = T * c;
                    return _ + S * (.3 * L * T + -1.6 * T * T + 2.2 * L + -1.8 * T + 1.9 * c)
                }
                ],
                "ease-in-out": ["ease-in-out", function(c, _, S, x) {
                    var T = (c /= x) * c
                      , L = T * c;
                    return _ + S * (2 * L * T + -5 * T * T + 2 * L + 2 * T)
                }
                ],
                linear: ["linear", function(c, _, S, x) {
                    return S * c / x + _
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, _, S, x) {
                    return S * (c /= x) * c + _
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, _, S, x) {
                    return -S * (c /= x) * (c - 2) + _
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c + _ : -S / 2 * (--c * (c - 2) - 1) + _
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, _, S, x) {
                    return S * (c /= x) * c * c + _
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, _, S, x) {
                    return S * ((c = c / x - 1) * c * c + 1) + _
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c * c + _ : S / 2 * ((c -= 2) * c * c + 2) + _
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, _, S, x) {
                    return S * (c /= x) * c * c * c + _
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, _, S, x) {
                    return -S * ((c = c / x - 1) * c * c * c - 1) + _
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c * c * c + _ : -S / 2 * ((c -= 2) * c * c * c - 2) + _
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, _, S, x) {
                    return S * (c /= x) * c * c * c * c + _
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, _, S, x) {
                    return S * ((c = c / x - 1) * c * c * c * c + 1) + _
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c * c * c * c + _ : S / 2 * ((c -= 2) * c * c * c * c + 2) + _
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, _, S, x) {
                    return -S * Math.cos(c / x * (Math.PI / 2)) + S + _
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, _, S, x) {
                    return S * Math.sin(c / x * (Math.PI / 2)) + _
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, _, S, x) {
                    return -S / 2 * (Math.cos(Math.PI * c / x) - 1) + _
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, _, S, x) {
                    return c === 0 ? _ : S * Math.pow(2, 10 * (c / x - 1)) + _
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, _, S, x) {
                    return c === x ? _ + S : S * (-Math.pow(2, -10 * c / x) + 1) + _
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, _, S, x) {
                    return c === 0 ? _ : c === x ? _ + S : (c /= x / 2) < 1 ? S / 2 * Math.pow(2, 10 * (c - 1)) + _ : S / 2 * (-Math.pow(2, -10 * --c) + 2) + _
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, _, S, x) {
                    return -S * (Math.sqrt(1 - (c /= x) * c) - 1) + _
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, _, S, x) {
                    return S * Math.sqrt(1 - (c = c / x - 1) * c) + _
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? -S / 2 * (Math.sqrt(1 - c * c) - 1) + _ : S / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + _
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, _, S, x, T) {
                    return T === void 0 && (T = 1.70158),
                    S * (c /= x) * c * ((T + 1) * c - T) + _
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, _, S, x, T) {
                    return T === void 0 && (T = 1.70158),
                    S * ((c = c / x - 1) * c * ((T + 1) * c + T) + 1) + _
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, _, S, x, T) {
                    return T === void 0 && (T = 1.70158),
                    (c /= x / 2) < 1 ? S / 2 * c * c * (((T *= 1.525) + 1) * c - T) + _ : S / 2 * ((c -= 2) * c * (((T *= 1.525) + 1) * c + T) + 2) + _
                }
                ]
            }
              , E = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , w = document
              , b = window
              , R = "bkwld-tram"
              , A = /[\-\.0-9]/g
              , P = /[A-Z]/
              , C = "number"
              , M = /^(rgb|#)/
              , D = /(em|cm|mm|in|pt|pc|px)$/
              , N = /(em|cm|mm|in|pt|pc|px|%)$/
              , W = /(deg|rad|turn)$/
              , H = "unitless"
              , j = /(all|none) 0s ease 0s/
              , J = /^(width|height)$/
              , re = " "
              , k = w.createElement("a")
              , O = ["Webkit", "Moz", "O", "ms"]
              , F = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , B = function(c) {
                if (c in k.style)
                    return {
                        dom: c,
                        css: c
                    };
                var _, S, x = "", T = c.split("-");
                for (_ = 0; _ < T.length; _++)
                    x += T[_].charAt(0).toUpperCase() + T[_].slice(1);
                for (_ = 0; _ < O.length; _++)
                    if (S = O[_] + x,
                    S in k.style)
                        return {
                            dom: S,
                            css: F[_] + c
                        }
            }
              , U = t.support = {
                bind: Function.prototype.bind,
                transform: B("transform"),
                transition: B("transition"),
                backface: B("backface-visibility"),
                timing: B("transition-timing-function")
            };
            if (U.transition) {
                var ee = U.timing.dom;
                if (k.style[ee] = h["ease-in-back"][0],
                !k.style[ee])
                    for (var ne in E)
                        h[ne][0] = E[ne]
            }
            var q = t.frame = function() {
                var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
                return c && U.bind ? c.bind(b) : function(_) {
                    b.setTimeout(_, 16)
                }
            }()
              , K = t.now = function() {
                var c = b.performance
                  , _ = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                return _ && U.bind ? _.bind(c) : Date.now || function() {
                    return +new Date
                }
            }()
              , d = g(function(c) {
                function _(te, ce) {
                    var Ee = m(("" + te).split(re))
                      , de = Ee[0];
                    ce = ce || {};
                    var Oe = G[de];
                    if (!Oe)
                        return l("Unsupported property: " + de);
                    if (!ce.weak || !this.props[de]) {
                        var Ve = Oe[0]
                          , Le = this.props[de];
                        return Le || (Le = this.props[de] = new Ve.Bare),
                        Le.init(this.$el, Ee, Oe, ce),
                        Le
                    }
                }
                function S(te, ce, Ee) {
                    if (te) {
                        var de = typeof te;
                        if (ce || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        de == "number" && ce)
                            return this.timer = new ue({
                                duration: te,
                                context: this,
                                complete: L
                            }),
                            void (this.active = !0);
                        if (de == "string" && ce) {
                            switch (te) {
                            case "hide":
                                V.call(this);
                                break;
                            case "stop":
                                Z.call(this);
                                break;
                            case "redraw":
                                ae.call(this);
                                break;
                            default:
                                _.call(this, te, Ee && Ee[1])
                            }
                            return L.call(this)
                        }
                        if (de == "function")
                            return void te.call(this, this);
                        if (de == "object") {
                            var Oe = 0;
                            je.call(this, te, function(Ie, kv) {
                                Ie.span > Oe && (Oe = Ie.span),
                                Ie.stop(),
                                Ie.animate(kv)
                            }, function(Ie) {
                                "wait"in Ie && (Oe = s(Ie.wait, 0))
                            }),
                            _e.call(this),
                            Oe > 0 && (this.timer = new ue({
                                duration: Oe,
                                context: this
                            }),
                            this.active = !0,
                            ce && (this.timer.complete = L));
                            var Ve = this
                              , Le = !1
                              , Rr = {};
                            q(function() {
                                je.call(Ve, te, function(Ie) {
                                    Ie.active && (Le = !0,
                                    Rr[Ie.name] = Ie.nextStyle)
                                }),
                                Le && Ve.$el.css(Rr)
                            })
                        }
                    }
                }
                function x(te) {
                    te = s(te, 0),
                    this.active ? this.queue.push({
                        options: te
                    }) : (this.timer = new ue({
                        duration: te,
                        context: this,
                        complete: L
                    }),
                    this.active = !0)
                }
                function T(te) {
                    return this.active ? (this.queue.push({
                        options: te,
                        args: arguments
                    }),
                    void (this.timer.complete = L)) : l("No active transition timer. Use start() or wait() before then().")
                }
                function L() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var te = this.queue.shift();
                        S.call(this, te.options, !0, te.args)
                    }
                }
                function Z(te) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ce;
                    typeof te == "string" ? (ce = {},
                    ce[te] = 1) : ce = typeof te == "object" && te != null ? te : this.props,
                    je.call(this, ce, Se),
                    _e.call(this)
                }
                function ie(te) {
                    Z.call(this, te),
                    je.call(this, te, er, Fv)
                }
                function he(te) {
                    typeof te != "string" && (te = "block"),
                    this.el.style.display = te
                }
                function V() {
                    Z.call(this),
                    this.el.style.display = "none"
                }
                function ae() {
                    this.el.offsetHeight
                }
                function se() {
                    Z.call(this),
                    e.removeData(this.el, R),
                    this.$el = this.el = null
                }
                function _e() {
                    var te, ce, Ee = [];
                    this.upstream && Ee.push(this.upstream);
                    for (te in this.props)
                        ce = this.props[te],
                        ce.active && Ee.push(ce.string);
                    Ee = Ee.join(","),
                    this.style !== Ee && (this.style = Ee,
                    this.el.style[U.transition.dom] = Ee)
                }
                function je(te, ce, Ee) {
                    var de, Oe, Ve, Le, Rr = ce !== Se, Ie = {};
                    for (de in te)
                        Ve = te[de],
                        de in fe ? (Ie.transform || (Ie.transform = {}),
                        Ie.transform[de] = Ve) : (P.test(de) && (de = r(de)),
                        de in G ? Ie[de] = Ve : (Le || (Le = {}),
                        Le[de] = Ve));
                    for (de in Ie) {
                        if (Ve = Ie[de],
                        Oe = this.props[de],
                        !Oe) {
                            if (!Rr)
                                continue;
                            Oe = _.call(this, de)
                        }
                        ce.call(this, Oe, Ve)
                    }
                    Ee && Le && Ee.call(this, Le)
                }
                function Se(te) {
                    te.stop()
                }
                function er(te, ce) {
                    te.set(ce)
                }
                function Fv(te) {
                    this.$el.css(te)
                }
                function Ge(te, ce) {
                    c[te] = function() {
                        return this.children ? qv.call(this, ce, arguments) : (this.el && ce.apply(this, arguments),
                        this)
                    }
                }
                function qv(te, ce) {
                    var Ee, de = this.children.length;
                    for (Ee = 0; de > Ee; Ee++)
                        te.apply(this.children[Ee], ce);
                    return this
                }
                c.init = function(te) {
                    if (this.$el = e(te),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    oe.keepInherited && !oe.fallback) {
                        var ce = X(this.el, "transition");
                        ce && !j.test(ce) && (this.upstream = ce)
                    }
                    U.backface && oe.hideBackface && p(this.el, U.backface.css, "hidden")
                }
                ,
                Ge("add", _),
                Ge("start", S),
                Ge("wait", x),
                Ge("then", T),
                Ge("next", L),
                Ge("stop", Z),
                Ge("set", ie),
                Ge("show", he),
                Ge("hide", V),
                Ge("redraw", ae),
                Ge("destroy", se)
            })
              , y = g(d, function(c) {
                function _(S, x) {
                    var T = e.data(S, R) || e.data(S, R, new d.Bare);
                    return T.el || T.init(S),
                    x ? T.start(x) : T
                }
                c.init = function(S, x) {
                    var T = e(S);
                    if (!T.length)
                        return this;
                    if (T.length === 1)
                        return _(T[0], x);
                    var L = [];
                    return T.each(function(Z, ie) {
                        L.push(_(ie, x))
                    }),
                    this.children = L,
                    this
                }
            })
              , I = g(function(c) {
                function _() {
                    var L = this.get();
                    this.update("auto");
                    var Z = this.get();
                    return this.update(L),
                    Z
                }
                function S(L, Z, ie) {
                    return Z !== void 0 && (ie = Z),
                    L in h ? L : ie
                }
                function x(L) {
                    var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(L);
                    return (Z ? o(Z[1], Z[2], Z[3]) : L).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var T = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                c.init = function(L, Z, ie, he) {
                    this.$el = L,
                    this.el = L[0];
                    var V = Z[0];
                    ie[2] && (V = ie[2]),
                    Y[V] && (V = Y[V]),
                    this.name = V,
                    this.type = ie[1],
                    this.duration = s(Z[1], this.duration, T.duration),
                    this.ease = S(Z[2], this.ease, T.ease),
                    this.delay = s(Z[3], this.delay, T.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = J.test(this.name),
                    this.unit = he.unit || this.unit || oe.defaultUnit,
                    this.angle = he.angle || this.angle || oe.defaultAngle,
                    oe.fallback || he.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + h[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
                }
                ,
                c.set = function(L) {
                    L = this.convert(L, this.type),
                    this.update(L),
                    this.redraw()
                }
                ,
                c.transition = function(L) {
                    this.active = !0,
                    L = this.convert(L, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    L == "auto" && (L = _.call(this))),
                    this.nextStyle = L
                }
                ,
                c.fallback = function(L) {
                    var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                    L = this.convert(L, this.type),
                    this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                    L == "auto" && (L = _.call(this))),
                    this.tween = new $({
                        from: Z,
                        to: L,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.get = function() {
                    return X(this.el, this.name)
                }
                ,
                c.update = function(L) {
                    p(this.el, this.name, L)
                }
                ,
                c.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    p(this.el, this.name, this.get()));
                    var L = this.tween;
                    L && L.context && L.destroy()
                }
                ,
                c.convert = function(L, Z) {
                    if (L == "auto" && this.auto)
                        return L;
                    var ie, he = typeof L == "number", V = typeof L == "string";
                    switch (Z) {
                    case C:
                        if (he)
                            return L;
                        if (V && L.replace(A, "") === "")
                            return +L;
                        ie = "number(unitless)";
                        break;
                    case M:
                        if (V) {
                            if (L === "" && this.original)
                                return this.original;
                            if (Z.test(L))
                                return L.charAt(0) == "#" && L.length == 7 ? L : x(L)
                        }
                        ie = "hex or rgb string";
                        break;
                    case D:
                        if (he)
                            return L + this.unit;
                        if (V && Z.test(L))
                            return L;
                        ie = "number(px) or string(unit)";
                        break;
                    case N:
                        if (he)
                            return L + this.unit;
                        if (V && Z.test(L))
                            return L;
                        ie = "number(px) or string(unit or %)";
                        break;
                    case W:
                        if (he)
                            return L + this.angle;
                        if (V && Z.test(L))
                            return L;
                        ie = "number(deg) or string(angle)";
                        break;
                    case H:
                        if (he || V && N.test(L))
                            return L;
                        ie = "number(unitless) or string(unit or %)"
                    }
                    return a(ie, L),
                    L
                }
                ,
                c.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , v = g(I, function(c, _) {
                c.init = function() {
                    _.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), M))
                }
            })
              , z = g(I, function(c, _) {
                c.init = function() {
                    _.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                c.get = function() {
                    return this.$el[this.name]()
                }
                ,
                c.update = function(S) {
                    this.$el[this.name](S)
                }
            })
              , Q = g(I, function(c, _) {
                function S(x, T) {
                    var L, Z, ie, he, V;
                    for (L in x)
                        he = fe[L],
                        ie = he[0],
                        Z = he[1] || L,
                        V = this.convert(x[L], ie),
                        T.call(this, Z, V, ie)
                }
                c.init = function() {
                    _.init.apply(this, arguments),
                    this.current || (this.current = {},
                    fe.perspective && oe.perspective && (this.current.perspective = oe.perspective,
                    p(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                c.set = function(x) {
                    S.call(this, x, function(T, L) {
                        this.current[T] = L
                    }),
                    p(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                c.transition = function(x) {
                    var T = this.values(x);
                    this.tween = new me({
                        current: this.current,
                        values: T,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var L, Z = {};
                    for (L in this.current)
                        Z[L] = L in T ? T[L] : this.current[L];
                    this.active = !0,
                    this.nextStyle = this.style(Z)
                }
                ,
                c.fallback = function(x) {
                    var T = this.values(x);
                    this.tween = new me({
                        current: this.current,
                        values: T,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.update = function() {
                    p(this.el, this.name, this.style(this.current))
                }
                ,
                c.style = function(x) {
                    var T, L = "";
                    for (T in x)
                        L += T + "(" + x[T] + ") ";
                    return L
                }
                ,
                c.values = function(x) {
                    var T, L = {};
                    return S.call(this, x, function(Z, ie, he) {
                        L[Z] = ie,
                        this.current[Z] === void 0 && (T = 0,
                        ~Z.indexOf("scale") && (T = 1),
                        this.current[Z] = this.convert(T, he))
                    }),
                    L
                }
            })
              , $ = g(function(c) {
                function _(V) {
                    ie.push(V) === 1 && q(S)
                }
                function S() {
                    var V, ae, se, _e = ie.length;
                    if (_e)
                        for (q(S),
                        ae = K(),
                        V = _e; V--; )
                            se = ie[V],
                            se && se.render(ae)
                }
                function x(V) {
                    var ae, se = e.inArray(V, ie);
                    se >= 0 && (ae = ie.slice(se + 1),
                    ie.length = se,
                    ae.length && (ie = ie.concat(ae)))
                }
                function T(V) {
                    return Math.round(V * he) / he
                }
                function L(V, ae, se) {
                    return o(V[0] + se * (ae[0] - V[0]), V[1] + se * (ae[1] - V[1]), V[2] + se * (ae[2] - V[2]))
                }
                var Z = {
                    ease: h.ease[1],
                    from: 0,
                    to: 1
                };
                c.init = function(V) {
                    this.duration = V.duration || 0,
                    this.delay = V.delay || 0;
                    var ae = V.ease || Z.ease;
                    h[ae] && (ae = h[ae][1]),
                    typeof ae != "function" && (ae = Z.ease),
                    this.ease = ae,
                    this.update = V.update || i,
                    this.complete = V.complete || i,
                    this.context = V.context || this,
                    this.name = V.name;
                    var se = V.from
                      , _e = V.to;
                    se === void 0 && (se = Z.from),
                    _e === void 0 && (_e = Z.to),
                    this.unit = V.unit || "",
                    typeof se == "number" && typeof _e == "number" ? (this.begin = se,
                    this.change = _e - se) : this.format(_e, se),
                    this.value = this.begin + this.unit,
                    this.start = K(),
                    V.autoplay !== !1 && this.play()
                }
                ,
                c.play = function() {
                    this.active || (this.start || (this.start = K()),
                    this.active = !0,
                    _(this))
                }
                ,
                c.stop = function() {
                    this.active && (this.active = !1,
                    x(this))
                }
                ,
                c.render = function(V) {
                    var ae, se = V - this.start;
                    if (this.delay) {
                        if (se <= this.delay)
                            return;
                        se -= this.delay
                    }
                    if (se < this.duration) {
                        var _e = this.ease(se, 0, 1, this.duration);
                        return ae = this.startRGB ? L(this.startRGB, this.endRGB, _e) : T(this.begin + _e * this.change),
                        this.value = ae + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ae = this.endHex || this.begin + this.change,
                    this.value = ae + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                c.format = function(V, ae) {
                    if (ae += "",
                    V += "",
                    V.charAt(0) == "#")
                        return this.startRGB = n(ae),
                        this.endRGB = n(V),
                        this.endHex = V,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var se = ae.replace(A, "")
                          , _e = V.replace(A, "");
                        se !== _e && u("tween", ae, V),
                        this.unit = se
                    }
                    ae = parseFloat(ae),
                    V = parseFloat(V),
                    this.begin = this.value = ae,
                    this.change = V - ae
                }
                ,
                c.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var ie = []
                  , he = 1e3
            })
              , ue = g($, function(c) {
                c.init = function(_) {
                    this.duration = _.duration || 0,
                    this.complete = _.complete || i,
                    this.context = _.context,
                    this.play()
                }
                ,
                c.render = function(_) {
                    var S = _ - this.start;
                    S < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , me = g($, function(c, _) {
                c.init = function(S) {
                    this.context = S.context,
                    this.update = S.update,
                    this.tweens = [],
                    this.current = S.current;
                    var x, T;
                    for (x in S.values)
                        T = S.values[x],
                        this.current[x] !== T && this.tweens.push(new $({
                            name: x,
                            from: this.current[x],
                            to: T,
                            duration: S.duration,
                            delay: S.delay,
                            ease: S.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                c.render = function(S) {
                    var x, T, L = this.tweens.length, Z = !1;
                    for (x = L; x--; )
                        T = this.tweens[x],
                        T.context && (T.render(S),
                        this.current[T.name] = T.value,
                        Z = !0);
                    return Z ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                c.destroy = function() {
                    if (_.destroy.call(this),
                    this.tweens) {
                        var S, x = this.tweens.length;
                        for (S = x; S--; )
                            this.tweens[S].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , oe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !U.transition,
                agentTests: []
            };
            t.fallback = function(c) {
                if (!U.transition)
                    return oe.fallback = !0;
                oe.agentTests.push("(" + c + ")");
                var _ = new RegExp(oe.agentTests.join("|"),"i");
                oe.fallback = _.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(c) {
                return new $(c)
            }
            ,
            t.delay = function(c, _, S) {
                return new ue({
                    complete: _,
                    duration: c,
                    context: S
                })
            }
            ,
            e.fn.tram = function(c) {
                return t.call(null, this, c)
            }
            ;
            var p = e.style
              , X = e.css
              , Y = {
                transform: U.transform && U.transform.css
            }
              , G = {
                color: [v, M],
                background: [v, M, "background-color"],
                "outline-color": [v, M],
                "border-color": [v, M],
                "border-top-color": [v, M],
                "border-right-color": [v, M],
                "border-bottom-color": [v, M],
                "border-left-color": [v, M],
                "border-width": [I, D],
                "border-top-width": [I, D],
                "border-right-width": [I, D],
                "border-bottom-width": [I, D],
                "border-left-width": [I, D],
                "border-spacing": [I, D],
                "letter-spacing": [I, D],
                margin: [I, D],
                "margin-top": [I, D],
                "margin-right": [I, D],
                "margin-bottom": [I, D],
                "margin-left": [I, D],
                padding: [I, D],
                "padding-top": [I, D],
                "padding-right": [I, D],
                "padding-bottom": [I, D],
                "padding-left": [I, D],
                "outline-width": [I, D],
                opacity: [I, C],
                top: [I, N],
                right: [I, N],
                bottom: [I, N],
                left: [I, N],
                "font-size": [I, N],
                "text-indent": [I, N],
                "word-spacing": [I, N],
                width: [I, N],
                "min-width": [I, N],
                "max-width": [I, N],
                height: [I, N],
                "min-height": [I, N],
                "max-height": [I, N],
                "line-height": [I, H],
                "scroll-top": [z, C, "scrollTop"],
                "scroll-left": [z, C, "scrollLeft"]
            }
              , fe = {};
            U.transform && (G.transform = [Q],
            fe = {
                x: [N, "translateX"],
                y: [N, "translateY"],
                rotate: [W],
                rotateX: [W],
                rotateY: [W],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [W],
                skewX: [W],
                skewY: [W]
            }),
            U.transform && U.backface && (fe.z = [N, "translateZ"],
            fe.rotateZ = [W],
            fe.scaleZ = [C],
            fe.perspective = [D]);
            var Ce = /ms/
              , Xe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var la = f( (dF, ca) => {
        "use strict";
        var Bv = window.$
          , Hv = Hn() && Bv.tram;
        ca.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , o = Function.prototype
              , i = r.push
              , a = r.slice
              , u = r.concat
              , s = n.toString
              , l = n.hasOwnProperty
              , m = r.forEach
              , g = r.map
              , h = r.reduce
              , E = r.reduceRight
              , w = r.filter
              , b = r.every
              , R = r.some
              , A = r.indexOf
              , P = r.lastIndexOf
              , C = Array.isArray
              , M = Object.keys
              , D = o.bind
              , N = e.each = e.forEach = function(O, F, B) {
                if (O == null)
                    return O;
                if (m && O.forEach === m)
                    O.forEach(F, B);
                else if (O.length === +O.length) {
                    for (var U = 0, ee = O.length; U < ee; U++)
                        if (F.call(B, O[U], U, O) === t)
                            return
                } else
                    for (var ne = e.keys(O), U = 0, ee = ne.length; U < ee; U++)
                        if (F.call(B, O[ne[U]], ne[U], O) === t)
                            return;
                return O
            }
            ;
            e.map = e.collect = function(O, F, B) {
                var U = [];
                return O == null ? U : g && O.map === g ? O.map(F, B) : (N(O, function(ee, ne, q) {
                    U.push(F.call(B, ee, ne, q))
                }),
                U)
            }
            ,
            e.find = e.detect = function(O, F, B) {
                var U;
                return W(O, function(ee, ne, q) {
                    if (F.call(B, ee, ne, q))
                        return U = ee,
                        !0
                }),
                U
            }
            ,
            e.filter = e.select = function(O, F, B) {
                var U = [];
                return O == null ? U : w && O.filter === w ? O.filter(F, B) : (N(O, function(ee, ne, q) {
                    F.call(B, ee, ne, q) && U.push(ee)
                }),
                U)
            }
            ;
            var W = e.some = e.any = function(O, F, B) {
                F || (F = e.identity);
                var U = !1;
                return O == null ? U : R && O.some === R ? O.some(F, B) : (N(O, function(ee, ne, q) {
                    if (U || (U = F.call(B, ee, ne, q)))
                        return t
                }),
                !!U)
            }
            ;
            e.contains = e.include = function(O, F) {
                return O == null ? !1 : A && O.indexOf === A ? O.indexOf(F) != -1 : W(O, function(B) {
                    return B === F
                })
            }
            ,
            e.delay = function(O, F) {
                var B = a.call(arguments, 2);
                return setTimeout(function() {
                    return O.apply(null, B)
                }, F)
            }
            ,
            e.defer = function(O) {
                return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(O) {
                var F, B, U;
                return function() {
                    F || (F = !0,
                    B = arguments,
                    U = this,
                    Hv.frame(function() {
                        F = !1,
                        O.apply(U, B)
                    }))
                }
            }
            ,
            e.debounce = function(O, F, B) {
                var U, ee, ne, q, K, d = function() {
                    var y = e.now() - q;
                    y < F ? U = setTimeout(d, F - y) : (U = null,
                    B || (K = O.apply(ne, ee),
                    ne = ee = null))
                };
                return function() {
                    ne = this,
                    ee = arguments,
                    q = e.now();
                    var y = B && !U;
                    return U || (U = setTimeout(d, F)),
                    y && (K = O.apply(ne, ee),
                    ne = ee = null),
                    K
                }
            }
            ,
            e.defaults = function(O) {
                if (!e.isObject(O))
                    return O;
                for (var F = 1, B = arguments.length; F < B; F++) {
                    var U = arguments[F];
                    for (var ee in U)
                        O[ee] === void 0 && (O[ee] = U[ee])
                }
                return O
            }
            ,
            e.keys = function(O) {
                if (!e.isObject(O))
                    return [];
                if (M)
                    return M(O);
                var F = [];
                for (var B in O)
                    e.has(O, B) && F.push(B);
                return F
            }
            ,
            e.has = function(O, F) {
                return l.call(O, F)
            }
            ,
            e.isObject = function(O) {
                return O === Object(O)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/
              , j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , J = /\\|'|\r|\n|\u2028|\u2029/g
              , re = function(O) {
                return "\\" + j[O]
            }
              , k = /^\s*(\w|\$)+\s*$/;
            return e.template = function(O, F, B) {
                !F && B && (F = B),
                F = e.defaults({}, F, e.templateSettings);
                var U = RegExp([(F.escape || H).source, (F.interpolate || H).source, (F.evaluate || H).source].join("|") + "|$", "g")
                  , ee = 0
                  , ne = "__p+='";
                O.replace(U, function(y, I, v, z, Q) {
                    return ne += O.slice(ee, Q).replace(J, re),
                    ee = Q + y.length,
                    I ? ne += `'+
((__t=(` + I + `))==null?'':_.escape(__t))+
'` : v ? ne += `'+
((__t=(` + v + `))==null?'':__t)+
'` : z && (ne += `';
` + z + `
__p+='`),
                    y
                }),
                ne += `';
`;
                var q = F.variable;
                if (q) {
                    if (!k.test(q))
                        throw new Error("variable is not a bare identifier: " + q)
                } else
                    ne = `with(obj||{}){
` + ne + `}
`,
                    q = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var K;
                try {
                    K = new Function(F.variable || "obj","_",ne)
                } catch (y) {
                    throw y.source = ne,
                    y
                }
                var d = function(y) {
                    return K.call(this, y, e)
                };
                return d.source = "function(" + q + `){
` + ne + "}",
                d
            }
            ,
            e
        }()
    }
    );
    var qe = f( (pF, ya) => {
        "use strict";
        var pe = {}
          , wt = {}
          , St = []
          , Kn = window.Webflow || []
          , ct = window.jQuery
          , We = ct(window)
          , zv = ct(document)
          , Qe = ct.isFunction
          , Ue = pe._ = la()
          , da = pe.tram = Hn() && ct.tram
          , Pr = !1
          , jn = !1;
        da.config.hideBackface = !1;
        da.config.keepInherited = !0;
        pe.define = function(e, t, r) {
            wt[e] && ha(wt[e]);
            var n = wt[e] = t(ct, Ue, r) || {};
            return pa(n),
            n
        }
        ;
        pe.require = function(e) {
            return wt[e]
        }
        ;
        function pa(e) {
            pe.env() && (Qe(e.design) && We.on("__wf_design", e.design),
            Qe(e.preview) && We.on("__wf_preview", e.preview)),
            Qe(e.destroy) && We.on("__wf_destroy", e.destroy),
            e.ready && Qe(e.ready) && Kv(e)
        }
        function Kv(e) {
            if (Pr) {
                e.ready();
                return
            }
            Ue.contains(St, e.ready) || St.push(e.ready)
        }
        function ha(e) {
            Qe(e.design) && We.off("__wf_design", e.design),
            Qe(e.preview) && We.off("__wf_preview", e.preview),
            Qe(e.destroy) && We.off("__wf_destroy", e.destroy),
            e.ready && Qe(e.ready) && jv(e)
        }
        function jv(e) {
            St = Ue.filter(St, function(t) {
                return t !== e.ready
            })
        }
        pe.push = function(e) {
            if (Pr) {
                Qe(e) && e();
                return
            }
            Kn.push(e)
        }
        ;
        pe.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Lr = navigator.userAgent.toLowerCase()
          , ga = pe.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , Yv = pe.env.chrome = /chrome/.test(Lr) && /Google/.test(navigator.vendor) && parseInt(Lr.match(/chrome\/(\d+)\./)[1], 10)
          , Qv = pe.env.ios = /(ipod|iphone|ipad)/.test(Lr);
        pe.env.safari = /safari/.test(Lr) && !Yv && !Qv;
        var zn;
        ga && zv.on("touchstart mousedown", function(e) {
            zn = e.target
        });
        pe.validClick = ga ? function(e) {
            return e === zn || ct.contains(e, zn)
        }
        : function() {
            return !0
        }
        ;
        var va = "resize.webflow orientationchange.webflow load.webflow"
          , $v = "scroll.webflow " + va;
        pe.resize = Yn(We, va);
        pe.scroll = Yn(We, $v);
        pe.redraw = Yn();
        function Yn(e, t) {
            var r = []
              , n = {};
            return n.up = Ue.throttle(function(o) {
                Ue.each(r, function(i) {
                    i(o)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(o) {
                typeof o == "function" && (Ue.contains(r, o) || r.push(o))
            }
            ,
            n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Ue.filter(r, function(i) {
                    return i !== o
                })
            }
            ,
            n
        }
        pe.location = function(e) {
            window.location = e
        }
        ;
        pe.env() && (pe.location = function() {}
        );
        pe.ready = function() {
            Pr = !0,
            jn ? Zv() : Ue.each(St, fa),
            Ue.each(Kn, fa),
            pe.resize.up()
        }
        ;
        function fa(e) {
            Qe(e) && e()
        }
        function Zv() {
            jn = !1,
            Ue.each(wt, pa)
        }
        var Et;
        pe.load = function(e) {
            Et.then(e)
        }
        ;
        function Ea() {
            Et && (Et.reject(),
            We.off("load", Et.resolve)),
            Et = new ct.Deferred,
            We.on("load", Et.resolve)
        }
        pe.destroy = function(e) {
            e = e || {},
            jn = !0,
            We.triggerHandler("__wf_destroy"),
            e.domready != null && (Pr = e.domready),
            Ue.each(wt, ha),
            pe.resize.off(),
            pe.scroll.off(),
            pe.redraw.off(),
            St = [],
            Kn = [],
            Et.state() === "pending" && Ea()
        }
        ;
        ct(pe.ready);
        Ea();
        ya.exports = window.Webflow = pe
    }
    );
    var Ia = f( (hF, _a) => {
        "use strict";
        var ma = qe();
        ma.define("brand", _a.exports = function(e) {
            var t = {}, r = document, n = e("html"), o = e("body"), i = ".w-webflow-badge", a = window.location, u = /PhantomJS/i.test(navigator.userAgent), s = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function() {
                var E = n.attr("data-wf-status")
                  , w = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(w) && a.hostname !== w && (E = !0),
                E && !u && (l = l || g(),
                h(),
                setTimeout(h, 500),
                e(r).off(s, m).on(s, m))
            }
            ;
            function m() {
                var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", E ? "display: none !important;" : "")
            }
            function g() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "")
               
            }
            function h() {
                var E = o.children(i)
                  , w = E.length && E.get(0) === l
                  , b = ma.env("editor");
                if (w) {
                    b && E.remove();
                    return
                }
                E.length && E.remove(),
                b || o.append(l)
            }
            return t
        }
        )
    }
    );
    var ba = f( (gF, Ta) => {
        "use strict";
        var Qn = qe();
        Qn.define("edit", Ta.exports = function(e, t, r) {
            if (r = r || {},
            (Qn.env("test") || Qn.env("frame")) && !r.fixture && !Jv())
                return {
                    exit: 1
                };
            var n = {}, o = e(window), i = e(document.documentElement), a = document.location, u = "hashchange", s, l = r.load || h, m = !1;
            try {
                m = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            m ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : o.on(u, g).triggerHandler(u);
            function g() {
                s || /\?edit/.test(a.hash) && l()
            }
            function h() {
                s = !0,
                window.WebflowEditor = !0,
                o.off(u, g),
                P(function(M) {
                    e.ajax({
                        url: A("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: i.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(M)
                    })
                })
            }
            function E(M) {
                return function(D) {
                    if (!D) {
                        console.error("Could not load editor data");
                        return
                    }
                    D.thirdPartyCookiesSupported = M,
                    w(R(D.scriptPath), function() {
                        window.WebflowEditor(D)
                    })
                }
            }
            function w(M, D) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(D, b)
            }
            function b(M, D, N) {
                throw console.error("Could not load editor script: " + D),
                N
            }
            function R(M) {
                return M.indexOf("//") >= 0 ? M : A("" + M)
            }
            function A(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }
            function P(M) {
                var D = window.document.createElement("iframe");
                D.src = "",
                D.style.display = "none",
                D.sandbox = "allow-scripts allow-same-origin";
                var N = function(W) {
                    W.data === "WF_third_party_cookies_unsupported" ? (C(D, N),
                    M(!1)) : W.data === "WF_third_party_cookies_supported" && (C(D, N),
                    M(!0))
                };
                D.onerror = function() {
                    C(D, N),
                    M(!1)
                }
                ,
                window.addEventListener("message", N, !1),
                window.document.body.appendChild(D)
            }
            function C(M, D) {
                window.removeEventListener("message", D, !1),
                M.remove()
            }
            return n
        }
        );
        function Jv() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var wa = f( (vF, Aa) => {
        "use strict";
        var eE = qe();
        eE.define("focus-visible", Aa.exports = function() {
            function e(r) {
                var n = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function u(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList"in C && "contains"in C.classList)
                }
                function s(C) {
                    var M = C.type
                      , D = C.tagName;
                    return !!(D === "INPUT" && a[M] && !C.readOnly || D === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }
                function l(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }
                function m(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }
                function g(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (u(r.activeElement) && l(r.activeElement),
                    n = !0)
                }
                function h() {
                    n = !1
                }
                function E(C) {
                    u(C.target) && (n || s(C.target)) && l(C.target)
                }
                function w(C) {
                    u(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    m(C.target))
                }
                function b() {
                    document.visibilityState === "hidden" && (o && (n = !0),
                    R())
                }
                function R() {
                    document.addEventListener("mousemove", P),
                    document.addEventListener("mousedown", P),
                    document.addEventListener("mouseup", P),
                    document.addEventListener("pointermove", P),
                    document.addEventListener("pointerdown", P),
                    document.addEventListener("pointerup", P),
                    document.addEventListener("touchmove", P),
                    document.addEventListener("touchstart", P),
                    document.addEventListener("touchend", P)
                }
                function A() {
                    document.removeEventListener("mousemove", P),
                    document.removeEventListener("mousedown", P),
                    document.removeEventListener("mouseup", P),
                    document.removeEventListener("pointermove", P),
                    document.removeEventListener("pointerdown", P),
                    document.removeEventListener("pointerup", P),
                    document.removeEventListener("touchmove", P),
                    document.removeEventListener("touchstart", P),
                    document.removeEventListener("touchend", P)
                }
                function P(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1,
                    A())
                }
                document.addEventListener("keydown", g, !0),
                document.addEventListener("mousedown", h, !0),
                document.addEventListener("pointerdown", h, !0),
                document.addEventListener("touchstart", h, !0),
                document.addEventListener("visibilitychange", b, !0),
                R(),
                r.addEventListener("focus", E, !0),
                r.addEventListener("blur", w, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var xa = f( (EF, Oa) => {
        "use strict";
        var Sa = qe();
        Sa.define("focus", Oa.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var u = a.target
                  , s = u.tagName;
                return /^a$/i.test(s) && u.href != null || /^(button|textarea)$/i.test(s) && u.disabled !== !0 || /^input$/i.test(s) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(s) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(s) || /^video$/i.test(s) && u.controls === !0
            }
            function o(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var u = e.pop();
                        u.target.dispatchEvent(new MouseEvent(u.type,u))
                    }
                }
                , 0))
            }
            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Sa.env.safari && (document.addEventListener("mousedown", o, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        }
        )
    }
    );
    var La = f( (yF, Ca) => {
        "use strict";
        var $n = window.jQuery
          , $e = {}
          , Nr = []
          , Ra = ".w-ix"
          , Dr = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                $n(t).triggerHandler($e.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                $n(t).triggerHandler($e.types.OUTRO))
            }
        };
        $e.triggers = {};
        $e.types = {
            INTRO: "w-ix-intro" + Ra,
            OUTRO: "w-ix-outro" + Ra
        };
        $e.init = function() {
            for (var e = Nr.length, t = 0; t < e; t++) {
                var r = Nr[t];
                r[0](0, r[1])
            }
            Nr = [],
            $n.extend($e.triggers, Dr)
        }
        ;
        $e.async = function() {
            for (var e in Dr) {
                var t = Dr[e];
                Dr.hasOwnProperty(e) && ($e.triggers[e] = function(r, n) {
                    Nr.push([t, n])
                }
                )
            }
        }
        ;
        $e.async();
        Ca.exports = $e
    }
    );
    var Fr = f( (mF, Da) => {
        "use strict";
        var Zn = La();
        function Pa(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var tE = window.jQuery
          , Mr = {}
          , Na = ".w-ix"
          , rE = {
            reset: function(e, t) {
                Zn.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Zn.triggers.intro(e, t),
                Pa(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Zn.triggers.outro(e, t),
                Pa(t, "COMPONENT_INACTIVE")
            }
        };
        Mr.triggers = {};
        Mr.types = {
            INTRO: "w-ix-intro" + Na,
            OUTRO: "w-ix-outro" + Na
        };
        tE.extend(Mr.triggers, rE);
        Da.exports = Mr
    }
    );
    var Jn = f( (_F, Ma) => {
        var nE = typeof global == "object" && global && global.Object === Object && global;
        Ma.exports = nE
    }
    );
    var Be = f( (IF, Fa) => {
        var iE = Jn()
          , oE = typeof self == "object" && self && self.Object === Object && self
          , aE = iE || oE || Function("return this")();
        Fa.exports = aE
    }
    );
    var Ot = f( (TF, qa) => {
        var sE = Be()
          , uE = sE.Symbol;
        qa.exports = uE
    }
    );
    var Va = f( (bF, Ga) => {
        var ka = Ot()
          , Xa = Object.prototype
          , cE = Xa.hasOwnProperty
          , lE = Xa.toString
          , tr = ka ? ka.toStringTag : void 0;
        function fE(e) {
            var t = cE.call(e, tr)
              , r = e[tr];
            try {
                e[tr] = void 0;
                var n = !0
            } catch {}
            var o = lE.call(e);
            return n && (t ? e[tr] = r : delete e[tr]),
            o
        }
        Ga.exports = fE
    }
    );
    var Wa = f( (AF, Ua) => {
        var dE = Object.prototype
          , pE = dE.toString;
        function hE(e) {
            return pE.call(e)
        }
        Ua.exports = hE
    }
    );
    var lt = f( (wF, za) => {
        var Ba = Ot()
          , gE = Va()
          , vE = Wa()
          , EE = "[object Null]"
          , yE = "[object Undefined]"
          , Ha = Ba ? Ba.toStringTag : void 0;
        function mE(e) {
            return e == null ? e === void 0 ? yE : EE : Ha && Ha in Object(e) ? gE(e) : vE(e)
        }
        za.exports = mE
    }
    );
    var ei = f( (SF, Ka) => {
        function _E(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Ka.exports = _E
    }
    );
    var ti = f( (OF, ja) => {
        var IE = ei()
          , TE = IE(Object.getPrototypeOf, Object);
        ja.exports = TE
    }
    );
    var it = f( (xF, Ya) => {
        function bE(e) {
            return e != null && typeof e == "object"
        }
        Ya.exports = bE
    }
    );
    var ri = f( (RF, $a) => {
        var AE = lt()
          , wE = ti()
          , SE = it()
          , OE = "[object Object]"
          , xE = Function.prototype
          , RE = Object.prototype
          , Qa = xE.toString
          , CE = RE.hasOwnProperty
          , LE = Qa.call(Object);
        function PE(e) {
            if (!SE(e) || AE(e) != OE)
                return !1;
            var t = wE(e);
            if (t === null)
                return !0;
            var r = CE.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && Qa.call(r) == LE
        }
        $a.exports = PE
    }
    );
    var Za = f(ni => {
        "use strict";
        Object.defineProperty(ni, "__esModule", {
            value: !0
        });
        ni.default = NE;
        function NE(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var Ja = f( (oi, ii) => {
        "use strict";
        Object.defineProperty(oi, "__esModule", {
            value: !0
        });
        var DE = Za()
          , ME = FE(DE);
        function FE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var xt;
        typeof self < "u" ? xt = self : typeof window < "u" ? xt = window : typeof global < "u" ? xt = global : typeof ii < "u" ? xt = ii : xt = Function("return this")();
        var qE = (0,
        ME.default)(xt);
        oi.default = qE
    }
    );
    var ai = f(rr => {
        "use strict";
        rr.__esModule = !0;
        rr.ActionTypes = void 0;
        rr.default = ns;
        var kE = ri()
          , XE = rs(kE)
          , GE = Ja()
          , es = rs(GE);
        function rs(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var ts = rr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function ns(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(ns)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e
              , i = t
              , a = []
              , u = a
              , s = !1;
            function l() {
                u === a && (u = a.slice())
            }
            function m() {
                return i
            }
            function g(b) {
                if (typeof b != "function")
                    throw new Error("Expected listener to be a function.");
                var R = !0;
                return l(),
                u.push(b),
                function() {
                    if (R) {
                        R = !1,
                        l();
                        var P = u.indexOf(b);
                        u.splice(P, 1)
                    }
                }
            }
            function h(b) {
                if (!(0,
                XE.default)(b))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof b.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (s)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    s = !0,
                    i = o(i, b)
                } finally {
                    s = !1
                }
                for (var R = a = u, A = 0; A < R.length; A++)
                    R[A]();
                return b
            }
            function E(b) {
                if (typeof b != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                o = b,
                h({
                    type: ts.INIT
                })
            }
            function w() {
                var b, R = g;
                return b = {
                    subscribe: function(P) {
                        if (typeof P != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function C() {
                            P.next && P.next(m())
                        }
                        C();
                        var M = R(C);
                        return {
                            unsubscribe: M
                        }
                    }
                },
                b[es.default] = function() {
                    return this
                }
                ,
                b
            }
            return h({
                type: ts.INIT
            }),
            n = {
                dispatch: h,
                subscribe: g,
                getState: m,
                replaceReducer: E
            },
            n[es.default] = w,
            n
        }
    }
    );
    var ui = f(si => {
        "use strict";
        si.__esModule = !0;
        si.default = VE;
        function VE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var as = f(ci => {
        "use strict";
        ci.__esModule = !0;
        ci.default = zE;
        var is = ai()
          , UE = ri()
          , NF = os(UE)
          , WE = ui()
          , DF = os(WE);
        function os(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function BE(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function HE(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: is.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: o
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + is.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function zE(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1)
                var a;
            var u;
            try {
                HE(r)
            } catch (s) {
                u = s
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , m = arguments[1];
                if (u)
                    throw u;
                if (!1)
                    var g;
                for (var h = !1, E = {}, w = 0; w < i.length; w++) {
                    var b = i[w]
                      , R = r[b]
                      , A = l[b]
                      , P = R(A, m);
                    if (typeof P > "u") {
                        var C = BE(b, m);
                        throw new Error(C)
                    }
                    E[b] = P,
                    h = h || P !== A
                }
                return h ? E : l
            }
        }
    }
    );
    var us = f(li => {
        "use strict";
        li.__esModule = !0;
        li.default = KE;
        function ss(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function KE(e, t) {
            if (typeof e == "function")
                return ss(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o]
                  , a = e[i];
                typeof a == "function" && (n[i] = ss(a, t))
            }
            return n
        }
    }
    );
    var di = f(fi => {
        "use strict";
        fi.__esModule = !0;
        fi.default = jE;
        function jE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(i) {
                    return i
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var cs = f(pi => {
        "use strict";
        pi.__esModule = !0;
        var YE = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        pi.default = JE;
        var QE = di()
          , $E = ZE(QE);
        function ZE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function JE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var u = n(o, i, a)
                      , s = u.dispatch
                      , l = []
                      , m = {
                        getState: u.getState,
                        dispatch: function(h) {
                            return s(h)
                        }
                    };
                    return l = t.map(function(g) {
                        return g(m)
                    }),
                    s = $E.default.apply(void 0, l)(u.dispatch),
                    YE({}, u, {
                        dispatch: s
                    })
                }
            }
        }
    }
    );
    var hi = f(ke => {
        "use strict";
        ke.__esModule = !0;
        ke.compose = ke.applyMiddleware = ke.bindActionCreators = ke.combineReducers = ke.createStore = void 0;
        var ey = ai()
          , ty = Rt(ey)
          , ry = as()
          , ny = Rt(ry)
          , iy = us()
          , oy = Rt(iy)
          , ay = cs()
          , sy = Rt(ay)
          , uy = di()
          , cy = Rt(uy)
          , ly = ui()
          , XF = Rt(ly);
        function Rt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ke.createStore = ty.default;
        ke.combineReducers = ny.default;
        ke.bindActionCreators = oy.default;
        ke.applyMiddleware = sy.default;
        ke.compose = cy.default
    }
    );
    var He, gi, Ze, fy, dy, qr, py, vi = ve( () => {
        "use strict";
        He = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        gi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Ze = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        fy = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        dy = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        qr = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        py = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Ne, hy, kr = ve( () => {
        "use strict";
        Ne = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        hy = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var gy, ls = ve( () => {
        "use strict";
        gy = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var vy, Ey, yy, my, _y, Iy, Ty, Ei, fs = ve( () => {
        "use strict";
        kr();
        ({TRANSFORM_MOVE: vy, TRANSFORM_SCALE: Ey, TRANSFORM_ROTATE: yy, TRANSFORM_SKEW: my, STYLE_SIZE: _y, STYLE_FILTER: Iy, STYLE_FONT_VARIATION: Ty} = Ne),
        Ei = {
            [vy]: !0,
            [Ey]: !0,
            [yy]: !0,
            [my]: !0,
            [_y]: !0,
            [Iy]: !0,
            [Ty]: !0
        }
    }
    );
    var Te = {};
    Pe(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Xy,
        IX2_ANIMATION_FRAME_CHANGED: () => Ny,
        IX2_CLEAR_REQUESTED: () => Cy,
        IX2_ELEMENT_STATE_CHANGED: () => ky,
        IX2_EVENT_LISTENER_ADDED: () => Ly,
        IX2_EVENT_STATE_CHANGED: () => Py,
        IX2_INSTANCE_ADDED: () => My,
        IX2_INSTANCE_REMOVED: () => qy,
        IX2_INSTANCE_STARTED: () => Fy,
        IX2_MEDIA_QUERIES_DEFINED: () => Vy,
        IX2_PARAMETER_CHANGED: () => Dy,
        IX2_PLAYBACK_REQUESTED: () => xy,
        IX2_PREVIEW_REQUESTED: () => Oy,
        IX2_RAW_DATA_IMPORTED: () => by,
        IX2_SESSION_INITIALIZED: () => Ay,
        IX2_SESSION_STARTED: () => wy,
        IX2_SESSION_STOPPED: () => Sy,
        IX2_STOP_REQUESTED: () => Ry,
        IX2_TEST_FRAME_RENDERED: () => Uy,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Gy
    });
    var by, Ay, wy, Sy, Oy, xy, Ry, Cy, Ly, Py, Ny, Dy, My, Fy, qy, ky, Xy, Gy, Vy, Uy, ds = ve( () => {
        "use strict";
        by = "IX2_RAW_DATA_IMPORTED",
        Ay = "IX2_SESSION_INITIALIZED",
        wy = "IX2_SESSION_STARTED",
        Sy = "IX2_SESSION_STOPPED",
        Oy = "IX2_PREVIEW_REQUESTED",
        xy = "IX2_PLAYBACK_REQUESTED",
        Ry = "IX2_STOP_REQUESTED",
        Cy = "IX2_CLEAR_REQUESTED",
        Ly = "IX2_EVENT_LISTENER_ADDED",
        Py = "IX2_EVENT_STATE_CHANGED",
        Ny = "IX2_ANIMATION_FRAME_CHANGED",
        Dy = "IX2_PARAMETER_CHANGED",
        My = "IX2_INSTANCE_ADDED",
        Fy = "IX2_INSTANCE_STARTED",
        qy = "IX2_INSTANCE_REMOVED",
        ky = "IX2_ELEMENT_STATE_CHANGED",
        Xy = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Gy = "IX2_VIEWPORT_WIDTH_CHANGED",
        Vy = "IX2_MEDIA_QUERIES_DEFINED",
        Uy = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var we = {};
    Pe(we, {
        ABSTRACT_NODE: () => Gm,
        AUTO: () => Rm,
        BACKGROUND: () => bm,
        BACKGROUND_COLOR: () => Tm,
        BAR_DELIMITER: () => Pm,
        BORDER_COLOR: () => Am,
        BOUNDARY_SELECTOR: () => Ky,
        CHILDREN: () => Nm,
        COLON_DELIMITER: () => Lm,
        COLOR: () => wm,
        COMMA_DELIMITER: () => Cm,
        CONFIG_UNIT: () => tm,
        CONFIG_VALUE: () => $y,
        CONFIG_X_UNIT: () => Zy,
        CONFIG_X_VALUE: () => jy,
        CONFIG_Y_UNIT: () => Jy,
        CONFIG_Y_VALUE: () => Yy,
        CONFIG_Z_UNIT: () => em,
        CONFIG_Z_VALUE: () => Qy,
        DISPLAY: () => Sm,
        FILTER: () => ym,
        FLEX: () => Om,
        FONT_VARIATION_SETTINGS: () => mm,
        HEIGHT: () => Im,
        HTML_ELEMENT: () => km,
        IMMEDIATE_CHILDREN: () => Dm,
        IX2_ID_DELIMITER: () => Wy,
        OPACITY: () => Em,
        PARENT: () => Fm,
        PLAIN_OBJECT: () => Xm,
        PRESERVE_3D: () => qm,
        RENDER_GENERAL: () => Um,
        RENDER_PLUGIN: () => Bm,
        RENDER_STYLE: () => Wm,
        RENDER_TRANSFORM: () => Vm,
        ROTATE_X: () => fm,
        ROTATE_Y: () => dm,
        ROTATE_Z: () => pm,
        SCALE_3D: () => lm,
        SCALE_X: () => sm,
        SCALE_Y: () => um,
        SCALE_Z: () => cm,
        SIBLINGS: () => Mm,
        SKEW: () => hm,
        SKEW_X: () => gm,
        SKEW_Y: () => vm,
        TRANSFORM: () => rm,
        TRANSLATE_3D: () => am,
        TRANSLATE_X: () => nm,
        TRANSLATE_Y: () => im,
        TRANSLATE_Z: () => om,
        WF_PAGE: () => By,
        WIDTH: () => _m,
        WILL_CHANGE: () => xm,
        W_MOD_IX: () => zy,
        W_MOD_JS: () => Hy
    });
    var Wy, By, Hy, zy, Ky, jy, Yy, Qy, $y, Zy, Jy, em, tm, rm, nm, im, om, am, sm, um, cm, lm, fm, dm, pm, hm, gm, vm, Em, ym, mm, _m, Im, Tm, bm, Am, wm, Sm, Om, xm, Rm, Cm, Lm, Pm, Nm, Dm, Mm, Fm, qm, km, Xm, Gm, Vm, Um, Wm, Bm, ps = ve( () => {
        "use strict";
        Wy = "|",
        By = "data-wf-page",
        Hy = "w-mod-js",
        zy = "w-mod-ix",
        Ky = ".w-dyn-item",
        jy = "xValue",
        Yy = "yValue",
        Qy = "zValue",
        $y = "value",
        Zy = "xUnit",
        Jy = "yUnit",
        em = "zUnit",
        tm = "unit",
        rm = "transform",
        nm = "translateX",
        im = "translateY",
        om = "translateZ",
        am = "translate3d",
        sm = "scaleX",
        um = "scaleY",
        cm = "scaleZ",
        lm = "scale3d",
        fm = "rotateX",
        dm = "rotateY",
        pm = "rotateZ",
        hm = "skew",
        gm = "skewX",
        vm = "skewY",
        Em = "opacity",
        ym = "filter",
        mm = "font-variation-settings",
        _m = "width",
        Im = "height",
        Tm = "backgroundColor",
        bm = "background",
        Am = "borderColor",
        wm = "color",
        Sm = "display",
        Om = "flex",
        xm = "willChange",
        Rm = "AUTO",
        Cm = ",",
        Lm = ":",
        Pm = "|",
        Nm = "CHILDREN",
        Dm = "IMMEDIATE_CHILDREN",
        Mm = "SIBLINGS",
        Fm = "PARENT",
        qm = "preserve-3d",
        km = "HTML_ELEMENT",
        Xm = "PLAIN_OBJECT",
        Gm = "ABSTRACT_NODE",
        Vm = "RENDER_TRANSFORM",
        Um = "RENDER_GENERAL",
        Wm = "RENDER_STYLE",
        Bm = "RENDER_PLUGIN"
    }
    );
    var hs = {};
    Pe(hs, {
        ActionAppliesTo: () => hy,
        ActionTypeConsts: () => Ne,
        EventAppliesTo: () => gi,
        EventBasedOn: () => Ze,
        EventContinuousMouseAxes: () => fy,
        EventLimitAffectedElements: () => dy,
        EventTypeConsts: () => He,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => we,
        InteractionTypeConsts: () => gy,
        QuickEffectDirectionConsts: () => py,
        QuickEffectIds: () => qr,
        ReducedMotionTypes: () => Ei
    });
    var De = ve( () => {
        "use strict";
        vi();
        kr();
        ls();
        fs();
        ds();
        ps();
        kr();
        vi()
    }
    );
    var Hm, gs, vs = ve( () => {
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: Hm} = Te),
        gs = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case Hm:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Ct = f(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var zm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ye.clone = Gr;
        ye.addLast = ms;
        ye.addFirst = _s;
        ye.removeLast = Is;
        ye.removeFirst = Ts;
        ye.insert = bs;
        ye.removeAt = As;
        ye.replaceAt = ws;
        ye.getIn = Vr;
        ye.set = Ur;
        ye.setIn = Wr;
        ye.update = Os;
        ye.updateIn = xs;
        ye.merge = Rs;
        ye.mergeDeep = Cs;
        ye.mergeIn = Ls;
        ye.omit = Ps;
        ye.addDefaults = Ns;
        var Es = "INVALID_ARGS";
        function ys(e) {
            throw new Error(e)
        }
        function yi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Km = {}.hasOwnProperty;
        function Gr(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = yi(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }
        function Me(e, t, r) {
            var n = r;
            n == null && ys(Es);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), u = 3; u < i; u++)
                a[u - 3] = arguments[u];
            for (var s = 0; s < a.length; s++) {
                var l = a[s];
                if (l != null) {
                    var m = yi(l);
                    if (m.length)
                        for (var g = 0; g <= m.length; g++) {
                            var h = m[g];
                            if (!(e && n[h] !== void 0)) {
                                var E = l[h];
                                t && Xr(n[h]) && Xr(E) && (E = Me(e, t, n[h], E)),
                                !(E === void 0 || E === n[h]) && (o || (o = !0,
                                n = Gr(n)),
                                n[h] = E)
                            }
                        }
                }
            }
            return n
        }
        function Xr(e) {
            var t = typeof e > "u" ? "undefined" : zm(e);
            return e != null && (t === "object" || t === "function")
        }
        function ms(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function _s(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Is(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Ts(e) {
            return e.length ? e.slice(1) : e
        }
        function bs(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function As(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function ws(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++)
                o[i] = e[i];
            return o[t] = r,
            o
        }
        function Vr(e, t) {
            if (!Array.isArray(t) && ys(Es),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r?.[o],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Ur(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , o = e ?? n;
            if (o[t] === r)
                return o;
            var i = Gr(o);
            return i[t] = r,
            i
        }
        function Ss(e, t, r, n) {
            var o = void 0
              , i = t[n];
            if (n === t.length - 1)
                o = r;
            else {
                var a = Xr(e) && Xr(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Ss(a, t, r, n + 1)
            }
            return Ur(e, i, o)
        }
        function Wr(e, t, r) {
            return t.length ? Ss(e, t, r, 0) : r
        }
        function Os(e, t, r) {
            var n = e?.[t]
              , o = r(n);
            return Ur(e, t, o)
        }
        function xs(e, t, r) {
            var n = Vr(e, t)
              , o = r(n);
            return Wr(e, t, o)
        }
        function Rs(e, t, r, n, o, i) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, o, i].concat(u)) : Me(!1, !1, e, t, r, n, o, i)
        }
        function Cs(e, t, r, n, o, i) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, o, i].concat(u)) : Me(!1, !0, e, t, r, n, o, i)
        }
        function Ls(e, t, r, n, o, i, a) {
            var u = Vr(e, t);
            u == null && (u = {});
            for (var s = void 0, l = arguments.length, m = Array(l > 7 ? l - 7 : 0), g = 7; g < l; g++)
                m[g - 7] = arguments[g];
            return m.length ? s = Me.call.apply(Me, [null, !1, !1, u, r, n, o, i, a].concat(m)) : s = Me(!1, !1, u, r, n, o, i, a),
            Wr(e, t, s)
        }
        function Ps(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (Km.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var i = {}, a = yi(e), u = 0; u < a.length; u++) {
                var s = a[u];
                r.indexOf(s) >= 0 || (i[s] = e[s])
            }
            return i
        }
        function Ns(e, t, r, n, o, i) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++)
                u[s - 6] = arguments[s];
            return u.length ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, o, i].concat(u)) : Me(!0, !1, e, t, r, n, o, i)
        }
        var jm = {
            clone: Gr,
            addLast: ms,
            addFirst: _s,
            removeLast: Is,
            removeFirst: Ts,
            insert: bs,
            removeAt: As,
            replaceAt: ws,
            getIn: Vr,
            set: Ur,
            setIn: Wr,
            update: Os,
            updateIn: xs,
            merge: Rs,
            mergeDeep: Cs,
            mergeIn: Ls,
            omit: Ps,
            addDefaults: Ns
        };
        ye.default = jm
    }
    );
    var Ms, Ym, Qm, $m, Zm, Jm, Ds, Fs, qs = ve( () => {
        "use strict";
        De();
        Ms = le(Ct()),
        {IX2_PREVIEW_REQUESTED: Ym, IX2_PLAYBACK_REQUESTED: Qm, IX2_STOP_REQUESTED: $m, IX2_CLEAR_REQUESTED: Zm} = Te,
        Jm = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Ds = Object.create(null, {
            [Ym]: {
                value: "preview"
            },
            [Qm]: {
                value: "playback"
            },
            [$m]: {
                value: "stop"
            },
            [Zm]: {
                value: "clear"
            }
        }),
        Fs = (e=Jm, t) => {
            if (t.type in Ds) {
                let r = [Ds[t.type]];
                return (0,
                Ms.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var xe, e_, t_, r_, n_, i_, o_, a_, s_, u_, c_, ks, l_, Xs, Gs = ve( () => {
        "use strict";
        De();
        xe = le(Ct()),
        {IX2_SESSION_INITIALIZED: e_, IX2_SESSION_STARTED: t_, IX2_TEST_FRAME_RENDERED: r_, IX2_SESSION_STOPPED: n_, IX2_EVENT_LISTENER_ADDED: i_, IX2_EVENT_STATE_CHANGED: o_, IX2_ANIMATION_FRAME_CHANGED: a_, IX2_ACTION_LIST_PLAYBACK_CHANGED: s_, IX2_VIEWPORT_WIDTH_CHANGED: u_, IX2_MEDIA_QUERIES_DEFINED: c_} = Te,
        ks = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        l_ = 20,
        Xs = (e=ks, t) => {
            switch (t.type) {
            case e_:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    xe.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case t_:
                return (0,
                xe.set)(e, "active", !0);
            case r_:
                {
                    let {payload: {step: r=l_}} = t;
                    return (0,
                    xe.set)(e, "tick", e.tick + r)
                }
            case n_:
                return ks;
            case a_:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    xe.set)(e, "tick", r)
                }
            case i_:
                {
                    let r = (0,
                    xe.addLast)(e.eventListeners, t.payload);
                    return (0,
                    xe.set)(e, "eventListeners", r)
                }
            case o_:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    xe.setIn)(e, ["eventState", r], n)
                }
            case s_:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    xe.setIn)(e, ["playbackState", r], n)
                }
            case u_:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , o = n.length
                      , i = null;
                    for (let a = 0; a < o; a++) {
                        let {key: u, min: s, max: l} = n[a];
                        if (r >= s && r <= l) {
                            i = u;
                            break
                        }
                    }
                    return (0,
                    xe.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: i
                    })
                }
            case c_:
                return (0,
                xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Us = f( (o1, Vs) => {
        function f_() {
            this.__data__ = [],
            this.size = 0
        }
        Vs.exports = f_
    }
    );
    var Br = f( (a1, Ws) => {
        function d_(e, t) {
            return e === t || e !== e && t !== t
        }
        Ws.exports = d_
    }
    );
    var nr = f( (s1, Bs) => {
        var p_ = Br();
        function h_(e, t) {
            for (var r = e.length; r--; )
                if (p_(e[r][0], t))
                    return r;
            return -1
        }
        Bs.exports = h_
    }
    );
    var zs = f( (u1, Hs) => {
        var g_ = nr()
          , v_ = Array.prototype
          , E_ = v_.splice;
        function y_(e) {
            var t = this.__data__
              , r = g_(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : E_.call(t, r, 1),
            --this.size,
            !0
        }
        Hs.exports = y_
    }
    );
    var js = f( (c1, Ks) => {
        var m_ = nr();
        function __(e) {
            var t = this.__data__
              , r = m_(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Ks.exports = __
    }
    );
    var Qs = f( (l1, Ys) => {
        var I_ = nr();
        function T_(e) {
            return I_(this.__data__, e) > -1
        }
        Ys.exports = T_
    }
    );
    var Zs = f( (f1, $s) => {
        var b_ = nr();
        function A_(e, t) {
            var r = this.__data__
              , n = b_(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        $s.exports = A_
    }
    );
    var ir = f( (d1, Js) => {
        var w_ = Us()
          , S_ = zs()
          , O_ = js()
          , x_ = Qs()
          , R_ = Zs();
        function Lt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Lt.prototype.clear = w_;
        Lt.prototype.delete = S_;
        Lt.prototype.get = O_;
        Lt.prototype.has = x_;
        Lt.prototype.set = R_;
        Js.exports = Lt
    }
    );
    var tu = f( (p1, eu) => {
        var C_ = ir();
        function L_() {
            this.__data__ = new C_,
            this.size = 0
        }
        eu.exports = L_
    }
    );
    var nu = f( (h1, ru) => {
        function P_(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        ru.exports = P_
    }
    );
    var ou = f( (g1, iu) => {
        function N_(e) {
            return this.__data__.get(e)
        }
        iu.exports = N_
    }
    );
    var su = f( (v1, au) => {
        function D_(e) {
            return this.__data__.has(e)
        }
        au.exports = D_
    }
    );
    var Je = f( (E1, uu) => {
        function M_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        uu.exports = M_
    }
    );
    var mi = f( (y1, cu) => {
        var F_ = lt()
          , q_ = Je()
          , k_ = "[object AsyncFunction]"
          , X_ = "[object Function]"
          , G_ = "[object GeneratorFunction]"
          , V_ = "[object Proxy]";
        function U_(e) {
            if (!q_(e))
                return !1;
            var t = F_(e);
            return t == X_ || t == G_ || t == k_ || t == V_
        }
        cu.exports = U_
    }
    );
    var fu = f( (m1, lu) => {
        var W_ = Be()
          , B_ = W_["__core-js_shared__"];
        lu.exports = B_
    }
    );
    var hu = f( (_1, pu) => {
        var _i = fu()
          , du = function() {
            var e = /[^.]+$/.exec(_i && _i.keys && _i.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function H_(e) {
            return !!du && du in e
        }
        pu.exports = H_
    }
    );
    var Ii = f( (I1, gu) => {
        var z_ = Function.prototype
          , K_ = z_.toString;
        function j_(e) {
            if (e != null) {
                try {
                    return K_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        gu.exports = j_
    }
    );
    var Eu = f( (T1, vu) => {
        var Y_ = mi()
          , Q_ = hu()
          , $_ = Je()
          , Z_ = Ii()
          , J_ = /[\\^$.*+?()[\]{}|]/g
          , eI = /^\[object .+?Constructor\]$/
          , tI = Function.prototype
          , rI = Object.prototype
          , nI = tI.toString
          , iI = rI.hasOwnProperty
          , oI = RegExp("^" + nI.call(iI).replace(J_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function aI(e) {
            if (!$_(e) || Q_(e))
                return !1;
            var t = Y_(e) ? oI : eI;
            return t.test(Z_(e))
        }
        vu.exports = aI
    }
    );
    var mu = f( (b1, yu) => {
        function sI(e, t) {
            return e?.[t]
        }
        yu.exports = sI
    }
    );
    var ft = f( (A1, _u) => {
        var uI = Eu()
          , cI = mu();
        function lI(e, t) {
            var r = cI(e, t);
            return uI(r) ? r : void 0
        }
        _u.exports = lI
    }
    );
    var Hr = f( (w1, Iu) => {
        var fI = ft()
          , dI = Be()
          , pI = fI(dI, "Map");
        Iu.exports = pI
    }
    );
    var or = f( (S1, Tu) => {
        var hI = ft()
          , gI = hI(Object, "create");
        Tu.exports = gI
    }
    );
    var wu = f( (O1, Au) => {
        var bu = or();
        function vI() {
            this.__data__ = bu ? bu(null) : {},
            this.size = 0
        }
        Au.exports = vI
    }
    );
    var Ou = f( (x1, Su) => {
        function EI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Su.exports = EI
    }
    );
    var Ru = f( (R1, xu) => {
        var yI = or()
          , mI = "__lodash_hash_undefined__"
          , _I = Object.prototype
          , II = _I.hasOwnProperty;
        function TI(e) {
            var t = this.__data__;
            if (yI) {
                var r = t[e];
                return r === mI ? void 0 : r
            }
            return II.call(t, e) ? t[e] : void 0
        }
        xu.exports = TI
    }
    );
    var Lu = f( (C1, Cu) => {
        var bI = or()
          , AI = Object.prototype
          , wI = AI.hasOwnProperty;
        function SI(e) {
            var t = this.__data__;
            return bI ? t[e] !== void 0 : wI.call(t, e)
        }
        Cu.exports = SI
    }
    );
    var Nu = f( (L1, Pu) => {
        var OI = or()
          , xI = "__lodash_hash_undefined__";
        function RI(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = OI && t === void 0 ? xI : t,
            this
        }
        Pu.exports = RI
    }
    );
    var Mu = f( (P1, Du) => {
        var CI = wu()
          , LI = Ou()
          , PI = Ru()
          , NI = Lu()
          , DI = Nu();
        function Pt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Pt.prototype.clear = CI;
        Pt.prototype.delete = LI;
        Pt.prototype.get = PI;
        Pt.prototype.has = NI;
        Pt.prototype.set = DI;
        Du.exports = Pt
    }
    );
    var ku = f( (N1, qu) => {
        var Fu = Mu()
          , MI = ir()
          , FI = Hr();
        function qI() {
            this.size = 0,
            this.__data__ = {
                hash: new Fu,
                map: new (FI || MI),
                string: new Fu
            }
        }
        qu.exports = qI
    }
    );
    var Gu = f( (D1, Xu) => {
        function kI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Xu.exports = kI
    }
    );
    var ar = f( (M1, Vu) => {
        var XI = Gu();
        function GI(e, t) {
            var r = e.__data__;
            return XI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Vu.exports = GI
    }
    );
    var Wu = f( (F1, Uu) => {
        var VI = ar();
        function UI(e) {
            var t = VI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Uu.exports = UI
    }
    );
    var Hu = f( (q1, Bu) => {
        var WI = ar();
        function BI(e) {
            return WI(this, e).get(e)
        }
        Bu.exports = BI
    }
    );
    var Ku = f( (k1, zu) => {
        var HI = ar();
        function zI(e) {
            return HI(this, e).has(e)
        }
        zu.exports = zI
    }
    );
    var Yu = f( (X1, ju) => {
        var KI = ar();
        function jI(e, t) {
            var r = KI(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        ju.exports = jI
    }
    );
    var zr = f( (G1, Qu) => {
        var YI = ku()
          , QI = Wu()
          , $I = Hu()
          , ZI = Ku()
          , JI = Yu();
        function Nt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Nt.prototype.clear = YI;
        Nt.prototype.delete = QI;
        Nt.prototype.get = $I;
        Nt.prototype.has = ZI;
        Nt.prototype.set = JI;
        Qu.exports = Nt
    }
    );
    var Zu = f( (V1, $u) => {
        var eT = ir()
          , tT = Hr()
          , rT = zr()
          , nT = 200;
        function iT(e, t) {
            var r = this.__data__;
            if (r instanceof eT) {
                var n = r.__data__;
                if (!tT || n.length < nT - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new rT(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        $u.exports = iT
    }
    );
    var Ti = f( (U1, Ju) => {
        var oT = ir()
          , aT = tu()
          , sT = nu()
          , uT = ou()
          , cT = su()
          , lT = Zu();
        function Dt(e) {
            var t = this.__data__ = new oT(e);
            this.size = t.size
        }
        Dt.prototype.clear = aT;
        Dt.prototype.delete = sT;
        Dt.prototype.get = uT;
        Dt.prototype.has = cT;
        Dt.prototype.set = lT;
        Ju.exports = Dt
    }
    );
    var tc = f( (W1, ec) => {
        var fT = "__lodash_hash_undefined__";
        function dT(e) {
            return this.__data__.set(e, fT),
            this
        }
        ec.exports = dT
    }
    );
    var nc = f( (B1, rc) => {
        function pT(e) {
            return this.__data__.has(e)
        }
        rc.exports = pT
    }
    );
    var oc = f( (H1, ic) => {
        var hT = zr()
          , gT = tc()
          , vT = nc();
        function Kr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new hT; ++t < r; )
                this.add(e[t])
        }
        Kr.prototype.add = Kr.prototype.push = gT;
        Kr.prototype.has = vT;
        ic.exports = Kr
    }
    );
    var sc = f( (z1, ac) => {
        function ET(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        ac.exports = ET
    }
    );
    var cc = f( (K1, uc) => {
        function yT(e, t) {
            return e.has(t)
        }
        uc.exports = yT
    }
    );
    var bi = f( (j1, lc) => {
        var mT = oc()
          , _T = sc()
          , IT = cc()
          , TT = 1
          , bT = 2;
        function AT(e, t, r, n, o, i) {
            var a = r & TT
              , u = e.length
              , s = t.length;
            if (u != s && !(a && s > u))
                return !1;
            var l = i.get(e)
              , m = i.get(t);
            if (l && m)
                return l == t && m == e;
            var g = -1
              , h = !0
              , E = r & bT ? new mT : void 0;
            for (i.set(e, t),
            i.set(t, e); ++g < u; ) {
                var w = e[g]
                  , b = t[g];
                if (n)
                    var R = a ? n(b, w, g, t, e, i) : n(w, b, g, e, t, i);
                if (R !== void 0) {
                    if (R)
                        continue;
                    h = !1;
                    break
                }
                if (E) {
                    if (!_T(t, function(A, P) {
                        if (!IT(E, P) && (w === A || o(w, A, r, n, i)))
                            return E.push(P)
                    })) {
                        h = !1;
                        break
                    }
                } else if (!(w === b || o(w, b, r, n, i))) {
                    h = !1;
                    break
                }
            }
            return i.delete(e),
            i.delete(t),
            h
        }
        lc.exports = AT
    }
    );
    var dc = f( (Y1, fc) => {
        var wT = Be()
          , ST = wT.Uint8Array;
        fc.exports = ST
    }
    );
    var hc = f( (Q1, pc) => {
        function OT(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }),
            r
        }
        pc.exports = OT
    }
    );
    var vc = f( ($1, gc) => {
        function xT(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        gc.exports = xT
    }
    );
    var Ic = f( (Z1, _c) => {
        var Ec = Ot()
          , yc = dc()
          , RT = Br()
          , CT = bi()
          , LT = hc()
          , PT = vc()
          , NT = 1
          , DT = 2
          , MT = "[object Boolean]"
          , FT = "[object Date]"
          , qT = "[object Error]"
          , kT = "[object Map]"
          , XT = "[object Number]"
          , GT = "[object RegExp]"
          , VT = "[object Set]"
          , UT = "[object String]"
          , WT = "[object Symbol]"
          , BT = "[object ArrayBuffer]"
          , HT = "[object DataView]"
          , mc = Ec ? Ec.prototype : void 0
          , Ai = mc ? mc.valueOf : void 0;
        function zT(e, t, r, n, o, i, a) {
            switch (r) {
            case HT:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case BT:
                return !(e.byteLength != t.byteLength || !i(new yc(e), new yc(t)));
            case MT:
            case FT:
            case XT:
                return RT(+e, +t);
            case qT:
                return e.name == t.name && e.message == t.message;
            case GT:
            case UT:
                return e == t + "";
            case kT:
                var u = LT;
            case VT:
                var s = n & NT;
                if (u || (u = PT),
                e.size != t.size && !s)
                    return !1;
                var l = a.get(e);
                if (l)
                    return l == t;
                n |= DT,
                a.set(e, t);
                var m = CT(u(e), u(t), n, o, i, a);
                return a.delete(e),
                m;
            case WT:
                if (Ai)
                    return Ai.call(e) == Ai.call(t)
            }
            return !1
        }
        _c.exports = zT
    }
    );
    var jr = f( (J1, Tc) => {
        function KT(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; )
                e[o + r] = t[r];
            return e
        }
        Tc.exports = KT
    }
    );
    var be = f( (e2, bc) => {
        var jT = Array.isArray;
        bc.exports = jT
    }
    );
    var wi = f( (t2, Ac) => {
        var YT = jr()
          , QT = be();
        function $T(e, t, r) {
            var n = t(e);
            return QT(e) ? n : YT(n, r(e))
        }
        Ac.exports = $T
    }
    );
    var Sc = f( (r2, wc) => {
        function ZT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        wc.exports = ZT
    }
    );
    var Si = f( (n2, Oc) => {
        function JT() {
            return []
        }
        Oc.exports = JT
    }
    );
    var Oi = f( (i2, Rc) => {
        var eb = Sc()
          , tb = Si()
          , rb = Object.prototype
          , nb = rb.propertyIsEnumerable
          , xc = Object.getOwnPropertySymbols
          , ib = xc ? function(e) {
            return e == null ? [] : (e = Object(e),
            eb(xc(e), function(t) {
                return nb.call(e, t)
            }))
        }
        : tb;
        Rc.exports = ib
    }
    );
    var Lc = f( (o2, Cc) => {
        function ob(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Cc.exports = ob
    }
    );
    var Nc = f( (a2, Pc) => {
        var ab = lt()
          , sb = it()
          , ub = "[object Arguments]";
        function cb(e) {
            return sb(e) && ab(e) == ub
        }
        Pc.exports = cb
    }
    );
    var sr = f( (s2, Fc) => {
        var Dc = Nc()
          , lb = it()
          , Mc = Object.prototype
          , fb = Mc.hasOwnProperty
          , db = Mc.propertyIsEnumerable
          , pb = Dc(function() {
            return arguments
        }()) ? Dc : function(e) {
            return lb(e) && fb.call(e, "callee") && !db.call(e, "callee")
        }
        ;
        Fc.exports = pb
    }
    );
    var kc = f( (u2, qc) => {
        function hb() {
            return !1
        }
        qc.exports = hb
    }
    );
    var Yr = f( (ur, Mt) => {
        var gb = Be()
          , vb = kc()
          , Vc = typeof ur == "object" && ur && !ur.nodeType && ur
          , Xc = Vc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt
          , Eb = Xc && Xc.exports === Vc
          , Gc = Eb ? gb.Buffer : void 0
          , yb = Gc ? Gc.isBuffer : void 0
          , mb = yb || vb;
        Mt.exports = mb
    }
    );
    var Qr = f( (c2, Uc) => {
        var _b = 9007199254740991
          , Ib = /^(?:0|[1-9]\d*)$/;
        function Tb(e, t) {
            var r = typeof e;
            return t = t ?? _b,
            !!t && (r == "number" || r != "symbol" && Ib.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Uc.exports = Tb
    }
    );
    var $r = f( (l2, Wc) => {
        var bb = 9007199254740991;
        function Ab(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bb
        }
        Wc.exports = Ab
    }
    );
    var Hc = f( (f2, Bc) => {
        var wb = lt()
          , Sb = $r()
          , Ob = it()
          , xb = "[object Arguments]"
          , Rb = "[object Array]"
          , Cb = "[object Boolean]"
          , Lb = "[object Date]"
          , Pb = "[object Error]"
          , Nb = "[object Function]"
          , Db = "[object Map]"
          , Mb = "[object Number]"
          , Fb = "[object Object]"
          , qb = "[object RegExp]"
          , kb = "[object Set]"
          , Xb = "[object String]"
          , Gb = "[object WeakMap]"
          , Vb = "[object ArrayBuffer]"
          , Ub = "[object DataView]"
          , Wb = "[object Float32Array]"
          , Bb = "[object Float64Array]"
          , Hb = "[object Int8Array]"
          , zb = "[object Int16Array]"
          , Kb = "[object Int32Array]"
          , jb = "[object Uint8Array]"
          , Yb = "[object Uint8ClampedArray]"
          , Qb = "[object Uint16Array]"
          , $b = "[object Uint32Array]"
          , ge = {};
        ge[Wb] = ge[Bb] = ge[Hb] = ge[zb] = ge[Kb] = ge[jb] = ge[Yb] = ge[Qb] = ge[$b] = !0;
        ge[xb] = ge[Rb] = ge[Vb] = ge[Cb] = ge[Ub] = ge[Lb] = ge[Pb] = ge[Nb] = ge[Db] = ge[Mb] = ge[Fb] = ge[qb] = ge[kb] = ge[Xb] = ge[Gb] = !1;
        function Zb(e) {
            return Ob(e) && Sb(e.length) && !!ge[wb(e)]
        }
        Bc.exports = Zb
    }
    );
    var Kc = f( (d2, zc) => {
        function Jb(e) {
            return function(t) {
                return e(t)
            }
        }
        zc.exports = Jb
    }
    );
    var Yc = f( (cr, Ft) => {
        var eA = Jn()
          , jc = typeof cr == "object" && cr && !cr.nodeType && cr
          , lr = jc && typeof Ft == "object" && Ft && !Ft.nodeType && Ft
          , tA = lr && lr.exports === jc
          , xi = tA && eA.process
          , rA = function() {
            try {
                var e = lr && lr.require && lr.require("util").types;
                return e || xi && xi.binding && xi.binding("util")
            } catch {}
        }();
        Ft.exports = rA
    }
    );
    var Zr = f( (p2, Zc) => {
        var nA = Hc()
          , iA = Kc()
          , Qc = Yc()
          , $c = Qc && Qc.isTypedArray
          , oA = $c ? iA($c) : nA;
        Zc.exports = oA
    }
    );
    var Ri = f( (h2, Jc) => {
        var aA = Lc()
          , sA = sr()
          , uA = be()
          , cA = Yr()
          , lA = Qr()
          , fA = Zr()
          , dA = Object.prototype
          , pA = dA.hasOwnProperty;
        function hA(e, t) {
            var r = uA(e)
              , n = !r && sA(e)
              , o = !r && !n && cA(e)
              , i = !r && !n && !o && fA(e)
              , a = r || n || o || i
              , u = a ? aA(e.length, String) : []
              , s = u.length;
            for (var l in e)
                (t || pA.call(e, l)) && !(a && (l == "length" || o && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || lA(l, s))) && u.push(l);
            return u
        }
        Jc.exports = hA
    }
    );
    var Jr = f( (g2, el) => {
        var gA = Object.prototype;
        function vA(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || gA;
            return e === r
        }
        el.exports = vA
    }
    );
    var rl = f( (v2, tl) => {
        var EA = ei()
          , yA = EA(Object.keys, Object);
        tl.exports = yA
    }
    );
    var en = f( (E2, nl) => {
        var mA = Jr()
          , _A = rl()
          , IA = Object.prototype
          , TA = IA.hasOwnProperty;
        function bA(e) {
            if (!mA(e))
                return _A(e);
            var t = [];
            for (var r in Object(e))
                TA.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        nl.exports = bA
    }
    );
    var yt = f( (y2, il) => {
        var AA = mi()
          , wA = $r();
        function SA(e) {
            return e != null && wA(e.length) && !AA(e)
        }
        il.exports = SA
    }
    );
    var fr = f( (m2, ol) => {
        var OA = Ri()
          , xA = en()
          , RA = yt();
        function CA(e) {
            return RA(e) ? OA(e) : xA(e)
        }
        ol.exports = CA
    }
    );
    var sl = f( (_2, al) => {
        var LA = wi()
          , PA = Oi()
          , NA = fr();
        function DA(e) {
            return LA(e, NA, PA)
        }
        al.exports = DA
    }
    );
    var ll = f( (I2, cl) => {
        var ul = sl()
          , MA = 1
          , FA = Object.prototype
          , qA = FA.hasOwnProperty;
        function kA(e, t, r, n, o, i) {
            var a = r & MA
              , u = ul(e)
              , s = u.length
              , l = ul(t)
              , m = l.length;
            if (s != m && !a)
                return !1;
            for (var g = s; g--; ) {
                var h = u[g];
                if (!(a ? h in t : qA.call(t, h)))
                    return !1
            }
            var E = i.get(e)
              , w = i.get(t);
            if (E && w)
                return E == t && w == e;
            var b = !0;
            i.set(e, t),
            i.set(t, e);
            for (var R = a; ++g < s; ) {
                h = u[g];
                var A = e[h]
                  , P = t[h];
                if (n)
                    var C = a ? n(P, A, h, t, e, i) : n(A, P, h, e, t, i);
                if (!(C === void 0 ? A === P || o(A, P, r, n, i) : C)) {
                    b = !1;
                    break
                }
                R || (R = h == "constructor")
            }
            if (b && !R) {
                var M = e.constructor
                  , D = t.constructor;
                M != D && "constructor"in e && "constructor"in t && !(typeof M == "function" && M instanceof M && typeof D == "function" && D instanceof D) && (b = !1)
            }
            return i.delete(e),
            i.delete(t),
            b
        }
        cl.exports = kA
    }
    );
    var dl = f( (T2, fl) => {
        var XA = ft()
          , GA = Be()
          , VA = XA(GA, "DataView");
        fl.exports = VA
    }
    );
    var hl = f( (b2, pl) => {
        var UA = ft()
          , WA = Be()
          , BA = UA(WA, "Promise");
        pl.exports = BA
    }
    );
    var vl = f( (A2, gl) => {
        var HA = ft()
          , zA = Be()
          , KA = HA(zA, "Set");
        gl.exports = KA
    }
    );
    var Ci = f( (w2, El) => {
        var jA = ft()
          , YA = Be()
          , QA = jA(YA, "WeakMap");
        El.exports = QA
    }
    );
    var tn = f( (S2, Al) => {
        var Li = dl()
          , Pi = Hr()
          , Ni = hl()
          , Di = vl()
          , Mi = Ci()
          , bl = lt()
          , qt = Ii()
          , yl = "[object Map]"
          , $A = "[object Object]"
          , ml = "[object Promise]"
          , _l = "[object Set]"
          , Il = "[object WeakMap]"
          , Tl = "[object DataView]"
          , ZA = qt(Li)
          , JA = qt(Pi)
          , e0 = qt(Ni)
          , t0 = qt(Di)
          , r0 = qt(Mi)
          , mt = bl;
        (Li && mt(new Li(new ArrayBuffer(1))) != Tl || Pi && mt(new Pi) != yl || Ni && mt(Ni.resolve()) != ml || Di && mt(new Di) != _l || Mi && mt(new Mi) != Il) && (mt = function(e) {
            var t = bl(e)
              , r = t == $A ? e.constructor : void 0
              , n = r ? qt(r) : "";
            if (n)
                switch (n) {
                case ZA:
                    return Tl;
                case JA:
                    return yl;
                case e0:
                    return ml;
                case t0:
                    return _l;
                case r0:
                    return Il
                }
            return t
        }
        );
        Al.exports = mt
    }
    );
    var Pl = f( (O2, Ll) => {
        var Fi = Ti()
          , n0 = bi()
          , i0 = Ic()
          , o0 = ll()
          , wl = tn()
          , Sl = be()
          , Ol = Yr()
          , a0 = Zr()
          , s0 = 1
          , xl = "[object Arguments]"
          , Rl = "[object Array]"
          , rn = "[object Object]"
          , u0 = Object.prototype
          , Cl = u0.hasOwnProperty;
        function c0(e, t, r, n, o, i) {
            var a = Sl(e)
              , u = Sl(t)
              , s = a ? Rl : wl(e)
              , l = u ? Rl : wl(t);
            s = s == xl ? rn : s,
            l = l == xl ? rn : l;
            var m = s == rn
              , g = l == rn
              , h = s == l;
            if (h && Ol(e)) {
                if (!Ol(t))
                    return !1;
                a = !0,
                m = !1
            }
            if (h && !m)
                return i || (i = new Fi),
                a || a0(e) ? n0(e, t, r, n, o, i) : i0(e, t, s, r, n, o, i);
            if (!(r & s0)) {
                var E = m && Cl.call(e, "__wrapped__")
                  , w = g && Cl.call(t, "__wrapped__");
                if (E || w) {
                    var b = E ? e.value() : e
                      , R = w ? t.value() : t;
                    return i || (i = new Fi),
                    o(b, R, r, n, i)
                }
            }
            return h ? (i || (i = new Fi),
            o0(e, t, r, n, o, i)) : !1
        }
        Ll.exports = c0
    }
    );
    var qi = f( (x2, Ml) => {
        var l0 = Pl()
          , Nl = it();
        function Dl(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Nl(e) && !Nl(t) ? e !== e && t !== t : l0(e, t, r, n, Dl, o)
        }
        Ml.exports = Dl
    }
    );
    var ql = f( (R2, Fl) => {
        var f0 = Ti()
          , d0 = qi()
          , p0 = 1
          , h0 = 2;
        function g0(e, t, r, n) {
            var o = r.length
              , i = o
              , a = !n;
            if (e == null)
                return !i;
            for (e = Object(e); o--; ) {
                var u = r[o];
                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0]in e))
                    return !1
            }
            for (; ++o < i; ) {
                u = r[o];
                var s = u[0]
                  , l = e[s]
                  , m = u[1];
                if (a && u[2]) {
                    if (l === void 0 && !(s in e))
                        return !1
                } else {
                    var g = new f0;
                    if (n)
                        var h = n(l, m, s, e, t, g);
                    if (!(h === void 0 ? d0(m, l, p0 | h0, n, g) : h))
                        return !1
                }
            }
            return !0
        }
        Fl.exports = g0
    }
    );
    var ki = f( (C2, kl) => {
        var v0 = Je();
        function E0(e) {
            return e === e && !v0(e)
        }
        kl.exports = E0
    }
    );
    var Gl = f( (L2, Xl) => {
        var y0 = ki()
          , m0 = fr();
        function _0(e) {
            for (var t = m0(e), r = t.length; r--; ) {
                var n = t[r]
                  , o = e[n];
                t[r] = [n, o, y0(o)]
            }
            return t
        }
        Xl.exports = _0
    }
    );
    var Xi = f( (P2, Vl) => {
        function I0(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Vl.exports = I0
    }
    );
    var Wl = f( (N2, Ul) => {
        var T0 = ql()
          , b0 = Gl()
          , A0 = Xi();
        function w0(e) {
            var t = b0(e);
            return t.length == 1 && t[0][2] ? A0(t[0][0], t[0][1]) : function(r) {
                return r === e || T0(r, e, t)
            }
        }
        Ul.exports = w0
    }
    );
    var dr = f( (D2, Bl) => {
        var S0 = lt()
          , O0 = it()
          , x0 = "[object Symbol]";
        function R0(e) {
            return typeof e == "symbol" || O0(e) && S0(e) == x0
        }
        Bl.exports = R0
    }
    );
    var nn = f( (M2, Hl) => {
        var C0 = be()
          , L0 = dr()
          , P0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , N0 = /^\w*$/;
        function D0(e, t) {
            if (C0(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || L0(e) ? !0 : N0.test(e) || !P0.test(e) || t != null && e in Object(t)
        }
        Hl.exports = D0
    }
    );
    var jl = f( (F2, Kl) => {
        var zl = zr()
          , M0 = "Expected a function";
        function Gi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(M0);
            var r = function() {
                var n = arguments
                  , o = t ? t.apply(this, n) : n[0]
                  , i = r.cache;
                if (i.has(o))
                    return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i,
                a
            };
            return r.cache = new (Gi.Cache || zl),
            r
        }
        Gi.Cache = zl;
        Kl.exports = Gi
    }
    );
    var Ql = f( (q2, Yl) => {
        var F0 = jl()
          , q0 = 500;
        function k0(e) {
            var t = F0(e, function(n) {
                return r.size === q0 && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        Yl.exports = k0
    }
    );
    var Zl = f( (k2, $l) => {
        var X0 = Ql()
          , G0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , V0 = /\\(\\)?/g
          , U0 = X0(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(G0, function(r, n, o, i) {
                t.push(o ? i.replace(V0, "$1") : n || r)
            }),
            t
        });
        $l.exports = U0
    }
    );
    var Vi = f( (X2, Jl) => {
        function W0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
                o[r] = t(e[r], r, e);
            return o
        }
        Jl.exports = W0
    }
    );
    var af = f( (G2, of) => {
        var ef = Ot()
          , B0 = Vi()
          , H0 = be()
          , z0 = dr()
          , K0 = 1 / 0
          , tf = ef ? ef.prototype : void 0
          , rf = tf ? tf.toString : void 0;
        function nf(e) {
            if (typeof e == "string")
                return e;
            if (H0(e))
                return B0(e, nf) + "";
            if (z0(e))
                return rf ? rf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -K0 ? "-0" : t
        }
        of.exports = nf
    }
    );
    var uf = f( (V2, sf) => {
        var j0 = af();
        function Y0(e) {
            return e == null ? "" : j0(e)
        }
        sf.exports = Y0
    }
    );
    var pr = f( (U2, cf) => {
        var Q0 = be()
          , $0 = nn()
          , Z0 = Zl()
          , J0 = uf();
        function ew(e, t) {
            return Q0(e) ? e : $0(e, t) ? [e] : Z0(J0(e))
        }
        cf.exports = ew
    }
    );
    var kt = f( (W2, lf) => {
        var tw = dr()
          , rw = 1 / 0;
        function nw(e) {
            if (typeof e == "string" || tw(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -rw ? "-0" : t
        }
        lf.exports = nw
    }
    );
    var on = f( (B2, ff) => {
        var iw = pr()
          , ow = kt();
        function aw(e, t) {
            t = iw(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[ow(t[r++])];
            return r && r == n ? e : void 0
        }
        ff.exports = aw
    }
    );
    var an = f( (H2, df) => {
        var sw = on();
        function uw(e, t, r) {
            var n = e == null ? void 0 : sw(e, t);
            return n === void 0 ? r : n
        }
        df.exports = uw
    }
    );
    var hf = f( (z2, pf) => {
        function cw(e, t) {
            return e != null && t in Object(e)
        }
        pf.exports = cw
    }
    );
    var vf = f( (K2, gf) => {
        var lw = pr()
          , fw = sr()
          , dw = be()
          , pw = Qr()
          , hw = $r()
          , gw = kt();
        function vw(e, t, r) {
            t = lw(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var a = gw(t[n]);
                if (!(i = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length,
            !!o && hw(o) && pw(a, o) && (dw(e) || fw(e)))
        }
        gf.exports = vw
    }
    );
    var yf = f( (j2, Ef) => {
        var Ew = hf()
          , yw = vf();
        function mw(e, t) {
            return e != null && yw(e, t, Ew)
        }
        Ef.exports = mw
    }
    );
    var _f = f( (Y2, mf) => {
        var _w = qi()
          , Iw = an()
          , Tw = yf()
          , bw = nn()
          , Aw = ki()
          , ww = Xi()
          , Sw = kt()
          , Ow = 1
          , xw = 2;
        function Rw(e, t) {
            return bw(e) && Aw(t) ? ww(Sw(e), t) : function(r) {
                var n = Iw(r, e);
                return n === void 0 && n === t ? Tw(r, e) : _w(t, n, Ow | xw)
            }
        }
        mf.exports = Rw
    }
    );
    var sn = f( (Q2, If) => {
        function Cw(e) {
            return e
        }
        If.exports = Cw
    }
    );
    var Ui = f( ($2, Tf) => {
        function Lw(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Tf.exports = Lw
    }
    );
    var Af = f( (Z2, bf) => {
        var Pw = on();
        function Nw(e) {
            return function(t) {
                return Pw(t, e)
            }
        }
        bf.exports = Nw
    }
    );
    var Sf = f( (J2, wf) => {
        var Dw = Ui()
          , Mw = Af()
          , Fw = nn()
          , qw = kt();
        function kw(e) {
            return Fw(e) ? Dw(qw(e)) : Mw(e)
        }
        wf.exports = kw
    }
    );
    var dt = f( (eq, Of) => {
        var Xw = Wl()
          , Gw = _f()
          , Vw = sn()
          , Uw = be()
          , Ww = Sf();
        function Bw(e) {
            return typeof e == "function" ? e : e == null ? Vw : typeof e == "object" ? Uw(e) ? Gw(e[0], e[1]) : Xw(e) : Ww(e)
        }
        Of.exports = Bw
    }
    );
    var Wi = f( (tq, xf) => {
        var Hw = dt()
          , zw = yt()
          , Kw = fr();
        function jw(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!zw(t)) {
                    var i = Hw(r, 3);
                    t = Kw(t),
                    r = function(u) {
                        return i(o[u], u, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        xf.exports = jw
    }
    );
    var Bi = f( (rq, Rf) => {
        function Yw(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }
        Rf.exports = Yw
    }
    );
    var Lf = f( (nq, Cf) => {
        var Qw = /\s/;
        function $w(e) {
            for (var t = e.length; t-- && Qw.test(e.charAt(t)); )
                ;
            return t
        }
        Cf.exports = $w
    }
    );
    var Nf = f( (iq, Pf) => {
        var Zw = Lf()
          , Jw = /^\s+/;
        function eS(e) {
            return e && e.slice(0, Zw(e) + 1).replace(Jw, "")
        }
        Pf.exports = eS
    }
    );
    var un = f( (oq, Ff) => {
        var tS = Nf()
          , Df = Je()
          , rS = dr()
          , Mf = 0 / 0
          , nS = /^[-+]0x[0-9a-f]+$/i
          , iS = /^0b[01]+$/i
          , oS = /^0o[0-7]+$/i
          , aS = parseInt;
        function sS(e) {
            if (typeof e == "number")
                return e;
            if (rS(e))
                return Mf;
            if (Df(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Df(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = tS(e);
            var r = iS.test(e);
            return r || oS.test(e) ? aS(e.slice(2), r ? 2 : 8) : nS.test(e) ? Mf : +e
        }
        Ff.exports = sS
    }
    );
    var Xf = f( (aq, kf) => {
        var uS = un()
          , qf = 1 / 0
          , cS = 17976931348623157e292;
        function lS(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = uS(e),
            e === qf || e === -qf) {
                var t = e < 0 ? -1 : 1;
                return t * cS
            }
            return e === e ? e : 0
        }
        kf.exports = lS
    }
    );
    var Hi = f( (sq, Gf) => {
        var fS = Xf();
        function dS(e) {
            var t = fS(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Gf.exports = dS
    }
    );
    var Uf = f( (uq, Vf) => {
        var pS = Bi()
          , hS = dt()
          , gS = Hi()
          , vS = Math.max;
        function ES(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = r == null ? 0 : gS(r);
            return o < 0 && (o = vS(n + o, 0)),
            pS(e, hS(t, 3), o)
        }
        Vf.exports = ES
    }
    );
    var zi = f( (cq, Wf) => {
        var yS = Wi()
          , mS = Uf()
          , _S = yS(mS);
        Wf.exports = _S
    }
    );
    var zf = {};
    Pe(zf, {
        ELEMENT_MATCHES: () => IS,
        FLEX_PREFIXED: () => Ki,
        IS_BROWSER_ENV: () => ze,
        TRANSFORM_PREFIXED: () => pt,
        TRANSFORM_STYLE_PREFIXED: () => ln,
        withBrowser: () => cn
    });
    var Hf, ze, cn, IS, Ki, pt, Bf, ln, fn = ve( () => {
        "use strict";
        Hf = le(zi()),
        ze = typeof window < "u",
        cn = (e, t) => ze ? e() : t,
        IS = cn( () => (0,
        Hf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        Ki = cn( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i,
                    e.style.display === i)
                        return i
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        pt = cn( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0)
                        return i
                }
            }
            return "transform"
        }
        , "transform"),
        Bf = pt.split("transform")[0],
        ln = Bf ? Bf + "TransformStyle" : "transformStyle"
    }
    );
    var ji = f( (lq, $f) => {
        var TS = 4
          , bS = .001
          , AS = 1e-7
          , wS = 10
          , hr = 11
          , dn = 1 / (hr - 1)
          , SS = typeof Float32Array == "function";
        function Kf(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function jf(e, t) {
            return 3 * t - 6 * e
        }
        function Yf(e) {
            return 3 * e
        }
        function pn(e, t, r) {
            return ((Kf(t, r) * e + jf(t, r)) * e + Yf(t)) * e
        }
        function Qf(e, t, r) {
            return 3 * Kf(t, r) * e * e + 2 * jf(t, r) * e + Yf(t)
        }
        function OS(e, t, r, n, o) {
            var i, a, u = 0;
            do
                a = t + (r - t) / 2,
                i = pn(a, n, o) - e,
                i > 0 ? r = a : t = a;
            while (Math.abs(i) > AS && ++u < wS);
            return a
        }
        function xS(e, t, r, n) {
            for (var o = 0; o < TS; ++o) {
                var i = Qf(t, r, n);
                if (i === 0)
                    return t;
                var a = pn(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        $f.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = SS ? new Float32Array(hr) : new Array(hr);
            if (t !== r || n !== o)
                for (var a = 0; a < hr; ++a)
                    i[a] = pn(a * dn, t, n);
            function u(s) {
                for (var l = 0, m = 1, g = hr - 1; m !== g && i[m] <= s; ++m)
                    l += dn;
                --m;
                var h = (s - i[m]) / (i[m + 1] - i[m])
                  , E = l + h * dn
                  , w = Qf(E, t, n);
                return w >= bS ? xS(s, E, t, n) : w === 0 ? E : OS(s, l, l + dn, t, n)
            }
            return function(l) {
                return t === r && n === o ? l : l === 0 ? 0 : l === 1 ? 1 : pn(u(l), r, o)
            }
        }
    }
    );
    var vr = {};
    Pe(vr, {
        bounce: () => lO,
        bouncePast: () => fO,
        ease: () => RS,
        easeIn: () => CS,
        easeInOut: () => PS,
        easeOut: () => LS,
        inBack: () => tO,
        inCirc: () => $S,
        inCubic: () => FS,
        inElastic: () => iO,
        inExpo: () => jS,
        inOutBack: () => nO,
        inOutCirc: () => JS,
        inOutCubic: () => kS,
        inOutElastic: () => aO,
        inOutExpo: () => QS,
        inOutQuad: () => MS,
        inOutQuart: () => VS,
        inOutQuint: () => BS,
        inOutSine: () => KS,
        inQuad: () => NS,
        inQuart: () => XS,
        inQuint: () => US,
        inSine: () => HS,
        outBack: () => rO,
        outBounce: () => eO,
        outCirc: () => ZS,
        outCubic: () => qS,
        outElastic: () => oO,
        outExpo: () => YS,
        outQuad: () => DS,
        outQuart: () => GS,
        outQuint: () => WS,
        outSine: () => zS,
        swingFrom: () => uO,
        swingFromTo: () => sO,
        swingTo: () => cO
    });
    function NS(e) {
        return Math.pow(e, 2)
    }
    function DS(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function MS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function FS(e) {
        return Math.pow(e, 3)
    }
    function qS(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function kS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function XS(e) {
        return Math.pow(e, 4)
    }
    function GS(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function VS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function US(e) {
        return Math.pow(e, 5)
    }
    function WS(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function BS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function HS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function zS(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function KS(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function jS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function YS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function QS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function $S(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function ZS(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function JS(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function eO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function tO(e) {
        let t = ot;
        return e * e * ((t + 1) * e - t)
    }
    function rO(e) {
        let t = ot;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function nO(e) {
        let t = ot;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function iO(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function oO(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function aO(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function sO(e) {
        let t = ot;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function uO(e) {
        let t = ot;
        return e * e * ((t + 1) * e - t)
    }
    function cO(e) {
        let t = ot;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function lO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function fO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var gr, ot, RS, CS, LS, PS, Yi = ve( () => {
        "use strict";
        gr = le(ji()),
        ot = 1.70158,
        RS = (0,
        gr.default)(.25, .1, .25, 1),
        CS = (0,
        gr.default)(.42, 0, 1, 1),
        LS = (0,
        gr.default)(0, 0, .58, 1),
        PS = (0,
        gr.default)(.42, 0, .58, 1)
    }
    );
    var Jf = {};
    Pe(Jf, {
        applyEasing: () => pO,
        createBezierEasing: () => dO,
        optimizeFloat: () => Er
    });
    function Er(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , o = Number(Math.round(e * n) / n);
        return Math.abs(o) > 1e-4 ? o : 0
    }
    function dO(e) {
        return (0,
        Zf.default)(...e)
    }
    function pO(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Er(r ? t > 0 ? r(t) : t : t > 0 && e && vr[e] ? vr[e](t) : t)
    }
    var Zf, Qi = ve( () => {
        "use strict";
        Yi();
        Zf = le(ji())
    }
    );
    var rd = {};
    Pe(rd, {
        createElementState: () => td,
        ixElements: () => OO,
        mergeActionState: () => $i
    });
    function td(e, t, r, n, o) {
        let i = r === hO ? (0,
        Xt.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0,
        Xt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: i,
            refType: r
        })
    }
    function $i(e, t, r, n, o) {
        let i = RO(o);
        return (0,
        Xt.mergeIn)(e, [t, SO, r], n, i)
    }
    function RO(e) {
        let {config: t} = e;
        return xO.reduce( (r, n) => {
            let o = n[0]
              , i = n[1]
              , a = t[o]
              , u = t[i];
            return a != null && u != null && (r[i] = u),
            r
        }
        , {})
    }
    var Xt, dq, hO, pq, gO, vO, EO, yO, mO, _O, IO, TO, bO, AO, wO, ed, SO, OO, xO, nd = ve( () => {
        "use strict";
        Xt = le(Ct());
        De();
        ({HTML_ELEMENT: dq, PLAIN_OBJECT: hO, ABSTRACT_NODE: pq, CONFIG_X_VALUE: gO, CONFIG_Y_VALUE: vO, CONFIG_Z_VALUE: EO, CONFIG_VALUE: yO, CONFIG_X_UNIT: mO, CONFIG_Y_UNIT: _O, CONFIG_Z_UNIT: IO, CONFIG_UNIT: TO} = we),
        {IX2_SESSION_STOPPED: bO, IX2_INSTANCE_ADDED: AO, IX2_ELEMENT_STATE_CHANGED: wO} = Te,
        ed = {},
        SO = "refState",
        OO = (e=ed, t={}) => {
            switch (t.type) {
            case bO:
                return ed;
            case AO:
                {
                    let {elementId: r, element: n, origin: o, actionItem: i, refType: a} = t.payload
                      , {actionTypeId: u} = i
                      , s = e;
                    return (0,
                    Xt.getIn)(s, [r, n]) !== n && (s = td(s, n, a, r, i)),
                    $i(s, r, u, o, i)
                }
            case wO:
                {
                    let {elementId: r, actionTypeId: n, current: o, actionItem: i} = t.payload;
                    return $i(e, r, n, o, i)
                }
            default:
                return e
            }
        }
        ;
        xO = [[gO, mO], [vO, _O], [EO, IO], [yO, TO]]
    }
    );
    var id = f(Zi => {
        "use strict";
        Object.defineProperty(Zi, "__esModule", {
            value: !0
        });
        function CO(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        CO(Zi, {
            clearPlugin: function() {
                return qO
            },
            createPluginInstance: function() {
                return MO
            },
            getPluginConfig: function() {
                return LO
            },
            getPluginDestination: function() {
                return DO
            },
            getPluginDuration: function() {
                return PO
            },
            getPluginOrigin: function() {
                return NO
            },
            renderPlugin: function() {
                return FO
            }
        });
        var LO = e => e.value
          , PO = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , NO = e => e || {
            value: 0
        }
          , DO = e => ({
            value: e.value
        })
          , MO = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , FO = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
          , qO = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var ad = f(Ji => {
        "use strict";
        Object.defineProperty(Ji, "__esModule", {
            value: !0
        });
        function kO(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        kO(Ji, {
            clearPlugin: function() {
                return jO
            },
            createPluginInstance: function() {
                return zO
            },
            getPluginConfig: function() {
                return UO
            },
            getPluginDestination: function() {
                return HO
            },
            getPluginDuration: function() {
                return WO
            },
            getPluginOrigin: function() {
                return BO
            },
            renderPlugin: function() {
                return KO
            }
        });
        var XO = e => document.querySelector(`[data-w-id="${e}"]`)
          , GO = () => window.Webflow.require("spline")
          , VO = (e, t) => e.filter(r => !t.includes(r))
          , UO = (e, t) => e.value[t]
          , WO = () => null
          , od = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , BO = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let i = Object.keys(e)
                  , a = VO(n, i);
                return a.length ? a.reduce( (s, l) => (s[l] = od[l],
                s), e) : e
            }
            return n.reduce( (i, a) => (i[a] = od[a],
            i), {})
        }
          , HO = e => e.value
          , zO = (e, t) => {
            let r = t?.config?.target?.pluginElement;
            return r ? XO(r) : null
        }
          , KO = (e, t, r) => {
            let n = GO()
              , o = n.getInstance(e)
              , i = r.config.target.objectId
              , a = u => {
                if (!u)
                    throw new Error("Invalid spline app passed to renderSpline");
                let s = i && u.findObjectById(i);
                if (!s)
                    return;
                let {PLUGIN_SPLINE: l} = t;
                l.positionX != null && (s.position.x = l.positionX),
                l.positionY != null && (s.position.y = l.positionY),
                l.positionZ != null && (s.position.z = l.positionZ),
                l.rotationX != null && (s.rotation.x = l.rotationX),
                l.rotationY != null && (s.rotation.y = l.rotationY),
                l.rotationZ != null && (s.rotation.z = l.rotationZ),
                l.scaleX != null && (s.scale.x = l.scaleX),
                l.scaleY != null && (s.scale.y = l.scaleY),
                l.scaleZ != null && (s.scale.z = l.scaleZ)
            }
            ;
            o ? a(o.spline) : n.setLoadHandler(e, a)
        }
          , jO = () => null
    }
    );
    var to = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });
        Object.defineProperty(eo, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return YO
            }
        });
        var sd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function YO(e) {
            let t, r, n, o = 1, i = e.replace(/\s/g, "").toLowerCase(), u = (typeof sd[i] == "string" ? sd[i].toLowerCase() : null) || i;
            if (u.startsWith("#")) {
                let s = u.substring(1);
                s.length === 3 || s.length === 4 ? (t = parseInt(s[0] + s[0], 16),
                r = parseInt(s[1] + s[1], 16),
                n = parseInt(s[2] + s[2], 16),
                s.length === 4 && (o = parseInt(s[3] + s[3], 16) / 255)) : (s.length === 6 || s.length === 8) && (t = parseInt(s.substring(0, 2), 16),
                r = parseInt(s.substring(2, 4), 16),
                n = parseInt(s.substring(4, 6), 16),
                s.length === 8 && (o = parseInt(s.substring(6, 8), 16) / 255))
            } else if (u.startsWith("rgba")) {
                let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10),
                r = parseInt(s[1], 10),
                n = parseInt(s[2], 10),
                o = parseFloat(s[3])
            } else if (u.startsWith("rgb")) {
                let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10),
                r = parseInt(s[1], 10),
                n = parseInt(s[2], 10)
            } else if (u.startsWith("hsla")) {
                let s = u.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , l = parseFloat(s[0])
                  , m = parseFloat(s[1].replace("%", "")) / 100
                  , g = parseFloat(s[2].replace("%", "")) / 100;
                o = parseFloat(s[3]);
                let h = (1 - Math.abs(2 * g - 1)) * m, E = h * (1 - Math.abs(l / 60 % 2 - 1)), w = g - h / 2, b, R, A;
                l >= 0 && l < 60 ? (b = h,
                R = E,
                A = 0) : l >= 60 && l < 120 ? (b = E,
                R = h,
                A = 0) : l >= 120 && l < 180 ? (b = 0,
                R = h,
                A = E) : l >= 180 && l < 240 ? (b = 0,
                R = E,
                A = h) : l >= 240 && l < 300 ? (b = E,
                R = 0,
                A = h) : (b = h,
                R = 0,
                A = E),
                t = Math.round((b + w) * 255),
                r = Math.round((R + w) * 255),
                n = Math.round((A + w) * 255)
            } else if (u.startsWith("hsl")) {
                let s = u.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(s[0]), m = parseFloat(s[1].replace("%", "")) / 100, g = parseFloat(s[2].replace("%", "")) / 100, h = (1 - Math.abs(2 * g - 1)) * m, E = h * (1 - Math.abs(l / 60 % 2 - 1)), w = g - h / 2, b, R, A;
                l >= 0 && l < 60 ? (b = h,
                R = E,
                A = 0) : l >= 60 && l < 120 ? (b = E,
                R = h,
                A = 0) : l >= 120 && l < 180 ? (b = 0,
                R = h,
                A = E) : l >= 180 && l < 240 ? (b = 0,
                R = E,
                A = h) : l >= 240 && l < 300 ? (b = E,
                R = 0,
                A = h) : (b = h,
                R = 0,
                A = E),
                t = Math.round((b + w) * 255),
                r = Math.round((R + w) * 255),
                n = Math.round((A + w) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: o
            }
        }
    }
    );
    var ud = f(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        function QO(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        QO(ro, {
            clearPlugin: function() {
                return ix
            },
            createPluginInstance: function() {
                return rx
            },
            getPluginConfig: function() {
                return ZO
            },
            getPluginDestination: function() {
                return tx
            },
            getPluginDuration: function() {
                return JO
            },
            getPluginOrigin: function() {
                return ex
            },
            renderPlugin: function() {
                return nx
            }
        });
        var $O = to()
          , ZO = (e, t) => e.value[t]
          , JO = () => null
          , ex = (e, t) => {
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , o = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(o, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return (0,
                $O.normalizeColor)(o)
        }
          , tx = e => e.value
          , rx = () => null
          , nx = (e, t, r) => {
            let n = r.config.target.objectId, o = r.config.value.unit, {PLUGIN_VARIABLE: i} = t, {size: a, red: u, green: s, blue: l, alpha: m} = i, g;
            a != null && (g = a + o),
            u != null && l != null && s != null && m != null && (g = `rgba(${u}, ${s}, ${l}, ${m})`),
            g != null && document.documentElement.style.setProperty(n, g)
        }
          , ix = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
    }
    );
    var ld = f(oo => {
        "use strict";
        Object.defineProperty(oo, "__esModule", {
            value: !0
        });
        Object.defineProperty(oo, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return ux
            }
        });
        var no = (De(),
        Ye(hs))
          , ox = io(id())
          , ax = io(ad())
          , sx = io(ud());
        function cd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (cd = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function io(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = cd(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        var ux = new Map([[no.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...ox
        }], [no.ActionTypeConsts.PLUGIN_SPLINE, {
            ...ax
        }], [no.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...sx
        }]])
    }
    );
    var fd = {};
    Pe(fd, {
        clearPlugin: () => fo,
        createPluginInstance: () => lx,
        getPluginConfig: () => so,
        getPluginDestination: () => co,
        getPluginDuration: () => cx,
        getPluginOrigin: () => uo,
        isPluginType: () => _t,
        renderPlugin: () => lo
    });
    function _t(e) {
        return ao.pluginMethodMap.has(e)
    }
    var ao, It, so, uo, cx, co, lx, lo, fo, po = ve( () => {
        "use strict";
        fn();
        ao = le(ld());
        It = e => t => {
            if (!ze)
                return () => null;
            let r = ao.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        so = It("getPluginConfig"),
        uo = It("getPluginOrigin"),
        cx = It("getPluginDuration"),
        co = It("getPluginDestination"),
        lx = It("createPluginInstance"),
        lo = It("renderPlugin"),
        fo = It("clearPlugin")
    }
    );
    var pd = f( (_q, dd) => {
        function fx(e, t) {
            return e == null || e !== e ? t : e
        }
        dd.exports = fx
    }
    );
    var gd = f( (Iq, hd) => {
        function dx(e, t, r, n) {
            var o = -1
              , i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; )
                r = t(r, e[o], o, e);
            return r
        }
        hd.exports = dx
    }
    );
    var Ed = f( (Tq, vd) => {
        function px(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), u = a.length; u--; ) {
                    var s = a[e ? u : ++o];
                    if (r(i[s], s, i) === !1)
                        break
                }
                return t
            }
        }
        vd.exports = px
    }
    );
    var md = f( (bq, yd) => {
        var hx = Ed()
          , gx = hx();
        yd.exports = gx
    }
    );
    var ho = f( (Aq, _d) => {
        var vx = md()
          , Ex = fr();
        function yx(e, t) {
            return e && vx(e, t, Ex)
        }
        _d.exports = yx
    }
    );
    var Td = f( (wq, Id) => {
        var mx = yt();
        function _x(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!mx(r))
                    return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; )
                    ;
                return r
            }
        }
        Id.exports = _x
    }
    );
    var go = f( (Sq, bd) => {
        var Ix = ho()
          , Tx = Td()
          , bx = Tx(Ix);
        bd.exports = bx
    }
    );
    var wd = f( (Oq, Ad) => {
        function Ax(e, t, r, n, o) {
            return o(e, function(i, a, u) {
                r = n ? (n = !1,
                i) : t(r, i, a, u)
            }),
            r
        }
        Ad.exports = Ax
    }
    );
    var Od = f( (xq, Sd) => {
        var wx = gd()
          , Sx = go()
          , Ox = dt()
          , xx = wd()
          , Rx = be();
        function Cx(e, t, r) {
            var n = Rx(e) ? wx : xx
              , o = arguments.length < 3;
            return n(e, Ox(t, 4), r, o, Sx)
        }
        Sd.exports = Cx
    }
    );
    var Rd = f( (Rq, xd) => {
        var Lx = Bi()
          , Px = dt()
          , Nx = Hi()
          , Dx = Math.max
          , Mx = Math.min;
        function Fx(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = n - 1;
            return r !== void 0 && (o = Nx(r),
            o = r < 0 ? Dx(n + o, 0) : Mx(o, n - 1)),
            Lx(e, Px(t, 3), o, !0)
        }
        xd.exports = Fx
    }
    );
    var Ld = f( (Cq, Cd) => {
        var qx = Wi()
          , kx = Rd()
          , Xx = qx(kx);
        Cd.exports = Xx
    }
    );
    function Pd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function Gx(e, t) {
        if (Pd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let o = 0; o < r.length; o++)
            if (!Object.hasOwn(t, r[o]) || !Pd(e[r[o]], t[r[o]]))
                return !1;
        return !0
    }
    var vo, Nd = ve( () => {
        "use strict";
        vo = Gx
    }
    );
    var $d = {};
    Pe($d, {
        cleanupHTMLElement: () => qR,
        clearAllStyles: () => FR,
        clearObjectCache: () => nR,
        getActionListProgress: () => XR,
        getAffectedElements: () => Io,
        getComputedStyle: () => fR,
        getDestinationValues: () => yR,
        getElementId: () => sR,
        getInstanceId: () => oR,
        getInstanceOrigin: () => hR,
        getItemConfigByKey: () => ER,
        getMaxDurationItemIndex: () => Qd,
        getNamespacedParameterId: () => UR,
        getRenderType: () => Kd,
        getStyleProp: () => mR,
        mediaQueriesEqual: () => BR,
        observeStore: () => lR,
        reduceListToGroup: () => GR,
        reifyState: () => uR,
        renderHTMLElement: () => _R,
        shallowEqual: () => vo,
        shouldAllowMediaQuery: () => WR,
        shouldNamespaceEventParameter: () => VR,
        stringifyTarget: () => HR
    });
    function nR() {
        hn.clear()
    }
    function oR() {
        return "i" + iR++
    }
    function sR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + aR++
    }
    function uR({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        yn.default)(e, (a, u) => {
            let {eventTypeId: s} = u;
            return a[s] || (a[s] = {}),
            a[s][u.id] = u,
            a
        }
        , {})
          , o = r && r.mediaQueries
          , i = [];
        return o ? i = o.map(a => a.key) : (o = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: o,
                mediaQueryKeys: i
            }
        }
    }
    function lR({store: e, select: t, onChange: r, comparator: n=cR}) {
        let {getState: o, subscribe: i} = e
          , a = i(s)
          , u = t(o());
        function s() {
            let l = t(o());
            if (l == null) {
                a();
                return
            }
            n(l, u) || (u = l,
            r(u, e))
        }
        return a
    }
    function Fd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: u} = e;
            return {
                id: r,
                objectId: n,
                selector: o,
                selectorGuids: i,
                appliesTo: a,
                useEventTarget: u
            }
        }
        return {}
    }
    function Io({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o}) {
        if (!o)
            throw new Error("IX2 missing elementApi");
        let {targets: i} = e;
        if (Array.isArray(i) && i.length > 0)
            return i.reduce( (k, O) => k.concat(Io({
                config: {
                    target: O
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o
            })), []);
        let {getValidDocument: a, getQuerySelector: u, queryDocument: s, getChildElements: l, getSiblingElements: m, matchSelector: g, elementContains: h, isSiblingNode: E} = o
          , {target: w} = e;
        if (!w)
            return [];
        let {id: b, objectId: R, selector: A, selectorGuids: P, appliesTo: C, useEventTarget: M} = Fd(w);
        if (R)
            return [hn.has(R) ? hn.get(R) : hn.set(R, {}).get(R)];
        if (C === gi.PAGE) {
            let k = a(b);
            return k ? [k] : []
        }
        let N = (t?.action?.config?.affectedElements ?? {})[b || A] || {}, W = !!(N.id || N.selector), H, j, J, re = t && u(Fd(t.target));
        if (W ? (H = N.limitAffectedElements,
        j = re,
        J = u(N)) : j = J = u({
            id: b,
            selector: A,
            selectorGuids: P
        }),
        t && M) {
            let k = r && (J || M === !0) ? [r] : s(re);
            if (J) {
                if (M === eR)
                    return s(J).filter(O => k.some(F => h(O, F)));
                if (M === Dd)
                    return s(J).filter(O => k.some(F => h(F, O)));
                if (M === Md)
                    return s(J).filter(O => k.some(F => E(F, O)))
            }
            return k
        }
        return j == null || J == null ? [] : ze && n ? s(J).filter(k => n.contains(k)) : H === Dd ? s(j, J) : H === Jx ? l(s(j)).filter(g(J)) : H === Md ? m(s(j)).filter(g(J)) : s(J)
    }
    function fR({element: e, actionItem: t}) {
        if (!ze)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case Bt:
        case Ht:
        case zt:
        case Kt:
        case _n:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function hR(e, t={}, r={}, n, o) {
        let {getStyle: i} = o
          , {actionTypeId: a} = n;
        if (_t(a))
            return uo(a)(t[a], n);
        switch (n.actionTypeId) {
        case Vt:
        case Ut:
        case Wt:
        case Ir:
            return t[n.actionTypeId] || To[n.actionTypeId];
        case Tr:
            return dR(t[n.actionTypeId], n.config.filters);
        case br:
            return pR(t[n.actionTypeId], n.config.fontVariations);
        case Bd:
            return {
                value: (0,
                at.default)(parseFloat(i(e, vn)), 1)
            };
        case Bt:
            {
                let u = i(e, et), s = i(e, tt), l, m;
                return n.config.widthUnit === ht ? l = qd.test(u) ? parseFloat(u) : parseFloat(r.width) : l = (0,
                at.default)(parseFloat(u), parseFloat(r.width)),
                n.config.heightUnit === ht ? m = qd.test(s) ? parseFloat(s) : parseFloat(r.height) : m = (0,
                at.default)(parseFloat(s), parseFloat(r.height)),
                {
                    widthValue: l,
                    heightValue: m
                }
            }
        case Ht:
        case zt:
        case Kt:
            return NR({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: i
            });
        case _n:
            return {
                value: (0,
                at.default)(i(e, En), r.display)
            };
        case rR:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function yR({element: e, actionItem: t, elementApi: r}) {
        if (_t(t.actionTypeId))
            return co(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Vt:
        case Ut:
        case Wt:
        case Ir:
            {
                let {xValue: n, yValue: o, zValue: i} = t.config;
                return {
                    xValue: n,
                    yValue: o,
                    zValue: i
                }
            }
        case Bt:
            {
                let {getStyle: n, setStyle: o, getProperty: i} = r
                  , {widthUnit: a, heightUnit: u} = t.config
                  , {widthValue: s, heightValue: l} = t.config;
                if (!ze)
                    return {
                        widthValue: s,
                        heightValue: l
                    };
                if (a === ht) {
                    let m = n(e, et);
                    o(e, et, ""),
                    s = i(e, "offsetWidth"),
                    o(e, et, m)
                }
                if (u === ht) {
                    let m = n(e, tt);
                    o(e, tt, ""),
                    l = i(e, "offsetHeight"),
                    o(e, tt, m)
                }
                return {
                    widthValue: s,
                    heightValue: l
                }
            }
        case Ht:
        case zt:
        case Kt:
            {
                let {rValue: n, gValue: o, bValue: i, aValue: a, globalSwatchId: u} = t.config;
                if (u && u.startsWith("--")) {
                    let {getStyle: s} = r
                      , l = s(e, u)
                      , m = (0,
                    Gd.normalizeColor)(l);
                    return {
                        rValue: m.red,
                        gValue: m.green,
                        bValue: m.blue,
                        aValue: m.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: o,
                    bValue: i,
                    aValue: a
                }
            }
        case Tr:
            return t.config.filters.reduce(gR, {});
        case br:
            return t.config.fontVariations.reduce(vR, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function Kd(e) {
        if (/^TRANSFORM_/.test(e))
            return Ud;
        if (/^STYLE_/.test(e))
            return mo;
        if (/^GENERAL_/.test(e))
            return yo;
        if (/^PLUGIN_/.test(e))
            return Wd
    }
    function mR(e, t) {
        return e === mo ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function _R(e, t, r, n, o, i, a, u, s) {
        switch (u) {
        case Ud:
            return wR(e, t, r, o, a);
        case mo:
            return DR(e, t, r, o, i, a);
        case yo:
            return MR(e, o, a);
        case Wd:
            {
                let {actionTypeId: l} = o;
                if (_t(l))
                    return lo(l)(s, t, o)
            }
        }
    }
    function wR(e, t, r, n, o) {
        let i = AR.map(u => {
            let s = To[u]
              , {xValue: l=s.xValue, yValue: m=s.yValue, zValue: g=s.zValue, xUnit: h="", yUnit: E="", zUnit: w=""} = t[u] || {};
            switch (u) {
            case Vt:
                return `${Wx}(${l}${h}, ${m}${E}, ${g}${w})`;
            case Ut:
                return `${Bx}(${l}${h}, ${m}${E}, ${g}${w})`;
            case Wt:
                return `${Hx}(${l}${h}) ${zx}(${m}${E}) ${Kx}(${g}${w})`;
            case Ir:
                return `${jx}(${l}${h}, ${m}${E})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = o;
        Tt(e, pt, o),
        a(e, pt, i),
        xR(n, r) && a(e, ln, Yx)
    }
    function SR(e, t, r, n) {
        let o = (0,
        yn.default)(t, (a, u, s) => `${a} ${s}(${u}${bR(s, r)})`, "")
          , {setStyle: i} = n;
        Tt(e, yr, n),
        i(e, yr, o)
    }
    function OR(e, t, r, n) {
        let o = (0,
        yn.default)(t, (a, u, s) => (a.push(`"${s}" ${u}`),
        a), []).join(", ")
          , {setStyle: i} = n;
        Tt(e, mr, n),
        i(e, mr, o)
    }
    function xR({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === Vt && n !== void 0 || e === Ut && n !== void 0 || e === Wt && (t !== void 0 || r !== void 0)
    }
    function PR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function NR({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let o = _o[t]
          , i = n(e, o)
          , a = CR.test(i) ? i : r[o]
          , u = PR(LR, a).split(_r);
        return {
            rValue: (0,
            at.default)(parseInt(u[0], 10), 255),
            gValue: (0,
            at.default)(parseInt(u[1], 10), 255),
            bValue: (0,
            at.default)(parseInt(u[2], 10), 255),
            aValue: (0,
            at.default)(parseFloat(u[3]), 1)
        }
    }
    function DR(e, t, r, n, o, i) {
        let {setStyle: a} = i;
        switch (n.actionTypeId) {
        case Bt:
            {
                let {widthUnit: u="", heightUnit: s=""} = n.config
                  , {widthValue: l, heightValue: m} = r;
                l !== void 0 && (u === ht && (u = "px"),
                Tt(e, et, i),
                a(e, et, l + u)),
                m !== void 0 && (s === ht && (s = "px"),
                Tt(e, tt, i),
                a(e, tt, m + s));
                break
            }
        case Tr:
            {
                SR(e, r, n.config, i);
                break
            }
        case br:
            {
                OR(e, r, n.config, i);
                break
            }
        case Ht:
        case zt:
        case Kt:
            {
                let u = _o[n.actionTypeId]
                  , s = Math.round(r.rValue)
                  , l = Math.round(r.gValue)
                  , m = Math.round(r.bValue)
                  , g = r.aValue;
                Tt(e, u, i),
                a(e, u, g >= 1 ? `rgb(${s},${l},${m})` : `rgba(${s},${l},${m},${g})`);
                break
            }
        default:
            {
                let {unit: u=""} = n.config;
                Tt(e, o, i),
                a(e, o, r.value + u);
                break
            }
        }
    }
    function MR(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case _n:
            {
                let {value: o} = t.config;
                o === Qx && ze ? n(e, En, Ki) : n(e, En, o);
                return
            }
        }
    }
    function Tt(e, t, r) {
        if (!ze)
            return;
        let n = zd[t];
        if (!n)
            return;
        let {getStyle: o, setStyle: i} = r
          , a = o(e, Gt);
        if (!a) {
            i(e, Gt, n);
            return
        }
        let u = a.split(_r).map(Hd);
        u.indexOf(n) === -1 && i(e, Gt, u.concat(n).join(_r))
    }
    function jd(e, t, r) {
        if (!ze)
            return;
        let n = zd[t];
        if (!n)
            return;
        let {getStyle: o, setStyle: i} = r
          , a = o(e, Gt);
        !a || a.indexOf(n) === -1 || i(e, Gt, a.split(_r).map(Hd).filter(u => u !== n).join(_r))
    }
    function FR({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: o={}} = r;
        Object.keys(n).forEach(i => {
            let a = n[i]
              , {config: u} = a.action
              , {actionListId: s} = u
              , l = o[s];
            l && kd({
                actionList: l,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(o).forEach(i => {
            kd({
                actionList: o[i],
                elementApi: t
            })
        }
        )
    }
    function kd({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: o} = e;
        n && n.forEach(i => {
            Xd({
                actionGroup: i,
                event: t,
                elementApi: r
            })
        }
        ),
        o && o.forEach(i => {
            let {continuousActionGroups: a} = i;
            a.forEach(u => {
                Xd({
                    actionGroup: u,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function Xd({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(o => {
            let {actionTypeId: i, config: a} = o, u;
            _t(i) ? u = s => fo(i)(s, o) : u = Yd({
                effect: kR,
                actionTypeId: i,
                elementApi: r
            }),
            Io({
                config: a,
                event: t,
                elementApi: r
            }).forEach(u)
        }
        )
    }
    function qR(e, t, r) {
        let {setStyle: n, getStyle: o} = r
          , {actionTypeId: i} = t;
        if (i === Bt) {
            let {config: a} = t;
            a.widthUnit === ht && n(e, et, ""),
            a.heightUnit === ht && n(e, tt, "")
        }
        o(e, Gt) && Yd({
            effect: jd,
            actionTypeId: i,
            elementApi: r
        })(e)
    }
    function kR(e, t, r) {
        let {setStyle: n} = r;
        jd(e, t, r),
        n(e, t, ""),
        t === pt && n(e, ln, "")
    }
    function Qd(e) {
        let t = 0
          , r = 0;
        return e.forEach( (n, o) => {
            let {config: i} = n
              , a = i.delay + i.duration;
            a >= t && (t = a,
            r = o)
        }
        ),
        r
    }
    function XR(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: o, verboseTimeElapsed: i=0} = t
          , a = 0
          , u = 0;
        return r.forEach( (s, l) => {
            if (n && l === 0)
                return;
            let {actionItems: m} = s
              , g = m[Qd(m)]
              , {config: h, actionTypeId: E} = g;
            o.id === g.id && (u = a + i);
            let w = Kd(E) === yo ? 0 : h.duration;
            a += h.delay + w
        }
        ),
        a > 0 ? Er(u / a) : 0
    }
    function GR({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: o} = e
          , i = []
          , a = u => (i.push((0,
        mn.mergeIn)(u, ["config"], {
            delay: 0,
            duration: 0
        })),
        u.id === t);
        return n && n.some( ({actionItems: u}) => u.some(a)),
        o && o.some(u => {
            let {continuousActionGroups: s} = u;
            return s.some( ({actionItems: l}) => l.some(a))
        }
        ),
        (0,
        mn.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: i
                }]
            }
        })
    }
    function VR(e, {basedOn: t}) {
        return e === He.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null) || e === He.MOUSE_MOVE && t === Ze.ELEMENT
    }
    function UR(e, t) {
        return e + tR + t
    }
    function WR(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function BR(e, t) {
        return vo(e && e.sort(), t && t.sort())
    }
    function HR(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Eo + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + Eo + r + Eo + n
    }
    var at, yn, gn, mn, Gd, Vx, Ux, Wx, Bx, Hx, zx, Kx, jx, Yx, Qx, vn, yr, mr, et, tt, Vd, $x, Zx, Dd, Jx, Md, eR, En, Gt, ht, _r, tR, Eo, Ud, yo, mo, Wd, Vt, Ut, Wt, Ir, Bd, Tr, br, Bt, Ht, zt, Kt, _n, rR, Hd, _o, zd, hn, iR, aR, cR, qd, dR, pR, gR, vR, ER, To, IR, TR, bR, AR, RR, CR, LR, Yd, Zd = ve( () => {
        "use strict";
        at = le(pd()),
        yn = le(Od()),
        gn = le(Ld()),
        mn = le(Ct());
        De();
        Nd();
        Qi();
        Gd = le(to());
        po();
        fn();
        ({BACKGROUND: Vx, TRANSFORM: Ux, TRANSLATE_3D: Wx, SCALE_3D: Bx, ROTATE_X: Hx, ROTATE_Y: zx, ROTATE_Z: Kx, SKEW: jx, PRESERVE_3D: Yx, FLEX: Qx, OPACITY: vn, FILTER: yr, FONT_VARIATION_SETTINGS: mr, WIDTH: et, HEIGHT: tt, BACKGROUND_COLOR: Vd, BORDER_COLOR: $x, COLOR: Zx, CHILDREN: Dd, IMMEDIATE_CHILDREN: Jx, SIBLINGS: Md, PARENT: eR, DISPLAY: En, WILL_CHANGE: Gt, AUTO: ht, COMMA_DELIMITER: _r, COLON_DELIMITER: tR, BAR_DELIMITER: Eo, RENDER_TRANSFORM: Ud, RENDER_GENERAL: yo, RENDER_STYLE: mo, RENDER_PLUGIN: Wd} = we),
        {TRANSFORM_MOVE: Vt, TRANSFORM_SCALE: Ut, TRANSFORM_ROTATE: Wt, TRANSFORM_SKEW: Ir, STYLE_OPACITY: Bd, STYLE_FILTER: Tr, STYLE_FONT_VARIATION: br, STYLE_SIZE: Bt, STYLE_BACKGROUND_COLOR: Ht, STYLE_BORDER: zt, STYLE_TEXT_COLOR: Kt, GENERAL_DISPLAY: _n, OBJECT_VALUE: rR} = Ne,
        Hd = e => e.trim(),
        _o = Object.freeze({
            [Ht]: Vd,
            [zt]: $x,
            [Kt]: Zx
        }),
        zd = Object.freeze({
            [pt]: Ux,
            [Vd]: Vx,
            [vn]: vn,
            [yr]: yr,
            [et]: et,
            [tt]: tt,
            [mr]: mr
        }),
        hn = new Map;
        iR = 1;
        aR = 1;
        cR = (e, t) => e === t;
        qd = /px/,
        dR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = IR[n.type]),
        r), e || {}),
        pR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = TR[n.type] || n.defaultValue || 0),
        r), e || {});
        gR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        vR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        ER = (e, t, r) => {
            if (_t(e))
                return so(e)(r, t);
            switch (e) {
            case Tr:
                {
                    let n = (0,
                    gn.default)(r.filters, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            case br:
                {
                    let n = (0,
                    gn.default)(r.fontVariations, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        To = {
            [Vt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ut]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Wt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ir]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        IR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        TR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        bR = (e, t) => {
            let r = (0,
            gn.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        AR = Object.keys(To);
        RR = "\\(([^)]+)\\)",
        CR = /^rgb/,
        LR = RegExp(`rgba?${RR}`);
        Yd = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case Vt:
            case Ut:
            case Wt:
            case Ir:
                e(n, pt, r);
                break;
            case Tr:
                e(n, yr, r);
                break;
            case br:
                e(n, mr, r);
                break;
            case Bd:
                e(n, vn, r);
                break;
            case Bt:
                e(n, et, r),
                e(n, tt, r);
                break;
            case Ht:
            case zt:
            case Kt:
                e(n, _o[t], r);
                break;
            case _n:
                e(n, En, r);
                break
            }
        }
    }
    );
    var bt = f(bo => {
        "use strict";
        Object.defineProperty(bo, "__esModule", {
            value: !0
        });
        function zR(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        zR(bo, {
            IX2BrowserSupport: function() {
                return KR
            },
            IX2EasingUtils: function() {
                return YR
            },
            IX2Easings: function() {
                return jR
            },
            IX2ElementsReducer: function() {
                return QR
            },
            IX2VanillaPlugins: function() {
                return $R
            },
            IX2VanillaUtils: function() {
                return ZR
            }
        });
        var KR = jt((fn(),
        Ye(zf)))
          , jR = jt((Yi(),
        Ye(vr)))
          , YR = jt((Qi(),
        Ye(Jf)))
          , QR = jt((nd(),
        Ye(rd)))
          , $R = jt((po(),
        Ye(fd)))
          , ZR = jt((Zd(),
        Ye($d)));
        function Jd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (Jd = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function jt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = Jd(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
    }
    );
    var Tn, st, JR, eC, tC, rC, nC, iC, In, ep, oC, aC, Ao, sC, uC, cC, lC, tp, rp = ve( () => {
        "use strict";
        De();
        Tn = le(bt()),
        st = le(Ct()),
        {IX2_RAW_DATA_IMPORTED: JR, IX2_SESSION_STOPPED: eC, IX2_INSTANCE_ADDED: tC, IX2_INSTANCE_STARTED: rC, IX2_INSTANCE_REMOVED: nC, IX2_ANIMATION_FRAME_CHANGED: iC} = Te,
        {optimizeFloat: In, applyEasing: ep, createBezierEasing: oC} = Tn.IX2EasingUtils,
        {RENDER_GENERAL: aC} = we,
        {getItemConfigByKey: Ao, getRenderType: sC, getStyleProp: uC} = Tn.IX2VanillaUtils,
        cC = (e, t) => {
            let {position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: u, actionTypeId: s, customEasingFn: l, skipMotion: m, skipToValue: g} = e
              , {parameters: h} = t.payload
              , E = Math.max(1 - a, .01)
              , w = h[n];
            w == null && (E = 1,
            w = u);
            let b = Math.max(w, 0) || 0
              , R = In(b - r)
              , A = m ? g : In(r + R * E)
              , P = A * 100;
            if (A === r && e.current)
                return e;
            let C, M, D, N;
            for (let H = 0, {length: j} = o; H < j; H++) {
                let {keyframe: J, actionItems: re} = o[H];
                if (H === 0 && (C = re[0]),
                P >= J) {
                    C = re[0];
                    let k = o[H + 1]
                      , O = k && P !== J;
                    M = O ? k.actionItems[0] : null,
                    O && (D = J / 100,
                    N = (k.keyframe - J) / 100)
                }
            }
            let W = {};
            if (C && !M)
                for (let H = 0, {length: j} = i; H < j; H++) {
                    let J = i[H];
                    W[J] = Ao(s, J, C.config)
                }
            else if (C && M && D !== void 0 && N !== void 0) {
                let H = (A - D) / N
                  , j = C.config.easing
                  , J = ep(j, H, l);
                for (let re = 0, {length: k} = i; re < k; re++) {
                    let O = i[re]
                      , F = Ao(s, O, C.config)
                      , ee = (Ao(s, O, M.config) - F) * J + F;
                    W[O] = ee
                }
            }
            return (0,
            st.merge)(e, {
                position: A,
                current: W
            })
        }
        ,
        lC = (e, t) => {
            let {active: r, origin: n, start: o, immediate: i, renderType: a, verbose: u, actionItem: s, destination: l, destinationKeys: m, pluginDuration: g, instanceDelay: h, customEasingFn: E, skipMotion: w} = e
              , b = s.config.easing
              , {duration: R, delay: A} = s.config;
            g != null && (R = g),
            A = h ?? A,
            a === aC ? R = 0 : (i || w) && (R = A = 0);
            let {now: P} = t.payload;
            if (r && n) {
                let C = P - (o + A);
                if (u) {
                    let H = P - o
                      , j = R + A
                      , J = In(Math.min(Math.max(0, H / j), 1));
                    e = (0,
                    st.set)(e, "verboseTimeElapsed", j * J)
                }
                if (C < 0)
                    return e;
                let M = In(Math.min(Math.max(0, C / R), 1))
                  , D = ep(b, M, E)
                  , N = {}
                  , W = null;
                return m.length && (W = m.reduce( (H, j) => {
                    let J = l[j]
                      , re = parseFloat(n[j]) || 0
                      , O = (parseFloat(J) - re) * D + re;
                    return H[j] = O,
                    H
                }
                , {})),
                N.current = W,
                N.position = M,
                M === 1 && (N.active = !1,
                N.complete = !0),
                (0,
                st.merge)(e, N)
            }
            return e
        }
        ,
        tp = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case JR:
                return t.payload.ixInstances || Object.freeze({});
            case eC:
                return Object.freeze({});
            case tC:
                {
                    let {instanceId: r, elementId: n, actionItem: o, eventId: i, eventTarget: a, eventStateKey: u, actionListId: s, groupIndex: l, isCarrier: m, origin: g, destination: h, immediate: E, verbose: w, continuous: b, parameterId: R, actionGroups: A, smoothing: P, restingValue: C, pluginInstance: M, pluginDuration: D, instanceDelay: N, skipMotion: W, skipToValue: H} = t.payload
                      , {actionTypeId: j} = o
                      , J = sC(j)
                      , re = uC(J, j)
                      , k = Object.keys(h).filter(F => h[F] != null && typeof h[F] != "string")
                      , {easing: O} = o.config;
                    return (0,
                    st.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: g,
                        destination: h,
                        destinationKeys: k,
                        immediate: E,
                        verbose: w,
                        current: null,
                        actionItem: o,
                        actionTypeId: j,
                        eventId: i,
                        eventTarget: a,
                        eventStateKey: u,
                        actionListId: s,
                        groupIndex: l,
                        renderType: J,
                        isCarrier: m,
                        styleProp: re,
                        continuous: b,
                        parameterId: R,
                        actionGroups: A,
                        smoothing: P,
                        restingValue: C,
                        pluginInstance: M,
                        pluginDuration: D,
                        instanceDelay: N,
                        skipMotion: W,
                        skipToValue: H,
                        customEasingFn: Array.isArray(O) && O.length === 4 ? oC(O) : void 0
                    })
                }
            case rC:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    st.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case nC:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , o = Object.keys(e)
                      , {length: i} = o;
                    for (let a = 0; a < i; a++) {
                        let u = o[a];
                        u !== r && (n[u] = e[u])
                    }
                    return n
                }
            case iC:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: o} = n;
                    for (let i = 0; i < o; i++) {
                        let a = n[i]
                          , u = e[a]
                          , s = u.continuous ? cC : lC;
                        r = (0,
                        st.set)(r, a, s(u, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var fC, dC, pC, np, ip = ve( () => {
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: fC, IX2_SESSION_STOPPED: dC, IX2_PARAMETER_CHANGED: pC} = Te),
        np = (e={}, t) => {
            switch (t.type) {
            case fC:
                return t.payload.ixParameters || {};
            case dC:
                return {};
            case pC:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var sp = {};
    Pe(sp, {
        default: () => gC
    });
    var op, ap, hC, gC, up = ve( () => {
        "use strict";
        op = le(hi());
        vs();
        qs();
        Gs();
        ap = le(bt());
        rp();
        ip();
        ({ixElements: hC} = ap.IX2ElementsReducer),
        gC = (0,
        op.combineReducers)({
            ixData: gs,
            ixRequest: Fs,
            ixSession: Xs,
            ixElements: hC,
            ixInstances: tp,
            ixParameters: np
        })
    }
    );
    var lp = f( (jq, cp) => {
        var vC = lt()
          , EC = be()
          , yC = it()
          , mC = "[object String]";
        function _C(e) {
            return typeof e == "string" || !EC(e) && yC(e) && vC(e) == mC
        }
        cp.exports = _C
    }
    );
    var dp = f( (Yq, fp) => {
        var IC = Ui()
          , TC = IC("length");
        fp.exports = TC
    }
    );
    var hp = f( (Qq, pp) => {
        var bC = "\\ud800-\\udfff"
          , AC = "\\u0300-\\u036f"
          , wC = "\\ufe20-\\ufe2f"
          , SC = "\\u20d0-\\u20ff"
          , OC = AC + wC + SC
          , xC = "\\ufe0e\\ufe0f"
          , RC = "\\u200d"
          , CC = RegExp("[" + RC + bC + OC + xC + "]");
        function LC(e) {
            return CC.test(e)
        }
        pp.exports = LC
    }
    );
    var bp = f( ($q, Tp) => {
        var vp = "\\ud800-\\udfff"
          , PC = "\\u0300-\\u036f"
          , NC = "\\ufe20-\\ufe2f"
          , DC = "\\u20d0-\\u20ff"
          , MC = PC + NC + DC
          , FC = "\\ufe0e\\ufe0f"
          , qC = "[" + vp + "]"
          , wo = "[" + MC + "]"
          , So = "\\ud83c[\\udffb-\\udfff]"
          , kC = "(?:" + wo + "|" + So + ")"
          , Ep = "[^" + vp + "]"
          , yp = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , mp = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , XC = "\\u200d"
          , _p = kC + "?"
          , Ip = "[" + FC + "]?"
          , GC = "(?:" + XC + "(?:" + [Ep, yp, mp].join("|") + ")" + Ip + _p + ")*"
          , VC = Ip + _p + GC
          , UC = "(?:" + [Ep + wo + "?", wo, yp, mp, qC].join("|") + ")"
          , gp = RegExp(So + "(?=" + So + ")|" + UC + VC, "g");
        function WC(e) {
            for (var t = gp.lastIndex = 0; gp.test(e); )
                ++t;
            return t
        }
        Tp.exports = WC
    }
    );
    var wp = f( (Zq, Ap) => {
        var BC = dp()
          , HC = hp()
          , zC = bp();
        function KC(e) {
            return HC(e) ? zC(e) : BC(e)
        }
        Ap.exports = KC
    }
    );
    var Op = f( (Jq, Sp) => {
        var jC = en()
          , YC = tn()
          , QC = yt()
          , $C = lp()
          , ZC = wp()
          , JC = "[object Map]"
          , eL = "[object Set]";
        function tL(e) {
            if (e == null)
                return 0;
            if (QC(e))
                return $C(e) ? ZC(e) : e.length;
            var t = YC(e);
            return t == JC || t == eL ? e.size : jC(e).length
        }
        Sp.exports = tL
    }
    );
    var Rp = f( (ek, xp) => {
        var rL = "Expected a function";
        function nL(e) {
            if (typeof e != "function")
                throw new TypeError(rL);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        xp.exports = nL
    }
    );
    var Oo = f( (tk, Cp) => {
        var iL = ft()
          , oL = function() {
            try {
                var e = iL(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Cp.exports = oL
    }
    );
    var xo = f( (rk, Pp) => {
        var Lp = Oo();
        function aL(e, t, r) {
            t == "__proto__" && Lp ? Lp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Pp.exports = aL
    }
    );
    var Dp = f( (nk, Np) => {
        var sL = xo()
          , uL = Br()
          , cL = Object.prototype
          , lL = cL.hasOwnProperty;
        function fL(e, t, r) {
            var n = e[t];
            (!(lL.call(e, t) && uL(n, r)) || r === void 0 && !(t in e)) && sL(e, t, r)
        }
        Np.exports = fL
    }
    );
    var qp = f( (ik, Fp) => {
        var dL = Dp()
          , pL = pr()
          , hL = Qr()
          , Mp = Je()
          , gL = kt();
        function vL(e, t, r, n) {
            if (!Mp(e))
                return e;
            t = pL(t, e);
            for (var o = -1, i = t.length, a = i - 1, u = e; u != null && ++o < i; ) {
                var s = gL(t[o])
                  , l = r;
                if (s === "__proto__" || s === "constructor" || s === "prototype")
                    return e;
                if (o != a) {
                    var m = u[s];
                    l = n ? n(m, s, u) : void 0,
                    l === void 0 && (l = Mp(m) ? m : hL(t[o + 1]) ? [] : {})
                }
                dL(u, s, l),
                u = u[s]
            }
            return e
        }
        Fp.exports = vL
    }
    );
    var Xp = f( (ok, kp) => {
        var EL = on()
          , yL = qp()
          , mL = pr();
        function _L(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var a = t[n]
                  , u = EL(e, a);
                r(u, a) && yL(i, mL(a, e), u)
            }
            return i
        }
        kp.exports = _L
    }
    );
    var Vp = f( (ak, Gp) => {
        var IL = jr()
          , TL = ti()
          , bL = Oi()
          , AL = Si()
          , wL = Object.getOwnPropertySymbols
          , SL = wL ? function(e) {
            for (var t = []; e; )
                IL(t, bL(e)),
                e = TL(e);
            return t
        }
        : AL;
        Gp.exports = SL
    }
    );
    var Wp = f( (sk, Up) => {
        function OL(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        Up.exports = OL
    }
    );
    var Hp = f( (uk, Bp) => {
        var xL = Je()
          , RL = Jr()
          , CL = Wp()
          , LL = Object.prototype
          , PL = LL.hasOwnProperty;
        function NL(e) {
            if (!xL(e))
                return CL(e);
            var t = RL(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !PL.call(e, n)) || r.push(n);
            return r
        }
        Bp.exports = NL
    }
    );
    var Kp = f( (ck, zp) => {
        var DL = Ri()
          , ML = Hp()
          , FL = yt();
        function qL(e) {
            return FL(e) ? DL(e, !0) : ML(e)
        }
        zp.exports = qL
    }
    );
    var Yp = f( (lk, jp) => {
        var kL = wi()
          , XL = Vp()
          , GL = Kp();
        function VL(e) {
            return kL(e, GL, XL)
        }
        jp.exports = VL
    }
    );
    var $p = f( (fk, Qp) => {
        var UL = Vi()
          , WL = dt()
          , BL = Xp()
          , HL = Yp();
        function zL(e, t) {
            if (e == null)
                return {};
            var r = UL(HL(e), function(n) {
                return [n]
            });
            return t = WL(t),
            BL(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        Qp.exports = zL
    }
    );
    var Jp = f( (dk, Zp) => {
        var KL = dt()
          , jL = Rp()
          , YL = $p();
        function QL(e, t) {
            return YL(e, jL(KL(t)))
        }
        Zp.exports = QL
    }
    );
    var th = f( (pk, eh) => {
        var $L = en()
          , ZL = tn()
          , JL = sr()
          , eP = be()
          , tP = yt()
          , rP = Yr()
          , nP = Jr()
          , iP = Zr()
          , oP = "[object Map]"
          , aP = "[object Set]"
          , sP = Object.prototype
          , uP = sP.hasOwnProperty;
        function cP(e) {
            if (e == null)
                return !0;
            if (tP(e) && (eP(e) || typeof e == "string" || typeof e.splice == "function" || rP(e) || iP(e) || JL(e)))
                return !e.length;
            var t = ZL(e);
            if (t == oP || t == aP)
                return !e.size;
            if (nP(e))
                return !$L(e).length;
            for (var r in e)
                if (uP.call(e, r))
                    return !1;
            return !0
        }
        eh.exports = cP
    }
    );
    var nh = f( (hk, rh) => {
        var lP = xo()
          , fP = ho()
          , dP = dt();
        function pP(e, t) {
            var r = {};
            return t = dP(t, 3),
            fP(e, function(n, o, i) {
                lP(r, o, t(n, o, i))
            }),
            r
        }
        rh.exports = pP
    }
    );
    var oh = f( (gk, ih) => {
        function hP(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        ih.exports = hP
    }
    );
    var sh = f( (vk, ah) => {
        var gP = sn();
        function vP(e) {
            return typeof e == "function" ? e : gP
        }
        ah.exports = vP
    }
    );
    var ch = f( (Ek, uh) => {
        var EP = oh()
          , yP = go()
          , mP = sh()
          , _P = be();
        function IP(e, t) {
            var r = _P(e) ? EP : yP;
            return r(e, mP(t))
        }
        uh.exports = IP
    }
    );
    var fh = f( (yk, lh) => {
        var TP = Be()
          , bP = function() {
            return TP.Date.now()
        };
        lh.exports = bP
    }
    );
    var hh = f( (mk, ph) => {
        var AP = Je()
          , Ro = fh()
          , dh = un()
          , wP = "Expected a function"
          , SP = Math.max
          , OP = Math.min;
        function xP(e, t, r) {
            var n, o, i, a, u, s, l = 0, m = !1, g = !1, h = !0;
            if (typeof e != "function")
                throw new TypeError(wP);
            t = dh(t) || 0,
            AP(r) && (m = !!r.leading,
            g = "maxWait"in r,
            i = g ? SP(dh(r.maxWait) || 0, t) : i,
            h = "trailing"in r ? !!r.trailing : h);
            function E(N) {
                var W = n
                  , H = o;
                return n = o = void 0,
                l = N,
                a = e.apply(H, W),
                a
            }
            function w(N) {
                return l = N,
                u = setTimeout(A, t),
                m ? E(N) : a
            }
            function b(N) {
                var W = N - s
                  , H = N - l
                  , j = t - W;
                return g ? OP(j, i - H) : j
            }
            function R(N) {
                var W = N - s
                  , H = N - l;
                return s === void 0 || W >= t || W < 0 || g && H >= i
            }
            function A() {
                var N = Ro();
                if (R(N))
                    return P(N);
                u = setTimeout(A, b(N))
            }
            function P(N) {
                return u = void 0,
                h && n ? E(N) : (n = o = void 0,
                a)
            }
            function C() {
                u !== void 0 && clearTimeout(u),
                l = 0,
                n = s = o = u = void 0
            }
            function M() {
                return u === void 0 ? a : P(Ro())
            }
            function D() {
                var N = Ro()
                  , W = R(N);
                if (n = arguments,
                o = this,
                s = N,
                W) {
                    if (u === void 0)
                        return w(s);
                    if (g)
                        return clearTimeout(u),
                        u = setTimeout(A, t),
                        E(s)
                }
                return u === void 0 && (u = setTimeout(A, t)),
                a
            }
            return D.cancel = C,
            D.flush = M,
            D
        }
        ph.exports = xP
    }
    );
    var vh = f( (_k, gh) => {
        var RP = hh()
          , CP = Je()
          , LP = "Expected a function";
        function PP(e, t, r) {
            var n = !0
              , o = !0;
            if (typeof e != "function")
                throw new TypeError(LP);
            return CP(r) && (n = "leading"in r ? !!r.leading : n,
            o = "trailing"in r ? !!r.trailing : o),
            RP(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        gh.exports = PP
    }
    );
    var yh = {};
    Pe(yh, {
        actionListPlaybackChanged: () => Qt,
        animationFrameChanged: () => An,
        clearRequested: () => nN,
        elementStateChanged: () => qo,
        eventListenerAdded: () => bn,
        eventStateChanged: () => Do,
        instanceAdded: () => Mo,
        instanceRemoved: () => Fo,
        instanceStarted: () => wn,
        mediaQueriesDefined: () => Xo,
        parameterChanged: () => Yt,
        playbackRequested: () => tN,
        previewRequested: () => eN,
        rawDataImported: () => Co,
        sessionInitialized: () => Lo,
        sessionStarted: () => Po,
        sessionStopped: () => No,
        stopRequested: () => rN,
        testFrameRendered: () => iN,
        viewportWidthChanged: () => ko
    });
    var Eh, NP, DP, MP, FP, qP, kP, XP, GP, VP, UP, WP, BP, HP, zP, KP, jP, YP, QP, $P, ZP, JP, Co, Lo, Po, No, eN, tN, rN, nN, bn, iN, Do, An, Yt, Mo, wn, Fo, qo, Qt, ko, Xo, Sn = ve( () => {
        "use strict";
        De();
        Eh = le(bt()),
        {IX2_RAW_DATA_IMPORTED: NP, IX2_SESSION_INITIALIZED: DP, IX2_SESSION_STARTED: MP, IX2_SESSION_STOPPED: FP, IX2_PREVIEW_REQUESTED: qP, IX2_PLAYBACK_REQUESTED: kP, IX2_STOP_REQUESTED: XP, IX2_CLEAR_REQUESTED: GP, IX2_EVENT_LISTENER_ADDED: VP, IX2_TEST_FRAME_RENDERED: UP, IX2_EVENT_STATE_CHANGED: WP, IX2_ANIMATION_FRAME_CHANGED: BP, IX2_PARAMETER_CHANGED: HP, IX2_INSTANCE_ADDED: zP, IX2_INSTANCE_STARTED: KP, IX2_INSTANCE_REMOVED: jP, IX2_ELEMENT_STATE_CHANGED: YP, IX2_ACTION_LIST_PLAYBACK_CHANGED: QP, IX2_VIEWPORT_WIDTH_CHANGED: $P, IX2_MEDIA_QUERIES_DEFINED: ZP} = Te,
        {reifyState: JP} = Eh.IX2VanillaUtils,
        Co = e => ({
            type: NP,
            payload: {
                ...JP(e)
            }
        }),
        Lo = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: DP,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        Po = () => ({
            type: MP
        }),
        No = () => ({
            type: FP
        }),
        eN = ({rawData: e, defer: t}) => ({
            type: qP,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        tN = ({actionTypeId: e=Ne.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: u, rawData: s}) => ({
            type: kP,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: u,
                rawData: s
            }
        }),
        rN = e => ({
            type: XP,
            payload: {
                actionListId: e
            }
        }),
        nN = () => ({
            type: GP
        }),
        bn = (e, t) => ({
            type: VP,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        iN = (e=1) => ({
            type: UP,
            payload: {
                step: e
            }
        }),
        Do = (e, t) => ({
            type: WP,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        An = (e, t) => ({
            type: BP,
            payload: {
                now: e,
                parameters: t
            }
        }),
        Yt = (e, t) => ({
            type: HP,
            payload: {
                key: e,
                value: t
            }
        }),
        Mo = e => ({
            type: zP,
            payload: {
                ...e
            }
        }),
        wn = (e, t) => ({
            type: KP,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        Fo = e => ({
            type: jP,
            payload: {
                instanceId: e
            }
        }),
        qo = (e, t, r, n) => ({
            type: YP,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        Qt = ({actionListId: e, isPlaying: t}) => ({
            type: QP,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        ko = ({width: e, mediaQueries: t}) => ({
            type: $P,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        Xo = () => ({
            type: ZP
        })
    }
    );
    var Re = {};
    Pe(Re, {
        elementContains: () => Uo,
        getChildElements: () => hN,
        getClosestElement: () => Ar,
        getProperty: () => cN,
        getQuerySelector: () => Vo,
        getRefType: () => Wo,
        getSiblingElements: () => gN,
        getStyle: () => uN,
        getValidDocument: () => fN,
        isSiblingNode: () => pN,
        matchSelector: () => lN,
        queryDocument: () => dN,
        setStyle: () => sN
    });
    function sN(e, t, r) {
        e.style[t] = r
    }
    function uN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function cN(e, t) {
        return e[t]
    }
    function lN(e) {
        return t => t[Go](e)
    }
    function Vo({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(mh) !== -1) {
                let n = e.split(mh)
                  , o = n[0];
                if (r = n[1],
                o !== document.documentElement.getAttribute(Ih))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function fN(e) {
        return e == null || e === document.documentElement.getAttribute(Ih) ? document : null
    }
    function dN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function Uo(e, t) {
        return e.contains(t)
    }
    function pN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function hN(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: o} = e[r]
              , {length: i} = o;
            if (i)
                for (let a = 0; a < i; a++)
                    t.push(o[a])
        }
        return t
    }
    function gN(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: o} = e; n < o; n++) {
            let {parentNode: i} = e[n];
            if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
                continue;
            r.push(i);
            let a = i.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function Wo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? oN : aN : null
    }
    var _h, Go, mh, oN, aN, Ih, Ar, Th = ve( () => {
        "use strict";
        _h = le(bt());
        De();
        ({ELEMENT_MATCHES: Go} = _h.IX2BrowserSupport),
        {IX2_ID_DELIMITER: mh, HTML_ELEMENT: oN, PLAIN_OBJECT: aN, WF_PAGE: Ih} = we;
        Ar = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[Go] && r[Go](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var Bo = f( (bk, Ah) => {
        var vN = Je()
          , bh = Object.create
          , EN = function() {
            function e() {}
            return function(t) {
                if (!vN(t))
                    return {};
                if (bh)
                    return bh(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        Ah.exports = EN
    }
    );
    var On = f( (Ak, wh) => {
        function yN() {}
        wh.exports = yN
    }
    );
    var Rn = f( (wk, Sh) => {
        var mN = Bo()
          , _N = On();
        function xn(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        xn.prototype = mN(_N.prototype);
        xn.prototype.constructor = xn;
        Sh.exports = xn
    }
    );
    var Ch = f( (Sk, Rh) => {
        var Oh = Ot()
          , IN = sr()
          , TN = be()
          , xh = Oh ? Oh.isConcatSpreadable : void 0;
        function bN(e) {
            return TN(e) || IN(e) || !!(xh && e && e[xh])
        }
        Rh.exports = bN
    }
    );
    var Nh = f( (Ok, Ph) => {
        var AN = jr()
          , wN = Ch();
        function Lh(e, t, r, n, o) {
            var i = -1
              , a = e.length;
            for (r || (r = wN),
            o || (o = []); ++i < a; ) {
                var u = e[i];
                t > 0 && r(u) ? t > 1 ? Lh(u, t - 1, r, n, o) : AN(o, u) : n || (o[o.length] = u)
            }
            return o
        }
        Ph.exports = Lh
    }
    );
    var Mh = f( (xk, Dh) => {
        var SN = Nh();
        function ON(e) {
            var t = e == null ? 0 : e.length;
            return t ? SN(e, 1) : []
        }
        Dh.exports = ON
    }
    );
    var qh = f( (Rk, Fh) => {
        function xN(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Fh.exports = xN
    }
    );
    var Gh = f( (Ck, Xh) => {
        var RN = qh()
          , kh = Math.max;
        function CN(e, t, r) {
            return t = kh(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = kh(n.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = n[t + o];
                o = -1;
                for (var u = Array(t + 1); ++o < t; )
                    u[o] = n[o];
                return u[t] = r(a),
                RN(e, this, u)
            }
        }
        Xh.exports = CN
    }
    );
    var Uh = f( (Lk, Vh) => {
        function LN(e) {
            return function() {
                return e
            }
        }
        Vh.exports = LN
    }
    );
    var Hh = f( (Pk, Bh) => {
        var PN = Uh()
          , Wh = Oo()
          , NN = sn()
          , DN = Wh ? function(e, t) {
            return Wh(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: PN(t),
                writable: !0
            })
        }
        : NN;
        Bh.exports = DN
    }
    );
    var Kh = f( (Nk, zh) => {
        var MN = 800
          , FN = 16
          , qN = Date.now;
        function kN(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = qN()
                  , o = FN - (n - r);
                if (r = n,
                o > 0) {
                    if (++t >= MN)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        zh.exports = kN
    }
    );
    var Yh = f( (Dk, jh) => {
        var XN = Hh()
          , GN = Kh()
          , VN = GN(XN);
        jh.exports = VN
    }
    );
    var $h = f( (Mk, Qh) => {
        var UN = Mh()
          , WN = Gh()
          , BN = Yh();
        function HN(e) {
            return BN(WN(e, void 0, UN), e + "")
        }
        Qh.exports = HN
    }
    );
    var eg = f( (Fk, Jh) => {
        var Zh = Ci()
          , zN = Zh && new Zh;
        Jh.exports = zN
    }
    );
    var rg = f( (qk, tg) => {
        function KN() {}
        tg.exports = KN
    }
    );
    var Ho = f( (kk, ig) => {
        var ng = eg()
          , jN = rg()
          , YN = ng ? function(e) {
            return ng.get(e)
        }
        : jN;
        ig.exports = YN
    }
    );
    var ag = f( (Xk, og) => {
        var QN = {};
        og.exports = QN
    }
    );
    var zo = f( (Gk, ug) => {
        var sg = ag()
          , $N = Object.prototype
          , ZN = $N.hasOwnProperty;
        function JN(e) {
            for (var t = e.name + "", r = sg[t], n = ZN.call(sg, t) ? r.length : 0; n--; ) {
                var o = r[n]
                  , i = o.func;
                if (i == null || i == e)
                    return o.name
            }
            return t
        }
        ug.exports = JN
    }
    );
    var Ln = f( (Vk, cg) => {
        var eD = Bo()
          , tD = On()
          , rD = 4294967295;
        function Cn(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = rD,
            this.__views__ = []
        }
        Cn.prototype = eD(tD.prototype);
        Cn.prototype.constructor = Cn;
        cg.exports = Cn
    }
    );
    var fg = f( (Uk, lg) => {
        function nD(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        lg.exports = nD
    }
    );
    var pg = f( (Wk, dg) => {
        var iD = Ln()
          , oD = Rn()
          , aD = fg();
        function sD(e) {
            if (e instanceof iD)
                return e.clone();
            var t = new oD(e.__wrapped__,e.__chain__);
            return t.__actions__ = aD(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        dg.exports = sD
    }
    );
    var vg = f( (Bk, gg) => {
        var uD = Ln()
          , hg = Rn()
          , cD = On()
          , lD = be()
          , fD = it()
          , dD = pg()
          , pD = Object.prototype
          , hD = pD.hasOwnProperty;
        function Pn(e) {
            if (fD(e) && !lD(e) && !(e instanceof uD)) {
                if (e instanceof hg)
                    return e;
                if (hD.call(e, "__wrapped__"))
                    return dD(e)
            }
            return new hg(e)
        }
        Pn.prototype = cD.prototype;
        Pn.prototype.constructor = Pn;
        gg.exports = Pn
    }
    );
    var yg = f( (Hk, Eg) => {
        var gD = Ln()
          , vD = Ho()
          , ED = zo()
          , yD = vg();
        function mD(e) {
            var t = ED(e)
              , r = yD[t];
            if (typeof r != "function" || !(t in gD.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = vD(r);
            return !!n && e === n[0]
        }
        Eg.exports = mD
    }
    );
    var Tg = f( (zk, Ig) => {
        var mg = Rn()
          , _D = $h()
          , ID = Ho()
          , Ko = zo()
          , TD = be()
          , _g = yg()
          , bD = "Expected a function"
          , AD = 8
          , wD = 32
          , SD = 128
          , OD = 256;
        function xD(e) {
            return _D(function(t) {
                var r = t.length
                  , n = r
                  , o = mg.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function")
                        throw new TypeError(bD);
                    if (o && !a && Ko(i) == "wrapper")
                        var a = new mg([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    i = t[n];
                    var u = Ko(i)
                      , s = u == "wrapper" ? ID(i) : void 0;
                    s && _g(s[0]) && s[1] == (SD | AD | wD | OD) && !s[4].length && s[9] == 1 ? a = a[Ko(s[0])].apply(a, s[3]) : a = i.length == 1 && _g(i) ? a[u]() : a.thru(i)
                }
                return function() {
                    var l = arguments
                      , m = l[0];
                    if (a && l.length == 1 && TD(m))
                        return a.plant(m).value();
                    for (var g = 0, h = r ? t[g].apply(this, l) : m; ++g < r; )
                        h = t[g].call(this, h);
                    return h
                }
            })
        }
        Ig.exports = xD
    }
    );
    var Ag = f( (Kk, bg) => {
        var RD = Tg()
          , CD = RD();
        bg.exports = CD
    }
    );
    var Sg = f( (jk, wg) => {
        function LD(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        wg.exports = LD
    }
    );
    var xg = f( (Yk, Og) => {
        var PD = Sg()
          , jo = un();
        function ND(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = jo(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = jo(t),
            t = t === t ? t : 0),
            PD(jo(e), t, r)
        }
        Og.exports = ND
    }
    );
    var qg, kg, Xg, Gg, DD, MD, FD, qD, kD, XD, GD, VD, UD, WD, BD, HD, zD, KD, jD, Vg, Ug, YD, QD, $D, Wg, ZD, JD, Bg, eM, Yo, Hg, Rg, Cg, zg, Sr, tM, rt, Kg, rM, Fe, Ke, Or, jg, Qo, Lg, $o, nM, wr, iM, oM, aM, Yg, Pg, sM, Ng, uM, cM, lM, Dg, Nn, Dn, Mg, Fg, Qg, $g = ve( () => {
        "use strict";
        qg = le(Ag()),
        kg = le(an()),
        Xg = le(xg());
        De();
        Zo();
        Sn();
        Gg = le(bt()),
        {MOUSE_CLICK: DD, MOUSE_SECOND_CLICK: MD, MOUSE_DOWN: FD, MOUSE_UP: qD, MOUSE_OVER: kD, MOUSE_OUT: XD, DROPDOWN_CLOSE: GD, DROPDOWN_OPEN: VD, SLIDER_ACTIVE: UD, SLIDER_INACTIVE: WD, TAB_ACTIVE: BD, TAB_INACTIVE: HD, NAVBAR_CLOSE: zD, NAVBAR_OPEN: KD, MOUSE_MOVE: jD, PAGE_SCROLL_DOWN: Vg, SCROLL_INTO_VIEW: Ug, SCROLL_OUT_OF_VIEW: YD, PAGE_SCROLL_UP: QD, SCROLLING_IN_VIEW: $D, PAGE_FINISH: Wg, ECOMMERCE_CART_CLOSE: ZD, ECOMMERCE_CART_OPEN: JD, PAGE_START: Bg, PAGE_SCROLL: eM} = He,
        Yo = "COMPONENT_ACTIVE",
        Hg = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Rg} = we,
        {getNamespacedParameterId: Cg} = Gg.IX2VanillaUtils,
        zg = e => t => typeof t == "object" && e(t) ? !0 : t,
        Sr = zg( ({element: e, nativeEvent: t}) => e === t.target),
        tM = zg( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        rt = (0,
        qg.default)([Sr, tM]),
        Kg = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , o = n[t];
                if (o && !nM[o.eventTypeId])
                    return o
            }
            return null
        }
        ,
        rM = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!Kg(e, n)
        }
        ,
        Fe = ({store: e, event: t, element: r, eventStateKey: n}, o) => {
            let {action: i, id: a} = t
              , {actionListId: u, autoStopEventId: s} = i.config
              , l = Kg(e, s);
            return l && $t({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Rg + n.split(Rg)[1],
                actionListId: (0,
                kg.default)(l, "action.config.actionListId")
            }),
            $t({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }),
            xr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }),
            o
        }
        ,
        Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
        Or = {
            handler: Ke(rt, Fe)
        },
        jg = {
            ...Or,
            types: [Yo, Hg].join(" ")
        },
        Qo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Lg = "mouseover mouseout",
        $o = {
            types: Qo
        },
        nM = {
            PAGE_START: Bg,
            PAGE_FINISH: Wg
        },
        wr = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                Xg.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        iM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        oM = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: o} = t
              , i = e.contains(n);
            if (r === "mouseover" && i)
                return !0;
            let a = e.contains(o);
            return !!(r === "mouseout" && i && a)
        }
        ,
        aM = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: o} = wr()
              , i = r.scrollOffsetValue
              , s = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
            return iM(t.getBoundingClientRect(), {
                left: 0,
                top: s,
                right: n,
                bottom: o - s
            })
        }
        ,
        Yg = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , o = [Yo, Hg].indexOf(n) !== -1 ? n === Yo : r.isActive
              , i = {
                ...r,
                isActive: o
            };
            return (!r || i.isActive !== r.isActive) && e(t, i) || i
        }
        ,
        Pg = e => (t, r) => {
            let n = {
                elementHovered: oM(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        sM = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: aM(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        Ng = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: o, innerHeight: i} = wr()
              , {event: {config: a, eventTypeId: u}} = t
              , {scrollOffsetValue: s, scrollOffsetUnit: l} = a
              , m = l === "PX"
              , g = o - i
              , h = Number((n / g).toFixed(2));
            if (r && r.percentTop === h)
                return r;
            let E = (m ? s : i * (s || 0) / 100) / g, w, b, R = 0;
            r && (w = h > r.percentTop,
            b = r.scrollingDown !== w,
            R = b ? h : r.anchorTop);
            let A = u === Vg ? h >= R + E : h <= R - E
              , P = {
                ...r,
                percentTop: h,
                inBounds: A,
                anchorTop: R,
                scrollingDown: w
            };
            return r && A && (b || P.inBounds !== r.inBounds) && e(t, P) || P
        }
        ,
        uM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        cM = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        lM = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        Dg = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        Nn = (e=!0) => ({
            ...jg,
            handler: Ke(e ? rt : Sr, Yg( (t, r) => r.isActive ? Or.handler(t, r) : r))
        }),
        Dn = (e=!0) => ({
            ...jg,
            handler: Ke(e ? rt : Sr, Yg( (t, r) => r.isActive ? r : Or.handler(t, r)))
        }),
        Mg = {
            ...$o,
            handler: sM( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: o} = e
                  , {ixData: i} = o.getState()
                  , {events: a} = i;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Ug === r ? (Fe(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Fg = .05,
        Qg = {
            [UD]: Nn(),
            [WD]: Dn(),
            [VD]: Nn(),
            [GD]: Dn(),
            [KD]: Nn(!1),
            [zD]: Dn(!1),
            [BD]: Nn(),
            [HD]: Dn(),
            [JD]: {
                types: "ecommerce-cart-open",
                handler: Ke(rt, Fe)
            },
            [ZD]: {
                types: "ecommerce-cart-close",
                handler: Ke(rt, Fe)
            },
            [DD]: {
                types: "click",
                handler: Ke(rt, Dg( (e, {clickCount: t}) => {
                    rM(e) ? t === 1 && Fe(e) : Fe(e)
                }
                ))
            },
            [MD]: {
                types: "click",
                handler: Ke(rt, Dg( (e, {clickCount: t}) => {
                    t === 2 && Fe(e)
                }
                ))
            },
            [FD]: {
                ...Or,
                types: "mousedown"
            },
            [qD]: {
                ...Or,
                types: "mouseup"
            },
            [kD]: {
                types: Lg,
                handler: Ke(rt, Pg( (e, t) => {
                    t.elementHovered && Fe(e)
                }
                ))
            },
            [XD]: {
                types: Lg,
                handler: Ke(rt, Pg( (e, t) => {
                    t.elementHovered || Fe(e)
                }
                ))
            },
            [jD]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o}, i={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: u, continuousParameterGroupId: s, reverse: l, restingState: m=0} = r
                      , {clientX: g=i.clientX, clientY: h=i.clientY, pageX: E=i.pageX, pageY: w=i.pageY} = n
                      , b = u === "X_AXIS"
                      , R = n.type === "mouseout"
                      , A = m / 100
                      , P = s
                      , C = !1;
                    switch (a) {
                    case Ze.VIEWPORT:
                        {
                            A = b ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Ze.PAGE:
                        {
                            let {scrollLeft: M, scrollTop: D, scrollWidth: N, scrollHeight: W} = wr();
                            A = b ? Math.min(M + E, N) / N : Math.min(D + w, W) / W;
                            break
                        }
                    case Ze.ELEMENT:
                    default:
                        {
                            P = Cg(o, s);
                            let M = n.type.indexOf("mouse") === 0;
                            if (M && rt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let D = t.getBoundingClientRect()
                              , {left: N, top: W, width: H, height: j} = D;
                            if (!M && !uM({
                                left: g,
                                top: h
                            }, D))
                                break;
                            C = !0,
                            A = b ? (g - N) / H : (h - W) / j;
                            break
                        }
                    }
                    return R && (A > 1 - Fg || A < Fg) && (A = Math.round(A)),
                    (a !== Ze.ELEMENT || C || C !== i.elementHovered) && (A = l ? 1 - A : A,
                    e.dispatch(Yt(P, A))),
                    {
                        elementHovered: C,
                        clientX: g,
                        clientY: h,
                        pageX: E,
                        pageY: w
                    }
                }
            },
            [eM]: {
                types: Qo,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: o, scrollHeight: i, clientHeight: a} = wr()
                      , u = o / (i - a);
                    u = n ? 1 - u : u,
                    e.dispatch(Yt(r, u))
                }
            },
            [$D]: {
                types: Qo,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, o={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: i, scrollTop: a, scrollWidth: u, scrollHeight: s, clientHeight: l} = wr()
                      , {basedOn: m, selectedAxis: g, continuousParameterGroupId: h, startsEntering: E, startsExiting: w, addEndOffset: b, addStartOffset: R, addOffsetValue: A=0, endOffsetValue: P=0} = r
                      , C = g === "X_AXIS";
                    if (m === Ze.VIEWPORT) {
                        let M = C ? i / u : a / s;
                        return M !== o.scrollPercent && t.dispatch(Yt(h, M)),
                        {
                            scrollPercent: M
                        }
                    } else {
                        let M = Cg(n, h)
                          , D = e.getBoundingClientRect()
                          , N = (R ? A : 0) / 100
                          , W = (b ? P : 0) / 100;
                        N = E ? N : 1 - N,
                        W = w ? W : 1 - W;
                        let H = D.top + Math.min(D.height * N, l)
                          , J = D.top + D.height * W - H
                          , re = Math.min(l + J, s)
                          , O = Math.min(Math.max(0, l - H), re) / re;
                        return O !== o.scrollPercent && t.dispatch(Yt(M, O)),
                        {
                            scrollPercent: O
                        }
                    }
                }
            },
            [Ug]: Mg,
            [YD]: Mg,
            [Vg]: {
                ...$o,
                handler: Ng( (e, t) => {
                    t.scrollingDown && Fe(e)
                }
                )
            },
            [QD]: {
                ...$o,
                handler: Ng( (e, t) => {
                    t.scrollingDown || Fe(e)
                }
                )
            },
            [Wg]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Sr, cM(Fe))
            },
            [Bg]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Sr, lM(Fe))
            }
        }
    }
    );
    var hv = {};
    Pe(hv, {
        observeRequests: () => CM,
        startActionGroup: () => xr,
        startEngine: () => Gn,
        stopActionGroup: () => $t,
        stopAllActionGroups: () => fv,
        stopEngine: () => Vn
    });
    function CM(e) {
        At({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: NM
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: DM
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: MM
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: FM
        })
    }
    function LM(e) {
        At({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Vn(e),
                sv({
                    store: e,
                    elementApi: Re
                }),
                Gn({
                    store: e,
                    allowEvents: !0
                }),
                uv()
            }
        })
    }
    function PM(e, t) {
        let r = At({
            store: e,
            select: ({ixSession: n}) => n.tick,
            onChange: n => {
                t(n),
                r()
            }
        })
    }
    function NM({rawData: e, defer: t}, r) {
        let n = () => {
            Gn({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            uv()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function uv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function DM(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: u, testManual: s, verbose: l=!0} = e
          , {rawData: m} = e;
        if (n && o && m && u) {
            let g = m.actionLists[n];
            g && (m = mM({
                actionList: g,
                actionItemId: o,
                rawData: m
            }))
        }
        if (Gn({
            store: t,
            rawData: m,
            allowEvents: a,
            testManual: s
        }),
        n && r === Ne.GENERAL_START_ACTION || Jo(r)) {
            $t({
                store: t,
                actionListId: n
            }),
            lv({
                store: t,
                actionListId: n,
                eventId: i
            });
            let g = xr({
                store: t,
                eventId: i,
                actionListId: n,
                immediate: u,
                verbose: l
            });
            l && g && t.dispatch(Qt({
                actionListId: n,
                isPlaying: !u
            }))
        }
    }
    function MM({actionListId: e}, t) {
        e ? $t({
            store: t,
            actionListId: e
        }) : fv({
            store: t
        }),
        Vn(t)
    }
    function FM(e, t) {
        Vn(t),
        sv({
            store: t,
            elementApi: Re
        })
    }
    function Gn({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: o} = e.getState();
        t && e.dispatch(Co(t)),
        o.active || (e.dispatch(Lo({
            hasBoundaryNodes: !!document.querySelector(Fn),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (UM(e),
        qM(),
        e.getState().ixSession.hasDefinedMediaQueries && LM(e)),
        e.dispatch(Po()),
        kM(e, n))
    }
    function qM() {
        let {documentElement: e} = document;
        e.className.indexOf(Zg) === -1 && (e.className += ` ${Zg}`)
    }
    function kM(e, t) {
        let r = n => {
            let {ixSession: o, ixParameters: i} = e.getState();
            o.active && (e.dispatch(An(n, i)),
            t ? PM(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Vn(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(XM),
            bM(),
            e.dispatch(No())
        }
    }
    function XM({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function GM({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: u, restingValue: s}) {
        let {ixData: l, ixSession: m} = e.getState()
          , {events: g} = l
          , h = g[n]
          , {eventTypeId: E} = h
          , w = {}
          , b = {}
          , R = []
          , {continuousActionGroups: A} = a
          , {id: P} = a;
        _M(E, o) && (P = IM(t, P));
        let C = m.hasBoundaryNodes && r ? Ar(r, Fn) : null;
        A.forEach(M => {
            let {keyframe: D, actionItems: N} = M;
            N.forEach(W => {
                let {actionTypeId: H} = W
                  , {target: j} = W.config;
                if (!j)
                    return;
                let J = j.boundaryMode ? C : null
                  , re = AM(j) + ea + H;
                if (b[re] = VM(b[re], D, W),
                !w[re]) {
                    w[re] = !0;
                    let {config: k} = W;
                    qn({
                        config: k,
                        event: h,
                        eventTarget: r,
                        elementRoot: J,
                        elementApi: Re
                    }).forEach(O => {
                        R.push({
                            element: O,
                            key: re
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        R.forEach( ({element: M, key: D}) => {
            let N = b[D]
              , W = (0,
            ut.default)(N, "[0].actionItems[0]", {})
              , {actionTypeId: H} = W
              , j = Xn(H) ? ra(H)(M, W) : null
              , J = ta({
                element: M,
                actionItem: W,
                elementApi: Re
            }, j);
            na({
                store: e,
                element: M,
                eventId: n,
                actionListId: i,
                actionItem: W,
                destination: J,
                continuous: !0,
                parameterId: P,
                actionGroups: N,
                smoothing: u,
                restingValue: s,
                pluginInstance: j
            })
        }
        )
    }
    function VM(e=[], t, r) {
        let n = [...e], o;
        return n.some( (i, a) => i.keyframe === t ? (o = a,
        !0) : !1),
        o == null && (o = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[o].actionItems.push(r),
        n
    }
    function UM(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        cv(e),
        (0,
        Zt.default)(r, (o, i) => {
            let a = Qg[i];
            if (!a) {
                console.warn(`IX2 event type not configured: ${i}`);
                return
            }
            jM({
                logic: a,
                store: e,
                events: o
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && BM(e)
    }
    function BM(e) {
        let t = () => {
            cv(e)
        }
        ;
        WM.forEach(r => {
            window.addEventListener(r, t),
            e.dispatch(bn(window, [r, t]))
        }
        ),
        t()
    }
    function cv(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: o} = r;
            e.dispatch(ko({
                width: n,
                mediaQueries: o
            }))
        }
    }
    function jM({logic: e, store: t, events: r}) {
        YM(r);
        let {types: n, handler: o} = e
          , {ixData: i} = t.getState()
          , {actionLists: a} = i
          , u = HM(r, KM);
        if (!(0,
        tv.default)(u))
            return;
        (0,
        Zt.default)(u, (g, h) => {
            let E = r[h]
              , {action: w, id: b, mediaQueries: R=i.mediaQueryKeys} = E
              , {actionListId: A} = w.config;
            wM(R, i.mediaQueryKeys) || t.dispatch(Xo()),
            w.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(C => {
                let {continuousParameterGroupId: M} = C
                  , D = (0,
                ut.default)(a, `${A}.continuousParameterGroups`, [])
                  , N = (0,
                ev.default)(D, ({id: j}) => j === M)
                  , W = (C.smoothing || 0) / 100
                  , H = (C.restingState || 0) / 100;
                N && g.forEach( (j, J) => {
                    let re = b + ea + J;
                    GM({
                        store: t,
                        eventStateKey: re,
                        eventTarget: j,
                        eventId: b,
                        eventConfig: C,
                        actionListId: A,
                        parameterGroup: N,
                        smoothing: W,
                        restingValue: H
                    })
                }
                )
            }
            ),
            (w.actionTypeId === Ne.GENERAL_START_ACTION || Jo(w.actionTypeId)) && lv({
                store: t,
                actionListId: A,
                eventId: b
            })
        }
        );
        let s = g => {
            let {ixSession: h} = t.getState();
            zM(u, (E, w, b) => {
                let R = r[w]
                  , A = h.eventState[b]
                  , {action: P, mediaQueries: C=i.mediaQueryKeys} = R;
                if (!kn(C, h.mediaQueryKey))
                    return;
                let M = (D={}) => {
                    let N = o({
                        store: t,
                        element: E,
                        event: R,
                        eventConfig: D,
                        nativeEvent: g,
                        eventStateKey: b
                    }, A);
                    SM(N, A) || t.dispatch(Do(b, N))
                }
                ;
                P.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(M) : M()
            }
            )
        }
          , l = (0,
        ov.default)(s, RM)
          , m = ({target: g=document, types: h, throttle: E}) => {
            h.split(" ").filter(Boolean).forEach(w => {
                let b = E ? l : s;
                g.addEventListener(w, b),
                t.dispatch(bn(g, [w, b]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(m) : typeof n == "string" && m(e)
    }
    function YM(e) {
        if (!xM)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: o, target: i} = e[n]
              , a = Vo(i);
            t[a] || (o === He.MOUSE_CLICK || o === He.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function lv({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: o} = e.getState()
          , {actionLists: i, events: a} = n
          , u = a[r]
          , s = i[t];
        if (s && s.useFirstGroupAsInitialState) {
            let l = (0,
            ut.default)(s, "actionItemGroups[0].actionItems", [])
              , m = (0,
            ut.default)(u, "mediaQueries", n.mediaQueryKeys);
            if (!kn(m, o.mediaQueryKey))
                return;
            l.forEach(g => {
                let {config: h, actionTypeId: E} = g
                  , w = h?.target?.useEventTarget === !0 && h?.target?.objectId == null ? {
                    target: u.target,
                    targets: u.targets
                } : h
                  , b = qn({
                    config: w,
                    event: u,
                    elementApi: Re
                })
                  , R = Xn(E);
                b.forEach(A => {
                    let P = R ? ra(E)(A, g) : null;
                    na({
                        destination: ta({
                            element: A,
                            actionItem: g,
                            elementApi: Re
                        }, P),
                        immediate: !0,
                        store: e,
                        element: A,
                        eventId: r,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: P
                    })
                }
                )
            }
            )
        }
    }
    function fv({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        Zt.default)(t, r => {
            if (!r.continuous) {
                let {actionListId: n, verbose: o} = r;
                ia(r, e),
                o && e.dispatch(Qt({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function $t({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o}) {
        let {ixInstances: i, ixSession: a} = e.getState()
          , u = a.hasBoundaryNodes && r ? Ar(r, Fn) : null;
        (0,
        Zt.default)(i, s => {
            let l = (0,
            ut.default)(s, "actionItem.config.target.boundaryMode")
              , m = n ? s.eventStateKey === n : !0;
            if (s.actionListId === o && s.eventId === t && m) {
                if (u && l && !Uo(u, s.element))
                    return;
                ia(s, e),
                s.verbose && e.dispatch(Qt({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function xr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i=0, immediate: a, verbose: u}) {
        let {ixData: s, ixSession: l} = e.getState()
          , {events: m} = s
          , g = m[t] || {}
          , {mediaQueries: h=s.mediaQueryKeys} = g
          , E = (0,
        ut.default)(s, `actionLists.${o}`, {})
          , {actionItemGroups: w, useFirstGroupAsInitialState: b} = E;
        if (!w || !w.length)
            return !1;
        i >= w.length && (0,
        ut.default)(g, "config.loop") && (i = 0),
        i === 0 && b && i++;
        let A = (i === 0 || i === 1 && b) && Jo(g.action?.actionTypeId) ? g.config.delay : void 0
          , P = (0,
        ut.default)(w, [i, "actionItems"], []);
        if (!P.length || !kn(h, l.mediaQueryKey))
            return !1;
        let C = l.hasBoundaryNodes && r ? Ar(r, Fn) : null
          , M = vM(P)
          , D = !1;
        return P.forEach( (N, W) => {
            let {config: H, actionTypeId: j} = N
              , J = Xn(j)
              , {target: re} = H;
            if (!re)
                return;
            let k = re.boundaryMode ? C : null;
            qn({
                config: H,
                event: g,
                eventTarget: r,
                elementRoot: k,
                elementApi: Re
            }).forEach( (F, B) => {
                let U = J ? ra(j)(F, N) : null
                  , ee = J ? OM(j)(F, N) : null;
                D = !0;
                let ne = M === W && B === 0
                  , q = EM({
                    element: F,
                    actionItem: N
                })
                  , K = ta({
                    element: F,
                    actionItem: N,
                    elementApi: Re
                }, U);
                na({
                    store: e,
                    element: F,
                    actionItem: N,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: o,
                    groupIndex: i,
                    isCarrier: ne,
                    computedStyle: q,
                    destination: K,
                    immediate: a,
                    verbose: u,
                    pluginInstance: U,
                    pluginDuration: ee,
                    instanceDelay: A
                })
            }
            )
        }
        ),
        D
    }
    function na(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: o, actionItem: i, immediate: a, pluginInstance: u, continuous: s, restingValue: l, eventId: m} = n, g = !s, h = hM(), {ixElements: E, ixSession: w, ixData: b} = t.getState(), R = pM(E, o), {refState: A} = E[R] || {}, P = Wo(o), C = w.reducedMotion && Ei[i.actionTypeId], M;
        if (C && s)
            switch (b.events[m]?.eventTypeId) {
            case He.MOUSE_MOVE:
            case He.MOUSE_MOVE_IN_VIEWPORT:
                M = l;
                break;
            default:
                M = .5;
                break
            }
        let D = yM(o, A, r, i, Re, u);
        if (t.dispatch(Mo({
            instanceId: h,
            elementId: R,
            origin: D,
            refType: P,
            skipMotion: C,
            skipToValue: M,
            ...n
        })),
        dv(document.body, "ix2-animation-started", h),
        a) {
            QM(t, h);
            return
        }
        At({
            store: t,
            select: ({ixInstances: N}) => N[h],
            onChange: pv
        }),
        g && t.dispatch(wn(h, w.tick))
    }
    function ia(e, t) {
        dv(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: o} = t.getState()
          , {ref: i, refType: a} = o[r] || {};
        a === av && TM(i, n, Re),
        t.dispatch(Fo(e.id))
    }
    function dv(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function QM(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(wn(t, 0)),
        e.dispatch(An(performance.now(), r));
        let {ixInstances: n} = e.getState();
        pv(n[t], e)
    }
    function pv(e, t) {
        let {active: r, continuous: n, complete: o, elementId: i, actionItem: a, actionTypeId: u, renderType: s, current: l, groupIndex: m, eventId: g, eventTarget: h, eventStateKey: E, actionListId: w, isCarrier: b, styleProp: R, verbose: A, pluginInstance: P} = e
          , {ixData: C, ixSession: M} = t.getState()
          , {events: D} = C
          , N = D && D[g] ? D[g] : {}
          , {mediaQueries: W=C.mediaQueryKeys} = N;
        if (kn(W, M.mediaQueryKey) && (n || r || o)) {
            if (l || s === dM && o) {
                t.dispatch(qo(i, u, l, a));
                let {ixElements: H} = t.getState()
                  , {ref: j, refType: J, refState: re} = H[i] || {}
                  , k = re && re[u];
                (J === av || Xn(u)) && gM(j, re, k, g, a, R, Re, s, P)
            }
            if (o) {
                if (b) {
                    let H = xr({
                        store: t,
                        eventId: g,
                        eventTarget: h,
                        eventStateKey: E,
                        actionListId: w,
                        groupIndex: m + 1,
                        verbose: A
                    });
                    A && !H && t.dispatch(Qt({
                        actionListId: w,
                        isPlaying: !1
                    }))
                }
                ia(e, t)
            }
        }
    }
    var ev, ut, tv, rv, nv, iv, Zt, ov, Mn, fM, Jo, ea, Fn, av, dM, Zg, qn, pM, ta, At, hM, gM, sv, vM, EM, yM, mM, _M, IM, kn, TM, bM, AM, wM, SM, Xn, ra, OM, Jg, xM, RM, WM, HM, zM, KM, Zo = ve( () => {
        "use strict";
        ev = le(zi()),
        ut = le(an()),
        tv = le(Op()),
        rv = le(Jp()),
        nv = le(th()),
        iv = le(nh()),
        Zt = le(ch()),
        ov = le(vh());
        De();
        Mn = le(bt());
        Sn();
        Th();
        $g();
        fM = Object.keys(qr),
        Jo = e => fM.includes(e),
        {COLON_DELIMITER: ea, BOUNDARY_SELECTOR: Fn, HTML_ELEMENT: av, RENDER_GENERAL: dM, W_MOD_IX: Zg} = we,
        {getAffectedElements: qn, getElementId: pM, getDestinationValues: ta, observeStore: At, getInstanceId: hM, renderHTMLElement: gM, clearAllStyles: sv, getMaxDurationItemIndex: vM, getComputedStyle: EM, getInstanceOrigin: yM, reduceListToGroup: mM, shouldNamespaceEventParameter: _M, getNamespacedParameterId: IM, shouldAllowMediaQuery: kn, cleanupHTMLElement: TM, clearObjectCache: bM, stringifyTarget: AM, mediaQueriesEqual: wM, shallowEqual: SM} = Mn.IX2VanillaUtils,
        {isPluginType: Xn, createPluginInstance: ra, getPluginDuration: OM} = Mn.IX2VanillaPlugins,
        Jg = navigator.userAgent,
        xM = Jg.match(/iPad/i) || Jg.match(/iPhone/),
        RM = 12;
        WM = ["resize", "orientationchange"];
        HM = (e, t) => (0,
        rv.default)((0,
        iv.default)(e, t), nv.default),
        zM = (e, t) => {
            (0,
            Zt.default)(e, (r, n) => {
                r.forEach( (o, i) => {
                    let a = n + ea + i;
                    t(o, n, a)
                }
                )
            }
            )
        }
        ,
        KM = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return qn({
                config: t,
                elementApi: Re
            })
        }
    }
    );
    var Ev = f(aa => {
        "use strict";
        Object.defineProperty(aa, "__esModule", {
            value: !0
        });
        function $M(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        $M(aa, {
            actions: function() {
                return eF
            },
            destroy: function() {
                return vv
            },
            init: function() {
                return iF
            },
            setEnv: function() {
                return nF
            },
            store: function() {
                return Un
            }
        });
        var ZM = hi()
          , JM = tF((up(),
        Ye(sp)))
          , oa = (Zo(),
        Ye(hv))
          , eF = rF((Sn(),
        Ye(yh)));
        function tF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function gv(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (gv = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function rF(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = gv(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        var Un = (0,
        ZM.createStore)(JM.default);
        function nF(e) {
            e() && (0,
            oa.observeRequests)(Un)
        }
        function iF(e) {
            vv(),
            (0,
            oa.startEngine)({
                store: Un,
                rawData: e,
                allowEvents: !0
            })
        }
        function vv() {
            (0,
            oa.stopEngine)(Un)
        }
    }
    );
    var Iv = f( (oX, _v) => {
        "use strict";
        var yv = qe()
          , mv = Ev();
        mv.setEnv(yv.env);
        yv.define("ix2", _v.exports = function() {
            return mv
        }
        )
    }
    );
    var bv = f( (aX, Tv) => {
        "use strict";
        var Jt = qe();
        Jt.define("links", Tv.exports = function(e, t) {
            var r = {}, n = e(window), o, i = Jt.env(), a = window.location, u = document.createElement("a"), s = "w--current", l = /index\.(html|php)$/, m = /\/$/, g, h;
            r.ready = r.design = r.preview = E;
            function E() {
                o = i && Jt.env("design"),
                h = Jt.env("slug") || a.pathname || "",
                Jt.scroll.off(b),
                g = [];
                for (var A = document.links, P = 0; P < A.length; ++P)
                    w(A[P]);
                g.length && (Jt.scroll.on(b),
                b())
            }
            function w(A) {
                if (!A.getAttribute("hreflang")) {
                    var P = o && A.getAttribute("href-disabled") || A.getAttribute("href");
                    if (u.href = P,
                    !(P.indexOf(":") >= 0)) {
                        var C = e(A);
                        if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash))
                                return;
                            var M = e(u.hash);
                            M.length && g.push({
                                link: C,
                                sec: M,
                                active: !1
                            });
                            return
                        }
                        if (!(P === "#" || P === "")) {
                            var D = u.href === a.href || P === h || l.test(P) && m.test(h);
                            R(C, s, D)
                        }
                    }
                }
            }
            function b() {
                var A = n.scrollTop()
                  , P = n.height();
                t.each(g, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var M = C.link
                          , D = C.sec
                          , N = D.offset().top
                          , W = D.outerHeight()
                          , H = P * .5
                          , j = D.is(":visible") && N + W - H >= A && N + H <= A + P;
                        C.active !== j && (C.active = j,
                        R(M, s, j))
                    }
                })
            }
            function R(A, P, C) {
                var M = A.hasClass(P);
                C && M || !C && !M || (C ? A.addClass(P) : A.removeClass(P))
            }
            return r
        }
        )
    }
    );
    var wv = f( (sX, Av) => {
        "use strict";
        var Wn = qe();
        Wn.define("scroll", Av.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = w() ? null : window.history
              , o = e(window)
              , i = e(document)
              , a = e(document.body)
              , u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(k) {
                window.setTimeout(k, 15)
            }
              , s = Wn.env("editor") ? ".w-editor-body" : "body"
              , l = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])"
              , m = 'a[href="#"]'
              , g = 'a[href*="#"]:not(.w-tab-link):not(' + m + ")"
              , h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , E = document.createElement("style");
            E.appendChild(document.createTextNode(h));
            function w() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;
            function R(k) {
                return b.test(k.hash) && k.host + k.pathname === r.host + r.pathname
            }
            let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function P() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
            }
            function C(k, O) {
                var F;
                switch (O) {
                case "add":
                    F = k.attr("tabindex"),
                    F ? k.attr("data-wf-tabindex-swap", F) : k.attr("tabindex", "-1");
                    break;
                case "remove":
                    F = k.attr("data-wf-tabindex-swap"),
                    F ? (k.attr("tabindex", F),
                    k.removeAttr("data-wf-tabindex-swap")) : k.removeAttr("tabindex");
                    break
                }
                k.toggleClass("wf-force-outline-none", O === "add")
            }
            function M(k) {
                var O = k.currentTarget;
                if (!(Wn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                    var F = R(O) ? O.hash : "";
                    if (F !== "") {
                        var B = e(F);
                        B.length && (k && (k.preventDefault(),
                        k.stopPropagation()),
                        D(F, k),
                        window.setTimeout(function() {
                            N(B, function() {
                                C(B, "add"),
                                B.get(0).focus({
                                    preventScroll: !0
                                }),
                                C(B, "remove")
                            })
                        }, k ? 0 : 300))
                    }
                }
            }
            function D(k) {
                if (r.hash !== k && n && n.pushState && !(Wn.env.chrome && r.protocol === "file:")) {
                    var O = n.state && n.state.hash;
                    O !== k && n.pushState({
                        hash: k
                    }, "", k)
                }
            }
            function N(k, O) {
                var F = o.scrollTop()
                  , B = W(k);
                if (F !== B) {
                    var U = H(k, F, B)
                      , ee = Date.now()
                      , ne = function() {
                        var q = Date.now() - ee;
                        window.scroll(0, j(F, B, q, U)),
                        q <= U ? u(ne) : typeof O == "function" && O()
                    };
                    u(ne)
                }
            }
            function W(k) {
                var O = e(l)
                  , F = O.css("position") === "fixed" ? O.outerHeight() : 0
                  , B = k.offset().top - F;
                if (k.data("scroll") === "mid") {
                    var U = o.height() - F
                      , ee = k.outerHeight();
                    ee < U && (B -= Math.round((U - ee) / 2))
                }
                return B
            }
            function H(k, O, F) {
                if (P())
                    return 0;
                var B = 1;
                return a.add(k).each(function(U, ee) {
                    var ne = parseFloat(ee.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (B = ne)
                }),
                (472.143 * Math.log(Math.abs(O - F) + 125) - 2e3) * B
            }
            function j(k, O, F, B) {
                return F > B ? O : k + (O - k) * J(F / B)
            }
            function J(k) {
                return k < .5 ? 4 * k * k * k : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1
            }
            function re() {
                var {WF_CLICK_EMPTY: k, WF_CLICK_SCROLL: O} = t;
                i.on(O, g, M),
                i.on(k, m, function(F) {
                    F.preventDefault()
                }),
                document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: re
            }
        }
        )
    }
    );
    var Ov = f( (uX, Sv) => {
        "use strict";
        var oF = qe();
        oF.define("touch", Sv.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i,
                i ? new n(i) : null
            }
            ;
            function n(i) {
                var a = !1, u = !1, s = Math.min(Math.round(window.innerWidth * .04), 40), l, m;
                i.addEventListener("touchstart", g, !1),
                i.addEventListener("touchmove", h, !1),
                i.addEventListener("touchend", E, !1),
                i.addEventListener("touchcancel", w, !1),
                i.addEventListener("mousedown", g, !1),
                i.addEventListener("mousemove", h, !1),
                i.addEventListener("mouseup", E, !1),
                i.addEventListener("mouseout", w, !1);
                function g(R) {
                    var A = R.touches;
                    A && A.length > 1 || (a = !0,
                    A ? (u = !0,
                    l = A[0].clientX) : l = R.clientX,
                    m = l)
                }
                function h(R) {
                    if (a) {
                        if (u && R.type === "mousemove") {
                            R.preventDefault(),
                            R.stopPropagation();
                            return
                        }
                        var A = R.touches
                          , P = A ? A[0].clientX : R.clientX
                          , C = P - m;
                        m = P,
                        Math.abs(C) > s && r && String(r()) === "" && (o("swipe", R, {
                            direction: C > 0 ? "right" : "left"
                        }),
                        w())
                    }
                }
                function E(R) {
                    if (a && (a = !1,
                    u && R.type === "mouseup")) {
                        R.preventDefault(),
                        R.stopPropagation(),
                        u = !1;
                        return
                    }
                }
                function w() {
                    a = !1
                }
                function b() {
                    i.removeEventListener("touchstart", g, !1),
                    i.removeEventListener("touchmove", h, !1),
                    i.removeEventListener("touchend", E, !1),
                    i.removeEventListener("touchcancel", w, !1),
                    i.removeEventListener("mousedown", g, !1),
                    i.removeEventListener("mousemove", h, !1),
                    i.removeEventListener("mouseup", E, !1),
                    i.removeEventListener("mouseout", w, !1),
                    i = null
                }
                this.destroy = b
            }
            function o(i, a, u) {
                var s = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(s, u)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var xv = f(sa => {
        "use strict";
        Object.defineProperty(sa, "__esModule", {
            value: !0
        });
        Object.defineProperty(sa, "default", {
            enumerable: !0,
            get: function() {
                return aF
            }
        });
        function aF(e, t, r, n, o, i, a, u, s, l, m, g, h) {
            return function(E) {
                e(E);
                var w = E.form
                  , b = {
                    name: w.attr("data-name") || w.attr("name") || "Untitled Form",
                    pageId: w.attr("data-wf-page-id") || "",
                    elementId: w.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(w.html()),
                    trackingCookies: n()
                };
                let R = w.attr("data-wf-flow");
                R && (b.wfFlow = R),
                o(E);
                var A = i(w, b.fields);
                if (A)
                    return a(A);
                if (b.fileUploads = u(w),
                s(E),
                !l) {
                    m(E);
                    return
                }
                g.ajax({
                    url: h,
                    type: "POST",
                    data: b,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(P) {
                    P && P.code === 200 && (E.success = !0),
                    m(E)
                }).fail(function() {
                    m(E)
                })
            }
        }
    }
    );
    var Cv = f( (lX, Rv) => {
        "use strict";
        var Bn = qe();
        Bn.define("forms", Rv.exports = function(e, t) {
            var r = {}, n = e(document), o, i = window.location, a = window.XDomainRequest && !window.atob, u = ".w-form", s, l = /e(-)?mail/i, m = /^\S+@\S+$/, g = window.alert, h = Bn.env(), E, w, b, R = /list-manage[1-9]?.com/i, A = t.debounce(function() {
                g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                P(),
                !h && !E && M()
            }
            ;
            function P() {
                s = e("html").attr("data-wf-site"),
                w = "https://webflow.com/api/v1/form/" + s,
                a && w.indexOf("https://webflow.com") >= 0 && (w = w.replace("https://webflow.com", "https://formdata.webflow.com")),
                b = `${w}/signFile`,
                o = e(u + " form"),
                o.length && o.each(C)
            }
            function C(q, K) {
                var d = e(K)
                  , y = e.data(K, u);
                y || (y = e.data(K, u, {
                    form: d
                })),
                D(y);
                var I = d.closest("div.w-form");
                y.done = I.find("> .w-form-done"),
                y.fail = I.find("> .w-form-fail"),
                y.fileUploads = I.find(".w-file-upload"),
                y.fileUploads.each(function(Q) {
                    U(Q, y)
                });
                var v = y.form.attr("aria-label") || y.form.attr("data-name") || "Form";
                y.done.attr("aria-label") || y.form.attr("aria-label", v),
                y.done.attr("tabindex", "-1"),
                y.done.attr("role", "region"),
                y.done.attr("aria-label") || y.done.attr("aria-label", v + " success"),
                y.fail.attr("tabindex", "-1"),
                y.fail.attr("role", "region"),
                y.fail.attr("aria-label") || y.fail.attr("aria-label", v + " failure");
                var z = y.action = d.attr("action");
                if (y.handler = null,
                y.redirect = d.attr("data-redirect"),
                R.test(z)) {
                    y.handler = O;
                    return
                }
                if (!z) {
                    if (s) {
                        y.handler = ( () => {
                            let Q = xv().default;
                            return Q(D, i, Bn, J, B, W, g, H, N, s, F, e, w)
                        }
                        )();
                        return
                    }
                    A()
                }
            }
            function M() {
                E = !0,
                n.on("submit", u + " form", function(Q) {
                    var $ = e.data(this, u);
                    $.handler && ($.evt = Q,
                    $.handler($))
                });
                let q = ".w-checkbox-input"
                  , K = ".w-radio-input"
                  , d = "w--redirected-checked"
                  , y = "w--redirected-focus"
                  , I = "w--redirected-focus-visible"
                  , v = ":focus-visible, [data-wf-focus-visible]"
                  , z = [["checkbox", q], ["radio", K]];
                n.on("change", u + ' form input[type="checkbox"]:not(' + q + ")", Q => {
                    e(Q.target).siblings(q).toggleClass(d)
                }
                ),
                n.on("change", u + ' form input[type="radio"]', Q => {
                    e(`input[name="${Q.target.name}"]:not(${q})`).map( (ue, me) => e(me).siblings(K).removeClass(d));
                    let $ = e(Q.target);
                    $.hasClass("w-radio-input") || $.siblings(K).addClass(d)
                }
                ),
                z.forEach( ([Q,$]) => {
                    n.on("focus", u + ` form input[type="${Q}"]:not(` + $ + ")", ue => {
                        e(ue.target).siblings($).addClass(y),
                        e(ue.target).filter(v).siblings($).addClass(I)
                    }
                    ),
                    n.on("blur", u + ` form input[type="${Q}"]:not(` + $ + ")", ue => {
                        e(ue.target).siblings($).removeClass(`${y} ${I}`)
                    }
                    )
                }
                )
            }
            function D(q) {
                var K = q.btn = q.form.find(':input[type="submit"]');
                q.wait = q.btn.attr("data-wait") || null,
                q.success = !1,
                K.prop("disabled", !1),
                q.label && K.val(q.label)
            }
            function N(q) {
                var K = q.btn
                  , d = q.wait;
                K.prop("disabled", !0),
                d && (q.label = K.val(),
                K.val(d))
            }
            function W(q, K) {
                var d = null;
                return K = K || {},
                q.find(':input:not([type="submit"]):not([type="file"])').each(function(y, I) {
                    var v = e(I)
                      , z = v.attr("type")
                      , Q = v.attr("data-name") || v.attr("name") || "Field " + (y + 1);
                    Q = encodeURIComponent(Q);
                    var $ = v.val();
                    if (z === "checkbox")
                        $ = v.is(":checked");
                    else if (z === "radio") {
                        if (K[Q] === null || typeof K[Q] == "string")
                            return;
                        $ = q.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof $ == "string" && ($ = e.trim($)),
                    K[Q] = $,
                    d = d || re(v, z, Q, $)
                }),
                d
            }
            function H(q) {
                var K = {};
                return q.find(':input[type="file"]').each(function(d, y) {
                    var I = e(y)
                      , v = I.attr("data-name") || I.attr("name") || "File " + (d + 1)
                      , z = I.attr("data-value");
                    typeof z == "string" && (z = e.trim(z)),
                    K[v] = z
                }),
                K
            }
            let j = {
                _mkto_trk: "marketo"
            };
            function J() {
                return document.cookie.split("; ").reduce(function(K, d) {
                    let y = d.split("=")
                      , I = y[0];
                    if (I in j) {
                        let v = j[I]
                          , z = y.slice(1).join("=");
                        K[v] = z
                    }
                    return K
                }, {})
            }
            function re(q, K, d, y) {
                var I = null;
                return K === "password" ? I = "Passwords cannot be submitted." : q.attr("required") ? y ? l.test(q.attr("type")) && (m.test(y) || (I = "Please enter a valid email address for: " + d)) : I = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !y && (I = "Please confirm you\u2019re not a robot."),
                I
            }
            function k(q) {
                B(q),
                F(q)
            }
            function O(q) {
                D(q);
                var K = q.form
                  , d = {};
                if (/^https/.test(i.href) && !/^https/.test(q.action)) {
                    K.attr("method", "post");
                    return
                }
                B(q);
                var y = W(K, d);
                if (y)
                    return g(y);
                N(q);
                var I;
                t.each(d, function($, ue) {
                    l.test(ue) && (d.EMAIL = $),
                    /^((full[ _-]?)?name)$/i.test(ue) && (I = $),
                    /^(first[ _-]?name)$/i.test(ue) && (d.FNAME = $),
                    /^(last[ _-]?name)$/i.test(ue) && (d.LNAME = $)
                }),
                I && !d.FNAME && (I = I.split(" "),
                d.FNAME = I[0],
                d.LNAME = d.LNAME || I[1]);
                var v = q.action.replace("/post?", "/post-json?") + "&c=?"
                  , z = v.indexOf("u=") + 2;
                z = v.substring(z, v.indexOf("&", z));
                var Q = v.indexOf("id=") + 3;
                Q = v.substring(Q, v.indexOf("&", Q)),
                d["b_" + z + "_" + Q] = "",
                e.ajax({
                    url: v,
                    data: d,
                    dataType: "jsonp"
                }).done(function($) {
                    q.success = $.result === "success" || /already/.test($.msg),
                    q.success || console.info("MailChimp error: " + $.msg),
                    F(q)
                }).fail(function() {
                    F(q)
                })
            }
            function F(q) {
                var K = q.form
                  , d = q.redirect
                  , y = q.success;
                if (y && d) {
                    Bn.location(d);
                    return
                }
                q.done.toggle(y),
                q.fail.toggle(!y),
                y ? q.done.focus() : q.fail.focus(),
                K.toggle(!y),
                D(q)
            }
            function B(q) {
                q.evt && q.evt.preventDefault(),
                q.evt = null
            }
            function U(q, K) {
                if (!K.fileUploads || !K.fileUploads[q])
                    return;
                var d, y = e(K.fileUploads[q]), I = y.find("> .w-file-upload-default"), v = y.find("> .w-file-upload-uploading"), z = y.find("> .w-file-upload-success"), Q = y.find("> .w-file-upload-error"), $ = I.find(".w-file-upload-input"), ue = I.find(".w-file-upload-label"), me = ue.children(), oe = Q.find(".w-file-upload-error-msg"), p = z.find(".w-file-upload-file"), X = z.find(".w-file-remove-link"), Y = p.find(".w-file-upload-file-name"), G = oe.attr("data-w-size-error"), fe = oe.attr("data-w-type-error"), Ce = oe.attr("data-w-generic-error");
                if (h || ue.on("click keydown", function(T) {
                    T.type === "keydown" && T.which !== 13 && T.which !== 32 || (T.preventDefault(),
                    $.click())
                }),
                ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                h)
                    $.on("click", function(T) {
                        T.preventDefault()
                    }),
                    ue.on("click", function(T) {
                        T.preventDefault()
                    }),
                    me.on("click", function(T) {
                        T.preventDefault()
                    });
                else {
                    X.on("click keydown", function(T) {
                        if (T.type === "keydown") {
                            if (T.which !== 13 && T.which !== 32)
                                return;
                            T.preventDefault()
                        }
                        $.removeAttr("data-value"),
                        $.val(""),
                        Y.html(""),
                        I.toggle(!0),
                        z.toggle(!1),
                        ue.focus()
                    }),
                    $.on("change", function(T) {
                        d = T.target && T.target.files && T.target.files[0],
                        d && (I.toggle(!1),
                        Q.toggle(!1),
                        v.toggle(!0),
                        v.focus(),
                        Y.text(d.name),
                        x() || N(K),
                        K.fileUploads[q].uploading = !0,
                        ee(d, _))
                    });
                    var Xe = ue.outerHeight();
                    $.height(Xe),
                    $.width(1)
                }
                function c(T) {
                    var L = T.responseJSON && T.responseJSON.msg
                      , Z = Ce;
                    typeof L == "string" && L.indexOf("InvalidFileTypeError") === 0 ? Z = fe : typeof L == "string" && L.indexOf("MaxFileSizeError") === 0 && (Z = G),
                    oe.text(Z),
                    $.removeAttr("data-value"),
                    $.val(""),
                    v.toggle(!1),
                    I.toggle(!0),
                    Q.toggle(!0),
                    Q.focus(),
                    K.fileUploads[q].uploading = !1,
                    x() || D(K)
                }
                function _(T, L) {
                    if (T)
                        return c(T);
                    var Z = L.fileName
                      , ie = L.postData
                      , he = L.fileId
                      , V = L.s3Url;
                    $.attr("data-value", he),
                    ne(V, ie, d, Z, S)
                }
                function S(T) {
                    if (T)
                        return c(T);
                    v.toggle(!1),
                    z.css("display", "inline-block"),
                    z.focus(),
                    K.fileUploads[q].uploading = !1,
                    x() || D(K)
                }
                function x() {
                    var T = K.fileUploads && K.fileUploads.toArray() || [];
                    return T.some(function(L) {
                        return L.uploading
                    })
                }
            }
            function ee(q, K) {
                var d = new URLSearchParams({
                    name: q.name,
                    size: q.size
                });
                e.ajax({
                    type: "GET",
                    url: `${b}?${d}`,
                    crossDomain: !0
                }).done(function(y) {
                    K(null, y)
                }).fail(function(y) {
                    K(y)
                })
            }
            function ne(q, K, d, y, I) {
                var v = new FormData;
                for (var z in K)
                    v.append(z, K[z]);
                v.append("file", d, y),
                e.ajax({
                    type: "POST",
                    url: q,
                    data: v,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    I(null)
                }).fail(function(Q) {
                    I(Q)
                })
            }
            return r
        }
        )
    }
    );
    var Pv = f( (fX, Lv) => {
        "use strict";
        var gt = qe()
          , sF = Fr()
          , Ae = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        gt.define("navbar", Lv.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(window), i = e(document), a = t.debounce, u, s, l, m, g = gt.env(), h = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", w = "w--open", b = "w--nav-dropdown-open", R = "w--nav-dropdown-toggle-open", A = "w--nav-dropdown-list-open", P = "w--nav-link-open", C = sF.triggers, M = e();
            r.ready = r.design = r.preview = D,
            r.destroy = function() {
                M = e(),
                N(),
                s && s.length && s.each(J)
            }
            ;
            function D() {
                l = g && gt.env("design"),
                m = gt.env("editor"),
                u = e(document.body),
                s = i.find(E),
                s.length && (s.each(j),
                N(),
                W())
            }
            function N() {
                gt.resize.off(H)
            }
            function W() {
                gt.resize.on(H)
            }
            function H() {
                s.each(I)
            }
            function j(p, X) {
                var Y = e(X)
                  , G = e.data(X, E);
                G || (G = e.data(X, E, {
                    open: !1,
                    el: Y,
                    config: {},
                    selectedIdx: -1
                })),
                G.menu = Y.find(".w-nav-menu"),
                G.links = G.menu.find(".w-nav-link"),
                G.dropdowns = G.menu.find(".w-dropdown"),
                G.dropdownToggle = G.menu.find(".w-dropdown-toggle"),
                G.dropdownList = G.menu.find(".w-dropdown-list"),
                G.button = Y.find(".w-nav-button"),
                G.container = Y.find(".w-container"),
                G.overlayContainerId = "w-nav-overlay-" + p,
                G.outside = d(G);
                var fe = Y.find(".w-nav-brand");
                fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"),
                G.button.attr("style", "-webkit-user-select: text;"),
                G.button.attr("aria-label") == null && G.button.attr("aria-label", "menu"),
                G.button.attr("role", "button"),
                G.button.attr("tabindex", "0"),
                G.button.attr("aria-controls", G.overlayContainerId),
                G.button.attr("aria-haspopup", "menu"),
                G.button.attr("aria-expanded", "false"),
                G.el.off(E),
                G.button.off(E),
                G.menu.off(E),
                O(G),
                l ? (re(G),
                G.el.on("setting" + E, F(G))) : (k(G),
                G.button.on("click" + E, q(G)),
                G.menu.on("click" + E, "a", K(G)),
                G.button.on("keydown" + E, B(G)),
                G.el.on("keydown" + E, U(G))),
                I(p, X)
            }
            function J(p, X) {
                var Y = e.data(X, E);
                Y && (re(Y),
                e.removeData(X, E))
            }
            function re(p) {
                p.overlay && (oe(p, !0),
                p.overlay.remove(),
                p.overlay = null)
            }
            function k(p) {
                p.overlay || (p.overlay = e(h).appendTo(p.el),
                p.overlay.attr("id", p.overlayContainerId),
                p.parent = p.menu.parent(),
                oe(p, !0))
            }
            function O(p) {
                var X = {}
                  , Y = p.config || {}
                  , G = X.animation = p.el.attr("data-animation") || "default";
                X.animOver = /^over/.test(G),
                X.animDirect = /left$/.test(G) ? -1 : 1,
                Y.animation !== G && p.open && t.defer(ne, p),
                X.easing = p.el.attr("data-easing") || "ease",
                X.easing2 = p.el.attr("data-easing2") || "ease";
                var fe = p.el.attr("data-duration");
                X.duration = fe != null ? Number(fe) : 400,
                X.docHeight = p.el.attr("data-doc-height"),
                p.config = X
            }
            function F(p) {
                return function(X, Y) {
                    Y = Y || {};
                    var G = o.width();
                    O(p),
                    Y.open === !0 && ue(p, !0),
                    Y.open === !1 && oe(p, !0),
                    p.open && t.defer(function() {
                        G !== o.width() && ne(p)
                    })
                }
            }
            function B(p) {
                return function(X) {
                    switch (X.keyCode) {
                    case Ae.SPACE:
                    case Ae.ENTER:
                        return q(p)(),
                        X.preventDefault(),
                        X.stopPropagation();
                    case Ae.ESCAPE:
                        return oe(p),
                        X.preventDefault(),
                        X.stopPropagation();
                    case Ae.ARROW_RIGHT:
                    case Ae.ARROW_DOWN:
                    case Ae.HOME:
                    case Ae.END:
                        return p.open ? (X.keyCode === Ae.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0,
                        ee(p),
                        X.preventDefault(),
                        X.stopPropagation()) : (X.preventDefault(),
                        X.stopPropagation())
                    }
                }
            }
            function U(p) {
                return function(X) {
                    if (p.open)
                        switch (p.selectedIdx = p.links.index(document.activeElement),
                        X.keyCode) {
                        case Ae.HOME:
                        case Ae.END:
                            return X.keyCode === Ae.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0,
                            ee(p),
                            X.preventDefault(),
                            X.stopPropagation();
                        case Ae.ESCAPE:
                            return oe(p),
                            p.button.focus(),
                            X.preventDefault(),
                            X.stopPropagation();
                        case Ae.ARROW_LEFT:
                        case Ae.ARROW_UP:
                            return p.selectedIdx = Math.max(-1, p.selectedIdx - 1),
                            ee(p),
                            X.preventDefault(),
                            X.stopPropagation();
                        case Ae.ARROW_RIGHT:
                        case Ae.ARROW_DOWN:
                            return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1),
                            ee(p),
                            X.preventDefault(),
                            X.stopPropagation()
                        }
                }
            }
            function ee(p) {
                if (p.links[p.selectedIdx]) {
                    var X = p.links[p.selectedIdx];
                    X.focus(),
                    K(X)
                }
            }
            function ne(p) {
                p.open && (oe(p, !0),
                ue(p, !0))
            }
            function q(p) {
                return a(function() {
                    p.open ? oe(p) : ue(p)
                })
            }
            function K(p) {
                return function(X) {
                    var Y = e(this)
                      , G = Y.attr("href");
                    if (!gt.validClick(X.currentTarget)) {
                        X.preventDefault();
                        return
                    }
                    G && G.indexOf("#") === 0 && p.open && oe(p)
                }
            }
            function d(p) {
                return p.outside && i.off("click" + E, p.outside),
                function(X) {
                    var Y = e(X.target);
                    m && Y.closest(".w-editor-bem-EditorOverlay").length || y(p, Y)
                }
            }
            var y = a(function(p, X) {
                if (p.open) {
                    var Y = X.closest(".w-nav-menu");
                    p.menu.is(Y) || oe(p)
                }
            });
            function I(p, X) {
                var Y = e.data(X, E)
                  , G = Y.collapsed = Y.button.css("display") !== "none";
                if (Y.open && !G && !l && oe(Y, !0),
                Y.container.length) {
                    var fe = z(Y);
                    Y.links.each(fe),
                    Y.dropdowns.each(fe)
                }
                Y.open && me(Y)
            }
            var v = "max-width";
            function z(p) {
                var X = p.container.css(v);
                return X === "none" && (X = ""),
                function(Y, G) {
                    G = e(G),
                    G.css(v, ""),
                    G.css(v) === "none" && G.css(v, X)
                }
            }
            function Q(p, X) {
                X.setAttribute("data-nav-menu-open", "")
            }
            function $(p, X) {
                X.removeAttribute("data-nav-menu-open")
            }
            function ue(p, X) {
                if (p.open)
                    return;
                p.open = !0,
                p.menu.each(Q),
                p.links.addClass(P),
                p.dropdowns.addClass(b),
                p.dropdownToggle.addClass(R),
                p.dropdownList.addClass(A),
                p.button.addClass(w);
                var Y = p.config
                  , G = Y.animation;
                (G === "none" || !n.support.transform || Y.duration <= 0) && (X = !0);
                var fe = me(p)
                  , Ce = p.menu.outerHeight(!0)
                  , Xe = p.menu.outerWidth(!0)
                  , c = p.el.height()
                  , _ = p.el[0];
                if (I(0, _),
                C.intro(0, _),
                gt.redraw.up(),
                l || i.on("click" + E, p.outside),
                X) {
                    T();
                    return
                }
                var S = "transform " + Y.duration + "ms " + Y.easing;
                if (p.overlay && (M = p.menu.prev(),
                p.overlay.show().append(p.menu)),
                Y.animOver) {
                    n(p.menu).add(S).set({
                        x: Y.animDirect * Xe,
                        height: fe
                    }).start({
                        x: 0
                    }).then(T),
                    p.overlay && p.overlay.width(Xe);
                    return
                }
                var x = c + Ce;
                n(p.menu).add(S).set({
                    y: -x
                }).start({
                    y: 0
                }).then(T);
                function T() {
                    p.button.attr("aria-expanded", "true")
                }
            }
            function me(p) {
                var X = p.config
                  , Y = X.docHeight ? i.height() : u.height();
                return X.animOver ? p.menu.height(Y) : p.el.css("position") !== "fixed" && (Y -= p.el.outerHeight(!0)),
                p.overlay && p.overlay.height(Y),
                Y
            }
            function oe(p, X) {
                if (!p.open)
                    return;
                p.open = !1,
                p.button.removeClass(w);
                var Y = p.config;
                if ((Y.animation === "none" || !n.support.transform || Y.duration <= 0) && (X = !0),
                C.outro(0, p.el[0]),
                i.off("click" + E, p.outside),
                X) {
                    n(p.menu).stop(),
                    _();
                    return
                }
                var G = "transform " + Y.duration + "ms " + Y.easing2
                  , fe = p.menu.outerHeight(!0)
                  , Ce = p.menu.outerWidth(!0)
                  , Xe = p.el.height();
                if (Y.animOver) {
                    n(p.menu).add(G).start({
                        x: Ce * Y.animDirect
                    }).then(_);
                    return
                }
                var c = Xe + fe;
                n(p.menu).add(G).start({
                    y: -c
                }).then(_);
                function _() {
                    p.menu.height(""),
                    n(p.menu).set({
                        x: 0,
                        y: 0
                    }),
                    p.menu.each($),
                    p.links.removeClass(P),
                    p.dropdowns.removeClass(b),
                    p.dropdownToggle.removeClass(R),
                    p.dropdownList.removeClass(A),
                    p.overlay && p.overlay.children().length && (M.length ? p.menu.insertAfter(M) : p.menu.prependTo(p.parent),
                    p.overlay.attr("style", "").hide()),
                    p.el.triggerHandler("w-close"),
                    p.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    var Mv = f( (dX, Dv) => {
        "use strict";
        var vt = qe()
          , uF = Fr()
          , nt = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , Nv = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        vt.define("slider", Dv.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(document), i, a, u = vt.env(), s = ".w-slider", l = '<div class="w-slider-dot" data-wf-ignore />', m = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', g = "w-slider-force-show", h = uF.triggers, E, w = !1;
            r.ready = function() {
                a = vt.env("design"),
                b()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(b, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                b()
            }
            ,
            r.redraw = function() {
                w = !0,
                b(),
                w = !1
            }
            ,
            r.destroy = R;
            function b() {
                i = o.find(s),
                i.length && (i.each(C),
                !E && (R(),
                A()))
            }
            function R() {
                vt.resize.off(P),
                vt.redraw.off(r.redraw)
            }
            function A() {
                vt.resize.on(P),
                vt.redraw.on(r.redraw)
            }
            function P() {
                i.filter(":visible").each(U)
            }
            function C(d, y) {
                var I = e(y)
                  , v = e.data(y, s);
                v || (v = e.data(y, s, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: I,
                    config: {}
                })),
                v.mask = I.children(".w-slider-mask"),
                v.left = I.children(".w-slider-arrow-left"),
                v.right = I.children(".w-slider-arrow-right"),
                v.nav = I.children(".w-slider-nav"),
                v.slides = v.mask.children(".w-slide"),
                v.slides.each(h.reset),
                w && (v.maskWidth = 0),
                I.attr("role") === void 0 && I.attr("role", "region"),
                I.attr("aria-label") === void 0 && I.attr("aria-label", "carousel");
                var z = v.mask.attr("id");
                if (z || (z = "w-slider-mask-" + d,
                v.mask.attr("id", z)),
                !a && !v.ariaLiveLabel && (v.ariaLiveLabel = e(m).appendTo(v.mask)),
                v.left.attr("role", "button"),
                v.left.attr("tabindex", "0"),
                v.left.attr("aria-controls", z),
                v.left.attr("aria-label") === void 0 && v.left.attr("aria-label", "previous slide"),
                v.right.attr("role", "button"),
                v.right.attr("tabindex", "0"),
                v.right.attr("aria-controls", z),
                v.right.attr("aria-label") === void 0 && v.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    v.left.hide(),
                    v.right.hide(),
                    v.nav.hide(),
                    E = !0;
                    return
                }
                v.el.off(s),
                v.left.off(s),
                v.right.off(s),
                v.nav.off(s),
                M(v),
                a ? (v.el.on("setting" + s, O(v)),
                k(v),
                v.hasTimer = !1) : (v.el.on("swipe" + s, O(v)),
                v.left.on("click" + s, H(v)),
                v.right.on("click" + s, j(v)),
                v.left.on("keydown" + s, W(v, H)),
                v.right.on("keydown" + s, W(v, j)),
                v.nav.on("keydown" + s, "> div", O(v)),
                v.config.autoplay && !v.hasTimer && (v.hasTimer = !0,
                v.timerCount = 1,
                re(v)),
                v.el.on("mouseenter" + s, N(v, !0, "mouse")),
                v.el.on("focusin" + s, N(v, !0, "keyboard")),
                v.el.on("mouseleave" + s, N(v, !1, "mouse")),
                v.el.on("focusout" + s, N(v, !1, "keyboard"))),
                v.nav.on("click" + s, "> div", O(v)),
                u || v.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var Q = I.filter(":hidden");
                Q.addClass(g);
                var $ = I.parents(":hidden");
                $.addClass(g),
                w || U(d, y),
                Q.removeClass(g),
                $.removeClass(g)
            }
            function M(d) {
                var y = {};
                y.crossOver = 0,
                y.animation = d.el.attr("data-animation") || "slide",
                y.animation === "outin" && (y.animation = "cross",
                y.crossOver = .5),
                y.easing = d.el.attr("data-easing") || "ease";
                var I = d.el.attr("data-duration");
                if (y.duration = I != null ? parseInt(I, 10) : 500,
                D(d.el.attr("data-infinite")) && (y.infinite = !0),
                D(d.el.attr("data-disable-swipe")) && (y.disableSwipe = !0),
                D(d.el.attr("data-hide-arrows")) ? y.hideArrows = !0 : d.config.hideArrows && (d.left.show(),
                d.right.show()),
                D(d.el.attr("data-autoplay"))) {
                    y.autoplay = !0,
                    y.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3,
                    y.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var v = "mousedown" + s + " touchstart" + s;
                    a || d.el.off(v).one(v, function() {
                        k(d)
                    })
                }
                var z = d.right.width();
                y.edge = z ? z + 40 : 100,
                d.config = y
            }
            function D(d) {
                return d === "1" || d === "true"
            }
            function N(d, y, I) {
                return function(v) {
                    if (y)
                        d.hasFocus[I] = y;
                    else if (e.contains(d.el.get(0), v.relatedTarget) || (d.hasFocus[I] = y,
                    d.hasFocus.mouse && I === "keyboard" || d.hasFocus.keyboard && I === "mouse"))
                        return;
                    y ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                    d.hasTimer && k(d)) : (d.ariaLiveLabel.attr("aria-live", "off"),
                    d.hasTimer && re(d))
                }
            }
            function W(d, y) {
                return function(I) {
                    switch (I.keyCode) {
                    case nt.SPACE:
                    case nt.ENTER:
                        return y(d)(),
                        I.preventDefault(),
                        I.stopPropagation()
                    }
                }
            }
            function H(d) {
                return function() {
                    B(d, {
                        index: d.index - 1,
                        vector: -1
                    })
                }
            }
            function j(d) {
                return function() {
                    B(d, {
                        index: d.index + 1,
                        vector: 1
                    })
                }
            }
            function J(d, y) {
                var I = null;
                y === d.slides.length && (b(),
                ee(d)),
                t.each(d.anchors, function(v, z) {
                    e(v.els).each(function(Q, $) {
                        e($).index() === y && (I = z)
                    })
                }),
                I != null && B(d, {
                    index: I,
                    immediate: !0
                })
            }
            function re(d) {
                k(d);
                var y = d.config
                  , I = y.timerMax;
                I && d.timerCount++ > I || (d.timerId = window.setTimeout(function() {
                    d.timerId == null || a || (j(d)(),
                    re(d))
                }, y.delay))
            }
            function k(d) {
                window.clearTimeout(d.timerId),
                d.timerId = null
            }
            function O(d) {
                return function(y, I) {
                    I = I || {};
                    var v = d.config;
                    if (a && y.type === "setting") {
                        if (I.select === "prev")
                            return H(d)();
                        if (I.select === "next")
                            return j(d)();
                        if (M(d),
                        ee(d),
                        I.select == null)
                            return;
                        J(d, I.select);
                        return
                    }
                    if (y.type === "swipe")
                        return v.disableSwipe || vt.env("editor") ? void 0 : I.direction === "left" ? j(d)() : I.direction === "right" ? H(d)() : void 0;
                    if (d.nav.has(y.target).length) {
                        var z = e(y.target).index();
                        if (y.type === "click" && B(d, {
                            index: z
                        }),
                        y.type === "keydown")
                            switch (y.keyCode) {
                            case nt.ENTER:
                            case nt.SPACE:
                                {
                                    B(d, {
                                        index: z
                                    }),
                                    y.preventDefault();
                                    break
                                }
                            case nt.ARROW_LEFT:
                            case nt.ARROW_UP:
                                {
                                    F(d.nav, Math.max(z - 1, 0)),
                                    y.preventDefault();
                                    break
                                }
                            case nt.ARROW_RIGHT:
                            case nt.ARROW_DOWN:
                                {
                                    F(d.nav, Math.min(z + 1, d.pages)),
                                    y.preventDefault();
                                    break
                                }
                            case nt.HOME:
                                {
                                    F(d.nav, 0),
                                    y.preventDefault();
                                    break
                                }
                            case nt.END:
                                {
                                    F(d.nav, d.pages),
                                    y.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function F(d, y) {
                var I = d.children().eq(y).focus();
                d.children().not(I)
            }
            function B(d, y) {
                y = y || {};
                var I = d.config
                  , v = d.anchors;
                d.previous = d.index;
                var z = y.index
                  , Q = {};
                z < 0 ? (z = v.length - 1,
                I.infinite && (Q.x = -d.endX,
                Q.from = 0,
                Q.to = v[0].width)) : z >= v.length && (z = 0,
                I.infinite && (Q.x = v[v.length - 1].width,
                Q.from = -v[v.length - 1].x,
                Q.to = Q.from - Q.x)),
                d.index = z;
                var $ = d.nav.children().eq(z).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not($).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                I.hideArrows && (d.index === v.length - 1 ? d.right.hide() : d.right.show(),
                d.index === 0 ? d.left.hide() : d.left.show());
                var ue = d.offsetX || 0
                  , me = d.offsetX = -v[d.index].x
                  , oe = {
                    x: me,
                    opacity: 1,
                    visibility: ""
                }
                  , p = e(v[d.index].els)
                  , X = e(v[d.previous] && v[d.previous].els)
                  , Y = d.slides.not(p)
                  , G = I.animation
                  , fe = I.easing
                  , Ce = Math.round(I.duration)
                  , Xe = y.vector || (d.index > d.previous ? 1 : -1)
                  , c = "opacity " + Ce + "ms " + fe
                  , _ = "transform " + Ce + "ms " + fe;
                if (p.find(Nv).removeAttr("tabindex"),
                p.removeAttr("aria-hidden"),
                p.find("*").removeAttr("aria-hidden"),
                Y.find(Nv).attr("tabindex", "-1"),
                Y.attr("aria-hidden", "true"),
                Y.find("*").attr("aria-hidden", "true"),
                a || (p.each(h.intro),
                Y.each(h.outro)),
                y.immediate && !w) {
                    n(p).set(oe),
                    T();
                    return
                }
                if (d.index === d.previous)
                    return;
                if (a || d.ariaLiveLabel.text(`Slide ${z + 1} of ${v.length}.`),
                G === "cross") {
                    var S = Math.round(Ce - Ce * I.crossOver)
                      , x = Math.round(Ce - S);
                    c = "opacity " + S + "ms " + fe,
                    n(X).set({
                        visibility: ""
                    }).add(c).start({
                        opacity: 0
                    }),
                    n(p).set({
                        visibility: "",
                        x: me,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(c).wait(x).then({
                        opacity: 1
                    }).then(T);
                    return
                }
                if (G === "fade") {
                    n(X).set({
                        visibility: ""
                    }).stop(),
                    n(p).set({
                        visibility: "",
                        x: me,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(c).start({
                        opacity: 1
                    }).then(T);
                    return
                }
                if (G === "over") {
                    oe = {
                        x: d.endX
                    },
                    n(X).set({
                        visibility: ""
                    }).stop(),
                    n(p).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: me + v[d.index].width * Xe
                    }).add(_).start({
                        x: me
                    }).then(T);
                    return
                }
                I.infinite && Q.x ? (n(d.slides.not(X)).set({
                    visibility: "",
                    x: Q.x
                }).add(_).start({
                    x: me
                }),
                n(X).set({
                    visibility: "",
                    x: Q.from
                }).add(_).start({
                    x: Q.to
                }),
                d.shifted = X) : (I.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: ue
                }),
                d.shifted = null),
                n(d.slides).set({
                    visibility: ""
                }).add(_).start({
                    x: me
                }));
                function T() {
                    p = e(v[d.index].els),
                    Y = d.slides.not(p),
                    G !== "slide" && (oe.visibility = "hidden"),
                    n(Y).set(oe)
                }
            }
            function U(d, y) {
                var I = e.data(y, s);
                if (I) {
                    if (q(I))
                        return ee(I);
                    a && K(I) && ee(I)
                }
            }
            function ee(d) {
                var y = 1
                  , I = 0
                  , v = 0
                  , z = 0
                  , Q = d.maskWidth
                  , $ = Q - d.config.edge;
                $ < 0 && ($ = 0),
                d.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                d.slides.each(function(me, oe) {
                    v - I > $ && (y++,
                    I += Q,
                    d.anchors[y - 1] = {
                        els: [],
                        x: v,
                        width: 0
                    }),
                    z = e(oe).outerWidth(!0),
                    v += z,
                    d.anchors[y - 1].width += z,
                    d.anchors[y - 1].els.push(oe);
                    var p = me + 1 + " of " + d.slides.length;
                    e(oe).attr("aria-label", p),
                    e(oe).attr("role", "group")
                }),
                d.endX = v,
                a && (d.pages = null),
                d.nav.length && d.pages !== y && (d.pages = y,
                ne(d));
                var ue = d.index;
                ue >= y && (ue = y - 1),
                B(d, {
                    immediate: !0,
                    index: ue
                })
            }
            function ne(d) {
                var y = [], I, v = d.el.attr("data-nav-spacing");
                v && (v = parseFloat(v) + "px");
                for (var z = 0, Q = d.pages; z < Q; z++)
                    I = e(l),
                    I.attr("aria-label", "Show slide " + (z + 1) + " of " + Q).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    d.nav.hasClass("w-num") && I.text(z + 1),
                    v != null && I.css({
                        "margin-left": v,
                        "margin-right": v
                    }),
                    y.push(I);
                d.nav.empty().append(y)
            }
            function q(d) {
                var y = d.mask.width();
                return d.maskWidth !== y ? (d.maskWidth = y,
                !0) : !1
            }
            function K(d) {
                var y = 0;
                return d.slides.each(function(I, v) {
                    y += e(v).outerWidth(!0)
                }),
                d.slidesWidth !== y ? (d.slidesWidth = y,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    Ia();
    ba();
    wa();
    xa();
    Fr();
    Iv();
    bv();
    wv();
    Ov();
    Cv();
    Pv();
    Mv();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 */

Webflow.require('ix2').init({
    "events": {
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|9cbd9b4f-e38e-00a9-39a7-bb7bf9482565",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|9cbd9b4f-e38e-00a9-39a7-bb7bf9482565",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229047316
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|795aa643-13f6-6afa-ad00-4ee3ad75f6c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|795aa643-13f6-6afa-ad00-4ee3ad75f6c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229111925
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|a57ba6c3-75fa-9c29-e175-97b0f11ab5f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|a57ba6c3-75fa-9c29-e175-97b0f11ab5f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229127786
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|f0e0543c-d869-1c0d-e797-52bc4cd7bba9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|f0e0543c-d869-1c0d-e797-52bc4cd7bba9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229154662
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|51c3a460-7d11-96da-b09f-ecdd0d68882e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|51c3a460-7d11-96da-b09f-ecdd0d68882e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229165478
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|c8043316-c549-0166-7a2f-2f106bcad158",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|c8043316-c549-0166-7a2f-2f106bcad158",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229179738
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|a690acaf-fce7-1b90-4d82-46db4f995b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|a690acaf-fce7-1b90-4d82-46db4f995b34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229190986
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|972a7155-47d9-3234-02dd-e9d6871c9f03",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|972a7155-47d9-3234-02dd-e9d6871c9f03",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229201996
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|d9765f42-99e6-245c-d4e3-51c2ee9f804a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|d9765f42-99e6-245c-d4e3-51c2ee9f804a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229248560
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|859c201a-5f22-a9b4-8f29-bb958f2d8bdb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|859c201a-5f22-a9b4-8f29-bb958f2d8bdb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229267943
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|d963090f-2b38-cedd-d00a-06c85c27d920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|d963090f-2b38-cedd-d00a-06c85c27d920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229370424
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|d3cf1be1-6f64-73e3-e2de-9799f25a4519",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|d3cf1be1-6f64-73e3-e2de-9799f25a4519",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229416324
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|a3168b87-deba-dc1a-5ee4-fe868008ea7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|a3168b87-deba-dc1a-5ee4-fe868008ea7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229430466
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|18c76394-0149-cb26-2208-248eb3338b7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|18c76394-0149-cb26-2208-248eb3338b7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229448716
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|be6aa53e-dc09-967d-1cfb-11fd3e370f4e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|be6aa53e-dc09-967d-1cfb-11fd3e370f4e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229460778
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|33c6cd50-1fe0-61cd-3831-8a60cf0d43d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|33c6cd50-1fe0-61cd-3831-8a60cf0d43d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229471106
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|558fbabe-0040-f1ef-9923-5c12f56758ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|558fbabe-0040-f1ef-9923-5c12f56758ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229487579
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|f30f8d67-cdf9-48fd-f86c-528a54266011",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|f30f8d67-cdf9-48fd-f86c-528a54266011",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 120,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229499460
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|f831ee62-44e0-2087-0f5a-06805fe2b476",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|f831ee62-44e0-2087-0f5a-06805fe2b476",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229703337
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|97532dfb-a518-8e95-39dd-bb2d1b786ccf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|97532dfb-a518-8e95-39dd-bb2d1b786ccf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1725229719936
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|b4158cff-c019-40aa-5e4f-e0322475600f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|b4158cff-c019-40aa-5e4f-e0322475600f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229731075
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|b8b7e886-70e7-f399-1cc3-59de9344d1d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|b8b7e886-70e7-f399-1cc3-59de9344d1d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229743345
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|260e7929-388e-a71a-5ecf-0817d61cab99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|260e7929-388e-a71a-5ecf-0817d61cab99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229757035
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|95ecabf2-1b23-d611-e10a-f35a1573b36a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|95ecabf2-1b23-d611-e10a-f35a1573b36a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229766715
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|72d0bda7-bb94-867c-4aff-0453cd3538bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|72d0bda7-bb94-867c-4aff-0453cd3538bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229797121
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|f33677c4-09fc-c403-6986-ba345e5a96e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|f33677c4-09fc-c403-6986-ba345e5a96e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 232,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229817130
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|fa3aa9f9-f411-b9d4-b4dc-de52ce433cfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|fa3aa9f9-f411-b9d4-b4dc-de52ce433cfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 423,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229829081
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|8912fda5-982a-3cfc-f168-17368d9f89a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|8912fda5-982a-3cfc-f168-17368d9f89a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229851565
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|9e518afd-cf83-48cc-9330-6b09b9820858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|9e518afd-cf83-48cc-9330-6b09b9820858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229868289
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|cbe8c0cb-377c-af46-d1b0-aff3a82841a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|cbe8c0cb-377c-af46-d1b0-aff3a82841a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 232,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229886779
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|8201e193-33a0-d2b3-a82f-8097a98e5acc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|8201e193-33a0-d2b3-a82f-8097a98e5acc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 232,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229897403
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|43168379-baf6-c98d-b824-b99a3b4f0985",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|43168379-baf6-c98d-b824-b99a3b4f0985",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 423,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229907985
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|c58b1f25-af5e-5c2a-3097-6053abfad553",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|c58b1f25-af5e-5c2a-3097-6053abfad553",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 423,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1725229920034
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|833546a2-f8b8-6c5d-a077-f021a4e275c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|833546a2-f8b8-6c5d-a077-f021a4e275c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725229973316
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|77641c66-b822-c6e0-287f-cb4091ed95c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|77641c66-b822-c6e0-287f-cb4091ed95c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725230024855
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|692f3bec-7710-96c1-279e-0b0fb55e3f9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|692f3bec-7710-96c1-279e-0b0fb55e3f9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725230037672
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|cfdfa1d4-6eba-84a2-5213-8d45fb9052ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|cfdfa1d4-6eba-84a2-5213-8d45fb9052ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725230562239
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d30e0d2eda979c9692902d|4f457941-b7e3-3e22-1675-059d09e2e926",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d30e0d2eda979c9692902d|4f457941-b7e3-3e22-1675-059d09e2e926",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725231714138
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_BIG_EFFECT",
                "config": {
                    "actionListId": "growBigIn",
                    "autoStopEventId": "e-94"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "66d30e0d2eda979c9692902d|a0abfa66-483e-d9b8-8c38-b08f11c3aa8f"
            },
            "targets": [],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725485683147
        }
    },
    "actionLists": {
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "growBigIn": {
            "id": "growBigIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
