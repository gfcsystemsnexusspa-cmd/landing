/*! For license information please see main.a6ff5a86.js.LICENSE.txt */
(() => {
  var e = {
      4(e, t, n) {
        "use strict";
        var r = n(853),
          a = n(43),
          o = n(950);
        function i(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function l(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function s(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function u(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function c(e) {
          if (31 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function d(e) {
          if (s(e) !== e) throw Error(i(188));
        }
        function f(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = f(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var h = Object.assign,
          m = Symbol.for("react.element"),
          p = Symbol.for("react.transitional.element"),
          g = Symbol.for("react.portal"),
          v = Symbol.for("react.fragment"),
          y = Symbol.for("react.strict_mode"),
          b = Symbol.for("react.profiler"),
          x = Symbol.for("react.consumer"),
          w = Symbol.for("react.context"),
          k = Symbol.for("react.forward_ref"),
          A = Symbol.for("react.suspense"),
          E = Symbol.for("react.suspense_list"),
          S = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var C = Symbol.for("react.activity");
        (Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"));
        var F = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var P = Symbol.iterator;
        function T(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (P && e[P]) || e["@@iterator"])
              ? e
              : null;
        }
        var V = Symbol.for("react.client.reference");
        function L(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === V ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case v:
              return "Fragment";
            case b:
              return "Profiler";
            case y:
              return "StrictMode";
            case A:
              return "Suspense";
            case E:
              return "SuspenseList";
            case C:
              return "Activity";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return "Portal";
              case w:
                return e.displayName || "Context";
              case x:
                return (e._context.displayName || "Context") + ".Consumer";
              case k:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case S:
                return null !== (t = e.displayName || null)
                  ? t
                  : L(e.type) || "Memo";
              case M:
                ((t = e._payload), (e = e._init));
                try {
                  return L(e(t));
                } catch (n) {}
            }
          return null;
        }
        var N = Array.isArray,
          D = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          H = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          j = { pending: !1, data: null, method: null, action: null },
          Z = [],
          z = -1;
        function _(e) {
          return { current: e };
        }
        function R(e) {
          0 > z || ((e.current = Z[z]), (Z[z] = null), z--);
        }
        function O(e, t) {
          (z++, (Z[z] = e.current), (e.current = t));
        }
        var I,
          B,
          U = _(null),
          W = _(null),
          q = _(null),
          $ = _(null);
        function Y(e, t) {
          switch ((O(q, t), O(W, e), O(U, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? vd(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI)))
                e = yd((t = vd(t)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          (R(U), O(U, e));
        }
        function K() {
          (R(U), R(W), R(q));
        }
        function Q(e) {
          null !== e.memoizedState && O($, e);
          var t = U.current,
            n = yd(t, e.type);
          t !== n && (O(W, e), O(U, n));
        }
        function G(e) {
          (W.current === e && (R(U), R(W)),
            $.current === e && (R($), (df._currentValue = j)));
        }
        function X(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              ((I = (t && t[1]) || ""),
                (B =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + I + e + B;
        }
        var J = !1;
        function ee(e, t) {
          if (!e || J) return "";
          J = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (o) {
                        r = o;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (i) {
                      r = i;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (l) {
                  if (l && r && "string" === typeof l.stack)
                    return [l.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name",
            );
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var o = r.DetermineComponentFrameRoot(),
              i = o[0],
              l = o[1];
            if (i && l) {
              var s = i.split("\n"),
                u = l.split("\n");
              for (
                a = r = 0;
                r < s.length && !s[r].includes("DetermineComponentFrameRoot");
              )
                r++;
              for (
                ;
                a < u.length && !u[a].includes("DetermineComponentFrameRoot");
              )
                a++;
              if (r === s.length || a === u.length)
                for (
                  r = s.length - 1, a = u.length - 1;
                  1 <= r && 0 <= a && s[r] !== u[a];
                )
                  a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (s[r] !== u[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || s[r] !== u[a])) {
                        var c = "\n" + s[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            ((J = !1), (Error.prepareStackTrace = n));
          }
          return (n = e ? e.displayName || e.name : "") ? X(n) : "";
        }
        function te(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return X(e.type);
            case 16:
              return X("Lazy");
            case 13:
              return e.child !== t && null !== t
                ? X("Suspense Fallback")
                : X("Suspense");
            case 19:
              return X("SuspenseList");
            case 0:
            case 15:
              return ee(e.type, !1);
            case 11:
              return ee(e.type.render, !1);
            case 1:
              return ee(e.type, !0);
            case 31:
              return X("Activity");
            default:
              return "";
          }
        }
        function ne(e) {
          try {
            var t = "",
              n = null;
            do {
              ((t += te(e, n)), (n = e), (e = e.return));
            } while (e);
            return t;
          } catch (r) {
            return "\nError generating stack: " + r.message + "\n" + r.stack;
          }
        }
        var re = Object.prototype.hasOwnProperty,
          ae = r.unstable_scheduleCallback,
          oe = r.unstable_cancelCallback,
          ie = r.unstable_shouldYield,
          le = r.unstable_requestPaint,
          se = r.unstable_now,
          ue = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          de = r.unstable_UserBlockingPriority,
          fe = r.unstable_NormalPriority,
          he = r.unstable_LowPriority,
          me = r.unstable_IdlePriority,
          pe = r.log,
          ge = r.unstable_setDisableYieldValue,
          ve = null,
          ye = null;
        function be(e) {
          if (
            ("function" === typeof pe && ge(e),
            ye && "function" === typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ve, e);
            } catch (t) {}
        }
        var xe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((we(e) / ke) | 0)) | 0;
              },
          we = Math.log,
          ke = Math.LN2;
        var Ae = 256,
          Ee = 262144,
          Se = 4194304;
        function Me(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
              return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 3932160 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Ce(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var a = 0,
            o = e.suspendedLanes,
            i = e.pingedLanes;
          e = e.warmLanes;
          var l = 134217727 & r;
          return (
            0 !== l
              ? 0 !== (r = l & ~o)
                ? (a = Me(r))
                : 0 !== (i &= l)
                  ? (a = Me(i))
                  : n || (0 !== (n = l & ~e) && (a = Me(n)))
              : 0 !== (l = r & ~o)
                ? (a = Me(l))
                : 0 !== i
                  ? (a = Me(i))
                  : n || (0 !== (n = r & ~e) && (a = Me(n))),
            0 === a
              ? 0
              : 0 !== t &&
                  t !== a &&
                  0 === (t & o) &&
                  ((o = a & -a) >= (n = t & -t) ||
                    (32 === o && 0 !== (4194048 & n)))
                ? t
                : a
          );
        }
        function Fe(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Pe(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Te() {
          var e = Se;
          return (0 === (62914560 & (Se <<= 1)) && (Se = 4194304), e);
        }
        function Ve(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Le(e, t) {
          ((e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function Ne(e, t, n) {
          ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
          var r = 31 - xe(t);
          ((e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (261930 & n)));
        }
        function De(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - xe(n),
              a = 1 << r;
            ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
          }
        }
        function He(e, t) {
          var n = t & -t;
          return 0 !==
            ((n = 0 !== (42 & n) ? 1 : je(n)) & (e.suspendedLanes | t))
            ? 0
            : n;
        }
        function je(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function Ze(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function ze() {
          var e = H.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Cf(e.type);
        }
        function _e(e, t) {
          var n = H.p;
          try {
            return ((H.p = e), t());
          } finally {
            H.p = n;
          }
        }
        var Re = Math.random().toString(36).slice(2),
          Oe = "__reactFiber$" + Re,
          Ie = "__reactProps$" + Re,
          Be = "__reactContainer$" + Re,
          Ue = "__reactEvents$" + Re,
          We = "__reactListeners$" + Re,
          qe = "__reactHandles$" + Re,
          $e = "__reactResources$" + Re,
          Ye = "__reactMarker$" + Re;
        function Ke(e) {
          (delete e[Oe],
            delete e[Ie],
            delete e[Ue],
            delete e[We],
            delete e[qe]);
        }
        function Qe(e) {
          var t = e[Oe];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Be] || n[Oe])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = jd(e); null !== e; ) {
                  if ((n = e[Oe])) return n;
                  e = jd(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ge(e) {
          if ((e = e[Oe] || e[Be])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              31 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Xe(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(i(33));
        }
        function Je(e) {
          var t = e[$e];
          return (
            t ||
              (t = e[$e] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function et(e) {
          e[Ye] = !0;
        }
        var tt = new Set(),
          nt = {};
        function rt(e, t) {
          (at(e, t), at(e + "Capture", t));
        }
        function at(e, t) {
          for (nt[e] = t, e = 0; e < t.length; e++) tt.add(t[e]);
        }
        var ot = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
          ),
          it = {},
          lt = {};
        function st(e, t, n) {
          if (
            ((a = t),
            re.call(lt, a) ||
              (!re.call(it, a) &&
                (ot.test(a) ? (lt[a] = !0) : ((it[a] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var a;
        }
        function ut(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function ct(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function dt(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ft(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function ht(e) {
          if (!e._valueTracker) {
            var t = ft(e) ? "checked" : "value";
            e._valueTracker = (function (e, t, n) {
              var r = Object.getOwnPropertyDescriptor(
                e.constructor.prototype,
                t,
              );
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof r &&
                "function" === typeof r.get &&
                "function" === typeof r.set
              ) {
                var a = r.get,
                  o = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      ((n = "" + e), o.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e, t, "" + e[t]);
          }
        }
        function mt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ft(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function pt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var gt = /[\n"\\]/g;
        function vt(e) {
          return e.replace(gt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function yt(e, t, n, r, a, o, i, l) {
          ((e.name = ""),
            null != i &&
            "function" !== typeof i &&
            "symbol" !== typeof i &&
            "boolean" !== typeof i
              ? (e.type = i)
              : e.removeAttribute("type"),
            null != t
              ? "number" === i
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + dt(t))
                : e.value !== "" + dt(t) && (e.value = "" + dt(t))
              : ("submit" !== i && "reset" !== i) || e.removeAttribute("value"),
            null != t
              ? xt(e, i, dt(t))
              : null != n
                ? xt(e, i, dt(n))
                : null != r && e.removeAttribute("value"),
            null == a && null != o && (e.defaultChecked = !!o),
            null != a &&
              (e.checked =
                a && "function" !== typeof a && "symbol" !== typeof a),
            null != l &&
            "function" !== typeof l &&
            "symbol" !== typeof l &&
            "boolean" !== typeof l
              ? (e.name = "" + dt(l))
              : e.removeAttribute("name"));
        }
        function bt(e, t, n, r, a, o, i, l) {
          if (
            (null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.type = o),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== o && "reset" !== o) ||
                (void 0 !== t && null !== t)
              )
            )
              return void ht(e);
            ((n = null != n ? "" + dt(n) : ""),
              (t = null != t ? "" + dt(t) : n),
              l || t === e.value || (e.value = t),
              (e.defaultValue = t));
          }
          ((r =
            "function" !== typeof (r = null != r ? r : a) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = l ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != i &&
              "function" !== typeof i &&
              "symbol" !== typeof i &&
              "boolean" !== typeof i &&
              (e.name = i),
            ht(e));
        }
        function xt(e, t, n) {
          ("number" === t && pt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function wt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              ((a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + dt(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0),
                  void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function kt(e, t, n) {
          null == t ||
          ((t = "" + dt(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + dt(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function At(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(i(92));
              if (N(r)) {
                if (1 < r.length) throw Error(i(93));
                r = r[0];
              }
              n = r;
            }
            (null == n && (n = ""), (t = n));
          }
          ((n = dt(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r),
            ht(e));
        }
        function Et(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var St = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " ",
          ),
        );
        function Mt(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
                ? (e.cssFloat = "")
                : (e[t] = "")
            : r
              ? e.setProperty(t, n)
              : "number" !== typeof n || 0 === n || St.has(t)
                ? "float" === t
                  ? (e.cssFloat = n)
                  : (e[t] = ("" + n).trim())
                : (e[t] = n + "px");
        }
        function Ct(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(i(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                    ? (e.cssFloat = "")
                    : (e[r] = ""));
            for (var a in t)
              ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Mt(e, a, r));
          } else for (var o in t) t.hasOwnProperty(o) && Mt(e, o, t[o]);
        }
        function Ft(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Pt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Tt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Vt(e) {
          return Tt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        function Lt() {}
        var Nt = null;
        function Dt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ht = null,
          jt = null;
        function Zt(e) {
          var t = Ge(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ie] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (yt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name,
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + vt("" + t) + '"][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[Ie] || null;
                      if (!a) throw Error(i(90));
                      yt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name,
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && mt(r);
                }
                break e;
              case "textarea":
                kt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && wt(e, !!n.multiple, t, !1);
            }
          }
        }
        var zt = !1;
        function _t(e, t, n) {
          if (zt) return e(t, n);
          zt = !0;
          try {
            return e(t);
          } finally {
            if (
              ((zt = !1),
              (null !== Ht || null !== jt) &&
                (Ju(), Ht && ((t = Ht), (e = jt), (jt = Ht = null), Zt(t), e)))
            )
              for (t = 0; t < e.length; t++) Zt(e[t]);
          }
        }
        function Rt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ie] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              ((r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ot = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          It = !1;
        if (Ot)
          try {
            var Bt = {};
            (Object.defineProperty(Bt, "passive", {
              get: function () {
                It = !0;
              },
            }),
              window.addEventListener("test", Bt, Bt),
              window.removeEventListener("test", Bt, Bt));
          } catch (Xf) {
            It = !1;
          }
        var Ut = null,
          Wt = null,
          qt = null;
        function $t() {
          if (qt) return qt;
          var e,
            t,
            n = Wt,
            r = n.length,
            a = "value" in Ut ? Ut.value : Ut.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (qt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Yt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Kt() {
          return !0;
        }
        function Qt() {
          return !1;
        }
        function Gt(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? Kt
                : Qt),
              (this.isPropagationStopped = Qt),
              this
            );
          }
          return (
            h(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Kt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Kt));
              },
              persist: function () {},
              isPersistent: Kt,
            }),
            t
          );
        }
        var Xt,
          Jt,
          en,
          tn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          nn = Gt(tn),
          rn = h({}, tn, { view: 0, detail: 0 }),
          an = Gt(rn),
          on = h({}, rn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: vn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== en &&
                    (en && "mousemove" === e.type
                      ? ((Xt = e.screenX - en.screenX),
                        (Jt = e.screenY - en.screenY))
                      : (Jt = Xt = 0),
                    (en = e)),
                  Xt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Jt;
            },
          }),
          ln = Gt(on),
          sn = Gt(h({}, on, { dataTransfer: 0 })),
          un = Gt(h({}, rn, { relatedTarget: 0 })),
          cn = Gt(
            h({}, tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          dn = Gt(
            h({}, tn, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            }),
          ),
          fn = Gt(h({}, tn, { data: 0 })),
          hn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          mn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          pn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function gn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = pn[e]) && !!t[e];
        }
        function vn() {
          return gn;
        }
        var yn = Gt(
            h({}, rn, {
              key: function (e) {
                if (e.key) {
                  var t = hn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Yt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? mn[e.keyCode] || "Unidentified"
                    : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: vn,
              charCode: function (e) {
                return "keypress" === e.type ? Yt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Yt(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
              },
            }),
          ),
          bn = Gt(
            h({}, on, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          xn = Gt(
            h({}, rn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: vn,
            }),
          ),
          wn = Gt(
            h({}, tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          kn = Gt(
            h({}, on, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          An = Gt(h({}, tn, { newState: 0, oldState: 0 })),
          En = [9, 13, 27, 32],
          Sn = Ot && "CompositionEvent" in window,
          Mn = null;
        Ot && "documentMode" in document && (Mn = document.documentMode);
        var Cn = Ot && "TextEvent" in window && !Mn,
          Fn = Ot && (!Sn || (Mn && 8 < Mn && 11 >= Mn)),
          Pn = String.fromCharCode(32),
          Tn = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== En.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Ln(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Nn = !1;
        var Dn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Dn[e.type] : "textarea" === t;
        }
        function jn(e, t, n, r) {
          (Ht ? (jt ? jt.push(r) : (jt = [r])) : (Ht = r),
            0 < (t = rd(t, "onChange")).length &&
              ((n = new nn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t })));
        }
        var Zn = null,
          zn = null;
        function _n(e) {
          Kc(e, 0);
        }
        function Rn(e) {
          if (mt(Xe(e))) return e;
        }
        function On(e, t) {
          if ("change" === e) return t;
        }
        var In = !1;
        if (Ot) {
          var Bn;
          if (Ot) {
            var Un = "oninput" in document;
            if (!Un) {
              var Wn = document.createElement("div");
              (Wn.setAttribute("oninput", "return;"),
                (Un = "function" === typeof Wn.oninput));
            }
            Bn = Un;
          } else Bn = !1;
          In = Bn && (!document.documentMode || 9 < document.documentMode);
        }
        function qn() {
          Zn && (Zn.detachEvent("onpropertychange", $n), (zn = Zn = null));
        }
        function $n(e) {
          if ("value" === e.propertyName && Rn(zn)) {
            var t = [];
            (jn(t, zn, e, Dt(e)), _t(_n, t));
          }
        }
        function Yn(e, t, n) {
          "focusin" === e
            ? (qn(), (zn = n), (Zn = t).attachEvent("onpropertychange", $n))
            : "focusout" === e && qn();
        }
        function Kn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Rn(zn);
        }
        function Qn(e, t) {
          if ("click" === e) return Rn(t);
        }
        function Gn(e, t) {
          if ("input" === e || "change" === e) return Rn(t);
        }
        var Xn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Jn(e, t) {
          if (Xn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!re.call(t, a) || !Xn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function er(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function tr(e, t) {
          var n,
            r = er(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = er(r);
          }
        }
        function nr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? nr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function rr(e) {
          for (
            var t = pt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document,
            );
            t instanceof e.HTMLIFrameElement;
          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function ar(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var or =
            Ot && "documentMode" in document && 11 >= document.documentMode,
          ir = null,
          lr = null,
          sr = null,
          ur = !1;
        function cr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          ur ||
            null == ir ||
            ir !== pt(r) ||
            ("selectionStart" in (r = ir) && ar(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (sr && Jn(sr, r)) ||
              ((sr = r),
              0 < (r = rd(lr, "onSelect")).length &&
                ((t = new nn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = ir))));
        }
        function dr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var fr = {
            animationend: dr("Animation", "AnimationEnd"),
            animationiteration: dr("Animation", "AnimationIteration"),
            animationstart: dr("Animation", "AnimationStart"),
            transitionrun: dr("Transition", "TransitionRun"),
            transitionstart: dr("Transition", "TransitionStart"),
            transitioncancel: dr("Transition", "TransitionCancel"),
            transitionend: dr("Transition", "TransitionEnd"),
          },
          hr = {},
          mr = {};
        function pr(e) {
          if (hr[e]) return hr[e];
          if (!fr[e]) return e;
          var t,
            n = fr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in mr) return (hr[e] = n[t]);
          return e;
        }
        Ot &&
          ((mr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete fr.animationend.animation,
            delete fr.animationiteration.animation,
            delete fr.animationstart.animation),
          "TransitionEvent" in window || delete fr.transitionend.transition);
        var gr = pr("animationend"),
          vr = pr("animationiteration"),
          yr = pr("animationstart"),
          br = pr("transitionrun"),
          xr = pr("transitionstart"),
          wr = pr("transitioncancel"),
          kr = pr("transitionend"),
          Ar = new Map(),
          Er =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Sr(e, t) {
          (Ar.set(e, t), rt(t, [e]));
        }
        Er.push("scrollEnd");
        var Mr =
            "function" === typeof reportError
              ? reportError
              : function (e) {
                  if (
                    "object" === typeof window &&
                    "function" === typeof window.ErrorEvent
                  ) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" === typeof e &&
                        null !== e &&
                        "string" === typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if (
                    "object" === typeof process &&
                    "function" === typeof process.emit
                  )
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          Cr = [],
          Fr = 0,
          Pr = 0;
        function Tr() {
          for (var e = Fr, t = (Pr = Fr = 0); t < e; ) {
            var n = Cr[t];
            Cr[t++] = null;
            var r = Cr[t];
            Cr[t++] = null;
            var a = Cr[t];
            Cr[t++] = null;
            var o = Cr[t];
            if (((Cr[t++] = null), null !== r && null !== a)) {
              var i = r.pending;
              (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
                (r.pending = a));
            }
            0 !== o && Dr(n, a, o);
          }
        }
        function Vr(e, t, n, r) {
          ((Cr[Fr++] = e),
            (Cr[Fr++] = t),
            (Cr[Fr++] = n),
            (Cr[Fr++] = r),
            (Pr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Lr(e, t, n, r) {
          return (Vr(e, t, n, r), Hr(e));
        }
        function Nr(e, t) {
          return (Vr(e, null, null, t), Hr(e));
        }
        function Dr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, o = e.return; null !== o; )
            ((o.childLanes |= n),
              null !== (r = o.alternate) && (r.childLanes |= n),
              22 === o.tag &&
                (null === (e = o.stateNode) || 1 & e._visibility || (a = !0)),
              (e = o),
              (o = o.return));
          return 3 === e.tag
            ? ((o = e.stateNode),
              a &&
                null !== t &&
                ((a = 31 - xe(n)),
                null === (r = (e = o.hiddenUpdates)[a])
                  ? (e[a] = [t])
                  : r.push(t),
                (t.lane = 536870912 | n)),
              o)
            : null;
        }
        function Hr(e) {
          if (50 < Uu) throw ((Uu = 0), (Wu = null), Error(i(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var jr = {};
        function Zr(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function zr(e, t, n, r) {
          return new Zr(e, t, n, r);
        }
        function _r(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rr(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = zr(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Or(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Ir(e, t, n, r, a, o) {
          var l = 0;
          if (((r = e), "function" === typeof e)) _r(e) && (l = 1);
          else if ("string" === typeof e)
            l = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, U.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
                ? 27
                : 5;
          else
            e: switch (e) {
              case C:
                return (
                  ((e = zr(31, n, t, a)).elementType = C),
                  (e.lanes = o),
                  e
                );
              case v:
                return Br(n.children, a, o, t);
              case y:
                ((l = 8), (a |= 24));
                break;
              case b:
                return (
                  ((e = zr(12, n, t, 2 | a)).elementType = b),
                  (e.lanes = o),
                  e
                );
              case A:
                return (
                  ((e = zr(13, n, t, a)).elementType = A),
                  (e.lanes = o),
                  e
                );
              case E:
                return (
                  ((e = zr(19, n, t, a)).elementType = E),
                  (e.lanes = o),
                  e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case w:
                      l = 10;
                      break e;
                    case x:
                      l = 9;
                      break e;
                    case k:
                      l = 11;
                      break e;
                    case S:
                      l = 14;
                      break e;
                    case M:
                      ((l = 16), (r = null));
                      break e;
                  }
                ((l = 29),
                  (n = Error(i(130, null === e ? "null" : typeof e, ""))),
                  (r = null));
            }
          return (
            ((t = zr(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Br(e, t, n, r) {
          return (((e = zr(7, e, r, t)).lanes = n), e);
        }
        function Ur(e, t, n) {
          return (((e = zr(6, e, null, t)).lanes = n), e);
        }
        function Wr(e) {
          var t = zr(18, null, null, 0);
          return ((t.stateNode = e), t);
        }
        function qr(e, t, n) {
          return (
            ((t = zr(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var $r = new WeakMap();
        function Yr(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = $r.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: ne(t) }), $r.set(e, t), t);
          }
          return { value: e, source: t, stack: ne(t) };
        }
        var Kr = [],
          Qr = 0,
          Gr = null,
          Xr = 0,
          Jr = [],
          ea = 0,
          ta = null,
          na = 1,
          ra = "";
        function aa(e, t) {
          ((Kr[Qr++] = Xr), (Kr[Qr++] = Gr), (Gr = e), (Xr = t));
        }
        function oa(e, t, n) {
          ((Jr[ea++] = na), (Jr[ea++] = ra), (Jr[ea++] = ta), (ta = e));
          var r = na;
          e = ra;
          var a = 32 - xe(r) - 1;
          ((r &= ~(1 << a)), (n += 1));
          var o = 32 - xe(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            ((o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (na = (1 << (32 - xe(t) + a)) | (n << a) | r),
              (ra = o + e));
          } else ((na = (1 << o) | (n << a) | r), (ra = e));
        }
        function ia(e) {
          null !== e.return && (aa(e, 1), oa(e, 1, 0));
        }
        function la(e) {
          for (; e === Gr; )
            ((Gr = Kr[--Qr]),
              (Kr[Qr] = null),
              (Xr = Kr[--Qr]),
              (Kr[Qr] = null));
          for (; e === ta; )
            ((ta = Jr[--ea]),
              (Jr[ea] = null),
              (ra = Jr[--ea]),
              (Jr[ea] = null),
              (na = Jr[--ea]),
              (Jr[ea] = null));
        }
        function sa(e, t) {
          ((Jr[ea++] = na),
            (Jr[ea++] = ra),
            (Jr[ea++] = ta),
            (na = t.id),
            (ra = t.overflow),
            (ta = e));
        }
        var ua = null,
          ca = null,
          da = !1,
          fa = null,
          ha = !1,
          ma = Error(i(519));
        function pa(e) {
          throw (
            wa(
              Yr(
                Error(
                  i(
                    418,
                    1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1]
                      ? "text"
                      : "HTML",
                    "",
                  ),
                ),
                e,
              ),
            ),
            ma
          );
        }
        function ga(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Oe] = e), (t[Ie] = r), n)) {
            case "dialog":
              (Qc("cancel", t), Qc("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              Qc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < $c.length; n++) Qc($c[n], t);
              break;
            case "source":
              Qc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (Qc("error", t), Qc("load", t));
              break;
            case "details":
              Qc("toggle", t);
              break;
            case "input":
              (Qc("invalid", t),
                bt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0,
                ));
              break;
            case "select":
              Qc("invalid", t);
              break;
            case "textarea":
              (Qc("invalid", t), At(t, r.value, r.defaultValue, r.children));
          }
          (("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          ud(t.textContent, n)
            ? (null != r.popover && (Qc("beforetoggle", t), Qc("toggle", t)),
              null != r.onScroll && Qc("scroll", t),
              null != r.onScrollEnd && Qc("scrollend", t),
              null != r.onClick && (t.onclick = Lt),
              (t = !0))
            : (t = !1),
            t || pa(e, !0));
        }
        function va(e) {
          for (ua = e.return; ua; )
            switch (ua.tag) {
              case 5:
              case 31:
              case 13:
                return void (ha = !1);
              case 27:
              case 3:
                return void (ha = !0);
              default:
                ua = ua.return;
            }
        }
        function ya(e) {
          if (e !== ua) return !1;
          if (!da) return (va(e), (da = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  bd(e.type, e.memoizedProps)),
              (t = !t)),
            t && ca && pa(e),
            va(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            ca = Hd(e);
          } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            ca = Hd(e);
          } else
            27 === n
              ? ((n = ca),
                Md(e.type) ? ((e = Dd), (Dd = null), (ca = e)) : (ca = n))
              : (ca = ua ? Nd(e.stateNode.nextSibling) : null);
          return !0;
        }
        function ba() {
          ((ca = ua = null), (da = !1));
        }
        function xa() {
          var e = fa;
          return (
            null !== e &&
              (null === Tu ? (Tu = e) : Tu.push.apply(Tu, e), (fa = null)),
            e
          );
        }
        function wa(e) {
          null === fa ? (fa = [e]) : fa.push(e);
        }
        var ka = _(null),
          Aa = null,
          Ea = null;
        function Sa(e, t, n) {
          (O(ka, t._currentValue), (t._currentValue = n));
        }
        function Ma(e) {
          ((e._currentValue = ka.current), R(ka));
        }
        function Ca(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Fa(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var o = a.dependencies;
            if (null !== o) {
              var l = a.child;
              o = o.firstContext;
              e: for (; null !== o; ) {
                var s = o;
                o = a;
                for (var u = 0; u < t.length; u++)
                  if (s.context === t[u]) {
                    ((o.lanes |= n),
                      null !== (s = o.alternate) && (s.lanes |= n),
                      Ca(o.return, n, e),
                      r || (l = null));
                    break e;
                  }
                o = s.next;
              }
            } else if (18 === a.tag) {
              if (null === (l = a.return)) throw Error(i(341));
              ((l.lanes |= n),
                null !== (o = l.alternate) && (o.lanes |= n),
                Ca(l, n, e),
                (l = null));
            } else l = a.child;
            if (null !== l) l.return = a;
            else
              for (l = a; null !== l; ) {
                if (l === e) {
                  l = null;
                  break;
                }
                if (null !== (a = l.sibling)) {
                  ((a.return = l.return), (l = a));
                  break;
                }
                l = l.return;
              }
            a = l;
          }
        }
        function Pa(e, t, n, r) {
          e = null;
          for (var a = t, o = !1; null !== a; ) {
            if (!o)
              if (0 !== (524288 & a.flags)) o = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var l = a.alternate;
              if (null === l) throw Error(i(387));
              if (null !== (l = l.memoizedProps)) {
                var s = a.type;
                Xn(a.pendingProps.value, l.value) ||
                  (null !== e ? e.push(s) : (e = [s]));
              }
            } else if (a === $.current) {
              if (null === (l = a.alternate)) throw Error(i(387));
              l.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(df) : (e = [df]));
            }
            a = a.return;
          }
          (null !== e && Fa(t, e, n, r), (t.flags |= 262144));
        }
        function Ta(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Xn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Va(e) {
          ((Aa = e),
            (Ea = null),
            null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function La(e) {
          return Da(Aa, e);
        }
        function Na(e, t) {
          return (null === Aa && Va(e), Da(e, t));
        }
        function Da(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === Ea)
          ) {
            if (null === e) throw Error(i(308));
            ((Ea = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288));
          } else Ea = Ea.next = t;
          return n;
        }
        var Ha =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    ((t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          ja = r.unstable_scheduleCallback,
          Za = r.unstable_NormalPriority,
          za = {
            $$typeof: w,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function _a() {
          return { controller: new Ha(), data: new Map(), refCount: 0 };
        }
        function Ra(e) {
          (e.refCount--,
            0 === e.refCount &&
              ja(Za, function () {
                e.controller.abort();
              }));
        }
        var Oa = null,
          Ia = 0,
          Ba = 0,
          Ua = null;
        function Wa() {
          if (0 === --Ia && null !== Oa) {
            null !== Ua && (Ua.status = "fulfilled");
            var e = Oa;
            ((Oa = null), (Ba = 0), (Ua = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var qa = D.S;
        D.S = function (e, t) {
          ((Nu = se()),
            "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then &&
              (function (e, t) {
                if (null === Oa) {
                  var n = (Oa = []);
                  ((Ia = 0),
                    (Ba = Ic()),
                    (Ua = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        n.push(e);
                      },
                    }));
                }
                (Ia++, t.then(Wa, Wa));
              })(0, t),
            null !== qa && qa(e, t));
        };
        var $a = _(null);
        function Ya() {
          var e = $a.current;
          return null !== e ? e : mu.pooledCache;
        }
        function Ka(e, t) {
          O($a, null === t ? $a.current : t.pool);
        }
        function Qa() {
          var e = Ya();
          return null === e ? null : { parent: za._currentValue, pool: e };
        }
        var Ga = Error(i(460)),
          Xa = Error(i(474)),
          Ja = Error(i(542)),
          eo = { then: function () {} };
        function to(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function no(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(Lt, Lt), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (io((e = t.reason)), e);
            default:
              if ("string" === typeof t.status) t.then(Lt, Lt);
              else {
                if (null !== (e = mu) && 100 < e.shellSuspendCounter)
                  throw Error(i(482));
                (((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "fulfilled"), (n.value = e));
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "rejected"), (n.reason = e));
                      }
                    },
                  ));
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw (io((e = t.reason)), e);
              }
              throw ((ao = t), Ga);
          }
        }
        function ro(e) {
          try {
            return (0, e._init)(e._payload);
          } catch (t) {
            if (
              null !== t &&
              "object" === typeof t &&
              "function" === typeof t.then
            )
              throw ((ao = t), Ga);
            throw t;
          }
        }
        var ao = null;
        function oo() {
          if (null === ao) throw Error(i(459));
          var e = ao;
          return ((ao = null), e);
        }
        function io(e) {
          if (e === Ga || e === Ja) throw Error(i(483));
        }
        var lo = null,
          so = 0;
        function uo(e) {
          var t = so;
          return ((so += 1), null === lo && (lo = []), no(lo, e, t));
        }
        function co(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function fo(e, t) {
          if (t.$$typeof === m) throw Error(i(525));
          throw (
            (e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            )
          );
        }
        function ho(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              (null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling));
            return t;
          }
          function a(e, t) {
            return (((e = Rr(e, t)).index = 0), (e.sibling = null), e);
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return (e && null === t.alternate && (t.flags |= 67108866), t);
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ur(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === v
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === M &&
                      ro(o) === t.type))
                ? (co((t = a(t, n.props)), n), (t.return = e), t)
                : (co((t = Ir(n.type, n.key, n.props, null, e.mode, r)), n),
                  (t.return = e),
                  t);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = qr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Br(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return (((t = Ur("" + t, e.mode, n)).return = e), t);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case p:
                  return (
                    co((n = Ir(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case g:
                  return (((t = qr(t, e.mode, n)).return = e), t);
                case M:
                  return f(e, (t = ro(t)), n);
              }
              if (N(t) || T(t))
                return (((t = Br(t, e.mode, n, null)).return = e), t);
              if ("function" === typeof t.then) return f(e, uo(t), n);
              if (t.$$typeof === w) return f(e, Na(e, t), n);
              fo(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case p:
                  return n.key === a ? u(e, t, n, r) : null;
                case g:
                  return n.key === a ? c(e, t, n, r) : null;
                case M:
                  return h(e, t, (n = ro(n)), r);
              }
              if (N(n) || T(n)) return null !== a ? null : d(e, t, n, r, null);
              if ("function" === typeof n.then) return h(e, t, uo(n), r);
              if (n.$$typeof === w) return h(e, t, Na(e, n), r);
              fo(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case p:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case g:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case M:
                  return m(e, t, n, (r = ro(r)), a);
              }
              if (N(r) || T(r)) return d(t, (e = e.get(n) || null), r, a, null);
              if ("function" === typeof r.then) return m(e, t, n, uo(r), a);
              if (r.$$typeof === w) return m(e, t, n, Na(t, r), a);
              fo(t, r);
            }
            return null;
          }
          function y(s, u, c, d) {
            if (
              ("object" === typeof c &&
                null !== c &&
                c.type === v &&
                null === c.key &&
                (c = c.props.children),
              "object" === typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case p:
                  e: {
                    for (var b = c.key; null !== u; ) {
                      if (u.key === b) {
                        if ((b = c.type) === v) {
                          if (7 === u.tag) {
                            (n(s, u.sibling),
                              ((d = a(u, c.props.children)).return = s),
                              (s = d));
                            break e;
                          }
                        } else if (
                          u.elementType === b ||
                          ("object" === typeof b &&
                            null !== b &&
                            b.$$typeof === M &&
                            ro(b) === u.type)
                        ) {
                          (n(s, u.sibling),
                            co((d = a(u, c.props)), c),
                            (d.return = s),
                            (s = d));
                          break e;
                        }
                        n(s, u);
                        break;
                      }
                      (t(s, u), (u = u.sibling));
                    }
                    c.type === v
                      ? (((d = Br(c.props.children, s.mode, d, c.key)).return =
                          s),
                        (s = d))
                      : (co(
                          (d = Ir(c.type, c.key, c.props, null, s.mode, d)),
                          c,
                        ),
                        (d.return = s),
                        (s = d));
                  }
                  return l(s);
                case g:
                  e: {
                    for (b = c.key; null !== u; ) {
                      if (u.key === b) {
                        if (
                          4 === u.tag &&
                          u.stateNode.containerInfo === c.containerInfo &&
                          u.stateNode.implementation === c.implementation
                        ) {
                          (n(s, u.sibling),
                            ((d = a(u, c.children || [])).return = s),
                            (s = d));
                          break e;
                        }
                        n(s, u);
                        break;
                      }
                      (t(s, u), (u = u.sibling));
                    }
                    (((d = qr(c, s.mode, d)).return = s), (s = d));
                  }
                  return l(s);
                case M:
                  return y(s, u, (c = ro(c)), d);
              }
              if (N(c))
                return (function (a, i, l, s) {
                  for (
                    var u = null, c = null, d = i, p = (i = 0), g = null;
                    null !== d && p < l.length;
                    p++
                  ) {
                    d.index > p ? ((g = d), (d = null)) : (g = d.sibling);
                    var v = h(a, d, l[p], s);
                    if (null === v) {
                      null === d && (d = g);
                      break;
                    }
                    (e && d && null === v.alternate && t(a, d),
                      (i = o(v, i, p)),
                      null === c ? (u = v) : (c.sibling = v),
                      (c = v),
                      (d = g));
                  }
                  if (p === l.length) return (n(a, d), da && aa(a, p), u);
                  if (null === d) {
                    for (; p < l.length; p++)
                      null !== (d = f(a, l[p], s)) &&
                        ((i = o(d, i, p)),
                        null === c ? (u = d) : (c.sibling = d),
                        (c = d));
                    return (da && aa(a, p), u);
                  }
                  for (d = r(d); p < l.length; p++)
                    null !== (g = m(d, a, p, l[p], s)) &&
                      (e &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? p : g.key),
                      (i = o(g, i, p)),
                      null === c ? (u = g) : (c.sibling = g),
                      (c = g));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    da && aa(a, p),
                    u
                  );
                })(s, u, c, d);
              if (T(c)) {
                if ("function" !== typeof (b = T(c))) throw Error(i(150));
                return (function (a, l, s, u) {
                  if (null == s) throw Error(i(151));
                  for (
                    var c = null,
                      d = null,
                      p = l,
                      g = (l = 0),
                      v = null,
                      y = s.next();
                    null !== p && !y.done;
                    g++, y = s.next()
                  ) {
                    p.index > g ? ((v = p), (p = null)) : (v = p.sibling);
                    var b = h(a, p, y.value, u);
                    if (null === b) {
                      null === p && (p = v);
                      break;
                    }
                    (e && p && null === b.alternate && t(a, p),
                      (l = o(b, l, g)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (p = v));
                  }
                  if (y.done) return (n(a, p), da && aa(a, g), c);
                  if (null === p) {
                    for (; !y.done; g++, y = s.next())
                      null !== (y = f(a, y.value, u)) &&
                        ((l = o(y, l, g)),
                        null === d ? (c = y) : (d.sibling = y),
                        (d = y));
                    return (da && aa(a, g), c);
                  }
                  for (p = r(p); !y.done; g++, y = s.next())
                    null !== (y = m(p, a, g, y.value, u)) &&
                      (e &&
                        null !== y.alternate &&
                        p.delete(null === y.key ? g : y.key),
                      (l = o(y, l, g)),
                      null === d ? (c = y) : (d.sibling = y),
                      (d = y));
                  return (
                    e &&
                      p.forEach(function (e) {
                        return t(a, e);
                      }),
                    da && aa(a, g),
                    c
                  );
                })(s, u, (c = b.call(c)), d);
              }
              if ("function" === typeof c.then) return y(s, u, uo(c), d);
              if (c.$$typeof === w) return y(s, u, Na(s, c), d);
              fo(s, c);
            }
            return ("string" === typeof c && "" !== c) ||
              "number" === typeof c ||
              "bigint" === typeof c
              ? ((c = "" + c),
                null !== u && 6 === u.tag
                  ? (n(s, u.sibling), ((d = a(u, c)).return = s), (s = d))
                  : (n(s, u), ((d = Ur(c, s.mode, d)).return = s), (s = d)),
                l(s))
              : n(s, u);
          }
          return function (e, t, n, r) {
            try {
              so = 0;
              var a = y(e, t, n, r);
              return ((lo = null), a);
            } catch (i) {
              if (i === Ga || i === Ja) throw i;
              var o = zr(29, i, null, e.mode);
              return ((o.lanes = r), (o.return = e), o);
            }
          };
        }
        var mo = ho(!0),
          po = ho(!1),
          go = !1;
        function vo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function yo(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              }));
        }
        function bo(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function xo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & hu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = Hr(e)),
              Dr(e, null, n),
              t
            );
          }
          return (Vr(e, r, t, n), Hr(e));
        }
        function wo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194048 & n))
          ) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), De(e, n));
          }
        }
        function ko(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                (null === o ? (a = o = i) : (o = o.next = i), (n = n.next));
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        var Ao = !1;
        function Eo() {
          if (Ao) {
            if (null !== Ua) throw Ua;
          }
        }
        function So(e, t, n, r) {
          Ao = !1;
          var a = e.updateQueue;
          go = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            ((s.next = null), null === i ? (o = u) : (i.next = u), (i = s));
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, l = o; ; ) {
              var f = -536870913 & l.lane,
                m = f !== l.lane;
              if (m ? (gu & f) === f : (r & f) === f) {
                (0 !== f && f === Ba && (Ao = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null,
                      }));
                e: {
                  var p = e,
                    g = l;
                  f = t;
                  var v = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" === typeof (p = g.payload)) {
                        d = p.call(v, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = g.payload)
                              ? p.call(v, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = h({}, d, f);
                      break e;
                    case 2:
                      go = !0;
                  }
                }
                null !== (f = l.callback) &&
                  ((e.flags |= 64),
                  m && (e.flags |= 8192),
                  null === (m = a.callbacks) ? (a.callbacks = [f]) : m.push(f));
              } else
                ((m = {
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = m), (s = d)) : (c = c.next = m),
                  (i |= f));
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                ((l = (m = l).next),
                  (m.next = null),
                  (a.lastBaseUpdate = m),
                  (a.shared.pending = null));
              }
            }
            (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null === o && (a.shared.lanes = 0),
              (Eu |= i),
              (e.lanes = i),
              (e.memoizedState = d));
          }
        }
        function Mo(e, t) {
          if ("function" !== typeof e) throw Error(i(191, e));
          e.call(t);
        }
        function Co(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Mo(n[e], t);
        }
        var Fo = _(null),
          Po = _(0);
        function To(e, t) {
          (O(Po, (e = ku)), O(Fo, t), (ku = e | t.baseLanes));
        }
        function Vo() {
          (O(Po, ku), O(Fo, Fo.current));
        }
        function Lo() {
          ((ku = Po.current), R(Fo), R(Po));
        }
        var No = _(null),
          Do = null;
        function Ho(e) {
          var t = e.alternate;
          (O(Ro, 1 & Ro.current),
            O(No, e),
            null === Do &&
              (null === t || null !== Fo.current || null !== t.memoizedState) &&
              (Do = e));
        }
        function jo(e) {
          (O(Ro, Ro.current), O(No, e), null === Do && (Do = e));
        }
        function Zo(e) {
          22 === e.tag
            ? (O(Ro, Ro.current), O(No, e), null === Do && (Do = e))
            : zo();
        }
        function zo() {
          (O(Ro, Ro.current), O(No, No.current));
        }
        function _o(e) {
          (R(No), Do === e && (Do = null), R(Ro));
        }
        var Ro = _(0);
        function Oo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || Vd(n) || Ld(n)))
                return t;
            } else if (
              19 !== t.tag ||
              ("forwards" !== t.memoizedProps.revealOrder &&
                "backwards" !== t.memoizedProps.revealOrder &&
                "unstable_legacy-backwards" !== t.memoizedProps.revealOrder &&
                "together" !== t.memoizedProps.revealOrder)
            ) {
              if (null !== t.child) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
            } else if (0 !== (128 & t.flags)) return t;
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        var Io = 0,
          Bo = null,
          Uo = null,
          Wo = null,
          qo = !1,
          $o = !1,
          Yo = !1,
          Ko = 0,
          Qo = 0,
          Go = null,
          Xo = 0;
        function Jo() {
          throw Error(i(321));
        }
        function ei(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Xn(e[n], t[n])) return !1;
          return !0;
        }
        function ti(e, t, n, r, a, o) {
          return (
            (Io = o),
            (Bo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (D.H = null === e || null === e.memoizedState ? gl : vl),
            (Yo = !1),
            (o = n(r, a)),
            (Yo = !1),
            $o && (o = ri(t, n, r, a)),
            ni(e),
            o
          );
        }
        function ni(e) {
          D.H = pl;
          var t = null !== Uo && null !== Uo.next;
          if (
            ((Io = 0),
            (Wo = Uo = Bo = null),
            (qo = !1),
            (Qo = 0),
            (Go = null),
            t)
          )
            throw Error(i(300));
          null === e ||
            Nl ||
            (null !== (e = e.dependencies) && Ta(e) && (Nl = !0));
        }
        function ri(e, t, n, r) {
          Bo = e;
          var a = 0;
          do {
            if (($o && (Go = null), (Qo = 0), ($o = !1), 25 <= a))
              throw Error(i(301));
            if (((a += 1), (Wo = Uo = null), null != e.updateQueue)) {
              var o = e.updateQueue;
              ((o.lastEffect = null),
                (o.events = null),
                (o.stores = null),
                null != o.memoCache && (o.memoCache.index = 0));
            }
            ((D.H = yl), (o = t(n, r)));
          } while ($o);
          return o;
        }
        function ai() {
          var e = D.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? ci(t) : t),
            (e = e.useState()[0]),
            (null !== Uo ? Uo.memoizedState : null) !== e && (Bo.flags |= 1024),
            t
          );
        }
        function oi() {
          var e = 0 !== Ko;
          return ((Ko = 0), e);
        }
        function ii(e, t, n) {
          ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~n));
        }
        function li(e) {
          if (qo) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            qo = !1;
          }
          ((Io = 0),
            (Wo = Uo = Bo = null),
            ($o = !1),
            (Qo = Ko = 0),
            (Go = null));
        }
        function si() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Wo ? (Bo.memoizedState = Wo = e) : (Wo = Wo.next = e),
            Wo
          );
        }
        function ui() {
          if (null === Uo) {
            var e = Bo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Uo.next;
          var t = null === Wo ? Bo.memoizedState : Wo.next;
          if (null !== t) ((Wo = t), (Uo = e));
          else {
            if (null === e) {
              if (null === Bo.alternate) throw Error(i(467));
              throw Error(i(310));
            }
            ((e = {
              memoizedState: (Uo = e).memoizedState,
              baseState: Uo.baseState,
              baseQueue: Uo.baseQueue,
              queue: Uo.queue,
              next: null,
            }),
              null === Wo ? (Bo.memoizedState = Wo = e) : (Wo = Wo.next = e));
          }
          return Wo;
        }
        function ci(e) {
          var t = Qo;
          return (
            (Qo += 1),
            null === Go && (Go = []),
            (e = no(Go, e, t)),
            (t = Bo),
            null === (null === Wo ? t.memoizedState : Wo.next) &&
              ((t = t.alternate),
              (D.H = null === t || null === t.memoizedState ? gl : vl)),
            e
          );
        }
        function di(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return ci(e);
            if (e.$$typeof === w) return La(e);
          }
          throw Error(i(438, String(e)));
        }
        function fi(e) {
          var t = null,
            n = Bo.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Bo.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Bo.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = F;
          return (t.index++, n);
        }
        function hi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function mi(e) {
          return pi(ui(), Uo, e);
        }
        function pi(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            o = r.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              ((a.next = o.next), (o.next = l));
            }
            ((t.baseQueue = a = o), (r.pending = null));
          }
          if (((o = e.baseState), null === a)) e.memoizedState = o;
          else {
            var s = (l = null),
              u = null,
              c = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (gu & f) === f : (Io & f) === f) {
                var h = c.revertLane;
                if (0 === h)
                  (null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    f === Ba && (d = !0));
                else {
                  if ((Io & h) === h) {
                    ((c = c.next), h === Ba && (d = !0));
                    continue;
                  }
                  ((f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === u ? ((s = u = f), (l = o)) : (u = u.next = f),
                    (Bo.lanes |= h),
                    (Eu |= h));
                }
                ((f = c.action),
                  Yo && n(o, f),
                  (o = c.hasEagerState ? c.eagerState : n(o, f)));
              } else
                ((h = {
                  lane: f,
                  revertLane: c.revertLane,
                  gesture: c.gesture,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((s = u = h), (l = o)) : (u = u.next = h),
                  (Bo.lanes |= f),
                  (Eu |= f));
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (l = o) : (u.next = s),
              !Xn(o, e.memoizedState) && ((Nl = !0), d && null !== (n = Ua)))
            )
              throw n;
            ((e.memoizedState = o),
              (e.baseState = l),
              (e.baseQueue = u),
              (r.lastRenderedState = o));
          }
          return (null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]);
        }
        function gi(e) {
          var t = ui(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              ((o = e(o, l.action)), (l = l.next));
            } while (l !== a);
            (Xn(o, t.memoizedState) || (Nl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o));
          }
          return [o, r];
        }
        function vi(e, t, n) {
          var r = Bo,
            a = ui(),
            o = da;
          if (o) {
            if (void 0 === n) throw Error(i(407));
            n = n();
          } else n = t();
          var l = !Xn((Uo || a).memoizedState, n);
          if (
            (l && ((a.memoizedState = n), (Nl = !0)),
            (a = a.queue),
            Ii(xi.bind(null, r, a, e), [e]),
            a.getSnapshot !== t ||
              l ||
              (null !== Wo && 1 & Wo.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Zi(9, { destroy: void 0 }, bi.bind(null, r, a, n, t), null),
              null === mu)
            )
              throw Error(i(349));
            o || 0 !== (127 & Io) || yi(r, t, n);
          }
          return n;
        }
        function yi(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Bo.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Bo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function bi(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), wi(t) && ki(e));
        }
        function xi(e, t, n) {
          return n(function () {
            wi(t) && ki(e);
          });
        }
        function wi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Xn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function ki(e) {
          var t = Nr(e, 2);
          null !== t && Yu(t, e, 2);
        }
        function Ai(e) {
          var t = si();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), Yo)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: hi,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Ei(e, t, n, r) {
          return (
            (e.baseState = n),
            pi(e, Uo, "function" === typeof r ? r : hi)
          );
        }
        function Si(e, t, n, r, a) {
          if (fl(e)) throw Error(i(485));
          if (null !== (e = t.action)) {
            var o = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                o.listeners.push(e);
              },
            };
            (null !== D.T ? n(!0) : (o.isTransition = !1),
              r(o),
              null === (n = t.pending)
                ? ((o.next = t.pending = o), Mi(t, o))
                : ((o.next = n.next), (t.pending = n.next = o)));
          }
        }
        function Mi(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var o = D.T,
              i = {};
            D.T = i;
            try {
              var l = n(a, r),
                s = D.S;
              (null !== s && s(i, l), Ci(e, t, l));
            } catch (u) {
              Pi(e, t, u);
            } finally {
              (null !== o && null !== i.types && (o.types = i.types),
                (D.T = o));
            }
          } else
            try {
              Ci(e, t, (o = n(a, r)));
            } catch (c) {
              Pi(e, t, c);
            }
        }
        function Ci(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  Fi(e, t, n);
                },
                function (n) {
                  return Pi(e, t, n);
                },
              )
            : Fi(e, t, n);
        }
        function Fi(e, t, n) {
          ((t.status = "fulfilled"),
            (t.value = n),
            Ti(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Mi(e, n))));
        }
        function Pi(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((t.status = "rejected"), (t.reason = n), Ti(t), (t = t.next));
            } while (t !== r);
          }
          e.action = null;
        }
        function Ti(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Vi(e, t) {
          return t;
        }
        function Li(e, t) {
          if (da) {
            var n = mu.formState;
            if (null !== n) {
              e: {
                var r = Bo;
                if (da) {
                  if (ca) {
                    t: {
                      for (var a = ca, o = ha; 8 !== a.nodeType; ) {
                        if (!o) {
                          a = null;
                          break t;
                        }
                        if (null === (a = Nd(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (o = a.data) || "F" === o ? a : null;
                    }
                    if (a) {
                      ((ca = Nd(a.nextSibling)), (r = "F!" === a.data));
                      break e;
                    }
                  }
                  pa(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = si()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Vi,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = ul.bind(null, Bo, r)),
            (r.dispatch = n),
            (r = Ai(!1)),
            (o = dl.bind(null, Bo, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = si()).queue = a),
            (n = Si.bind(null, Bo, a, o, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Ni(e) {
          return Di(ui(), Uo, e);
        }
        function Di(e, t, n) {
          if (
            ((t = pi(e, t, Vi)[0]),
            (e = mi(hi)[0]),
            "object" === typeof t && null !== t && "function" === typeof t.then)
          )
            try {
              var r = ci(t);
            } catch (i) {
              if (i === Ga) throw Ja;
              throw i;
            }
          else r = t;
          var a = (t = ui()).queue,
            o = a.dispatch;
          return (
            n !== t.memoizedState &&
              ((Bo.flags |= 2048),
              Zi(9, { destroy: void 0 }, Hi.bind(null, a, n), null)),
            [r, o, e]
          );
        }
        function Hi(e, t) {
          e.action = t;
        }
        function ji(e) {
          var t = ui(),
            n = Uo;
          if (null !== n) return Di(t, n, e);
          (ui(), (t = t.memoizedState));
          var r = (n = ui()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function Zi(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = Bo.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Bo.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zi() {
          return ui().memoizedState;
        }
        function _i(e, t, n, r) {
          var a = si();
          ((Bo.flags |= e),
            (a.memoizedState = Zi(
              1 | t,
              { destroy: void 0 },
              n,
              void 0 === r ? null : r,
            )));
        }
        function Ri(e, t, n, r) {
          var a = ui();
          r = void 0 === r ? null : r;
          var o = a.memoizedState.inst;
          null !== Uo && null !== r && ei(r, Uo.memoizedState.deps)
            ? (a.memoizedState = Zi(t, o, n, r))
            : ((Bo.flags |= e), (a.memoizedState = Zi(1 | t, o, n, r)));
        }
        function Oi(e, t) {
          _i(8390656, 8, e, t);
        }
        function Ii(e, t) {
          Ri(2048, 8, e, t);
        }
        function Bi(e) {
          var t = ui().memoizedState;
          return (
            (function (e) {
              Bo.flags |= 4;
              var t = Bo.updateQueue;
              if (null === t)
                ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                  (Bo.updateQueue = t),
                  (t.events = [e]));
              else {
                var n = t.events;
                null === n ? (t.events = [e]) : n.push(e);
              }
            })({ ref: t, nextImpl: e }),
            function () {
              if (0 !== (2 & hu)) throw Error(i(440));
              return t.impl.apply(void 0, arguments);
            }
          );
        }
        function Ui(e, t) {
          return Ri(4, 2, e, t);
        }
        function Wi(e, t) {
          return Ri(4, 4, e, t);
        }
        function qi(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function $i(e, t, n) {
          ((n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ri(4, 4, qi.bind(null, t, e), n));
        }
        function Yi() {}
        function Ki(e, t) {
          var n = ui();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && ei(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Qi(e, t) {
          var n = ui();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && ei(t, r[1])) return r[0];
          if (((r = e()), Yo)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function Gi(e, t, n) {
          return void 0 === n ||
            (0 !== (1073741824 & Io) && 0 === (261930 & gu))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = $u()),
              (Bo.lanes |= e),
              (Eu |= e),
              n);
        }
        function Xi(e, t, n, r) {
          return Xn(n, t)
            ? n
            : null !== Fo.current
              ? ((e = Gi(e, n, r)), Xn(e, t) || (Nl = !0), e)
              : 0 === (42 & Io) ||
                  (0 !== (1073741824 & Io) && 0 === (261930 & gu))
                ? ((Nl = !0), (e.memoizedState = n))
                : ((e = $u()), (Bo.lanes |= e), (Eu |= e), t);
        }
        function Ji(e, t, n, r, a) {
          var o = H.p;
          H.p = 0 !== o && 8 > o ? o : 8;
          var i = D.T,
            l = {};
          ((D.T = l), dl(e, !1, t, n));
          try {
            var s = a(),
              u = D.S;
            if (
              (null !== u && u(l, s),
              null !== s &&
                "object" === typeof s &&
                "function" === typeof s.then)
            )
              cl(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        ((r.status = "fulfilled"), (r.value = t));
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      },
                    ),
                    r
                  );
                })(s, r),
                qu(),
              );
            else cl(e, t, r, qu());
          } catch (c) {
            cl(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              qu(),
            );
          } finally {
            ((H.p = o),
              null !== i && null !== l.types && (i.types = l.types),
              (D.T = i));
          }
        }
        function el() {}
        function tl(e, t, n, r) {
          if (5 !== e.tag) throw Error(i(476));
          var a = nl(e).queue;
          Ji(
            e,
            a,
            t,
            j,
            null === n
              ? el
              : function () {
                  return (rl(e), n(r));
                },
          );
        }
        function nl(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: j,
              baseState: j,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hi,
                lastRenderedState: j,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hi,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function rl(e) {
          var t = nl(e);
          (null === t.next && (t = e.alternate.memoizedState),
            cl(e, t.next.queue, {}, qu()));
        }
        function al() {
          return La(df);
        }
        function ol() {
          return ui().memoizedState;
        }
        function il() {
          return ui().memoizedState;
        }
        function ll(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = qu(),
                  r = xo(t, (e = bo(n)), n);
                return (
                  null !== r && (Yu(r, t, n), wo(r, t, n)),
                  (t = { cache: _a() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function sl(e, t, n) {
          var r = qu();
          ((n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            fl(e)
              ? hl(t, n)
              : null !== (n = Lr(e, t, n, r)) && (Yu(n, e, r), ml(n, t, r)));
        }
        function ul(e, t, n) {
          cl(e, t, n, qu());
        }
        function cl(e, t, n, r) {
          var a = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (fl(e)) hl(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), Xn(l, i)))
                  return (Vr(e, t, a, 0), null === mu && Tr(), !1);
              } catch (s) {}
            if (null !== (n = Lr(e, t, a, r)))
              return (Yu(n, e, r), ml(n, t, r), !0);
          }
          return !1;
        }
        function dl(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Ic(),
              gesture: null,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            fl(e))
          ) {
            if (t) throw Error(i(479));
          } else null !== (t = Lr(e, n, r, 2)) && Yu(t, e, 2);
        }
        function fl(e) {
          var t = e.alternate;
          return e === Bo || (null !== t && t === Bo);
        }
        function hl(e, t) {
          $o = qo = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t));
        }
        function ml(e, t, n) {
          if (0 !== (4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), De(e, n));
          }
        }
        var pl = {
          readContext: La,
          use: di,
          useCallback: Jo,
          useContext: Jo,
          useEffect: Jo,
          useImperativeHandle: Jo,
          useLayoutEffect: Jo,
          useInsertionEffect: Jo,
          useMemo: Jo,
          useReducer: Jo,
          useRef: Jo,
          useState: Jo,
          useDebugValue: Jo,
          useDeferredValue: Jo,
          useTransition: Jo,
          useSyncExternalStore: Jo,
          useId: Jo,
          useHostTransitionStatus: Jo,
          useFormState: Jo,
          useActionState: Jo,
          useOptimistic: Jo,
          useMemoCache: Jo,
          useCacheRefresh: Jo,
        };
        pl.useEffectEvent = Jo;
        var gl = {
            readContext: La,
            use: di,
            useCallback: function (e, t) {
              return ((si().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: La,
            useEffect: Oi,
            useImperativeHandle: function (e, t, n) {
              ((n = null !== n && void 0 !== n ? n.concat([e]) : null),
                _i(4194308, 4, qi.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return _i(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              _i(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = si();
              t = void 0 === t ? null : t;
              var r = e();
              if (Yo) {
                be(!0);
                try {
                  e();
                } finally {
                  be(!1);
                }
              }
              return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
              var r = si();
              if (void 0 !== n) {
                var a = n(t);
                if (Yo) {
                  be(!0);
                  try {
                    n(t);
                  } finally {
                    be(!1);
                  }
                }
              } else a = t;
              return (
                (r.memoizedState = r.baseState = a),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: a,
                }),
                (r.queue = e),
                (e = e.dispatch = sl.bind(null, Bo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (si().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = Ai(e)).queue,
                n = ul.bind(null, Bo, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e, t) {
              return Gi(si(), e, t);
            },
            useTransition: function () {
              var e = Ai(!1);
              return (
                (e = Ji.bind(null, Bo, e.queue, !0, !1)),
                (si().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, t, n) {
              var r = Bo,
                a = si();
              if (da) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === mu)) throw Error(i(349));
                0 !== (127 & gu) || yi(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Oi(xi.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Zi(9, { destroy: void 0 }, bi.bind(null, r, o, n, t), null),
                n
              );
            },
            useId: function () {
              var e = si(),
                t = mu.identifierPrefix;
              if (da) {
                var n = ra;
                ((t =
                  "_" +
                  t +
                  "R_" +
                  (n = (na & ~(1 << (32 - xe(na) - 1))).toString(32) + n)),
                  0 < (n = Ko++) && (t += "H" + n.toString(32)),
                  (t += "_"));
              } else t = "_" + t + "r_" + (n = Xo++).toString(32) + "_";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: al,
            useFormState: Li,
            useActionState: Li,
            useOptimistic: function (e) {
              var t = si();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = n),
                (t = dl.bind(null, Bo, !0, n)),
                (n.dispatch = t),
                [e, t]
              );
            },
            useMemoCache: fi,
            useCacheRefresh: function () {
              return (si().memoizedState = ll.bind(null, Bo));
            },
            useEffectEvent: function (e) {
              var t = si(),
                n = { impl: e };
              return (
                (t.memoizedState = n),
                function () {
                  if (0 !== (2 & hu)) throw Error(i(440));
                  return n.impl.apply(void 0, arguments);
                }
              );
            },
          },
          vl = {
            readContext: La,
            use: di,
            useCallback: Ki,
            useContext: La,
            useEffect: Ii,
            useImperativeHandle: $i,
            useInsertionEffect: Ui,
            useLayoutEffect: Wi,
            useMemo: Qi,
            useReducer: mi,
            useRef: zi,
            useState: function () {
              return mi(hi);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e, t) {
              return Xi(ui(), Uo.memoizedState, e, t);
            },
            useTransition: function () {
              var e = mi(hi)[0],
                t = ui().memoizedState;
              return ["boolean" === typeof e ? e : ci(e), t];
            },
            useSyncExternalStore: vi,
            useId: ol,
            useHostTransitionStatus: al,
            useFormState: Ni,
            useActionState: Ni,
            useOptimistic: function (e, t) {
              return Ei(ui(), 0, e, t);
            },
            useMemoCache: fi,
            useCacheRefresh: il,
          };
        vl.useEffectEvent = Bi;
        var yl = {
          readContext: La,
          use: di,
          useCallback: Ki,
          useContext: La,
          useEffect: Ii,
          useImperativeHandle: $i,
          useInsertionEffect: Ui,
          useLayoutEffect: Wi,
          useMemo: Qi,
          useReducer: gi,
          useRef: zi,
          useState: function () {
            return gi(hi);
          },
          useDebugValue: Yi,
          useDeferredValue: function (e, t) {
            var n = ui();
            return null === Uo ? Gi(n, e, t) : Xi(n, Uo.memoizedState, e, t);
          },
          useTransition: function () {
            var e = gi(hi)[0],
              t = ui().memoizedState;
            return ["boolean" === typeof e ? e : ci(e), t];
          },
          useSyncExternalStore: vi,
          useId: ol,
          useHostTransitionStatus: al,
          useFormState: ji,
          useActionState: ji,
          useOptimistic: function (e, t) {
            var n = ui();
            return null !== Uo
              ? Ei(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          },
          useMemoCache: fi,
          useCacheRefresh: il,
        };
        function bl(e, t, n, r) {
          ((n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : h({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        yl.useEffectEvent = Bi;
        var xl = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = qu(),
              a = bo(r);
            ((a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = xo(e, a, r)) && (Yu(t, e, r), wo(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = qu(),
              a = bo(r);
            ((a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = xo(e, a, r)) && (Yu(t, e, r), wo(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = qu(),
              r = bo(n);
            ((r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = xo(e, r, n)) && (Yu(t, e, n), wo(t, e, n)));
          },
        };
        function wl(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Jn(n, r) ||
                !Jn(a, o);
        }
        function kl(e, t, n, r) {
          ((e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && xl.enqueueReplaceState(t, t.state, null));
        }
        function Al(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var a in (n === t && (n = h({}, n)), e))
              void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        function El(e) {
          Mr(e);
        }
        function Sl(e) {
          console.error(e);
        }
        function Ml(e) {
          Mr(e);
        }
        function Cl(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Fl(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Pl(e, t, n) {
          return (
            ((n = bo(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Cl(e, t);
            }),
            n
          );
        }
        function Tl(e) {
          return (((e = bo(e)).tag = 3), e);
        }
        function Vl(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var o = r.value;
            ((e.payload = function () {
              return a(o);
            }),
              (e.callback = function () {
                Fl(t, n, r);
              }));
          }
          var i = n.stateNode;
          null !== i &&
            "function" === typeof i.componentDidCatch &&
            (e.callback = function () {
              (Fl(t, n, r),
                "function" !== typeof a &&
                  (null === ju ? (ju = new Set([this])) : ju.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Ll = Error(i(461)),
          Nl = !1;
        function Dl(e, t, n, r) {
          t.child = null === e ? po(t, null, n, r) : mo(t, e.child, n, r);
        }
        function Hl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          if ("ref" in r) {
            var i = {};
            for (var l in r) "ref" !== l && (i[l] = r[l]);
          } else i = r;
          return (
            Va(t),
            (r = ti(e, t, n, i, o, a)),
            (l = oi()),
            null === e || Nl
              ? (da && l && ia(t), (t.flags |= 1), Dl(e, t, r, a), t.child)
              : (ii(e, t, a), as(e, t, a))
          );
        }
        function jl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              _r(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare
              ? (((e = Ir(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Zl(e, t, o, r, a));
          }
          if (((o = e.child), !os(e, a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Jn)(i, r) &&
              e.ref === t.ref
            )
              return as(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Rr(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Zl(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (Jn(o, r) && e.ref === t.ref) {
              if (((Nl = !1), (t.pendingProps = r = o), !os(e, a)))
                return ((t.lanes = e.lanes), as(e, t, a));
              0 !== (131072 & e.flags) && (Nl = !0);
            }
          }
          return Ul(e, t, n, r, a);
        }
        function zl(e, t, n, r) {
          var a = r.children,
            o = null !== e ? e.memoizedState : null;
          if (
            (null === e &&
              null === t.stateNode &&
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            "hidden" === r.mode)
          ) {
            if (0 !== (128 & t.flags)) {
              if (((o = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (r = t.child = e.child, a = 0; null !== r; )
                  ((a = a | r.lanes | r.childLanes), (r = r.sibling));
                r = a & ~o;
              } else ((r = 0), (t.child = null));
              return Rl(e, t, o, n, r);
            }
            if (0 === (536870912 & n))
              return (
                (r = t.lanes = 536870912),
                Rl(e, t, null !== o ? o.baseLanes | n : n, n, r)
              );
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Ka(0, null !== o ? o.cachePool : null),
              null !== o ? To(t, o) : Vo(),
              Zo(t));
          } else
            null !== o
              ? (Ka(0, o.cachePool), To(t, o), zo(), (t.memoizedState = null))
              : (null !== e && Ka(0, null), Vo(), zo());
          return (Dl(e, t, a, n), t.child);
        }
        function _l(e, t) {
          return (
            (null !== e && 22 === e.tag) ||
              null !== t.stateNode ||
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            t.sibling
          );
        }
        function Rl(e, t, n, r, a) {
          var o = Ya();
          return (
            (o = null === o ? null : { parent: za._currentValue, pool: o }),
            (t.memoizedState = { baseLanes: n, cachePool: o }),
            null !== e && Ka(0, null),
            Vo(),
            Zo(t),
            null !== e && Pa(e, t, r, !0),
            (t.childLanes = a),
            null
          );
        }
        function Ol(e, t) {
          return (
            ((t = Jl({ mode: t.mode, children: t.children }, e.mode)).ref =
              e.ref),
            (e.child = t),
            (t.return = e),
            t
          );
        }
        function Il(e, t, n) {
          return (
            mo(t, e.child, null, n),
            ((e = Ol(t, t.pendingProps)).flags |= 2),
            _o(t),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(i(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ul(e, t, n, r, a) {
          return (
            Va(t),
            (n = ti(e, t, n, r, void 0, a)),
            (r = oi()),
            null === e || Nl
              ? (da && r && ia(t), (t.flags |= 1), Dl(e, t, n, a), t.child)
              : (ii(e, t, a), as(e, t, a))
          );
        }
        function Wl(e, t, n, r, a, o) {
          return (
            Va(t),
            (t.updateQueue = null),
            (n = ri(t, r, n, a)),
            ni(e),
            (r = oi()),
            null === e || Nl
              ? (da && r && ia(t), (t.flags |= 1), Dl(e, t, n, o), t.child)
              : (ii(e, t, o), as(e, t, o))
          );
        }
        function ql(e, t, n, r, a) {
          if ((Va(t), null === t.stateNode)) {
            var o = jr,
              i = n.contextType;
            ("object" === typeof i && null !== i && (o = La(i)),
              (o = new n(r, o)),
              (t.memoizedState =
                null !== o.state && void 0 !== o.state ? o.state : null),
              (o.updater = xl),
              (t.stateNode = o),
              (o._reactInternals = t),
              ((o = t.stateNode).props = r),
              (o.state = t.memoizedState),
              (o.refs = {}),
              vo(t),
              (i = n.contextType),
              (o.context = "object" === typeof i && null !== i ? La(i) : jr),
              (o.state = t.memoizedState),
              "function" === typeof (i = n.getDerivedStateFromProps) &&
                (bl(t, n, i, r), (o.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof o.getSnapshotBeforeUpdate ||
                ("function" !== typeof o.UNSAFE_componentWillMount &&
                  "function" !== typeof o.componentWillMount) ||
                ((i = o.state),
                "function" === typeof o.componentWillMount &&
                  o.componentWillMount(),
                "function" === typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount(),
                i !== o.state && xl.enqueueReplaceState(o, o.state, null),
                So(t, r, o, a),
                Eo(),
                (o.state = t.memoizedState)),
              "function" === typeof o.componentDidMount && (t.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            o = t.stateNode;
            var l = t.memoizedProps,
              s = Al(n, l);
            o.props = s;
            var u = o.context,
              c = n.contextType;
            ((i = jr), "object" === typeof c && null !== c && (i = La(c)));
            var d = n.getDerivedStateFromProps;
            ((c =
              "function" === typeof d ||
              "function" === typeof o.getSnapshotBeforeUpdate),
              (l = t.pendingProps !== l),
              c ||
                ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof o.componentWillReceiveProps) ||
                ((l || u !== i) && kl(t, o, r, i)),
              (go = !1));
            var f = t.memoizedState;
            ((o.state = f),
              So(t, r, o, a),
              Eo(),
              (u = t.memoizedState),
              l || f !== u || go
                ? ("function" === typeof d &&
                    (bl(t, n, d, r), (u = t.memoizedState)),
                  (s = go || wl(t, n, s, r, f, u, i))
                    ? (c ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = i),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1)));
          } else {
            ((o = t.stateNode),
              yo(e, t),
              (c = Al(n, (i = t.memoizedProps))),
              (o.props = c),
              (d = t.pendingProps),
              (f = o.context),
              (u = n.contextType),
              (s = jr),
              "object" === typeof u && null !== u && (s = La(u)),
              (u =
                "function" === typeof (l = n.getDerivedStateFromProps) ||
                "function" === typeof o.getSnapshotBeforeUpdate) ||
                ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof o.componentWillReceiveProps) ||
                ((i !== d || f !== s) && kl(t, o, r, s)),
              (go = !1),
              (f = t.memoizedState),
              (o.state = f),
              So(t, r, o, a),
              Eo());
            var h = t.memoizedState;
            i !== d ||
            f !== h ||
            go ||
            (null !== e && null !== e.dependencies && Ta(e.dependencies))
              ? ("function" === typeof l &&
                  (bl(t, n, l, r), (h = t.memoizedState)),
                (c =
                  go ||
                  wl(t, n, c, r, f, h, s) ||
                  (null !== e && null !== e.dependencies && Ta(e.dependencies)))
                  ? (u ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (o = r),
            Bl(e, t),
            (r = 0 !== (128 & t.flags)),
            o || r
              ? ((o = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : o.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = mo(t, e.child, null, a)),
                    (t.child = mo(t, null, n, a)))
                  : Dl(e, t, n, a),
                (t.memoizedState = o.state),
                (e = t.child))
              : (e = as(e, t, a)),
            e
          );
        }
        function $l(e, t, n, r) {
          return (ba(), (t.flags |= 256), Dl(e, t, n, r), t.child);
        }
        var Yl = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Kl(e) {
          return { baseLanes: e, cachePool: Qa() };
        }
        function Ql(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Cu), e);
        }
        function Gl(e, t, n) {
          var r,
            a = t.pendingProps,
            o = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & Ro.current)),
            r && ((o = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (da) {
              if (
                (o ? Ho(t) : zo(),
                (e = ca)
                  ? null !==
                      (e =
                        null !== (e = Td(e, ha)) && "&" !== e.data
                          ? e
                          : null) &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext:
                        null !== ta ? { id: na, overflow: ra } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((n = Wr(e)).return = t),
                    (t.child = n),
                    (ua = t),
                    (ca = null))
                  : (e = null),
                null === e)
              )
                throw pa(t);
              return (Ld(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var s = a.children;
            return (
              (a = a.fallback),
              o
                ? (zo(),
                  (s = Jl({ mode: "hidden", children: s }, (o = t.mode))),
                  (a = Br(a, o, n, null)),
                  (s.return = t),
                  (a.return = t),
                  (s.sibling = a),
                  (t.child = s),
                  ((a = t.child).memoizedState = Kl(n)),
                  (a.childLanes = Ql(e, r, n)),
                  (t.memoizedState = Yl),
                  _l(null, a))
                : (Ho(t), Xl(t, s))
            );
          }
          var u = e.memoizedState;
          if (null !== u && null !== (s = u.dehydrated)) {
            if (l)
              256 & t.flags
                ? (Ho(t), (t.flags &= -257), (t = es(e, t, n)))
                : null !== t.memoizedState
                  ? (zo(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (zo(),
                    (s = a.fallback),
                    (o = t.mode),
                    (a = Jl({ mode: "visible", children: a.children }, o)),
                    ((s = Br(s, o, n, null)).flags |= 2),
                    (a.return = t),
                    (s.return = t),
                    (a.sibling = s),
                    (t.child = a),
                    mo(t, e.child, null, n),
                    ((a = t.child).memoizedState = Kl(n)),
                    (a.childLanes = Ql(e, r, n)),
                    (t.memoizedState = Yl),
                    (t = _l(null, a)));
            else if ((Ho(t), Ld(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              ((r = c),
                ((a = Error(i(419))).stack = ""),
                (a.digest = r),
                wa({ value: a, source: null, stack: null }),
                (t = es(e, t, n)));
            } else if (
              (Nl || Pa(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Nl || r)
            ) {
              if (
                null !== (r = mu) &&
                0 !== (a = He(r, n)) &&
                a !== u.retryLane
              )
                throw ((u.retryLane = a), Nr(e, a), Yu(r, e, a), Ll);
              (Vd(s) || ic(), (t = es(e, t, n)));
            } else
              Vd(s)
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = u.treeContext),
                  (ca = Nd(s.nextSibling)),
                  (ua = t),
                  (da = !0),
                  (fa = null),
                  (ha = !1),
                  null !== e && sa(t, e),
                  ((t = Xl(t, a.children)).flags |= 4096));
            return t;
          }
          return o
            ? (zo(),
              (s = a.fallback),
              (o = t.mode),
              (c = (u = e.child).sibling),
              ((a = Rr(u, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 65011712 & u.subtreeFlags),
              null !== c
                ? (s = Rr(c, s))
                : ((s = Br(s, o, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              _l(null, a),
              (a = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Kl(n))
                : (null !== (o = s.cachePool)
                    ? ((u = za._currentValue),
                      (o = o.parent !== u ? { parent: u, pool: u } : o))
                    : (o = Qa()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: o })),
              (a.memoizedState = s),
              (a.childLanes = Ql(e, r, n)),
              (t.memoizedState = Yl),
              _l(e.child, a))
            : (Ho(t),
              (e = (n = e.child).sibling),
              ((n = Rr(n, { mode: "visible", children: a.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Xl(e, t) {
          return (
            ((t = Jl({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function Jl(e, t) {
          return (((e = zr(22, e, null, t)).lanes = 0), e);
        }
        function es(e, t, n) {
          return (
            mo(t, e.child, null, n),
            ((e = Xl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function ts(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), Ca(e.return, t, n));
        }
        function ns(e, t, n, r, a, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
                treeForkCount: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a),
              (i.treeForkCount = o));
        }
        function rs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          r = r.children;
          var i = Ro.current,
            l = 0 !== (2 & i);
          if (
            (l ? ((i = (1 & i) | 2), (t.flags |= 128)) : (i &= 1),
            O(Ro, i),
            Dl(e, t, r, n),
            (r = da ? Xr : 0),
            !l && null !== e && 0 !== (128 & e.flags))
          )
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && ts(e, n, t);
              else if (19 === e.tag) ts(e, n, t);
              else if (null !== e.child) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              ((e.sibling.return = e.return), (e = e.sibling));
            }
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                (null !== (e = n.alternate) && null === Oo(e) && (a = n),
                  (n = n.sibling));
              (null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                ns(t, !1, a, n, o, r));
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Oo(e)) {
                  t.child = a;
                  break;
                }
                ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
              }
              ns(t, !0, n, null, o, r);
              break;
            case "together":
              ns(t, !1, null, null, void 0, r);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function as(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Eu |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Pa(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Rr((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;
            )
              ((e = e.sibling),
                ((n = n.sibling = Rr(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function os(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ta(e))
          );
        }
        function is(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Nl = !0;
            else {
              if (!os(e, n) && 0 === (128 & t.flags))
                return (
                  (Nl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (Y(t, t.stateNode.containerInfo),
                          Sa(0, za, e.memoizedState.cache),
                          ba());
                        break;
                      case 27:
                      case 5:
                        Q(t);
                        break;
                      case 4:
                        Y(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        Sa(0, t.type, t.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== t.memoizedState)
                          return ((t.flags |= 128), jo(t), null);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Ho(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Gl(e, t, n)
                              : (Ho(t),
                                null !== (e = as(e, t, n)) ? e.sibling : null);
                        Ho(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Pa(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return rs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          O(Ro, Ro.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                        return ((t.lanes = 0), zl(e, t, n, t.pendingProps));
                      case 24:
                        Sa(0, za, e.memoizedState.cache);
                    }
                    return as(e, t, n);
                  })(e, t, n)
                );
              Nl = 0 !== (131072 & e.flags);
            }
          else
            ((Nl = !1), da && 0 !== (1048576 & t.flags) && oa(t, Xr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                var r = t.pendingProps;
                if (
                  ((e = ro(t.elementType)),
                  (t.type = e),
                  "function" !== typeof e)
                ) {
                  if (void 0 !== e && null !== e) {
                    var a = e.$$typeof;
                    if (a === k) {
                      ((t.tag = 11), (t = Hl(null, t, e, r, n)));
                      break e;
                    }
                    if (a === S) {
                      ((t.tag = 14), (t = jl(null, t, e, r, n)));
                      break e;
                    }
                  }
                  throw ((t = L(e) || e), Error(i(306, t, "")));
                }
                _r(e)
                  ? ((r = Al(e, r)), (t.tag = 1), (t = ql(null, t, e, r, n)))
                  : ((t.tag = 0), (t = Ul(null, t, e, r, n)));
              }
              return t;
            case 0:
              return Ul(e, t, t.type, t.pendingProps, n);
            case 1:
              return ql(e, t, (r = t.type), (a = Al(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((Y(t, t.stateNode.containerInfo), null === e))
                  throw Error(i(387));
                r = t.pendingProps;
                var o = t.memoizedState;
                ((a = o.element), yo(e, t), So(t, r, null, n));
                var l = t.memoizedState;
                if (
                  ((r = l.cache),
                  Sa(0, za, r),
                  r !== o.cache && Fa(t, [za], n, !0),
                  Eo(),
                  (r = l.element),
                  o.isDehydrated)
                ) {
                  if (
                    ((o = { element: r, isDehydrated: !1, cache: l.cache }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = $l(e, t, r, n);
                    break e;
                  }
                  if (r !== a) {
                    (wa((a = Yr(Error(i(424)), t))), (t = $l(e, t, r, n)));
                    break e;
                  }
                  if (9 === (e = t.stateNode.containerInfo).nodeType)
                    e = e.body;
                  else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                  for (
                    ca = Nd(e.firstChild),
                      ua = t,
                      da = !0,
                      fa = null,
                      ha = !0,
                      n = po(t, null, r, n),
                      t.child = n;
                    n;
                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((ba(), r === a)) {
                    t = as(e, t, n);
                    break e;
                  }
                  Dl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Bl(e, t),
                null === e
                  ? (n = Wd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : da ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = gd(q.current).createElement(n))[Oe] = t),
                      (r[Ie] = e),
                      fd(r, n, e),
                      et(r),
                      (t.stateNode = r))
                  : (t.memoizedState = Wd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState,
                    )),
                null
              );
            case 27:
              return (
                Q(t),
                null === e &&
                  da &&
                  ((r = t.stateNode = Zd(t.type, t.pendingProps, q.current)),
                  (ua = t),
                  (ha = !0),
                  (a = ca),
                  Md(t.type) ? ((Dd = a), (ca = Nd(r.firstChild))) : (ca = a)),
                Dl(e, t, t.pendingProps.children, n),
                Bl(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  da &&
                  ((a = r = ca) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Ye])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (o = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  o !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href || "" === a.href
                                      ? null
                                      : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin
                                      ? null
                                      : a.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((o = e.getAttribute("src")) !==
                                    (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !==
                                      (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin
                                        ? null
                                        : a.crossOrigin)) &&
                                  o &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var o = null == a.name ? null : "" + a.name;
                          if (
                            "hidden" === a.type &&
                            e.getAttribute("name") === o
                          )
                            return e;
                        }
                        if (null === (e = Nd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, ha))
                      ? ((t.stateNode = r),
                        (ua = t),
                        (ca = Nd(r.firstChild)),
                        (ha = !1),
                        (a = !0))
                      : (a = !1)),
                  a || pa(t)),
                Q(t),
                (a = t.type),
                (o = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (r = o.children),
                bd(a, o)
                  ? (r = null)
                  : null !== l && bd(a, l) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = ti(e, t, ai, null, null, n)), (df._currentValue = a)),
                Bl(e, t),
                Dl(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  da &&
                  ((e = n = ca) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = Nd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, ha))
                      ? ((t.stateNode = n), (ua = t), (ca = null), (e = !0))
                      : (e = !1)),
                  e || pa(t)),
                null
              );
            case 13:
              return Gl(e, t, n);
            case 4:
              return (
                Y(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = mo(t, null, r, n)) : Dl(e, t, r, n),
                t.child
              );
            case 11:
              return Hl(e, t, t.type, t.pendingProps, n);
            case 7:
              return (Dl(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (Dl(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return (
                (r = t.pendingProps),
                Sa(0, t.type, r.value),
                Dl(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                Va(t),
                (r = r((a = La(a)))),
                (t.flags |= 1),
                Dl(e, t, r, n),
                t.child
              );
            case 14:
              return jl(e, t, t.type, t.pendingProps, n);
            case 15:
              return Zl(e, t, t.type, t.pendingProps, n);
            case 19:
              return rs(e, t, n);
            case 31:
              return (function (e, t, n) {
                var r = t.pendingProps,
                  a = 0 !== (128 & t.flags);
                if (((t.flags &= -129), null === e)) {
                  if (da) {
                    if ("hidden" === r.mode)
                      return (
                        (e = Ol(t, r)),
                        (t.lanes = 536870912),
                        _l(null, e)
                      );
                    if (
                      (jo(t),
                      (e = ca)
                        ? null !==
                            (e =
                              null !== (e = Td(e, ha)) && "&" === e.data
                                ? e
                                : null) &&
                          ((t.memoizedState = {
                            dehydrated: e,
                            treeContext:
                              null !== ta ? { id: na, overflow: ra } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((n = Wr(e)).return = t),
                          (t.child = n),
                          (ua = t),
                          (ca = null))
                        : (e = null),
                      null === e)
                    )
                      throw pa(t);
                    return ((t.lanes = 536870912), null);
                  }
                  return Ol(t, r);
                }
                var o = e.memoizedState;
                if (null !== o) {
                  var l = o.dehydrated;
                  if ((jo(t), a))
                    if (256 & t.flags) ((t.flags &= -257), (t = Il(e, t, n)));
                    else {
                      if (null === t.memoizedState) throw Error(i(558));
                      ((t.child = e.child), (t.flags |= 128), (t = null));
                    }
                  else if (
                    (Nl || Pa(e, t, n, !1),
                    (a = 0 !== (n & e.childLanes)),
                    Nl || a)
                  ) {
                    if (
                      null !== (r = mu) &&
                      0 !== (l = He(r, n)) &&
                      l !== o.retryLane
                    )
                      throw ((o.retryLane = l), Nr(e, l), Yu(r, e, l), Ll);
                    (ic(), (t = Il(e, t, n)));
                  } else
                    ((e = o.treeContext),
                      (ca = Nd(l.nextSibling)),
                      (ua = t),
                      (da = !0),
                      (fa = null),
                      (ha = !1),
                      null !== e && sa(t, e),
                      ((t = Ol(t, r)).flags |= 4096));
                  return t;
                }
                return (
                  ((e = Rr(e.child, {
                    mode: r.mode,
                    children: r.children,
                  })).ref = t.ref),
                  (t.child = e),
                  (e.return = t),
                  e
                );
              })(e, t, n);
            case 22:
              return zl(e, t, n, t.pendingProps);
            case 24:
              return (
                Va(t),
                (r = La(za)),
                null === e
                  ? (null === (a = Ya()) &&
                      ((a = mu),
                      (o = _a()),
                      (a.pooledCache = o),
                      o.refCount++,
                      null !== o && (a.pooledCacheLanes |= n),
                      (a = o)),
                    (t.memoizedState = { parent: r, cache: a }),
                    vo(t),
                    Sa(0, za, a))
                  : (0 !== (e.lanes & n) &&
                      (yo(e, t), So(t, null, null, n), Eo()),
                    (a = e.memoizedState),
                    (o = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        Sa(0, za, r))
                      : ((r = o.cache),
                        Sa(0, za, r),
                        r !== a.cache && Fa(t, [za], n, !0))),
                Dl(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(i(156, t.tag));
        }
        function ls(e) {
          e.flags |= 4;
        }
        function ss(e, t, n, r, a) {
          if (((t = 0 !== (32 & e.mode)) && (t = !1), t)) {
            if (((e.flags |= 16777216), (335544128 & a) === a))
              if (e.stateNode.complete) e.flags |= 8192;
              else {
                if (!rc()) throw ((ao = eo), Xa);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function us(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !af(t))) {
            if (!rc()) throw ((ao = eo), Xa);
            e.flags |= 8192;
          }
        }
        function cs(e, t) {
          (null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Te() : 536870912),
              (e.lanes |= t),
              (Fu |= t)));
        }
        function ds(e, t) {
          if (!da)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  (null !== n.alternate && (r = n), (n = n.sibling));
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function fs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= 65011712 & a.subtreeFlags),
                (r |= 65011712 & a.flags),
                (a.return = e),
                (a = a.sibling));
          else
            for (a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function hs(e, t, n) {
          var r = t.pendingProps;
          switch ((la(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (fs(t), null);
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                Ma(za),
                K(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ya(t)
                    ? ls(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), xa())),
                fs(t),
                null
              );
            case 26:
              var a = t.type,
                o = t.memoizedState;
              return (
                null === e
                  ? (ls(t),
                    null !== o ? (fs(t), us(t, o)) : (fs(t), ss(t, a, 0, 0, n)))
                  : o
                    ? o !== e.memoizedState
                      ? (ls(t), fs(t), us(t, o))
                      : (fs(t), (t.flags &= -16777217))
                    : ((e = e.memoizedProps) !== r && ls(t),
                      fs(t),
                      ss(t, a, 0, 0, n)),
                null
              );
            case 27:
              if (
                (G(t),
                (n = q.current),
                (a = t.type),
                null !== e && null != t.stateNode)
              )
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return (fs(t), null);
                }
                ((e = U.current),
                  ya(t)
                    ? ga(t)
                    : ((e = Zd(a, r, n)), (t.stateNode = e), ls(t)));
              }
              return (fs(t), null);
            case 5:
              if ((G(t), (a = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return (fs(t), null);
                }
                if (((o = U.current), ya(t))) ga(t);
                else {
                  var l = gd(q.current);
                  switch (o) {
                    case 1:
                      o = l.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case 2:
                      o = l.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        a,
                      );
                      break;
                    default:
                      switch (a) {
                        case "svg":
                          o = l.createElementNS(
                            "http://www.w3.org/2000/svg",
                            a,
                          );
                          break;
                        case "math":
                          o = l.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            a,
                          );
                          break;
                        case "script":
                          (((o = l.createElement("div")).innerHTML =
                            "<script><\/script>"),
                            (o = o.removeChild(o.firstChild)));
                          break;
                        case "select":
                          ((o =
                            "string" === typeof r.is
                              ? l.createElement("select", { is: r.is })
                              : l.createElement("select")),
                            r.multiple
                              ? (o.multiple = !0)
                              : r.size && (o.size = r.size));
                          break;
                        default:
                          o =
                            "string" === typeof r.is
                              ? l.createElement(a, { is: r.is })
                              : l.createElement(a);
                      }
                  }
                  ((o[Oe] = t), (o[Ie] = r));
                  e: for (l = t.child; null !== l; ) {
                    if (5 === l.tag || 6 === l.tag) o.appendChild(l.stateNode);
                    else if (4 !== l.tag && 27 !== l.tag && null !== l.child) {
                      ((l.child.return = l), (l = l.child));
                      continue;
                    }
                    if (l === t) break e;
                    for (; null === l.sibling; ) {
                      if (null === l.return || l.return === t) break e;
                      l = l.return;
                    }
                    ((l.sibling.return = l.return), (l = l.sibling));
                  }
                  t.stateNode = o;
                  e: switch ((fd(o, a, r), a)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                  r && ls(t);
                }
              }
              return (
                fs(t),
                ss(t, t.type, null === e || e.memoizedProps, t.pendingProps, n),
                null
              );
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && ls(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((e = q.current), ya(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (a = ua))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  ((e[Oe] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      ud(e.nodeValue, n)
                    )) || pa(t, !0));
                } else
                  (((e = gd(e).createTextNode(r))[Oe] = t), (t.stateNode = e));
              }
              return (fs(t), null);
            case 31:
              if (
                ((n = t.memoizedState), null === e || null !== e.memoizedState)
              ) {
                if (((r = ya(t)), null !== n)) {
                  if (null === e) {
                    if (!r) throw Error(i(318));
                    if (
                      !(e =
                        null !== (e = t.memoizedState) ? e.dehydrated : null)
                    )
                      throw Error(i(557));
                    e[Oe] = t;
                  } else
                    (ba(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (fs(t), (e = !1));
                } else
                  ((n = xa()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = n),
                    (e = !0));
                if (!e) return 256 & t.flags ? (_o(t), t) : (_o(t), null);
                if (0 !== (128 & t.flags)) throw Error(i(558));
              }
              return (fs(t), null);
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = ya(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(i(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(i(317));
                    a[Oe] = t;
                  } else
                    (ba(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (fs(t), (a = !1));
                } else
                  ((a = xa()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = a),
                    (a = !0));
                if (!a) return 256 & t.flags ? (_o(t), t) : (_o(t), null);
              }
              return (
                _o(t),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((n = null !== r),
                    (e = null !== e && null !== e.memoizedState),
                    n &&
                      ((a = null),
                      null !== (r = t.child).alternate &&
                        null !== r.alternate.memoizedState &&
                        null !== r.alternate.memoizedState.cachePool &&
                        (a = r.alternate.memoizedState.cachePool.pool),
                      (o = null),
                      null !== r.memoizedState &&
                        null !== r.memoizedState.cachePool &&
                        (o = r.memoizedState.cachePool.pool),
                      o !== a && (r.flags |= 2048)),
                    n !== e && n && (t.child.flags |= 8192),
                    cs(t, t.updateQueue),
                    fs(t),
                    null)
              );
            case 4:
              return (
                K(),
                null === e && Jc(t.stateNode.containerInfo),
                fs(t),
                null
              );
            case 10:
              return (Ma(t.type), fs(t), null);
            case 19:
              if ((R(Ro), null === (r = t.memoizedState))) return (fs(t), null);
              if (((a = 0 !== (128 & t.flags)), null === (o = r.rendering)))
                if (a) ds(r, !1);
                else {
                  if (0 !== Au || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = Oo(e))) {
                        for (
                          t.flags |= 128,
                            ds(r, !1),
                            e = o.updateQueue,
                            t.updateQueue = e,
                            cs(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;
                        )
                          (Or(n, e), (n = n.sibling));
                        return (
                          O(Ro, (1 & Ro.current) | 2),
                          da && aa(t, r.treeForkCount),
                          t.child
                        );
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    se() > Du &&
                    ((t.flags |= 128),
                    (a = !0),
                    ds(r, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = Oo(o))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      cs(t, e),
                      ds(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !o.alternate &&
                        !da)
                    )
                      return (fs(t), null);
                  } else
                    2 * se() - r.renderingStartTime > Du &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (a = !0),
                      ds(r, !1),
                      (t.lanes = 4194304));
                r.isBackwards
                  ? ((o.sibling = t.child), (t.child = o))
                  : (null !== (e = r.last) ? (e.sibling = o) : (t.child = o),
                    (r.last = o));
              }
              return null !== r.tail
                ? ((e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.renderingStartTime = se()),
                  (e.sibling = null),
                  (n = Ro.current),
                  O(Ro, a ? (1 & n) | 2 : 1 & n),
                  da && aa(t, r.treeForkCount),
                  e)
                : (fs(t), null);
            case 22:
            case 23:
              return (
                _o(t),
                Lo(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (fs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : fs(t),
                null !== (n = t.updateQueue) && cs(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && R($a),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                Ma(za),
                fs(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function ms(e, t) {
          switch ((la(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                Ma(za),
                K(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return (G(t), null);
            case 31:
              if (null !== t.memoizedState) {
                if ((_o(t), null === t.alternate)) throw Error(i(340));
                ba();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 13:
              if (
                (_o(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                ba();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return (R(Ro), null);
            case 4:
              return (K(), null);
            case 10:
              return (Ma(t.type), null);
            case 22:
            case 23:
              return (
                _o(t),
                Lo(),
                null !== e && R($a),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return (Ma(za), null);
            default:
              return null;
          }
        }
        function ps(e, t) {
          switch ((la(t), t.tag)) {
            case 3:
              (Ma(za), K());
              break;
            case 26:
            case 27:
            case 5:
              G(t);
              break;
            case 4:
              K();
              break;
            case 31:
              null !== t.memoizedState && _o(t);
              break;
            case 13:
              _o(t);
              break;
            case 19:
              R(Ro);
              break;
            case 10:
              Ma(t.type);
              break;
            case 22:
            case 23:
              (_o(t), Lo(), null !== e && R($a));
              break;
            case 24:
              Ma(za);
          }
        }
        function gs(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var o = n.create,
                    i = n.inst;
                  ((r = o()), (i.destroy = r));
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (l) {
            Ac(t, t.return, l);
          }
        }
        function vs(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var o = a.next;
              r = o;
              do {
                if ((r.tag & e) === e) {
                  var i = r.inst,
                    l = i.destroy;
                  if (void 0 !== l) {
                    ((i.destroy = void 0), (a = t));
                    var s = n,
                      u = l;
                    try {
                      u();
                    } catch (c) {
                      Ac(a, s, c);
                    }
                  }
                }
                r = r.next;
              } while (r !== o);
            }
          } catch (c) {
            Ac(t, t.return, c);
          }
        }
        function ys(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Co(t, n);
            } catch (r) {
              Ac(e, e.return, r);
            }
          }
        }
        function bs(e, t, n) {
          ((n.props = Al(e.type, e.memoizedProps)),
            (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (r) {
            Ac(e, t, r);
          }
        }
        function xs(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" === typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (a) {
            Ac(e, t, a);
          }
        }
        function ws(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (a) {
                Ac(e, t, a);
              } finally {
                ((e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (o) {
                Ac(e, t, o);
              }
            else n.current = null;
        }
        function ks(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            Ac(e, e.return, a);
          }
        }
        function As(e, t, n) {
          try {
            var r = e.stateNode;
            (!(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    o = null,
                    l = null,
                    s = null,
                    u = null,
                    c = null,
                    d = null;
                  for (m in n) {
                    var f = n[m];
                    if (n.hasOwnProperty(m) && null != f)
                      switch (m) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          u = f;
                        default:
                          r.hasOwnProperty(m) || cd(e, t, m, null, r, f);
                      }
                  }
                  for (var h in r) {
                    var m = r[h];
                    if (
                      ((f = n[h]),
                      r.hasOwnProperty(h) && (null != m || null != f))
                    )
                      switch (h) {
                        case "type":
                          o = m;
                          break;
                        case "name":
                          a = m;
                          break;
                        case "checked":
                          c = m;
                          break;
                        case "defaultChecked":
                          d = m;
                          break;
                        case "value":
                          l = m;
                          break;
                        case "defaultValue":
                          s = m;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != m) throw Error(i(137, t));
                          break;
                        default:
                          m !== f && cd(e, t, h, m, r, f);
                      }
                  }
                  return void yt(e, l, s, u, c, d, o, a);
                case "select":
                  for (o in ((m = l = s = h = null), n))
                    if (((u = n[o]), n.hasOwnProperty(o) && null != u))
                      switch (o) {
                        case "value":
                          break;
                        case "multiple":
                          m = u;
                        default:
                          r.hasOwnProperty(o) || cd(e, t, o, null, r, u);
                      }
                  for (a in r)
                    if (
                      ((o = r[a]),
                      (u = n[a]),
                      r.hasOwnProperty(a) && (null != o || null != u))
                    )
                      switch (a) {
                        case "value":
                          h = o;
                          break;
                        case "defaultValue":
                          s = o;
                          break;
                        case "multiple":
                          l = o;
                        default:
                          o !== u && cd(e, t, a, o, r, u);
                      }
                  return (
                    (t = s),
                    (n = l),
                    (r = m),
                    void (null != h
                      ? wt(e, !!n, h, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? wt(e, !!n, t, !0)
                          : wt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (s in ((m = h = null), n))
                    if (
                      ((a = n[s]),
                      n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s))
                    )
                      switch (s) {
                        case "value":
                        case "children":
                          break;
                        default:
                          cd(e, t, s, null, r, a);
                      }
                  for (l in r)
                    if (
                      ((a = r[l]),
                      (o = n[l]),
                      r.hasOwnProperty(l) && (null != a || null != o))
                    )
                      switch (l) {
                        case "value":
                          h = a;
                          break;
                        case "defaultValue":
                          m = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(i(91));
                          break;
                        default:
                          a !== o && cd(e, t, l, a, r, o);
                      }
                  return void kt(e, h, m);
                case "option":
                  for (var p in n)
                    if (
                      ((h = n[p]),
                      n.hasOwnProperty(p) && null != h && !r.hasOwnProperty(p))
                    )
                      if ("selected" === p) e.selected = !1;
                      else cd(e, t, p, null, r, h);
                  for (u in r)
                    if (
                      ((h = r[u]),
                      (m = n[u]),
                      r.hasOwnProperty(u) &&
                        h !== m &&
                        (null != h || null != m))
                    )
                      if ("selected" === u)
                        e.selected =
                          h && "function" !== typeof h && "symbol" !== typeof h;
                      else cd(e, t, u, h, r, m);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    ((h = n[g]),
                      n.hasOwnProperty(g) &&
                        null != h &&
                        !r.hasOwnProperty(g) &&
                        cd(e, t, g, null, r, h));
                  for (c in r)
                    if (
                      ((h = r[c]),
                      (m = n[c]),
                      r.hasOwnProperty(c) &&
                        h !== m &&
                        (null != h || null != m))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(i(137, t));
                          break;
                        default:
                          cd(e, t, c, h, r, m);
                      }
                  return;
                default:
                  if (Ft(t)) {
                    for (var v in n)
                      ((h = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== h &&
                          !r.hasOwnProperty(v) &&
                          dd(e, t, v, void 0, r, h));
                    for (d in r)
                      ((h = r[d]),
                        (m = n[d]),
                        !r.hasOwnProperty(d) ||
                          h === m ||
                          (void 0 === h && void 0 === m) ||
                          dd(e, t, d, h, r, m));
                    return;
                  }
              }
              for (var y in n)
                ((h = n[y]),
                  n.hasOwnProperty(y) &&
                    null != h &&
                    !r.hasOwnProperty(y) &&
                    cd(e, t, y, null, r, h));
              for (f in r)
                ((h = r[f]),
                  (m = n[f]),
                  !r.hasOwnProperty(f) ||
                    h === m ||
                    (null == h && null == m) ||
                    cd(e, t, f, h, r, m));
            })(r, e.type, n, t),
              (r[Ie] = t));
          } catch (a) {
            Ac(e, e.return, a);
          }
        }
        function Es(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && Md(e.type)) ||
            4 === e.tag
          );
        }
        function Ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Es(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
            ) {
              if (27 === e.tag && Md(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Ms(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? (9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n
                  ).insertBefore(e, t)
                : ((t =
                    9 === n.nodeType
                      ? n.body
                      : "HTML" === n.nodeName
                        ? n.ownerDocument.body
                        : n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Lt)));
          else if (
            4 !== r &&
            (27 === r && Md(e.type) && ((n = e.stateNode), (t = null)),
            null !== (e = e.child))
          )
            for (Ms(e, t, n), e = e.sibling; null !== e; )
              (Ms(e, t, n), (e = e.sibling));
        }
        function Cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (
            4 !== r &&
            (27 === r && Md(e.type) && (n = e.stateNode),
            null !== (e = e.child))
          )
            for (Cs(e, t, n), e = e.sibling; null !== e; )
              (Cs(e, t, n), (e = e.sibling));
        }
        function Fs(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, a = t.attributes; a.length; )
              t.removeAttributeNode(a[0]);
            (fd(t, r, n), (t[Oe] = e), (t[Ie] = n));
          } catch (o) {
            Ac(e, e.return, o);
          }
        }
        var Ps = !1,
          Ts = !1,
          Vs = !1,
          Ls = "function" === typeof WeakSet ? WeakSet : Set,
          Ns = null;
        function Ds(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (Ys(e, n), 4 & r && gs(5, n));
              break;
            case 1:
              if ((Ys(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (i) {
                    Ac(n, n.return, i);
                  }
                else {
                  var a = Al(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      a,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate,
                    );
                  } catch (l) {
                    Ac(n, n.return, l);
                  }
                }
              (64 & r && ys(n), 512 & r && xs(n, n.return));
              break;
            case 3:
              if ((Ys(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  Co(e, t);
                } catch (i) {
                  Ac(n, n.return, i);
                }
              }
              break;
            case 27:
              null === t && 4 & r && Fs(n);
            case 26:
            case 5:
              (Ys(e, n),
                null === t && 4 & r && ks(n),
                512 & r && xs(n, n.return));
              break;
            case 12:
              Ys(e, n);
              break;
            case 31:
              (Ys(e, n), 4 & r && Rs(e, n));
              break;
            case 13:
              (Ys(e, n),
                4 & r && Os(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ("$~" === e.data) e._reactRetry = t;
                    else if ("$?" !== e.data || "loading" !== n.readyState) t();
                    else {
                      var r = function () {
                        (t(), n.removeEventListener("DOMContentLoaded", r));
                      };
                      (n.addEventListener("DOMContentLoaded", r),
                        (e._reactRetry = r));
                    }
                  })(e, (n = Cc.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || Ps)) {
                ((t = (null !== t && null !== t.memoizedState) || Ts),
                  (a = Ps));
                var o = Ts;
                ((Ps = r),
                  (Ts = t) && !o
                    ? Qs(e, n, 0 !== (8772 & n.subtreeFlags))
                    : Ys(e, n),
                  (Ps = a),
                  (Ts = o));
              }
              break;
            case 30:
              break;
            default:
              Ys(e, n);
          }
        }
        function Hs(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), Hs(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ke(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var js = null,
          Zs = !1;
        function zs(e, t, n) {
          for (n = n.child; null !== n; ) (_s(e, t, n), (n = n.sibling));
        }
        function _s(e, t, n) {
          if (ye && "function" === typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ve, n);
            } catch (o) {}
          switch (n.tag) {
            case 26:
              (Ts || ws(n, t),
                zs(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              Ts || ws(n, t);
              var r = js,
                a = Zs;
              (Md(n.type) && ((js = n.stateNode), (Zs = !1)),
                zs(e, t, n),
                zd(n.stateNode),
                (js = r),
                (Zs = a));
              break;
            case 5:
              Ts || ws(n, t);
            case 6:
              if (
                ((r = js),
                (a = Zs),
                (js = null),
                zs(e, t, n),
                (Zs = a),
                null !== (js = r))
              )
                if (Zs)
                  try {
                    (9 === js.nodeType
                      ? js.body
                      : "HTML" === js.nodeName
                        ? js.ownerDocument.body
                        : js
                    ).removeChild(n.stateNode);
                  } catch (i) {
                    Ac(n, t, i);
                  }
                else
                  try {
                    js.removeChild(n.stateNode);
                  } catch (i) {
                    Ac(n, t, i);
                  }
              break;
            case 18:
              null !== js &&
                (Zs
                  ? (Cd(
                      9 === (e = js).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      n.stateNode,
                    ),
                    Wf(e))
                  : Cd(js, n.stateNode));
              break;
            case 4:
              ((r = js),
                (a = Zs),
                (js = n.stateNode.containerInfo),
                (Zs = !0),
                zs(e, t, n),
                (js = r),
                (Zs = a));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (vs(2, n, t), Ts || vs(4, n, t), zs(e, t, n));
              break;
            case 1:
              (Ts ||
                (ws(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  bs(n, t, r)),
                zs(e, t, n));
              break;
            case 21:
              zs(e, t, n);
              break;
            case 22:
              ((Ts = (r = Ts) || null !== n.memoizedState),
                zs(e, t, n),
                (Ts = r));
              break;
            default:
              zs(e, t, n);
          }
        }
        function Rs(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState)
          ) {
            e = e.dehydrated;
            try {
              Wf(e);
            } catch (n) {
              Ac(t, t.return, n);
            }
          }
        }
        function Os(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              Wf(e);
            } catch (n) {
              Ac(t, t.return, n);
            }
        }
        function Is(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 31:
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new Ls()), t);
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new Ls()),
                  t
                );
              default:
                throw Error(i(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            if (!n.has(t)) {
              n.add(t);
              var r = Fc.bind(null, e, t);
              t.then(r, r);
            }
          });
        }
        function Bs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                o = e,
                l = t,
                s = l;
              e: for (; null !== s; ) {
                switch (s.tag) {
                  case 27:
                    if (Md(s.type)) {
                      ((js = s.stateNode), (Zs = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((js = s.stateNode), (Zs = !1));
                    break e;
                  case 3:
                  case 4:
                    ((js = s.stateNode.containerInfo), (Zs = !0));
                    break e;
                }
                s = s.return;
              }
              if (null === js) throw Error(i(160));
              (_s(o, l, a),
                (js = null),
                (Zs = !1),
                null !== (o = a.alternate) && (o.return = null),
                (a.return = null));
            }
          if (13886 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (Ws(t, e), (t = t.sibling));
        }
        var Us = null;
        function Ws(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (Bs(t, e),
                qs(e),
                4 & r && (vs(3, e, e.return), gs(3, e), vs(5, e, e.return)));
              break;
            case 1:
              (Bs(t, e),
                qs(e),
                512 & r && (Ts || null === n || ws(n, n.return)),
                64 & r &&
                  Ps &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var a = Us;
              if (
                (Bs(t, e),
                qs(e),
                512 & r && (Ts || null === n || ws(n, n.return)),
                4 & r)
              ) {
                var o = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a));
                        t: switch (r) {
                          case "title":
                            ((!(o = a.getElementsByTagName("title")[0]) ||
                              o[Ye] ||
                              o[Oe] ||
                              "http://www.w3.org/2000/svg" === o.namespaceURI ||
                              o.hasAttribute("itemprop")) &&
                              ((o = a.createElement(r)),
                              a.head.insertBefore(
                                o,
                                a.querySelector("head > title"),
                              )),
                              fd(o, r, n),
                              (o[Oe] = e),
                              et(o),
                              (r = o));
                            break e;
                          case "link":
                            var l = nf("link", "href", a).get(
                              r + (n.href || ""),
                            );
                            if (l)
                              for (var s = 0; s < l.length; s++)
                                if (
                                  (o = l[s]).getAttribute("href") ===
                                    (null == n.href || "" === n.href
                                      ? null
                                      : n.href) &&
                                  o.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  o.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  o.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  l.splice(s, 1);
                                  break t;
                                }
                            (fd((o = a.createElement(r)), r, n),
                              a.head.appendChild(o));
                            break;
                          case "meta":
                            if (
                              (l = nf("meta", "content", a).get(
                                r + (n.content || ""),
                              ))
                            )
                              for (s = 0; s < l.length; s++)
                                if (
                                  (o = l[s]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  o.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  o.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  o.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  o.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  l.splice(s, 1);
                                  break t;
                                }
                            (fd((o = a.createElement(r)), r, n),
                              a.head.appendChild(o));
                            break;
                          default:
                            throw Error(i(468, r));
                        }
                        ((o[Oe] = e), et(o), (r = o));
                      }
                      e.stateNode = r;
                    } else rf(a, e.type, e.stateNode);
                  else e.stateNode = Gd(a, r, e.memoizedProps);
                else
                  o !== r
                    ? (null === o
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : o.count--,
                      null === r
                        ? rf(a, e.type, e.stateNode)
                        : Gd(a, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      As(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (Bs(t, e),
                qs(e),
                512 & r && (Ts || null === n || ws(n, n.return)),
                null !== n && 4 & r && As(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if (
                (Bs(t, e),
                qs(e),
                512 & r && (Ts || null === n || ws(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  Et(a, "");
                } catch (p) {
                  Ac(e, e.return, p);
                }
              }
              (4 & r &&
                null != e.stateNode &&
                As(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (Vs = !0));
              break;
            case 6:
              if ((Bs(t, e), qs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                ((r = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = r;
                } catch (p) {
                  Ac(e, e.return, p);
                }
              }
              break;
            case 3:
              if (
                ((tf = null),
                (a = Us),
                (Us = Od(t.containerInfo)),
                Bs(t, e),
                (Us = a),
                qs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wf(t.containerInfo);
                } catch (p) {
                  Ac(e, e.return, p);
                }
              Vs && ((Vs = !1), $s(e));
              break;
            case 4:
              ((r = Us),
                (Us = Od(e.stateNode.containerInfo)),
                Bs(t, e),
                qs(e),
                (Us = r));
              break;
            case 12:
            default:
              (Bs(t, e), qs(e));
              break;
            case 31:
            case 19:
              (Bs(t, e),
                qs(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Is(e, r)));
              break;
            case 13:
              (Bs(t, e),
                qs(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (Lu = se()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Is(e, r)));
              break;
            case 22:
              a = null !== e.memoizedState;
              var u = null !== n && null !== n.memoizedState,
                c = Ps,
                d = Ts;
              if (
                ((Ps = c || a),
                (Ts = d || u),
                Bs(t, e),
                (Ts = d),
                (Ps = c),
                qs(e),
                8192 & r)
              )
                e: for (
                  t = e.stateNode,
                    t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                    a && (null === n || u || Ps || Ts || Ks(e)),
                    n = null,
                    t = e;
                  ;
                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      u = n = t;
                      try {
                        if (((o = u.stateNode), a))
                          "function" === typeof (l = o.style).setProperty
                            ? l.setProperty("display", "none", "important")
                            : (l.display = "none");
                        else {
                          s = u.stateNode;
                          var f = u.memoizedProps.style,
                            h =
                              void 0 !== f &&
                              null !== f &&
                              f.hasOwnProperty("display")
                                ? f.display
                                : null;
                          s.style.display =
                            null == h || "boolean" === typeof h
                              ? ""
                              : ("" + h).trim();
                        }
                      } catch (p) {
                        Ac(u, u.return, p);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        u.stateNode.nodeValue = a ? "" : u.memoizedProps;
                      } catch (p) {
                        Ac(u, u.return, p);
                      }
                    }
                  } else if (18 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        var m = u.stateNode;
                        a ? Fd(m, !0) : Fd(u.stateNode, !1);
                      } catch (p) {
                        Ac(u, u.return, p);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    (n === t && (n = null), (t = t.return));
                  }
                  (n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling));
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), Is(e, n));
            case 30:
            case 21:
          }
        }
        function qs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (Es(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(i(160));
              switch (n.tag) {
                case 27:
                  var a = n.stateNode;
                  Cs(e, Ss(e), a);
                  break;
                case 5:
                  var o = n.stateNode;
                  (32 & n.flags && (Et(o, ""), (n.flags &= -33)),
                    Cs(e, Ss(e), o));
                  break;
                case 3:
                case 4:
                  var l = n.stateNode.containerInfo;
                  Ms(e, Ss(e), l);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Ac(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function $s(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              ($s(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling));
            }
        }
        function Ys(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              (Ds(e, t.alternate, t), (t = t.sibling));
        }
        function Ks(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (vs(4, t, t.return), Ks(t));
                break;
              case 1:
                ws(t, t.return);
                var n = t.stateNode;
                ("function" === typeof n.componentWillUnmount &&
                  bs(t, t.return, n),
                  Ks(t));
                break;
              case 27:
                zd(t.stateNode);
              case 26:
              case 5:
                (ws(t, t.return), Ks(t));
                break;
              case 22:
                null === t.memoizedState && Ks(t);
                break;
              default:
                Ks(t);
            }
            e = e.sibling;
          }
        }
        function Qs(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;
          ) {
            var r = t.alternate,
              a = e,
              o = t,
              i = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                (Qs(a, o, n), gs(4, o));
                break;
              case 1:
                if (
                  (Qs(a, o, n),
                  "function" ===
                    typeof (a = (r = o).stateNode).componentDidMount)
                )
                  try {
                    a.componentDidMount();
                  } catch (u) {
                    Ac(r, r.return, u);
                  }
                if (null !== (a = (r = o).updateQueue)) {
                  var l = r.stateNode;
                  try {
                    var s = a.shared.hiddenCallbacks;
                    if (null !== s)
                      for (
                        a.shared.hiddenCallbacks = null, a = 0;
                        a < s.length;
                        a++
                      )
                        Mo(s[a], l);
                  } catch (u) {
                    Ac(r, r.return, u);
                  }
                }
                (n && 64 & i && ys(o), xs(o, o.return));
                break;
              case 27:
                Fs(o);
              case 26:
              case 5:
                (Qs(a, o, n),
                  n && null === r && 4 & i && ks(o),
                  xs(o, o.return));
                break;
              case 12:
                Qs(a, o, n);
                break;
              case 31:
                (Qs(a, o, n), n && 4 & i && Rs(a, o));
                break;
              case 13:
                (Qs(a, o, n), n && 4 & i && Os(a, o));
                break;
              case 22:
                (null === o.memoizedState && Qs(a, o, n), xs(o, o.return));
                break;
              case 30:
                break;
              default:
                Qs(a, o, n);
            }
            t = t.sibling;
          }
        }
        function Gs(e, t) {
          var n = null;
          (null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ra(n)));
        }
        function Xs(e, t) {
          ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ra(e)));
        }
        function Js(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (eu(e, t, n, r), (t = t.sibling));
        }
        function eu(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (Js(e, t, n, r), 2048 & a && gs(9, t));
              break;
            case 1:
            case 31:
            case 13:
            default:
              Js(e, t, n, r);
              break;
            case 3:
              (Js(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ra(e))));
              break;
            case 12:
              if (2048 & a) {
                (Js(e, t, n, r), (e = t.stateNode));
                try {
                  var o = t.memoizedProps,
                    i = o.id,
                    l = o.onPostCommit;
                  "function" === typeof l &&
                    l(
                      i,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0,
                    );
                } catch (s) {
                  Ac(t, t.return, s);
                }
              } else Js(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              ((o = t.stateNode),
                (i = t.alternate),
                null !== t.memoizedState
                  ? 2 & o._visibility
                    ? Js(e, t, n, r)
                    : nu(e, t)
                  : 2 & o._visibility
                    ? Js(e, t, n, r)
                    : ((o._visibility |= 2),
                      tu(e, t, n, r, 0 !== (10256 & t.subtreeFlags) || !1)),
                2048 & a && Gs(i, t));
              break;
            case 24:
              (Js(e, t, n, r), 2048 & a && Xs(t.alternate, t));
          }
        }
        function tu(e, t, n, r, a) {
          for (
            a = a && (0 !== (10256 & t.subtreeFlags) || !1), t = t.child;
            null !== t;
          ) {
            var o = e,
              i = t,
              l = n,
              s = r,
              u = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                (tu(o, i, l, s, a), gs(8, i));
                break;
              case 23:
                break;
              case 22:
                var c = i.stateNode;
                (null !== i.memoizedState
                  ? 2 & c._visibility
                    ? tu(o, i, l, s, a)
                    : nu(o, i)
                  : ((c._visibility |= 2), tu(o, i, l, s, a)),
                  a && 2048 & u && Gs(i.alternate, i));
                break;
              case 24:
                (tu(o, i, l, s, a), a && 2048 & u && Xs(i.alternate, i));
                break;
              default:
                tu(o, i, l, s, a);
            }
            t = t.sibling;
          }
        }
        function nu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  (nu(n, r), 2048 & a && Gs(r.alternate, r));
                  break;
                case 24:
                  (nu(n, r), 2048 & a && Xs(r.alternate, r));
                  break;
                default:
                  nu(n, r);
              }
              t = t.sibling;
            }
        }
        var ru = 8192;
        function au(e, t, n) {
          if (e.subtreeFlags & ru)
            for (e = e.child; null !== e; ) (ou(e, t, n), (e = e.sibling));
        }
        function ou(e, t, n) {
          switch (e.tag) {
            case 26:
              (au(e, t, n),
                e.flags & ru &&
                  null !== e.memoizedState &&
                  (function (e, t, n, r) {
                    if (
                      "stylesheet" === n.type &&
                      ("string" !== typeof r.media ||
                        !1 !== matchMedia(r.media).matches) &&
                      0 === (4 & n.state.loading)
                    ) {
                      if (null === n.instance) {
                        var a = qd(r.href),
                          o = t.querySelector($d(a));
                        if (o)
                          return (
                            null !== (t = o._p) &&
                              "object" === typeof t &&
                              "function" === typeof t.then &&
                              (e.count++, (e = lf.bind(e)), t.then(e, e)),
                            (n.state.loading |= 4),
                            (n.instance = o),
                            void et(o)
                          );
                        ((o = t.ownerDocument || t),
                          (r = Yd(r)),
                          (a = _d.get(a)) && Jd(r, a),
                          et((o = o.createElement("link"))));
                        var i = o;
                        ((i._p = new Promise(function (e, t) {
                          ((i.onload = e), (i.onerror = t));
                        })),
                          fd(o, "link", r),
                          (n.instance = o));
                      }
                      (null === e.stylesheets && (e.stylesheets = new Map()),
                        e.stylesheets.set(n, t),
                        (t = n.state.preload) &&
                          0 === (3 & n.state.loading) &&
                          (e.count++,
                          (n = lf.bind(e)),
                          t.addEventListener("load", n),
                          t.addEventListener("error", n)));
                    }
                  })(n, Us, e.memoizedState, e.memoizedProps));
              break;
            case 5:
            default:
              au(e, t, n);
              break;
            case 3:
            case 4:
              var r = Us;
              ((Us = Od(e.stateNode.containerInfo)), au(e, t, n), (Us = r));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = ru), (ru = 16777216), au(e, t, n), (ru = r))
                  : au(e, t, n));
          }
        }
        function iu(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
          }
        }
        function lu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Ns = r), cu(r, e));
              }
            iu(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) (su(e), (e = e.sibling));
        }
        function su(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (lu(e), 2048 & e.flags && vs(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              lu(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), uu(e))
                : lu(e);
          }
        }
        function uu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Ns = r), cu(r, e));
              }
            iu(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                (vs(8, t, t.return), uu(t));
                break;
              case 22:
                2 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -3), uu(t));
                break;
              default:
                uu(t);
            }
            e = e.sibling;
          }
        }
        function cu(e, t) {
          for (; null !== Ns; ) {
            var n = Ns;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                vs(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ra(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Ns = r));
            else
              e: for (n = e; null !== Ns; ) {
                var a = (r = Ns).sibling,
                  o = r.return;
                if ((Hs(r), r === n)) {
                  Ns = null;
                  break e;
                }
                if (null !== a) {
                  ((a.return = o), (Ns = a));
                  break e;
                }
                Ns = o;
              }
          }
        }
        var du = {
            getCacheForType: function (e) {
              var t = La(za),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
              return La(za).controller.signal;
            },
          },
          fu = "function" === typeof WeakMap ? WeakMap : Map,
          hu = 0,
          mu = null,
          pu = null,
          gu = 0,
          vu = 0,
          yu = null,
          bu = !1,
          xu = !1,
          wu = !1,
          ku = 0,
          Au = 0,
          Eu = 0,
          Su = 0,
          Mu = 0,
          Cu = 0,
          Fu = 0,
          Pu = null,
          Tu = null,
          Vu = !1,
          Lu = 0,
          Nu = 0,
          Du = 1 / 0,
          Hu = null,
          ju = null,
          Zu = 0,
          zu = null,
          _u = null,
          Ru = 0,
          Ou = 0,
          Iu = null,
          Bu = null,
          Uu = 0,
          Wu = null;
        function qu() {
          return 0 !== (2 & hu) && 0 !== gu
            ? gu & -gu
            : null !== D.T
              ? Ic()
              : ze();
        }
        function $u() {
          if (0 === Cu)
            if (0 === (536870912 & gu) || da) {
              var e = Ee;
              (0 === (3932160 & (Ee <<= 1)) && (Ee = 262144), (Cu = e));
            } else Cu = 536870912;
          return (null !== (e = No.current) && (e.flags |= 32), Cu);
        }
        function Yu(e, t, n) {
          (((e !== mu || (2 !== vu && 9 !== vu)) &&
            null === e.cancelPendingCommit) ||
            (tc(e, 0), Xu(e, gu, Cu, !1)),
            Le(e, n),
            (0 !== (2 & hu) && e === mu) ||
              (e === mu &&
                (0 === (2 & hu) && (Su |= n), 4 === Au && Xu(e, gu, Cu, !1)),
              Hc(e)));
        }
        function Ku(e, t, n) {
          if (0 !== (6 & hu)) throw Error(i(327));
          for (
            var r =
                (!n && 0 === (127 & t) && 0 === (t & e.expiredLanes)) ||
                Fe(e, t),
              a = r
                ? (function (e, t) {
                    var n = hu;
                    hu |= 2;
                    var r = ac(),
                      a = oc();
                    mu !== e || gu !== t
                      ? ((Hu = null), (Du = se() + 500), tc(e, t))
                      : (xu = Fe(e, t));
                    e: for (;;)
                      try {
                        if (0 !== vu && null !== pu) {
                          t = pu;
                          var o = yu;
                          t: switch (vu) {
                            case 1:
                              ((vu = 0), (yu = null), fc(e, t, o, 1));
                              break;
                            case 2:
                            case 9:
                              if (to(o)) {
                                ((vu = 0), (yu = null), dc(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== vu && 9 !== vu) || mu !== e || (vu = 7),
                                  Hc(e));
                              }),
                                o.then(t, t));
                              break e;
                            case 3:
                              vu = 7;
                              break e;
                            case 4:
                              vu = 5;
                              break e;
                            case 7:
                              to(o)
                                ? ((vu = 0), (yu = null), dc(t))
                                : ((vu = 0), (yu = null), fc(e, t, o, 7));
                              break;
                            case 5:
                              var l = null;
                              switch (pu.tag) {
                                case 26:
                                  l = pu.memoizedState;
                                case 5:
                                case 27:
                                  var s = pu;
                                  if (l ? af(l) : s.stateNode.complete) {
                                    ((vu = 0), (yu = null));
                                    var u = s.sibling;
                                    if (null !== u) pu = u;
                                    else {
                                      var c = s.return;
                                      null !== c
                                        ? ((pu = c), hc(c))
                                        : (pu = null);
                                    }
                                    break t;
                                  }
                              }
                              ((vu = 0), (yu = null), fc(e, t, o, 5));
                              break;
                            case 6:
                              ((vu = 0), (yu = null), fc(e, t, o, 6));
                              break;
                            case 8:
                              (ec(), (Au = 6));
                              break e;
                            default:
                              throw Error(i(462));
                          }
                        }
                        uc();
                        break;
                      } catch (d) {
                        nc(e, d);
                      }
                    return (
                      (Ea = Aa = null),
                      (D.H = r),
                      (D.A = a),
                      (hu = n),
                      null !== pu ? 0 : ((mu = null), (gu = 0), Tr(), Au)
                    );
                  })(e, t)
                : lc(e, t, !0),
              o = r;
            ;
          ) {
            if (0 === a) {
              xu && !r && Xu(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !o || Gu(n))) {
              if (2 === a) {
                if (((o = t), e.errorRecoveryDisabledLanes & o)) var l = 0;
                else
                  l =
                    0 !== (l = -536870913 & e.pendingLanes)
                      ? l
                      : 536870912 & l
                        ? 536870912
                        : 0;
                if (0 !== l) {
                  t = l;
                  e: {
                    var s = e;
                    a = Pu;
                    var u = s.current.memoizedState.isDehydrated;
                    if (
                      (u && (tc(s, l).flags |= 256), 2 !== (l = lc(s, l, !1)))
                    ) {
                      if (wu && !u) {
                        ((s.errorRecoveryDisabledLanes |= o),
                          (Su |= o),
                          (a = 4));
                        break e;
                      }
                      ((o = Tu),
                        (Tu = a),
                        null !== o &&
                          (null === Tu ? (Tu = o) : Tu.push.apply(Tu, o)));
                    }
                    a = l;
                  }
                  if (((o = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                (tc(e, 0), Xu(e, t, 0, !0));
                break;
              }
              e: {
                switch (((r = e), (o = a))) {
                  case 0:
                  case 1:
                    throw Error(i(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Xu(r, t, Cu, !bu);
                    break e;
                  case 2:
                    Tu = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(i(329));
                }
                if ((62914560 & t) === t && 10 < (a = Lu + 300 - se())) {
                  if ((Xu(r, t, Cu, !bu), 0 !== Ce(r, 0, !0))) break e;
                  ((Ru = t),
                    (r.timeoutHandle = wd(
                      Qu.bind(
                        null,
                        r,
                        n,
                        Tu,
                        Hu,
                        Vu,
                        t,
                        Cu,
                        Su,
                        Fu,
                        bu,
                        o,
                        "Throttled",
                        -0,
                        0,
                      ),
                      a,
                    )));
                } else Qu(r, n, Tu, Hu, Vu, t, Cu, Su, Fu, bu, o, null, -0, 0);
              }
              break;
            }
            ((a = lc(e, t, !1)), (o = !1));
          }
          Hc(e);
        }
        function Qu(e, t, n, r, a, o, i, l, s, u, c, d, f, h) {
          if (
            ((e.timeoutHandle = -1),
            8192 & (d = t.subtreeFlags) || 16785408 === (16785408 & d))
          ) {
            ou(
              t,
              o,
              (d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Lt,
              }),
            );
            var m =
              (62914560 & o) === o
                ? Lu - se()
                : (4194048 & o) === o
                  ? Nu - se()
                  : 0;
            if (
              null !==
              (m = (function (e, t) {
                return (
                  e.stylesheets && 0 === e.count && uf(e, e.stylesheets),
                  0 < e.count || 0 < e.imgCount
                    ? function (n) {
                        var r = setTimeout(function () {
                          if (
                            (e.stylesheets && uf(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            ((e.unsuspend = null), t());
                          }
                        }, 6e4 + t);
                        0 < e.imgBytes &&
                          0 === of &&
                          (of =
                            62500 *
                            (function () {
                              if (
                                "function" ===
                                typeof performance.getEntriesByType
                              ) {
                                for (
                                  var e = 0,
                                    t = 0,
                                    n =
                                      performance.getEntriesByType("resource"),
                                    r = 0;
                                  r < n.length;
                                  r++
                                ) {
                                  var a = n[r],
                                    o = a.transferSize,
                                    i = a.initiatorType,
                                    l = a.duration;
                                  if (o && l && hd(i)) {
                                    for (
                                      i = 0, l = a.responseEnd, r += 1;
                                      r < n.length;
                                      r++
                                    ) {
                                      var s = n[r],
                                        u = s.startTime;
                                      if (u > l) break;
                                      var c = s.transferSize,
                                        d = s.initiatorType;
                                      c &&
                                        hd(d) &&
                                        (i +=
                                          c *
                                          ((s = s.responseEnd) < l
                                            ? 1
                                            : (l - u) / (s - u)));
                                    }
                                    if (
                                      (--r,
                                      (t += (8 * (o + i)) / (a.duration / 1e3)),
                                      10 < ++e)
                                    )
                                      break;
                                  }
                                }
                                if (0 < e) return t / e / 1e6;
                              }
                              return navigator.connection &&
                                "number" ===
                                  typeof (e = navigator.connection.downlink)
                                ? e
                                : 5;
                            })());
                        var a = setTimeout(
                          function () {
                            if (
                              ((e.waitingForImages = !1),
                              0 === e.count &&
                                (e.stylesheets && uf(e, e.stylesheets),
                                e.unsuspend))
                            ) {
                              var t = e.unsuspend;
                              ((e.unsuspend = null), t());
                            }
                          },
                          (e.imgBytes > of ? 50 : 800) + t,
                        );
                        return (
                          (e.unsuspend = n),
                          function () {
                            ((e.unsuspend = null),
                              clearTimeout(r),
                              clearTimeout(a));
                          }
                        );
                      }
                    : null
                );
              })(d, m))
            )
              return (
                (Ru = o),
                (e.cancelPendingCommit = m(
                  pc.bind(null, e, t, o, n, r, a, i, l, s, c, d, null, f, h),
                )),
                void Xu(e, o, i, !u)
              );
          }
          pc(e, t, o, n, r, a, i, l, s);
        }
        function Gu(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  o = a.getSnapshot;
                a = a.value;
                try {
                  if (!Xn(o(), a)) return !1;
                } catch (i) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              ((n.return = t), (t = n));
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }
          return !0;
        }
        function Xu(e, t, n, r) {
          ((t &= ~Mu),
            (t &= ~Su),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes));
          for (var a = t; 0 < a; ) {
            var o = 31 - xe(a),
              i = 1 << o;
            ((r[o] = -1), (a &= ~i));
          }
          0 !== n && Ne(e, n, t);
        }
        function Ju() {
          return 0 !== (6 & hu) || (jc(0, !1), !1);
        }
        function ec() {
          if (null !== pu) {
            if (0 === vu) var e = pu.return;
            else
              ((Ea = Aa = null), li((e = pu)), (lo = null), (so = 0), (e = pu));
            for (; null !== e; ) (ps(e.alternate, e), (e = e.return));
            pu = null;
          }
        }
        function tc(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), kd(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            (Ru = 0),
            ec(),
            (mu = e),
            (pu = n = Rr(e.current, null)),
            (gu = t),
            (vu = 0),
            (yu = null),
            (bu = !1),
            (xu = Fe(e, t)),
            (wu = !1),
            (Fu = Cu = Mu = Su = Eu = Au = 0),
            (Tu = Pu = null),
            (Vu = !1),
            0 !== (8 & t) && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - xe(r),
                o = 1 << a;
              ((t |= e[a]), (r &= ~o));
            }
          return ((ku = t), Tr(), n);
        }
        function nc(e, t) {
          ((Bo = null),
            (D.H = pl),
            t === Ga || t === Ja
              ? ((t = oo()), (vu = 3))
              : t === Xa
                ? ((t = oo()), (vu = 4))
                : (vu =
                    t === Ll
                      ? 8
                      : null !== t &&
                          "object" === typeof t &&
                          "function" === typeof t.then
                        ? 6
                        : 1),
            (yu = t),
            null === pu && ((Au = 1), Cl(e, Yr(t, e.current))));
        }
        function rc() {
          var e = No.current;
          return (
            null === e ||
            ((4194048 & gu) === gu
              ? null === Do
              : ((62914560 & gu) === gu || 0 !== (536870912 & gu)) && e === Do)
          );
        }
        function ac() {
          var e = D.H;
          return ((D.H = pl), null === e ? pl : e);
        }
        function oc() {
          var e = D.A;
          return ((D.A = du), e);
        }
        function ic() {
          ((Au = 4),
            bu || ((4194048 & gu) !== gu && null !== No.current) || (xu = !0),
            (0 === (134217727 & Eu) && 0 === (134217727 & Su)) ||
              null === mu ||
              Xu(mu, gu, Cu, !1));
        }
        function lc(e, t, n) {
          var r = hu;
          hu |= 2;
          var a = ac(),
            o = oc();
          ((mu === e && gu === t) || ((Hu = null), tc(e, t)), (t = !1));
          var i = Au;
          e: for (;;)
            try {
              if (0 !== vu && null !== pu) {
                var l = pu,
                  s = yu;
                switch (vu) {
                  case 8:
                    (ec(), (i = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === No.current && (t = !0);
                    var u = vu;
                    if (((vu = 0), (yu = null), fc(e, l, s, u), n && xu)) {
                      i = 0;
                      break e;
                    }
                    break;
                  default:
                    ((u = vu), (vu = 0), (yu = null), fc(e, l, s, u));
                }
              }
              (sc(), (i = Au));
              break;
            } catch (c) {
              nc(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (Ea = Aa = null),
            (hu = r),
            (D.H = a),
            (D.A = o),
            null === pu && ((mu = null), (gu = 0), Tr()),
            i
          );
        }
        function sc() {
          for (; null !== pu; ) cc(pu);
        }
        function uc() {
          for (; null !== pu && !ie(); ) cc(pu);
        }
        function cc(e) {
          var t = is(e.alternate, e, ku);
          ((e.memoizedProps = e.pendingProps), null === t ? hc(e) : (pu = t));
        }
        function dc(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Wl(n, t, t.pendingProps, t.type, void 0, gu);
              break;
            case 11:
              t = Wl(n, t, t.pendingProps, t.type.render, t.ref, gu);
              break;
            case 5:
              li(t);
            default:
              (ps(n, t), (t = is(n, (t = pu = Or(t, ku)), ku)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? hc(e) : (pu = t));
        }
        function fc(e, t, n, r) {
          ((Ea = Aa = null), li(t), (lo = null), (so = 0));
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Pa(t, n, a, !0),
                    null !== (n = No.current))
                  ) {
                    switch (n.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Do
                            ? ic()
                            : null === n.alternate && 0 === Au && (Au = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === eo
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              Ec(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === eo
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                  ? (t.retryQueue = new Set([r]))
                                  : n.add(r),
                              Ec(e, r, a)),
                          !1
                        );
                    }
                    throw Error(i(435, n.tag));
                  }
                  return (Ec(e, r, a), ic(), !1);
                }
                if (da)
                  return (
                    null !== (t = No.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== ma &&
                          wa(Yr((e = Error(i(422), { cause: r })), n)))
                      : (r !== ma &&
                          wa(Yr((t = Error(i(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = Yr(r, n)),
                        ko(e, (a = Pl(e.stateNode, r, a))),
                        4 !== Au && (Au = 2)),
                    !1
                  );
                var o = Error(i(520), { cause: r });
                if (
                  ((o = Yr(o, n)),
                  null === Pu ? (Pu = [o]) : Pu.push(o),
                  4 !== Au && (Au = 2),
                  null === t)
                )
                  return !0;
                ((r = Yr(r, n)), (n = t));
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        ko(n, (e = Pl(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (o = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== o &&
                              "function" === typeof o.componentDidCatch &&
                              (null === ju || !ju.has(o)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          Vl((a = Tl(a)), e, n, r),
                          ko(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, gu)
            )
              return ((Au = 1), Cl(e, Yr(n, e.current)), void (pu = null));
          } catch (o) {
            if (null !== a) throw ((pu = a), o);
            return ((Au = 1), Cl(e, Yr(n, e.current)), void (pu = null));
          }
          32768 & t.flags
            ? (da || 1 === r
                ? (e = !0)
                : xu || 0 !== (536870912 & gu)
                  ? (e = !1)
                  : ((bu = e = !0),
                    (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = No.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
              mc(t, e))
            : hc(t);
        }
        function hc(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void mc(t, bu);
            e = t.return;
            var n = hs(t.alternate, t, ku);
            if (null !== n) return void (pu = n);
            if (null !== (t = t.sibling)) return void (pu = t);
            pu = t = e;
          } while (null !== t);
          0 === Au && (Au = 5);
        }
        function mc(e, t) {
          do {
            var n = ms(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (pu = n));
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (pu = e);
            pu = e = n;
          } while (null !== e);
          ((Au = 6), (pu = null));
        }
        function pc(e, t, n, r, a, o, l, s, u) {
          e.cancelPendingCommit = null;
          do {
            xc();
          } while (0 !== Zu);
          if (0 !== (6 & hu)) throw Error(i(327));
          if (null !== t) {
            if (t === e.current) throw Error(i(177));
            if (
              ((o = t.lanes | t.childLanes),
              (function (e, t, n, r, a, o) {
                var i = e.pendingLanes;
                ((e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0));
                var l = e.entanglements,
                  s = e.expirationTimes,
                  u = e.hiddenUpdates;
                for (n = i & ~n; 0 < n; ) {
                  var c = 31 - xe(n),
                    d = 1 << c;
                  ((l[c] = 0), (s[c] = -1));
                  var f = u[c];
                  if (null !== f)
                    for (u[c] = null, c = 0; c < f.length; c++) {
                      var h = f[c];
                      null !== h && (h.lane &= -536870913);
                    }
                  n &= ~d;
                }
                (0 !== r && Ne(e, r, 0),
                  0 !== o &&
                    0 === a &&
                    0 !== e.tag &&
                    (e.suspendedLanes |= o & ~(i & ~t)));
              })(e, n, (o |= Pr), l, s, u),
              e === mu && ((pu = mu = null), (gu = 0)),
              (_u = t),
              (zu = e),
              (Ru = n),
              (Ou = o),
              (Iu = a),
              (Bu = r),
              0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  ae(fe, function () {
                    return (wc(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = 0 !== (13878 & t.flags)),
              0 !== (13878 & t.subtreeFlags) || r)
            ) {
              ((r = D.T),
                (D.T = null),
                (a = H.p),
                (H.p = 2),
                (l = hu),
                (hu |= 4));
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (md = xf), ar((e = rr(e))))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n =
                            ((n = e.ownerDocument) && n.defaultView) || window)
                            .getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var a = r.anchorOffset,
                            o = r.focusNode;
                          r = r.focusOffset;
                          try {
                            (n.nodeType, o.nodeType);
                          } catch (g) {
                            n = null;
                            break e;
                          }
                          var l = 0,
                            s = -1,
                            u = -1,
                            c = 0,
                            d = 0,
                            f = e,
                            h = null;
                          t: for (;;) {
                            for (
                              var m;
                              f !== n ||
                                (0 !== a && 3 !== f.nodeType) ||
                                (s = l + a),
                                f !== o ||
                                  (0 !== r && 3 !== f.nodeType) ||
                                  (u = l + r),
                                3 === f.nodeType && (l += f.nodeValue.length),
                                null !== (m = f.firstChild);
                            )
                              ((h = f), (f = m));
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (h === n && ++c === a && (s = l),
                                h === o && ++d === r && (u = l),
                                null !== (m = f.nextSibling))
                              )
                                break;
                              h = (f = h).parentNode;
                            }
                            f = m;
                          }
                          n =
                            -1 === s || -1 === u ? null : { start: s, end: u };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (
                    pd = { focusedElem: e, selectionRange: n }, xf = !1, Ns = t;
                    null !== Ns;
                  )
                    if (
                      ((e = (t = Ns).child),
                      0 !== (1028 & t.subtreeFlags) && null !== e)
                    )
                      ((e.return = t), (Ns = e));
                    else
                      for (; null !== Ns; ) {
                        switch (
                          ((o = (t = Ns).alternate), (e = t.flags), t.tag)
                        ) {
                          case 0:
                            if (
                              0 !== (4 & e) &&
                              null !==
                                (e =
                                  null !== (e = t.updateQueue)
                                    ? e.events
                                    : null)
                            )
                              for (n = 0; n < e.length; n++)
                                (a = e[n]).ref.impl = a.nextImpl;
                            break;
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (0 !== (1024 & e) && null !== o) {
                              ((e = void 0),
                                (n = t),
                                (a = o.memoizedProps),
                                (o = o.memoizedState),
                                (r = n.stateNode));
                              try {
                                var p = Al(n.type, a);
                                ((e = r.getSnapshotBeforeUpdate(p, o)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (v) {
                                Ac(n, n.return, v);
                              }
                            }
                            break;
                          case 3:
                            if (0 !== (1024 & e))
                              if (
                                9 ===
                                (n = (e = t.stateNode.containerInfo).nodeType)
                              )
                                Pd(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    Pd(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (0 !== (1024 & e)) throw Error(i(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (Ns = e));
                          break;
                        }
                        Ns = t.return;
                      }
                })(e, t);
              } finally {
                ((hu = l), (H.p = a), (D.T = r));
              }
            }
            ((Zu = 1), gc(), vc(), yc());
          }
        }
        function gc() {
          if (1 === Zu) {
            Zu = 0;
            var e = zu,
              t = _u,
              n = 0 !== (13878 & t.flags);
            if (0 !== (13878 & t.subtreeFlags) || n) {
              ((n = D.T), (D.T = null));
              var r = H.p;
              H.p = 2;
              var a = hu;
              hu |= 4;
              try {
                Ws(t, e);
                var o = pd,
                  i = rr(e.containerInfo),
                  l = o.focusedElem,
                  s = o.selectionRange;
                if (
                  i !== l &&
                  l &&
                  l.ownerDocument &&
                  nr(l.ownerDocument.documentElement, l)
                ) {
                  if (null !== s && ar(l)) {
                    var u = s.start,
                      c = s.end;
                    if ((void 0 === c && (c = u), "selectionStart" in l))
                      ((l.selectionStart = u),
                        (l.selectionEnd = Math.min(c, l.value.length)));
                    else {
                      var d = l.ownerDocument || document,
                        f = (d && d.defaultView) || window;
                      if (f.getSelection) {
                        var h = f.getSelection(),
                          m = l.textContent.length,
                          p = Math.min(s.start, m),
                          g = void 0 === s.end ? p : Math.min(s.end, m);
                        !h.extend && p > g && ((i = g), (g = p), (p = i));
                        var v = tr(l, p),
                          y = tr(l, g);
                        if (
                          v &&
                          y &&
                          (1 !== h.rangeCount ||
                            h.anchorNode !== v.node ||
                            h.anchorOffset !== v.offset ||
                            h.focusNode !== y.node ||
                            h.focusOffset !== y.offset)
                        ) {
                          var b = d.createRange();
                          (b.setStart(v.node, v.offset),
                            h.removeAllRanges(),
                            p > g
                              ? (h.addRange(b), h.extend(y.node, y.offset))
                              : (b.setEnd(y.node, y.offset), h.addRange(b)));
                        }
                      }
                    }
                  }
                  for (d = [], h = l; (h = h.parentNode); )
                    1 === h.nodeType &&
                      d.push({
                        element: h,
                        left: h.scrollLeft,
                        top: h.scrollTop,
                      });
                  for (
                    "function" === typeof l.focus && l.focus(), l = 0;
                    l < d.length;
                    l++
                  ) {
                    var x = d[l];
                    ((x.element.scrollLeft = x.left),
                      (x.element.scrollTop = x.top));
                  }
                }
                ((xf = !!md), (pd = md = null));
              } finally {
                ((hu = a), (H.p = r), (D.T = n));
              }
            }
            ((e.current = t), (Zu = 2));
          }
        }
        function vc() {
          if (2 === Zu) {
            Zu = 0;
            var e = zu,
              t = _u,
              n = 0 !== (8772 & t.flags);
            if (0 !== (8772 & t.subtreeFlags) || n) {
              ((n = D.T), (D.T = null));
              var r = H.p;
              H.p = 2;
              var a = hu;
              hu |= 4;
              try {
                Ds(e, t.alternate, t);
              } finally {
                ((hu = a), (H.p = r), (D.T = n));
              }
            }
            Zu = 3;
          }
        }
        function yc() {
          if (4 === Zu || 3 === Zu) {
            ((Zu = 0), le());
            var e = zu,
              t = _u,
              n = Ru,
              r = Bu;
            0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
              ? (Zu = 5)
              : ((Zu = 0), (_u = zu = null), bc(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (
              (0 === a && (ju = null),
              Ze(n),
              (t = t.stateNode),
              ye && "function" === typeof ye.onCommitFiberRoot)
            )
              try {
                ye.onCommitFiberRoot(
                  ve,
                  t,
                  void 0,
                  128 === (128 & t.current.flags),
                );
              } catch (s) {}
            if (null !== r) {
              ((t = D.T), (a = H.p), (H.p = 2), (D.T = null));
              try {
                for (var o = e.onRecoverableError, i = 0; i < r.length; i++) {
                  var l = r[i];
                  o(l.value, { componentStack: l.stack });
                }
              } finally {
                ((D.T = t), (H.p = a));
              }
            }
            (0 !== (3 & Ru) && xc(),
              Hc(e),
              (a = e.pendingLanes),
              0 !== (261930 & n) && 0 !== (42 & a)
                ? e === Wu
                  ? Uu++
                  : ((Uu = 0), (Wu = e))
                : (Uu = 0),
              jc(0, !1));
          }
        }
        function bc(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ra(t));
        }
        function xc() {
          return (gc(), vc(), yc(), wc());
        }
        function wc() {
          if (5 !== Zu) return !1;
          var e = zu,
            t = Ou;
          Ou = 0;
          var n = Ze(Ru),
            r = D.T,
            a = H.p;
          try {
            ((H.p = 32 > n ? 32 : n), (D.T = null), (n = Iu), (Iu = null));
            var o = zu,
              l = Ru;
            if (((Zu = 0), (_u = zu = null), (Ru = 0), 0 !== (6 & hu)))
              throw Error(i(331));
            var s = hu;
            if (
              ((hu |= 4),
              su(o.current),
              eu(o, o.current, l, n),
              (hu = s),
              jc(0, !1),
              ye && "function" === typeof ye.onPostCommitFiberRoot)
            )
              try {
                ye.onPostCommitFiberRoot(ve, o);
              } catch (u) {}
            return !0;
          } finally {
            ((H.p = a), (D.T = r), bc(e, t));
          }
        }
        function kc(e, t, n) {
          ((t = Yr(n, t)),
            null !== (e = xo(e, (t = Pl(e.stateNode, t, 2)), 2)) &&
              (Le(e, 2), Hc(e)));
        }
        function Ac(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === ju || !ju.has(r)))
                ) {
                  ((e = Yr(n, e)),
                    null !== (r = xo(t, (n = Tl(2)), 2)) &&
                      (Vl(n, r, t, e), Le(r, 2), Hc(r)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ec(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) ||
            ((wu = !0), a.add(n), (e = Sc.bind(null, e, t, n)), t.then(e, e));
        }
        function Sc(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            mu === e &&
              (gu & n) === n &&
              (4 === Au ||
              (3 === Au && (62914560 & gu) === gu && 300 > se() - Lu)
                ? 0 === (2 & hu) && tc(e, 0)
                : (Mu |= n),
              Fu === gu && (Fu = 0)),
            Hc(e));
        }
        function Mc(e, t) {
          (0 === t && (t = Te()), null !== (e = Nr(e, t)) && (Le(e, t), Hc(e)));
        }
        function Cc(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), Mc(e, n));
        }
        function Fc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 31:
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(i(314));
          }
          (null !== r && r.delete(t), Mc(e, n));
        }
        var Pc = null,
          Tc = null,
          Vc = !1,
          Lc = !1,
          Nc = !1,
          Dc = 0;
        function Hc(e) {
          (e !== Tc &&
            null === e.next &&
            (null === Tc ? (Pc = Tc = e) : (Tc = Tc.next = e)),
            (Lc = !0),
            Vc ||
              ((Vc = !0),
              Ed(function () {
                0 !== (6 & hu) ? ae(ce, Zc) : zc();
              })));
        }
        function jc(e, t) {
          if (!Nc && Lc) {
            Nc = !0;
            do {
              for (var n = !1, r = Pc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var o = 0;
                    else {
                      var i = r.suspendedLanes,
                        l = r.pingedLanes;
                      ((o = (1 << (31 - xe(42 | e) + 1)) - 1),
                        (o =
                          201326741 & (o &= a & ~(i & ~l))
                            ? (201326741 & o) | 1
                            : o
                              ? 2 | o
                              : 0));
                    }
                    0 !== o && ((n = !0), Oc(r, o));
                  } else
                    ((o = gu),
                      0 ===
                        (3 &
                          (o = Ce(
                            r,
                            r === mu ? o : 0,
                            null !== r.cancelPendingCommit ||
                              -1 !== r.timeoutHandle,
                          ))) ||
                        Fe(r, o) ||
                        ((n = !0), Oc(r, o)));
                r = r.next;
              }
            } while (n);
            Nc = !1;
          }
        }
        function Zc() {
          zc();
        }
        function zc() {
          Lc = Vc = !1;
          var e = 0;
          0 !== Dc &&
            (function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== xd && ((xd = e), !0);
              return ((xd = null), !1);
            })() &&
            (e = Dc);
          for (var t = se(), n = null, r = Pc; null !== r; ) {
            var a = r.next,
              o = _c(r, t);
            (0 === o
              ? ((r.next = null),
                null === n ? (Pc = a) : (n.next = a),
                null === a && (Tc = n))
              : ((n = r), (0 !== e || 0 !== (3 & o)) && (Lc = !0)),
              (r = a));
          }
          ((0 !== Zu && 5 !== Zu) || jc(e, !1), 0 !== Dc && (Dc = 0));
        }
        function _c(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              o = -62914561 & e.pendingLanes;
            0 < o;
          ) {
            var i = 31 - xe(o),
              l = 1 << i,
              s = a[i];
            (-1 === s
              ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = Pe(l, t))
              : s <= t && (e.expiredLanes |= l),
              (o &= ~l));
          }
          if (
            ((n = gu),
            (n = Ce(
              e,
              e === (t = mu) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            )),
            (r = e.callbackNode),
            0 === n ||
              (e === t && (2 === vu || 9 === vu)) ||
              null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && oe(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || Fe(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && oe(r), Ze(n))) {
              case 2:
              case 8:
                n = de;
                break;
              case 32:
              default:
                n = fe;
                break;
              case 268435456:
                n = me;
            }
            return (
              (r = Rc.bind(null, e)),
              (n = ae(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && oe(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function Rc(e, t) {
          if (0 !== Zu && 5 !== Zu)
            return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (xc() && e.callbackNode !== n) return null;
          var r = gu;
          return 0 ===
            (r = Ce(
              e,
              e === mu ? r : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            ))
            ? null
            : (Ku(e, r, t),
              _c(e, se()),
              null != e.callbackNode && e.callbackNode === n
                ? Rc.bind(null, e)
                : null);
        }
        function Oc(e, t) {
          if (xc()) return null;
          Ku(e, t, !0);
        }
        function Ic() {
          if (0 === Dc) {
            var e = Ba;
            (0 === e && ((e = Ae), 0 === (261888 & (Ae <<= 1)) && (Ae = 256)),
              (Dc = e));
          }
          return Dc;
        }
        function Bc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
              ? e
              : Vt("" + e);
        }
        function Uc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Wc = 0; Wc < Er.length; Wc++) {
          var qc = Er[Wc];
          Sr(qc.toLowerCase(), "on" + (qc[0].toUpperCase() + qc.slice(1)));
        }
        (Sr(gr, "onAnimationEnd"),
          Sr(vr, "onAnimationIteration"),
          Sr(yr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(br, "onTransitionRun"),
          Sr(xr, "onTransitionStart"),
          Sr(wr, "onTransitionCancel"),
          Sr(kr, "onTransitionEnd"),
          at("onMouseEnter", ["mouseout", "mouseover"]),
          at("onMouseLeave", ["mouseout", "mouseover"]),
          at("onPointerEnter", ["pointerout", "pointerover"]),
          at("onPointerLeave", ["pointerout", "pointerover"]),
          rt(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          rt(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          rt("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          rt(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          rt(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          rt(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ));
        var $c =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Yc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat($c),
          );
        function Kc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  ((o = l), (a.currentTarget = u));
                  try {
                    o(a);
                  } catch (c) {
                    Mr(c);
                  }
                  ((a.currentTarget = null), (o = s));
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  ((o = l), (a.currentTarget = u));
                  try {
                    o(a);
                  } catch (c) {
                    Mr(c);
                  }
                  ((a.currentTarget = null), (o = s));
                }
            }
          }
        }
        function Qc(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (ed(t, e, 2, !1), n.add(r));
        }
        function Gc(e, t, n) {
          var r = 0;
          (t && (r |= 4), ed(n, e, r, t));
        }
        var Xc = "_reactListening" + Math.random().toString(36).slice(2);
        function Jc(e) {
          if (!e[Xc]) {
            ((e[Xc] = !0),
              tt.forEach(function (t) {
                "selectionchange" !== t &&
                  (Yc.has(t) || Gc(t, !1, e), Gc(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Xc] || ((t[Xc] = !0), Gc("selectionchange", !1, t));
          }
        }
        function ed(e, t, n, r) {
          switch (Cf(t)) {
            case 2:
              var a = wf;
              break;
            case 8:
              a = kf;
              break;
            default:
              a = Af;
          }
          ((n = a.bind(null, t, n, e)),
            (a = void 0),
            !It ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1));
        }
        function td(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if ((3 === u || 4 === u) && i.stateNode.containerInfo === a)
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = Qe(l))) return;
                  if (5 === (u = i.tag) || 6 === u || 26 === u || 27 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          _t(function () {
            var r = o,
              a = Dt(n),
              i = [];
            e: {
              var l = Ar.get(e);
              if (void 0 !== l) {
                var u = nn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === Yt(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = yn;
                    break;
                  case "focusin":
                    ((c = "focus"), (u = un));
                    break;
                  case "focusout":
                    ((c = "blur"), (u = un));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = un;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = ln;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = sn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = xn;
                    break;
                  case gr:
                  case vr:
                  case yr:
                    u = cn;
                    break;
                  case kr:
                    u = wn;
                    break;
                  case "scroll":
                  case "scrollend":
                    u = an;
                    break;
                  case "wheel":
                    u = kn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = dn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = bn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    u = An;
                }
                var d = 0 !== (4 & t),
                  f = !d && ("scroll" === e || "scrollend" === e),
                  h = d ? (null !== l ? l + "Capture" : null) : l;
                d = [];
                for (var m, p = r; null !== p; ) {
                  var g = p;
                  if (
                    ((m = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === m ||
                      null === h ||
                      (null != (g = Rt(p, h)) && d.push(nd(p, g, m))),
                    f)
                  )
                    break;
                  p = p.return;
                }
                0 < d.length &&
                  ((l = new u(l, c, null, n, a)),
                  i.push({ event: l, listeners: d }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === Nt ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!Qe(c) && !c[Be])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? Qe(c)
                          : null) &&
                        ((f = s(c)),
                        (d = c.tag),
                        c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((d = ln),
                  (g = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = bn),
                    (g = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (f = null == u ? l : Xe(u)),
                  (m = null == c ? l : Xe(c)),
                  ((l = new d(g, p + "leave", u, n, a)).target = f),
                  (l.relatedTarget = m),
                  (g = null),
                  Qe(a) === r &&
                    (((d = new d(h, p + "enter", c, n, a)).target = m),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  u && c)
                )
                  e: {
                    for (d = ad, p = c, m = 0, g = h = u; g; g = d(g)) m++;
                    g = 0;
                    for (var v = p; v; v = d(v)) g++;
                    for (; 0 < m - g; ) ((h = d(h)), m--);
                    for (; 0 < g - m; ) ((p = d(p)), g--);
                    for (; m--; ) {
                      if (h === p || (null !== p && h === p.alternate)) {
                        d = h;
                        break e;
                      }
                      ((h = d(h)), (p = d(p)));
                    }
                    d = null;
                  }
                else d = null;
                (null !== u && od(i, l, u, d, !1),
                  null !== c && null !== f && od(i, f, c, d, !0));
              }
              if (
                "select" ===
                  (u =
                    (l = r ? Xe(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var y = On;
              else if (Hn(l))
                if (In) y = Gn;
                else {
                  y = Kn;
                  var b = Yn;
                }
              else
                !(u = l.nodeName) ||
                "input" !== u.toLowerCase() ||
                ("checkbox" !== l.type && "radio" !== l.type)
                  ? r && Ft(r.elementType) && (y = On)
                  : (y = Qn);
              switch (
                (y && (y = y(e, r))
                  ? jn(i, y, n, a)
                  : (b && b(e, l, r),
                    "focusout" === e &&
                      r &&
                      "number" === l.type &&
                      null != r.memoizedProps.value &&
                      xt(l, "number", l.value)),
                (b = r ? Xe(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(b) || "true" === b.contentEditable) &&
                    ((ir = b), (lr = r), (sr = null));
                  break;
                case "focusout":
                  sr = lr = ir = null;
                  break;
                case "mousedown":
                  ur = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((ur = !1), cr(i, n, a));
                  break;
                case "selectionchange":
                  if (or) break;
                case "keydown":
                case "keyup":
                  cr(i, n, a);
              }
              var x;
              if (Sn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var w = "onCompositionStart";
                      break e;
                    case "compositionend":
                      w = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      w = "onCompositionUpdate";
                      break e;
                  }
                  w = void 0;
                }
              else
                Nn
                  ? Vn(e, n) && (w = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (w = "onCompositionStart");
              (w &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Nn || "onCompositionStart" !== w
                    ? "onCompositionEnd" === w && Nn && (x = $t())
                    : ((Wt = "value" in (Ut = a) ? Ut.value : Ut.textContent),
                      (Nn = !0))),
                0 < (b = rd(r, w)).length &&
                  ((w = new fn(w, e, null, n, a)),
                  i.push({ event: w, listeners: b }),
                  x ? (w.data = x) : null !== (x = Ln(n)) && (w.data = x))),
                (x = Cn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Ln(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Tn = !0), Pn);
                        case "textInput":
                          return (e = t.data) === Pn && Tn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Nn)
                        return "compositionend" === e || (!Sn && Vn(e, t))
                          ? ((e = $t()), (qt = Wt = Ut = null), (Nn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (w = rd(r, "onBeforeInput")).length &&
                  ((b = new fn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: b, listeners: w }),
                  (b.data = x)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var o = Bc((a[Ie] || null).action),
                      i = r.submitter;
                    i &&
                      null !==
                        (t = (t = i[Ie] || null)
                          ? Bc(t.formAction)
                          : i.getAttribute("formAction")) &&
                      ((o = t), (i = null));
                    var l = new nn("action", "action", null, r, a);
                    e.push({
                      event: l,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== Dc) {
                                var e = i ? Uc(a, i) : new FormData(a);
                                tl(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: o,
                                  },
                                  null,
                                  e,
                                );
                              }
                            } else
                              "function" === typeof o &&
                                (l.preventDefault(),
                                (e = i ? Uc(a, i) : new FormData(a)),
                                tl(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: o,
                                  },
                                  o,
                                  e,
                                ));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(i, e, r, n, a));
            }
            Kc(i, t);
          });
        }
        function nd(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function rd(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            if (
              ((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
                null === o ||
                (null != (a = Rt(e, n)) && r.unshift(nd(e, a, o)),
                null != (a = Rt(e, t)) && r.push(nd(e, a, o))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function ad(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function od(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (((l = l.tag), null !== s && s === r)) break;
            ((5 !== l && 26 !== l && 27 !== l) ||
              null === u ||
              ((s = u),
              a
                ? null != (u = Rt(n, o)) && i.unshift(nd(n, u, s))
                : a || (null != (u = Rt(n, o)) && i.push(nd(n, u, s)))),
              (n = n.return));
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var id = /\r\n?/g,
          ld = /\u0000|\uFFFD/g;
        function sd(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(id, "\n")
            .replace(ld, "");
        }
        function ud(e, t) {
          return ((t = sd(t)), sd(e) === t);
        }
        function cd(e, t, n, r, a, o) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || Et(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  Et(e, "" + r);
              break;
            case "className":
              ut(e, "class", r);
              break;
            case "tabIndex":
              ut(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              ut(e, n, r);
              break;
            case "style":
              Ct(e, r, o);
              break;
            case "data":
              if ("object" !== t) {
                ut(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = Vt("" + r)), e.setAttribute(n, r));
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              }
              if (
                ("function" === typeof o &&
                  ("formAction" === n
                    ? ("input" !== t && cd(e, t, "name", a.name, a, null),
                      cd(e, t, "formEncType", a.formEncType, a, null),
                      cd(e, t, "formMethod", a.formMethod, a, null),
                      cd(e, t, "formTarget", a.formTarget, a, null))
                    : (cd(e, t, "encType", a.encType, a, null),
                      cd(e, t, "method", a.method, a, null),
                      cd(e, t, "target", a.target, a, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = Vt("" + r)), e.setAttribute(n, r));
              break;
            case "onClick":
              null != r && (e.onclick = Lt);
              break;
            case "onScroll":
              null != r && Qc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Qc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              ((n = Vt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n,
                ));
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                    null != r &&
                    "function" !== typeof r &&
                    "symbol" !== typeof r
                  ? e.setAttribute(n, r)
                  : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              (Qc("beforetoggle", e), Qc("toggle", e), st(e, "popover", r));
              break;
            case "xlinkActuate":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              st(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                st(e, (n = Pt.get(n) || n), r);
          }
        }
        function dd(e, t, n, r, a, o) {
          switch (n) {
            case "style":
              Ct(e, r, o);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? Et(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  Et(e, "" + r);
              break;
            case "onScroll":
              null != r && Qc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Qc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Lt);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              nt.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ===
                  typeof (o = null != (o = e[Ie] || null) ? o[n] : null) &&
                  e.removeEventListener(t, o, a),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                      ? e.setAttribute(n, "")
                      : st(e, n, r)
                  : ("function" !== typeof o &&
                      null !== o &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
          }
        }
        function fd(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              (Qc("error", e), Qc("load", e));
              var r,
                a = !1,
                o = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var l = n[r];
                  if (null != l)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        o = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(i(137, t));
                      default:
                        cd(e, t, r, l, n, null);
                    }
                }
              return (
                o && cd(e, t, "srcSet", n.srcSet, n, null),
                void (a && cd(e, t, "src", n.src, n, null))
              );
            case "input":
              Qc("invalid", e);
              var s = (r = l = o = null),
                u = null,
                c = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var d = n[a];
                  if (null != d)
                    switch (a) {
                      case "name":
                        o = d;
                        break;
                      case "type":
                        l = d;
                        break;
                      case "checked":
                        u = d;
                        break;
                      case "defaultChecked":
                        c = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        s = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(i(137, t));
                        break;
                      default:
                        cd(e, t, a, d, n, null);
                    }
                }
              return void bt(e, r, s, u, c, l, o, !1);
            case "select":
              for (o in (Qc("invalid", e), (a = l = r = null), n))
                if (n.hasOwnProperty(o) && null != (s = n[o]))
                  switch (o) {
                    case "value":
                      r = s;
                      break;
                    case "defaultValue":
                      l = s;
                      break;
                    case "multiple":
                      a = s;
                    default:
                      cd(e, t, o, s, n, null);
                  }
              return (
                (t = r),
                (n = l),
                (e.multiple = !!a),
                void (null != t
                  ? wt(e, !!a, t, !1)
                  : null != n && wt(e, !!a, n, !0))
              );
            case "textarea":
              for (l in (Qc("invalid", e), (r = o = a = null), n))
                if (n.hasOwnProperty(l) && null != (s = n[l]))
                  switch (l) {
                    case "value":
                      a = s;
                      break;
                    case "defaultValue":
                      o = s;
                      break;
                    case "children":
                      r = s;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != s) throw Error(i(91));
                      break;
                    default:
                      cd(e, t, l, s, n, null);
                  }
              return void At(e, a, o, r);
            case "option":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (a = n[u]))
                  if ("selected" === u)
                    e.selected =
                      a && "function" !== typeof a && "symbol" !== typeof a;
                  else cd(e, t, u, a, n, null);
              return;
            case "dialog":
              (Qc("beforetoggle", e),
                Qc("toggle", e),
                Qc("cancel", e),
                Qc("close", e));
              break;
            case "iframe":
            case "object":
              Qc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < $c.length; a++) Qc($c[a], e);
              break;
            case "image":
              (Qc("error", e), Qc("load", e));
              break;
            case "details":
              Qc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (Qc("error", e), Qc("load", e));
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(i(137, t));
                    default:
                      cd(e, t, c, a, n, null);
                  }
              return;
            default:
              if (Ft(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (a = n[d]) &&
                    dd(e, t, d, a, n, void 0);
                return;
              }
          }
          for (s in n)
            n.hasOwnProperty(s) &&
              null != (a = n[s]) &&
              cd(e, t, s, a, n, null);
        }
        function hd(e) {
          switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
              return !0;
            default:
              return !1;
          }
        }
        var md = null,
          pd = null;
        function gd(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function vd(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function yd(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function bd(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var xd = null;
        var wd = "function" === typeof setTimeout ? setTimeout : void 0,
          kd = "function" === typeof clearTimeout ? clearTimeout : void 0,
          Ad = "function" === typeof Promise ? Promise : void 0,
          Ed =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof Ad
                ? function (e) {
                    return Ad.resolve(null).then(e).catch(Sd);
                  }
                : wd;
        function Sd(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function Md(e) {
          return "head" === e;
        }
        function Cd(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data) || "/&" === n) {
                if (0 === r) return (e.removeChild(a), void Wf(t));
                r--;
              } else if (
                "$" === n ||
                "$?" === n ||
                "$~" === n ||
                "$!" === n ||
                "&" === n
              )
                r++;
              else if ("html" === n) zd(e.ownerDocument.documentElement);
              else if ("head" === n) {
                zd((n = e.ownerDocument.head));
                for (var o = n.firstChild; o; ) {
                  var i = o.nextSibling,
                    l = o.nodeName;
                  (o[Ye] ||
                    "SCRIPT" === l ||
                    "STYLE" === l ||
                    ("LINK" === l && "stylesheet" === o.rel.toLowerCase()) ||
                    n.removeChild(o),
                    (o = i));
                }
              } else "body" === n && zd(e.ownerDocument.body);
            n = a;
          } while (n);
          Wf(t);
        }
        function Fd(e, t) {
          var n = e;
          e = 0;
          do {
            var r = n.nextSibling;
            if (
              (1 === n.nodeType
                ? t
                  ? ((n._stashedDisplay = n.style.display),
                    (n.style.display = "none"))
                  : ((n.style.display = n._stashedDisplay || ""),
                    "" === n.getAttribute("style") &&
                      n.removeAttribute("style"))
                : 3 === n.nodeType &&
                  (t
                    ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                    : (n.nodeValue = n._stashedText || "")),
              r && 8 === r.nodeType)
            )
              if ("/$" === (n = r.data)) {
                if (0 === e) break;
                e--;
              } else
                ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
            n = r;
          } while (n);
        }
        function Pd(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (Pd(n), Ke(n));
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function Td(e, t) {
          for (; 8 !== e.nodeType; ) {
            if (
              (1 !== e.nodeType ||
                "INPUT" !== e.nodeName ||
                "hidden" !== e.type) &&
              !t
            )
              return null;
            if (null === (e = Nd(e.nextSibling))) return null;
          }
          return e;
        }
        function Vd(e) {
          return "$?" === e.data || "$~" === e.data;
        }
        function Ld(e) {
          return (
            "$!" === e.data ||
            ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
          );
        }
        function Nd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "$~" === t ||
                "&" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t || "/&" === t) return null;
            }
          }
          return e;
        }
        var Dd = null;
        function Hd(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n || "/&" === n) {
                if (0 === t) return Nd(e.nextSibling);
                t--;
              } else
                ("$" !== n &&
                  "$!" !== n &&
                  "$?" !== n &&
                  "$~" !== n &&
                  "&" !== n) ||
                  t++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function jd(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if (
                "$" === n ||
                "$!" === n ||
                "$?" === n ||
                "$~" === n ||
                "&" === n
              ) {
                if (0 === t) return e;
                t--;
              } else ("/$" !== n && "/&" !== n) || t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function Zd(e, t, n) {
          switch (((t = gd(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(i(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(i(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(i(454));
              return e;
            default:
              throw Error(i(451));
          }
        }
        function zd(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Ke(e);
        }
        var _d = new Map(),
          Rd = new Set();
        function Od(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var Id = H.d;
        H.d = {
          f: function () {
            var e = Id.f(),
              t = Ju();
            return e || t;
          },
          r: function (e) {
            var t = Ge(e);
            null !== t && 5 === t.tag && "form" === t.type ? rl(t) : Id.r(e);
          },
          D: function (e) {
            (Id.D(e), Ud("dns-prefetch", e, null));
          },
          C: function (e, t) {
            (Id.C(e, t), Ud("preconnect", e, t));
          },
          L: function (e, t, n) {
            Id.L(e, t, n);
            var r = Bd;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + vt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + vt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (a += '[imagesizes="' + vt(n.imageSizes) + '"]'))
                : (a += '[href="' + vt(e) + '"]');
              var o = a;
              switch (t) {
                case "style":
                  o = qd(e);
                  break;
                case "script":
                  o = Kd(e);
              }
              _d.has(o) ||
                ((e = h(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n,
                )),
                _d.set(o, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector($d(o))) ||
                  ("script" === t && r.querySelector(Qd(o))) ||
                  (fd((t = r.createElement("link")), "link", e),
                  et(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Id.m(e, t);
            var n = Bd;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                a =
                  'link[rel="modulepreload"][as="' +
                  vt(r) +
                  '"][href="' +
                  vt(e) +
                  '"]',
                o = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  o = Kd(e);
              }
              if (
                !_d.has(o) &&
                ((e = h({ rel: "modulepreload", href: e }, t)),
                _d.set(o, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Qd(o))) return;
                }
                (fd((r = n.createElement("link")), "link", e),
                  et(r),
                  n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            Id.X(e, t);
            var n = Bd;
            if (n && e) {
              var r = Je(n).hoistableScripts,
                a = Kd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Qd(a))) ||
                  ((e = h({ src: e, async: !0 }, t)),
                  (t = _d.get(a)) && ef(e, t),
                  et((o = n.createElement("script"))),
                  fd(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
          S: function (e, t, n) {
            Id.S(e, t, n);
            var r = Bd;
            if (r && e) {
              var a = Je(r).hoistableStyles,
                o = qd(e);
              t = t || "default";
              var i = a.get(o);
              if (!i) {
                var l = { loading: 0, preload: null };
                if ((i = r.querySelector($d(o)))) l.loading = 5;
                else {
                  ((e = h(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n,
                  )),
                    (n = _d.get(o)) && Jd(e, n));
                  var s = (i = r.createElement("link"));
                  (et(s),
                    fd(s, "link", e),
                    (s._p = new Promise(function (e, t) {
                      ((s.onload = e), (s.onerror = t));
                    })),
                    s.addEventListener("load", function () {
                      l.loading |= 1;
                    }),
                    s.addEventListener("error", function () {
                      l.loading |= 2;
                    }),
                    (l.loading |= 4),
                    Xd(i, t, r));
                }
                ((i = { type: "stylesheet", instance: i, count: 1, state: l }),
                  a.set(o, i));
              }
            }
          },
          M: function (e, t) {
            Id.M(e, t);
            var n = Bd;
            if (n && e) {
              var r = Je(n).hoistableScripts,
                a = Kd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Qd(a))) ||
                  ((e = h({ src: e, async: !0, type: "module" }, t)),
                  (t = _d.get(a)) && ef(e, t),
                  et((o = n.createElement("script"))),
                  fd(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
        };
        var Bd = "undefined" === typeof document ? null : document;
        function Ud(e, t, n) {
          var r = Bd;
          if (r && "string" === typeof t && t) {
            var a = vt(t);
            ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
              Rd.has(a) ||
                (Rd.add(a),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(a) &&
                  (fd((t = r.createElement("link")), "link", e),
                  et(t),
                  r.head.appendChild(t))));
          }
        }
        function Wd(e, t, n, r) {
          var a,
            o,
            l,
            s,
            u = (u = q.current) ? Od(u) : null;
          if (!u) throw Error(i(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = qd(n.href)),
                  (r = (n = Je(u).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = qd(n.href);
                var c = Je(u).hoistableStyles,
                  d = c.get(e);
                if (
                  (d ||
                    ((u = u.ownerDocument || u),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, d),
                    (c = u.querySelector($d(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    _d.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      _d.set(e, n),
                      c ||
                        ((a = u),
                        (o = e),
                        (l = n),
                        (s = d.state),
                        a.querySelector(
                          'link[rel="preload"][as="style"][' + o + "]",
                        )
                          ? (s.loading = 1)
                          : ((o = a.createElement("link")),
                            (s.preload = o),
                            o.addEventListener("load", function () {
                              return (s.loading |= 1);
                            }),
                            o.addEventListener("error", function () {
                              return (s.loading |= 2);
                            }),
                            fd(o, "link", l),
                            et(o),
                            a.head.appendChild(o))))),
                  t && null === r)
                )
                  throw Error(i(528, ""));
                return d;
              }
              if (t && null !== r) throw Error(i(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = Kd(n)),
                    (r = (n = Je(u).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(i(444, e));
          }
        }
        function qd(e) {
          return 'href="' + vt(e) + '"';
        }
        function $d(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function Yd(e) {
          return h({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function Kd(e) {
          return '[src="' + vt(e) + '"]';
        }
        function Qd(e) {
          return "script[async]" + e;
        }
        function Gd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + vt(n.href) + '"]',
                );
                if (r) return ((t.instance = r), et(r), r);
                var a = h({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  et((r = (e.ownerDocument || e).createElement("style"))),
                  fd(r, "style", a),
                  Xd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = qd(n.href);
                var o = e.querySelector($d(a));
                if (o)
                  return ((t.state.loading |= 4), (t.instance = o), et(o), o);
                ((r = Yd(n)),
                  (a = _d.get(a)) && Jd(r, a),
                  et((o = (e.ownerDocument || e).createElement("link"))));
                var l = o;
                return (
                  (l._p = new Promise(function (e, t) {
                    ((l.onload = e), (l.onerror = t));
                  })),
                  fd(o, "link", r),
                  (t.state.loading |= 4),
                  Xd(o, n.precedence, e),
                  (t.instance = o)
                );
              case "script":
                return (
                  (o = Kd(n.src)),
                  (a = e.querySelector(Qd(o)))
                    ? ((t.instance = a), et(a), a)
                    : ((r = n),
                      (a = _d.get(o)) && ef((r = h({}, n)), a),
                      et(
                        (a = (e = e.ownerDocument || e).createElement(
                          "script",
                        )),
                      ),
                      fd(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(i(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              Xd(r, n.precedence, e));
          return t.instance;
        }
        function Xd(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
              ),
              a = r.length ? r[r.length - 1] : null,
              o = a,
              i = 0;
            i < r.length;
            i++
          ) {
            var l = r[i];
            if (l.dataset.precedence === t) o = l;
            else if (o !== a) break;
          }
          o
            ? o.parentNode.insertBefore(e, o.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Jd(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title));
        }
        function ef(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity));
        }
        var tf = null;
        function nf(e, t, n) {
          if (null === tf) {
            var r = new Map(),
              a = (tf = new Map());
            a.set(n, r);
          } else (r = (a = tf).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), a = 0;
            a < n.length;
            a++
          ) {
            var o = n[a];
            if (
              !(
                o[Ye] ||
                o[Oe] ||
                ("link" === e && "stylesheet" === o.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== o.namespaceURI
            ) {
              var i = o.getAttribute(t) || "";
              i = e + i;
              var l = r.get(i);
              l ? l.push(o) : r.set(i, [o]);
            }
          }
          return r;
        }
        function rf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null,
          );
        }
        function af(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var of = 0;
        function lf() {
          if (
            (this.count--,
            0 === this.count && (0 === this.imgCount || !this.waitingForImages))
          )
            if (this.stylesheets) uf(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              ((this.unsuspend = null), e());
            }
        }
        var sf = null;
        function uf(e, t) {
          ((e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (sf = new Map()),
              t.forEach(cf, e),
              (sf = null),
              lf.call(e)));
        }
        function cf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = sf.get(e);
            if (n) var r = n.get(null);
            else {
              ((n = new Map()), sf.set(e, n));
              for (
                var a = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]",
                  ),
                  o = 0;
                o < a.length;
                o++
              ) {
                var i = a[o];
                ("LINK" !== i.nodeName &&
                  "not all" === i.getAttribute("media")) ||
                  (n.set(i.dataset.precedence, i), (r = i));
              }
              r && n.set(null, r);
            }
            ((i = (a = t.instance).getAttribute("data-precedence")),
              (o = n.get(i) || r) === r && n.set(null, a),
              n.set(i, a),
              this.count++,
              (r = lf.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              o
                ? o.parentNode.insertBefore(a, o.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    a,
                    e.firstChild,
                  ),
              (t.state.loading |= 4));
          }
        }
        var df = {
          $$typeof: w,
          Provider: null,
          Consumer: null,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
        };
        function ff(e, t, n, r, a, o, i, l, s) {
          ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Ve(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ve(0)),
            (this.hiddenUpdates = Ve(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = o),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = s),
            (this.incompleteTransitions = new Map()));
        }
        function hf(e, t, n, r, a, o, i, l, s, u, c, d) {
          return (
            (e = new ff(e, t, n, i, s, u, c, d, l)),
            (t = 1),
            !0 === o && (t |= 24),
            (o = zr(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (t = _a()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
            vo(o),
            e
          );
        }
        function mf(e) {
          return e ? (e = jr) : jr;
        }
        function pf(e, t, n, r, a, o) {
          ((a = mf(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = bo(t)).payload = { element: n }),
            null !== (o = void 0 === o ? null : o) && (r.callback = o),
            null !== (n = xo(e, r, t)) && (Yu(n, 0, t), wo(n, e, t)));
        }
        function gf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function vf(e, t) {
          (gf(e, t), (e = e.alternate) && gf(e, t));
        }
        function yf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Nr(e, 67108864);
            (null !== t && Yu(t, 0, 67108864), vf(e, 67108864));
          }
        }
        function bf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = qu(),
              n = Nr(e, (t = je(t)));
            (null !== n && Yu(n, 0, t), vf(e, t));
          }
        }
        var xf = !0;
        function wf(e, t, n, r) {
          var a = D.T;
          D.T = null;
          var o = H.p;
          try {
            ((H.p = 2), Af(e, t, n, r));
          } finally {
            ((H.p = o), (D.T = a));
          }
        }
        function kf(e, t, n, r) {
          var a = D.T;
          D.T = null;
          var o = H.p;
          try {
            ((H.p = 8), Af(e, t, n, r));
          } finally {
            ((H.p = o), (D.T = a));
          }
        }
        function Af(e, t, n, r) {
          if (xf) {
            var a = Ef(r);
            if (null === a) (td(e, t, r, Sf, n), jf(e, r));
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return ((Pf = Zf(Pf, e, t, n, r, a)), !0);
                  case "dragenter":
                    return ((Tf = Zf(Tf, e, t, n, r, a)), !0);
                  case "mouseover":
                    return ((Vf = Zf(Vf, e, t, n, r, a)), !0);
                  case "pointerover":
                    var o = a.pointerId;
                    return (
                      Lf.set(o, Zf(Lf.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Nf.set(o, Zf(Nf.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((jf(e, r), 4 & t && -1 < Hf.indexOf(e))) {
              for (; null !== a; ) {
                var o = Ge(a);
                if (null !== o)
                  switch (o.tag) {
                    case 3:
                      if (
                        (o = o.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var i = Me(o.pendingLanes);
                        if (0 !== i) {
                          var l = o;
                          for (
                            l.pendingLanes |= 2, l.entangledLanes |= 2;
                            i;
                          ) {
                            var s = 1 << (31 - xe(i));
                            ((l.entanglements[1] |= s), (i &= ~s));
                          }
                          (Hc(o),
                            0 === (6 & hu) && ((Du = se() + 500), jc(0, !1)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      (null !== (l = Nr(o, 2)) && Yu(l, 0, 2), Ju(), vf(o, 2));
                  }
                if ((null === (o = Ef(r)) && td(e, t, r, Sf, n), o === a))
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else td(e, t, r, null, n);
          }
        }
        function Ef(e) {
          return Mf((e = Dt(e)));
        }
        var Sf = null;
        function Mf(e) {
          if (((Sf = null), null !== (e = Qe(e)))) {
            var t = s(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = u(t))) return e;
                e = null;
              } else if (31 === n) {
                if (null !== (e = c(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return ((Sf = e), null);
        }
        function Cf(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ue()) {
                case ce:
                  return 2;
                case de:
                  return 8;
                case fe:
                case he:
                  return 32;
                case me:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Ff = !1,
          Pf = null,
          Tf = null,
          Vf = null,
          Lf = new Map(),
          Nf = new Map(),
          Df = [],
          Hf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function jf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pf = null;
              break;
            case "dragenter":
            case "dragleave":
              Tf = null;
              break;
            case "mouseover":
            case "mouseout":
              Vf = null;
              break;
            case "pointerover":
            case "pointerout":
              Lf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nf.delete(t.pointerId);
          }
        }
        function Zf(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ge(t)) && yf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function zf(e) {
          var t = Qe(e.target);
          if (null !== t) {
            var n = s(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = u(n)))
                  return (
                    (e.blockedOn = t),
                    void _e(e.priority, function () {
                      bf(n);
                    })
                  );
              } else if (31 === t) {
                if (null !== (t = c(n)))
                  return (
                    (e.blockedOn = t),
                    void _e(e.priority, function () {
                      bf(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function _f(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Ef(e.nativeEvent);
            if (null !== n)
              return (null !== (t = Ge(n)) && yf(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Nt = r), n.target.dispatchEvent(r), (Nt = null), t.shift());
          }
          return !0;
        }
        function Rf(e, t, n) {
          _f(e) && n.delete(t);
        }
        function Of() {
          ((Ff = !1),
            null !== Pf && _f(Pf) && (Pf = null),
            null !== Tf && _f(Tf) && (Tf = null),
            null !== Vf && _f(Vf) && (Vf = null),
            Lf.forEach(Rf),
            Nf.forEach(Rf));
        }
        function If(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ff ||
              ((Ff = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, Of)));
        }
        var Bf = null;
        function Uf(e) {
          Bf !== e &&
            ((Bf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              Bf === e && (Bf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Mf(r || n)) continue;
                  break;
                }
                var o = Ge(n);
                null !== o &&
                  (e.splice(t, 3),
                  (t -= 3),
                  tl(
                    o,
                    { pending: !0, data: a, method: n.method, action: r },
                    r,
                    a,
                  ));
              }
            }));
        }
        function Wf(e) {
          function t(t) {
            return If(t, e);
          }
          (null !== Pf && If(Pf, e),
            null !== Tf && If(Tf, e),
            null !== Vf && If(Vf, e),
            Lf.forEach(t),
            Nf.forEach(t));
          for (var n = 0; n < Df.length; n++) {
            var r = Df[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < Df.length && null === (n = Df[0]).blockedOn; )
            (zf(n), null === n.blockedOn && Df.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                o = n[r + 1],
                i = a[Ie] || null;
              if ("function" === typeof o) i || Uf(n);
              else if (i) {
                var l = null;
                if (o && o.hasAttribute("formAction")) {
                  if (((a = o), (i = o[Ie] || null))) l = i.formAction;
                  else if (null !== Mf(a)) continue;
                } else l = i.action;
                ("function" === typeof l
                  ? (n[r + 1] = l)
                  : (n.splice(r, 3), (r -= 3)),
                  Uf(n));
              }
            }
        }
        function qf() {
          function e(e) {
            e.canIntercept &&
              "react-transition" === e.info &&
              e.intercept({
                handler: function () {
                  return new Promise(function (e) {
                    return (a = e);
                  });
                },
                focusReset: "manual",
                scroll: "manual",
              });
          }
          function t() {
            (null !== a && (a(), (a = null)), r || setTimeout(n, 20));
          }
          function n() {
            if (!r && !navigation.transition) {
              var e = navigation.currentEntry;
              e &&
                null != e.url &&
                navigation.navigate(e.url, {
                  state: e.getState(),
                  info: "react-transition",
                  history: "replace",
                });
            }
          }
          if ("object" === typeof navigation) {
            var r = !1,
              a = null;
            return (
              navigation.addEventListener("navigate", e),
              navigation.addEventListener("navigatesuccess", t),
              navigation.addEventListener("navigateerror", t),
              setTimeout(n, 100),
              function () {
                ((r = !0),
                  navigation.removeEventListener("navigate", e),
                  navigation.removeEventListener("navigatesuccess", t),
                  navigation.removeEventListener("navigateerror", t),
                  null !== a && (a(), (a = null)));
              }
            );
          }
        }
        function $f(e) {
          this._internalRoot = e;
        }
        function Yf(e) {
          this._internalRoot = e;
        }
        ((Yf.prototype.render = $f.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            pf(t.current, qu(), e, t, null, null);
          }),
          (Yf.prototype.unmount = $f.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (pf(e.current, 2, null, e, null, null), Ju(), (t[Be] = null));
              }
            }),
          (Yf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = ze();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Df.length && 0 !== t && t < Df[n].priority;
                n++
              );
              (Df.splice(n, 0, e), 0 === n && zf(e));
            }
          }));
        var Kf = a.version;
        if ("19.2.3" !== Kf) throw Error(i(527, Kf, "19.2.3"));
        H.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(i(188));
            throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = s(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return (d(a), e);
                    if (o === r) return (d(a), t);
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) ((n = a), (r = o));
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      ((l = !0), (n = a), (r = o));
                      break;
                    }
                    if (u === r) {
                      ((l = !0), (r = a), (n = o));
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        ((l = !0), (n = o), (r = a));
                        break;
                      }
                      if (u === r) {
                        ((l = !0), (r = o), (n = a));
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? f(e) : null) ? null : e.stateNode)
          );
        };
        var Qf = {
          bundleType: 0,
          version: "19.2.3",
          rendererPackageName: "react-dom",
          currentDispatcherRef: D,
          reconcilerVersion: "19.2.3",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Gf.isDisabled && Gf.supportsFiber)
            try {
              ((ve = Gf.inject(Qf)), (ye = Gf));
            } catch (Jf) {}
        }
        ((t.createRoot = function (e, t) {
          if (!l(e)) throw Error(i(299));
          var n = !1,
            r = "",
            a = El,
            o = Sl,
            s = Ml;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (o = t.onCaughtError),
              void 0 !== t.onRecoverableError && (s = t.onRecoverableError)),
            (t = hf(e, 1, !1, null, 0, n, r, null, a, o, s, qf)),
            (e[Be] = t.current),
            Jc(e),
            new $f(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!l(e)) throw Error(i(299));
            var r = !1,
              a = "",
              o = El,
              s = Sl,
              u = Ml,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (o = n.onUncaughtError),
                void 0 !== n.onCaughtError && (s = n.onCaughtError),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
                void 0 !== n.formState && (c = n.formState)),
              ((t = hf(e, 1, !0, t, 0, r, a, c, o, s, u, qf)).context =
                mf(null)),
              (n = t.current),
              ((a = bo((r = je((r = qu()))))).callback = null),
              xo(n, a, r),
              (n = r),
              (t.current.lanes = n),
              Le(t, n),
              Hc(t),
              (e[Be] = t.current),
              Jc(e),
              new Yf(t)
            );
          }),
          (t.version = "19.2.3"));
      },
      43(e, t, n) {
        "use strict";
        e.exports = n(288);
      },
      288(e, t) {
        "use strict";
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.consumer"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.for("react.activity"),
          m = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          v = {};
        function y(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p));
        }
        function b() {}
        function x(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p));
        }
        ((y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = y.prototype));
        var w = (x.prototype = new b());
        ((w.constructor = x), g(w, y.prototype), (w.isPureReactComponent = !0));
        var k = Array.isArray;
        function A() {}
        var E = { H: null, A: null, T: null, S: null },
          S = Object.prototype.hasOwnProperty;
        function M(e, t, r) {
          var a = r.ref;
          return {
            $$typeof: n,
            type: e,
            key: t,
            ref: void 0 !== a ? a : null,
            props: r,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var F = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (l) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case f:
                    return T((c = e._init)(e._payload), t, a, o, i);
                }
            }
          if (c)
            return (
              (i = i(e)),
              (c = "" === o ? "." + P(e, 0) : o),
              k(i)
                ? ((a = ""),
                  null != c && (a = c.replace(F, "$&/") + "/"),
                  T(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    ((s = i),
                    (u =
                      a +
                      (null == i.key || (e && e.key === i.key)
                        ? ""
                        : ("" + i.key).replace(F, "$&/") + "/") +
                      c),
                    (i = M(s.type, u, s.props))),
                  t.push(i)),
              1
            );
          c = 0;
          var d,
            h = "" === o ? "." : o + ":";
          if (k(e))
            for (var p = 0; p < e.length; p++)
              c += T((o = e[p]), t, a, (l = h + P(o, p)), i);
          else if (
            "function" ===
            typeof (p =
              null === (d = e) || "object" !== typeof d
                ? null
                : "function" === typeof (d = (m && d[m]) || d["@@iterator"])
                  ? d
                  : null)
          )
            for (e = p.call(e), p = 0; !(o = e.next()).done; )
              c += T((o = o.value), t, a, (l = h + P(o, p++)), i);
          else if ("object" === l) {
            if ("function" === typeof e.then)
              return T(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(A, A)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                o,
                i,
              );
            throw (
              (t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          }
          return c;
        }
        function V(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            ((t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N =
            "function" === typeof reportError
              ? reportError
              : function (e) {
                  if (
                    "object" === typeof window &&
                    "function" === typeof window.ErrorEvent
                  ) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" === typeof e &&
                        null !== e &&
                        "string" === typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if (
                    "object" === typeof process &&
                    "function" === typeof process.emit
                  )
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          D = {
            map: V,
            forEach: function (e, t, n) {
              V(
                e,
                function () {
                  t.apply(this, arguments);
                },
                n,
              );
            },
            count: function (e) {
              var t = 0;
              return (
                V(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                V(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!C(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return e;
            },
          };
        ((t.Activity = h),
          (t.Children = D),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = x),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            E),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return E.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cacheSignal = function () {
            return null;
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var r = g({}, e.props),
              a = e.key;
            if (null != t)
              for (o in (void 0 !== t.key && (a = "" + t.key), t))
                !S.call(t, o) ||
                  "key" === o ||
                  "__self" === o ||
                  "__source" === o ||
                  ("ref" === o && void 0 === t.ref) ||
                  (r[o] = t[o]);
            var o = arguments.length - 2;
            if (1 === o) r.children = n;
            else if (1 < o) {
              for (var i = Array(o), l = 0; l < o; l++) i[l] = arguments[l + 2];
              r.children = i;
            }
            return M(e.type, a, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: l, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              o = null;
            if (null != t)
              for (r in (void 0 !== t.key && (o = "" + t.key), t))
                S.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (a[r] = t[r]);
            var i = arguments.length - 2;
            if (1 === i) a.children = n;
            else if (1 < i) {
              for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2];
              a.children = l;
            }
            if (e && e.defaultProps)
              for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
            return M(e, o, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = E.T,
              n = {};
            E.T = n;
            try {
              var r = e(),
                a = E.S;
              (null !== a && a(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(A, N));
            } catch (o) {
              N(o);
            } finally {
              (null !== t && null !== n.types && (t.types = n.types),
                (E.T = t));
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return E.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return E.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return E.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return E.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return E.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return E.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return E.H.useEffect(e, t);
          }),
          (t.useEffectEvent = function (e) {
            return E.H.useEffectEvent(e);
          }),
          (t.useId = function () {
            return E.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return E.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return E.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return E.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return E.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return E.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return E.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return E.H.useRef(e);
          }),
          (t.useState = function (e) {
            return E.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return E.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return E.H.useTransition();
          }),
          (t.version = "19.2.3"));
      },
      391(e, t, n) {
        "use strict";
        (!(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4)));
      },
      579(e, t, n) {
        "use strict";
        e.exports = n(799);
      },
      672(e, t, n) {
        "use strict";
        var r = n(43);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function o() {}
        var i = {
            d: {
              f: o,
              r: function () {
                throw Error(a(522));
              },
              D: o,
              C: o,
              L: o,
              m: o,
              X: o,
              S: o,
              M: o,
            },
            p: 0,
            findDOMNode: null,
          },
          l = Symbol.for("react.portal");
        var s =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function u(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
              ? "use-credentials" === t
                ? t
                : ""
              : void 0;
        }
        ((t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(a(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: l,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = s.T,
              n = i.p;
            try {
              if (((s.T = null), (i.p = 2), e)) return e();
            } finally {
              ((s.T = t), (i.p = n), i.d.f());
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              i.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && i.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = u(n, t.crossOrigin),
                a = "string" === typeof t.integrity ? t.integrity : void 0,
                o =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? i.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: a, fetchPriority: o },
                  )
                : "script" === n &&
                  i.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = u(t.as, t.crossOrigin);
                  i.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && i.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = u(n, t.crossOrigin);
              i.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = u(t.as, t.crossOrigin);
                i.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else i.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            i.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return s.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return s.H.useHostTransitionStatus();
          }),
          (t.version = "19.2.3"));
      },
      799(e, t) {
        "use strict";
        var n = Symbol.for("react.transitional.element");
        function r(e, t, r) {
          var a = null;
          if (
            (void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            "key" in t)
          )
            for (var o in ((r = {}), t)) "key" !== o && (r[o] = t[o]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: a,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        (Symbol.for("react.fragment"), (t.jsx = r), (t.jsxs = r));
      },
      818(e, t, n) {
        var r = n(43);
        function a(e) {
          return e && "object" === typeof e && "default" in e
            ? e
            : { default: e };
        }
        var o = a(r);
        !(function (e) {
          if (!e || "undefined" === typeof window) return;
          const t = document.createElement("style");
          (t.setAttribute("type", "text/css"),
            (t.innerHTML = e),
            document.head.appendChild(t));
        })(
          '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
        );
        const i = r.forwardRef(function (e, t) {
          let {
            style: n = {},
            className: a = "",
            autoFill: i = !1,
            play: l = !0,
            pauseOnHover: s = !1,
            pauseOnClick: u = !1,
            direction: c = "left",
            speed: d = 50,
            delay: f = 0,
            loop: h = 0,
            gradient: m = !1,
            gradientColor: p = "white",
            gradientWidth: g = 200,
            onFinish: v,
            onCycleComplete: y,
            onMount: b,
            children: x,
          } = e;
          const [w, k] = r.useState(0),
            [A, E] = r.useState(0),
            [S, M] = r.useState(1),
            [C, F] = r.useState(!1),
            P = r.useRef(null),
            T = t || P,
            V = r.useRef(null),
            L = r.useCallback(() => {
              if (V.current && T.current) {
                const e = T.current.getBoundingClientRect(),
                  t = V.current.getBoundingClientRect();
                let n = e.width,
                  r = t.width;
                (("up" !== c && "down" !== c) ||
                  ((n = e.height), (r = t.height)),
                  M(i && n && r && r < n ? Math.ceil(n / r) : 1),
                  k(n),
                  E(r));
              }
            }, [i, T, c]);
          (r.useEffect(() => {
            if (C && (L(), V.current && T.current)) {
              const e = new ResizeObserver(() => L());
              return (
                e.observe(T.current),
                e.observe(V.current),
                () => {
                  e && e.disconnect();
                }
              );
            }
          }, [L, T, C]),
            r.useEffect(() => {
              L();
            }, [L, x]),
            r.useEffect(() => {
              F(!0);
            }, []),
            r.useEffect(() => {
              "function" === typeof b && b();
            }, []));
          const N = r.useMemo(
              () => (i ? (A * S) / d : A < w ? w / d : A / d),
              [i, w, A, S, d],
            ),
            D = r.useMemo(
              () =>
                Object.assign(Object.assign({}, n), {
                  "--pause-on-hover": !l || s ? "paused" : "running",
                  "--pause-on-click":
                    !l || (s && !u) || u ? "paused" : "running",
                  "--width": "up" === c || "down" === c ? "100vh" : "100%",
                  "--transform":
                    "up" === c
                      ? "rotate(-90deg)"
                      : "down" === c
                        ? "rotate(90deg)"
                        : "none",
                }),
              [n, l, s, u, c],
            ),
            H = r.useMemo(
              () => ({
                "--gradient-color": p,
                "--gradient-width":
                  "number" === typeof g ? "".concat(g, "px") : g,
              }),
              [p, g],
            ),
            j = r.useMemo(
              () => ({
                "--play": l ? "running" : "paused",
                "--direction": "left" === c ? "normal" : "reverse",
                "--duration": "".concat(N, "s"),
                "--delay": "".concat(f, "s"),
                "--iteration-count": h ? "".concat(h) : "infinite",
                "--min-width": i ? "auto" : "100%",
              }),
              [l, c, N, f, h, i],
            ),
            Z = r.useMemo(
              () => ({
                "--transform":
                  "up" === c
                    ? "rotate(90deg)"
                    : "down" === c
                      ? "rotate(-90deg)"
                      : "none",
              }),
              [c],
            ),
            z = r.useCallback(
              (e) =>
                [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                  o.default.createElement(
                    r.Fragment,
                    { key: t },
                    r.Children.map(x, (e) =>
                      o.default.createElement(
                        "div",
                        { style: Z, className: "rfm-child" },
                        e,
                      ),
                    ),
                  ),
                ),
              [Z, x],
            );
          return C
            ? o.default.createElement(
                "div",
                { ref: T, style: D, className: "rfm-marquee-container " + a },
                m &&
                  o.default.createElement("div", {
                    style: H,
                    className: "rfm-overlay",
                  }),
                o.default.createElement(
                  "div",
                  {
                    className: "rfm-marquee",
                    style: j,
                    onAnimationIteration: y,
                    onAnimationEnd: v,
                  },
                  o.default.createElement(
                    "div",
                    { className: "rfm-initial-child-container", ref: V },
                    r.Children.map(x, (e) =>
                      o.default.createElement(
                        "div",
                        { style: Z, className: "rfm-child" },
                        e,
                      ),
                    ),
                  ),
                  z(S - 1),
                ),
                o.default.createElement(
                  "div",
                  { className: "rfm-marquee", style: j },
                  z(S),
                ),
              )
            : null;
        });
        t.A = i;
      },
      853(e, t, n) {
        "use strict";
        e.exports = n(896);
      },
      896(e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            ((e[r] = t), (e[n] = a), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                ((e[r] = c), (e[u] = n), (r = u));
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          m = !1,
          p = !1,
          g = !1,
          v = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          x = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              (a(c), (t.sortIndex = t.expirationTime), n(u, t));
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !p))
            if (null !== r(u)) ((p = !0), E || ((E = !0), A()));
            else {
              var t = r(c);
              null !== t && L(k, t.startTime - e);
            }
        }
        var A,
          E = !1,
          S = -1,
          M = 5,
          C = -1;
        function F() {
          return !!v || !(t.unstable_now() - C < M);
        }
        function P() {
          if (((v = !1), E)) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              e: {
                ((p = !1), g && ((g = !1), b(S), (S = -1)), (m = !0));
                var o = h;
                try {
                  t: {
                    for (
                      w(e), f = r(u);
                      null !== f && !(f.expirationTime > e && F());
                    ) {
                      var i = f.callback;
                      if ("function" === typeof i) {
                        ((f.callback = null), (h = f.priorityLevel));
                        var l = i(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof l)) {
                          ((f.callback = l), w(e), (n = !0));
                          break t;
                        }
                        (f === r(u) && a(u), w(e));
                      } else a(u);
                      f = r(u);
                    }
                    if (null !== f) n = !0;
                    else {
                      var s = r(c);
                      (null !== s && L(k, s.startTime - e), (n = !1));
                    }
                  }
                  break e;
                } finally {
                  ((f = null), (h = o), (m = !1));
                }
                n = void 0;
              }
            } finally {
              n ? A() : (E = !1);
            }
          }
        }
        if ("function" === typeof x)
          A = function () {
            x(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            V = T.port2;
          ((T.port1.onmessage = P),
            (A = function () {
              V.postMessage(null);
            }));
        } else
          A = function () {
            y(P, 0);
          };
        function L(e, n) {
          S = y(function () {
            e(t.unstable_now());
          }, n);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (M = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            v = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (b(S), (S = -1)) : (g = !0), L(k, o - i)))
                : ((e.sortIndex = l),
                  n(u, e),
                  p || m || ((p = !0), E || ((E = !0), A()))),
              e
            );
          }),
          (t.unstable_shouldYield = F),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          }));
      },
      950(e, t, n) {
        "use strict";
        (!(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672)));
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return (e[r](o, o.exports, n), o.exports);
  }
  ((() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (
        var l = 2 & a && r;
        ("object" == typeof l || "function" == typeof l) && !~e.indexOf(l);
        l = t(l)
      )
        Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
      return ((i.default = () => r), n.d(o, i), o);
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      "use strict";
      var e = n(43),
        t = n.t(e, 2),
        r = n(391);
      function a(e) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          a(e)
        );
      }
      function o(e) {
        var t = (function (e, t) {
          if ("object" != a(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != a(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == a(t) ? t : t + "";
      }
      function i(e, t, n) {
        return (
          (t = o(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (-1 !== t.indexOf(r)) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            ((n = o[r]),
              -1 === t.indexOf(n) &&
                {}.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
        }
        return a;
      }
      const c = (0, e.createContext)({
          color: "currentColor",
          size: "1em",
          weight: "regular",
          mirrored: !1,
        }),
        d = [
          "alt",
          "color",
          "size",
          "weight",
          "mirrored",
          "children",
          "weights",
        ],
        f = ["color", "size", "weight", "mirrored"],
        h = e.forwardRef((t, n) => {
          const {
              alt: r,
              color: a,
              size: o,
              weight: i,
              mirrored: l,
              children: h,
              weights: m,
            } = t,
            p = u(t, d),
            g = e.useContext(c),
            {
              color: v = "currentColor",
              size: y,
              weight: b = "regular",
              mirrored: x = !1,
            } = g,
            w = u(g, f);
          return e.createElement(
            "svg",
            s(
              s(
                {
                  ref: n,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: null != o ? o : y,
                  height: null != o ? o : y,
                  fill: null != a ? a : v,
                  viewBox: "0 0 256 256",
                  transform: l || x ? "scale(-1, 1)" : void 0,
                },
                w,
              ),
              p,
            ),
            !!r && e.createElement("title", null, r),
            h,
            m.get(null != i ? i : b),
          );
        });
      h.displayName = "IconBase";
      const m = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
              }),
            ),
          ],
        ]),
        p = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: m })),
        );
      p.displayName = "XIcon";
      const g = p,
        v = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,64V192H40V64Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z",
              }),
            ),
          ],
        ]),
        y = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: v })),
        );
      y.displayName = "ListIcon";
      const b = y,
        x = "https://calendly.com/gfcsystemslabs/estrategica-20min";
      var w = n(579);
      const k = [
          { label: "Capacidades", href: "#capacidades" },
          { label: "Proceso", href: "#proceso" },
          { label: "Ecosistema", href: "#ecosistema" },
          { label: "FAQ", href: "#faq" },
        ],
        A = () => {
          const [t, n] = (0, e.useState)(!1),
            [r, a] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              const e = () => n(window.scrollY > 20);
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, w.jsxs)("nav", {
              "data-testid": "navbar",
              className:
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(
                  t
                    ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent",
                ),
              children: [
                (0, w.jsxs)("div", {
                  className:
                    "max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20",
                  children: [
                    (0, w.jsxs)("a", {
                      href: "#",
                      "data-testid": "navbar-logo",
                      className:
                        "font-['Outfit'] font-bold text-lg md:text-xl tracking-tight text-white",
                      children: [
                        "GFC ",
                        (0, w.jsx)("span", {
                          className: "text-[#6D5DFB]",
                          children: "SYSTEMS",
                        }),
                        " LABS",
                      ],
                    }),
                    (0, w.jsxs)("div", {
                      className: "hidden md:flex items-center gap-8",
                      children: [
                        k.map((e) =>
                          (0, w.jsx)(
                            "a",
                            {
                              href: e.href,
                              "data-testid": "nav-link-".concat(
                                e.href.slice(1),
                              ),
                              className:
                                "text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 font-medium",
                              children: e.label,
                            },
                            e.href,
                          ),
                        ),
                        (0, w.jsx)("a", {
                          href: x,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "data-testid": "navbar-cta",
                          className:
                            "bg-[#6D5DFB] text-white text-sm font-medium rounded-full px-6 py-2.5 hover:bg-[#5a4ae2] transition-all duration-200 shadow-[0_0_20px_rgba(109,93,251,0.3)] hover:shadow-[0_0_30px_rgba(109,93,251,0.5)]",
                          children: "Agendar sesi\xf3n",
                        }),
                      ],
                    }),
                    (0, w.jsx)("button", {
                      "data-testid": "mobile-menu-toggle",
                      onClick: () => a(!r),
                      className: "md:hidden text-white p-2",
                      children: r
                        ? (0, w.jsx)(g, { size: 24 })
                        : (0, w.jsx)(b, { size: 24 }),
                    }),
                  ],
                }),
                r &&
                  (0, w.jsxs)("div", {
                    "data-testid": "mobile-menu",
                    className:
                      "md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4",
                    children: [
                      k.map((e) =>
                        (0, w.jsx)(
                          "a",
                          {
                            href: e.href,
                            onClick: () => a(!1),
                            className:
                              "block text-[#A1A1AA] hover:text-white transition-colors text-base font-medium",
                            children: e.label,
                          },
                          e.href,
                        ),
                      ),
                      (0, w.jsx)("a", {
                        href: x,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: () => a(!1),
                        className:
                          "block bg-[#6D5DFB] text-white text-center font-medium rounded-full px-6 py-3 mt-4 hover:bg-[#5a4ae2] transition-all shadow-[0_0_20px_rgba(109,93,251,0.3)]",
                        children: "Agendar sesi\xf3n",
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        E = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        S = (() => new Set(E))(),
        M = (e, t, n) => (n > t ? t : n < e ? e : n),
        C = {
          test: (e) => "number" === typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        F = s(s({}, C), {}, { transform: (e) => M(0, 1, e) }),
        P = s(s({}, C), {}, { default: 1 }),
        T = (e) => Math.round(1e5 * e) / 1e5,
        V = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
      const L =
          /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
        N = (e, t) => (n) =>
          Boolean(
            ("string" === typeof n && L.test(n) && n.startsWith(e)) ||
            (t &&
              !(function (e) {
                return null == e;
              })(n) &&
              Object.prototype.hasOwnProperty.call(n, t)),
          ),
        D = (e, t, n) => (r) => {
          if ("string" !== typeof r) return r;
          const [a, o, i, l] = r.match(V);
          return {
            [e]: parseFloat(a),
            [t]: parseFloat(o),
            [n]: parseFloat(i),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        },
        H = s(
          s({}, C),
          {},
          { transform: (e) => Math.round(((e) => M(0, 255, e))(e)) },
        ),
        j = {
          test: N("rgb", "red"),
          parse: D("red", "green", "blue"),
          transform: (e) => {
            let { red: t, green: n, blue: r, alpha: a = 1 } = e;
            return (
              "rgba(" +
              H.transform(t) +
              ", " +
              H.transform(n) +
              ", " +
              H.transform(r) +
              ", " +
              T(F.transform(a)) +
              ")"
            );
          },
        };
      const Z = {
          test: N("#"),
          parse: function (e) {
            let t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: j.transform,
        },
        z = (e) => ({
          test: (t) =>
            "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => "".concat(t).concat(e),
        }),
        _ = z("deg"),
        R = z("%"),
        O = z("px"),
        I = z("vh"),
        B = z("vw"),
        U = (() =>
          s(
            s({}, R),
            {},
            {
              parse: (e) => R.parse(e) / 100,
              transform: (e) => R.transform(100 * e),
            },
          ))(),
        W = {
          test: N("hsl", "hue"),
          parse: D("hue", "saturation", "lightness"),
          transform: (e) => {
            let { hue: t, saturation: n, lightness: r, alpha: a = 1 } = e;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              R.transform(T(n)) +
              ", " +
              R.transform(T(r)) +
              ", " +
              T(F.transform(a)) +
              ")"
            );
          },
        },
        q = {
          test: (e) => j.test(e) || Z.test(e) || W.test(e),
          parse: (e) =>
            j.test(e) ? j.parse(e) : W.test(e) ? W.parse(e) : Z.parse(e),
          transform: (e) =>
            "string" === typeof e
              ? e
              : e.hasOwnProperty("red")
                ? j.transform(e)
                : W.transform(e),
          getAnimatableNone: (e) => {
            const t = q.parse(e);
            return ((t.alpha = 0), q.transform(t));
          },
        },
        $ =
          /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
      const Y = "number",
        K = "color",
        Q =
          /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;
      function G(e) {
        const t = e.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          a = [];
        let o = 0;
        const i = t
          .replace(
            Q,
            (e) => (
              q.test(e)
                ? (r.color.push(o), a.push(K), n.push(q.parse(e)))
                : e.startsWith("var(")
                  ? (r.var.push(o), a.push("var"), n.push(e))
                  : (r.number.push(o), a.push(Y), n.push(parseFloat(e))),
              ++o,
              "${}"
            ),
          )
          .split("${}");
        return { values: n, split: i, indexes: r, types: a };
      }
      function X(e) {
        let { split: t, types: n } = e;
        const r = t.length;
        return (e) => {
          let a = "";
          for (let o = 0; o < r; o++)
            if (((a += t[o]), void 0 !== e[o])) {
              const t = n[o];
              a += t === Y ? T(e[o]) : t === K ? q.transform(e[o]) : e[o];
            }
          return a;
        };
      }
      const J = (e, t) => {
        return "number" === typeof e
          ? null !== t && void 0 !== t && t.trim().endsWith("/")
            ? e
            : 0
          : "number" === typeof (n = e)
            ? 0
            : q.test(n)
              ? q.getAnimatableNone(n)
              : n;
        var n;
      };
      const ee = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              "string" === typeof e &&
              ((null === (t = e.match(V)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match($)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: function (e) {
            return G(e).values;
          },
          createTransformer: function (e) {
            return X(G(e));
          },
          getAnimatableNone: function (e) {
            const t = G(e);
            return X(t)(t.values.map((e, n) => J(e, t.split[n])));
          },
        },
        te = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ne(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [r] = n.match(V) || [];
        if (!r) return e;
        const a = n.replace(r, "");
        let o = te.has(t) ? 1 : 0;
        return (r !== n && (o *= 100), t + "(" + o + a + ")");
      }
      const re =
          /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
        ae = s(
          s({}, ee),
          {},
          {
            getAnimatableNone: (e) => {
              const t = e.match(re);
              return t ? t.map(ne).join(" ") : e;
            },
          },
        ),
        oe = s(
          s({}, ee),
          {},
          {
            getAnimatableNone: (e) => {
              const t = ee.parse(e);
              return ee.createTransformer(e)(
                t.map((e) =>
                  "number" === typeof e
                    ? 0
                    : "object" === typeof e
                      ? s(s({}, e), {}, { alpha: 1 })
                      : e,
                ),
              );
            },
          },
        ),
        ie = s(s({}, C), {}, { transform: Math.round }),
        le = s(
          s(
            {
              borderWidth: O,
              borderTopWidth: O,
              borderRightWidth: O,
              borderBottomWidth: O,
              borderLeftWidth: O,
              borderRadius: O,
              borderTopLeftRadius: O,
              borderTopRightRadius: O,
              borderBottomRightRadius: O,
              borderBottomLeftRadius: O,
              width: O,
              maxWidth: O,
              height: O,
              maxHeight: O,
              top: O,
              right: O,
              bottom: O,
              left: O,
              inset: O,
              insetBlock: O,
              insetBlockStart: O,
              insetBlockEnd: O,
              insetInline: O,
              insetInlineStart: O,
              insetInlineEnd: O,
              padding: O,
              paddingTop: O,
              paddingRight: O,
              paddingBottom: O,
              paddingLeft: O,
              paddingBlock: O,
              paddingBlockStart: O,
              paddingBlockEnd: O,
              paddingInline: O,
              paddingInlineStart: O,
              paddingInlineEnd: O,
              margin: O,
              marginTop: O,
              marginRight: O,
              marginBottom: O,
              marginLeft: O,
              marginBlock: O,
              marginBlockStart: O,
              marginBlockEnd: O,
              marginInline: O,
              marginInlineStart: O,
              marginInlineEnd: O,
              fontSize: O,
              backgroundPositionX: O,
              backgroundPositionY: O,
            },
            {
              rotate: _,
              rotateX: _,
              rotateY: _,
              rotateZ: _,
              scale: P,
              scaleX: P,
              scaleY: P,
              scaleZ: P,
              skew: _,
              skewX: _,
              skewY: _,
              distance: O,
              translateX: O,
              translateY: O,
              translateZ: O,
              x: O,
              y: O,
              z: O,
              perspective: O,
              transformPerspective: O,
              opacity: F,
              originX: U,
              originY: U,
              originZ: O,
            },
          ),
          {},
          { zIndex: ie, fillOpacity: F, strokeOpacity: F, numOctaves: ie },
        ),
        se = s(
          s({}, le),
          {},
          {
            color: q,
            backgroundColor: q,
            outlineColor: q,
            fill: q,
            stroke: q,
            borderColor: q,
            borderTopColor: q,
            borderRightColor: q,
            borderBottomColor: q,
            borderLeftColor: q,
            filter: ae,
            WebkitFilter: ae,
            mask: oe,
            WebkitMask: oe,
          },
        ),
        ue = (e) => se[e],
        ce = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
        de = (e) => Boolean(e && e.getVelocity),
        fe = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...E,
        ]),
        he = (e) => (t) => t.test(e),
        me = [C, O, R, _, B, I, { test: (e) => "auto" === e, parse: (e) => e }],
        pe = (e) => me.find(he(e));
      function ge(e, t) {
        return t
          ? ""
              .concat(
                e,
                ". For more information and steps for solving, visit https://motion.dev/troubleshooting/",
              )
              .concat(t)
          : e;
      }
      var ve;
      let ye = () => {},
        be = () => {};
      "undefined" !== typeof process &&
        "production" !==
          (null ===
            (ve = {
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: "443",
              FAST_REFRESH: !0,
              REACT_APP_BACKEND_URL:
                "https://api.gfcsystemslabs.cl",
            }) || void 0 === ve
            ? void 0
            : ve.NODE_ENV) &&
        ((ye = (e, t, n) => {
          e || "undefined" === typeof console || console.warn(ge(t, n));
        }),
        (be = (e, t, n) => {
          if (!e) throw new Error(ge(t, n));
        }));
      const xe = (e) => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(e),
        we = (e) => (t) => "string" === typeof t && t.startsWith(e),
        ke = we("--"),
        Ae = we("var(--"),
        Ee = (e) => !!Ae(e) && Se.test(e.split("/*")[0].trim()),
        Se =
          /var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i;
      function Me(e) {
        return "string" === typeof e && e.split("/*")[0].includes("var(--");
      }
      const Ce =
        /^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;
      function Fe(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        be(
          n <= 4,
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.',
          ),
          "max-css-var-depth",
        );
        const [r, a] = (function (e) {
          const t = Ce.exec(e);
          if (!t) return [,];
          const [, n, r, a] = t;
          return ["--".concat(null !== n && void 0 !== n ? n : r), a];
        })(e);
        if (!r) return;
        const o = window.getComputedStyle(t).getPropertyValue(r);
        if (o) {
          const e = o.trim();
          return xe(e) ? parseFloat(e) : e;
        }
        return Ee(a) ? Fe(a, t, n + 1) : a;
      }
      const Pe = (e) => (180 * e) / Math.PI,
        Te = (e) => {
          const t = Pe(Math.atan2(e[1], e[0]));
          return Le(t);
        },
        Ve = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
          rotate: Te,
          rotateZ: Te,
          skewX: (e) => Pe(Math.atan(e[1])),
          skewY: (e) => Pe(Math.atan(e[2])),
          skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
        },
        Le = (e) => ((e %= 360) < 0 && (e += 360), e),
        Ne = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        De = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        He = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: Ne,
          scaleY: De,
          scale: (e) => (Ne(e) + De(e)) / 2,
          rotateX: (e) => Le(Pe(Math.atan2(e[6], e[5]))),
          rotateY: (e) => Le(Pe(Math.atan2(-e[2], e[0]))),
          rotateZ: Te,
          rotate: Te,
          skewX: (e) => Pe(Math.atan(e[4])),
          skewY: (e) => Pe(Math.atan(e[1])),
          skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
        };
      function je(e) {
        return e.includes("scale") ? 1 : 0;
      }
      function Ze(e, t) {
        if (!e || "none" === e) return je(t);
        const n = e.match(
          /^matrix3d\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/,
        );
        let r, a;
        if (n) ((r = He), (a = n));
        else {
          const t = e.match(
            /^matrix\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/,
          );
          ((r = Ve), (a = t));
        }
        if (!a) return je(t);
        const o = r[t],
          i = a[1].split(",").map(ze);
        return "function" === typeof o ? o(i) : i[o];
      }
      function ze(e) {
        return parseFloat(e.trim());
      }
      const _e = (e) => e === C || e === O,
        Re = new Set(["x", "y", "z"]),
        Oe = E.filter((e) => !Re.has(e));
      const Ie = {
        width: (e, t) => {
          let { x: n } = e,
            { paddingLeft: r = "0", paddingRight: a = "0", boxSizing: o } = t;
          const i = n.max - n.min;
          return "border-box" === o ? i : i - parseFloat(r) - parseFloat(a);
        },
        height: (e, t) => {
          let { y: n } = e,
            { paddingTop: r = "0", paddingBottom: a = "0", boxSizing: o } = t;
          const i = n.max - n.min;
          return "border-box" === o ? i : i - parseFloat(r) - parseFloat(a);
        },
        top: (e, t) => {
          let { top: n } = t;
          return parseFloat(n);
        },
        left: (e, t) => {
          let { left: n } = t;
          return parseFloat(n);
        },
        bottom: (e, t) => {
          let { y: n } = e,
            { top: r } = t;
          return parseFloat(r) + (n.max - n.min);
        },
        right: (e, t) => {
          let { x: n } = e,
            { left: r } = t;
          return parseFloat(r) + (n.max - n.min);
        },
        x: (e, t) => {
          let { transform: n } = t;
          return Ze(n, "x");
        },
        y: (e, t) => {
          let { transform: n } = t;
          return Ze(n, "y");
        },
      };
      ((Ie.translateX = Ie.x), (Ie.translateY = Ie.y));
      const Be = (e) => e,
        Ue = {},
        We = [
          "setup",
          "read",
          "resolveKeyframes",
          "preUpdate",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        qe = { value: null, addProjectionMetrics: null };
      function $e(e, t) {
        let n = !1,
          r = !0;
        const a = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (n = !0),
          i = We.reduce(
            (e, n) => (
              (e[n] = (function (e, t) {
                let n = new Set(),
                  r = new Set(),
                  a = !1,
                  o = !1;
                const i = new WeakSet();
                let l = { delta: 0, timestamp: 0, isProcessing: !1 },
                  s = 0;
                function u(t) {
                  (i.has(t) && (c.schedule(t), e()), s++, t(l));
                }
                const c = {
                  schedule: function (e) {
                    const t =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2] &&
                      a
                        ? n
                        : r;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        i.add(e),
                      t.add(e),
                      e
                    );
                  },
                  cancel: (e) => {
                    (r.delete(e), i.delete(e));
                  },
                  process: (e) => {
                    if (((l = e), a)) return void (o = !0);
                    a = !0;
                    const i = n;
                    ((n = r),
                      (r = i),
                      n.forEach(u),
                      t && qe.value && qe.value.frameloop[t].push(s),
                      (s = 0),
                      n.clear(),
                      (a = !1),
                      o && ((o = !1), c.process(e)));
                  },
                };
                return c;
              })(o, t ? n : void 0)),
              e
            ),
            {},
          ),
          {
            setup: l,
            read: s,
            resolveKeyframes: u,
            preUpdate: c,
            update: d,
            preRender: f,
            render: h,
            postRender: m,
          } = i,
          p = () => {
            const o = Ue.useManualTiming,
              i = o ? a.timestamp : performance.now();
            ((n = !1),
              o ||
                (a.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(i - a.timestamp, 40), 1)),
              (a.timestamp = i),
              (a.isProcessing = !0),
              l.process(a),
              s.process(a),
              u.process(a),
              c.process(a),
              d.process(a),
              f.process(a),
              h.process(a),
              m.process(a),
              (a.isProcessing = !1),
              n && t && ((r = !1), e(p)));
          },
          g = We.reduce((t, o) => {
            const l = i[o];
            return (
              (t[o] = function (t) {
                let o =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                return (
                  n || ((n = !0), (r = !0), a.isProcessing || e(p)),
                  l.schedule(t, o, i)
                );
              }),
              t
            );
          }, {});
        return {
          schedule: g,
          cancel: (e) => {
            for (let t = 0; t < We.length; t++) i[We[t]].cancel(e);
          },
          state: a,
          steps: i,
        };
      }
      const {
          schedule: Ye,
          cancel: Ke,
          state: Qe,
          steps: Ge,
        } = $e(
          "undefined" !== typeof requestAnimationFrame
            ? requestAnimationFrame
            : Be,
          !0,
        ),
        Xe = new Set();
      let Je = !1,
        et = !1,
        tt = !1;
      function nt() {
        if (et) {
          const e = Array.from(Xe).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            n = new Map();
          (t.forEach((e) => {
            const t = (function (e) {
              const t = [];
              return (
                Oe.forEach((n) => {
                  const r = e.getValue(n);
                  void 0 !== r &&
                    (t.push([n, r.get()]),
                    r.set(n.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (n.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              const t = n.get(e);
              t &&
                t.forEach((t) => {
                  var n;
                  let [r, a] = t;
                  null === (n = e.getValue(r)) || void 0 === n || n.set(a);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            }));
        }
        ((et = !1), (Je = !1), Xe.forEach((e) => e.complete(tt)), Xe.clear());
      }
      function rt() {
        Xe.forEach((e) => {
          (e.readKeyframes(), e.needsMeasurement && (et = !0));
        });
      }
      class at {
        constructor(e, t, n, r, a) {
          let o =
            arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = a),
            (this.isAsync = o));
        }
        scheduleResolve() {
          ((this.state = "scheduled"),
            this.isAsync
              ? (Xe.add(this),
                Je || ((Je = !0), Ye.read(rt), Ye.resolveKeyframes(nt)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          const {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: r,
          } = this;
          if (null === e[0]) {
            const a = null === r || void 0 === r ? void 0 : r.get(),
              o = e[e.length - 1];
            if (void 0 !== a) e[0] = a;
            else if (n && t) {
              const r = n.readValue(t, o);
              void 0 !== r && null !== r && (e[0] = r);
            }
            (void 0 === e[0] && (e[0] = o), r && void 0 === a && r.set(e[0]));
          }
          !(function (e) {
            for (let n = 1; n < e.length; n++) {
              var t;
              (null !== (t = e[n]) && void 0 !== t) || (e[n] = e[n - 1]);
            }
          })(e);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
            Xe.delete(this));
        }
        cancel() {
          "scheduled" === this.state &&
            (Xe.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      const ot = (e) =>
        /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(
          e,
        );
      function it(e) {
        return "number" === typeof e
          ? 0 === e
          : null === e || "none" === e || "0" === e || ot(e);
      }
      const lt = new Set([ae, oe]);
      function st(e, t) {
        let n = ue(e);
        return (
          lt.has(n) || (n = ee),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      const ut = new Set(["auto", "none", "0"]);
      class ct extends at {
        constructor(e, t, n, r, a) {
          super(e, t, n, r, a, !0);
        }
        readKeyframes() {
          const { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let l = 0; l < e.length; l++) {
            let n = e[l];
            if ("string" === typeof n && ((n = n.trim()), Ee(n))) {
              const r = Fe(n, t.current);
              (void 0 !== r && (e[l] = r),
                l === e.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !fe.has(n) || 2 !== e.length))
            return;
          const [r, a] = e,
            o = pe(r),
            i = pe(a);
          if (Me(r) !== Me(a) && Ie[n]) this.needsMeasurement = !0;
          else if (o !== i)
            if (_e(o) && _e(i))
              for (let l = 0; l < e.length; l++) {
                const t = e[l];
                "string" === typeof t && (e[l] = parseFloat(t));
              }
            else Ie[n] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          const { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let r = 0; r < e.length; r++)
            (null === e[r] || it(e[r])) && n.push(r);
          n.length &&
            (function (e, t, n) {
              let r,
                a = 0;
              for (; a < e.length && !r; ) {
                const t = e[a];
                ("string" === typeof t &&
                  !ut.has(t) &&
                  G(t).values.length &&
                  (r = e[a]),
                  a++);
              }
              if (r && n) for (const o of t) e[o] = st(n, r);
            })(e, n, t);
        }
        measureInitialState() {
          const { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          ("height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = Ie[n](
              e.measureViewportBox(),
              window.getComputedStyle(e.current),
            )),
            (t[0] = this.measuredOrigin));
          const r = t[t.length - 1];
          void 0 !== r && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          var e;
          const { element: t, name: n, unresolvedKeyframes: r } = this;
          if (!t || !t.current) return;
          const a = t.getValue(n);
          a && a.jump(this.measuredOrigin, !1);
          const o = r.length - 1,
            i = r[o];
          ((r[o] = Ie[n](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== i &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = i),
            null !== (e = this.removedTransforms) &&
              void 0 !== e &&
              e.length &&
              this.removedTransforms.forEach((e) => {
                let [n, r] = e;
                t.getValue(n).set(r);
              }),
            this.resolveNoneKeyframes());
        }
      }
      const dt = (e) => 1e3 * e,
        ft = (e) => e / 1e3;
      function ht(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function mt(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class pt {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (ht(this.subscriptions, e), () => mt(this.subscriptions, e));
        }
        notify(e, t, n) {
          const r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let a = 0; a < r; a++) {
                const r = this.subscriptions[a];
                r && r(e, t, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      function gt(e, t, n) {
        ((e) => e.startsWith("--"))(t)
          ? e.style.setProperty(t, n)
          : (e.style[t] = n);
      }
      function vt(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      const yt = {};
      function bt(e, t) {
        const n = vt(e);
        return () => {
          var e;
          return null !== (e = yt[t]) && void 0 !== e ? e : n();
        };
      }
      const xt = bt(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        wt = (e) => null !== e;
      function kt(e, t, n) {
        let { repeat: r, repeatType: a = "loop" } = t,
          o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        const i = e.filter(wt),
          l = o < 0 || (r && "loop" !== a && r % 2 === 1) ? 0 : i.length - 1;
        return l && void 0 !== n ? n : i[l];
      }
      class At {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((e) => {
            this.resolve = e;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
      }
      const Et = { layout: 0, mainThread: 0, waapi: 0 },
        St = (e) => Array.isArray(e) && "number" === typeof e[0],
        Mt = bt(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (p) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        Ct = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 10,
            r = "";
          const a = Math.max(Math.round(t / n), 2);
          for (let o = 0; o < a; o++)
            r += Math.round(1e4 * e(o / (a - 1))) / 1e4 + ", ";
          return "linear(".concat(r.substring(0, r.length - 2), ")");
        },
        Ft = (e) => {
          let [t, n, r, a] = e;
          return "cubic-bezier("
            .concat(t, ", ")
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(a, ")");
        },
        Pt = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Ft([0, 0.65, 0.55, 1]),
          circOut: Ft([0.55, 0, 1, 0.45]),
          backIn: Ft([0.31, 0.01, 0.66, -0.59]),
          backOut: Ft([0.33, 1.53, 0.69, 0.99]),
        };
      function Tt(e, t) {
        return e
          ? "function" === typeof e
            ? Mt()
              ? Ct(e, t)
              : "ease-out"
            : St(e)
              ? Ft(e)
              : Array.isArray(e)
                ? e.map((e) => Tt(e, t) || Pt.easeOut)
                : Pt[e]
          : void 0;
      }
      function Vt(e, t, n) {
        let {
            delay: r = 0,
            duration: a = 300,
            repeat: o = 0,
            repeatType: i = "loop",
            ease: l = "easeOut",
            times: s,
          } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {},
          u =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : void 0;
        const c = { [t]: n };
        s && (c.offset = s);
        const d = Tt(l, a);
        (Array.isArray(d) && (c.easing = d), qe.value && Et.waapi++);
        const f = {
          delay: r,
          duration: a,
          easing: Array.isArray(d) ? "linear" : d,
          fill: "both",
          iterations: o + 1,
          direction: "reverse" === i ? "alternate" : "normal",
        };
        u && (f.pseudoElement = u);
        const h = e.animate(c, f);
        return (
          qe.value &&
            h.finished.finally(() => {
              Et.waapi--;
            }),
          h
        );
      }
      function Lt(e) {
        return "function" === typeof e && "applyToOptions" in e;
      }
      const Nt = ["type"];
      class Dt extends At {
        constructor(e) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !e)
          )
            return;
          const {
            element: t,
            name: n,
            keyframes: r,
            pseudoElement: a,
            allowFlatten: o = !1,
            finalKeyframe: i,
            onComplete: l,
          } = e;
          ((this.isPseudoElement = Boolean(a)),
            (this.allowFlatten = o),
            (this.options = e),
            be(
              "string" !== typeof e.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring",
            ));
          const s = (function (e) {
            let { type: t } = e,
              n = u(e, Nt);
            return Lt(t) && Mt()
              ? t.applyToOptions(n)
              : ((null !== (r = n.duration) && void 0 !== r) ||
                  (n.duration = 300),
                (null !== (a = n.ease) && void 0 !== a) || (n.ease = "easeOut"),
                n);
            var r, a;
          })(e);
          ((this.animation = Vt(t, n, r, s, a)),
            !1 === s.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !a)) {
                const e = kt(r, this.options, i, this.speed);
                (this.updateMotionValue && this.updateMotionValue(e),
                  gt(t, n, e),
                  this.animation.cancel());
              }
              (null === l || void 0 === l || l(), this.notifyFinished());
            }));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          var e, t;
          null === (e = (t = this.animation).finish) ||
            void 0 === e ||
            e.call(t);
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (p) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          const { state: e } = this;
          "idle" !== e &&
            "finished" !== e &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          var e;
          const t =
            null === (e = this.options) || void 0 === e ? void 0 : e.element;
          var n, r;
          !this.isPseudoElement &&
            null !== t &&
            void 0 !== t &&
            t.isConnected &&
            (null === (n = (r = this.animation).commitStyles) ||
              void 0 === n ||
              n.call(r));
        }
        get duration() {
          var e, t;
          const n =
            (null === (e = this.animation.effect) ||
            void 0 === e ||
            null === (t = e.getComputedTiming) ||
            void 0 === t
              ? void 0
              : t.call(e).duration) || 0;
          return ft(Number(n));
        }
        get iterationDuration() {
          const { delay: e = 0 } = this.options || {};
          return this.duration + ft(e);
        }
        get time() {
          return ft(Number(this.animation.currentTime) || 0);
        }
        set time(e) {
          const t = null !== this.finishedTime;
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = dt(e)),
            t && this.animation.pause());
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(e) {
          (e < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = e));
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          var e;
          return null !== (e = this.manualStartTime) && void 0 !== e
            ? e
            : Number(this.animation.startTime);
        }
        set startTime(e) {
          this.manualStartTime = this.animation.startTime = e;
        }
        attachTimeline(e) {
          let { timeline: t, rangeStart: n, rangeEnd: r, observe: a } = e;
          var o;
          this.allowFlatten &&
            (null === (o = this.animation.effect) ||
              void 0 === o ||
              o.updateTiming({ easing: "linear" }));
          return (
            (this.animation.onfinish = null),
            t && xt()
              ? ((this.animation.timeline = t),
                n && (this.animation.rangeStart = n),
                r && (this.animation.rangeEnd = r),
                Be)
              : a(this)
          );
        }
      }
      const Ht = new Set(["opacity", "clipPath", "filter", "transform"]),
        { schedule: jt, cancel: Zt } = $e(queueMicrotask, !1);
      let zt;
      function _t() {
        zt = void 0;
      }
      const Rt = {
        now: () => (
          void 0 === zt &&
            Rt.set(
              Qe.isProcessing || Ue.useManualTiming
                ? Qe.timestamp
                : performance.now(),
            ),
          zt
        ),
        set: (e) => {
          ((zt = e), queueMicrotask(_t));
        },
      };
      function Ot(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      const It = { current: void 0 };
      class Bt {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e) => {
              const t = Rt.now();
              var n;
              if (
                (this.updatedAt !== t && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev) &&
                (null === (n = this.events.change) ||
                  void 0 === n ||
                  n.notify(this.current),
                this.dependents)
              )
                for (const r of this.dependents) r.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          var t;
          ((this.current = e),
            (this.updatedAt = Rt.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity =
                ((t = this.current), !isNaN(parseFloat(t)))));
        }
        setPrevFrameValue() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.current;
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new pt());
          const n = this.events[e].add(t);
          return "change" === e
            ? () => {
                (n(),
                  Ye.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : n;
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          ((this.passiveEffect = e), (this.stopPassiveEffect = t));
        }
        set(e) {
          this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e);
        }
        setWithVelocity(e, t, n) {
          (this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n));
        }
        jump(e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          (this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          var e;
          null === (e = this.events.change) ||
            void 0 === e ||
            e.notify(this.current);
        }
        addDependent(e) {
          (this.dependents || (this.dependents = new Set()),
            this.dependents.add(e));
        }
        removeDependent(e) {
          this.dependents && this.dependents.delete(e);
        }
        get() {
          return (It.current && It.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          const e = Rt.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return Ot(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t,
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              ((this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          var e, t;
          (null === (e = this.dependents) || void 0 === e || e.clear(),
            null === (t = this.events.destroy) || void 0 === t || t.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function Ut(e, t) {
        return new Bt(e, t);
      }
      const Wt = [...me, q, ee],
        qt = new WeakMap();
      function $t(e) {
        return (
          null !== e && "object" === typeof e && "function" === typeof e.start
        );
      }
      function Yt(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      const Kt = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        Qt = ["initial", ...Kt];
      function Gt(e) {
        return $t(e.animate) || Qt.some((t) => Yt(e[t]));
      }
      function Xt(e) {
        return Boolean(Gt(e) || e.variants);
      }
      const Jt = { current: null },
        en = { current: !1 },
        tn = "undefined" !== typeof window;
      function nn(e) {
        const t = [{}, {}];
        return (
          null === e ||
            void 0 === e ||
            e.values.forEach((e, n) => {
              ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
            }),
          t
        );
      }
      function rn(e, t, n, r) {
        if ("function" === typeof t) {
          const [a, o] = nn(r);
          t = t(void 0 !== n ? n : e.custom, a, o);
        }
        if (
          ("string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t)
        ) {
          const [a, o] = nn(r);
          t = t(void 0 !== n ? n : e.custom, a, o);
        }
        return t;
      }
      const an = ["willChange"],
        on = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      let ln = {};
      function sn(e) {
        ln = e;
      }
      class un {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(e) {
          let {
              parent: t,
              props: n,
              presenceContext: r,
              reducedMotionConfig: a,
              skipAnimations: o,
              blockInitialAnimation: i,
              visualState: l,
            } = e,
            c =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = at),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              const e = Rt.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), Ye.render(this.render, !1, !0));
            }));
          const { latestValues: d, renderState: f } = l;
          ((this.latestValues = d),
            (this.baseTarget = s({}, d)),
            (this.initialValues = n.initial ? s({}, d) : {}),
            (this.renderState = f),
            (this.parent = t),
            (this.props = n),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = a),
            (this.skipAnimationsConfig = o),
            (this.options = c),
            (this.blockInitialAnimation = Boolean(i)),
            (this.isControllingVariants = Gt(n)),
            (this.isVariantNode = Xt(n)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current)));
          const h = this.scrapeMotionValuesFromProps(n, {}, this),
            { willChange: m } = h,
            p = u(h, an);
          for (const s in p) {
            const e = p[s];
            void 0 !== d[s] && de(e) && e.set(d[s]);
          }
        }
        mount(e) {
          var t, n;
          if (this.hasBeenMounted)
            for (const a in this.initialValues) {
              var r;
              (null === (r = this.values.get(a)) ||
                void 0 === r ||
                r.jump(this.initialValues[a]),
                (this.latestValues[a] = this.initialValues[a]));
            }
          ((this.current = e),
            qt.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            "never" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !1)
              : "always" === this.reducedMotionConfig
                ? (this.shouldReduceMotion = !0)
                : (en.current ||
                    (function () {
                      if (((en.current = !0), tn))
                        if (window.matchMedia) {
                          const e = window.matchMedia(
                              "(prefers-reduced-motion)",
                            ),
                            t = () => (Jt.current = e.matches);
                          (e.addEventListener("change", t), t());
                        } else Jt.current = !1;
                    })(),
                  (this.shouldReduceMotion = Jt.current)),
            (this.shouldSkipAnimations =
              null !== (t = this.skipAnimationsConfig) && void 0 !== t && t),
            null === (n = this.parent) || void 0 === n || n.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          var e;
          (this.projection && this.projection.unmount(),
            Ke(this.notifyUpdate),
            Ke(this.render),
            this.valueSubscriptions.forEach((e) => e()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            null === (e = this.parent) || void 0 === e || e.removeChild(this));
          for (const t in this.events) this.events[t].clear();
          for (const t in this.features) {
            const e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(e) {
          var t;
          (this.children.add(e),
            (null !== (t = this.enteringChildren) && void 0 !== t) ||
              (this.enteringChildren = new Set()),
            this.enteringChildren.add(e));
        }
        removeChild(e) {
          (this.children.delete(e),
            this.enteringChildren && this.enteringChildren.delete(e));
        }
        bindToMotionValue(e, t) {
          if (
            (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
            t.accelerate && Ht.has(e) && this.current instanceof HTMLElement)
          ) {
            const {
                factory: n,
                keyframes: r,
                times: a,
                ease: o,
                duration: i,
              } = t.accelerate,
              l = new Dt({
                element: this.current,
                name: e,
                keyframes: r,
                times: a,
                ease: o,
                duration: dt(i),
              }),
              s = n(l);
            return void this.valueSubscriptions.set(e, () => {
              (s(), l.cancel());
            });
          }
          const n = S.has(e);
          n && this.onBindTransform && this.onBindTransform();
          const r = t.on("change", (t) => {
            ((this.latestValues[e] = t),
              this.props.onUpdate && Ye.preRender(this.notifyUpdate),
              n && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender());
          });
          let a;
          ("undefined" !== typeof window &&
            window.MotionCheckAppearSync &&
            (a = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              (r(), a && a(), t.owner && t.stop());
            }));
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in ln) {
            const t = ln[e];
            if (!t) continue;
            const { isEnabled: n, Feature: r } = t;
            if (
              (!this.features[e] &&
                r &&
                n(this.props) &&
                (this.features[e] = new r(this)),
              this.features[e])
            ) {
              const t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          ((e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t));
          for (let n = 0; n < on.length; n++) {
            const t = on[n];
            this.propEventSubscriptions[t] &&
              (this.propEventSubscriptions[t](),
              delete this.propEventSubscriptions[t]);
            const r = e["on" + t];
            r && (this.propEventSubscriptions[t] = this.on(t, r));
          }
          ((this.prevMotionValues = (function (e, t, n) {
            for (const r in t) {
              const a = t[r],
                o = n[r];
              if (de(a)) e.addValue(r, a);
              else if (de(o)) e.addValue(r, Ut(a, { owner: e }));
              else if (o !== a)
                if (e.hasValue(r)) {
                  const t = e.getValue(r);
                  !0 === t.liveStyle ? t.jump(a) : t.hasAnimated || t.set(a);
                } else {
                  const t = e.getStaticValue(r);
                  e.addValue(r, Ut(void 0 !== t ? t : a, { owner: e }));
                }
            }
            for (const r in n) void 0 === t[r] && e.removeValue(r);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(e) {
          const t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          const n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          const t = this.valueSubscriptions.get(e);
          (t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState));
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== t &&
              ((n = Ut(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          var n;
          let r =
            void 0 === this.latestValues[e] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          var a;
          return (
            void 0 !== r &&
              null !== r &&
              ("string" === typeof r && (xe(r) || ot(r))
                ? (r = parseFloat(r))
                : ((a = r), !Wt.find(he(a)) && ee.test(t) && (r = st(e, t))),
              this.setBaseTarget(e, de(r) ? r.get() : r)),
            de(r) ? r.get() : r
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          const { initial: t } = this.props;
          let n;
          if ("string" === typeof t || "object" === typeof t) {
            var r;
            const a = rn(
              this.props,
              t,
              null === (r = this.presenceContext) || void 0 === r
                ? void 0
                : r.custom,
            );
            a && (n = a[e]);
          }
          if (t && void 0 !== n) return n;
          const a = this.getBaseTargetFromProps(this.props, e);
          return void 0 === a || de(a)
            ? void 0 !== this.initialValues[e] && void 0 === n
              ? void 0
              : this.baseTarget[e]
            : a;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new pt()),
            this.events[e].add(t)
          );
        }
        notify(e) {
          if (this.events[e]) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            this.events[e].notify(...n);
          }
        }
        scheduleRenderMicrotask() {
          jt.render(this.render);
        }
      }
      class cn extends un {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = ct));
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          const n = e.style;
          return n ? n[t] : void 0;
        }
        removeValueFromRenderState(e, t) {
          let { vars: n, style: r } = t;
          (delete n[e], delete r[e]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          const { children: e } = this.props;
          de(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = "".concat(e));
            }));
        }
      }
      function dn(e) {
        return e.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase()));
      }
      const fn = (e, t) => (t && "number" === typeof e ? t.transform(e) : e),
        hn = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        mn = E.length;
      function pn(e, t, n) {
        const { style: r, vars: a, transformOrigin: o } = e;
        let i = !1,
          l = !1;
        for (const s in t) {
          const e = t[s];
          if (S.has(s)) i = !0;
          else if (ke(s)) a[s] = e;
          else {
            const t = fn(e, le[s]);
            s.startsWith("origin") ? ((l = !0), (o[s] = t)) : (r[s] = t);
          }
        }
        if (
          (t.transform ||
            (i || n
              ? (r.transform = (function (e, t, n) {
                  let r = "",
                    a = !0;
                  for (let o = 0; o < mn; o++) {
                    const i = E[o],
                      l = e[i];
                    if (void 0 === l) continue;
                    let s = !0;
                    if ("number" === typeof l)
                      s = l === (i.startsWith("scale") ? 1 : 0);
                    else {
                      const e = parseFloat(l);
                      s = i.startsWith("scale") ? 1 === e : 0 === e;
                    }
                    if (!s || n) {
                      const e = fn(l, le[i]);
                      (s ||
                        ((a = !1),
                        (r += "".concat(hn[i] || i, "(").concat(e, ") "))),
                        n && (t[i] = e));
                    }
                  }
                  return (
                    (r = r.trim()),
                    n ? (r = n(t, a ? "" : r)) : a && (r = "none"),
                    r
                  );
                })(t, e.transform, n))
              : r.transform && (r.transform = "none")),
          l)
        ) {
          const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = o;
          r.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n);
        }
      }
      const gn = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        vn = { offset: "strokeDashoffset", array: "strokeDasharray" };
      const yn = [
          "attrX",
          "attrY",
          "attrScale",
          "pathLength",
          "pathSpacing",
          "pathOffset",
        ],
        bn = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
      function xn(e, t, n, r, a) {
        let {
          attrX: o,
          attrY: i,
          attrScale: l,
          pathLength: s,
          pathSpacing: c = 1,
          pathOffset: d = 0,
        } = t;
        if ((pn(e, u(t, yn), r), n))
          return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        ((e.attrs = e.style), (e.style = {}));
        const { attrs: f, style: h } = e;
        var m, p;
        (f.transform && ((h.transform = f.transform), delete f.transform),
        h.transform || f.transformOrigin) &&
          ((h.transformOrigin =
            null !== (m = f.transformOrigin) && void 0 !== m ? m : "50% 50%"),
          delete f.transformOrigin);
        h.transform &&
          ((h.transformBox =
            null !==
              (p = null === a || void 0 === a ? void 0 : a.transformBox) &&
            void 0 !== p
              ? p
              : "fill-box"),
          delete f.transformBox);
        for (const u of bn) void 0 !== f[u] && ((h[u] = f[u]), delete f[u]);
        (void 0 !== o && (f.x = o),
          void 0 !== i && (f.y = i),
          void 0 !== l && (f.scale = l),
          void 0 !== s &&
            (function (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                a =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4];
              e.pathLength = 1;
              const o = a ? gn : vn;
              ((e[o.offset] = "".concat(-r)),
                (e[o.array] = "".concat(t, " ").concat(n)));
            })(f, s, c, d, !1));
      }
      const wn = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        kn = (e) => "string" === typeof e && "svg" === e.toLowerCase();
      function An(e, t, n, r) {
        let { style: a, vars: o } = t;
        const i = e.style;
        let l;
        for (l in a) i[l] = a[l];
        for (l in (null === r || void 0 === r || r.applyProjectionStyles(i, n),
        o))
          i.setProperty(l, o[l]);
      }
      function En(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      const Sn = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!O.test(e)) return e;
              e = parseFloat(e);
            }
            const n = En(e, t.target.x),
              r = En(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Mn = (e, t, n) => e + (t - e) * n,
        Cn = {
          correct: (e, t) => {
            let { treeScale: n, projectionDelta: r } = t;
            const a = e,
              o = ee.parse(e);
            if (o.length > 5) return a;
            const i = ee.createTransformer(e),
              l = "number" !== typeof o[0] ? 1 : 0,
              s = r.x.scale * n.x,
              u = r.y.scale * n.y;
            ((o[0 + l] /= s), (o[1 + l] /= u));
            const c = Mn(s, u, 0.5);
            return (
              "number" === typeof o[2 + l] && (o[2 + l] /= c),
              "number" === typeof o[3 + l] && (o[3 + l] /= c),
              i(o)
            );
          },
        },
        Fn = {
          borderRadius: s(
            s({}, Sn),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            },
          ),
          borderTopLeftRadius: Sn,
          borderTopRightRadius: Sn,
          borderBottomLeftRadius: Sn,
          borderBottomRightRadius: Sn,
          boxShadow: Cn,
        };
      function Pn(e, t) {
        let { layout: n, layoutId: r } = t;
        return (
          S.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!Fn[e] || "opacity" === e))
        );
      }
      function Tn(e, t, n) {
        const r = e.style,
          a = null === t || void 0 === t ? void 0 : t.style,
          o = {};
        if (!r) return o;
        for (const l in r) {
          var i;
          (de(r[l]) ||
            (a && de(a[l])) ||
            Pn(l, e) ||
            void 0 !==
              (null === n ||
              void 0 === n ||
              null === (i = n.getValue(l)) ||
              void 0 === i
                ? void 0
                : i.liveStyle)) &&
            (o[l] = r[l]);
        }
        return o;
      }
      function Vn(e, t, n) {
        const r = Tn(e, t, n);
        for (const a in e)
          if (de(e[a]) || de(t[a])) {
            r[
              -1 !== E.indexOf(a)
                ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
                : a
            ] = e[a];
          }
        return r;
      }
      class Ln extends cn {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ce));
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (S.has(t)) {
            const e = ue(t);
            return (e && e.default) || 0;
          }
          return ((t = wn.has(t) ? t : dn(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return Vn(e, t, n);
        }
        build(e, t, n) {
          xn(e, t, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(e, t, n, r) {
          !(function (e, t, n, r) {
            An(e, t, void 0, r);
            for (const a in t.attrs)
              e.setAttribute(wn.has(a) ? a : dn(a), t.attrs[a]);
          })(e, t, 0, r);
        }
        mount(e) {
          ((this.isSVGTag = kn(e.tagName)), super.mount(e));
        }
      }
      function Nn(e) {
        let { top: t, left: n, right: r, bottom: a } = e;
        return { x: { min: n, max: r }, y: { min: t, max: a } };
      }
      function Dn(e) {
        return void 0 === e || 1 === e;
      }
      function Hn(e) {
        let { scale: t, scaleX: n, scaleY: r } = e;
        return !Dn(t) || !Dn(n) || !Dn(r);
      }
      function jn(e) {
        return (
          Hn(e) ||
          Zn(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function Zn(e) {
        return zn(e.x) || zn(e.y);
      }
      function zn(e) {
        return e && "0%" !== e;
      }
      function _n(e, t, n) {
        return n + t * (e - n);
      }
      function Rn(e, t, n, r, a) {
        return (void 0 !== a && (e = _n(e, a, r)), _n(e, n, r) + t);
      }
      function On(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        ((e.min = Rn(e.min, t, n, r, a)), (e.max = Rn(e.max, t, n, r, a)));
      }
      function In(e, t) {
        let { x: n, y: r } = t;
        (On(e.x, n.translate, n.scale, n.originPoint),
          On(e.y, r.translate, r.scale, r.originPoint));
      }
      const Bn = 0.999999999999,
        Un = 1.0000000000001;
      function Wn(e, t) {
        ((e.min += t), (e.max += t));
      }
      function qn(e, t, n, r) {
        let a =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
        On(e, t, n, Mn(e.min, e.max, a), r);
      }
      function $n(e, t) {
        return "string" === typeof e
          ? (parseFloat(e) / 100) * (t.max - t.min)
          : e;
      }
      function Yn(e, t, n) {
        const r = null !== n && void 0 !== n ? n : e;
        (qn(e.x, $n(t.x, r.x), t.scaleX, t.scale, t.originX),
          qn(e.y, $n(t.y, r.y), t.scaleY, t.scale, t.originY));
      }
      function Kn(e, t) {
        return Nn(
          (function (e, t) {
            if (!t) return e;
            const n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t),
        );
      }
      class Qn extends cn {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = An));
        }
        readValueFromInstance(e, t) {
          var n, r;
          if (S.has(t))
            return null !== (n = this.projection) &&
              void 0 !== n &&
              n.isProjecting
              ? je(t)
              : ((e, t) => {
                  const { transform: n = "none" } = getComputedStyle(e);
                  return Ze(n, t);
                })(e, t);
          {
            const n = ((r = e), window.getComputedStyle(r)),
              a = (ke(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" === typeof a ? a.trim() : a;
          }
        }
        measureInstanceViewportBox(e, t) {
          let { transformPagePoint: n } = t;
          return Kn(e, n);
        }
        build(e, t, n) {
          pn(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return Tn(e, t, n);
        }
      }
      const Gn = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function Xn(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(Gn.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      const Jn = (t, n) => {
          var r;
          return (null !== (r = n.isSVG) && void 0 !== r ? r : Xn(t))
            ? new Ln(n)
            : new Qn(n, { allowProjection: t !== e.Fragment });
        },
        er = (0, e.createContext)({}),
        tr = (0, e.createContext)({ strict: !1 }),
        nr = (0, e.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        rr = (0, e.createContext)({});
      function ar(t) {
        const { initial: n, animate: r } = (function (e, t) {
          if (Gt(e)) {
            const { initial: t, animate: n } = e;
            return {
              initial: !1 === t || Yt(t) ? t : void 0,
              animate: Yt(n) ? n : void 0,
            };
          }
          return !1 !== e.inherit ? t : {};
        })(t, (0, e.useContext)(rr));
        return (0, e.useMemo)(
          () => ({ initial: n, animate: r }),
          [or(n), or(r)],
        );
      }
      function or(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      const ir = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function lr(e, t, n) {
        for (const r in t) de(t[r]) || Pn(r, n) || (e[r] = t[r]);
      }
      function sr(t, n) {
        const r = {};
        return (
          lr(r, t.style || {}, t),
          Object.assign(
            r,
            (function (t, n) {
              let { transformTemplate: r } = t;
              return (0, e.useMemo)(() => {
                const e = {
                  style: {},
                  transform: {},
                  transformOrigin: {},
                  vars: {},
                };
                return (pn(e, n, r), Object.assign({}, e.vars, e.style));
              }, [n]);
            })(t, n),
          ),
          r
        );
      }
      function ur(e, t) {
        const n = {},
          r = sr(e, t);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (n.tabIndex = 0),
          (n.style = r),
          n
        );
      }
      const cr = () =>
        s(
          s({}, { style: {}, transform: {}, transformOrigin: {}, vars: {} }),
          {},
          { attrs: {} },
        );
      function dr(t, n, r, a) {
        const o = (0, e.useMemo)(() => {
          const e = cr();
          return (
            xn(e, n, kn(a), t.transformTemplate, t.style),
            s(s({}, e.attrs), {}, { style: s({}, e.style) })
          );
        }, [n]);
        if (t.style) {
          const e = {};
          (lr(e, t.style, t), (o.style = s(s({}, e), o.style)));
        }
        return o;
      }
      const fr = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "propagate",
        "ignoreStrict",
        "viewport",
      ]);
      function hr(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          fr.has(e)
        );
      }
      let mr = (e) => !hr(e);
      try {
        "function" ===
          typeof (pr = require("@emotion/is-prop-valid").default) &&
          (mr = (e) => (e.startsWith("on") ? !hr(e) : pr(e)));
      } catch (ih) {}
      var pr;
      function gr(t, n, r, a, o) {
        let { latestValues: i } = a,
          l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          u = arguments.length > 6 ? arguments[6] : void 0;
        const c = ((null !== u && void 0 !== u ? u : Xn(t)) ? dr : ur)(
            n,
            i,
            o,
            t,
          ),
          d = (function (e, t, n) {
            const r = {};
            for (const a in e)
              ("values" === a && "object" === typeof e.values) ||
                de(e[a]) ||
                ((mr(a) ||
                  (!0 === n && hr(a)) ||
                  (!t && !hr(a)) ||
                  (e.draggable && a.startsWith("onDrag"))) &&
                  (r[a] = e[a]));
            return r;
          })(n, "string" === typeof t, l),
          f = t !== e.Fragment ? s(s(s({}, d), c), {}, { ref: r }) : {},
          { children: h } = n,
          m = (0, e.useMemo)(() => (de(h) ? h.get() : h), [h]);
        return (0, e.createElement)(t, s(s({}, f), {}, { children: m }));
      }
      function vr(e) {
        return de(e) ? e.get() : e;
      }
      const yr = (0, e.createContext)(null);
      const br = ["transitionEnd", "transition"];
      function xr(e, t, n, r) {
        const a = {},
          o = r(e, {});
        for (const u in o) a[u] = vr(o[u]);
        let { initial: i, animate: l } = e;
        const s = Gt(e),
          c = Xt(e);
        t &&
          c &&
          !s &&
          !1 !== e.inherit &&
          (void 0 === i && (i = t.initial), void 0 === l && (l = t.animate));
        let d = !!n && !1 === n.initial;
        d = d || !1 === i;
        const f = d ? l : i;
        if (f && "boolean" !== typeof f && !$t(f)) {
          const t = Array.isArray(f) ? f : [f];
          for (let n = 0; n < t.length; n++) {
            const r = rn(e, t[n]);
            if (r) {
              const { transitionEnd: e, transition: t } = r,
                n = u(r, br);
              for (const r in n) {
                let e = n[r];
                if (Array.isArray(e)) {
                  e = e[d ? e.length - 1 : 0];
                }
                null !== e && (a[r] = e);
              }
              for (const r in e) a[r] = e[r];
            }
          }
        }
        return a;
      }
      const wr = (t) => (n, r) => {
          const a = (0, e.useContext)(rr),
            o = (0, e.useContext)(yr),
            i = () =>
              (function (e, t, n, r) {
                let { scrapeMotionValuesFromProps: a, createRenderState: o } =
                  e;
                return { latestValues: xr(t, n, r, a), renderState: o() };
              })(t, n, a, o);
          return r
            ? i()
            : (function (t) {
                const n = (0, e.useRef)(null);
                return (null === n.current && (n.current = t()), n.current);
              })(i);
        },
        kr = wr({ scrapeMotionValuesFromProps: Tn, createRenderState: ir }),
        Ar = wr({ scrapeMotionValuesFromProps: Vn, createRenderState: cr }),
        Er = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        };
      let Sr = !1;
      function Mr() {
        return (
          (function () {
            if (Sr) return;
            const e = {};
            for (const t in Er)
              e[t] = { isEnabled: (e) => Er[t].some((t) => !!e[t]) };
            (sn(e), (Sr = !0));
          })(),
          ln
        );
      }
      const Cr = Symbol.for("motionComponentSymbol");
      function Fr(t, n, r) {
        const a = (0, e.useRef)(r);
        (0, e.useInsertionEffect)(() => {
          a.current = r;
        });
        const o = (0, e.useRef)(null);
        return (0, e.useCallback)(
          (e) => {
            var r;
            e && (null === (r = t.onMount) || void 0 === r || r.call(t, e));
            const i = a.current;
            if ("function" === typeof i)
              if (e) {
                const t = i(e);
                "function" === typeof t && (o.current = t);
              } else o.current ? (o.current(), (o.current = null)) : i(e);
            else i && (i.current = e);
            n && (e ? n.mount(e) : n.unmount());
          },
          [n],
        );
      }
      const Pr = "data-" + dn("framerAppearId"),
        Tr = (0, e.createContext)({});
      function Vr(e) {
        return (
          e &&
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      const Lr =
        "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect;
      function Nr(t, n, r, a, o, i) {
        var l, s, u, c;
        const { visualElement: d } = (0, e.useContext)(rr),
          f = (0, e.useContext)(tr),
          h = (0, e.useContext)(yr),
          m = (0, e.useContext)(nr),
          p = m.reducedMotion,
          g = m.skipAnimations,
          v = (0, e.useRef)(null),
          y = (0, e.useRef)(!1);
        ((a = a || f.renderer),
          !v.current &&
            a &&
            ((v.current = a(t, {
              visualState: n,
              parent: d,
              props: r,
              presenceContext: h,
              blockInitialAnimation: !!h && !1 === h.initial,
              reducedMotionConfig: p,
              skipAnimations: g,
              isSVG: i,
            })),
            y.current && v.current && (v.current.manuallyAnimateOnMount = !0)));
        const b = v.current,
          x = (0, e.useContext)(Tr);
        !b ||
          b.projection ||
          !o ||
          ("html" !== b.type && "svg" !== b.type) ||
          (function (e, t, n, r) {
            const {
              layoutId: a,
              layout: o,
              drag: i,
              dragConstraints: l,
              layoutScroll: s,
              layoutRoot: u,
              layoutAnchor: c,
              layoutCrossfade: d,
            } = t;
            ((e.projection = new n(
              e.latestValues,
              t["data-framer-portal-id"] ? void 0 : Dr(e.parent),
            )),
              e.projection.setOptions({
                layoutId: a,
                layout: o,
                alwaysMeasureLayout: Boolean(i) || (l && Vr(l)),
                visualElement: e,
                animationType: "string" === typeof o ? o : "both",
                initialPromotionConfig: r,
                crossfade: d,
                layoutScroll: s,
                layoutRoot: u,
                layoutAnchor: c,
              }));
          })(v.current, r, o, x);
        const w = (0, e.useRef)(!1);
        (0, e.useInsertionEffect)(() => {
          b && w.current && b.update(r, h);
        });
        const k = r[Pr],
          A = (0, e.useRef)(
            Boolean(k) &&
              "undefined" !== typeof window &&
              !(
                null !== (l = (s = window).MotionHandoffIsComplete) &&
                void 0 !== l &&
                l.call(s, k)
              ) &&
              (null === (u = (c = window).MotionHasOptimisedAnimation) ||
              void 0 === u
                ? void 0
                : u.call(c, k)),
          );
        return (
          Lr(() => {
            ((y.current = !0),
              b &&
                ((w.current = !0),
                (window.MotionIsMounted = !0),
                b.updateFeatures(),
                b.scheduleRenderMicrotask(),
                A.current &&
                  b.animationState &&
                  b.animationState.animateChanges()));
          }),
          (0, e.useEffect)(() => {
            b &&
              (!A.current &&
                b.animationState &&
                b.animationState.animateChanges(),
              A.current &&
                (queueMicrotask(() => {
                  var e, t;
                  null === (e = (t = window).MotionHandoffMarkAsComplete) ||
                    void 0 === e ||
                    e.call(t, k);
                }),
                (A.current = !1)),
              (b.enteringChildren = void 0));
          }),
          b
        );
      }
      function Dr(e) {
        if (e)
          return !1 !== e.options.allowProjection ? e.projection : Dr(e.parent);
      }
      function Hr(t) {
        var n, r;
        let { forwardMotionProps: a = !1, type: o } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0,
          l = arguments.length > 3 ? arguments[3] : void 0;
        i &&
          (function (e) {
            const t = Mr();
            for (const n in e) t[n] = s(s({}, t[n]), e[n]);
            sn(t);
          })(i);
        const u = o ? "svg" === o : Xn(t),
          c = u ? Ar : kr;
        function d(n, r) {
          let o;
          const i = s(
              s(s({}, (0, e.useContext)(nr)), n),
              {},
              { layoutId: jr(n) },
            ),
            { isStatic: d } = i,
            f = ar(n),
            h = c(n, d);
          if (!d && "undefined" !== typeof window) {
            !(function () {
              (0, e.useContext)(tr).strict;
              0;
            })();
            const n = (function (e) {
              const t = Mr(),
                { drag: n, layout: r } = t;
              if (!n && !r) return {};
              const a = s(s({}, n), r);
              return {
                MeasureLayout:
                  (null !== n && void 0 !== n && n.isEnabled(e)) ||
                  (null !== r && void 0 !== r && r.isEnabled(e))
                    ? a.MeasureLayout
                    : void 0,
                ProjectionNode: a.ProjectionNode,
              };
            })(i);
            ((o = n.MeasureLayout),
              (f.visualElement = Nr(t, h, i, l, n.ProjectionNode, u)));
          }
          return (0, w.jsxs)(rr.Provider, {
            value: f,
            children: [
              o && f.visualElement
                ? (0, w.jsx)(o, s({ visualElement: f.visualElement }, i))
                : null,
              gr(t, n, Fr(h, f.visualElement, r), h, d, a, u),
            ],
          });
        }
        d.displayName = "motion.".concat(
          "string" === typeof t
            ? t
            : "create(".concat(
                null !==
                  (n =
                    null !== (r = t.displayName) && void 0 !== r
                      ? r
                      : t.name) && void 0 !== n
                  ? n
                  : "",
                ")",
              ),
        );
        const f = (0, e.forwardRef)(d);
        return ((f[Cr] = t), f);
      }
      function jr(t) {
        let { layoutId: n } = t;
        const r = (0, e.useContext)(er).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function Zr(e, t) {
        if ("undefined" === typeof Proxy) return Hr;
        const n = new Map(),
          r = (n, r) => Hr(n, r, e, t);
        return new Proxy((e, t) => r(e, t), {
          get: (a, o) =>
            "create" === o
              ? r
              : (n.has(o) || n.set(o, Hr(o, void 0, e, t)), n.get(o)),
        });
      }
      class zr {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }
      function _r(e, t, n) {
        const r = e.getProps();
        return rn(r, t, void 0 !== n ? n : r.custom, e);
      }
      const Rr = ["inherit"];
      function Or(e, t) {
        if (null !== e && void 0 !== e && e.inherit && t) {
          const { inherit: n } = e,
            r = u(e, Rr);
          return s(s({}, t), r);
        }
        return e;
      }
      function Ir(e, t) {
        var n, r;
        const a =
          null !==
            (n =
              null !== (r = null === e || void 0 === e ? void 0 : e[t]) &&
              void 0 !== r
                ? r
                : null === e || void 0 === e
                  ? void 0
                  : e.default) && void 0 !== n
            ? n
            : e;
        return a !== e ? Or(a, e) : a;
      }
      const Br = (e) => Array.isArray(e),
        Ur = ["transitionEnd", "transition"];
      function Wr(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ut(n));
      }
      function qr(e) {
        return Br(e) ? e[e.length - 1] || 0 : e;
      }
      function $r(e, t) {
        const n = e.getValue("willChange");
        if (((r = n), Boolean(de(r) && r.add))) return n.add(t);
        if (!n && Ue.WillChange) {
          const n = new Ue.WillChange("auto");
          (e.addValue("willChange", n), n.add(t));
        }
        var r;
      }
      function Yr(e) {
        return e.props[Pr];
      }
      const Kr = (e, t) => (n) => t(e(n)),
        Qr = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(Kr);
        };
      function Gr(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
              ? t
              : n < 2 / 3
                ? e + (t - e) * (2 / 3 - n) * 6
                : e
        );
      }
      function Xr(e, t) {
        return (n) => (n > 0 ? t : e);
      }
      const Jr = (e, t, n) => {
          const r = e * e,
            a = n * (t * t - r) + r;
          return a < 0 ? 0 : Math.sqrt(a);
        },
        ea = [Z, j, W];
      function ta(e) {
        const t = ((n = e), ea.find((e) => e.test(n)));
        var n;
        if (
          (ye(
            Boolean(t),
            "'".concat(
              e,
              "' is not an animatable color. Use the equivalent color code instead.",
            ),
            "color-not-animatable",
          ),
          !Boolean(t))
        )
          return !1;
        let r = t.parse(e);
        return (
          t === W &&
            (r = (function (e) {
              let { hue: t, saturation: n, lightness: r, alpha: a } = e;
              ((t /= 360), (n /= 100), (r /= 100));
              let o = 0,
                i = 0,
                l = 0;
              if (n) {
                const e = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  a = 2 * r - e;
                ((o = Gr(a, e, t + 1 / 3)),
                  (i = Gr(a, e, t)),
                  (l = Gr(a, e, t - 1 / 3)));
              } else o = i = l = r;
              return {
                red: Math.round(255 * o),
                green: Math.round(255 * i),
                blue: Math.round(255 * l),
                alpha: a,
              };
            })(r)),
          r
        );
      }
      const na = (e, t) => {
          const n = ta(e),
            r = ta(t);
          if (!n || !r) return Xr(e, t);
          const a = s({}, n);
          return (e) => (
            (a.red = Jr(n.red, r.red, e)),
            (a.green = Jr(n.green, r.green, e)),
            (a.blue = Jr(n.blue, r.blue, e)),
            (a.alpha = Mn(n.alpha, r.alpha, e)),
            j.transform(a)
          );
        },
        ra = new Set(["none", "hidden"]);
      function aa(e, t) {
        return (n) => Mn(e, t, n);
      }
      function oa(e) {
        return "number" === typeof e
          ? aa
          : "string" === typeof e
            ? Ee(e)
              ? Xr
              : q.test(e)
                ? na
                : sa
            : Array.isArray(e)
              ? ia
              : "object" === typeof e
                ? q.test(e)
                  ? na
                  : la
                : Xr;
      }
      function ia(e, t) {
        const n = [...e],
          r = n.length,
          a = e.map((e, n) => oa(e)(e, t[n]));
        return (e) => {
          for (let t = 0; t < r; t++) n[t] = a[t](e);
          return n;
        };
      }
      function la(e, t) {
        const n = s(s({}, e), t),
          r = {};
        for (const a in n)
          void 0 !== e[a] && void 0 !== t[a] && (r[a] = oa(e[a])(e[a], t[a]));
        return (e) => {
          for (const t in r) n[t] = r[t](e);
          return n;
        };
      }
      const sa = (e, t) => {
        const n = ee.createTransformer(t),
          r = G(e),
          a = G(t);
        return r.indexes.var.length === a.indexes.var.length &&
          r.indexes.color.length === a.indexes.color.length &&
          r.indexes.number.length >= a.indexes.number.length
          ? (ra.has(e) && !a.values.length) || (ra.has(t) && !r.values.length)
            ? (function (e, t) {
                return ra.has(e)
                  ? (n) => (n <= 0 ? e : t)
                  : (n) => (n >= 1 ? t : e);
              })(e, t)
            : Qr(
                ia(
                  (function (e, t) {
                    const n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < t.values.length; o++) {
                      var a;
                      const i = t.types[o],
                        l = e.indexes[i][r[i]],
                        s = null !== (a = e.values[l]) && void 0 !== a ? a : 0;
                      ((n[o] = s), r[i]++);
                    }
                    return n;
                  })(r, a),
                  a.values,
                ),
                n,
              )
          : (ye(
              !0,
              "Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.",
                ),
              "complex-values-different",
            ),
            Xr(e, t));
      };
      function ua(e, t, n) {
        if (
          "number" === typeof e &&
          "number" === typeof t &&
          "number" === typeof n
        )
          return Mn(e, t, n);
        return oa(e)(e, t);
      }
      const ca = (e) => {
          const t = (t) => {
            let { timestamp: n } = t;
            return e(n);
          };
          return {
            start: function () {
              let e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return Ye.update(t, e);
            },
            stop: () => Ke(t),
            now: () => (Qe.isProcessing ? Qe.timestamp : Rt.now()),
          };
        },
        da = 2e4;
      function fa(e) {
        let t = 0;
        let n = e.next(t);
        for (; !n.done && t < da; ) ((t += 50), (n = e.next(t)));
        return t >= da ? 1 / 0 : t;
      }
      const ha = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function ma(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      const pa = 0.001;
      const ga = ["duration", "bounce"],
        va = ["stiffness", "damping", "mass"];
      function ya(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function ba(e) {
        let t = s(
          {
            velocity: ha.velocity,
            stiffness: ha.stiffness,
            damping: ha.damping,
            mass: ha.mass,
            isResolvedFromDuration: !1,
          },
          e,
        );
        if (!ya(e, va) && ya(e, ga))
          if (((t.velocity = 0), e.visualDuration)) {
            const n = e.visualDuration,
              r = (2 * Math.PI) / (1.2 * n),
              a = r * r,
              o = 2 * M(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
            t = s(s({}, t), {}, { mass: ha.mass, stiffness: a, damping: o });
          } else {
            const n = (function (e) {
              let t,
                n,
                {
                  duration: r = ha.duration,
                  bounce: a = ha.bounce,
                  velocity: o = ha.velocity,
                  mass: i = ha.mass,
                } = e;
              ye(
                r <= dt(ha.maxDuration),
                "Spring duration must be 10 seconds or less",
                "spring-duration-limit",
              );
              let l = 1 - a;
              ((l = M(ha.minDamping, ha.maxDamping, l)),
                (r = M(ha.minDuration, ha.maxDuration, ft(r))),
                l < 1
                  ? ((t = (e) => {
                      const t = e * l,
                        n = t * r,
                        a = t - o,
                        i = ma(e, l),
                        s = Math.exp(-n);
                      return pa - (a / i) * s;
                    }),
                    (n = (e) => {
                      const n = e * l * r,
                        a = n * o + o,
                        i = Math.pow(l, 2) * Math.pow(e, 2) * r,
                        s = Math.exp(-n),
                        u = ma(Math.pow(e, 2), l);
                      return ((-t(e) + pa > 0 ? -1 : 1) * ((a - i) * s)) / u;
                    }))
                  : ((t = (e) => Math.exp(-e * r) * ((e - o) * r + 1) - 0.001),
                    (n = (e) => Math.exp(-e * r) * (r * r * (o - e)))));
              const s = (function (e, t, n) {
                let r = n;
                for (let a = 1; a < 12; a++) r -= e(r) / t(r);
                return r;
              })(t, n, 5 / r);
              if (((r = dt(r)), isNaN(s)))
                return {
                  stiffness: ha.stiffness,
                  damping: ha.damping,
                  duration: r,
                };
              {
                const e = Math.pow(s, 2) * i;
                return {
                  stiffness: e,
                  damping: 2 * l * Math.sqrt(i * e),
                  duration: r,
                };
              }
            })(s(s({}, e), {}, { velocity: 0 }));
            ((t = s(s(s({}, t), n), {}, { mass: ha.mass })),
              (t.isResolvedFromDuration = !0));
          }
        return t;
      }
      function xa() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ha.visualDuration,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ha.bounce;
        const n =
          "object" !== typeof e
            ? { visualDuration: e, keyframes: [0, 1], bounce: t }
            : e;
        let { restSpeed: r, restDelta: a } = n;
        const o = n.keyframes[0],
          i = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: c,
            mass: d,
            duration: f,
            velocity: h,
            isResolvedFromDuration: m,
          } = ba(s(s({}, n), {}, { velocity: -ft(n.velocity || 0) })),
          p = h || 0,
          g = c / (2 * Math.sqrt(u * d)),
          v = i - o,
          y = ft(Math.sqrt(u / d)),
          b = Math.abs(v) < 5;
        let x, w, k, A, E, S;
        if (
          (r || (r = b ? ha.restSpeed.granular : ha.restSpeed.default),
          a || (a = b ? ha.restDelta.granular : ha.restDelta.default),
          g < 1)
        )
          ((k = ma(y, g)),
            (A = (p + g * y * v) / k),
            (x = (e) => {
              const t = Math.exp(-g * y * e);
              return i - t * (A * Math.sin(k * e) + v * Math.cos(k * e));
            }),
            (E = g * y * A + v * k),
            (S = g * y * v - A * k),
            (w = (e) =>
              Math.exp(-g * y * e) *
              (E * Math.sin(k * e) + S * Math.cos(k * e))));
        else if (1 === g) {
          x = (e) => i - Math.exp(-y * e) * (v + (p + y * v) * e);
          const e = p + y * v;
          w = (t) => Math.exp(-y * t) * (y * e * t - p);
        } else {
          const e = y * Math.sqrt(g * g - 1);
          x = (t) => {
            const n = Math.exp(-g * y * t),
              r = Math.min(e * t, 300);
            return (
              i -
              (n * ((p + g * y * v) * Math.sinh(r) + e * v * Math.cosh(r))) / e
            );
          };
          const t = (p + g * y * v) / e,
            n = g * y * t - v * e,
            r = g * y * v - t * e;
          w = (t) => {
            const a = Math.exp(-g * y * t),
              o = Math.min(e * t, 300);
            return a * (n * Math.sinh(o) + r * Math.cosh(o));
          };
        }
        const M = {
          calculatedDuration: (m && f) || null,
          velocity: (e) => dt(w(e)),
          next: (e) => {
            if (!m && g < 1) {
              const t = Math.exp(-g * y * e),
                n = Math.sin(k * e),
                o = Math.cos(k * e),
                s = i - t * (A * n + v * o),
                u = dt(t * (E * n + S * o));
              return (
                (l.done = Math.abs(u) <= r && Math.abs(i - s) <= a),
                (l.value = l.done ? i : s),
                l
              );
            }
            const t = x(e);
            if (m) l.done = e >= f;
            else {
              const n = dt(w(e));
              l.done = Math.abs(n) <= r && Math.abs(i - t) <= a;
            }
            return ((l.value = l.done ? i : t), l);
          },
          toString: () => {
            const e = Math.min(fa(M), da),
              t = Ct((t) => M.next(e * t).value, e, 30);
            return e + "ms " + t;
          },
          toTransition: () => {},
        };
        return M;
      }
      xa.applyToOptions = (e) => {
        const t = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100;
          const n = (arguments.length > 2 ? arguments[2] : void 0)(
              s(s({}, e), {}, { keyframes: [0, t] }),
            ),
            r = Math.min(fa(n), da);
          return {
            type: "keyframes",
            ease: (e) => n.next(r * e).value / t,
            duration: ft(r),
          };
        })(e, 100, xa);
        return (
          (e.ease = t.ease),
          (e.duration = dt(t.duration)),
          (e.type = "keyframes"),
          e
        );
      };
      function wa(e, t, n) {
        const r = Math.max(t - 5, 0);
        return Ot(n - e(r), t - r);
      }
      function ka(e) {
        let {
          keyframes: t,
          velocity: n = 0,
          power: r = 0.8,
          timeConstant: a = 325,
          bounceDamping: o = 10,
          bounceStiffness: i = 500,
          modifyTarget: l,
          min: s,
          max: u,
          restDelta: c = 0.5,
          restSpeed: d,
        } = e;
        const f = t[0],
          h = { done: !1, value: f },
          m = (e) =>
            void 0 === s
              ? u
              : void 0 === u || Math.abs(s - e) < Math.abs(u - e)
                ? s
                : u;
        let p = r * n;
        const g = f + p,
          v = void 0 === l ? g : l(g);
        v !== g && (p = v - f);
        const y = (e) => -p * Math.exp(-e / a),
          b = (e) => v + y(e),
          x = (e) => {
            const t = y(e),
              n = b(e);
            ((h.done = Math.abs(t) <= c), (h.value = h.done ? v : n));
          };
        let w, k;
        const A = (e) => {
          var t;
          ((t = h.value), (void 0 !== s && t < s) || (void 0 !== u && t > u)) &&
            ((w = e),
            (k = xa({
              keyframes: [h.value, m(h.value)],
              velocity: wa(b, e, h.value),
              damping: o,
              stiffness: i,
              restDelta: c,
              restSpeed: d,
            })));
        };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (
                k || void 0 !== w || ((t = !0), x(e), A(e)),
                void 0 !== w && e >= w ? k.next(e - w) : (!t && x(e), h)
              );
            },
          }
        );
      }
      const Aa = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function Ea(e, t, n, r) {
        if (e === t && n === r) return Be;
        const a = (t) =>
          (function (e, t, n, r, a) {
            let o,
              i,
              l = 0;
            do {
              ((i = t + (n - t) / 2),
                (o = Aa(i, r, a) - e),
                o > 0 ? (n = i) : (t = i));
            } while (Math.abs(o) > 1e-7 && ++l < 12);
            return i;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : Aa(a(e), t, r));
      }
      const Sa = Ea(0.42, 0, 1, 1),
        Ma = Ea(0, 0, 0.58, 1),
        Ca = Ea(0.42, 0, 0.58, 1),
        Fa = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
        Pa = (e) => (t) => 1 - e(1 - t),
        Ta = Ea(0.33, 1.53, 0.69, 0.99),
        Va = Pa(Ta),
        La = Fa(Va),
        Na = (e) =>
          e >= 1
            ? 1
            : (e *= 2) < 1
              ? 0.5 * Va(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        Da = (e) => 1 - Math.sin(Math.acos(e)),
        Ha = Pa(Da),
        ja = Fa(Da),
        Za = {
          linear: Be,
          easeIn: Sa,
          easeInOut: Ca,
          easeOut: Ma,
          circIn: Da,
          circInOut: ja,
          circOut: Ha,
          backIn: Va,
          backInOut: La,
          backOut: Ta,
          anticipate: Na,
        },
        za = (e) => {
          if (St(e)) {
            be(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length",
            );
            const [t, n, r, a] = e;
            return Ea(t, n, r, a);
          }
          return "string" === typeof e
            ? (be(
                void 0 !== Za[e],
                "Invalid easing type '".concat(e, "'"),
                "invalid-easing-type",
              ),
              Za[e])
            : e;
        },
        _a = (e, t, n) => {
          const r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        };
      function Ra(e, t) {
        let {
          clamp: n = !0,
          ease: r,
          mixer: a,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const o = e.length;
        if (
          (be(
            o === t.length,
            "Both input and output ranges must be the same length",
            "range-length",
          ),
          1 === o)
        )
          return () => t[0];
        if (2 === o && t[0] === t[1]) return () => t[1];
        const i = e[0] === e[1];
        e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        const l = (function (e, t, n) {
            const r = [],
              a = n || Ue.mix || ua,
              o = e.length - 1;
            for (let i = 0; i < o; i++) {
              let n = a(e[i], e[i + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[i] || Be : t;
                n = Qr(e, n);
              }
              r.push(n);
            }
            return r;
          })(t, r, a),
          s = l.length,
          u = (n) => {
            if (i && n < e[0]) return t[0];
            let r = 0;
            if (s > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
            const a = _a(e[r], e[r + 1], n);
            return l[r](a);
          };
        return n ? (t) => u(M(e[0], e[o - 1], t)) : u;
      }
      function Oa(e) {
        const t = [0];
        return (
          (function (e, t) {
            const n = e[e.length - 1];
            for (let r = 1; r <= t; r++) {
              const a = _a(0, t, r);
              e.push(Mn(n, 1, a));
            }
          })(t, e.length - 1),
          t
        );
      }
      function Ia(e) {
        let {
          duration: t = 300,
          keyframes: n,
          times: r,
          ease: a = "easeInOut",
        } = e;
        const o = ((e) => Array.isArray(e) && "number" !== typeof e[0])(a)
            ? a.map(za)
            : za(a),
          i = { done: !1, value: n[0] },
          l = (function (e, t) {
            return e.map((e) => e * t);
          })(r && r.length === n.length ? r : Oa(n), t),
          s = Ra(l, n, {
            ease: Array.isArray(o)
              ? o
              : ((u = n),
                (c = o),
                u.map(() => c || Ca).splice(0, u.length - 1)),
          });
        var u, c;
        return {
          calculatedDuration: t,
          next: (e) => ((i.value = s(e)), (i.done = e >= t), i),
        };
      }
      const Ba = {
        decay: ka,
        inertia: ka,
        tween: Ia,
        keyframes: Ia,
        spring: xa,
      };
      function Ua(e) {
        "string" === typeof e.type && (e.type = Ba[e.type]);
      }
      const Wa = (e) => e / 100;
      class qa extends At {
        constructor(e) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
              var e, t;
              const { motionValue: n } = this.options;
              (n && n.updatedAt !== Rt.now() && this.tick(Rt.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(),
                  null === (e = (t = this.options).onStop) ||
                    void 0 === e ||
                    e.call(t)));
            }),
            Et.mainThread++,
            (this.options = e),
            this.initAnimation(),
            this.play(),
            !1 === e.autoplay && this.pause());
        }
        initAnimation() {
          const { options: e } = this;
          Ua(e);
          const {
            type: t = Ia,
            repeat: n = 0,
            repeatDelay: r = 0,
            repeatType: a,
            velocity: o = 0,
          } = e;
          let { keyframes: i } = e;
          const l = t || Ia;
          l !== Ia &&
            "number" !== typeof i[0] &&
            ((this.mixKeyframes = Qr(Wa, ua(i[0], i[1]))), (i = [0, 100]));
          const u = l(s(s({}, e), {}, { keyframes: i }));
          ("mirror" === a &&
            (this.mirroredGenerator = l(
              s(s({}, e), {}, { keyframes: [...i].reverse(), velocity: -o }),
            )),
            null === u.calculatedDuration && (u.calculatedDuration = fa(u)));
          const { calculatedDuration: c } = u;
          ((this.calculatedDuration = c),
            (this.resolvedDuration = c + r),
            (this.totalDuration = this.resolvedDuration * (n + 1) - r),
            (this.generator = u));
        }
        updateTime(e) {
          const t = Math.round(e - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = t);
        }
        tick(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const {
            generator: n,
            totalDuration: r,
            mixKeyframes: a,
            mirroredGenerator: o,
            resolvedDuration: i,
            calculatedDuration: l,
          } = this;
          if (null === this.startTime) return n.next(0);
          const {
            delay: s = 0,
            keyframes: u,
            repeat: c,
            repeatType: d,
            repeatDelay: f,
            type: h,
            onUpdate: m,
            finalKeyframe: p,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - r / this.speed, this.startTime)),
            t ? (this.currentTime = e) : this.updateTime(e));
          const g = this.currentTime - s * (this.playbackSpeed >= 0 ? 1 : -1),
            v = this.playbackSpeed >= 0 ? g < 0 : g > r;
          ((this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = r));
          let y,
            b = this.currentTime,
            x = n;
          if (c) {
            const e = Math.min(this.currentTime, r) / i;
            let t = Math.floor(e),
              n = e % 1;
            (!n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, c + 1)));
            (Boolean(t % 2) &&
              ("reverse" === d
                ? ((n = 1 - n), f && (n -= f / i))
                : "mirror" === d && (x = o)),
              (b = M(0, 1, n) * i));
          }
          (v
            ? ((this.delayState.value = u[0]), (y = this.delayState))
            : (y = x.next(b)),
            a && !v && (y.value = a(y.value)));
          let { done: w } = y;
          v ||
            null === l ||
            (w =
              this.playbackSpeed >= 0
                ? this.currentTime >= r
                : this.currentTime <= 0);
          const k =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            k && h !== ka && (y.value = kt(u, this.options, p, this.speed)),
            m && m(y.value),
            k && this.finish(),
            y
          );
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
        get duration() {
          return ft(this.calculatedDuration);
        }
        get iterationDuration() {
          const { delay: e = 0 } = this.options || {};
          return this.duration + ft(e);
        }
        get time() {
          return ft(this.currentTime);
        }
        set time(e) {
          ((e = dt(e)),
            (this.currentTime = e),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0),
                (this.state = "paused"),
                (this.holdTime = e),
                this.tick(e)));
        }
        getGeneratorVelocity() {
          const e = this.currentTime;
          if (e <= 0) return this.options.velocity || 0;
          if (this.generator.velocity) return this.generator.velocity(e);
          return wa(
            (e) => this.generator.next(e).value,
            e,
            this.generator.next(e).value,
          );
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          const t = this.playbackSpeed !== e;
          (t && this.driver && this.updateTime(Rt.now()),
            (this.playbackSpeed = e),
            t && this.driver && (this.time = ft(this.currentTime)));
        }
        play() {
          var e, t;
          if (this.isStopped) return;
          const { driver: n = ca, startTime: r } = this.options;
          (this.driver || (this.driver = n((e) => this.tick(e))),
            null === (e = (t = this.options).onPlay) ||
              void 0 === e ||
              e.call(t));
          const a = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = a))
            : null !== this.holdTime
              ? (this.startTime = a - this.holdTime)
              : this.startTime ||
                (this.startTime = null !== r && void 0 !== r ? r : a),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"),
            this.updateTime(Rt.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          var e, t;
          (this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            null === (e = (t = this.options).onComplete) ||
              void 0 === e ||
              e.call(t));
        }
        cancel() {
          var e, t;
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            null === (e = (t = this.options).onCancel) ||
              void 0 === e ||
              e.call(t));
        }
        teardown() {
          ((this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            Et.mainThread--);
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return ((this.startTime = 0), this.tick(e, !0));
        }
        attachTimeline(e) {
          var t;
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            null === (t = this.driver) || void 0 === t || t.stop(),
            e.observe(this)
          );
        }
      }
      const $a = { anticipate: Na, backInOut: La, circInOut: ja };
      function Ya(e) {
        "string" === typeof e.ease && e.ease in $a && (e.ease = $a[e.ease]);
      }
      const Ka = ["motionValue", "onUpdate", "onComplete", "element"];
      class Qa extends Dt {
        constructor(e) {
          (Ya(e),
            Ua(e),
            super(e),
            void 0 !== e.startTime &&
              !1 !== e.autoplay &&
              (this.startTime = e.startTime),
            (this.options = e));
        }
        updateMotionValue(e) {
          const t = this.options,
            { motionValue: n, onUpdate: r, onComplete: a, element: o } = t,
            i = u(t, Ka);
          if (!n) return;
          if (void 0 !== e) return void n.set(e);
          const l = new qa(s(s({}, i), {}, { autoplay: !1 })),
            c = Math.max(10, Rt.now() - this.startTime),
            d = M(0, 10, c - 10),
            f = l.sample(c).value,
            { name: h } = this.options;
          (o && h && gt(o, h, f),
            n.setWithVelocity(l.sample(Math.max(0, c - d)).value, f, d),
            l.stop());
        }
      }
      const Ga = (e, t) =>
        "zIndex" !== t &&
        (!("number" !== typeof e && !Array.isArray(e)) ||
          !(
            "string" !== typeof e ||
            (!ee.test(e) && "0" !== e) ||
            e.startsWith("url(")
          ));
      function Xa(e) {
        ((e.duration = 0), (e.type = "keyframes"));
      }
      const Ja = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
      const eo = new Set([
          "color",
          "backgroundColor",
          "outlineColor",
          "fill",
          "stroke",
          "borderColor",
          "borderTopColor",
          "borderRightColor",
          "borderBottomColor",
          "borderLeftColor",
        ]),
        to = vt(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      function no(e) {
        var t;
        const {
          motionValue: n,
          name: r,
          repeatDelay: a,
          repeatType: o,
          damping: i,
          type: l,
          keyframes: s,
        } = e;
        if (
          !(
            (null === n ||
            void 0 === n ||
            null === (t = n.owner) ||
            void 0 === t
              ? void 0
              : t.current) instanceof HTMLElement
          )
        )
          return !1;
        const { onUpdate: u, transformTemplate: c } = n.owner.getProps();
        return (
          to() &&
          r &&
          (Ht.has(r) ||
            (eo.has(r) &&
              (function (e) {
                for (let t = 0; t < e.length; t++)
                  if ("string" === typeof e[t] && Ja.test(e[t])) return !0;
                return !1;
              })(s))) &&
          ("transform" !== r || !c) &&
          !u &&
          !a &&
          "mirror" !== o &&
          0 !== i &&
          "inertia" !== l
        );
      }
      const ro = [
        "autoplay",
        "delay",
        "type",
        "repeat",
        "repeatDelay",
        "repeatType",
        "keyframes",
        "name",
        "motionValue",
        "element",
      ];
      class ao extends At {
        constructor(e) {
          var t;
          let {
              autoplay: n = !0,
              delay: r = 0,
              type: a = "keyframes",
              repeat: o = 0,
              repeatDelay: i = 0,
              repeatType: l = "loop",
              keyframes: c,
              name: d,
              motionValue: f,
              element: h,
            } = e,
            m = u(e, ro);
          (super(),
            (this.stop = () => {
              var e, t;
              this._animation &&
                (this._animation.stop(),
                null === (t = this.stopTimeline) ||
                  void 0 === t ||
                  t.call(this));
              null === (e = this.keyframeResolver) ||
                void 0 === e ||
                e.cancel();
            }),
            (this.createdAt = Rt.now()));
          const p = s(
              {
                autoplay: n,
                delay: r,
                type: a,
                repeat: o,
                repeatDelay: i,
                repeatType: l,
                name: d,
                motionValue: f,
                element: h,
              },
              m,
            ),
            g =
              (null === h || void 0 === h ? void 0 : h.KeyframeResolver) || at;
          ((this.keyframeResolver = new g(
            c,
            (e, t, n) => this.onKeyframesResolved(e, t, p, !n),
            d,
            f,
            h,
          )),
            null === (t = this.keyframeResolver) ||
              void 0 === t ||
              t.scheduleResolve());
        }
        onKeyframesResolved(e, t, n, r) {
          var a;
          this.keyframeResolver = void 0;
          const {
            name: o,
            type: i,
            velocity: l,
            delay: u,
            isHandoff: c,
            onUpdate: d,
          } = n;
          this.resolvedAt = Rt.now();
          let f = !0;
          (function (e, t, n, r) {
            const a = e[0];
            if (null === a) return !1;
            if ("display" === t || "visibility" === t) return !0;
            const o = e[e.length - 1],
              i = Ga(a, t),
              l = Ga(o, t);
            return (
              ye(
                i === l,
                "You are trying to animate "
                  .concat(t, ' from "')
                  .concat(a, '" to "')
                  .concat(o, '". "')
                  .concat(i ? o : a, '" is not an animatable value.'),
                "value-not-animatable",
              ),
              !(!i || !l) &&
                ((function (e) {
                  const t = e[0];
                  if (1 === e.length) return !0;
                  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
                })(e) ||
                  (("spring" === n || Lt(n)) && r))
            );
          })(e, o, i, l) ||
            ((f = !1),
            (!Ue.instantAnimations && u) ||
              null === d ||
              void 0 === d ||
              d(kt(e, n, t)),
            (e[0] = e[e.length - 1]),
            Xa(n),
            (n.repeat = 0));
          const h = s(
              s(
                {
                  startTime: r
                    ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                      ? this.resolvedAt
                      : this.createdAt
                    : void 0,
                  finalKeyframe: t,
                },
                n,
              ),
              {},
              { keyframes: e },
            ),
            m = f && !c && no(h),
            p =
              null === (a = h.motionValue) ||
              void 0 === a ||
              null === (a = a.owner) ||
              void 0 === a
                ? void 0
                : a.current;
          let g;
          if (m)
            try {
              g = new Qa(s(s({}, h), {}, { element: p }));
            } catch (ih) {
              g = new qa(h);
            }
          else g = new qa(h);
          (g.finished
            .then(() => {
              this.notifyFinished();
            })
            .catch(Be),
            this.pendingTimeline &&
              ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = g));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
        get animation() {
          var e;
          this._animation ||
            (null === (e = this.keyframeResolver) || void 0 === e || e.resume(),
            (tt = !0),
            rt(),
            nt(),
            (tt = !1));
          return this._animation;
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(e) {
          this.animation.time = e;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(e) {
          this.animation.speed = e;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(e) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(e))
              : (this.pendingTimeline = e),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          var e;
          (this._animation && this.animation.cancel(),
            null === (e = this.keyframeResolver) || void 0 === e || e.cancel());
        }
      }
      const oo = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        io = { type: "keyframes", duration: 0.8 },
        lo = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        so = (e, t) => {
          let { keyframes: n } = t;
          return n.length > 2
            ? io
            : S.has(e)
              ? e.startsWith("scale")
                ? {
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10,
                  }
                : oo
              : lo;
        },
        uo = new Set([
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ]);
      const co = function (e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = arguments.length > 4 ? arguments[4] : void 0,
            o = arguments.length > 5 ? arguments[5] : void 0;
          return (i) => {
            const l = Ir(r, e) || {},
              u = l.delay || r.delay || 0;
            let { elapsed: c = 0 } = r;
            c -= dt(u);
            const d = s(
              s(
                {
                  keyframes: Array.isArray(n) ? n : [null, n],
                  ease: "easeOut",
                  velocity: t.getVelocity(),
                },
                l,
              ),
              {},
              {
                delay: -c,
                onUpdate: (e) => {
                  (t.set(e), l.onUpdate && l.onUpdate(e));
                },
                onComplete: () => {
                  (i(), l.onComplete && l.onComplete());
                },
                name: e,
                motionValue: t,
                element: o ? void 0 : a,
              },
            );
            ((function (e) {
              for (const t in e) if (!uo.has(t)) return !0;
              return !1;
            })(l) || Object.assign(d, so(e, d)),
              d.duration && (d.duration = dt(d.duration)),
              d.repeatDelay && (d.repeatDelay = dt(d.repeatDelay)),
              void 0 !== d.from && (d.keyframes[0] = d.from));
            let f = !1;
            if (
              ((!1 === d.type || (0 === d.duration && !d.repeatDelay)) &&
                (Xa(d), 0 === d.delay && (f = !0)),
              (Ue.instantAnimations ||
                Ue.skipAnimations ||
                (null !== a && void 0 !== a && a.shouldSkipAnimations)) &&
                ((f = !0), Xa(d), (d.delay = 0)),
              (d.allowFlatten = !l.type && !l.ease),
              f && !o && void 0 !== t.get())
            ) {
              const e = kt(d.keyframes, l);
              if (void 0 !== e)
                return void Ye.update(() => {
                  (d.onUpdate(e), d.onComplete());
                });
            }
            return l.isSync ? new qa(d) : new ao(d);
          };
        },
        fo = ["transition", "transitionEnd"];
      function ho(e, t) {
        let { protectedKeys: n, needsAnimating: r } = e;
        const a = n.hasOwnProperty(t) && !0 !== r[t];
        return ((r[t] = !1), a);
      }
      function mo(e, t) {
        var n;
        let {
            delay: r = 0,
            transitionOverride: a,
            type: o,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          { transition: i, transitionEnd: l } = t,
          c = u(t, fo);
        const d = e.getDefaultTransition();
        i = i ? Or(i, d) : d;
        const f = null === (n = i) || void 0 === n ? void 0 : n.reduceMotion;
        a && (i = a);
        const h = [],
          m = o && e.animationState && e.animationState.getState()[o];
        for (const u in c) {
          var p;
          const t = e.getValue(
              u,
              null !== (p = e.latestValues[u]) && void 0 !== p ? p : null,
            ),
            n = c[u];
          if (void 0 === n || (m && ho(m, u))) continue;
          const a = s({ delay: r }, Ir(i || {}, u)),
            o = t.get();
          if (
            void 0 !== o &&
            !t.isAnimating() &&
            !Array.isArray(n) &&
            n === o &&
            !a.velocity
          ) {
            Ye.update(() => t.set(n));
            continue;
          }
          let l = !1;
          if (window.MotionHandoffAnimation) {
            const t = Yr(e);
            if (t) {
              const e = window.MotionHandoffAnimation(t, u, Ye);
              null !== e && ((a.startTime = e), (l = !0));
            }
          }
          $r(e, u);
          const d = null !== f && void 0 !== f ? f : e.shouldReduceMotion;
          t.start(co(u, t, n, d && fe.has(u) ? { type: !1 } : a, e, l));
          const g = t.animation;
          g && h.push(g);
        }
        if (l) {
          const t = () =>
            Ye.update(() => {
              l &&
                (function (e, t) {
                  let n = _r(e, t) || {},
                    { transitionEnd: r = {}, transition: a = {} } = n,
                    o = u(n, Ur);
                  o = s(s({}, o), r);
                  for (const i in o) Wr(e, i, qr(o[i]));
                })(e, l);
            });
          h.length ? Promise.all(h).then(t) : t();
        }
        return h;
      }
      function po(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        const o = Array.from(e)
            .sort((e, t) => e.sortNodePosition(t))
            .indexOf(t),
          i = e.size,
          l = (i - 1) * r;
        return "function" === typeof n ? n(o, i) : 1 === a ? o * r : l - o * r;
      }
      function go(e, t) {
        var n;
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const a = _r(
          e,
          t,
          "exit" === r.type
            ? null === (n = e.presenceContext) || void 0 === n
              ? void 0
              : n.custom
            : void 0,
        );
        let { transition: o = e.getDefaultTransition() || {} } = a || {};
        r.transitionOverride && (o = r.transitionOverride);
        const i = a ? () => Promise.all(mo(e, a, r)) : () => Promise.resolve(),
          l =
            e.variantChildren && e.variantChildren.size
              ? function () {
                  let n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  const {
                    delayChildren: a = 0,
                    staggerChildren: i,
                    staggerDirection: l,
                  } = o;
                  return (function (e, t) {
                    let n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      a =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 1,
                      i = arguments.length > 6 ? arguments[6] : void 0;
                    const l = [];
                    for (const u of e.variantChildren)
                      (u.notify("AnimationStart", t),
                        l.push(
                          go(
                            u,
                            t,
                            s(
                              s({}, i),
                              {},
                              {
                                delay:
                                  n +
                                  ("function" === typeof r ? 0 : r) +
                                  po(e.variantChildren, u, r, a, o),
                              },
                            ),
                          ).then(() => u.notify("AnimationComplete", t)),
                        ));
                    return Promise.all(l);
                  })(e, t, n, a, i, l, r);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (u) {
          const [e, t] = "beforeChildren" === u ? [i, l] : [l, i];
          return e().then(() => t());
        }
        return Promise.all([i(), l(r.delay)]);
      }
      const vo = Qt.length;
      function yo(e) {
        if (!e) return;
        if (!e.isControllingVariants) {
          const t = (e.parent && yo(e.parent)) || {};
          return (
            void 0 !== e.props.initial && (t.initial = e.props.initial),
            t
          );
        }
        const t = {};
        for (let n = 0; n < vo; n++) {
          const r = Qt[n],
            a = e.props[r];
          (Yt(a) || !1 === a) && (t[r] = a);
        }
        return t;
      }
      function bo(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      const xo = ["transition", "transitionEnd"],
        wo = [...Kt].reverse(),
        ko = Kt.length;
      function Ao(e) {
        return (t) =>
          Promise.all(
            t.map((t) => {
              let { animation: n, options: r } = t;
              return (function (e, t) {
                let n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  const a = t.map((t) => go(e, t, r));
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = go(e, t, r);
                else {
                  const a = "function" === typeof t ? _r(e, t, r.custom) : t;
                  n = Promise.all(mo(e, a, r));
                }
                return n.then(() => {
                  e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            }),
          );
      }
      function Eo(e) {
        let t = Ao(e),
          n = Co(),
          r = !0,
          a = !1;
        const o = (t) => (n, r) => {
          var a;
          const o = _r(
            e,
            r,
            "exit" === t
              ? null === (a = e.presenceContext) || void 0 === a
                ? void 0
                : a.custom
              : void 0,
          );
          if (o) {
            const { transition: e, transitionEnd: t } = o,
              r = u(o, xo);
            n = s(s(s({}, n), r), t);
          }
          return n;
        };
        function i(i) {
          const { props: l } = e,
            u = yo(e.parent) || {},
            c = [],
            d = new Set();
          let f = {},
            h = 1 / 0;
          for (let t = 0; t < ko; t++) {
            const m = wo[t],
              p = n[m],
              g = void 0 !== l[m] ? l[m] : u[m],
              v = Yt(g),
              y = m === i ? p.isActive : null;
            !1 === y && (h = t);
            let b = g === u[m] && g !== l[m] && v;
            if (
              (b && (r || a) && e.manuallyAnimateOnMount && (b = !1),
              (p.protectedKeys = s({}, f)),
              (!p.isActive && null === y) ||
                (!g && !p.prevProp) ||
                $t(g) ||
                "boolean" === typeof g)
            )
              continue;
            if ("exit" === m && p.isActive && !0 !== y) {
              p.prevResolvedValues && (f = s(s({}, f), p.prevResolvedValues));
              continue;
            }
            const x = So(p.prevProp, g);
            let w = x || (m === i && p.isActive && !b && v) || (t > h && v),
              k = !1;
            const A = Array.isArray(g) ? g : [g];
            let E = A.reduce(o(m), {});
            !1 === y && (E = {});
            const { prevResolvedValues: S = {} } = p,
              M = s(s({}, S), E),
              C = (t) => {
                ((w = !0),
                  d.has(t) && ((k = !0), d.delete(t)),
                  (p.needsAnimating[t] = !0));
                const n = e.getValue(t);
                n && (n.liveStyle = !1);
              };
            for (const e in M) {
              const t = E[e],
                n = S[e];
              if (f.hasOwnProperty(e)) continue;
              let r = !1;
              ((r = Br(t) && Br(n) ? !bo(t, n) : t !== n),
                r
                  ? void 0 !== t && null !== t
                    ? C(e)
                    : d.add(e)
                  : void 0 !== t && d.has(e)
                    ? C(e)
                    : (p.protectedKeys[e] = !0));
            }
            ((p.prevProp = g),
              (p.prevResolvedValues = E),
              p.isActive && (f = s(s({}, f), E)),
              (r || a) && e.blockInitialAnimation && (w = !1));
            const F = b && x;
            w &&
              (!F || k) &&
              c.push(
                ...A.map((t) => {
                  const n = { type: m };
                  if (
                    "string" === typeof t &&
                    (r || a) &&
                    !F &&
                    e.manuallyAnimateOnMount &&
                    e.parent
                  ) {
                    const { parent: r } = e,
                      a = _r(r, t);
                    if (r.enteringChildren && a) {
                      const { delayChildren: t } = a.transition || {};
                      n.delay = po(r.enteringChildren, e, t);
                    }
                  }
                  return { animation: t, options: n };
                }),
              );
          }
          if (d.size) {
            const t = {};
            if ("boolean" !== typeof l.initial) {
              const n = _r(
                e,
                Array.isArray(l.initial) ? l.initial[0] : l.initial,
              );
              n && n.transition && (t.transition = n.transition);
            }
            (d.forEach((n) => {
              const r = e.getBaseTarget(n),
                a = e.getValue(n);
              (a && (a.liveStyle = !0),
                (t[n] = null !== r && void 0 !== r ? r : null));
            }),
              c.push({ animation: t }));
          }
          let m = Boolean(c.length);
          return (
            !r ||
              (!1 !== l.initial && l.initial !== l.animate) ||
              e.manuallyAnimateOnMount ||
              (m = !1),
            (r = !1),
            (a = !1),
            m ? t(c) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (t, r) {
            var a;
            if (n[t].isActive === r) return Promise.resolve();
            (null === (a = e.variantChildren) ||
              void 0 === a ||
              a.forEach((e) => {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r));
            const o = i(t);
            for (const e in n) n[e].protectedKeys = {};
            return o;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: () => n,
          reset: () => {
            ((n = Co()), (a = !0));
          },
        };
      }
      function So(e, t) {
        return "string" === typeof t
          ? t !== e
          : !!Array.isArray(t) && !bo(t, e);
      }
      function Mo() {
        return {
          isActive:
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function Co() {
        return {
          animate: Mo(!0),
          whileInView: Mo(),
          whileHover: Mo(),
          whileTap: Mo(),
          whileDrag: Mo(),
          whileFocus: Mo(),
          exit: Mo(),
        };
      }
      const Fo = ["transition", "transitionEnd"];
      let Po = 0;
      const To = {
          animation: {
            Feature: class extends zr {
              constructor(e) {
                (super(e), e.animationState || (e.animationState = Eo(e)));
              }
              updateAnimationControlsSubscription() {
                const { animate: e } = this.node.getProps();
                $t(e) && (this.unmountControls = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                const { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {
                var e;
                (this.node.animationState.reset(),
                  null === (e = this.unmountControls) ||
                    void 0 === e ||
                    e.call(this));
              }
            },
          },
          exit: {
            Feature: class extends zr {
              constructor() {
                (super(...arguments),
                  (this.id = Po++),
                  (this.isExitComplete = !1));
              }
              update() {
                if (!this.node.presenceContext) return;
                const { isPresent: e, onExitComplete: t } =
                    this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === n) return;
                if (e && !1 === n) {
                  if (this.isExitComplete) {
                    const { initial: e, custom: t } = this.node.getProps();
                    if ("string" === typeof e) {
                      const n = _r(this.node, e, t);
                      if (n) {
                        const { transition: e, transitionEnd: t } = n,
                          a = u(n, Fo);
                        for (const n in a) {
                          var r;
                          null === (r = this.node.getValue(n)) ||
                            void 0 === r ||
                            r.jump(a[n]);
                        }
                      }
                    }
                    (this.node.animationState.reset(),
                      this.node.animationState.animateChanges());
                  } else this.node.animationState.setActive("exit", !1);
                  return void (this.isExitComplete = !1);
                }
                const a = this.node.animationState.setActive("exit", !e);
                t &&
                  !e &&
                  a.then(() => {
                    ((this.isExitComplete = !0), t(this.id));
                  });
              }
              mount() {
                const { register: e, onExitComplete: t } =
                  this.node.presenceContext || {};
                (t && t(this.id), e && (this.unmount = e(this.id)));
              }
              unmount() {}
            },
          },
        },
        Vo = { x: !1, y: !1 };
      function Lo() {
        return Vo.x || Vo.y;
      }
      function No(e) {
        return [e("x"), e("y")];
      }
      function Do(e) {
        return e.max - e.min;
      }
      function Ho(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        ((e.origin = r),
          (e.originPoint = Mn(t.min, t.max, e.origin)),
          (e.scale = Do(n) / Do(t)),
          (e.translate = Mn(n.min, n.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0));
      }
      function jo(e, t, n, r) {
        (Ho(e.x, t.x, n.x, r ? r.originX : void 0),
          Ho(e.y, t.y, n.y, r ? r.originY : void 0));
      }
      function Zo(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const a = r ? Mn(n.min, n.max, r) : n.min;
        ((e.min = a + t.min), (e.max = e.min + Do(t)));
      }
      function zo(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const a = r ? Mn(n.min, n.max, r) : n.min;
        ((e.min = t.min - a), (e.max = e.min + Do(t)));
      }
      function _o(e, t, n, r) {
        (zo(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.x),
          zo(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.y));
      }
      const Ro = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
      const Oo = new Set(["INPUT", "SELECT", "TEXTAREA"]);
      function Io(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
      }
      function Bo(e) {
        return "object" === typeof e && null !== e;
      }
      function Uo(e) {
        return Bo(e) && "ownerSVGElement" in e;
      }
      function Wo(e, t, n) {
        if (null == e) return [];
        if (e instanceof EventTarget) return [e];
        if ("string" === typeof e) {
          var r;
          let a = document;
          t && (a = t.current);
          const o =
            null !== (r = null === n || void 0 === n ? void 0 : n[e]) &&
            void 0 !== r
              ? r
              : a.querySelectorAll(e);
          return o ? Array.from(o) : [];
        }
        return Array.from(e).filter((e) => null != e);
      }
      const qo = new WeakMap();
      let $o;
      const Yo = (e, t, n) => (r, a) =>
          a && a[0]
            ? a[0][e + "Size"]
            : Uo(r) && "getBBox" in r
              ? r.getBBox()[t]
              : r[n],
        Ko = Yo("inline", "width", "offsetWidth"),
        Qo = Yo("block", "height", "offsetHeight");
      function Go(e) {
        var t;
        let { target: n, borderBoxSize: r } = e;
        null === (t = qo.get(n)) ||
          void 0 === t ||
          t.forEach((e) => {
            e(n, {
              get width() {
                return Ko(n, r);
              },
              get height() {
                return Qo(n, r);
              },
            });
          });
      }
      function Xo(e) {
        e.forEach(Go);
      }
      function Jo(e, t) {
        $o ||
          ("undefined" !== typeof ResizeObserver &&
            ($o = new ResizeObserver(Xo)));
        const n = Wo(e);
        return (
          n.forEach((e) => {
            var n;
            let r = qo.get(e);
            (r || ((r = new Set()), qo.set(e, r)),
              r.add(t),
              null === (n = $o) || void 0 === n || n.observe(e));
          }),
          () => {
            n.forEach((e) => {
              const n = qo.get(e);
              var r;
              (null === n || void 0 === n || n.delete(t),
              null !== n && void 0 !== n && n.size) ||
                null === (r = $o) ||
                void 0 === r ||
                r.unobserve(e);
            });
          }
        );
      }
      const ei = new Set();
      let ti;
      function ni(e) {
        return (
          ei.add(e),
          ti ||
            ((ti = () => {
              const e = {
                get width() {
                  return window.innerWidth;
                },
                get height() {
                  return window.innerHeight;
                },
              };
              ei.forEach((t) => t(e));
            }),
            window.addEventListener("resize", ti)),
          () => {
            (ei.delete(e),
              ei.size ||
                "function" !== typeof ti ||
                (window.removeEventListener("resize", ti), (ti = void 0)));
          }
        );
      }
      function ri(e, t) {
        return "function" === typeof e ? ni(e) : Jo(e, t);
      }
      const ai = (e) =>
        "mouse" === e.pointerType
          ? "number" !== typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function oi(e) {
        return { point: { x: e.pageX, y: e.pageY } };
      }
      function ii(e, t, n, r) {
        return Io(
          e,
          t,
          (
            (e) => (t) =>
              ai(t) && e(t, oi(t))
          )(n),
          r,
        );
      }
      const li = (e) => {
          let { current: t } = e;
          return t ? t.ownerDocument.defaultView : null;
        },
        si = (e, t) => Math.abs(e - t);
      const ui = new Set(["auto", "scroll"]);
      class ci {
        constructor(e, t) {
          let {
            transformPagePoint: n,
            contextWindow: r = window,
            dragSnapToOrigin: a = !1,
            distanceThreshold: o = 3,
            element: i,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (e) => {
              this.handleScroll(e.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(window);
            }),
            (this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              this.lastRawMoveEventInfo &&
                (this.lastMoveEventInfo = di(
                  this.lastRawMoveEventInfo,
                  this.transformPagePoint,
                ));
              const e = hi(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n =
                  (function (e, t) {
                    const n = si(e.x, t.x),
                      r = si(e.y, t.y);
                    return Math.sqrt(n ** 2 + r ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!t && !n) return;
              const { point: r } = e,
                { timestamp: a } = Qe;
              this.history.push(s(s({}, r), {}, { timestamp: a }));
              const { onStart: o, onMove: i } = this.handlers;
              (t ||
                (o && o(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                i && i(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastRawMoveEventInfo = t),
                (this.lastMoveEventInfo = di(t, this.transformPagePoint)),
                Ye.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: r,
                resumeAnimation: a,
              } = this.handlers;
              if (
                ((!this.dragSnapToOrigin && this.startEvent) || (a && a()),
                !this.lastMoveEvent || !this.lastMoveEventInfo)
              )
                return;
              const o = hi(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : di(t, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && n && n(e, o), r && r(e, o));
            }),
            !ai(e))
          )
            return;
          ((this.dragSnapToOrigin = a),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.distanceThreshold = o),
            (this.contextWindow = r || window));
          const l = di(oi(e), this.transformPagePoint),
            { point: u } = l,
            { timestamp: c } = Qe;
          this.history = [s(s({}, u), {}, { timestamp: c })];
          const { onSessionStart: d } = t;
          (d && d(e, hi(l, this.history)),
            (this.removeListeners = Qr(
              ii(this.contextWindow, "pointermove", this.handlePointerMove),
              ii(this.contextWindow, "pointerup", this.handlePointerUp),
              ii(this.contextWindow, "pointercancel", this.handlePointerUp),
            )),
            i && this.startScrollTracking(i));
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t; ) {
            const e = getComputedStyle(t);
            ((ui.has(e.overflowX) || ui.has(e.overflowY)) &&
              this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
              (t = t.parentElement));
          }
          (this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY,
          }),
            window.addEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
            window.addEventListener("scroll", this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0,
              }),
                window.removeEventListener("scroll", this.onWindowScroll));
            }));
        }
        handleScroll(e) {
          const t = this.scrollPositions.get(e);
          if (!t) return;
          const n = e === window,
            r = n
              ? { x: window.scrollX, y: window.scrollY }
              : { x: e.scrollLeft, y: e.scrollTop },
            a = r.x - t.x,
            o = r.y - t.y;
          (0 === a && 0 === o) ||
            (n
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += a),
                (this.lastMoveEventInfo.point.y += o))
              : this.history.length > 0 &&
                ((this.history[0].x -= a), (this.history[0].y -= o)),
            this.scrollPositions.set(e, r),
            Ye.update(this.updatePoint, !0));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            Ke(this.updatePoint));
        }
      }
      function di(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function fi(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function hi(e, t) {
        let { point: n } = e;
        return {
          point: n,
          delta: fi(n, pi(t)),
          offset: fi(n, mi(t)),
          velocity: gi(t, 0.1),
        };
      }
      function mi(e) {
        return e[0];
      }
      function pi(e) {
        return e[e.length - 1];
      }
      function gi(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        let n = e.length - 1,
          r = null;
        const a = pi(e);
        for (; n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > dt(t))); )
          n--;
        if (!r) return { x: 0, y: 0 };
        r === e[0] &&
          e.length > 2 &&
          a.timestamp - r.timestamp > 2 * dt(t) &&
          (r = e[1]);
        const o = ft(a.timestamp - r.timestamp);
        if (0 === o) return { x: 0, y: 0 };
        const i = { x: (a.x - r.x) / o, y: (a.y - r.y) / o };
        return (i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i);
      }
      function vi(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function yi(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
          { min: n, max: r }
        );
      }
      const bi = 0.35;
      function xi(e, t, n) {
        return { min: wi(e, t), max: wi(e, n) };
      }
      function wi(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      const ki = new WeakMap();
      class Ai {
        constructor(e) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = e));
        }
        start(e) {
          let { snapToCursor: t = !1, distanceThreshold: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          const { dragSnapToOrigin: a } = this.getProps();
          this.panSession = new ci(
            e,
            {
              onSessionStart: (e) => {
                (t && this.snapToCursor(oi(e).point), this.stopAnimation());
              },
              onStart: (e, t) => {
                const {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: a,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === (o = n) || "y" === o
                      ? Vo[o]
                        ? null
                        : ((Vo[o] = !0),
                          () => {
                            Vo[o] = !1;
                          })
                      : Vo.x || Vo.y
                        ? null
                        : ((Vo.x = Vo.y = !0),
                          () => {
                            Vo.x = Vo.y = !1;
                          })),
                  !this.openDragLock)
                )
                  return;
                var o;
                ((this.latestPointerEvent = e),
                  (this.latestPanInfo = t),
                  (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  No((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (R.test(t)) {
                      const { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        const r = n.layout.layoutBox[e];
                        if (r) {
                          t = Do(r) * (parseFloat(t) / 100);
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  a && Ye.update(() => a(e, t), !1, !0),
                  $r(this.visualElement, "transform"));
                const { animationState: i } = this.visualElement;
                i && i.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                ((this.latestPointerEvent = e), (this.latestPanInfo = t));
                const {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: a,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openDragLock) return;
                const { offset: i } = t;
                if (r && null === this.currentDirection)
                  return (
                    (this.currentDirection = (function (e) {
                      let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 10,
                        n = null;
                      Math.abs(e.y) > t
                        ? (n = "y")
                        : Math.abs(e.x) > t && (n = "x");
                      return n;
                    })(i)),
                    void (
                      null !== this.currentDirection &&
                      a &&
                      a(this.currentDirection)
                    )
                  );
                (this.updateAxis("x", t.point, i),
                  this.updateAxis("y", t.point, i),
                  this.visualElement.render(),
                  o && Ye.update(() => o(e, t), !1, !0));
              },
              onSessionEnd: (e, t) => {
                ((this.latestPointerEvent = e),
                  (this.latestPanInfo = t),
                  this.stop(e, t),
                  (this.latestPointerEvent = null),
                  (this.latestPanInfo = null));
              },
              resumeAnimation: () => {
                const { dragSnapToOrigin: e } = this.getProps();
                (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
              },
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: a,
              distanceThreshold: n,
              contextWindow: li(this.visualElement),
              element: this.visualElement.current,
            },
          );
        }
        stop(e, t) {
          const n = e || this.latestPointerEvent,
            r = t || this.latestPanInfo,
            a = this.isDragging;
          if ((this.cancel(), !a || !r || !n)) return;
          const { velocity: o } = r;
          this.startAnimation(o);
          const { onDragEnd: i } = this.getProps();
          i && Ye.postRender(() => i(n, r));
        }
        cancel() {
          this.isDragging = !1;
          const { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1), this.endPanSession());
          const { dragPropagation: n } = this.getProps();
          (!n &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive("whileDrag", !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(),
            (this.panSession = void 0));
        }
        updateAxis(e, t, n) {
          const { drag: r } = this.getProps();
          if (!n || !Si(e, r, this.currentDirection)) return;
          const a = this.getAxisMotionValue(e);
          let o = this.originPoint[e] + n[e];
          (this.constraints &&
            this.constraints[e] &&
            (o = (function (e, t, n) {
              let { min: r, max: a } = t;
              return (
                void 0 !== r && e < r
                  ? (e = n ? Mn(r, e, n.min) : Math.max(e, r))
                  : void 0 !== a &&
                    e > a &&
                    (e = n ? Mn(a, e, n.max) : Math.min(e, a)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            a.set(o));
        }
        resolveConstraints() {
          var e;
          const { dragConstraints: t, dragElastic: n } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                  ? void 0
                  : e.layout,
            a = this.constraints;
          (t && Vr(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : (this.constraints =
                !(!t || !r) &&
                (function (e, t) {
                  let { top: n, left: r, bottom: a, right: o } = t;
                  return { x: vi(e.x, r, o), y: vi(e.y, n, a) };
                })(r.layoutBox, t)),
            (this.elastic = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : bi;
              return (
                !1 === e ? (e = 0) : !0 === e && (e = bi),
                { x: xi(e, "left", "right"), y: xi(e, "top", "bottom") }
              );
            })(n)),
            a !== this.constraints &&
              !Vr(t) &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              No((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    const n = {};
                    return (
                      void 0 !== t.min && (n.min = t.min - e.min),
                      void 0 !== t.max && (n.max = t.max - e.min),
                      n
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          const { dragConstraints: e, onMeasureDragConstraints: t } =
            this.getProps();
          if (!e || !Vr(e)) return !1;
          const n = e.current;
          be(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          const { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          const a = (function (e, t, n) {
            const r = Kn(e, n),
              { scroll: a } = t;
            return (a && (Wn(r.x, a.offset.x), Wn(r.y, a.offset.y)), r);
          })(n, r.root, this.visualElement.getTransformPagePoint());
          let o = (function (e, t) {
            return { x: yi(e.x, t.x), y: yi(e.y, t.y) };
          })(r.layout.layoutBox, a);
          if (t) {
            const e = t(
              (function (e) {
                let { x: t, y: n } = e;
                return { top: n.min, right: t.max, bottom: n.max, left: t.min };
              })(o),
            );
            ((this.hasMutatedConstraints = !!e), e && (o = Nn(e)));
          }
          return o;
        }
        startAnimation(e) {
          const {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: a,
              dragSnapToOrigin: o,
              onDragTransitionEnd: i,
            } = this.getProps(),
            l = this.constraints || {},
            u = No((i) => {
              if (!Si(i, t, this.currentDirection)) return;
              let u = (l && l[i]) || {};
              (!0 !== o && o !== i) || (u = { min: 0, max: 0 });
              const c = r ? 200 : 1e6,
                d = r ? 40 : 1e7,
                f = s(
                  s(
                    {
                      type: "inertia",
                      velocity: n ? e[i] : 0,
                      bounceStiffness: c,
                      bounceDamping: d,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10,
                    },
                    a,
                  ),
                  u,
                );
              return this.startAxisValueAnimation(i, f);
            });
          return Promise.all(u).then(i);
        }
        startAxisValueAnimation(e, t) {
          const n = this.getAxisMotionValue(e);
          return (
            $r(this.visualElement, e),
            n.start(co(e, n, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          No((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          const t = "_drag".concat(e.toUpperCase()),
            n = this.visualElement.getProps(),
            r = n[t];
          return (
            r ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0,
            )
          );
        }
        snapToCursor(e) {
          No((t) => {
            const { drag: n } = this.getProps();
            if (!Si(t, n, this.currentDirection)) return;
            const { projection: r } = this.visualElement,
              a = this.getAxisMotionValue(t);
            if (r && r.layout) {
              const { min: n, max: o } = r.layout.layoutBox[t],
                i = a.get() || 0;
              a.set(e[t] - Mn(n, o, 0.5) + i);
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!Vr(t) || !n || !this.constraints) return;
          this.stopAnimation();
          const r = { x: 0, y: 0 };
          No((e) => {
            const t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              const n = t.get();
              r[e] = (function (e, t) {
                let n = 0.5;
                const r = Do(e),
                  a = Do(t);
                return (
                  a > r
                    ? (n = _a(t.min, t.max - r, e.min))
                    : r > a && (n = _a(e.min, e.max - a, t.min)),
                  M(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          const { transformTemplate: a } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = a
            ? a({}, "")
            : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            No((t) => {
              if (!Si(t, e, null)) return;
              const n = this.getAxisMotionValue(t),
                { min: a, max: o } = this.constraints[t];
              n.set(Mn(a, o, r[t]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ki.set(this.visualElement, this);
          const e = this.visualElement.current,
            t = ii(e, "pointerdown", (t) => {
              const { drag: n, dragListener: r = !0 } = this.getProps(),
                a = t.target,
                o =
                  a !== e &&
                  (function (e) {
                    return Oo.has(e.tagName) || !0 === e.isContentEditable;
                  })(a);
              n && r && !o && this.start(t);
            });
          let n;
          const r = () => {
              const { dragConstraints: t } = this.getProps();
              Vr(t) &&
                t.current &&
                ((this.constraints = this.resolveRefConstraints()),
                n ||
                  (n = (function (e, t, n) {
                    const r = ri(e, Ei(n)),
                      a = ri(t, Ei(n));
                    return () => {
                      (r(), a());
                    };
                  })(e, t.current, () =>
                    this.scalePositionWithinConstraints(),
                  )));
            },
            { projection: a } = this.visualElement,
            o = a.addEventListener("measure", r);
          (a &&
            !a.layout &&
            (a.root && a.root.updateScroll(), a.updateLayout()),
            Ye.read(r));
          const i = Io(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            l = a.addEventListener("didUpdate", (e) => {
              let { delta: t, hasLayoutChanged: n } = e;
              this.isDragging &&
                n &&
                (No((e) => {
                  const n = this.getAxisMotionValue(e);
                  n &&
                    ((this.originPoint[e] += t[e].translate),
                    n.set(n.get() + t[e].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            (i(), t(), o(), l && l(), n && n());
          };
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: a = !1,
              dragElastic: o = bi,
              dragMomentum: i = !0,
            } = e;
          return s(
            s({}, e),
            {},
            {
              drag: t,
              dragDirectionLock: n,
              dragPropagation: r,
              dragConstraints: a,
              dragElastic: o,
              dragMomentum: i,
            },
          );
        }
      }
      function Ei(e) {
        let t = !0;
        return () => {
          t ? (t = !1) : e();
        };
      }
      function Si(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      const Mi = (e) => (t, n) => {
        e && Ye.update(() => e(t, n), !1, !0);
      };
      const Ci = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      let Fi = !1;
      class Pi extends e.Component {
        componentDidMount() {
          const {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: a } = e;
          (a &&
            (t.group && t.group.add(a),
            n && n.register && r && n.register(a),
            Fi && a.root.didUpdate(),
            a.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            a.setOptions(
              s(
                s({}, a.options),
                {},
                {
                  layoutDependency: this.props.layoutDependency,
                  onExitComplete: () => this.safeToRemove(),
                },
              ),
            )),
            (Ci.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          const {
              layoutDependency: t,
              visualElement: n,
              drag: r,
              isPresent: a,
            } = this.props,
            { projection: o } = n;
          return o
            ? ((o.isPresent = a),
              e.layoutDependency !== t &&
                o.setOptions(s(s({}, o.options), {}, { layoutDependency: t })),
              (Fi = !0),
              r || e.layoutDependency !== t || void 0 === t || e.isPresent !== a
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== a &&
                (a
                  ? o.promote()
                  : o.relegate() ||
                    Ye.postRender(() => {
                      const e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          const { visualElement: e, layoutAnchor: t } = this.props,
            { projection: n } = e;
          n &&
            ((n.options.layoutAnchor = t),
            n.root.didUpdate(),
            jt.postRender(() => {
              !n.currentAnimation && n.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          const {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = e;
          ((Fi = !0),
            r &&
              (r.scheduleCheckAfterUnmount(),
              t && t.group && t.group.remove(r),
              n && n.deregister && n.deregister(r)));
        }
        safeToRemove() {
          const { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function Ti(t) {
        const [n, r] = (function () {
            let t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            const n = (0, e.useContext)(yr);
            if (null === n) return [!0, null];
            const { isPresent: r, onExitComplete: a, register: o } = n,
              i = (0, e.useId)();
            (0, e.useEffect)(() => {
              if (t) return o(i);
            }, [t]);
            const l = (0, e.useCallback)(() => t && a && a(i), [i, a, t]);
            return !r && a ? [!1, l] : [!0];
          })(),
          a = (0, e.useContext)(er);
        return (0, w.jsx)(
          Pi,
          s(
            s({}, t),
            {},
            {
              layoutGroup: a,
              switchLayoutGroup: (0, e.useContext)(Tr),
              isPresent: n,
              safeToRemove: r,
            },
          ),
        );
      }
      function Vi(e, t) {
        const n = Rt.now(),
          r = (a) => {
            let { timestamp: o } = a;
            const i = o - n;
            i >= t && (Ke(r), e(i - t));
          };
        return (Ye.setup(r, !0), () => Ke(r));
      }
      const Li = [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
        Ni = Li.length,
        Di = (e) => ("string" === typeof e ? parseFloat(e) : e),
        Hi = (e) => "number" === typeof e || O.test(e);
      function ji(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      const Zi = _i(0, 0.5, Ha),
        zi = _i(0.5, 0.95, Be);
      function _i(e, t, n) {
        return (r) => (r < e ? 0 : r > t ? 1 : n(_a(e, t, r)));
      }
      function Ri(e, t) {
        ((e.min = t.min), (e.max = t.max));
      }
      function Oi(e, t) {
        (Ri(e.x, t.x), Ri(e.y, t.y));
      }
      function Ii(e, t) {
        ((e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin));
      }
      function Bi(e, t, n, r, a) {
        return (
          (e = _n((e -= t), 1 / n, r)),
          void 0 !== a && (e = _n(e, 1 / a, r)),
          e
        );
      }
      function Ui(e, t, n, r, a) {
        let [o, i, l] = n;
        !(function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            i =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          R.test(t) &&
            ((t = parseFloat(t)), (t = Mn(i.min, i.max, t / 100) - i.min));
          if ("number" !== typeof t) return;
          let l = Mn(o.min, o.max, r);
          (e === o && (l -= t),
            (e.min = Bi(e.min, t, n, l, a)),
            (e.max = Bi(e.max, t, n, l, a)));
        })(e, t[o], t[i], t[l], t.scale, r, a);
      }
      const Wi = ["x", "scaleX", "originX"],
        qi = ["y", "scaleY", "originY"];
      function $i(e, t, n, r) {
        (Ui(e.x, t, Wi, n ? n.x : void 0, r ? r.x : void 0),
          Ui(e.y, t, qi, n ? n.y : void 0, r ? r.y : void 0));
      }
      function Yi(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function Ki(e) {
        return Yi(e.x) && Yi(e.y);
      }
      function Qi(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function Gi(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function Xi(e, t) {
        return Gi(e.x, t.x) && Gi(e.y, t.y);
      }
      function Ji(e) {
        return Do(e.x) / Do(e.y);
      }
      function el(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      class tl {
        constructor() {
          this.members = [];
        }
        add(e) {
          ht(this.members, e);
          for (let t = this.members.length - 1; t >= 0; t--) {
            const n = this.members[t];
            if (n === e || n === this.lead || n === this.prevLead) continue;
            const r = n.instance;
            (r && !1 !== r.isConnected) ||
              n.snapshot ||
              (mt(this.members, n), n.unmount());
          }
          e.scheduleRender();
        }
        remove(e) {
          if (
            (mt(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            const e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
            var t;
            const e = this.members[n];
            if (
              !1 !== e.isPresent &&
              !1 !==
                (null === (t = e.instance) || void 0 === t
                  ? void 0
                  : t.isConnected)
            )
              return (this.promote(e), !0);
          }
          return !1;
        }
        promote(e, t) {
          const n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            (n.updateSnapshot(), e.scheduleRender());
            const { layoutDependency: a } = n.options,
              { layoutDependency: o } = e.options;
            var r;
            if (void 0 === a || a !== o)
              ((e.resumeFrom = n),
                t && (n.preserveOpacity = !0),
                n.snapshot &&
                  ((e.snapshot = n.snapshot),
                  (e.snapshot.latestValues =
                    n.animationValues || n.latestValues)),
                null !== (r = e.root) &&
                  void 0 !== r &&
                  r.isUpdating &&
                  (e.isLayoutDirty = !0));
            !1 === e.options.crossfade && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            var t, n, r, a, o;
            (null === (t = (n = e.options).onExitComplete) ||
              void 0 === t ||
              t.call(n),
              null === (r = e.resumingFrom) ||
                void 0 === r ||
                null === (a = (o = r.options).onExitComplete) ||
                void 0 === a ||
                a.call(o));
          });
        }
        scheduleRender() {
          this.members.forEach((e) => e.instance && e.scheduleRender(!1));
        }
        removeLeadSnapshot() {
          var e;
          null !== (e = this.lead) &&
            void 0 !== e &&
            e.snapshot &&
            (this.lead.snapshot = void 0);
        }
      }
      const nl = (e, t) => e.depth - t.depth;
      class rl {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (ht(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (mt(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(nl),
            (this.isDirty = !1),
            this.children.forEach(e));
        }
      }
      const al = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        ol = ["", "X", "Y", "Z"];
      let il = 0;
      function ll(e, t, n, r) {
        const { latestValues: a } = t;
        a[e] && ((n[e] = a[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
      }
      function sl(e) {
        if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
        const { visualElement: t } = e.options;
        if (!t) return;
        const n = Yr(t);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          const { layout: t, layoutId: r } = e.options;
          window.MotionCancelOptimisedAnimation(n, "transform", Ye, !(t || r));
        }
        const { parent: r } = e;
        r && !r.hasCheckedOptimisedAppear && sl(r);
      }
      function ul(e) {
        let {
          attachResizeListener: t,
          defaultParent: n,
          measureScroll: r,
          checkIsScrollRoot: a,
          resetTransform: o,
        } = e;
        return class {
          constructor() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null === n || void 0 === n
                    ? void 0
                    : n();
            ((this.id = il++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.layoutVersion = 0),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  qe.value &&
                    (al.nodes =
                      al.calculatedTargetDeltas =
                      al.calculatedProjections =
                        0),
                  this.nodes.forEach(fl),
                  this.nodes.forEach(wl),
                  this.nodes.forEach(kl),
                  this.nodes.forEach(hl),
                  qe.addProjectionMetrics && qe.addProjectionMetrics(al));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.linkedParentVersion = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = t ? t.root || t : this),
              (this.path = t ? [...t.path, t] : []),
              (this.parent = t),
              (this.depth = t ? t.depth + 1 : 0));
            for (let n = 0; n < this.path.length; n++)
              this.path[n].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rl());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new pt()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e) {
            const t = this.eventHandlers.get(e);
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
              a < n;
              a++
            )
              r[a - 1] = arguments[a];
            t && t.notify(...r);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(e) {
            if (this.instance) return;
            var n;
            ((this.isSVG = Uo(e) && !(Uo((n = e)) && "svg" === n.tagName)),
              (this.instance = e));
            const { layoutId: r, layout: a, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (a || r) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let n,
                r = 0;
              const a = () => (this.root.updateBlockedByResize = !1);
              (Ye.read(() => {
                r = window.innerWidth;
              }),
                t(e, () => {
                  const e = window.innerWidth;
                  e !== r &&
                    ((r = e),
                    (this.root.updateBlockedByResize = !0),
                    n && n(),
                    (n = Vi(a, 250)),
                    Ci.hasAnimatedSinceResize &&
                      ((Ci.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(xl)));
                }));
            }
            (r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                o &&
                (r || a) &&
                this.addEventListener("didUpdate", (e) => {
                  let {
                    delta: t,
                    hasLayoutChanged: n,
                    hasRelativeLayoutChanged: r,
                    layout: a,
                  } = e;
                  if (this.isTreeAnimationBlocked())
                    return (
                      (this.target = void 0),
                      void (this.relativeTarget = void 0)
                    );
                  const i =
                      this.options.transition || o.getDefaultTransition() || Fl,
                    {
                      onLayoutAnimationStart: l,
                      onLayoutAnimationComplete: u,
                    } = o.getProps(),
                    c = !this.targetLayout || !Xi(this.targetLayout, a),
                    d = !n && r;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    d ||
                    (n && (c || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0));
                    const e = s(
                      s({}, Ir(i, "layout")),
                      {},
                      { onPlay: l, onComplete: u },
                    );
                    ((o.shouldReduceMotion || this.options.layoutRoot) &&
                      ((e.delay = 0), (e.type = !1)),
                      this.startAnimation(e),
                      this.setAnimationOrigin(t, d));
                  } else
                    (n || xl(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete());
                  this.targetLayout = a;
                }));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            const e = this.getStack();
            (e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              Ke(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            this.isUpdateBlocked() ||
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(Al),
              this.animationId++);
          }
          getTransformTemplate() {
            const { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
              return void (
                this.options.onExitComplete && this.options.onExitComplete()
              );
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                sl(this),
              !this.root.isUpdating && this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let a = 0; a < this.path.length; a++) {
              const e = this.path[a];
              ((e.shouldResetTransform = !0),
                ("string" !== typeof e.latestValues.x &&
                  "string" !== typeof e.latestValues.y) ||
                  (e.isLayoutDirty = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1));
            }
            const { layoutId: t, layout: n } = this.options;
            if (void 0 === t && !n) return;
            const r = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate"));
          }
          update() {
            this.updateScheduled = !1;
            if (this.isUpdateBlocked()) {
              const e = this.updateBlockedByResize;
              return (
                this.unblockUpdate(),
                (this.updateBlockedByResize = !1),
                this.clearAllSnapshots(),
                e && this.nodes.forEach(gl),
                void this.nodes.forEach(pl)
              );
            }
            if (this.animationId <= this.animationCommitId)
              return void this.nodes.forEach(vl);
            ((this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(yl),
                  this.nodes.forEach(bl),
                  this.nodes.forEach(cl),
                  this.nodes.forEach(dl))
                : this.nodes.forEach(vl),
              this.clearAllSnapshots());
            const e = Rt.now();
            ((Qe.delta = M(0, 1e3 / 60, e - Qe.timestamp)),
              (Qe.timestamp = e),
              (Qe.isProcessing = !0),
              Ge.update.process(Qe),
              Ge.preRender.process(Qe),
              Ge.render.process(Qe),
              (Qe.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), jt.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(ml), this.sharedNodes.forEach(El));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              Ye.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            Ye.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                Do(this.snapshot.measuredBox.x) ||
                Do(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (!this.instance) return;
            if (
              (this.updateScroll(),
              (!this.options.alwaysMeasureLayout || !this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let n = 0; n < this.path.length; n++) {
                this.path[n].updateScroll();
              }
            const e = this.layout;
            ((this.layout = this.measure(!1)),
              this.layoutVersion++,
              this.layoutCorrected ||
                (this.layoutCorrected = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            const { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0,
              );
          }
          updateScroll() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "measure",
              t = Boolean(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t && this.instance)
            ) {
              const t = a(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!o) return;
            const e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !Ki(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              a = r !== this.prevTransformTemplateValue;
            e &&
              this.instance &&
              (t || jn(this.latestValues) || a) &&
              (o(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var r;
            return (
              e && (n = this.removeTransform(n)),
              Vl((r = n).x),
              Vl(r.y),
              {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            const { visualElement: t } = this.options;
            if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            const n = t.measureViewportBox();
            if (
              !(
                (null === (e = this.scroll) || void 0 === e
                  ? void 0
                  : e.wasRoot) || this.path.some(Nl)
              )
            ) {
              const { scroll: e } = this.root;
              e && (Wn(n.x, e.offset.x), Wn(n.y, e.offset.y));
            }
            return n;
          }
          removeElementScroll(e) {
            var t;
            const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            if (
              (Oi(n, e),
              null !== (t = this.scroll) && void 0 !== t && t.wasRoot)
            )
              return n;
            for (let r = 0; r < this.path.length; r++) {
              const t = this.path[r],
                { scroll: a, options: o } = t;
              t !== this.root &&
                a &&
                o.layoutScroll &&
                (a.wasRoot && Oi(n, e),
                Wn(n.x, a.offset.x),
                Wn(n.y, a.offset.y));
            }
            return n;
          }
          applyTransform(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = (arguments.length > 2 ? arguments[2] : void 0) || {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
            };
            Oi(n, e);
            for (let o = 0; o < this.path.length; o++) {
              var r;
              const e = this.path[o];
              (!t &&
                e.options.layoutScroll &&
                e.scroll &&
                e !== e.root &&
                (Wn(n.x, -e.scroll.offset.x), Wn(n.y, -e.scroll.offset.y)),
                jn(e.latestValues) &&
                  Yn(
                    n,
                    e.latestValues,
                    null === (r = e.layout) || void 0 === r
                      ? void 0
                      : r.layoutBox,
                  ));
            }
            var a;
            jn(this.latestValues) &&
              Yn(
                n,
                this.latestValues,
                null === (a = this.layout) || void 0 === a
                  ? void 0
                  : a.layoutBox,
              );
            return n;
          }
          removeTransform(e) {
            const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            Oi(t, e);
            for (let r = 0; r < this.path.length; r++) {
              var n;
              const e = this.path[r];
              if (!jn(e.latestValues)) continue;
              let a;
              (e.instance &&
                (Hn(e.latestValues) && e.updateSnapshot(),
                (a = ce()),
                Oi(a, e.measurePageBox())),
                $i(
                  t,
                  e.latestValues,
                  null === (n = e.snapshot) || void 0 === n
                    ? void 0
                    : n.layoutBox,
                  a,
                ));
            }
            return (jn(this.latestValues) && $i(t, this.latestValues), t);
          }
          setTargetDelta(e) {
            ((this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(e) {
            this.options = s(
              s(s({}, this.options), e),
              {},
              { crossfade: void 0 === e.crossfade || e.crossfade },
            );
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== Qe.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta() {
            var e;
            let t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            const n = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = n.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = n.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = n.isSharedProjectionDirty));
            const r = Boolean(this.resumingFrom) || this !== n;
            if (
              !(
                t ||
                (r && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null !== (e = this.parent) &&
                  void 0 !== e &&
                  e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            const { layout: a, layoutId: o } = this.options;
            if (!this.layout || (!a && !o)) return;
            this.resolvedRelativeTargetAt = Qe.timestamp;
            const i = this.getClosestProjectingParent();
            var l, s, u, c;
            (i &&
              this.linkedParentVersion !== i.layoutVersion &&
              !i.options.layoutRoot &&
              this.removeRelativeTarget(),
            this.targetDelta ||
              this.relativeTarget ||
              (!1 !== this.options.layoutAnchor && i && i.layout
                ? this.createRelativeTarget(
                    i,
                    this.layout.layoutBox,
                    i.layout.layoutBox,
                  )
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta) &&
              (this.target ||
                ((this.target = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.targetWithTransforms = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                })),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  (l = this.target),
                  (s = this.relativeTarget),
                  (u = this.relativeParent.target),
                  (c = this.options.layoutAnchor || void 0),
                  Zo(l.x, s.x, u.x, null === c || void 0 === c ? void 0 : c.x),
                  Zo(l.y, s.y, u.y, null === c || void 0 === c ? void 0 : c.y))
                : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? this.applyTransform(
                          this.layout.layoutBox,
                          !1,
                          this.target,
                        )
                      : Oi(this.target, this.layout.layoutBox),
                    In(this.target, this.targetDelta))
                  : Oi(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget &&
                ((this.attemptToResolveRelativeTarget = !1),
                !1 !== this.options.layoutAnchor &&
                i &&
                Boolean(i.resumingFrom) === Boolean(this.resumingFrom) &&
                !i.options.layoutScroll &&
                i.target &&
                1 !== this.animationProgress
                  ? this.createRelativeTarget(i, this.target, i.target)
                  : (this.relativeParent = this.relativeTarget = void 0)),
              qe.value && al.calculatedTargetDeltas++);
          }
          getClosestProjectingParent() {
            if (
              this.parent &&
              !Hn(this.parent.latestValues) &&
              !Zn(this.parent.latestValues)
            )
              return this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout,
            );
          }
          createRelativeTarget(e, t, n) {
            ((this.relativeParent = e),
              (this.linkedParentVersion = e.layoutVersion),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              }),
              (this.relativeTargetOrigin = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              }),
              _o(
                this.relativeTargetOrigin,
                t,
                n,
                this.options.layoutAnchor || void 0,
              ),
              Oi(this.relativeTarget, this.relativeTargetOrigin));
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0;
          }
          calcProjection() {
            var e;
            const t = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== t;
            let r = !0;
            if (
              ((this.isProjectionDirty ||
                (null !== (e = this.parent) &&
                  void 0 !== e &&
                  e.isProjectionDirty)) &&
                (r = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === Qe.timestamp && (r = !1),
              r)
            )
              return;
            const { layout: a, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation,
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || (!a && !o))
            )
              return;
            Oi(this.layoutCorrected, this.layout.layoutBox);
            const i = this.treeScale.x,
              l = this.treeScale.y;
            (!(function (e, t, n) {
              let r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              const a = n.length;
              if (!a) return;
              let o, i;
              t.x = t.y = 1;
              for (let s = 0; s < a; s++) {
                ((o = n[s]), (i = o.projectionDelta));
                const { visualElement: a } = o.options;
                var l;
                (a && a.props.style && "contents" === a.props.style.display) ||
                  (r &&
                    o.options.layoutScroll &&
                    o.scroll &&
                    o !== o.root &&
                    (Wn(e.x, -o.scroll.offset.x), Wn(e.y, -o.scroll.offset.y)),
                  i && ((t.x *= i.x.scale), (t.y *= i.y.scale), In(e, i)),
                  r &&
                    jn(o.latestValues) &&
                    Yn(
                      e,
                      o.latestValues,
                      null === (l = o.layout) || void 0 === l
                        ? void 0
                        : l.layoutBox,
                    ));
              }
              (t.x < Un && t.x > Bn && (t.x = 1),
                t.y < Un && t.y > Bn && (t.y = 1));
            })(this.layoutCorrected, this.treeScale, this.path, n),
              !t.layout ||
                t.target ||
                (1 === this.treeScale.x && 1 === this.treeScale.y) ||
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                })));
            const { target: s } = t;
            s
              ? (this.projectionDelta && this.prevProjectionDelta
                  ? (Ii(this.prevProjectionDelta.x, this.projectionDelta.x),
                    Ii(this.prevProjectionDelta.y, this.projectionDelta.y))
                  : this.createProjectionDeltas(),
                jo(
                  this.projectionDelta,
                  this.layoutCorrected,
                  s,
                  this.latestValues,
                ),
                (this.treeScale.x === i &&
                  this.treeScale.y === l &&
                  el(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                  el(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                  ((this.hasProjected = !0),
                  this.scheduleRender(),
                  this.notifyListeners("projectionUpdate", s)),
                qe.value && al.calculatedProjections++)
              : this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender() {
            var e;
            let t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              const e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = {
              x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            }),
              (this.projectionDelta = {
                x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              }),
              (this.projectionDeltaWithTransform = {
                x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              }));
          }
          setAnimationOrigin(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = this.snapshot,
              r = n ? n.latestValues : {},
              a = s({}, this.latestValues),
              o = {
                x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              };
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t));
            const i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = Boolean(
                l && !c && !0 === this.options.crossfade && !this.path.some(Cl),
              );
            let f;
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                const n = t / 1e3;
                (Sl(o.x, e.x, n),
                  Sl(o.y, e.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (_o(
                      i,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox,
                      this.options.layoutAnchor || void 0,
                    ),
                    (function (e, t, n, r) {
                      (Ml(e.x, t.x, n.x, r), Ml(e.y, t.y, n.y, r));
                    })(this.relativeTarget, this.relativeTargetOrigin, i, n),
                    f &&
                      (function (e, t) {
                        return Qi(e.x, t.x) && Qi(e.y, t.y);
                      })(this.relativeTarget, f) &&
                      (this.isProjectionDirty = !1),
                    f || (f = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                    Oi(f, this.relativeTarget)),
                  l &&
                    ((this.animationValues = a),
                    (function (e, t, n, r, a, o) {
                      var i, l;
                      if (a)
                        ((e.opacity = Mn(
                          0,
                          null !== (i = n.opacity) && void 0 !== i ? i : 1,
                          Zi(r),
                        )),
                          (e.opacityExit = Mn(
                            null !== (l = t.opacity) && void 0 !== l ? l : 1,
                            0,
                            zi(r),
                          )));
                      else if (o) {
                        var s, u;
                        e.opacity = Mn(
                          null !== (s = t.opacity) && void 0 !== s ? s : 1,
                          null !== (u = n.opacity) && void 0 !== u ? u : 1,
                          r,
                        );
                      }
                      for (let c = 0; c < Ni; c++) {
                        const a = Li[c];
                        let o = ji(t, a),
                          i = ji(n, a);
                        (void 0 === o && void 0 === i) ||
                          (o || (o = 0),
                          i || (i = 0),
                          0 === o || 0 === i || Hi(o) === Hi(i)
                            ? ((e[a] = Math.max(Mn(Di(o), Di(i), r), 0)),
                              (R.test(i) || R.test(o)) && (e[a] += "%"))
                            : (e[a] = i));
                      }
                      (t.rotate || n.rotate) &&
                        (e.rotate = Mn(t.rotate || 0, n.rotate || 0, r));
                    })(a, r, this.latestValues, n, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n));
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
          }
          startAnimation(e) {
            var t, n;
            (this.notifyListeners("animationStart"),
              null === (t = this.currentAnimation) || void 0 === t || t.stop(),
              null === (n = this.resumingFrom) ||
                void 0 === n ||
                null === (n = n.currentAnimation) ||
                void 0 === n ||
                n.stop(),
              this.pendingAnimation &&
                (Ke(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = Ye.update(() => {
                ((Ci.hasAnimatedSinceResize = !0),
                  Et.layout++,
                  this.motionValue || (this.motionValue = Ut(0)),
                  this.motionValue.jump(0, !1),
                  (this.currentAnimation = (function (e, t, n) {
                    const r = de(e) ? e : Ut(e);
                    return (r.start(co("", r, t, n)), r.animation);
                  })(
                    this.motionValue,
                    [0, 1e3],
                    s(
                      s({}, e),
                      {},
                      {
                        velocity: 0,
                        isSync: !0,
                        onUpdate: (t) => {
                          (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
                        },
                        onStop: () => {
                          Et.layout--;
                        },
                        onComplete: () => {
                          (Et.layout--,
                            e.onComplete && e.onComplete(),
                            this.completeAnimation());
                        },
                      },
                    ),
                  )),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            const e = this.getStack();
            (e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            const e = this.getLead();
            let {
              targetWithTransforms: t,
              target: n,
              layout: r,
              latestValues: a,
            } = e;
            if (t && n && r) {
              if (
                this !== e &&
                this.layout &&
                r &&
                Ll(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox,
                )
              ) {
                n = this.target || {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                };
                const t = Do(this.layout.layoutBox.x);
                ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
                const r = Do(this.layout.layoutBox.y);
                ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
              }
              (Oi(t, n),
                Yn(t, a),
                jo(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  a,
                ));
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new tl());
            this.sharedNodes.get(e).add(t);
            const n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            const e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            const { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            const { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            const { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote() {
            let {
              needsReset: e,
              transition: t,
              preserveFollowOpacity: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            const r = this.getStack();
            (r && r.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t }));
          }
          relegate() {
            const e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            const { visualElement: e } = this.options;
            if (!e) return;
            let t = !1;
            const { latestValues: n } = e;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (t = !0),
              !t)
            )
              return;
            const r = {};
            n.z && ll("z", e, r, this.animationValues);
            for (let a = 0; a < ol.length; a++)
              (ll("rotate".concat(ol[a]), e, r, this.animationValues),
                ll("skew".concat(ol[a]), e, r, this.animationValues));
            e.render();
            for (const a in r)
              (e.setStaticValue(a, r[a]),
                this.animationValues && (this.animationValues[a] = r[a]));
            e.scheduleRender();
          }
          applyProjectionStyles(e, t) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return void (e.visibility = "hidden");
            const n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (e.visibility = ""),
                (e.opacity = ""),
                (e.pointerEvents =
                  vr(null === t || void 0 === t ? void 0 : t.pointerEvents) ||
                  ""),
                void (e.transform = n ? n(this.latestValues, "") : "none")
              );
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target)
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    vr(null === t || void 0 === t ? void 0 : t.pointerEvents) ||
                    "")),
                void (
                  this.hasProjected &&
                  !jn(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1))
                )
              );
            e.visibility = "";
            const a = r.animationValues || r.latestValues;
            this.applyTransformsToTarget();
            let o = (function (e, t, n) {
              let r = "";
              const a = e.x.translate / t.x,
                o = e.y.translate / t.y,
                i = (null === n || void 0 === n ? void 0 : n.z) || 0;
              if (
                ((a || o || i) &&
                  (r = "translate3d("
                    .concat(a, "px, ")
                    .concat(o, "px, ")
                    .concat(i, "px) ")),
                (1 === t.x && 1 === t.y) ||
                  (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
                n)
              ) {
                const {
                  transformPerspective: e,
                  rotate: t,
                  rotateX: a,
                  rotateY: o,
                  skewX: i,
                  skewY: l,
                } = n;
                (e && (r = "perspective(".concat(e, "px) ").concat(r)),
                  t && (r += "rotate(".concat(t, "deg) ")),
                  a && (r += "rotateX(".concat(a, "deg) ")),
                  o && (r += "rotateY(".concat(o, "deg) ")),
                  i && (r += "skewX(".concat(i, "deg) ")),
                  l && (r += "skewY(".concat(l, "deg) ")));
              }
              const l = e.x.scale * t.x,
                s = e.y.scale * t.y;
              return (
                (1 === l && 1 === s) ||
                  (r += "scale(".concat(l, ", ").concat(s, ")")),
                r || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, a);
            (n && (o = n(a, o)), (e.transform = o));
            const { x: i, y: l } = this.projectionDelta;
            var s, u;
            ((e.transformOrigin = ""
              .concat(100 * i.origin, "% ")
              .concat(100 * l.origin, "% 0")),
            r.animationValues)
              ? (e.opacity =
                  r === this
                    ? null !==
                        (s =
                          null !== (u = a.opacity) && void 0 !== u
                            ? u
                            : this.latestValues.opacity) && void 0 !== s
                      ? s
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : a.opacityExit)
              : (e.opacity =
                  r === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                      ? a.opacityExit
                      : 0);
            for (const c in Fn) {
              if (void 0 === a[c]) continue;
              const { correct: t, applyTo: n, isCSSVariable: i } = Fn[c],
                l = "none" === o ? a[c] : t(a[c], r);
              if (n) {
                const t = n.length;
                for (let r = 0; r < t; r++) e[n[r]] = l;
              } else
                i
                  ? (this.options.visualElement.renderState.vars[c] = l)
                  : (e[c] = l);
            }
            this.options.layoutId &&
              (e.pointerEvents =
                r === this
                  ? vr(null === t || void 0 === t ? void 0 : t.pointerEvents) ||
                    ""
                  : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(pl),
              this.root.sharedNodes.clear());
          }
        };
      }
      function cl(e) {
        e.updateLayout();
      }
      function dl(e) {
        var t;
        const n =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          const { layoutBox: t, measuredBox: r } = e.layout,
            { animationType: a } = e.options,
            o = n.source !== e.layout.source;
          if ("size" === a)
            No((e) => {
              const r = o ? n.measuredBox[e] : n.layoutBox[e],
                a = Do(r);
              ((r.min = t[e].min), (r.max = r.min + a));
            });
          else if ("x" === a || "y" === a) {
            const e = "x" === a ? "y" : "x";
            Ri(o ? n.measuredBox[e] : n.layoutBox[e], t[e]);
          } else
            Ll(a, n.layoutBox, t) &&
              No((r) => {
                const a = o ? n.measuredBox[r] : n.layoutBox[r],
                  i = Do(t[r]);
                ((a.max = a.min + i),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[r].max = e.relativeTarget[r].min + i)));
              });
          const i = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          jo(i, t, n.layoutBox);
          const l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          o
            ? jo(l, e.applyTransform(r, !0), n.measuredBox)
            : jo(l, t, n.layoutBox);
          const s = !Ki(i);
          let u = !1;
          if (!e.resumeFrom) {
            const r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              const { snapshot: a, layout: o } = r;
              if (a && o) {
                const i = e.options.layoutAnchor || void 0,
                  l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                _o(l, n.layoutBox, a.layoutBox, i);
                const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                (_o(s, t, o.layoutBox, i),
                  Xi(l, s) || (u = !0),
                  r.options.layoutRoot &&
                    ((e.relativeTarget = s),
                    (e.relativeTargetOrigin = l),
                    (e.relativeParent = r)));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: l,
            layoutDelta: i,
            hasLayoutChanged: s,
            hasRelativeLayoutChanged: u,
          });
        } else if (e.isLead()) {
          const { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function fl(e) {
        (qe.value && al.nodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = Boolean(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty,
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty)));
      }
      function hl(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function ml(e) {
        e.clearSnapshot();
      }
      function pl(e) {
        e.clearMeasurements();
      }
      function gl(e) {
        ((e.isLayoutDirty = !0), e.updateLayout());
      }
      function vl(e) {
        e.isLayoutDirty = !1;
      }
      function yl(e) {
        e.isAnimationBlocked &&
          e.layout &&
          !e.isLayoutDirty &&
          ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
      }
      function bl(e) {
        const { visualElement: t } = e.options;
        (t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform());
      }
      function xl(e) {
        (e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0));
      }
      function wl(e) {
        e.resolveTargetDelta();
      }
      function kl(e) {
        e.calcProjection();
      }
      function Al(e) {
        e.resetSkewAndRotation();
      }
      function El(e) {
        e.removeLeadSnapshot();
      }
      function Sl(e, t, n) {
        ((e.translate = Mn(t.translate, 0, n)),
          (e.scale = Mn(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint));
      }
      function Ml(e, t, n, r) {
        ((e.min = Mn(t.min, n.min, r)), (e.max = Mn(t.max, n.max, r)));
      }
      function Cl(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      const Fl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        Pl = (e) =>
          "undefined" !== typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        Tl = Pl("applewebkit/") && !Pl("chrome/") ? Math.round : Be;
      function Vl(e) {
        ((e.min = Tl(e.min)), (e.max = Tl(e.max)));
      }
      function Ll(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e &&
            ((r = Ji(t)), (a = Ji(n)), (o = 0.2), !(Math.abs(r - a) <= o)))
        );
        var r, a, o;
      }
      function Nl(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      const Dl = ul({
          attachResizeListener: (e, t) => Io(e, "resize", t),
          measureScroll: () => {
            var e, t;
            return {
              x:
                document.documentElement.scrollLeft ||
                (null === (e = document.body) || void 0 === e
                  ? void 0
                  : e.scrollLeft) ||
                0,
              y:
                document.documentElement.scrollTop ||
                (null === (t = document.body) || void 0 === t
                  ? void 0
                  : t.scrollTop) ||
                0,
            };
          },
          checkIsScrollRoot: () => !0,
        }),
        Hl = { current: void 0 },
        jl = ul({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!Hl.current) {
              const e = new Dl({});
              (e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Hl.current = e));
            }
            return Hl.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            Boolean("fixed" === window.getComputedStyle(e).position),
        }),
        Zl = {
          pan: {
            Feature: class extends zr {
              constructor() {
                (super(...arguments), (this.removePointerDownListener = Be));
              }
              onPointerDown(e) {
                this.session = new ci(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: li(this.node),
                });
              }
              createPanHandlers() {
                const {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: n,
                  onPanEnd: r,
                } = this.node.getProps();
                return {
                  onSessionStart: Mi(e),
                  onStart: Mi(t),
                  onMove: Mi(n),
                  onEnd: (e, t) => {
                    (delete this.session, r && Ye.postRender(() => r(e, t)));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = ii(
                  this.node.current,
                  "pointerdown",
                  (e) => this.onPointerDown(e),
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                (this.removePointerDownListener(),
                  this.session && this.session.end());
              }
            },
          },
          drag: {
            Feature: class extends zr {
              constructor(e) {
                (super(e),
                  (this.removeGroupControls = Be),
                  (this.removeListeners = Be),
                  (this.controls = new Ai(e)));
              }
              mount() {
                const { dragControls: e } = this.node.getProps();
                (e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || Be));
              }
              update() {
                const { dragControls: e } = this.node.getProps(),
                  { dragControls: t } = this.node.prevProps || {};
                e !== t &&
                  (this.removeGroupControls(),
                  e && (this.removeGroupControls = e.subscribe(this.controls)));
              }
              unmount() {
                (this.removeGroupControls(),
                  this.removeListeners(),
                  this.controls.isDragging || this.controls.endPanSession());
              }
            },
            ProjectionNode: jl,
            MeasureLayout: Ti,
          },
        };
      function zl(e, t) {
        const n = Wo(e),
          r = new AbortController();
        return [
          n,
          s(s({ passive: !0 }, t), {}, { signal: r.signal }),
          () => r.abort(),
        ];
      }
      function _l(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const [r, a, o] = zl(e, n);
        return (
          r.forEach((e) => {
            let n,
              r = !1,
              o = !1;
            const i = (t) => {
                (n && (n(t), (n = void 0)),
                  e.removeEventListener("pointerleave", s));
              },
              l = (e) => {
                ((r = !1),
                  window.removeEventListener("pointerup", l),
                  window.removeEventListener("pointercancel", l),
                  o && ((o = !1), i(e)));
              },
              s = (e) => {
                "touch" !== e.pointerType && (r ? (o = !0) : i(e));
              };
            (e.addEventListener(
              "pointerenter",
              (r) => {
                if ("touch" === r.pointerType || Lo()) return;
                o = !1;
                const i = t(e, r);
                "function" === typeof i &&
                  ((n = i), e.addEventListener("pointerleave", s, a));
              },
              a,
            ),
              e.addEventListener(
                "pointerdown",
                () => {
                  ((r = !0),
                    window.addEventListener("pointerup", l, a),
                    window.addEventListener("pointercancel", l, a));
                },
                a,
              ));
          }),
          o
        );
      }
      function Rl(e, t, n) {
        const { props: r } = e;
        e.animationState &&
          r.whileHover &&
          e.animationState.setActive("whileHover", "Start" === n);
        const a = r["onHover" + n];
        a && Ye.postRender(() => a(t, oi(t)));
      }
      const Ol = (e, t) => !!t && (e === t || Ol(e, t.parentElement)),
        Il = new WeakSet();
      function Bl(e) {
        return (t) => {
          "Enter" === t.key && e(t);
        };
      }
      function Ul(e, t) {
        e.dispatchEvent(
          new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
        );
      }
      function Wl(e) {
        return ai(e) && !Lo();
      }
      const ql = new WeakSet();
      function $l(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const [r, a, o] = zl(e, n),
          i = (e) => {
            const r = e.currentTarget;
            if (!Wl(e)) return;
            if (ql.has(e)) return;
            (Il.add(r), n.stopPropagation && ql.add(e));
            const o = t(r, e),
              i = (e, t) => {
                (window.removeEventListener("pointerup", l),
                  window.removeEventListener("pointercancel", s),
                  Il.has(r) && Il.delete(r),
                  Wl(e) && "function" === typeof o && o(e, { success: t }));
              },
              l = (e) => {
                i(
                  e,
                  r === window ||
                    r === document ||
                    n.useGlobalTarget ||
                    Ol(r, e.target),
                );
              },
              s = (e) => {
                i(e, !1);
              };
            (window.addEventListener("pointerup", l, a),
              window.addEventListener("pointercancel", s, a));
          };
        return (
          r.forEach((e) => {
            var t;
            ((n.useGlobalTarget ? window : e).addEventListener(
              "pointerdown",
              i,
              a,
            ),
              Bo((t = e)) &&
                "offsetHeight" in t &&
                !("ownerSVGElement" in t) &&
                (e.addEventListener("focus", (e) =>
                  ((e, t) => {
                    const n = e.currentTarget;
                    if (!n) return;
                    const r = Bl(() => {
                      if (Il.has(n)) return;
                      Ul(n, "down");
                      const e = Bl(() => {
                        Ul(n, "up");
                      });
                      (n.addEventListener("keyup", e, t),
                        n.addEventListener("blur", () => Ul(n, "cancel"), t));
                    });
                    (n.addEventListener("keydown", r, t),
                      n.addEventListener(
                        "blur",
                        () => n.removeEventListener("keydown", r),
                        t,
                      ));
                  })(e, a),
                ),
                (function (e) {
                  return Ro.has(e.tagName) || !0 === e.isContentEditable;
                })(e) ||
                  e.hasAttribute("tabindex") ||
                  (e.tabIndex = 0)));
          }),
          o
        );
      }
      function Yl(e, t, n) {
        const { props: r } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled)
          return;
        e.animationState &&
          r.whileTap &&
          e.animationState.setActive("whileTap", "Start" === n);
        const a = r["onTap" + ("End" === n ? "" : n)];
        a && Ye.postRender(() => a(t, oi(t)));
      }
      const Kl = ["root"],
        Ql = new WeakMap(),
        Gl = new WeakMap(),
        Xl = (e) => {
          const t = Ql.get(e.target);
          t && t(e);
        },
        Jl = (e) => {
          e.forEach(Xl);
        };
      function es(e, t, n) {
        const r = (function (e) {
          let { root: t } = e,
            n = u(e, Kl);
          const r = t || document;
          Gl.has(r) || Gl.set(r, {});
          const a = Gl.get(r),
            o = JSON.stringify(n);
          return (
            a[o] || (a[o] = new IntersectionObserver(Jl, s({ root: t }, n))),
            a[o]
          );
        })(t);
        return (
          Ql.set(e, n),
          r.observe(e),
          () => {
            (Ql.delete(e), r.unobserve(e));
          }
        );
      }
      const ts = { some: 0, all: 1 };
      const ns = {
          inView: {
            Feature: class extends zr {
              constructor() {
                (super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1));
              }
              startObserver() {
                var e;
                null === (e = this.stopObserver) ||
                  void 0 === e ||
                  e.call(this);
                const { viewport: t = {} } = this.node.getProps(),
                  { root: n, margin: r, amount: a = "some", once: o } = t,
                  i = {
                    root: n ? n.current : void 0,
                    rootMargin: r,
                    threshold: "number" === typeof a ? a : ts[a],
                  };
                this.stopObserver = es(this.node.current, i, (e) => {
                  const { isIntersecting: t } = e;
                  if (this.isInView === t) return;
                  if (((this.isInView = t), o && !t && this.hasEnteredView))
                    return;
                  (t && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", t));
                  const { onViewportEnter: n, onViewportLeave: r } =
                      this.node.getProps(),
                    a = t ? n : r;
                  a && a(e);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" === typeof IntersectionObserver) return;
                const { props: e, prevProps: t } = this.node,
                  n = ["amount", "margin", "root"].some(
                    (function (e) {
                      let { viewport: t = {} } = e,
                        { viewport: n = {} } =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      return (e) => t[e] !== n[e];
                    })(e, t),
                  );
                n && this.startObserver();
              }
              unmount() {
                var e;
                (null === (e = this.stopObserver) ||
                  void 0 === e ||
                  e.call(this),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1));
              }
            },
          },
          tap: {
            Feature: class extends zr {
              mount() {
                const { current: e } = this.node;
                if (!e) return;
                const { globalTapTarget: t, propagate: n } = this.node.props;
                this.unmount = $l(
                  e,
                  (e, t) => (
                    Yl(this.node, t, "Start"),
                    (e, t) => {
                      let { success: n } = t;
                      return Yl(this.node, e, n ? "End" : "Cancel");
                    }
                  ),
                  {
                    useGlobalTarget: t,
                    stopPropagation:
                      !1 === (null === n || void 0 === n ? void 0 : n.tap),
                  },
                );
              }
              unmount() {}
            },
          },
          focus: {
            Feature: class extends zr {
              constructor() {
                (super(...arguments), (this.isActive = !1));
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (p) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = Qr(
                  Io(this.node.current, "focus", () => this.onFocus()),
                  Io(this.node.current, "blur", () => this.onBlur()),
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends zr {
              mount() {
                const { current: e } = this.node;
                e &&
                  (this.unmount = _l(
                    e,
                    (e, t) => (
                      Rl(this.node, t, "Start"),
                      (e) => Rl(this.node, e, "End")
                    ),
                  ));
              }
              unmount() {}
            },
          },
        },
        rs = { layout: { ProjectionNode: jl, MeasureLayout: Ti } },
        as = Zr(s(s(s(s({}, To), ns), Zl), rs), Jn),
        os = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,128l-72,72V56Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z",
              }),
            ),
          ],
        ]),
        is = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: os })),
        );
      is.displayName = "ArrowRightIcon";
      const ls = is,
        ss = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M200,144l-72,72L56,144Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z",
              }),
            ),
          ],
        ]),
        us = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: ss })),
        );
      us.displayName = "ArrowDownIcon";
      const cs = us,
        ds = () =>
          (0, w.jsxs)("section", {
            "data-testid": "hero-section",
            className:
              "relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
            children: [
              (0, w.jsx)("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(109,93,251,0.15)_0%,transparent_70%)] pointer-events-none",
              }),
              (0, w.jsx)("div", {
                className:
                  "absolute top-1/4 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(109,93,251,0.08)_0%,transparent_70%)] pointer-events-none",
              }),
              (0, w.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10",
                children: [
                  (0, w.jsxs)(as.div, {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    children: [
                      (0, w.jsx)("p", {
                        className:
                          "uppercase tracking-[0.2em] text-xs md:text-sm text-[#6D5DFB] font-medium mb-6",
                        children: "Software \xb7 IA \xb7 Automatizaci\xf3n",
                      }),
                      (0, w.jsx)("h1", {
                        className:
                          "font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-white max-w-5xl mx-auto",
                        children: "Construimos sistemas que escalan empresas.",
                      }),
                      (0, w.jsx)("p", {
                        className:
                          "mt-6 md:mt-8 text-base md:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed",
                        children:
                          "Software, automatizaci\xf3n con IA y productos digitales escalables desde Chile para Latinoam\xe9rica.",
                      }),
                    ],
                  }),
                  (0, w.jsxs)(as.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    className:
                      "flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12",
                    children: [
                      (0, w.jsxs)("a", {
                        href: x,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-testid": "hero-cta-primary",
                        className:
                          "inline-flex items-center gap-2 bg-[#6D5DFB] text-white font-medium rounded-full px-8 py-3.5 hover:bg-[#5a4ae2] transition-all duration-300 shadow-[0_0_24px_rgba(109,93,251,0.35)] hover:shadow-[0_0_40px_rgba(109,93,251,0.55)] text-sm md:text-base",
                        children: [
                          "Agenda una sesi\xf3n estrat\xe9gica",
                          (0, w.jsx)(ls, { size: 18, weight: "bold" }),
                        ],
                      }),
                      (0, w.jsxs)("a", {
                        href: "#capacidades",
                        "data-testid": "hero-cta-secondary",
                        className:
                          "inline-flex items-center gap-2 bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 rounded-full px-8 py-3.5 font-medium text-sm md:text-base",
                        children: [
                          "Explorar ecosistema",
                          (0, w.jsx)(cs, { size: 18, weight: "bold" }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.jsx)(as.p, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.8, delay: 0.6 },
                    className:
                      "mt-12 md:mt-16 text-xs md:text-sm text-[#A1A1AA]/70 max-w-xl mx-auto",
                    children:
                      "Dise\xf1ado para startups, ventures y empresas que necesitan infraestructura digital escalable.",
                  }),
                ],
              }),
            ],
          });
      var fs = n(818);
      const hs = (e) => {
          let { children: t, className: n = "", delay: r = 0 } = e;
          return (0, w.jsx)(as.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-60px" },
            transition: { duration: 0.6, delay: r, ease: [0.22, 1, 0.36, 1] },
            className: n,
            children: t,
          });
        },
        ms = [
          "Software",
          "Inteligencia Artificial",
          "Apps M\xf3viles",
          "SaaS",
          "Automatizaci\xf3n",
          "Dashboards",
          "Venture Building",
        ],
        ps = () =>
          (0, w.jsx)(hs, {
            children: (0, w.jsx)("section", {
              "data-testid": "badges-section",
              className: "py-16 md:py-20 border-y border-white/[0.06]",
              children: (0, w.jsx)(fs.A, {
                speed: 40,
                gradient: !1,
                pauseOnHover: !0,
                children: ms.map((e, t) =>
                  (0, w.jsxs)(
                    "span",
                    {
                      className:
                        "mx-6 md:mx-10 text-xs md:text-sm uppercase tracking-[0.25em] text-[#A1A1AA]/60 font-medium whitespace-nowrap",
                      children: [
                        e,
                        (0, w.jsx)("span", {
                          className: "ml-6 md:ml-10 text-[#6D5DFB]/40",
                          children: "\xb7",
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            }),
          }),
        gs = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M240,128l-48,40H64L16,128,64,88H192Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z",
              }),
            ),
          ],
        ]),
        vs = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: gs })),
        );
      vs.displayName = "CodeIcon";
      const ys = vs,
        bs = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M200,56H56A24,24,0,0,0,32,80V192a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56ZM164,184H92a20,20,0,0,1,0-40h72a20,20,0,0,1,0,40Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Zm4,28H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M200,50H134V16a6,6,0,0,0-12,0V50H56A30,30,0,0,0,26,80V192a30,30,0,0,0,30,30H200a30,30,0,0,0,30-30V80A30,30,0,0,0,200,50Zm18,142a18,18,0,0,1-18,18H56a18,18,0,0,1-18-18V80A18,18,0,0,1,56,62H200a18,18,0,0,1,18,18ZM74,108a10,10,0,1,1,10,10A10,10,0,0,1,74,108Zm88,0a10,10,0,1,1,10,10A10,10,0,0,1,162,108Zm2,30H92a26,26,0,0,0,0,52h72a26,26,0,0,0,0-52Zm-22,12v28H114V150ZM78,164a14,14,0,0,1,14-14h10v28H92A14,14,0,0,1,78,164Zm86,14H154V150h10a14,14,0,0,1,0,28Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M200,52H132V16a4,4,0,0,0-8,0V52H56A28,28,0,0,0,28,80V192a28,28,0,0,0,28,28H200a28,28,0,0,0,28-28V80A28,28,0,0,0,200,52Zm20,140a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V80A20,20,0,0,1,56,60H200a20,20,0,0,1,20,20ZM76,108a8,8,0,1,1,8,8A8,8,0,0,1,76,108Zm88,0a8,8,0,1,1,8,8A8,8,0,0,1,164,108Zm0,32H92a24,24,0,0,0,0,48h72a24,24,0,0,0,0-48Zm-20,8v32H112V148ZM76,164a16,16,0,0,1,16-16h12v32H92A16,16,0,0,1,76,164Zm88,16H152V148h12a16,16,0,0,1,0,32Z",
              }),
            ),
          ],
        ]),
        xs = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: bs })),
        );
      xs.displayName = "RobotIcon";
      const ws = xs,
        ks = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V92H44V60ZM44,116H92v80H44Zm72,80V116h96v80Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M104,104V208H40a8,8,0,0,1-8-8V104Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V96H40ZM216,200H112V112H216v88Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V98H38V56A2,2,0,0,1,40,54ZM38,200V110H98v92H40A2,2,0,0,1,38,200Zm178,2H110V110H218v90A2,2,0,0,1,216,202Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4v44H36V56A4,4,0,0,1,40,52ZM36,200V108h64v96H40A4,4,0,0,1,36,200Zm180,4H108V108H220v92A4,4,0,0,1,216,204Z",
              }),
            ),
          ],
        ]),
        As = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: ks })),
        );
      As.displayName = "LayoutIcon";
      const Es = As,
        Ss = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12ZM76,76H180V180H76Zm4-40h96a4,4,0,0,1,4,4V52H76V40A4,4,0,0,1,80,36Zm96,184H80a4,4,0,0,1-4-4V204H180v12A4,4,0,0,1,176,220Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M192,56V200H64V56Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM80,32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20ZM68,60H188V196H68ZM80,28h96a12,12,0,0,1,12,12V52H68V40A12,12,0,0,1,80,28Zm96,200H80a12,12,0,0,1-12-12V204H188v12A12,12,0,0,1,176,228Z",
              }),
            ),
          ],
        ]),
        Ms = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Ss })),
        );
      Ms.displayName = "DeviceMobileIcon";
      const Cs = Ms,
        Fs = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,40V208H152V40Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,204H212V40a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V84H96a4,4,0,0,0-4,4v44H48a4,4,0,0,0-4,4v68H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM156,44h48V204H156ZM100,92h48V204H100ZM52,140H92v64H52Z",
              }),
            ),
          ],
        ]),
        Ps = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Fs })),
        );
      Ps.displayName = "ChartBarIcon";
      const Ts = Ps,
        Vs = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M156,228a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,228ZM128,116a16,16,0,1,0-16-16A16,16,0,0,0,128,116Zm99.53,40.7-12.36,55.63a19.9,19.9,0,0,1-12.88,14.53A20.16,20.16,0,0,1,195.6,228a19.87,19.87,0,0,1-12.29-4.27L157.17,204H98.83L72.69,223.74A19.87,19.87,0,0,1,60.4,228a20.16,20.16,0,0,1-6.69-1.15,19.9,19.9,0,0,1-12.88-14.53L28.47,156.7a20.1,20.1,0,0,1,4.16-17.14l27.83-33.4A127,127,0,0,1,69.11,69.7c13.27-33.25,37-54.1,46.64-61.52a20,20,0,0,1,24.5,0c9.6,7.42,33.37,28.27,46.64,61.52a127,127,0,0,1,8.65,36.46l27.83,33.4A20.1,20.1,0,0,1,227.53,156.7ZM101.79,180h52.42c19.51-35.7,23-69.78,10.39-101.4C154.4,53,136.2,35.9,128,29.12,119.8,35.9,101.6,53,91.4,78.6,78.78,110.22,82.28,144.3,101.79,180Zm-22.55,8.72a168,168,0,0,1-16.92-47.3l-10,12,10.58,47.64Zm124.43-35.31-10-12a168,168,0,0,1-16.92,47.3l16.33,12.33Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224Zm71.62-68.17-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83Zm-139.23,34Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM140,100a12,12,0,1,0-12,12A12,12,0,0,0,140,100Zm68,52.36-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M150,224a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,224ZM128,110a10,10,0,1,0-10-10A10,10,0,0,0,128,110Zm93.67,45.4L209.31,211A14,14,0,0,1,187,219l-27.79-21H96.82L69,219a14,14,0,0,1-22.34-8L34.33,155.4a14.06,14.06,0,0,1,2.91-12l29-34.76a121.28,121.28,0,0,1,8.48-36.71c12.72-31.88,35.52-51.88,44.73-59a14,14,0,0,1,17.16,0c9.21,7.12,32,27.12,44.73,59a121.28,121.28,0,0,1,8.48,36.71l29,34.76A14.06,14.06,0,0,1,221.67,155.4ZM98.26,186h59.48c21.93-38.46,26.12-75.33,12.43-109.62-11.95-30-34.35-48.87-40.93-54a2,2,0,0,0-2.48,0c-6.58,5.09-29,24-40.93,54C72.14,110.67,76.33,147.54,98.26,186ZM87,190.4c-12-21.49-18.9-42.6-20.62-63.19L46.46,151.08a2,2,0,0,0-.42,1.71l12.37,55.64a2,2,0,0,0,3.2,1.13l.13-.11Zm122.57-39.32-19.89-23.87c-1.72,20.59-8.6,41.7-20.62,63.19l25.23,19,.13.11a2,2,0,0,0,3.2-1.13L210,152.79A2,2,0,0,0,209.54,151.08Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M148,224a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,224ZM128,108a8,8,0,1,0-8-8A8,8,0,0,0,128,108Zm91.72,47L207.35,210.6a11.9,11.9,0,0,1-7.72,8.71,12.17,12.17,0,0,1-4,.69,11.94,11.94,0,0,1-7.43-2.6L159.85,196H96.15L67.81,217.4a11.94,11.94,0,0,1-7.43,2.6,12.17,12.17,0,0,1-4-.69,11.9,11.9,0,0,1-7.72-8.71L36.28,155a12,12,0,0,1,2.5-10.28l29.35-35.23c3.3-53.33,41.83-86.68,52.52-94.94a12,12,0,0,1,14.7,0c10.69,8.26,49.22,41.61,52.52,94.94l29.35,35.23A12,12,0,0,1,219.72,155ZM97.11,188h61.78C214.07,92.49,145,32.05,130.46,20.84a4,4,0,0,0-4.92,0C111,32.05,41.93,92.49,97.11,188Zm-7.52,2.93C75.12,165.56,68.93,142.52,68,122.06L44.92,149.8a4,4,0,0,0-.83,3.43l12.36,55.63a4,4,0,0,0,6.41,2.26l.09-.07ZM211.08,149.8,188,122.06c-.89,20.46-7.08,43.5-21.55,68.87l26.64,20.12.09.07a4,4,0,0,0,6.41-2.26l12.36-55.63A4,4,0,0,0,211.08,149.8Z",
              }),
            ),
          ],
        ]),
        Ls = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Vs })),
        );
      Ls.displayName = "RocketIcon";
      const Ns = [
          {
            icon: ys,
            title: "Ingenier\xeda de software",
            description:
              "Arquitecturas robustas, APIs escalables y c\xf3digo de calidad enterprise para productos que crecen.",
          },
          {
            icon: ws,
            title: "Automatizaci\xf3n con IA",
            description:
              "Integramos inteligencia artificial en flujos de negocio para eliminar tareas repetitivas y escalar operaciones.",
          },
          {
            icon: Es,
            title: "UX systems",
            description:
              "Sistemas de dise\xf1o coherentes que aceleran el desarrollo y garantizan experiencias consistentes.",
          },
          {
            icon: Cs,
            title: "Apps m\xf3viles",
            description:
              "Aplicaciones nativas y cross-platform con rendimiento \xf3ptimo y experiencias fluidas.",
          },
          {
            icon: Ts,
            title: "Dashboards y datos",
            description:
              "Paneles de control inteligentes que transforman datos en decisiones de negocio accionables.",
          },
          {
            icon: Ls,
            title: "Venture building",
            description:
              "Acompa\xf1amos la creaci\xf3n de productos digitales desde la idea hasta su lanzamiento y escalamiento.",
          },
        ],
        Ds = () =>
          (0, w.jsx)("section", {
            id: "capacidades",
            "data-testid": "capabilities-section",
            className: "py-24 sm:py-32",
            children: (0, w.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6 lg:px-8",
              children: [
                (0, w.jsxs)(hs, {
                  children: [
                    (0, w.jsx)("p", {
                      className:
                        "uppercase tracking-[0.2em] text-xs text-[#6D5DFB] font-medium mb-4",
                      children: "Capacidades",
                    }),
                    (0, w.jsx)("h2", {
                      className:
                        "font-['Outfit'] text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl",
                      children:
                        "Soluciones completas para cada desaf\xedo digital",
                    }),
                  ],
                }),
                (0, w.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14",
                  children: Ns.map((e, t) =>
                    (0, w.jsx)(
                      hs,
                      {
                        delay: 0.08 * t,
                        children: (0, w.jsxs)("div", {
                          "data-testid": "capability-card-".concat(t),
                          className:
                            "group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#6D5DFB]/40 transition-all duration-300 rounded-2xl p-8 relative overflow-hidden hover:-translate-y-1",
                          children: [
                            (0, w.jsx)("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-br from-[#6D5DFB]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            }),
                            (0, w.jsxs)("div", {
                              className: "relative z-10",
                              children: [
                                (0, w.jsx)(e.icon, {
                                  size: 32,
                                  weight: "duotone",
                                  className: "text-[#6D5DFB] mb-5",
                                }),
                                (0, w.jsx)("h3", {
                                  className:
                                    "font-['Outfit'] text-lg font-semibold text-white mb-3",
                                  children: e.title,
                                }),
                                (0, w.jsx)("p", {
                                  className:
                                    "text-sm text-[#A1A1AA] leading-relaxed",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.title,
                    ),
                  ),
                }),
              ],
            }),
          }),
        Hs = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z",
              }),
            ),
          ],
        ]),
        js = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Hs })),
        );
      js.displayName = "MagnifyingGlassIcon";
      const Zs = js,
        zs = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H164V180h16a12,12,0,0,0,0-24H164V140h16a12,12,0,0,0,0-24H164V100h16a12,12,0,0,0,0-24H164V52h40ZM80.49,23.51a12,12,0,0,0-17,0l-32,32A12,12,0,0,0,28,64V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V64a12,12,0,0,0-3.51-8.49ZM52,92H92v72H52ZM72,49,91,68H53ZM52,204V188H92v16Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M40,184h64v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8ZM208,40H160a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M208,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H160V176h24a8,8,0,0,0,0-16H160V136h24a8,8,0,0,0,0-16H160V96h24a8,8,0,0,0,0-16H160V48h48V208ZM77.66,26.34a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,32,64V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V64a8,8,0,0,0-2.34-5.66ZM48,176V80H64v96ZM80,80H96v96H80ZM72,43.31,92.69,64H51.31ZM48,208V192H96v16Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V180a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V140a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,183.73,80H148a4,4,0,0,1-4-4V48a16,16,0,0,1,16-16h48A16,16,0,0,1,224,48ZM109.66,58.34A8,8,0,0,1,112,64V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64a8,8,0,0,1,2.34-5.66l32-32a8,8,0,0,1,11.32,0ZM48,80V184H64V80Zm32,0V184H96V80ZM51.31,64H92.69L72,43.31Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V174h26a6,6,0,0,0,0-12H158V134h26a6,6,0,0,0,0-12H158V94h26a6,6,0,0,0,0-12H158V48a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM76.24,27.76a6,6,0,0,0-8.48,0l-32,32A6,6,0,0,0,34,64V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V64a6,6,0,0,0-1.76-4.24ZM46,178V78H66V178ZM78,78H98V178H78ZM72,40.49,97.51,66h-51ZM96,210H48a2,2,0,0,1-2-2V190H98v18A2,2,0,0,1,96,210Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H160V176h24a8,8,0,0,0,0-16H160V136h24a8,8,0,0,0,0-16H160V96h24a8,8,0,0,0,0-16H160V48h48V208ZM77.66,26.34a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,32,64V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V64a8,8,0,0,0-2.34-5.66ZM48,176V80H64v96ZM80,80H96v96H80ZM72,43.31,92.69,64H51.31ZM48,208V192H96v16Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V172h28a4,4,0,0,0,0-8H156V132h28a4,4,0,0,0,0-8H156V92h28a4,4,0,0,0,0-8H156V48a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM74.83,29.17a4,4,0,0,0-5.66,0l-32,32A4,4,0,0,0,36,64V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V64a4,4,0,0,0-1.17-2.83ZM44,76H68V180H44Zm56,132a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V188h56Zm0-28H76V76h24Zm0-112H44V65.66l28-28,28,28Z",
              }),
            ),
          ],
        ]),
        _s = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: zs })),
        );
      _s.displayName = "PencilRulerIcon";
      const Rs = _s,
        Os = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z",
              }),
            ),
          ],
        ]),
        Is = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Os })),
        );
      Is.displayName = "WrenchIcon";
      const Bs = [
          {
            num: "01",
            icon: Zs,
            title: "Diagn\xf3stico estrat\xe9gico",
            description:
              "Analizamos tu negocio, procesos y objetivos para definir una hoja de ruta t\xe9cnica alineada con tus metas reales.",
          },
          {
            num: "02",
            icon: Rs,
            title: "Arquitectura y dise\xf1o",
            description:
              "Dise\xf1amos la arquitectura del sistema, flujos de usuario y stack tecnol\xf3gico \xf3ptimo para tu caso espec\xedfico.",
          },
          {
            num: "03",
            icon: Is,
            title: "Construcci\xf3n y escalado",
            description:
              "Desarrollamos en ciclos \xe1giles con entregas incrementales, validaci\xf3n continua y preparaci\xf3n para escalar.",
          },
        ],
        Us = () =>
          (0, w.jsx)("section", {
            id: "proceso",
            "data-testid": "how-we-work-section",
            className: "py-24 sm:py-32",
            children: (0, w.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6 lg:px-8",
              children: [
                (0, w.jsxs)(hs, {
                  children: [
                    (0, w.jsx)("p", {
                      className:
                        "uppercase tracking-[0.2em] text-xs text-[#6D5DFB] font-medium mb-4",
                      children: "Proceso",
                    }),
                    (0, w.jsx)("h2", {
                      className:
                        "font-['Outfit'] text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl",
                      children: "C\xf3mo trabajamos",
                    }),
                  ],
                }),
                (0, w.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14",
                  children: Bs.map((e, t) =>
                    (0, w.jsx)(
                      hs,
                      {
                        delay: 0.1 * t,
                        children: (0, w.jsxs)("div", {
                          "data-testid": "process-card-".concat(t),
                          className:
                            "group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#6D5DFB]/40 transition-all duration-300 rounded-2xl p-8 overflow-hidden hover:-translate-y-1",
                          children: [
                            (0, w.jsx)("span", {
                              className:
                                "absolute top-4 right-6 font-['Outfit'] text-7xl md:text-8xl font-bold text-white/[0.03] select-none leading-none",
                              children: e.num,
                            }),
                            (0, w.jsxs)("div", {
                              className: "relative z-10",
                              children: [
                                (0, w.jsx)(e.icon, {
                                  size: 28,
                                  weight: "duotone",
                                  className: "text-[#6D5DFB] mb-5",
                                }),
                                (0, w.jsx)("h3", {
                                  className:
                                    "font-['Outfit'] text-lg font-semibold text-white mb-3",
                                  children: e.title,
                                }),
                                (0, w.jsx)("p", {
                                  className:
                                    "text-sm text-[#A1A1AA] leading-relaxed",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.num,
                    ),
                  ),
                }),
              ],
            }),
          }),
        Ws = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M120,128a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm32-16a16,16,0,1,0,16,16A16,16,0,0,0,152,112Zm84,16A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-4-1.08,7.85,7.85,0,0,0-2.53.42L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58,10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,84,120Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,172,120Zm56,8A100,100,0,0,1,79.5,215.47l-35.69,11.9a12,12,0,0,1-15.18-15.18l11.9-35.69A100,100,0,1,1,228,128Zm-8,0A92,92,0,1,0,48.35,174.07a4,4,0,0,1,.33,3.27L36.22,214.72a4,4,0,0,0,5.06,5.06l37.38-12.46a3.93,3.93,0,0,1,1.27-.21,4.05,4.05,0,0,1,2,.54A92,92,0,0,0,220,128Z",
              }),
            ),
          ],
        ]),
        qs = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Ws })),
        );
      qs.displayName = "ChatCircleDotsIcon";
      const $s = qs,
        Ys = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z",
              }),
            ),
          ],
        ]),
        Ks = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Ys })),
        );
      Ks.displayName = "ArrowsClockwiseIcon";
      const Qs = Ks,
        Gs = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0ZM228,48V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48Zm-24,4H52V204H204Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-34.34,77.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM222,48V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM220,48V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z",
              }),
            ),
          ],
        ]),
        Xs = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Gs })),
        );
      Xs.displayName = "CheckSquareIcon";
      const Js = [
          {
            icon: $s,
            title: "Feedback continuo con stakeholders",
            description:
              "Cada ciclo de desarrollo incluye validaci\xf3n directa con las personas clave de tu organizaci\xf3n, asegurando que cada entrega refleje las necesidades reales del negocio.",
          },
          {
            icon: Qs,
            title: "Iteraci\xf3n r\xe1pida seg\xfan necesidad",
            description:
              "Trabajamos en sprints cortos que permiten ajustar prioridades, incorporar cambios y responder con agilidad a nuevos requerimientos sin perder calidad.",
          },
          {
            icon: Xs,
            title: "Calidad definida por feature",
            description:
              "Cada funcionalidad tiene su propia Definition of Done: criterios expl\xedcitos de calidad, aceptaci\xf3n y valor de negocio que deben cumplirse antes de considerarla completa.",
          },
        ],
        eu = () =>
          (0, w.jsx)("section", {
            "data-testid": "agile-section",
            className: "py-24 sm:py-32 border-t border-white/[0.06]",
            children: (0, w.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6 lg:px-8",
              children: [
                (0, w.jsxs)(hs, {
                  children: [
                    (0, w.jsx)("p", {
                      className:
                        "uppercase tracking-[0.2em] text-xs text-[#6D5DFB] font-medium mb-4",
                      children: "Metodolog\xeda",
                    }),
                    (0, w.jsx)("h2", {
                      className:
                        "font-['Outfit'] text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-3xl",
                      children: "Desarrollo \xe1gil orientado a calidad",
                    }),
                    (0, w.jsx)("p", {
                      className:
                        "mt-4 text-base text-[#A1A1AA] max-w-2xl leading-relaxed",
                      children:
                        "Trabajamos con metodolog\xeda \xe1gil, ciclos r\xe1pidos de validaci\xf3n con stakeholders y adaptaci\xf3n continua seg\xfan las necesidades reales del cliente.",
                    }),
                  ],
                }),
                (0, w.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14",
                  children: Js.map((e, t) =>
                    (0, w.jsx)(
                      hs,
                      {
                        delay: 0.1 * t,
                        children: (0, w.jsxs)("div", {
                          "data-testid": "agile-card-".concat(t),
                          className:
                            "group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#6D5DFB]/40 transition-all duration-300 rounded-2xl p-8 overflow-hidden hover:-translate-y-1",
                          children: [
                            (0, w.jsx)("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-br from-[#6D5DFB]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            }),
                            (0, w.jsxs)("div", {
                              className: "relative z-10",
                              children: [
                                (0, w.jsx)(e.icon, {
                                  size: 32,
                                  weight: "duotone",
                                  className: "text-[#6D5DFB] mb-5",
                                }),
                                (0, w.jsx)("h3", {
                                  className:
                                    "font-['Outfit'] text-lg font-semibold text-white mb-3",
                                  children: e.title,
                                }),
                                (0, w.jsx)("p", {
                                  className:
                                    "text-sm text-[#A1A1AA] leading-relaxed",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.title,
                    ),
                  ),
                }),
              ],
            }),
          }),
        tu = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z",
              }),
            ),
          ],
        ]),
        nu = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: tu })),
        );
      nu.displayName = "GearSixIcon";
      const ru = nu,
        au = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z",
              }),
            ),
          ],
        ]),
        ou = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: au })),
        );
      ou.displayName = "CubeIcon";
      const iu = ou,
        lu = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M71.76,148H31.7a12,12,0,1,1,0-24H65.33l12.45-18.66a12,12,0,0,1,20,0l22,33,6-9a12,12,0,0,1,10-5.34h24a12,12,0,1,1,0,24h-17.6l-12.46,18.66a12,12,0,0,1-20,0l-22-33-6,9A12,12,0,0,1,71.76,148ZM177.91,36c-20.12,0-38,7.93-50.07,21.56C115.74,43.93,97.89,36,77.76,36A66,66,0,0,0,12.07,94.68,12,12,0,0,0,36,97.32,42,42,0,0,1,77.76,60c17.83,0,32.75,9.4,38.95,24.54a12,12,0,0,0,22.25,0C145.16,69.4,160.08,60,177.91,60A42.08,42.08,0,0,1,220,102c0,29.42-25.86,57.77-47.56,76.36a329,329,0,0,1-44.58,31.81c-10.87-6.45-35.37-22-56.51-42.73a12,12,0,1,0-16.84,17.12c30.39,29.81,66.15,49.2,67.66,50a12.06,12.06,0,0,0,11.39,0C138,232.14,244,174.34,244,102A66.12,66.12,0,0,0,177.91,36Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0c-3.35-1.8-63.55-34.69-92.68-80.89A4,4,0,0,1,34.92,144H72a8,8,0,0,0,6.66-3.56l9.34-14,25.34,38a8,8,0,0,0,9.16,3.16,8.23,8.23,0,0,0,4.28-3.34L140.28,144H160a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H136a8,8,0,0,0-6.66,3.56l-9.34,14-25.34-38a8,8,0,0,0-9.17-3.16,8.25,8.25,0,0,0-4.27,3.34L67.72,128H23.53a4,4,0,0,1-3.83-2.81A76.93,76.93,0,0,1,16,102,62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M72,142H32a6,6,0,0,1,0-12H68.79L83,108.67a6,6,0,0,1,10,0l27,40.51,11-16.51a6,6,0,0,1,5-2.67h24a6,6,0,0,1,0,12H139.21L125,163.33a6,6,0,0,1-10,0L88,122.82,77,139.33A6,6,0,0,1,72,142ZM178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60q0,1.09,0,2.19a6,6,0,0,0,12-.38c0-.6,0-1.21,0-1.81A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48c0,55.73-81.61,105.65-98,115.11-9.84-5.66-43.09-25.82-68.16-53.16a6,6,0,1,0-8.84,8.1c30.94,33.77,72.41,56.29,74.16,57.23a6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M72,140H32a4,4,0,0,1,0-8H69.86l14.81-22.22a4,4,0,0,1,6.66,0l28.67,43,12.67-19A4,4,0,0,1,136,132h24a4,4,0,0,1,0,8H138.14l-14.81,22.22a4,4,0,0,1-6.66,0L88,119.21l-12.67,19A4,4,0,0,1,72,140ZM178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58q0,1.06,0,2.13a4,4,0,1,0,8-.26c0-.62,0-1.24,0-1.87A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50c0,58-86,109.46-100,117.42-8.47-4.82-43.5-25.61-69.63-54.12a4,4,0,0,0-5.9,5.4c30.72,33.52,71.9,55.89,73.63,56.82a4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44Z",
              }),
            ),
          ],
        ]),
        su = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: lu })),
        );
      su.displayName = "HeartbeatIcon";
      const uu = su,
        cu = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M252,124a60.14,60.14,0,0,0-32-53.08,52,52,0,0,0-92-32.11A52,52,0,0,0,36,70.92a60,60,0,0,0,0,106.14,52,52,0,0,0,92,32.13,52,52,0,0,0,92-32.13A60.05,60.05,0,0,0,252,124ZM88,204a28,28,0,0,1-26.85-20.07c1,0,1.89.07,2.85.07h8a12,12,0,0,0,0-24H64A36,36,0,0,1,52,90.05a12,12,0,0,0,8-11.32V72a28,28,0,0,1,56,0v60.18a51.61,51.61,0,0,0-7.2-3.85,12,12,0,1,0-9.6,22A28,28,0,0,1,88,204Zm104-44h-8a12,12,0,0,0,0,24h8c1,0,1.9,0,2.85-.07a28,28,0,1,1-38-33.61,12,12,0,1,0-9.6-22,51.61,51.61,0,0,0-7.2,3.85V72a28,28,0,0,1,56,0v6.73a12,12,0,0,0,8,11.32,36,36,0,0,1-12,70Zm16-44a12,12,0,0,1-12,12,40,40,0,0,1-40-40V84a12,12,0,0,1,24,0v4a16,16,0,0,0,16,16A12,12,0,0,1,208,116ZM100,88a40,40,0,0,1-40,40,12,12,0,0,1,0-24A16,16,0,0,0,76,88V84a12,12,0,0,1,24,0Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M240,124a48,48,0,0,1-32,45.27h0V176a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73h0a48,48,0,0,1,0-90.54V72a40,40,0,0,1,80,0,40,40,0,0,1,80,0v6.73A48,48,0,0,1,240,124Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M212,76V72a44,44,0,0,0-74.86-31.31,3.93,3.93,0,0,0-1.14,2.8v88.72a4,4,0,0,0,6.2,3.33A47.67,47.67,0,0,1,167.68,128a8.18,8.18,0,0,1,8.31,7.58,8,8,0,0,1-8,8.42,32,32,0,0,0-32,32v33.88a4,4,0,0,0,1.49,3.12,47.92,47.92,0,0,0,74.21-17.16,4,4,0,0,0-4.49-5.56A68.06,68.06,0,0,1,192,192h-7.73a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8a51.6,51.6,0,0,0,24-5.88v0A52,52,0,0,0,212,76Zm-12,36h-4a36,36,0,0,1-36-36V72a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4a8,8,0,0,1,0,16ZM88,28A44.05,44.05,0,0,0,44,72v4a52,52,0,0,0-4,94.12h0A51.6,51.6,0,0,0,64,176h7.73A8.18,8.18,0,0,1,80,183.47,8,8,0,0,1,72,192H64a67.48,67.48,0,0,1-15.21-1.73,4,4,0,0,0-4.5,5.55A47.93,47.93,0,0,0,118.51,213a4,4,0,0,0,1.49-3.12V176a32,32,0,0,0-32-32,8,8,0,0,1-8-8.42A8.18,8.18,0,0,1,88.32,128a47.67,47.67,0,0,1,25.48,7.54,4,4,0,0,0,6.2-3.33V43.49a4,4,0,0,0-1.14-2.81A43.85,43.85,0,0,0,88,28Zm8,48a36,36,0,0,1-36,36H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,76V72a8,8,0,0,1,16,0Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M246,124a54.13,54.13,0,0,0-32-49.33V72a46,46,0,0,0-86-22.67A46,46,0,0,0,42,72v2.67a54,54,0,0,0,0,98.63V176a46,46,0,0,0,86,22.67A46,46,0,0,0,214,176v-2.7A54.07,54.07,0,0,0,246,124ZM88,210a34,34,0,0,1-34-32.94A53.67,53.67,0,0,0,64,178h8a6,6,0,0,0,0-12H64A42,42,0,0,1,50,84.39a6,6,0,0,0,4-5.66V72a34,34,0,0,1,68,0v73.05A45.89,45.89,0,0,0,88,130a6,6,0,0,0,0,12,34,34,0,0,1,0,68Zm104-44h-8a6,6,0,0,0,0,12h8a53.67,53.67,0,0,0,10-.94A34,34,0,1,1,168,142a6,6,0,0,0,0-12,45.89,45.89,0,0,0-34,15.05V72a34,34,0,0,1,68,0v6.73a6,6,0,0,0,4,5.66A42,42,0,0,1,192,166Zm14-54a6,6,0,0,1-6,6h-4a34,34,0,0,1-34-34V80a6,6,0,0,1,12,0v4a22,22,0,0,0,22,22h4A6,6,0,0,1,206,112ZM60,118H56a6,6,0,0,1,0-12h4A22,22,0,0,0,82,84V80a6,6,0,0,1,12,0v4A34,34,0,0,1,60,118Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M244,124a52.1,52.1,0,0,0-32-48V72a44,44,0,0,0-84-18.3A44,44,0,0,0,44,72v4a52,52,0,0,0,0,96v4a44,44,0,0,0,84,18.3A44,44,0,0,0,212,176v-4A52.07,52.07,0,0,0,244,124ZM88,212a36,36,0,0,1-36-36v-1.41A52.13,52.13,0,0,0,64,176h8a4,4,0,0,0,0-8H64A44,44,0,0,1,49.33,82.5,4,4,0,0,0,52,78.73V72a36,36,0,0,1,72,0v78.75A44,44,0,0,0,88,132a4,4,0,0,0,0,8,36,36,0,0,1,0,72Zm104-44h-8a4,4,0,0,0,0,8h8a52.13,52.13,0,0,0,12-1.41V176a36,36,0,1,1-36-36,4,4,0,0,0,0-8,44,44,0,0,0-36,18.75V72a36,36,0,0,1,72,0v6.73a4,4,0,0,0,2.67,3.77A44,44,0,0,1,192,168Zm12-56a4,4,0,0,1-4,4h-4a32,32,0,0,1-32-32V80a4,4,0,0,1,8,0v4a24,24,0,0,0,24,24h4A4,4,0,0,1,204,112ZM92,84a32,32,0,0,1-32,32H56a4,4,0,0,1,0-8h4A24,24,0,0,0,84,84V80a4,4,0,0,1,8,0Z",
              }),
            ),
          ],
        ]),
        du = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: cu })),
        );
      du.displayName = "BrainIcon";
      const fu = du,
        hu = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M219.71,117.38a12,12,0,0,0-7.25-8.52L161.28,88.39l10.59-70.61a12,12,0,0,0-20.64-10l-112,120a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l112-120A12,12,0,0,0,219.71,117.38ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37,142.4,52.45l-6.27,41.77a12,12,0,0,0,7.41,12.92l43.72,17.49Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M96,240l16-80L48,136,160,16,144,96l64,24Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M211.89,119.09a4,4,0,0,0-2.49-2.84l-60.81-22.8,15.33-76.67a4,4,0,0,0-6.84-3.51l-112,120a4,4,0,0,0-1,3.64,4,4,0,0,0,2.49,2.84l60.81,22.8L92.08,239.22a4,4,0,0,0,6.84,3.51l112-120A4,4,0,0,0,211.89,119.09ZM102.68,227l13.24-66.2a4,4,0,0,0-2.52-4.53L55,134.36,153.32,29l-13.24,66.2a4,4,0,0,0,2.52,4.53L201,121.64Z",
              }),
            ),
          ],
        ]),
        mu = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: hu })),
        );
      mu.displayName = "LightningIcon";
      const pu = mu,
        gu = [
          {
            icon: ru,
            name: "ProSoluci\xf3n",
            description:
              "Software empresarial y automatizaci\xf3n orientada a optimizaci\xf3n operativa, procesos internos y eficiencia organizacional.",
          },
          {
            icon: iu,
            name: "Klynn",
            description:
              "SaaS, IA aplicada y experiencias digitales escalables para nuevos modelos de negocio.",
          },
        ],
        vu = () =>
          (0, w.jsx)("section", {
            id: "ecosistema",
            "data-testid": "ecosystem-section",
            className: "py-24 sm:py-32",
            children: (0, w.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6 lg:px-8",
              children: [
                (0, w.jsxs)(hs, {
                  children: [
                    (0, w.jsx)("p", {
                      className:
                        "uppercase tracking-[0.2em] text-xs text-[#6D5DFB] font-medium mb-4",
                      children: "Ecosistema",
                    }),
                    (0, w.jsx)("h2", {
                      className:
                        "font-['Outfit'] text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl",
                      children: "Ecosistema interno de productos",
                    }),
                  ],
                }),
                (0, w.jsx)(hs, {
                  delay: 0.15,
                  children: (0, w.jsxs)("div", {
                    "data-testid": "ecosystem-card",
                    className:
                      "mt-14 relative bg-white/[0.02] backdrop-blur-xl border border-[#6D5DFB]/20 shadow-[0_0_30px_rgba(109,93,251,0.08)] rounded-2xl p-8 md:p-12 overflow-hidden transition-all duration-300 hover:border-[#6D5DFB]/35 hover:shadow-[0_0_40px_rgba(109,93,251,0.12)]",
                    children: [
                      (0, w.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(109,93,251,0.12)_0%,transparent_70%)] pointer-events-none",
                      }),
                      (0, w.jsxs)("div", {
                        className:
                          "relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16",
                        children: [
                          (0, w.jsxs)("div", {
                            children: [
                              (0, w.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-2 bg-[#6D5DFB]/10 border border-[#6D5DFB]/20 rounded-full px-4 py-1.5 mb-6",
                                children: [
                                  (0, w.jsx)(uu, {
                                    size: 16,
                                    weight: "duotone",
                                    className: "text-[#6D5DFB]",
                                  }),
                                  (0, w.jsx)("span", {
                                    className:
                                      "text-xs font-medium text-[#6D5DFB] uppercase tracking-wider",
                                    children: "Producto destacado",
                                  }),
                                ],
                              }),
                              (0, w.jsx)("h3", {
                                className:
                                  "font-['Outfit'] text-2xl md:text-3xl font-bold text-white mb-4",
                                children: "EcoNutrix",
                              }),
                              (0, w.jsx)("p", {
                                className:
                                  "text-[#A1A1AA] leading-relaxed text-sm md:text-base",
                                children:
                                  "Plataforma mobile orientada a salud, nutrici\xf3n y bienestar inteligente. Combina datos personalizados, IA y experiencia de usuario premium para transformar h\xe1bitos de vida.",
                              }),
                              (0, w.jsx)("p", {
                                className:
                                  "text-[#A1A1AA]/70 leading-relaxed text-sm mt-4",
                                children:
                                  "Parte de nuestro ecosistema de productos internos que incluye SaaS, microproductos de IA y herramientas de automatizaci\xf3n empresarial en desarrollo.",
                              }),
                            ],
                          }),
                          (0, w.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, w.jsx)("div", {
                              className: "relative w-full max-w-xs",
                              children: (0, w.jsx)("div", {
                                className:
                                  "bg-white/[0.03] border border-white/[0.1] rounded-3xl p-4 aspect-[9/16]",
                                children: (0, w.jsxs)("div", {
                                  className:
                                    "bg-white/[0.02] rounded-2xl h-full flex flex-col gap-3 p-4",
                                  children: [
                                    (0, w.jsxs)("div", {
                                      className: "flex items-center gap-3 mb-2",
                                      children: [
                                        (0, w.jsx)("div", {
                                          className:
                                            "w-8 h-8 rounded-full bg-[#6D5DFB]/20 flex items-center justify-center",
                                          children: (0, w.jsx)(uu, {
                                            size: 16,
                                            className: "text-[#6D5DFB]",
                                          }),
                                        }),
                                        (0, w.jsxs)("div", {
                                          children: [
                                            (0, w.jsx)("div", {
                                              className:
                                                "h-2.5 w-20 bg-white/10 rounded-full",
                                            }),
                                            (0, w.jsx)("div", {
                                              className:
                                                "h-2 w-14 bg-white/5 rounded-full mt-1.5",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, w.jsxs)("div", {
                                      className: "flex-1 space-y-3",
                                      children: [
                                        (0, w.jsxs)("div", {
                                          className:
                                            "bg-white/[0.04] rounded-xl p-3 flex items-center gap-3",
                                          children: [
                                            (0, w.jsx)(fu, {
                                              size: 20,
                                              className: "text-[#6D5DFB]/60",
                                            }),
                                            (0, w.jsxs)("div", {
                                              className: "flex-1 space-y-1.5",
                                              children: [
                                                (0, w.jsx)("div", {
                                                  className:
                                                    "h-2 w-full bg-white/[0.08] rounded-full",
                                                }),
                                                (0, w.jsx)("div", {
                                                  className:
                                                    "h-2 w-3/4 bg-white/5 rounded-full",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, w.jsxs)("div", {
                                          className:
                                            "bg-white/[0.04] rounded-xl p-3 flex items-center gap-3",
                                          children: [
                                            (0, w.jsx)(pu, {
                                              size: 20,
                                              className: "text-[#6D5DFB]/60",
                                            }),
                                            (0, w.jsxs)("div", {
                                              className: "flex-1 space-y-1.5",
                                              children: [
                                                (0, w.jsx)("div", {
                                                  className:
                                                    "h-2 w-full bg-white/[0.08] rounded-full",
                                                }),
                                                (0, w.jsx)("div", {
                                                  className:
                                                    "h-2 w-2/3 bg-white/5 rounded-full",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, w.jsx)("div", {
                                          className:
                                            "h-24 bg-gradient-to-t from-[#6D5DFB]/10 to-transparent rounded-xl border border-white/[0.04] flex items-end p-3",
                                          children: (0, w.jsx)("div", {
                                            className:
                                              "flex items-end gap-1.5 w-full",
                                            children: [
                                              40, 65, 50, 80, 70, 90, 60,
                                            ].map((e, t) =>
                                              (0, w.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    "flex-1 bg-[#6D5DFB]/30 rounded-sm",
                                                  style: {
                                                    height: "".concat(e, "%"),
                                                  },
                                                },
                                                t,
                                              ),
                                            ),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, w.jsx)(hs, {
                  delay: 0.25,
                  children: (0, w.jsxs)("div", {
                    className: "mt-12 md:mt-16",
                    children: [
                      (0, w.jsx)("p", {
                        className:
                          "uppercase tracking-[0.2em] text-xs text-[#A1A1AA]/60 font-medium mb-6",
                        children: "Ventures en pipeline",
                      }),
                      (0, w.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: gu.map((e, t) =>
                          (0, w.jsxs)(
                            "div",
                            {
                              "data-testid": "venture-card-".concat(t),
                              className:
                                "group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-7 md:p-8 overflow-hidden transition-all duration-300 hover:border-[#6D5DFB]/40 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(109,93,251,0.12)]",
                              children: [
                                (0, w.jsx)("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-br from-[#6D5DFB]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                }),
                                (0, w.jsxs)("div", {
                                  className: "relative z-10",
                                  children: [
                                    (0, w.jsx)(e.icon, {
                                      size: 28,
                                      weight: "duotone",
                                      className: "text-[#6D5DFB] mb-4",
                                    }),
                                    (0, w.jsx)("h3", {
                                      className:
                                        "font-['Outfit'] text-lg md:text-xl font-semibold text-white mb-3",
                                      children: e.name,
                                    }),
                                    (0, w.jsx)("p", {
                                      className:
                                        "text-sm md:text-base text-[#A1A1AA] leading-relaxed",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.name,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                (0, w.jsx)(hs, {
                  delay: 0.35,
                  children: (0, w.jsx)("p", {
                    className:
                      "mt-10 text-center text-sm text-[#A1A1AA]/50 max-w-xl mx-auto",
                    children:
                      "Construimos sistemas para clientes y tambi\xe9n activos digitales propios de alto potencial.",
                  }),
                }),
              ],
            }),
          }),
        yu = () =>
          (0, w.jsx)("section", {
            "data-testid": "differentiator-section",
            className: "py-24 sm:py-32 border-t border-white/[0.06]",
            children: (0, w.jsx)("div", {
              className: "max-w-7xl mx-auto px-6 lg:px-8 text-center",
              children: (0, w.jsxs)(hs, {
                children: [
                  (0, w.jsxs)("h2", {
                    className:
                      "font-['Outfit'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white max-w-4xl mx-auto",
                    children: [
                      "No vendemos horas: construimos",
                      " ",
                      (0, w.jsx)("span", {
                        className: "text-[#6D5DFB]",
                        children: "activos digitales",
                      }),
                      " ",
                      "escalables.",
                    ],
                  }),
                  (0, w.jsx)("p", {
                    className:
                      "mt-6 text-[#A1A1AA] text-base md:text-lg max-w-xl mx-auto leading-relaxed",
                    children:
                      "Cada proyecto es una inversi\xf3n en infraestructura que genera retorno a largo plazo.",
                  }),
                ],
              }),
            }),
          }),
        bu = ["scope", "children"];
      function xu(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = [];
        const a = () => {
          const n = r.map((t) => e.createContext(t));
          return function (r) {
            const a = (null === r || void 0 === r ? void 0 : r[t]) || n;
            return e.useMemo(
              () => ({ ["__scope".concat(t)]: s(s({}, r), {}, { [t]: a }) }),
              [r, a],
            );
          };
        };
        return (
          (a.scopeName = t),
          [
            function (n, a) {
              const o = e.createContext(a),
                i = r.length;
              r = [...r, a];
              const l = (n) => {
                var r;
                const { scope: a, children: l } = n,
                  s = u(n, bu),
                  c =
                    (null === a ||
                    void 0 === a ||
                    null === (r = a[t]) ||
                    void 0 === r
                      ? void 0
                      : r[i]) || o,
                  d = e.useMemo(() => s, Object.values(s));
                return (0, w.jsx)(c.Provider, { value: d, children: l });
              };
              return (
                (l.displayName = n + "Provider"),
                [
                  l,
                  function (r, l) {
                    var s;
                    const u =
                        (null === l ||
                        void 0 === l ||
                        null === (s = l[t]) ||
                        void 0 === s
                          ? void 0
                          : s[i]) || o,
                      c = e.useContext(u);
                    if (c) return c;
                    if (void 0 !== a) return a;
                    throw new Error(
                      "`".concat(r, "` must be used within `").concat(n, "`"),
                    );
                  },
                ]
              );
            },
            wu(a, ...n),
          ]
        );
      }
      function wu() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        const a = n[0];
        if (1 === n.length) return a;
        const o = () => {
          const t = n.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (n) {
            const r = t.reduce((e, t) => {
              let { useScope: r, scopeName: a } = t;
              const o = r(n)["__scope".concat(a)];
              return s(s({}, e), o);
            }, {});
            return e.useMemo(
              () => ({ ["__scope".concat(a.scopeName)]: r }),
              [r],
            );
          };
        };
        return ((o.scopeName = a.scopeName), o);
      }
      function ku(e, t, n) {
        ((function (e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        })(e, t),
          t.set(e, n));
      }
      function Au(e, t, n) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : n;
        throw new TypeError("Private element is not present on this object");
      }
      function Eu(e, t) {
        return e.get(Au(e, t));
      }
      function Su(e, t, n) {
        return (e.set(Au(e, t), n), n);
      }
      function Mu(e, t) {
        if ("function" === typeof e) return e(t);
        null !== e && void 0 !== e && (e.current = t);
      }
      function Cu() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) => {
          let n = !1;
          const r = t.map((t) => {
            const r = Mu(t, e);
            return (n || "function" != typeof r || (n = !0), r);
          });
          if (n)
            return () => {
              for (let e = 0; e < r.length; e++) {
                const n = r[e];
                "function" == typeof n ? n() : Mu(t[e], null);
              }
            };
        };
      }
      function Fu() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return e.useCallback(Cu(...n), n);
      }
      const Pu = ["children"],
        Tu = ["children"];
      function Vu(t) {
        const n = Lu(t),
          r = e.forwardRef((t, r) => {
            const { children: a } = t,
              o = u(t, Pu),
              i = e.Children.toArray(a),
              l = i.find(Hu);
            if (l) {
              const t = l.props.children,
                a = i.map((n) =>
                  n === l
                    ? e.Children.count(t) > 1
                      ? e.Children.only(null)
                      : e.isValidElement(t)
                        ? t.props.children
                        : null
                    : n,
                );
              return (0, w.jsx)(
                n,
                s(
                  s({}, o),
                  {},
                  {
                    ref: r,
                    children: e.isValidElement(t)
                      ? e.cloneElement(t, void 0, a)
                      : null,
                  },
                ),
              );
            }
            return (0, w.jsx)(n, s(s({}, o), {}, { ref: r, children: a }));
          });
        return ((r.displayName = "".concat(t, ".Slot")), r);
      }
      function Lu(t) {
        const n = e.forwardRef((t, n) => {
          const { children: r } = t,
            a = u(t, Tu);
          if (e.isValidElement(r)) {
            const t = (function (e) {
                var t, n;
                let r =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  a = r && "isReactWarning" in r && r.isReactWarning;
                if (a) return e.ref;
                if (
                  ((r =
                    null === (n = Object.getOwnPropertyDescriptor(e, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get),
                  (a = r && "isReactWarning" in r && r.isReactWarning),
                  a)
                )
                  return e.props.ref;
                return e.props.ref || e.ref;
              })(r),
              o = (function (e, t) {
                const n = s({}, t);
                for (const r in t) {
                  const a = e[r],
                    o = t[r];
                  /^on[A-Z]/.test(r)
                    ? a && o
                      ? (n[r] = function () {
                          const e = o(...arguments);
                          return (a(...arguments), e);
                        })
                      : a && (n[r] = a)
                    : "style" === r
                      ? (n[r] = s(s({}, a), o))
                      : "className" === r &&
                        (n[r] = [a, o].filter(Boolean).join(" "));
                }
                return s(s({}, e), n);
              })(a, r.props);
            return (
              r.type !== e.Fragment && (o.ref = n ? Cu(n, t) : t),
              e.cloneElement(r, o)
            );
          }
          return e.Children.count(r) > 1 ? e.Children.only(null) : null;
        });
        return ((n.displayName = "".concat(t, ".SlotClone")), n);
      }
      var Nu = Symbol("radix.slottable");
      var Du;
      function Hu(t) {
        return (
          e.isValidElement(t) &&
          "function" === typeof t.type &&
          "__radixId" in t.type &&
          t.type.__radixId === Nu
        );
      }
      const ju = ["scope", "children"];
      var Zu = new WeakMap();
      ((Du = new WeakMap()), Map);
      function zu(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const n = (function (e, t) {
          const n = e.length,
            r = _u(t),
            a = r >= 0 ? r : n + r;
          return a < 0 || a >= n ? -1 : a;
        })(e, t);
        return -1 === n ? void 0 : e[n];
      }
      function _u(e) {
        return e !== e || 0 === e ? 0 : Math.trunc(e);
      }
      "undefined" === typeof window ||
        !window.document ||
        window.document.createElement;
      function Ru(e, t) {
        let { checkForDefaultPrevented: n = !0 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function (r) {
          if (
            (null === e || void 0 === e || e(r),
            !1 === n || !r.defaultPrevented)
          )
            return null === t || void 0 === t ? void 0 : t(r);
        };
      }
      var Ou =
          null !== globalThis && void 0 !== globalThis && globalThis.document
            ? e.useLayoutEffect
            : () => {},
        Iu = t[" useInsertionEffect ".trim().toString()] || Ou;
      function Bu(t) {
        let { prop: n, defaultProp: r, onChange: a = () => {}, caller: o } = t;
        const [i, l, s] = (function (t) {
            let { defaultProp: n, onChange: r } = t;
            const [a, o] = e.useState(n),
              i = e.useRef(a),
              l = e.useRef(r);
            return (
              Iu(() => {
                l.current = r;
              }, [r]),
              e.useEffect(() => {
                var e;
                i.current !== a &&
                  (null === (e = l.current) || void 0 === e || e.call(l, a),
                  (i.current = a));
              }, [a, i]),
              [a, o, l]
            );
          })({ defaultProp: r, onChange: a }),
          u = void 0 !== n,
          c = u ? n : i;
        {
          const t = e.useRef(void 0 !== n);
          e.useEffect(() => {
            const e = t.current;
            if (e !== u) {
              const t = e ? "controlled" : "uncontrolled",
                n = u ? "controlled" : "uncontrolled";
              console.warn(
                ""
                  .concat(o, " is changing from ")
                  .concat(t, " to ")
                  .concat(
                    n,
                    ". Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.",
                  ),
              );
            }
            t.current = u;
          }, [u, o]);
        }
        const d = e.useCallback(
          (e) => {
            if (u) {
              const r = (function (e) {
                return "function" === typeof e;
              })(e)
                ? e(n)
                : e;
              var t;
              if (r !== n)
                null === (t = s.current) || void 0 === t || t.call(s, r);
            } else l(e);
          },
          [u, n, l, s],
        );
        return [c, d];
      }
      Symbol("RADIX:SYNC_STATE");
      n(950);
      const Uu = ["children"],
        Wu = ["children"];
      function qu(t) {
        const n = $u(t),
          r = e.forwardRef((t, r) => {
            const { children: a } = t,
              o = u(t, Uu),
              i = e.Children.toArray(a),
              l = i.find(Ku);
            if (l) {
              const t = l.props.children,
                a = i.map((n) =>
                  n === l
                    ? e.Children.count(t) > 1
                      ? e.Children.only(null)
                      : e.isValidElement(t)
                        ? t.props.children
                        : null
                    : n,
                );
              return (0, w.jsx)(
                n,
                s(
                  s({}, o),
                  {},
                  {
                    ref: r,
                    children: e.isValidElement(t)
                      ? e.cloneElement(t, void 0, a)
                      : null,
                  },
                ),
              );
            }
            return (0, w.jsx)(n, s(s({}, o), {}, { ref: r, children: a }));
          });
        return ((r.displayName = "".concat(t, ".Slot")), r);
      }
      function $u(t) {
        const n = e.forwardRef((t, n) => {
          const { children: r } = t,
            a = u(t, Wu);
          if (e.isValidElement(r)) {
            const t = (function (e) {
                var t, n;
                let r =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  a = r && "isReactWarning" in r && r.isReactWarning;
                if (a) return e.ref;
                if (
                  ((r =
                    null === (n = Object.getOwnPropertyDescriptor(e, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get),
                  (a = r && "isReactWarning" in r && r.isReactWarning),
                  a)
                )
                  return e.props.ref;
                return e.props.ref || e.ref;
              })(r),
              o = (function (e, t) {
                const n = s({}, t);
                for (const r in t) {
                  const a = e[r],
                    o = t[r];
                  /^on[A-Z]/.test(r)
                    ? a && o
                      ? (n[r] = function () {
                          const e = o(...arguments);
                          return (a(...arguments), e);
                        })
                      : a && (n[r] = a)
                    : "style" === r
                      ? (n[r] = s(s({}, a), o))
                      : "className" === r &&
                        (n[r] = [a, o].filter(Boolean).join(" "));
                }
                return s(s({}, e), n);
              })(a, r.props);
            return (
              r.type !== e.Fragment && (o.ref = n ? Cu(n, t) : t),
              e.cloneElement(r, o)
            );
          }
          return e.Children.count(r) > 1 ? e.Children.only(null) : null;
        });
        return ((n.displayName = "".concat(t, ".SlotClone")), n);
      }
      var Yu = Symbol("radix.slottable");
      function Ku(t) {
        return (
          e.isValidElement(t) &&
          "function" === typeof t.type &&
          "__radixId" in t.type &&
          t.type.__radixId === Yu
        );
      }
      const Qu = ["asChild"];
      var Gu = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((t, n) => {
        const r = qu("Primitive.".concat(n)),
          a = e.forwardRef((e, t) => {
            const { asChild: a } = e,
              o = u(e, Qu),
              i = a ? r : n;
            return (
              "undefined" !== typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, w.jsx)(i, s(s({}, o), {}, { ref: t }))
            );
          });
        return (
          (a.displayName = "Primitive.".concat(n)),
          s(s({}, t), {}, { [n]: a })
        );
      }, {});
      var Xu = (t) => {
        const { present: n, children: r } = t,
          a = (function (t) {
            const [n, r] = e.useState(),
              a = e.useRef(null),
              o = e.useRef(t),
              i = e.useRef("none"),
              l = t ? "mounted" : "unmounted",
              [s, u] = (function (t, n) {
                return e.useReducer((e, t) => {
                  const r = n[e][t];
                  return null !== r && void 0 !== r ? r : e;
                }, t);
              })(l, {
                mounted: {
                  UNMOUNT: "unmounted",
                  ANIMATION_OUT: "unmountSuspended",
                },
                unmountSuspended: {
                  MOUNT: "mounted",
                  ANIMATION_END: "unmounted",
                },
                unmounted: { MOUNT: "mounted" },
              });
            return (
              e.useEffect(() => {
                const e = Ju(a.current);
                i.current = "mounted" === s ? e : "none";
              }, [s]),
              Ou(() => {
                const e = a.current,
                  n = o.current;
                if (n !== t) {
                  const r = i.current,
                    a = Ju(e);
                  if (t) u("MOUNT");
                  else if (
                    "none" === a ||
                    "none" === (null === e || void 0 === e ? void 0 : e.display)
                  )
                    u("UNMOUNT");
                  else {
                    u(n && r !== a ? "ANIMATION_OUT" : "UNMOUNT");
                  }
                  o.current = t;
                }
              }, [t, u]),
              Ou(() => {
                if (n) {
                  var e;
                  let t;
                  const r =
                      null !== (e = n.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    l = (e) => {
                      const i = Ju(a.current).includes(
                        CSS.escape(e.animationName),
                      );
                      if (
                        e.target === n &&
                        i &&
                        (u("ANIMATION_END"), !o.current)
                      ) {
                        const e = n.style.animationFillMode;
                        ((n.style.animationFillMode = "forwards"),
                          (t = r.setTimeout(() => {
                            "forwards" === n.style.animationFillMode &&
                              (n.style.animationFillMode = e);
                          })));
                      }
                    },
                    s = (e) => {
                      e.target === n && (i.current = Ju(a.current));
                    };
                  return (
                    n.addEventListener("animationstart", s),
                    n.addEventListener("animationcancel", l),
                    n.addEventListener("animationend", l),
                    () => {
                      (r.clearTimeout(t),
                        n.removeEventListener("animationstart", s),
                        n.removeEventListener("animationcancel", l),
                        n.removeEventListener("animationend", l));
                    }
                  );
                }
                u("ANIMATION_END");
              }, [n, u]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: e.useCallback((e) => {
                  ((a.current = e ? getComputedStyle(e) : null), r(e));
                }, []),
              }
            );
          })(n),
          o =
            "function" === typeof r
              ? r({ present: a.isPresent })
              : e.Children.only(r),
          i = Fu(
            a.ref,
            (function (e) {
              var t, n;
              let r =
                  null ===
                    (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                  void 0 === t
                    ? void 0
                    : t.get,
                a = r && "isReactWarning" in r && r.isReactWarning;
              if (a) return e.ref;
              if (
                ((r =
                  null === (n = Object.getOwnPropertyDescriptor(e, "ref")) ||
                  void 0 === n
                    ? void 0
                    : n.get),
                (a = r && "isReactWarning" in r && r.isReactWarning),
                a)
              )
                return e.props.ref;
              return e.props.ref || e.ref;
            })(o),
          );
        return "function" === typeof r || a.isPresent
          ? e.cloneElement(o, { ref: i })
          : null;
      };
      function Ju(e) {
        return (
          (null === e || void 0 === e ? void 0 : e.animationName) || "none"
        );
      }
      Xu.displayName = "Presence";
      var ec = t[" useId ".trim().toString()] || (() => {}),
        tc = 0;
      function nc(t) {
        const [n, r] = e.useState(ec());
        return (
          Ou(() => {
            t || r((e) => (null !== e && void 0 !== e ? e : String(tc++)));
          }, [t]),
          t || (n ? "radix-".concat(n) : "")
        );
      }
      const rc = [
          "__scopeCollapsible",
          "open",
          "defaultOpen",
          "disabled",
          "onOpenChange",
        ],
        ac = ["__scopeCollapsible"],
        oc = ["forceMount"],
        ic = ["__scopeCollapsible", "present", "children"];
      var lc = "Collapsible",
        [sc, uc] = xu(lc),
        [cc, dc] = sc(lc),
        fc = e.forwardRef((t, n) => {
          const {
              __scopeCollapsible: r,
              open: a,
              defaultOpen: o,
              disabled: i,
              onOpenChange: l,
            } = t,
            c = u(t, rc),
            [d, f] = Bu({
              prop: a,
              defaultProp: null !== o && void 0 !== o && o,
              onChange: l,
              caller: lc,
            });
          return (0, w.jsx)(cc, {
            scope: r,
            disabled: i,
            contentId: nc(),
            open: d,
            onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
            children: (0, w.jsx)(
              Gu.div,
              s(
                s({ "data-state": yc(d), "data-disabled": i ? "" : void 0 }, c),
                {},
                { ref: n },
              ),
            ),
          });
        });
      fc.displayName = lc;
      var hc = "CollapsibleTrigger",
        mc = e.forwardRef((e, t) => {
          const { __scopeCollapsible: n } = e,
            r = u(e, ac),
            a = dc(hc, n);
          return (0, w.jsx)(
            Gu.button,
            s(
              s(
                {
                  type: "button",
                  "aria-controls": a.contentId,
                  "aria-expanded": a.open || !1,
                  "data-state": yc(a.open),
                  "data-disabled": a.disabled ? "" : void 0,
                  disabled: a.disabled,
                },
                r,
              ),
              {},
              { ref: t, onClick: Ru(e.onClick, a.onOpenToggle) },
            ),
          );
        });
      mc.displayName = hc;
      var pc = "CollapsibleContent",
        gc = e.forwardRef((e, t) => {
          const { forceMount: n } = e,
            r = u(e, oc),
            a = dc(pc, e.__scopeCollapsible);
          return (0, w.jsx)(Xu, {
            present: n || a.open,
            children: (e) => {
              let { present: n } = e;
              return (0, w.jsx)(vc, s(s({}, r), {}, { ref: t, present: n }));
            },
          });
        });
      gc.displayName = pc;
      var vc = e.forwardRef((t, n) => {
        const { __scopeCollapsible: r, present: a, children: o } = t,
          i = u(t, ic),
          l = dc(pc, r),
          [c, d] = e.useState(a),
          f = e.useRef(null),
          h = Fu(n, f),
          m = e.useRef(0),
          p = m.current,
          g = e.useRef(0),
          v = g.current,
          y = l.open || c,
          b = e.useRef(y),
          x = e.useRef(void 0);
        return (
          e.useEffect(() => {
            const e = requestAnimationFrame(() => (b.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          Ou(() => {
            const e = f.current;
            if (e) {
              ((x.current = x.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none"));
              const t = e.getBoundingClientRect();
              ((m.current = t.height),
                (g.current = t.width),
                b.current ||
                  ((e.style.transitionDuration = x.current.transitionDuration),
                  (e.style.animationName = x.current.animationName)),
                d(a));
            }
          }, [l.open, a]),
          (0, w.jsx)(
            Gu.div,
            s(
              s(
                {
                  "data-state": yc(l.open),
                  "data-disabled": l.disabled ? "" : void 0,
                  id: l.contentId,
                  hidden: !y,
                },
                i,
              ),
              {},
              {
                ref: h,
                style: s(
                  {
                    "--radix-collapsible-content-height": p
                      ? "".concat(p, "px")
                      : void 0,
                    "--radix-collapsible-content-width": v
                      ? "".concat(v, "px")
                      : void 0,
                  },
                  t.style,
                ),
                children: y && o,
              },
            ),
          )
        );
      });
      function yc(e) {
        return e ? "open" : "closed";
      }
      var bc = fc,
        xc = mc,
        wc = gc,
        kc = e.createContext(void 0);
      const Ac = ["type"],
        Ec = ["value", "defaultValue", "onValueChange", "collapsible"],
        Sc = ["value", "defaultValue", "onValueChange"],
        Mc = ["__scopeAccordion", "disabled", "dir", "orientation"],
        Cc = ["__scopeAccordion", "value"],
        Fc = ["__scopeAccordion"],
        Pc = ["__scopeAccordion"],
        Tc = ["__scopeAccordion"];
      var Vc = "Accordion",
        Lc = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Nc, Dc, Hc] = (function (t) {
          const n = t + "CollectionProvider",
            [r, a] = xu(n),
            [o, i] = r(n, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            l = (t) => {
              const { scope: n, children: r } = t,
                a = e.useRef(null),
                i = e.useRef(new Map()).current;
              return (0, w.jsx)(o, {
                scope: n,
                itemMap: i,
                collectionRef: a,
                children: r,
              });
            };
          l.displayName = n;
          const c = t + "CollectionSlot",
            d = Vu(c),
            f = e.forwardRef((e, t) => {
              const { scope: n, children: r } = e,
                a = Fu(t, i(c, n).collectionRef);
              return (0, w.jsx)(d, { ref: a, children: r });
            });
          f.displayName = c;
          const h = t + "CollectionItemSlot",
            m = "data-radix-collection-item",
            p = Vu(h),
            g = e.forwardRef((t, n) => {
              const { scope: r, children: a } = t,
                o = u(t, ju),
                l = e.useRef(null),
                c = Fu(n, l),
                d = i(h, r);
              return (
                e.useEffect(
                  () => (
                    d.itemMap.set(l, s({ ref: l }, o)),
                    () => {
                      d.itemMap.delete(l);
                    }
                  ),
                ),
                (0, w.jsx)(
                  p,
                  s(s({}, { [m]: "" }), {}, { ref: c, children: a }),
                )
              );
            });
          return (
            (g.displayName = h),
            [
              { Provider: l, Slot: f, ItemSlot: g },
              function (n) {
                const r = i(t + "CollectionConsumer", n),
                  a = e.useCallback(() => {
                    const e = r.collectionRef.current;
                    if (!e) return [];
                    const t = Array.from(
                        e.querySelectorAll("[".concat(m, "]")),
                      ),
                      n = Array.from(r.itemMap.values()).sort(
                        (e, n) =>
                          t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                      );
                    return n;
                  }, [r.collectionRef, r.itemMap]);
                return a;
              },
              a,
            ]
          );
        })(Vc),
        [jc, Zc] = xu(Vc, [Hc, uc]),
        zc = uc(),
        _c = e.forwardRef((e, t) => {
          const { type: n } = e,
            r = u(e, Ac),
            a = r,
            o = r;
          return (0, w.jsx)(Nc.Provider, {
            scope: e.__scopeAccordion,
            children:
              "multiple" === n
                ? (0, w.jsx)(Wc, s(s({}, o), {}, { ref: t }))
                : (0, w.jsx)(Uc, s(s({}, a), {}, { ref: t })),
          });
        });
      _c.displayName = Vc;
      var [Rc, Oc] = jc(Vc),
        [Ic, Bc] = jc(Vc, { collapsible: !1 }),
        Uc = e.forwardRef((t, n) => {
          const {
              value: r,
              defaultValue: a,
              onValueChange: o = () => {},
              collapsible: i = !1,
            } = t,
            l = u(t, Ec),
            [c, d] = Bu({
              prop: r,
              defaultProp: null !== a && void 0 !== a ? a : "",
              onChange: o,
              caller: Vc,
            });
          return (0, w.jsx)(Rc, {
            scope: t.__scopeAccordion,
            value: e.useMemo(() => (c ? [c] : []), [c]),
            onItemOpen: d,
            onItemClose: e.useCallback(() => i && d(""), [i, d]),
            children: (0, w.jsx)(Ic, {
              scope: t.__scopeAccordion,
              collapsible: i,
              children: (0, w.jsx)(Yc, s(s({}, l), {}, { ref: n })),
            }),
          });
        }),
        Wc = e.forwardRef((t, n) => {
          const { value: r, defaultValue: a, onValueChange: o = () => {} } = t,
            i = u(t, Sc),
            [l, c] = Bu({
              prop: r,
              defaultProp: null !== a && void 0 !== a ? a : [],
              onChange: o,
              caller: Vc,
            }),
            d = e.useCallback(
              (e) =>
                c(function () {
                  return [
                    ...(arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : []),
                    e,
                  ];
                }),
              [c],
            ),
            f = e.useCallback(
              (e) =>
                c(function () {
                  return (
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : []
                  ).filter((t) => t !== e);
                }),
              [c],
            );
          return (0, w.jsx)(Rc, {
            scope: t.__scopeAccordion,
            value: l,
            onItemOpen: d,
            onItemClose: f,
            children: (0, w.jsx)(Ic, {
              scope: t.__scopeAccordion,
              collapsible: !0,
              children: (0, w.jsx)(Yc, s(s({}, i), {}, { ref: n })),
            }),
          });
        }),
        [qc, $c] = jc(Vc),
        Yc = e.forwardRef((t, n) => {
          const {
              __scopeAccordion: r,
              disabled: a,
              dir: o,
              orientation: i = "vertical",
            } = t,
            l = u(t, Mc),
            c = Fu(e.useRef(null), n),
            d = Dc(r),
            f =
              "ltr" ===
              (function (t) {
                const n = e.useContext(kc);
                return t || n || "ltr";
              })(o),
            h = Ru(t.onKeyDown, (e) => {
              var t;
              if (!Lc.includes(e.key)) return;
              const n = e.target,
                r = d().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                a = r.findIndex((e) => e.ref.current === n),
                o = r.length;
              if (-1 === a) return;
              e.preventDefault();
              let l = a;
              const s = o - 1,
                u = () => {
                  ((l = a + 1), l > s && (l = 0));
                },
                c = () => {
                  ((l = a - 1), l < 0 && (l = s));
                };
              switch (e.key) {
                case "Home":
                  l = 0;
                  break;
                case "End":
                  l = s;
                  break;
                case "ArrowRight":
                  "horizontal" === i && (f ? u() : c());
                  break;
                case "ArrowDown":
                  "vertical" === i && u();
                  break;
                case "ArrowLeft":
                  "horizontal" === i && (f ? c() : u());
                  break;
                case "ArrowUp":
                  "vertical" === i && c();
              }
              null === (t = r[l % o].ref.current) || void 0 === t || t.focus();
            });
          return (0, w.jsx)(qc, {
            scope: r,
            disabled: a,
            direction: o,
            orientation: i,
            children: (0, w.jsx)(Nc.Slot, {
              scope: r,
              children: (0, w.jsx)(
                Gu.div,
                s(
                  s({}, l),
                  {},
                  { "data-orientation": i, ref: c, onKeyDown: a ? void 0 : h },
                ),
              ),
            }),
          });
        }),
        Kc = "AccordionItem",
        [Qc, Gc] = jc(Kc),
        Xc = e.forwardRef((e, t) => {
          const { __scopeAccordion: n, value: r } = e,
            a = u(e, Cc),
            o = $c(Kc, n),
            i = Oc(Kc, n),
            l = zc(n),
            c = nc(),
            d = (r && i.value.includes(r)) || !1,
            f = o.disabled || e.disabled;
          return (0, w.jsx)(Qc, {
            scope: n,
            open: d,
            disabled: f,
            triggerId: c,
            children: (0, w.jsx)(
              bc,
              s(
                s(
                  s(
                    { "data-orientation": o.orientation, "data-state": od(d) },
                    l,
                  ),
                  a,
                ),
                {},
                {
                  ref: t,
                  disabled: f,
                  open: d,
                  onOpenChange: (e) => {
                    e ? i.onItemOpen(r) : i.onItemClose(r);
                  },
                },
              ),
            ),
          });
        });
      Xc.displayName = Kc;
      var Jc = "AccordionHeader",
        ed = e.forwardRef((e, t) => {
          const { __scopeAccordion: n } = e,
            r = u(e, Fc),
            a = $c(Vc, n),
            o = Gc(Jc, n);
          return (0, w.jsx)(
            Gu.h3,
            s(
              s(
                {
                  "data-orientation": a.orientation,
                  "data-state": od(o.open),
                  "data-disabled": o.disabled ? "" : void 0,
                },
                r,
              ),
              {},
              { ref: t },
            ),
          );
        });
      ed.displayName = Jc;
      var td = "AccordionTrigger",
        nd = e.forwardRef((e, t) => {
          const { __scopeAccordion: n } = e,
            r = u(e, Pc),
            a = $c(Vc, n),
            o = Gc(td, n),
            i = Bc(td, n),
            l = zc(n);
          return (0, w.jsx)(Nc.ItemSlot, {
            scope: n,
            children: (0, w.jsx)(
              xc,
              s(
                s(
                  s(
                    {
                      "aria-disabled": (o.open && !i.collapsible) || void 0,
                      "data-orientation": a.orientation,
                      id: o.triggerId,
                    },
                    l,
                  ),
                  r,
                ),
                {},
                { ref: t },
              ),
            ),
          });
        });
      nd.displayName = td;
      var rd = "AccordionContent",
        ad = e.forwardRef((e, t) => {
          const { __scopeAccordion: n } = e,
            r = u(e, Tc),
            a = $c(Vc, n),
            o = Gc(rd, n),
            i = zc(n);
          return (0, w.jsx)(
            wc,
            s(
              s(
                s(
                  {
                    role: "region",
                    "aria-labelledby": o.triggerId,
                    "data-orientation": a.orientation,
                  },
                  i,
                ),
                r,
              ),
              {},
              {
                ref: t,
                style: s(
                  {
                    "--radix-accordion-content-height":
                      "var(--radix-collapsible-content-height)",
                    "--radix-accordion-content-width":
                      "var(--radix-collapsible-content-width)",
                  },
                  e.style,
                ),
              },
            ),
          );
        });
      function od(e) {
        return e ? "open" : "closed";
      }
      ad.displayName = rd;
      var id = _c,
        ld = Xc,
        sd = ed,
        ud = nd,
        cd = ad;
      const dd = (e) => {
          const t = ((e) =>
            e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
              n ? n.toUpperCase() : t.toLowerCase(),
            ))(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        fd = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter(
              (e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t,
            )
            .join(" ")
            .trim();
        };
      var hd = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      const md = [
          "color",
          "size",
          "strokeWidth",
          "absoluteStrokeWidth",
          "className",
          "children",
          "iconNode",
        ],
        pd = (0, e.forwardRef)((t, n) => {
          let {
              color: r = "currentColor",
              size: a = 24,
              strokeWidth: o = 2,
              absoluteStrokeWidth: i,
              className: l = "",
              children: c,
              iconNode: d,
            } = t,
            f = u(t, md);
          return (0, e.createElement)(
            "svg",
            s(
              s(
                s({ ref: n }, hd),
                {},
                {
                  width: a,
                  height: a,
                  stroke: r,
                  strokeWidth: i ? (24 * Number(o)) / Number(a) : o,
                  className: fd("lucide", l),
                },
                !c &&
                  !((e) => {
                    for (const t in e)
                      if (
                        t.startsWith("aria-") ||
                        "role" === t ||
                        "title" === t
                      )
                        return !0;
                  })(f) && { "aria-hidden": "true" },
              ),
              f,
            ),
            [
              ...d.map((t) => {
                let [n, r] = t;
                return (0, e.createElement)(n, r);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ],
          );
        }),
        gd = ["className"],
        vd = ((t, n) => {
          const r = (0, e.forwardRef)((r, a) => {
            let { className: o } = r,
              i = u(r, gd);
            return (0, e.createElement)(
              pd,
              s(
                {
                  ref: a,
                  iconNode: n,
                  className: fd(
                    "lucide-".concat(
                      ((l = dd(t)),
                      l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()),
                    ),
                    "lucide-".concat(t),
                    o,
                  ),
                },
                i,
              ),
            );
            var l;
          });
          return ((r.displayName = dd(t)), r);
        })("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
      function yd(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++)
              e[t] && (n = yd(e[t])) && (r && (r += " "), (r += n));
          } else for (n in e) e[n] && (r && (r += " "), (r += n));
        return r;
      }
      function bd() {
        for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
          (e = arguments[n]) && (t = yd(e)) && (r && (r += " "), (r += t));
        return r;
      }
      const xd = function () {
          return {
            nextPart:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Map(),
            validators:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            classGroupId: arguments.length > 2 ? arguments[2] : void 0,
          };
        },
        wd = "-",
        kd = [],
        Ad = (e) => {
          const t = Md(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
              e;
          return {
            getClassGroupId: (e) => {
              if (e.startsWith("[") && e.endsWith("]")) return Sd(e);
              const n = e.split(wd),
                r = "" === n[0] && n.length > 1 ? 1 : 0;
              return Ed(n, r, t);
            },
            getConflictingClassGroupIds: (e, t) => {
              if (t) {
                const t = r[e],
                  a = n[e];
                return t
                  ? a
                    ? ((e, t) => {
                        const n = new Array(e.length + t.length);
                        for (let r = 0; r < e.length; r++) n[r] = e[r];
                        for (let r = 0; r < t.length; r++)
                          n[e.length + r] = t[r];
                        return n;
                      })(a, t)
                    : t
                  : a || kd;
              }
              return n[e] || kd;
            },
          };
        },
        Ed = (e, t, n) => {
          if (0 === e.length - t) return n.classGroupId;
          const r = e[t],
            a = n.nextPart.get(r);
          if (a) {
            const n = Ed(e, t + 1, a);
            if (n) return n;
          }
          const o = n.validators;
          if (null === o) return;
          const i = 0 === t ? e.join(wd) : e.slice(t).join(wd),
            l = o.length;
          for (let s = 0; s < l; s++) {
            const e = o[s];
            if (e.validator(i)) return e.classGroupId;
          }
        },
        Sd = (e) =>
          -1 === e.slice(1, -1).indexOf(":")
            ? void 0
            : (() => {
                const t = e.slice(1, -1),
                  n = t.indexOf(":"),
                  r = t.slice(0, n);
                return r ? "arbitrary.." + r : void 0;
              })(),
        Md = (e) => {
          const { theme: t, classGroups: n } = e;
          return Cd(n, t);
        },
        Cd = (e, t) => {
          const n = xd();
          for (const r in e) {
            const a = e[r];
            Fd(a, n, r, t);
          }
          return n;
        },
        Fd = (e, t, n, r) => {
          const a = e.length;
          for (let o = 0; o < a; o++) {
            const a = e[o];
            Pd(a, t, n, r);
          }
        },
        Pd = (e, t, n, r) => {
          "string" !== typeof e
            ? "function" !== typeof e
              ? Ld(e, t, n, r)
              : Vd(e, t, n, r)
            : Td(e, t, n);
        },
        Td = (e, t, n) => {
          ("" === e ? t : Nd(t, e)).classGroupId = n;
        },
        Vd = (e, t, n, r) => {
          Dd(e)
            ? Fd(e(r), t, n, r)
            : (null === t.validators && (t.validators = []),
              t.validators.push(
                ((e, t) => ({ classGroupId: e, validator: t }))(n, e),
              ));
        },
        Ld = (e, t, n, r) => {
          const a = Object.entries(e),
            o = a.length;
          for (let i = 0; i < o; i++) {
            const [e, o] = a[i];
            Fd(o, Nd(t, e), n, r);
          }
        },
        Nd = (e, t) => {
          let n = e;
          const r = t.split(wd),
            a = r.length;
          for (let o = 0; o < a; o++) {
            const e = r[o];
            let t = n.nextPart.get(e);
            (t || ((t = xd()), n.nextPart.set(e, t)), (n = t));
          }
          return n;
        },
        Dd = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
        Hd = (e) => {
          if (e < 1) return { get: () => {}, set: () => {} };
          let t = 0,
            n = Object.create(null),
            r = Object.create(null);
          const a = (a, o) => {
            ((n[a] = o),
              t++,
              t > e && ((t = 0), (r = n), (n = Object.create(null))));
          };
          return {
            get(e) {
              let t = n[e];
              return void 0 !== t
                ? t
                : void 0 !== (t = r[e])
                  ? (a(e, t), t)
                  : void 0;
            },
            set(e, t) {
              e in n ? (n[e] = t) : a(e, t);
            },
          };
        },
        jd = [],
        Zd = (e, t, n, r, a) => ({
          modifiers: e,
          hasImportantModifier: t,
          baseClassName: n,
          maybePostfixModifierPosition: r,
          isExternal: a,
        }),
        zd = (e) => {
          const { prefix: t, experimentalParseClassName: n } = e;
          let r = (e) => {
            const t = [];
            let n,
              r = 0,
              a = 0,
              o = 0;
            const i = e.length;
            for (let c = 0; c < i; c++) {
              const i = e[c];
              if (0 === r && 0 === a) {
                if (":" === i) {
                  (t.push(e.slice(o, c)), (o = c + 1));
                  continue;
                }
                if ("/" === i) {
                  n = c;
                  continue;
                }
              }
              "[" === i
                ? r++
                : "]" === i
                  ? r--
                  : "(" === i
                    ? a++
                    : ")" === i && a--;
            }
            const l = 0 === t.length ? e : e.slice(o);
            let s = l,
              u = !1;
            l.endsWith("!")
              ? ((s = l.slice(0, -1)), (u = !0))
              : l.startsWith("!") && ((s = l.slice(1)), (u = !0));
            return Zd(t, u, s, n && n > o ? n - o : void 0);
          };
          if (t) {
            const e = t + ":",
              n = r;
            r = (t) =>
              t.startsWith(e)
                ? n(t.slice(e.length))
                : Zd(jd, !1, t, void 0, !0);
          }
          if (n) {
            const e = r;
            r = (t) => n({ className: t, parseClassName: e });
          }
          return r;
        },
        _d = (e) => {
          const t = new Map();
          return (
            e.orderSensitiveModifiers.forEach((e, n) => {
              t.set(e, 1e6 + n);
            }),
            (e) => {
              const n = [];
              let r = [];
              for (let a = 0; a < e.length; a++) {
                const o = e[a],
                  i = "[" === o[0],
                  l = t.has(o);
                i || l
                  ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])),
                    n.push(o))
                  : r.push(o);
              }
              return (r.length > 0 && (r.sort(), n.push(...r)), n);
            }
          );
        },
        Rd = /\s+/,
        Od = (e) => {
          if ("string" === typeof e) return e;
          let t,
            n = "";
          for (let r = 0; r < e.length; r++)
            e[r] && (t = Od(e[r])) && (n && (n += " "), (n += t));
          return n;
        },
        Id = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          let a, o, i, l;
          const u = (e) => {
            const t = o(e);
            if (t) return t;
            const n = ((e, t) => {
              const {
                  parseClassName: n,
                  getClassGroupId: r,
                  getConflictingClassGroupIds: a,
                  sortModifiers: o,
                } = t,
                i = [],
                l = e.trim().split(Rd);
              let s = "";
              for (let u = l.length - 1; u >= 0; u -= 1) {
                const e = l[u],
                  {
                    isExternal: t,
                    modifiers: c,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: h,
                  } = n(e);
                if (t) {
                  s = e + (s.length > 0 ? " " + s : s);
                  continue;
                }
                let m = !!h,
                  p = r(m ? f.substring(0, h) : f);
                if (!p) {
                  if (!m) {
                    s = e + (s.length > 0 ? " " + s : s);
                    continue;
                  }
                  if (((p = r(f)), !p)) {
                    s = e + (s.length > 0 ? " " + s : s);
                    continue;
                  }
                  m = !1;
                }
                const g =
                    0 === c.length
                      ? ""
                      : 1 === c.length
                        ? c[0]
                        : o(c).join(":"),
                  v = d ? g + "!" : g,
                  y = v + p;
                if (i.indexOf(y) > -1) continue;
                i.push(y);
                const b = a(p, m);
                for (let n = 0; n < b.length; ++n) {
                  const e = b[n];
                  i.push(v + e);
                }
                s = e + (s.length > 0 ? " " + s : s);
              }
              return s;
            })(e, a);
            return (i(e, n), n);
          };
          return (
            (l = (t) => {
              const r = n.reduce((e, t) => t(e), e());
              return (
                (a = ((e) =>
                  s(
                    {
                      cache: Hd(e.cacheSize),
                      parseClassName: zd(e),
                      sortModifiers: _d(e),
                    },
                    Ad(e),
                  ))(r)),
                (o = a.cache.get),
                (i = a.cache.set),
                (l = u),
                u(t)
              );
            }),
            function () {
              return l(
                (function () {
                  let e,
                    t,
                    n = 0,
                    r = "";
                  for (; n < arguments.length; ) {
                    var a;
                    (e =
                      (a = n++) < 0 || arguments.length <= a
                        ? void 0
                        : arguments[a]) &&
                      (t = Od(e)) &&
                      (r && (r += " "), (r += t));
                  }
                  return r;
                })(...arguments),
              );
            }
          );
        },
        Bd = [],
        Ud = (e) => {
          const t = (t) => t[e] || Bd;
          return ((t.isThemeGetter = !0), t);
        },
        Wd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        qd = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        $d = /^\d+\/\d+$/,
        Yd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        Kd =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        Qd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        Gd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        Xd =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        Jd = (e) => $d.test(e),
        ef = (e) => !!e && !Number.isNaN(Number(e)),
        tf = (e) => !!e && Number.isInteger(Number(e)),
        nf = (e) => e.endsWith("%") && ef(e.slice(0, -1)),
        rf = (e) => Yd.test(e),
        af = () => !0,
        of = (e) => Kd.test(e) && !Qd.test(e),
        lf = () => !1,
        sf = (e) => Gd.test(e),
        uf = (e) => Xd.test(e),
        cf = (e) => !ff(e) && !yf(e),
        df = (e) => Sf(e, Pf, lf),
        ff = (e) => Wd.test(e),
        hf = (e) => Sf(e, Tf, of),
        mf = (e) => Sf(e, Vf, ef),
        pf = (e) => Sf(e, Cf, lf),
        gf = (e) => Sf(e, Ff, uf),
        vf = (e) => Sf(e, Nf, sf),
        yf = (e) => qd.test(e),
        bf = (e) => Mf(e, Tf),
        xf = (e) => Mf(e, Lf),
        wf = (e) => Mf(e, Cf),
        kf = (e) => Mf(e, Pf),
        Af = (e) => Mf(e, Ff),
        Ef = (e) => Mf(e, Nf, !0),
        Sf = (e, t, n) => {
          const r = Wd.exec(e);
          return !!r && (r[1] ? t(r[1]) : n(r[2]));
        },
        Mf = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const r = qd.exec(e);
          return !!r && (r[1] ? t(r[1]) : n);
        },
        Cf = (e) => "position" === e || "percentage" === e,
        Ff = (e) => "image" === e || "url" === e,
        Pf = (e) => "length" === e || "size" === e || "bg-size" === e,
        Tf = (e) => "length" === e,
        Vf = (e) => "number" === e,
        Lf = (e) => "family-name" === e,
        Nf = (e) => "shadow" === e,
        Df =
          (Symbol.toStringTag,
          () => {
            const e = Ud("color"),
              t = Ud("font"),
              n = Ud("text"),
              r = Ud("font-weight"),
              a = Ud("tracking"),
              o = Ud("leading"),
              i = Ud("breakpoint"),
              l = Ud("container"),
              s = Ud("spacing"),
              u = Ud("radius"),
              c = Ud("shadow"),
              d = Ud("inset-shadow"),
              f = Ud("text-shadow"),
              h = Ud("drop-shadow"),
              m = Ud("blur"),
              p = Ud("perspective"),
              g = Ud("aspect"),
              v = Ud("ease"),
              y = Ud("animate"),
              b = () => [
                "center",
                "top",
                "bottom",
                "left",
                "right",
                "top-left",
                "left-top",
                "top-right",
                "right-top",
                "bottom-right",
                "right-bottom",
                "bottom-left",
                "left-bottom",
                yf,
                ff,
              ],
              x = () => [yf, ff, s],
              w = () => [Jd, "full", "auto", ...x()],
              k = () => [tf, "none", "subgrid", yf, ff],
              A = () => ["auto", { span: ["full", tf, yf, ff] }, tf, yf, ff],
              E = () => [tf, "auto", yf, ff],
              S = () => ["auto", "min", "max", "fr", yf, ff],
              M = () => ["auto", ...x()],
              C = () => [
                Jd,
                "auto",
                "full",
                "dvw",
                "dvh",
                "lvw",
                "lvh",
                "svw",
                "svh",
                "min",
                "max",
                "fit",
                ...x(),
              ],
              F = () => [e, yf, ff],
              P = () => [
                "center",
                "top",
                "bottom",
                "left",
                "right",
                "top-left",
                "left-top",
                "top-right",
                "right-top",
                "bottom-right",
                "right-bottom",
                "bottom-left",
                "left-bottom",
                wf,
                pf,
                { position: [yf, ff] },
              ],
              T = () => [
                "auto",
                "cover",
                "contain",
                kf,
                df,
                { size: [yf, ff] },
              ],
              V = () => [nf, bf, hf],
              L = () => ["", "none", "full", u, yf, ff],
              N = () => ["", ef, bf, hf],
              D = () => [ef, nf, wf, pf],
              H = () => ["", "none", m, yf, ff],
              j = () => ["none", ef, yf, ff],
              Z = () => ["none", ef, yf, ff],
              z = () => [ef, yf, ff],
              _ = () => [Jd, "full", ...x()];
            return {
              cacheSize: 500,
              theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [rf],
                breakpoint: [rf],
                color: [af],
                container: [rf],
                "drop-shadow": [rf],
                ease: ["in", "out", "in-out"],
                font: [cf],
                "font-weight": [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                ],
                "inset-shadow": [rf],
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                ],
                perspective: [
                  "dramatic",
                  "near",
                  "normal",
                  "midrange",
                  "distant",
                  "none",
                ],
                radius: [rf],
                shadow: [rf],
                spacing: ["px", ef],
                text: [rf],
                "text-shadow": [rf],
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                ],
              },
              classGroups: {
                aspect: [{ aspect: ["auto", "square", Jd, ff, yf, g] }],
                container: ["container"],
                columns: [{ columns: [ef, ff, yf, l] }],
                "break-after": [
                  {
                    "break-after": [
                      "auto",
                      "avoid",
                      "all",
                      "avoid-page",
                      "page",
                      "left",
                      "right",
                      "column",
                    ],
                  },
                ],
                "break-before": [
                  {
                    "break-before": [
                      "auto",
                      "avoid",
                      "all",
                      "avoid-page",
                      "page",
                      "left",
                      "right",
                      "column",
                    ],
                  },
                ],
                "break-inside": [
                  {
                    "break-inside": [
                      "auto",
                      "avoid",
                      "avoid-page",
                      "avoid-column",
                    ],
                  },
                ],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                  "block",
                  "inline-block",
                  "inline",
                  "flex",
                  "inline-flex",
                  "table",
                  "inline-table",
                  "table-caption",
                  "table-cell",
                  "table-column",
                  "table-column-group",
                  "table-footer-group",
                  "table-header-group",
                  "table-row-group",
                  "table-row",
                  "flow-root",
                  "grid",
                  "inline-grid",
                  "contents",
                  "list-item",
                  "hidden",
                ],
                sr: ["sr-only", "not-sr-only"],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [
                  { clear: ["left", "right", "both", "none", "start", "end"] },
                ],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [
                  {
                    object: ["contain", "cover", "fill", "none", "scale-down"],
                  },
                ],
                "object-position": [{ object: b() }],
                overflow: [
                  { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
                ],
                "overflow-x": [
                  {
                    "overflow-x": [
                      "auto",
                      "hidden",
                      "clip",
                      "visible",
                      "scroll",
                    ],
                  },
                ],
                "overflow-y": [
                  {
                    "overflow-y": [
                      "auto",
                      "hidden",
                      "clip",
                      "visible",
                      "scroll",
                    ],
                  },
                ],
                overscroll: [{ overscroll: ["auto", "contain", "none"] }],
                "overscroll-x": [
                  { "overscroll-x": ["auto", "contain", "none"] },
                ],
                "overscroll-y": [
                  { "overscroll-y": ["auto", "contain", "none"] },
                ],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: w() }],
                "inset-x": [{ "inset-x": w() }],
                "inset-y": [{ "inset-y": w() }],
                start: [{ start: w() }],
                end: [{ end: w() }],
                top: [{ top: w() }],
                right: [{ right: w() }],
                bottom: [{ bottom: w() }],
                left: [{ left: w() }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: [tf, "auto", yf, ff] }],
                basis: [{ basis: [Jd, "full", "auto", l, ...x()] }],
                "flex-direction": [
                  { flex: ["row", "row-reverse", "col", "col-reverse"] },
                ],
                "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
                flex: [{ flex: [ef, Jd, "auto", "initial", "none", ff] }],
                grow: [{ grow: ["", ef, yf, ff] }],
                shrink: [{ shrink: ["", ef, yf, ff] }],
                order: [{ order: [tf, "first", "last", "none", yf, ff] }],
                "grid-cols": [{ "grid-cols": k() }],
                "col-start-end": [{ col: A() }],
                "col-start": [{ "col-start": E() }],
                "col-end": [{ "col-end": E() }],
                "grid-rows": [{ "grid-rows": k() }],
                "row-start-end": [{ row: A() }],
                "row-start": [{ "row-start": E() }],
                "row-end": [{ "row-end": E() }],
                "grid-flow": [
                  {
                    "grid-flow": [
                      "row",
                      "col",
                      "dense",
                      "row-dense",
                      "col-dense",
                    ],
                  },
                ],
                "auto-cols": [{ "auto-cols": S() }],
                "auto-rows": [{ "auto-rows": S() }],
                gap: [{ gap: x() }],
                "gap-x": [{ "gap-x": x() }],
                "gap-y": [{ "gap-y": x() }],
                "justify-content": [
                  {
                    justify: [
                      "start",
                      "end",
                      "center",
                      "between",
                      "around",
                      "evenly",
                      "stretch",
                      "baseline",
                      "center-safe",
                      "end-safe",
                      "normal",
                    ],
                  },
                ],
                "justify-items": [
                  {
                    "justify-items": [
                      "start",
                      "end",
                      "center",
                      "stretch",
                      "center-safe",
                      "end-safe",
                      "normal",
                    ],
                  },
                ],
                "justify-self": [
                  {
                    "justify-self": [
                      "auto",
                      "start",
                      "end",
                      "center",
                      "stretch",
                      "center-safe",
                      "end-safe",
                    ],
                  },
                ],
                "align-content": [
                  {
                    content: [
                      "normal",
                      "start",
                      "end",
                      "center",
                      "between",
                      "around",
                      "evenly",
                      "stretch",
                      "baseline",
                      "center-safe",
                      "end-safe",
                    ],
                  },
                ],
                "align-items": [
                  {
                    items: [
                      "start",
                      "end",
                      "center",
                      "stretch",
                      "center-safe",
                      "end-safe",
                      { baseline: ["", "last"] },
                    ],
                  },
                ],
                "align-self": [
                  {
                    self: [
                      "auto",
                      "start",
                      "end",
                      "center",
                      "stretch",
                      "center-safe",
                      "end-safe",
                      { baseline: ["", "last"] },
                    ],
                  },
                ],
                "place-content": [
                  {
                    "place-content": [
                      "start",
                      "end",
                      "center",
                      "between",
                      "around",
                      "evenly",
                      "stretch",
                      "baseline",
                      "center-safe",
                      "end-safe",
                    ],
                  },
                ],
                "place-items": [
                  {
                    "place-items": [
                      "start",
                      "end",
                      "center",
                      "stretch",
                      "center-safe",
                      "end-safe",
                      "baseline",
                    ],
                  },
                ],
                "place-self": [
                  {
                    "place-self": [
                      "auto",
                      "start",
                      "end",
                      "center",
                      "stretch",
                      "center-safe",
                      "end-safe",
                    ],
                  },
                ],
                p: [{ p: x() }],
                px: [{ px: x() }],
                py: [{ py: x() }],
                ps: [{ ps: x() }],
                pe: [{ pe: x() }],
                pt: [{ pt: x() }],
                pr: [{ pr: x() }],
                pb: [{ pb: x() }],
                pl: [{ pl: x() }],
                m: [{ m: M() }],
                mx: [{ mx: M() }],
                my: [{ my: M() }],
                ms: [{ ms: M() }],
                me: [{ me: M() }],
                mt: [{ mt: M() }],
                mr: [{ mr: M() }],
                mb: [{ mb: M() }],
                ml: [{ ml: M() }],
                "space-x": [{ "space-x": x() }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": x() }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{ size: C() }],
                w: [{ w: [l, "screen", ...C()] }],
                "min-w": [{ "min-w": [l, "screen", "none", ...C()] }],
                "max-w": [
                  {
                    "max-w": [
                      l,
                      "screen",
                      "none",
                      "prose",
                      { screen: [i] },
                      ...C(),
                    ],
                  },
                ],
                h: [{ h: ["screen", "lh", ...C()] }],
                "min-h": [{ "min-h": ["screen", "lh", "none", ...C()] }],
                "max-h": [{ "max-h": ["screen", "lh", ...C()] }],
                "font-size": [{ text: ["base", n, bf, hf] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{ font: [r, yf, mf] }],
                "font-stretch": [
                  {
                    "font-stretch": [
                      "ultra-condensed",
                      "extra-condensed",
                      "condensed",
                      "semi-condensed",
                      "normal",
                      "semi-expanded",
                      "expanded",
                      "extra-expanded",
                      "ultra-expanded",
                      nf,
                      ff,
                    ],
                  },
                ],
                "font-family": [{ font: [xf, ff, t] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: [a, yf, ff] }],
                "line-clamp": [{ "line-clamp": [ef, "none", yf, mf] }],
                leading: [{ leading: [o, ...x()] }],
                "list-image": [{ "list-image": ["none", yf, ff] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "list-style-type": [
                  { list: ["disc", "decimal", "none", yf, ff] },
                ],
                "text-alignment": [
                  {
                    text: [
                      "left",
                      "center",
                      "right",
                      "justify",
                      "start",
                      "end",
                    ],
                  },
                ],
                "placeholder-color": [{ placeholder: F() }],
                "text-color": [{ text: F() }],
                "text-decoration": [
                  "underline",
                  "overline",
                  "line-through",
                  "no-underline",
                ],
                "text-decoration-style": [
                  {
                    decoration: ["solid", "dashed", "dotted", "double", "wavy"],
                  },
                ],
                "text-decoration-thickness": [
                  { decoration: [ef, "from-font", "auto", yf, hf] },
                ],
                "text-decoration-color": [{ decoration: F() }],
                "underline-offset": [
                  { "underline-offset": [ef, "auto", yf, ff] },
                ],
                "text-transform": [
                  "uppercase",
                  "lowercase",
                  "capitalize",
                  "normal-case",
                ],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [
                  { text: ["wrap", "nowrap", "balance", "pretty"] },
                ],
                indent: [{ indent: x() }],
                "vertical-align": [
                  {
                    align: [
                      "baseline",
                      "top",
                      "middle",
                      "bottom",
                      "text-top",
                      "text-bottom",
                      "sub",
                      "super",
                      yf,
                      ff,
                    ],
                  },
                ],
                whitespace: [
                  {
                    whitespace: [
                      "normal",
                      "nowrap",
                      "pre",
                      "pre-line",
                      "pre-wrap",
                      "break-spaces",
                    ],
                  },
                ],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", yf, ff] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [
                  { "bg-clip": ["border", "padding", "content", "text"] },
                ],
                "bg-origin": [
                  { "bg-origin": ["border", "padding", "content"] },
                ],
                "bg-position": [{ bg: P() }],
                "bg-repeat": [
                  {
                    bg: [
                      "no-repeat",
                      { repeat: ["", "x", "y", "space", "round"] },
                    ],
                  },
                ],
                "bg-size": [{ bg: T() }],
                "bg-image": [
                  {
                    bg: [
                      "none",
                      {
                        linear: [
                          { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                          tf,
                          yf,
                          ff,
                        ],
                        radial: ["", yf, ff],
                        conic: [tf, yf, ff],
                      },
                      Af,
                      gf,
                    ],
                  },
                ],
                "bg-color": [{ bg: F() }],
                "gradient-from-pos": [{ from: V() }],
                "gradient-via-pos": [{ via: V() }],
                "gradient-to-pos": [{ to: V() }],
                "gradient-from": [{ from: F() }],
                "gradient-via": [{ via: F() }],
                "gradient-to": [{ to: F() }],
                rounded: [{ rounded: L() }],
                "rounded-s": [{ "rounded-s": L() }],
                "rounded-e": [{ "rounded-e": L() }],
                "rounded-t": [{ "rounded-t": L() }],
                "rounded-r": [{ "rounded-r": L() }],
                "rounded-b": [{ "rounded-b": L() }],
                "rounded-l": [{ "rounded-l": L() }],
                "rounded-ss": [{ "rounded-ss": L() }],
                "rounded-se": [{ "rounded-se": L() }],
                "rounded-ee": [{ "rounded-ee": L() }],
                "rounded-es": [{ "rounded-es": L() }],
                "rounded-tl": [{ "rounded-tl": L() }],
                "rounded-tr": [{ "rounded-tr": L() }],
                "rounded-br": [{ "rounded-br": L() }],
                "rounded-bl": [{ "rounded-bl": L() }],
                "border-w": [{ border: N() }],
                "border-w-x": [{ "border-x": N() }],
                "border-w-y": [{ "border-y": N() }],
                "border-w-s": [{ "border-s": N() }],
                "border-w-e": [{ "border-e": N() }],
                "border-w-t": [{ "border-t": N() }],
                "border-w-r": [{ "border-r": N() }],
                "border-w-b": [{ "border-b": N() }],
                "border-w-l": [{ "border-l": N() }],
                "divide-x": [{ "divide-x": N() }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": N() }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [
                  {
                    border: [
                      "solid",
                      "dashed",
                      "dotted",
                      "double",
                      "hidden",
                      "none",
                    ],
                  },
                ],
                "divide-style": [
                  {
                    divide: [
                      "solid",
                      "dashed",
                      "dotted",
                      "double",
                      "hidden",
                      "none",
                    ],
                  },
                ],
                "border-color": [{ border: F() }],
                "border-color-x": [{ "border-x": F() }],
                "border-color-y": [{ "border-y": F() }],
                "border-color-s": [{ "border-s": F() }],
                "border-color-e": [{ "border-e": F() }],
                "border-color-t": [{ "border-t": F() }],
                "border-color-r": [{ "border-r": F() }],
                "border-color-b": [{ "border-b": F() }],
                "border-color-l": [{ "border-l": F() }],
                "divide-color": [{ divide: F() }],
                "outline-style": [
                  {
                    outline: [
                      "solid",
                      "dashed",
                      "dotted",
                      "double",
                      "none",
                      "hidden",
                    ],
                  },
                ],
                "outline-offset": [{ "outline-offset": [ef, yf, ff] }],
                "outline-w": [{ outline: ["", ef, bf, hf] }],
                "outline-color": [{ outline: F() }],
                shadow: [{ shadow: ["", "none", c, Ef, vf] }],
                "shadow-color": [{ shadow: F() }],
                "inset-shadow": [{ "inset-shadow": ["none", d, Ef, vf] }],
                "inset-shadow-color": [{ "inset-shadow": F() }],
                "ring-w": [{ ring: N() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: F() }],
                "ring-offset-w": [{ "ring-offset": [ef, hf] }],
                "ring-offset-color": [{ "ring-offset": F() }],
                "inset-ring-w": [{ "inset-ring": N() }],
                "inset-ring-color": [{ "inset-ring": F() }],
                "text-shadow": [{ "text-shadow": ["none", f, Ef, vf] }],
                "text-shadow-color": [{ "text-shadow": F() }],
                opacity: [{ opacity: [ef, yf, ff] }],
                "mix-blend": [
                  {
                    "mix-blend": [
                      "normal",
                      "multiply",
                      "screen",
                      "overlay",
                      "darken",
                      "lighten",
                      "color-dodge",
                      "color-burn",
                      "hard-light",
                      "soft-light",
                      "difference",
                      "exclusion",
                      "hue",
                      "saturation",
                      "color",
                      "luminosity",
                      "plus-darker",
                      "plus-lighter",
                    ],
                  },
                ],
                "bg-blend": [
                  {
                    "bg-blend": [
                      "normal",
                      "multiply",
                      "screen",
                      "overlay",
                      "darken",
                      "lighten",
                      "color-dodge",
                      "color-burn",
                      "hard-light",
                      "soft-light",
                      "difference",
                      "exclusion",
                      "hue",
                      "saturation",
                      "color",
                      "luminosity",
                    ],
                  },
                ],
                "mask-clip": [
                  {
                    "mask-clip": [
                      "border",
                      "padding",
                      "content",
                      "fill",
                      "stroke",
                      "view",
                    ],
                  },
                  "mask-no-clip",
                ],
                "mask-composite": [
                  { mask: ["add", "subtract", "intersect", "exclude"] },
                ],
                "mask-image-linear-pos": [{ "mask-linear": [ef] }],
                "mask-image-linear-from-pos": [{ "mask-linear-from": D() }],
                "mask-image-linear-to-pos": [{ "mask-linear-to": D() }],
                "mask-image-linear-from-color": [{ "mask-linear-from": F() }],
                "mask-image-linear-to-color": [{ "mask-linear-to": F() }],
                "mask-image-t-from-pos": [{ "mask-t-from": D() }],
                "mask-image-t-to-pos": [{ "mask-t-to": D() }],
                "mask-image-t-from-color": [{ "mask-t-from": F() }],
                "mask-image-t-to-color": [{ "mask-t-to": F() }],
                "mask-image-r-from-pos": [{ "mask-r-from": D() }],
                "mask-image-r-to-pos": [{ "mask-r-to": D() }],
                "mask-image-r-from-color": [{ "mask-r-from": F() }],
                "mask-image-r-to-color": [{ "mask-r-to": F() }],
                "mask-image-b-from-pos": [{ "mask-b-from": D() }],
                "mask-image-b-to-pos": [{ "mask-b-to": D() }],
                "mask-image-b-from-color": [{ "mask-b-from": F() }],
                "mask-image-b-to-color": [{ "mask-b-to": F() }],
                "mask-image-l-from-pos": [{ "mask-l-from": D() }],
                "mask-image-l-to-pos": [{ "mask-l-to": D() }],
                "mask-image-l-from-color": [{ "mask-l-from": F() }],
                "mask-image-l-to-color": [{ "mask-l-to": F() }],
                "mask-image-x-from-pos": [{ "mask-x-from": D() }],
                "mask-image-x-to-pos": [{ "mask-x-to": D() }],
                "mask-image-x-from-color": [{ "mask-x-from": F() }],
                "mask-image-x-to-color": [{ "mask-x-to": F() }],
                "mask-image-y-from-pos": [{ "mask-y-from": D() }],
                "mask-image-y-to-pos": [{ "mask-y-to": D() }],
                "mask-image-y-from-color": [{ "mask-y-from": F() }],
                "mask-image-y-to-color": [{ "mask-y-to": F() }],
                "mask-image-radial": [{ "mask-radial": [yf, ff] }],
                "mask-image-radial-from-pos": [{ "mask-radial-from": D() }],
                "mask-image-radial-to-pos": [{ "mask-radial-to": D() }],
                "mask-image-radial-from-color": [{ "mask-radial-from": F() }],
                "mask-image-radial-to-color": [{ "mask-radial-to": F() }],
                "mask-image-radial-shape": [
                  { "mask-radial": ["circle", "ellipse"] },
                ],
                "mask-image-radial-size": [
                  {
                    "mask-radial": [
                      {
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"],
                      },
                    ],
                  },
                ],
                "mask-image-radial-pos": [
                  {
                    "mask-radial-at": [
                      "center",
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "top-left",
                      "left-top",
                      "top-right",
                      "right-top",
                      "bottom-right",
                      "right-bottom",
                      "bottom-left",
                      "left-bottom",
                    ],
                  },
                ],
                "mask-image-conic-pos": [{ "mask-conic": [ef] }],
                "mask-image-conic-from-pos": [{ "mask-conic-from": D() }],
                "mask-image-conic-to-pos": [{ "mask-conic-to": D() }],
                "mask-image-conic-from-color": [{ "mask-conic-from": F() }],
                "mask-image-conic-to-color": [{ "mask-conic-to": F() }],
                "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
                "mask-origin": [
                  {
                    "mask-origin": [
                      "border",
                      "padding",
                      "content",
                      "fill",
                      "stroke",
                      "view",
                    ],
                  },
                ],
                "mask-position": [{ mask: P() }],
                "mask-repeat": [
                  {
                    mask: [
                      "no-repeat",
                      { repeat: ["", "x", "y", "space", "round"] },
                    ],
                  },
                ],
                "mask-size": [{ mask: T() }],
                "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
                "mask-image": [{ mask: ["none", yf, ff] }],
                filter: [{ filter: ["", "none", yf, ff] }],
                blur: [{ blur: H() }],
                brightness: [{ brightness: [ef, yf, ff] }],
                contrast: [{ contrast: [ef, yf, ff] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", h, Ef, vf] }],
                "drop-shadow-color": [{ "drop-shadow": F() }],
                grayscale: [{ grayscale: ["", ef, yf, ff] }],
                "hue-rotate": [{ "hue-rotate": [ef, yf, ff] }],
                invert: [{ invert: ["", ef, yf, ff] }],
                saturate: [{ saturate: [ef, yf, ff] }],
                sepia: [{ sepia: ["", ef, yf, ff] }],
                "backdrop-filter": [
                  { "backdrop-filter": ["", "none", yf, ff] },
                ],
                "backdrop-blur": [{ "backdrop-blur": H() }],
                "backdrop-brightness": [
                  { "backdrop-brightness": [ef, yf, ff] },
                ],
                "backdrop-contrast": [{ "backdrop-contrast": [ef, yf, ff] }],
                "backdrop-grayscale": [
                  { "backdrop-grayscale": ["", ef, yf, ff] },
                ],
                "backdrop-hue-rotate": [
                  { "backdrop-hue-rotate": [ef, yf, ff] },
                ],
                "backdrop-invert": [{ "backdrop-invert": ["", ef, yf, ff] }],
                "backdrop-opacity": [{ "backdrop-opacity": [ef, yf, ff] }],
                "backdrop-saturate": [{ "backdrop-saturate": [ef, yf, ff] }],
                "backdrop-sepia": [{ "backdrop-sepia": ["", ef, yf, ff] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": x() }],
                "border-spacing-x": [{ "border-spacing-x": x() }],
                "border-spacing-y": [{ "border-spacing-y": x() }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [
                  {
                    transition: [
                      "",
                      "all",
                      "colors",
                      "opacity",
                      "shadow",
                      "transform",
                      "none",
                      yf,
                      ff,
                    ],
                  },
                ],
                "transition-behavior": [{ transition: ["normal", "discrete"] }],
                duration: [{ duration: [ef, "initial", yf, ff] }],
                ease: [{ ease: ["linear", "initial", v, yf, ff] }],
                delay: [{ delay: [ef, yf, ff] }],
                animate: [{ animate: ["none", y, yf, ff] }],
                backface: [{ backface: ["hidden", "visible"] }],
                perspective: [{ perspective: [p, yf, ff] }],
                "perspective-origin": [{ "perspective-origin": b() }],
                rotate: [{ rotate: j() }],
                "rotate-x": [{ "rotate-x": j() }],
                "rotate-y": [{ "rotate-y": j() }],
                "rotate-z": [{ "rotate-z": j() }],
                scale: [{ scale: Z() }],
                "scale-x": [{ "scale-x": Z() }],
                "scale-y": [{ "scale-y": Z() }],
                "scale-z": [{ "scale-z": Z() }],
                "scale-3d": ["scale-3d"],
                skew: [{ skew: z() }],
                "skew-x": [{ "skew-x": z() }],
                "skew-y": [{ "skew-y": z() }],
                transform: [{ transform: [yf, ff, "", "none", "gpu", "cpu"] }],
                "transform-origin": [{ origin: b() }],
                "transform-style": [{ transform: ["3d", "flat"] }],
                translate: [{ translate: _() }],
                "translate-x": [{ "translate-x": _() }],
                "translate-y": [{ "translate-y": _() }],
                "translate-z": [{ "translate-z": _() }],
                "translate-none": ["translate-none"],
                accent: [{ accent: F() }],
                appearance: [{ appearance: ["none", "auto"] }],
                "caret-color": [{ caret: F() }],
                "color-scheme": [
                  {
                    scheme: [
                      "normal",
                      "dark",
                      "light",
                      "light-dark",
                      "only-dark",
                      "only-light",
                    ],
                  },
                ],
                cursor: [
                  {
                    cursor: [
                      "auto",
                      "default",
                      "pointer",
                      "wait",
                      "text",
                      "move",
                      "help",
                      "not-allowed",
                      "none",
                      "context-menu",
                      "progress",
                      "cell",
                      "crosshair",
                      "vertical-text",
                      "alias",
                      "copy",
                      "no-drop",
                      "grab",
                      "grabbing",
                      "all-scroll",
                      "col-resize",
                      "row-resize",
                      "n-resize",
                      "e-resize",
                      "s-resize",
                      "w-resize",
                      "ne-resize",
                      "nw-resize",
                      "se-resize",
                      "sw-resize",
                      "ew-resize",
                      "ns-resize",
                      "nesw-resize",
                      "nwse-resize",
                      "zoom-in",
                      "zoom-out",
                      yf,
                      ff,
                    ],
                  },
                ],
                "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
                "pointer-events": [{ "pointer-events": ["auto", "none"] }],
                resize: [{ resize: ["none", "", "y", "x"] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": x() }],
                "scroll-mx": [{ "scroll-mx": x() }],
                "scroll-my": [{ "scroll-my": x() }],
                "scroll-ms": [{ "scroll-ms": x() }],
                "scroll-me": [{ "scroll-me": x() }],
                "scroll-mt": [{ "scroll-mt": x() }],
                "scroll-mr": [{ "scroll-mr": x() }],
                "scroll-mb": [{ "scroll-mb": x() }],
                "scroll-ml": [{ "scroll-ml": x() }],
                "scroll-p": [{ "scroll-p": x() }],
                "scroll-px": [{ "scroll-px": x() }],
                "scroll-py": [{ "scroll-py": x() }],
                "scroll-ps": [{ "scroll-ps": x() }],
                "scroll-pe": [{ "scroll-pe": x() }],
                "scroll-pt": [{ "scroll-pt": x() }],
                "scroll-pr": [{ "scroll-pr": x() }],
                "scroll-pb": [{ "scroll-pb": x() }],
                "scroll-pl": [{ "scroll-pl": x() }],
                "snap-align": [
                  { snap: ["start", "end", "center", "align-none"] },
                ],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [
                  {
                    "will-change": [
                      "auto",
                      "scroll",
                      "contents",
                      "transform",
                      yf,
                      ff,
                    ],
                  },
                ],
                fill: [{ fill: ["none", ...F()] }],
                "stroke-w": [{ stroke: [ef, bf, hf, mf] }],
                stroke: [{ stroke: ["none", ...F()] }],
                "forced-color-adjust": [
                  { "forced-color-adjust": ["auto", "none"] },
                ],
              },
              conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: [
                  "inset-x",
                  "inset-y",
                  "start",
                  "end",
                  "top",
                  "right",
                  "bottom",
                  "left",
                ],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": [
                  "fvn-ordinal",
                  "fvn-slashed-zero",
                  "fvn-figure",
                  "fvn-spacing",
                  "fvn-fraction",
                ],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                  "rounded-s",
                  "rounded-e",
                  "rounded-t",
                  "rounded-r",
                  "rounded-b",
                  "rounded-l",
                  "rounded-ss",
                  "rounded-se",
                  "rounded-ee",
                  "rounded-es",
                  "rounded-tl",
                  "rounded-tr",
                  "rounded-br",
                  "rounded-bl",
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": [
                  "border-w-x",
                  "border-w-y",
                  "border-w-s",
                  "border-w-e",
                  "border-w-t",
                  "border-w-r",
                  "border-w-b",
                  "border-w-l",
                ],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                  "border-color-x",
                  "border-color-y",
                  "border-color-s",
                  "border-color-e",
                  "border-color-t",
                  "border-color-r",
                  "border-color-b",
                  "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": [
                  "translate",
                  "translate-x",
                  "translate-y",
                  "translate-z",
                ],
                "scroll-m": [
                  "scroll-mx",
                  "scroll-my",
                  "scroll-ms",
                  "scroll-me",
                  "scroll-mt",
                  "scroll-mr",
                  "scroll-mb",
                  "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                  "scroll-px",
                  "scroll-py",
                  "scroll-ps",
                  "scroll-pe",
                  "scroll-pt",
                  "scroll-pr",
                  "scroll-pb",
                  "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
              },
              conflictingClassGroupModifiers: { "font-size": ["leading"] },
              orderSensitiveModifiers: [
                "*",
                "**",
                "after",
                "backdrop",
                "before",
                "details-content",
                "file",
                "first-letter",
                "first-line",
                "marker",
                "placeholder",
                "selection",
              ],
            };
          }),
        Hf = Id(Df);
      function jf() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Hf(bd(t));
      }
      const Zf = ["className"],
        zf = ["className", "children"],
        _f = ["className", "children"],
        Rf = id,
        Of = e.forwardRef((e, t) => {
          let { className: n } = e,
            r = u(e, Zf);
          return (0, w.jsx)(ld, s({ ref: t, className: jf("border-b", n) }, r));
        });
      Of.displayName = "AccordionItem";
      const If = e.forwardRef((e, t) => {
        let { className: n, children: r } = e,
          a = u(e, zf);
        return (0, w.jsx)(sd, {
          className: "flex",
          children: (0, w.jsxs)(
            ud,
            s(
              s(
                {
                  ref: t,
                  className: jf(
                    "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
                    n,
                  ),
                },
                a,
              ),
              {},
              {
                children: [
                  r,
                  (0, w.jsx)(vd, {
                    className:
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  }),
                ],
              },
            ),
          ),
        });
      });
      If.displayName = ud.displayName;
      const Bf = e.forwardRef((e, t) => {
        let { className: n, children: r } = e,
          a = u(e, _f);
        return (0, w.jsx)(
          cd,
          s(
            s(
              {
                ref: t,
                className:
                  "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
              },
              a,
            ),
            {},
            {
              children: (0, w.jsx)("div", {
                className: jf("pb-4 pt-0", n),
                children: r,
              }),
            },
          ),
        );
      });
      Bf.displayName = cd.displayName;
      const Uf = [
          {
            q: "\xbfDesarrollan software a medida?",
            a: "S\xed. Dise\xf1amos y construimos soluciones de software completamente personalizadas seg\xfan los requerimientos espec\xedficos de cada cliente. Desde aplicaciones web y APIs hasta plataformas SaaS completas, cada l\xednea de c\xf3digo se escribe pensando en la escalabilidad y las necesidades reales de tu negocio.",
          },
          {
            q: "\xbfIntegran IA en procesos?",
            a: "Absolutamente. Implementamos inteligencia artificial en flujos de negocio existentes para automatizar tareas repetitivas, mejorar la toma de decisiones y escalar operaciones. Trabajamos con modelos de lenguaje, visi\xf3n por computadora y sistemas de recomendaci\xf3n, entre otros.",
          },
          {
            q: "\xbfTrabajan con startups?",
            a: "S\xed, trabajamos con startups, ventures y empresas en etapa de crecimiento. Entendemos la velocidad que necesitan los emprendimientos y ofrecemos metodolog\xedas \xe1giles con ciclos cortos de entrega y validaci\xf3n directa con stakeholders para maximizar el impacto de cada sprint.",
          },
          {
            q: "\xbfConstruyen MVPs?",
            a: "S\xed. Dise\xf1amos y desarrollamos MVPs enfocados en validar hip\xf3tesis de negocio r\xe1pidamente. Definimos junto al cliente las features esenciales, establecemos criterios de calidad por funcionalidad y entregamos un producto funcional listo para enfrentar el mercado.",
          },
          {
            q: "\xbfDesarrollan apps m\xf3viles?",
            a: "S\xed. Construimos aplicaciones m\xf3viles nativas y cross-platform con rendimiento \xf3ptimo, dise\xf1o premium y experiencias de usuario fluidas. Cada app se desarrolla con arquitectura escalable y preparada para integrar nuevas funcionalidades en el futuro.",
          },
        ],
        Wf = () =>
          (0, w.jsx)("section", {
            id: "faq",
            "data-testid": "faq-section",
            className: "py-24 sm:py-32",
            children: (0, w.jsxs)("div", {
              className: "max-w-3xl mx-auto px-6 lg:px-8",
              children: [
                (0, w.jsxs)(hs, {
                  children: [
                    (0, w.jsx)("p", {
                      className:
                        "uppercase tracking-[0.2em] text-xs text-[#6D5DFB] font-medium mb-4",
                      children: "Preguntas frecuentes",
                    }),
                    (0, w.jsx)("h2", {
                      className:
                        "font-['Outfit'] text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white",
                      children: "Resolvemos tus dudas",
                    }),
                  ],
                }),
                (0, w.jsx)(hs, {
                  delay: 0.15,
                  children: (0, w.jsx)(Rf, {
                    type: "single",
                    collapsible: !0,
                    className: "mt-12",
                    children: Uf.map((e, t) =>
                      (0, w.jsxs)(
                        Of,
                        {
                          value: "item-".concat(t),
                          "data-testid": "faq-item-".concat(t),
                          className: "border-b border-white/[0.08] py-1",
                          children: [
                            (0, w.jsx)(If, {
                              "data-testid": "faq-trigger-".concat(t),
                              className:
                                "text-left text-base md:text-lg font-medium text-white hover:text-[#6D5DFB] transition-colors hover:no-underline py-5",
                              children: e.q,
                            }),
                            (0, w.jsx)(Bf, {
                              className:
                                "text-[#A1A1AA] text-sm md:text-base leading-relaxed pb-5",
                              children: e.a,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          }),
        qf = () =>
          (0, w.jsxs)("section", {
            "data-testid": "final-cta-section",
            className: "py-24 sm:py-32 relative overflow-hidden",
            children: [
              (0, w.jsx)("div", {
                className:
                  "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,93,251,0.12)_0%,transparent_60%)] pointer-events-none",
              }),
              (0, w.jsx)("div", {
                className:
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(109,93,251,0.1)_0%,transparent_70%)] pointer-events-none",
              }),
              (0, w.jsx)("div", {
                className:
                  "max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10",
                children: (0, w.jsxs)(hs, {
                  children: [
                    (0, w.jsx)("h2", {
                      className:
                        "font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-white",
                      children:
                        "Convirtamos tu pr\xf3ximo proceso o idea en un sistema escalable.",
                    }),
                    (0, w.jsx)("p", {
                      className:
                        "mt-6 text-[#A1A1AA] text-base md:text-lg max-w-xl mx-auto leading-relaxed",
                      children:
                        "Reserva una sesi\xf3n de 20 minutos y exploremos juntos c\xf3mo podemos transformar tu negocio.",
                    }),
                    (0, w.jsxs)("a", {
                      href: x,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-testid": "final-cta-button",
                      className:
                        "inline-flex items-center gap-2 bg-[#6D5DFB] text-white font-medium rounded-full px-10 py-4 mt-10 hover:bg-[#5a4ae2] transition-all duration-300 shadow-[0_0_30px_rgba(109,93,251,0.4)] hover:shadow-[0_0_50px_rgba(109,93,251,0.6)] text-base",
                      children: [
                        "Agenda una sesi\xf3n estrat\xe9gica de 20 minutos",
                        (0, w.jsx)(ls, { size: 20, weight: "bold" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        $f = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M125.18,156.94a64,64,0,1,0-82.36,0,100.23,100.23,0,0,0-39.49,32,12,12,0,0,0,19.35,14.2,76,76,0,0,1,122.64,0,12,12,0,0,0,19.36-14.2A100.33,100.33,0,0,0,125.18,156.94ZM44,108a40,40,0,1,1,40,40A40,40,0,0,1,44,108Zm206.1,97.67a12,12,0,0,1-16.78-2.57A76.31,76.31,0,0,0,172,172a12,12,0,0,1,0-24,40,40,0,1,0-10.3-78.67,12,12,0,1,1-6.16-23.19,64,64,0,0,1,57.64,110.8,100.23,100.23,0,0,1,39.49,32A12,12,0,0,1,250.1,205.67Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M112.6,158.43a58,58,0,1,0-57.2,0A93.83,93.83,0,0,0,5.21,196.72a6,6,0,0,0,10.05,6.56,82,82,0,0,1,137.48,0,6,6,0,0,0,10-6.56A93.83,93.83,0,0,0,112.6,158.43ZM38,108a46,46,0,1,1,46,46A46.06,46.06,0,0,1,38,108Zm211,97a6,6,0,0,1-8.3-1.74A81.8,81.8,0,0,0,172,166a6,6,0,0,1,0-12,46,46,0,1,0-17.08-88.73,6,6,0,1,1-4.46-11.14,58,58,0,0,1,50.14,104.3,93.83,93.83,0,0,1,50.19,38.29A6,6,0,0,1,249,205Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M107.19,159a56,56,0,1,0-46.38,0A91.83,91.83,0,0,0,6.88,197.81a4,4,0,1,0,6.7,4.37,84,84,0,0,1,140.84,0,4,4,0,1,0,6.7-4.37A91.83,91.83,0,0,0,107.19,159ZM36,108a48,48,0,1,1,48,48A48.05,48.05,0,0,1,36,108Zm212,95.35a4,4,0,0,1-5.53-1.17A83.81,83.81,0,0,0,172,164a4,4,0,0,1,0-8,48,48,0,1,0-17.82-92.58,4,4,0,1,1-3-7.43,56,56,0,0,1,44,103,91.83,91.83,0,0,1,53.93,38.86A4,4,0,0,1,248,203.35Z",
              }),
            ),
          ],
        ]),
        Yf = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: $f })),
        );
      Yf.displayName = "UsersIcon";
      const Kf = Yf,
        Qf = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M160,116h48a20,20,0,0,0,20-20V48a20,20,0,0,0-20-20H160a20,20,0,0,0-20,20V60H128a28,28,0,0,0-28,28v28H76v-4A20,20,0,0,0,56,92H24A20,20,0,0,0,4,112v32a20,20,0,0,0,20,20H56a20,20,0,0,0,20-20v-4h24v28a28,28,0,0,0,28,28h12v12a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V160a20,20,0,0,0-20-20H160a20,20,0,0,0-20,20v12H128a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h12V96A20,20,0,0,0,160,116ZM52,140H28V116H52Zm112,24h40v40H164Zm0-112h40V92H164Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M64,112v32a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H56A8,8,0,0,1,64,112ZM208,40H160a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Zm0,112H160a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M144,96V80H128a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h16V160a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V192H128a24,24,0,0,1-24-24V136H72v8a16,16,0,0,1-16,16H24A16,16,0,0,1,8,144V112A16,16,0,0,1,24,96H56a16,16,0,0,1,16,16v8h32V88a24,24,0,0,1,24-24h16V48a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V96a16,16,0,0,1-16,16H160A16,16,0,0,1,144,96Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M160,110h48a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H160a14,14,0,0,0-14,14V66H128a22,22,0,0,0-22,22v34H70V112A14,14,0,0,0,56,98H24a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H56a14,14,0,0,0,14-14V134h36v34a22,22,0,0,0,22,22h18v18a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V160a14,14,0,0,0-14-14H160a14,14,0,0,0-14,14v18H128a10,10,0,0,1-10-10V88a10,10,0,0,1,10-10h18V96A14,14,0,0,0,160,110ZM58,144a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V112a2,2,0,0,1,2-2H56a2,2,0,0,1,2,2Zm100,16a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2v48a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2Zm0-112a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2V96a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M160,108h48a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12V68H128a20,20,0,0,0-20,20v36H68V112a12,12,0,0,0-12-12H24a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H56a12,12,0,0,0,12-12V132h40v36a20,20,0,0,0,20,20h20v20a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V160a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12v20H128a12,12,0,0,1-12-12V88a12,12,0,0,1,12-12h20V96A12,12,0,0,0,160,108ZM60,144a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H56a4,4,0,0,1,4,4Zm96,16a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v48a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4Zm0-112a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V96a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4Z",
              }),
            ),
          ],
        ]),
        Gf = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: Qf })),
        );
      Gf.displayName = "TreeStructureIcon";
      const Xf = [
          { icon: pu, label: "Agile delivery" },
          { icon: Kf, label: "Stakeholder feedback" },
          { icon: Gf, label: "Arquitectura escalable" },
        ],
        Jf = () =>
          (0, w.jsx)("section", {
            "data-testid": "trust-strip-section",
            className: "py-12 md:py-16 border-t border-white/[0.06]",
            children: (0, w.jsx)("div", {
              className: "max-w-7xl mx-auto px-6 lg:px-8",
              children: (0, w.jsx)(hs, {
                children: (0, w.jsx)("div", {
                  className:
                    "flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10",
                  children: Xf.map((e, t) =>
                    (0, w.jsxs)(
                      "div",
                      {
                        "data-testid": "trust-badge-".concat(t),
                        className:
                          "flex items-center gap-2.5 text-[#A1A1AA]/60",
                        children: [
                          (0, w.jsx)(e.icon, {
                            size: 18,
                            weight: "duotone",
                            className: "text-[#6D5DFB]/60",
                          }),
                          (0, w.jsx)("span", {
                            className:
                              "text-xs md:text-sm font-medium uppercase tracking-wider",
                            children: e.label,
                          }),
                        ],
                      },
                      e.label,
                    ),
                  ),
                }),
              }),
            }),
          }),
        eh = new Map([
          [
            "bold",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z",
              }),
            ),
          ],
          [
            "duotone",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
                opacity: "0.2",
              }),
              e.createElement("path", {
                d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
              }),
            ),
          ],
          [
            "fill",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z",
              }),
            ),
          ],
          [
            "light",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z",
              }),
            ),
          ],
          [
            "regular",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
              }),
            ),
          ],
          [
            "thin",
            e.createElement(
              e.Fragment,
              null,
              e.createElement("path", {
                d: "M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z",
              }),
            ),
          ],
        ]),
        th = e.forwardRef((t, n) =>
          e.createElement(h, s(s({ ref: n }, t), {}, { weights: eh })),
        );
      th.displayName = "MapPinIcon";
      const nh = th,
        rh = () =>
          (0, w.jsx)("footer", {
            "data-testid": "footer-section",
            className: "border-t border-white/[0.06] py-12 md:py-16",
            children: (0, w.jsx)("div", {
              className: "max-w-7xl mx-auto px-6 lg:px-8",
              children: (0, w.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row items-start md:items-center justify-between gap-8",
                children: [
                  (0, w.jsxs)("div", {
                    children: [
                      (0, w.jsxs)("p", {
                        className:
                          "font-['Outfit'] font-bold text-lg tracking-tight text-white mb-2",
                        children: [
                          "GFC ",
                          (0, w.jsx)("span", {
                            className: "text-[#6D5DFB]",
                            children: "SYSTEMS",
                          }),
                          " LABS",
                        ],
                      }),
                      (0, w.jsx)("p", {
                        className: "text-sm text-[#A1A1AA]",
                        children: "Marca operada por GFC Systems Nexus SpA",
                      }),
                      (0, w.jsxs)("div", {
                        className:
                          "flex items-center gap-1.5 mt-2 text-[#A1A1AA]/60 text-xs",
                        children: [
                          (0, w.jsx)(nh, { size: 14, weight: "duotone" }),
                          (0, w.jsx)("span", {
                            children: "Chile \xb7 LATAM",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.jsxs)("div", {
                    className: "flex flex-col md:items-end gap-2",
                    children: [
                      (0, w.jsxs)("div", {
                        className:
                          "flex items-center gap-6 text-sm text-[#A1A1AA]",
                        children: [
                          (0, w.jsx)("a", {
                            href: "#capacidades",
                            className: "hover:text-white transition-colors",
                            children: "Capacidades",
                          }),
                          (0, w.jsx)("a", {
                            href: "#proceso",
                            className: "hover:text-white transition-colors",
                            children: "Proceso",
                          }),
                          (0, w.jsx)("a", {
                            href: "#ecosistema",
                            className: "hover:text-white transition-colors",
                            children: "Ecosistema",
                          }),
                          (0, w.jsx)("a", {
                            href: "#faq",
                            className: "hover:text-white transition-colors",
                            children: "FAQ",
                          }),
                        ],
                      }),
                      (0, w.jsxs)("p", {
                        className: "text-xs text-[#A1A1AA]/40 mt-2",
                        children: [
                          "\xa9 ",
                          new Date().getFullYear(),
                          " GFC Systems Nexus SpA. Todos los derechos reservados.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ah = () => {
          const [t, n] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              const e = () => n(window.scrollY > 600);
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, w.jsx)("div", {
              "data-testid": "mobile-sticky-cta",
              className:
                "fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ".concat(
                  t ? "translate-y-0" : "translate-y-full",
                ),
              children: (0, w.jsx)("div", {
                className:
                  "bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 px-4 py-3",
                children: (0, w.jsxs)("a", {
                  href: x,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-testid": "mobile-sticky-cta-button",
                  className:
                    "flex items-center justify-center gap-2 w-full bg-[#6D5DFB] text-white font-medium rounded-full py-3 text-sm shadow-[0_0_24px_rgba(109,93,251,0.35)] hover:bg-[#5a4ae2] transition-all",
                  children: [
                    "Agenda sesi\xf3n",
                    (0, w.jsx)(ls, { size: 16, weight: "bold" }),
                  ],
                }),
              }),
            })
          );
        };
      const oh = function () {
        return (
          (0, e.useEffect)(() => {
            document.title =
              "© 2026 GFC SYSTEMS LABS. Construyendo software, IA y venture systems desde Chile.";
          }, []),
          (0, w.jsxs)("div", {
            className: "min-h-screen bg-[#050505] text-white overflow-x-hidden",
            children: [
              (0, w.jsx)(A, {}),
              (0, w.jsxs)("main", {
                children: [
                  (0, w.jsx)(ds, {}),
                  (0, w.jsx)(ps, {}),
                  (0, w.jsx)(Ds, {}),
                  (0, w.jsx)(Us, {}),
                  (0, w.jsx)(eu, {}),
                  (0, w.jsx)(vu, {}),
                  (0, w.jsx)(yu, {}),
                  (0, w.jsx)(Wf, {}),
                  (0, w.jsx)(Jf, {}),
                  (0, w.jsx)(qf, {}),
                ],
              }),
              (0, w.jsx)(rh, {}),
              (0, w.jsx)(ah, {}),
            ],
          })
        );
      };
      r.createRoot(document.getElementById("root")).render(
        (0, w.jsx)(e.StrictMode, { children: (0, w.jsx)(oh, {}) }),
      );
    })());
})();
//# sourceMappingURL=main.a6ff5a86.js.map
