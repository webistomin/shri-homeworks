"use strict";

!function(t) {
    var e = window.pcodeJsonp6187;
    window.pcodeJsonp6187 = function(i, o, r) {
        for (var a, s, l = 0, p = []; l < i.length; l += 1) {
            s = i[l],
            n[s] && p.push(n[s][0]),
                n[s] = 0;
        }
        for (a in o)
            Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
        for (e && e(i, o, r); p.length; ) {
            p.shift()();
        }
    }
    var i = {}
        , n = {
        2: 0
    };
    function o(e) {
        if (i[e]) {
            return i[e].exports;
        }
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return (t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports)
    }
    o.e = function(t) {
        var e = n[t];
        if (0 === e) {
            return new Promise(function(t) {
                    t()
                }
            );
        }
        if (e) {
            return e[2];
        }
        var i = new Promise(function(i, o) {
                e = n[t] = [i, o]
            }
        );
        e[2] = i;
        var r = document.getElementsByTagName("head")[0]
            , a = document.createElement("script");
        a.type = "text/javascript",
            a.charset = "utf-8",
            a.async = !0,
            a.timeout = 12e4,
        o.nc && a.setAttribute("nonce", o.nc),
            a.src = o.p + "" + {
                0: "9b10f65b0c7e7a1d8693",
                1: "7641180249a9d7be3cfa"
            }[t] + ".js";
        var s = setTimeout(l, 12e4);
        function l() {
            a.onerror = a.onload = null,
                clearTimeout(s);
            var e = n[t];
            0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")),
                n[t] = void 0)
        }
        return (a.onerror = a.onload = l, r.appendChild(a), i)
    }
        ,
        o.m = t,
        o.c = i,
        o.d = function(t, e, i) {
            o.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
        ,
        o.n = function(t) {
            var e = t && t.__esModule ? function() {
                    return t["default"]
                }
                : function() {
                    return t
                }
            return (o.d(e, "a", e), e);
        }
        ,
        o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        o.p = "//an.yandex.ru/partner-code-bundles/6187/",
        o.oe = function(t) {
            throw (console.error(t), t)
        }
        ,
        o(o.s = 271);
}([function(t, e, i) {
    "use strict";
    t.exports = i(351)
}, function(t, e, i) {
        "use strict";
        var n = i(55)
            , o = i(2)
            , r = i(0)
            , a = i(49)
            , s = i(199)
            , l = i(200)
            , p = i(108)
            , c = r.createComponent([a, l], {
            encodeStyles: null,
            onInit: function() {
                this.b_ = s(this.name),
                    this.mod = this.props.mod || this.mod;
                var t = this.getContextComponent();
                this.encodeStyles = Boolean(t && t.encodeStyles || this.props.encodeStyles)
            },
            unmount: function() {
                this.unbindAll(),
                    this.__base()
            },
            pushStyles: function(t, e, i) {
                p.push(t, e, i)
            },
            render: function() {
                var t = this._render(this.b_, this.props, this.__self);
                return (this.rootComponent = t, t)
            },
            _render: function() {
                return this.getChildren()
            },
            getElement: function() {
                return this.rootComponent.getElement()
            },
            bind: function(t, e, i, n) {
                this._domListeners || (this._domListeners = []);
                var r = o.domEvent.on(t, e, i, this, n);
                return (this._domListeners.push({
                    eventType: e,
                    fn: i,
                    descriptor: r
                }), r)
            },
            unbindAll: function() {
                this._domListeners && (o.each(this._domListeners, function(t) {
                    o.domEvent.un(t.descriptor)
                }),
                    delete this._domListeners)
            },
            setMod: function(t) {
                this.rootComponent.addClass(this.b_(t))
            },
            delMod: function(t) {
                this.rootComponent.removeClass(this.b_(t))
            },
            addClass: function(t) {
                this.rootComponent.addClass(t)
            },
            removeClass: function(t) {
                this.rootComponent.removeClass(t)
            }
        }, {
            HTML: n.Html,
            Container: r.components.container,
            Element: r.components.element,
            Link: i(12)
        });
        t.exports = c
    }, function(t, e, i) {
        "use strict";
        var n = i(31)
            , o = function(t) {
            if (t && t.__esModule) {
                return t;
            }
            var e = {};
            if (null != t) {
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return (e["default"] = t, e)
        }(i(4));
        var r = i(34)
            , a = r.extend(r, {
            Queue: i(248),
            browser: o,
            Color: n.Color,
            base64: i(70),
            dom: i(32),
            domEvent: i(41),
            animate: i(194),
            warning: i(240),
            HoverChecker: i(349),
            elementSize: i(159)
        });
        t.exports = a
    }, function(t, e, i) {
        "use strict";
        var n = i(8)
            , o = i(79);
        function r() {}
        function a(t) {
            return r
        }
        o.log = n.logger.warn;
        var s = {
            log: a(),
            warn: a(),
            error: a(),
            remoteLog: n.logger.info,
            remoteLogString: n.logger.info,
            isolate: function(t) {
                return o("isolate", t || r, this, function(t) {
                    t.preventProtect = !0
                })
            },
            protect: o,
            setProtectedTimeout: o.setTimeout
        };
        t.exports = s
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(297)
            , o = i(298)
            , r = i(300)
            , a = i(122)
            , s = i(301)
            , l = i(303)
            , p = i(304)
            , c = i(75)
            , d = i(305)
            , u = i(306)
            , m = i(307)
            , f = i(308)
            , h = i(175)
            , g = i(309)
            , _ = i(76)
            , y = i(179)
            , b = i(178)
            , v = i(310)
            , x = i(13)
            , w = window
            , k = w.document.documentMode;
        e.isQuirks = "BackCompat" === w.document.compatMode,
            e.isOpera = u.isOpera(w),
            e.isOperaMini = m.isOperaMini(w),
            e.ieVersion = o.getInternetExplorerVersion(w),
            e.isIE10 = 10 === e.ieVersion,
            e.isIE11 = 11 === e.ieVersion,
            e.isIE = e.ieVersion > 0,
            e.isIEQuirks = e.isIE && (5 === k || !e.isIE10 && e.isQuirks),
            e.isEdge = e.ieVersion && e.ieVersion > 11 || !1,
            e.isSafari = h.isSafari(w),
            e.safariVersion = v.getSafariVersion(w),
            e.isFirefox = l.isFirefox(w),
            e.isChrome = s.getIsChrome(w),
            e.isYaBrowser = b.getIsYaBrowser(w),
            e.isUCBrowser = _.isUCBrowser(w),
            e.isIOS = c.getIsIOS(w),
            e.iOSVersion = r.getIOSVersion(w),
            e.isAndroid = a.getIfIsAndroid(w),
            e.androidVersion = n.getAndroidVersion(w),
            e.isWindowsPhone = y.isWindowsPhone(w),
            e.isMobile = d.isMobile(w),
            e.isPhone = f.isPhone(w),
            e.isHDPIScreen = p.isHDPIScreen(w),
            e.flashVer = [0, 0, 0];
        var C = i(180);
        e.testProperty = function(t, e) {
            void 0 === e && (e = C.cssPrefixes);
            var i = new Image();
            t.split(":")[1] || (t += ":none");
            for (var n = 0; n < e.length; n += 1) {
                if ((i.style.cssText = e[n] + t, i.style.length)) {
                    return e[n];
                }
            }
            return null
        }
            ,
            e.getBrowserName = function() {
                return (e.isIE ? "msie" : e.isFirefox && "firefox") || e.isSafari && "safari" || e.isOpera && "opera" || e.isYaBrowser && "yabrowser" || e.isChrome && "chrome" || e.isUCBrowser && "ucbrowser" || "unknown"
            }
            ,
            e.getDeviceName = function() {
                return (e.isPhone ? "phone" : e.isMobile && "tablet") || "desktop"
            }
            ,
            e.support = {
                cssFlex: null !== e.testProperty("flex"),
                cssTransformPrefix: e.testProperty("transform"),
                cssTransform: null !== e.testProperty("transform"),
                cssTransition: null !== e.testProperty("transition"),
                cssFilterBlur: null !== e.testProperty("filter:blur(2px)"),
                touch: g.isTouchDevice(w),
                postMessage: x.isFunction(w.postMessage) && !(e.isIE || e.isIE11 || e.isEdge || e.isOperaMini),
                longUrls: !(e.isIE || e.isIE11 || e.isOperaMini)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.map = function(t, e, i) {
                for (var n = new Array(t.length), o = 0; o < t.length; o += 1) {
                    n[o] = e.call(i, t[o], o, t);
                }
                return n
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(78)
            , o = n.BorderTypes
            , r = n.BlockTypes
            , a = i(322)
            , s = Boolean(a.Ya.relHostname)
            , l = {
            defaultReloadTimeout: 30,
            MAX_ADS_LIMIT: 9,
            REFRESH_VIEWPORT_VISIBLE_PART: 0.5,
            MIN_AREA_BIG_BLOCK: 242500,
            VISIBLE_PORTION_BIG_BLOCK: 0.3,
            VISIBLE_PORTION_BLOCK_DIRECT: 0,
            VISIBLE_PORTION_BLOCK: 0.5,
            VISIBLE_PORTION_BLOCK_DIRECT_COMMON: 0.5,
            IS_REL_HOSTNAME: s
        }
            , p = s ? "//an.webvisor.org" : "//an.yandex.ru";
        l.urls = {
            anHostname: p,
            anOriginHostname: "//an.yandex.ru",
            direct: "https:" + p + "/page/",
            directSettings: "https:" + p + "/blkset/",
            rtb: "https:" + p + "/meta/",
            favicon: "https://favicon.yandex.net/favicon/",
            jserrlog: "https:" + p + "/jserr/1"
        },
            l.BlockTypes = r,
            l.BorderTypes = o,
            l.Products = {
                DIRECT: "direct",
                PREMIUM: "premium",
                STRIPE: "stripe",
                RTB: "rtb",
                INTERNAL: "internal"
            },
            l.Layouts = {
                WIDE: 0,
                MEDIUM: 1,
                NARROW: 2,
                COMPATIBLE: 3,
                WIDE_WIDTH: 300,
                MEDIUM_WIDTH: 240,
                COMPATIBLE_WIDTH: -1
            },
            l.RtbIframe = {},
            l.RtbIframe.TAG = '<iframe id="${id}" width="${width}" height="${height}" ${sandbox} scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>',
            l.RtbIframe.CONTENT = '<!DOCTYPE html><html><head><meta charset="utf-8"/>${head}</head><body>${body}<script type="text/javascript" nonce="\\${nonce}">document.close();<\/script>${afterAll}</body></html>',
            l.longWarningLength = 40,
            t.exports = l
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(365)
            , o = i(366);
        e["default"] = function(t, e, i) {
            return n["default"](o["default"], t, e, i)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(272);
        e.logger = n.logger
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.filter = function(t, e, i) {
                for (var n = [], o = 0; o < t.length; o += 1) {
                    var r = t[o];
                    e.call(i, r, o, t) && n.push(r)
                }
                return n
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = {
            objectCreate: i(186),
            augment: i(107),
            extend: i(15),
            isArray: i(106),
            isObject: i(27),
            isFunction: i(18),
            isString: i(73),
            getNativeMethod: i(187),
            checkNativeCode: i(188),
            each: i(33),
            forOwn: i(338),
            filter: i(124),
            map: i(231),
            keys: i(339),
            indexOf: i(42),
            genRnd: i(247),
            camelize: i(340),
            isInRange: i(144),
            throttle: i(239),
            bind: i(157)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.forEach = function(t, e, i) {
                for (var n = 0; n < t.length; n += 1) {
                    e.call(i, t[n], n, t);
                }
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(93)
            , o = i(0)
            , r = i(200)
            , a = i(15)
            , s = o.createComponent([o.components.element, r], {
            initProps: function(t) {
                return (t.tag = t.tag || "a", this.disabled = t.disabled || "a" !== t.tag, this.__base(t))
            },
            beforeRender: function(t) {
                this.parentLink = this.findParentLink(),
                    this.tag = this.disabled || this.parentLink ? "yatag" : "a",
                    this.originProps = this.props,
                    this.props = this.extractAttributes(),
                    this.__base(t)
            },
            findParentLink: function() {
                var t = this.getParentComponent()
                    , e = null;
                do {
                    t instanceof s && (e = t),
                    t && (t = t.getParentComponent())
                } while (null === e && t);return null !== e && e.disabled ? null : e
            },
            extractAttributes: function() {
                var t = this.originProps
                    , e = (0,
                    n.classNamesFactory)(t.classNames)
                    , i = a({
                    target: t.target || "_blank",
                    class: e(t["class"], e(this.disabled ? "::disabled" : "::active"))
                }, t);
                return (delete i.type, delete i.disabled, delete i.classNames, (this.disabled || this.parentLink) && (delete i.target,
                    delete i.href), i)
            },
            onMount: function() {
                this.disabled || (this.bind("click", this.onClick, this),
                    this.bind("mouseenter", this.onMouseEnter, this),
                    this.bind("mouseleave", this.onMouseLeave, this))
            },
            onMouseEnter: function() {
                this.setHref(this.getLink())
            },
            onMouseLeave: function() {
                this.setHref(null)
            },
            setHref: function(t) {
                if (this.parentLink) {
                    this.parentLink.setHref(t);
                } else {
                    var e = t || this.getLink();
                    this.setAttr("href", e)
                }
            },
            onClick: function(t) {
                this.parentLink || this.props.href || t.preventDefault(),
                    t.targetComponent = this,
                    this.fireEvent("click:link", t, this.props.type),
                this.props.href && !t.defaultPrevented && this.fireEvent("open:link", t)
            },
            getLink: function() {
                return this.originProps.href || ""
            }
        });
        t.exports = s
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.isFunction = function(t) {
                return "[object Function]" === {}.toString.call(t)
            }
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o, r, a = i(26), s = {};
    !function(t) {
        t.RTB = "R",
            t.ComponentDirectSync = "DNS",
            t.ComponentDirectAsync = "DNA",
            t.OldDirect = "DO"
    }(o = e.BlockRenderProducts || (e.BlockRenderProducts = {})),
        function(t) {
            t.AdvManagerInit = "010",
                t.RtbRender = "020",
                t.RtbQueueTime = "030",
                t.RtbLoadDone = "040",
                t.RtbDataParsed = "050",
                t.RtbManagerStart = "060",
                t.RtbManagerBeforeRenderRtb = "070",
                t.RtbManagerDataPreparedRtb = "080",
                t.RtbBlockRenderInit = "090",
                t.RtbBlockRenderStart = "100",
                t.RtbBlockCreateWrapper = "110",
                t.RtbBlockRenderAd = "120",
                t.RtbBlockAfterRender = "130",
                t.RtbManagerBlockRenderedRtb = "140",
                t.RtbManagerBeforeRenderDirect = "070",
                t.DirectManagerStart = "080",
                t.DirectManagerInitEnd = "090",
                t.DirectManagerChooseBlockType = "100",
                t.ComponentBlockInit = "110",
                t.ComponentBlockBeforeRender = "120",
                t.ComponentBlockReadyToRender = "130",
                t.ComponentBlockRenderComplete = "140",
                t.ComponentBlockMounted = "150",
                t.ComponentBlockDisplayed = "151",
                t.ComponentBlockReady = "153",
                t.DirectManagerBlockRendered = "160"
        }(r = e.BlockRenderSteps || (e.BlockRenderSteps = {}));
    var l, p, c, d = ((l = {})[r.AdvManagerInit] = 1,
        l[r.RtbRender] = 1,
        l[r.RtbQueueTime] = 1,
        l), u = ((p = {})[r.RtbLoadDone] = 1,
        p), m = ((c = {})[r.RtbDataParsed] = 1,
        c[r.RtbManagerStart] = 1,
        c[r.RtbManagerBeforeRenderRtb] = 1,
        c[r.RtbManagerDataPreparedRtb] = 1,
        c[r.RtbBlockRenderInit] = 1,
        c[r.RtbBlockRenderStart] = 1,
        c[r.RtbBlockCreateWrapper] = 1,
        c[r.RtbBlockRenderAd] = 1,
        c[r.RtbBlockAfterRender] = 1,
        c[r.RtbManagerBlockRenderedRtb] = 1,
        c[r.RtbManagerBeforeRenderDirect] = 1,
        c[r.DirectManagerStart] = 1,
        c[r.DirectManagerInitEnd] = 1,
        c[r.DirectManagerChooseBlockType] = 1,
        c[r.ComponentBlockInit] = 1,
        c[r.ComponentBlockBeforeRender] = 1,
        c[r.ComponentBlockReadyToRender] = 1,
        c[r.ComponentBlockRenderComplete] = 1,
        c[r.DirectManagerBlockRendered] = 1,
        c);
    e.logRenderLabel = function(t, e) {
        s[t] || (s[t] = {
            timing: {},
            data: {},
            canLog: !0
        }),
            s[t].timing[e] = Date.now()
    }
        ,
        e.stopLoggingTime = function(t) {
            s[t] && (s[t].canLog = !1)
        }
        ,
        e.setBlockData = function(t, e) {
            s[t] || (s[t] = {
                timing: {},
                data: {
                    oldBlock: !1
                },
                canLog: !0
            }),
                s[t].data = n({}, s[t].data, e)
        }
        ,
        e.getJsTracerObject = function(t) {
            var e;
            return t in s && "110"in (e = s[t]).timing && e.canLog ? {
                tags: function(t) {
                    var e, i = {
                        totalInit: 0,
                        totalData: 0,
                        totalRender: 0,
                        total: 0
                    };
                    if (t.data.product === o.ComponentDirectSync) {
                        var n = t.timing["100"];
                        t.timing["100"] = t.timing["110"],
                            t.timing["110"] = n
                    }
                    for (var r = a.getObjectKeys(t.timing).sort(function(t, e) {
                        return t - e
                    }), s = 0; s < r.length; s += 1) {
                        var l = t.timing[r[s]] || 0;
                        if (e) {
                            var p = l - e;
                            e = l,
                                i[r[s]] = p,
                                r[s]in d ? i.totalInit += p : r[s]in u ? i.totalData += p : r[s]in m && (i.totalRender += p),
                                i.total += p
                        } else {
                            e = l;
                        }
                    }
                    return i
                }(s[t]),
                data: s[t].data
            } : null
        }
}, function(t, e, i) {
        "use strict";
        t.exports = function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                if (e = arguments[i]) {
                    for (var o in e)
                        e.hasOwnProperty(o) && (t[o] = e[o]);
                }
            }
            return t
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.some = function(t, e) {
                for (var i = 0; i < t.length; i += 1) {
                    if (e(t[i], i, t)) {
                        return !0;
                    }
                }
                return !1
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(9);
        e.getLinearFunction = function(t, e, i, n) {
            var o = (e - n) / (t - i)
                , r = e - o * t;
            return function(t) {
                return o * t + r
            }
        }
            ,
            e.getLimitFunction = function(t, e) {
                return function(i) {
                    return Math.max(t, Math.min(i, e))
                }
            }
            ,
            e.getLimitedLinearFunction = function(t, i, n, o) {
                var r = e.getLinearFunction(t, i, n, o)
                    , a = e.getLimitFunction(i, o);
                return function(t) {
                    var e = r(t);
                    return a(e)
                }
            }
            ,
            e.getItemWithMaxWeight = function(t, e) {
                for (var i, n = -1 / 0, o = 0, r = t; o < r.length; o += 1) {
                    var a = r[o]
                        , s = e(a);
                    s >= n && (n = s,
                        i = a)
                }
                return i
            }
            ,
            e.getBestCoverElement = function(t, i) {
                var o = n.filter(i, function(e) {
                    return e.height >= t.height && e.width >= t.width
                })
                    , r = t.width / t.height
                    , a = e.getItemWithMaxWeight(o, function(t) {
                    var e = t.width * t.height
                        , i = t.width / t.height;
                    return -e * Math.max(r / i, i / r)
                });
                return a || (a || e.getItemWithMaxWeight(i, function(e) {
                    return Math.min(e.width, t.width) * Math.min(e.height, t.height)
                }))
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(13).isFunction
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.experimentIds = {
                media240x400: {
                    OLD_240x400_CLICK_ENABLED: "OLD_240x400_CLICK_ENABLED",
                    OLD_240x400_CLICK_DISABLED: "OLD_240x400_CLICK_DISABLED",
                    MEDIA_240x400_BUTTON_ENABLED: "MEDIA_240x400_BUTTON_ENABLED",
                    MEDIA_240x400_BUTTON_DISABLED: "MEDIA_240x400_BUTTON_DISABLED",
                    MEDIA_240x400_FAST_ANIMATION_ENABLED: "MEDIA_240x400_FAST_ANIMATION_ENABLED",
                    MEDIA_240x400_FAST_ANIMATION_DISABLED: "MEDIA_240x400_FAST_ANIMATION_DISABLED",
                    MEDIA_240x400_IGNORE_SETTINGS_ENABLED: "MEDIA_240x400_IGNORE_SETTINGS_ENABLED",
                    MEDIA_240x400_IGNORE_SETTINGS_DISABLED: "MEDIA_240x400_IGNORE_SETTINGS_DISABLED",
                    MEDIA_240x400_SHOW_ENABLED: "MEDIA_240x400_SHOW_ENABLED",
                    MEDIA_240x400_SHOW_DISABLED: "MEDIA_240x400_SHOW_DISABLED"
                },
                r320x50: {
                    ENABLED: "R_320x50_ENABLED",
                    DISABLED: "R_320x50_DISABLED",
                    HSL_ENABLED: "R_320x50_HSL_ENABLED",
                    HSL_DISABLED: "R_320x50_HSL_DISABLED"
                },
                vertical: {
                    VERTICAL_DESKTOP_ENABLED: "VERTICAL_DESKTOP_ENABLED",
                    VERTICAL_DESKTOP_DISABLED: "VERTICAL_DESKTOP_DISABLED",
                    VERTICAL_MOBILE_ENABLED: "VERTICAL_MOBILE_ENABLED",
                    VERTICAL_MOBILE_DISABLED: "VERTICAL_MOBILE_DISABLED"
                },
                rmp: {
                    RMP_CONTROL: "RMP_CONTROL",
                    RMP_ABILITIES: "RMP_ABILITIES"
                },
                stub: {
                    STUB_CONTROL: "STUB_CONTROL",
                    STUB_DOMAIN: "STUB_DOMAIN",
                    STUB_WITH_SCALE: "STUB_WITH_SCALE",
                    STUB_WITHOUT_SCALE: "STUB_WITHOUT_SCALE"
                },
                storeButton: {
                    ENABLED: "STORE_BUTTON_ENABLED",
                    DISABLED: "STORE_BUTTON_DISABLED"
                },
                ssSkipToken: {
                    ENABLED: "SS_SKIP_TOKEN_ENABLED",
                    WIDE_LOG: "SS_SKIP_TOKEN_WIDE_LOG",
                    CLIENT: "SS_SKIP_TOKEN_CLIENT",
                    SERVER_MANUAL: "SS_SKIP_TOKEN_SERVER_MANUAL",
                    SERVER_AUTO: "SS_SKIP_TOKEN_SERVER_AUTO"
                },
                scrollSlider: {
                    ENABLED: "SCROLL_SLIDER_ENABLED",
                    DISABLED: "SCROLL_SLIDER_DISABLED"
                },
                horizontalPhoneButton: {
                    ENABLED: "HORIZONTAL_PHONE_ENABLED",
                    DISABLED: "HORIZONTAL_PHONE_DISABLED"
                },
                intersectionVisibility: {
                    FIX: "INTERSECTION_VISIBILITY_ENABLED"
                },
                hitFeatures: {
                    ENABLED: "HIT_FEATURES_ENABLED"
                }
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(9)
            , o = i(21)
            , r = i(5)
            , a = i(11)
            , s = i(176)
            , l = i(16)
            , p = i(80)
            , c = i(359);
        e.hostsMap = {
            yandex: /(?:(tv|news)\.yandex(\.\w+)+)|(?:yandex(\.\w+)+\/pogoda)/i,
            vk: /vk\.com/i,
            ok: /ok\.ru/i,
            avito: /(?:avito\.dev)|(?:avito\.ru)/i,
            rambler: /(?:rambler\.ru)|(?:autorambler\.ru)/i,
            mail: /(?:devmail\.ru)|(?:mail\.ru)/i,
            lenta: /lenta\.ru/i,
            gazeta: /gazeta\.ru/i,
            gismeteo: /gismeteo\.ru/i,
            rbc: /rbc(\.\w+)/i,
            secretmag: /secretmag\.ru/i,
            rg: /rg\.ru/i,
            eda: /eda.ru/i,
            nightparty: /nightparty\.ru/i,
            afisha: /afisha\.ru/i,
            motor: /motor\.ru/i,
            moslenta: /moslenta\.ru/i,
            championat: /championat\.com/i,
            letidor: /letidor\.ru/i,
            quto: /quto\.ru/i,
            wmj: /wmj\.ru/i,
            indicator: /indicator\.ru/i,
            ferra: /ferra\.ru/i,
            rns: /rns\.online/i,
            passion: /passion\.ru/i,
            livejournal: /livejournal\.com/i
        },
            e.pageIdList = [],
            e.blockIdList = [];
        var d, u, m = Object.keys(e.hostsMap);
        e.hosts = (d = m,
            u = {},
            a.forEach(d, function(t) {
                u[t] = t
            }),
            u),
            e.HOSTS_ALL = "ALL",
            e.isHostIgnored = function(t) {
                var i = void 0 === t ? {} : t
                    , a = i.host
                    , c = void 0 === a ? document.location.hostname : a
                    , d = i.list
                    , u = void 0 === d ? m : d
                    , f = i.exclude
                    , h = void 0 === f ? [] : f
                    , g = i.usedHostMap
                    , _ = void 0 === g ? e.hostsMap : g;
                if (p.isTurboPage(window)) {
                    var y = s.parseQueryString(s.parseUrl(document.location.href).search);
                    c = y.text.toString() || ""
                }
                var b, v, x = u === e.HOSTS_ALL ? m : u, w = (b = x,
                    v = h,
                    n.filter(b, function(t) {
                        return -1 === o.indexOf(v, t)
                    })), k = r.map(w, function(t) {
                    return _[t]
                });
                return l.some(k, function(t) {
                    return !0 === t.test(c)
                })
            }
            ,
            e.isPageIgnored = function(t) {
                var i = void 0 === t ? {} : t
                    , n = i.pageId
                    , o = i.list
                    , r = void 0 === o ? e.pageIdList : o
                    , a = i.include
                    , s = void 0 === a ? [] : a
                    , l = i.exclude
                    , p = void 0 === l ? [] : l;
                return (c.includes(r, n) || c.includes(s, n)) && !c.includes(p, n)
            }
            ,
            e.isBlockIgnored = function(t) {
                var i = void 0 === t ? {} : t
                    , n = i.blockId
                    , o = i.list
                    , r = void 0 === o ? e.blockIdList : o
                    , a = i.include
                    , s = void 0 === a ? [] : a
                    , l = i.exclude
                    , p = void 0 === l ? [] : l;
                return (c.includes(r, n) || c.includes(s, n)) && !c.includes(p, n)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.indexOf = function(t, e, i) {
                void 0 === i && (i = 0);
                for (var n = i; n < t.length; n += 1) {
                    if (t[n] === e) {
                        return n;
                    }
                }
                return -1
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(51)
            , o = i(17)
            , r = i(81);
        e.MIN_IMAGE_RATIO = 1,
            e.MAX_IMAGE_RATIO = 16 / 9,
            e.coerceImageRatio = o.getLimitFunction(e.MIN_IMAGE_RATIO, e.MAX_IMAGE_RATIO),
            e.createSizeCoercer = function(t) {
                return function(e) {
                    var i = e.width
                        , n = e.height;
                    return (i = o.getLimitFunction(t.width.min, t.width.max)(i), n = o.getLimitFunction(i / t.ratio.max, i / t.ratio.min)(n), {
                        width: i,
                        height: n = o.getLimitFunction(t.height.min, t.height.max)(n)
                    })
                }
            }
            ,
            e.calcAspectRatio = function(t) {
                return t.width / t.height
            }
            ,
            e.calcRatio = function(t, e) {
                var i = t / e;
                return i < 1 ? 1 / i : i
            }
            ,
            e.selectMostFit = function(t, i) {
                var a = o.getLimitFunction(1, 1 / 0);
                t = {
                    width: a(t.width),
                    height: a(t.height)
                };
                var s = e.calcAspectRatio(t)
                    , l = r.reduce(i, function(i, o) {
                    var r = o.coerceSize(t)
                        , a = e.calcAspectRatio(r)
                        , l = e.calcRatio(a, s)
                        , p = {
                        item: o,
                        value: [Math.abs(t.width - r.width), l]
                    };
                    return n.compareArrays(p.value, i.value) < 0 ? p : i
                }, {
                    item: void 0,
                    value: [1 / 0]
                });
                return l && l.item
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getBoundingClientRect = function(t) {
                try {
                    var e = t.getBoundingClientRect()
                        , i = e.left
                        , n = e.right
                        , o = e.top
                        , r = e.bottom;
                    return {
                        left: i,
                        right: n,
                        top: o,
                        bottom: r,
                        width: n - i,
                        height: r - o
                    }
                } catch (t) {
                    return {
                        left: 0,
                        width: 0,
                        top: 0,
                        height: 0,
                        right: 0,
                        bottom: 0
                    }
                }
            }
    }, function(t, e, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            , o = function(t) {
            if (t && t.__esModule) {
                return t;
            }
            var e = {};
            if (null != t) {
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return (e["default"] = t, e)
        }(i(4));
        var r = i(323)
            , a = i(6)
            , s = o.support.longUrls ? 3e3 : 2040;
        function l(t) {
            var e = [];
            for (var i in t)
                t.hasOwnProperty(i) && "" !== t[i] && void 0 !== t[i] && null !== t[i] && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
            return e.join("&")
        }
        function p(t, e, i) {
            return "string" != typeof t ? t : (e && 0 !== t.indexOf(e) && (t = e + t),
            i && t.slice(-i.length) !== i && (t += i),
                t)
        }
        function c(t, e, i) {
            return "string" != typeof t ? t : (e && 0 === t.indexOf(e) && (t = t.replace(e, "")),
            i && t.slice(-i.length) === i && (t = t.slice(0, -i.length)),
                t)
        }
        function d(t) {
            t = t || {},
                this._host = t.host || "",
                this._path = t.path || "",
                this._params = "",
            t.params && this.appendParams(t.params)
        }
        d.prototype = {
            clone: function() {
                return new d({
                    host: this._host,
                    path: this._path,
                    params: this._params
                })
            },
            appendGrab: function(t, e) {
                var i = Math.min(2048, s - this._getCurrentLength())
                    , n = this;
                r(i, t, function(t) {
                    var i = "grab=" + t;
                    n.appendParams(i),
                        e()
                })
            },
            appendEmptyGrab: function() {
                this.appendParams("grab=")
            },
            _getCurrentLength: function() {
                return this._getUrl().length + 3
            },
            appendParams: function(t) {
                return ("" !== this._params && (this._params = p(this._params, "", "&")), "string" == typeof t ? this._params += c(c(t, "?", ""), "&", "") : "object" === (void 0 === t ? "undefined" : n(t)) && (this._params += l(t)), this)
            },
            _getUrl: function() {
                var t = this._host;
                if (this._path && (t = p(t, "", "/"),
                    t += c(this._path, "/")),
                "" !== this._params) {
                    var e = -1 === t.indexOf("?") ? "?" : "&";
                    t += p(this._params, e, "")
                }
                return t
            },
            getUrl: function() {
                var t = this._getUrl();
                return a.IS_REL_HOSTNAME ? t.replace(a.urls.anOriginHostname, a.urls.anHostname) : t
            }
        },
            d.toQueryParams = l,
            t.exports = d
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(381)
            , o = i(19)
            , r = i(46)
            , a = i(383)
            , s = "__longExperiment"
            , l = i(9)
            , p = document.location.host
            , c = l.filter(a.ignoreHosts, function(t) {
            return t.test(p)
        }).length > 0
            , d = /:\/\/[^?\/]*(avito|brozen[-\w+]*\.yandex\.ru|netbynet\.wi-fi\.ru)/.test(location.href)
            , u = [[{
            id: o.experimentIds.r320x50.ENABLED,
            percent: 100
        }, {
            id: o.experimentIds.r320x50.DISABLED,
            percent: 0
        }], [{
            id: o.experimentIds.r320x50.HSL_ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.r320x50.HSL_DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.media240x400.OLD_240x400_CLICK_ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.media240x400.OLD_240x400_CLICK_DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.media240x400.MEDIA_240x400_SHOW_ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.media240x400.MEDIA_240x400_SHOW_DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.media240x400.MEDIA_240x400_BUTTON_ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.media240x400.MEDIA_240x400_BUTTON_DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.media240x400.MEDIA_240x400_FAST_ANIMATION_ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.media240x400.MEDIA_240x400_FAST_ANIMATION_DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.media240x400.MEDIA_240x400_IGNORE_SETTINGS_ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.media240x400.MEDIA_240x400_IGNORE_SETTINGS_DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.rmp.RMP_CONTROL,
            percent: 50
        }, {
            id: o.experimentIds.rmp.RMP_ABILITIES,
            percent: 50
        }], [{
            id: o.experimentIds.storeButton.ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.storeButton.DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.vertical.VERTICAL_DESKTOP_ENABLED,
            percent: 100
        }, {
            id: o.experimentIds.vertical.VERTICAL_DESKTOP_DISABLED,
            percent: 0
        }], [{
            id: o.experimentIds.ssSkipToken.ENABLED,
            percent: d ? 96 : 0
        }, {
            id: o.experimentIds.ssSkipToken.WIDE_LOG,
            percent: 1
        }, {
            id: o.experimentIds.ssSkipToken.CLIENT,
            percent: 1
        }, {
            id: o.experimentIds.ssSkipToken.SERVER_MANUAL,
            percent: 1
        }, {
            id: o.experimentIds.ssSkipToken.SERVER_AUTO,
            percent: 1
        }], [{
            id: o.experimentIds.scrollSlider.ENABLED,
            percent: 1
        }, {
            id: o.experimentIds.scrollSlider.DISABLED,
            percent: 1
        }], [{
            id: o.experimentIds.horizontalPhoneButton.ENABLED,
            percent: 50
        }, {
            id: o.experimentIds.horizontalPhoneButton.DISABLED,
            percent: 50
        }], [{
            id: o.experimentIds.intersectionVisibility.FIX,
            percent: 10
        }], [{
            id: o.experimentIds.hitFeatures.ENABLED,
            percent: 3
        }]];
        e.initLongExperiment = function() {
            var t = new n.LongExperiment(u);
            r.setGlobalVariable(s, t)
        }
            ,
            e.isLongExperiment = function(t) {
                if (c) {
                    return !1;
                }
                var e = r.getGlobalVariable(s);
                return !!e && e.isCurrentVersion(t)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getObjectKeys = function(t) {
                if ("function" == typeof Object.keys) {
                    return Object.keys(t);
                }
                var e = [];
                for (var i in t)
                    t.hasOwnProperty(i) && e.push(i);
                return e
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(58).isObject
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n, o = i(315), r = i(317), a = i(121);
        e.getNativeJSON = function(t) {
            if ((void 0 === t && (t = window), void 0 !== n)) {
                return n;
            }
            if (t.JSON && a.checkNativeCode(t.JSON.stringify) && a.checkNativeCode(t.JSON.parse)) {
                return t.JSON;
            }
            var e = o.createHiddenFriendlyIFrame(document.body);
            return (n = e.contentWindow.JSON, r.removeIframe(n), n)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(252)
            , o = i(7)
            , r = "RUB";
        function a(t) {
            return '<span class="price_font-' + t + '">' + {
                RUB: "\u0440\u0443\u0431",
                BYN: "Br",
                BYR: "Br",
                KZT: "\u20b8",
                UAH: "\u20b4",
                TRY: "\u20ba",
                USD: "$",
                EUR: "\u20ac"
            }[t] + "</span>"
        }
        e.preparePrices = function(t) {
            var e = t.price
                , i = e.current ? parseInt(e.current, 10) : void 0
                , n = e.old ? parseInt(e.old, 10) : void 0
                , o = n ? Math.round(100 * (n - Number(i)) / n) : void 0
                , a = t.text.currency_iso_code || r;
            return ("RUR" === a && (a = r), {
                current: i,
                old: n,
                discount: o,
                currencyCode: a
            })
        }
            ,
            e.preparePriceText = function(t) {
                return void 0 !== t.current ? n["default"](Math.round(t.current)) + "&nbsp;" + a(t.currencyCode) : ""
            }
            ,
            e.prepareDiscountText = function(t, e) {
                return Number(t.discount) > 5 ? o["default"]("SMART_DISCOUNT", e) + " " + t.discount + "%!" : ""
            }
            ,
            e.prepareMarketDiscountText = function(t, e) {
                return Number(t.discount) > 5 ? o["default"]("SMART_DISCOUNT_MARKET", e) + " " + t.discount + "%!" : ""
            }
            ,
            e.PRICE_TAG_LENGTH = a(r).length - 1
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(37)
            , o = {}
            , r = i(529)
            , a = n.once(function() {
            return r.keys().forEach(r)
        });
        e.getAdvRenderer = function(t, e) {
            return (a(), o[t](e))
        }
            ,
            e.registerAdvRenderer = function(t, e) {
                o[t] = e
            }
    }, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(185)
        , o = i(238)
        , r = i(233)
        , a = i(337)
        , s = i(73)
        , l = i(106)
        , p = i(144);
    e.createColor = function(t) {
        return new c(t)
    }
    var c = function() {
        function t(t) {
            this.rgba = [0, 0, 0, 1],
                this.set(t)
        }
        return (t.prototype.set = function(e) {
            s(e) ? e = function(t) {
                var e = d(t);
                if (e) {
                    return [parseInt(e.substr(1, 2), 16), parseInt(e.substr(3, 2), 16), parseInt(e.substr(5, 2), 16), parseInt(e.substr(7, 2), 16) / 255];
                }
                return null
            }(e) : e instanceof t && (e = e.rgbaArray());
            var i = e;
            if (function(t) {
                if (!t || !l(t)) {
                    return !1;
                }
                if (!p(t.length, 3, 4)) {
                    return !1;
                }
                for (var e = 0; e < t.length; e += 1) {
                    if (!m(e, t[e])) {
                        return !1;
                    }
                }
                return !0
            }(i)) {
                for (var n = 0; n < i.length; n += 1) {
                    this.setChannel(n, i[n]);
                }
            }
            return this
        }, t.prototype.setChannel = function(t, e) {
            m(t, e) && (t === a.RGBA_MODEL.ALPHA ? this.rgba[t] = Number(e.toPrecision(2)) : this.rgba[t] = e >> 0)
        }, t.prototype.setAlpha = function(t) {
            return (this.setChannel(a.RGBA_MODEL.ALPHA, t), this)
        }, t.prototype.toString = function() {
            return 1 !== this.rgba[a.RGBA_MODEL.ALPHA] ? this.rgbaString() : this.toHexString()
        }, t.prototype.toHexString = function() {
            return "#" + this.toHexArray().join("")
        }, t.prototype.rgbString = function() {
            return "rgb(" + this.rgbArray().join(",") + ")"
        }, t.prototype.rgbaString = function() {
            return "rgba(" + this.rgba.join(",") + ")"
        }, t.prototype.toHexArray = function() {
            var t = this.rgba;
            return [u(t[a.RGBA_MODEL.RED]), u(t[a.RGBA_MODEL.GREEN]), u(t[a.RGBA_MODEL.BLUE])]
        }, t.prototype.rgbArray = function() {
            var t = this.rgba;
            return [t[a.RGBA_MODEL.RED], t[a.RGBA_MODEL.GREEN], t[a.RGBA_MODEL.BLUE]]
        }, t.prototype.rgbaArray = function() {
            return this.rgba.concat()
        }, t.prototype.luminosity = function() {
            for (var t = this.rgba, e = [], i = 0; i < 3; i += 1) {
                var n = t[i] / 255;
                e[i] = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)
            }
            return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]
        }, t.prototype.contrast = function(e) {
            var i = this.luminosity()
                , n = new t(e).luminosity();
            return i > n ? (i + 0.05) / (n + 0.05) : (n + 0.05) / (i + 0.05)
        }, t.prototype.brightness = function() {
            var t = this.rgba;
            return (299 * t[a.RGBA_MODEL.RED] + 587 * t[a.RGBA_MODEL.GREEN] + 114 * t[a.RGBA_MODEL.BLUE]) / 1e3
        }, t.prototype.isLight = function(t) {
            return this.brightness() > (t || 127)
        }, t.prototype.readable = function(e) {
            return new t(this.isLight(e) ? "#000" : "#fff")
        }, t.prototype.mix = function(e, i) {
            void 0 === i && (i = 0.5),
                i = 1 - i;
            var n = new t(e)
                , o = this.rgba
                , r = n.rgbaArray()
                , s = o[a.RGBA_MODEL.ALPHA]
                , l = r[a.RGBA_MODEL.ALPHA]
                , p = 2 * i - 1
                , c = s - l
                , d = ((p * c == -1 ? p : (p + c) / (1 + p * c)) + 1) / 2
                , u = 1 - d;
            return new t([d * o[a.RGBA_MODEL.RED] + u * r[a.RGBA_MODEL.RED], d * o[a.RGBA_MODEL.GREEN] + u * r[a.RGBA_MODEL.GREEN], d * o[a.RGBA_MODEL.BLUE] + u * r[a.RGBA_MODEL.BLUE], s * i + l * (1 - i)])
        }, t.prototype.greyscale = function() {
            var e = this.rgba
                , i = 0.3 * e[a.RGBA_MODEL.RED] + 0.59 * e[a.RGBA_MODEL.GREEN] + 0.11 * e[a.RGBA_MODEL.BLUE];
            return new t([i, i, i, e[a.RGBA_MODEL.ALPHA]])
        }, t.prototype.lighten = function(t) {
            var e = this.getHSL();
            return (e[2] += 100 * t, this.clone().setHSL(e))
        }, t.prototype.darken = function(t) {
            var e = this.getHSL();
            return (e[2] -= 100 * t, this.clone().setHSL(e))
        }, t.prototype.saturate = function(t) {
            var e = this.getHSL();
            return (e[1] += e[1] * t, this.clone().setHSL(e))
        }, t.prototype.desaturate = function(t) {
            var e = this.getHSL();
            return (e[1] -= e[1] * t, this.clone().setHSL(e))
        }, t.prototype.getHSL = function() {
            var t = this.rgba
                , e = t[0]
                , i = t[1]
                , n = t[2];
            return r.rgbToHsl(e, i, n)
        }, t.prototype.setHSL = function(t) {
            var e = t[0]
                , i = t[1]
                , o = t[2];
            return this.set(n.hslToRgb(e, i, o))
        }, t.prototype.getHSV = function() {
            var t = this.rgba
                , e = t[0]
                , i = t[1]
                , n = t[2];
            return r.rgbToHsv(e, i, n)
        }, t.prototype.setHSV = function(t) {
            var e = t[0]
                , i = t[1]
                , n = t[2];
            return this.set(o.hsvToRgb(e, i, n))
        }, t.prototype.clone = function() {
            return new t(this.rgba)
        }, t.prototype.average = function() {
            return (this.rgba[a.RGBA_MODEL.RED] + this.rgba[a.RGBA_MODEL.GREEN] + this.rgba[a.RGBA_MODEL.BLUE]) / 3
        }, t)
    }();
    function d(t) {
        return (t = (t + "").toUpperCase().replace(/^#?/, "#"), /^#[0-9A-F]{8}$/.test(t) ? t : /^#[0-9A-F]{6}$/.test(t) ? t + "FF" : /^#[0-9A-F]{3}$/.test(t) ? t.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i, "$1$1$2$2$3$3FF") : /^#[0-9A-F]{4}$/.test(t) ? t.replace(/([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i, "$1$1$2$2$3$3$4$4") : null)
    }
    function u(t) {
        var e = "0123456789ABCDEF";
        return e.charAt(t / 16 << 0) + e.charAt(t % 16)
    }
    function m(t, e) {
        return t === a.RGBA_MODEL.ALPHA ? p(e, 0, 1) : p(e, 0, 255)
    }
    e.Color = c,
        e.normalizeColorHash = d;
}, function(t, e, i) {
    "use strict";
    var n, o = i(4), r = i(189), a = i(342), s = (n = a) && n.__esModule ? n : {
        default: n
    }, l = i(343);
    var p = i(34)
        , c = i(61)
        , d = i(184)
        , u = i(193);
    function m() {}
    m.addScript = d,
        p.extend(m, c),
        m.querySelector = function(t, e) {
            if ("string" != typeof t) {
                return t;
            }
            var i = t.slice(0, 1)
                , n = t.slice(1);
            switch (i) {
                case "#":
                    return (0,
                        r.getElementById)(n);
                case ".":
                    return m.getElementsByClassName(n, e);
                default:
                    return p.map((e || document).getElementsByTagName(t), function(t) {
                        return t
                    })
            }
        }
        ,
        m.getElementsByClassName = function(t, e) {
            if ((e = e || document, p.checkNativeCode(e.getElementsByClassName))) {
                return Array.prototype.slice.call((0,
                    s["default"])(t, e));
            }
            var i = e.getElementsByTagName("*");
            return p.filter(i, function(e) {
                return m.hasClass(e, t)
            })
        }
    var f = c.setStyle;
    m.setImportantCssProperty = c.setStyle = function(t, e, i) {
        p.isObject(e) ? f(t, e, !0) : f(t, e, i, !0)
    }
        ,
        m.getWindowSize = u,
        m.remove = function(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }
        ,
        m.appendStyle = l.appendStyle,
        m.isOverlaid = function(t) {
            var e = m.getBoundingClientRect(t);
            if (!e || !document.elementFromPoint || o.isOperaMini || !t.contains) {
                return !1;
            }
            var i = t.clientWidth / 2
                , n = t.clientHeight / 2
                , r = e.left + i
                , a = e.top + n
                , s = document.elementFromPoint(r, a);
            return !!s && (t != s && !t.contains(s))
        }
        ,
        m.hasParent = function(t, e) {
            t.parentNode;
            return (e = e.toUpperCase(), Boolean(m.findParent(t, function(t) {
                return t.tagName === e
            })))
        }
        ,
        m.findParent = function(t, e, i) {
            for (var n = i ? t : t.parentNode; n && 1 === n.nodeType; ) {
                if (e(n)) {
                    return n;
                }
                n = n.parentNode
            }
            return null
        }
        ,
        m.isInViewport = function(t, e) {
            var i = m.getBoundingClientRect(t);
            if (!i || o.isOperaMini) {
                return t.offsetWidth > 0 && t.offsetHeight > 0;
            }
            var n = i.right - i.left
                , r = i.bottom - i.top
                , a = 0;
            if (n > 0 && r > 0) {
                var s = function(t, e, i) {
                    return Math.max(Math.min(e, i) - Math.max(t, 0), 0)
                }
                    , l = m.getWindowSize();
                a = s(i.left, i.right, l.width) * s(i.top, i.bottom, l.height) / (n * r)
            }
            return a >= (e || Number.MIN_VALUE)
        }
        ,
        m.setIframeHTML = function(t, e) {
            t.contentWindow.document.write(e)
        }
        ,
        m.getWindowScroll = function() {
            return {
                left: void 0 === window.pageXOffset ? document.documentElement.scrollLeft : window.pageXOffset,
                top: void 0 === window.pageYOffset ? document.documentElement.scrollTop : window.pageYOffset
            }
        }
        ,
        m.getOffset = function(t) {
            var e = document.documentElement
                , i = m.getBoundingClientRect(t)
                , n = m.getWindowScroll();
            return {
                top: i ? i.top + n.top - (e.clientTop || 0) : 0,
                left: i ? i.left + n.left - (e.clientLeft || 0) : 0
            }
        }
        ,
        m.getComputedFontSize = function(t) {
            try {
                var e = window.getComputedStyle(t, null).getPropertyValue("font-size");
                return Math.round(parseFloat(e))
            } catch (t) {
                return null
            }
        }
        ,
        m.getBoundingClientRect = function(t) {
            try {
                var e = t.getBoundingClientRect();
                return {
                    left: e.left,
                    right: e.right,
                    top: e.top,
                    bottom: e.bottom
                }
            } catch (t) {
                return null
            }
        }
        ,
        t.exports = m;
}, function(t, e, i) {
        "use strict";
        t.exports = i(11).forEach
    }, function(t, e, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            , o = i(10)
            , r = i(341)
            , a = o.extend({}, o);
        a.inArray = function(t, e, i) {
            void 0 !== e && null !== e || (e = "");
            for (var n = 0; n < t.length; n += 1) {
                if (i && i(e, t[n]) || e === t[n]) {
                    return n;
                }
            }
            return -1
        }
            ,
            a.deepCopy = function(t, e) {
                if (e && "object" == (void 0 === e ? "undefined" : n(e))) {
                    for (var i in e)
                        e.hasOwnProperty(i) && ("object" != n(e[i]) || a.isArray(e[i]) ? t[i] = e[i] : ("object" != n(t[i]) && (t[i] = {}),
                            a.deepCopy(t[i], e[i])));
                }
                return t
            }
            ,
            a.format = function(t, e) {
                var i = Array.prototype.slice.call(arguments, 1);
                return t.toString().replace(/(^|.|\r|\n)(\$\{(.*?)\})/g, function(t, n, o, r) {
                    return "\\" == n ? o : /^[0-9]+$/.test(r) ? n + [i[+r]].join("") : n + [e && e[r]].join("")
                })
            }
            ,
            a.downscale = function(t, e) {
                var i = Math.min(e.width / t.width, e.height / t.height, 1);
                return {
                    width: Math.round(t.width *= i),
                    height: Math.round(t.height *= i)
                }
            }
            ,
            a.capitalize = function(t) {
                return t.charAt(0).toUpperCase() + t.substring(1, t.length)
            }
            ,
            a.toQueryParams = function(t) {
                var e = [];
                return (a.each(a.keys(t), function(i) {
                    void 0 != t[i] && "" !== t[i] && e.push(i + "=" + encodeURIComponent(t[i]))
                }), e.join("&"))
            }
            ,
            a.addQueryParams = function(t, e) {
                if (!t) {
                    throw new Error("util.addQueryParams: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0443\u0441\u0442\u043e\u0439 url");
                }
                var i = -1 !== (t = t.split("#"))[0].indexOf("?") ? "&" : "?";
                return [t[0], i, a.toQueryParams(e), t[1] ? "#" + t[1] : ""].join("")
            }
            ,
            a.camelizeKeys = function(t) {
                var e = {};
                return (a.forOwn(t, function(t, i) {
                    e[a.camelize(i)] = t
                }), e)
            }
            ,
            a.addProtocol = function(t) {
                return (0 == t.indexOf("//") && (t = window.location.protocol + t), t)
            }
            ,
            a.bemFormatter = function(t) {
                var e = /^([_-]\w+)/;
                return function() {
                    if (!arguments.length) {
                        return t;
                    }
                    var i = [];
                    return (a.each(arguments, function(n) {
                        var o = n.split(/\s+/);
                        i.push(a.map(o, function(i) {
                            return i.replace(e, function() {
                                return t + arguments[1]
                            })
                        }).join(" "))
                    }), i.join(" "))
                }
            }
            ,
            a.mixin = function(t, e) {
                o.forOwn(e, function(e, i) {
                    var n, r, a = t[i];
                    t[i] = o.isFunction(a) ? ((n = a, r = e, function() {
                        var t = this.__base;
                        this.__base = n;
                        var e = r.apply(this, arguments);
                        return (this.__base = t, e)
                    })
                    ) : e
                })
            }
            ,
            a.unique = r,
            a.loop = function(t, e, i) {
                var n = [];
                i = i || this;
                for (var o = 0; o < t; o += 1) {
                    var r = e.call(i, o);
                    if (!r) {
                        break;
                    }
                    n.push(r)
                }
                return n
            }
            ,
            t.exports = a
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(46);
        function o() {
            return n.getYa().codeVer || 0
        }
        e.getCodeVersion = o,
            e.getRevisionNo = function() {
                return o() % 1024
            }
    }, function(t, e, i) {
        "use strict";
        var n, o = i(372), r = (n = o) && n.__esModule ? n : {
            default: n
        }, a = i(50), s = i(4), l = i(202);
        var p = i(10).extend
            , c = i(3)
            , d = i(6)
            , u = i(131)
            , m = i(159)
            , f = i(18);
        function h(t) {
            var e = /^(\w{1,2})-(?:\w+-)?(\d+)-(\d+|\w+)$/.exec(t);
            return {
                product: e ? e[1] : null,
                pageId: e ? e[2] : null,
                impId: e ? e[3] : null
            }
        }
        function g(t) {
            var e = h(t.blockId)
                , i = p({}, t);
            if (i.onRender = c.isolate(t.onRender),
                i.onHide = c.isolate(t.onHide),
                i.pageId = e.pageId,
                i.blockImpId = e.impId,
                i.statId = i.blockImpId,
                i.partnerStatId = t.statId,
                i.geo = u.getValidGeo(i.geo),
                i.disableHighlight = !0 === i.disableHighlight,
                (0,
                    a.isFakeImpId)(e.impId)) {
                var n = t.oldDirectSettings
                    , o = document.getElementById(t.renderTo)
                    , s = m.getElementFullSize(o)
                    , l = (0,
                    r["default"])(n.type, n.limit, s.width, s.height);
                i.rtbInDirect = {
                    defaultSize: l.defaultSize,
                    allSizes: l.allSizes,
                    directCount: n.limit
                }
            }
            return x(i)
        }
        var _ = (Ya && Ya.Context || {}).isAllowedRepeatAds
            , y = void 0 === _ ? function(t, e) {
                return e
            }
            : _
            , b = /tv\.yandex\.ru/.test(location.hostname)
            , v = /avito/.test(location.hostname);
        function x(t) {
            var e = t.allowRepeatAds;
            return (e = e ? (0,
                l.parseAllowRepeatAds)(e) : y(t.pageId, !1) ? {
                maxSkipSize: 0,
                custom: !0
            } : b ? {
                maxSkipSize: 9,
                custom: !0
            } : v ? {
                maxSkipSize: 20,
                custom: !0
            } : {
                screen: s.isMobile ? 3 : 2
            }, t.allowRepeatAds = e, t)
        }
        t.exports = {
            getRenderId: function(t) {
                return (t.blockId || t.renderTo) + "#" + (t.pageNumber || "")
            },
            parseBlockId: h,
            prepareCallback: function(t) {
                return c.isolate(t || function() {}
                )
            },
            prepareDirectConfig: function(t) {
                var e, i = h(t.blockId), n = g(t);
                return (n.product = (e = i.product,
                    {
                        D: d.Products.DIRECT,
                        P: d.Products.PREMIUM,
                        S: d.Products.STRIPE
                    }[e]), n)
            },
            prepareFullscreenConfig: function(t) {
                var e = h(t.blockId)
                    , i = p({}, t);
                return {
                    pageId: e.pageId,
                    blockImpId: e.impId,
                    onVideoStart: f(i.onVideoStart) ? c.isolate(i.onVideoStart) : void 0,
                    onVideoEnd: f(i.onVideoEnd) ? c.isolate(i.onVideoEnd) : void 0,
                    geo: u.getValidGeo(i.geo),
                    userConfig: i
                }
            },
            prepareInpageConfig: function(t) {
                var e = h(t.blockId)
                    , i = p({}, t);
                return {
                    params: {
                        partnerId: e.pageId,
                        category: e.impId,
                        renderTo: i.renderTo
                    },
                    inpage: i.inpage || {}
                }
            },
            prepareInternalConfig: function(t) {
                var e = h(t.blockId)
                    , i = p({}, t);
                return (i.onRender = c.isolate(i.onRender), i.onHide = c.isolate(i.onHide), i.pageId = e.pageId, i.internalType = e.impId.toLowerCase(), i.product = d.Products.INTERNAL, i)
            },
            prepareOldDirectConfig: function(t, e, i) {
                var n = void 0;
                i.ad_format === d.Products.DIRECT && (n = i.geo_lat || i.geo_long ? {
                    lat: i.geo_lat,
                    long: i.geo_long
                } : i.geo);
                var o = {
                    pageId: t,
                    renderTo: e,
                    data: i.data,
                    grab: i.grab,
                    searchText: i.search_text,
                    searchPageNumber: i.search_page_number,
                    lang: i.lang,
                    onRender: c.isolate(i.on_render),
                    onHide: c.isolate(i.on_hide),
                    product: i.ad_format,
                    adaptiveType: i.adaptive_type,
                    geo: u.getValidGeo(n),
                    disableHighlight: !0 === i.disable_highlight,
                    allowRepeatAds: i.allowRepeatAds,
                    cspNonce: i.csp_nonce,
                    additionalBanners: i.additional_banners,
                    pageNumber: i.page_number,
                    extParams: i.ext_params,
                    bundle: i.bundle,
                    adfoxexp: i.adfoxexp
                };
                i.type === d.Products.STRIPE && (o.product = d.Products.STRIPE);
                var r = parseInt(i.stat_id, 10);
                return (isNaN(r) || (o.statId = r % Math.pow(2, 24) + Math.pow(2, 30),
                    o.partnerStatId = r), x(o))
            },
            prepareRtbConfig: g
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.once = function(t) {
                var e = function() {
                    var i = t.apply(this, arguments);
                    return (e = function() {
                        return i
                    }, i)
                };
                return function() {
                    return e.apply(this, arguments)
                }
            }
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o, r = i(326), a = i(14), s = i(327), l = !0;
    e.sendLabel = function(t) {
        var e = a.getJsTracerObject(t);
        e && (l && (l = !1,
            e.tags = n({}, e.tags, {
                cset: o
            }),
            e.data = n({}, e.data, {
                firstRender: !0
            })),
            r.sendToSolomon(n({
                event: "block_render"
            }, e)))
    }
        ,
        e.sendResourceInfo = function() {
            var t = s.getJsTracerObject();
            t && r.sendToSolomon(n({
                event: "performance"
            }, t))
        }
        ,
        e.setContextStaticExecutionTime = function(t, e) {
            o = e - t
        }
}, function(t, e, i) {
    "use strict";
    var n, o = ((n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i])
            }, function(t, e) {
        function i() {
            this.constructor = t
        }
        n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                new i())
    })
        ), r = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var a = i(0)
        , s = i(90)
        , l = i(92)
        , p = i(22)
        , c = i(95)
        , d = i(263)
        , u = i(7)
        , m = i(530)
        , f = i(533)
        , h = i(536);
    e.ResourceNode = h.ResourceNode;
    var g = i(12)
        , _ = i(538)
        , y = i(56)
        , b = i(539)
        , v = i(540)
        , x = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return (o(e, t), e.prototype.isAvailable = function(t) {
            var e = this.context.fontSize
                , i = this.getSize(t).height;
            return !("button-medium" === t && i > 3.4 * e + 2 + 1)
        }, e)
    }(h.ResourceHeightTreeContext);
    e.AdvResourceTreeContext = x;
    var w = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return (o(e, t), e.prototype.onInit = function() {
            t.prototype.onInit.call(this),
                this.prepareData()
        }, e.prototype.prepareData = function() {
            var t = this.props
                , e = t.adv
                , i = t.getSize
                , n = t.context
                , o = e.isAppAd
                , r = e.url
                , a = e.addInfo || {}
                , s = this.getDataSource().getLanguage();
            this.action = {
                url: a.callToActionUrl || r,
                title: o ? a.callToAction || u["default"]("INSTALL", s) : u["default"]("LEARN_MORE", s)
            };
            var l = this.coerceSize(i())
                , p = l.width
                , d = l.height;
            if (this.minHeight = d,
                this.width = p,
                n.setParams({
                    fontSize: this.calcFontSize({
                        width: this.width,
                        height: this.minHeight
                    })
                }),
                e.warning) {
                var m = c.hasImportantFlag(e.bannerFlags);
                this.warning = {
                    text: e.warning,
                    important: m
                }
            }
            this.warningWidth = p
        }, e.prototype.beforeRender = function(e) {
            t.prototype.beforeRender.call(this, e);
            var i = this.props
                , n = i.adv
                , o = i.context.getTheme()
                , r = n.isAppAd
                , a = n.addInfo || {};
            if (this.fontSize = o.fontSize,
                r) {
                var s = 5.5 * this.fontSize
                    , l = n.icon && n.icon.getFitting(s, s)
                    , p = l && l.src
                    , c = Number(a.rating) || 0;
                this.app = {
                    rating: c >= 3.5 ? c : 0,
                    price: a.price,
                    icon: p ? {
                        src: p,
                        size: s
                    } : void 0
                }
            }
            this.prepareImage()
        }, e.prototype.prepareImage = function() {
            var t = this.getPicture();
            if (t) {
                var e = this.props.context.getTheme().getImageSize({
                    width: this.width,
                    height: this.minHeight
                })
                    , i = p.calcRatio(e.maxWidth / e.maxHeight, p.calcAspectRatio(t));
                this.getImageSize = function() {
                    return {
                        width: e.maxWidth * i,
                        height: e.maxHeight * i
                    }
                }
                    ,
                (t = this.getPicture()) && (this.image = r({
                    src: t.src
                }, e))
            }
        }, e.prototype.getWarningMinHeight = function() {
            var t = this.warning;
            if (!t) {
                return 0;
            }
            var e = t.important ? 0.1 : 0
                , i = this.minHeight * this.width;
            return Math.max(15, i * e / this.warningWidth)
        }, e.prototype.pushCss = function() {
            t.prototype.pushCss.call(this);
            for (var e = this.props.context.getTheme(), i = 0, n = [b].concat(this.getStyles(), [v]); i < n.length; i += 1) {
                var o = n[i];
                this.pushStyles(o, e)
            }
        }, e.prototype.afterRender = function() {
            var e = this;
            t.prototype.afterRender.call(this),
                this.props.context.doOnReady(function() {
                    return e.onReady()
                })
        }, e.prototype.onReady = function() {
            var t = h.memoizeResourceTreeContext(new x(this))
                , e = this.createResourceTree(function(e, i, n) {
                return (void 0 === n && (n = []), t.createNode(e, i, n))
            });
            this.removeExcessResources(t, e)
        }, e.prototype.removeExcessResources = function(t, e) {
            for (var i = this.minHeight, n = this.coerceSize(this.props.getSize()).height, o = 0, r = t.getExcessResources("content", i, n, e); o < r.length; o += 1) {
                var a = r[o]
                    , s = this.getResourceById(a);
                s && s.destroy()
            }
        }, e.prototype._render = function() {
            var t = this.b_
                , e = this.width
                , i = this.minHeight
                , n = this.fontSize
                , o = this.props.adv
                , r = o.adId
                , s = o.url
                , l = {
                width: e + "px",
                "min-height": i + "px",
                "font-size": n + "px"
            }
                , p = e * i < this.props.context.getTheme().maxSmallAdvSquare;
            return a.create(g, {
                resourceId: "root",
                class: t(t(), "_" + this.mod),
                style: l,
                href: s,
                tag: p ? "a" : "yatag",
                "data-id": r
            }, this.renderContent("content"), this.renderFeedback({}), this.renderAdtune({}))
        }, e.prototype.renderTitle = function(t) {
            void 0 === t && (t = {});
            var e = this.b_
                , i = this.props.adv
                , n = i.title
                , o = i.url;
            return n ? a.create("yatag", r({
                resourceId: "title",
                class: e("__title")
            }, t), a.create(g, {
                href: o,
                class: e("__link", "__link_title")
            }, a.create(l.Text, {
                hyphenates: !0,
                text: n
            }))) : null
        }, e.prototype.renderTitleBig = function() {
            var t = this.b_;
            return this.renderTitle({
                resourceId: "title-big",
                class: t("__title", "__title_big")
            })
        }, e.prototype.renderBody = function() {
            var t = this.b_
                , e = this.props.adv
                , i = e.body
                , n = e.url;
            return i ? a.create("yatag", {
                resourceId: "body",
                class: t("__body")
            }, a.create(g, {
                href: n,
                class: t("__link", "__link_body")
            }, a.create(l.Text, {
                hyphenates: !0,
                highlight: !0,
                text: i
            }))) : null
        }, e.prototype.renderSiteLinks = function() {
            var t = this.b_
                , e = this.props.adv.sitelinks || [];
            if (!e.length) {
                return null;
            }
            var i = e.map(function(e) {
                var i = e.url
                    , n = e.title;
                return a.create("yatag", {
                    class: t("__site-links-item")
                }, a.create(g, {
                    href: i,
                    class: t("__link", "__link_site-link")
                }, a.create(l.Text, {
                    text: n
                })))
            });
            return a.create("yatag", {
                resourceId: "site-links",
                class: t("__site-links")
            }, i)
        }, e.prototype.renderCallouts = function() {
            var t = this.b_
                , e = this.props.adv.callouts || [];
            if (!e.length) {
                return null;
            }
            var i = e.map(function(e) {
                return a.create("yatag", {
                    class: t("__callouts-item")
                }, a.create(l.Text, {
                    text: e
                }))
            });
            return a.create("yatag", {
                resourceId: "callouts",
                class: t("__callouts")
            }, i)
        }, e.prototype.renderButtonBigImpl = function(t) {
            if (!this.getDataSource().hitFeatures.callToActionButton) {
                return null;
            }
            var e = this.b_
                , i = this.action
                , n = this.app
                , o = this.props.adv.domain
                , r = null;
            return (n && n.rating ? r = a.create("yatag", {
                class: e("__button-extra")
            }, a.create(m.Stars, {
                value: n.rating
            })) : o && (r = a.create("yatag", {
                class: e("__button-extra", "__button-extra_domain")
            }, a.create("yatag", {
                class: e("__button-content")
            }, a.create("yatag", {
                class: e("__button-text")
            }, a.create(g, {
                href: i.url,
                class: e("__link", "__link_button-extra")
            }, a.create(l.Text, {
                text: o
            })))))), a.create("yatag", {
                resourceId: "button-" + t,
                class: e("__button", "__button_" + t)
            }, a.create(g, {
                href: i.url,
                class: e("__link", "__link_button-action", "__button-action")
            }, a.create("yatag", {
                class: e("__button-content")
            }, a.create("yatag", {
                class: e("__button-text")
            }, a.create(l.Text, {
                text: i.title
            })), n && n.price ? a.create("yatag", {
                class: e("__button-text")
            }, "\xa0\u2014 " + n.price, " ", a.create(f.Ruble, null)) : null)), r))
        }, e.prototype.renderButtonBig = function() {
            return this.renderButtonBigImpl("big")
        }, e.prototype.renderButtonMedium = function() {
            return this.renderButtonBigImpl("medium")
        }, e.prototype.renderButtonSmall = function() {
            if (!this.getDataSource().hitFeatures.callToActionButton) {
                return null;
            }
            var t = this.b_
                , e = this.action
                , i = this.props.adv.domain;
            return a.create("yatag", {
                resourceId: "button-small",
                class: t("__button", "__button_small")
            }, a.create(g, {
                href: e.url,
                class: t("__link", "__link_button-action", "__button-action")
            }, a.create("yatag", {
                class: t("__button-content")
            }, a.create("yatag", {
                class: t("__button-text")
            }, a.create(l.Text, {
                text: i || e.title
            }))), i ? a.create("yatag", {
                class: t("__button-text")
            }, "\xa0", a.create("yatag", {
                class: t("__button-chevron")
            })) : null))
        }, e.prototype.renderWarning = function() {
            var t = this.b_
                , e = this.warning
                , i = this.props.context
                , n = Math.max(i.getTheme().warningHeight, this.getWarningMinHeight())
                , o = {
                "min-height": n
            };
            return e ? a.create("yatag", {
                resourceId: "warning",
                class: t("__warning", "__warning_" + (e.important ? "important" : "normal")),
                style: o
            }, a.create(d.Scroll, {
                calculateScroll: function(t) {
                    return i.doOnReady(t)
                }
            }, a.create("yatag", {
                class: t("__warning-text")
            }, a.create(l.Text, {
                text: e.text
            })))) : n ? a.create("yatag", {
                resourceId: "warning",
                style: o
            }) : null
        }, e.prototype.renderLogo = function(t) {
            void 0 === t && (t = "default");
            var e = this.b_
                , i = this.props.logo;
            return i ? a.create(g, {
                href: i.url,
                class: e("__link", "__logo", "__logo_" + t)
            }, a.create(l.Text, {
                text: i.title
            })) : null
        }, e.prototype.renderLogoStub = function() {
            var t = this.b_;
            return this.props.logo ? a.create("yatag", {
                resourceId: "logo-stub",
                class: t("__logo-stub")
            }) : null
        }, e.prototype.renderAge = function(t) {
            void 0 === t && (t = "default");
            var e = this.b_
                , i = this.props.adv.age;
            return i ? a.create("yatag", {
                class: e("__age", "__age_" + t)
            }, i) : null
        }, e.prototype.renderAppIcon = function() {
            var t = this.b_
                , e = this.app;
            if (!e || !e.icon) {
                return null;
            }
            var i = e.icon
                , n = i.src
                , o = i.size
                , r = {
                width: o,
                height: o,
                "background-image": "url(" + n + ")"
            };
            return a.create("yatag", {
                class: t("__app-icon"),
                style: r
            })
        }, e.prototype.registerImageViewport = function(t) {
            var e = this
                , i = this.props.context;
            i.doOnReady(function() {
                return i.doOnReady(function() {
                    var i = e.getResourceById(t);
                    if (i) {
                        var n = i.getElement();
                        if (n) {
                            var o = y.getElementInnerSize(n)
                                , r = o.width / o.height
                                , a = e.getPicture()
                                , s = a.width
                                , l = a.height
                                , p = a.smartCenter
                                , c = s / l
                                , d = {
                                x: p.x + p.width / 2,
                                y: p.y + p.height / 2
                            }
                                , u = _.calcBackgroundPosition(d, r, c);
                            i.setStyle({
                                "background-position": 100 * u.x + "% " + 100 * u.y + "%"
                            })
                        }
                    }
                })
            })
        }, e)
    }(s);
    e.AdvAdaptive = w;
}, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o = i(412);
    e.prettify = function(t, e) {
        var i = n({
            gluePrepositions: !0,
            maxGluedLength: 1 / 0,
            softBreakPunct: !1
        }, e);
        if (function(t) {
            return /[\u0404\u0406\u0407\u0454\u0456\u0457\u0490\u0491]/.test(t)
        }(t)) {
            return t;
        }
        var r = (t = o.htmlToUtf(t)).match(/"/g)
            , a = new RegExp('(^|\\s)"([.\\-\\s\\da-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]{3,})"',"g")
            , s = t.match(a);
        return (r && s && r.length % 2 == 0 && r.length / 2 === s.length && (t = t.replace(a, function(t, e, i) {
            return /^[\-\s]|[\-\s]$|^[\-\s\d]+$/.test(i) ? t : e + "\xab" + i + "\xbb"
        })), i.gluePrepositions && (t = t.replace(new RegExp('(^|\\(|\\s)([\u0410\u0430]|[\u0411\u0431]\u0435\u0437|[\u0412\u0432](?:|\u044b|\u0430\u0441|\u0430\u043c|\u0441\u0435|\u0441\u0451)|[\u0413\u0433]\u0434\u0435|[\u0414\u0434](?:\u043e|\u043b\u044f)|[\u0417\u0437]\u0430|[\u0418\u0438](?:|\u0437)|[\u041a\u043a](?:|\u043e|\u0430\u043a)|[\u041c\u043c]\u044b|[\u041d\u043d](?:\u0430|\u0430\u043c|\u0430\u0441|\u0435|\u0438|\u043e)|[\u041e\u043e](?:|\u0431|\u0442)|[\u041f\u043f](?:\u043e|\u0440\u043e)|[\u0421\u0441](?:|\u043e)|[\u0422\u0442](?:\u043e|\u0443\u0442|\u044b)|[\u0423\u0443]|[\u0427\u0447]\u0442\u043e|[\u042d\u044d]\u0442\u043e)\\s([\xab"$\\da-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]+)',"g"), function(t, e, n, o) {
            return (n + o).length + 1 <= i.maxGluedLength ? e + n + "\xa0" + o : t
        })), i.softBreakPunct && (t = t.replace(/([.,!?:;)+]+|[^<]\/|=(?!"))([^ -])(?!$|[.,!?:;)+=\/ ])/g, "$1<wbr />$2")), t = t.replace(/([0-9]+) (?=[0-9]{3})/g, "$1\xa0").replace(/([0-9\u00A0]+) (\u0440|\u0440\u0443\u0431|\u0442\u044b\u0441|\u043c\u043b\u043d|\u043a\u043c|\u043c|\u0441\u043c|\u043c\u043c)(?=[.,?!:;\s]|$)/g, function(t, e, n) {
            return t.length <= i.maxGluedLength ? e + "\xa0" + n : t
        }).replace(/ \-(\d\d?)%/g, " \u2212$1%").replace(/ !/, "\xa0!"))
    }
}, function(t, e, i) {
        "use strict";
        var n = i(77);
        t.exports = {
            on: n.on,
            un: n.un
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(21).indexOf
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(13);
        e.callSafe = function(t) {
            try {
                return t()
            } catch (t) {
                return
            }
        }
            ,
            e.protect = function(t, i, o, r) {
                return function() {
                    try {
                        return i.apply(o || this, arguments)
                    } catch (i) {
                        if ((n.isFunction(r) && r(i), !0 === i.preventProtect)) {
                            throw i;
                        }
                        e.protect.log(i, t)
                    }
                }
            }
            ,
            e.protect.log = function(t, e) {
                console.log("LOG:" + e + ":" + t)
            }
            ,
            e.protect.setTimeout = function(t, i, n, o) {
                return window.setTimeout(e.protect("timeout", t, n, o), i)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.forOwn = function(t, e, i) {
                for (var n in t)
                    t.hasOwnProperty(n) && e.call(i, t[n], n, t)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.isString = function(t) {
                return "string" == typeof t
            }
    }, function(t, e, i) {
        "use strict";
        function n() {
            return window.Ya || (window.Ya = {})
        }
        function o() {
            var t = n();
            return t.Context || (t.Context = {})
        }
        e.__esModule = !0,
            e.setGlobalVariable = function(t, e) {
                o()[t] = e
            }
            ,
            e.getGlobalVariable = function(t) {
                return o()[t]
            }
            ,
            e.getYa = n,
            e.getYaContext = o
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.noop = function() {
                for (var t = [], e = 0; e < arguments.length; e += 1) {
                    t[e] = arguments[e];
                }
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(177).getNativeMethod(Array, "isArray")
            , o = {};
        e.isArray = Boolean(n) ? function(t) {
                return n.call(Array, t)
            }
            : function(t) {
                return "[object Array]" === o.toString.call(o, t)
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(195)
            , o = i(128)
            , r = i(196)
            , a = i(10)
            , s = i(127)
            , l = i(356);
        function p(t, e) {
            if (e) {
                var i = a.indexOf(e, t);
                -1 !== i && (e[i] = null)
            }
        }
        var c = a.augment(n, {
            __embeddedResources: null,
            __children: null,
            __contextComponent: null,
            __parentComponent: null,
            __resourceId: null,
            __state: null,
            props: null,
            constructor: function(t, e, i) {
                this.__state = l.INITIAL,
                (t = t || {}).hasOwnProperty("resourceId") && (this.__resourceId = t.resourceId,
                    delete t.resourceId),
                    this.__embeddedResources = [],
                    this.__children = a.isArray(e) ? e : [],
                    this.__contextComponent = i,
                i && i.addToEmbeddedResources(this),
                    this.props = this.initProps(t),
                    this.onInit()
            },
            addToEmbeddedResources: function(t) {
                this.__embeddedResources.push(t)
            },
            initProps: function(t) {
                return t
            },
            destroy: function() {
                this.unmount();
                var t = this.getContextComponent();
                t && t._removeFromEmbeddedResources(this);
                var e = this.__parentComponent;
                e && e._removeFromExternalResources(this),
                    a.each(this.__children, function(t) {
                        t instanceof n && t.destroy()
                    }, this),
                    this.onDestroy(),
                    this.__state = l.DESTROYED
            },
            unmount: function() {
                this._clearEmbeddedResources(),
                    a.each(this.__children, function(t) {
                        t instanceof n && t.unmount()
                    }, this),
                    this.onUnmount(),
                    this.__state = l.UNMOUNTED
            },
            onInit: s,
            onDestroy: s,
            onUnmount: s,
            onMount: s,
            _clearEmbeddedResources: function() {
                a.each(this.__embeddedResources, function(t) {
                    t instanceof n && t.destroy()
                }),
                    this.__embeddedResources = []
            },
            _removeFromExternalResources: function(t) {
                p(t, this.__children)
            },
            _removeFromEmbeddedResources: function(t) {
                p(t, this.__embeddedResources)
            },
            findEmbeddedResources: function(t) {
                var e = [];
                if (!a.isFunction(t)) {
                    var i = t;
                    t = function(t) {
                        return t.__resourceId === i
                    }
                }
                return (a.each(this.__embeddedResources, function(i) {
                    i && t(i) && e.push(i)
                }), e)
            },
            getResourceById: function(t) {
                for (var e = this.__embeddedResources, i = e.length, n = 0; n < i; n += 1) {
                    var o = e[n];
                    if (o && o.__resourceId === t) {
                        return o;
                    }
                }
                return null
            },
            getParentComponent: function() {
                return this.__parentComponent
            },
            getContextComponent: function() {
                return this.__contextComponent
            },
            getChildren: function() {
                return this.__children
            },
            pushCallback: function(t) {
                r.push(t, this)
            },
            shouldRender: function() {
                return !0
            },
            render: function() {
                return this.getChildren()
            },
            callRendering: function(t) {
                this.__state === l.MOUNTED ? this.unmount() : this.__parentComponent = o.getCurrentComponent();
                var e, i = t(this);
                return (this.__lastElement = (e = i.childNodes).length ? e[e.length - 1] : null, this.__state = l.MOUNTED, i)
            },
            update: function() {
                return o.updateComponentInNode(this.__lastElement, this)
            }
        });
        t.exports = c
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = [];
        function o(t) {
            return 0 === t.indexOf(e.FAKE_IMP_ID)
        }
        e.FAKE_IMP_ID = "100500",
            e.generateImpId = function(t) {
                var i = n.indexOf(t);
                return (-1 === i && (i = n.length,
                    n.push(t)), e.FAKE_IMP_ID + "_" + i)
            }
            ,
            e.isFakeImpId = o,
            e.getRealImpId = function(t) {
                return o(t) ? e.FAKE_IMP_ID : t
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(192)
            , o = i(81);
        e.compareArrays = function(t, e) {
            for (var i = t.length, n = e.length, o = Math.min(i, n), r = 0; r < o; r += 1) {
                if (t[r] < e[r]) {
                    return -1;
                }
                if (t[r] > e[r]) {
                    return 1;
                }
            }
            return i - n
        }
            ,
            e.flushQueue = function(t, e) {
                for (; t.length; ) {
                    e(t.shift());
                }
            }
            ,
            e.getSectionLimit = function(t, e, i) {
                for (var n = 0, o = 1 / 0, r = 0, a = 0, s = t; a < s.length; a += 1) {
                    var l = s[a];
                    if ((n += l, e * (o = Math.min(o, l)) / n < i)) {
                        return r;
                    }
                    r += 1
                }
                return r
            }
            ,
            e.createExpander = function() {
                var t = document.createElement("div");
                return (n.setStyle(t, {
                    display: "table",
                    "table-layout": "fixed",
                    width: "100%",
                    height: "0",
                    visibility: "hidden"
                }), t.innerHTML = '<div style="display:table-row"><div style="display:table-cell"></div></div>', t)
            }
            ,
            e.calcAvg = function() {
                for (var t = [], e = 0; e < arguments.length; e += 1) {
                    t[e] = arguments[e];
                }
                return o.reduce(t, function(t, e) {
                    return t + e
                }) / t.length
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(96)
            , o = i(2);
        t.exports = function(t, e, i) {
            return (i || (i = t), i.addClass(e.join(" ")), o.each(e, function(e) {
                !function(t, e, i) {
                    var o = t.getElement();
                    (0,
                        n.hasScrollInElement)(o) || (i.removeClass(e),
                    (0,
                        n.hasScrollInElement)(o) && i.addClass(e))
                }(t, e, i)
            }), (0,
                n.hasScrollInElement)(t.getElement()))
        }
    }, function(t, e, i) {
        "use strict";
        var n;
        n = i(204),
            t.exports = n
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.removeNodeFromParent = function(t) {
                if (t) {
                    var e = t.parentElement;
                    e && e.removeChild(t)
                }
            }
    }, function(t, e, i) {
        "use strict";
        var n, o = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var r = i(97)
            , a = function(t) {
            function e(e) {
                return t.apply(this, arguments) || this
            }
            return (o(e, t), e.prototype.onInit = function() {
                var t = this.props;
                this.encodeStyles = this.getContextComponent().encodeStyles,
                this.encodeStyles && (t.text = r.encodeTemplate(t.text))
            }, e.prototype.beforeRender = function(t) {
                var e = this.props.text.toString() || "";
                return (t.getCurrentElement().insertAdjacentHTML("beforeend", e), !1)
            }, e)
        }(i(145));
        e.Html = a
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(387);
        function o(t, e) {
            var i = function(t, e) {
                return e in t.style && n.getStyle(t).getPropertyValue(e) || "0"
            }(t, "padding-" + e);
            return parseFloat(i)
        }
        e.getElementInnerSize = function(t) {
            return {
                width: Math.max(0, t.clientWidth - o(t, "left") - o(t, "right")),
                height: Math.max(0, t.clientHeight - o(t, "top") - o(t, "bottom"))
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = 2;
        function o(t) {
            return r(t / 100)
        }
        function r(t) {
            return Number(t.toFixed(n))
        }
        e.prepare = function(t) {
            for (var e, i = [], n = 0, a = 0; a < t.length; a += 1) {
                n = e = r(o(t[a].percent) + n),
                    i.push({
                        id: t[a].id,
                        extra: t[a].extra,
                        threshold: e
                    });
            }
            return i
        }
            ,
            e.toFraction = o,
            e.fixPrecision = r,
            e.findDefault = function(t) {
                for (var e = null, i = 0; i < t.length; i += 1) {
                    (!e || e.percent < t[i].percent) && (e = t[i]);
                }
                return e
            }
            ,
            e.isPercent = function(t) {
                return Math.random() < o(t)
            }
    }, function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
    e.__esModule = !0,
        e.isObject = function(t) {
            var e = void 0 === t ? "undefined" : n(t);
            return Boolean(t) && ("object" === e || "function" === e)
        }
}, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
        function o(t) {
            for (var e = "", i = 0; i < t.length; ) {
                var o = t.charCodeAt(i += 1)
                    , r = t.charCodeAt(i += 1)
                    , a = t.charCodeAt(i += 1)
                    , s = o >> 2
                    , l = (3 & o) << 4 | r >> 4
                    , p = (15 & r) << 2 | a >> 6
                    , c = 63 & a;
                isNaN(r) ? p = c = 64 : isNaN(a) && (c = 64),
                    e = e + n.charAt(s) + n.charAt(l) + n.charAt(p) + n.charAt(c)
            }
            return e
        }
        function r(t) {
            var e = []
                , i = 0;
            for (t = t.replace(/[^A-Za-z0-9\-_=]/g, ""); i < t.length; ) {
                var o = n.indexOf(t.charAt(i += 1))
                    , r = n.indexOf(t.charAt(i += 1))
                    , a = n.indexOf(t.charAt(i += 1))
                    , s = n.indexOf(t.charAt(i += 1))
                    , l = o << 2 | r >> 4
                    , p = (15 & r) << 4 | a >> 2
                    , c = (3 & a) << 6 | s;
                e.push(String.fromCharCode(l)),
                64 !== a && e.push(String.fromCharCode(p)),
                64 !== s && e.push(String.fromCharCode(c))
            }
            return e.join("")
        }
        e.encode = function(t, e) {
            return (void 0 === e && (e = 1e6), o(function(t, e) {
                t = t.replace(/\r\n/g, "\n");
                for (var i = "", n = 0; n < t.length; n += 1) {
                    var o = t.charCodeAt(n)
                        , r = void 0;
                    if ((o < 128 ? r = String.fromCharCode(o) : o > 127 && o < 2048 ? (r = String.fromCharCode(o >> 6 | 192),
                        r += String.fromCharCode(63 & o | 128)) : (r = String.fromCharCode(o >> 12 | 224),
                        r += String.fromCharCode(o >> 6 & 63 | 128),
                        r += String.fromCharCode(63 & o | 128)), i.length + r.length > e)) {
                        break;
                    }
                    i += r
                }
                return i
            }(t, 3 * e / 4 | 0)))
        }
            ,
            e.encodeUInt8String = o,
            e.decode = function(t) {
                return function(t) {
                    for (var e = [], i = 0; i < t.length; ) {
                        var n = t.charCodeAt(i);
                        if (n < 128) {
                            e.push(String.fromCharCode(n)),
                                i += 1;
                        } else if (n > 191 && n < 224) {
                            var o = t.charCodeAt(i + 1);
                            e.push(String.fromCharCode((31 & n) << 6 | 63 & o)),
                                i += 2
                        } else {
                            var o = t.charCodeAt(i + 1)
                                , r = t.charCodeAt(i + 2);
                            e.push(String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | 63 & r)),
                                i += 3
                        }
                    }
                    return e.join("")
                }(r(t))
            }
            ,
            e.decodeUInt8String = r,
            e.cropEquals = function(t) {
                return t.replace(/=+$/, "")
            }
            ,
            e.addEquals = function(t) {
                for (; t.length % 4 != 0; ) {
                    t += "=";
                }
                return t
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.AD_TITLE_LENGTH = 33,
            e.AD_BODY_LENGTH = 75,
            e.PARAMS_DELIMITER = "/;/"
    }, function(t, e, i) {
        "use strict";
        var n = i(345)
            , o = i(192).setStyle
            , r = i(346).innerHtml;
        t.exports = {
            hasClass: n.hasClass,
            addClass: n.addClass,
            clearClasses: n.clearClasses,
            removeClass: n.removeClass,
            toggleClass: n.toggleClass,
            setStyle: o,
            innerHTML: r
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(182);
        e.sendPixel = function(t, e, i) {
            n.loadImage({
                src: t,
                onLoad: e,
                ctx: i
            })
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(49)
            , o = i(10).augment(n, {
            constructor: function() {
                n.apply(this, arguments)
            }
        });
        t.exports = o
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(194)
            , o = i(32)
            , r = i(98).PREVENTS_BROWSING
            , a = r[0] + "-" + r[1];
        e.slideUp = function(t, e) {
            o.setImportantCssProperty(t, "overflow", "hidden");
            var i = function(e) {
                var i = Math.round(100 * e) / 100;
                o.setImportantCssProperty(t, "height", i + "px")
            };
            setTimeout(function() {
                n({
                    duration: 500,
                    start: t.offsetHeight,
                    end: 0,
                    onFrame: i,
                    onEnd: e
                })
            }, 1e3)
        }
            ,
            e.shouldSlideUp = function(t, e) {
                var i = window.top !== window.self
                    , n = t.pageId;
                if (i && !/^(?:106712)|(?:106713)$/.test(n)) {
                    return !1;
                }
                return e === a
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(389)
            , o = i(241)
            , r = i(47)
            , a = 4294967295
            , s = "yaSafeFrameAsyncCallbacks"
            , l = "host.js"
            , p = "host_adb.js"
            , c = window;
        c.yaSafeFrameCallbacksStorage = c.yaSafeFrameCallbacksStorage || {};
        var d = n.isEncoded("https://yastatic.net/safeframe/1-1-0/");
        function u() {
            var t = d ? p : l
                , e = "" + ["https://yastatic", ".net/safeframe-bundles/0.40/"].join("") + t;
            return d ? n.encode(e) : e
        }
        function m(t) {
            t.isLoadingSafeframeStarted || (t.isLoadingSafeframeStarted = !0,
                o.loadCustomScript(t, u(), r.noop, !d))
        }
        function f(t) {
            var e = t[s] || [];
            return (t[s] = e, e)
        }
        function h(t, e) {
            delete t.yaSafeFrameCallbacksStorage[e]
        }
        function g(t) {
            return Boolean(t.$sf && t.$sf.ext)
        }
        e.getSafeframeLoaderURL = u,
            e.initSafeframe = function(t, e, i, n, o, s) {
                void 0 === n && (n = r.noop),
                void 0 === o && (o = r.noop),
                void 0 === s && (s = r.noop),
                    m(t);
                var l = f(t)
                    , p = i.id instanceof Element ? "" : i.id
                    , c = function(t, e) {
                    return e || t.id || "sf-" + (Math.floor(Math.random() * a) + 1)
                }(e, p);
                l.push(function() {
                    t.yaSafeFrameCallbacksStorage = t.yaSafeFrameCallbacksStorage || {},
                        t.yaSafeFrameCallbacksStorage[c] = {
                            onError: n,
                            onRender: o,
                            onAction: s
                        },
                        function(t) {
                            t.yaSafeFrameCallbacksStorage = t.yaSafeFrameCallbacksStorage || {};
                            var e = t.yaSafeFrameCallbacksStorage;
                            new t.$sf.host.Config({
                                auto: !1,
                                onFailure: function(t, i, n) {
                                    e[t] && e[t].onError(t, n)
                                },
                                onEndPosRender: function(t, i, n) {
                                    e[t] && e[t].onRender(t, n)
                                },
                                onPosMsg: function(i, n, o) {
                                    e[i] && e[i].onAction(n, o),
                                    "nuke" === n && h(t, i)
                                }
                            })
                        }(t),
                        function(t, e, i, n) {
                            e.id = n;
                            var o = i.html
                                , r = i.width
                                , a = i.height
                                , s = i.basePath
                                , l = {
                                id: n,
                                html: o,
                                conf: {
                                    w: r,
                                    h: a,
                                    dest: d ? e : n,
                                    protected: i["protected"],
                                    basePath: s
                                }
                            };
                            i.supports && (l.conf.supports = i.supports),
                                t.$sf.host.render(l)
                        }(t, e, i, c)
                })
            }
            ,
            e.nukeSafeframe = function(t, e) {
                m(t),
                    f(t).push(function() {
                        h(t, e),
                            t.$sf.host.nuke(e)
                    })
            }
            ,
            e.isInSafeframe = g,
            e.updateSafeframeSize = function(t, e) {
                if (g(t)) {
                    var i = t.$sf.ext.geom()
                        , n = i.self.w + i.exp.r
                        , o = i.self.h + i.exp.b
                        , r = n > e.width ? e.width - i.self.w : i.exp.r
                        , a = o > e.height ? e.height - i.self.h : i.exp.b;
                    t.$sf.ext.expand({
                        t: 0,
                        l: 0,
                        r: r,
                        b: a
                    })
                }
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(11)
            , o = i(67)
            , r = i(6)
            , a = i(401)
            , s = i(78).BorderTypes
            , l = i(15)
            , p = {};
        (0,
            n.forEach)(a, function(t) {
            t.index = t.id,
                t.className = t.className || t.name;
            var e = "240x400" === t.className;
            o.MEDIA_240x400_IS_IGNORE_SETTINGS && e && (t.border = [s.BLOCK]),
                t.limit = t.limit || r.MAX_ADS_LIMIT,
                p[t.name] = t
        }),
            t.exports = {
                getFormatByName: function(t) {
                    var e = p[t];
                    return e ? l({}, e) : null
                }
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(84)
            , o = i(9)
            , r = window.location.host
            , a = !(o.filter([/youla\.io/i, /avito\.ru/i, /ok\.ru/i, /vk\.com/i, /rambler\.ru/i, /mail\.ru/i, /lenta\.ru/i, /gazeta\.ru/i, /devmail\.ru/i, /eda\.ru/i, /nightparty\.ru/i, /afisha\.ru/i, /mir\.afisha\.ru/i, /daily\.afisha\.ru/i, /m\.gazeta\.ru/i, /gazeta\.ru/i, /lenta\.ru/i, /motor\.ru/i, /m\.lenta\.ru/i, /moslenta\.ru/i, /secretmag\.ru/i, /championat\.com/i, /letidor\.ru/i, /quto\.ru/i, /wmj\.ru/i, /indicator\.ru/i, /ferra\.ru/i, /rns\.online/i, /m\.passion\.ru/i, /passion\.ru/i, /m\.moslenta\.ru/i, /autorambler\.ru/i, /livejournal\.com/i, /rg\.ru/i], function(t) {
            return t.test(r)
        }).length > 0) && !0;
        e.MEDIA_240x400_IS_CAN_TO_SHOW = a;
        e.MEDIA_240x400_IS_OLD_ALL_CLICKABLE = !1;
        var s = a;
        e.MEDIA_240x400_IS_NEW_240x400 = s;
        var l = !("240x400"in n.adaptive0418Blocks);
        e.MEDIA_240x400_IS_IGNORE_SETTINGS = l
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(37)
            , o = i(276)
            , r = i(279)
            , a = i(281)
            , s = i(282)
            , l = i(283);
        e.getSessionId = n.once(function() {
            return l.getSession(s.generateSessionId, r.getWindowStorage("common"), o.getCrossFrameStorage("common"), a.configureMetrika)
        })
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.generateHexString = function(t) {
                for (var e = "", i = 0; i < t; i += 1) {
                    e += (16 * Math.random() | 0).toString(16);
                }
                return e
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(59);
        Object.keys(n).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return n[t]
                }
            })
        })
    }, function(t, e, i) {
        "use strict";
        var n = i(72)
            , o = (i(46),
            i(184))
            , r = "yandex_metrika_callbacks"
            , a = 1
            , s = window.Ya && window.Ya.Metrika
            , l = !1;
        function p(t) {
            var e = "yaCounter" + t.id;
            return (window[e] || (window[e] = function(t) {
                try {
                    return new window.Ya.Metrika({
                        id: t.id,
                        type: t.isYAN ? a : void 0,
                        defer: !0,
                        nck: t.disableCookies
                    })
                } catch (t) {
                    throw new Error("metrika counter creation error: " + t.message)
                }
            }(t)), window[e])
        }
        function c() {
            s = !0
        }
        t.exports = {
            getCounter: function(t, e) {
                s ? e(p(t)) : (function() {
                    if (!(l || (0,
                        n.checkBundleType)(n.bundleTypes.SSP) || (0,
                        n.checkBundleType)(n.bundleTypes.mobileSdk))) {
                        var t = Ya ? Ya.relHostname : ""
                            , e = t ? "https://d93ih7uy3azjp.cloudfront.net/metrika/watch.js" : "https://mc.yandex.ru/metrika/watch.js";
                        o(e, !1, c),
                            l = !0
                    }
                }(),
                    i = function() {
                        e(p(t))
                    }
                    ,
                window[r] || (window[r] = []),
                    window[r].push(i));
                var i
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n, o = i(46), r = i(58), a = i(45);
        !function(t) {
            t.SSP = "ssp",
                t.mobileSdk = "msdk"
        }(n = e.bundleTypes || (e.bundleTypes = {}));
        var s, l = "bundleType";
        e.saveBundleType = function(t) {
            var e;
            s || o.getGlobalVariable(l) || (r.isObject(t) ? (e = t) && e.common && e.common.sspId && Boolean(Number(e.common.sspId)) ? s = n.SSP : e && e.common && 1 === Number(e.common.isMobileSdk) && (s = n.mobileSdk) : a.isString(t) && function(t) {
                switch (t) {
                    case "ssp":
                        s = n.SSP;
                        break;
                    case "mobsdk":
                        s = n.mobileSdk
                }
            }(t),
            s && o.setGlobalVariable(l, s))
        }
            ,
            e.checkBundleType = function(t) {
                return s === t
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(45).isString
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(2)
            , o = i(20)
            , r = o.isHostIgnored({
            exclude: [o.hosts.yandex, o.hosts.vk, o.hosts.ok, o.hosts.avito, o.hosts.gismeteo, o.hosts.rbc, o.hosts.rg]
        })
            , a = [93830, 93511, 49688, 92550, 104220, 113011, 129744, 137740, 141769, 143156, 144204, 84375, 87940, 97693, 101833, 126291]
            , s = !1;
        e.disableRtbInOldDirectExperiment = function() {
            s = !0
        }
            ,
            e.isRtbInOldDirectExperiment = function(t, e) {
                return !e && !s && !r
            }
            ,
            e.isRtbInDirectExperiment = function(t) {
                t.pageId;
                var e = t.product;
                return !t.hasSearchText && function(t) {
                    return "D" === t || "direct" === t
                }(e)
            }
            ,
            e.needRtbShadow = function(t) {
                return !function(t, e) {
                    var i;
                    return (i = "string" == typeof e ? parseInt(e, 10) : e, -1 !== n.inArray(t, i))
                }(a, t)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(76);
        e.getIsIOS = function(t) {
            void 0 === t && (t = window);
            var e = t.navigator.userAgent.toLowerCase();
            return /ipad|iphone|ipod/.test(e) && !t.MSStream && !n.isUCBrowser(t)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.isUCBrowser = function(t) {
                return (void 0 === t && (t = window), t.navigator.userAgent.indexOf("UCBrowser") > -1)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(43)
            , o = i(318)
            , r = i(183)
            , a = i(319);
        function s(t) {
            t && t.un()
        }
        e.on = function(t, e, i, l, p) {
            if (!t || !i) {
                return null;
            }
            var c, d = n.protect("handler:" + e, i, l), u = o.fixEvent(d), m = {
                un: function() {
                    r.removeEventListenerFunction(t, e, u)
                }
            };
            return (p && p.once && !a.isSupportsOnceOption && ((c = u, u = function(t) {
                c.call(this, t),
                    s(m)
            })
            ), a.isSupportsPassiveOption ? r.addEventListenerFunction(t, e, u, p) : r.addEventListenerFunction(t, e, u, p && p.capture), m)
        }
            ,
            e.un = s
    }, function(t, e, i) {
        "use strict";
        t.exports = {
            BlockTypes: {
                VERTICAL: "vertical",
                HORIZONTAL: "horizontal",
                GRID: "grid",
                VK: "vk",
                ROW: "row",
                COMPACT: "compact",
                INTERNAL: "internal"
            },
            BorderTypes: {
                NONE: "none",
                BLOCK: "block",
                AD: "ad",
                COLLAPSE: "collapse"
            }
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(43).protect
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.isTurboPage = function(t) {
                return (void 0 === t && (t = window), Boolean(t.YA_TURBO_PAGES))
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.reduce = function(t, e, i) {
                var n = 0;
                for (arguments.length < 3 && (n = 1,
                         i = t[0]);
                     n < t.length;
                     n += 1)
                {
                    i = e(i, t[n], n, t);
                }
                return i
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.isInIframe = function(t) {
                return t.top !== t.self
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getRandomInt = function(t, e) {
                var i = t + Math.random() * (e + 1 - t);
                return i = Math.floor(i)
            }
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e += 1) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
    e.__esModule = !0;
    var o = i(134)
        , r = i(20)
        , a = i(80)
        , s = i(25)
        , l = i(19)
        , p = i(4)
        , c = i(85)
        , d = c.ADAPTIVE_0418
        , u = c.SCROLL_SLIDER
        , m = {
        measurer: "horizontal",
        advMinSquare: 55e3,
        titleColor: "#000",
        bgColor: "#f5f5f5",
        borderColor: "#ebebeb",
        hoverColor: "#216dd9",
        urlColor: "#216dd9",
        textColor: "#000"
    };
    e.adaptive0418Blocks = o["default"] ? {} : {
        "160x600": [d, {
            limit: 2,
            width: 160,
            height: 600
        }],
        "200x300": [d, {
            limit: 1,
            width: 200,
            height: 300
        }],
        "240x400": [d, {
            limit: 2,
            width: 240,
            height: 400
        }],
        "250x250": [d, {
            limit: 1,
            width: 250,
            height: 250
        }],
        "300x250": [d, {
            limit: 1,
            width: 300,
            height: 250
        }],
        "300x300": [d, {
            limit: 2,
            width: 300,
            height: 300
        }],
        "300x500": [d, {
            limit: 2,
            width: 300,
            height: 500
        }],
        "300x600": [d, {
            limit: 2,
            width: 300,
            height: 600
        }],
        "320x100": [d, {
            limit: 1,
            width: 320,
            height: 100
        }],
        "336x280": [d, {
            limit: 1,
            width: 336,
            height: 280
        }],
        "400x240": [d, {
            limit: 2,
            width: 400,
            height: 240
        }],
        "480x320": [d, {
            limit: 2,
            width: 480,
            height: 320
        }],
        "728x90": [d, {
            limit: 1,
            width: 728,
            height: 90
        }],
        "970x90": [d, {
            limit: 2,
            width: 970,
            height: 90
        }],
        "970x250": [d, {
            limit: 4,
            width: 970,
            height: 250
        }],
        "1000x120": [d, {
            limit: 3,
            width: 1e3,
            height: 120
        }],
        horizontal: [d, m],
        horizontal0318: [d, m]
    },
    o["default"] || 10 === p.ieVersion || n(e.adaptive0418Blocks, {
        adaptive: [d, {
            measurer: "adaptive"
        }],
        grid: [d, {
            measurer: "grid",
            layout: "grid"
        }]
    }),
    r.hostsMap.avito.test(location.hostname) && n(e.adaptive0418Blocks, {
        "1000x120": [d, {
            limit: 3,
            width: 1e3,
            height: 120
        }]
    }),
    a.isTurboPage(window) && s.isLongExperiment(l.experimentIds.scrollSlider.ENABLED) && n(e.adaptive0418Blocks, {
        extensibleMobile: [u, {
            limit: 1
        }]
    });
}, function(t, e, i) {
        "use strict";
        t.exports = {
            BLOCK_320x67: {
                name: "BLOCK_320x67",
                path: "components/block-320x67-loader",
                isOld: !1
            },
            BLOCK_RESPONSIVE_MOBILE: {
                name: "BLOCK_RESPONSIVE_MOBILE",
                path: "components/block-responsive-mobile-loader",
                isOld: !1
            },
            SINGLE_VERTICAL: {
                name: "SINGLE_VERTICAL",
                path: "components/block-single-vertical",
                isOld: !1
            },
            SINGLE_VERTICAL_BIG: {
                name: "SINGLE_VERTICAL_BIG",
                path: "components/block-single-vertical-big",
                isOld: !1
            },
            SINGLE_HORIZONTAL: {
                name: "SINGLE_HORIZONTAL",
                path: "components/block-single-horizontal",
                isOld: !1
            },
            SINGLE_HORIZONTAL_GISMETEO: {
                name: "SINGLE_HORIZONTAL_GISMETEO",
                path: "components/block-single-horizontal-gismeteo",
                isOld: !1
            },
            SINGLE_HORIZONTAL_YANEWS: {
                name: "SINGLE_HORIZONTAL_YANEWS",
                path: "components/block-single-horizontal-yanews",
                isOld: !1
            },
            ADAPTIVE: {
                name: "ADAPTIVE",
                path: "components/block-adaptive-loader",
                isOld: !1
            },
            ELASTIC: {
                name: "ELASTIC",
                path: "components/block-elastic",
                isOld: !1
            },
            ELASTIC_VERTICAL: {
                name: "ELASTIC_VERTICAL",
                path: "components/block-elastic-vertical",
                isOld: !1
            },
            HORIZONTAL0318: {
                name: "HORIZONTAL0318",
                path: "components/elastic-0318/block-horizontal",
                isOld: !1
            },
            VERTICAL0318: {
                name: "VERTICAL0318",
                path: "components/elastic-0318/block-vertical",
                isOld: !1
            },
            ELASTIC_FIXED: {
                name: "ELASTIC_FIXED",
                path: "components/blocks/block-elastic-fixed",
                isOld: !1
            },
            ELASTIC_FIXED_YA: {
                name: "ELASTIC_FIXED_YA",
                path: "components/blocks/block-elastic-fixed-ya",
                isOld: !1
            },
            ELASTIC_FIXED_POGODA: {
                name: "ELASTIC_FIXED_POGODA",
                path: "components/blocks/block-elastic-pogoda",
                isOld: !1
            },
            POGODA_GRID: {
                name: "POGODA_GRID",
                path: "components/blocks/block-elastic-pogoda-grid",
                isOld: !1
            },
            ELASTIC_FIXED_SELECT: {
                name: "ELASTIC_FIXED_SELECT",
                path: "components/BlockElasticFixedSelect",
                isOld: !1
            },
            ELASTIC_AVITO: {
                name: "ELASTIC_AVITO",
                path: "components/block-elastic-avito"
            },
            POSTER_VERTICAL: {
                name: "POSTER_VERTICAL",
                path: "components/block-poster-vertical",
                isOld: !1
            },
            POSTER_VERTICAL_YANEWS: {
                name: "POSTER_VERTICAL_YANEWS",
                path: "components/block-poster-vertical-yanews"
            },
            POSTER_HORIZONTAL: {
                name: "POSTER_HORIZONTAL",
                path: "components/block-poster-horizontal",
                isOld: !1
            },
            POSTER_NEW_HORIZONTAL: {
                name: "POSTER_NEW_HORIZONTAL",
                path: "components/poster/block-poster-new-horizontal",
                isOld: !1
            },
            POSTER_NEW_VERTICAL: {
                name: "POSTER_NEW_VERTICAL",
                path: "components/poster/block-poster-new-vertical",
                isOld: !1
            },
            EXTENSIBLE_MOBILE: {
                name: "EXTENSIBLE_MOBILE",
                path: "components/block-extensible-mobile",
                isOld: !1
            },
            EXTENSIBLE_MOBILE_MAILRU: {
                name: "EXTENSIBLE_MOBILE_MAILRU",
                path: "components/block-extensible-mobile-mailru",
                isOld: !1
            },
            MAILRU_WEB: {
                name: "MAILRU_WEB",
                path: "components/block-mailru-web",
                isOld: !1
            },
            MORDA: {
                name: "MORDA",
                path: "components/block-morda",
                isOld: !1
            },
            MULTI_INTERSTITIAL: {
                name: "MULTI_INTERSTITIAL",
                path: "components/blocks/block-multi-interstitial",
                isOld: !1
            },
            ELASTIC_MOBILE_YAMAIL_TOP: {
                name: "ELASTIC_MOBILE_YAMAIL_TOP",
                path: "components/blocks/block-ya-mail-mobile",
                isOld: !1
            },
            ELASTIC_MOBILE_YAMAIL_MIDDLE: {
                name: "ELASTIC_MOBILE_YAMAIL_MIDDLE",
                path: "components/blocks/block-ya-mail-mobile-middle",
                isOld: !1
            },
            RMP_VIDEO: {
                name: "RMP_VIDEO",
                path: "components/block-rmp-video",
                isOld: !1
            },
            MAILRU_PLUGIN: {
                name: "MAILRU_PLUGIN",
                path: "components/block-mailru-plugin",
                isOld: !1
            },
            ANIMATED_SCROLLABLE_MOBILE: {
                name: "ANIMATED_SCROLLABLE_MOBILE",
                path: "components/block-animated-scrollable-mobile-loader",
                isOld: !1
            },
            SCROLL_SLIDER: {
                name: "SCROLL_SLIDER",
                path: "components/block-scroll-slider-loader",
                isOld: !1
            },
            PICTURE_SEARCH: {
                name: "PICTURE_SEARCH",
                path: "components/block-picture-search",
                isOld: !1
            },
            PICTURE_SEARCH_3: {
                name: "PICTURE_SEARCH_3",
                path: "components/block-picture-search-3",
                isOld: !1
            },
            PICTURE_SEARCH_FIXED: {
                name: "PICTURE_SEARCH_FIXED",
                path: "components/blocks/block-picture-search-fixed",
                isOld: !1
            },
            ZEN: {
                name: "ZEN",
                path: "components/block-zen",
                isOld: !1
            },
            RECOMMENDATION: {
                name: "RECOMMENDATION",
                path: "components/publishers/block-recommendation",
                isOld: !1
            },
            PLISTA: {
                name: "PLISTA",
                path: "components/publishers/block-plista",
                isOld: !1
            },
            ROW: {
                name: "ROW",
                path: "components/blocks/block-row",
                isOld: !1
            },
            COMPACT: {
                name: "COMPACT",
                path: "components/blocks/block-compact",
                isOld: !1
            },
            MOTION: {
                name: "MOTION",
                path: "components/motion/block-motion",
                isOld: !1
            },
            ADAPTIVE_0418: {
                name: "ADAPTIVE_0418",
                path: "components/adaptive/BlockAdaptive",
                isOld: !1
            },
            CUSTOM_BLOCK: {
                name: "CUSTOM_BLOCK",
                path: "blocks/custom-block-loader",
                isOld: !0
            },
            BLOCK_240x400_MEDIA: {
                name: "BLOCK_240x400_MEDIA",
                path: "components/block-media-loader",
                isOld: !1
            },
            BLOCK_320x480_MEDIA: {
                name: "BLOCK_320x480_MEDIA",
                path: "components/block-media-loader",
                isOld: !1
            },
            BLOCK_300x500_MEDIA: {
                name: "BLOCK_300x500_MEDIA",
                path: "components/block-media-loader",
                isOld: !1
            },
            BLOCK_300x600_MEDIA: {
                name: "BLOCK_300x600_MEDIA",
                path: "components/block-media-loader",
                isOld: !1
            },
            OLD_480x320: {
                name: "480x320",
                path: "blocks/480x320",
                isOld: !0
            },
            OLD_400x240: {
                name: "400x240",
                path: "blocks/400x240",
                isOld: !0
            },
            OLD_300x250: {
                name: "300x250",
                path: "blocks/300x250",
                isOld: !0
            },
            OLD_336x280: {
                name: "336x280",
                path: "blocks/336x280",
                isOld: !0
            },
            OLD_VK: {
                name: "vk",
                path: "blocks/vk",
                isOld: !0
            },
            OLD_NEWVK: {
                name: "newVk",
                path: "blocks/new-vk",
                isOld: !0
            },
            OLD_970x250: {
                name: "970x250",
                path: "blocks/970x250",
                isOld: !0
            },
            OLD_970x90: {
                name: "970x90",
                path: "blocks/970x90",
                isOld: !0
            },
            OLD_320x100: {
                name: "320x100",
                path: "blocks/320x100",
                isOld: !0
            },
            OLD_320x50: {
                name: "320x50",
                path: "blocks/320x50",
                isOld: !0
            },
            OLD_MAILRU_VERTICAL: {
                name: "mailruVertical",
                path: "blocks/mailruVertical",
                isOld: !0
            },
            OLD_MAILRU_HORIZONTAL: {
                name: "mailruHorizontal",
                path: "blocks/mailruHorizontal",
                isOld: !0
            },
            OLD_ADAPTIVE: {
                name: "adaptive",
                path: "blocks/multi-adaptive",
                isOld: !0
            },
            OLD_HORIZONTAL: {
                name: "horizontal",
                path: "blocks/horizontal",
                isOld: !0
            },
            OLD_VERTICAL: {
                name: "vertical",
                path: "blocks/vertical",
                isOld: !0
            },
            OLD_GRID: {
                name: "grid",
                path: "blocks/grid",
                isOld: !0
            },
            OLD_160x600: {
                name: "160x600",
                path: "blocks/fixed160x600",
                isOld: !0
            },
            OLD_200x300: {
                name: "200x300",
                path: "blocks/fixed200x300",
                isOld: !0
            },
            OLD_250x250: {
                name: "250x250",
                path: "blocks/fixed250x250",
                isOld: !0
            },
            OLD_1000x120: {
                name: "1000x120",
                path: "blocks/fixed1000x120",
                isOld: !0
            },
            OLD_OLD_VERTICAL: {
                name: "oldVertical",
                path: "blocks/vertical",
                isOld: !0
            },
            OLD_OLD_HORIZONTAL: {
                name: "oldHorizontal",
                path: "blocks/horizontal",
                isOld: !0
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(411)
            , o = i(29)
            , r = i(60);
        e.appendDescription = function(t, e) {
            if (!e) {
                return t;
            }
            if (t.length + e.length > r.AD_BODY_LENGTH && t.length + "...".length < r.AD_BODY_LENGTH) {
                var i = r.AD_BODY_LENGTH + o.PRICE_TAG_LENGTH - t.length - "...".length - 4;
                return e.substring(0, i) + "... " + t
            }
            return t
        }
            ,
            e.addToBody = function(t, e, i) {
                for (var a = [], s = t, l = 0; l < e.length; l += 1) {
                    var p = n["default"](e[l]);
                    p && (/\.$/.test(p) || (p += "."),
                        s.length + p.length + 1 - o.PRICE_TAG_LENGTH < r.AD_BODY_LENGTH ? s = i ? p + " " + s : s + " " + p : e.length - l >= 3 && (a = e.slice(l)))
                }
                return {
                    body: s,
                    callouts: a
                }
            }
            ,
            e.addStringToBody = function(t, e, i) {
                void 0 === t && (t = ""),
                void 0 === e && (e = "");
                var n = t;
                return (t.length + e.length + 1 - o.PRICE_TAG_LENGTH < r.AD_BODY_LENGTH && (n = i ? e + " " + n : n + " " + e), n)
            }
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o, r = i(21), a = i(11);
    !function(t) {
        t[t.Inited = 0] = "Inited",
            t[t.Mounting = 1] = "Mounting",
            t[t.Displayed = 2] = "Displayed",
            t[t.Ready = 3] = "Ready"
    }(o = e.BlockStatus || (e.BlockStatus = {}));
    var s = function() {
        function t(t) {
            this.callbacks = [],
                this.state = n({
                    status: o.Inited
                }, t)
        }
        return (t.prototype.setState = function(t) {
            var e = this
                , i = this.state;
            this.state = n({}, i, t),
                a.forEach(this.callbacks.concat(), function(t) {
                    t(e.state, i)
                })
        }, t.prototype.getState = function() {
            return this.state
        }, t.prototype.onChangeState = function(t) {
            t(this.state, null),
                this.callbacks.push(t)
        }, t.prototype.unChangeState = function(t) {
            var e = r.indexOf(this.callbacks, t);
            e > -1 && this.callbacks.splice(e, 1)
        }, t)
    }();
    e.BlockState = s;
}, function(t, e, i) {
        "use strict";
        var n = i(139)
            , o = i(87);
        t.exports = {
            onInit: function() {
                var t = this;
                this.onChangeBlockState = function(e, i) {
                    (null === i || i.status !== e.status) && e.status >= o.BlockStatus.Displayed && (t.onDisplayed(),
                        t.context.unChangeState(t.onChangeBlockState))
                }
                    ,
                    this.__base()
            },
            onMount: function() {
                this.context = n.BlockContext.getClosestProvider(this),
                    this.context.onChangeState(this.onChangeBlockState),
                    this.__base()
            },
            onDisplayed: function() {}
        }
    }, function(t, e, i) {
        t.exports = function(t, e) {
            i.e(0).then(function() {
                t(i(648))
            }
                .bind(null, i)).catch(function() {
                e && e.apply(this, arguments)
            })
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(0)
            , o = i(1)
            , r = i(259)
            , a = i(88)
            , s = i(3)
            , l = i(243).doubleTitleSendStat
            , p = i(449)
            , c = n.createComponent([o, r, a], {
            name: "yap-adv",
            HOVER_CONFIRM_DELAY: 300,
            onInit: function() {
                this.__base();
                var t = this.props
                    , e = this.getDataSource()
                    , i = (e.getSettings() || {}).hideAdtuneInSsp && e.isSSP() || e.isApp();
                e.captureAd(t.adv.adId),
                    this.initAdtune(i ? {} : {
                        abuseUrl: t.adv.abuseUrl,
                        language: e.getLanguage()
                    })
            },
            onDestroy: function() {
                this.getDataSource().releaseAd(this.props.adv.adId)
            },
            getAdvBlock: function() {
                return this.getContextComponent()
            },
            getDataSource: function() {
                return this.getAdvBlock().getDataSource()
            },
            afterRender: function() {
                this.pushCss(),
                    this.initHoverChecker(),
                    this.__base()
            },
            getContentElement: function() {
                return this.getResourceById("content").getElement()
            },
            onClickLink: function() {
                this.getDataSource().trackClick(this.props.adv)
            },
            pushCss: function() {
                this.__base(),
                    this.pushStyles(p)
            },
            initHoverChecker: function() {
                var t = void 0;
                this.rootComponent.bind("mouseover", function() {
                    t || (t = s.setProtectedTimeout(function() {
                        this._confirmedHover || (this._confirmedHover = !0,
                            this.confirmHover())
                    }, this.HOVER_CONFIRM_DELAY, this))
                }, this),
                    this.rootComponent.bind("mouseleave", function() {
                        clearTimeout(t),
                            t = null
                    }, this)
            },
            confirmHover: function() {
                var t = this.getAdvBlock()
                    , e = this.props.adv;
                t.confirmVisibilityByHover(e)
            },
            getPicture: function() {
                var t = this.props.adv.image;
                if (!t) {
                    return null;
                }
                var e = this.getImageSize();
                return t.getFitting(e.width, e.height, e.wLoss)
            },
            getImageSize: function() {
                return {
                    width: 120,
                    height: 90
                }
            },
            onReceivedFeedback: function() {
                this.__base.apply(this, arguments),
                    this.rootComponent.addClass(this.b_("_abused_true"))
            },
            _sendTwoTitleStatistic: function(t) {
                if (this.props.adv.secondTitle) {
                    if (t) {
                        l(t);
                    } else {
                        var e = !this.rootComponent.hasClass(this.b_("_hidden_title_second"));
                        l(e)
                    }
                }
            }
        }, {
            Age: i(228),
            AppIcon: i(152),
            Body: i(244),
            Button: i(142),
            Callouts: i(260),
            Contacts: i(456),
            Domain: i(143),
            Address: i(165),
            Region: i(166),
            Favicon: i(116),
            MobileApps: i(261),
            Picture: i(220),
            Raiting: i(262),
            Sitelinks: i(245),
            Title: i(236),
            Warning: i(229)
        });
        t.exports = c
    }, function(t, e, i) {
        "use strict";
        i(444);
        var n = i(0)
            , o = i(1)
            , r = i(12)
            , a = i(445)
            , s = n.createComponent(o, {
            name: "yap-logo",
            initProps: function(t) {
                var e = t.title;
                return (this.url = e.url, this.text = e.title, t)
            },
            afterRender: function() {
                this.pushStyles(a)
            },
            _render: function(t, e, i) {
                var o = e.containerStyle
                    , a = {
                    color: e.color
                }
                    , s = t("__text");
                return n.create("yatag", {
                    class: t(e["class"], t(), this.mod),
                    style: o
                }, n.create(r, {
                    href: this.url,
                    style: a,
                    class: s
                }, n.create(i.HTML, {
                    text: this.text
                })))
            }
        });
        t.exports = s
    }, function(t, e, i) {
        "use strict";
        var n, o = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var r = i(0)
            , a = i(1)
            , s = i(40)
            , l = i(55)
            , p = i(452)
            , c = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (o(e, t), e.prototype.onInit = function() {
                this.name = "publishers-text",
                    t.prototype.onInit.call(this)
            }, e.prototype.render = function() {
                var t = this.b_
                    , e = this.props
                    , i = [t()]
                    , n = e.text;
                e.hyphenates && i.push(t("_hyphens")),
                e.highlight || (n = n.replace(/<\/?b>/g, ""));
                var o = e.prettify
                    , a = void 0 === o || o
                    , p = e.prettifyOptions;
                return (a && (n = s.prettify(n, p)), r.create("yatag", {
                    class: i.join(" ")
                }, r.create(l.Html, {
                    text: n
                })))
            }, e.prototype.afterRender = function() {
                this.pushStyles(p)
            }, e)
        }(a);
        e.Text = c
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(33)
            , o = i(18)
            , r = i(73)
            , a = i(199)
            , s = ":";
        function l(t) {
            return (void 0 === t && (t = {}), function() {
                for (var e = [], i = 0; i < arguments.length; i += 1) {
                    e[i] = arguments[i];
                }
                var o = [];
                return (n(e, function(e) {
                    r(e) && "" !== e && n(e.split(" "), function(e) {
                        if (e) {
                            var i = t[e];
                            (i || 0 !== e.indexOf(s)) && o.push(i || e)
                        }
                    })
                }), o.join(" "))
            })
        }
        e.classNamesFactory = l,
            e.bemClassNamesFactory = function(t, e) {
                var i = a(t);
                if (o(e)) {
                    return i;
                }
                var n = l(e);
                return function() {
                    var t = i.apply(i, arguments);
                    return n(t)
                }
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(158);
        t.exports = {
            isNative: !1,
            requestAnimationFrame: n.requestAnimationFrame,
            cancelAnimationFrame: n.cancelAnimationFrame
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(42)
            , o = ["medicine", "dietarysuppl"];
        e.hasImportantFlag = function(t) {
            for (var e = 0, i = (t || "").split(","); e < i.length; e += 1) {
                var r = i[e].trim();
                if (-1 !== n(o, r)) {
                    return !0;
                }
            }
            return !1
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n, o = 1;
        function r(t, e, i) {
            switch (i) {
                case n.X:
                    return t;
                case n.Y:
                    return e
            }
            return t || e
        }
        !function(t) {
            t[t.X = 0] = "X",
                t[t.Y = 1] = "Y"
        }(n = e.AXIS || (e.AXIS = {})),
            e.hasScrollInElement = function(t, e) {
                return r(t.scrollWidth - t.clientWidth > o, t.scrollHeight - t.clientHeight > o, e)
            }
            ,
            e.hasScrollInParentElement = function(t, e) {
                var i = t.parentNode;
                return !!i && r(t.clientWidth - i.clientWidth > o, t.clientHeight - i.clientHeight > o, e)
            }
    }, function(t, e, i) {
        "use strict";
        var n = 97;
        var o = "S1bIEfKfzt"
            , r = {};
        function a(t) {
            if (!t) {
                return "";
            }
            var e = function(t, e) {
                for (var i = 5381, o = t.length + e.length, r = "" + e + t; o; ) {
                    i = 33 * i ^ r.charCodeAt(o -= 1);
                }
                return (i >>>= 0, "" + String.fromCharCode(i % 25 + n) + i.toString(16))
            }(t, o);
            return e
        }
        function s(t) {
            return t.replace(/yatag/gi, "div")
        }
        function l(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? (t = t.replace(/(?:^|})(.*?){/g, function(t) {
                return t.replace(/[#.][a-z\d\-_]+[^:,.\s{]/gi, function(t) {
                    return "" + t[0] + p(t.slice(1))
                })
            }),
            e && (t = s(t)),
                t) : t
        }
        function p(t) {
            return r.hasOwnProperty(t) ? r[t] : r[t] = a(t)
        }
        t.exports = {
            encodeTemplate: function(t) {
                return s(t = t.replace(/(?:"|\s)+(?:id|class)=["'](.*?)["']/g, function(t, e) {
                    for (var i = e.split(" "), n = 0; n < i.length; n += 1) {
                        t = t.replace(new RegExp(i[n] + "(?![-\\w])","g"), p(i[n]));
                    }
                    return t
                }))
            },
            encodeStyle: l,
            replaceYatag: s,
            getAlias: p,
            generateAlias: a,
            encodeSelectors: function(t) {
                return t.replace(/[#.][a-z\d\-_]+[^:,.\s{]/gi, function(t) {
                    return /__([0-9]+?)__/g.test(t) ? t : "" + t[0] + p(t.slice(1))
                })
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = i(7), r = (n = o) && n.__esModule ? n : {
            default: n
        }, a = i(5), s = i(11);
        var l = i(371)
            , p = {
            SMALL: "small",
            MIDDLE: "middle",
            LARGE: "large"
        }
            , c = {
            types: p,
            titles: function(t) {
                return {
                    small: (0,
                        r["default"])("ADTUNE_TITLE_SMALL", t),
                    large: (0,
                        r["default"])("ADTUNE_TITLE_LARGE", t)
                }
            },
            options: function(t) {
                var e = {};
                return ((0,
                    s.forEach)(["small", "large"], function(i) {
                    e[i] = (0,
                        a.map)(l, function(e) {
                        return {
                            id: e["reason-id"] + "-" + e["action-id"],
                            text: e.description[i][t]
                        }
                    })
                }), e)
            },
            downgrade: [{
                className: "yap-abuse-complaint_max-size",
                type: p.LARGE
            }, {
                className: "yap-abuse-complaint_large-size",
                type: p.LARGE
            }, {
                className: "yap-abuse-complaint_middle-size",
                type: p.LARGE
            }, {
                className: "yap-abuse-complaint_small-size",
                type: p.SMALL
            }]
        };
        l.forEach(function(t) {
            c[t["tanker-key"]] = [t["reason-id"], t["action-id"]]
        }),
            c.PREVENTS_BROWSING_OPTION_ID = c.PREVENTS_BROWSING[0] + "-" + c.PREVENTS_BROWSING[1],
            t.exports = c
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getElementRectSize = function(t) {
                return {
                    width: t.clientWidth,
                    height: t.clientHeight
                }
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = function() {}
    }, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(35)
        , o = i(33)
        , r = i(18)
        , a = i(9)
        , s = i(361)
        , l = i(24)
        , p = i(4)
        , c = i(3)
        , d = i(71)
        , u = n.getCodeVersion()
        , m = p.support.touch
        , f = i(62);
    e.chooseOption = function(t, e, i, n, p) {
        var h = function(t) {
            var e = t.split("-");
            return {
                "reason-id": e[0],
                "action-id": e[1]
            }
        }(t);
        f.sendPixel(function(t, e) {
            var i = {};
            return (o(["reason-id", "action-id"], function(t) {
                i[t] = e[t]
            }), new l({
                host: t,
                params: i
            }).getUrl())
        }(e, h)),
            function(t, e, i) {
                var n = c.protect("metrika_adtune", function(n) {
                    var o = {
                        type: "inline",
                        blockType: i,
                        optionId: t,
                        version: u,
                        isTouch: m
                    };
                    o.optionText = a.filter(e(), function(e) {
                        return e.id === t
                    })[0].text,
                        n.reachGoal("send", o)
                });
                d.getCounter({
                    id: s.METRIKA_COUNTER
                }, n)
            }(t, n, i),
        r(p) && p()
    }
    var h = function(t) {
        t.hit(window.location.href, {
            params: {
                type: "inline",
                version: u,
                isTouch: m
            }
        })
    };
    e.onAdtuneClick = function() {
        var t = c.protect("metrika_adtune", h);
        d.getCounter({
            id: s.METRIKA_COUNTER
        }, t)
    }
}, function(t, e, i) {
        "use strict";
        var n = i(364);
        t.exports = n.Adtune
    }, function(t, e, i) {
        "use strict";
        var n, o = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var r = i(111)
            , a = i(112)
            , s = i(35)
            , l = i(80)
            , p = i(25)
            , c = i(205)
            , d = i(82)
            , u = i(19)
            , m = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (o(e, t), e.prototype.getTemplate = function() {
                return [[4, "marker"], [5, null], [1, "advancedFormat"], [6, "format"], [1, "isIframe"], [1, "isHover"], [1, "scrollSliderSlice"], [1, "scrollSliderCoin"], [2, "layout"], [7, "userGroup"], [1, "isApp"], [1, "hitFeatures"], [2, "phoneButtonExp"], [1, "targetExp"], [2, null], [1, "targetSlice"], [1, null], [1, "amp"], [10, "codeVer"], [1, "adblock"], [3, "adfoxexp"]]
            }, e.prototype.defaults = function() {
                return {
                    marker: c.getMarkerIsValidStat(a.PRODUCT_MARKERS.DIRECT),
                    codeVer: s.getRevisionNo(),
                    adblock: !1,
                    amp: !1,
                    isIframe: d.isInIframe(window),
                    scrollSliderSlice: l.isTurboPage(window) && (p.isLongExperiment(u.experimentIds.scrollSlider.ENABLED) || p.isLongExperiment(u.experimentIds.scrollSlider.DISABLED)),
                    scrollSliderCoin: p.isLongExperiment(u.experimentIds.scrollSlider.ENABLED)
                }
            }, e)
        }(r.AbstractTesttag);
        e.DirectTesttag = m
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        i(434),
            i(190),
            i(56);
        e.getContainer = function(t) {
            return t
        }
            ,
            e.getVisibilityContainer = function(t) {
                return t
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = function() {
            function t(t) {
                this.cache = t
            }
            return (t.prototype.get = function(t) {
                return this.cache[t]
            }, t.prototype.has = function(t) {
                return t in this.cache
            }, t.prototype.set = function(t, e) {
                this.cache[t] = e
            }, t)
        }();
        e.ObjectCache = n,
            e.memoize = function(t, e, i) {
                return (void 0 === e && ((e = function(t) {
                        return t
                    })
                ), void 0 === i && (i = new n({})), function() {
                    var n = e.apply(this, arguments);
                    if (i.has(n)) {
                        return i.get(n);
                    }
                    var o = t.apply(this, arguments);
                    return (i.set(n, o), o)
                })
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(48).isArray
    }, function(t, e, i) {
        "use strict";
        var n = i(186)
            , o = i(15);
        t.exports = function(t, e) {
            var i = e.constructor;
            e.hasOwnProperty("constructor") || ((i = function() {
                    i.__parent.apply(this, arguments)
                })
            );
            var r = n(t.prototype);
            return (r.constructor = i, i.__super = t.prototype, i.__parent = t, r.__self = i, i.prototype = o(r, e), i)
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(97)
            , o = i(2)
            , r = [];
        function a(t) {
            return o.inArray(r, t, function(t, e) {
                return e[0] === t
            }) > -1
        }
        function s(t) {
            return o.map(r, function(e) {
                var i = o.extend({}, t, e[1]);
                return (i && i.id && (i.id = (0,
                    n.getAlias)(i.id)), e[0].call(e[2], i))
            }).join("")
        }
        function l() {
            r = []
        }
        var p = {
            insertCSS: function(t, e, i) {
                var n = s(t);
                return (l(), o.dom.appendStyle(n, e, i))
            },
            contain: a,
            clear: l,
            push: function(t, e, i) {
                o.isFunction(t) && !a(t) && r.push([t, e, i])
            },
            getCSS: s
        };
        t.exports = p
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = new RegExp("experiment-id=(\\d+)");
        e["default"] = function(t) {
            void 0 === t && (t = window.location);
            for (var e = [t.search, t.hash], i = "", o = 0; o < e.length; o += 1) {
                var r = e[o].match(n);
                if (r && r[1]) {
                    i = r[1];
                    break
                }
            }
            return i
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n, o, r = i(19), a = i(25), s = i(16), l = i(26), p = i(109), c = i(81), d = r.experimentIds.ssSkipToken, u = d.ENABLED, m = d.WIDE_LOG, f = d.CLIENT, h = d.SERVER_MANUAL, g = d.SERVER_AUTO, _ = ((n = {})[m] = 5415,
            n[f] = 5456,
            n[h] = 5457,
            n[g] = 5458,
            n), y = c.reduce(l.getObjectKeys(_), function(t, e) {
            return (t[_[e]] = e, t)
        }, {});
        e.getName = function(t, e) {
            var i = c.reduce(l.getObjectKeys(d), function(e, i) {
                var n = d[i];
                return t(n) ? n : e
            }, void 0);
            return y[String(e)] || i
        }
            ,
            e.init = function(t) {
                return {
                    ssSkipTokenExpId: _[String(t)],
                    isSsSkipToken: s.some([u, m, h, g], function(e) {
                        return e === t
                    }),
                    isSsSkipTokenServerAuto: t === g
                }
            }
            ,
            e.ssSkipTokenExpId = (o = e.init(e.getName(a.isLongExperiment, p["default"]()))).ssSkipTokenExpId,
            e.isSsSkipToken = o.isSsSkipToken,
            e.isSsSkipTokenServerAuto = o.isSsSkipTokenServerAuto
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o = i(11)
        , r = i(5)
        , a = i(384)
        , s = i(27)
        , l = function() {
        function t(t) {
            void 0 === t && (t = {}),
                this.props = {},
                this.setProps(n({}, this.defaults(), t))
        }
        return (t.sliceBits = function(t, e, i) {
            return a.sliceBits(t, e, i)
        }, t.prototype.defaults = function() {
            return {}
        }, t.prototype.toString = function() {
            return this.serialize().toString()
        }, t.prototype.setProps = function(t) {
            var e = this;
            return (s(t) && o.forEach(this.getTemplate(), function(i) {
                var n = i[1];
                n && t.hasOwnProperty(n) && (e.props[n] = t[n])
            }, this), this)
        }, t.prototype.getProps = function() {
            return n({}, this.props)
        }, t.prototype.clone = function() {
            return new (0,
                this.constructor)(this.props)
        }, t.prototype.serialize = function() {
            var t, e, i = (t = this.getTemplate(),
                e = this.props,
                r.map(t, function(t) {
                    var i = t[0]
                        , n = t[1];
                    return [i, n && e[n] || null]
                }));
            return a.joinBits(i)
        }, t.prototype.slice = function(e, i) {
            return t.sliceBits(this.serialize(), e, i)
        }, t)
    }();
    e.AbstractTesttag = l;
}, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.PRODUCT_MARKERS = {
                DIRECT: 1,
                RTB: 2,
                PERFORMANCE: 3,
                DISTRIBUTION: 4,
                ADFOX: 5,
                LONG_SESSION: 15
            }
    }, function(t, e, i) {
        "use strict";
        var n, o = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var r = i(111)
            , a = i(112)
            , s = i(35)
            , l = i(205)
            , p = i(82)
            , c = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (o(e, t), e.prototype.getTemplate = function() {
                return [[4, "marker"], [6, null], [1, "isIframe"], [1, "isApp"], [19, null], [2, null], [4, null], [1, null], [1, "amp"], [10, "codeVer"], [1, "adblock"], [3, "adfoxexp"]]
            }, e.prototype.defaults = function() {
                return {
                    marker: l.getMarkerIsValidStat(a.PRODUCT_MARKERS.RTB),
                    codeVer: s.getRevisionNo(),
                    adblock: !1,
                    amp: !1,
                    isIframe: p.isInIframe(window)
                }
            }, e)
        }(r.AbstractTesttag);
        e.RtbTesttag = c
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(402)
            , o = i(136);
        var r = n.createStrategyFactory({
            isIntersectionObserverSupported: "undefined" != typeof IntersectionObserver && "thresholds"in IntersectionObserver.prototype
        });
        e.VisibilityChecker = o.createVCClass(r);
        var a = i(136);
        e.DEFAULT_INTERVAL = a.DEFAULT_INTERVAL
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(43)
            , o = i(37)
            , r = i(8)
            , a = o.once(function() {
            try {
                var t = window.mraid || window.top.mraid;
                return Boolean(t && t.getState && t.addEventListener) ? (t.addEventListener("error", function(t, e) {
                    r.logger.error(new Error(t), "MRAID_error_" + e)
                }),
                    t) : null
            } catch (t) {
                return null
            }
        });
        function s() {
            return a()
        }
        e.getMraid = s,
            e.isAvailable = function() {
                return null !== s()
            }
            ,
            e.isReady = function() {
                return "loading" !== s().getState()
            }
            ,
            e.open = function(t) {
                s().open(t)
            }
            ,
            e.on = function(t, e, i) {
                var o = s()
                    , r = n.protect("MRAID_Listener_" + t, e, i);
                return (o.addEventListener(t, r), function() {
                    o.removeEventListener(t, r)
                })
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(0)
            , o = i(1)
            , r = i(2)
            , a = i(458)
            , s = n.createComponent(o, {
            name: "yap-favicon",
            shouldRender: function() {
                return this.props.src
            },
            afterRender: function() {
                this.pushStyles(a),
                    this.checkBrokenFavicon()
            },
            checkBrokenFavicon: function() {
                var t = new Image();
                r.domEvent.on(t, "error", function() {
                    this.destroy()
                }, this),
                    r.domEvent.on(t, "load", function() {
                        16 !== t.width && 32 !== t.width && this.destroy()
                    }, this),
                    t.src = this.props.src
            },
            _render: function(t, e) {
                return n.create("img", {
                    class: t(e["class"], t(), this.mod),
                    src: e.src,
                    alt: ""
                })
            }
        });
        t.exports = s
    }, function(t, e, i) {
        "use strict";
        var n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            , r = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var a = i(168)
            , s = i(26)
            , l = i(274)
            , p = i(275);
        var c = function(t) {
            function e(i, n) {
                var r = this
                    , c = "object" === (void 0 === i ? "undefined" : o(i)) ? i : {
                    message: String(i || l.DEFAULT_ERROR.message)
                };
                n && s.getObjectKeys(n).forEach(function(t) {
                    c[t] = n[t]
                }),
                    r = t.call(this, String(c.message)) || this,
                    p(r, e.prototype),
                    r.message = c.message || r.message || l.DEFAULT_ERROR.message,
                    r.code = c.code || c.id || l.DEFAULT_ERROR.code,
                    r.details = c.details || l.DEFAULT_ERROR.details,
                    r.isFatal = void 0 === c.isFatal ? l.DEFAULT_ERROR.isFatal : c.isFatal;
                var d = c.stack ? c.stack : r.stack;
                return (r.stack = d || function(t) {
                    var e = t.url
                        , i = t.line
                        , n = t.col
                        , o = t.fileName
                        , r = t.columnNumber
                        , a = t.lineNumber;
                    return (e || o || "?") + ":" + (i || a || "?") + ":" + (n || r || "?")
                }(c), r.toString = function() {
                    return a(r.toJSON())
                }, r.toJSON = function() {
                    return {
                        message: r.message,
                        code: r.code,
                        isFatal: r.isFatal,
                        details: r.details,
                        stack: r.stack
                    }
                }, r)
            }
            return (r(e, t), e)
        }(Error);
        e.CustomError = c
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.traverseBreadth = function(t, e) {
                for (var i = t.slice(); i.length; ) {
                    var n = e(i.shift());
                    if (!n) {
                        return;
                    }
                    i.push.apply(i, n)
                }
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(27);
        e.get = function(t, e) {
            for (var i = 0, o = e.split("."); i < o.length; i += 1) {
                var r = o[i];
                if (!n(t)) {
                    t = void 0;
                    break
                }
                t = t[r]
            }
            return t
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(27);
        e.set = function(t, e, i) {
            if (!n(t)) {
                return t;
            }
            for (var o = t, r = e.split("."), a = r.pop(), s = 0, l = r; s < l.length; s += 1) {
                var p = l[s]
                    , c = t[p];
                t = n(c) ? c : t[p] = {}
            }
            return (t[a] = i, o)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.checkNativeCode = function(t) {
                if (!t || !t.toString) {
                    return !1;
                }
                var e = t.toString();
                return /\[native code\]/.test(e) || /\/\* source code not available \*\//.test(e)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(76);
        e.getIfIsAndroid = function(t) {
            void 0 === t && (t = window);
            var e = t.navigator.userAgent
                , i = void 0 === e ? "" : e;
            return /Linux.*?Android/.test(i) && !n.isUCBrowser(t) || /com\.yandex\.mobile\.metrica\.ads\.sdk.*?Android/.test(i)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getHead = function(t) {
                var e = t.document
                    , i = e.getElementsByTagName("head")[0];
                return (i || (i = e.createElement("head"),
                    e.documentElement.appendChild(i)), i)
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(9).filter
    }, function(t, e, i) {
        "use strict";
        var n = {
            xml: "http://www.w3.org/XML/1998/namespace",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            svg: "http://www.w3.org/2000/svg"
        }
            , o = {
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type"
        }
            , r = {};
        i(10).forOwn(o, function(t, e) {
            var i = t.split(":")
                , o = n[i[0]];
            o && (r[e] = o)
        }),
            t.exports = {
                NS: n,
                AttributeNames: o,
                AttributeNamespace: r
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getWindowSize = function() {
                var t = window
                    , e = t.innerWidth
                    , i = t.innerHeight;
                if (!e) {
                    var n = t.document.documentElement;
                    e = n.clientWidth,
                        i = n.clientHeight
                }
                return {
                    width: e,
                    height: i
                }
            }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(47).noop
    }, function(t, e, i) {
        "use strict";
        var n, o, r, a = i(160), s = i(195), l = i(196), p = i(10), c = i(127), d = i(125).NS.xhtml, u = p.isFunction(document.createElementNS), m = !1, f = null, h = {
            write: function(t, e) {
                e = e || n.namespaceURI || d;
                var i = u && e !== d ? document.createElementNS(e, t) : document.createElement(t);
                return (n.insertBefore(i, null), n = i, i)
            },
            end: function() {
                n = n.parentNode
            },
            writeText: function(t) {
                if (t.length > 0) {
                    var e = document.createTextNode(t);
                    return (n.insertBefore(e, null), e)
                }
                return n
            },
            getCurrentElement: function() {
                return n
            },
            getCurrentContextComponent: function() {
                return o
            },
            getCurrentComponent: function() {
                return r
            },
            renderComponent: function(t) {
                var e = t.callRendering(g);
                return (y(), e)
            },
            renderComponentToNode: function(t, e) {
                var i = e.callRendering(g);
                return ((0,
                    a.clearHTML)(t), t.appendChild(i), y(), i)
            },
            updateComponentInNode: function(t, e) {
                var i = t.parentNode;
                if (!i) {
                    return h.renderComponentToNode(t, e);
                }
                var n = document.createElement("div");
                i.insertBefore(n, t.nextSibling);
                var o = e.callRendering(g);
                return (i.insertBefore(o, n), i.removeChild(n), y(), o)
            }
        };
        function g(t) {
            var e = !1;
            return (!1 === m && (e = !0,
                m = !0,
                f = document.createDocumentFragment(),
                n = f), function(t) {
                var e = r
                    , i = o;
                if (r = t,
                    o = t,
                    t.shouldRender()) {
                    t.beforeRender(h);
                    var a = t.render(h);
                    !function(t) {
                        var e = n;
                        if (p.isArray(t)) {
                            for (var i = 0, o = t.length; i < o; i += 1) {
                                _(t[i]);
                            }
                        } else {
                            _(t);
                        }
                        if (e !== n) {
                            throw new Error("element __" + n + "__ is not closed");
                        }
                    }(a),
                        t.afterRender(h),
                    t.onMount !== c && p.isFunction(t.onMount) && t.pushCallback(t.onMount)
                }
                o = i,
                    r = e
            }(t), !0 === e && (m = !1,
                f = null), n)
        }
        function _(t) {
            null != t && (t instanceof s ? h.renderComponent(t) : h.writeText(t.toString()))
        }
        function y() {
            m || l.executeAll()
        }
        t.exports = h
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = "hidden";
        if ((e.changeEventName = "visibilitychange", !(n in document))) {
            for (var o = 0, r = ["webkit", "moz", "ms", "o"]; o < r.length; o += 1) {
                var a = r[o]
                    , s = a + "Hidden";
                if (s in document) {
                    n = s,
                        e.changeEventName = a + "visibilitychange";
                    break
                }
            }
        }
        e.isHidden = function() {
            return Boolean(document[n])
        }
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0,
        e.setCookie = function(t, e, i, n) {
            void 0 === n && (n = {}),
            n.expires instanceof Date && (n.expires = n.expires.toUTCString()),
            void 0 === n.path && (n.path = "/");
            var o = "";
            for (var r in n)
                n[r] && (o += "; " + r,
                !0 !== n[r] && (o += "=" + n[r]));
            try {
                var a = encodeURIComponent(String(e)) + "=" + encodeURIComponent(String(i));
                return t.cookie = a + o
            } catch (t) {
                return
            }
        }
        ,
        e.getCookie = function(t, e) {
            var i = [];
            try {
                i = t.cookie ? t.cookie.split("; ") : []
            } catch (t) {}
            for (var n, o = /(%[0-9A-Z]{2})+/g, r = 0; r < i.length; r += 1) {
                var a = i[r].split("=")
                    , s = a.slice(1).join("=");
                try {
                    var l = a[0].replace(o, decodeURIComponent);
                    if (s.replace(o, decodeURIComponent),
                    e === l) {
                        n = decodeURIComponent(s);
                        break
                    }
                } catch (t) {
                    return
                }
            }
            return n
        }
        ,
        e.deleteCookie = function(t, i, o) {
            e.setCookie(t, i, "", n({}, o, {
                expires: new Date(0)
            }))
        }
}, function(t, e, i) {
        "use strict";
        var n = {
            getValidGeo: function(t) {
                var e = {};
                return (t && (t.lat = parseFloat(t.lat),
                    t.long = parseFloat(t.long),
                isNaN(t.lat) || (e.lat = t.lat.toFixed(this._GEO_FLOAT_PRECISION)),
                isNaN(t.long) || (e.long = t.long.toFixed(this._GEO_FLOAT_PRECISION))), e)
            },
            _GEO_FLOAT_PRECISION: 6,
            INVALID_NUMBER: -1 / 0,
            getValidNumber: function(t) {
                var e = parseInt(t, 10);
                return ((isNaN(e) || !isFinite(e)) && (e = this.INVALID_NUMBER), e)
            }
        };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = function(t) {
            for (var e = t.paramReg, i = t.location, n = void 0 === i ? window.location : i, o = t.valueTransform, r = void 0 === o ? function(t) {
                    return t
                }
                : o, a = [n.search, n.hash], s = 0; s < a.length; s += 1) {
                var l = a[s].match(e);
                if (l && l[1]) {
                    var p = r(l[1]);
                    if (void 0 !== p) {
                        return p;
                    }
                    break
                }
            }
            return ""
        }
            , o = function(t, e) {
            var i = new RegExp(t + "=(\\d+)");
            return n({
                paramReg: i,
                location: e,
                valueTransform: function(t) {
                    return parseInt(t, 10) || void 0
                }
            })
        };
        e.getAdditionalBanners = function(t) {
            return (void 0 === t && (t = window.location), n({
                paramReg: /additional-banners=(\d+(?:,\d+)*)/,
                location: t
            }))
        }
            ,
            e.additionalBanners = e.getAdditionalBanners(),
            e.getUrlCodeVersions = function(t) {
                return (void 0 === t && (t = window.location), {
                    pcode: o("pcodever", t) || void 0,
                    media: o("mcodever", t) || void 0
                })
            }
            ,
            e.urlCodeVersions = e.getUrlCodeVersions()
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(392)
            , o = "__ADB_CONFIG__"
            , r = {
            encode: {
                key: "",
                seed: "",
                urlPrefix: "",
                trailingSlash: !1
            },
            replaceClasses: [],
            detect: {
                elements: [],
                links: [],
                custom: []
            },
            cookieDomain: {
                type: n.AdblockCookieDomainType.list
            },
            cookieMatching: {
                publisherTag: "",
                publisherKey: "",
                types: [n.AdblockCookieMatchingType.scrumble, n.AdblockCookieMatchingType.image, n.AdblockCookieMatchingType.refresh],
                type: n.AdblockCookieMatchingType.all,
                redirectUrl: ["//an.yand", "ex.ru/map", "uid/"].join(""),
                imageUrl: "/static/img/logo.gif/",
                cryptedUidUrl: "https://http-check-headers.yandex.ru",
                cryptedUidCookie: "crookie",
                cryptedUidTTL: 336
            },
            cookieTTL: 336,
            extuidCookies: [],
            debug: !1,
            force: !1
        };
        e.config = "string" == typeof o ? r : o
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(20)
            , o = function(t) {
            return n.isHostIgnored({
                host: t
            })
        };
        e.isHostIgnored = o,
            e["default"] = o(document.location.href)
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(79);
        function o(t) {
            return n("VisibilityChecker", t)
        }
        e.protect = o,
            e.protectStrategy = function(t) {
                return {
                    init: o(function() {
                        return t.init()
                    }),
                    start: o(function() {
                        return t.start()
                    }),
                    stop: o(function() {
                        return t.stop()
                    })
                }
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(135);
        e.DEFAULT_INTERVAL = 300,
            e.createVCClass = function(t) {
                return function() {
                    function i(i, o, r) {
                        void 0 === r && (r = {});
                        var a = this;
                        this.onChange = o,
                            this.callback = function(t) {
                                a.isVisible !== t && (a.isVisible = t,
                                    a.onChange(t))
                            }
                        var s = r.allowIntersectionObserver
                            , l = void 0 !== s && s
                            , p = r.portion
                            , c = void 0 === p ? 0 : p
                            , d = r.interval
                            , u = void 0 === d ? e.DEFAULT_INTERVAL : d
                            , m = r.disableAutoStart
                            , f = r.overlappedPoints
                            , h = void 0 === f ? [[0, 0]] : f;
                        this.strategy = n.protectStrategy(t({
                            allowIntersectionObserver: l,
                            portion: Math.max(Number.MIN_VALUE, c),
                            interval: u,
                            overlappedPoints: h,
                            element: i,
                            callback: this.callback
                        })),
                            this.strategy.init(),
                        m || this.start();
                    }
                    return (i.prototype.start = function() {
                        this.stop(),
                            this.isRunning = !0,
                            this.strategy.start()
                    }, i.prototype.stop = function() {
                        this.isRunning && (this.isRunning = !1,
                            this.strategy.stop(),
                            this.isVisible = void 0)
                    }, i)
                }()
            }
    }, function(t, e, i) {
        "use strict";
        var n, o = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var r = i(111)
            , a = i(35);
        !function(t) {
            t[t.TRANSITION = 1] = "TRANSITION",
                t[t.RETURN = 2] = "RETURN"
        }(e.ClickPixel || (e.ClickPixel = {}));
        var s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (o(e, t), e.prototype.getTemplate = function() {
                return [[4, "marker"], [6, "format"], [1, "isIframe"], [2, "clickPixel"], [1, "isGeo"], [1, "isGeoRegular"], [1, "hasImage"], [1, "hasCallouts"], [1, "hasPhone"], [1, "isNewRmpAbilities"], [1, "isAbilityForRmp"], [18, null], [1, "amp"], [10, "codeVer"], [1, "adblock"], [3, "adfoxexp"]]
            }, e.prototype.defaults = function() {
                return {
                    codeVer: a.getRevisionNo(),
                    adblock: !1,
                    amp: !1
                }
            }, e)
        }(r.AbstractTesttag);
        e.BannerTesttag = s
    }, function(t, e, i) {
        "use strict";
        var n = {
            BLOCK_320x67: {
                isOld: !1,
                async: !0,
                module: i(433)
            },
            BLOCK_RESPONSIVE_MOBILE: {
                isOld: !1,
                async: !0,
                module: i(471)
            },
            SINGLE_VERTICAL: {
                isOld: !1,
                async: !0,
                module: i(472)
            },
            SINGLE_VERTICAL_BIG: {
                isOld: !1,
                async: !0,
                module: i(475)
            },
            SINGLE_HORIZONTAL: {
                isOld: !1,
                async: !0,
                module: i(476)
            },
            SINGLE_HORIZONTAL_GISMETEO: {
                isOld: !1,
                async: !0,
                module: i(477)
            },
            SINGLE_HORIZONTAL_YANEWS: {
                isOld: !1,
                async: !0,
                module: i(478)
            },
            ADAPTIVE: {
                isOld: !1,
                async: !0,
                module: i(479)
            },
            ELASTIC: {
                isOld: !1,
                async: !0,
                module: i(480)
            },
            ELASTIC_VERTICAL: {
                isOld: !1,
                async: !0,
                module: i(481)
            },
            HORIZONTAL0318: {
                isOld: !1,
                async: !0,
                module: i(484)
            },
            VERTICAL0318: {
                isOld: !1,
                async: !0,
                module: i(485)
            },
            ELASTIC_FIXED: {
                isOld: !1,
                async: !0,
                module: i(486)
            },
            ELASTIC_FIXED_YA: {
                isOld: !1,
                async: !0,
                module: i(488)
            },
            ELASTIC_FIXED_POGODA: {
                isOld: !1,
                async: !0,
                module: i(489)
            },
            POGODA_GRID: {
                isOld: !1,
                async: !0,
                module: i(490)
            },
            ELASTIC_FIXED_SELECT: {
                isOld: !1,
                async: !0,
                module: i(491)
            },
            ELASTIC_AVITO: {
                isOld: !1,
                async: !0,
                module: i(492)
            },
            POSTER_VERTICAL: {
                isOld: !1,
                async: !0,
                module: i(493)
            },
            POSTER_VERTICAL_YANEWS: {
                isOld: !1,
                async: !0,
                module: i(494)
            },
            POSTER_HORIZONTAL: {
                isOld: !1,
                async: !0,
                module: i(495)
            },
            POSTER_NEW_HORIZONTAL: {
                isOld: !1,
                async: !0,
                module: i(496)
            },
            POSTER_NEW_VERTICAL: {
                isOld: !1,
                async: !0,
                module: i(497)
            },
            EXTENSIBLE_MOBILE: {
                isOld: !1,
                async: !0,
                module: i(498)
            },
            EXTENSIBLE_MOBILE_MAILRU: {
                isOld: !1,
                async: !0,
                module: i(499)
            },
            MAILRU_WEB: {
                isOld: !1,
                async: !0,
                module: i(500)
            },
            MORDA: {
                isOld: !1,
                async: !0,
                module: i(501)
            },
            MULTI_INTERSTITIAL: {
                isOld: !1,
                async: !0,
                module: i(502)
            },
            ELASTIC_MOBILE_YAMAIL_TOP: {
                isOld: !1,
                async: !0,
                module: i(503)
            },
            ELASTIC_MOBILE_YAMAIL_MIDDLE: {
                isOld: !1,
                async: !0,
                module: i(504)
            },
            RMP_VIDEO: {
                isOld: !1,
                async: !0,
                module: i(505)
            },
            MAILRU_PLUGIN: {
                isOld: !1,
                async: !0,
                module: i(506)
            },
            ANIMATED_SCROLLABLE_MOBILE: {
                isOld: !1,
                async: !0,
                module: i(507)
            },
            SCROLL_SLIDER: {
                isOld: !1,
                async: !0,
                module: i(508)
            },
            PICTURE_SEARCH: {
                isOld: !1,
                async: !0,
                module: i(509)
            },
            PICTURE_SEARCH_3: {
                isOld: !1,
                async: !0,
                module: i(510)
            },
            PICTURE_SEARCH_FIXED: {
                isOld: !1,
                async: !0,
                module: i(511)
            },
            ZEN: {
                isOld: !1,
                async: !1,
                module: i(512)
            },
            RECOMMENDATION: {
                isOld: !1,
                async: !0,
                module: i(519)
            },
            PLISTA: {
                isOld: !1,
                async: !0,
                module: i(520)
            },
            ROW: {
                isOld: !1,
                async: !0,
                module: i(521)
            },
            COMPACT: {
                isOld: !1,
                async: !0,
                module: i(522)
            },
            MOTION: {
                isOld: !1,
                async: !0,
                module: i(523)
            },
            ADAPTIVE_0418: {
                isOld: !1,
                async: !1,
                module: i(524)
            },
            BLOCK_240x400_MEDIA: {
                isOld: !1,
                async: !0,
                module: i(89)
            },
            BLOCK_320x480_MEDIA: {
                isOld: !1,
                async: !0,
                module: i(89)
            },
            BLOCK_300x500_MEDIA: {
                isOld: !1,
                async: !0,
                module: i(89)
            },
            BLOCK_300x600_MEDIA: {
                isOld: !1,
                async: !0,
                module: i(89)
            }
        }
            , o = {
            CUSTOM_BLOCK: {
                isOld: !0,
                async: !0,
                module: i(554)
            },
            "480x320": {
                isOld: !0,
                async: !0,
                module: i(555)
            },
            "400x240": {
                isOld: !0,
                async: !0,
                module: i(566)
            },
            "300x250": {
                isOld: !0,
                async: !0,
                module: i(567)
            },
            "336x280": {
                isOld: !0,
                async: !0,
                module: i(568)
            },
            vk: {
                isOld: !0,
                async: !0,
                module: i(569)
            },
            newVk: {
                isOld: !0,
                async: !0,
                module: i(570)
            },
            "970x250": {
                isOld: !0,
                async: !0,
                module: i(571)
            },
            "970x90": {
                isOld: !0,
                async: !0,
                module: i(572)
            },
            "320x100": {
                isOld: !0,
                async: !0,
                module: i(573)
            },
            "320x50": {
                isOld: !0,
                async: !0,
                module: i(574)
            },
            mailruVertical: {
                isOld: !0,
                async: !0,
                module: i(575)
            },
            mailruHorizontal: {
                isOld: !0,
                async: !0,
                module: i(576)
            },
            adaptive: {
                isOld: !0,
                async: !0,
                module: i(577)
            },
            horizontal: {
                isOld: !0,
                async: !0,
                module: i(224)
            },
            vertical: {
                isOld: !0,
                async: !0,
                module: i(225)
            },
            grid: {
                isOld: !0,
                async: !0,
                module: i(578)
            },
            "160x600": {
                isOld: !0,
                async: !0,
                module: i(579)
            },
            "200x300": {
                isOld: !0,
                async: !0,
                module: i(580)
            },
            "250x250": {
                isOld: !0,
                async: !0,
                module: i(581)
            },
            "1000x120": {
                isOld: !0,
                async: !0,
                module: i(582)
            },
            oldVertical: {
                isOld: !0,
                async: !0,
                module: i(225)
            },
            oldHorizontal: {
                isOld: !0,
                async: !0,
                module: i(224)
            }
        };
        t.exports = {
            getBlock: function(t) {
                return n[t.name] || o[t.name]
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(440)
            , o = i(87)
            , r = new o.BlockState({
            status: o.BlockStatus.Ready
        });
        e.BlockContext = n.createContext(r)
    }, function(t, e) {
        t.exports = function(t) {
            var e = [];
            return (e.push(".", t.id, " .p291e1855{stroke:#fff !important;background:rgba(0,0,0,.25) !important;border-radius:3px !important;top:3px !important;right:3px !important}.", t.id, " .p291e1855.a6b4a3b2d{stroke:#000 !important;background:transparent !important}"), e.join(""))
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(64)
            , o = i(99)
            , r = i(9)
            , a = i(5)
            , s = i(23)
            , l = function(t) {
            if (t && t.__esModule) {
                return t;
            }
            var e = {};
            if (null != t) {
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return (e["default"] = t, e)
        }(i(115))
            , p = i(254)
            , c = i(74)
            , d = i(255)
            , u = i(104)
            , m = i(146)
            , f = i(150)
            , h = i(256)
            , g = i(242)
            , _ = i(439)
            , y = i(139)
            , b = i(87)
            , v = i(14);
        var x = i(0)
            , w = i(1)
            , k = i(108)
            , C = i(2)
            , I = i(3)
            , S = i(6)
            , A = i(147)
            , O = x.createComponent(w, {
            name: "yap-block",
            mod: "",
            layout: S.Layouts.WIDE,
            visibilityPortion: 0,
            _visibilityConfirmed: !1,
            onInit: function() {
                (0,
                    v.logRenderLabel)(this.props.dataSource.getUniqueId(), v.BlockRenderSteps.ComponentBlockInit),
                    this.__base();
                var t = this.props;
                this._renderToNode = t.renderToNode,
                    this.dataSource = t.dataSource,
                    this.settings = t.settings,
                    this.blockId = t.blockId,
                    this.renderParams = t.renderParams,
                    this.settings.horizontalAlign = this.settings.horizontalAlign || this.renderParams.horizontalAlign,
                    this.id = this.getCssClassName(),
                    this.context = new b.BlockState(),
                    this._confirmAtOnce = t.renderParams.confirmAtOnce,
                    this.initBlock()
            },
            initBlock: function() {
                var t = this.dataSource.getFreeAds();
                this.rawAdvList = this.filterRawAds(t),
                    this.initLayout(),
                    this.dataSource.setTesttagProps(this.getTesttagProps()),
                    this.advList = this.createAdvList()
            },
            filterRawAds: function(t) {
                return t.slice(0, this.settings.limit)
            },
            initLayout: function() {},
            getTesttagProps: function() {
                return {
                    layout: this.layout
                }
            },
            createAdvList: function() {
                var t = this
                    , e = this.rawAdvList
                    , i = (0,
                    a.map)(e, function(e) {
                    return t.prepareRawAdv(e, {})
                });
                return (0,
                    r.filter)(i, function(t) {
                    return Boolean(t)
                })
            },
            prepareRawAdv: function(t, e) {
                return this.dataSource.prepareAd(t, e)
            },
            onDestroy: function() {
                this.__base(),
                this.unMraidReady && this.unMraidReady(),
                    C.each(this.advList, function(t) {
                        this.dataSource.releaseAd(t.adId)
                    }, this)
            },
            onMount: function() {
                (0,
                    v.logRenderLabel)(this.dataSource.getUniqueId(), v.BlockRenderSteps.ComponentBlockMounted),
                    this.__base()
            },
            onDomReady: function() {
                var t = this;
                this.isReady = !0,
                    this.context.setState({
                        status: b.BlockStatus.Displayed
                    }),
                    (0,
                        v.logRenderLabel)(this.dataSource.getUniqueId(), v.BlockRenderSteps.ComponentBlockDisplayed),
                    this.onDisplayed(),
                    this.needUpdateAfterRemoveOverflow() ? this.update() : l.isAvailable() && !l.isReady() ? this.unMraidReady = l.on("ready", function() {
                        return t.onReady()
                    }) : this.onReady()
            },
            onDisplayed: function() {},
            needUpdateAfterRemoveOverflow: function() {
                return !1
            },
            onReady: function() {
                this.context.setState({
                    status: b.BlockStatus.Ready
                }),
                    (0,
                        v.logRenderLabel)(this.dataSource.getUniqueId(), v.BlockRenderSteps.ComponentBlockReady),
                    (0,
                        f.preventMissClicks)(this._renderToNode),
                this.props.renderParams.confirmByHandler || this.initVisibilityChecker()
            },
            onUnmount: function() {
                this._visibilityConfirmer && this._visibilityConfirmer.stop(),
                this._visibilityConfirmerInRtb && this._visibilityConfirmerInRtb.stop(),
                this._styleElement && (C.dom.remove(this._styleElement),
                    this._styleElement = null)
            },
            _getFormatName: function() {
                return this.settings.format.name
            },
            getCssClassName: function() {
                var t = this.props.pageNumber;
                return "yap-" + this.blockId + (t ? "-" + t : "")
            },
            getUsedAdvs: function() {
                return this.advList
            },
            shouldRender: function() {
                return this.advList.length
            },
            beforeRender: function() {
                (0,
                    v.logRenderLabel)(this.dataSource.getUniqueId(), v.BlockRenderSteps.ComponentBlockBeforeRender),
                    k.clear()
            },
            afterRender: function() {
                (0,
                    v.logRenderLabel)(this.dataSource.getUniqueId(), v.BlockRenderSteps.ComponentBlockRenderComplete),
                    this.pushCss();
                var t = C.extend(this.getCSSProps(), {
                    utils: C,
                    Const: S
                });
                this._styleElement = k.insertCSS(t, this.props.nonce, this._renderToNode.parentNode)
            },
            pushCss: function() {},
            getCSSProps: function() {
                return {
                    id: this.id,
                    block: this,
                    settings: this.settings
                }
            },
            initVisibilityChecker: function() {
                var t = (0,
                    u.getVisibilityContainer)(this.getMainCont())
                    , e = this.getDataSource()
                    , i = e.hasIntersectionVisibility()
                    , n = (0,
                    c.isRtbInDirectExperiment)({
                    pageId: e.getPageId(),
                    product: e.getProduct(),
                    hasSearchText: e.hasSearchText()
                })
                    , o = null;
                l.isAvailable() && (o = (0,
                    p.createMraidVCClass)(l.getMraid())),
                e.isOldDirect() || !e.isDirectInRtb() && !n || (this._visibilityConfirmerInRtb = new A(t,I.protect("AdvBlock: onDirectInRtbConfirmed", this.confirmVisibilityInRtb, this),{
                    VisibilityChecker: o,
                    allowIntersectionObserver: i,
                    portion: this.getVisiblePortion(t),
                    delay: this.dataSource.getVisibilityTime()
                }),
                this._confirmAtOnce && (this._visibilityConfirmed = !0,
                    this._visibilityConfirmerInRtb.confirm())),
                    this._visibilityConfirmer = new A(t,I.protect("AdvBlock: onConfirmed", this.confirmVisibility, this),{
                        VisibilityChecker: o,
                        allowIntersectionObserver: i,
                        portion: this.visibilityPortion,
                        delay: this.dataSource.getVisibilityTime()
                    }),
                this._confirmAtOnce && (this._visibilityConfirmed = !0,
                    this._visibilityConfirmer.confirm())
            },
            confirmVisibilityInRtb: function() {
                this._visibilityConfirmed = !0,
                    this.dataSource.confirmVisibilityInRtb({
                        renderSize: this.getBlockSize()
                    })
            },
            confirmVisibility: function() {
                var t = this.getUsedAdvs();
                this.dataSource.onConfirmVisibility(t, {
                    renderSize: this.getBlockSize()
                }),
                    this._visibilityConfirmed = !0
            },
            confirmVisibilityByHover: function(t) {
                var e = [t];
                this.dataSource.sendVisibilityConfirmation(e, {
                    testtagProps: {
                        isHover: !0
                    },
                    renderSize: this.getBlockSize()
                }),
                    this._visibilityConfirmed = !0
            },
            isVisibilityConfirmed: function() {
                return this._visibilityConfirmed
            },
            getRoot: function() {
                return this.getResourceById("layout").getRoot()
            },
            getBlockSize: function() {
                return (0,
                    o.getElementRectSize)(this._renderToNode)
            },
            getMainCont: function() {
                return this.getMainContainer().getElement()
            },
            getMainContainer: function() {
                return this.getResourceById("layout").getLayoutContainer()
            },
            getVisiblePortion: function(t) {
                return (0,
                    d.getVisiblePortion)(t, this.getDataSource().hasCommonRtbVisibility())
            },
            hasBorder: function() {
                var t = this.props.settings.borderType;
                return t === S.BorderTypes.BLOCK || t === S.BorderTypes.COLLAPSE
            },
            getBody: function(t, e, i) {
                return null
            },
            isInViewport: function() {
                return C.dom.isInViewport(this.getElement(), S.REFRESH_VIEWPORT_VISIBLE_PART)
            },
            getDataSource: function() {
                return this.dataSource
            },
            onReceivedFeedback: function(t) {
                this.__base(),
                    this.getDataSource().abuseAd(t)
            },
            slideUp: function(t) {
                var e = this.getRoot().getElement()
                    , i = this.getMainContainer().getElement()
                    , o = (0,
                    s.getBoundingClientRect)(i)
                    , r = o.width
                    , a = o.height;
                this.getMainContainer().setStyle({
                    width: r,
                    height: a
                }),
                    (0,
                        n.slideUp)(e, t)
            },
            renderLogo: function(t) {
                return x.create(t.Logo, {
                    class: this.b_("__logo"),
                    title: this.dataSource.getTitle()
                })
            },
            _render: function(t, e, i) {
                var n = this;
                (0,
                    v.logRenderLabel)(this.dataSource.getUniqueId(), v.BlockRenderSteps.ComponentBlockReadyToRender);
                var o = this._getFormatName()
                    , r = this.getDataSource()
                    , a = r.getLanguage()
                    , s = (0,
                    m.getLangCode)(a)
                    , l = this.settings
                    , p = r.getBlockOpacity()
                    , c = {
                    resourceId: "layout",
                    id: this.id,
                    class: t(t(), "_" + o, "_border-type_" + l.borderType, this.mod),
                    visibility: p
                };
                return (c.lang = s, x.create(i.Layout, c, x.create(y.BlockContext.Provider, {
                    value: this.context
                }, this.getBody(t, e, i), this.renderLogo(i)), x.create(_.CompositeDetector, {
                    onReady: function() {
                        return n.onDomReady()
                    }
                }, this.isReady ? null : x.create(g.DisplayDetector, null))))
            },
            onOpenLink: function(t) {
                (0,
                    h.open)(t)
            },
            setMod: function(t) {
                this.getMainContainer().addClass(this.b_(t))
            },
            delMod: function(t) {
                this.getMainContainer().removeClass(this.b_(t))
            }
        }, {
            Layout: i(442),
            Logo: i(91)
        });
        t.exports = O
    }, function(t, e, i) {
        "use strict";
        var n = i(0)
            , o = i(1)
            , r = i(454)
            , a = n.createComponent(o, {
            name: "yap-button",
            afterRender: function() {
                this.pushStyles(r)
            },
            getIconSize: function() {
                var t = {
                    XS: [16, 16],
                    "20x20": [20, 20],
                    S: [22, 22],
                    M: [32, 32],
                    L: [36, 36],
                    XL: [48, 48]
                }
                    , e = t[this.props.size] || t.M;
                return {
                    width: e[0],
                    height: e[1]
                }
            },
            getModTheme: function() {
                var t = this.props.theme;
                return t && "_theme_" + t
            },
            updateLink: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                    , e = this.getResourceById("button")
                    , i = e.getElement();
                return (t && (i.href = t,
                    e.addClass(this.b_("_active-link"))), t)
            },
            _render: function(t, e, i) {
                var o = e.href
                    , r = e.theme
                    , a = "android-x" !== r && "ios-x" !== r || e.icon ? null : {
                    height: this.getIconSize().height
                };
                return n.create(i.Link, {
                    class: t(e["class"], t(), o ? t("_active-link") : "", this.mod, this.getModTheme()),
                    type: "button",
                    resourceId: "button",
                    href: o,
                    target: "_blank",
                    style: a
                }, e.icon ? n.create(i.AppIcon, {
                    class: t("__icon"),
                    image: e.icon,
                    size: this.getIconSize()
                }) : null, n.create("yatag", {
                    class: t("__text"),
                    resourceId: "text"
                }, this.getChildren()))
            }
        }, {
            AppIcon: i(152)
        });
        t.exports = a
    }, function(t, e, i) {
        "use strict";
        var n = i(0)
            , o = i(1)
            , r = i(88)
            , a = i(52)
            , s = i(457)
            , l = n.createComponent([o, r], {
            name: "yap-domain",
            onDisplayed: function() {
                this.removeOverflow()
            },
            removeOverflow: function() {
                var t = this.b_;
                a(this.rootComponent, [t("_scale_3"), t("_scale_2"), t("_scale_1")])
            },
            shouldRender: function() {
                return this.props.adv.domain
            },
            afterRender: function() {
                this.pushStyles(s)
            },
            _render: function(t, e, i) {
                var o = e.adv
                    , r = e.nofavicon
                    , a = {
                    color: e.color
                };
                return n.create("yatag", {
                    class: t(e["class"], t(), this.mod),
                    style: e.style
                }, r ? null : n.create(i.Favicon, {
                    src: o.favicon
                }), n.create(i.Link, {
                    class: t("__link yap-link"),
                    type: "domain",
                    href: o.url,
                    style: a,
                    resourceId: "text",
                    tag: o.url ? "a" : "yatag",
                    target: o.url && "_blank"
                }, o.domain))
            }
        }, {
            Favicon: i(116)
        });
        t.exports = l
    }, function(t, e, i) {
        "use strict";
        t.exports = function(t, e, i) {
            if ("number" != typeof t) {
                throw new Error("util.isInRange: Number value is expected");
            }
            return t >= e && t <= i
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(49)
            , o = i(10)
            , r = i(61)
            , a = o.augment(n, {
            constructor: function() {
                n.apply(this, arguments)
            },
            beforeRender: function(t) {
                var e = document.createElement("div");
                r.innerHTML(e, this.props.text.toString() || "");
                var i = t.getCurrentElement()
                    , n = o.map(e.childNodes, function(t) {
                    return t
                });
                return (o.each(n, function(t) {
                    i.appendChild(t)
                }), !1)
            }
        });
        t.exports = a
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = {
            1: "ru",
            2: "uk",
            3: "en",
            4: "by",
            5: "kz",
            6: "tr",
            7: "tt"
        };
        e.getLangCode = function(t) {
            return n[t]
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(8)
            , o = i(441)
            , r = i(257)
            , a = i(2)
            , s = a.augment(o, {
            constructor: function(t, e, i) {
                this._events = [],
                    (i = i || {}).VisibilityChecker = i.VisibilityChecker || r,
                    o.apply(this, arguments)
            },
            start: function() {
                this._element ? (this._events.push(a.domEvent.on(this._element, "mouseover", this.confirm, this, {
                    once: !0
                })),
                    s.__super.start.apply(this)) : n.logger.warn("Warning::VisibilityConfirmation#start: no element")
            },
            stop: function() {
                a.each(this._events, function(t) {
                    t.un()
                }),
                    this._events = [],
                    s.__super.stop.apply(this)
            }
        });
        t.exports = s
    }, function(t, e, i) {
        "use strict";
        var n = i(69)
            , o = function(t) {
            if (t && t.__esModule) {
                return t;
            }
            var e = {};
            if (null != t) {
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return (e["default"] = t, e)
        }(i(4));
        var r = i(0)
            , a = i(1)
            , s = i(474)
            , l = r.createComponent(a, {
            name: "yap-bg",
            _getBlurSize: function() {
                return this.props.blurSize || 10
            },
            afterRender: function() {
                this.pushStyles(s, {
                    blurSize: this._getBlurSize()
                })
            },
            _renderMethodModern: function(t, e) {
                return r.create("yatag", {
                    class: t("__bg"),
                    style: {
                        "background-image": "url(" + e.src + ")"
                    }
                })
            },
            _renderMethodSvg: function(t, e) {
                var i = "blur" + (0,
                    n.generateHexString)(5);
                return r.create("yatag", {
                    class: t("__svg")
                }, r.create("svg", null, r.create("defs", null, r.create("filter", {
                    id: i,
                    x: "0",
                    y: "0"
                }, r.create("feGaussianBlur", {
                    stdDeviation: this._getBlurSize()
                }))), r.create("image", {
                    xlinkHref: e.src,
                    width: "100%",
                    height: "100%",
                    filter: "url(#" + i + ")"
                })))
            },
            _render: function(t, e, i) {
                var n = e.picture
                    , a = void 0;
                return (a = o.support.cssFilterBlur && o.support.cssTransform && !o.isEdge ? this._renderMethodModern.bind(this) : this._renderMethodSvg.bind(this), r.create("yatag", {
                    class: t(e["class"], t(), this.mod)
                }, n ? a(t, n, i) : null, this.getChildren()))
            }
        });
        t.exports = l
    }, function(t, e, i) {
        "use strict";
        var n, o = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var r = i(0)
            , a = 0
            , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (o(e, t), e.prototype.render = function() {
                var t = this.props.text
                    , e = void 0 === t ? "" : t;
                if ("" === e) {
                    return null;
                }
                var i = "text" + (a += 1)
                    , n = "pattern" + a
                    , o = 0.6 * (e.length + 4);
                return r.create("svg", {
                    width: "100%",
                    height: "100%"
                }, r.create("defs", null, r.create("g", {
                    id: i
                }, r.create("text", {
                    "text-anchor": "middle",
                    "alignment-baseline": "middle"
                }, e))), r.create("pattern", {
                    id: n,
                    x: "50%",
                    y: "50%",
                    width: o + "em",
                    height: "8em",
                    patternUnits: "userSpaceOnUse",
                    patternContentUnits: "userSpaceOnUse",
                    preserveAspectRatio: "xMidYMid meet",
                    patternTransform: "translate(" + o / 2 + " 2) rotate(-25 " + o / 2 + " 2)"
                }, r.create("use", {
                    x: "0",
                    y: "2em",
                    xlinkHref: "#" + i
                }), r.create("use", {
                    x: o + "em",
                    y: "2em",
                    xlinkHref: "#" + i
                }), r.create("use", {
                    x: o / 2 + "em",
                    y: "6em",
                    xlinkHref: "#" + i
                })), r.create("rect", {
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%",
                    fill: "url(#" + n + ")"
                }))
            }, e)
        }(i(1));
        e.ImageStub = s
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n, o = i(435), r = 100;
        e.getPreventMissClicksScript = function() {
            return n || (n = ["<scr", 'ipt>"use strict";(', o.preventClicks, ")(document,", r, ")</scr", "ipt>"].join(""))
        }
            ,
            e.preventMissClicks = function(t) {
                t && o.preventClicks(t, r)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(446);
        t.exports = n.FeedbackMenu
    }, function(t, e, i) {
        "use strict";
        var n = i(0)
            , o = i(1)
            , r = i(451)
            , a = n.createComponent(o, {
            name: "yap-app-icon",
            afterRender: function() {
                this.pushStyles(r)
            },
            getPicture: function() {
                var t = this.props.image
                    , e = this.props.size;
                return t.getFitting(e.width, e.height, e.wLoss)
            },
            getModTheme: function() {
                var t = this.props.theme;
                return t && "_theme_" + t
            },
            _render: function(t, e) {
                var i = this.getPicture()
                    , o = i.width
                    , r = i.height;
                return n.create("img", {
                    class: t(e["class"], t(), this.mod, this.getModTheme()),
                    alt: "",
                    src: i.src,
                    style: {
                        width: o,
                        height: r,
                        "max-width": o
                    }
                })
            }
        });
        t.exports = a
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.hasWarning = function(t) {
                return Boolean(t.warning && t.warning.trim(" "))
            }
    }, function(t, e, i) {
        "use strict";
        function n(t, e) {
            var i, n = e.isCover, r = "auto" === e.width, a = "auto" === e.height, s = e.width, l = e.height, p = t[0], c = t[1], d = t[2], u = Number((c / d).toFixed(2));
            if (r && a) {
                i = o(c, d, u, !0);
            } else if (a && !r) {
                i = o(s, l, u, !0);
            } else if (r && !a) {
                i = o(s, l, u, !1);
            } else {
                i = o(s, l, u, n === u <= s / l)
            }
            var m = i.width
                , f = i.height;
            return {
                src: p,
                originWidth: c,
                originHeight: d,
                ratio: u,
                containerWidth: s,
                containerHeight: l,
                width: m,
                height: f,
                area: Math.min(m, c) * Math.min(f, d),
                originArea: c * d
            }
        }
        function o(t, e, i, n) {
            return (void 0 === n && (n = !0), n ? e = t / i : t = e * i, {
                width: t,
                height: e
            })
        }
        e.__esModule = !0,
            e.fitImage = function(t, e) {
                for (var i, o, r = null, a = 0, s = t; a < s.length; a += 1) {
                    var l = s[a]
                        , p = l[0]
                        , c = l[1]
                        , d = l[2];
                    if (c && d && p) {
                        var u = n(l, e);
                        (null === r || (o = r,
                        (i = u).area > o.area || i.area === o.area && i.originArea < o.originArea)) && (r = u)
                    }
                }
                return r
            }
            ,
            e.scale = o
    }, function(t, e, i) {
        "use strict";
        var n = i(269)
            , o = i(270)
            , r = i(68)
            , a = i(130)
            , s = (i(592),
            i(50))
            , l = i(74)
            , p = i(70).encode
            , c = i(15)
            , d = i(2)
            , u = i(6)
            , m = i(24)
            , f = 8796093022208
            , h = 9
            , g = "106253"
            , _ = 0;
        function y(t, e, i, n) {
            var o = new m({
                host: t,
                path: i.pageId,
                params: e
            });
            o.appendParams(i.extParams || "");
            var r = function() {
                o.appendParams(function(t) {
                    if (t.layoutConfig && d.browser.support.longUrls) {
                        t.layoutConfig.set("req_no", _ += 1);
                        var e = t.layoutConfig.toString();
                        if (e) {
                            return {
                                "layout-config": e
                            }
                        }
                    }
                    return {}
                }(i)),
                    n(o)
            };
            i.pageId === g ? (o.appendEmptyGrab(),
                r()) : o.appendGrab(i.grab, r)
        }
        function b(t) {
            var e = (0,
                n.getPageRef)()
                , i = {
                "target-ref": (0,
                    n.getTargetRef)().substr(0, 512),
                "page-ref": e.substr(0, 512),
                charset: "utf-8"
            };
            var o = (0,
                a.getCookie)(document, "_ym_uid");
            o && (i.duid = p(o)),
            t.experimentId && (i["experiment-id"] = t.experimentId),
            t.blockImpId && (i["imp-id"] = (0,
                s.getRealImpId)(t.blockImpId)),
            t.lang && (i.lang = t.lang),
            t.refresh && (i.refresh = 1),
            t.geo && (i["partner-geo-lat"] = t.geo.lat,
                i["partner-geo-long"] = t.geo.long),
            t.partnerStatId && (i["partner-stat-id"] = t.partnerStatId),
            t.disableHighlight || (i["enable-flat-highlight"] = 1),
            t.additionalBanners && (i["additional-banners"] = t.additionalBanners.replace(/,/g, "\n")),
            t.testtag && (i["test-tag"] = t.testtag);
            var l = t.ssSkipTokenLength;
            if (l) {
                var c = l.value
                    , d = l.custom;
                c >= 0 && (i["ss-skip-token-length"] = c),
                d && (i["allow-repeat-ads"] = 0)
            }
            return (i["ad-session-id"] = (0,
                r.getSessionId)(), i)
        }
        t.exports = {
            loadRtb: function(t, e) {
                var i = function(t, e) {
                    t["pcode-version"] = Ya.codeVer,
                        t["flash-ver"] = d.browser.flashVer[0],
                    e.availableWidth >= 1 && e.availableWidth <= 1e4 && (t["available-width"] = e.availableWidth),
                    e.availableHeight >= 1 && e.availableHeight <= 1e4 && (t["available-height"] = e.availableHeight),
                    e.skipToken && (t["skip-token"] = e.skipToken),
                    e.extParam && (t["ext-param"] = e.extParam),
                    e.statId && (t["stat-id"] = e.statId);
                    var i = (0,
                        l.isRtbInDirectExperiment)({
                        pageId: e.pageId,
                        product: e.product,
                        hasSearchText: Boolean(e.searchText)
                    });
                    return ((0,
                        s.isFakeImpId)(e.blockImpId) ? (t.rtbshadow = 1,
                        t["imp-id"] = (0,
                            s.getRealImpId)(e.blockImpId),
                    e.partnerStatId && (t["stat-id"] = e.partnerStatId),
                    e.rtbInDirect.defaultSize && (t["default-size"] = e.rtbInDirect.defaultSize),
                    e.rtbInDirect.allSizes && (t["all-sizes"] = e.rtbInDirect.allSizes.join("\n")),
                    e.skipBanner && (t["skip-banner"] = e.skipBanner),
                        t["direct-count"] = 9) : i && ((0,
                        l.needRtbShadow)(e.pageId) && (t.rtbshadow = 1),
                    e.blockImpId && (t["partner-stat-id"] = e.blockImpId)), t)
                }(b(t), t);
                y(u.urls.rtb, i, t, function(n) {
                    (0,
                        o.loadAd)({
                        url: n,
                        pageId: t.pageId,
                        isRefresh: t.refresh,
                        callback: function(n) {
                            if (function(t, e) {
                                try {
                                    var i = e.blockImpId
                                        , n = t.settings
                                        , o = void 0 === n ? {} : n
                                        , r = t.direct
                                        , a = (r = void 0 === r ? {} : r).ads
                                        , s = void 0 === a ? [] : a
                                        , l = o[i] && o[i].name
                                        , p = s[0] || {}
                                        , c = p.addInfo && "mobile-app" === p.addInfo.type;
                                    return "320x67" === l || ("responsiveMobile" === l || "320x50" === l) && c
                                } catch (t) {
                                    return !1
                                }
                            }(n)) {
                                var r = c({}, i, {
                                    "enable-page-options": f,
                                    "direct-limit-override": h
                                });
                                y(u.urls.rtb, r, t, function(i) {
                                    return (0,
                                        o.loadAd)({
                                        url: i,
                                        pageId: t.pageId,
                                        isRefresh: t.refresh,
                                        callback: e
                                    })
                                })
                            } else {
                                e(n);
                            }
                        }
                    })
                })
            },
            loadDirect: function(t, e) {
                var i = function(t, e) {
                    return (e.statId && (t["stat-id"] = e.statId), e.skipBanner && (t["skip-banner"] = e.skipBanner), e.searchText && (t.text = e.searchText,
                        t["page-no"] = e.searchPageNumber), t)
                }(b(t), t);
                y(u.urls.direct, i, t, function(i) {
                    (0,
                        o.loadAd)({
                        url: i,
                        pageId: t.pageId,
                        isRefresh: t.refresh,
                        callback: e
                    })
                })
            },
            loadDirectSettings: function(t, e) {
                var i = new m({
                    host: u.urls.directSettings,
                    path: t.pageId,
                    params: b(t)
                });
                (0,
                    o.loadAd)({
                    url: i,
                    pageId: t.pageId,
                    isRefresh: t.refresh,
                    callback: e
                })
            }
        }
    }, function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || Function("return this")() || (0,
                eval)("this")
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function(t, e, i) {
        "use strict";
        t.exports = function(t, e) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                for (var n = [], o = 0, r = arguments.length; o < r; o += 1) {
                    n[o] = i[o] || arguments[o];
                }
                return t.apply(e, n)
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(347).getAnimationFrameFunctions(window);
        e.requestAnimationFrame = n.requestAnimationFrame,
            e.cancelAnimationFrame = n.cancelAnimationFrame
    }, function(t, e, i) {
        "use strict";
        function n(t) {
            return {
                height: t.clientHeight,
                width: t.clientWidth
            }
        }
        function o(t) {
            return {
                height: t.scrollHeight || t.offsetHeight,
                width: t.scrollWidth || t.offsetWidth
            }
        }
        t.exports = {
            elementFits: function(t, e) {
                var i = n(t)
                    , r = o(e)
                    , a = i.width - r.width
                    , s = i.height - r.height;
                return a >= -1 && s >= -1
            },
            getElementFullSize: o,
            getElementInnerSize: n
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.clearHTML = function(t) {
                for (; t.firstChild; ) {
                    t.removeChild(t.firstChild);
                }
            }
    }, function(t, e) {
        t.exports = function(t) {
            var e = [];
            return (e.push(".", t.id, " .ed2407846{position:relative !important;cursor:pointer !important}.", t.id, " .w93d625e{z-index:-1 !important;transition:z-index 0s linear .4s !important;cursor:default !important}.", t.id, " .w93d625e,.", t.id, " .l9d203649{position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;overflow:hidden !important}.", t.id, " .l9d203649{margin-left:100% !important;transition:margin-left .4s ease-out !important}.", t.id, " .b8d43abe8{position:absolute !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;margin-left:0 !important;width:100% !important;height:100% !important;background:#fff !important;background:hsla(0,0%,100%,.98) !important;transition:margin-left .4s ease-out !important}.", t.id, " .k2a4e0f0f{z-index:10 !important;transition:z-index 0s !important}.", t.id, " .k2a4e0f0f .l9d203649{margin-left:0 !important}.", t.id, " .n706e0c27{padding:4px !important;position:relative !important}.", t.id, " .n69c80ec7 svg{display:block !important}.", t.id, " .n69c80ec7 polygon{fill:", t.settings.textColor || "#000", " !important}.", t.id, " .mf92f7266{margin:-3px !important;width:1em !important;height:1em !important;line-height:1em !important;text-align:center !important;font-size:18px !important}.", t.id, " .gc3364e95{position:absolute !important;top:50% !important;right:100% !important;margin-top:-9px !important;margin-right:6px !important;padding:0 4px !important;max-width:120px !important;height:18px !important;line-height:18px !important;color:#fff !important;background:#333 !important;background-color:rgba(0,0,0,.8) !important;border-radius:1px !important;visibility:hidden !important;font-size:11px !important;white-space:nowrap !important}.", t.id, " .f93cbb81{position:absolute !important;top:3px !important;right:-6px !important;display:block !important;overflow:hidden !important;width:0 !important;height:0 !important;border-style:solid !important;border-width:6px 0 6px 6px !important;border-color:transparent transparent transparent #333 !important;border-color:transparent transparent transparent rgba(0,0,0,.8) !important}.", t.id, " .d97642285{position:relative !important;color:#fff !important;letter-spacing:.04em !important}.", t.id, " .ua6d4d7c0:hover .gc3364e95{visibility:visible !important}.", t.id, " .ke414844b:hover .gc3364e95{display:none !important}.", t.id, " .j543a9873{visibility:visible !important}.", t.id, " .j543a9873 .gc3364e95{display:none !important}.", t.id, " .t7a79d19d .gc3364e95{height:19px !important;line-height:19px !important}.", t.id, " .t7a79d19d .f93cbb81{top:2px !important}.", t.id, " .e934cf3e9 .n706e0c27{padding:5px !important}.", t.id, " .e934cf3e9 .mf92f7266{margin:-5px !important;font-size:25px !important}.", t.id, " .e934cf3e9 .gc3364e95{margin-right:9px !important;margin-top:-12px !important;max-width:160px !important;height:22px !important;line-height:22px !important;font-size:13px !important}.", t.id, " .e934cf3e9 .f93cbb81{right:-7px !important;top:4px !important;border-width:7px 0 7px 7px !important}.", t.id, " .kcfcb737d .e934cf3e9 .f93cbb81{right:-6px !important}.", t.id, " .n3651da7d{padding:5px !important}.", t.id, " .n3651da7d .n706e0c27{border-radius:50% !important;background:", t.settings.bgColor && t.settings.borderType != t.Const.BorderTypes.AD ? t.settings.bgColor : "#fff", " !important;box-shadow:0 1px 0 0 rgba(0,0,0,.2) !important}.", t.id, " .n3651da7d.e934cf3e9{padding:5px !important}.", t.id, " .h3acbd58f .n706e0c27{border-radius:50% !important;background:", new t.util.Color(t.settings.bgColor && t.settings.borderType != t.Const.BorderTypes.AD ? t.settings.bgColor : "#fff").setAlpha(0.8), " !important}.", t.id, " .n487a84b1{padding:4px !important}.", t.id, " .n487a84b1 .gc3364e95{margin-right:8px !important}.", t.id, " .n487a84b1 .n706e0c27{border-radius:20% !important}.", t.id, " .f8f7dded2 .n706e0c27{background-color:rgba(0,0,0,.25) !important}.", t.id, " .f8f7dded2 .n69c80ec7 polygon{fill:#fff !important}.", t.id, " .ua6d4d7c0.ke414844b .gc3364e95{display:none !important}.", t.id, " .hf3172a40{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;bottom:0 !important;width:100% !important;height:100% !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;color:#000 !important;font-size:13px !important;z-index:-1 !important;opacity:0 !important;transition:opacity .3s !important}.", t.id, " .hf3172a40,.", t.id, " .i27778647{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important}.", t.id, " .pcb675c9d{margin-left:10px !important}.", t.id, " .b5aa085cb svg{fill:#000 !important}.", t.id, " .a84bc0893{font-size:15px !important}.", t.id, " .sa3309f4e .hf3172a40{opacity:1 !important;z-index:10 !important}.", t.id, " .eb950d56f{-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;min-width:100% !important;min-height:100% !important;font-size:13px !important}.", t.id, " .eb950d56f,.", t.id, " .x9af46b08{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;box-sizing:border-box !important}.", t.id, " .x9af46b08{width:100% !important;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;padding:10px !important}.", t.id, " .l468d6d24{font-weight:700 !important}.", t.id, " .qe0679d84{display:none !important;font-weight:700 !important}.", t.id, " .bb90005ba,.", t.id, " .qe0679d84{-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important}.", t.id, " .bb90005ba{overflow:hidden !important}.", t.id, " .i2ba05e60,.", t.id, " .bb90005ba{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;box-sizing:border-box !important}.", t.id, " .i2ba05e60{-webkit-align-content:center !important;-ms-flex-line-pack:center !important;align-content:center !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;padding:0 !important;margin:0 !important;position:relative !important}.", t.id, " .se58cae78{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;box-sizing:border-box !important;margin:5px 0 !important}.", t.id, " .o64cb8058{display:none !important}.", t.id, " .se58cae78 .t933fbe6d{width:100% !important;max-width:250px !important}.", t.id, " .o64cb8058 .t933fbe6d{width:100% !important;max-width:180px !important}.", t.id, " .t933fbe6d{display:block !important;padding:5px !important;background-color:#fff !important;border:1px solid #c8c8c8 !important;border-radius:4px !important;text-align:center !important;color:#555 !important;white-space:nowrap !important;transition-property:border,color !important;transition-duration:.2s !important;cursor:pointer !important;box-sizing:border-box !important}.", t.id, " .t933fbe6d:hover{color:#333 !important;border-color:#333 !important}.", t.id, " .eb950d56f.jb8c5f4ea .bb90005ba{padding-bottom:15px !important}.", t.id, " .eb950d56f.jb8c5f4ea .i2ba05e60,.", t.id, " .eb950d56f.jb8c5f4ea .x9af46b08{-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important}.", t.id, " .eb950d56f.jb8c5f4ea .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.", t.id, " .eb950d56f.ka660bcaa .bb90005ba{padding-bottom:5px !important}.", t.id, " .eb950d56f.ka660bcaa .x9af46b08{-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important}.", t.id, " .eb950d56f.ka660bcaa .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;-webkit-align-items:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.", t.id, " .eb950d56f.ka660bcaa .se58cae78{margin:2px 0 !important}.", t.id, " .eb950d56f.ka660bcaa .t933fbe6d{padding:3px !important}.", t.id, " .eb950d56f.f3035d38a .bb90005ba{padding-bottom:15px !important}.", t.id, " .eb950d56f.f3035d38a .i2ba05e60,.", t.id, " .eb950d56f.f3035d38a .x9af46b08{-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important}.", t.id, " .eb950d56f.f3035d38a .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.", t.id, " .eb950d56f.f3035d38a .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.f3035d38a .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.q775ec178 .bb90005ba{padding-bottom:5px !important}.", t.id, " .eb950d56f.q775ec178 .x9af46b08{-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important}.", t.id, " .eb950d56f.q775ec178 .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;-webkit-align-items:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.", t.id, " .eb950d56f.q775ec178 .se58cae78{margin:2px 0 !important}.", t.id, " .eb950d56f.q775ec178 .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.q775ec178 .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.q775ec178 .t933fbe6d{padding:3px !important}.", t.id, " .eb950d56f.d27b350ff .bb90005ba{padding-bottom:10px !important}.", t.id, " .eb950d56f.d27b350ff .x9af46b08{-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important}.", t.id, " .eb950d56f.d27b350ff .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-wrap:wrap !important;-ms-flex-wrap:wrap !important;flex-wrap:wrap !important;max-width:540px !important}.", t.id, " .eb950d56f.d27b350ff .se58cae78{width:50% !important;margin:0 !important;padding:5px !important}.", t.id, " .eb950d56f.e3b1a0f9f .bb90005ba{padding-bottom:10px !important}.", t.id, " .eb950d56f.e3b1a0f9f .x9af46b08{-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important}.", t.id, " .eb950d56f.e3b1a0f9f .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-wrap:wrap !important;-ms-flex-wrap:wrap !important;flex-wrap:wrap !important;max-width:340px !important}.", t.id, " .eb950d56f.e3b1a0f9f .se58cae78{width:50% !important;margin:0 !important;padding:5px !important}.", t.id, " .eb950d56f.e3b1a0f9f .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.e3b1a0f9f .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.ufdf17752 .x9af46b08{-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.ufdf17752 .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-shrink:1 !important;-ms-flex-negative:1 !important;flex-shrink:1 !important;padding-left:20px !important}.", t.id, " .eb950d56f.ufdf17752 .se58cae78{-webkit-flex-grow:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important;margin:0 5px !important}.", t.id, " .eb950d56f.ufdf17752 .t933fbe6d{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.kf6e25bc0 .x9af46b08{-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.kf6e25bc0 .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-shrink:1 !important;-ms-flex-negative:1 !important;flex-shrink:1 !important;padding-left:15px !important}.", t.id, " .eb950d56f.kf6e25bc0 .se58cae78{-webkit-flex-grow:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important;margin:0 5px !important}.", t.id, " .eb950d56f.kf6e25bc0 .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.kf6e25bc0 .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.kf6e25bc0 .t933fbe6d{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.gc5e868b2 .x9af46b08{-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.gc5e868b2 .l468d6d24{display:none !important}.", t.id, " .eb950d56f.gc5e868b2 .qe0679d84{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.gc5e868b2 .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-shrink:1 !important;-ms-flex-negative:1 !important;flex-shrink:1 !important;padding-left:15px !important}.", t.id, " .eb950d56f.gc5e868b2 .se58cae78{-webkit-flex-grow:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important;margin:0 5px !important}.", t.id, " .eb950d56f.gc5e868b2 .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.gc5e868b2 .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.gc5e868b2 .t933fbe6d{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.t3e2849c7{font-size:11px !important}.", t.id, " .eb950d56f.t3e2849c7 .x9af46b08{-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;padding:4px !important}.", t.id, " .eb950d56f.t3e2849c7 .l468d6d24{display:none !important}.", t.id, " .eb950d56f.t3e2849c7 .qe0679d84{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.t3e2849c7 .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-shrink:1 !important;-ms-flex-negative:1 !important;flex-shrink:1 !important;padding-left:10px !important}.", t.id, " .eb950d56f.t3e2849c7 .se58cae78{-webkit-flex-grow:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important;margin:0 1px !important}.", t.id, " .eb950d56f.t3e2849c7 .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.t3e2849c7 .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.t3e2849c7 .t933fbe6d{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.if41a57c4{font-size:11px !important}.", t.id, " .eb950d56f.if41a57c4 .x9af46b08{-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;padding:0 !important}.", t.id, " .eb950d56f.if41a57c4 .l468d6d24{display:none !important}.", t.id, " .eb950d56f.if41a57c4 .qe0679d84{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.if41a57c4 .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-shrink:1 !important;-ms-flex-negative:1 !important;flex-shrink:1 !important;padding-left:10px !important}.", t.id, " .eb950d56f.if41a57c4 .se58cae78{-webkit-flex-grow:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important;margin:0 2px !important}.", t.id, " .eb950d56f.if41a57c4 .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.if41a57c4 .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.if41a57c4 .t933fbe6d{padding:0 5px !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important}.", t.id, " .eb950d56f.b9a52761b{font-size:12px !important}.", t.id, " .eb950d56f.b9a52761b .x9af46b08{-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;padding:4px !important}.", t.id, " .eb950d56f.b9a52761b .l468d6d24{padding:2px 5px !important}.", t.id, " .eb950d56f.b9a52761b .qe0679d84{display:none !important}.", t.id, " .eb950d56f.b9a52761b .bb90005ba{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important}.", t.id, " .eb950d56f.b9a52761b .i2ba05e60{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-wrap:wrap !important;-ms-flex-wrap:wrap !important;flex-wrap:wrap !important;-webkit-flex-shrink:1 !important;-ms-flex-negative:1 !important;flex-shrink:1 !important}.", t.id, " .eb950d56f.b9a52761b .se58cae78{-webkit-flex-grow:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important;margin:1px !important}.", t.id, " .eb950d56f.b9a52761b .o64cb8058{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .eb950d56f.b9a52761b .je54e0f7a{display:none !important}.", t.id, " .eb950d56f.b9a52761b .t933fbe6d{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-align-items:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;padding:2px !important}.", t.id, " .sa3309f4e .se58cae78{opacity:0 !important}"), e.join(""))
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(34)
            , o = i(24)
            , r = {
            baseUrl: "",
            method: "get",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            withCredentials: !0,
            retryLimit: 3
        };
        function a(t, e, i, o) {
            var r = {};
            n.each(["then", "catch"], function(t) {
                r[t] = function(e) {
                    return (r[t] = e, r)
                }
            });
            var a = !("onload"in new XMLHttpRequest())
                , p = new a ? window.XDomainRequest : XMLHttpRequest();
            return (p.open(t, a ? function(t) {
                return window.location.protocol + "//" + t.replace(/^https?:\/\//, "")
            }(e) : e, !0), p.withCredentials = Boolean(o.withCredentials), function(t, e) {
                e = e || {},
                    n.each(n.keys(e), function(i) {
                        e[i] && t.setRequestHeader && t.setRequestHeader(i, e[i])
                    })
            }(p, o.headers), a ? (p.onerror = function() {
                r["catch"].apply(r, s(p))
            }
                ,
                p.onload = function(t, e) {
                    return function() {
                        t.then.apply(t, s(e))
                    }
                }(r, p)) : p.onreadystatechange = function(t, e) {
                return function() {
                    4 === e.readyState && (e.status >= 200 && e.status < 300 ? t.then.apply(t, s(e)) : t["catch"].apply(t, s(e)))
                }
            }(r, p), p.send(l(i)), r.abort = function() {
                return p.abort()
            }, r)
        }
        function s(t) {
            var e;
            try {
                e = JSON.parse(t.responseText)
            } catch (i) {
                e = t.responseText
            }
            return [e, t]
        }
        function l(t) {
            return n.isObject(t) ? o.toQueryParams(t) : t
        }
        e["default"] = function(t, e, i) {
            var o = n.extend(r, t);
            !function t(n) {
                return function(t) {
                    var e = t.baseUrl
                        , i = t.url;
                    return a(t.method, e + i, t.data, arguments[0])
                }(o).then(e)["catch"](function(e) {
                    0 === n ? i(e) : t(n - 1)
                })
            }(o.retryLimit)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(114);
        e.calcVisibilityTime = function(t) {
            if (t && "exposureTimeout"in t) {
                var e = parseInt(t.exposureTimeout, 10);
                if (!isNaN(e)) {
                    return e;
                }
            }
            return 7 * n.DEFAULT_INTERVAL
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(23);
        e.hasDimensions = function(t) {
            var e = n.getBoundingClientRect(t)
                , i = e.width
                , o = e.height;
            return i > 0 && o > 0
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = i(7), r = (n = o) && n.__esModule ? n : {
            default: n
        };
        var a = i(0)
            , s = i(1)
            , l = a.createComponent(s, {
            name: "yap-address",
            shouldRender: function() {
                return this.props.adv.vcardUrl
            },
            _render: function(t, e, i) {
                return a.create("yatag", {
                    class: t(e["class"], t(), this.mod)
                }, a.create(i.Link, {
                    class: t("__link yap-link"),
                    target: "_blank",
                    href: e.adv.vcardUrl
                }, a.create(i.HTML, {
                    text: (0,
                        r["default"])("ADDRESS_AND_PHONE", this.props.language)
                })))
            }
        });
        t.exports = l
    }, function(t, e, i) {
        "use strict";
        var n, o = i(7), r = (n = o) && n.__esModule ? n : {
            default: n
        };
        var a = i(0)
            , s = i(1)
            , l = i(459)
            , p = a.createComponent(s, {
            name: "yap-region",
            shouldRender: function() {
                var t = this.props.adv;
                return t.region || !this.props.noMetro && t.metro || !this.props.noGeo && t.geoDistance
            },
            afterRender: function() {
                this.pushStyles(l)
            },
            _render: function(t, e, i) {
                var n = e.adv
                    , o = [];
                return (!this.props.noMetro && n.metro ? o.push(a.create(i.Container, null, a.create(i.HTML, {
                    text: (0,
                        r["default"])("METRO", this.props.language)
                }), "\xa0", n.metro)) : n.region && o.push(n.region), !this.props.noGeo && n.geoDistance && o.push(a.create(i.Geo, {
                    class: t("__geo"),
                    adv: n
                })), o.length ? a.create("yatag", {
                    class: t(e["class"], t(), this.mod)
                }, a.create(i.Separate, {
                    separator: ", "
                }, o)) : null)
            }
        }, {
            Separate: i(460),
            Geo: i(461)
        });
        t.exports = p
    }, function(t, e, i) {
        "use strict";
        var n = i(71)
            , o = i(79)
            , r = {}
            , a = !0;
        t.exports = {
            hitOnce: function(t, e) {
                if (!r[t]) {
                    var i = o("metrika_yan", function(t) {
                        t.hit(window.location.href, {
                            referer: document.referrer
                        })
                    });
                    n.getCounter({
                        id: t,
                        isYAN: !0,
                        disableCookies: a
                    }, i),
                        r[t] = !0
                }
            }
        }
    }, function(t, e) {
        function i(t, e) {
            var i = []
                , n = [];
            return (null == e && ((e = function(t, e) {
                    return i[0] === e ? "[Circular ~]" : "[Circular ~." + n.slice(0, i.indexOf(e)).join(".") + "]"
                })
            ), function(o, r) {
                if (i.length > 0) {
                    var a = i.indexOf(this);
                    ~a ? i.splice(a + 1) : i.push(this),
                        ~a ? n.splice(a, 1 / 0, o) : n.push(o),
                    ~i.indexOf(r) && (r = e.call(this, o, r))
                } else {
                    i.push(r);
                }
                return null == t ? r : t.call(this, o, r)
            })
        }
        ((t.exports = function(t, e, n, o) {
                return JSON.stringify(t, i(e, o), n)
            })
        ).getSerialize = i
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getOrCreateItem = function(t, e, i) {
                var n = t.getItem(e);
                return (n || (n = i(e),
                    t.setItem(e, n)), n)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = function() {
            function t(t) {
                this.obj = t
            }
            return (t.prototype.getItem = function(t) {
                return this.obj[t]
            }, t.prototype.setItem = function(t, e) {
                this.obj[t] = e
            }, t)
        }();
        e.ObjectStorage = n
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o = i(168)
        , r = i(117)
        , a = i(284)
        , s = i(286)
        , l = i(172)
        , p = i(69)
        , c = i(288)
        , d = i(291)
        , u = i(44)
        , m = i(292)
        , f = i(176)
        , h = i(294)
        , g = i(295)
        , _ = i(296);
    e.SEPARATE_SIGN = "_",
        e.CREATE_TAGS_FOR_STATS_DEFAULT = function(t) {
            var i, o = t.eventType, r = t.eventName, a = t.value, s = t.values, l = {};
            return (u.forOwn(s, function(t, i) {
                l["" + o + e.SEPARATE_SIGN + r + e.SEPARATE_SIGN + i] = t
            }), n(((i = {})["" + o + e.SEPARATE_SIGN + r] = a,
                i), l))
        }
    var y = function() {
        function t(t) {
            var e = this;
            this.rootFields = {},
                this.event = function(t) {
                    var i = t.name
                        , n = t.data
                        , o = t.labels
                        , r = t.probability;
                    e.push({
                        eventType: _.StatsEventType.event,
                        eventName: i,
                        data: n,
                        additionalStatsLabels: o,
                        probability: r
                    })
                }
                ,
                this.error = function(t) {
                    var i = t.error
                        , n = t.labels
                        , o = t.probability
                        , a = new r.CustomError(i);
                    e.push({
                        eventName: String(a.code),
                        eventType: _.StatsEventType.error,
                        data: a,
                        additionalStatsLabels: n,
                        probability: o
                    })
                }
                ,
                this.value = function(t) {
                    var i = t.name
                        , n = t.value
                        , o = t.data
                        , r = t.labels
                        , a = t.probability;
                    e.push({
                        eventName: i,
                        value: n,
                        eventType: _.StatsEventType.value,
                        data: o,
                        additionalStatsLabels: r,
                        probability: a
                    })
                }
                ,
                this.values = function(t) {
                    var i = t.name
                        , n = t.values
                        , o = t.data
                        , r = t.labels
                        , a = t.probability;
                    e.push({
                        eventName: i,
                        eventType: _.StatsEventType.values,
                        data: o,
                        additionalStatsLabels: r,
                        probability: a,
                        values: n
                    })
                }
                ,
                this.warning = function(t) {
                    var i = t.name
                        , n = t.message
                        , o = t.probability;
                    "undefined" != typeof console && "function" == typeof console.warn && console.warn(n),
                        e.push({
                            eventName: i,
                            eventType: _.StatsEventType.warning,
                            data: {
                                message: n
                            },
                            probability: o
                        })
                }
                ,
                this.getParams = function() {
                    return n({}, e.params)
                }
                ,
                this.setRootField = function(t, i) {
                    void 0 === i ? delete e.rootFields[t] : e.rootFields[t] = i
                }
                ,
                this.eventToStats = function(t, i, n) {
                    e.push({
                        eventType: _.StatsEventType.event,
                        eventName: t,
                        data: i,
                        additionalStatsLabels: n
                    })
                }
                ,
                this.errorToStats = function(t, i) {
                    var n = new r.CustomError(t);
                    e.push({
                        eventName: String(n.code),
                        eventType: _.StatsEventType.error,
                        data: n,
                        additionalStatsLabels: i
                    })
                }
                ,
                this.deprecated = function(t, i) {
                    "undefined" != typeof console && "function" == typeof console.warn && console.warn(i),
                        e.push({
                            eventName: t,
                            eventType: _.StatsEventType.deprecated,
                            data: {
                                message: i
                            }
                        })
                }
                ,
                this.valueToStats = function(t, i, n, o) {
                    e.push({
                        eventName: t,
                        value: i,
                        eventType: _.StatsEventType.value,
                        data: n,
                        additionalStatsLabels: o
                    })
                }
                ,
                this.params = n({}, t, {
                    sid: t.sid || p.generateHexString(h.DEFAULT_SID_LENGTH)
                })
        }
        return (t.prototype.push = function(t) {
            var e = t.eventName
                , i = t.eventType
                , n = t.data
                , r = void 0 === n ? {} : n
                , a = t.additionalStatsLabels
                , s = t.value
                , l = void 0 === s ? 1 : s
                , p = t.probability
                , c = void 0 === p ? 1 : p
                , u = t.values
                , h = void 0 === u ? {} : u;
            if (m.portion(c)) {
                var _ = {
                    service: this.params.service,
                    version: this.params.version,
                    data: r,
                    eventName: e,
                    eventType: i,
                    additionalStatsLabels: a,
                    value: l,
                    values: h
                };
                try {
                    d.request({
                        url: f.addParamToUrl(g.PCODE_LOGS_URL, i, e),
                        data: o(this.createFullStatsObject(_)),
                        method: "POST",
                        onBeforeSend: this.params.onBeforeSend
                    })
                } catch (t) {
                    "undefined" != typeof console && "function" == typeof console.error && console.error("Failed to push stats with data [" + r + "], error [" + t + "]")
                }
            }
        }, t.prototype.createFullStatsObject = function(t) {
            var i = t.service
                , o = t.version
                , r = t.eventName
                , p = t.eventType
                , d = t.data
                , u = t.additionalStatsLabels
                , m = t.value
                , f = s.getTopLocationData(document)
                , h = f.location
                , g = f.referrer
                , _ = this.params.createTagsFunction || e.CREATE_TAGS_FOR_STATS_DEFAULT;
            return n({}, this.rootFields, {
                service: i,
                tags: _(t),
                labels: n({
                    version: this.params.version
                }, u),
                timestamp: Date.now(),
                eventType: p,
                eventName: r,
                data: d,
                sid: this.params.sid,
                version: o,
                location: l.getWindowLocation(window),
                topLocation: h,
                referrer: window.document.referrer,
                topReferrer: g,
                userAgent: window.navigator.userAgent,
                currentScriptSrc: a.CURRENT_SCRIPT_SRC,
                secureIFrame: c.isInSecureIFrame,
                value: m
            })
        }, t)
    }();
    e.Stats = y;
}, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getWindowLocation = function(t) {
                if (t && t.location) {
                    var e = t.location;
                    return "function" == typeof e.toString ? e.toString() : e.href || ""
                }
                return ""
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(174);
        e.getParentFriendlyIFrames = function(t, e) {
            if ((void 0 === e && (e = !0), n.isSafari && e)) {
                return [];
            }
            for (var i = [], o = t; ; ) {
                try {
                    if (!(o = o.ownerDocument.defaultView.frameElement)) {
                        return i;
                    }
                    i.push(o)
                } catch (t) {
                    return i
                }
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(175);
        e.isSafari = n.isSafari()
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.isSafari = function(t) {
                void 0 === t && (t = window);
                var e = t.navigator.userAgent.toLowerCase();
                return -1 !== e.indexOf("safari") && -1 === e.indexOf("chrome") && -1 === e.indexOf("android") && -1 === e.indexOf("phantomjs")
            }
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o = i(48)
        , r = i(105)
        , a = i(44)
        , s = document.createElement("a");
    function l(t) {
        s.href = t;
        var e = s.pathname || "";
        return ("/" !== e.charAt(0) && (e = "/" + e), {
            href: s.href,
            protocol: s.protocol,
            host: s.host,
            hostname: s.hostname,
            port: s.port,
            pathname: e,
            search: s.search,
            hash: s.hash
        })
    }
    function p(t) {
        var e = "443" === t.port ? t.hostname : t.host;
        return t.protocol + "//" + e + t.pathname + t.search + t.hash
    }
    e.parseUrlUsingCache = r.memoize(function(t) {
        var e = l(t);
        return n({}, e)
    }),
        e.parseUrl = l;
    var c = function(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    };
    function d(t) {
        for (var e = {}, i = t.replace(/^\?+/, "").split("&"), n = 0; n < i.length; n += 1) {
            var o = i[n].indexOf("=")
                , r = void 0
                , a = void 0;
            if (-1 === o ? (r = i[n],
                a = "") : (r = i[n].slice(0, o),
                a = i[n].slice(o + 1)),
                r) {
                var s = Boolean(/(\[\])$/.exec(r));
                r = r.replace(/\[\]$/, ""),
                    s ? void 0 === e[r] ? e[r] = [c(a)] : e[r] = [].concat(e[r], c(a)) : e[r] = c(a)
            }
        }
        return e
    }
    e.parseQueryString = d,
        e.getParamsFromUrl = function(t) {
            return d(l(t).search)
        }
    var u = function(t, e) {
        return e.map(function(e) {
            return t + "[]=" + encodeURIComponent(e)
        }).join("&")
    };
    function m(t) {
        var e = [];
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var n = t[i];
                o.isArray(n) ? e.push(u(i, n)) : void 0 !== n && e.push(i + "=" + encodeURIComponent(n))
            }
        return "?" + e.join("&")
    }
    function f(t) {
        return l(t).pathname.split("/").pop() || ""
    }
    e.formatQueryString = m,
        e.addParamToUrl = function(t, e, i) {
            if (void 0 === i) {
                return t;
            }
            var o = l(t)
                , r = d(o.search);
            return (r[e] = i, p(n({}, o, {
                search: m(r)
            })))
        }
        ,
        e.addParamsToUrl = function(t, e, i) {
            var o = (void 0 === i ? {} : i).override
                , r = void 0 === o || o
                , s = l(t)
                , c = d(s.search);
            a.forOwn(e, function(t, e) {
                (void 0 === c[e] || r) && (c[e] = t)
            });
            var u = m(c);
            return p(n({}, s, {
                search: u
            }))
        }
        ,
        e.getFileName = f,
        e.getFileExt = function(t) {
            var e = f(t).split(".");
            return e.length > 1 ? e.pop() : ""
        }
}, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(121);
        e.getNativeMethod = function(t, e) {
            var i = t[e];
            if (!n.checkNativeCode(i)) {
                var o = i;
                try {
                    delete t[e];
                    var r = t[e];
                    "function" == typeof r && (i = r),
                        t[e] = o
                } catch (t) {}
            }
            return i
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(302);
        e.getIsYaBrowser = function(t) {
            return (void 0 === t && (t = window), /YaBrowser/.test(n.getUserAgent(t)))
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.isWindowsPhone = function(t) {
                return (void 0 === t && (t = window), /Windows Phone/i.test(t.navigator.userAgent))
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.prefixes = ["", "webkit", "moz", "o", "ms"],
            e.cssPrefixes = ["", "-webkit-", "-ms-", "-moz-", "-o-"]
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.onBeforeSend = function(t, e) {
                t.setRequestHeader("x-aab-jstracer", e.url.length.toString()),
                    t.setRequestHeader("x-aab-http-check", "1")
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(13)
            , o = i(77);
        e.loadImage = function(t) {
            var e = new Image();
            n.isFunction(t.onLoad) && o.on(e, "load", t.onLoad, t.ctx),
            n.isFunction(t.onError) && o.on(e, "error", t.onError, t.ctx),
                e.src = t.src
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(177);
        e.addEventListenerFunction = function(t, e, i) {
            t.attachEvent("on" + e, i)
        }
            ,
            e.removeEventListenerFunction = function(t, e, i) {
                t.detachEvent("on" + e, i)
            }
            ,
        n.getNativeMethod(document, "addEventListener") && ((e.addEventListenerFunction = function(t, e, i, o) {
                n.getNativeMethod(t, "addEventListener").call(t, e, i, o)
            }, e.removeEventListenerFunction = function(t, e, i, o) {
            n.getNativeMethod(t, "removeEventListener").call(t, e, i, o)
        })
        )
    }, function(t, e, i) {
        "use strict";
        var n = i(123);
        t.exports = function(t, e, i) {
            if (!e) {
                var o = document.createElement("script");
                return (o.charset = "utf-8", o.src = t, "function" == typeof i && (o.onload = i), (0,
                    n.getHead)(window).appendChild(o), o)
            }
            document.write('<script type="text/javascript" charset="utf-8" src="{SRC}"><\/script>'.replace("{SRC}", t))
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.hslToRgb = function(t, e, i) {
                var n, o;
                if ((t /= 360, i /= 100, 0 == (e /= 100))) {
                    return [n = 255 * i, n, n];
                }
                for (var r, a = 2 * i - (o = i < 0.5 ? i * (1 + e) : i + e - i * e), s = [0, 0, 0], l = 0; l < 3; l += 1) {
                    (r = t + 1 / 3 * -(l - 1)) < 0 && (r += 1),
                    r > 1 && (r -= 1),
                        n = 6 * r < 1 ? a + 6 * (o - a) * r : 2 * r < 1 ? o : 3 * r < 2 ? a + (o - a) * (2 / 3 - r) * 6 : a,
                        s[l] = 255 * n;
                }
                return s
            }
    }, function(t, e, i) {
        "use strict";
        var n = i(187)
            , o = i(27);
        t.exports = n(Object, "create") ? Object.create : function(t, e) {
            function i() {}
            if ((i.prototype = t, o(e))) {
                for (var n in e)
                    e.hasOwnProperty(n) && (i[n] = e[n]);
            }
            return new i()
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(188);
        t.exports = function(t, e) {
            var i = t[e];
            if (!n(i)) {
                var o = i;
                try {
                    delete t[e],
                        i = t[e],
                        t[e] = o
                } catch (t) {}
            }
            return i
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(121).checkNativeCode
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.getElementById = function(t) {
                return document.getElementById(t)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0,
            e.hasShadowDomSupport = function() {
                return Boolean(document.head.attachShadow)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(26);
        e.unique = function(t) {
            for (var e = {}, i = 0; i < t.length; i += 1) {
                e[t[i]] = i;
            }
            return n.getObjectKeys(e)
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(44)
            , o = i(58)
            , r = new RegExp(["box-flex", "box-flex-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-positive", "flex-shrink", "flex-negative", "font-weight", "line-height", "opacity", "order", "z-index", "zoom"].join("|"),"i");
        function a(t, e, i, n) {
            if (void 0 !== i && void 0 !== e) {
                var o = n ? "important" : "";
                i += !r.test(e) && i >>> 0 ? "px" : "",
                    t.style.setProperty ? t.style.setProperty(e, i, o) : t.style.cssText += ";" + e + ":" + i + (o ? "!" + o : "")
            }
        }
        e.setStyle = function(t, e, i, r) {
            o.isObject(e) ? (r = Boolean(i),
                n.forOwn(e, function(e, i) {
                    a(t, i, e, r)
                })) : a(t, e, i, r)
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(126).getWindowSize
    }, function(t, e, i) {
        "use strict";
        var n = i(94).requestAnimationFrame
            , o = {
            linear: function(t, e, i, n) {
                return i * t / n + e
            }
        };
        t.exports = function(t) {
            var e, i, r, a = !0;
            return (e = function(e) {
                var i = (0,
                    o[t.easing || "linear"])(e, t.start, t.end - t.start, t.duration)
                    , n = e < t.duration;
                return (t.onFrame(n ? i : t.end), n && a)
            }, i = t.onEnd, r = new Date(), function t() {
                e(new Date() - r) ? n(t) : i && i()
            }(), {
                stop: function() {
                    a = !1
                }
            })
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(127);
        function o() {}
        o.prototype = {
            callRendering: n,
            shouldRender: n,
            beforeRender: n,
            render: n,
            afterRender: n
        },
            t.exports = o
    }, function(t, e, i) {
        "use strict";
        var n = new (i(355))();
        t.exports = {
            push: function(t, e) {
                n.push(t, e)
            },
            executeAll: function() {
                n.executeAll()
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n = {
            element: i(198),
            container: i(63),
            html: i(145)
        };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = i(49)
            , o = i(10)
            , r = i(41)
            , a = i(61)
            , s = i(125)
            , l = s.NS
            , p = s.AttributeNames
            , c = s.AttributeNamespace
            , d = /^on(.+)/
            , u = o.augment(n, {
            constructor: function() {
                this.__handlers = {},
                    n.apply(this, arguments)
            },
            unmount: function() {
                this.unbindAll();
                var t = this._element;
                t.parentNode && t.parentNode.removeChild(t),
                    n.prototype.unmount.apply(this)
            },
            initProps: function(t) {
                return (this.tag = t.tag || "div", delete t.tag, o.forOwn(t, function(e, i) {
                    if (d.test(i)) {
                        var n = i.match(d)[1].toLowerCase();
                        this.__handlers[n] = e,
                            delete t[i]
                    }
                }, this), t)
            },
            beforeRender: function(t) {
                var e = this.tag;
                this._element = t.write(e, "svg" === e ? l.svg : null),
                    this._namespaceURI = this._element.namespaceURI,
                    this._applyProps()
            },
            afterRender: function(t) {
                t.end(),
                    this._initHandlers()
            },
            _applyProps: function() {
                o.forOwn(this.props, function(t, e) {
                    "style" === e && o.isObject(t) ? this.setStyle(t) : null != t && this.setAttr(e, t)
                }, this)
            },
            _initHandlers: function() {
                var t = this.getContextComponent()
                    , e = this.__handlers;
                o.forOwn(e, function(e, i) {
                    this.bind(i, e, t)
                }, this)
            },
            getElement: function() {
                return this._element
            },
            hasClass: function(t) {
                return a.hasClass(this._element, t)
            },
            addClass: function(t) {
                a.addClass(this._element, t)
            },
            removeClass: function(t) {
                a.removeClass(this._element, t)
            },
            toggleClass: function(t, e) {
                a.toggleClass(this._element, t, e)
            },
            setStyle: function(t, e) {
                a.setStyle(this._element, t, e)
            },
            setAttr: function(t, e) {
                if ("class" === t) {
                    a.clearClasses(this._element),
                        this.addClass(e);
                } else {
                    if (this._namespaceURI === l.svg) {
                        var i = c[t];
                        if (i) {
                            return void this._element.setAttributeNS(i, p[t] || t, e);
                        }
                    }
                    this._element.setAttribute(t, e)
                }
            },
            getAttr: function(t) {
                return this._element.getAttribute(t)
            },
            bind: function(t, e, i) {
                var n = this.getElement();
                return (this._domEvents || (this._domEvents = []), this._domEvents.push(r.on(n, t, e, i || this)), this)
            },
            unbindAll: function() {
                this._domEvents && (o.each(this._domEvents, function(t) {
                    r.un(t)
                }),
                    this._domEvents = [])
            }
        });
        t.exports = u
    }, function(t, e, i) {
        "use strict";
        var n = i(10)
            , o = /^([_-]\w+)/;
        t.exports = function(t) {
            return function() {
                if (!arguments.length) {
                    return t;
                }
                var e = [];
                return (n.each(arguments, function(i) {
                    if (n.isString(i)) {
                        var r = i.split(/\s+/);
                        e.push(n.map(r, function(e) {
                            return e.replace(o, function() {
                                return t + arguments[1]
                            })
                        }).join(" "))
                    }
                }), e.join(" "))
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(363)
            , o = i(10)
            , r = Array.prototype.slice
            , a = {
            destroy: function() {
                this.stopListening(),
                    this.__base()
            },
            fireEvent: function(t) {
                var e, i = r.call(arguments, 1), n = o.camelize("on:" + t), a = this;
                do {
                    var s = a[n];
                    o.isFunction(s) && (e = s.apply(a, i)),
                        a = a.getContextComponent()
                } while (!1 !== e && a);!1 !== e && this.trigger.apply(this, arguments)
            }
        };
        o.extend(a, n),
            t.exports = a
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(0);
        e.renderAdtuneCrossIcon = function(t, e) {
            return n.create("svg", {
                width: t.width + "px",
                height: t.height + "px",
                viewBox: "0 0 14 14"
            }, n.create("polygon", {
                style: {
                    fill: e
                },
                points: "14,0.7 13.3,0 7,6.299 0.7,0 0,0.7 6.3,7 0,13.299 0.7,14 7,7.7 13.3,14 14,13.299 7.7,7"
            }))
        }
            ,
            e.renderDoneIcon = function() {
                return n.create("svg", {
                    width: "18",
                    height: "18"
                }, n.create("path", {
                    d: "M5.485 11.07L2.45 8.037 1.036 9.45l3.035 3.035-.034.036 1.414 1.415 8.485-8.485-1.414-1.414-7.035 7.035z"
                }))
            }
            ,
            e.YANDEX_LOGO = {
                render: function() {
                    return n.create("svg", {
                        viewBox: "0 0 171 35"
                    }, n.create("path", {
                        d: "M8.4 17.258L3.55 28H0l5.324-11.48c-2.524-1.24-4.18-3.528-4.18-7.717C1.144 2.947 4.93 0 9.425 0H14v28h-3.076V17.258H8.4zM10.963 2.56H9.346c-2.484 0-4.85 1.59-4.85 6.282 0 4.499 2.208 5.972 4.85 5.972h1.617V2.56zM28.526 8.311v19.8H25.53v-8.87h-4.495v8.87H18V8.31h3.035v8.402h4.495V8.311h2.996zM41.357 32v-3.89h-8.375V32h-2.727v-6.418h1.19c1.768-4.201 1.998-10.347 1.998-15.598V8.31h9.066v17.27h1.537V32h-2.689zm-1.806-21.2h-3.38v.35c0 4.163-.192 10.27-1.806 14.47h5.186V10.8zM52.46 28.383c-4.033 0-6.53-3.267-6.53-9.335 0-6.38 1.728-11.008 5.916-11.008 3.265 0 5.378 2.49 5.378 9.18v1.672h-8.144c0 4.474 1.229 6.846 3.65 6.846 1.69 0 3.072-.778 3.84-1.322l.692 2.373c-1.268.972-2.881 1.594-4.802 1.594zm-3.342-11.98h4.994c0-3.384-.538-5.835-2.305-5.835-1.844 0-2.497 2.295-2.689 5.835zm14.214 1.828v9.88h-3.035V8.311h3.035v9.141l4.687-9.14h3.073l-4.84 9.296 5.532 10.502h-3.304l-5.148-9.88zm8.874-.039C72.205 11.968 74.587 8 79.158 8c1.73 0 2.766.467 3.612 1.011l-.423 2.918c-.807-.7-1.998-1.362-3.227-1.362-2.19 0-3.726 2.49-3.726 7.469 0 4.94 1.152 7.78 3.61 7.78 1.46 0 2.613-.584 3.305-1.207L83 26.904c-1.037.895-2.305 1.478-4.072 1.478-4.226 0-6.723-3.423-6.723-10.19zM99.28 28.302H87.72L87.46 33H86v-6.342h.786c1.309-1.135 1.982-4.306 2.356-8.338.374-4.188.486-10.452.599-18.32h9.426v26.658H101V33h-1.459l-.262-4.698zM97.26 1.644h-5.873c-.113 7.164-.3 12.605-.599 16.676-.337 4.228-.935 7.047-1.983 8.338h8.417V1.644h.037zM113.213 14.078c0-1.02.08-1.882.159-2.745h-.12c-.277.863-.635 1.687-1.071 2.589L105.588 28H104V8.04h1.747v13.842c0 1.06-.08 1.922-.159 2.824h.12c.278-.902.675-1.765 1.072-2.667L113.372 8H115v20h-1.787V14.078zM120.753 27.303V35H119V8.399h1.529l.149 3.35c.82-1.914 2.237-3.749 4.325-3.749 3.17 0 4.997 4.068 4.997 9.93 0 7.458-2.35 11.128-5.892 11.128-1.38 0-2.61-.758-3.355-1.755zm7.494-9.213c0-5.304-1.342-8.455-3.542-8.455-1.678 0-3.132 1.914-3.952 4.108v11.366c.745 1.635 1.79 2.473 3.505 2.473 2.423 0 3.99-3.07 3.99-9.492zM139.275 27.375c2.684 0 4.065-2.179 4.065-2.179l.592 1.506S142.432 29 139.236 29C134.973 29 133 25.117 133 18.5S135.486 8 138.84 8c3.474 0 5.684 3.645 5.052 10.817h-9.077c.119 5.547 1.54 8.558 4.46 8.558zm-4.38-10.024h7.3c.316-5.35-1.262-7.766-3.315-7.766-2.13 0-3.828 2.734-3.986 7.766zM149.873 28H148V8h1.873v9.391L156.688 8h1.834l-6.696 9.273L159 28h-2.112l-7.055-10.373V28zM166.452 9.532V28h-1.827V9.532H160V8h11v1.532z"
                    }))
                },
                renderSmall: function() {
                    return n.create("svg", {
                        viewBox: "0 0 14 28"
                    }, n.create("path", {
                        d: "M8.4 17.258L3.55 28H0l5.324-11.48c-2.524-1.24-4.18-3.528-4.18-7.717C1.144 2.947 4.93 0 9.425 0H14v28h-3.076V17.258H8.4zM10.963 2.56H9.346c-2.484 0-4.85 1.59-4.85 6.282 0 4.499 2.208 5.972 4.85 5.972h1.617V2.56z"
                    }))
                }
            }
    }, function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , o = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var r = i(4);
    e.parseAllowRepeatAds = function(t) {
        var e;
        if ("object" === (void 0 === t ? "undefined" : n(t))) {
            e = o({}, t);
            var i = t.screen;
            i && (e.screen = Number(i) || (r.isMobile ? i.mobile : i.desktop))
        } else {
            e = {
                maxSkipSize: 0
            };
        }
        return (e.custom = !0, e)
    }
}, function(t, e, i) {
        "use strict";
        var n, o = ((n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
                    new i())
        })
        );
        e.__esModule = !0;
        var r = i(34)
            , a = i(28)
            , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (o(e, t), e.prototype.toString = function() {
                return a.getNativeJSON(window).stringify(this.config)
            }, e.prototype.setTitle = function(t) {
                var e = t.font
                    , i = t.titlePercent
                    , n = t.titleBold
                    , o = r.dom.getComputedFontSize(this.element);
                if (o) {
                    var a = e * parseInt(i, 10) / 100;
                    this.set("title_size", Math.round(a * o)),
                        this.set("title_bold", n ? 1 : 0)
                }
            }, e.prototype.getIsFirstScreen = function() {
                return this.isFirstScreen
            }, e)
        }(i(376).LayoutConfig);
        e["default"] = s
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(378)
            , o = i(379)
            , r = i(9)
            , a = i(11)
            , s = i(5)
            , l = i(380)
            , p = i(110)
            , c = i(70)
            , d = "yabs."
            , u = "awaps."
            , m = "\n"
            , f = {
            awaps: "",
            yabs: []
        }
            , h = null
            , g = new n.AdList()
            , _ = new n.AdList();
        var y, b = function() {
            function t(t) {
                var e = t.maxSkipSize
                    , i = void 0 === e ? 9 : e
                    , n = t.screen
                    , r = t.custom;
                this.id = r ? 1 : 0,
                    this.ssSkipTokenLength = p.isSsSkipToken ? {
                        value: i,
                        custom: r
                    } : void 0,
                    this.getNearbyAds = n ? function(t, e) {
                            return o.getSurroundingAds(t, n, e, function() {
                                return !0
                            })
                        }
                        : function(t) {
                            return s.map(t.slice(t.length - i), function(t) {
                                return t.adId
                            })
                        }
            }
            return (t.prototype.capture = function(t) {
                g.add(t)
            }, t.prototype.release = function(t) {
                g.remove(t)
            }, t.prototype.getCapturedCount = function() {
                return g.items().length
            }, t.prototype.captureDirect = function(t) {
                var e = l.difference(t, _.items());
                a.forEach(e, function(t) {
                    _.add(t)
                })
            }, t.prototype.getUnusableAds = function(t, e) {
                void 0 === e && (e = []);
                var i = {};
                a.forEach(e, function(t) {
                    return i[t] = !0
                });
                var n = r.filter(g.items(), function(t) {
                    var e = t.adId;
                    return !i[e]
                });
                return this.getNearbyAds(n, t)
            }, t.prototype.saveAdFilter = function(t, e) {
                var i = function(t) {
                    var e = t ? t.split(":") : []
                        , i = {
                        awaps: "",
                        yabs: []
                    };
                    return (a.forEach(e, function(t) {
                        if (-1 !== t.indexOf(u)) {
                            i.awaps = t.split(".")[1];
                        } else if (-1 !== t.indexOf(d)) {
                            var e = t.split(".")[1];
                            e.length > 0 && (i.yabs = c.decode(e).split(m))
                        }
                    }), i)
                }(t);
                f.awaps = i.awaps,
                e && (f.yabs = i.yabs)
            }, t.limitYabs = function(t, e) {
                var i = t.length - e;
                return i > 0 ? t.slice(i) : t
            }, t.prototype.getSkipToken = function(e, i) {
                h !== window.location.href && (f = {
                    awaps: "",
                    yabs: []
                },
                    h = window.location.href);
                var n, o, r = this.getUnusableAds(e, i), a = l.difference(f.yabs, _.items()), s = t.limitYabs(a.concat(r), 50), p = {
                    awaps: f.awaps,
                    yabs: s
                };
                return (o = [], (n = p).awaps && o.push(u + n.awaps), n.yabs.length && o.push(d + c.encode(n.yabs.join(m))), o.join(":"))
            }, t.prototype.getSkipBanner = function(t, e) {
                return this.getUnusableAds(t, e).join("\n")
            }, t)
        }();
        e.setAllowRepeatAds = function(t) {
            p.isSsSkipTokenServerAuto || (y = t)
        }
            ,
            e.getAdUsageStorage = function(t) {
                var e = y || t && t.allowRepeatAds || {};
                return new b(e)
            }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(46)
            , o = i(112)
            , r = 36e5;
        e.getMarkerIsValidStat = function(t) {
            return (e = n.getYaContext().initTime, Number(new Date()) - e < r ? t : o.PRODUCT_MARKERS.LONG_SESSION);
            var e
        }
    }, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(207)
        , o = i(4)
        , r = i(3).protect
        , a = []
        , s = n.getScriptConfigFactory({
        appliedDataList: a,
        isGoodBrowser: !o.isOperaMini,
        host: window.location.host,
        getRtbConfig: n.getRtbConfig
    });
    e.startCookieMatching = function(t) {
        var e = r("cookie-matching", function() {
            return function(t) {
                var e = n.parseCookieMatchingData(t)
                    , i = s(e);
                i && (a.push(e),
                    n.injectScript(i))
            }(t)
        });
        setTimeout(e, 0)
    }
    var l = i(207);
    e.COOKIE_MATCHING_FOR = l.COOKIE_MATCHING_FOR;
}, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o = i(65)
        , r = i(16)
        , a = i(8)
        , s = i(28)
        , l = i(45)
        , p = i(396)
        , c = i(397);
    function d(t) {
        return Boolean(t && "1" === t)
    }
    function u(t) {
        return ["<scr", "ipt>", "var config=" + s.getNativeJSON(window).stringify(t), "</scr", "ipt>", "<scr", "ipt>", c, "</scr", "ipt>"].join("")
    }
    e.COOKIE_MATCHING_FOR = {
        RTB_DSP: "rtb-dsp",
        DIRECT: "dir-direct",
        DIRECT_IN_RTB: "rtb-direct"
    },
        e.parseCookieMatchingData = function(t) {
            var e = t.bundle
                , i = t.serviceName
                , n = t.commonData
                , o = void 0 === n ? {} : n
                , r = t.matchUrls;
            return {
                bundle: e,
                serviceName: i,
                matchUrls: void 0 === r ? [] : r,
                isMobileSdk: d(o.isMobileSdk),
                isYandexPage: d(o.isYandexPage)
            }
        }
        ,
        e.getRtbConfig = function(t) {
            var i = t.host
                , n = t.appliedDataList
                , o = t.serviceName
                , a = t.bundle
                , s = t.matchUrls;
            if ("adblock" !== a && o !== e.COOKIE_MATCHING_FOR.DIRECT && !p.isCookieHostIgnored(i) && !r.some(n, function(t) {
                return t.serviceName !== e.COOKIE_MATCHING_FOR.DIRECT
            })) {
                return {
                    matchUrls: s
                }
            }
        }
        ,
        e.getOpenedFor = function(t) {
            var e = t.serviceName;
            return t.isYandexPage ? "oo-" + e : "net-" + e
        }
        ,
        e.getScriptConfigFactory = function(t) {
            return function(e) {
                var i = n({}, t, e)
                    , o = i.isGoodBrowser
                    , r = i.getRtbConfig
                    , a = i.serviceName
                    , s = i.isMobileSdk
                    , l = i.bundle;
                if (a && o && !s && "mailru-plugin" !== l && "ssp" !== l) {
                    var p = {
                        rtb: r(i)
                    };
                    for (var c in p)
                        if (p[c]) {
                            return p;
                        }
                }
            }
        }
        ,
        e.getScriptHtml = u,
        e.injectScript = function(t) {
            var e = document.createElement("div");
            document.body.appendChild(e),
                e.style.position = "fixed",
                e.style.left = "-99px";
            var i = document.createElement("div");
            e.appendChild(i);
            var n = {
                width: 1,
                height: 1,
                html: u(t)
            }
                , r = window;
            o.initSafeframe(r, i, n, void 0, void 0, function(t, e) {
                "error" === t && l.isString(e.type) && -1 === e.type.indexOf("SafeframeResourceError") && a.logger.error({
                    name: t,
                    message: e
                }, "match.tpl.ts")
            })
        }
}, function(t, e, i) {
        "use strict";
        var n = i(14)
            , o = i(38)
            , r = i(50)
            , a = h(i(249))
            , s = i(206)
            , l = i(23)
            , p = i(65)
            , c = i(8)
            , d = h(i(398))
            , u = i(53)
            , m = i(204)
            , f = i(399);
        function h(t) {
            if (t && t.__esModule) {
                return t;
            }
            var e = {};
            if (null != t) {
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return (e["default"] = t, e)
        }
        var g = i(3)
            , _ = i(131)
            , y = i(6)
            , b = i(2)
            , v = i(250)
            , x = i(424)
            , w = i(215).parse
            , k = i(427)
            , C = i(71)
            , I = i(36)
            , S = i(18)
            , A = i(32)
            , O = i(25).isLongExperiment
            , E = i(19).experimentIds;
        function T(t, e) {
            this._isPlainDirect = t,
                this._blocks = {},
                this._onAdAbused = e.onAdAbused
        }
        function R(t) {
            var e = t.getUsedAdvs()
                , i = [];
            return (e && b.each(e, function(t) {
                i.push(t.adId)
            }), i)
        }
        T.prototype.setData = function(t) {
            this._data = t,
                this._visibilityManager = new x(),
                this._timestamp = new Date(),
                this._reloadTimeout = this._data.common && this._data.common.reloadTimeout ? Number(this._data.common.reloadTimeout) : y.defaultReloadTimeout
        }
            ,
            T.prototype.dataCanReload = function() {
                return !this._timestamp || new Date() - this._timestamp > 1e3 * this._reloadTimeout
            }
            ,
            T.prototype.resetTimeout = function() {
                this._timestamp = null
            }
            ,
            T.prototype.getBlocksToRerender = function() {
                var t = [];
                return (b.forOwn(this._blocks, function(e, i) {
                    e && e.isInViewport && e.isVisibilityConfirmed && e.isVisibilityConfirmed() && e.isInViewport() && t.push(i)
                }), t)
            }
            ,
            T.prototype.getBlocks = function() {
                var t = [];
                return (b.forOwn(this._blocks, function(e) {
                    t.push(e)
                }), t)
            }
            ,
            T.prototype.render = function(t, e, i) {
                var o = this
                    , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (((0,
                    n.logRenderLabel)(t.uniqueId, n.BlockRenderSteps.DirectManagerStart), r.horizontalAlign || (r.horizontalAlign = Boolean(t.horizontalAlign)), Boolean(A.querySelector("#" + t.renderTo)))) {
                    (0,
                        s.startCookieMatching)({
                        serviceName: t.inRTB ? s.COOKIE_MATCHING_FOR.DIRECT_IN_RTB : s.COOKIE_MATCHING_FOR.DIRECT,
                        commonData: this._data.common,
                        matchUrls: this._data.matchUrls,
                        bundle: t.bundle
                    });
                    var a = I.getRenderId(t);
                    if ((this._removeOldBlock(a), this._data && this._data[t.product])) {
                        var l = e.bannerIds
                            , p = String(e.limit);
                        if (this._data.direct && this._data.direct.ads && ("1" === p || l && 1 === l.length) && d.canReplaceBlock(e.name)) {
                            var m = (0,
                                u.getAdUsageStorage)(t)
                                , h = this._data.direct.ads;
                            if (!t.blockId) {
                                var g = m.getUnusableAds(t);
                                h = b.filter(h, function(t) {
                                    return -1 === b.inArray(g, t.adId)
                                })
                            }
                            if (h.length > 0) {
                                var _ = h[0]
                                    , y = _.oid;
                                if (y && d.isOrderIdInExperiment(y)) {
                                    var v = {
                                        adId: _.adId,
                                        renderTo: t.renderTo,
                                        pageNumber: t.pageNumber
                                    };
                                    return (m.capture(v), void (0,
                                        f.checkCspForVideo)("https://an.yandex.ru/get-video-an/69130/15d111aaa89/82bb6c153e3b9529/240p.mp4", function(n) {
                                        m.release(v),
                                            !1 === n ? (_.isAbilityForRmp = !0,
                                                O(E.rmp.RMP_ABILITIES) ? (_.isNewRmpAbilities = !0,
                                                    e.isRmp = !0,
                                                    c.logger.rmp("RMP_WILL_DRAW"),
                                                    o._createBlockRmp(t, e, i, r, _, y)) : o._createBlockWrapper(t, e, i, r)) : o._createBlockWrapper(t, e, i, r);
                                        var a = "CSP_UNDEFINED";
                                        void 0 !== n && (a = n ? "CSP_ON" : "CSP_OFF"),
                                            c.logger.rmp(a)
                                    }))
                                }
                            }
                        }
                        this._createBlockWrapper(t, e, i, r)
                    } else {
                        i && i();
                    }
                } else {
                    c.logger.warn(new Error("Render to node is null (" + t.pageId + ")(" + (t.blockId ? t.blockId : "") + ")"), "DirectManager::render");
                }
            }
            ,
            T.prototype._createBlockWrapper = function(t, e, i, r) {
                var a = this
                    , s = I.getRenderId(t);
                (0,
                    n.logRenderLabel)(t.uniqueId, n.BlockRenderSteps.DirectManagerInitEnd),
                    this._createBlock({
                        cfg: t,
                        rawSettings: e,
                        renderParams: r,
                        callback: function(c) {
                            (0,
                                n.logRenderLabel)(t.uniqueId, n.BlockRenderSteps.DirectManagerChooseBlockType),
                            c && (a._blocks[s] = c,
                                c.render(function() {
                                    if ((0,
                                        n.logRenderLabel)(t.uniqueId, n.BlockRenderSteps.DirectManagerBlockRendered),
                                        (0,
                                            o.sendLabel)(t.uniqueId),
                                        "modernAdaptive" === e.name ? a._renderModernAdaptive(t, e, i, r) : (a._runOnRenderCallback(c, t.onRender, r.confirmByHandler),
                                            a._logToMetrika(c, t.bundle)),
                                        (0,
                                            p.isInSafeframe)(window)) {
                                        var s = (0,
                                            l.getBoundingClientRect)(A.querySelector("#" + t.renderTo))
                                            , d = s.width
                                            , u = s.height;
                                        (0,
                                            p.updateSafeframeSize)(window, {
                                            width: d,
                                            height: u
                                        })
                                    }
                                }))
                        }
                    })
            }
            ,
            T.prototype._createBlockRmp = function(t, e, i, n, o, r) {
                var a = this
                    , s = {
                    adId: o.adId,
                    renderTo: t.renderTo,
                    pageNumber: t.pageNumber
                }
                    , l = (0,
                    u.getAdUsageStorage)(t);
                l.capture(s),
                    d.getData(g.protect("DirectManager:RMP:getData", function(p) {
                        var u = d.getCompanyByOId(r);
                        c.logger.rmp("RMP_DREW"),
                            d.addExperimentalRmpProperties(o, p[u]),
                            l.release(s),
                            a._createBlockWrapper(t, e, i, n)
                    }))
            }
            ,
            T.prototype._renderModernAdaptive = function(t, e, i, n) {
                var o = this
                    , r = document.getElementById(t.renderTo)
                    , s = r ? r.clientWidth : 0
                    , l = I.getRenderId(t)
                    , p = void 0
                    , c = !0;
                if (!a.isWideBlock(s)) {
                    var d = r.clientHeight;
                    c = a.isCorrectHeight(s, d, e.adaptiveType)
                }
                c ? (p = this._blocks[l],
                    this._runOnRenderCallback(p, t.onRender, n.confirmByHandler),
                    this._logToMetrika(p, t.bundle)) : (e.width = s,
                    e.height = a.getHeight(s, e.adaptiveType),
                    e.name = "adaptive",
                    this._blocks[l].destructor(),
                    this._blocks[l] = null,
                    this._createBlock({
                        cfg: t,
                        rawSettings: e,
                        renderParams: n,
                        callback: function(e) {
                            e && (o._blocks[l] = e,
                                e.render(function() {
                                    o._runOnRenderCallback(e, t.onRender, n.confirmByHandler),
                                        o._logToMetrika(e, t.bundle)
                                }))
                        }
                    }))
            }
            ,
            T.prototype._removeOldBlock = function(t) {
                this._blocks[t] && (this._blocks[t].destructor(),
                    this._blocks[t] = null)
            }
            ,
            T.prototype._runOnRenderCallback = function(t, e, i) {
                if (e) {
                    var n = {
                        lang: t.dataSource.getLanguage(),
                        product: y.Products.DIRECT,
                        confirmVisibility: function() {
                            i && t.createVisibilityConfirmer()
                        }
                    };
                    t.dataSource.isApp() && (n.testTag = t.getTesttag()),
                        e(n)
                }
            }
            ,
            T.prototype._logToMetrika = function(t) {
                if (Ya.Context.LOG_DIRECT && this._isPlainDirect) {
                    var e = {
                        error: "Maybe not rendered"
                    };
                    try {
                        var i = t.getMainCont();
                        i && (e = {
                            limit: t.settings.limit,
                            block: t.settings.format.name,
                            width: i.clientWidth || -1,
                            height: i.clientHeight || -1
                        })
                    } catch (t) {
                        e.error = t.message
                    }
                    var n = g.protect("metrika_direct", function(t) {
                        t.hit(window.location.href, {
                            params: e
                        })
                    });
                    C.getCounter({
                        id: 37850170
                    }, n)
                }
            }
            ,
            T.prototype.getUsedIds = function(t) {
                var e = [];
                return (t && this._blocks[t] ? e = e.concat(R(this._blocks[t])) : b.forOwn(this._blocks, function(t) {
                    t && (e = e.concat(R(t)))
                }), e)
            }
            ,
            T.prototype._createBlock = function(t) {
                var e = this
                    , i = t.cfg
                    , n = t.rawSettings
                    , o = t.renderParams
                    , r = t.callback;
                this._getFormatObject({
                    rawSettings: n,
                    cfg: i,
                    callback: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e._createBlockByFormat({
                            formatObject: t,
                            createBlockCallback: r,
                            cfg: i,
                            renderParams: o,
                            rawSettings: n
                        })
                    }
                })
            }
            ,
            T.prototype._createBlockByFormat = function(t) {
                var e = this
                    , i = t.formatObject
                    , o = t.createBlockCallback
                    , a = t.cfg
                    , s = t.renderParams
                    , l = t.rawSettings;
                if (null === i) {
                    return o(null);
                }
                var p = this._getSettings(i, l, a);
                if (null === p) {
                    return o(null);
                }
                var c = new v({
                    uniqueId: a.uniqueId,
                    product: a.product,
                    data: this._data,
                    statId: a.statId,
                    settings: p,
                    visibilityManager: this._visibilityManager,
                    blockId: a.blockId,
                    renderTo: a.renderTo,
                    pageId: a.pageId,
                    pageNumber: a.pageNumber,
                    adfoxexp: a.adfoxexp,
                    clickMacro: a.clickMacro,
                    searchText: a.searchText,
                    allowRepeatAds: a.allowRepeatAds,
                    isInOverlay: a.isInOverlay,
                    designId: l.designId,
                    onAdAbused: function() {
                        for (var t = arguments.length, i = Array(t), n = 0; n < t; n += 1) {
                            i[n] = arguments[n];
                        }
                        e._handleAdAbuse.apply(e, [a].concat(i))
                    }
                });
                if (c.isEmpty()) {
                    return ((0,
                        n.stopLoggingTime)(a.uniqueId), o(null));
                }
                var d = a.blockId
                    , u = !1;
                d && (u = (0,
                    r.isFakeImpId)(I.parseBlockId(d).impId)),
                d && !u || (d = (a.renderTo + "-" + p.format.className).replace(/[^-\w]/g, "-")),
                    o(new i.constructor(c,p,a.renderTo,d,a.cspNonce,a.pageNumber,s))
            }
            ,
            T.prototype.destructor = function() {
                b.forOwn(this._blocks, function(t) {
                    t.destructor()
                }),
                    this._blocks = {}
            }
            ,
            T.prototype._handleAdAbuse = function() {
                if (this._onAdAbused && S(this._onAdAbused)) {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i += 1) {
                        e[i] = arguments[i];
                    }
                    this._onAdAbused.apply(this, [this].concat(e))
                }
            }
            ,
            T.prototype.slideUp = function(t, e) {
                var i = this
                    , n = this._blocks[t];
                n.slideUp && n.slideUp(function() {
                    i._blocks[t].destructor(),
                        delete i._blocks[t],
                        e()
                })
            }
            ,
            T.prototype._getFormatObject = function(t) {
                var e = t.rawSettings
                    , i = t.callback
                    , n = e.name;
                k.build(n, {
                    width: _.getValidNumber(e.width),
                    height: _.getValidNumber(e.height)
                }, function(t) {
                    e.isRmp ? k.build("rmpVideo", {
                        width: _.getValidNumber(e.width),
                        height: _.getValidNumber(e.height)
                    }, function(e) {
                        e.format.index = t.format.index,
                            i(t = e)
                    }) : i(t)
                })
            }
            ,
            T.prototype._getSettings = function(t, e, i) {
                var n = t.format;
                n.blockId = i.blockId;
                var o = w(n, e, i.directSettings);
                return o ? ((0,
                    m.setAllowRepeatAds)(o.allowRepeatAds),
                    o) : null
            }
            ,
            t.exports = T
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(42)
            , o = ["demo-auth.wi-fi.ru", "dev-auth.wi-fi.ru", "auth.wi-fi.ru", "wi-fi.ru"];
        e["default"] = function(t) {
            var e = t.location.hostname;
            return n(o, e) > -1
        }
    }, function(t, e, i) {
    "use strict";
    var n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i += 1) {
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t
        }
    e.__esModule = !0;
    var o = i(5)
        , r = i(135);
    e.combineStrategies = function() {
        for (var t = [], e = 0; e < arguments.length; e += 1) {
            t[e] = arguments[e];
        }
        return function() {
            function e(e) {
                var i = this;
                this.args = e,
                    this.runningCount = 0,
                    this.callback = function(t, e) {
                        var n = t + 1;
                        e ? n === i.strategies.length ? i.args.callback(e) : n === i.runningCount && i.startNext() : (i.stopUntil(n),
                            i.args.callback(e))
                    }
                    ,
                    this.strategies = o.map(t, function(t, o) {
                        return r.protectStrategy(new t(n({}, e, {
                            callback: function(t) {
                                return i.callback(o, t)
                            }
                        })))
                    })
            }
            return (e.prototype.init = function() {
                for (var t = 0, e = this.strategies; t < e.length; t += 1) {
                    e[t].init()
                }
            }, e.prototype.start = function() {
                !this.runningCount && this.strategies.length && this.startNext()
            }, e.prototype.stop = function() {
                this.stopUntil(0)
            }, e.prototype.startNext = function() {
                this.strategies[this.runningCount += 1].start()
            }, e.prototype.stopUntil = function(t) {
                for (; this.runningCount > t; ) {
                    this.strategies[this.runningCount -= 1].stop();
                }
            }, e)
        }()
    }
}, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(135);
        e.defineIntervalStrategy = function(t) {
            return function() {
                function e(t) {
                    this.args = t
                }
                return (e.prototype.init = function() {}, e.prototype.start = function() {
                    var e = this;
                    this.timer = setInterval(n.protect(function() {
                        e.args.callback(t(e.args))
                    }), this.args.interval)
                }, e.prototype.stop = function() {
                    clearInterval(this.timer)
                }, e)
            }()
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(16)
            , o = i(4)
            , r = i(23)
            , a = i(211);
        function s(t, e) {
            if (o.isOperaMini) {
                return !1;
            }
            var i = r.getBoundingClientRect(t)
                , a = i.left
                , s = i.right
                , l = i.top
                , p = i.bottom
                , c = s - a
                , d = p - l;
            return !n.some(e, function(e) {
                var i = e[0]
                    , n = e[1]
                    , o = a + (c - 1) * (1 + i) / 2
                    , r = l + (d - 1) * (1 + n) / 2
                    , s = document.elementFromPoint(o, r);
                return !s || t === s || t.contains(s)
            })
        }
        e.OverlayStrategy = a.defineIntervalStrategy(function(t) {
            return !s(t.element, t.overlappedPoints)
        }),
            e.isOverlapped = s
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(129)
            , o = i(41)
            , r = o.on
            , a = o.un
            , s = function() {
            function t(t) {
                var e = this;
                this.args = t,
                    this.callback = function() {
                        e.args.callback(!(e.args.allowIntersectionObserver && n.isHidden()))
                    }
            }
            return (t.prototype.init = function() {}, t.prototype.start = function() {
                var t = this;
                this.timer = setTimeout(function() {
                    t.callback(),
                        t.subscription = r(document, n.changeEventName, t.callback)
                })
            }, t.prototype.stop = function() {
                clearTimeout(this.timer),
                    a(this.subscription)
            }, t)
        }();
        e.DocumentVisibilityStrategy = s
    }, function(t, e, i) {
        "use strict";
        var n = i(113)
            , o = i(62)
            , r = i(425)
            , a = i(2)
            , s = i(24);
        function l(t) {
            this._pageId = t.pageId,
                this._viewNotices = t.viewNotices,
                this._winNotice = t.winNotice,
                this._linkTail = t.linkTail
        }
        l.prototype = {
            confirm: function() {
                var t = this
                    , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this._linkTail && !this._isConfirmSent) {
                    var i = e.testtagProps
                        , r = e.renderSize
                        , l = e.formatType
                        , p = e.extParams
                        , c = {
                        "test-tag": new n.RtbTesttag(i).toString(),
                        "format-type": l,
                        rnd: a.genRnd()
                    };
                    r && (c.renderWidth = r.width,
                        c.renderHeight = r.height),
                        a.extend(c, p);
                    var d = new s({
                        host: this._linkTail,
                        params: c
                    });
                    (0,
                        o.sendPixel)(d.getUrl(), function() {
                        t._viewNotices && t._viewNotices.length && t._getExternalUrlManager().confirm(t._viewNotices)
                    }),
                        this._isConfirmSent = !0
                }
            },
            sendWinNotice: function() {
                !this._isWinNoticeSent && this._winNotice && (this._getExternalUrlManager().confirm(this._winNotice),
                    this._isWinNoticeSent = !0)
            },
            _getExternalUrlManager: function() {
                return (this._externalUrlManager || (this._externalUrlManager = new r.RtbExternalUrlManager()), this._externalUrlManager)
            }
        },
            t.exports = l
    }, ]);



const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');


let knobDragged;
let prevAngleRad = null;
let prevRotate = null;

const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
const panelCountScens = document.querySelectorAll('.scenarios__panel').length;
const pageCountScens = document.querySelectorAll('.scenarios__page').length;
const scenarios = document.querySelector('.scenarios');
const pagiantorScens = document.querySelector('.scenarios__paginator');
let currentPage = 1;




const selectButton = document.querySelector('.filter__select-button');
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');



let widths = '';
window.addEventListener('scroll', function() {
    widths += document.querySelectorAll('body')[0].offsetWidth;

});

selectOptions.forEach(o => {
    o.addEventListener('click', function(e) {
        document.querySelector('#' + e.target.dataset.group).checked = true;

        selectOptions.forEach(opt => opt.classList.toggle('filter__select-item_checked', false));
        e.target.classList.toggle('filter__select-item_checked', true);
        popup.classList.toggle('filter__select-popup_open', false);
        selectButtonText.innerText = e.target.innerText;
    })
});

$(document).ready(function(){

    var carousel = $("#carousel");

    carousel.owlCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
    setTimeout(function() {
        const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
        const purchaseListContainer = document.createElement('div');
        const purchaseListTitle = document.createElement('p');
        const purchaseList = document.createElement('ol');
        const purchaseListItemOne = document.createElement('li');
        const purchaseListItemTwo = document.createElement('li');

        purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
        purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical');
        purchaseListTitle.textContent = 'Список покупок:';
        purchaseList.setAttribute('class', 'purchase-list');
        purchaseListItemOne.setAttribute('class', 'purchase-list__item');
        purchaseListItemOne.textContent = 'Хлеб';
        purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
        purchaseListItemTwo.textContent = 'Молоко';

        purchaseListContainer.appendChild(purchaseListTitle);
        purchaseListContainer.appendChild(purchaseList);
        purchaseList.appendChild(purchaseListItemOne);
        purchaseList.appendChild(purchaseListItemTwo);

        confirmPurchaseButton.onclick = () => {
            fridgeInfoContainer.replaceWith(purchaseListContainer)
            buttonsContainer.style.display = "none";
        }
    }, 500)
   

    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
}, !1);
