var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});

// .wrangler/tmp/bundle-0Hv4CV/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-tHeJ6s/bundledWorker-0.1951947323133898.mjs
var __require2 = /* @__PURE__ */ ((x3) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a, b) => (typeof __require !== "undefined" ? __require : a)[b]
}) : x3)(function(x3) {
  if (typeof __require !== "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});
var urls2 = /* @__PURE__ */ new Set();
function checkURL2(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls2.has(url.toString())) {
      urls2.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL2(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});
var notFounds = [
  [
    "/",
    '<html>\n<head>\n  <meta charset="utf-8">\n  <meta http-equiv="Status" content="404">\n  <title>404 Resource Not Found</title>\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <style>\n    body { color: #006ce9; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }\n    p { max-width: 600px; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px #006ce9; overflow: hidden; }\n    strong { display: inline-block; padding: 15px; background: #006ce9; color: white; }\n    span { display: inline-block; padding: 15px; }\n  </style>\n</head>\n<body><p><strong>404</strong> <span>Resource Not Found</span></p></body>\n</html>'
  ]
];
function getNotFound(p) {
  for (const r of notFounds) {
    if (p.startsWith(r[0])) {
      return r[1];
    }
  }
  return "Resource Not Found";
}
var staticPaths = /* @__PURE__ */ new Set(["/_headers", "/_redirects", "/favicon.svg", "/manifest.json", "/q-manifest.json", "/qwik-prefetch-service-worker.js", "/robots.txt", "/service-worker.js", "/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== "GET") {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith("/q-data.json")) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, "");
    if (staticPaths.has(pWithoutQdata + "/")) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
var Ne = (e) => e && typeof e.nodeType == "number";
var Eo = (e) => e.nodeType === 9;
var Pe = (e) => e.nodeType === 1;
var Oe = (e) => {
  const t = e.nodeType;
  return t === 1 || t === 111;
};
var Ai = (e) => {
  const t = e.nodeType;
  return t === 1 || t === 111 || t === 3;
};
var pe = (e) => e.nodeType === 111;
var Zn = (e) => e.nodeType === 3;
var Ct = (e) => e.nodeType === 8;
var Qe = (e, ...t) => ts(true, e, ...t);
var To = (e, ...t) => {
  throw ts(false, e, ...t);
};
var es = (e, ...t) => ts(true, e, ...t);
var _e = () => {
};
var Mi = (e) => e;
var ts = (e, t, ...n) => {
  const s = t instanceof Error ? t : new Error(t);
  return console.error("%cQWIK ERROR", "", s.stack || s.message, ...Mi(n)), e && setTimeout(() => {
    throw s;
  }, 0), s;
};
var V = (e, ...t) => {
  const n = on(e);
  return es(n, ...t);
};
var on = (e) => `Code(${e})`;
var qi = () => ({ isServer: true, importSymbol(e, t, n) {
  var r;
  {
    const i = Dr(n), c = (r = globalThis.__qwik_reg_symbols) == null ? void 0 : r.get(i);
    if (c)
      return c;
  }
  if (!t)
    throw V(31, n);
  if (!e)
    throw V(30, t, n);
  const s = Ni(e.ownerDocument, e, t).toString(), o = new URL(s);
  return o.hash = "", o.search = "", import(o.href).then((i) => i[n]);
}, raf: (e) => new Promise((t) => {
  requestAnimationFrame(() => {
    t(e());
  });
}), nextTick: (e) => new Promise((t) => {
  setTimeout(() => {
    t(e());
  });
}), chunkForSymbol: (e, t) => [e, t ?? "_"] });
var Ni = (e, t, n) => {
  const s = e.baseURI, o = new URL(t.getAttribute("q:base") ?? s, s);
  return new URL(n, o);
};
var ns = qi();
var lp = (e) => ns = e;
var rn = () => ns;
var se = () => ns.isServer;
var It = (e) => {
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
};
var ke = (e) => !!e && typeof e == "object";
var F = (e) => Array.isArray(e);
var Ee = (e) => typeof e == "string";
var oe = (e) => typeof e == "function";
var W = (e) => e && typeof e.then == "function";
var cn = (e, t, n) => {
  try {
    const s = e();
    return W(s) ? s.then(t, n) : t(s);
  } catch (s) {
    return n(s);
  }
};
var N = (e, t) => W(e) ? e.then(t) : t(e);
var ss = (e) => e.some(W) ? Promise.all(e) : e;
var nt = (e) => e.length > 0 ? Promise.all(e) : e;
var Co = (e) => e != null;
var Pi = (e) => new Promise((t) => {
  setTimeout(t, e);
});
var de = [];
var te = {};
var Rt = (e) => typeof document < "u" ? document : e.nodeType === 9 ? e : e.ownerDocument;
var re = "q:slot";
var ln = "q:style";
var Nn = Symbol("proxy target");
var st = Symbol("proxy flags");
var fe = Symbol("proxy manager");
var C = Symbol("IMMUTABLE");
var an = "_qc_";
var ne = (e, t, n) => e.setAttribute(t, n);
var ae = (e, t) => e.getAttribute(t);
var os = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase();
var Oi = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
var Li = /^(on|window:|document:)/;
var Io = "preventdefault:";
var rs = (e) => e.endsWith("$") && Li.test(e);
var is = (e) => {
  if (e.length === 0)
    return de;
  if (e.length === 1) {
    const n = e[0];
    return [[n[0], [n[1]]]];
  }
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n][0];
    t.includes(s) || t.push(s);
  }
  return t.map((n) => [n, e.filter((s) => s[0] === n).map((s) => s[1])]);
};
var cs = (e, t, n, s) => {
  if (t.endsWith("$"), t = Pn(t.slice(0, -1)), n)
    if (F(n)) {
      const o = n.flat(1 / 0).filter((r) => r != null).map((r) => [t, js(r, s)]);
      e.push(...o);
    } else
      e.push([t, js(n, s)]);
  return t;
};
var Hs = ["on", "window:on", "document:on"];
var zi = ["on", "on-window", "on-document"];
var Pn = (e) => {
  let t = "on";
  for (let n = 0; n < Hs.length; n++) {
    const s = Hs[n];
    if (e.startsWith(s)) {
      t = zi[n], e = e.slice(s.length);
      break;
    }
  }
  return t + ":" + (e = e.startsWith("-") ? os(e.slice(1)) : e.toLowerCase());
};
var js = (e, t) => (e.$setContainer$(t), e);
var Fi = (e, t) => {
  const n = e.$element$.attributes, s = [];
  for (let o = 0; o < n.length; o++) {
    const { name: r, value: i } = n.item(o);
    if (r.startsWith("on:") || r.startsWith("on-window:") || r.startsWith("on-document:")) {
      const c = i.split(`
`);
      for (const l of c) {
        const a = hn(l, t);
        a.$capture$ && qr(a, e), s.push([r, a]);
      }
    }
  }
  return s;
};
var Bi = (e, t) => {
  Ao(Ro(e, void 0), t);
};
var Ks = (e, t) => {
  Ao(Ro(e, "document"), t);
};
var Ro = (e, t) => {
  const n = t !== void 0 ? t + ":" : "";
  return Array.isArray(e) ? e.map((s) => `${n}on-${s}`) : `${n}on-${e}`;
};
var Ao = (e, t) => {
  if (t) {
    const n = ir(), s = J(n.$hostElement$, n.$renderCtx$.$static$.$containerState$);
    typeof e == "string" ? s.li.push([Pn(e), t]) : s.li.push(...e.map((o) => [Pn(o), t])), s.$flags$ |= Re;
  }
};
var Di = (e, t, n, s) => {
  typeof CustomEvent == "function" && e && e.dispatchEvent(new CustomEvent(t, { detail: n, bubbles: s, composed: s }));
};
var ls = (e, t, n = 0) => t.$proxyMap$.get(e) || (n !== 0 && $n(e, n), At(e, t, void 0));
var At = (e, t, n) => {
  Lt(e), t.$proxyMap$.has(e);
  const s = t.$subsManager$.$createManager$(n), o = new Proxy(e, new Mo(t, s));
  return t.$proxyMap$.set(e, o), o;
};
var un = () => {
  const e = {};
  return $n(e, 2), e;
};
var $n = (e, t) => {
  Object.defineProperty(e, st, { value: t, enumerable: false });
};
var Mo = class {
  constructor(t, n) {
    this.$containerState$ = t, this.$manager$ = n;
  }
  deleteProperty(t, n) {
    if (2 & t[st])
      throw V(17);
    return typeof n == "string" && delete t[n] && (this.$manager$.$notifySubs$(F(t) ? void 0 : n), true);
  }
  get(t, n) {
    var a;
    if (typeof n == "symbol")
      return n === Nn ? t : n === fe ? this.$manager$ : t[n];
    const s = t[st] ?? 0, o = ve(), r = (1 & s) != 0, i = t["$$" + n];
    let c, l;
    if (o && (c = o.$subscriber$), !(2 & s) || n in t && !Vi((a = t[C]) == null ? void 0 : a[n]) || (c = null), i ? (l = i.value, c = null) : l = t[n], c) {
      const u = F(t);
      this.$manager$.$addSub$(c, u ? void 0 : n);
    }
    return r ? Ui(l, this.$containerState$) : l;
  }
  set(t, n, s) {
    if (typeof n == "symbol")
      return t[n] = s, true;
    const o = t[st] ?? 0;
    if (2 & o)
      throw V(17);
    const r = 1 & o ? Lt(s) : s;
    if (F(t))
      return t[n] = r, this.$manager$.$notifySubs$(), true;
    const i = t[n];
    return t[n] = r, i !== r && this.$manager$.$notifySubs$(n), true;
  }
  has(t, n) {
    if (n === Nn)
      return true;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(t, n) || !(typeof n != "string" || !s.call(t, "$$" + n));
  }
  ownKeys(t) {
    if (!(2 & (t[st] ?? 0))) {
      let s = null;
      const o = ve();
      o && (s = o.$subscriber$), s && this.$manager$.$addSub$(s);
    }
    return F(t) ? Reflect.ownKeys(t) : Reflect.ownKeys(t).map((s) => typeof s == "string" && s.startsWith("$$") ? s.slice(2) : s);
  }
  getOwnPropertyDescriptor(t, n) {
    return F(t) || typeof n == "symbol" ? Object.getOwnPropertyDescriptor(t, n) : { enumerable: true, configurable: true };
  }
};
var Vi = (e) => e === C || j(e);
var Ui = (e, t) => {
  if (ke(e)) {
    if (Object.isFrozen(e))
      return e;
    const n = Lt(e);
    if (n !== e || Lr(n))
      return e;
    if (It(n) || F(n))
      return t.$proxyMap$.get(n) || ls(n, t, 1);
  }
  return e;
};
var Le = () => {
  const e = ir(), t = J(e.$hostElement$, e.$renderCtx$.$static$.$containerState$), n = t.$seq$ || (t.$seq$ = []), s = e.$i$++;
  return { val: n[s], set: (o) => n[s] = o, i: s, iCtx: e, elCtx: t };
};
var ge = (e) => Object.freeze({ id: os(e) });
var ue = (e, t) => {
  const { val: n, set: s, elCtx: o } = Le();
  if (n !== void 0)
    return;
  (o.$contexts$ || (o.$contexts$ = /* @__PURE__ */ new Map())).set(e.id, t), s(true);
};
var je = (e, t) => {
  const { val: n, set: s, iCtx: o, elCtx: r } = Le();
  if (n !== void 0)
    return n;
  const i = qo(e, r, o.$renderCtx$.$static$.$containerState$);
  if (typeof t == "function")
    return s(X(void 0, t, i));
  if (i !== void 0)
    return s(i);
  if (t !== void 0)
    return s(t);
  throw V(13, e.id);
};
var Wi = (e, t) => {
  var o;
  let n = e, s = 1;
  for (; n && !((o = n.hasAttribute) != null && o.call(n, "q:container")); ) {
    for (; n = n.previousSibling; )
      if (Ct(n)) {
        const r = n.__virtual;
        if (r) {
          const i = r[an];
          if (n === r.open)
            return i ?? J(r, t);
          if (i != null && i.$parentCtx$)
            return i.$parentCtx$;
          n = r;
          continue;
        }
        if (n.data === "/qv")
          s++;
        else if (n.data.startsWith("qv ") && (s--, s === 0))
          return J(Ot(n), t);
      }
    n = e.parentElement, e = n;
  }
  return null;
};
var Qi = (e, t) => (e.$parentCtx$ === void 0 && (e.$parentCtx$ = Wi(e.$element$, t)), e.$parentCtx$);
var qo = (e, t, n) => {
  var r;
  const s = e.id;
  if (!t)
    return;
  let o = t;
  for (; o; ) {
    const i = (r = o.$contexts$) == null ? void 0 : r.get(s);
    if (i)
      return i;
    o = Qi(o, n);
  }
};
var Hi = ge("qk-error");
var as = (e, t, n) => {
  const s = ie(t);
  if (se())
    throw e;
  {
    const o = qo(Hi, s, n.$static$.$containerState$);
    if (o === void 0)
      throw e;
    o.error = e;
  }
};
var ji = /* @__PURE__ */ new Set(["animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexShrink", "gridArea", "gridRow", "gridRowEnd", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnStart", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "scale", "tabSize", "widows", "zIndex", "zoom", "MozAnimationIterationCount", "MozBoxFlex", "msFlex", "msFlexPositive", "WebkitAnimationIterationCount", "WebkitBoxFlex", "WebkitBoxOrdinalGroup", "WebkitColumnCount", "WebkitColumns", "WebkitFlex", "WebkitFlexGrow", "WebkitFlexShrink", "WebkitLineClamp"]);
var Ki = (e) => ji.has(e);
var Qt = (e, t, n) => {
  t.$flags$ &= ~at, t.$flags$ |= Ss, t.$slots$ = [], t.li.length = 0;
  const s = t.$element$, o = t.$componentQrl$, r = t.$props$, i = le(e.$static$.$locale$, s, void 0, "qRender"), c = i.$waitOn$ = [], l = Mt(e);
  l.$cmpCtx$ = t, l.$slotCtx$ = void 0, i.$subscriber$ = [0, s], i.$renderCtx$ = e, o.$setContainer$(e.$static$.$containerState$.$containerEl$);
  const a = o.getFn(i);
  return cn(() => a(r), (u) => N(se() ? N(nt(c), () => N(Nc(e.$static$.$containerState$, e), () => nt(c))) : nt(c), () => {
    var $2;
    if (t.$flags$ & at) {
      if (!(n && n > 100))
        return Qt(e, t, n ? n + 1 : 1);
      _e(`Infinite loop detected. Element: ${($2 = t.$componentQrl$) == null ? void 0 : $2.$symbol$}`);
    }
    return { node: u, rCtx: l };
  }), (u) => {
    var $2;
    if (u === fr) {
      if (!(n && n > 100))
        return N(nt(c), () => Qt(e, t, n ? n + 1 : 1));
      _e(`Infinite loop detected. Element: ${($2 = t.$componentQrl$) == null ? void 0 : $2.$symbol$}`);
    }
    return as(u, s, e), { node: fs, rCtx: l };
  });
};
var No = (e, t) => ({ $static$: { $doc$: e, $locale$: t.$serverData$.locale, $containerState$: t, $hostElements$: /* @__PURE__ */ new Set(), $operations$: [], $postOperations$: [], $roots$: [], $addSlots$: [], $rmSlots$: [], $visited$: [] }, $cmpCtx$: null, $slotCtx$: void 0 });
var Mt = (e) => ({ $static$: e.$static$, $cmpCtx$: e.$cmpCtx$, $slotCtx$: e.$slotCtx$ });
var us = (e, t) => {
  var n;
  return (n = t == null ? void 0 : t.$scopeIds$) != null && n.length ? t.$scopeIds$.join(" ") + " " + Ht(e) : Ht(e);
};
var Ht = (e) => {
  if (!e)
    return "";
  if (Ee(e))
    return e.trim();
  const t = [];
  if (F(e))
    for (const n of e) {
      const s = Ht(n);
      s && t.push(s);
    }
  else
    for (const [n, s] of Object.entries(e))
      s && t.push(n.trim());
  return t.join(" ");
};
var dn = (e) => {
  if (e == null)
    return "";
  if (typeof e == "object") {
    if (F(e))
      throw V(0, e, "style");
    {
      const t = [];
      for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          const s = e[n];
          s != null && (n.startsWith("--") ? t.push(n + ":" + s) : t.push(os(n) + ":" + Yi(n, s)));
        }
      return t.join(";");
    }
  }
  return String(e);
};
var Yi = (e, t) => typeof t != "number" || t === 0 || Ki(e) ? t : t + "px";
var vt = (e) => Ae(e.$static$.$containerState$.$elementIndex$++);
var Po = (e, t) => {
  const n = vt(e);
  t.$id$ = n;
};
var xt = (e) => j(e) ? xt(e.value) : e == null || typeof e == "boolean" ? "" : String(e);
function Oo(e) {
  return e.startsWith("aria-");
}
var Lo = (e, t) => !!t.key && (!Ke(e) || !oe(e.type) && e.key != t.key);
var Y = "dangerouslySetInnerHTML";
var Gi = (e, t = 0) => {
  for (let n = 0; n < e.length; n++)
    t = (t << 5) - t + e.charCodeAt(n), t |= 0;
  return Number(Math.abs(t)).toString(36);
};
var Ji = (e, t) => `${Gi(e.$hash$)}-${t}`;
var Xi = (e) => "\u2B50\uFE0F" + e;
var zo = (e) => {
  const t = e.join("|");
  if (t.length > 0)
    return t;
};
var Fo;
var Vt = "<!--qkssr-f-->";
var Bo = class {
  constructor(t) {
    this.nodeType = t, this[Fo] = null;
  }
};
Fo = an;
var Zi = () => new Bo(9);
var ap = async (e, t) => {
  var m, g2, b;
  const n = t.containerTagName, s = jt(1).$element$, o = ks(s, t.base ?? "/");
  o.$serverData$.locale = (m = t.serverData) == null ? void 0 : m.locale;
  const r = Zi(), i = No(r, o), c = t.beforeContent ?? [], l = { $static$: { $contexts$: [], $headNodes$: n === "html" ? c : [], $locale$: (g2 = t.serverData) == null ? void 0 : g2.locale, $textNodes$: /* @__PURE__ */ new Map() }, $projectedChildren$: void 0, $projectedCtxs$: void 0, $invocationContext$: void 0 };
  let a = "ssr";
  t.containerAttributes["q:render"] && (a = `${t.containerAttributes["q:render"]}-${a}`);
  const u = { ...t.containerAttributes, "q:container": "paused", "q:version": "1.4.5", "q:render": a, "q:base": t.base, "q:locale": (b = t.serverData) == null ? void 0 : b.locale, "q:manifest-hash": t.manifestHash }, $2 = n === "html" ? [e] : [c, e];
  n !== "html" && (u.class = "qc\u{1F4E6}" + (u.class ? " " + u.class : "")), t.serverData && (o.$serverData$ = t.serverData);
  const f = _(n, null, u, $2, at | Re, null);
  o.$hostsRendering$ = /* @__PURE__ */ new Set(), await Promise.resolve().then(() => ec(f, i, l, t.stream, o, t));
};
var ec = async (e, t, n, s, o, r) => {
  const i = r.beforeClose;
  return await ds(e, t, n, s, 0, i ? (c) => {
    const l = i(n.$static$.$contexts$, o, false, n.$static$.$textNodes$);
    return ce(l, t, n, c, 0, void 0);
  } : void 0), t;
};
var tc = async (e, t, n, s, o) => {
  s.write(Vt);
  const r = e.props.children;
  let i;
  if (oe(r)) {
    const c = r({ write(l) {
      s.write(l), s.write(Vt);
    } });
    if (W(c))
      return c;
    i = c;
  } else
    i = r;
  for await (const c of i)
    await ce(c, t, n, s, o, void 0), s.write(Vt);
};
var Do = (e, t, n, s, o, r, i, c) => {
  var b;
  const l = e.props, a = l["q:renderFn"];
  if (a)
    return t.$componentQrl$ = a, oc(s, o, r, t, e, i, c);
  let u = "<!--qv" + sc(l);
  const $2 = "q:s" in l, f = e.key != null ? String(e.key) : null;
  $2 && ((b = s.$cmpCtx$) == null || b.$id$, u += " q:sref=" + s.$cmpCtx$.$id$), f != null && (u += " q:key=" + f), u += "-->", r.write(u);
  const m = e.props[Y];
  if (m)
    return r.write(m), void r.write(kn);
  if (n)
    for (const d of n)
      $s(d.type, d.props, r);
  const g2 = Vo(e.children, s, o, r, i);
  return N(g2, () => {
    var p;
    if (!$2 && !c)
      return void r.write(kn);
    let d;
    if ($2) {
      const v3 = (p = o.$projectedChildren$) == null ? void 0 : p[f];
      if (v3) {
        const [y, h] = o.$projectedCtxs$, k2 = Mt(y);
        k2.$slotCtx$ = t, o.$projectedChildren$[f] = void 0, d = ce(v3, k2, h, r, i);
      }
    }
    return c && (d = N(d, () => c(r))), N(d, () => {
      r.write(kn);
    });
  });
};
var kn = "<!--/qv-->";
var nc = (e) => {
  let t = "";
  for (const n in e) {
    if (n === Y)
      continue;
    const s = e[n];
    s != null && (t += " " + (s === "" ? n : n + '="' + s + '"'));
  }
  return t;
};
var sc = (e) => {
  let t = "";
  for (const n in e) {
    if (n === "children" || n === Y)
      continue;
    const s = e[n];
    s != null && (t += " " + (s === "" ? n : n + "=" + s));
  }
  return t;
};
var $s = (e, t, n) => {
  if (n.write("<" + e + nc(t) + ">"), Qo[e])
    return;
  const s = t[Y];
  s != null && n.write(s), n.write(`</${e}>`);
};
var oc = (e, t, n, s, o, r, i) => (ic(e, s, o.props.props), N(Qt(e, s), (c) => {
  const l = s.$element$, a = c.rCtx, u = le(t.$static$.$locale$, l, void 0);
  u.$subscriber$ = [0, l], u.$renderCtx$ = a;
  const $2 = { $static$: t.$static$, $projectedChildren$: rc(o.children, t), $projectedCtxs$: [e, t], $invocationContext$: u }, f = [];
  if (s.$appendStyles$) {
    const d = 4 & r ? t.$static$.$headNodes$ : f;
    for (const p of s.$appendStyles$)
      d.push(_("style", { [ln]: p.styleId, [Y]: p.content, hidden: "" }, null, null, 0, null));
  }
  const m = vt(e), g2 = s.$scopeIds$ ? zo(s.$scopeIds$) : void 0, b = T(o.type, { "q:sstyle": g2, "q:id": m, children: c.node }, 0, o.key);
  return s.$id$ = m, t.$static$.$contexts$.push(s), Do(b, s, f, a, $2, n, r, (d) => {
    if (s.$flags$ & Re) {
      const y = jt(1), h = y.li;
      h.push(...s.li), s.$flags$ &= ~Re, y.$id$ = vt(e);
      const k2 = { type: "placeholder", hidden: "", "q:id": y.$id$ };
      t.$static$.$contexts$.push(y);
      const E2 = is(h);
      for (const I2 of E2) {
        const w = Ho(I2[0]);
        k2[w] = qs(I2[1], e.$static$.$containerState$, y), On(w, e.$static$.$containerState$);
      }
      $s("script", k2, d);
    }
    const p = $2.$projectedChildren$;
    let v3;
    if (p) {
      const y = Object.keys(p).map((I2) => {
        const w = p[I2];
        if (w)
          return _("q:template", { [re]: I2 || true, hidden: true, "aria-hidden": "true" }, null, w, 0, null);
      }), [h, k2] = $2.$projectedCtxs$, E2 = Mt(h);
      E2.$slotCtx$ = s, v3 = ce(y, E2, k2, d, 0, void 0);
    }
    return i ? N(v3, () => i(d)) : v3;
  });
}));
var rc = (e, t) => {
  const n = Uo(e, t);
  if (n === null)
    return;
  const s = {};
  for (const o of n) {
    let r = "";
    Ke(o) && (r = o.props[re] || ""), (s[r] || (s[r] = [])).push(o);
  }
  return s;
};
var jt = (e) => {
  const t = new Bo(e);
  return pn(t);
};
var ds = (e, t, n, s, o, r) => {
  var a;
  const i = e.type, c = t.$cmpCtx$;
  if (typeof i == "string") {
    const u = e.key, $2 = e.props, f = e.immutableProps, m = jt(1), g2 = m.$element$, b = i === "head";
    let d = "<" + i, p = false, v3 = false, y = "", h = null;
    const k2 = (w, A2, O2) => {
      if (w === "ref")
        return void (A2 !== void 0 && (_s(A2, g2), v3 = true));
      if (rs(w))
        return void cs(m.li, w, A2, void 0);
      if (j(A2) && (A2 = xe(A2, O2 ? [1, g2, A2, c.$element$, w] : [2, c.$element$, A2, g2, w]), p = true), w === Y)
        return void (h = A2);
      let L2;
      w.startsWith(Io) && On(w.slice(15), t.$static$.$containerState$);
      const z2 = w === "htmlFor" ? "for" : w;
      z2 === "class" ? y = Ht(A2) : z2 === "style" ? L2 = dn(A2) : Oo(z2) || z2 === "draggable" || z2 === "spellcheck" ? (L2 = A2 != null ? String(A2) : null, A2 = L2) : L2 = A2 === false || A2 == null ? null : String(A2), L2 != null && (z2 === "value" && i === "textarea" ? h = Ln(L2) : dc(z2) || (d += " " + (A2 === true ? z2 : z2 + '="' + _n(L2) + '"')));
    };
    if (f)
      for (const w in f)
        k2(w, f[w], true);
    for (const w in $2)
      k2(w, $2[w], false);
    const E2 = m.li;
    if (c) {
      if ((a = c.$scopeIds$) != null && a.length) {
        const w = c.$scopeIds$.join(" ");
        y = y ? `${w} ${y}` : w;
      }
      c.$flags$ & Re && (E2.push(...c.li), c.$flags$ &= ~Re);
    }
    if (b && (o |= 1), i in cc && (o |= 16), i in lc && (o |= 8), y && (d += ' class="' + _n(y) + '"'), E2.length > 0) {
      const w = is(E2), A2 = (16 & o) != 0;
      for (const O2 of w) {
        const L2 = A2 ? Ho(O2[0]) : O2[0];
        d += " " + L2 + '="' + qs(O2[1], t.$static$.$containerState$, m) + '"', On(L2, t.$static$.$containerState$);
      }
    }
    if (u != null && (d += ' q:key="' + _n(u) + '"'), v3 || p || E2.length > 0) {
      if (v3 || p || fc(E2)) {
        const w = vt(t);
        d += ' q:id="' + w + '"', m.$id$ = w;
      }
      n.$static$.$contexts$.push(m);
    }
    if (1 & o && (d += " q:head"), d += ">", s.write(d), i in Qo)
      return;
    if (h != null)
      return s.write(String(h)), void s.write(`</${i}>`);
    i === "html" ? o |= 4 : o &= -5, 2 & e.flags && (o |= 1024);
    const I2 = ce(e.children, t, n, s, o);
    return N(I2, () => {
      if (b) {
        for (const w of n.$static$.$headNodes$)
          $s(w.type, w.props, s);
        n.$static$.$headNodes$.length = 0;
      }
      if (r)
        return N(r(s), () => {
          s.write(`</${i}>`);
        });
      s.write(`</${i}>`);
    });
  }
  if (i === Te) {
    const u = jt(111);
    return t.$slotCtx$ ? (u.$parentCtx$ = t.$slotCtx$, u.$realParentCtx$ = t.$cmpCtx$) : u.$parentCtx$ = t.$cmpCtx$, c && c.$flags$ & vs && pc(c, u), Do(e, u, void 0, t, n, s, o, r);
  }
  if (i === jo)
    return void s.write(e.props.data);
  if (i === Ko)
    return tc(e, t, n, s, o);
  const l = X(n.$invocationContext$, i, e.props, e.key, e.flags, e.dev);
  return Lo(l, e) ? ds(T(Te, { children: l }, 0, e.key), t, n, s, o, r) : ce(l, t, n, s, o, r);
};
var ce = (e, t, n, s, o, r) => {
  var i;
  if (e != null && typeof e != "boolean") {
    if (!Ee(e) && typeof e != "number") {
      if (Ke(e))
        return ds(e, t, n, s, o, r);
      if (F(e))
        return Vo(e, t, n, s, o);
      if (j(e)) {
        const c = 8 & o, l = (i = t.$cmpCtx$) == null ? void 0 : i.$element$;
        let a;
        if (l) {
          if (!c) {
            const u = vt(t);
            if (a = xe(e, 1024 & o ? [3, "#" + u, e, "#" + u] : [4, l, e, "#" + u]), Ee(a)) {
              const $2 = xt(a);
              n.$static$.$textNodes$.set($2, u);
            }
            return s.write(`<!--t=${u}-->`), ce(a, t, n, s, o, r), void s.write("<!---->");
          }
          a = X(n.$invocationContext$, () => e.value);
        }
        return void s.write(Ln(xt(a)));
      }
      return W(e) ? (s.write(Vt), e.then((c) => ce(c, t, n, s, o, r))) : void _e();
    }
    s.write(Ln(String(e)));
  }
};
var Vo = (e, t, n, s, o) => {
  if (e == null)
    return;
  if (!F(e))
    return ce(e, t, n, s, o);
  const r = e.length;
  if (r === 1)
    return ce(e[0], t, n, s, o);
  if (r === 0)
    return;
  let i = 0;
  const c = [];
  return e.reduce((l, a, u) => {
    const $2 = [];
    c.push($2);
    const f = ce(a, t, n, l ? { write(m) {
      i === u ? s.write(m) : $2.push(m);
    } } : s, o);
    if (l || W(f)) {
      const m = () => {
        i++, c.length > i && c[i].forEach((g2) => s.write(g2));
      };
      return W(f) ? l ? Promise.all([f, l]).then(m) : f.then(m) : l.then(m);
    }
    i++;
  }, void 0);
};
var Uo = (e, t) => {
  if (e == null)
    return null;
  const n = Wo(e, t), s = F(n) ? n : [n];
  return s.length === 0 ? null : s;
};
var Wo = (e, t) => {
  if (e == null)
    return null;
  if (F(e))
    return e.flatMap((n) => Wo(n, t));
  if (Ke(e) && oe(e.type) && e.type !== jo && e.type !== Ko && e.type !== Te) {
    const n = X(t.$invocationContext$, e.type, e.props, e.key, e.flags);
    return Uo(n, t);
  }
  return e;
};
var ic = (e, t, n) => {
  const s = Object.keys(n), o = un();
  if (t.$props$ = At(o, e.$static$.$containerState$), s.length === 0)
    return;
  const r = o[C] = n[C] ?? te;
  for (const i of s)
    i !== "children" && i !== re && (j(r[i]) ? o["$$" + i] = r[i] : o[i] = n[i]);
};
var cc = { head: true, style: true, script: true, link: true, meta: true };
var lc = { title: true, style: true, script: true, noframes: true, textarea: true };
var Qo = { area: true, base: true, basefont: true, bgsound: true, br: true, col: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
var ac = /[&<>]/g;
var uc = /[&"]/g;
var On = (e, t) => {
  t.$events$.add(hr(e));
};
var Ln = (e) => e.replace(ac, (t) => {
  switch (t) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    default:
      return "";
  }
});
var _n = (e) => e.replace(uc, (t) => {
  switch (t) {
    case "&":
      return "&amp;";
    case '"':
      return "&quot;";
    default:
      return "";
  }
});
var $c = /[>/="'\u0009\u000a\u000c\u0020]/;
var dc = (e) => $c.test(e);
var fc = (e) => e.some((t) => t[1].$captureRef$ && t[1].$captureRef$.length > 0);
var pc = (e, t) => {
  const n = e.$dynamicSlots$ || (e.$dynamicSlots$ = []);
  n.includes(t) || n.push(t);
};
var Ho = (e) => e === "on:qvisible" ? "on-document:qinit" : e;
var S = (e, t, n) => new Bn(e, t, n);
var mc = (e) => {
  const t = e.$funcStr$;
  let n = "";
  for (let s = 0; s < e.$args$.length; s++)
    n += `p${s},`;
  return `(${n})=>(${t})`;
};
var _ = (e, t, n, s, o, r) => {
  const i = r == null ? null : String(r);
  return new pt(e, t || te, n, s, o, i);
};
var He = (e, t, n, s, o, r) => {
  let i = null;
  return t && "children" in t && (i = t.children, delete t.children), _(e, t, n, i, s, o);
};
var T = (e, t, n, s, o) => {
  const r = s == null ? null : String(s), i = t ?? {};
  if (typeof e == "string" && C in i) {
    const l = i[C];
    delete i[C];
    const a = i.children;
    delete i.children;
    for (const [u, $2] of Object.entries(l))
      $2 !== C && (delete i[u], i[u] = $2);
    return _(e, null, i, a, n, s);
  }
  const c = new pt(e, i, null, i.children, n, r);
  return typeof e == "string" && t && delete t.children, c;
};
var up = (e, t, n) => {
  const s = n == null ? null : String(n), o = ar(() => {
    const i = t.children;
    return typeof e == "string" && delete t.children, i;
  });
  return Ee(e) && "className" in t && (t.class = t.className, delete t.className), new pt(e, t, null, o, 0, s);
};
var pt = class {
  constructor(t, n, s, o, r, i = null) {
    this.type = t, this.props = n, this.immutableProps = s, this.children = o, this.flags = r, this.key = i;
  }
};
var Te = (e) => e.children;
var Ke = (e) => e instanceof pt;
var H = (e) => e.children;
var fs = Symbol("skip render");
var jo = () => null;
var Ko = () => null;
var ps = (e, t, n) => {
  const s = !(t.$flags$ & Ss), o = t.$element$, r = e.$static$.$containerState$;
  return r.$hostsStaging$.delete(t), r.$subsManager$.$clearSub$(o), N(Qt(e, t), (i) => {
    const c = e.$static$, l = i.rCtx, a = le(e.$static$.$locale$, o);
    if (c.$hostElements$.add(o), a.$subscriber$ = [0, o], a.$renderCtx$ = l, s && t.$appendStyles$)
      for (const $2 of t.$appendStyles$)
        ml(c, $2);
    const u = Ce(i.node, a);
    return N(u, ($2) => {
      const f = hc(o, $2), m = ms(t);
      return N(Xt(l, m, f, n), () => {
        t.$vdom$ = f;
      });
    });
  });
};
var ms = (e) => (e.$vdom$ || (e.$vdom$ = Zt(e.$element$)), e.$vdom$);
var Se = class {
  constructor(t, n, s, o, r, i) {
    this.$type$ = t, this.$props$ = n, this.$immutableProps$ = s, this.$children$ = o, this.$flags$ = r, this.$key$ = i, this.$elm$ = null, this.$text$ = "", this.$signal$ = null, this.$id$ = t + (i ? ":" + i : "");
  }
};
var Yo = (e, t) => {
  const { key: n, type: s, props: o, children: r, flags: i, immutableProps: c } = e;
  let l = "";
  if (Ee(s))
    l = s;
  else {
    if (s !== Te) {
      if (oe(s)) {
        const u = X(t, s, o, n, i, e.dev);
        return Lo(u, e) ? Yo(T(Te, { children: u }, 0, n), t) : Ce(u, t);
      }
      throw V(25, s);
    }
    l = $t;
  }
  let a = de;
  return r != null ? N(Ce(r, t), (u) => (u !== void 0 && (a = F(u) ? u : [u]), new Se(l, o, c, a, i, n))) : new Se(l, o, c, a, i, n);
};
var hc = (e, t) => {
  const n = t === void 0 ? de : F(t) ? t : [t], s = new Se(":virtual", {}, null, n, 0, null);
  return s.$elm$ = e, s;
};
var Ce = (e, t) => {
  if (e != null && typeof e != "boolean") {
    if (Go(e)) {
      const n = new Se("#text", te, null, de, 0, null);
      return n.$text$ = String(e), n;
    }
    if (Ke(e))
      return Yo(e, t);
    if (j(e)) {
      const n = new Se("#signal", te, null, de, 0, null);
      return n.$signal$ = e, n;
    }
    if (F(e)) {
      const n = ss(e.flatMap((s) => Ce(s, t)));
      return N(n, (s) => s.flat(100).filter(Co));
    }
    return W(e) ? e.then((n) => Ce(n, t)) : e === fs ? new Se(":skipRender", te, null, de, 0, null) : void _e();
  }
};
var Go = (e) => Ee(e) || typeof e == "number";
var Jo = (e) => {
  ae(e, "q:container") === "paused" && (yc(e), kc(e));
};
var gc = (e) => {
  const t = Rt(e), n = xc(e === t.documentElement ? t.body : e, "type");
  if (n)
    return JSON.parse(Sc(n.firstChild.data) || "{}");
};
var $p = (e, t) => {
  const n = JSON.parse(e);
  if (typeof n != "object")
    return null;
  const { _objs: s, _entry: o } = n;
  if (s === void 0 || o === void 0)
    return null;
  let r = {}, i = {};
  if (Ne(t) && Oe(t)) {
    const a = xs(t);
    a && (i = mt(a), r = a.ownerDocument);
  }
  const c = Pr(i, r);
  for (let a = 0; a < s.length; a++) {
    const u = s[a];
    Ee(u) && (s[a] = u === gn ? void 0 : c.prepare(u));
  }
  const l = (a) => s[$e(a)];
  for (const a of s)
    Xo(a, l, c);
  return l(o);
};
var yc = (e) => {
  if (!Yc(e))
    return void _e();
  const t = e._qwikjson_ ?? gc(e);
  if (e._qwikjson_ = null, !t)
    return void _e();
  const n = Rt(e), s = vc(e), o = mt(e), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let c = null, l = 0;
  const a = n.createTreeWalker(e, mr);
  for (; c = a.nextNode(); ) {
    const d = c.data;
    if (l === 0) {
      if (d.startsWith("qv ")) {
        const p = _c(d);
        p >= 0 && r.set(p, c);
      } else if (d.startsWith("t=")) {
        const p = d.slice(2), v3 = $e(p), y = wc(c);
        r.set(v3, y), i.set(v3, y.data);
      }
    }
    d === "cq" ? l++ : d === "/cq" && l--;
  }
  const u = e.getElementsByClassName("qc\u{1F4E6}").length !== 0;
  e.querySelectorAll("[q\\:id]").forEach((d) => {
    if (u && d.closest("[q\\:container]") !== e)
      return;
    const p = ae(d, "q:id"), v3 = $e(p);
    r.set(v3, d);
  });
  const $2 = Pr(o, n), f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set(), g2 = (d) => (typeof d == "string" && d.length > 0, f.has(d) ? f.get(d) : b(d)), b = (d) => {
    if (d.startsWith("#")) {
      const k2 = d.slice(1), E2 = $e(k2);
      r.has(E2);
      const I2 = r.get(E2);
      if (Ct(I2)) {
        if (!I2.isConnected)
          return void f.set(d, void 0);
        const w = Ot(I2);
        return f.set(d, w), J(w, o), w;
      }
      return Pe(I2) ? (f.set(d, I2), J(I2, o), I2) : (f.set(d, I2), I2);
    }
    if (d.startsWith("@")) {
      const k2 = d.slice(1), E2 = $e(k2);
      return s[E2];
    }
    if (d.startsWith("*")) {
      const k2 = d.slice(1), E2 = $e(k2);
      r.has(E2);
      const I2 = i.get(E2);
      return f.set(d, I2), I2;
    }
    const p = $e(d), v3 = t.objs;
    v3.length > p;
    let y = v3[p];
    Ee(y) && (y = y === gn ? void 0 : $2.prepare(y));
    let h = y;
    for (let k2 = d.length - 1; k2 >= 0; k2--) {
      const E2 = ba[d[k2]];
      if (!E2)
        break;
      h = E2(h, o);
    }
    return f.set(d, h), Go(y) || m.has(p) || (m.add(p), bc(y, p, t.subs, g2, o, $2), Xo(y, g2, $2)), h;
  };
  o.$elementIndex$ = 1e5, o.$pauseCtx$ = { getObject: g2, meta: t.ctx, refs: t.refs }, ne(e, "q:container", "resumed"), Di(e, "qresume", void 0, true);
};
var bc = (e, t, n, s, o, r) => {
  const i = n[t];
  if (i) {
    const c = [];
    let l = 0;
    for (const a of i)
      if (a.startsWith("_"))
        l = parseInt(a.slice(1), 10);
      else {
        const u = _a(a, s);
        u && c.push(u);
      }
    if (l > 0 && $n(e, l), !r.subs(e, c)) {
      const a = o.$proxyMap$.get(e);
      a ? G(a).$addSubs$(c) : At(e, o, c);
    }
  }
};
var Xo = (e, t, n) => {
  if (!n.fill(e, t) && e && typeof e == "object") {
    if (F(e))
      for (let s = 0; s < e.length; s++)
        e[s] = t(e[s]);
    else if (It(e))
      for (const s in e)
        e[s] = t(e[s]);
  }
};
var Sc = (e) => e.replace(/\\x3C(\/?script)/gi, "<$1");
var vc = (e) => e.qFuncs ?? de;
var xc = (e, t) => {
  let n = e.lastElementChild;
  for (; n; ) {
    if (n.tagName === "SCRIPT" && ae(n, t) === "qwik/json")
      return n;
    n = n.previousElementSibling;
  }
};
var wc = (e) => {
  const t = e.nextSibling;
  if (Zn(t))
    return t;
  {
    const n = e.ownerDocument.createTextNode("");
    return e.parentElement.insertBefore(n, e), n;
  }
};
var kc = (e) => {
  e.qwik = { pause: () => Al(e), state: mt(e) };
};
var _c = (e) => {
  const t = e.indexOf("q:id=");
  return t > 0 ? $e(e.slice(t + 5)) : -1;
};
var M = () => {
  const e = jc();
  let t = e.$qrl$;
  if (t)
    t.$captureRef$;
  else {
    const n = e.$element$, s = xs(n);
    t = hn(decodeURIComponent(String(e.$url$)), s), Jo(s);
    const o = J(n, mt(s));
    qr(t, o);
  }
  return t.$captureRef$;
};
var Ec = (e, t) => {
  try {
    const n = t[0], s = e.$static$;
    switch (n) {
      case 1:
      case 2: {
        let o, r;
        n === 1 ? (o = t[1], r = t[3]) : (o = t[3], r = t[1]);
        const i = ie(o);
        if (i == null)
          return;
        const c = t[4], l = o.namespaceURI === Pt;
        s.$containerState$.$subsManager$.$clearSignal$(t);
        let a = xe(t[2], t.slice(0, -1));
        c === "class" ? a = us(a, ie(r)) : c === "style" && (a = dn(a));
        const u = ms(i);
        return c in u.$props$ && u.$props$[c] === a ? void 0 : (u.$props$[c] = a, Ts(s, o, c, a, l));
      }
      case 3:
      case 4: {
        const o = t[3];
        if (!s.$visited$.includes(o)) {
          s.$containerState$.$subsManager$.$clearSignal$(t);
          const r = void 0;
          let i = xe(t[2], t.slice(0, -1));
          const c = Ca();
          Array.isArray(i) && (i = new pt(Te, {}, null, i, 0, null));
          let l = Ce(i, r);
          if (W(l))
            Qe("Rendering promises in JSX signals is not supported");
          else {
            l === void 0 && (l = Ce("", r));
            const a = yr(o), u = Tc(t[1]);
            if (e.$cmpCtx$ = J(u, e.$static$.$containerState$), a.$type$ == l.$type$ && a.$key$ == l.$key$ && a.$id$ == l.$id$)
              et(e, a, l, 0);
            else {
              const $2 = [], f = a.$elm$, m = Ve(e, l, 0, $2);
              $2.length && Qe("Rendering promises in JSX signals is not supported"), c[3] = m, rt(e.$static$, o.parentElement, m, f), f && Is(s, f);
            }
          }
        }
      }
    }
  } catch {
  }
};
function Tc(e) {
  for (; e; ) {
    if (Oe(e))
      return e;
    e = e.parentElement;
  }
  throw new Error("Not found");
}
var Cc = (e, t) => {
  if (e[0] === 0) {
    const n = e[1];
    bs(n) ? hs(n, t) : Ic(n, t);
  } else
    Rc(e, t);
};
var Ic = (e, t) => {
  const n = se();
  n || Jo(t.$containerEl$);
  const s = J(e, t);
  if (s.$componentQrl$, !(s.$flags$ & at))
    if (s.$flags$ |= at, t.$hostsRendering$ !== void 0)
      t.$hostsStaging$.add(s);
    else {
      if (n)
        return void _e();
      t.$hostsNext$.add(s), gs(t);
    }
};
var Rc = (e, t) => {
  const n = t.$hostsRendering$ !== void 0;
  t.$opsNext$.add(e), n || gs(t);
};
var hs = (e, t) => {
  e.$flags$ & Ie || (e.$flags$ |= Ie, t.$hostsRendering$ !== void 0 ? t.$taskStaging$.add(e) : (t.$taskNext$.add(e), gs(t)));
};
var gs = (e) => (e.$renderPromise$ === void 0 && (e.$renderPromise$ = rn().nextTick(() => Zo(e))), e.$renderPromise$);
var Ac = () => {
  const [e] = M();
  hs(e, mt(xs(e.$el$)));
};
var Zo = async (e) => {
  const t = e.$containerEl$, n = Rt(t);
  try {
    const s = No(n, e), o = s.$static$, r = e.$hostsRendering$ = new Set(e.$hostsNext$);
    e.$hostsNext$.clear(), await qc(e, s), e.$hostsStaging$.forEach((l) => {
      r.add(l);
    }), e.$hostsStaging$.clear();
    const i = Array.from(e.$opsNext$);
    e.$opsNext$.clear();
    const c = Array.from(r);
    Oc(c), !e.$styleMoved$ && c.length > 0 && (e.$styleMoved$ = true, (t === n.documentElement ? n.body : t).querySelectorAll("style[q\\:style]").forEach((l) => {
      e.$styleIds$.add(ae(l, ln)), Er(o, n.head, l);
    }));
    for (const l of c) {
      const a = l.$element$;
      if (!o.$hostElements$.has(a) && l.$componentQrl$) {
        a.isConnected, o.$roots$.push(l);
        try {
          await ps(s, l, Mc(a.parentElement));
        } catch (u) {
          Qe(u);
        }
      }
    }
    return i.forEach((l) => {
      Ec(s, l);
    }), o.$operations$.push(...o.$postOperations$), o.$operations$.length === 0 ? (so(o), void await Ys(e, s)) : (await ll(o), so(o), Ys(e, s));
  } catch (s) {
    Qe(s);
  }
};
var Mc = (e) => {
  let t = 0;
  return e && (e.namespaceURI === Pt && (t |= ee), e.tagName === "HEAD" && (t |= Gt)), t;
};
var Ys = async (e, t) => {
  const n = t.$static$.$hostElements$;
  await Pc(e, t, (s, o) => (s.$flags$ & er) != 0 && (!o || n.has(s.$el$))), e.$hostsStaging$.forEach((s) => {
    e.$hostsNext$.add(s);
  }), e.$hostsStaging$.clear(), e.$hostsRendering$ = void 0, e.$renderPromise$ = void 0, e.$hostsNext$.size + e.$taskNext$.size + e.$opsNext$.size > 0 && (e.$renderPromise$ = Zo(e));
};
var zn = (e) => (e.$flags$ & ys) != 0;
var Gs = (e) => (e.$flags$ & tr) != 0;
var qc = async (e, t) => {
  const n = e.$containerEl$, s = [], o = [];
  e.$taskNext$.forEach((r) => {
    zn(r) && (o.push(N(r.$qrl$.$resolveLazy$(n), () => r)), e.$taskNext$.delete(r)), Gs(r) && (s.push(N(r.$qrl$.$resolveLazy$(n), () => r)), e.$taskNext$.delete(r));
  });
  do
    if (e.$taskStaging$.forEach((r) => {
      zn(r) ? o.push(N(r.$qrl$.$resolveLazy$(n), () => r)) : Gs(r) ? s.push(N(r.$qrl$.$resolveLazy$(n), () => r)) : e.$taskNext$.add(r);
    }), e.$taskStaging$.clear(), o.length > 0) {
      const r = await Promise.all(o);
      Kt(r), await Promise.all(r.map((i) => Yt(i, e, t))), o.length = 0;
    }
  while (e.$taskStaging$.size > 0);
  if (s.length > 0) {
    const r = await Promise.all(s);
    Kt(r);
    for (const i of r)
      Yt(i, e, t);
  }
};
var Nc = (e, t) => {
  const n = e.$containerEl$, s = e.$taskStaging$;
  if (!s.size)
    return;
  const o = [];
  let r = 20;
  const i = () => {
    if (s.forEach((c) => {
      console.error("task", c.$qrl$.$symbol$), zn(c) && o.push(N(c.$qrl$.$resolveLazy$(n), () => c));
    }), s.clear(), o.length > 0)
      return Promise.all(o).then(async (c) => {
        if (Kt(c), await Promise.all(c.map((l) => Yt(l, e, t))), o.length = 0, --r && s.size > 0)
          return i();
        r || _e(`Infinite task loop detected. Tasks:
${Array.from(s).map((l) => `  ${l.$qrl$.$symbol$}`).join(`
`)}`);
      });
  };
  return i();
};
var Pc = async (e, t, n) => {
  const s = [], o = e.$containerEl$;
  e.$taskNext$.forEach((r) => {
    n(r, false) && (r.$el$.isConnected && s.push(N(r.$qrl$.$resolveLazy$(o), () => r)), e.$taskNext$.delete(r));
  });
  do
    if (e.$taskStaging$.forEach((r) => {
      r.$el$.isConnected && (n(r, true) ? s.push(N(r.$qrl$.$resolveLazy$(o), () => r)) : e.$taskNext$.add(r));
    }), e.$taskStaging$.clear(), s.length > 0) {
      const r = await Promise.all(s);
      Kt(r);
      for (const i of r)
        Yt(i, e, t);
      s.length = 0;
    }
  while (e.$taskStaging$.size > 0);
};
var Oc = (e) => {
  e.sort((t, n) => 2 & t.$element$.compareDocumentPosition(tn(n.$element$)) ? 1 : -1);
};
var Kt = (e) => {
  const t = se();
  e.sort((n, s) => t || n.$el$ === s.$el$ ? n.$index$ < s.$index$ ? -1 : 1 : 2 & n.$el$.compareDocumentPosition(tn(s.$el$)) ? 1 : -1);
};
var er = 1;
var ys = 2;
var tr = 4;
var Ie = 16;
var Be = (e, t) => {
  const { val: n, set: s, iCtx: o, i: r, elCtx: i } = Le();
  if (n)
    return;
  const c = o.$renderCtx$.$static$.$containerState$, l = new qt(Ie | ys, r, i.$element$, e, void 0);
  s(true), e.$resolveLazy$(c.$containerEl$), i.$tasks$ || (i.$tasks$ = []), i.$tasks$.push(l), cr(o, () => sr(l, c, o.$renderCtx$)), se() && Fn(l, t == null ? void 0 : t.eagerness);
};
var D = (e) => {
  const { val: t, set: n, iCtx: s, i: o, elCtx: r } = Le();
  if (t)
    return t;
  const i = s.$renderCtx$.$static$.$containerState$, c = $r(void 0, i, ws | dr, void 0), l = new qt(Ie | ys | 8, o, r.$element$, e, c);
  return e.$resolveLazy$(i.$containerEl$), r.$tasks$ || (r.$tasks$ = []), r.$tasks$.push(l), cr(s, () => or(l, i, s.$renderCtx$)), n(c);
};
var fn = (e, t) => {
  const { val: n, set: s, i: o, iCtx: r, elCtx: i } = Le(), c = (t == null ? void 0 : t.strategy) ?? "intersection-observer";
  if (n)
    return void (se() && Fn(n, c));
  const l = new qt(er, o, i.$element$, e, void 0), a = r.$renderCtx$.$static$.$containerState$;
  i.$tasks$ || (i.$tasks$ = []), i.$tasks$.push(l), s(l), Fn(l, c), se() || (e.$resolveLazy$(a.$containerEl$), hs(l, a));
};
var nr = (e) => (e.$flags$ & tr) != 0;
var Lc = (e) => (8 & e.$flags$) != 0;
var Yt = async (e, t, n) => (e.$flags$ & Ie, nr(e) ? zc(e, t, n) : Lc(e) ? or(e, t, n) : sr(e, t, n));
var zc = (e, t, n, s) => {
  e.$flags$ &= ~Ie, wt(e);
  const o = le(n.$static$.$locale$, e.$el$, void 0, "qTask"), { $subsManager$: r } = t;
  o.$renderCtx$ = n;
  const i = e.$qrl$.getFn(o, () => {
    r.$clearSub$(e);
  }), c = [], l = e.$state$, a = Lt(l), u = { track: (p, v3) => {
    if (oe(p)) {
      const h = le();
      return h.$renderCtx$ = n, h.$subscriber$ = [0, e], X(h, p);
    }
    const y = G(p);
    return y ? y.$addSub$([0, e], v3) : es(on(26), p), v3 ? p[v3] : j(p) ? p.value : p;
  }, cleanup(p) {
    c.push(p);
  }, cache(p) {
    let v3 = 0;
    v3 = p === "immutable" ? 1 / 0 : p, l._cache = v3;
  }, previous: a._resolved };
  let $2, f, m = false;
  const g2 = (p, v3) => !m && (m = true, p ? (m = true, l.loading = false, l._state = "resolved", l._resolved = v3, l._error = void 0, $2(v3)) : (m = true, l.loading = false, l._state = "rejected", l._error = v3, f(v3)), true);
  X(o, () => {
    l._state = "pending", l.loading = !se(), l.value = new Promise((p, v3) => {
      $2 = p, f = v3;
    });
  }), e.$destroy$ = bn(() => {
    m = true, c.forEach((p) => p());
  });
  const b = cn(() => N(s, () => i(u)), (p) => {
    g2(true, p);
  }, (p) => {
    g2(false, p);
  }), d = a._timeout;
  return d > 0 ? Promise.race([b, Pi(d).then(() => {
    g2(false, new Error("timeout")) && wt(e);
  })]) : b;
};
var sr = (e, t, n) => {
  e.$flags$ &= ~Ie, wt(e);
  const s = e.$el$, o = le(n.$static$.$locale$, s, void 0, "qTask");
  o.$renderCtx$ = n;
  const { $subsManager$: r } = t, i = e.$qrl$.getFn(o, () => {
    r.$clearSub$(e);
  }), c = [];
  e.$destroy$ = bn(() => {
    c.forEach((a) => a());
  });
  const l = { track: (a, u) => {
    if (oe(a)) {
      const f = le();
      return f.$subscriber$ = [0, e], X(f, a);
    }
    const $2 = G(a);
    return $2 ? $2.$addSub$([0, e], u) : es(on(26), a), u ? a[u] : j(a) ? a.value : a;
  }, cleanup(a) {
    c.push(a);
  } };
  return cn(() => i(l), (a) => {
    oe(a) && c.push(a);
  }, (a) => {
    as(a, s, n);
  });
};
var or = (e, t, n) => {
  e.$state$, e.$flags$ &= ~Ie, wt(e);
  const s = e.$el$, o = le(n.$static$.$locale$, s, void 0, "qComputed");
  o.$subscriber$ = [0, e], o.$renderCtx$ = n;
  const { $subsManager$: r } = t, i = e.$qrl$.getFn(o, () => {
    r.$clearSub$(e);
  });
  return cn(i, (c) => ar(() => {
    const l = e.$state$;
    l[kt] &= ~ws, l.untrackedValue = c, l[fe].$notifySubs$();
  }), (c) => {
    as(c, s, n);
  });
};
var wt = (e) => {
  const t = e.$destroy$;
  if (t) {
    e.$destroy$ = void 0;
    try {
      t();
    } catch (n) {
      Qe(n);
    }
  }
};
var rr = (e) => {
  32 & e.$flags$ ? (e.$flags$ &= -33, (0, e.$qrl$)()) : wt(e);
};
var Fn = (e, t) => {
  t === "visible" || t === "intersection-observer" ? Bi("qvisible", En(e)) : t === "load" || t === "document-ready" ? Ks("qinit", En(e)) : t !== "idle" && t !== "document-idle" || Ks("qidle", En(e));
};
var En = (e) => {
  const t = e.$qrl$;
  return Sn(t.$chunk$, "_hW", Ac, null, null, [e], t.$symbol$);
};
var bs = (e) => ke(e) && e instanceof qt;
var Fc = (e, t) => {
  let n = `${Ae(e.$flags$)} ${Ae(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;
  return e.$state$ && (n += ` ${t(e.$state$)}`), n;
};
var Bc = (e) => {
  const [t, n, s, o, r] = e.split(" ");
  return new qt($e(t), $e(n), o, s, r);
};
var qt = class {
  constructor(t, n, s, o, r) {
    this.$flags$ = t, this.$index$ = n, this.$el$ = s, this.$qrl$ = o, this.$state$ = r;
  }
};
function Dc(e) {
  return Vc(e) && e.nodeType === 1;
}
function Vc(e) {
  return e && typeof e.nodeType == "number";
}
var at = 1;
var Re = 2;
var Ss = 4;
var vs = 8;
var ie = (e) => e[an];
var J = (e, t) => {
  const n = ie(e);
  if (n)
    return n;
  const s = pn(e), o = ae(e, "q:id");
  if (o) {
    const r = t.$pauseCtx$;
    if (s.$id$ = o, r) {
      const { getObject: i, meta: c, refs: l } = r;
      if (Dc(e)) {
        const a = l[o];
        a && (s.$refMap$ = a.split(" ").map(i), s.li = Fi(s, t.$containerEl$));
      } else {
        const a = e.getAttribute("q:sstyle");
        s.$scopeIds$ = a ? a.split("|") : null;
        const u = c[o];
        if (u) {
          const $2 = u.s, f = u.h, m = u.c, g2 = u.w;
          if ($2 && (s.$seq$ = $2.split(" ").map(i)), g2 && (s.$tasks$ = g2.split(" ").map(i)), m) {
            s.$contexts$ = /* @__PURE__ */ new Map();
            for (const b of m.split(" ")) {
              const [d, p] = b.split("=");
              s.$contexts$.set(d, i(p));
            }
          }
          if (f) {
            const [b, d] = f.split(" ");
            if (s.$flags$ = Ss, b && (s.$componentQrl$ = i(b)), d) {
              const p = i(d);
              s.$props$ = p, $n(p, 2), p[C] = Uc(p);
            } else
              s.$props$ = At(un(), t);
          }
        }
      }
    }
  }
  return s;
};
var Uc = (e) => {
  const t = {}, n = Ge(e);
  for (const s in n)
    s.startsWith("$$") && (t[s.slice(2)] = n[s]);
  return t;
};
var pn = (e) => {
  const t = { $flags$: 0, $id$: "", $element$: e, $refMap$: [], li: [], $tasks$: null, $seq$: null, $slots$: null, $scopeIds$: null, $appendStyles$: null, $props$: null, $vdom$: null, $componentQrl$: null, $contexts$: null, $dynamicSlots$: null, $parentCtx$: void 0, $realParentCtx$: void 0 };
  return e[an] = t, t;
};
var Wc = (e, t) => {
  var n;
  (n = e.$tasks$) == null || n.forEach((s) => {
    t.$clearSub$(s), rr(s);
  }), e.$componentQrl$ = null, e.$seq$ = null, e.$tasks$ = null;
};
var it;
function Qc(e) {
  if (it === void 0) {
    const t = ve();
    if (t && t.$locale$)
      return t.$locale$;
    if (e !== void 0)
      return e;
    throw new Error("Reading `locale` outside of context.");
  }
  return it;
}
function Js(e, t) {
  const n = it;
  try {
    return it = e, t();
  } finally {
    it = n;
  }
}
function Hc(e) {
  it = e;
}
var bt;
var ve = () => {
  if (!bt) {
    const e = typeof document < "u" && document && document.__q_context__;
    return e ? F(e) ? document.__q_context__ = lr(e) : e : void 0;
  }
  return bt;
};
var jc = () => {
  const e = ve();
  if (!e)
    throw V(14);
  return e;
};
var ir = () => {
  const e = ve();
  if (!e || e.$event$ !== "qRender")
    throw V(20);
  return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
};
function X(e, t, ...n) {
  return Kc.call(this, e, t, n);
}
function Kc(e, t, n) {
  const s = bt;
  let o;
  try {
    bt = e, o = t.apply(this, n);
  } finally {
    bt = s;
  }
  return o;
}
var cr = (e, t) => {
  const n = e.$waitOn$;
  if (n.length === 0) {
    const s = t();
    W(s) && n.push(s);
  } else
    n.push(Promise.all(n).then(t));
};
var lr = ([e, t, n]) => {
  const s = e.closest("[q\\:container]"), o = (s == null ? void 0 : s.getAttribute("q:locale")) || void 0;
  return o && Hc(o), le(o, void 0, e, t, n);
};
var le = (e, t, n, s, o) => ({ $url$: o, $i$: 0, $hostElement$: t, $element$: n, $event$: s, $qrl$: void 0, $waitOn$: void 0, $subscriber$: void 0, $renderCtx$: void 0, $locale$: e });
var xs = (e) => e.closest("[q\\:container]");
var ar = (e) => X(void 0, e);
var Xs = le(void 0, void 0, void 0, "qRender");
var xe = (e, t) => (Xs.$subscriber$ = t, X(Xs, () => e.value));
var Ye = (e) => {
  const t = ve();
  return t && t.$hostElement$ && t.$renderCtx$ && (J(t.$hostElement$, t.$renderCtx$.$static$.$containerState$).$flags$ |= vs), e;
};
var ur;
var $r = (e, t, n, s) => {
  const o = t.$subsManager$.$createManager$(s);
  return new _t(e, o, n);
};
var kt = Symbol("proxy manager");
var dr = 1;
var ws = 2;
var fr = Symbol("unassigned signal");
var Nt = class {
};
var _t = class extends Nt {
  constructor(t, n, s) {
    super(), this[ur] = 0, this.untrackedValue = t, this[fe] = n, this[kt] = s;
  }
  valueOf() {
  }
  toString() {
    return `[Signal ${String(this.value)}]`;
  }
  toJSON() {
    return { value: this.value };
  }
  get value() {
    var n;
    if (this[kt] & ws)
      throw fr;
    const t = (n = ve()) == null ? void 0 : n.$subscriber$;
    return t && this[fe].$addSub$(t), this.untrackedValue;
  }
  set value(t) {
    const n = this[fe];
    n && this.untrackedValue !== t && (this.untrackedValue = t, n.$notifySubs$());
  }
};
ur = kt;
var Bn = class extends Nt {
  constructor(t, n, s) {
    super(), this.$func$ = t, this.$args$ = n, this.$funcStr$ = s;
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
};
var Dn = class extends Nt {
  constructor(t, n) {
    super(), this.ref = t, this.prop = n;
  }
  get [fe]() {
    return G(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
};
var j = (e) => e instanceof Nt;
var ut = (e, t) => {
  var o, r;
  if (!ke(e))
    return e[t];
  if (e instanceof Nt)
    return e;
  const n = Ge(e);
  if (n) {
    const i = n["$$" + t];
    if (i)
      return i;
    if (((o = n[C]) == null ? void 0 : o[t]) !== true)
      return new Dn(e, t);
  }
  const s = (r = e[C]) == null ? void 0 : r[t];
  return j(s) ? s : C;
};
var pr = (e, t) => {
  const n = ut(e, t);
  return n === C ? e[t] : n;
};
var Zs = Symbol("ContainerState");
var mt = (e) => {
  let t = e[Zs];
  return t || (e[Zs] = t = ks(e, ae(e, "q:base") ?? "/")), t;
};
var ks = (e, t) => {
  const n = { $containerEl$: e, $elementIndex$: 0, $styleMoved$: false, $proxyMap$: /* @__PURE__ */ new WeakMap(), $opsNext$: /* @__PURE__ */ new Set(), $taskNext$: /* @__PURE__ */ new Set(), $taskStaging$: /* @__PURE__ */ new Set(), $hostsNext$: /* @__PURE__ */ new Set(), $hostsStaging$: /* @__PURE__ */ new Set(), $styleIds$: /* @__PURE__ */ new Set(), $events$: /* @__PURE__ */ new Set(), $serverData$: {}, $base$: t, $renderPromise$: void 0, $hostsRendering$: void 0, $pauseCtx$: void 0, $subsManager$: null, $inlineFns$: /* @__PURE__ */ new Map() };
  return n.$subsManager$ = Ea(n), n;
};
var _s = (e, t) => {
  if (oe(e))
    return e(t);
  if (j(e))
    return se() ? e.untrackedValue = t : e.value = t;
  throw V(32, e);
};
var mr = 128;
var Yc = (e) => Pe(e) && e.hasAttribute("q:container");
var Ae = (e) => e.toString(36);
var $e = (e) => parseInt(e, 36);
var hr = (e) => {
  const t = e.indexOf(":");
  return e && Oi(e.slice(t + 1));
};
var Pt = "http://www.w3.org/2000/svg";
var ee = 1;
var Gt = 2;
var Jt = [];
var Xt = (e, t, n, s) => {
  t.$elm$;
  const o = n.$children$;
  if (o.length === 1 && o[0].$type$ === ":skipRender")
    return void (n.$children$ = t.$children$);
  const r = t.$elm$;
  let i = en;
  t.$children$ === Jt && r.nodeName === "HEAD" && (i = Xc, s |= Gt);
  const c = Gc(t, i);
  return c.length > 0 && o.length > 0 ? Jc(e, r, c, o, s) : c.length > 0 && o.length === 0 ? Es(e.$static$, c, 0, c.length - 1) : o.length > 0 ? Sr(e, r, null, o, 0, o.length - 1, s) : void 0;
};
var Gc = (e, t) => {
  const n = e.$children$;
  return n === Jt ? e.$children$ = gr(e.$elm$, t) : n;
};
var Jc = (e, t, n, s, o) => {
  let r = 0, i = 0, c = n.length - 1, l = n[0], a = n[c], u = s.length - 1, $2 = s[0], f = s[u], m, g2, b;
  const d = [], p = e.$static$;
  for (; r <= c && i <= u; )
    if (l == null)
      l = n[++r];
    else if (a == null)
      a = n[--c];
    else if ($2 == null)
      $2 = s[++i];
    else if (f == null)
      f = s[--u];
    else if (l.$id$ === $2.$id$)
      d.push(et(e, l, $2, o)), l = n[++r], $2 = s[++i];
    else if (a.$id$ === f.$id$)
      d.push(et(e, a, f, o)), a = n[--c], f = s[--u];
    else if (l.$key$ && l.$id$ === f.$id$)
      l.$elm$, a.$elm$, d.push(et(e, l, f, o)), pl(p, t, l.$elm$, a.$elm$), l = n[++r], f = s[--u];
    else if (a.$key$ && a.$id$ === $2.$id$)
      l.$elm$, a.$elm$, d.push(et(e, a, $2, o)), rt(p, t, a.$elm$, l.$elm$), a = n[--c], $2 = s[++i];
    else {
      if (m === void 0 && (m = $l(n, r, c)), g2 = m[$2.$key$], g2 === void 0) {
        const y = Ve(e, $2, o, d);
        rt(p, t, y, l == null ? void 0 : l.$elm$);
      } else if (b = n[g2], b.$type$ !== $2.$type$) {
        const y = Ve(e, $2, o, d);
        N(y, (h) => {
          rt(p, t, h, l == null ? void 0 : l.$elm$);
        });
      } else
        d.push(et(e, b, $2, o)), n[g2] = void 0, b.$elm$, rt(p, t, b.$elm$, l.$elm$);
      $2 = s[++i];
    }
  i <= u && d.push(Sr(e, t, s[u + 1] == null ? null : s[u + 1].$elm$, s, i, u, o));
  let v3 = ss(d);
  return r <= c && (v3 = N(v3, () => {
    Es(p, n, r, c);
  })), v3;
};
var ot = (e, t) => {
  const n = pe(e) ? e.close : null, s = [];
  let o = e.firstChild;
  for (; (o = Rs(o)) && (t(o) && s.push(o), o = o.nextSibling, o !== n); )
    ;
  return s;
};
var gr = (e, t) => ot(e, t).map(yr);
var yr = (e) => {
  var t;
  return Pe(e) ? ((t = ie(e)) == null ? void 0 : t.$vdom$) ?? Zt(e) : Zt(e);
};
var Zt = (e) => {
  if (Oe(e)) {
    const t = new Se(e.localName, {}, null, Jt, 0, Un(e));
    return t.$elm$ = e, t;
  }
  if (Zn(e)) {
    const t = new Se(e.nodeName, te, null, Jt, 0, null);
    return t.$text$ = e.data, t.$elm$ = e, t;
  }
};
var Xc = (e) => {
  const t = e.nodeType;
  return t === 1 ? e.hasAttribute("q:head") : t === 111;
};
var Vn = (e) => e.nodeName === "Q:TEMPLATE";
var en = (e) => {
  const t = e.nodeType;
  if (t === 3 || t === 111)
    return true;
  if (t !== 1)
    return false;
  const n = e.nodeName;
  return n !== "Q:TEMPLATE" && (n === "HEAD" ? e.hasAttribute("q:head") : n !== "STYLE" || !e.hasAttribute(ln));
};
var br = (e) => {
  const t = {};
  for (const n of e) {
    const s = Zc(n);
    (t[s] ?? (t[s] = new Se($t, { "q:s": "" }, null, [], 0, s))).$children$.push(n);
  }
  return t;
};
var et = (e, t, n, s) => {
  t.$type$, n.$type$, t.$key$, n.$key$, t.$id$, n.$id$;
  const o = t.$elm$, r = n.$type$, i = e.$static$, c = i.$containerState$, l = e.$cmpCtx$;
  if (n.$elm$ = o, r === "#text") {
    i.$visited$.push(o);
    const f = n.$signal$;
    return f && (n.$text$ = xt(xe(f, [4, l.$element$, f, o]))), void Me(i, o, "data", n.$text$);
  }
  if (r === "#signal")
    return;
  const a = n.$props$, u = n.$flags$, $2 = J(o, c);
  if (r !== $t) {
    let f = (s & ee) != 0;
    if (f || r !== "svg" || (s |= ee, f = true), a !== te) {
      !(1 & u) && ($2.li.length = 0);
      const m = t.$props$;
      n.$props$ = m;
      for (const g2 in a) {
        let b = a[g2];
        if (g2 !== "ref")
          if (rs(g2)) {
            const d = cs($2.li, g2, b, c.$containerEl$);
            wr(i, o, d);
          } else
            j(b) && (b = xe(b, [1, l.$element$, b, o, g2])), g2 === "class" ? b = us(b, l) : g2 === "style" && (b = dn(b)), m[g2] !== b && (m[g2] = b, Ts(i, o, g2, b, f));
        else
          b !== void 0 && _s(b, o);
      }
    }
    return 2 & u || (f && r === "foreignObject" && (s &= ~ee), a[Y] !== void 0) || r === "textarea" ? void 0 : Xt(e, t, n, s);
  }
  if ("q:renderFn" in a) {
    const f = a.props;
    cl(c, $2, f);
    let m = !!($2.$flags$ & at);
    return m || $2.$componentQrl$ || $2.$element$.hasAttribute("q:id") || (Po(e, $2), $2.$componentQrl$ = f["q:renderFn"], $2.$componentQrl$, m = true), m ? N(ps(e, $2, s), () => eo(e, $2, n, s)) : eo(e, $2, n, s);
  }
  if ("q:s" in a)
    return l.$slots$, void l.$slots$.push(n);
  if (Y in a)
    Me(i, o, "innerHTML", a[Y]);
  else if (!(2 & u))
    return Xt(e, t, n, s);
};
var eo = (e, t, n, s) => {
  if (2 & n.$flags$)
    return;
  const o = e.$static$, r = br(n.$children$), i = xr(t);
  for (const c in i.slots)
    if (!r[c]) {
      const l = i.slots[c], a = gr(l, en);
      if (a.length > 0) {
        const u = ie(l);
        u && u.$vdom$ && (u.$vdom$.$children$ = []), Es(o, a, 0, a.length - 1);
      }
    }
  for (const c in i.templates) {
    const l = i.templates[c];
    l && !r[c] && (i.templates[c] = void 0, Is(o, l));
  }
  return ss(Object.keys(r).map((c) => {
    const l = r[c], a = vr(o, i, t, c, e.$static$.$containerState$), u = ms(a), $2 = Mt(e), f = a.$element$;
    $2.$slotCtx$ = a, a.$vdom$ = l, l.$elm$ = f;
    let m = s & ~ee;
    f.isSvg && (m |= ee);
    const g2 = o.$addSlots$.findIndex((b) => b[0] === f);
    return g2 >= 0 && o.$addSlots$.splice(g2, 1), Xt($2, u, l, m);
  }));
};
var Sr = (e, t, n, s, o, r, i) => {
  const c = [];
  for (; o <= r; ++o) {
    const l = s[o], a = Ve(e, l, i, c);
    rt(e.$static$, t, a, n);
  }
  return nt(c);
};
var Es = (e, t, n, s) => {
  for (; n <= s; ++n) {
    const o = t[n];
    o && (o.$elm$, Is(e, o.$elm$));
  }
};
var vr = (e, t, n, s, o) => {
  const r = t.slots[s];
  if (r)
    return J(r, o);
  const i = t.templates[s];
  if (i)
    return J(i, o);
  const c = Tr(e.$doc$, s), l = pn(c);
  return l.$parentCtx$ = n, gl(e, n.$element$, c), t.templates[s] = c, l;
};
var Zc = (e) => e.$props$[re] ?? "";
var Ve = (e, t, n, s) => {
  const o = t.$type$, r = e.$static$.$doc$, i = e.$cmpCtx$;
  if (o === "#text")
    return t.$elm$ = r.createTextNode(t.$text$);
  if (o === "#signal") {
    const d = t.$signal$, p = d.value;
    if (Ke(p)) {
      const v3 = Ce(p);
      if (j(v3))
        throw new Error("NOT IMPLEMENTED: Promise");
      if (Array.isArray(v3))
        throw new Error("NOT IMPLEMENTED: Array");
      {
        const y = Ve(e, v3, n, s);
        return xe(d, 4 & n ? [3, y, d, y] : [4, i.$element$, d, y]), t.$elm$ = y;
      }
    }
    {
      const v3 = r.createTextNode(t.$text$);
      return v3.data = t.$text$ = xt(p), xe(d, 4 & n ? [3, v3, d, v3] : [4, i.$element$, d, v3]), t.$elm$ = v3;
    }
  }
  let c, l = !!(n & ee);
  l || o !== "svg" || (n |= ee, l = true);
  const a = o === $t, u = t.$props$, $2 = e.$static$, f = $2.$containerState$;
  a ? c = wl(r, l) : o === "head" ? (c = r.head, n |= Gt) : (c = Cs(r, o, l), n &= ~Gt), 2 & t.$flags$ && (n |= 4), t.$elm$ = c;
  const m = pn(c);
  if (e.$slotCtx$ ? (m.$parentCtx$ = e.$slotCtx$, m.$realParentCtx$ = e.$cmpCtx$) : m.$parentCtx$ = e.$cmpCtx$, a) {
    if ("q:renderFn" in u) {
      const d = u["q:renderFn"], p = un(), v3 = f.$subsManager$.$createManager$(), y = new Proxy(p, new Mo(f, v3)), h = u.props;
      if (f.$proxyMap$.set(p, y), m.$props$ = y, h !== te) {
        const E2 = p[C] = h[C] ?? te;
        for (const I2 in h)
          if (I2 !== "children" && I2 !== re) {
            const w = E2[I2];
            j(w) ? p["$$" + I2] = w : p[I2] = h[I2];
          }
      }
      Po(e, m), m.$componentQrl$ = d;
      const k2 = N(ps(e, m, n), () => {
        let E2 = t.$children$;
        if (E2.length === 0)
          return;
        E2.length === 1 && E2[0].$type$ === ":skipRender" && (E2 = E2[0].$children$);
        const I2 = xr(m), w = [], A2 = br(E2);
        for (const O2 in A2) {
          const L2 = A2[O2], z2 = vr($2, I2, m, O2, $2.$containerState$), ye2 = Mt(e), Xe3 = z2.$element$;
          ye2.$slotCtx$ = z2, z2.$vdom$ = L2, L2.$elm$ = Xe3;
          let Z2 = n & ~ee;
          Xe3.isSvg && (Z2 |= ee);
          for (const U of L2.$children$) {
            const gt2 = Ve(ye2, U, Z2, w);
            U.$elm$, U.$elm$, Er($2, Xe3, gt2);
          }
        }
        return nt(w);
      });
      return W(k2) && s.push(k2), c;
    }
    if ("q:s" in u)
      i.$slots$, vl(c, t.$key$), ne(c, "q:sref", i.$id$), ne(c, "q:s", ""), i.$slots$.push(t), $2.$addSlots$.push([c, i.$element$]);
    else if (Y in u)
      return Me($2, c, "innerHTML", u[Y]), c;
  } else {
    if (t.$immutableProps$ && no($2, m, i, t.$immutableProps$, l, true), u !== te && (m.$vdom$ = t, t.$props$ = no($2, m, i, u, l, false)), l && o === "foreignObject" && (l = false, n &= ~ee), i) {
      const d = i.$scopeIds$;
      d && d.forEach((p) => {
        c.classList.add(p);
      }), i.$flags$ & Re && (m.li.push(...i.li), i.$flags$ &= ~Re);
    }
    for (const d of m.li)
      wr($2, c, d[0]);
    if (u[Y] !== void 0)
      return c;
    l && o === "foreignObject" && (l = false, n &= ~ee);
  }
  let g2 = t.$children$;
  if (g2.length === 0)
    return c;
  g2.length === 1 && g2[0].$type$ === ":skipRender" && (g2 = g2[0].$children$);
  const b = g2.map((d) => Ve(e, d, n, s));
  for (const d of b)
    Et(c, d);
  return c;
};
var el = (e) => {
  const t = e.$slots$;
  return t || (e.$element$.parentElement, e.$slots$ = tl(e));
};
var xr = (e) => {
  const t = el(e), n = {}, s = {}, o = Array.from(e.$element$.childNodes).filter(Vn);
  for (const r of t)
    r.$elm$, n[r.$key$ ?? ""] = r.$elm$;
  for (const r of o)
    s[ae(r, re) ?? ""] = r;
  return { slots: n, templates: s };
};
var tl = (e) => {
  const t = e.$element$.parentElement;
  return Tl(t, "q:sref", e.$id$).map(Zt);
};
var nl = (e, t, n) => (Me(e, t.style, "cssText", n), true);
var sl = (e, t, n) => (t.namespaceURI === Pt ? Tt(e, t, "class", n) : Me(e, t, "className", n), true);
var to = (e, t, n, s) => s in t && ((t[s] !== n || s === "value" && !t.hasAttribute(s)) && (t.tagName === "SELECT" ? fl(e, t, s, n) : Me(e, t, s, n)), true);
var yt = (e, t, n, s) => (Tt(e, t, s.toLowerCase(), n), true);
var ol = (e, t, n) => (Me(e, t, "innerHTML", n), true);
var rl = () => true;
var il = { style: nl, class: sl, value: to, checked: to, href: yt, list: yt, form: yt, tabIndex: yt, download: yt, innerHTML: rl, [Y]: ol };
var Ts = (e, t, n, s, o) => {
  if (Oo(n))
    return void Tt(e, t, n, s != null ? String(s) : s);
  const r = il[n];
  r && r(e, t, s, n) || (o || !(n in t) ? (n.startsWith(Io) && kr(n.slice(15)), Tt(e, t, n, s)) : Me(e, t, n, s));
};
var no = (e, t, n, s, o, r) => {
  const i = {}, c = t.$element$;
  for (const l in s) {
    let a = s[l];
    if (l !== "ref")
      if (rs(l))
        cs(t.li, l, a, e.$containerState$.$containerEl$);
      else {
        if (j(a) && (a = xe(a, r ? [1, c, a, n.$element$, l] : [2, n.$element$, a, c, l])), l === "class") {
          if (a = us(a, n), !a)
            continue;
        } else
          l === "style" && (a = dn(a));
        i[l] = a, Ts(e, c, l, a, o);
      }
    else
      a !== void 0 && _s(a, c);
  }
  return i;
};
var cl = (e, t, n) => {
  let s = t.$props$;
  if (s || (t.$props$ = s = At(un(), e)), n === te)
    return;
  const o = G(s), r = Ge(s), i = r[C] = n[C] ?? te;
  for (const c in n)
    if (c !== "children" && c !== re && !i[c]) {
      const l = n[c];
      r[c] !== l && (r[c] = l, o.$notifySubs$(c));
    }
};
var St = (e, t, n, s) => {
  if (n.$clearSub$(e), Oe(e)) {
    if (s && e.hasAttribute("q:s"))
      return void t.$rmSlots$.push(e);
    const o = ie(e);
    o && Wc(o, n);
    const r = pe(e) ? e.close : null;
    let i = e.firstChild;
    for (; (i = Rs(i)) && (St(i, t, n, true), i = i.nextSibling, i !== r); )
      ;
  }
};
var ll = async (e) => {
  Sl(e);
};
var Et = (e, t) => {
  pe(t) ? t.appendTo(e) : e.appendChild(t);
};
var al = (e, t) => {
  pe(t) ? t.remove() : e.removeChild(t);
};
var ul = (e, t, n) => {
  pe(t) ? t.insertBeforeTo(e, (n == null ? void 0 : n.nextSibling) ?? null) : e.insertBefore(t, (n == null ? void 0 : n.nextSibling) ?? null);
};
var mn = (e, t, n) => {
  pe(t) ? t.insertBeforeTo(e, tn(n)) : e.insertBefore(t, tn(n));
};
var $l = (e, t, n) => {
  const s = {};
  for (let o = t; o <= n; ++o) {
    const r = e[o].$key$;
    r != null && (s[r] = o);
  }
  return s;
};
var wr = (e, t, n) => {
  n.startsWith("on:") || Tt(e, t, n, ""), kr(n);
};
var kr = (e) => {
  var t;
  {
    const n = hr(e);
    try {
      ((t = globalThis).qwikevents || (t.qwikevents = [])).push(n);
    } catch {
    }
  }
};
var Tt = (e, t, n, s) => {
  e.$operations$.push({ $operation$: dl, $args$: [t, n, s] });
};
var dl = (e, t, n) => {
  if (n == null || n === false)
    e.removeAttribute(t);
  else {
    const s = n === true ? "" : String(n);
    ne(e, t, s);
  }
};
var Me = (e, t, n, s) => {
  e.$operations$.push({ $operation$: _r, $args$: [t, n, s] });
};
var fl = (e, t, n, s) => {
  e.$postOperations$.push({ $operation$: _r, $args$: [t, n, s] });
};
var _r = (e, t, n) => {
  try {
    e[t] = n ?? "", n == null && Ne(e) && Pe(e) && e.removeAttribute(t);
  } catch (s) {
    Qe(on(6), { node: e, key: t, value: n }, s);
  }
};
var Cs = (e, t, n) => n ? e.createElementNS(Pt, t) : e.createElement(t);
var rt = (e, t, n, s) => (e.$operations$.push({ $operation$: mn, $args$: [t, n, s || null] }), n);
var pl = (e, t, n, s) => (e.$operations$.push({ $operation$: ul, $args$: [t, n, s || null] }), n);
var Er = (e, t, n) => (e.$operations$.push({ $operation$: Et, $args$: [t, n] }), n);
var ml = (e, t) => {
  e.$containerState$.$styleIds$.add(t.styleId), e.$postOperations$.push({ $operation$: hl, $args$: [e.$containerState$, t] });
};
var hl = (e, t) => {
  const n = e.$containerEl$, s = Rt(n), o = s.documentElement === n, r = s.head, i = s.createElement("style");
  ne(i, ln, t.styleId), ne(i, "hidden", ""), i.textContent = t.content, o && r ? Et(r, i) : mn(n, i, n.firstChild);
};
var gl = (e, t, n) => {
  e.$operations$.push({ $operation$: yl, $args$: [t, n] });
};
var yl = (e, t) => {
  mn(e, t, e.firstChild);
};
var Is = (e, t) => {
  Oe(t) && St(t, e, e.$containerState$.$subsManager$, true), e.$operations$.push({ $operation$: bl, $args$: [t, e] });
};
var bl = (e) => {
  const t = e.parentElement;
  t && al(t, e);
};
var Tr = (e, t) => {
  const n = Cs(e, "q:template", false);
  return ne(n, re, t), ne(n, "hidden", ""), ne(n, "aria-hidden", "true"), n;
};
var Sl = (e) => {
  for (const t of e.$operations$)
    t.$operation$.apply(void 0, t.$args$);
  xl(e);
};
var Un = (e) => ae(e, "q:key");
var vl = (e, t) => {
  t !== null && ne(e, "q:key", t);
};
var xl = (e) => {
  const t = e.$containerState$.$subsManager$;
  for (const n of e.$rmSlots$) {
    const s = Un(n), o = ot(n, en);
    if (o.length > 0) {
      const r = n.getAttribute("q:sref"), i = e.$roots$.find((c) => c.$id$ === r);
      if (i) {
        const c = i.$element$;
        if (c.isConnected)
          if (ot(c, Vn).some((l) => ae(l, re) === s))
            St(n, e, t, false);
          else {
            const l = Tr(e.$doc$, s);
            for (const a of o)
              Et(l, a);
            mn(c, l, c.firstChild);
          }
        else
          St(n, e, t, false);
      } else
        St(n, e, t, false);
    }
  }
  for (const [n, s] of e.$addSlots$) {
    const o = Un(n), r = ot(s, Vn).find((i) => i.getAttribute(re) === o);
    r && (ot(r, en).forEach((i) => {
      Et(n, i);
    }), r.remove());
  }
};
var so = () => {
};
var wl = (e, t) => {
  const n = e.createComment("qv "), s = e.createComment("/qv");
  return new Cr(n, s, t);
};
var kl = (e) => {
  if (!e)
    return {};
  const t = e.split(" ");
  return Object.fromEntries(t.map((n) => {
    const s = n.indexOf("=");
    return s >= 0 ? [n.slice(0, s), Il(n.slice(s + 1))] : [n, ""];
  }));
};
var _l = (e) => {
  const t = [];
  return Object.entries(e).forEach(([n, s]) => {
    t.push(s ? `${n}=${Cl(s)}` : `${n}`);
  }), t.join(" ");
};
var El = (e, t, n) => e.ownerDocument.createTreeWalker(e, 128, { acceptNode(s) {
  const o = Ot(s);
  return o && ae(o, t) === n ? 1 : 2;
} });
var Tl = (e, t, n) => {
  const s = El(e, t, n), o = [];
  let r = null;
  for (; r = s.nextNode(); )
    o.push(Ot(r));
  return o;
};
var Cl = (e) => e.replace(/ /g, "+");
var Il = (e) => e.replace(/\+/g, " ");
var $t = ":virtual";
var Cr = class {
  constructor(t, n, s) {
    this.open = t, this.close = n, this.isSvg = s, this._qc_ = null, this.nodeType = 111, this.localName = $t, this.nodeName = $t;
    const o = this.ownerDocument = t.ownerDocument;
    this.$template$ = Cs(o, "template", false), this.$attributes$ = kl(t.data.slice(3)), t.data.startsWith("qv "), t.__virtual = this, n.__virtual = this;
  }
  insertBefore(t, n) {
    const s = this.parentElement;
    return s ? s.insertBefore(t, n || this.close) : this.$template$.insertBefore(t, n), t;
  }
  remove() {
    const t = this.parentElement;
    if (t) {
      const n = this.childNodes;
      this.$template$.childElementCount, t.removeChild(this.open);
      for (let s = 0; s < n.length; s++)
        this.$template$.appendChild(n[s]);
      t.removeChild(this.close);
    }
  }
  appendChild(t) {
    return this.insertBefore(t, null);
  }
  insertBeforeTo(t, n) {
    const s = this.childNodes;
    t.insertBefore(this.open, n);
    for (const o of s)
      t.insertBefore(o, n);
    t.insertBefore(this.close, n), this.$template$.childElementCount;
  }
  appendTo(t) {
    this.insertBeforeTo(t, null);
  }
  get namespaceURI() {
    var t;
    return ((t = this.parentElement) == null ? void 0 : t.namespaceURI) ?? "";
  }
  removeChild(t) {
    this.parentElement ? this.parentElement.removeChild(t) : this.$template$.removeChild(t);
  }
  getAttribute(t) {
    return this.$attributes$[t] ?? null;
  }
  hasAttribute(t) {
    return t in this.$attributes$;
  }
  setAttribute(t, n) {
    this.$attributes$[t] = n, this.open.data = oo(this.$attributes$);
  }
  removeAttribute(t) {
    delete this.$attributes$[t], this.open.data = oo(this.$attributes$);
  }
  matches(t) {
    return false;
  }
  compareDocumentPosition(t) {
    return this.open.compareDocumentPosition(t);
  }
  closest(t) {
    const n = this.parentElement;
    return n ? n.closest(t) : null;
  }
  querySelectorAll(t) {
    const n = [];
    return ot(this, Ai).forEach((s) => {
      Oe(s) && (s.matches(t) && n.push(s), n.concat(Array.from(s.querySelectorAll(t))));
    }), n;
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (Pe(n)) {
        if (n.matches(t))
          return n;
        const s = n.querySelector(t);
        if (s !== null)
          return s;
      }
    return null;
  }
  get innerHTML() {
    return "";
  }
  set innerHTML(t) {
    const n = this.parentElement;
    n ? (this.childNodes.forEach((s) => this.removeChild(s)), this.$template$.innerHTML = t, n.insertBefore(this.$template$.content, this.close)) : this.$template$.innerHTML = t;
  }
  get firstChild() {
    if (this.parentElement) {
      const t = this.open.nextSibling;
      return t === this.close ? null : t;
    }
    return this.$template$.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement)
      return Array.from(this.$template$.childNodes);
    const t = [];
    let n = this.open;
    for (; (n = n.nextSibling) && n !== this.close; )
      t.push(n);
    return t;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
};
var oo = (e) => `qv ${_l(e)}`;
var Rs = (e) => {
  if (e == null)
    return null;
  if (Ct(e)) {
    const t = Ot(e);
    if (t)
      return t;
  }
  return e;
};
var Rl = (e) => {
  let t = e, n = 1;
  for (; t = t.nextSibling; )
    if (Ct(t)) {
      const s = t.__virtual;
      if (s)
        t = s;
      else if (t.data.startsWith("qv "))
        n++;
      else if (t.data === "/qv" && (n--, n === 0))
        return t;
    }
};
var Ot = (e) => {
  var n;
  const t = e.__virtual;
  if (t)
    return t;
  if (e.data.startsWith("qv ")) {
    const s = Rl(e);
    return new Cr(e, s, ((n = e.parentElement) == null ? void 0 : n.namespaceURI) === Pt);
  }
  return null;
};
var tn = (e) => e == null ? null : pe(e) ? e.open : e;
var dp = async (e) => {
  const t = ks(null, null), n = Ir(t);
  let s;
  for (q(e, n, false); (s = n.$promises$).length > 0; )
    n.$promises$ = [], await Promise.all(s);
  const o = Array.from(n.$objSet$.keys());
  let r = 0;
  const i = /* @__PURE__ */ new Map();
  for (const a of o)
    i.set(a, Ae(r)), r++;
  if (n.$noSerialize$.length > 0) {
    const a = i.get(void 0);
    for (const u of n.$noSerialize$)
      i.set(u, a);
  }
  const c = (a) => {
    let u = "";
    if (W(a)) {
      const f = Rr(a);
      if (!f)
        throw V(27, a);
      a = f.value, u += f.resolved ? "~" : "_";
    }
    if (ke(a)) {
      const f = Ge(a);
      f && (u += "!", a = f);
    }
    const $2 = i.get(a);
    if ($2 === void 0)
      throw V(27, a);
    return $2 + u;
  }, l = Mr(o, c, null, n, t);
  return JSON.stringify({ _entry: c(e), _objs: l });
};
var Al = async (e, t) => {
  const n = Rt(e), s = n.documentElement, o = Eo(e) ? s : e;
  if (ae(o, "q:container") === "paused")
    throw V(21);
  const r = t ?? (o === n.documentElement ? n.body : o), i = mt(o), c = ql(o, Bl);
  ne(o, "q:container", "paused");
  for (const f of c) {
    const m = f.$element$, g2 = f.li;
    if (f.$scopeIds$) {
      const b = zo(f.$scopeIds$);
      b && m.setAttribute("q:sstyle", b);
    }
    if (f.$id$ && m.setAttribute("q:id", f.$id$), Pe(m) && g2.length > 0) {
      const b = is(g2);
      for (const d of b)
        m.setAttribute(d[0], qs(d[1], i, f));
    }
  }
  const l = await Ml(c, i, (f) => Ne(f) && Zn(f) ? Ul(f, i) : null), a = n.createElement("script");
  ne(a, "type", "qwik/json"), a.textContent = Ll(JSON.stringify(l.state, void 0, void 0)), r.appendChild(a);
  const u = Array.from(i.$events$, (f) => JSON.stringify(f)), $2 = n.createElement("script");
  return $2.textContent = `window.qwikevents||=[];window.qwikevents.push(${u.join(", ")})`, r.appendChild($2), l;
};
var Ml = async (e, t, n, s) => {
  var y;
  const o = Ir(t);
  s == null || s.forEach((h, k2) => {
    o.$seen$.add(k2);
  });
  let r = false;
  for (const h of e)
    if (h.$tasks$)
      for (const k2 of h.$tasks$)
        nr(k2) && o.$resources$.push(k2.$state$), rr(k2);
  for (const h of e) {
    const k2 = h.$element$, E2 = h.li;
    for (const I2 of E2)
      if (Pe(k2)) {
        const w = I2[1], A2 = w.$captureRef$;
        if (A2)
          for (const O2 of A2)
            q(O2, o, true);
        o.$qrls$.push(w), r = true;
      }
  }
  if (!r)
    return { state: { refs: {}, ctx: {}, objs: [], subs: [] }, objs: [], funcs: [], qrls: [], resources: o.$resources$, mode: "static" };
  let i;
  for (; (i = o.$promises$).length > 0; )
    o.$promises$ = [], await Promise.all(i);
  const c = o.$elements$.length > 0;
  if (c) {
    for (const h of o.$deferElements$)
      As(h, o, h.$element$);
    for (const h of e)
      Nl(h, o);
  }
  for (; (i = o.$promises$).length > 0; )
    o.$promises$ = [], await Promise.all(i);
  const l = /* @__PURE__ */ new Map(), a = Array.from(o.$objSet$.keys()), u = /* @__PURE__ */ new Map(), $2 = (h) => {
    let k2 = "";
    if (W(h)) {
      const w = Rr(h);
      if (!w)
        return null;
      h = w.value, k2 += w.resolved ? "~" : "_";
    }
    if (ke(h)) {
      const w = Ge(h);
      if (w)
        k2 += "!", h = w;
      else if (Oe(h)) {
        const A2 = ((O2) => {
          let L2 = l.get(O2);
          return L2 === void 0 && (L2 = Vl(O2), L2 || console.warn("Missing ID", O2), l.set(O2, L2)), L2;
        })(h);
        return A2 ? "#" + A2 + k2 : null;
      }
    }
    const E2 = u.get(h);
    if (E2)
      return E2 + k2;
    const I2 = s == null ? void 0 : s.get(h);
    return I2 ? "*" + I2 : n ? n(h) : null;
  }, f = (h) => {
    const k2 = $2(h);
    if (k2 === null) {
      if (Ps(h)) {
        const E2 = Ae(u.size);
        return u.set(h, E2), E2;
      }
      throw V(27, h);
    }
    return k2;
  }, m = /* @__PURE__ */ new Map();
  for (const h of a) {
    const k2 = (y = Dl(h, t)) == null ? void 0 : y.$subs$;
    if (!k2)
      continue;
    const E2 = Fr(h) ?? 0, I2 = [];
    1 & E2 && I2.push(E2);
    for (const w of k2) {
      const A2 = w[1];
      w[0] === 0 && Ne(A2) && pe(A2) && !o.$elements$.includes(ie(A2)) || I2.push(w);
    }
    I2.length > 0 && m.set(h, I2);
  }
  a.sort((h, k2) => (m.has(h) ? 0 : 1) - (m.has(k2) ? 0 : 1));
  let g2 = 0;
  for (const h of a)
    u.set(h, Ae(g2)), g2++;
  if (o.$noSerialize$.length > 0) {
    const h = u.get(void 0);
    for (const k2 of o.$noSerialize$)
      u.set(k2, h);
  }
  const b = [];
  for (const h of a) {
    const k2 = m.get(h);
    if (k2 == null)
      break;
    b.push(k2.map((E2) => typeof E2 == "number" ? `_${E2}` : ka(E2, $2)).filter(Co));
  }
  b.length, m.size;
  const d = Mr(a, f, $2, o, t), p = {}, v3 = {};
  for (const h of e) {
    const k2 = h.$element$, E2 = h.$id$, I2 = h.$refMap$, w = h.$props$, A2 = h.$contexts$, O2 = h.$tasks$, L2 = h.$componentQrl$, z2 = h.$seq$, ye2 = {}, Xe3 = pe(k2) && o.$elements$.includes(h);
    if (I2.length > 0) {
      const Z2 = Ue(I2, f, " ");
      Z2 && (v3[E2] = Z2);
    } else if (c) {
      let Z2 = false;
      if (Xe3) {
        const U = $2(w);
        ye2.h = f(L2) + (U ? " " + U : ""), Z2 = true;
      } else {
        const U = $2(w);
        U && (ye2.h = " " + U, Z2 = true);
      }
      if (O2 && O2.length > 0) {
        const U = Ue(O2, $2, " ");
        U && (ye2.w = U, Z2 = true);
      }
      if (Xe3 && z2 && z2.length > 0) {
        const U = Ue(z2, f, " ");
        ye2.s = U, Z2 = true;
      }
      if (A2) {
        const U = [];
        A2.forEach((Ii, Ri) => {
          const Qs = $2(Ii);
          Qs && U.push(`${Ri}=${Qs}`);
        });
        const gt2 = U.join(" ");
        gt2 && (ye2.c = gt2, Z2 = true);
      }
      Z2 && (p[E2] = ye2);
    }
  }
  return { state: { refs: v3, ctx: p, objs: d, subs: b }, objs: a, funcs: o.$inlinedFunctions$, resources: o.$resources$, qrls: o.$qrls$, mode: c ? "render" : "listeners" };
};
var Ue = (e, t, n) => {
  let s = "";
  for (const o of e) {
    const r = t(o);
    r !== null && (s !== "" && (s += n), s += r);
  }
  return s;
};
var ql = (e, t) => {
  const n = [], s = t(e);
  s !== void 0 && n.push(s);
  const o = e.ownerDocument.createTreeWalker(e, 1 | mr, { acceptNode(r) {
    if (Fl(r))
      return 2;
    const i = t(r);
    return i !== void 0 && n.push(i), 3;
  } });
  for (; o.nextNode(); )
    ;
  return n;
};
var Nl = (e, t) => {
  var o;
  const n = e.$realParentCtx$ || e.$parentCtx$, s = e.$props$;
  if (n && s && !Ar(s) && t.$elements$.includes(n)) {
    const r = (o = G(s)) == null ? void 0 : o.$subs$, i = e.$element$;
    if (r)
      for (const [c, l] of r)
        c === 0 ? (l !== i && dt(G(s), t, false), Ne(l) ? Ol(l, t) : q(l, t, true)) : (q(s, t, false), dt(G(s), t, false));
  }
};
var Ir = (e) => {
  const t = [];
  return e.$inlineFns$.forEach((n, s) => {
    for (; t.length <= n; )
      t.push("");
    t[n] = s;
  }), { $containerState$: e, $seen$: /* @__PURE__ */ new Set(), $objSet$: /* @__PURE__ */ new Set(), $prefetch$: 0, $noSerialize$: [], $inlinedFunctions$: t, $resources$: [], $elements$: [], $qrls$: [], $deferElements$: [], $promises$: [] };
};
var Pl = (e, t) => {
  const n = ie(e);
  t.$elements$.includes(n) || (t.$elements$.push(n), n.$flags$ & vs ? (t.$prefetch$++, As(n, t, true), t.$prefetch$--) : t.$deferElements$.push(n));
};
var Ol = (e, t) => {
  const n = ie(e);
  if (n) {
    if (t.$elements$.includes(n))
      return;
    t.$elements$.push(n), As(n, t, e);
  }
};
var As = (e, t, n) => {
  if (e.$props$ && !Ar(e.$props$) && (q(e.$props$, t, n), dt(G(e.$props$), t, n)), e.$componentQrl$ && q(e.$componentQrl$, t, n), e.$seq$)
    for (const s of e.$seq$)
      q(s, t, n);
  if (e.$tasks$) {
    const s = t.$containerState$.$subsManager$.$groupToManagers$;
    for (const o of e.$tasks$)
      s.has(o) && q(o, t, n);
  }
  if (n === true && (ro(e, t), e.$dynamicSlots$))
    for (const s of e.$dynamicSlots$)
      ro(s, t);
};
var ro = (e, t) => {
  for (; e; ) {
    if (e.$contexts$)
      for (const n of e.$contexts$.values())
        q(n, t, true);
    e = e.$parentCtx$;
  }
};
var Ll = (e) => e.replace(/<(\/?script)/gi, "\\x3C$1");
var dt = (e, t, n) => {
  if (t.$seen$.has(e))
    return;
  t.$seen$.add(e);
  const s = e.$subs$;
  for (const o of s)
    if (o[0] > 0 && q(o[2], t, n), n === true) {
      const r = o[1];
      Ne(r) && pe(r) ? o[0] === 0 && Pl(r, t) : q(r, t, true);
    }
};
var Wn = Symbol();
var zl = (e) => e.then((t) => (e[Wn] = { resolved: true, value: t }, t), (t) => (e[Wn] = { resolved: false, value: t }, t));
var Rr = (e) => e[Wn];
var q = (e, t, n) => {
  if (e != null) {
    const s = typeof e;
    switch (s) {
      case "function":
      case "object": {
        if (t.$seen$.has(e))
          return;
        if (t.$seen$.add(e), Lr(e))
          return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
        const o = e, r = Ge(e);
        if (r) {
          const i = (2 & Fr(e = r)) == 0;
          if (n && i && dt(G(o), t, n), zr(o))
            return void t.$objSet$.add(e);
        }
        if (ga(e, t, n))
          return void t.$objSet$.add(e);
        if (W(e))
          return void t.$promises$.push(zl(e).then((i) => {
            q(i, t, n);
          }));
        if (s === "object") {
          if (Ne(e))
            return;
          if (F(e))
            for (let i = 0; i < e.length; i++)
              q(o[i], t, n);
          else if (It(e))
            for (const i in e)
              q(o[i], t, n);
        }
        break;
      }
    }
  }
  t.$objSet$.add(e);
};
var Fl = (e) => Pe(e) && e.hasAttribute("q:container");
var Bl = (e) => {
  const t = Rs(e);
  if (Oe(t)) {
    const n = ie(t);
    if (n && n.$id$)
      return n;
  }
};
var Dl = (e, t) => {
  if (!ke(e))
    return;
  if (e instanceof _t)
    return G(e);
  const n = t.$proxyMap$.get(e);
  return n ? G(n) : void 0;
};
var Vl = (e) => {
  const t = ie(e);
  return t ? t.$id$ : null;
};
var Ul = (e, t) => {
  const n = e.previousSibling;
  if (n && Ct(n) && n.data.startsWith("t="))
    return "#" + n.data.slice(2);
  const s = e.ownerDocument, o = Ae(t.$elementIndex$++), r = s.createComment(`t=${o}`), i = s.createComment(""), c = e.parentElement;
  return c.insertBefore(r, e), c.insertBefore(i, e.nextSibling), "#" + o;
};
var Ar = (e) => Object.keys(e).length === 0;
function Mr(e, t, n, s, o) {
  return e.map((r) => {
    if (r === null)
      return null;
    const i = typeof r;
    switch (i) {
      case "undefined":
        return gn;
      case "number":
        if (!Number.isFinite(r))
          break;
        return r;
      case "string":
        if (r.charCodeAt(0) < 32)
          break;
        return r;
      case "boolean":
        return r;
    }
    const c = ya(r, t, s, o);
    if (c !== void 0)
      return c;
    if (i === "object") {
      if (F(r))
        return r.map(t);
      if (It(r)) {
        const l = {};
        for (const a in r)
          if (n) {
            const u = n(r[a]);
            u !== null && (l[a] = u);
          } else
            l[a] = t(r[a]);
        return l;
      }
    }
    throw V(3, r);
  });
}
var x = (e, t, n = de) => Sn(null, t, e, null, null, n, null);
var ft = (e, t = de) => Sn(null, e, null, null, null, t, null);
var Ms = (e, t = {}) => {
  let n = e.$symbol$, s = e.$chunk$;
  const o = e.$refSymbol$ ?? n, r = rn();
  if (r) {
    const a = r.chunkForSymbol(o, s);
    a && (s = a[1], e.$refSymbol$ || (n = a[0]));
  }
  if (s == null)
    throw V(31, e.$symbol$);
  if (s.startsWith("./") && (s = s.slice(2)), Ia(e))
    if (t.$containerState$) {
      const a = t.$containerState$, u = e.resolved.toString();
      let $2 = a.$inlineFns$.get(u);
      $2 === void 0 && ($2 = a.$inlineFns$.size, a.$inlineFns$.set(u, $2)), n = String($2);
    } else
      To("Sync QRL without containerState");
  let i = `${s}#${n}`;
  const c = e.$capture$, l = e.$captureRef$;
  return l && l.length ? t.$getObjId$ ? i += `[${Ue(l, t.$getObjId$, " ")}]` : t.$addRefMap$ && (i += `[${Ue(l, t.$addRefMap$, " ")}]`) : c && c.length > 0 && (i += `[${c.join(" ")}]`), i;
};
var qs = (e, t, n) => {
  n.$element$;
  const s = { $containerState$: t, $addRefMap$: (o) => Wl(n.$refMap$, o) };
  return Ue(e, (o) => Ms(o, s), `
`);
};
var hn = (e, t) => {
  const n = e.length, s = io(e, 0, "#"), o = io(e, s, "["), r = Math.min(s, o), i = e.substring(0, r), c = s == n ? s : s + 1, l = c == o ? "default" : e.substring(c, o), a = o === n ? de : e.substring(o + 1, n - 1).split(" "), u = Sn(i, l, null, null, a, null, null);
  return t && u.$setContainer$(t), u;
};
var io = (e, t, n) => {
  const s = e.length, o = e.indexOf(n, t == s ? 0 : t);
  return o == -1 ? s : o;
};
var Wl = (e, t) => {
  const n = e.indexOf(t);
  return n === -1 ? (e.push(t), String(e.length - 1)) : String(n);
};
var qr = (e, t) => (e.$capture$, e.$captureRef$ = e.$capture$.map((n) => {
  const s = parseInt(n, 10), o = t.$refMap$[s];
  return t.$refMap$.length > s, o;
}));
var Ql = (e) => ({ __brand: "resource", value: void 0, loading: !se(), _resolved: void 0, _error: void 0, _state: "pending", _timeout: (e == null ? void 0 : e.timeout) ?? -1, _cache: 0 });
var Hl = (e) => ke(e) && e.__brand === "resource";
var jl = (e, t) => {
  const n = e._state;
  return n === "resolved" ? `0 ${t(e._resolved)}` : n === "pending" ? "1" : `2 ${t(e._error)}`;
};
var Kl = (e) => {
  const [t, n] = e.split(" "), s = Ql(void 0);
  return s.value = Promise.resolve(), t === "0" ? (s._state = "resolved", s._resolved = n, s.loading = false) : t === "1" ? (s._state = "pending", s.value = new Promise(() => {
  }), s.loading = true) : t === "2" && (s._state = "rejected", s._error = n, s.loading = false), s;
};
var we = (e) => T(Te, { "q:s": "" }, 0, e.name ?? "");
var gn = "";
function B(e) {
  return { $prefixCode$: e.$prefix$.charCodeAt(0), $prefixChar$: e.$prefix$, $test$: e.$test$, $serialize$: e.$serialize$, $prepare$: e.$prepare$, $fill$: e.$fill$, $collect$: e.$collect$, $subs$: e.$subs$ };
}
var Yl = B({ $prefix$: "", $test$: (e) => Ps(e), $collect$: (e, t, n) => {
  if (e.$captureRef$)
    for (const s of e.$captureRef$)
      q(s, t, n);
  t.$prefetch$ === 0 && t.$qrls$.push(e);
}, $serialize$: (e, t) => Ms(e, { $getObjId$: t }), $prepare$: (e, t) => hn(e, t.$containerEl$), $fill$: (e, t) => {
  e.$capture$ && e.$capture$.length > 0 && (e.$captureRef$ = e.$capture$.map(t), e.$capture$ = null);
} });
var Gl = B({ $prefix$: "", $test$: (e) => bs(e), $collect$: (e, t, n) => {
  q(e.$qrl$, t, n), e.$state$ && (q(e.$state$, t, n), n === true && e.$state$ instanceof _t && dt(e.$state$[fe], t, true));
}, $serialize$: (e, t) => Fc(e, t), $prepare$: (e) => Bc(e), $fill$: (e, t) => {
  e.$el$ = t(e.$el$), e.$qrl$ = t(e.$qrl$), e.$state$ && (e.$state$ = t(e.$state$));
} });
var Jl = B({ $prefix$: "", $test$: (e) => Hl(e), $collect$: (e, t, n) => {
  q(e.value, t, n), q(e._resolved, t, n);
}, $serialize$: (e, t) => jl(e, t), $prepare$: (e) => Kl(e), $fill$: (e, t) => {
  if (e._state === "resolved")
    e._resolved = t(e._resolved), e.value = Promise.resolve(e._resolved);
  else if (e._state === "rejected") {
    const n = Promise.reject(e._error);
    n.catch(() => null), e._error = t(e._error), e.value = n;
  }
} });
var Xl = B({ $prefix$: "", $test$: (e) => e instanceof URL, $serialize$: (e) => e.href, $prepare$: (e) => new URL(e) });
var Zl = B({ $prefix$: "", $test$: (e) => e instanceof Date, $serialize$: (e) => e.toISOString(), $prepare$: (e) => new Date(e) });
var ea = B({ $prefix$: "\x07", $test$: (e) => e instanceof RegExp, $serialize$: (e) => `${e.flags} ${e.source}`, $prepare$: (e) => {
  const t = e.indexOf(" "), n = e.slice(t + 1), s = e.slice(0, t);
  return new RegExp(n, s);
} });
var ta = B({ $prefix$: "", $test$: (e) => e instanceof Error, $serialize$: (e) => e.message, $prepare$: (e) => {
  const t = new Error(e);
  return t.stack = void 0, t;
} });
var na = B({ $prefix$: "", $test$: (e) => !!e && typeof e == "object" && Eo(e), $prepare$: (e, t, n) => n });
var nn = Symbol("serializable-data");
var sa = B({ $prefix$: "", $test$: (e) => Vr(e), $serialize$: (e, t) => {
  const [n] = e[nn];
  return Ms(n, { $getObjId$: t });
}, $prepare$: (e, t) => {
  const n = hn(e, t.$containerEl$);
  return P(n);
}, $fill$: (e, t) => {
  var s;
  const [n] = e[nn];
  (s = n.$capture$) != null && s.length && (n.$captureRef$ = n.$capture$.map(t), n.$capture$ = null);
} });
var oa = B({ $prefix$: "", $test$: (e) => e instanceof Bn, $collect$: (e, t, n) => {
  if (e.$args$)
    for (const s of e.$args$)
      q(s, t, n);
}, $serialize$: (e, t, n) => {
  const s = mc(e);
  let o = n.$inlinedFunctions$.indexOf(s);
  return o < 0 && (o = n.$inlinedFunctions$.length, n.$inlinedFunctions$.push(s)), Ue(e.$args$, t, " ") + " @" + Ae(o);
}, $prepare$: (e) => {
  const t = e.split(" "), n = t.slice(0, -1), s = t[t.length - 1];
  return new Bn(s, n, s);
}, $fill$: (e, t) => {
  e.$func$, e.$func$ = t(e.$func$), e.$args$ = e.$args$.map(t);
} });
var ra = B({ $prefix$: "", $test$: (e) => e instanceof _t, $collect$: (e, t, n) => (q(e.untrackedValue, t, n), n === true && !(e[kt] & dr) && dt(e[fe], t, true), e), $serialize$: (e, t) => t(e.untrackedValue), $prepare$: (e, t) => {
  var n;
  return new _t(e, (n = t == null ? void 0 : t.$subsManager$) == null ? void 0 : n.$createManager$(), 0);
}, $subs$: (e, t) => {
  e[fe].$addSubs$(t);
}, $fill$: (e, t) => {
  e.untrackedValue = t(e.untrackedValue);
} });
var ia = B({ $prefix$: "", $test$: (e) => e instanceof Dn, $collect$(e, t, n) {
  if (q(e.ref, t, n), zr(e.ref)) {
    const s = G(e.ref);
    Sa(t.$containerState$.$subsManager$, s, n) && q(e.ref[e.prop], t, n);
  }
  return e;
}, $serialize$: (e, t) => `${t(e.ref)} ${e.prop}`, $prepare$: (e) => {
  const [t, n] = e.split(" ");
  return new Dn(t, n);
}, $fill$: (e, t) => {
  e.ref = t(e.ref);
} });
var ca = B({ $prefix$: "", $test$: (e) => typeof e == "number", $serialize$: (e) => String(e), $prepare$: (e) => Number(e) });
var la = B({ $prefix$: "", $test$: (e) => e instanceof URLSearchParams, $serialize$: (e) => e.toString(), $prepare$: (e) => new URLSearchParams(e) });
var aa = B({ $prefix$: "", $test$: (e) => typeof FormData < "u" && e instanceof globalThis.FormData, $serialize$: (e) => {
  const t = [];
  return e.forEach((n, s) => {
    t.push(typeof n == "string" ? [s, n] : [s, n.name]);
  }), JSON.stringify(t);
}, $prepare$: (e) => {
  const t = JSON.parse(e), n = new FormData();
  for (const [s, o] of t)
    n.append(s, o);
  return n;
} });
var ua = B({ $prefix$: "", $test$: (e) => Ke(e), $collect$: (e, t, n) => {
  q(e.children, t, n), q(e.props, t, n), q(e.immutableProps, t, n), q(e.key, t, n);
  let s = e.type;
  s === we ? s = ":slot" : s === H && (s = ":fragment"), q(s, t, n);
}, $serialize$: (e, t) => {
  let n = e.type;
  return n === we ? n = ":slot" : n === H && (n = ":fragment"), `${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.key)} ${t(e.children)} ${e.flags}`;
}, $prepare$: (e) => {
  const [t, n, s, o, r, i] = e.split(" ");
  return new pt(t, n, s, r, parseInt(i, 10), o);
}, $fill$: (e, t) => {
  e.type = va(t(e.type)), e.props = t(e.props), e.immutableProps = t(e.immutableProps), e.key = t(e.key), e.children = t(e.children);
} });
var $a = B({ $prefix$: "", $test$: (e) => typeof e == "bigint", $serialize$: (e) => e.toString(), $prepare$: (e) => BigInt(e) });
var ct = Symbol();
var da = B({ $prefix$: "", $test$: (e) => e instanceof Set, $collect$: (e, t, n) => {
  e.forEach((s) => q(s, t, n));
}, $serialize$: (e, t) => Array.from(e).map(t).join(" "), $prepare$: (e) => {
  const t = /* @__PURE__ */ new Set();
  return t[ct] = e, t;
}, $fill$: (e, t) => {
  const n = e[ct];
  e[ct] = void 0;
  const s = n.length === 0 ? [] : n.split(" ");
  for (const o of s)
    e.add(t(o));
} });
var fa = B({ $prefix$: "", $test$: (e) => e instanceof Map, $collect$: (e, t, n) => {
  e.forEach((s, o) => {
    q(s, t, n), q(o, t, n);
  });
}, $serialize$: (e, t) => {
  const n = [];
  return e.forEach((s, o) => {
    n.push(t(o) + " " + t(s));
  }), n.join(" ");
}, $prepare$: (e) => {
  const t = /* @__PURE__ */ new Map();
  return t[ct] = e, t;
}, $fill$: (e, t) => {
  const n = e[ct];
  e[ct] = void 0;
  const s = n.length === 0 ? [] : n.split(" ");
  s.length % 2;
  for (let o = 0; o < s.length; o += 2)
    e.set(t(s[o]), t(s[o + 1]));
} });
var pa = B({ $prefix$: "\x1B", $test$: (e) => !!Nr(e) || e === gn, $serialize$: (e) => e, $prepare$: (e) => e });
var yn = [Yl, Gl, Jl, Xl, Zl, ea, ta, na, sa, oa, ra, ia, ca, la, aa, ua, $a, da, fa, pa];
var co = (() => {
  const e = [];
  return yn.forEach((t) => {
    const n = t.$prefixCode$;
    for (; e.length < n; )
      e.push(void 0);
    e.push(t);
  }), e;
})();
function Nr(e) {
  if (typeof e == "string") {
    const t = e.charCodeAt(0);
    if (t < co.length)
      return co[t];
  }
}
var ma = yn.filter((e) => e.$collect$);
var ha = (e) => {
  for (const t of yn)
    if (t.$test$(e))
      return true;
  return false;
};
var ga = (e, t, n) => {
  for (const s of ma)
    if (s.$test$(e))
      return s.$collect$(e, t, n), true;
  return false;
};
var ya = (e, t, n, s) => {
  for (const o of yn)
    if (o.$test$(e)) {
      let r = o.$prefixChar$;
      return o.$serialize$ && (r += o.$serialize$(e, t, n, s)), r;
    }
  if (typeof e == "string")
    return e;
};
var Pr = (e, t) => {
  const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return { prepare(o) {
    const r = Nr(o);
    if (r) {
      const i = r.$prepare$(o.slice(1), e, t);
      return r.$fill$ && n.set(i, r), r.$subs$ && s.set(i, r), i;
    }
    return o;
  }, subs(o, r) {
    const i = s.get(o);
    return !!i && (i.$subs$(o, r, e), true);
  }, fill(o, r) {
    const i = n.get(o);
    return !!i && (i.$fill$(o, r, e), true);
  } };
};
var ba = { "!": (e, t) => t.$proxyMap$.get(e) ?? ls(e, t), "~": (e) => Promise.resolve(e), _: (e) => Promise.reject(e) };
var Sa = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  const s = e.$groupToManagers$.get(n);
  return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== t);
};
var va = (e) => e === ":slot" ? we : e === ":fragment" ? H : e;
var fp = (e, t) => Qn(e, /* @__PURE__ */ new Set(), "_", t);
var Qn = (e, t, n, s) => {
  const o = Lt(e);
  if (o == null)
    return e;
  if (xa(o)) {
    if (t.has(o) || (t.add(o), ha(o)))
      return e;
    const r = typeof o;
    switch (r) {
      case "object":
        if (W(o) || Ne(o))
          return e;
        if (F(o)) {
          let c = 0;
          return o.forEach((l, a) => {
            if (a !== c)
              throw V(3, o);
            Qn(l, t, n + "[" + a + "]"), c = a + 1;
          }), e;
        }
        if (It(o)) {
          for (const [c, l] of Object.entries(o))
            Qn(l, t, n + "." + c);
          return e;
        }
        break;
      case "boolean":
      case "string":
      case "number":
        return e;
    }
    let i = "";
    if (i = s || "Value cannot be serialized", n !== "_" && (i += ` in ${n},`), r === "object")
      i += ` because it's an instance of "${e == null ? void 0 : e.constructor.name}". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.builder.io/docs/advanced/dollar/`;
    else if (r === "function") {
      const c = e.name;
      i += ` because it's a function named "${c}". You might need to convert it to a QRL using $(fn):

const ${c} = $(${String(e)});

Please check out https://qwik.builder.io/docs/advanced/qrl/ for more information.`;
    }
    console.error("Trying to serialize", e), To(i);
  }
  return e;
};
var Ns = /* @__PURE__ */ new WeakSet();
var Or = /* @__PURE__ */ new WeakSet();
var xa = (e) => !ke(e) && !oe(e) || !Ns.has(e);
var Lr = (e) => Ns.has(e);
var zr = (e) => Or.has(e);
var bn = (e) => (e != null && Ns.add(e), e);
var wa = (e) => (Or.add(e), e);
var Lt = (e) => ke(e) ? Ge(e) ?? e : e;
var Ge = (e) => e[Nn];
var G = (e) => e[fe];
var Fr = (e) => e[st];
var ka = (e, t) => {
  const n = e[0], s = typeof e[1] == "string" ? e[1] : t(e[1]);
  if (!s)
    return;
  let o = n + " " + s, r;
  if (n === 0)
    r = e[2];
  else {
    const i = t(e[2]);
    if (!i)
      return;
    n <= 2 ? (r = e[5], o += ` ${i} ${lo(t(e[3]))} ${e[4]}`) : n <= 4 && (r = e[4], o += ` ${i} ${typeof e[3] == "string" ? e[3] : lo(t(e[3]))}`);
  }
  return r && (o += ` ${encodeURI(r)}`), o;
};
var _a = (e, t) => {
  const n = e.split(" "), s = parseInt(n[0], 10);
  n.length >= 2;
  const o = t(n[1]);
  if (!o || bs(o) && !o.$el$)
    return;
  const r = [s, o];
  return s === 0 ? (n.length <= 3, r.push(Tn(n[2]))) : s <= 2 ? (n.length === 5 || n.length, r.push(t(n[2]), t(n[3]), n[4], Tn(n[5]))) : s <= 4 && (n.length === 4 || n.length, r.push(t(n[2]), t(n[3]), Tn(n[4]))), r;
};
var Tn = (e) => {
  if (e !== void 0)
    return decodeURI(e);
};
var Ea = (e) => {
  const t = /* @__PURE__ */ new Map();
  return { $groupToManagers$: t, $createManager$: (s) => new Ta(t, e, s), $clearSub$: (s) => {
    const o = t.get(s);
    if (o) {
      for (const r of o)
        r.$unsubGroup$(s);
      t.delete(s), o.length = 0;
    }
  }, $clearSignal$: (s) => {
    const o = t.get(s[1]);
    if (o)
      for (const r of o)
        r.$unsubEntry$(s);
  } };
};
var Ta = class {
  constructor(t, n, s) {
    this.$groupToManagers$ = t, this.$containerState$ = n, this.$subs$ = [], s && this.$addSubs$(s);
  }
  $addSubs$(t) {
    this.$subs$.push(...t);
    for (const n of this.$subs$)
      this.$addToGroup$(n[1], this);
  }
  $addToGroup$(t, n) {
    let s = this.$groupToManagers$.get(t);
    s || this.$groupToManagers$.set(t, s = []), s.includes(n) || s.push(n);
  }
  $unsubGroup$(t) {
    const n = this.$subs$;
    for (let s = 0; s < n.length; s++)
      n[s][1] === t && (n.splice(s, 1), s--);
  }
  $unsubEntry$(t) {
    const [n, s, o, r] = t, i = this.$subs$;
    if (n === 1 || n === 2) {
      const c = t[4];
      for (let l = 0; l < i.length; l++) {
        const a = i[l];
        a[0] === n && a[1] === s && a[2] === o && a[3] === r && a[4] === c && (i.splice(l, 1), l--);
      }
    } else if (n === 3 || n === 4)
      for (let c = 0; c < i.length; c++) {
        const l = i[c];
        l[0] === n && l[1] === s && l[2] === o && l[3] === r && (i.splice(c, 1), c--);
      }
  }
  $addSub$(t, n) {
    const s = this.$subs$, o = t[1];
    t[0] === 0 && s.some(([r, i, c]) => r === 0 && i === o && c === n) || (s.push(Br = [...t, n]), this.$addToGroup$(o, this));
  }
  $notifySubs$(t) {
    const n = this.$subs$;
    for (const s of n) {
      const o = s[s.length - 1];
      t && o && o !== t || Cc(s, this.$containerState$);
    }
  }
};
var Br;
function Ca() {
  return Br;
}
var lo = (e) => {
  if (e == null)
    throw Qe("must be non null", e);
  return e;
};
var Ps = (e) => typeof e == "function" && typeof e.getSymbol == "function";
var Ia = (e) => Ps(e) && e.$symbol$ == "<sync>";
var Sn = (e, t, n, s, o, r, i) => {
  let c;
  const l = async function(...d) {
    return await f.call(this, ve())(...d);
  }, a = (d) => (c || (c = d), c), u = async (d) => {
    if (d && a(d), e == "" && (n = (c.qFuncs || [])[Number(t)]), n !== null)
      return n;
    if (s !== null)
      return n = s().then((p) => l.resolved = n = p[t]);
    {
      const p = rn().importSymbol(c, e, t);
      return n = N(p, (v3) => l.resolved = n = v3);
    }
  }, $2 = (d) => n !== null ? n : u(d);
  function f(d, p) {
    return (...v3) => {
      const y = Ma(), h = $2();
      return N(h, (k2) => {
        if (oe(k2)) {
          if (p && p() === false)
            return;
          const E2 = { ...m(d), $qrl$: l };
          return E2.$event$ === void 0 && (E2.$event$ = this), Ra(t, E2.$element$, y), X.call(this, E2, k2, ...v3);
        }
        throw V(10);
      });
    };
  }
  const m = (d) => d == null ? le() : F(d) ? lr(d) : d, g2 = i ?? t, b = Dr(g2);
  return Object.assign(l, { getSymbol: () => g2, getHash: () => b, getCaptured: () => r, resolve: u, $resolveLazy$: $2, $setContainer$: a, $chunk$: e, $symbol$: t, $refSymbol$: i, $hash$: b, getFn: f, $capture$: o, $captureRef$: r, dev: null, resolved: t == "<sync>" ? n : void 0 }), l;
};
var Dr = (e) => {
  const t = e.lastIndexOf("_");
  return t > -1 ? e.slice(t + 1) : e;
};
var ao = /* @__PURE__ */ new Set();
var Ra = (e, t, n) => {
  ao.has(e) || (ao.add(e), Aa("qsymbol", { symbol: e, element: t, reqTime: n }));
};
var Aa = (e, t) => {
  se() || typeof document != "object" || document.dispatchEvent(new CustomEvent(e, { bubbles: false, detail: t }));
};
var Ma = () => se() ? 0 : typeof performance == "object" ? performance.now() : 0;
var P = (e) => {
  function t(n, s, o) {
    const r = e.$hash$.slice(0, 4);
    return T(Te, { "q:renderFn": e, [re]: n[re], [C]: n[C], children: n.children, props: n }, o, r + ":" + (s || ""));
  }
  return t[nn] = [e], t;
};
var Vr = (e) => typeof e == "function" && e[nn] !== void 0;
var K = (e, t) => {
  const { val: n, set: s, iCtx: o } = Le();
  if (n != null)
    return n;
  const r = oe(e) ? X(void 0, e) : e;
  if ((t == null ? void 0 : t.reactive) === false)
    return s(r), r;
  {
    const i = ls(r, o.$renderCtx$.$static$.$containerState$, (t == null ? void 0 : t.deep) ?? true ? 1 : 0);
    return s(i), i;
  }
};
function Os(e, t) {
  var s;
  const n = ve();
  return ((s = n == null ? void 0 : n.$renderCtx$) == null ? void 0 : s.$static$.$containerState$.$serverData$[e]) ?? t;
}
var uo = /* @__PURE__ */ new Map();
var qa = (e, t) => {
  let n = uo.get(t);
  return n || uo.set(t, n = Na(e, t)), n;
};
var Na = (e, t) => {
  const n = e.length, s = [], o = [];
  let r = 0, i = r, c = lt, l = 0;
  for (; r < n; ) {
    const m = r;
    let g2 = e.charCodeAt(r++);
    g2 === Ua && (r++, g2 = Kr);
    const b = Ka[c];
    for (let d = 0; d < b.length; d++) {
      const p = b[d], [v3, y, h] = p;
      if ((v3 === l || v3 === R || v3 === sn && Ut(l) || v3 === Hn && fo(l)) && (y === g2 || y === R || y === sn && Ut(g2) || y === be && !Ut(g2) && g2 !== zs || y === Hn && fo(g2)) && (p.length == 3 || $2(p))) {
        if (p.length > 3 && (g2 = e.charCodeAt(r - 1)), h === Q || h == Fe) {
          h === Fe && (c !== Ur || f() ? $o(g2) || u(r - (y == be ? 1 : y == jn ? 2 : 0)) : ($o(g2) ? a(r - 2) : u(r - 2), i++)), y === be && (r--, g2 = l);
          do
            c = o.pop() || lt, c === De && (a(r - 1), i++);
          while (Pa(c));
        } else
          o.push(c), c === De && h === lt ? (a(r - 8), i = r) : h === Wr && u(m), c = h;
        break;
      }
    }
    l = g2;
  }
  return a(r), s.join("");
  function a(m) {
    s.push(e.substring(i, m)), i = m;
  }
  function u(m) {
    c === De || f() || (a(m), s.push(".", "\u2B50\uFE0F", t));
  }
  function $2(m) {
    let g2 = 0;
    if (e.charCodeAt(r) === Kn) {
      for (let b = 1; b < 10; b++)
        if (e.charCodeAt(r + b) === Kn) {
          g2 = b + 1;
          break;
        }
    }
    e:
      for (let b = 3; b < m.length; b++) {
        const d = m[b];
        for (let p = 0; p < d.length; p++)
          if ((e.charCodeAt(r + p + g2) | Qa) !== d.charCodeAt(p))
            continue e;
        return r += d.length + g2, true;
      }
    return false;
  }
  function f() {
    return o.indexOf(De) !== -1 || o.indexOf(Ls) !== -1;
  }
};
var Ut = (e) => e >= Ba && e <= Da || e >= Kr && e <= Va || e >= Ha && e <= ja || e >= 128 || e === Wa || e === Kn;
var $o = (e) => e === tt || e === zs || e === Yr || e === jr || Ut(e);
var Pa = (e) => e === Qr || e === Ls || e === Hr || e === De;
var fo = (e) => e === Fa || e === Oa || e === La || e === za;
var lt = 0;
var Ur = 2;
var De = 5;
var Wr = 6;
var Ls = 10;
var Qr = 11;
var Hr = 12;
var Q = 17;
var Fe = 18;
var R = 0;
var sn = 1;
var be = 2;
var Hn = 3;
var Oa = 9;
var La = 10;
var za = 13;
var Fa = 32;
var jr = 35;
var jn = 41;
var Kn = 45;
var zs = 46;
var Ba = 48;
var Da = 57;
var tt = 58;
var Kr = 65;
var Va = 90;
var Yr = 91;
var Ua = 92;
var Wa = 95;
var Qa = 32;
var Ha = 97;
var ja = 122;
var ze = [[R, 39, 14], [R, 34, 15], [R, 47, 16, "*"]];
var Ka = [[[R, 42, Ur], [R, Yr, 7], [R, tt, Wr, ":", "before", "after", "first-letter", "first-line"], [R, tt, De, "global"], [R, tt, 3, "has", "host-context", "not", "where", "is", "matches", "any"], [R, tt, 4], [R, sn, 1], [R, zs, 1], [R, jr, 1], [R, 64, Ls, "keyframe"], [R, 64, Qr, "media", "supports", "container"], [R, 64, Hr], [R, 123, 13], [47, 42, 16], [R, 59, Q], [R, 125, Q], [R, jn, Q], ...ze], [[R, be, Fe]], [[R, be, Fe]], [[R, 40, lt], [R, be, Fe]], [[R, 40, 8], [R, be, Fe]], [[R, 40, lt], [R, be, Q]], [[R, be, Q]], [[R, 93, Fe], [R, 39, 14], [R, 34, 15]], [[R, jn, Q], ...ze], [[R, 125, Q], ...ze], [[R, 125, Q], [Hn, sn, 1], [R, tt, De, "global"], [R, 123, 13], ...ze], [[R, 123, lt], [R, 59, Q], ...ze], [[R, 59, Q], [R, 123, 9], ...ze], [[R, 125, Q], [R, 123, 13], [R, 40, 8], ...ze], [[R, 39, Q]], [[R, 34, Q]], [[42, 47, Q]]];
var Ya = (e) => {
  Gr(e, (t) => t, false);
};
var vn = (e) => ({ scopeId: "\u2B50\uFE0F" + Gr(e, qa, true) });
var Gr = (e, t, n) => {
  const { val: s, set: o, iCtx: r, i, elCtx: c } = Le();
  if (s)
    return s;
  const l = Ji(e, i), a = r.$renderCtx$.$static$.$containerState$;
  if (o(l), c.$appendStyles$ || (c.$appendStyles$ = []), c.$scopeIds$ || (c.$scopeIds$ = []), n && c.$scopeIds$.push(Xi(l)), a.$styleIds$.has(l))
    return l;
  a.$styleIds$.add(l);
  const u = e.$resolveLazy$(a.$containerEl$), $2 = (f) => {
    c.$appendStyles$, c.$appendStyles$.push({ styleId: l, content: t(f, l) });
  };
  return W(u) ? r.$waitOn$.push(u.then($2)) : $2(u), l;
};
var We = (e) => {
  const { val: t, set: n, iCtx: s } = Le();
  if (t != null)
    return t;
  const o = s.$renderCtx$.$static$.$containerState$, r = oe(e) && !Vr(e) ? X(void 0, e) : e;
  return n($r(r, o, 0, void 0));
};
var Ga = "_wrapper_sbrel_1";
var Ja = "_logo_sbrel_9";
var Xa = "_header_sbrel_16";
var Cn = { wrapper: Ga, logo: Ja, header: Xa };
var Za = () => _("header", null, { class: Cn.header }, _("div", null, { class: Cn.wrapper }, [_("div", null, { class: Cn.logo }, _("a", null, { href: "/", title: "Dragon Network" }, "Dragon Network", 3, null), 3, null), _("ul", null, null, [_("li", null, null, _("a", null, { href: "/" }, "Home", 3, null), 3, null), _("li", null, null, _("a", null, { href: "/vote" }, "Vote", 3, null), 3, null), _("li", null, null, _("a", null, { href: "/store" }, "Store", 3, null), 3, null), _("li", null, null, _("a", null, { href: "/rules" }, "Rules", 3, null), 3, null), _("li", null, null, _("a", null, { href: "/ban-appeal" }, "Ban Appeal", 3, null), 3, null), _("li", null, null, _("a", null, { href: "/more" }, "More", 3, null), 3, null)], 3, null)], 3, null), 3, "M4_0");
var eu = P(x(Za, "s_UiCN4o50luE"));
var tu = "_privacyTerms_k8fa2_23";
var nu = "_contactInfo_k8fa2_23";
var su = "_madeBy_k8fa2_23";
var ou = "_link_k8fa2_27";
var ru = "_separator_k8fa2_32";
var Ze = { privacyTerms: tu, contactInfo: nu, madeBy: su, link: ou, separator: ru };
var iu = () => _("footer", null, null, [_("div", null, { class: Ze.privacyTerms }, [_("a", null, { class: Ze.link, href: "/privacy-policy" }, "Privacy Policy", 3, null), _("span", null, { class: Ze.separator }, "|", 3, null), _("a", null, { class: Ze.link, href: "/terms-of-service" }, "Terms of Service", 3, null)], 3, null), _("div", null, { class: Ze.contactInfo }, [_("p", null, null, ["Contact us: ", _("a", null, { href: "mailto:info@dragonnetwork.digital" }, "info@dragonnetwork.digital", 3, null)], 3, null), _("p", null, null, ["Discord: ", _("a", null, { href: "https://discord.gg/ZuzbU2j5qR", target: "_blank" }, "Dragon Digital Discord", 3, null)], 3, null)], 3, null), _("div", null, { class: Ze.madeBy }, _("p", null, null, ["Website made by Sujan and ", _("a", null, { href: "https://g9aerospace.in", target: "_blank" }, "G9 Aerospace", 3, null)], 3, null), 3, null)], 3, "kf_0");
var cu = P(x(iu, "s_L42kk1EgXtI"));
var lu = () => T(H, { children: [T(eu, null, 3, "0q_0"), _("main", null, null, T(we, null, 3, "0q_1"), 1, null), T(cu, null, 3, "0q_2")] }, 1, "0q_3");
var au = P(x(lu, "s_wce4LNCGUkk"));
var uu = Object.freeze(Object.defineProperty({ __proto__: null, default: au }, Symbol.toStringTag, { value: "Module" }));
var $u = '((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])';
var Jr = ge("qc-s");
var du = ge("qc-c");
var Xr = ge("qc-ic");
var Zr = ge("qc-h");
var ei = ge("qc-l");
var fu = ge("qc-n");
var pu = ge("qc-a");
var mu = ge("qc-ir");
var hu = (e) => {
  const t = window, n = location.pathname + location.search, s = "_qCitySPA", o = "_qCityHistoryPatch", r = "_qCityBootstrap", i = "_qCityInitPopstate", c = "_qCityInitAnchors", l = "_qCityInitVisibility", a = "_qCityInitScroll", u = "_qCityScrollEnabled", $2 = "_qCityScrollDebounce", f = "_qCityScroll", m = (d) => {
    d && t.scrollTo(d.x, d.y);
  }, g2 = () => {
    const d = document.documentElement;
    return { x: d.scrollLeft, y: d.scrollTop, w: Math.max(d.scrollWidth, d.clientWidth), h: Math.max(d.scrollHeight, d.clientHeight) };
  }, b = (d) => {
    const p = history.state || {};
    p[f] = d || g2(), history.replaceState(p, "");
  };
  if (!t[s] && !t[i] && !t[c] && !t[l] && !t[a]) {
    if (b(), t[i] = () => {
      var d;
      if (!t[s]) {
        if (t[u] = false, clearTimeout(t[$2]), n !== location.pathname + location.search) {
          const v3 = e.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');
          if (v3) {
            const y = v3.closest("[q\\:container]"), h = v3.cloneNode();
            h.setAttribute("q:nbs", ""), h.style.display = "none", y.appendChild(h), t[r] = h, h.click();
          } else
            location.reload();
        } else if (history.scrollRestoration === "manual") {
          const p = (d = history.state) == null ? void 0 : d[f];
          m(p), t[u] = true;
        }
      }
    }, !t[o]) {
      t[o] = true;
      const d = history.pushState, p = history.replaceState, v3 = (y) => (y === null || typeof y > "u" ? y = {} : (y == null ? void 0 : y.constructor) !== Object && (y = { _data: y }), y._qCityScroll = y._qCityScroll || g2(), y);
      history.pushState = (y, h, k2) => (y = v3(y), d.call(history, y, h, k2)), history.replaceState = (y, h, k2) => (y = v3(y), p.call(history, y, h, k2));
    }
    t[c] = (d) => {
      if (t[s] || d.defaultPrevented)
        return;
      const p = d.target.closest("a[href]");
      if (p && !p.hasAttribute("preventdefault:click")) {
        const v3 = p.getAttribute("href"), y = new URL(location.href), h = new URL(v3, y), k2 = h.origin === y.origin, E2 = h.pathname + h.search === y.pathname + y.search;
        if (k2 && E2)
          if (d.preventDefault(), h.href !== y.href && history.pushState(null, "", h), !h.hash)
            h.href.endsWith("#") ? window.scrollTo(0, 0) : (t[u] = false, clearTimeout(t[$2]), b({ ...g2(), x: 0, y: 0 }), location.reload());
          else {
            const I2 = h.hash.slice(1), w = document.getElementById(I2);
            w && w.scrollIntoView();
          }
      }
    }, t[l] = () => {
      !t[s] && t[u] && document.visibilityState === "hidden" && b();
    }, t[a] = () => {
      t[s] || !t[u] || (clearTimeout(t[$2]), t[$2] = setTimeout(() => {
        b(), t[$2] = void 0;
      }, 200));
    }, t[u] = true, setTimeout(() => {
      addEventListener("popstate", t[i]), addEventListener("scroll", t[a], { passive: true }), document.body.addEventListener("click", t[c]), t.navigation || document.addEventListener("visibilitychange", t[l], { passive: true });
    }, 0);
  }
};
var gu = x(hu, "s_DyVc0YBIqQU");
var yu = () => {
  {
    const [e, t] = rn().chunkForSymbol(gu.getSymbol(), null), n = Ci + "build/" + t;
    return `(${bu.toString()})('${n}','${e}');`;
  }
};
var bu = async (e, t) => {
  var n;
  if (!window._qcs && history.scrollRestoration === "manual") {
    window._qcs = true;
    const s = (n = history.state) == null ? void 0 : n._qCityScroll;
    s && window.scrollTo(s.x, s.y);
    const o = document.currentScript;
    (await import(e))[t](o);
  }
};
var Su = () => {
  const e = yu();
  Ye();
  const t = Os("nonce"), n = je(Xr);
  if (n.value && n.value.length > 0) {
    const s = n.value.length;
    let o = null;
    for (let r = s - 1; r >= 0; r--)
      n.value[r].default && (o = T(n.value[r].default, { children: o }, 1, "zl_0"));
    return T(H, { children: [o, _("script", { dangerouslySetInnerHTML: e }, { nonce: t }, null, 3, null)] }, 1, "zl_1");
  }
  return fs;
};
var pp = P(x(Su, "s_e0ssiDXoeAM"));
var vu = (e, t) => new URL(e, t.href);
var xu = (e, t) => e.origin === t.origin;
var po = (e) => e.endsWith("/") ? e : e + "/";
var wu = ({ pathname: e }, { pathname: t }) => {
  const n = Math.abs(e.length - t.length);
  return n === 0 ? e === t : n === 1 && po(e) === po(t);
};
var ku = (e, t) => e.search === t.search;
var _u = (e, t) => ku(e, t) && wu(e, t);
var Eu = (e) => e && typeof e.then == "function";
var Tu = (e, t, n, s) => {
  const o = ti(), i = { head: o, withLocale: (c) => Js(s, c), resolveValue: (c) => {
    const l = c.__id;
    if (c.__brand === "server_loader" && !(l in e.loaders))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    const a = e.loaders[l];
    if (Eu(a))
      throw new Error("Loaders returning a promise can not be resolved for the head function.");
    return a;
  }, ...t };
  for (let c = n.length - 1; c >= 0; c--) {
    const l = n[c] && n[c].head;
    l && (typeof l == "function" ? mo(o, Js(s, () => l(i))) : typeof l == "object" && mo(o, l));
  }
  return i.head;
};
var mo = (e, t) => {
  typeof t.title == "string" && (e.title = t.title), Bt(e.meta, t.meta), Bt(e.links, t.links), Bt(e.styles, t.styles), Bt(e.scripts, t.scripts), Object.assign(e.frontmatter, t.frontmatter);
};
var Bt = (e, t) => {
  if (Array.isArray(t))
    for (const n of t) {
      if (typeof n.key == "string") {
        const s = e.findIndex((o) => o.key === n.key);
        if (s > -1) {
          e[s] = n;
          continue;
        }
      }
      e.push(n);
    }
};
var ti = () => ({ title: "", meta: [], links: [], styles: [], scripts: [], frontmatter: {} });
var ho;
(function(e) {
  e[e.EOL = 0] = "EOL", e[e.OPEN_BRACKET = 91] = "OPEN_BRACKET", e[e.CLOSE_BRACKET = 93] = "CLOSE_BRACKET", e[e.DOT = 46] = "DOT", e[e.SLASH = 47] = "SLASH";
})(ho || (ho = {}));
var mp = () => je(Zr);
var hp = () => je(ei);
var Cu = () => bn(Os("qwikcity"));
var Iu = ":root{view-transition-name:none}";
var Ru = async (e, t) => {
  const [n, s, o, r] = M(), { type: i = "link", forceReload: c = e === void 0, replaceState: l = false, scroll: a = true } = typeof t == "object" ? t : { forceReload: t }, u = o.value.dest, $2 = e === void 0 ? u : vu(e, r.url);
  if (xu($2, u) && !(!c && _u($2, u)))
    return o.value = { type: i, dest: $2, forceReload: c, replaceState: l, scroll: a }, n.value = void 0, r.isNavigating = true, new Promise((f) => {
      s.r = f;
    });
};
var Au = ({ track: e }) => {
  const [t, n, s, o, r, i, c, l, a, u, $2] = M();
  async function f() {
    const [g2, b] = e(() => [u.value, t.value]), d = Qc(""), p = $2.url, v3 = b ? "form" : g2.type;
    g2.replaceState;
    let y, h, k2 = null;
    if (y = new URL(g2.dest, $2.url), k2 = r.loadedRoute, h = r.response, k2) {
      const [E2, I2, w, A2] = k2, O2 = w, L2 = O2[O2.length - 1];
      $2.prevUrl = p, $2.url = y, $2.params = { ...I2 }, u.untrackedValue = { type: v3, dest: y };
      const z2 = Tu(h, $2, O2, d);
      n.headings = L2.headings, n.menu = A2, s.value = bn(O2), o.links = z2.links, o.meta = z2.meta, o.styles = z2.styles, o.scripts = z2.scripts, o.title = z2.title, o.frontmatter = z2.frontmatter;
    }
  }
  return f();
};
var Mu = (e) => {
  Ya(x(Iu, "s_RPDJAz33WLA"));
  const t = Cu();
  if (!(t != null && t.params))
    throw new Error("Missing Qwik City Env Data");
  const n = Os("url");
  if (!n)
    throw new Error("Missing Qwik URL Env Data");
  const s = new URL(n), o = K({ url: s, params: t.params, isNavigating: false, prevUrl: void 0 }, { deep: false }), r = {}, i = wa(K(t.response.loaders, { deep: false })), c = We({ type: "initial", dest: s, forceReload: false, replaceState: false, scroll: true }), l = K(ti), a = K({ headings: void 0, menu: void 0 }), u = We(), $2 = t.response.action, f = $2 ? t.response.loaders[$2] : void 0, m = We(f ? { id: $2, data: t.response.formData, output: { result: f, status: t.response.status } } : void 0), g2 = x(Ru, "s_fX0bDjeJa0E", [m, r, c, o]);
  return ue(du, a), ue(Xr, u), ue(Zr, l), ue(ei, o), ue(fu, g2), ue(Jr, i), ue(pu, m), ue(mu, c), Be(x(Au, "s_02wMImzEAbk", [m, a, u, l, t, g2, i, r, e, c, o])), T(we, null, 3, "qY_0");
};
var gp = P(x(Mu, "s_TxCFOy819ag"));
var yp = (e) => _("script", { nonce: pr(e, "nonce") }, { dangerouslySetInnerHTML: $u }, null, 3, "1Z_0");
var qu = (e, ...t) => {
  const { id: n, validators: s } = Nu(t, e);
  function o() {
    return je(Jr, (r) => {
      if (!(n in r))
        throw new Error(`routeLoader$ "${e.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/

    If your are managing reusable logic or a library it is essential that this function is re-exported from within 'layout.tsx' or 'index.tsx file of the existing route otherwise it will not run or throw exception.
    For more information check: https://qwik.builder.io/docs/cookbook/re-exporting-loaders/`);
      return pr(r, n);
    });
  }
  return o.__brand = "server_loader", o.__qrl = e, o.__validators = s, o.__id = n, Object.freeze(o), o;
};
var Nu = (e, t) => {
  let n;
  const s = [];
  if (e.length === 1) {
    const o = e[0];
    o && typeof o == "object" && ("validate" in o ? s.push(o) : (n = o.id, o.validation && s.push(...o.validation)));
  } else
    e.length > 1 && s.push(...e.filter((o) => !!o));
  return typeof n == "string" ? n = `id_${n}` : n = t.getHash(), { validators: s.reverse(), id: n };
};
var Pu = (e) => (vn(x(Lu, "s_a1JZ0Q0Q2Oc")), T(H, { children: e.link ? He("a", { ...e.attributes, children: S((t) => t.text, [e], "p0.text") }, { role: "button", href: S((t) => t.link, [e], "p0.link"), target: S((t) => t.openLinkInNewTab ? "_blank" : void 0, [e], 'p0.openLinkInNewTab?"_blank":undefined') }, 0, "jc_0") : He("button", { class: (() => {
  e.attributes.class;
})(), ...e.attributes, children: S((t) => t.text, [e], "p0.text") }, null, 0, null) }, 1, "jc_1"));
var Ou = P(x(Pu, "s_gJoMUICXoUQ"));
var Lu = `
.button-Button {
  all: unset;
}
`;
var zu = (e) => _("style", null, { dangerouslySetInnerHTML: S((t) => t.styles, [e], "p0.styles"), id: S((t) => t.id, [e], "p0.id") }, null, 3, "NG_0");
var xn = P(x(zu, "s_IOsg46hMexk"));
var zt = ge("Builder");
var ht = "qwik";
function me() {
  return typeof window < "u" && typeof document < "u";
}
function Fu() {
  return me() && window.self !== window.top;
}
function Je() {
  return Fu() && window.location.search.indexOf("builder.frameEditing=") !== -1;
}
var ni = (e) => JSON.parse(JSON.stringify(e));
var si = { small: { min: 320, default: 321, max: 640 }, medium: { min: 641, default: 642, max: 991 }, large: { min: 990, default: 991, max: 1200 } };
var go = (e, t = si) => `@media (max-width: ${t[e].max}px)`;
var oi = ({ small: e, medium: t }) => {
  const n = ni(si);
  if (!e || !t)
    return n;
  const s = Math.floor(e / 2);
  n.small = { max: e, min: s, default: s + 1 };
  const o = n.small.max + 1;
  n.medium = { max: t, min: o, default: o + 1 };
  const r = n.medium.max + 1;
  return n.large = { max: 2e3, min: r, default: r + 1 }, n;
};
function Ft({ code: e, context: t, localState: n, rootState: s, rootSetState: o, event: r, isExpression: i = true }) {
  if (e === "") {
    console.warn("Skipping evaluation of empty code block.");
    return;
  }
  const c = { isEditing: Je(), isBrowser: me(), isServer: !me() }, a = i && !(e.includes(";") || e.includes(" return ") || e.trim().startsWith("return ")) ? `return (${e});` : e;
  try {
    return new Function("builder", "Builder", "state", "context", "event", a)(c, c, Bu(s, n, o), t, r);
  } catch (u) {
    console.warn(`Builder custom code error: 
 While Evaluating: 
 `, a, `
`, u);
  }
}
function Bu(e, t, n) {
  if (e === t)
    throw new Error("rootState === localState");
  return new Proxy(e, { get: (s, o) => t && o in t ? t[o] : e[o], set: (s, o, r) => {
    if (t && o in t)
      throw new Error("Writing to local state is not allowed as it is read-only.");
    return e[o] = r, n == null || n(e), true;
  } });
}
var Du = (e, t, n) => {
  if (Object(e) !== e)
    return e;
  const s = Array.isArray(t) ? t : t.toString().match(/[^.[\]]+/g);
  return s.slice(0, -1).reduce((o, r, i) => Object(o[r]) === o[r] ? o[r] : o[r] = Math.abs(Number(s[i + 1])) >> 0 === +s[i + 1] ? [] : {}, e)[s[s.length - 1]] = n, e;
};
var Vu = ({ block: e, context: t, localState: n, rootState: s, rootSetState: o }) => {
  if (!e.bindings)
    return e;
  const r = ni(e), i = { ...r, properties: { ...r.properties }, actions: { ...r.actions } };
  for (const c in e.bindings) {
    const l = e.bindings[c], a = Ft({ code: l, localState: n, rootState: s, rootSetState: o, context: t });
    Du(i, c, a);
  }
  return i;
};
function Fs({ block: e, context: t, shouldEvaluateBindings: n, localState: s, rootState: o, rootSetState: r }) {
  const i = e;
  return n ? Vu({ block: i, localState: s, rootState: o, rootSetState: r, context: t }) : i;
}
var Uu = (e) => e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
var he = (e) => e != null;
var ri = (e) => Object.entries(e).map(([n, s]) => {
  if (typeof s == "string")
    return `${Uu(n)}: ${s};`;
}).filter(he);
var Wu = (e) => ri(e).join(`
`);
var In = ({ mediaQuery: e, className: t, styles: n }) => {
  const s = `.${t} {
    ${Wu(n)}
  }`;
  return e ? `${e} {
      ${s}
    }` : s;
};
var Qu = () => {
  const [e] = M();
  return Fs({ block: e.block, localState: e.context.localState, rootState: e.context.rootState, rootSetState: e.context.rootSetState, context: e.context.context, shouldEvaluateBindings: true });
};
var Hu = () => {
  const [e] = M();
  return he(e.value.hide) ? !e.value.hide : he(e.value.show) ? e.value.show : true;
};
var ju = () => {
  var f;
  const [e, t] = M(), n = t.value.responsiveStyles, s = e.context.content, o = oi(((f = s == null ? void 0 : s.meta) == null ? void 0 : f.breakpoints) || {}), r = n == null ? void 0 : n.large, i = n == null ? void 0 : n.medium, c = n == null ? void 0 : n.small, l = t.value.id;
  if (!l)
    return "";
  const a = r ? In({ className: l, styles: r }) : "", u = i ? In({ className: l, styles: i, mediaQuery: go("medium", o) }) : "", $2 = c ? In({ className: l, styles: c, mediaQuery: go("small", o) }) : "";
  return [a, u, $2].join(" ");
};
var Ku = (e) => {
  Ye();
  const t = D(x(Qu, "s_9Y0pQBSnHds", [e])), n = D(x(Hu, "s_QhiYxJDtCJY", [t])), s = D(x(ju, "s_wAetZF3ncbo", [e, t]));
  return T(H, { children: s.value && n.value ? T(xn, { get styles() {
    return s.value;
  }, [C]: { styles: S((o) => o.value, [s], "p0.value") } }, 3, "LQ_0") : null }, 1, "LQ_1");
};
var Bs = P(x(Ku, "s_r0t5qGxiwHA"));
function Yu(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Gu = (e) => `on${Yu(e)}$`;
var Ju = (e) => {
  const [t, n] = M();
  return Ft({ code: n, context: t.context, localState: t.localState, rootState: t.rootState, rootSetState: t.rootSetState, event: e });
};
function Xu(e, t) {
  return x(Ju, "s_7wCAiJVliNE", [t, e]);
}
function Zu(e) {
  const t = {}, n = e.block.actions ?? {};
  for (const s in n) {
    if (!n.hasOwnProperty(s))
      continue;
    const o = n[s];
    t[Gu(s)] = Xu(o, e);
  }
  return t;
}
function e$(e) {
  var t;
  return { ...(t = e.component) == null ? void 0 : t.options, ...e.options, builderBlock: e };
}
var t$ = (e) => ({ href: e.href });
function n$(e) {
  var n;
  const t = { ...t$(e), ...e.properties, "builder-id": e.id, style: s$(e.style), class: [e.id, "builder-block", e.class, (n = e.properties) == null ? void 0 : n.class].filter(Boolean).join(" ") };
  return t;
}
function s$(e) {
  if (e)
    switch (ht) {
      case "svelte":
      case "vue2":
      case "vue3":
      case "solid":
        return ri(e).join(" ");
      case "qwik":
      case "reactNative":
      case "react":
        return e;
    }
}
var o$ = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
var Rn = (e) => typeof e == "string" && o$.includes(e.toLowerCase());
var r$ = ({ block: e, context: t }) => {
  var o;
  const n = (o = Fs({ block: e, localState: t.localState, rootState: t.rootState, rootSetState: t.rootSetState, context: t.context, shouldEvaluateBindings: false }).component) == null ? void 0 : o.name;
  if (!n)
    return null;
  const s = t.registeredComponents[n];
  if (s)
    return s;
  console.warn(`
      Could not find a registered component named "${n}". 
      If you registered it, is the file that registered it imported by the file that needs to render it?`);
};
var i$ = ({ block: e, context: t }) => {
  const { repeat: n, ...s } = e;
  if (!(n != null && n.collection))
    return;
  const o = Ft({ code: n.collection, localState: t.localState, rootState: t.rootState, rootSetState: t.rootSetState, context: t.context });
  if (!Array.isArray(o))
    return;
  const r = n.collection.split(".").pop(), i = n.itemName || (r ? r + "Item" : "item");
  return o.map((l, a) => ({ context: { ...t, localState: { ...t.localState, $index: a, $item: l, [i]: l, [`$${i}Index`]: a } }, block: s }));
};
var yo = (e) => T(H, { children: e.componentRef ? T(e.componentRef, { ...e.componentOptions, children: [(e.blockChildren || []).map(function(t) {
  return T(wn, { block: t, get context() {
    return e.context;
  }, [C]: { context: ut(e, "context") } }, 3, "render-block-" + t.id);
}), (e.blockChildren || []).map(function(t) {
  return T(Bs, { block: t, get context() {
    return e.context;
  }, [C]: { context: ut(e, "context") } }, 3, "block-style-" + t.id);
})] }, 0, "R9_0") : null }, 1, "R9_1");
var c$ = (e) => {
  const t = K({ store: e.repeatContext });
  return ue(zt, t.store), T(wn, { get block() {
    return e.block;
  }, get context() {
    return t.store;
  }, [C]: { block: S((n) => n.block, [e], "p0.block"), context: S((n) => n.store, [t], "p0.store") } }, 3, "K5_0");
};
var l$ = P(x(c$, "s_nRyVBtbGKc8"));
var a$ = () => {
  const [e] = M();
  return r$({ block: e.block, context: e.context });
};
var u$ = () => {
  const [e] = M();
  return i$({ block: e.block, context: e.context });
};
var $$ = () => {
  const [e, t] = M();
  return t.value ? e.block : Fs({ block: e.block, localState: e.context.localState, rootState: e.context.rootState, rootSetState: e.context.rootSetState, context: e.context.context, shouldEvaluateBindings: true });
};
var d$ = () => {
  const [e] = M();
  return "hide" in e.value ? !e.value.hide : "show" in e.value ? e.value.show : true;
};
var f$ = () => {
  const [e, t] = M();
  return Zu({ block: t.value, rootState: e.context.rootState, rootSetState: e.context.rootSetState, localState: e.context.localState, context: e.context.context });
};
var p$ = () => {
  const [e, t] = M();
  return { ...n$(t.value) };
};
var m$ = () => {
  var o;
  const [e, t, n] = M();
  return !((o = e.value) != null && o.component) && !t.value ? n.value.children ?? [] : [];
};
var h$ = () => {
  var r, i;
  const [e, t, n, s, o] = M();
  return { blockChildren: o.value.children ?? [], componentRef: (r = n.value) == null ? void 0 : r.component, componentOptions: { ...e$(o.value), ...(i = n.value) != null && i.noWrap ? { attributes: { ...t.value, ...e.value } } : {} }, context: s.childrenContext };
};
var g$ = (e) => {
  var u;
  Ye();
  const t = K({ Tag: e.block.tagName || "div", childrenContext: e.context }), n = D(x(a$, "s_qb7DMTJ9XGY", [e])), s = D(x(u$, "s_NslhinGDzrU", [e])), o = D(x($$, "s_4ZTSqMpaluI", [e, s])), r = D(x(d$, "s_82dAQcDBUzY", [o])), i = D(x(f$, "s_AOTwdXfwCqY", [e, o])), c = D(x(p$, "s_2cvnb0dCzeU", [e, o])), l = D(x(m$, "s_l4hT2V9liQc", [n, s, o])), a = D(x(h$, "s_tWa1cp0r7XY", [i, c, n, t, o]));
  return T(H, { children: r.value ? (u = n.value) != null && u.noWrap ? T(yo, { ...a.value }, 0, "9d_4") : T(H, { children: [Rn(t.Tag) ? T(t.Tag, { ...c.value, ...i.value }, 0, "9d_0") : null, !Rn(t.Tag) && s.value ? (s.value || []).map(function($2, f) {
    return T(l$, { get repeatContext() {
      return $2.context;
    }, get block() {
      return $2.block;
    }, [C]: { repeatContext: ut($2, "context"), block: ut($2, "block") } }, 3, f);
  }) : null, !Rn(t.Tag) && !s.value ? T(t.Tag, { ...c.value, ...i.value, children: [T(yo, { ...a.value }, 0, "9d_1"), (l.value || []).map(function($2) {
    return T(wn, { block: $2, get context() {
      return t.childrenContext;
    }, [C]: { context: S((f) => f.childrenContext, [t], "p0.childrenContext") } }, 3, "render-block-" + $2.id);
  }), (l.value || []).map(function($2) {
    return T(Bs, { block: $2, get context() {
      return t.childrenContext;
    }, [C]: { context: S((f) => f.childrenContext, [t], "p0.childrenContext") } }, 3, "block-style-" + $2.id);
  })] }, 0, "9d_2") : null] }, 1, "9d_3") : null }, 1, "9d_5");
};
var wn = P(x(g$, "s_m0hg0zT573Q"));
var ii = function(t, n, s) {
  var o, r;
  Je() && !((o = t.blocks) != null && o.length) && ((r = window.parent) == null || r.postMessage({ type: "builder.clickEmptyBlocks", data: { parentElementId: t.parent, dataPath: t.path } }, "*"));
};
var y$ = function(t, n, s) {
  var o, r;
  Je() && !((o = t.blocks) != null && o.length) && ((r = window.parent) == null || r.postMessage({ type: "builder.hoverEmptyBlocks", data: { parentElementId: t.parent, dataPath: t.path } }, "*"));
};
var b$ = () => {
  var t;
  const [e] = M();
  return "builder-blocks" + ((t = e.blocks) != null && t.length ? "" : " no-blocks");
};
var S$ = (e) => {
  const [t, n, s] = M();
  return ii(n);
};
var v$ = (e) => {
  const [t, n, s] = M();
  return y$(n);
};
var x$ = (e) => {
  const [t, n, s] = M();
  return ii(n);
};
var w$ = (e) => {
  vn(x(k$, "s_0XKYzaR059E"));
  const t = je(zt), n = {}, s = D(x(b$, "s_7iQuBozD6Tc", [e]));
  return _("div", { onClick$: x(S$, "s_RzhhZa265Yg", [t, e, n]), onMouseEnter$: x(v$, "s_nG7I7RYG3JQ", [t, e, n]), onKeyPress$: x(x$, "s_N5bJZwtuEmI", [t, e, n]) }, { class: S((o) => o.value + " div-RenderBlocks", [s], 'p0.value+" div-RenderBlocks"'), "builder-path": S((o) => o.path, [e], "p0.path"), "builder-parent-id": S((o) => o.parent, [e], "p0.parent"), style: S((o) => o.styleProp, [e], "p0.styleProp") }, [e.blocks ? (e.blocks || []).map(function(o) {
    return T(wn, { block: o, context: t, [C]: { context: C } }, 3, "render-block-" + o.id);
  }) : null, e.blocks ? (e.blocks || []).map(function(o) {
    return T(Bs, { block: o, context: t, [C]: { context: C } }, 3, "block-style-" + o.id);
  }) : null], 0, "9R_0");
};
var ci = P(x(w$, "s_MYUZ0j1uLsw"));
var k$ = `
.div-RenderBlocks {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
`;
var _$ = function(t, n, s, o) {
  var r;
  return ((r = n.cols[o]) == null ? void 0 : r.width) || 100 / n.cols.length;
};
var E$ = function(t, n, s, o) {
  const r = n.gutterSize * (n.cols.length - 1) / n.cols.length;
  return `calc(${_$(t, n, s, o)}% - ${r}px)`;
};
var Yn = function(t, n, s, { stackedStyle: o, desktopStyle: r }) {
  return n.stackAt === "tablet" ? o : r;
};
var bo = function(t, n, s, { stackedStyle: o, desktopStyle: r }) {
  return n.stackAt === "never" ? r : o;
};
var T$ = function(t, n, s, o) {
  const r = o === 0 ? 0 : n.gutterSize, i = E$(t, n, s, o), c = `${r}px`, l = "100%", a = 0;
  return { width: i, "margin-left": c, "--column-width-mobile": bo(t, n, s, { stackedStyle: l, desktopStyle: i }), "--column-margin-left-mobile": bo(t, n, s, { stackedStyle: a, desktopStyle: c }), "--column-width-tablet": Yn(t, n, s, { stackedStyle: l, desktopStyle: i }), "--column-margin-left-tablet": Yn(t, n, s, { stackedStyle: a, desktopStyle: c }) };
};
var So = function(t, n, s, o) {
  var i, c;
  return oi(((c = (i = s.content) == null ? void 0 : i.meta) == null ? void 0 : c.breakpoints) || {})[o].max;
};
var C$ = () => {
  const [e, t, n] = M();
  return { "--flex-dir": n.flexDir, "--flex-dir-tablet": Yn(t, n, e, { stackedStyle: n.flexDir, desktopStyle: "row" }) };
};
var I$ = () => {
  const [e, t, n] = M();
  return `
        @media (max-width: ${So(t, n, e, "medium")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir-tablet);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-tablet) !important;
            margin-left: var(--column-margin-left-tablet) !important;
          }
        }

        @media (max-width: ${So(t, n, e, "small")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-mobile) !important;
            margin-left: var(--column-margin-left-mobile) !important;
          }
        },
      `;
};
var R$ = (e) => {
  Ye(), vn(x(M$, "s_s7JLZz7MCCQ"));
  const t = je(zt), n = K({ cols: e.columns || [], flexDir: e.stackColumnsAt === "never" ? "row" : e.reverseColumnsWhenStacked ? "column-reverse" : "column", gutterSize: typeof e.space == "number" ? e.space || 0 : 20, stackAt: e.stackColumnsAt || "tablet" }), s = D(x(C$, "s_adFEq2RWT9s", [t, e, n])), o = D(x(I$, "s_nBtMPbzd1Wc", [t, e, n]));
  return _("div", null, { class: S((r) => `builder-columns ${r.builderBlock.id}-breakpoints div-Columns`, [e], '`builder-columns ${p0.builderBlock.id}-breakpoints`+" div-Columns"'), style: S((r) => r.value, [s], "p0.value") }, [T(xn, { get styles() {
    return o.value;
  }, [C]: { styles: S((r) => r.value, [o], "p0.value") } }, 3, "c0_0"), (e.columns || []).map(function(r, i) {
    return _("div", { style: T$(e, n, t, i) }, { class: "builder-column div-Columns-2" }, T(ci, { get blocks() {
      return r.blocks;
    }, path: `component.options.columns.${i}.blocks`, get parent() {
      return e.builderBlock.id;
    }, styleProp: { flexGrow: "1" }, [C]: { blocks: ut(r, "blocks"), parent: S((c) => c.builderBlock.id, [e], "p0.builderBlock.id") } }, 3, "c0_1"), 1, i);
  })], 1, "c0_2");
};
var A$ = P(x(R$, "s_7yLj4bxdI6c"));
var M$ = `
.div-Columns {
  display: flex;
  line-height: normal;
}
.div-Columns-2 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
`;
var q$ = (e) => _("span", null, null, T(we, null, 3, "oj_0"), 1, "oj_1");
var N$ = P(x(q$, "s_T0AypnadAK0"));
function vo(e) {
  return e.replace(/http(s)?:/, "");
}
function P$(e = "", t, n) {
  const s = new RegExp("([?&])" + t + "=.*?(&|$)", "i"), o = e.indexOf("?") !== -1 ? "&" : "?";
  return e.match(s) ? e.replace(s, "$1" + t + "=" + encodeURIComponent(n) + "$2") : e + o + t + "=" + encodeURIComponent(n);
}
function O$(e, t) {
  if (!e || !(e != null && e.match(/cdn\.shopify\.com/)) || !t)
    return e;
  if (t === "master")
    return vo(e);
  const n = e.match(/(_\d+x(\d+)?)?(\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?)/i);
  if (n) {
    const s = e.split(n[0]), o = n[3], r = t.match("x") ? t : `${t}x`;
    return vo(`${s[0]}_${r}${o}`);
  }
  return null;
}
function An(e) {
  if (!e)
    return e;
  const t = [100, 200, 400, 800, 1200, 1600, 2e3];
  if (e.match(/builder\.io/)) {
    let n = e;
    const s = Number(e.split("?width=")[1]);
    return isNaN(s) || (n = `${n} ${s}w`), t.filter((o) => o !== s).map((o) => `${P$(e, "width", o)} ${o}w`).concat([n]).join(", ");
  }
  return e.match(/cdn\.shopify\.com/) ? t.map((n) => [O$(e, `${n}x${n}`), n]).filter(([n]) => !!n).map(([n, s]) => `${n} ${s}w`).concat([e]).join(", ") : e;
}
var L$ = () => {
  var s;
  const [e] = M(), n = e.image || e.src;
  if (!n || !(n.match(/builder\.io/) || n.match(/cdn\.shopify\.com/)))
    return e.srcset;
  if (e.srcset && ((s = e.image) != null && s.includes("builder.io/api/v1/image"))) {
    if (!e.srcset.includes(e.image.split("?")[0]))
      return console.debug("Removed given srcset"), An(n);
  } else if (e.image && !e.srcset)
    return An(n);
  return An(n);
};
var z$ = () => {
  var n;
  const [e, t] = M();
  return (n = t.value) != null && n.match(/builder\.io/) && !e.noWebp ? t.value.replace(/\?/g, "?format=webp&") : "";
};
var F$ = () => {
  const [e] = M(), t = { position: "absolute", height: "100%", width: "100%", left: "0px", top: "0px" };
  return e.aspectRatio ? t : void 0;
};
var B$ = (e) => {
  var o, r, i, c;
  Ye(), vn(x(V$, "s_fBMYiVf9fuU"));
  const t = D(x(L$, "s_TZMibf9Gpvw", [e])), n = D(x(z$, "s_01YCu72BBtA", [e, t])), s = D(x(F$, "s_yJ1jG0g5fbw", [e]));
  return T(H, { children: [_("picture", null, null, [n.value ? _("source", null, { type: "image/webp", srcSet: S((l) => l.value, [n], "p0.value") }, null, 3, "0A_0") : null, _("img", null, { loading: "lazy", alt: S((l) => l.altText, [e], "p0.altText"), role: S((l) => l.altText ? "presentation" : void 0, [e], 'p0.altText?"presentation":undefined'), style: S((l, a) => ({ objectPosition: a.backgroundPosition || "center", objectFit: a.backgroundSize || "cover", ...l.value }), [s, e], '{objectPosition:p1.backgroundPosition||"center",objectFit:p1.backgroundSize||"cover",...p0.value}'), class: S((l) => "builder-image" + (l.className ? " " + l.className : "") + " img-Image", [e], '"builder-image"+(p0.className?" "+p0.className:"")+" img-Image"'), src: S((l) => l.image, [e], "p0.image"), srcSet: S((l) => l.value, [t], "p0.value"), sizes: S((l) => l.sizes, [e], "p0.sizes") }, null, 3, null)], 1, null), e.aspectRatio && !((r = (o = e.builderBlock) == null ? void 0 : o.children) != null && r.length && e.fitContent) ? _("div", null, { class: "builder-image-sizer div-Image", style: S((l) => ({ paddingTop: l.aspectRatio * 100 + "%" }), [e], '{paddingTop:p0.aspectRatio*100+"%"}') }, null, 3, "0A_1") : null, (c = (i = e.builderBlock) == null ? void 0 : i.children) != null && c.length && e.fitContent ? T(we, null, 3, "0A_2") : null, !e.fitContent && e.children ? _("div", null, { class: "div-Image-2" }, T(we, null, 3, "0A_3"), 1, "0A_4") : null] }, 1, "0A_5");
};
var D$ = P(x(B$, "s_LRxDkFa1EfU"));
var V$ = `
.img-Image {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}
.div-Image {
  width: 100%;
  pointer-events: none;
  font-size: 0;
}
.div-Image-2 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;
var U$ = (e) => He("section", { ...e.attributes, style: { width: "100%", alignSelf: "stretch", flexGrow: 1, boxSizing: "border-box", maxWidth: e.maxWidth || 1200, display: "flex", flexDirection: "column", alignItems: "stretch", marginLeft: "auto", marginRight: "auto" }, children: T(we, null, 3, "2Y_0") }, null, 0, "2Y_1");
var W$ = P(x(U$, "s_ZWF9iD5WeLg"));
var Dt = "[Builder.io]: ";
var qe = { log: (...e) => console.log(Dt, ...e), error: (...e) => console.error(Dt, ...e), warn: (...e) => console.warn(Dt, ...e), debug: (...e) => console.debug(Dt, ...e) };
var Q$ = (e) => {
  if (e === "localhost" || e === "127.0.0.1")
    return e;
  const t = e.split(".");
  return t.length > 2 ? t.slice(1).join(".") : e;
};
var li = ({ name: e, canTrack: t }) => {
  var n;
  try {
    return t ? (n = document.cookie.split("; ").find((s) => s.startsWith(`${e}=`))) == null ? void 0 : n.split("=")[1] : void 0;
  } catch (s) {
    qe.warn("[COOKIE] GET error: ", (s == null ? void 0 : s.message) || s);
    return;
  }
};
var ai = async (e) => li(e);
var H$ = (e) => e.map(([t, n]) => n ? `${t}=${n}` : t).filter(he).join("; ");
var j$ = [["secure", ""], ["SameSite", "None"]];
var K$ = ({ name: e, value: t, expires: n }) => {
  const o = (me() ? location.protocol === "https:" : true) ? j$ : [[]], r = n ? [["expires", n.toUTCString()]] : [[]], i = [[e, t], ...r, ["path", "/"], ["domain", Q$(window.location.hostname)], ...o];
  return H$(i);
};
var ui = async ({ name: e, value: t, expires: n, canTrack: s }) => {
  try {
    if (!s)
      return;
    const o = K$({ name: e, value: t, expires: n });
    document.cookie = o;
  } catch (o) {
    qe.warn("[COOKIE] SET error: ", (o == null ? void 0 : o.message) || o);
  }
};
var Y$ = "builder.tests";
var Ds = (e) => `${Y$}.${e}`;
var G$ = ({ contentId: e }) => ai({ name: Ds(e), canTrack: true });
var J$ = ({ contentId: e }) => li({ name: Ds(e), canTrack: true });
var X$ = ({ contentId: e, value: t }) => ui({ name: Ds(e), value: t, canTrack: true });
var $i = (e) => he(e.id) && he(e.variations) && Object.keys(e.variations).length > 0;
var Z$ = ({ id: e, variations: t }) => {
  var o;
  let n = 0;
  const s = Math.random();
  for (const r in t) {
    const i = (o = t[r]) == null ? void 0 : o.testRatio;
    if (n += i, s < n)
      return r;
  }
  return e;
};
var di = (e) => {
  const t = Z$(e);
  return X$({ contentId: e.id, value: t }).catch((n) => {
    qe.error("could not store A/B test variation: ", n);
  }), t;
};
var fi = ({ item: e, testGroupId: t }) => {
  const n = e.variations[t];
  return t === e.id || !n ? { testVariationId: e.id, testVariationName: "Default" } : { data: n.data, testVariationId: n.id, testVariationName: n.name || (n.id === e.id ? "Default" : "") };
};
var ed = ({ item: e, canTrack: t }) => {
  if (!t)
    return e;
  if (!e)
    return;
  if (!$i(e))
    return e;
  const n = J$({ contentId: e.id }) || di({ variations: e.variations, id: e.id }), s = fi({ item: e, testGroupId: n });
  return { ...e, ...s };
};
var td = async ({ item: e, canTrack: t }) => {
  if (!t || !$i(e))
    return e;
  const s = await G$({ contentId: e.id }) || di({ variations: e.variations, id: e.id }), o = fi({ item: e, testGroupId: s });
  return { ...e, ...o };
};
var Gn = (e) => he(e) ? e : true;
var nd = (e) => _("script", null, { dangerouslySetInnerHTML: S((t) => t.scriptStr, [e], "p0.scriptStr"), id: S((t) => t.id, [e], "p0.id") }, null, 3, "WO_0");
var Jn = P(x(nd, "s_hwThBdhA8rw"));
var sd = { name: "Core:Button", image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F81a15681c3e74df09677dfc57a615b13", defaultStyles: { appearance: "none", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px", backgroundColor: "#000000", color: "white", borderRadius: "4px", textAlign: "center", cursor: "pointer" }, inputs: [{ name: "text", type: "text", defaultValue: "Click me!", bubble: true }, { name: "link", type: "url", bubble: true }, { name: "openLinkInNewTab", type: "boolean", defaultValue: false, friendlyName: "Open link in new tab" }], static: true, noWrap: true };
var Vs = (e) => {
  const t = e.toString().trim();
  return `return (${!t.startsWith("function") && !t.startsWith("(") ? "function " : ""}${t}).apply(this, arguments)`;
};
var od = { name: "Columns", inputs: [{ name: "columns", type: "array", broadcast: true, subFields: [{ name: "blocks", type: "array", hideFromUI: true, defaultValue: [{ "@type": "@builder.io/sdk:Element", responsiveStyles: { large: { display: "flex", flexDirection: "column", alignItems: "stretch", flexShrink: "0", position: "relative", marginTop: "30px", textAlign: "center", lineHeight: "normal", height: "auto", minHeight: "20px", minWidth: "20px", overflow: "hidden" } }, component: { name: "Image", options: { image: "https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d", backgroundPosition: "center", backgroundSize: "cover", aspectRatio: 0.7004048582995948 } } }, { "@type": "@builder.io/sdk:Element", responsiveStyles: { large: { display: "flex", flexDirection: "column", alignItems: "stretch", flexShrink: "0", position: "relative", marginTop: "30px", textAlign: "center", lineHeight: "normal", height: "auto" } }, component: { name: "Text", options: { text: "<p>Enter some text...</p>" } } }] }, { name: "width", type: "number", hideFromUI: true, helperText: "Width %, e.g. set to 50 to fill half of the space" }, { name: "link", type: "url", helperText: "Optionally set a url that clicking this column will link to" }], defaultValue: [{ blocks: [{ "@type": "@builder.io/sdk:Element", responsiveStyles: { large: { display: "flex", flexDirection: "column", alignItems: "stretch", flexShrink: "0", position: "relative", marginTop: "30px", textAlign: "center", lineHeight: "normal", height: "auto", minHeight: "20px", minWidth: "20px", overflow: "hidden" } }, component: { name: "Image", options: { image: "https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d", backgroundPosition: "center", backgroundSize: "cover", aspectRatio: 0.7004048582995948 } } }, { "@type": "@builder.io/sdk:Element", responsiveStyles: { large: { display: "flex", flexDirection: "column", alignItems: "stretch", flexShrink: "0", position: "relative", marginTop: "30px", textAlign: "center", lineHeight: "normal", height: "auto" } }, component: { name: "Text", options: { text: "<p>Enter some text...</p>" } } }] }, { blocks: [{ "@type": "@builder.io/sdk:Element", responsiveStyles: { large: { display: "flex", flexDirection: "column", alignItems: "stretch", flexShrink: "0", position: "relative", marginTop: "30px", textAlign: "center", lineHeight: "normal", height: "auto", minHeight: "20px", minWidth: "20px", overflow: "hidden" } }, component: { name: "Image", options: { image: "https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d", backgroundPosition: "center", backgroundSize: "cover", aspectRatio: 0.7004048582995948 } } }, { "@type": "@builder.io/sdk:Element", responsiveStyles: { large: { display: "flex", flexDirection: "column", alignItems: "stretch", flexShrink: "0", position: "relative", marginTop: "30px", textAlign: "center", lineHeight: "normal", height: "auto" } }, component: { name: "Text", options: { text: "<p>Enter some text...</p>" } } }] }], onChange: Vs((e) => {
  function t() {
    n.forEach((s) => {
      s.delete("width");
    });
  }
  const n = e.get("columns");
  Array.isArray(n) && n.find((o) => o.get("width")) && (n.find((r) => !r.get("width")) || n.reduce((c, l) => c + l.get("width"), 0) !== 100) && t();
}) }, { name: "space", type: "number", defaultValue: 20, helperText: "Size of gap between columns", advanced: true }, { name: "stackColumnsAt", type: "string", defaultValue: "tablet", helperText: "Convert horizontal columns to vertical at what device size", enum: ["tablet", "mobile", "never"], advanced: true }, { name: "reverseColumnsWhenStacked", type: "boolean", defaultValue: false, helperText: "When stacking columns for mobile devices, reverse the ordering", advanced: true }] };
var rd = { name: "Fragment", static: true, hidden: true, canHaveChildren: true, noWrap: true };
var id = { name: "Image", static: true, image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4", defaultStyles: { position: "relative", minHeight: "20px", minWidth: "20px", overflow: "hidden" }, canHaveChildren: true, inputs: [{ name: "image", type: "file", bubble: true, allowedFileTypes: ["jpeg", "jpg", "png", "svg"], required: true, defaultValue: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a", onChange: Vs((e) => {
  e.delete("srcset"), e.delete("noWebp");
  function n(i, c = 6e4) {
    return new Promise((l, a) => {
      const u = document.createElement("img");
      let $2 = false;
      u.onload = () => {
        $2 = true, l(u);
      }, u.addEventListener("error", (f) => {
        console.warn("Image load failed", f.error), a(f.error);
      }), u.src = i, setTimeout(() => {
        $2 || a(new Error("Image load timed out"));
      }, c);
    });
  }
  function s(i) {
    return Math.round(i * 1e3) / 1e3;
  }
  const o = e.get("image"), r = e.get("aspectRatio");
  if (fetch(o).then((i) => i.blob()).then((i) => {
    i.type.includes("svg") && e.set("noWebp", true);
  }), o && (!r || r === 0.7041))
    return n(o).then((i) => {
      const c = e.get("aspectRatio");
      e.get("image") === o && (!c || c === 0.7041) && i.width && i.height && (e.set("aspectRatio", s(i.height / i.width)), e.set("height", i.height), e.set("width", i.width));
    });
}) }, { name: "backgroundSize", type: "text", defaultValue: "cover", enum: [{ label: "contain", value: "contain", helperText: "The image should never get cropped" }, { label: "cover", value: "cover", helperText: "The image should fill it's box, cropping when needed" }] }, { name: "backgroundPosition", type: "text", defaultValue: "center", enum: ["center", "top", "left", "right", "bottom", "top left", "top right", "bottom left", "bottom right"] }, { name: "altText", type: "string", helperText: "Text to display when the user has images off" }, { name: "height", type: "number", hideFromUI: true }, { name: "width", type: "number", hideFromUI: true }, { name: "sizes", type: "string", hideFromUI: true }, { name: "srcset", type: "string", hideFromUI: true }, { name: "lazy", type: "boolean", defaultValue: true, hideFromUI: true }, { name: "fitContent", type: "boolean", helperText: "When child blocks are provided, fit to them instead of using the image's aspect ratio", defaultValue: true }, { name: "aspectRatio", type: "number", helperText: "This is the ratio of height/width, e.g. set to 1.5 for a 300px wide and 200px tall photo. Set to 0 to not force the image to maintain it's aspect ratio", advanced: true, defaultValue: 0.7041 }] };
var cd = { name: "Core:Section", static: true, image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F682efef23ace49afac61748dd305c70a", inputs: [{ name: "maxWidth", type: "number", defaultValue: 1200 }, { name: "lazyLoad", type: "boolean", defaultValue: false, advanced: true, description: "Only render this section when in view" }], defaultStyles: { paddingLeft: "20px", paddingRight: "20px", paddingTop: "50px", paddingBottom: "50px", marginTop: "0px", width: "100vw", marginLeft: "calc(50% - 50vw)" }, canHaveChildren: true, defaultChildren: [{ "@type": "@builder.io/sdk:Element", responsiveStyles: { large: { textAlign: "center" } }, component: { name: "Text", options: { text: "<p><b>I am a section! My content keeps from getting too wide, so that it's easy to read even on big screens.</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>" } } }] };
var ld = { name: "Symbol", noWrap: true, static: true, inputs: [{ name: "symbol", type: "uiSymbol" }, { name: "dataOnly", helperText: "Make this a data symbol that doesn't display any UI", type: "boolean", defaultValue: false, advanced: true, hideFromUI: true }, { name: "inheritState", helperText: "Inherit the parent component state and data", type: "boolean", defaultValue: false, advanced: true }, { name: "renderToLiquid", helperText: "Render this symbols contents to liquid. Turn off to fetch with javascript and use custom targeting", type: "boolean", defaultValue: false, advanced: true, hideFromUI: true }, { name: "useChildren", hideFromUI: true, type: "boolean" }] };
var ad = { name: "Text", static: true, image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-text_fields-24px%20(1).svg?alt=media&token=12177b73-0ee3-42ca-98c6-0dd003de1929", inputs: [{ name: "text", type: "html", required: true, autoFocus: true, bubble: true, defaultValue: "Enter some text..." }], defaultStyles: { lineHeight: "normal", height: "auto", textAlign: "center" } };
var ud = (e) => _("span", { style: { outline: "none" } }, { class: "builder-text", dangerouslySetInnerHTML: S((t) => {
  var n;
  return (n = t.text) == null ? void 0 : n.toString();
}, [e], "p0.text?.toString()") }, null, 3, "yO_0");
var $d = P(x(ud, "s_15p0cKUxgIE"));
var dd = { name: "Video", canHaveChildren: true, defaultStyles: { minHeight: "20px", minWidth: "20px" }, image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-videocam-24px%20(1).svg?alt=media&token=49a84e4a-b20e-4977-a650-047f986874bb", inputs: [{ name: "video", type: "file", allowedFileTypes: ["mp4"], bubble: true, defaultValue: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/assets%2FKQlEmWDxA0coC3PK6UvkrjwkIGI2%2F28cb070609f546cdbe5efa20e931aa4b?alt=media&token=912e9551-7a7c-4dfb-86b6-3da1537d1a7f", required: true }, { name: "posterImage", type: "file", allowedFileTypes: ["jpeg", "png"], helperText: "Image to show before the video plays" }, { name: "autoPlay", type: "boolean", defaultValue: true }, { name: "controls", type: "boolean", defaultValue: false }, { name: "muted", type: "boolean", defaultValue: true }, { name: "loop", type: "boolean", defaultValue: true }, { name: "playsInline", type: "boolean", defaultValue: true }, { name: "fit", type: "text", defaultValue: "cover", enum: ["contain", "cover", "fill", "auto"] }, { name: "fitContent", type: "boolean", helperText: "When child blocks are provided, fit to them instead of using the aspect ratio", defaultValue: true, advanced: true }, { name: "position", type: "text", defaultValue: "center", enum: ["center", "top", "left", "right", "bottom", "top left", "top right", "bottom left", "bottom right"] }, { name: "height", type: "number", advanced: true }, { name: "width", type: "number", advanced: true }, { name: "aspectRatio", type: "number", advanced: true, defaultValue: 0.7004048582995948 }, { name: "lazyLoad", type: "boolean", helperText: 'Load this video "lazily" - as in only when a user scrolls near the video. Recommended for optmized performance and bandwidth consumption', defaultValue: true, advanced: true }] };
var fd = () => {
  const [e] = M();
  return { ...e.autoPlay === true ? { autoPlay: true } : {}, ...e.muted === true ? { muted: true } : {}, ...e.controls === true ? { controls: true } : {}, ...e.loop === true ? { loop: true } : {}, ...e.playsInline === true ? { playsInline: true } : {} };
};
var pd = () => {
  const [e, t] = M();
  return { ...e.attributes, ...t.value };
};
var md = (e) => {
  const t = D(x(fd, "s_60AadUGY06E", [e])), n = D(x(pd, "s_ZdLsx18NYH4", [e, t]));
  return He("video", { ...n.value }, { style: S((s) => {
    var o;
    return { width: "100%", height: "100%", ...(o = s.attributes) == null ? void 0 : o.style, objectFit: s.fit, objectPosition: s.position, borderRadius: 1 };
  }, [e], '{width:"100%",height:"100%",...p0.attributes?.style,objectFit:p0.fit,objectPosition:p0.position,borderRadius:1}'), src: S((s) => s.video || "no-src", [e], 'p0.video||"no-src"'), poster: S((s) => s.posterImage, [e], "p0.posterImage") }, 0, "j7_0");
};
var hd = P(x(md, "s_qdcTZflYyoQ"));
var gd = { name: "Embed", static: true, inputs: [{ name: "url", type: "url", required: true, defaultValue: "", helperText: "e.g. enter a youtube url, google map, etc", onChange: Vs((e) => {
  const t = e.get("url");
  if (t)
    return e.set("content", "Loading..."), fetch(`https://iframe.ly/api/iframely?url=${t}&api_key=ae0e60e78201a3f2b0de4b`).then((s) => s.json()).then((s) => {
      e.get("url") === t && (s.html ? e.set("content", s.html) : e.set("content", "Invalid url, please try another"));
    }).catch((s) => {
      e.set("content", "There was an error embedding this URL, please try again or another URL");
    });
  e.delete("content");
}) }, { name: "content", type: "html", defaultValue: '<div style="padding: 20px; text-align: center">(Choose an embed URL)<div>', hideFromUI: true }] };
var yd = ["text/javascript", "application/javascript", "application/ecmascript"];
var bd = (e) => yd.includes(e.type);
var Sd = function(t, n, s) {
  if (!s.value || !s.value.getElementsByTagName)
    return;
  const o = s.value.getElementsByTagName("script");
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (i.src && !n.scriptsInserted.includes(i.src)) {
      n.scriptsInserted.push(i.src);
      const c = document.createElement("script");
      c.async = true, c.src = i.src, document.head.appendChild(c);
    } else if (bd(i) && !n.scriptsRun.includes(i.innerText))
      try {
        n.scriptsRun.push(i.innerText), new Function(i.innerText)();
      } catch (c) {
        console.warn("`Embed`: Error running script:", c);
      }
  }
};
var vd = ({ track: e }) => {
  const [t, n, s] = M();
  e(() => t.value), e(() => s.ranInitFn), t.value && !s.ranInitFn && (s.ranInitFn = true, Sd(n, s, t));
};
var xd = (e) => {
  const t = We(), n = K({ ranInitFn: false, scriptsInserted: [], scriptsRun: [] });
  return Be(x(vd, "s_bg7ez0XUtiM", [t, e, n])), _("div", { ref: t }, { class: "builder-embed", dangerouslySetInnerHTML: S((s) => s.content, [e], "p0.content") }, null, 3, "9r_0");
};
var wd = P(x(xd, "s_Uji08ORjXbE"));
var kd = (e) => He("img", { ...e.attributes }, { style: S((t) => ({ objectFit: t.backgroundSize || "cover", objectPosition: t.backgroundPosition || "center" }), [e], '{objectFit:p0.backgroundSize||"cover",objectPosition:p0.backgroundPosition||"center"}'), alt: S((t) => t.altText, [e], "p0.altText"), src: S((t) => t.imgSrc || t.image, [e], "p0.imgSrc||p0.image") }, 0, Je() && e.imgSrc || "default-key");
var _d = P(x(kd, "s_FXvIDBSffO8"));
var Ed = { name: "Raw:Img", hideFromInsertMenu: true, image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4", inputs: [{ name: "image", bubble: true, type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg", "gif", "webp"], required: true }], noWrap: true, static: true };
var Td = (e) => {
  const t = We(), n = K({ scriptsInserted: [], scriptsRun: [] });
  return fn(ft("s_S5QgEQZj6YE", [t, e, n])), _("div", { ref: t }, { class: S((s) => "builder-custom-code" + (s.replaceNodes ? " replace-nodes" : ""), [e], '"builder-custom-code"+(p0.replaceNodes?" replace-nodes":"")'), dangerouslySetInnerHTML: S((s) => s.code, [e], "p0.code") }, null, 3, "bY_0");
};
var Cd = P(x(Td, "s_uYOSy7w7Zqw"));
var Id = { name: "Custom Code", static: true, requiredPermissions: ["editCode"], inputs: [{ name: "code", type: "html", required: true, defaultValue: "<p>Hello there, I am custom HTML code!</p>", code: true }, { name: "replaceNodes", type: "boolean", helperText: "Preserve server rendered dom nodes", advanced: true }, { name: "scriptsClientOnly", type: "boolean", defaultValue: false, helperText: "Only print and run scripts on the client. Important when scripts influence DOM that could be replaced when client loads", advanced: true }] };
var Rd = () => [{ component: Ou, ...sd }, { component: A$, ...od }, { component: Cd, ...Id }, { component: wd, ...gd }, { component: N$, ...rd }, { component: D$, ...id }, { component: _d, ...Ed }, { component: W$, ...cd }, { component: Lf, ...ld }, { component: $d, ...ad }, { component: hd, ...dd }];
function Ad() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : globalThis;
}
function Md() {
  const e = Ad().fetch;
  if (typeof e > "u")
    throw console.warn(`Builder SDK could not find a global fetch function. Make sure you have a polyfill for fetch in your project. 
      For more information, read https://github.com/BuilderIO/this-package-uses-fetch`), new Error("Builder SDK could not find a global `fetch` function");
  return e;
}
var pi = Md();
function Xn(e, t = null, n = ".") {
  return Object.keys(e).reduce((s, o) => {
    const r = e[o], i = [t, o].filter(Boolean).join(n);
    return [typeof r == "object", r !== null, !(Array.isArray(r) && r.length === 0)].every(Boolean) ? { ...s, ...Xn(r, i, n) } : { ...s, [i]: r };
  }, {});
}
var xo = "builder.";
var qd = "options.";
var Nd = (e) => {
  const t = {};
  return e.forEach((n, s) => {
    t[s] = n;
  }), t;
};
var mi = (e) => {
  if (!e)
    return {};
  const t = hi(e), n = {};
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(xo)) {
      const o = s.replace(xo, "").replace(qd, "");
      n[o] = t[s];
    }
  }), n;
};
var Pd = () => {
  if (!me())
    return {};
  const e = new URLSearchParams(window.location.search);
  return mi(e);
};
var hi = (e) => e instanceof URLSearchParams ? Nd(e) : e;
var Od = "v3";
var gi = (e) => {
  const { limit: t = 30, userAttributes: n, query: s, noTraverse: o = false, model: r, apiKey: i, includeRefs: c = true, enrich: l, locale: a, apiVersion: u = Od } = e;
  if (!i)
    throw new Error("Missing API key");
  if (!["v2", "v3"].includes(u))
    throw new Error(`Invalid apiVersion: expected 'v2' or 'v3', received '${u}'`);
  const $2 = new URL(`https://cdn.builder.io/api/${u}/content/${r}?apiKey=${i}&limit=${t}&noTraverse=${o}&includeRefs=${c}${a ? `&locale=${a}` : ""}${l ? `&enrich=${l}` : ""}`), f = { ...Pd(), ...hi(e.options || {}) }, m = Xn(f);
  for (const g2 in m)
    $2.searchParams.set(g2, String(m[g2]));
  if (n && $2.searchParams.set("userAttributes", JSON.stringify(n)), s) {
    const g2 = Xn({ query: s });
    for (const b in g2)
      $2.searchParams.set(b, JSON.stringify(g2[b]));
  }
  return $2;
};
var yi = (e) => "results" in e;
async function bi(e) {
  const t = await Fd({ ...e, limit: 1 });
  return t && yi(t) && t.results[0] || null;
}
var Ld = async (e) => {
  const t = gi(e);
  return await (await pi(t.href)).json();
};
var zd = async (e, t) => {
  const n = Gn(e.canTrack);
  if (!n || !(me() || ht === "reactNative"))
    return t;
  try {
    const s = [];
    for (const o of t.results)
      s.push(await td({ item: o, canTrack: n }));
    t.results = s;
  } catch (s) {
    qe.error("Could not process A/B tests. ", s);
  }
  return t;
};
async function Fd(e) {
  try {
    const t = gi(e), n = await Ld(e);
    return yi(n) ? zd(e, n) : (qe.error("Error fetching data. ", { url: t, content: n, options: e }), n);
  } catch (t) {
    return qe.error("Error fetching data. ", t), null;
  }
}
var Bd = [];
function Dd() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  });
}
function Si() {
  return Dd().replace(/-/g, "");
}
var vi = "builderSessionId";
var Vd = async ({ canTrack: e }) => {
  if (!e)
    return;
  const t = await ai({ name: vi, canTrack: e });
  if (he(t))
    return t;
  {
    const n = Ud();
    return Wd({ id: n, canTrack: e }), n;
  }
};
var Ud = () => Si();
var Wd = ({ id: e, canTrack: t }) => ui({ name: vi, value: e, canTrack: t });
var xi = () => me() && typeof localStorage < "u" ? localStorage : void 0;
var Qd = ({ key: e, canTrack: t }) => {
  var n;
  try {
    return t ? (n = xi()) == null ? void 0 : n.getItem(e) : void 0;
  } catch (s) {
    console.debug("[LocalStorage] GET error: ", s);
    return;
  }
};
var Hd = ({ key: e, canTrack: t, value: n }) => {
  var s;
  try {
    t && ((s = xi()) == null || s.setItem(e, n));
  } catch (o) {
    console.debug("[LocalStorage] SET error: ", o);
  }
};
var wi = "builderVisitorId";
var jd = ({ canTrack: e }) => {
  if (!e)
    return;
  const t = Qd({ key: wi, canTrack: e });
  if (he(t))
    return t;
  {
    const n = Kd();
    return Yd({ id: n, canTrack: e }), n;
  }
};
var Kd = () => Si();
var Yd = ({ id: e, canTrack: t }) => Hd({ key: wi, value: e, canTrack: t });
var Gd = () => {
  if (me()) {
    const e = new URL(location.href);
    return e.pathname === "" && (e.pathname = "/"), e;
  } else
    return console.warn("Cannot get location for tracking in non-browser environment"), null;
};
var Jd = () => typeof navigator == "object" && "Cloudflare-Workers" || "";
var Xd = () => {
  const e = Jd(), t = { Android() {
    return e.match(/Android/i);
  }, BlackBerry() {
    return e.match(/BlackBerry/i);
  }, iOS() {
    return e.match(/iPhone|iPod/i);
  }, Opera() {
    return e.match(/Opera Mini/i);
  }, Windows() {
    return e.match(/IEMobile/i) || e.match(/WPDesktop/i);
  }, any() {
    return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows() || ht === "reactNative";
  } }, n = e.match(/Tablet|iPad/i), s = Gd();
  return { urlPath: s == null ? void 0 : s.pathname, host: (s == null ? void 0 : s.host) || (s == null ? void 0 : s.hostname), device: n ? "tablet" : t.any() ? "mobile" : "desktop" };
};
var Zd = async ({ canTrack: e }) => {
  if (!e)
    return { visitorId: void 0, sessionId: void 0 };
  const t = await Vd({ canTrack: e }), n = jd({ canTrack: e });
  return { sessionId: t, visitorId: n };
};
var ef = async ({ type: e, canTrack: t, apiKey: n, metadata: s, ...o }) => ({ type: e, data: { ...o, metadata: { url: location.href, ...s }, ...await Zd({ canTrack: t }), userAttributes: Xd(), ownerId: n } });
async function tf(e) {
  if (!e.apiKey) {
    qe.error("Missing API key for track call. Please provide your API key.");
    return;
  }
  if (e.canTrack && !Je() && (me() || ht === "reactNative"))
    return fetch("https://cdn.builder.io/api/v1/track", { method: "POST", body: JSON.stringify({ events: [await ef(e)] }), headers: { "content-type": "application/json" }, mode: "cors" }).catch((t) => {
      console.error("Failed to track: ", t);
    });
}
function wo(e) {
  return Math.round(e * 1e3) / 1e3;
}
var nf = (e, t, n = true) => {
  if (!(e instanceof HTMLElement))
    return null;
  let s = n ? e : e.parentElement;
  do {
    if (!s)
      return null;
    if (t(s))
      return s;
  } while (s = s.parentElement);
  return null;
};
var sf = (e) => nf(e, (t) => {
  const n = t.getAttribute("builder-id") || t.id;
  return (n == null ? void 0 : n.indexOf("builder-")) === 0;
});
var ko = ({ event: e, target: t }) => {
  const n = t.getBoundingClientRect(), s = e.clientX - n.left, o = e.clientY - n.top, r = wo(s / n.width), i = wo(o / n.height);
  return { x: r, y: i };
};
var of = (e) => {
  const t = e.target, n = t && sf(t), s = (n == null ? void 0 : n.getAttribute("builder-id")) || (n == null ? void 0 : n.id);
  return { targetBuilderElement: s || void 0, metadata: { targetOffset: t ? ko({ event: e, target: t }) : void 0, builderTargetOffset: n ? ko({ event: e, target: n }) : void 0, builderElementIndex: n && s ? [].slice.call(document.getElementsByClassName(s)).indexOf(n) : void 0 } };
};
var Wt = (e) => Object.values((e == null ? void 0 : e.variations) || {}).map((t) => ({ ...t, testVariationId: t.id, id: e == null ? void 0 : e.id }));
var rf = ({ canTrack: e, content: t }) => !(!(Wt(t).length > 0) || !e || me());
function cf(e, t, n) {
  var i;
  function s() {
    function c(g2, b, d) {
      let p = "";
      if (d) {
        const v3 = /* @__PURE__ */ new Date();
        v3.setTime(v3.getTime() + d * 864e5), p = "; expires=" + v3.toUTCString();
      }
      document.cookie = g2 + "=" + (b || "") + p + "; path=/; Secure; SameSite=None";
    }
    function l(g2) {
      const b = g2 + "=", d = document.cookie.split(";");
      for (let p = 0; p < d.length; p++) {
        let v3 = d[p];
        for (; v3.charAt(0) === " "; )
          v3 = v3.substring(1, v3.length);
        if (v3.indexOf(b) === 0)
          return v3.substring(b.length, v3.length);
      }
      return null;
    }
    const a = `builder.tests.${e}`, u = l(a), $2 = t.map((g2) => g2.id).concat(e);
    if (u && $2.includes(u))
      return u;
    let f = 0;
    const m = Math.random();
    for (let g2 = 0; g2 < t.length; g2++) {
      const b = t[g2], d = b.testRatio;
      if (f += d, m < f)
        return c(a, b.id), b.id;
    }
    return c(a, e), e;
  }
  const o = s(), r = (i = document.currentScript) == null ? void 0 : i.previousElementSibling;
  if (n) {
    r.remove();
    const c = document.currentScript;
    c == null || c.remove();
  } else {
    const c = t.concat({ id: e }).filter((l) => l.id !== o).map((l) => `.variant-${l.id} {  display: none; }
        `).join("");
    r.innerHTML = c;
  }
}
function lf(e, t, n) {
  var l;
  if (!navigator.cookieEnabled)
    return;
  function s(a) {
    const u = a + "=", $2 = document.cookie.split(";");
    for (let f = 0; f < $2.length; f++) {
      let m = $2[f];
      for (; m.charAt(0) === " "; )
        m = m.substring(1, m.length);
      if (m.indexOf(u) === 0)
        return m.substring(u.length, m.length);
    }
    return null;
  }
  const o = `builder.tests.${t}`, r = s(o), i = (l = document.currentScript) == null ? void 0 : l.parentElement, c = e === t;
  if (r === e) {
    if (c)
      return;
    i == null || i.removeAttribute("hidden"), i == null || i.removeAttribute("aria-hidden");
  } else {
    c && (n ? i == null || i.remove() : (i == null || i.setAttribute("hidden", "true"), i == null || i.setAttribute("aria-hidden", "true")));
    return;
  }
}
var af = (e) => e === "react" || e === "reactNative";
var ki = af(ht);
var _i = "builderIoAbTest";
var Ei = "builderIoRenderContent";
var uf = () => {
  const e = cf.toString().replace(/\s+/g, " "), t = lf.toString().replace(/\s+/g, " ");
  return `
  window.${_i} = ${e}
  window.${Ei} = ${t}
  `;
};
var $f = (e, t) => `
  window.${_i}("${t}",${JSON.stringify(e)}, ${ki})`;
var df = ({ contentId: e, variationId: t }) => `
  window.${Ei}("${t}", "${e}", ${ki})`;
var ff = (e) => {
  var r;
  const t = e.family + (e.kind && !e.kind.includes("#") ? ", " + e.kind : ""), n = t.split(",")[0], s = e.fileUrl ?? ((r = e == null ? void 0 : e.files) == null ? void 0 : r.regular);
  let o = "";
  if (s && t && n && (o += `
@font-face {
font-family: "${t}";
src: local("${n}"), url('${s}') format('woff2');
font-display: fallback;
font-weight: 400;
}
      `.trim()), e.files)
    for (const i in e.files) {
      if (!(String(Number(i)) === i))
        continue;
      const l = e.files[i];
      l && l !== s && (o += `
@font-face {
font-family: "${t}";
src: url('${l}') format('woff2');
font-display: fallback;
font-weight: ${i};
}
        `.trim());
    }
  return o;
};
var pf = ({ customFonts: e }) => {
  var t;
  return ((t = e == null ? void 0 : e.map((n) => ff(n))) == null ? void 0 : t.join(" ")) || "";
};
var mf = ({ cssCode: e, contentId: t }) => e ? t ? (e == null ? void 0 : e.replace(/&/g, `div[builder-content-id="${t}"]`)) || "" : e : "";
var hf = (e) => {
  const t = K({ injectedStyles: `
${mf({ cssCode: e.cssCode, contentId: e.contentId })}
${pf({ customFonts: e.customFonts })}

.builder-text > p:first-of-type, .builder-text > .builder-paragraph:first-of-type {
  margin: 0;
}
.builder-text > p, .builder-text > .builder-paragraph {
  color: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-align: inherit;
  font-family: inherit;
}
`.trim() });
  return T(xn, { get styles() {
    return t.injectedStyles;
  }, [C]: { styles: S((n) => n.injectedStyles, [t], "p0.injectedStyles") } }, 3, "V0_0");
};
var gf = P(x(hf, "s_Og0xL34Zbvc"));
var yf = ({ content: e, data: t, locale: n }) => {
  var r, i, c;
  const s = {};
  (i = (r = e == null ? void 0 : e.data) == null ? void 0 : r.inputs) == null || i.forEach((l) => {
    var a;
    l.name && l.defaultValue !== void 0 && ((a = e == null ? void 0 : e.data) != null && a.state) && e.data.state[l.name] === void 0 && (s[l.name] = l.defaultValue);
  });
  const o = { ...(c = e == null ? void 0 : e.data) == null ? void 0 : c.state, ...t, ...n ? { locale: n } : {} };
  return { ...s, ...o };
};
var bf = ({ content: e, data: t }) => e ? { ...e, data: { ...e == null ? void 0 : e.data, ...t }, meta: e == null ? void 0 : e.meta } : void 0;
var Sf = function(t, n, s, o) {
  var r, i, c, l, a;
  n.builderContextSignal.content = { ...n.builderContextSignal.content, ...o, data: { ...(r = n.builderContextSignal.content) == null ? void 0 : r.data, ...o == null ? void 0 : o.data }, meta: { ...(i = n.builderContextSignal.content) == null ? void 0 : i.meta, ...o == null ? void 0 : o.meta, breakpoints: ((c = o == null ? void 0 : o.meta) == null ? void 0 : c.breakpoints) || ((a = (l = n.builderContextSignal.content) == null ? void 0 : l.meta) == null ? void 0 : a.breakpoints) } };
};
var Us = function(t, n, s, o) {
  n.builderContextSignal.rootState = o;
};
var vf = function(t, n, s) {
  var r, i;
  const o = (i = (r = n.builderContextSignal.content) == null ? void 0 : r.data) == null ? void 0 : i.jsCode;
  o && Ft({ code: o, context: t.context || {}, localState: void 0, rootState: n.builderContextSignal.rootState, rootSetState: Us.bind(null, t, n, s) });
};
var xf = function(t, n, s, o) {
  var r, i;
  if (n.builderContextSignal.content) {
    const c = (r = n.builderContextSignal.content) == null ? void 0 : r.testVariationId, l = (i = n.builderContextSignal.content) == null ? void 0 : i.id;
    tf({ type: "click", canTrack: n.canTrackToUse, contentId: l, apiKey: t.apiKey, variationId: c !== l ? c : void 0, ...of(o), unique: !n.clicked });
  }
  n.clicked || (n.clicked = true);
};
var wf = function(t, n, s, o) {
  return o.replace(/{{([^}]+)}}/g, (r, i) => Ft({ code: i, context: t.context || {}, localState: void 0, rootState: n.builderContextSignal.rootState, rootSetState: Us.bind(null, t, n, s) }));
};
var kf = function(t, n, s, { url: o, key: r }) {
  pi(o).then((i) => i.json()).then((i) => {
    const c = { ...n.builderContextSignal.rootState, [r]: i };
    Us(t, n, s, c);
  }).catch((i) => {
    console.error("error fetching dynamic data", o, i);
  });
};
var _f = function(t, n, s) {
  var r, i;
  const o = ((i = (r = n.builderContextSignal.content) == null ? void 0 : r.data) == null ? void 0 : i.httpRequests) ?? {};
  Object.entries(o).forEach(([c, l]) => {
    if (l && (!n.httpReqsData[c] || Je())) {
      const a = wf(t, n, s, l);
      kf(t, n, s, { url: a, key: c });
    }
  });
};
var Ef = function(t, n, s) {
  Je() && window.dispatchEvent(new CustomEvent("builder:component:stateChange", { detail: { state: n.builderContextSignal.rootState, ref: { name: t.model } } }));
};
var Tf = ({ track: e }) => {
  const [t, n, s] = M();
  e(() => n.content), n.content && Sf(n, s, t, n.content);
};
var Cf = ({ track: e }) => {
  const [t, n, s] = M();
  e(() => {
    var o, r;
    return (r = (o = s.builderContextSignal.content) == null ? void 0 : o.data) == null ? void 0 : r.jsCode;
  }), e(() => s.builderContextSignal.rootState), vf(n, s, t);
};
var If = ({ track: e }) => {
  const [t, n, s] = M();
  e(() => {
    var o, r;
    return (r = (o = s.builderContextSignal.content) == null ? void 0 : o.data) == null ? void 0 : r.httpRequests;
  }), _f(n, s, t);
};
var Rf = ({ track: e }) => {
  const [t, n, s] = M();
  e(() => s.builderContextSignal.rootState), Ef(n, s);
};
var Af = (e) => {
  const [t, n, s] = M();
  return xf(n, s, t, e);
};
var Mf = (e) => {
  var s, o;
  Ye();
  const t = We(), n = K({ builderContextSignal: { content: bf({ content: e.content, data: e.data }), localState: void 0, rootState: yf({ content: e.content, data: e.data, locale: e.locale }), rootSetState: void 0, context: e.context || {}, apiKey: e.apiKey, apiVersion: e.apiVersion, registeredComponents: [...Rd(), ...Bd, ...e.customComponents || []].reduce((r, { component: i, ...c }) => ({ ...r, [c.name]: { component: i, ...c } }), {}), inheritedStyles: {} }, canTrackToUse: he(e.canTrack) ? e.canTrack : true, clicked: false, forceReRenderCount: 0, httpReqsData: {}, overrideContent: null, scriptStr: df({ variationId: (s = e.content) == null ? void 0 : s.testVariationId, contentId: (o = e.content) == null ? void 0 : o.id }), update: 0 }, { deep: true });
  return ue(zt, n.builderContextSignal), fn(ft("s_n50dgqWW6pY", [t, e, n])), Be(x(Tf, "s_Kulmlf9pM08", [t, e, n])), Be(x(Cf, "s_X59YMGOetns", [t, e, n])), Be(x(If, "s_u3gn3Pj2b2s", [t, e, n])), Be(x(Rf, "s_xLCHvjhJYRM", [t, e, n])), T(H, { children: n.builderContextSignal.content ? He("div", { ref: t, ...e.showContent ? {} : { hidden: true, "aria-hidden": true }, children: [e.isSsrAbTest ? T(Jn, { get scriptStr() {
    return n.scriptStr;
  }, [C]: { scriptStr: S((r) => r.scriptStr, [n], "p0.scriptStr") } }, 3, "03_0") : null, T(gf, { get contentId() {
    var r;
    return (r = n.builderContextSignal.content) == null ? void 0 : r.id;
  }, get cssCode() {
    var r, i;
    return (i = (r = n.builderContextSignal.content) == null ? void 0 : r.data) == null ? void 0 : i.cssCode;
  }, get customFonts() {
    var r, i;
    return (i = (r = n.builderContextSignal.content) == null ? void 0 : r.data) == null ? void 0 : i.customFonts;
  }, [C]: { contentId: S((r) => {
    var i;
    return (i = r.builderContextSignal.content) == null ? void 0 : i.id;
  }, [n], "p0.builderContextSignal.content?.id"), cssCode: S((r) => {
    var i, c;
    return (c = (i = r.builderContextSignal.content) == null ? void 0 : i.data) == null ? void 0 : c.cssCode;
  }, [n], "p0.builderContextSignal.content?.data?.cssCode"), customFonts: S((r) => {
    var i, c;
    return (c = (i = r.builderContextSignal.content) == null ? void 0 : i.data) == null ? void 0 : c.customFonts;
  }, [n], "p0.builderContextSignal.content?.data?.customFonts") } }, 3, "03_1"), T(ci, { get blocks() {
    var r, i;
    return (i = (r = n.builderContextSignal.content) == null ? void 0 : r.data) == null ? void 0 : i.blocks;
  }, [C]: { blocks: S((r) => {
    var i, c;
    return (c = (i = r.builderContextSignal.content) == null ? void 0 : i.data) == null ? void 0 : c.blocks;
  }, [n], "p0.builderContextSignal.content?.data?.blocks") } }, 3, n.forceReRenderCount)], onClick$: x(Af, "s_wLg5o3ZkpC0", [t, e, n]) }, { "builder-content-id": S((r) => {
    var i;
    return (i = r.builderContextSignal.content) == null ? void 0 : i.id;
  }, [n], "p0.builderContextSignal.content?.id"), "builder-model": S((r) => r.model, [e], "p0.model"), class: S((r) => r.classNameProp, [e], "p0.classNameProp") }, 0, "03_2") : null }, 1, "03_3");
};
var _o = P(x(Mf, "s_hEAI0ahViXM"));
var qf = (e) => {
  var n;
  Ye();
  const t = K({ hideVariantsStyleString: Wt(e.content).map((s) => `.variant-${s.testVariationId} { display: none; } `).join(""), shouldRenderVariants: rf({ canTrack: Gn(e.canTrack), content: e.content }), variantScriptStr: $f(Wt(e.content).map((s) => ({ id: s.testVariationId, testRatio: s.testRatio })), ((n = e.content) == null ? void 0 : n.id) || "") });
  return fn(ft("s_zc1gmoEX01g", [t])), T(H, { children: [!e.__isNestedRender && ht !== "reactNative" ? T(Jn, { scriptStr: uf() }, 3, "Bz_0") : null, t.shouldRenderVariants ? T(H, { children: [T(xn, { get id() {
    var s;
    return `variants-styles-${(s = e.content) == null ? void 0 : s.id}`;
  }, get styles() {
    return t.hideVariantsStyleString;
  }, [C]: { id: S((s) => {
    var o;
    return `variants-styles-${(o = s.content) == null ? void 0 : o.id}`;
  }, [e], "`variants-styles-${p0.content?.id}`"), styles: S((s) => s.hideVariantsStyleString, [t], "p0.hideVariantsStyleString") } }, 3, "Bz_1"), T(Jn, { get scriptStr() {
    return t.variantScriptStr;
  }, [C]: { scriptStr: S((s) => s.variantScriptStr, [t], "p0.variantScriptStr") } }, 3, "Bz_2"), (Wt(e.content) || []).map(function(s) {
    return T(_o, { content: s, showContent: false, classNameProp: void 0, get model() {
      return e.model;
    }, get data() {
      return e.data;
    }, get context() {
      return e.context;
    }, get apiKey() {
      return e.apiKey;
    }, get apiVersion() {
      return e.apiVersion;
    }, get customComponents() {
      return e.customComponents;
    }, get canTrack() {
      return e.canTrack;
    }, get locale() {
      return e.locale;
    }, get includeRefs() {
      return e.includeRefs;
    }, get enrich() {
      return e.enrich;
    }, get isSsrAbTest() {
      return t.shouldRenderVariants;
    }, [C]: { showContent: C, model: S((o) => o.model, [e], "p0.model"), data: S((o) => o.data, [e], "p0.data"), context: S((o) => o.context, [e], "p0.context"), apiKey: S((o) => o.apiKey, [e], "p0.apiKey"), apiVersion: S((o) => o.apiVersion, [e], "p0.apiVersion"), customComponents: S((o) => o.customComponents, [e], "p0.customComponents"), canTrack: S((o) => o.canTrack, [e], "p0.canTrack"), locale: S((o) => o.locale, [e], "p0.locale"), includeRefs: S((o) => o.includeRefs, [e], "p0.includeRefs"), enrich: S((o) => o.enrich, [e], "p0.enrich"), isSsrAbTest: S((o) => o.shouldRenderVariants, [t], "p0.shouldRenderVariants") } }, 3, s.testVariationId);
  })] }, 1, "Bz_3") : null, T(_o, { content: t.shouldRenderVariants ? e.content : ed({ item: e.content, canTrack: Gn(e.canTrack) }), get classNameProp() {
    var s;
    return `variant-${(s = e.content) == null ? void 0 : s.id}`;
  }, showContent: true, get model() {
    return e.model;
  }, get data() {
    return e.data;
  }, get context() {
    return e.context;
  }, get apiKey() {
    return e.apiKey;
  }, get apiVersion() {
    return e.apiVersion;
  }, get customComponents() {
    return e.customComponents;
  }, get canTrack() {
    return e.canTrack;
  }, get locale() {
    return e.locale;
  }, get includeRefs() {
    return e.includeRefs;
  }, get enrich() {
    return e.enrich;
  }, get isSsrAbTest() {
    return t.shouldRenderVariants;
  }, [C]: { classNameProp: S((s) => {
    var o;
    return `variant-${(o = s.content) == null ? void 0 : o.id}`;
  }, [e], "`variant-${p0.content?.id}`"), showContent: C, model: S((s) => s.model, [e], "p0.model"), data: S((s) => s.data, [e], "p0.data"), context: S((s) => s.context, [e], "p0.context"), apiKey: S((s) => s.apiKey, [e], "p0.apiKey"), apiVersion: S((s) => s.apiVersion, [e], "p0.apiVersion"), customComponents: S((s) => s.customComponents, [e], "p0.customComponents"), canTrack: S((s) => s.canTrack, [e], "p0.canTrack"), locale: S((s) => s.locale, [e], "p0.locale"), includeRefs: S((s) => s.includeRefs, [e], "p0.includeRefs"), enrich: S((s) => s.enrich, [e], "p0.enrich"), isSsrAbTest: S((s) => s.shouldRenderVariants, [t], "p0.shouldRenderVariants") } }, 3, "Bz_4")] }, 1, "Bz_5");
};
var Ti = P(x(qf, "s_OMvvre8Ofjw"));
var Nf = function(t, n, s) {
  var o, r;
  !n.contentToUse && ((o = t.symbol) != null && o.model) && (s != null && s.apiKey) && bi({ model: t.symbol.model, apiKey: s.apiKey, apiVersion: s.apiVersion, ...((r = t.symbol) == null ? void 0 : r.entry) && { query: { id: t.symbol.entry } } }).then((i) => {
    i && (n.contentToUse = i);
  }).catch((i) => {
    qe.error("Could not fetch symbol content: ", i);
  });
};
var Pf = ({ track: e }) => {
  const [t, n, s] = M();
  e(() => n.symbol), Nf(n, s, t);
};
var Of = (e) => {
  var s, o, r;
  const t = je(zt), n = K({ className: [e.attributes.class, "builder-symbol", (s = e.symbol) != null && s.inline ? "builder-inline-symbol" : void 0, (o = e.symbol) != null && o.dynamic || e.dynamic ? "builder-dynamic-symbol" : void 0].filter(Boolean).join(" "), contentToUse: (r = e.symbol) == null ? void 0 : r.content });
  return fn(ft("s_oMPs8W5ZhwE", [t, e, n])), Be(x(Pf, "s_NIAWAC1bMBo", [t, e, n])), He("div", { ...e.attributes, children: T(Ti, { get apiVersion() {
    return t.apiVersion;
  }, get apiKey() {
    return t.apiKey;
  }, get context() {
    return t.context;
  }, get customComponents() {
    return Object.values(t.registeredComponents);
  }, get data() {
    var i, c, l;
    return { ...(i = e.symbol) == null ? void 0 : i.data, ...t.localState, ...(l = (c = n.contentToUse) == null ? void 0 : c.data) == null ? void 0 : l.state };
  }, get model() {
    var i;
    return (i = e.symbol) == null ? void 0 : i.model;
  }, get content() {
    return n.contentToUse;
  }, [C]: { apiVersion: S((i) => i.apiVersion, [t], "p0.apiVersion"), apiKey: S((i) => i.apiKey, [t], "p0.apiKey"), context: S((i) => i.context, [t], "p0.context"), customComponents: S((i) => Object.values(i.registeredComponents), [t], "Object.values(p0.registeredComponents)"), data: S((i, c, l) => {
    var a, u, $2;
    return { ...(a = c.symbol) == null ? void 0 : a.data, ...i.localState, ...($2 = (u = l.contentToUse) == null ? void 0 : u.data) == null ? void 0 : $2.state };
  }, [t, e, n], "{...p1.symbol?.data,...p0.localState,...p2.contentToUse?.data?.state}"), model: S((i) => {
    var c;
    return (c = i.symbol) == null ? void 0 : c.model;
  }, [e], "p0.symbol?.model"), content: S((i) => i.contentToUse, [n], "p0.contentToUse") } }, 3, "Wt_0") }, { class: S((i) => i.className, [n], "p0.className") }, 0, "Wt_1");
};
var Lf = P(x(Of, "s_WVvggdkUPdk"));
var zf = "_wrapper_u67uf_1";
var Ff = "_button_u67uf_8";
var Mn = { wrapper: zf, button: Ff };
var Bf = "_wrapper_ypdzw_1";
var Df = "_gauge_ypdzw_5";
var Vf = "_value_ypdzw_10";
var qn = { wrapper: Bf, gauge: Df, value: Vf };
var Uf = (e) => {
  const t = (e.value ?? 50) < 0 || (e.value ?? 50) > 100 ? 50 : e.value ?? 50;
  return _("div", null, { class: qn.wrapper }, [_("svg", null, { class: qn.gauge, viewBox: "0 0 120 120" }, [_("defs", null, null, _("linearGradient", null, { id: "gradient", x1: "0%", x2: "100%", y1: "0%", y2: "100%" }, [_("stop", null, { offset: "0%", "stop-color": "#18B6F6" }, null, 3, null), _("stop", null, { offset: "1000%", "stop-color": "#AC7FF4" }, null, 3, null)], 3, null), 3, null), _("circle", null, { cx: "60", cy: "60", r: "56", "stroke-width": "8", style: "fill: #000; stroke: #0000" }, null, 3, null), _("circle", { style: `transform: rotate(-87.9537deg); stroke-dasharray: ${t * 3.51}, 351.858; fill:none; transform-origin:50% 50%; stroke-linecap:round; stroke:url(#gradient)` }, { cx: "60", cy: "60", r: "56", "stroke-width": "8" }, null, 3, null)], 1, null), _("span", null, { class: qn.value }, t, 1, null)], 1, "VV_0");
};
var Wf = P(x(Uf, "s_mMbjgespiYw"));
var Qf = (e) => {
  const [t] = M();
  e >= 0 && e <= 100 && (t.value = e, e === 100 && Yf());
};
var Hf = (e) => {
  const t = We(e.initialValue || 99), n = x(Qf, "s_70qR4CRbrV4", [t]);
  return _("div", null, { class: Mn.wrapper }, [_("button", null, { class: Mn.button, onClick$: ft("s_d1ZjguXclSk", [t, n]) }, "-", 3, null), T(Wf, { get value() {
    return t.value;
  }, [C]: { value: S((s) => s.value, [t], "p0.value") } }, 3, "l5_0"), _("button", null, { class: Mn.button, onClick$: ft("s_Cw830x7OM1Q", [t, n]) }, "+", 3, null)], 1, "l5_1");
};
var jf = P(x(Hf, "s_CgASKt86Ilk"));
var Kf = async () => {
  const e = { spread: 360, ticks: 70, gravity: 0, decay: 0.95, startVelocity: 30, colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"], origin: { x: 0.5, y: 0.35 } };
  function t() {
    return new Promise((o, r) => {
      if (globalThis.confetti)
        return o(globalThis.confetti);
      const i = document.createElement("script");
      i.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js", i.onload = () => o(globalThis.confetti), i.onerror = r, document.head.appendChild(i), i.remove();
    });
  }
  const n = await t();
  function s() {
    n({ ...e, particleCount: 80, scalar: 1.2 }), n({ ...e, particleCount: 60, scalar: 0.75 });
  }
  setTimeout(s, 0), setTimeout(s, 100), setTimeout(s, 200), setTimeout(s, 300), setTimeout(s, 400);
};
var Yf = x(Kf, "s_5L0V8IRw5RM");
var Gf = [{ component: jf, name: "Counter", inputs: [{ name: "initialValue", type: "number" }] }];
var Jf = async ({ url: e, error: t }) => {
  const n = e.searchParams.has("builder.preview"), s = await bi({ model: "page", apiKey: "2e6e878ca42942aa8102ac601d8d8de0", options: mi(e.searchParams), userAttributes: { urlPath: e.pathname } });
  if (!s && !n)
    throw t(404, "Page not found");
  return s;
};
var Ws = qu(x(Jf, "s_fmvo2g0iIYA"));
var Xf = () => {
  const e = Ws();
  return T(Ti, { model: "page", get content() {
    return e.value;
  }, get apiKey() {
    return "2e6e878ca42942aa8102ac601d8d8de0";
  }, customComponents: Gf, [C]: { apiKey: C, content: S((t) => t.value, [e], "p0.value"), customComponents: C, model: C } }, 3, "ZY_0");
};
var Zf = P(x(Xf, "s_QHfu0Jk0asc"));
var ep = ({ resolveValue: e }) => {
  var n;
  const t = e(Ws);
  return { title: (n = t == null ? void 0 : t.data) == null ? void 0 : n.title };
};
var tp = Object.freeze(Object.defineProperty({ __proto__: null, default: Zf, head: ep, useBuilderContent: Ws }, Symbol.toStringTag, { value: "Module" }));
var np = [];
var sp = () => uu;
var op = [["[...index]", [sp, () => tp], "/[...index]", ["q-DXamIIuS.js", "q-CQufTkwH.js"]]];
var rp = [];
var ip = true;
var Ci = "/";
var cp = true;
var bp = { routes: op, serverPlugins: np, menus: rp, trailingSlash: ip, basePathname: Ci, cacheModules: cp };
var ye = ((e) => typeof __require2 < "u" ? __require2 : typeof Proxy < "u" ? new Proxy(e, { get: (n, s) => (typeof __require2 < "u" ? __require2 : n)[s] }) : e)(function(e) {
  if (typeof __require2 < "u")
    return __require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var be2 = "<sync>";
function G2(e, n) {
  const s = n == null ? void 0 : n.mapper, t = e.symbolMapper ? e.symbolMapper : (i) => {
    var a;
    if (s) {
      const r = N2(i), c = s[r];
      if (!c) {
        if (r === be2)
          return [r, ""];
        if ((a = globalThis.__qwik_reg_symbols) == null ? void 0 : a.has(r))
          return [i, "_"];
        console.error("Cannot resolve symbol", i, "in", s);
      }
      return c;
    }
  };
  return { isServer: true, async importSymbol(i, a, r) {
    var h;
    const c = N2(r), l = (h = globalThis.__qwik_reg_symbols) == null ? void 0 : h.get(c);
    if (l)
      return l;
    let m = String(a);
    m.endsWith(".js") || (m += ".js");
    const w = ye(m);
    if (!(r in w))
      throw new Error(`Q-ERROR: missing symbol '${r}' in module '${m}'.`);
    return w[r];
  }, raf: () => (console.error("server can not rerender"), Promise.resolve()), nextTick: (i) => new Promise((a) => {
    setTimeout(() => {
      a(i());
    });
  }), chunkForSymbol(i) {
    return t(i, s);
  } };
}
async function je2(e, n) {
  const s = G2(e, n);
  lp(s);
}
var N2 = (e) => {
  const n = e.lastIndexOf("_");
  return n > -1 ? e.slice(n + 1) : e;
};
function v() {
  if (typeof performance > "u")
    return () => 0;
  const e = performance.now();
  return () => (performance.now() - e) / 1e6;
}
function J2(e) {
  let n = e.base;
  return typeof e.base == "function" && (n = e.base(e)), typeof n == "string" ? (n.endsWith("/") || (n += "/"), n) : "/build/";
}
var he2 = `((e,t)=>{const n="__q_context__",s=window,o=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((s=>f(s,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,s,o,i=o.type)=>{const a="on"+s+":"+i;t.hasAttribute("preventdefault:"+i)&&o.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,o],(()=>t.isConnected))(o,t);return}const b=r(t,a);if(b){const s=t.closest("[q\\\\:container]"),i=new URL(r(s,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now();let b;const d=a.startsWith("#");if(d)b=(s.qFuncs||[])[Number.parseInt(c)];else{const e=import(
/* @vite-ignore */
r.href.split("#")[0]);l(s),b=(await e)[c]}const p=e[n];if(t.isConnected)try{e[n]=[t,o,r],d||u("qsymbol",{symbol:c,element:t,reqTime:f}),await b(o,t)}finally{e[n]=p}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),d=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},p=e=>{a("-window",e,b(e.type))},q=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,u("qinit"),(null!=(n=s.requestIdleCallback)?n:s.setTimeout).bind(s)((()=>u("qidle"))),o.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},w=(e,t,n,s=!1)=>e.addEventListener(t,n,{capture:s,passive:!1}),v=t=>{for(const n of t)o.has(n)||(w(e,n,d,!0),w(s,n,p),o.add(n))};if(!e.qR){const t=s.qwikevents;Array.isArray(t)&&v(t),s.qwikevents={push:(...e)=>v(e)},w(e,"readystatechange",q),q()}})(document);`;
var we2 = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    await listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    const isSync = qrl.startsWith("#");
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbolName)];
                    } else {
                        const module = import(
                        /* @vite-ignore */
                        url.href.split("#")[0]);
                        resolveContainer(container);
                        handler = (await module)[symbolName];
                    }
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;
var ge2 = `((e,t)=>{const n="__q_context__",s=window,o=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((s=>f(s,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,s,o,i=o.type)=>{const a="on"+s+":"+i;t.hasAttribute("preventdefault:"+i)&&o.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,o],(()=>t.isConnected))(o,t);return}const b=r(t,a);if(b){const s=t.closest("[q\\\\:container]"),i=new URL(r(s,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now();let b;const d=a.startsWith("#");if(d)b=(s.qFuncs||[])[Number.parseInt(c)];else{const e=import(
/* @vite-ignore */
r.href.split("#")[0]);l(s),b=(await e)[c]}const p=e[n];if(t.isConnected)try{e[n]=[t,o,r],d||u("qsymbol",{symbol:c,element:t,reqTime:f}),await b(o,t)}finally{e[n]=p}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),d=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},p=e=>{a("-window",e,b(e.type))},q=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,u("qinit"),(null!=(n=s.requestIdleCallback)?n:s.setTimeout).bind(s)((()=>u("qidle"))),o.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},w=(e,t,n,s=!1)=>e.addEventListener(t,n,{capture:s,passive:!1}),v=t=>{for(const n of t)o.has(n)||(w(e,n,d,!0),w(s,n,p),o.add(n))};if(!e.qR){const t=s.qwikevents;Array.isArray(t)&&v(t),s.qwikevents={push:(...e)=>v(e)},w(e,"readystatechange",q),q()}})(document);`;
var ke2 = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    await listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    const isSync = qrl.startsWith("#");
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbolName)];
                    } else {
                        const module = import(
                        /* @vite-ignore */
                        url.href.split("#")[0]);
                        resolveContainer(container);
                        handler = (await module)[symbolName];
                    }
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;
function xe2(e = {}) {
  return Array.isArray(e.events) && e.events.length > 0 ? (e.debug ? ke2 : ge2).replace("window.qEvents", JSON.stringify(e.events)) : e.debug ? we2 : he2;
}
function ve2(e, n, s) {
  if (!s)
    return [];
  const t = n.prefetchStrategy, o = J2(n);
  if (t !== null) {
    if (!t || !t.symbolsToPrefetch || t.symbolsToPrefetch === "auto")
      return Ne2(e, s, o);
    if (typeof t.symbolsToPrefetch == "function")
      try {
        return t.symbolsToPrefetch({ manifest: s.manifest });
      } catch (i) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", i);
      }
  }
  return [];
}
function Ne2(e, n, s) {
  const t = [], o = e == null ? void 0 : e.qrls, { mapper: i, manifest: a } = n, r = /* @__PURE__ */ new Map();
  if (Array.isArray(o))
    for (const c of o) {
      const l = c.getHash(), m = i[l];
      m && H2(a, r, t, s, m[1]);
    }
  return t;
}
function H2(e, n, s, t, o) {
  const i = t + o;
  let a = n.get(i);
  if (!a) {
    a = { url: i, imports: [] }, n.set(i, a);
    const r = e.bundles[o];
    if (r && Array.isArray(r.imports))
      for (const c of r.imports)
        H2(e, n, a.imports, t, c);
  }
  s.push(a);
}
function Ce2(e) {
  if (e != null && e.mapping != null && typeof e.mapping == "object" && e.symbols != null && typeof e.symbols == "object" && e.bundles != null && typeof e.bundles == "object")
    return e;
}
function C2() {
  let o = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return o += "w.postMessage(u.map(u=>new URL(u,origin)+''));", o += "w.onmessage=()=>{w.terminate()};", o;
}
function Be2(e) {
  const n = { bundles: g(e).map((s) => s.split("/").pop()) };
  return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`;
}
function g(e) {
  const n = [], s = (t) => {
    if (Array.isArray(t))
      for (const o of t)
        n.includes(o.url) || (n.push(o.url), s(o.imports));
  };
  return s(e), n;
}
function Se2(e) {
  const n = /* @__PURE__ */ new Map();
  let s = 0;
  const t = (r, c) => {
    if (Array.isArray(r))
      for (const l of r) {
        const m = n.get(l.url) || 0;
        n.set(l.url, m + 1), s++, c.has(l.url) || (c.add(l.url), t(l.imports, c));
      }
  }, o = /* @__PURE__ */ new Set();
  for (const r of e)
    o.clear(), t(r.imports, o);
  const i = s / n.size * 2, a = Array.from(n.entries());
  return a.sort((r, c) => c[1] - r[1]), a.slice(0, 5).filter((r) => r[1] > i).map((r) => r[0]);
}
function ze2(e, n, s) {
  const t = Fe2(e == null ? void 0 : e.implementation), o = [];
  return t.prefetchEvent === "always" && Ee2(o, n, s), t.linkInsert === "html-append" && Ie2(o, n, t), t.linkInsert === "js-append" ? Le2(o, n, t, s) : t.workerFetchInsert === "always" && Te2(o, n, s), o.length > 0 ? up(H, { children: o }) : null;
}
function Ee2(e, n, s) {
  const t = Se2(n);
  for (const o of t)
    e.push(up("link", { rel: "modulepreload", href: o, nonce: s }));
  e.push(up("script", { "q:type": "prefetch-bundles", dangerouslySetInnerHTML: Be2(n) + ";document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))", nonce: s }));
}
function Ie2(e, n, s) {
  const t = g(n), o = s.linkRel || "prefetch";
  for (const i of t) {
    const a = {};
    a.href = i, a.rel = o, (o === "prefetch" || o === "preload") && i.endsWith(".js") && (a.as = "script"), e.push(up("link", a, void 0));
  }
}
function Le2(e, n, s, t) {
  const o = s.linkRel || "prefetch";
  let i = "";
  s.workerFetchInsert === "no-link-support" && (i += "let supportsLinkRel = true;"), i += `const u=${JSON.stringify(g(n))};`, i += "u.map((u,i)=>{", i += "const l=document.createElement('link');", i += 'l.setAttribute("href",u);', i += `l.setAttribute("rel","${o}");`, s.workerFetchInsert === "no-link-support" && (i += "if(i===0){", i += "try{", i += `supportsLinkRel=l.relList.supports("${o}");`, i += "}catch(e){}", i += "}"), i += "document.body.appendChild(l);", i += "});", s.workerFetchInsert === "no-link-support" && (i += "if(!supportsLinkRel){", i += C2(), i += "}"), s.workerFetchInsert === "always" && (i += C2()), e.push(up("script", { type: "module", "q:type": "link-js", dangerouslySetInnerHTML: i, nonce: t }));
}
function Te2(e, n, s) {
  let t = `const u=${JSON.stringify(g(n))};`;
  t += C2(), e.push(up("script", { type: "module", "q:type": "prefetch-worker", dangerouslySetInnerHTML: t, nonce: s }));
}
function Fe2(e) {
  return { ...Ae2, ...e };
}
var Ae2 = { linkInsert: null, linkRel: null, workerFetchInsert: null, prefetchEvent: "always" };
var Re2 = "<!DOCTYPE html>";
async function De2(e, n) {
  var F3;
  let s = n.stream, t = 0, o = 0, i = 0, a = 0, r = "", c;
  const l = ((F3 = n.streaming) == null ? void 0 : F3.inOrder) ?? { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 }, m = n.containerTagName ?? "html", w = n.containerAttributes ?? {}, h = s, ne3 = v(), se3 = J2(n), p = ee2(n.manifest);
  function S2() {
    r && (h.write(r), r = "", t = 0, i++, i === 1 && (a = ne3()));
  }
  function z2(d) {
    const _2 = d.length;
    t += _2, o += _2, r += d;
  }
  switch (l.strategy) {
    case "disabled":
      s = { write: z2 };
      break;
    case "direct":
      s = h;
      break;
    case "auto":
      let d = 0, _2 = false;
      const A2 = l.maximunChunk ?? 0, k2 = l.maximunInitialChunk ?? 0;
      s = { write(b) {
        b === "<!--qkssr-f-->" ? _2 || (_2 = true) : b === "<!--qkssr-pu-->" ? d++ : b === "<!--qkssr-po-->" ? d-- : z2(b), d === 0 && (_2 || t >= (i === 0 ? k2 : A2)) && (_2 = false, S2());
      } };
      break;
  }
  m === "html" ? s.write(Re2) : (s.write("<!--cq-->"), n.qwikLoader ? (n.qwikLoader.include === void 0 && (n.qwikLoader.include = "never"), n.qwikLoader.position === void 0 && (n.qwikLoader.position = "bottom")) : n.qwikLoader = { include: "never" }, n.qwikPrefetchServiceWorker || (n.qwikPrefetchServiceWorker = {}), n.qwikPrefetchServiceWorker.include || (n.qwikPrefetchServiceWorker.include = false), n.qwikPrefetchServiceWorker.position || (n.qwikPrefetchServiceWorker.position = "top")), n.manifest || console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."), await je2(n, p);
  const E2 = p == null ? void 0 : p.manifest.injections, te3 = E2 ? E2.map((d) => up(d.tag, d.attributes ?? {})) : void 0, ie3 = v(), I2 = [];
  let L2 = 0, T2 = 0;
  await ap(e, { stream: s, containerTagName: m, containerAttributes: w, serverData: n.serverData, base: se3, beforeContent: te3, beforeClose: async (d, _2, A2, k2) => {
    var M2, V3, K3, Q2, Y3, U, Z2;
    L2 = ie3();
    const b = v();
    c = await Ml(d, _2, void 0, k2);
    const y = [];
    if (n.prefetchStrategy !== null) {
      const f = ve2(c, n, p);
      if (f.length > 0) {
        const P3 = ze2(n.prefetchStrategy, f, (M2 = n.serverData) == null ? void 0 : M2.nonce);
        P3 && y.push(P3);
      }
    }
    const re3 = JSON.stringify(c.state, void 0, void 0);
    y.push(up("script", { type: "qwik/json", dangerouslySetInnerHTML: Oe2(re3), nonce: (V3 = n.serverData) == null ? void 0 : V3.nonce })), c.funcs.length > 0 && y.push(up("script", { "q:func": "qwik/json", dangerouslySetInnerHTML: Ke2(c.funcs), nonce: (K3 = n.serverData) == null ? void 0 : K3.nonce }));
    const ae3 = !c || c.mode !== "static", R2 = ((Q2 = n.qwikLoader) == null ? void 0 : Q2.include) ?? "auto", D2 = R2 === "always" || R2 === "auto" && ae3;
    if (D2) {
      const f = xe2({ events: (Y3 = n.qwikLoader) == null ? void 0 : Y3.events, debug: n.debug });
      y.push(up("script", { id: "qwikloader", dangerouslySetInnerHTML: f, nonce: (U = n.serverData) == null ? void 0 : U.nonce }));
    }
    const O2 = Array.from(_2.$events$, (f) => JSON.stringify(f));
    if (O2.length > 0) {
      let f = `window.qwikevents.push(${O2.join(", ")})`;
      D2 || (f = `window.qwikevents||=[];${f}`), y.push(up("script", { dangerouslySetInnerHTML: f, nonce: (Z2 = n.serverData) == null ? void 0 : Z2.nonce }));
    }
    return Me2(I2, d), T2 = b(), up(H, { children: y });
  }, manifestHash: (p == null ? void 0 : p.manifest.manifestHash) || "dev" }), m !== "html" && s.write("<!--/cq-->"), S2();
  const oe3 = c.resources.some((d) => d._cache !== 1 / 0);
  return { prefetchResources: void 0, snapshotResult: c, flushes: i, manifest: p == null ? void 0 : p.manifest, size: o, isStatic: !oe3, timing: { render: L2, snapshot: T2, firstFlush: a }, _symbols: I2 };
}
function ee2(e) {
  if (e) {
    if ("mapper" in e)
      return e;
    if (e = Ce2(e), e) {
      const n = {};
      return Object.entries(e.mapping).forEach(([s, t]) => {
        n[N2(s)] = [s, t];
      }), { mapper: n, manifest: e };
    }
  }
}
var Oe2 = (e) => e.replace(/<(\/?script)/gi, "\\x3C$1");
function Me2(e, n) {
  var s;
  for (const t of n) {
    const o = (s = t.$componentQrl$) == null ? void 0 : s.getSymbol();
    o && !e.includes(o) && e.push(o);
  }
}
var Ve2 = 'document.currentScript.closest("[q\\\\:container]").qFuncs=';
function Ke2(e) {
  return Ve2 + `[${e.join(`,
`)}]`;
}
async function Xe(e) {
  const n = G2({ manifest: e }, ee2(e));
  lp(n);
}
var Qe2 = { manifestHash: "b46zy3", symbols: { s_02wMImzEAbk: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useTask", canonicalFilename: "s_02wmimzeabk", hash: "02wMImzEAbk", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_TxCFOy819ag", loc: [27091, 36262] }, s_Kulmlf9pM08: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContent_component_useTask", canonicalFilename: "s_kulmlf9pm08", hash: "Kulmlf9pM08", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_hEAI0ahViXM", loc: [99624, 99839] }, s_NIAWAC1bMBo: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Symbol_component_useTask", canonicalFilename: "s_niawac1bmbo", hash: "NIAWAC1bMBo", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_WVvggdkUPdk", loc: [112341, 112518] }, s_X59YMGOetns: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContent_component_useTask_1", canonicalFilename: "s_x59ymgoetns", hash: "X59YMGOetns", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_hEAI0ahViXM", loc: [99974, 100238] }, s_bg7ez0XUtiM: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Embed_component_useTask", canonicalFilename: "s_bg7ez0xutim", hash: "bg7ez0XUtiM", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_Uji08ORjXbE", loc: [63867, 64148] }, s_u3gn3Pj2b2s: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContent_component_useTask_2", canonicalFilename: "s_u3gn3pj2b2s", hash: "u3gn3Pj2b2s", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_hEAI0ahViXM", loc: [100375, 100589] }, s_xLCHvjhJYRM: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContent_component_useTask_3", canonicalFilename: "s_xlchvjhjyrm", hash: "xLCHvjhJYRM", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_hEAI0ahViXM", loc: [100726, 100909] }, s_S5QgEQZj6YE: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "CustomCode_component_useVisibleTask", canonicalFilename: "s_s5qgeqzj6ye", hash: "S5QgEQZj6YE", ctxKind: "function", ctxName: "useVisibleTask$", captures: true, parent: "s_uYOSy7w7Zqw", loc: [67019, 67131] }, s_n50dgqWW6pY: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContent_component_useVisibleTask", canonicalFilename: "s_n50dgqww6py", hash: "n50dgqWW6pY", ctxKind: "function", ctxName: "useVisibleTask$", captures: true, parent: "s_hEAI0ahViXM", loc: [96902, 99482] }, s_oMPs8W5ZhwE: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Symbol_component_useVisibleTask", canonicalFilename: "s_omps8w5zhwe", hash: "oMPs8W5ZhwE", ctxKind: "function", ctxName: "useVisibleTask$", captures: true, parent: "s_WVvggdkUPdk", loc: [112075, 112202] }, s_zc1gmoEX01g: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContentVariants_component_useVisibleTask", canonicalFilename: "s_zc1gmoex01g", hash: "zc1gmoEX01g", ctxKind: "function", ctxName: "useVisibleTask$", captures: true, parent: "s_OMvvre8Ofjw", loc: [104368, 104402] }, s_15p0cKUxgIE: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Text_component", canonicalFilename: "s_15p0ckuxgie", hash: "15p0cKUxgIE", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [57001, 57266] }, s_2ZLchhq7kSo: { origin: "components/router-head/router-head.tsx", displayName: "RouterHead_component", canonicalFilename: "s_2zlchhq7kso", hash: "2ZLchhq7kSo", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [243, 854] }, s_7yLj4bxdI6c: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Columns_component", canonicalFilename: "s_7ylj4bxdi6c", hash: "7yLj4bxdI6c", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [25759, 29275] }, s_8gdLBszqbaM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component", canonicalFilename: "s_8gdlbszqbam", hash: "8gdLBszqbaM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [38246, 40918] }, s_CgASKt86Ilk: { origin: "components/counter/counter.tsx", displayName: "counter_component", canonicalFilename: "s_cgaskt86ilk", hash: "CgASKt86Ilk", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [162, 756] }, s_FXvIDBSffO8: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "ImgComponent_component", canonicalFilename: "s_fxvidbsffo8", hash: "FXvIDBSffO8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [64548, 65111] }, s_IOsg46hMexk: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "InlinedStyles_component", canonicalFilename: "s_iosg46hmexk", hash: "IOsg46hMexk", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [1449, 1690] }, s_L42kk1EgXtI: { origin: "components/footer/footer.tsx", displayName: "footer_component", canonicalFilename: "s_l42kk1egxti", hash: "L42kk1EgXtI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [117, 878] }, s_LRxDkFa1EfU: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Image_component", canonicalFilename: "s_lrxdkfa1efu", hash: "LRxDkFa1EfU", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [31468, 35357] }, s_MYUZ0j1uLsw: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlocks_component", canonicalFilename: "s_myuz0j1ulsw", hash: "MYUZ0j1uLsw", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [21247, 23534] }, s_Nk9PlpjQm9Y: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component", canonicalFilename: "s_nk9plpjqm9y", hash: "Nk9PlpjQm9Y", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [51079, 52430] }, s_OMvvre8Ofjw: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContentVariants_component", canonicalFilename: "s_omvvre8ofjw", hash: "OMvvre8Ofjw", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [103790, 110927] }, s_Og0xL34Zbvc: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContentStyles_component", canonicalFilename: "s_og0xl34zbvc", hash: "Og0xL34Zbvc", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [89536, 90325] }, s_QHfu0Jk0asc: { origin: "routes/[...index]/index.tsx", displayName: "____index__component", canonicalFilename: "s_qhfu0jk0asc", hash: "QHfu0Jk0asc", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [1464, 1844] }, s_T0AypnadAK0: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "FragmentComponent_component", canonicalFilename: "s_t0aypnadak0", hash: "T0AypnadAK0", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [29559, 29682] }, s_TxCFOy819ag: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component", canonicalFilename: "s_txcfoy819ag", hash: "TxCFOy819ag", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [23821, 36549] }, s_UiCN4o50luE: { origin: "components/header/header.tsx", displayName: "header_component", canonicalFilename: "s_uicn4o50lue", hash: "UiCN4o50luE", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [117, 764] }, s_Uji08ORjXbE: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Embed_component", canonicalFilename: "s_uji08orjxbe", hash: "Uji08ORjXbE", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [63687, 64436] }, s_WVvggdkUPdk: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Symbol_component", canonicalFilename: "s_wvvggdkupdk", hash: "WVvggdkUPdk", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [111620, 114488] }, s_WmYC5H00wtI: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component", canonicalFilename: "s_wmyc5h00wti", hash: "WmYC5H00wtI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [36833, 38127] }, s_WyLAiKEY0TQ: { origin: "root.tsx", displayName: "root_component", canonicalFilename: "s_wylaikey0tq", hash: "WyLAiKEY0TQ", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [268, 793] }, s_ZWF9iD5WeLg: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "SectionComponent_component", canonicalFilename: "s_zwf9id5welg", hash: "ZWF9iD5WeLg", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [35790, 36249] }, s_e0ssiDXoeAM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "RouterOutlet_component", canonicalFilename: "s_e0ssidxoeam", hash: "e0ssiDXoeAM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [7931, 8645] }, s_gJoMUICXoUQ: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Button_component", canonicalFilename: "s_gjomuicxouq", hash: "gJoMUICXoUQ", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [441, 1280] }, s_hEAI0ahViXM: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContent_component", canonicalFilename: "s_heai0ahvixm", hash: "hEAI0ahViXM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [95588, 103661] }, s_hwThBdhA8rw: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "InlinedScript_component", canonicalFilename: "s_hwthbdha8rw", hash: "hwThBdhA8rw", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [41086, 41334] }, s_m0hg0zT573Q: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component", canonicalFilename: "s_m0hg0zt573q", hash: "m0hg0zT573Q", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [14572, 20539] }, s_mMbjgespiYw: { origin: "components/gauge/index.tsx", displayName: "gauge_component", canonicalFilename: "s_mmbjgespiyw", hash: "mMbjgespiYw", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [116, 1109] }, s_nRyVBtbGKc8: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderRepeatedBlock_component", canonicalFilename: "s_nryvbtbgkc8", hash: "nRyVBtbGKc8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [13966, 14447] }, s_qdcTZflYyoQ: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Video_component", canonicalFilename: "s_qdctzflyyoq", hash: "qdcTZflYyoQ", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [59873, 61359] }, s_r0t5qGxiwHA: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "BlockStyles_component", canonicalFilename: "s_r0t5qgxiwha", hash: "r0t5qGxiwHA", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [6589, 9028] }, s_uYOSy7w7Zqw: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "CustomCode_component", canonicalFilename: "s_uyosy7w7zqw", hash: "uYOSy7w7Zqw", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [66854, 67578] }, s_wce4LNCGUkk: { origin: "routes/layout.tsx", displayName: "layout_component", canonicalFilename: "s_wce4lncgukk", hash: "wce4LNCGUkk", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [181, 299] }, s_RPDJAz33WLA: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useStyles", canonicalFilename: "s_rpdjaz33wla", hash: "RPDJAz33WLA", ctxKind: "function", ctxName: "useStyles$", captures: false, parent: "s_TxCFOy819ag", loc: [23876, 23910] }, s_0XKYzaR059E: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlocks_component_useStylesScoped", canonicalFilename: "s_0xkyzar059e", hash: "0XKYzaR059E", ctxKind: "function", ctxName: "useStylesScoped$", captures: false, parent: "s_MYUZ0j1uLsw", loc: [21308, 21316] }, s_a1JZ0Q0Q2Oc: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Button_component_useStylesScoped", canonicalFilename: "s_a1jz0q0q2oc", hash: "a1JZ0Q0Q2Oc", ctxKind: "function", ctxName: "useStylesScoped$", captures: false, parent: "s_gJoMUICXoUQ", loc: [502, 510] }, s_fBMYiVf9fuU: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Image_component_useStylesScoped", canonicalFilename: "s_fbmyivf9fuu", hash: "fBMYiVf9fuU", ctxKind: "function", ctxName: "useStylesScoped$", captures: false, parent: "s_LRxDkFa1EfU", loc: [31545, 31551] }, s_s7JLZz7MCCQ: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Columns_component_useStylesScoped", canonicalFilename: "s_s7jlzz7mccq", hash: "s7JLZz7MCCQ", ctxKind: "function", ctxName: "useStylesScoped$", captures: false, parent: "s_7yLj4bxdI6c", loc: [25836, 25844] }, s_5L0V8IRw5RM: { origin: "components/counter/counter.tsx", displayName: "celebrate", canonicalFilename: "s_5l0v8irw5rm", hash: "5L0V8IRw5RM", ctxKind: "function", ctxName: "$", captures: false, parent: null, loc: [787, 1954] }, s_7wCAiJVliNE: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "createEventHandler", canonicalFilename: "s_7wcaijvline", hash: "7wCAiJVliNE", ctxKind: "function", ctxName: "createEventHandler", captures: true, parent: null, loc: [9326, 9606] }, s_A5bZC7WO00A: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "routeActionQrl_action_submit", canonicalFilename: "s_a5bzc7wo00a", hash: "A5bZC7WO00A", ctxKind: "function", ctxName: "submit", captures: true, parent: null, loc: [41964, 43598] }, s_DyVc0YBIqQU: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "spa_init", canonicalFilename: "s_dyvc0ybiqqu", hash: "DyVc0YBIqQU", ctxKind: "function", ctxName: "spaInit", captures: false, parent: null, loc: [1391, 6872] }, s_wOIPfiQ04l4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "serverQrl_stuff", canonicalFilename: "s_woipfiq04l4", hash: "wOIPfiQ04l4", ctxKind: "function", ctxName: "stuff", captures: true, parent: null, loc: [46920, 48965] }, s_01YCu72BBtA: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Image_component_webpSrcSet_useComputed", canonicalFilename: "s_01ycu72bbta", hash: "01YCu72BBtA", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_LRxDkFa1EfU", loc: [32374, 32598] }, s_2cvnb0dCzeU: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_attributes_useComputed", canonicalFilename: "s_2cvnb0dczeu", hash: "2cvnb0dCzeU", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [16697, 16882] }, s_4ZTSqMpaluI: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_useBlock_useComputed", canonicalFilename: "s_4ztsqmpalui", hash: "4ZTSqMpaluI", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [15344, 15720] }, s_60AadUGY06E: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Video_component_videoProps_useComputed", canonicalFilename: "s_60aadugy06e", hash: "60AadUGY06E", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_qdcTZflYyoQ", loc: [59949, 60386] }, s_70qR4CRbrV4: { origin: "components/counter/counter.tsx", displayName: "counter_component_setCount", canonicalFilename: "s_70qr4crbrv4", hash: "70qR4CRbrV4", ctxKind: "function", ctxName: "$", captures: true, parent: "s_CgASKt86Ilk", loc: [276, 443] }, s_7iQuBozD6Tc: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlocks_component_className_useComputed", canonicalFilename: "s_7iqubozd6tc", hash: "7iQuBozD6Tc", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_MYUZ0j1uLsw", loc: [21509, 21636] }, s_82dAQcDBUzY: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_canShowBlock_useComputed", canonicalFilename: "s_82daqcdbuzy", hash: "82dAQcDBUzY", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [15880, 16092] }, s_9Y0pQBSnHds: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "BlockStyles_component_useBlock_useComputed", canonicalFilename: "s_9y0pqbsnhds", hash: "9Y0pQBSnHds", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_r0t5qGxiwHA", loc: [6679, 7007] }, s_AOTwdXfwCqY: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_actions_useComputed", canonicalFilename: "s_aotwdxfwcqy", hash: "AOTwdXfwCqY", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [16238, 16542] }, s_BUbtvTyvVRE: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component_goto", canonicalFilename: "s_bubtvtyvvre", hash: "BUbtvTyvVRE", ctxKind: "function", ctxName: "goto", captures: false, parent: "s_WmYC5H00wtI", loc: [37248, 37326] }, s_Cw830x7OM1Q: { origin: "components/counter/counter.tsx", displayName: "counter_component_div_button_onClick_1", canonicalFilename: "s_cw830x7om1q", hash: "Cw830x7OM1Q", ctxKind: "eventHandler", ctxName: "onClick$", captures: true, parent: "s_CgASKt86Ilk", loc: [679, 710] }, s_N5bJZwtuEmI: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlocks_component_div_onKeyPress", canonicalFilename: "s_n5bjzwtuemi", hash: "N5bJZwtuEmI", ctxKind: "function", ctxName: "_jsxQ", captures: true, parent: "s_MYUZ0j1uLsw", loc: [22348, 22465] }, s_NslhinGDzrU: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_repeatItem_useComputed", canonicalFilename: "s_nslhingdzru", hash: "NslhinGDzrU", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [15055, 15202] }, s_Osdg8FnYTw4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handlePrefetch", canonicalFilename: "s_osdg8fnytw4", hash: "Osdg8FnYTw4", ctxKind: "function", ctxName: "handlePrefetch", captures: false, parent: "s_8gdLBszqbaM", loc: [38989, 39320] }, s_QhiYxJDtCJY: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "BlockStyles_component_canShowBlock_useComputed", canonicalFilename: "s_qhiyxjdtcjy", hash: "QhiYxJDtCJY", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_r0t5qGxiwHA", loc: [7151, 7385] }, s_RzhhZa265Yg: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlocks_component_div_onClick", canonicalFilename: "s_rzhhza265yg", hash: "RzhhZa265Yg", ctxKind: "function", ctxName: "_jsxQ", captures: true, parent: "s_MYUZ0j1uLsw", loc: [21798, 21915] }, s_TZMibf9Gpvw: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Image_component_srcSetToUse_useComputed", canonicalFilename: "s_tzmibf9gpvw", hash: "TZMibf9Gpvw", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_LRxDkFa1EfU", loc: [31666, 32235] }, s_ZdLsx18NYH4: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Video_component_spreadProps_useComputed", canonicalFilename: "s_zdlsx18nyh4", hash: "ZdLsx18NYH4", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_qdcTZflYyoQ", loc: [60525, 60664] }, s_adFEq2RWT9s: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Columns_component_columnsCssVars_useComputed", canonicalFilename: "s_adfeq2rwt9s", hash: "adFEq2RWT9s", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_7yLj4bxdI6c", loc: [26319, 26603] }, s_d1ZjguXclSk: { origin: "components/counter/counter.tsx", displayName: "counter_component_div_button_onClick", canonicalFilename: "s_d1zjguxclsk", hash: "d1ZjguXclSk", ctxKind: "eventHandler", ctxName: "onClick$", captures: true, parent: "s_CgASKt86Ilk", loc: [537, 568] }, s_fX0bDjeJa0E: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_goto", canonicalFilename: "s_fx0bdjeja0e", hash: "fX0bDjeJa0E", ctxKind: "function", ctxName: "goto", captures: true, parent: "s_TxCFOy819ag", loc: [25160, 26479] }, s_l4hT2V9liQc: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_childrenWithoutParentComponent_useComputed", canonicalFilename: "s_l4ht2v9liqc", hash: "l4hT2V9liQc", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [17060, 17315] }, s_nBtMPbzd1Wc: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Columns_component_columnsStyles_useComputed", canonicalFilename: "s_nbtmpbzd1wc", hash: "nBtMPbzd1Wc", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_7yLj4bxdI6c", loc: [26781, 27819] }, s_nG7I7RYG3JQ: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlocks_component_div_onMouseEnter", canonicalFilename: "s_ng7i7ryg3jq", hash: "nG7I7RYG3JQ", ctxKind: "function", ctxName: "_jsxQ", captures: true, parent: "s_MYUZ0j1uLsw", loc: [22070, 22190] }, s_p9MSze0ojs4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component_form_onSubmit", canonicalFilename: "s_p9msze0ojs4", hash: "p9MSze0ojs4", ctxKind: "function", ctxName: "_jsxS", captures: true, parent: "s_Nk9PlpjQm9Y", loc: [51386, 52083] }, s_pIf0khHUxfY: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handleClick", canonicalFilename: "s_pif0khhuxfy", hash: "pIf0khHUxfY", ctxKind: "function", ctxName: "handleClick", captures: true, parent: "s_8gdLBszqbaM", loc: [39747, 40267] }, s_qb7DMTJ9XGY: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_component_useComputed", canonicalFilename: "s_qb7dmtj9xgy", hash: "qb7DMTJ9XGY", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [14770, 14912] }, s_tWa1cp0r7XY: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderBlock_component_renderComponentProps_useComputed", canonicalFilename: "s_twa1cp0r7xy", hash: "tWa1cp0r7XY", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_m0hg0zT573Q", loc: [17523, 18025] }, s_wAetZF3ncbo: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "BlockStyles_component_css_useComputed", canonicalFilename: "s_waetzf3ncbo", hash: "wAetZF3ncbo", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_r0t5qGxiwHA", loc: [7527, 8598] }, s_wLg5o3ZkpC0: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "RenderContent_component__Fragment_div_onClick", canonicalFilename: "s_wlg5o3zkpc0", hash: "wLg5o3ZkpC0", ctxKind: "function", ctxName: "_jsxS", captures: true, parent: "s_hEAI0ahViXM", loc: [103010, 103155] }, s_yJ1jG0g5fbw: { origin: "../node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs", displayName: "Image_component_aspectRatioCss_useComputed", canonicalFilename: "s_yj1jg0g5fbw", hash: "yJ1jG0g5fbw", ctxKind: "function", ctxName: "useComputed$", captures: true, parent: "s_LRxDkFa1EfU", loc: [32757, 33035] } }, mapping: { s_02wMImzEAbk: "q-DOGQG1y-.js", s_Kulmlf9pM08: "q-BvWrGg9T.js", s_NIAWAC1bMBo: "q-BK3ffX9v.js", s_X59YMGOetns: "q-BvWrGg9T.js", s_bg7ez0XUtiM: "q-CnBssmZT.js", s_u3gn3Pj2b2s: "q-BvWrGg9T.js", s_xLCHvjhJYRM: "q-BvWrGg9T.js", s_S5QgEQZj6YE: "q-sVS3M_o8.js", s_n50dgqWW6pY: "q-BvWrGg9T.js", s_oMPs8W5ZhwE: "q-BK3ffX9v.js", s_zc1gmoEX01g: "q-CxDwXN8Y.js", s_15p0cKUxgIE: "q-Dzik2xz3.js", s_2ZLchhq7kSo: "q-C-hRPaO4.js", s_7yLj4bxdI6c: "q-v0nS8Epe.js", s_8gdLBszqbaM: "q-ZKLiVqjw.js", s_CgASKt86Ilk: "q-BL6MDd4e.js", s_FXvIDBSffO8: "q-CZVFeQBO.js", s_IOsg46hMexk: "q-Dco5O41_.js", s_L42kk1EgXtI: "q-BLMyVnnf.js", s_LRxDkFa1EfU: "q-DoIufoDu.js", s_MYUZ0j1uLsw: "q-m3-mF-AD.js", s_Nk9PlpjQm9Y: "q-C-cF41ii.js", s_OMvvre8Ofjw: "q-CxDwXN8Y.js", s_Og0xL34Zbvc: "q-B8lV_OK1.js", s_QHfu0Jk0asc: "q-B71jFu98.js", s_T0AypnadAK0: "q-Ci-Xds8h.js", s_TxCFOy819ag: "q-DOGQG1y-.js", s_UiCN4o50luE: "q-BYNzlLCk.js", s_Uji08ORjXbE: "q-CnBssmZT.js", s_WVvggdkUPdk: "q-BK3ffX9v.js", s_WmYC5H00wtI: "q-BJgKTsiG.js", s_WyLAiKEY0TQ: "q-BNaAmhnj.js", s_ZWF9iD5WeLg: "q-D-VFEmIF.js", s_e0ssiDXoeAM: "q-BrEr_Aqs.js", s_gJoMUICXoUQ: "q-CIoztZ-j.js", s_hEAI0ahViXM: "q-BvWrGg9T.js", s_hwThBdhA8rw: "q-DFJj2thG.js", s_m0hg0zT573Q: "q-BwNraytw.js", s_mMbjgespiYw: "q-BJuRGl9X.js", s_nRyVBtbGKc8: "q-djPyCj7Y.js", s_qdcTZflYyoQ: "q-DC2RyvtW.js", s_r0t5qGxiwHA: "q-Da_VwzZn.js", s_uYOSy7w7Zqw: "q-sVS3M_o8.js", s_wce4LNCGUkk: "q-BM0_D623.js", s_RPDJAz33WLA: "q-DOGQG1y-.js", s_0XKYzaR059E: "q-m3-mF-AD.js", s_a1JZ0Q0Q2Oc: "q-CIoztZ-j.js", s_fBMYiVf9fuU: "q-DoIufoDu.js", s_s7JLZz7MCCQ: "q-v0nS8Epe.js", s_5L0V8IRw5RM: "q-DV8rqB8Q.js", s_7wCAiJVliNE: "q-DXuSWCNA.js", s_A5bZC7WO00A: "q-DbkpLaZp.js", s_DyVc0YBIqQU: "q-fJkQnue_.js", s_wOIPfiQ04l4: "q-CGZsqw1f.js", s_01YCu72BBtA: "q-DoIufoDu.js", s_2cvnb0dCzeU: "q-BwNraytw.js", s_4ZTSqMpaluI: "q-BwNraytw.js", s_60AadUGY06E: "q-DC2RyvtW.js", s_70qR4CRbrV4: "q-BL6MDd4e.js", s_7iQuBozD6Tc: "q-m3-mF-AD.js", s_82dAQcDBUzY: "q-BwNraytw.js", s_9Y0pQBSnHds: "q-Da_VwzZn.js", s_AOTwdXfwCqY: "q-BwNraytw.js", s_BUbtvTyvVRE: "q-BJgKTsiG.js", s_Cw830x7OM1Q: "q-BL6MDd4e.js", s_N5bJZwtuEmI: "q-m3-mF-AD.js", s_NslhinGDzrU: "q-BwNraytw.js", s_Osdg8FnYTw4: "q-ZKLiVqjw.js", s_QhiYxJDtCJY: "q-Da_VwzZn.js", s_RzhhZa265Yg: "q-m3-mF-AD.js", s_TZMibf9Gpvw: "q-DoIufoDu.js", s_ZdLsx18NYH4: "q-DC2RyvtW.js", s_adFEq2RWT9s: "q-v0nS8Epe.js", s_d1ZjguXclSk: "q-BL6MDd4e.js", s_fX0bDjeJa0E: "q-DOGQG1y-.js", s_l4hT2V9liQc: "q-BwNraytw.js", s_nBtMPbzd1Wc: "q-v0nS8Epe.js", s_nG7I7RYG3JQ: "q-m3-mF-AD.js", s_p9MSze0ojs4: "q-C-cF41ii.js", s_pIf0khHUxfY: "q-ZKLiVqjw.js", s_qb7DMTJ9XGY: "q-BwNraytw.js", s_tWa1cp0r7XY: "q-BwNraytw.js", s_wAetZF3ncbo: "q-Da_VwzZn.js", s_wLg5o3ZkpC0: "q-BvWrGg9T.js", s_yJ1jG0g5fbw: "q-DoIufoDu.js" }, bundles: { "q-B3uTM159.js": { size: 9027, imports: ["q-BymVfO52.js"], dynamicImports: ["q-BrEr_Aqs.js", "q-DOGQG1y-.js", "q-fJkQnue_.js"], origins: ["@qwik-city-sw-register", "node_modules/@builder.io/qwik-city/index.qwik.mjs"] }, "q-B71jFu98.js": { size: 539, imports: ["q-B3uTM159.js", "q-BqPSL4ly.js", "q-BymVfO52.js", "q-CQufTkwH.js", "q-DivWgGUo.js"], origins: ["src/components/builder-registry.ts", "src/entry_____index_.js", "src/s_qhfu0jk0asc.js"], symbols: ["s_QHfu0Jk0asc"] }, "q-B8lV_OK1.js": { size: 710, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_RenderContentStyles.js", "src/s_og0xl34zbvc.js"], symbols: ["s_Og0xL34Zbvc"] }, "q-BJgKTsiG.js": { size: 996, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], origins: ["src/entry_QwikCityMockProvider.js", "src/s_bubtvtyvvre.js", "src/s_wmyc5h00wti.js"], symbols: ["s_BUbtvTyvVRE", "s_WmYC5H00wtI"] }, "q-BJuRGl9X.js": { size: 956, imports: ["q-BymVfO52.js"], origins: ["src/components/gauge/gauge.module.css", "src/entry_gauge.js", "src/s_mmbjgespiyw.js"], symbols: ["s_mMbjgespiYw"] }, "q-BK3ffX9v.js": { size: 2253, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_Symbol1.js", "src/s_niawac1bmbo.js", "src/s_omps8w5zhwe.js", "src/s_wvvggdkupdk.js"], symbols: ["s_NIAWAC1bMBo", "s_oMPs8W5ZhwE", "s_WVvggdkUPdk"] }, "q-BL6MDd4e.js": { size: 1356, imports: ["q-BymVfO52.js", "q-DivWgGUo.js"], dynamicImports: ["q-BJuRGl9X.js"], origins: ["src/components/counter/counter.module.css", "src/components/gauge/index.tsx", "src/entry_counter.js", "src/s_70qr4crbrv4.js", "src/s_cgaskt86ilk.js", "src/s_cw830x7om1q.js", "src/s_d1zjguxclsk.js"], symbols: ["s_70qR4CRbrV4", "s_CgASKt86Ilk", "s_Cw830x7OM1Q", "s_d1ZjguXclSk"] }, "q-BLMyVnnf.js": { size: 1020, imports: ["q-BymVfO52.js"], origins: ["src/components/footer/footer.module.css", "src/entry_footer.js", "src/s_l42kk1egxti.js"], symbols: ["s_L42kk1EgXtI"] }, "q-BM0_D623.js": { size: 571, imports: ["q-BymVfO52.js"], dynamicImports: ["q-BLMyVnnf.js", "q-BYNzlLCk.js"], origins: ["src/components/footer/footer.tsx", "src/components/header/header.tsx", "src/entry_layout.js", "src/s_wce4lncgukk.js"], symbols: ["s_wce4LNCGUkk"] }, "q-BNaAmhnj.js": { size: 673, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], dynamicImports: ["q-C-hRPaO4.js"], origins: ["src/components/router-head/router-head.tsx", "src/entry_root.js", "src/s_wylaikey0tq.js"], symbols: ["s_WyLAiKEY0TQ"] }, "q-Bq36Wx9q.js": { size: 2539, origins: ["node_modules/@builder.io/qwik-city/service-worker.mjs", "src/routes/service-worker.ts"] }, "q-BqPSL4ly.js": { size: 39004, imports: ["q-BymVfO52.js"], dynamicImports: ["q-B8lV_OK1.js", "q-BK3ffX9v.js", "q-BvWrGg9T.js", "q-BwNraytw.js", "q-Ci-Xds8h.js", "q-CIoztZ-j.js", "q-CnBssmZT.js", "q-CxDwXN8Y.js", "q-CZVFeQBO.js", "q-D-VFEmIF.js", "q-Da_VwzZn.js", "q-DC2RyvtW.js", "q-Dco5O41_.js", "q-DFJj2thG.js", "q-djPyCj7Y.js", "q-DoIufoDu.js", "q-DXuSWCNA.js", "q-Dzik2xz3.js", "q-m3-mF-AD.js", "q-sVS3M_o8.js", "q-v0nS8Epe.js"], origins: ["node_modules/@builder.io/sdk-qwik/lib/index.qwik.mjs"] }, "q-BrEr_Aqs.js": { size: 467, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], origins: ["src/entry_RouterOutlet.js", "src/s_e0ssidxoeam.js"], symbols: ["s_e0ssiDXoeAM"] }, "q-BvWrGg9T.js": { size: 5454, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_RenderContent.js", "src/s_heai0ahvixm.js", "src/s_kulmlf9pm08.js", "src/s_n50dgqww6py.js", "src/s_u3gn3pj2b2s.js", "src/s_wlg5o3zkpc0.js", "src/s_x59ymgoetns.js", "src/s_xlchvjhjyrm.js"], symbols: ["s_hEAI0ahViXM", "s_Kulmlf9pM08", "s_n50dgqWW6pY", "s_u3gn3Pj2b2s", "s_wLg5o3ZkpC0", "s_X59YMGOetns", "s_xLCHvjhJYRM"] }, "q-BwNraytw.js": { size: 3386, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_RenderBlock.js", "src/s_2cvnb0dczeu.js", "src/s_4ztsqmpalui.js", "src/s_82daqcdbuzy.js", "src/s_aotwdxfwcqy.js", "src/s_l4ht2v9liqc.js", "src/s_m0hg0zt573q.js", "src/s_nslhingdzru.js", "src/s_qb7dmtj9xgy.js", "src/s_twa1cp0r7xy.js"], symbols: ["s_2cvnb0dCzeU", "s_4ZTSqMpaluI", "s_82dAQcDBUzY", "s_AOTwdXfwCqY", "s_l4hT2V9liQc", "s_m0hg0zT573Q", "s_NslhinGDzrU", "s_qb7DMTJ9XGY", "s_tWa1cp0r7XY"] }, "q-BymVfO52.js": { size: 52383, origins: ["node_modules/@builder.io/qwik/core.min.mjs"] }, "q-BYNzlLCk.js": { size: 791, imports: ["q-BymVfO52.js"], origins: ["src/components/header/header.module.css", "src/entry_header.js", "src/s_uicn4o50lue.js"], symbols: ["s_UiCN4o50luE"] }, "q-C-cF41ii.js": { size: 1217, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], origins: ["src/entry_GetForm.js", "src/s_nk9plpjqm9y.js", "src/s_p9msze0ojs4.js"], symbols: ["s_Nk9PlpjQm9Y", "s_p9MSze0ojs4"] }, "q-C-hRPaO4.js": { size: 671, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], origins: ["src/entry_RouterHead.js", "src/s_2zlchhq7kso.js"], symbols: ["s_2ZLchhq7kSo"] }, "q-CGZsqw1f.js": { size: 895, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], origins: ["src/entry_serverQrl.js", "src/s_woipfiq04l4.js"], symbols: ["s_wOIPfiQ04l4"] }, "q-Ci-Xds8h.js": { size: 137, imports: ["q-BymVfO52.js"], origins: ["src/entry_FragmentComponent.js", "src/s_t0aypnadak0.js"], symbols: ["s_T0AypnadAK0"] }, "q-CIoztZ-j.js": { size: 904, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_Button.js", "src/s_a1jz0q0q2oc.js", "src/s_gjomuicxouq.js"], symbols: ["s_a1JZ0Q0Q2Oc", "s_gJoMUICXoUQ"] }, "q-CnBssmZT.js": { size: 887, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_Embed.js", "src/s_bg7ez0xutim.js", "src/s_uji08orjxbe.js"], symbols: ["s_bg7ez0XUtiM", "s_Uji08ORjXbE"] }, "q-CQufTkwH.js": { size: 543, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], dynamicImports: ["q-B71jFu98.js"], origins: ["src/routes/[...index]/index.tsx"] }, "q-CxDwXN8Y.js": { size: 3877, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_RenderContentVariants.js", "src/s_omvvre8ofjw.js", "src/s_zc1gmoex01g.js"], symbols: ["s_OMvvre8Ofjw", "s_zc1gmoEX01g"] }, "q-CZVFeQBO.js": { size: 459, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_ImgComponent.js", "src/s_fxvidbsffo8.js"], symbols: ["s_FXvIDBSffO8"] }, "q-D-VFEmIF.js": { size: 359, imports: ["q-BymVfO52.js"], origins: ["src/entry_SectionComponent.js", "src/s_zwf9id5welg.js"], symbols: ["s_ZWF9iD5WeLg"] }, "q-Da_VwzZn.js": { size: 1688, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_BlockStyles.js", "src/s_9y0pqbsnhds.js", "src/s_qhiyxjdtcjy.js", "src/s_r0t5qgxiwha.js", "src/s_waetzf3ncbo.js"], symbols: ["s_9Y0pQBSnHds", "s_QhiYxJDtCJY", "s_r0t5qGxiwHA", "s_wAetZF3ncbo"] }, "q-DbkpLaZp.js": { size: 751, imports: ["q-BymVfO52.js"], origins: ["src/entry_routeActionQrl.js", "src/s_a5bzc7wo00a.js"], symbols: ["s_A5bZC7WO00A"] }, "q-DC2RyvtW.js": { size: 1304, imports: ["q-BymVfO52.js"], origins: ["src/entry_Video.js", "src/s_60aadugy06e.js", "src/s_qdctzflyyoq.js", "src/s_zdlsx18nyh4.js"], symbols: ["s_60AadUGY06E", "s_qdcTZflYyoQ", "s_ZdLsx18NYH4"] }, "q-Dco5O41_.js": { size: 195, imports: ["q-BymVfO52.js"], origins: ["src/entry_InlinedStyles.js", "src/s_iosg46hmexk.js"], symbols: ["s_IOsg46hMexk"] }, "q-DFJj2thG.js": { size: 202, imports: ["q-BymVfO52.js"], origins: ["src/entry_InlinedScript.js", "src/s_hwthbdha8rw.js"], symbols: ["s_hwThBdhA8rw"] }, "q-DivWgGUo.js": { size: 418, imports: ["q-BymVfO52.js"], dynamicImports: ["q-BL6MDd4e.js", "q-DV8rqB8Q.js"], origins: ["src/components/counter/counter.tsx"] }, "q-djPyCj7Y.js": { size: 355, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_RenderRepeatedBlock.js", "src/s_nryvbtbgkc8.js"], symbols: ["s_nRyVBtbGKc8"] }, "q-DOGQG1y-.js": { size: 5813, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], dynamicImports: ["q-CQufTkwH.js", "q-DXamIIuS.js", "q-VEUZ56x5.js"], origins: ["@qwik-city-plan", "src/entry_QwikCityProvider.js", "src/s_02wmimzeabk.js", "src/s_fx0bdjeja0e.js", "src/s_rpdjaz33wla.js", "src/s_txcfoy819ag.js"], symbols: ["s_02wMImzEAbk", "s_fX0bDjeJa0E", "s_RPDJAz33WLA", "s_TxCFOy819ag"] }, "q-DoIufoDu.js": { size: 2793, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_Image.js", "src/s_01ycu72bbta.js", "src/s_fbmyivf9fuu.js", "src/s_lrxdkfa1efu.js", "src/s_tzmibf9gpvw.js", "src/s_yj1jg0g5fbw.js"], symbols: ["s_01YCu72BBtA", "s_fBMYiVf9fuU", "s_LRxDkFa1EfU", "s_TZMibf9Gpvw", "s_yJ1jG0g5fbw"] }, "q-DqsHdNF8.js": { size: 339, imports: ["q-BymVfO52.js"], dynamicImports: ["q-BNaAmhnj.js"], origins: ["src/global.css", "src/root.tsx"] }, "q-DV8rqB8Q.js": { size: 740, imports: ["q-BymVfO52.js"], origins: ["src/entry_celebrate.js", "src/s_5l0v8irw5rm.js"], symbols: ["s_5L0V8IRw5RM"] }, "q-DXamIIuS.js": { size: 339, imports: ["q-BymVfO52.js"], dynamicImports: ["q-BM0_D623.js"], origins: ["src/routes/layout.tsx"] }, "q-DXuSWCNA.js": { size: 248, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_createEventHandler.js", "src/s_7wcaijvline.js"], symbols: ["s_7wCAiJVliNE"] }, "q-Dzik2xz3.js": { size: 261, imports: ["q-BymVfO52.js"], origins: ["src/entry_Text.js", "src/s_15p0ckuxgie.js"], symbols: ["s_15p0cKUxgIE"] }, "q-fJkQnue_.js": { size: 2286, origins: ["src/entry_spaInit.js", "src/s_dyvc0ybiqqu.js"], symbols: ["s_DyVc0YBIqQU"] }, "q-m3-mF-AD.js": { size: 1785, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_RenderBlocks.js", "src/s_0xkyzar059e.js", "src/s_7iqubozd6tc.js", "src/s_myuz0j1ulsw.js", "src/s_n5bjzwtuemi.js", "src/s_ng7i7ryg3jq.js", "src/s_rzhhza265yg.js"], symbols: ["s_0XKYzaR059E", "s_7iQuBozD6Tc", "s_MYUZ0j1uLsw", "s_N5bJZwtuEmI", "s_nG7I7RYG3JQ", "s_RzhhZa265Yg"] }, "q-sVS3M_o8.js": { size: 900, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_CustomCode.js", "src/s_s5qgeqzj6ye.js", "src/s_uyosy7w7zqw.js"], symbols: ["s_S5QgEQZj6YE", "s_uYOSy7w7Zqw"] }, "q-v0nS8Epe.js": { size: 2734, imports: ["q-BqPSL4ly.js", "q-BymVfO52.js"], origins: ["src/entry_Columns.js", "src/s_7ylj4bxdi6c.js", "src/s_adfeq2rwt9s.js", "src/s_nbtmpbzd1wc.js", "src/s_s7jlzz7mccq.js"], symbols: ["s_7yLj4bxdI6c", "s_adFEq2RWT9s", "s_nBtMPbzd1Wc", "s_s7JLZz7MCCQ"] }, "q-VEUZ56x5.js": { size: 322, imports: ["q-BymVfO52.js"], dynamicImports: ["q-Bq36Wx9q.js"], origins: ["@qwik-city-entries"] }, "q-ZKLiVqjw.js": { size: 1786, imports: ["q-B3uTM159.js", "q-BymVfO52.js"], origins: ["src/entry_Link.js", "src/s_8gdlbszqbam.js", "src/s_osdg8fnytw4.js", "src/s_pif0khhuxfy.js"], symbols: ["s_8gdLBszqbaM", "s_Osdg8FnYTw4", "s_pIf0khHUxfY"] } }, injections: [{ tag: "style", location: "head", attributes: { "data-src": "/build/q-HHJzIdOp.css", dangerouslySetInnerHTML: `._wrapper_u67uf_1{display:flex;align-items:center;justify-content:center;gap:20px}._button_u67uf_8{background:var(--qwik-dirty-black);border:none;border-radius:8px;color:#fff;cursor:pointer;padding:10px;text-align:center;font-weight:700;font-size:2em;min-width:50px}._button_u67uf_8:hover{background:var(--qwik-dark-blue)}body,h1,h2,h3,p,ul,li{margin:0;padding:0}*{box-sizing:border-box}footer{background-color:var(--footer-background);padding:20px;text-align:center;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";color:var(--text-color)}._privacyTerms_k8fa2_23,._contactInfo_k8fa2_23,._madeBy_k8fa2_23{margin-bottom:15px}._link_k8fa2_27{color:var(--qwik-light-blue);text-decoration:none}._separator_k8fa2_32{margin:0 10px;color:var(--qwik-dirty-black)}@media (max-width: 600px){._privacyTerms_k8fa2_23,._contactInfo_k8fa2_23,._madeBy_k8fa2_23{margin-bottom:10px}}._wrapper_ypdzw_1{position:relative}._gauge_ypdzw_5{width:100%;min-width:100px}._value_ypdzw_10{position:absolute;top:50%;left:50%;color:#fff;font-size:3rem;transform:translate(-50%,-50%);text-align:center}circle{transition:all .5s ease-in-out}._wrapper_sbrel_1{display:flex;align-items:center;justify-content:space-between;margin:0 auto;padding:30px 40px}._logo_sbrel_9{display:inline-block}._logo_sbrel_9 a{display:block}._header_sbrel_16{background-color:var(--header-background)}._header_sbrel_16 ul{margin:0;padding:0;list-style:none;display:flex;gap:30px}._header_sbrel_16 li{display:none;margin:0;padding:0;font-size:.8rem}._header_sbrel_16 li a{color:#fff;display:inline-block;padding:0;text-decoration:none}._header_sbrel_16 li a:hover{color:var(--qwik-light-blue)}@media (min-width: 450px){._header_sbrel_16 li{display:inline-block}}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--text-color: #ffffff;--main-background: #1c224a;--header-background: var(--main-background);--footer-background: #0d0c25}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";background:var(--footer-background)}body{padding:0;margin:0;color:var(--text-color);line-height:inherit}main{background:var(--main-background)}h1,h2,h3{color:#fff;margin:0}h1{font-size:3.2rem;text-align:center}h1 .highlight,h3 .highlight{color:var(--qwik-light-blue)}h2{font-weight:400;font-size:2.4rem}h2 .highlight{font-weight:700}h3{font-size:2rem}@media screen and (min-width: 768px){h1{font-size:5rem}h2{font-size:3.4rem}h3{font-size:3rem}}a{text-decoration:none;color:var(--qwik-light-blue)}a:hover{text-decoration:underline;color:var(--qwik-light-blue)}code{background:#e6e6e64d;border-radius:4px;padding:2px 6px}ul{margin:0;padding-left:20px}.builder-footer a{color:var(--text-color);text-decoration:none}.builder-footer a:hover{color:var(--qwik-light-blue);text-decoration:underline}
` } }], version: "1", options: { target: "client", buildMode: "production", entryStrategy: { type: "smart" } }, platform: { qwik: "1.4.5", vite: "", rollup: "4.12.0", env: "node", os: "win32", node: "20.10.0" } };
var Ye2 = () => {
  const e = mp(), n = hp();
  return T(H, { children: [_("title", null, null, e.title, 1, null), _("link", null, { href: S((s) => s.url.href, [n], "p0.url.href"), rel: "canonical" }, null, 3, null), _("meta", null, { content: "width=device-width, initial-scale=1.0", name: "viewport" }, null, 3, null), _("link", null, { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }, null, 3, null), e.meta.map((s) => He("meta", { ...s }, null, 0, s.key)), e.links.map((s) => He("link", { ...s }, null, 0, s.key)), e.styles.map((s) => He("style", { ...s.props, dangerouslySetInnerHTML: pr(s, "style") }, null, 0, s.key))] }, 1, "d0_0");
};
var Ue2 = P(x(Ye2, "s_2ZLchhq7kSo"));
var Ze2 = () => T(gp, { children: [_("head", null, null, [_("meta", null, { charSet: "utf-8" }, null, 3, null), _("link", null, { href: "/manifest.json", rel: "manifest" }, null, 3, null), T(Ue2, null, 3, "0V_0"), T(yp, null, 3, "0V_1")], 1, null), _("body", null, { lang: "en" }, T(pp, null, 3, "0V_2"), 1, null)] }, 1, "0V_3");
var Pe2 = P(x(Ze2, "s_WyLAiKEY0TQ"));
function Ge2(e) {
  return De2(T(Pe2, null, 3, "i1_0"), { manifest: Qe2, ...e, containerAttributes: { lang: "en-us", ...e.containerAttributes } });
}
var re2 = class extends Error {
  constructor(e, t) {
    super(t), this.status = e;
  }
};
function ke3(e, t) {
  let n = "Server Error";
  return t != null && (typeof t.message == "string" ? n = t.message : n = String(t)), "<html>" + ae2(e, n) + "</html>";
}
function ae2(e, t) {
  typeof e != "number" && (e = 500), typeof t == "string" ? t = Me3(t) : t = "";
  const n = typeof t == "string" ? "600px" : "300px", r = e >= 500 ? We2 : De3;
  return `
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`;
}
var Pe3 = /[&<>]/g;
var Me3 = (e) => e.replace(Pe3, (t) => {
  switch (t) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    default:
      return "";
  }
});
var De3 = "#006ce9";
var We2 = "#713fc2";
var Oe3 = { lax: "Lax", Lax: "Lax", None: "None", none: "None", strict: "Strict", Strict: "Strict" };
var Ne3 = { seconds: 1, minutes: 1 * 60, hours: 1 * 60 * 60, days: 1 * 60 * 60 * 24, weeks: 1 * 60 * 60 * 24 * 7 };
var $e2 = (e, t, n) => {
  const r = [`${e}=${t}`];
  typeof n.domain == "string" && r.push(`Domain=${n.domain}`), typeof n.maxAge == "number" ? r.push(`Max-Age=${n.maxAge}`) : Array.isArray(n.maxAge) ? r.push(`Max-Age=${n.maxAge[0] * Ne3[n.maxAge[1]]}`) : typeof n.expires == "number" || typeof n.expires == "string" ? r.push(`Expires=${n.expires}`) : n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.httpOnly && r.push("HttpOnly"), typeof n.path == "string" && r.push(`Path=${n.path}`);
  const a = Le3(n.sameSite);
  return a && r.push(`SameSite=${a}`), n.secure && r.push("Secure"), r.join("; ");
};
function K2(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
var ve3 = (e) => {
  const t = {};
  if (typeof e == "string" && e !== "") {
    const n = e.split(";");
    for (const r of n) {
      const a = r.indexOf("=");
      a !== -1 && (t[K2(r.slice(0, a).trim())] = K2(r.slice(a + 1).trim()));
    }
  }
  return t;
};
function Le3(e) {
  if (e === true)
    return "Strict";
  if (e === false)
    return "None";
  if (e)
    return Oe3[e];
}
var k = Symbol("request-cookies");
var F2 = Symbol("response-cookies");
var A = Symbol("live-cookies");
var ie2;
var se2;
var He2 = class {
  constructor(e) {
    this[ie2] = {}, this[se2] = {}, this[k] = ve3(e), this[A] = { ...this[k] };
  }
  get(e, t = true) {
    const n = this[t ? A : k][e];
    return n ? { value: n, json() {
      return JSON.parse(n);
    }, number() {
      return Number(n);
    } } : null;
  }
  getAll(e = true) {
    return Object.keys(this[e ? A : k]).reduce((t, n) => (t[n] = this.get(n), t), {});
  }
  has(e, t = true) {
    return !!this[t ? A : k][e];
  }
  set(e, t, n = {}) {
    this[A][e] = typeof t == "string" ? t : JSON.stringify(t);
    const r = typeof t == "string" ? t : encodeURIComponent(JSON.stringify(t));
    this[F2][e] = $e2(e, r, n);
  }
  delete(e, t) {
    this.set(e, "deleted", { ...t, maxAge: 0 }), this[A][e] = null;
  }
  headers() {
    return Object.values(this[F2]);
  }
};
ie2 = F2, se2 = A;
var Ie3 = (e, t) => {
  const n = t.headers();
  if (n.length > 0) {
    const r = new Headers(e);
    for (const a of n)
      r.append("Set-Cookie", a);
    return r;
  }
  return e;
};
var j2 = class {
};
var W2 = class extends j2 {
};
var X2 = /* @__PURE__ */ new WeakMap();
var G3 = "qaction";
var Qe3 = "qfunc";
function Ue3(e) {
  const { url: t, params: n, request: r, status: a, locale: i } = e, s = {};
  r.headers.forEach((w, y) => s[y] = w);
  const o = e.sharedMap.get(L), l = e.sharedMap.get(he3), c = e.sharedMap.get(de2), d = e.sharedMap.get(nt2), h = e.request.headers, m = new URL(t.pathname + t.search, t), u = h.get("X-Forwarded-Host"), g2 = h.get("X-Forwarded-Proto");
  return u && (m.port = "", m.host = u), g2 && (m.protocol = g2), { url: m.href, requestHeaders: s, locale: i(), nonce: d, containerAttributes: { "q:route": c }, qwikcity: { routeName: c, ev: e, params: { ...n }, loadedRoute: at2(e), response: { status: a(), loaders: H3(e), action: o, formData: l } } };
}
var ze3 = (e, t, n, r, a) => {
  const i = [], s = [], o = [], l = !!(t && Ge3(t[2]));
  if (e && J3(i, s, o, e, l, n), t) {
    const c = t[0];
    r && (n === "POST" || n === "PUT" || n === "PATCH" || n === "DELETE") && o.unshift(Je2), l && (n === "POST" && o.push(Be3), o.push(Ke3), o.push(Ze3)), o.push(Ye3), J3(i, s, o, t[2], l, n), l && (o.push((d) => {
      d.sharedMap.set(de2, c);
    }), o.push(Fe3(i, s)), o.push(a));
  }
  return o;
};
var J3 = (e, t, n, r, a, i) => {
  for (const s of r) {
    typeof s.onRequest == "function" ? n.push(s.onRequest) : Array.isArray(s.onRequest) && n.push(...s.onRequest);
    let o;
    switch (i) {
      case "GET": {
        o = s.onGet;
        break;
      }
      case "POST": {
        o = s.onPost;
        break;
      }
      case "PUT": {
        o = s.onPut;
        break;
      }
      case "PATCH": {
        o = s.onPatch;
        break;
      }
      case "DELETE": {
        o = s.onDelete;
        break;
      }
      case "OPTIONS": {
        o = s.onOptions;
        break;
      }
      case "HEAD": {
        o = s.onHead;
        break;
      }
    }
    if (typeof o == "function" ? n.push(o) : Array.isArray(o) && n.push(...o), a) {
      const l = Object.values(s).filter((d) => V2(d, "server_loader"));
      e.push(...l);
      const c = Object.values(s).filter((d) => V2(d, "server_action"));
      t.push(...c);
    }
  }
};
var V2 = (e, t) => e && typeof e == "function" && e.__brand === t;
function Fe3(e, t) {
  return async (n) => {
    if (n.headersSent) {
      n.exit();
      return;
    }
    const { method: r } = n, a = H3(n), i = I(n) === "dev", s = n[v2];
    if (i && r === "GET" && n.query.has(G3) && console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`), r === "POST") {
      const o = n.query.get(G3);
      if (o) {
        const l = globalThis._qwikActionsMap, c = t.find((d) => d.__id === o) ?? (l == null ? void 0 : l.get(o));
        if (c) {
          n.sharedMap.set(L, o);
          const d = await n.parseBody();
          if (!d || typeof d != "object")
            throw new Error("Expected request data to be an object");
          const h = await Y2(n, c.__validators, d, i);
          if (!h.success)
            a[o] = n.fail(h.status ?? 500, h.error);
          else {
            const m = i ? await N3(n, c.__qrl.getSymbol().split("_", 1)[0], () => c.__qrl.call(n, h.data, n)) : await c.__qrl.call(n, h.data, n);
            i && O(s, m, c.__qrl), a[o] = m;
          }
        }
      }
    }
    e.length > 0 && await Promise.all(e.map((o) => {
      const l = o.__id;
      return a[l] = Y2(n, o.__validators, void 0, i).then((c) => c.success ? i ? N3(n, o.__qrl.getSymbol().split("_", 1)[0], () => o.__qrl.call(n, n)) : o.__qrl.call(n, n) : n.fail(c.status ?? 500, c.error)).then((c) => (typeof c == "function" ? a[l] = c() : (i && O(s, c, o.__qrl), a[l] = c), c));
    }));
  };
}
async function Y2(e, t, n, r) {
  let a = { success: true, data: n };
  if (t)
    for (const i of t)
      if (r ? a = await N3(e, "validator$", () => i.validate(e, n)) : a = await i.validate(e, n), a.success)
        n = a.data;
      else
        return a;
  return a;
}
function je3(e) {
  return e ? typeof e == "object" && Symbol.asyncIterator in e : false;
}
async function Be3(e) {
  const t = e.query.get(Qe3);
  if (t && e.request.headers.get("X-QRL") === t && e.request.headers.get("Content-Type") === "application/qwik-json") {
    e.exit();
    const n = I(e) === "dev", r = e[v2], a = await e.parseBody();
    if (Array.isArray(a)) {
      const [i, ...s] = a;
      if (Xe2(i) && i.getHash() === t) {
        let o;
        try {
          n ? o = await N3(e, `server_${i.getSymbol()}`, () => i.apply(e, s)) : o = await i.apply(e, s);
        } catch (l) {
          e.headers.set("Content-Type", "application/qwik-json"), e.send(500, await r._serializeData(l, true));
          return;
        }
        if (je3(o)) {
          e.headers.set("Content-Type", "text/qwik-json-stream");
          const c = e.getWritableStream().getWriter();
          for await (const d of o) {
            n && O(r, d, i);
            const h = await r._serializeData(d, true);
            if (e.signal.aborted)
              break;
            await c.write($.encode(`${h}
`));
          }
          c.close();
        } else {
          O(r, o, i), e.headers.set("Content-Type", "application/qwik-json");
          const l = await r._serializeData(o, true);
          e.send(200, l);
        }
        return;
      }
    }
    throw e.error(500, "Invalid request");
  }
}
function Ke3(e) {
  const t = B2(e), { basePathname: n, pathname: r, url: a, sharedMap: i } = e;
  if (!i.has(P2) && r !== n && !r.endsWith(".html")) {
    if (t) {
      if (!r.endsWith("/"))
        throw e.redirect(302, r + "/" + a.search);
    } else if (r.endsWith("/"))
      throw e.redirect(302, r.slice(0, r.length - 1) + a.search);
  }
}
function O(e, t, n) {
  try {
    e._verifySerializable(t, void 0);
  } catch (r) {
    throw r instanceof Error && n.dev && (r.loc = n.dev), r;
  }
}
var Xe2 = (e) => typeof e == "function" && typeof e.getSymbol == "function";
function Ge3(e) {
  const t = e[e.length - 1];
  return t && typeof t.default == "function";
}
function oe2(e, t) {
  return e = new URL(e), e.pathname.endsWith(x2) && (e.pathname = e.pathname.slice(0, -x2.length)), t ? e.pathname.endsWith("/") || (e.pathname += "/") : e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)), e.toString().substring(e.origin.length);
}
var $ = new TextEncoder();
function Je2(e) {
  if (Ee3(e.request.headers, "application/x-www-form-urlencoded", "multipart/form-data", "text/plain")) {
    const n = e.request.headers.get("origin"), r = e.url.origin;
    if (n !== r)
      throw e.error(403, `CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${r}".`);
  }
}
function Ve3(e) {
  return async (t) => {
    if (t.headersSent || t.sharedMap.has(P2))
      return;
    t.request.headers.forEach((h, m) => h);
    const r = t.headers;
    r.has("Content-Type") || r.set("Content-Type", "text/html; charset=utf-8");
    const a = B2(t), { readable: i, writable: s } = new TextEncoderStream(), o = t.getWritableStream(), l = i.pipeTo(o, { preventClose: true }), c = s.getWriter(), d = t.status();
    try {
      const h = I(t) === "static", m = Ue3(t), u = await e({ base: t.basePathname + "build/", stream: c, serverData: m, containerAttributes: { "q:render": h ? "static" : "", ...m.containerAttributes } }), g2 = { loaders: H3(t), action: t.sharedMap.get(L), status: d !== 200 ? d : 200, href: oe2(t.url, a) };
      typeof u.html == "string" && await c.write(u.html), t.sharedMap.set("qData", g2);
    } finally {
      await c.ready, await c.close(), await l;
    }
    await o.close();
  };
}
async function Ye3(e) {
  if (e.sharedMap.has(P2)) {
    try {
      await e.next();
    } catch (i) {
      if (!(i instanceof W2))
        throw i;
    }
    if (e.headersSent)
      return;
    const n = e.status(), r = e.headers.get("Location");
    if (n >= 301 && n <= 308 && r) {
      const i = qe2(r);
      if (i) {
        e.headers.set("Location", i), e.getWritableStream().close();
        return;
      } else
        e.status(200), e.headers.delete("Location");
    }
  }
}
async function Ze3(e) {
  if (e.sharedMap.has(P2)) {
    if (await e.next(), e.headersSent || e.exited)
      return;
    const n = e.status(), r = e.headers.get("Location"), a = B2(e);
    e.request.headers.forEach((c, d) => c), e.headers.set("Content-Type", "application/json; charset=utf-8");
    const i = { loaders: H3(e), action: e.sharedMap.get(L), status: n !== 200 ? n : 200, href: oe2(e.url, a), redirect: r ?? void 0 }, s = e.getWritableStream().getWriter(), l = await e[v2]._serializeData(i, true);
    s.write($.encode(l)), e.sharedMap.set("qData", i), s.close();
  }
}
function qe2(e) {
  if (e.startsWith("/")) {
    const t = x2, n = new URL(e, "http://localhost");
    return (n.pathname.endsWith("/") ? n.pathname.slice(0, -1) : n.pathname) + (t.startsWith("/") ? "" : "/") + t + n.search;
  } else
    return;
}
function Z() {
  return typeof performance < "u" ? performance.now() : 0;
}
async function N3(e, t, n) {
  const r = Z();
  try {
    return await n();
  } finally {
    const a = Z() - r;
    let i = e.sharedMap.get("@serverTiming");
    i || e.sharedMap.set("@serverTiming", i = []), i.push([t, a]);
  }
}
function Ee3(e, ...t) {
  var n;
  const r = ((n = e.get("content-type")) == null ? void 0 : n.split(/;,/, 1)[0].trim()) ?? "";
  return t.includes(r);
}
function et2(e) {
  const t = [];
  return e === "day" ? e = 60 * 60 * 24 : e === "week" ? e = 60 * 60 * 24 * 7 : e === "month" ? e = 60 * 60 * 24 * 30 : e === "year" ? e = 60 * 60 * 24 * 365 : e === "private" ? e = { private: true, noCache: true } : e === "immutable" ? e = { public: true, immutable: true, maxAge: 60 * 60 * 24 * 365, staleWhileRevalidate: 60 * 60 * 24 * 365 } : e === "no-cache" && (e = { noCache: true }), typeof e == "number" && (e = { maxAge: e, sMaxAge: e, staleWhileRevalidate: e }), e.immutable && t.push("immutable"), e.maxAge && t.push(`max-age=${e.maxAge}`), e.sMaxAge && t.push(`s-maxage=${e.sMaxAge}`), e.noStore && t.push("no-store"), e.noCache && t.push("no-cache"), e.private && t.push("private"), e.public && t.push("public"), e.staleWhileRevalidate && t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`), e.staleIfError && t.push(`stale-if-error=${e.staleIfError}`), t.join(", ");
}
var tt2 = (e) => e && typeof e.then == "function";
var ce2 = Symbol("RequestEvLoaders");
var le2 = Symbol("RequestEvMode");
var fe2 = Symbol("RequestEvRoute");
var v2 = Symbol("RequestEvQwikSerializer");
var ue2 = Symbol("RequestEvTrailingSlash");
var de2 = "@routeName";
var L = "@actionId";
var he3 = "@actionFormData";
var nt2 = "@nonce";
function rt2(e, t, n, r, a, i, s, o) {
  const { request: l, platform: c, env: d } = e, h = /* @__PURE__ */ new Map(), m = new He2(l.headers.get("cookie")), u = new Headers(), g2 = new URL(l.url);
  g2.pathname.endsWith(x2) && (g2.pathname = g2.pathname.slice(0, -pe2), a && !g2.pathname.endsWith("/") && (g2.pathname += "/"), h.set(P2, true)), h.set("@manifest", r);
  let w = -1, y = null, b, _2 = e.locale, S2 = 200;
  const we3 = async () => {
    for (w++; w < n.length; ) {
      const f = n[w], p = f(T2);
      tt2(p) && await p, w++;
    }
  }, C3 = () => {
    if (y !== null)
      throw new Error("Response already sent");
  }, M2 = (f, p) => {
    if (C3(), typeof f == "number") {
      S2 = f;
      const D2 = T2.getWritableStream().getWriter();
      D2.write(typeof p == "string" ? $.encode(p) : p), D2.close();
    } else if (S2 = f.status, f.headers.forEach((R2, D2) => {
      u.append(D2, R2);
    }), f.body) {
      const R2 = T2.getWritableStream();
      f.body.pipeTo(R2);
    } else {
      if (S2 >= 300 && S2 < 400)
        return new W2();
      T2.getWritableStream().getWriter().close();
    }
    return Q2();
  }, Q2 = () => (w = q2, new j2()), U = {}, T2 = { [ce2]: U, [le2]: e.mode, [ue2]: a, [fe2]: t, [v2]: s, cookie: m, headers: u, env: d, method: l.method, signal: l.signal, params: (t == null ? void 0 : t[1]) ?? {}, pathname: g2.pathname, platform: c, query: g2.searchParams, request: l, url: g2, basePathname: i, sharedMap: h, get headersSent() {
    return y !== null;
  }, get exited() {
    return w >= q2;
  }, get clientConn() {
    return e.getClientConn();
  }, next: we3, exit: Q2, cacheControl: (f, p = "Cache-Control") => {
    C3(), u.set(p, et2(f));
  }, resolveValue: async (f) => {
    const p = f.__id;
    if (f.__brand === "server_loader" && !(p in U))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    return U[p];
  }, status: (f) => typeof f == "number" ? (C3(), S2 = f, f) : S2, locale: (f) => (typeof f == "string" && (_2 = f), _2 || ""), error: (f, p) => (S2 = f, u.delete("Cache-Control"), new re2(f, p)), redirect: (f, p) => {
    if (C3(), S2 = f, p) {
      const R2 = p.replace(/([^:])\/{2,}/g, "$1/");
      p !== R2 && console.warn(`Redirect URL ${p} is invalid, fixing to ${R2}`), u.set("Location", R2);
    }
    return u.delete("Cache-Control"), f > 301 && u.set("Cache-Control", "no-store"), Q2(), new W2();
  }, defer: (f) => typeof f == "function" ? f : () => f, fail: (f, p) => (C3(), S2 = f, u.delete("Cache-Control"), { failed: true, ...p }), text: (f, p) => (u.set("Content-Type", "text/plain; charset=utf-8"), M2(f, p)), html: (f, p) => (u.set("Content-Type", "text/html; charset=utf-8"), M2(f, p)), parseBody: async () => b !== void 0 ? b : b = it2(T2.request, h, s), json: (f, p) => (u.set("Content-Type", "application/json; charset=utf-8"), M2(f, JSON.stringify(p))), send: M2, isDirty: () => y !== null, getWritableStream: () => {
    if (y === null) {
      if (e.mode === "dev") {
        const f = h.get("@serverTiming");
        f && u.set("Server-Timing", f.map((p) => `${p[0]};dur=${p[1]}`).join(","));
      }
      y = e.getWritableStream(S2, u, m, o, T2);
    }
    return y;
  } };
  return Object.freeze(T2);
}
function H3(e) {
  return e[ce2];
}
function B2(e) {
  return e[ue2];
}
function at2(e) {
  return e[fe2];
}
function I(e) {
  return e[le2];
}
var q2 = Number.MAX_SAFE_INTEGER;
var it2 = async (e, t, n) => {
  var r;
  const a = ((r = e.headers.get("content-type")) == null ? void 0 : r.split(/[;,]/, 1)[0].trim()) ?? "";
  if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data") {
    const i = await e.formData();
    return t.set(he3, i), st2(i);
  } else {
    if (a === "application/json")
      return await e.json();
    if (a === "application/qwik-json")
      return n._deserializeData(await e.text());
  }
};
var st2 = (e) => [...e.entries()].reduce((n, [r, a]) => (r.split(".").reduce((i, s, o, l) => {
  if (s.endsWith("[]")) {
    const c = s.slice(0, -2);
    return i[c] = i[c] || [], i[c] = [...i[c], a];
  }
  return o < l.length - 1 ? i[s] = i[s] || (Number.isNaN(+l[o + 1]) ? {} : []) : i[s] = a;
}, n), n), {});
function ot2(e, t, n, r, a = true, i = "/", s) {
  let o;
  const l = new Promise((d) => o = d), c = rt2(e, t, n, r, a, i, s, o);
  return { response: l, requestEv: c, completion: ct2(c, o) };
}
async function ct2(e, t) {
  try {
    await e.next();
  } catch (n) {
    if (n instanceof W2)
      await e.getWritableStream().close();
    else if (n instanceof re2) {
      if (console.error(n), !e.headersSent) {
        const r = ke3(n.status, n), a = n.status;
        e.html(a, r);
      }
    } else if (!(n instanceof j2)) {
      if (I(e) !== "dev")
        try {
          e.headersSent || (e.headers.set("content-type", "text/html; charset=utf-8"), e.cacheControl({ noCache: true }), e.status(500));
          const r = e.getWritableStream();
          if (!r.locked) {
            const a = r.getWriter();
            await a.write($.encode(ae2(500, "Internal Server Error"))), await a.close();
          }
        } catch {
          console.error("Unable to render error page");
        }
      return n;
    }
  } finally {
    e.isDirty() || t(null);
  }
}
function lt2(e, t) {
  if (e.endsWith(x2)) {
    const n = e.length - pe2 + (t ? 1 : 0);
    e = e.slice(0, n), e === "" && (e = "/");
  }
  return e;
}
var P2 = "@isQData";
var x2 = "/q-data.json";
var pe2 = x2.length;
function ft2(e, t) {
  const n = te2(e), r = E(e), a = te2(t), i = E(t);
  return me2(e, n, r, t, a, i);
}
function me2(e, t, n, r, a, i) {
  let s = null;
  for (; t < n; ) {
    const o = e.charCodeAt(t++), l = r.charCodeAt(a++);
    if (o === 91) {
      const c = ge3(e, t), d = t + (c ? 3 : 0), h = z(e, d, n, 93), m = e.substring(d, h), u = z(e, h + 1, n, 47), g2 = e.substring(h + 1, u);
      t = h + 1;
      const w = a - 1;
      if (c) {
        const _2 = dt2(m, g2, r, w, i, e, t + g2.length + 1, n);
        if (_2)
          return Object.assign(s || (s = {}), _2);
      }
      const y = z(r, w, i, 47, g2);
      if (y == -1)
        return null;
      const b = r.substring(w, y);
      if (!c && !g2 && !b)
        return null;
      a = y, (s || (s = {}))[m] = decodeURIComponent(b);
    } else if (o !== l && !(isNaN(l) && ut2(e, t)))
      return null;
  }
  return ee3(e, t) && ee3(r, a) ? s || {} : null;
}
function ut2(e, t) {
  return e.charCodeAt(t) === 91 && ge3(e, t + 1);
}
function E(e) {
  const t = e.length;
  return t > 1 && e.charCodeAt(t - 1) === 47 ? t - 1 : t;
}
function ee3(e, t) {
  const n = e.length;
  return t >= n || t == n - 1 && e.charCodeAt(t) === 47;
}
function te2(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0;
}
function ge3(e, t) {
  return e.charCodeAt(t) === 46 && e.charCodeAt(t + 1) === 46 && e.charCodeAt(t + 2) === 46;
}
function z(e, t, n, r, a = "") {
  for (; t < n && e.charCodeAt(t) !== r; )
    t++;
  const i = a.length;
  for (let s = 0; s < i; s++)
    if (e.charCodeAt(t - i + s) !== a.charCodeAt(s))
      return -1;
  return t - i;
}
function dt2(e, t, n, r, a, i, s, o) {
  n.charCodeAt(r) === 47 && r++;
  let l = a;
  const c = t + "/";
  let d = 5;
  for (; l >= r && d--; ) {
    const h = me2(i, s, o, n, l, a);
    if (h) {
      let m = n.substring(r, Math.min(l, a));
      return m.endsWith(c) && (m = m.substring(0, m.length - c.length)), h[e] = decodeURIComponent(m), h;
    }
    l = ht2(n, r, c, l, r - 1) + c.length;
  }
  return null;
}
function ht2(e, t, n, r, a) {
  let i = e.lastIndexOf(n, r);
  return i == r - n.length && (i = e.lastIndexOf(n, r - n.length - 1)), i > t ? i : a;
}
var pt2 = async (e, t, n, r) => {
  if (Array.isArray(e))
    for (const a of e) {
      const i = a[0], s = ft2(i, r);
      if (s) {
        const o = a[1], l = a[3], c = new Array(o.length), d = [], h = mt2(t, r);
        let m;
        return o.forEach((u, g2) => {
          ne2(u, d, (w) => c[g2] = w, n);
        }), ne2(h, d, (u) => m = u == null ? void 0 : u.default, n), d.length > 0 && await Promise.all(d), [i, s, c, m, l];
      }
    }
  return null;
};
var ne2 = (e, t, n, r) => {
  if (typeof e == "function") {
    const a = X2.get(e);
    if (a)
      n(a);
    else {
      const i = e();
      typeof i.then == "function" ? t.push(i.then((s) => {
        r !== false && X2.set(e, s), n(s);
      })) : i && n(i);
    }
  }
};
var mt2 = (e, t) => {
  if (e) {
    t = t.endsWith("/") ? t : t + "/";
    const n = e.find((r) => r[0] === t || t.startsWith(r[0] + (t.endsWith("/") ? "" : "/")));
    if (n)
      return n[1];
  }
};
async function gt(e, t, n) {
  const { render: r, qwikCityPlan: a, manifest: i, checkOrigin: s } = t, o = e.url.pathname, l = lt2(o, a.trailingSlash), c = await wt2(a, l, e.request.method, s ?? true, r);
  return c ? ot2(e, c[0], c[1], i, a.trailingSlash, a.basePathname, n) : null;
}
async function wt2(e, t, n, r, a) {
  const { routes: i, serverPlugins: s, menus: o, cacheModules: l } = e, c = await pt2(i, o, l, t), d = ze3(s, c, n, r, Ve3(a));
  return d.length > 0 ? [c, d] : null;
}
function yt2(e) {
  try {
    new globalThis.TextEncoderStream();
  } catch {
    globalThis.TextEncoderStream = bt2;
  }
  const t = { _deserializeData: $p, _serializeData: dp, _verifySerializable: fp };
  e.manifest && Xe(e.manifest);
  async function n(r, a, i) {
    try {
      const s = new URL(r.url);
      if (isStaticPath(r.method, s))
        return a.ASSETS.fetch(r);
      const o = s.hostname !== "127.0.0.1" && s.hostname !== "localhost" && s.port === "" && r.method === "GET", l = new Request(s.href, r), c = o ? await caches.open("custom:qwikcity") : null;
      if (c) {
        const u = await c.match(l);
        if (u)
          return u;
      }
      const h = await gt({ mode: "server", locale: void 0, url: s, request: r, env: { get(u) {
        return a[u];
      } }, getWritableStream: (u, g2, w, y) => {
        const { readable: b, writable: _2 } = new TransformStream(), S2 = new Response(b, { status: u, headers: Ie3(g2, w) });
        return y(S2), _2;
      }, getClientConn: () => ({ ip: r.headers.get("CF-connecting-ip") || "", country: r.headers.get("CF-IPCountry") || "" }), platform: { request: r, env: a, ctx: i } }, e, t);
      if (h) {
        h.completion.then((g2) => {
          g2 && console.error(g2);
        });
        const u = await h.response;
        if (u)
          return u.ok && c && u.headers.has("Cache-Control") && i.waitUntil(c.put(l, u.clone())), u;
      }
      const m = getNotFound(s.pathname);
      return new Response(m, { status: 404, headers: { "Content-Type": "text/html; charset=utf-8", "X-Not-Found": s.pathname } });
    } catch (s) {
      return console.error(s), new Response(String(s || "Error"), { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8", "X-Error": "cloudflare-pages" } });
    }
  }
  return n;
}
var St2 = Promise.resolve();
var bt2 = class {
  constructor() {
    this._writer = null, this.readable = { pipeTo: (t) => {
      this._writer = t.getWriter();
    } }, this.writable = { getWriter: () => {
      if (!this._writer)
        throw new Error("No writable stream");
      const t = new TextEncoder();
      return { write: async (n) => {
        n != null && await this._writer.write(t.encode(n));
      }, close: () => this._writer.close(), ready: St2 };
    } };
  }
};
var Ct2 = yt2({ render: Ge2, qwikCityPlan: bp, manifest: Qe2 });
var worker_default = { fetch: Ct2 };
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...worker_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...worker_default.middleware ? worker_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-tHeJ6s/r50xxye86g.js
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/build/*",
    "/assets/*"
  ]
};
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (middleware_loader_entry_default.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return middleware_loader_entry_default.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
var jsonError2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default2 = jsonError2;
var wrap2 = void 0;

// .wrangler/tmp/bundle-0Hv4CV/middleware-insertion-facade.js
var envWrappers2 = [wrap2].filter(Boolean);
var facade3 = {
  ...pages_dev_pipeline_default,
  envWrappers: envWrappers2,
  middleware: [
    middleware_miniflare3_json_error_default2,
    ...pages_dev_pipeline_default.middleware ? pages_dev_pipeline_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default2 = facade3;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-0Hv4CV/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__2 = function(request, env, ctx) {
  if (middleware_insertion_facade_default2.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default2.fetch(request, env, ctx);
};
function getMaskedEnv2(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default2.envWrappers && middleware_insertion_facade_default2.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default2.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware2 = false;
var facade4 = {
  ...middleware_insertion_facade_default2.tail && {
    tail: maskHandlerEnv2(middleware_insertion_facade_default2.tail)
  },
  ...middleware_insertion_facade_default2.trace && {
    trace: maskHandlerEnv2(middleware_insertion_facade_default2.trace)
  },
  ...middleware_insertion_facade_default2.scheduled && {
    scheduled: maskHandlerEnv2(middleware_insertion_facade_default2.scheduled)
  },
  ...middleware_insertion_facade_default2.queue && {
    queue: maskHandlerEnv2(middleware_insertion_facade_default2.queue)
  },
  ...middleware_insertion_facade_default2.test && {
    test: maskHandlerEnv2(middleware_insertion_facade_default2.test)
  },
  ...middleware_insertion_facade_default2.email && {
    email: maskHandlerEnv2(middleware_insertion_facade_default2.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv2(rawEnv);
    if (middleware_insertion_facade_default2.middleware && middleware_insertion_facade_default2.middleware.length > 0) {
      if (!registeredMiddleware2) {
        registeredMiddleware2 = true;
        for (const middleware of middleware_insertion_facade_default2.middleware) {
          __facade_register__2(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default2.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default2.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__2(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__2
      );
    } else {
      return __facade_modules_fetch__2(request, env, ctx);
    }
  }
};
function maskHandlerEnv2(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv2(env), ctx);
}
var middleware_loader_entry_default2 = facade4;
export {
  middleware_loader_entry_default2 as default
};
/**
 * @license
 * @builder.io/qwik 1.4.5
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
/**
* @license
* @builder.io/qwik/server 1.4.5
* Copyright Builder.io, Inc. All Rights Reserved.
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
*/
//# sourceMappingURL=r50xxye86g.js.map
