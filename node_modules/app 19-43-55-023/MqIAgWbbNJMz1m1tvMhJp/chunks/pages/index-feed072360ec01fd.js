(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4215: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return l
                },
                g: function() {
                    return d
                }
            });
            var r = n(9499),
                i = n(9521),
                o = n(5893);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var u = function(e) {
                    return function(t, n) {
                        return "".concat(t).concat(e ? "-".concat(e) : "", ": ").concat(n, "px;\n    ")
                    }
                },
                s = i.ZP.div.withConfig({
                    displayName: "Stack",
                    componentId: "sc-1708vv5-0"
                })(["display:flex;align-items:", ";justify-content:", ";flex-direction:", ";gap:", "px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function(e) {
                    return e.alignItems
                }, function(e) {
                    return e.justifyContent
                }, function(e) {
                    return e.flexDirection
                }, function(e) {
                    return e.gap || 0
                }, function(e) {
                    return e.fullWidth && "\n    width: 100%;\n  "
                }, function(e) {
                    return e.stretch && "\n    > * {\n      flex: 1;\n    }\n  "
                }, function(e) {
                    return e.m && u()("margin", e.m)
                }, function(e) {
                    return e.mt && u("top")("margin", e.mt)
                }, function(e) {
                    return e.mr && u("right")("margin", e.mr)
                }, function(e) {
                    return e.mb && u("bottom")("margin", e.mb)
                }, function(e) {
                    return e.ml && u("left")("margin", e.ml)
                }, function(e) {
                    return e.p && u()("padding", e.p)
                }, function(e) {
                    return e.pt && u("top")("padding", e.pt)
                }, function(e) {
                    return e.pr && u("right")("padding", e.pr)
                }, function(e) {
                    return e.pb && u("bottom")("padding", e.pb)
                }, function(e) {
                    return e.pl && u("left")("padding", e.pl)
                }),
                l = function(e) {
                    return (0, o.jsx)(s, c({
                        flexDirection: "row"
                    }, e))
                },
                d = function(e) {
                    return (0, o.jsx)(s, c({
                        flexDirection: "column"
                    }, e))
                }
        },
        5505: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            var r = n(260)._(n(7294)).default.createContext({})
        },
        1342: function(e, t) {
            "use strict";

            function n(e) {
                var t = void 0 === e ? {} : e,
                    n = t.ampFirst,
                    r = t.hybrid,
                    i = t.hasQuery;
                return void 0 !== n && n || void 0 !== r && r && void 0 !== i && i
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        1597: function(e, t, n) {
            "use strict";
            var r = n(930);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    defaultHead: function() {
                        return d
                    },
                    default: function() {
                        return g
                    }
                });
            var o = n(260),
                a = n(7697)._(n(7294)),
                c = o._(n(7271)),
                u = n(5505),
                s = n(236),
                l = n(1342);

            function d(e) {
                void 0 === e && (e = !1);
                var t = [a.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function p(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce(function(e, t) {
                    return "string" == typeof t || "number" == typeof t ? e : e.concat(t)
                }, [])) : e.concat(t)
            }
            n(3766);
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, t) {
                var n, o, c, u, s = t.inAmpMode;
                return e.reduce(p, []).reverse().concat(d(s).reverse()).filter((n = new Set, o = new Set, c = new Set, u = {}, function(e) {
                    var t = !0,
                        r = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        r = !0;
                        var i = e.key.slice(e.key.indexOf("$") + 1);
                        n.has(i) ? t = !1 : n.add(i)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            o.has(e.type) ? t = !1 : o.add(e.type);
                            break;
                        case "meta":
                            for (var a = 0, s = f.length; a < s; a++) {
                                var l = f[a];
                                if (e.props.hasOwnProperty(l)) {
                                    if ("charSet" === l) c.has(l) ? t = !1 : c.add(l);
                                    else {
                                        var d = e.props[l],
                                            p = u[l] || new Set;
                                        ("name" !== l || !r) && p.has(d) ? t = !1 : (p.add(d), u[l] = p)
                                    }
                                }
                            }
                    }
                    return t
                })).reverse().map(function(e, t) {
                    var n = e.key || t;
                    if (!s && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(function(t) {
                            return e.props.href.startsWith(t)
                        })) {
                        var o = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? i(Object(n), !0).forEach(function(t) {
                                    r(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, e.props || {});
                        return o["data-href"] = o.href, o.href = void 0, o["data-optimized-fonts"] = !0, a.default.cloneElement(e, o)
                    }
                    return a.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            var g = function(e) {
                var t = e.children,
                    n = (0, a.useContext)(u.AmpStateContext),
                    r = (0, a.useContext)(s.HeadManagerContext);
                return a.default.createElement(c.default, {
                    reduceComponentsToState: m,
                    headManager: r,
                    inAmpMode: (0, l.isInAmpMode)(n)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7271: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            var r = n(7697)._(n(7294)),
                i = r.useLayoutEffect,
                o = r.useEffect;

            function a(e) {
                var t = e.headManager,
                    n = e.reduceComponentsToState;

                function a() {
                    if (t && t.mountedInstances) {
                        var i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(i, e))
                    }
                }
                return i(function() {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                        function() {
                            var n;
                            null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                        }
                }), i(function() {
                    return t && (t._pendingUpdate = a),
                        function() {
                            t && (t._pendingUpdate = a)
                        }
                }), o(function() {
                    return t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null),
                        function() {
                            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                        }
                }), null
            }
        },
        3766: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            var n = function(e) {}
        },
        5026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n(7294),
                i = n(9521),
                o = n(8678),
                a = n(1828),
                c = n(3670),
                u = n(9499),
                s = n(4730),
                l = n(6115),
                d = n(5893),
                p = ["className"];

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var m = i.ZP.div.withConfig({
                    displayName: "Monitor__Wrapper",
                    componentId: "sc-1xywruq-0"
                })(["width:calc(var(--monitor-width,195) * 1px);aspect-ratio:1.04;& > *{transform:scale(calc(var(--monitor-width) / 195));transform-origin:0 0;}"]),
                g = function(e) {
                    var t = e.className,
                        n = (0, s.Z)(e, p);
                    return (0, d.jsx)(m, {
                        className: t,
                        children: (0, d.jsx)(l.ug, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? f(Object(n), !0).forEach(function(t) {
                                    (0, u.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, n))
                    })
                },
                h = n(3593),
                y = n(4215),
                b = n(9547),
                x = function() {
                    var e = r.useRef(null);
                    return r.useEffect(function() {
                        return function() {
                            var t;
                            return null === (t = e.current) || void 0 === t ? void 0 : t.call(e)
                        }
                    }, []), (0, d.jsx)(v, {
                        children: (0, d.jsxs)(c.rj, {
                            style: {
                                alignItems: "center"
                            },
                            children: [(0, d.jsxs)(w, {
                                children: [(0, d.jsx)("div", {
                                    className: "left-monitor",
                                    children: (0, d.jsx)(g, {
                                        backgroundStyles: {
                                            backgroundColor: "#dead25",
                                            backgroundImage: "url(".concat(b.Z.src, ")"),
                                            backgroundSize: "cover"
                                        }
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "right-monitor",
                                    children: (0, d.jsx)(g, {
                                        backgroundStyles: {
                                            backgroundColor: "black"
                                        }
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "center-monitor",
                                    children: (0, d.jsx)(g, {
                                        backgroundStyles: {
                                            backgroundImage: "url(https://i.pinimg.com/originals/a7/a2/0e/a7a20e9a4c0c5ed6af6cbaf3c268d701.png)",
                                            backgroundSize: "cover"
                                        }
                                    })
                                })]
                            }), (0, d.jsxs)(j, {
                                children: [(0, d.jsxs)(h.ZP.H1, {
                                    children: ["Hi, I'm Artur Bień.", (0, d.jsx)("br", {}), " I build ", (0, d.jsx)(h.ZP.Rainbow, {
                                        title: "quality",
                                        children: "quality"
                                    }), " UIs for fun."]
                                }), (0, d.jsxs)(y.U, {
                                    gap: 16,
                                    children: [(0, d.jsx)(a.D, {
                                        primary: !0,
                                        href: "/blog",
                                        children: "Read my blog"
                                    }), (0, d.jsx)(a.Z, {
                                        onClick: function() {
                                            var t;
                                            null === (t = e.current) || void 0 === t || t.call(e), e.current = (0, o.Z)()
                                        },
                                        children: "Release balloons"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                v = i.ZP.div.withConfig({
                    displayName: "HeroMain__Wrapper",
                    componentId: "sc-9xy7fu-0"
                })(["min-height:60vh;display:flex;padding-top:200px;padding-bottom:120px;@media only screen and (max-width:1176px){padding-top:96px;}@media only screen and (max-width:796px){margin-left:32px;margin-right:32px;}@media only screen and (max-width:510px){padding-top:72px;}"]),
                j = i.ZP.div.withConfig({
                    displayName: "HeroMain__HeroText",
                    componentId: "sc-9xy7fu-1"
                })(["grid-column:8 / span 5;display:flex;flex-direction:column;gap:48px;@media only screen and (max-width:1176px){grid-column:3 / span 8;margin-top:48px;gap:24px;align-items:center;h1{text-align:center;}}@media only screen and (max-width:796px){grid-column:1 / span 12;}@media only screen and (max-width:510px){align-items:flex-start;h1{text-align:left;}}"]),
                w = i.ZP.div.withConfig({
                    displayName: "HeroMain__Monitors",
                    componentId: "sc-9xy7fu-2"
                })(["contain:layout;grid-column:1 / span 7;@media only screen and (max-width:1176px){grid-column:3 / span 8;left:0;--monitor-width:280;}@media only screen and (max-width:796px){grid-column:1 / span 12;left:0;--monitor-width:280;}position:relative;left:-50px;--monitor-width:300;.left-monitor{display:inline-block;position:absolute;transform:scale(0.88);mask-image:linear-gradient(to right,black,transparent);filter:opacity(0.5) brightness(0.2) blur(3px);}.center-monitor{display:inline-block;position:relative;left:50%;transform:translateX(-50%);filter:brightness(0.85);}.right-monitor{display:inline-block;position:absolute;right:0;transform:scale(0.92);mask-image:linear-gradient(to top left,black,transparent);filter:opacity(0.8) brightness(0.2) blur(1px);}@media only screen and (max-width:678px){.left-monitor{left:-70px;}.right-monitor{right:-70px;}}@media only screen and (max-width:510px){--monitor-width:220;.left-monitor{left:-120px;}.right-monitor{right:-120px;}}"]),
                O = n(9008),
                A = n.n(O),
                _ = function() {
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsxs)(A(), {
                            children: [(0, d.jsx)("title", {
                                children: "Artur Bień"
                            }), (0, d.jsx)("meta", {
                                name: "google-site-verification",
                                content: "77WkCNrItg2AyQU1WYDoD06BaXWBmCIjjzzvZzLwnVw"
                            }), (0, d.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, d.jsx)("meta", {
                                property: "og:image:width",
                                content: "1280"
                            }), (0, d.jsx)("meta", {
                                property: "og:image:height",
                                content: "675"
                            }), (0, d.jsx)("meta", {
                                name: "og:title",
                                content: "Artur Bień"
                            }), (0, d.jsx)("meta", {
                                name: "og:description",
                                content: "Building user interfaces for fun."
                            }), (0, d.jsx)("meta", {
                                name: "twitter:title",
                                content: "Artur Bień"
                            }), (0, d.jsx)("meta", {
                                name: "twitter:description",
                                content: "Building user interfaces for fun."
                            }), (0, d.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }), (0, d.jsx)("meta", {
                                name: "twitter:creator",
                                content: "@artur_bien"
                            })]
                        }), (0, d.jsx)(c.M5, {
                            children: (0, d.jsx)(x, {})
                        })]
                    })
                }
        },
        8312: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(5026)
            }])
        },
        9547: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/windows-wallpaper.75a76507.png",
                height: 625,
                width: 1e3,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEVbo//O4/hlq/9okQ06XAZpkhlghTGDwP40VgSIuP1yr/w6hv2rzve20N+XvMuQu7qVxK+s2rAuSwkoQge76sBiiRCk2uU/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBgQKAEAxAwYfNNpSi/v9X3WGNiB4Js0wG+N5n3lca/KWoaq3s5SLifgAZywE2FegaOQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        9008: function(e, t, n) {
            e.exports = n(1597)
        }
    },
    function(e) {
        e.O(0, [678, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);