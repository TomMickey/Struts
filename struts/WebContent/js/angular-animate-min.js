/*
 AngularJS v1.5.5
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (S, q) {
    'use strict';
    function Aa(a, b, c) {
        if (!a)throw Ma("areq", b || "?", c || "required");
        return a
    }

    function Ba(a, b) {
        if (!a && !b)return "";
        if (!a)return b;
        if (!b)return a;
        ba(a) && (a = a.join(" "));
        ba(b) && (b = b.join(" "));
        return a + " " + b
    }

    function Na(a) {
        var b = {};
        a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
        return b
    }

    function X(a, b, c) {
        var d = "";
        a = ba(a) ? a : a && P(a) && a.length ? a.split(/\s+/) : [];
        r(a, function (a, f) {
            a && 0 < a.length && (d += 0 < f ? " " : "", d += c ? b + a : a + b)
        });
        return d
    }

    function Oa(a) {
        if (a instanceof G)switch (a.length) {
            case 0:
                return [];
            case 1:
                if (1 === a[0].nodeType)return a;
                break;
            default:
                return G(ca(a))
        }
        if (1 === a.nodeType)return G(a)
    }

    function ca(a) {
        if (!a[0])return a;
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (1 == c.nodeType)return c
        }
    }

    function Pa(a, b, c) {
        r(b, function (b) {
            a.addClass(b, c)
        })
    }

    function Qa(a, b, c) {
        r(b, function (b) {
            a.removeClass(b, c)
        })
    }

    function U(a) {
        return function (b, c) {
            c.addClass && (Pa(a, b, c.addClass), c.addClass = null);
            c.removeClass && (Qa(a, b, c.removeClass), c.removeClass = null)
        }
    }

    function pa(a) {
        a = a || {};
        if (!a.$$prepared) {
            var b = a.domOperation ||
                Q;
            a.domOperation = function () {
                a.$$domOperationFired = !0;
                b();
                b = Q
            };
            a.$$prepared = !0
        }
        return a
    }

    function ga(a, b) {
        Ca(a, b);
        Da(a, b)
    }

    function Ca(a, b) {
        b.from && (a.css(b.from), b.from = null)
    }

    function Da(a, b) {
        b.to && (a.css(b.to), b.to = null)
    }

    function V(a, b, c) {
        var d = b.options || {};
        c = c.options || {};
        var e = (d.addClass || "") + " " + (c.addClass || ""), f = (d.removeClass || "") + " " + (c.removeClass || "");
        a = Ra(a.attr("class"), e, f);
        c.preparationClasses && (d.preparationClasses = Y(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
        e = d.domOperation !== Q ? d.domOperation : null;
        Ea(d, c);
        e && (d.domOperation = e);
        d.addClass = a.addClass ? a.addClass : null;
        d.removeClass = a.removeClass ? a.removeClass : null;
        b.addClass = d.addClass;
        b.removeClass = d.removeClass;
        return d
    }

    function Ra(a, b, c) {
        function d(a) {
            P(a) && (a = a.split(" "));
            var b = {};
            r(a, function (a) {
                a.length && (b[a] = !0)
            });
            return b
        }

        var e = {};
        a = d(a);
        b = d(b);
        r(b, function (a, b) {
            e[b] = 1
        });
        c = d(c);
        r(c, function (a, b) {
            e[b] = 1 === e[b] ? null : -1
        });
        var f = {addClass: "", removeClass: ""};
        r(e, function (b, c) {
            var d, e;
            1 === b ? (d = "addClass",
                e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]);
            e && (f[d].length && (f[d] += " "), f[d] += c)
        });
        return f
    }

    function D(a) {
        return a instanceof q.element ? a[0] : a
    }

    function Sa(a, b, c) {
        var d = "";
        b && (d = X(b, "ng-", !0));
        c.addClass && (d = Y(d, X(c.addClass, "-add")));
        c.removeClass && (d = Y(d, X(c.removeClass, "-remove")));
        d.length && (c.preparationClasses = d, a.addClass(d))
    }

    function qa(a, b) {
        var c = b ? "-" + b + "s" : "";
        la(a, [ma, c]);
        return [ma, c]
    }

    function ta(a, b) {
        var c = b ? "paused" : "", d = Z + "PlayState";
        la(a, [d, c]);
        return [d, c]
    }

    function la(a, b) {
        a.style[b[0]] =
            b[1]
    }

    function Y(a, b) {
        return a ? b ? a + " " + b : a : b
    }

    function Fa(a, b, c) {
        var d = Object.create(null), e = a.getComputedStyle(b) || {};
        r(c, function (a, b) {
            var c = e[a];
            if (c) {
                var s = c.charAt(0);
                if ("-" === s || "+" === s || 0 <= s)c = Ta(c);
                0 === c && (c = null);
                d[b] = c
            }
        });
        return d
    }

    function Ta(a) {
        var b = 0;
        a = a.split(/\s*,\s*/);
        r(a, function (a) {
            "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
            a = parseFloat(a) || 0;
            b = b ? Math.max(a, b) : a
        });
        return b
    }

    function ua(a) {
        return 0 === a || null != a
    }

    function Ga(a, b) {
        var c = T, d = a + "s";
        b ? c += "Duration" : d += " linear all";
        return [c, d]
    }

    function Ha() {
        var a = Object.create(null);
        return {
            flush: function () {
                a = Object.create(null)
            }, count: function (b) {
                return (b = a[b]) ? b.total : 0
            }, get: function (b) {
                return (b = a[b]) && b.value
            }, put: function (b, c) {
                a[b] ? a[b].total++ : a[b] = {total: 1, value: c}
            }
        }
    }

    function Ia(a, b, c) {
        r(c, function (c) {
            a[c] = da(a[c]) ? a[c] : b.style.getPropertyValue(c)
        })
    }

    var Q = q.noop, Ja = q.copy, Ea = q.extend, G = q.element, r = q.forEach, ba = q.isArray, P = q.isString, va = q.isObject, C = q.isUndefined, da = q.isDefined, Ka = q.isFunction, wa = q.isElement, T, xa, Z, ya;
    C(S.ontransitionend) &&
    da(S.onwebkittransitionend) ? (T = "WebkitTransition", xa = "webkitTransitionEnd transitionend") : (T = "transition", xa = "transitionend");
    C(S.onanimationend) && da(S.onwebkitanimationend) ? (Z = "WebkitAnimation", ya = "webkitAnimationEnd animationend") : (Z = "animation", ya = "animationend");
    var ra = Z + "Delay", za = Z + "Duration", ma = T + "Delay", La = T + "Duration", Ma = q.$$minErr("ng"), Ua = {
            transitionDuration: La,
            transitionDelay: ma,
            transitionProperty: T + "Property",
            animationDuration: za,
            animationDelay: ra,
            animationIterationCount: Z + "IterationCount"
        },
        Va = {transitionDuration: La, transitionDelay: ma, animationDuration: za, animationDelay: ra};
    q.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
        return {
            restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function (b, d, e, f, z) {
                var B, s;
                b.$watchCollection(e.ngAnimateSwap || e["for"], function (e) {
                    B && a.leave(B);
                    s && (s.$destroy(), s = null);
                    if (e || 0 === e)s = b.$new(), z(s, function (b) {
                        B = b;
                        a.enter(b, null, d)
                    })
                })
            }
        }
    }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
        return {
            link: function (b,
                            c, d) {
                function e(a) {
                    c.data("$$ngAnimateChildren", "on" === a || "true" === a)
                }

                var f = d.ngAnimateChildren;
                q.isString(f) && 0 === f.length ? c.data("$$ngAnimateChildren", !0) : (e(a(f)(b)), d.$observe("ngAnimateChildren", e))
            }
        }
    }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
        function b(a) {
            d = d.concat(a);
            c()
        }

        function c() {
            if (d.length) {
                for (var b = d.shift(), z = 0; z < b.length; z++)b[z]();
                e || a(function () {
                    e || c()
                })
            }
        }

        var d, e;
        d = b.queue = [];
        b.waitUntilQuiet = function (b) {
            e && e();
            e = a(function () {
                e = null;
                b();
                c()
            })
        };
        return b
    }]).provider("$$animateQueue",
        ["$animateProvider", function (a) {
            function b(a) {
                if (!a)return null;
                a = a.split(" ");
                var b = Object.create(null);
                r(a, function (a) {
                    b[a] = !0
                });
                return b
            }

            function c(a, c) {
                if (a && c) {
                    var d = b(c);
                    return a.split(" ").some(function (a) {
                        return d[a]
                    })
                }
            }

            function d(a, b, c, d) {
                return f[a].some(function (a) {
                    return a(b, c, d)
                })
            }

            function e(a, b) {
                var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length;
                return b ? c && d : c || d
            }

            var f = this.rules = {skip: [], cancel: [], join: []};
            f.join.push(function (a, b, c) {
                return !b.structural && e(b)
            });
            f.skip.push(function (a,
                                  b, c) {
                return !b.structural && !e(b)
            });
            f.skip.push(function (a, b, c) {
                return "leave" == c.event && b.structural
            });
            f.skip.push(function (a, b, c) {
                return c.structural && 2 === c.state && !b.structural
            });
            f.cancel.push(function (a, b, c) {
                return c.structural && b.structural
            });
            f.cancel.push(function (a, b, c) {
                return 2 === c.state && b.structural
            });
            f.cancel.push(function (a, b, d) {
                if (d.structural)return !1;
                a = b.addClass;
                b = b.removeClass;
                var e = d.addClass;
                d = d.removeClass;
                return C(a) && C(b) || C(e) && C(d) ? !1 : c(a, d) || c(b, e)
            });
            this.$get = ["$$rAF", "$rootScope",
                "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, f, v, I, Wa, u, sa, w, x) {
                    function R() {
                        var a = !1;
                        return function (b) {
                            a ? b() : c.$$postDigest(function () {
                                a = !0;
                                b()
                            })
                        }
                    }

                    function J(a, b, c) {
                        var g = D(b), d = D(a), k = [];
                        (a = h[c]) && r(a, function (a) {
                            ia.call(a.node, g) ? k.push(a.callback) : "leave" === c && ia.call(a.node, d) && k.push(a.callback)
                        });
                        return k
                    }

                    function k(a, b, c) {
                        var g = ca(b);
                        return a.filter(function (a) {
                            return !(a.node === g && (!c || a.callback === c))
                        })
                    }

                    function p(a, k, h) {
                        function l(c, g, d, h) {
                            f(function () {
                                var c = J(oa, a, g);
                                c.length ? b(function () {
                                    r(c, function (b) {
                                        b(a, d, h)
                                    });
                                    "close" !== d || a[0].parentNode || N.off(a)
                                }) : "close" !== d || a[0].parentNode || N.off(a)
                            });
                            c.progress(g, d, h)
                        }

                        function A(b) {
                            var c = a, g = m;
                            g.preparationClasses && (c.removeClass(g.preparationClasses), g.preparationClasses = null);
                            g.activeClasses && (c.removeClass(g.activeClasses), g.activeClasses = null);
                            F(a, m);
                            ga(a, m);
                            m.domOperation();
                            p.complete(!b)
                        }

                        var m = Ja(h), x, oa;
                        if (a = Oa(a))x = D(a), oa = a.parent();
                        var m =
                            pa(m), p = new u, f = R();
                        ba(m.addClass) && (m.addClass = m.addClass.join(" "));
                        m.addClass && !P(m.addClass) && (m.addClass = null);
                        ba(m.removeClass) && (m.removeClass = m.removeClass.join(" "));
                        m.removeClass && !P(m.removeClass) && (m.removeClass = null);
                        m.from && !va(m.from) && (m.from = null);
                        m.to && !va(m.to) && (m.to = null);
                        if (!x)return A(), p;
                        h = [x.className, m.addClass, m.removeClass].join(" ");
                        if (!Xa(h))return A(), p;
                        var s = 0 <= ["enter", "move", "leave"].indexOf(k), t = v[0].hidden, w = !g || t || H.get(x);
                        h = !w && y.get(x) || {};
                        var I = !!h.state;
                        w ||
                        I && 1 == h.state || (w = !K(a, oa, k));
                        if (w)return t && l(p, k, "start"), A(), t && l(p, k, "close"), p;
                        s && L(a);
                        t = {
                            structural: s,
                            element: a,
                            event: k,
                            addClass: m.addClass,
                            removeClass: m.removeClass,
                            close: A,
                            options: m,
                            runner: p
                        };
                        if (I) {
                            if (d("skip", a, t, h)) {
                                if (2 === h.state)return A(), p;
                                V(a, h, t);
                                return h.runner
                            }
                            if (d("cancel", a, t, h))if (2 === h.state)h.runner.end(); else if (h.structural)h.close(); else return V(a, h, t), h.runner; else if (d("join", a, t, h))if (2 === h.state)V(a, t, {}); else return Sa(a, s ? k : null, m), k = t.event = h.event, m = V(a, h, t), h.runner
                        } else V(a,
                            t, {});
                        (I = t.structural) || (I = "animate" === t.event && 0 < Object.keys(t.options.to || {}).length || e(t));
                        if (!I)return A(), O(a), p;
                        var ia = (h.counter || 0) + 1;
                        t.counter = ia;
                        M(a, 1, t);
                        c.$$postDigest(function () {
                            var b = y.get(x), c = !b, b = b || {}, g = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));
                            if (c || b.counter !== ia || !g) {
                                c && (F(a, m), ga(a, m));
                                if (c || s && b.event !== k)m.domOperation(), p.end();
                                g || O(a)
                            } else k = !b.structural && e(b, !0) ? "setClass" : b.event, M(a, 2), b = Wa(a, k, b.options), p.setHost(b), l(p, k, "start", {}), b.done(function (b) {
                                A(!b);
                                (b = y.get(x)) && b.counter === ia && O(D(a));
                                l(p, k, "close", {})
                            })
                        });
                        return p
                    }

                    function L(a) {
                        a = D(a).querySelectorAll("[data-ng-animate]");
                        r(a, function (a) {
                            var b = parseInt(a.getAttribute("data-ng-animate")), c = y.get(a);
                            if (c)switch (b) {
                                case 2:
                                    c.runner.end();
                                case 1:
                                    y.remove(a)
                            }
                        })
                    }

                    function O(a) {
                        a = D(a);
                        a.removeAttribute("data-ng-animate");
                        y.remove(a)
                    }

                    function l(a, b) {
                        return D(a) === D(b)
                    }

                    function K(a, b, c) {
                        c = G(v[0].body);
                        var g = l(a, c) || "HTML" === a[0].nodeName, d = l(a, f), h = !1, k, e = H.get(D(a));
                        (a = G.data(a[0], "$ngAnimatePin")) &&
                        (b = a);
                        for (b = D(b); b;) {
                            d || (d = l(b, f));
                            if (1 !== b.nodeType)break;
                            a = y.get(b) || {};
                            if (!h) {
                                var p = H.get(b);
                                if (!0 === p && !1 !== e) {
                                    e = !0;
                                    break
                                } else!1 === p && (e = !1);
                                h = a.structural
                            }
                            if (C(k) || !0 === k)a = G.data(b, "$$ngAnimateChildren"), da(a) && (k = a);
                            if (h && !1 === k)break;
                            g || (g = l(b, c));
                            if (g && d)break;
                            if (!d && (a = G.data(b, "$ngAnimatePin"))) {
                                b = D(a);
                                continue
                            }
                            b = b.parentNode
                        }
                        return (!h || k) && !0 !== e && d && g
                    }

                    function M(a, b, c) {
                        c = c || {};
                        c.state = b;
                        a = D(a);
                        a.setAttribute("data-ng-animate", b);
                        c = (b = y.get(a)) ? Ea(b, c) : c;
                        y.put(a, c)
                    }

                    var y = new I, H = new I,
                        g = null, oa = c.$watch(function () {
                            return 0 === sa.totalPendingRequests
                        }, function (a) {
                            a && (oa(), c.$$postDigest(function () {
                                c.$$postDigest(function () {
                                    null === g && (g = !0)
                                })
                            }))
                        }), h = {}, A = a.classNameFilter(), Xa = A ? function (a) {
                            return A.test(a)
                        } : function () {
                            return !0
                        }, F = U(w), ia = S.Node.prototype.contains || function (a) {
                                return this === a || !!(this.compareDocumentPosition(a) & 16)
                            }, N = {
                            on: function (a, b, c) {
                                var g = ca(b);
                                h[a] = h[a] || [];
                                h[a].push({node: g, callback: c});
                                G(b).on("$destroy", function () {
                                    y.get(g) || N.off(a, b, c)
                                })
                            }, off: function (a,
                                              b, c) {
                                if (1 !== arguments.length || q.isString(arguments[0])) {
                                    var g = h[a];
                                    g && (h[a] = 1 === arguments.length ? null : k(g, b, c))
                                } else for (g in b = arguments[0], h)h[g] = k(h[g], b)
                            }, pin: function (a, b) {
                                Aa(wa(a), "element", "not an element");
                                Aa(wa(b), "parentElement", "not an element");
                                a.data("$ngAnimatePin", b)
                            }, push: function (a, b, c, g) {
                                c = c || {};
                                c.domOperation = g;
                                return p(a, b, c)
                            }, enabled: function (a, b) {
                                var c = arguments.length;
                                if (0 === c)b = !!g; else if (wa(a)) {
                                    var d = D(a), h = H.get(d);
                                    1 === c ? b = !h : H.put(d, !b)
                                } else b = g = !!a;
                                return b
                            }
                        };
                    return N
                }]
        }]).provider("$$animation",
        ["$animateProvider", function (a) {
            function b(a) {
                return a.data("$$animationRunner")
            }

            var c = this.drivers = [];
            this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, e, f, z, B, s) {
                function v(a) {
                    function b(a) {
                        if (a.processed)return a;
                        a.processed = !0;
                        var d = a.domNode, L = d.parentNode;
                        e.put(d, a);
                        for (var f; L;) {
                            if (f = e.get(L)) {
                                f.processed || (f = b(f));
                                break
                            }
                            L = L.parentNode
                        }
                        (f || c).children.push(a);
                        return a
                    }

                    var c = {children: []}, d, e = new B;
                    for (d = 0; d < a.length; d++) {
                        var f = a[d];
                        e.put(f.domNode,
                            a[d] = {domNode: f.domNode, fn: f.fn, children: []})
                    }
                    for (d = 0; d < a.length; d++)b(a[d]);
                    return function (a) {
                        var b = [], c = [], d;
                        for (d = 0; d < a.children.length; d++)c.push(a.children[d]);
                        a = c.length;
                        var e = 0, f = [];
                        for (d = 0; d < c.length; d++) {
                            var x = c[d];
                            0 >= a && (a = e, e = 0, b.push(f), f = []);
                            f.push(x.fn);
                            x.children.forEach(function (a) {
                                e++;
                                c.push(a)
                            });
                            a--
                        }
                        f.length && b.push(f);
                        return b
                    }(c)
                }

                var I = [], q = U(a);
                return function (u, B, w) {
                    function x(a) {
                        a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
                        var b = [];
                        r(a, function (a) {
                            var c =
                                a.getAttribute("ng-animate-ref");
                            c && c.length && b.push(a)
                        });
                        return b
                    }

                    function R(a) {
                        var b = [], c = {};
                        r(a, function (a, g) {
                            var d = D(a.element), e = 0 <= ["enter", "move"].indexOf(a.event), d = a.structural ? x(d) : [];
                            if (d.length) {
                                var k = e ? "to" : "from";
                                r(d, function (a) {
                                    var b = a.getAttribute("ng-animate-ref");
                                    c[b] = c[b] || {};
                                    c[b][k] = {animationID: g, element: G(a)}
                                })
                            } else b.push(a)
                        });
                        var d = {}, e = {};
                        r(c, function (c, h) {
                            var k = c.from, f = c.to;
                            if (k && f) {
                                var p = a[k.animationID], y = a[f.animationID], l = k.animationID.toString();
                                if (!e[l]) {
                                    var x = e[l] =
                                    {
                                        structural: !0, beforeStart: function () {
                                        p.beforeStart();
                                        y.beforeStart()
                                    }, close: function () {
                                        p.close();
                                        y.close()
                                    }, classes: J(p.classes, y.classes), from: p, to: y, anchors: []
                                    };
                                    x.classes.length ? b.push(x) : (b.push(p), b.push(y))
                                }
                                e[l].anchors.push({out: k.element, "in": f.element})
                            } else k = k ? k.animationID : f.animationID, f = k.toString(), d[f] || (d[f] = !0, b.push(a[k]))
                        });
                        return b
                    }

                    function J(a, b) {
                        a = a.split(" ");
                        b = b.split(" ");
                        for (var c = [], d = 0; d < a.length; d++) {
                            var k = a[d];
                            if ("ng-" !== k.substring(0, 3))for (var e = 0; e < b.length; e++)if (k ===
                                b[e]) {
                                c.push(k);
                                break
                            }
                        }
                        return c.join(" ")
                    }

                    function k(a) {
                        for (var b = c.length - 1; 0 <= b; b--) {
                            var d = c[b];
                            if (f.has(d) && (d = f.get(d)(a)))return d
                        }
                    }

                    function p(a, c) {
                        a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c)
                    }

                    function L() {
                        var a = b(u);
                        !a || "leave" === B && w.$$domOperationFired || a.end()
                    }

                    function O(b) {
                        u.off("$destroy", L);
                        u.removeData("$$animationRunner");
                        q(u, w);
                        ga(u, w);
                        w.domOperation();
                        y && a.removeClass(u, y);
                        u.removeClass("ng-animate");
                        K.complete(!b)
                    }

                    w = pa(w);
                    var l = 0 <=
                        ["enter", "move", "leave"].indexOf(B), K = new z({
                        end: function () {
                            O()
                        }, cancel: function () {
                            O(!0)
                        }
                    });
                    if (!c.length)return O(), K;
                    u.data("$$animationRunner", K);
                    var M = Ba(u.attr("class"), Ba(w.addClass, w.removeClass)), y = w.tempClasses;
                    y && (M += " " + y, w.tempClasses = null);
                    var H;
                    l && (H = "ng-" + B + "-prepare", a.addClass(u, H));
                    I.push({
                        element: u, classes: M, event: B, structural: l, options: w, beforeStart: function () {
                            u.addClass("ng-animate");
                            y && a.addClass(u, y);
                            H && (a.removeClass(u, H), H = null)
                        }, close: O
                    });
                    u.on("$destroy", L);
                    if (1 < I.length)return K;
                    e.$$postDigest(function () {
                        var a = [];
                        r(I, function (c) {
                            b(c.element) ? a.push(c) : c.close()
                        });
                        I.length = 0;
                        var c = R(a), d = [];
                        r(c, function (a) {
                            d.push({
                                domNode: D(a.from ? a.from.element : a.element), fn: function () {
                                    a.beforeStart();
                                    var c, d = a.close;
                                    if (b(a.anchors ? a.from.element || a.to.element : a.element)) {
                                        var g = k(a);
                                        g && (c = g.start)
                                    }
                                    c ? (c = c(), c.done(function (a) {
                                        d(!a)
                                    }), p(a, c)) : d()
                                }
                            })
                        });
                        s(v(d))
                    });
                    return K
                }
            }]
        }]).provider("$animateCss", ["$animateProvider", function (a) {
        var b = Ha(), c = Ha();
        this.$get = ["$window", "$$jqLite", "$$AnimateRunner",
            "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, f, z, B, s, v, I) {
                function q(a, b) {
                    var c = a.parentNode;
                    return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++R)) + "-" + a.getAttribute("class") + "-" + b
                }

                function u(k, f, x, s) {
                    var l;
                    0 < b.count(x) && (l = c.get(x), l || (f = X(f, "-stagger"), e.addClass(k, f), l = Fa(a, k, s), l.animationDuration = Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), e.removeClass(k, f), c.put(x, l)));
                    return l || {}
                }

                function sa(a) {
                    J.push(a);
                    v.waitUntilQuiet(function () {
                        b.flush();
                        c.flush();
                        for (var a = B(), d = 0; d < J.length; d++)J[d](a);
                        J.length = 0
                    })
                }

                function w(c, e, f) {
                    e = b.get(f);
                    e || (e = Fa(a, c, Ua), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1));
                    b.put(f, e);
                    c = e;
                    f = c.animationDelay;
                    e = c.transitionDelay;
                    c.maxDelay = f && e ? Math.max(f, e) : f || e;
                    c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
                    return c
                }

                var x = U(e), R = 0, J = [];
                return function (a, c) {
                    function d() {
                        l()
                    }

                    function v() {
                        l(!0)
                    }

                    function l(b) {
                        if (!(R ||
                            G && N)) {
                            R = !0;
                            N = !1;
                            g.$$skipPreparationClasses || e.removeClass(a, fa);
                            e.removeClass(a, da);
                            ta(h, !1);
                            qa(h, !1);
                            r(A, function (a) {
                                h.style[a[0]] = ""
                            });
                            x(a, g);
                            ga(a, g);
                            Object.keys(J).length && r(J, function (a, b) {
                                a ? h.style.setProperty(b, a) : h.style.removeProperty(b)
                            });
                            if (g.onDone)g.onDone();
                            ea && ea.length && a.off(ea.join(" "), y);
                            var c = a.data("$$animateCss");
                            c && (z.cancel(c[0].timer), a.removeData("$$animateCss"));
                            C && C.complete(!b)
                        }
                    }

                    function K(a) {
                        n.blockTransition && qa(h, a);
                        n.blockKeyframeAnimation && ta(h, !!a)
                    }

                    function M() {
                        C =
                            new f({end: d, cancel: v});
                        sa(Q);
                        l();
                        return {
                            $$willAnimate: !1, start: function () {
                                return C
                            }, end: d
                        }
                    }

                    function y(a) {
                        a.stopPropagation();
                        var b = a.originalEvent || a;
                        a = b.$manualTimeStamp || Date.now();
                        b = parseFloat(b.elapsedTime.toFixed(3));
                        Math.max(a - V, 0) >= S && b >= m && (G = !0, l())
                    }

                    function H() {
                        function b() {
                            if (!R) {
                                K(!1);
                                r(A, function (a) {
                                    h.style[a[0]] = a[1]
                                });
                                x(a, g);
                                e.addClass(a, da);
                                if (n.recalculateTimingStyles) {
                                    na = h.className + " " + fa;
                                    ja = q(h, na);
                                    E = w(h, na, ja);
                                    $ = E.maxDelay;
                                    ha = Math.max($, 0);
                                    m = E.maxDuration;
                                    if (0 === m) {
                                        l();
                                        return
                                    }
                                    n.hasTransitions =
                                        0 < E.transitionDuration;
                                    n.hasAnimations = 0 < E.animationDuration
                                }
                                n.applyAnimationDelay && ($ = "boolean" !== typeof g.delay && ua(g.delay) ? parseFloat(g.delay) : $, ha = Math.max($, 0), E.animationDelay = $, aa = [ra, $ + "s"], A.push(aa), h.style[aa[0]] = aa[1]);
                                S = 1E3 * ha;
                                U = 1E3 * m;
                                if (g.easing) {
                                    var d, f = g.easing;
                                    n.hasTransitions && (d = T + "TimingFunction", A.push([d, f]), h.style[d] = f);
                                    n.hasAnimations && (d = Z + "TimingFunction", A.push([d, f]), h.style[d] = f)
                                }
                                E.transitionDuration && ea.push(xa);
                                E.animationDuration && ea.push(ya);
                                V = Date.now();
                                var H = S +
                                    1.5 * U;
                                d = V + H;
                                var f = a.data("$$animateCss") || [], s = !0;
                                if (f.length) {
                                    var p = f[0];
                                    (s = d > p.expectedEndTime) ? z.cancel(p.timer) : f.push(l)
                                }
                                s && (H = z(c, H, !1), f[0] = {
                                    timer: H,
                                    expectedEndTime: d
                                }, f.push(l), a.data("$$animateCss", f));
                                if (ea.length)a.on(ea.join(" "), y);
                                g.to && (g.cleanupStyles && Ia(J, h, Object.keys(g.to)), Da(a, g))
                            }
                        }

                        function c() {
                            var b = a.data("$$animateCss");
                            if (b) {
                                for (var d = 1; d < b.length; d++)b[d]();
                                a.removeData("$$animateCss")
                            }
                        }

                        if (!R)if (h.parentNode) {
                            var d = function (a) {
                                if (G)N && a && (N = !1, l()); else if (N = !a, E.animationDuration)if (a =
                                        ta(h, N), N)A.push(a); else {
                                    var b = A, c = b.indexOf(a);
                                    0 <= a && b.splice(c, 1)
                                }
                            }, f = 0 < ca && (E.transitionDuration && 0 === W.transitionDuration || E.animationDuration && 0 === W.animationDuration) && Math.max(W.animationDelay, W.transitionDelay);
                            f ? z(b, Math.floor(f * ca * 1E3), !1) : b();
                            P.resume = function () {
                                d(!0)
                            };
                            P.pause = function () {
                                d(!1)
                            }
                        } else l()
                    }

                    var g = c || {};
                    g.$$prepared || (g = pa(Ja(g)));
                    var J = {}, h = D(a);
                    if (!h || !h.parentNode || !I.enabled())return M();
                    var A = [], B = a.attr("class"), F = Na(g), R, N, G, C, P, ha, S, m, U, V, ea = [];
                    if (0 === g.duration || !s.animations && !s.transitions)return M();
                    var ka = g.event && ba(g.event) ? g.event.join(" ") : g.event, Y = "", t = "";
                    ka && g.structural ? Y = X(ka, "ng-", !0) : ka && (Y = ka);
                    g.addClass && (t += X(g.addClass, "-add"));
                    g.removeClass && (t.length && (t += " "), t += X(g.removeClass, "-remove"));
                    g.applyClassesEarly && t.length && x(a, g);
                    var fa = [Y, t].join(" ").trim(), na = B + " " + fa, da = X(fa, "-active"), B = F.to && 0 < Object.keys(F.to).length;
                    if (!(0 < (g.keyframeStyle || "").length || B || fa))return M();
                    var ja, W;
                    0 < g.stagger ? (F = parseFloat(g.stagger), W = {
                        transitionDelay: F, animationDelay: F,
                        transitionDuration: 0, animationDuration: 0
                    }) : (ja = q(h, na), W = u(h, fa, ja, Va));
                    g.$$skipPreparationClasses || e.addClass(a, fa);
                    g.transitionStyle && (F = [T, g.transitionStyle], la(h, F), A.push(F));
                    0 <= g.duration && (F = 0 < h.style[T].length, F = Ga(g.duration, F), la(h, F), A.push(F));
                    g.keyframeStyle && (F = [Z, g.keyframeStyle], la(h, F), A.push(F));
                    var ca = W ? 0 <= g.staggerIndex ? g.staggerIndex : b.count(ja) : 0;
                    (ka = 0 === ca) && !g.skipBlocking && qa(h, 9999);
                    var E = w(h, na, ja), $ = E.maxDelay;
                    ha = Math.max($, 0);
                    m = E.maxDuration;
                    var n = {};
                    n.hasTransitions =
                        0 < E.transitionDuration;
                    n.hasAnimations = 0 < E.animationDuration;
                    n.hasTransitionAll = n.hasTransitions && "all" == E.transitionProperty;
                    n.applyTransitionDuration = B && (n.hasTransitions && !n.hasTransitionAll || n.hasAnimations && !n.hasTransitions);
                    n.applyAnimationDuration = g.duration && n.hasAnimations;
                    n.applyTransitionDelay = ua(g.delay) && (n.applyTransitionDuration || n.hasTransitions);
                    n.applyAnimationDelay = ua(g.delay) && n.hasAnimations;
                    n.recalculateTimingStyles = 0 < t.length;
                    if (n.applyTransitionDuration || n.applyAnimationDuration)m =
                        g.duration ? parseFloat(g.duration) : m, n.applyTransitionDuration && (n.hasTransitions = !0, E.transitionDuration = m, F = 0 < h.style[T + "Property"].length, A.push(Ga(m, F))), n.applyAnimationDuration && (n.hasAnimations = !0, E.animationDuration = m, A.push([za, m + "s"]));
                    if (0 === m && !n.recalculateTimingStyles)return M();
                    if (null != g.delay) {
                        var aa;
                        "boolean" !== typeof g.delay && (aa = parseFloat(g.delay), ha = Math.max(aa, 0));
                        n.applyTransitionDelay && A.push([ma, aa + "s"]);
                        n.applyAnimationDelay && A.push([ra, aa + "s"])
                    }
                    null == g.duration && 0 < E.transitionDuration &&
                    (n.recalculateTimingStyles = n.recalculateTimingStyles || ka);
                    S = 1E3 * ha;
                    U = 1E3 * m;
                    g.skipBlocking || (n.blockTransition = 0 < E.transitionDuration, n.blockKeyframeAnimation = 0 < E.animationDuration && 0 < W.animationDelay && 0 === W.animationDuration);
                    g.from && (g.cleanupStyles && Ia(J, h, Object.keys(g.from)), Ca(a, g));
                    n.blockTransition || n.blockKeyframeAnimation ? K(m) : g.skipBlocking || qa(h, !1);
                    return {
                        $$willAnimate: !0, end: d, start: function () {
                            if (!R)return P = {end: d, cancel: v, resume: null, pause: null}, C = new f(P), sa(H), C
                        }
                    }
                }
            }]
    }]).provider("$$animateCssDriver",
        ["$$animationProvider", function (a) {
            a.drivers.push("$$animateCssDriver");
            this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, f, z, B) {
                function s(a) {
                    return a.replace(/\bng-\S+\b/g, "")
                }

                function v(a, b) {
                    P(a) && (a = a.split(" "));
                    P(b) && (b = b.split(" "));
                    return a.filter(function (a) {
                        return -1 === b.indexOf(a)
                    }).join(" ")
                }

                function I(c, e, f) {
                    function k(a) {
                        var b = {}, c = D(a).getBoundingClientRect();
                        r(["width", "height", "top", "left"], function (a) {
                            var d = c[a];
                            switch (a) {
                                case "top":
                                    d += C.scrollTop;
                                    break;
                                case "left":
                                    d += C.scrollLeft
                            }
                            b[a] = Math.floor(d) + "px"
                        });
                        return b
                    }

                    function p() {
                        var c = s(f.attr("class") || ""), d = v(c, l), c = v(l, c), d = a(z, {
                            to: k(f),
                            addClass: "ng-anchor-in " + d,
                            removeClass: "ng-anchor-out " + c,
                            delay: !0
                        });
                        return d.$$willAnimate ? d : null
                    }

                    function B() {
                        z.remove();
                        e.removeClass("ng-animate-shim");
                        f.removeClass("ng-animate-shim")
                    }

                    var z = G(D(e).cloneNode(!0)), l = s(z.attr("class") || "");
                    e.addClass("ng-animate-shim");
                    f.addClass("ng-animate-shim");
                    z.addClass("ng-anchor");
                    w.append(z);
                    var K;
                    c = function () {
                        var c = a(z, {addClass: "ng-anchor-out", delay: !0, from: k(e)});
                        return c.$$willAnimate ? c : null
                    }();
                    if (!c && (K = p(), !K))return B();
                    var M = c || K;
                    return {
                        start: function () {
                            function a() {
                                c && c.end()
                            }

                            var b, c = M.start();
                            c.done(function () {
                                c = null;
                                if (!K && (K = p()))return c = K.start(), c.done(function () {
                                    c = null;
                                    B();
                                    b.complete()
                                }), c;
                                B();
                                b.complete()
                            });
                            return b = new d({end: a, cancel: a})
                        }
                    }
                }

                function q(a, b, c, e) {
                    var f = u(a, Q), s = u(b, Q), z = [];
                    r(e, function (a) {
                        (a = I(c, a.out, a["in"])) && z.push(a)
                    });
                    if (f || s || 0 !== z.length)return {
                        start: function () {
                            function a() {
                                r(b,
                                    function (a) {
                                        a.end()
                                    })
                            }

                            var b = [];
                            f && b.push(f.start());
                            s && b.push(s.start());
                            r(z, function (a) {
                                b.push(a.start())
                            });
                            var c = new d({end: a, cancel: a});
                            d.all(b, function (a) {
                                c.complete(a)
                            });
                            return c
                        }
                    }
                }

                function u(c) {
                    var d = c.element, e = c.options || {};
                    c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));
                    e.preparationClasses && (e.event = Y(e.event, e.preparationClasses));
                    c = a(d, e);
                    return c.$$willAnimate ? c : null
                }

                if (!f.animations && !f.transitions)return Q;
                var C = B[0].body;
                c = D(e);
                var w = G(c.parentNode && 11 === c.parentNode.nodeType || C.contains(c) ? c : C);
                U(z);
                return function (a) {
                    return a.from && a.to ? q(a.from, a.to, a.classes, a.anchors) : u(a)
                }
            }]
        }]).provider("$$animateJs", ["$animateProvider", function (a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
            function e(c) {
                c = ba(c) ? c : c.split(" ");
                for (var d = [], e = {}, f = 0; f < c.length; f++) {
                    var r = c[f], q = a.$$registeredAnimations[r];
                    q && !e[r] && (d.push(b.get(q)), e[r] = !0)
                }
                return d
            }

            var f = U(d);
            return function (a, b, d, v) {
                function q() {
                    v.domOperation();
                    f(a, v)
                }

                function D(a, b, d, e, g) {
                    switch (d) {
                        case "animate":
                            b = [b, e.from, e.to, g];
                            break;
                        case "setClass":
                            b = [b, x, G, g];
                            break;
                        case "addClass":
                            b = [b, x, g];
                            break;
                        case "removeClass":
                            b = [b, G, g];
                            break;
                        default:
                            b = [b, g]
                    }
                    b.push(e);
                    if (a = a.apply(a, b))if (Ka(a.start) && (a = a.start()), a instanceof c)a.done(g); else if (Ka(a))return a;
                    return Q
                }

                function u(a, b, d, e, g) {
                    var f = [];
                    r(e, function (e) {
                        var k = e[g];
                        k && f.push(function () {
                            var e, g, f = !1, h = function (a) {
                                f || (f = !0, (g || Q)(a), e.complete(!a))
                            };
                            e = new c({
                                end: function () {
                                    h()
                                }, cancel: function () {
                                    h(!0)
                                }
                            });
                            g = D(k, a, b, d, function (a) {
                                h(!1 === a)
                            });
                            return e
                        })
                    });
                    return f
                }

                function C(a, b, d, e, g) {
                    var f = u(a, b, d, e, g);
                    if (0 === f.length) {
                        var h, k;
                        "beforeSetClass" === g ? (h = u(a, "removeClass", d, e, "beforeRemoveClass"), k = u(a, "addClass", d, e, "beforeAddClass")) : "setClass" === g && (h = u(a, "removeClass", d, e, "removeClass"), k = u(a, "addClass", d, e, "addClass"));
                        h && (f = f.concat(h));
                        k && (f = f.concat(k))
                    }
                    if (0 !== f.length)return function (a) {
                        var b = [];
                        f.length && r(f, function (a) {
                            b.push(a())
                        });
                        b.length ? c.all(b, a) : a();
                        return function (a) {
                            r(b, function (b) {
                                a ?
                                    b.cancel() : b.end()
                            })
                        }
                    }
                }

                var w = !1;
                3 === arguments.length && va(d) && (v = d, d = null);
                v = pa(v);
                d || (d = a.attr("class") || "", v.addClass && (d += " " + v.addClass), v.removeClass && (d += " " + v.removeClass));
                var x = v.addClass, G = v.removeClass, J = e(d), k, p;
                if (J.length) {
                    var L, O;
                    "leave" == b ? (O = "leave", L = "afterLeave") : (O = "before" + b.charAt(0).toUpperCase() + b.substr(1), L = b);
                    "enter" !== b && "move" !== b && (k = C(a, b, v, J, O));
                    p = C(a, b, v, J, L)
                }
                if (k || p) {
                    var l;
                    return {
                        $$willAnimate: !0, end: function () {
                            l ? l.end() : (w = !0, q(), ga(a, v), l = new c, l.complete(!0));
                            return l
                        },
                        start: function () {
                            function b(c) {
                                w = !0;
                                q();
                                ga(a, v);
                                l.complete(c)
                            }

                            if (l)return l;
                            l = new c;
                            var d, e = [];
                            k && e.push(function (a) {
                                d = k(a)
                            });
                            e.length ? e.push(function (a) {
                                q();
                                a(!0)
                            }) : q();
                            p && e.push(function (a) {
                                d = p(a)
                            });
                            l.setHost({
                                end: function () {
                                    w || ((d || Q)(void 0), b(void 0))
                                }, cancel: function () {
                                    w || ((d || Q)(!0), b(!0))
                                }
                            });
                            c.chain(e, b);
                            return l
                        }
                    }
                }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateJsDriver");
        this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
            function d(c) {
                return a(c.element,
                    c.event, c.classes, c.options)
            }

            return function (a) {
                if (a.from && a.to) {
                    var b = d(a.from), q = d(a.to);
                    if (b || q)return {
                        start: function () {
                            function a() {
                                return function () {
                                    r(d, function (a) {
                                        a.end()
                                    })
                                }
                            }

                            var d = [];
                            b && d.push(b.start());
                            q && d.push(q.start());
                            c.all(d, function (a) {
                                e.complete(a)
                            });
                            var e = new c({end: a(), cancel: a()});
                            return e
                        }
                    }
                } else return d(a)
            }
        }]
    }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

