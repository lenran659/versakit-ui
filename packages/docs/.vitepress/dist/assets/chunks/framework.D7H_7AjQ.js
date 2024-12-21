/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Os(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const ee = {},
  St = [],
  Ue = () => {},
  Fo = () => !1,
  zt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ms = (e) => e.startsWith('onUpdate:'),
  le = Object.assign,
  Is = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Ho = Object.prototype.hasOwnProperty,
  z = (e, t) => Ho.call(e, t),
  D = Array.isArray,
  xt = (e) => Qt(e) === '[object Map]',
  Wr = (e) => Qt(e) === '[object Set]',
  er = (e) => Qt(e) === '[object Date]',
  K = (e) => typeof e == 'function',
  re = (e) => typeof e == 'string',
  He = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  qr = (e) => (Z(e) || K(e)) && K(e.then) && K(e.catch),
  Gr = Object.prototype.toString,
  Qt = (e) => Gr.call(e),
  Do = (e) => Qt(e).slice(8, -1),
  Yr = (e) => Qt(e) === '[object Object]',
  Ps = (e) =>
    re(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Et = Os(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Mn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  $o = /-(\w)/g,
  Pe = Mn((e) => e.replace($o, (t, n) => (n ? n.toUpperCase() : ''))),
  jo = /\B([A-Z])/g,
  st = Mn((e) => e.replace(jo, '-$1').toLowerCase()),
  In = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  gn = Mn((e) => (e ? `on${In(e)}` : '')),
  et = (e, t) => !Object.is(e, t),
  mn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Xr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  Vo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  ko = (e) => {
    const t = re(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let tr
const Pn = () =>
  tr ||
  (tr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Ls(e) {
  if (D(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = re(s) ? Wo(s) : Ls(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (re(e) || Z(e)) return e
}
const Uo = /;(?![^(]*\))/g,
  Bo = /:([^]+)/,
  Ko = /\/\*[^]*?\*\//g
function Wo(e) {
  const t = {}
  return (
    e
      .replace(Ko, '')
      .split(Uo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Bo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Ns(e) {
  let t = ''
  if (re(e)) t = e
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ns(e[n])
      s && (t += s + ' ')
    }
  else if (Z(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const qo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Go = Os(qo)
function Jr(e) {
  return !!e || e === ''
}
function Yo(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = wn(e[s], t[s])
  return n
}
function wn(e, t) {
  if (e === t) return !0
  let n = er(e),
    s = er(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = He(e)), (s = He(t)), n || s)) return e === t
  if (((n = D(e)), (s = D(t)), n || s)) return n && s ? Yo(e, t) : !1
  if (((n = Z(e)), (s = Z(t)), n || s)) {
    if (!n || !s) return !1
    const r = Object.keys(e).length,
      i = Object.keys(t).length
    if (r !== i) return !1
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o)
      if ((l && !c) || (!l && c) || !wn(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
const zr = (e) => !!(e && e.__v_isRef === !0),
  Xo = (e) =>
    re(e)
      ? e
      : e == null
        ? ''
        : D(e) || (Z(e) && (e.toString === Gr || !K(e.toString)))
          ? zr(e)
            ? Xo(e.value)
            : JSON.stringify(e, Qr, 2)
          : String(e),
  Qr = (e, t) =>
    zr(t)
      ? Qr(e, t.value)
      : xt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Xn(s, i) + ' =>'] = r), n),
              {},
            ),
          }
        : Wr(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Xn(n)) }
          : He(t)
            ? Xn(t)
            : Z(t) && !D(t) && !Yr(t)
              ? String(t)
              : t,
  Xn = (e, t = '') => {
    var n
    return He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be
class Jo {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = be
      try {
        return (be = this), t()
      } finally {
        be = n
      }
    }
  }
  on() {
    be = this
  }
  off() {
    be = this.parent
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function Zr() {
  return be
}
function zo(e, t = !1) {
  be && be.cleanups.push(e)
}
let ne
const Jn = new WeakSet()
class ei {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      be && be.active && be.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Jn.has(this) && (Jn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ni(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), nr(this), si(this)
    const t = ne,
      n = Ne
    ;(ne = this), (Ne = !0)
    try {
      return this.fn()
    } finally {
      ri(this), (ne = t), (Ne = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ds(t)
      ;(this.deps = this.depsTail = void 0),
        nr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Jn.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    gs(this) && this.run()
  }
  get dirty() {
    return gs(this)
  }
}
let ti = 0,
  Ht,
  Dt
function ni(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = Dt), (Dt = e)
    return
  }
  ;(e.next = Ht), (Ht = e)
}
function Fs() {
  ti++
}
function Hs() {
  if (--ti > 0) return
  if (Dt) {
    let t = Dt
    for (Dt = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; Ht; ) {
    let t = Ht
    for (Ht = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function ri(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), Ds(s), Qo(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ii(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function ii(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Ut)
  )
    return
  e.globalVersion = Ut
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !gs(e))) {
    e.flags &= -3
    return
  }
  const n = ne,
    s = Ne
  ;(ne = e), (Ne = !0)
  try {
    si(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || et(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(ne = n), (Ne = s), ri(e), (e.flags &= -3)
  }
}
function Ds(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) Ds(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Qo(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Ne = !0
const oi = []
function rt() {
  oi.push(Ne), (Ne = !1)
}
function it() {
  const e = oi.pop()
  Ne = e === void 0 ? !0 : e
}
function nr(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = ne
    ne = void 0
    try {
      t()
    } finally {
      ne = n
    }
  }
}
let Ut = 0
class Zo {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class Ln {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!ne || !Ne || ne === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ne)
      (n = this.activeLink = new Zo(ne, this)),
        ne.deps
          ? ((n.prevDep = ne.depsTail),
            (ne.depsTail.nextDep = n),
            (ne.depsTail = n))
          : (ne.deps = ne.depsTail = n),
        li(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ne.depsTail),
        (n.nextDep = void 0),
        (ne.depsTail.nextDep = n),
        (ne.depsTail = n),
        ne.deps === n && (ne.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, Ut++, this.notify(t)
  }
  notify(t) {
    Fs()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      Hs()
    }
  }
}
function li(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) li(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const Sn = new WeakMap(),
  dt = Symbol(''),
  ms = Symbol(''),
  Bt = Symbol('')
function me(e, t, n) {
  if (Ne && ne) {
    let s = Sn.get(e)
    s || Sn.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Ln())), (r.map = s), (r.key = n)), r.track()
  }
}
function qe(e, t, n, s, r, i) {
  const o = Sn.get(e)
  if (!o) {
    Ut++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((Fs(), t === 'clear')) o.forEach(l)
  else {
    const c = D(e),
      u = c && Ps(n)
    if (c && n === 'length') {
      const a = Number(s)
      o.forEach((h, v) => {
        ;(v === 'length' || v === Bt || (!He(v) && v >= a)) && l(h)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Bt)), t)
      ) {
        case 'add':
          c ? u && l(o.get('length')) : (l(o.get(dt)), xt(e) && l(o.get(ms)))
          break
        case 'delete':
          c || (l(o.get(dt)), xt(e) && l(o.get(ms)))
          break
        case 'set':
          xt(e) && l(o.get(dt))
          break
      }
  }
  Hs()
}
function el(e, t) {
  const n = Sn.get(e)
  return n && n.get(t)
}
function _t(e) {
  const t = J(e)
  return t === e ? t : (me(t, 'iterate', Bt), Ie(e) ? t : t.map(ye))
}
function Nn(e) {
  return me((e = J(e)), 'iterate', Bt), e
}
const tl = {
  __proto__: null,
  [Symbol.iterator]() {
    return zn(this, Symbol.iterator, ye)
  },
  concat(...e) {
    return _t(this).concat(...e.map((t) => (D(t) ? _t(t) : t)))
  },
  entries() {
    return zn(this, 'entries', (e) => ((e[1] = ye(e[1])), e))
  },
  every(e, t) {
    return Be(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Be(this, 'filter', e, t, (n) => n.map(ye), arguments)
  },
  find(e, t) {
    return Be(this, 'find', e, t, ye, arguments)
  },
  findIndex(e, t) {
    return Be(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Be(this, 'findLast', e, t, ye, arguments)
  },
  findLastIndex(e, t) {
    return Be(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Be(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return Qn(this, 'includes', e)
  },
  indexOf(...e) {
    return Qn(this, 'indexOf', e)
  },
  join(e) {
    return _t(this).join(e)
  },
  lastIndexOf(...e) {
    return Qn(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Be(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Pt(this, 'pop')
  },
  push(...e) {
    return Pt(this, 'push', e)
  },
  reduce(e, ...t) {
    return sr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return sr(this, 'reduceRight', e, t)
  },
  shift() {
    return Pt(this, 'shift')
  },
  some(e, t) {
    return Be(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Pt(this, 'splice', e)
  },
  toReversed() {
    return _t(this).toReversed()
  },
  toSorted(e) {
    return _t(this).toSorted(e)
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e)
  },
  unshift(...e) {
    return Pt(this, 'unshift', e)
  },
  values() {
    return zn(this, 'values', ye)
  },
}
function zn(e, t, n) {
  const s = Nn(e),
    r = s[t]()
  return (
    s !== e &&
      !Ie(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const nl = Array.prototype
function Be(e, t, n, s, r, i) {
  const o = Nn(e),
    l = o !== e && !Ie(e),
    c = o[t]
  if (c !== nl[t]) {
    const h = c.apply(e, i)
    return l ? ye(h) : h
  }
  let u = n
  o !== e &&
    (l
      ? (u = function (h, v) {
          return n.call(this, ye(h), v, e)
        })
      : n.length > 2 &&
        (u = function (h, v) {
          return n.call(this, h, v, e)
        }))
  const a = c.call(o, u, s)
  return l && r ? r(a) : a
}
function sr(e, t, n, s) {
  const r = Nn(e)
  let i = n
  return (
    r !== e &&
      (Ie(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, ye(l), c, e)
          })),
    r[t](i, ...s)
  )
}
function Qn(e, t, n) {
  const s = J(e)
  me(s, 'iterate', Bt)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Vs(n[0]) ? ((n[0] = J(n[0])), s[t](...n)) : r
}
function Pt(e, t, n = []) {
  rt(), Fs()
  const s = J(e)[t].apply(e, n)
  return Hs(), it(), s
}
const sl = Os('__proto__,__v_isRef,__isVue'),
  ci = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(He),
  )
function rl(e) {
  He(e) || (e = String(e))
  const t = J(this)
  return me(t, 'has', e), t.hasOwnProperty(e)
}
class ai {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? pl : hi) : i ? di : ui).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = D(t)
    if (!r) {
      let c
      if (o && (c = tl[n])) return c
      if (n === 'hasOwnProperty') return rl
    }
    const l = Reflect.get(t, n, ae(t) ? t : s)
    return (He(n) ? ci.has(n) : sl(n)) || (r || me(t, 'get', n), i)
      ? l
      : ae(l)
        ? o && Ps(n)
          ? l
          : l.value
        : Z(l)
          ? r
            ? Hn(l)
            : Fn(l)
          : l
  }
}
class fi extends ai {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const c = yt(i)
      if (
        (!Ie(s) && !yt(s) && ((i = J(i)), (s = J(s))), !D(t) && ae(i) && !ae(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = D(t) && Ps(n) ? Number(n) < t.length : z(t, n),
      l = Reflect.set(t, n, s, ae(t) ? t : r)
    return (
      t === J(r) && (o ? et(s, i) && qe(t, 'set', n, s) : qe(t, 'add', n, s)), l
    )
  }
  deleteProperty(t, n) {
    const s = z(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && qe(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!He(n) || !ci.has(n)) && me(t, 'has', n), s
  }
  ownKeys(t) {
    return me(t, 'iterate', D(t) ? 'length' : dt), Reflect.ownKeys(t)
  }
}
class il extends ai {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const ol = new fi(),
  ll = new il(),
  cl = new fi(!0)
const ys = (e) => e,
  sn = (e) => Reflect.getPrototypeOf(e)
function al(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = J(r),
      o = xt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      a = n ? ys : t ? vs : ye
    return (
      !t && me(i, 'iterate', c ? ms : dt),
      {
        next() {
          const { value: h, done: v } = u.next()
          return v
            ? { value: h, done: v }
            : { value: l ? [a(h[0]), a(h[1])] : a(h), done: v }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function rn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function fl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      e || (et(r, l) && me(o, 'get', r), me(o, 'get', l))
      const { has: c } = sn(o),
        u = t ? ys : e ? vs : ye
      if (c.call(o, r)) return u(i.get(r))
      if (c.call(o, l)) return u(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && me(J(r), 'iterate', dt), Reflect.get(r, 'size', r)
    },
    has(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      return (
        e || (et(r, l) && me(o, 'has', r), me(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = J(l),
        u = t ? ys : e ? vs : ye
      return (
        !e && me(c, 'iterate', dt),
        l.forEach((a, h) => r.call(i, u(a), u(h), o))
      )
    },
  }
  return (
    le(
      n,
      e
        ? {
            add: rn('add'),
            set: rn('set'),
            delete: rn('delete'),
            clear: rn('clear'),
          }
        : {
            add(r) {
              !t && !Ie(r) && !yt(r) && (r = J(r))
              const i = J(this)
              return (
                sn(i).has.call(i, r) || (i.add(r), qe(i, 'add', r, r)), this
              )
            },
            set(r, i) {
              !t && !Ie(i) && !yt(i) && (i = J(i))
              const o = J(this),
                { has: l, get: c } = sn(o)
              let u = l.call(o, r)
              u || ((r = J(r)), (u = l.call(o, r)))
              const a = c.call(o, r)
              return (
                o.set(r, i),
                u ? et(i, a) && qe(o, 'set', r, i) : qe(o, 'add', r, i),
                this
              )
            },
            delete(r) {
              const i = J(this),
                { has: o, get: l } = sn(i)
              let c = o.call(i, r)
              c || ((r = J(r)), (c = o.call(i, r))), l && l.call(i, r)
              const u = i.delete(r)
              return c && qe(i, 'delete', r, void 0), u
            },
            clear() {
              const r = J(this),
                i = r.size !== 0,
                o = r.clear()
              return i && qe(r, 'clear', void 0, void 0), o
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = al(r, e, t)
    }),
    n
  )
}
function $s(e, t) {
  const n = fl(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(z(n, r) && r in s ? n : s, r, i)
}
const ul = { get: $s(!1, !1) },
  dl = { get: $s(!1, !0) },
  hl = { get: $s(!0, !1) }
const ui = new WeakMap(),
  di = new WeakMap(),
  hi = new WeakMap(),
  pl = new WeakMap()
function gl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function ml(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gl(Do(e))
}
function Fn(e) {
  return yt(e) ? e : js(e, !1, ol, ul, ui)
}
function yl(e) {
  return js(e, !1, cl, dl, di)
}
function Hn(e) {
  return js(e, !0, ll, hl, hi)
}
function js(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = ml(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return r.set(e, l), l
}
function ht(e) {
  return yt(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive)
}
function yt(e) {
  return !!(e && e.__v_isReadonly)
}
function Ie(e) {
  return !!(e && e.__v_isShallow)
}
function Vs(e) {
  return e ? !!e.__v_raw : !1
}
function J(e) {
  const t = e && e.__v_raw
  return t ? J(t) : e
}
function yn(e) {
  return !z(e, '__v_skip') && Object.isExtensible(e) && Xr(e, '__v_skip', !0), e
}
const ye = (e) => (Z(e) ? Fn(e) : e),
  vs = (e) => (Z(e) ? Hn(e) : e)
function ae(e) {
  return e ? e.__v_isRef === !0 : !1
}
function de(e) {
  return gi(e, !1)
}
function pi(e) {
  return gi(e, !0)
}
function gi(e, t) {
  return ae(e) ? e : new vl(e, t)
}
class vl {
  constructor(t, n) {
    ;(this.dep = new Ln()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : ye(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ie(t) || yt(t)
    ;(t = s ? t : J(t)),
      et(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : ye(t)),
        this.dep.trigger())
  }
}
function mi(e) {
  return ae(e) ? e.value : e
}
const _l = {
  get: (e, t, n) => (t === '__v_raw' ? e : mi(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return ae(r) && !ae(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function yi(e) {
  return ht(e) ? e : new Proxy(e, _l)
}
class bl {
  constructor(t) {
    ;(this.__v_isRef = !0), (this._value = void 0)
    const n = (this.dep = new Ln()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n))
    ;(this._get = s), (this._set = r)
  }
  get value() {
    return (this._value = this._get())
  }
  set value(t) {
    this._set(t)
  }
}
function wl(e) {
  return new bl(e)
}
function lf(e) {
  const t = D(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = vi(e, n)
  return t
}
class Sl {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return el(J(this._object), this._key)
  }
}
class xl {
  constructor(t) {
    ;(this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function El(e, t, n) {
  return ae(e)
    ? e
    : K(e)
      ? new xl(e)
      : Z(e) && arguments.length > 1
        ? vi(e, t, n)
        : de(e)
}
function vi(e, t, n) {
  const s = e[t]
  return ae(s) ? s : new Sl(e, t, n)
}
class Cl {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Ln(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ut - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ne !== this))
      return ni(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return ii(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Tl(e, t, n = !1) {
  let s, r
  return K(e) ? (s = e) : ((s = e.get), (r = e.set)), new Cl(s, r, n)
}
const on = {},
  xn = new WeakMap()
let ft
function Al(e, t = !1, n = ft) {
  if (n) {
    let s = xn.get(n)
    s || xn.set(n, (s = [])), s.push(e)
  }
}
function Rl(e, t, n = ee) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    u = (p) => (r ? p : Ie(p) || r === !1 || r === 0 ? Ge(p, 1) : Ge(p))
  let a,
    h,
    v,
    S,
    P = !1,
    O = !1
  if (
    (ae(e)
      ? ((h = () => e.value), (P = Ie(e)))
      : ht(e)
        ? ((h = () => u(e)), (P = !0))
        : D(e)
          ? ((O = !0),
            (P = e.some((p) => ht(p) || Ie(p))),
            (h = () =>
              e.map((p) => {
                if (ae(p)) return p.value
                if (ht(p)) return u(p)
                if (K(p)) return c ? c(p, 2) : p()
              })))
          : K(e)
            ? t
              ? (h = c ? () => c(e, 2) : e)
              : (h = () => {
                  if (v) {
                    rt()
                    try {
                      v()
                    } finally {
                      it()
                    }
                  }
                  const p = ft
                  ft = a
                  try {
                    return c ? c(e, 3, [S]) : e(S)
                  } finally {
                    ft = p
                  }
                })
            : (h = Ue),
    t && r)
  ) {
    const p = h,
      A = r === !0 ? 1 / 0 : r
    h = () => Ge(p(), A)
  }
  const G = Zr(),
    U = () => {
      a.stop(), G && G.active && Is(G.effects, a)
    }
  if (i && t) {
    const p = t
    t = (...A) => {
      p(...A), U()
    }
  }
  let W = O ? new Array(e.length).fill(on) : on
  const g = (p) => {
    if (!(!(a.flags & 1) || (!a.dirty && !p)))
      if (t) {
        const A = a.run()
        if (r || P || (O ? A.some((j, V) => et(j, W[V])) : et(A, W))) {
          v && v()
          const j = ft
          ft = a
          try {
            const V = [A, W === on ? void 0 : O && W[0] === on ? [] : W, S]
            c ? c(t, 3, V) : t(...V), (W = A)
          } finally {
            ft = j
          }
        }
      } else a.run()
  }
  return (
    l && l(g),
    (a = new ei(h)),
    (a.scheduler = o ? () => o(g, !1) : g),
    (S = (p) => Al(p, !1, a)),
    (v = a.onStop =
      () => {
        const p = xn.get(a)
        if (p) {
          if (c) c(p, 4)
          else for (const A of p) A()
          xn.delete(a)
        }
      }),
    t ? (s ? g(!0) : (W = a.run())) : o ? o(g.bind(null, !0), !0) : a.run(),
    (U.pause = a.pause.bind(a)),
    (U.resume = a.resume.bind(a)),
    (U.stop = U),
    U
  )
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, ae(e))) Ge(e.value, t, n)
  else if (D(e)) for (let s = 0; s < e.length; s++) Ge(e[s], t, n)
  else if (Wr(e) || xt(e))
    e.forEach((s) => {
      Ge(s, t, n)
    })
  else if (Yr(e)) {
    for (const s in e) Ge(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ge(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Zt(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Dn(r, t, n)
  }
}
function De(e, t, n, s) {
  if (K(e)) {
    const r = Zt(e, t, n, s)
    return (
      r &&
        qr(r) &&
        r.catch((i) => {
          Dn(i, t, n)
        }),
      r
    )
  }
  if (D(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(De(e[i], t, n, s))
    return r
  }
}
function Dn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || ee
  if (t) {
    let l = t.parent
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const a = l.ec
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, c, u) === !1) return
      }
      l = l.parent
    }
    if (i) {
      rt(), Zt(i, null, 10, [e, c, u]), it()
      return
    }
  }
  Ol(e, n, r, s, o)
}
function Ol(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const we = []
let Ve = -1
const Ct = []
let ze = null,
  wt = 0
const _i = Promise.resolve()
let En = null
function $n(e) {
  const t = En || _i
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ml(e) {
  let t = Ve + 1,
    n = we.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = we[s],
      i = Kt(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function ks(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e),
      n = we[we.length - 1]
    !n || (!(e.flags & 2) && t >= Kt(n)) ? we.push(e) : we.splice(Ml(t), 0, e),
      (e.flags |= 1),
      bi()
  }
}
function bi() {
  En || (En = _i.then(wi))
}
function Il(e) {
  D(e)
    ? Ct.push(...e)
    : ze && e.id === -1
      ? ze.splice(wt + 1, 0, e)
      : e.flags & 1 || (Ct.push(e), (e.flags |= 1)),
    bi()
}
function rr(e, t, n = Ve + 1) {
  for (; n < we.length; n++) {
    const s = we[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      we.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function Cn(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort((n, s) => Kt(n) - Kt(s))
    if (((Ct.length = 0), ze)) {
      ze.push(...t)
      return
    }
    for (ze = t, wt = 0; wt < ze.length; wt++) {
      const n = ze[wt]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(ze = null), (wt = 0)
  }
}
const Kt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function wi(e) {
  try {
    for (Ve = 0; Ve < we.length; Ve++) {
      const t = we[Ve]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Zt(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ve < we.length; Ve++) {
      const t = we[Ve]
      t && (t.flags &= -2)
    }
    ;(Ve = -1),
      (we.length = 0),
      Cn(),
      (En = null),
      (we.length || Ct.length) && wi()
  }
}
let ce = null,
  Si = null
function Tn(e) {
  const t = ce
  return (ce = e), (Si = (e && e.type.__scopeId) || null), t
}
function Pl(e, t = ce, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && mr(-1)
    const i = Tn(t)
    let o
    try {
      o = e(...r)
    } finally {
      Tn(i), s._d && mr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function cf(e, t) {
  if (ce === null) return e
  const n = Wn(ce),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r]
    i &&
      (K(i) && (i = { mounted: i, updated: i }),
      i.deep && Ge(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }))
  }
  return e
}
function ke(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (rt(), De(c, n, 8, [e.el, l, e, t]), it())
  }
}
const Ll = Symbol('_vte'),
  xi = (e) => e.__isTeleport,
  Qe = Symbol('_leaveCb'),
  ln = Symbol('_enterCb')
function Nl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Ot(() => {
      e.isMounted = !0
    }),
    Pi(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Re = [Function, Array],
  Ei = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Re,
    onEnter: Re,
    onAfterEnter: Re,
    onEnterCancelled: Re,
    onBeforeLeave: Re,
    onLeave: Re,
    onAfterLeave: Re,
    onLeaveCancelled: Re,
    onBeforeAppear: Re,
    onAppear: Re,
    onAfterAppear: Re,
    onAppearCancelled: Re,
  },
  Ci = (e) => {
    const t = e.subTree
    return t.component ? Ci(t.component) : t
  },
  Fl = {
    name: 'BaseTransition',
    props: Ei,
    setup(e, { slots: t }) {
      const n = Kn(),
        s = Nl()
      return () => {
        const r = t.default && Ri(t.default(), !0)
        if (!r || !r.length) return
        const i = Ti(r),
          o = J(e),
          { mode: l } = o
        if (s.isLeaving) return Zn(i)
        const c = ir(i)
        if (!c) return Zn(i)
        let u = _s(c, o, s, n, (h) => (u = h))
        c.type !== ve && Wt(c, u)
        let a = n.subTree && ir(n.subTree)
        if (a && a.type !== ve && !ut(c, a) && Ci(n).type !== ve) {
          let h = _s(a, o, s, n)
          if ((Wt(a, h), l === 'out-in' && c.type !== ve))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete h.afterLeave,
                  (a = void 0)
              }),
              Zn(i)
            )
          l === 'in-out' && c.type !== ve
            ? (h.delayLeave = (v, S, P) => {
                const O = Ai(s, a)
                ;(O[String(a.key)] = a),
                  (v[Qe] = () => {
                    S(), (v[Qe] = void 0), delete u.delayedLeave, (a = void 0)
                  }),
                  (u.delayedLeave = () => {
                    P(), delete u.delayedLeave, (a = void 0)
                  })
              })
            : (a = void 0)
        } else a && (a = void 0)
        return i
      }
    },
  }
function Ti(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ve) {
        t = n
        break
      }
  }
  return t
}
const Hl = Fl
function Ai(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function _s(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: v,
      onLeave: S,
      onAfterLeave: P,
      onLeaveCancelled: O,
      onBeforeAppear: G,
      onAppear: U,
      onAfterAppear: W,
      onAppearCancelled: g,
    } = t,
    p = String(e.key),
    A = Ai(n, e),
    j = (I, _) => {
      I && De(I, s, 9, _)
    },
    V = (I, _) => {
      const L = _[1]
      j(I, _),
        D(I) ? I.every((b) => b.length <= 1) && L() : I.length <= 1 && L()
    },
    q = {
      mode: o,
      persisted: l,
      beforeEnter(I) {
        let _ = c
        if (!n.isMounted)
          if (i) _ = G || c
          else return
        I[Qe] && I[Qe](!0)
        const L = A[p]
        L && ut(e, L) && L.el[Qe] && L.el[Qe](), j(_, [I])
      },
      enter(I) {
        let _ = u,
          L = a,
          b = h
        if (!n.isMounted)
          if (i) (_ = U || u), (L = W || a), (b = g || h)
          else return
        let k = !1
        const se = (I[ln] = (ie) => {
          k ||
            ((k = !0),
            ie ? j(b, [I]) : j(L, [I]),
            q.delayedLeave && q.delayedLeave(),
            (I[ln] = void 0))
        })
        _ ? V(_, [I, se]) : se()
      },
      leave(I, _) {
        const L = String(e.key)
        if ((I[ln] && I[ln](!0), n.isUnmounting)) return _()
        j(v, [I])
        let b = !1
        const k = (I[Qe] = (se) => {
          b ||
            ((b = !0),
            _(),
            se ? j(O, [I]) : j(P, [I]),
            (I[Qe] = void 0),
            A[L] === e && delete A[L])
        })
        ;(A[L] = e), S ? V(S, [I, k]) : k()
      },
      clone(I) {
        const _ = _s(I, t, n, s, r)
        return r && r(_), _
      },
    }
  return q
}
function Zn(e) {
  if (jn(e)) return (e = nt(e)), (e.children = null), e
}
function ir(e) {
  if (!jn(e)) return xi(e.type) && e.children ? Ti(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && K(n.default)) return n.default()
  }
}
function Wt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Wt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Ri(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === Se
      ? (o.patchFlag & 128 && r++, (s = s.concat(Ri(o.children, t, l))))
      : (t || o.type !== ve) && s.push(l != null ? nt(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Oi(e, t) {
  return K(e) ? le({ name: e.name }, t, { setup: e }) : e
}
function Mi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function qt(e, t, n, s, r = !1) {
  if (D(e)) {
    e.forEach((P, O) => qt(P, t && (D(t) ? t[O] : t), n, s, r))
    return
  }
  if (pt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      qt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? Wn(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    a = l.refs === ee ? (l.refs = {}) : l.refs,
    h = l.setupState,
    v = J(h),
    S = h === ee ? () => !1 : (P) => z(v, P)
  if (
    (u != null &&
      u !== c &&
      (re(u)
        ? ((a[u] = null), S(u) && (h[u] = null))
        : ae(u) && (u.value = null)),
    K(c))
  )
    Zt(c, l, 12, [o, a])
  else {
    const P = re(c),
      O = ae(c)
    if (P || O) {
      const G = () => {
        if (e.f) {
          const U = P ? (S(c) ? h[c] : a[c]) : c.value
          r
            ? D(U) && Is(U, i)
            : D(U)
              ? U.includes(i) || U.push(i)
              : P
                ? ((a[c] = [i]), S(c) && (h[c] = a[c]))
                : ((c.value = [i]), e.k && (a[e.k] = c.value))
        } else
          P
            ? ((a[c] = o), S(c) && (h[c] = o))
            : O && ((c.value = o), e.k && (a[e.k] = o))
      }
      o ? ((G.id = -1), Te(G, n)) : G()
    }
  }
}
let or = !1
const bt = () => {
    or ||
      (console.error('Hydration completed but contains mismatches.'), (or = !0))
  },
  Dl = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  $l = (e) => e.namespaceURI.includes('MathML'),
  cn = (e) => {
    if (e.nodeType === 1) {
      if (Dl(e)) return 'svg'
      if ($l(e)) return 'mathml'
    }
  },
  an = (e) => e.nodeType === 8
function jl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: u,
      },
    } = e,
    a = (g, p) => {
      if (!p.hasChildNodes()) {
        n(null, g, p), Cn(), (p._vnode = g)
        return
      }
      h(p.firstChild, g, null, null, null), Cn(), (p._vnode = g)
    },
    h = (g, p, A, j, V, q = !1) => {
      q = q || !!p.dynamicChildren
      const I = an(g) && g.data === '[',
        _ = () => O(g, p, A, j, V, I),
        { type: L, ref: b, shapeFlag: k, patchFlag: se } = p
      let ie = g.nodeType
      ;(p.el = g), se === -2 && ((q = !1), (p.dynamicChildren = null))
      let H = null
      switch (L) {
        case gt:
          ie !== 3
            ? p.children === ''
              ? (c((p.el = r('')), o(g), g), (H = g))
              : (H = _())
            : (g.data !== p.children && (bt(), (g.data = p.children)),
              (H = i(g)))
          break
        case ve:
          W(g)
            ? ((H = i(g)), U((p.el = g.content.firstChild), g, A))
            : ie !== 8 || I
              ? (H = _())
              : (H = i(g))
          break
        case jt:
          if ((I && ((g = i(g)), (ie = g.nodeType)), ie === 1 || ie === 3)) {
            H = g
            const Y = !p.children.length
            for (let F = 0; F < p.staticCount; F++)
              Y && (p.children += H.nodeType === 1 ? H.outerHTML : H.data),
                F === p.staticCount - 1 && (p.anchor = H),
                (H = i(H))
            return I ? i(H) : H
          } else _()
          break
        case Se:
          I ? (H = P(g, p, A, j, V, q)) : (H = _())
          break
        default:
          if (k & 1)
            (ie !== 1 || p.type.toLowerCase() !== g.tagName.toLowerCase()) &&
            !W(g)
              ? (H = _())
              : (H = v(g, p, A, j, V, q))
          else if (k & 6) {
            p.slotScopeIds = V
            const Y = o(g)
            if (
              (I
                ? (H = G(g))
                : an(g) && g.data === 'teleport start'
                  ? (H = G(g, g.data, 'teleport end'))
                  : (H = i(g)),
              t(p, Y, null, A, j, cn(Y), q),
              pt(p) && !p.type.__asyncResolved)
            ) {
              let F
              I
                ? ((F = he(Se)),
                  (F.anchor = H ? H.previousSibling : Y.lastChild))
                : (F = g.nodeType === 3 ? io('') : he('div')),
                (F.el = g),
                (p.component.subTree = F)
            }
          } else
            k & 64
              ? ie !== 8
                ? (H = _())
                : (H = p.type.hydrate(g, p, A, j, V, q, e, S))
              : k & 128 &&
                (H = p.type.hydrate(g, p, A, j, cn(o(g)), V, q, e, h))
      }
      return b != null && qt(b, null, j, p), H
    },
    v = (g, p, A, j, V, q) => {
      q = q || !!p.dynamicChildren
      const {
          type: I,
          props: _,
          patchFlag: L,
          shapeFlag: b,
          dirs: k,
          transition: se,
        } = p,
        ie = I === 'input' || I === 'option'
      if (ie || L !== -1) {
        k && ke(p, null, A, 'created')
        let H = !1
        if (W(g)) {
          H = Gi(null, se) && A && A.vnode.props && A.vnode.props.appear
          const F = g.content.firstChild
          H && se.beforeEnter(F), U(F, g, A), (p.el = g = F)
        }
        if (b & 16 && !(_ && (_.innerHTML || _.textContent))) {
          let F = S(g.firstChild, p, g, A, j, V, q)
          for (; F; ) {
            fn(g, 1) || bt()
            const fe = F
            ;(F = F.nextSibling), l(fe)
          }
        } else if (b & 8) {
          let F = p.children
          F[0] ===
            `
` &&
            (g.tagName === 'PRE' || g.tagName === 'TEXTAREA') &&
            (F = F.slice(1)),
            g.textContent !== F &&
              (fn(g, 0) || bt(), (g.textContent = p.children))
        }
        if (_) {
          if (ie || !q || L & 48) {
            const F = g.tagName.includes('-')
            for (const fe in _)
              ((ie && (fe.endsWith('value') || fe === 'indeterminate')) ||
                (zt(fe) && !Et(fe)) ||
                fe[0] === '.' ||
                F) &&
                s(g, fe, null, _[fe], void 0, A)
          } else if (_.onClick) s(g, 'onClick', null, _.onClick, void 0, A)
          else if (L & 4 && ht(_.style)) for (const F in _.style) _.style[F]
        }
        let Y
        ;(Y = _ && _.onVnodeBeforeMount) && Oe(Y, A, p),
          k && ke(p, null, A, 'beforeMount'),
          ((Y = _ && _.onVnodeMounted) || k || H) &&
            to(() => {
              Y && Oe(Y, A, p), H && se.enter(g), k && ke(p, null, A, 'mounted')
            }, j)
      }
      return g.nextSibling
    },
    S = (g, p, A, j, V, q, I) => {
      I = I || !!p.dynamicChildren
      const _ = p.children,
        L = _.length
      for (let b = 0; b < L; b++) {
        const k = I ? _[b] : (_[b] = Me(_[b])),
          se = k.type === gt
        g
          ? (se &&
              !I &&
              b + 1 < L &&
              Me(_[b + 1]).type === gt &&
              (c(r(g.data.slice(k.children.length)), A, i(g)),
              (g.data = k.children)),
            (g = h(g, k, j, V, q, I)))
          : se && !k.children
            ? c((k.el = r('')), A)
            : (fn(A, 1) || bt(), n(null, k, A, null, j, V, cn(A), q))
      }
      return g
    },
    P = (g, p, A, j, V, q) => {
      const { slotScopeIds: I } = p
      I && (V = V ? V.concat(I) : I)
      const _ = o(g),
        L = S(i(g), p, _, A, j, V, q)
      return L && an(L) && L.data === ']'
        ? i((p.anchor = L))
        : (bt(), c((p.anchor = u(']')), _, L), L)
    },
    O = (g, p, A, j, V, q) => {
      if ((fn(g.parentElement, 1) || bt(), (p.el = null), q)) {
        const L = G(g)
        for (;;) {
          const b = i(g)
          if (b && b !== L) l(b)
          else break
        }
      }
      const I = i(g),
        _ = o(g)
      return (
        l(g),
        n(null, p, _, I, A, j, cn(_), V),
        A && ((A.vnode.el = p.el), Zi(A, p.el)),
        I
      )
    },
    G = (g, p = '[', A = ']') => {
      let j = 0
      for (; g; )
        if (((g = i(g)), g && an(g) && (g.data === p && j++, g.data === A))) {
          if (j === 0) return i(g)
          j--
        }
      return g
    },
    U = (g, p, A) => {
      const j = p.parentNode
      j && j.replaceChild(g, p)
      let V = A
      for (; V; )
        V.vnode.el === p && (V.vnode.el = V.subTree.el = g), (V = V.parent)
    },
    W = (g) => g.nodeType === 1 && g.tagName === 'TEMPLATE'
  return [a, h]
}
const lr = 'data-allow-mismatch',
  Vl = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function fn(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(lr); ) e = e.parentElement
  const n = e && e.getAttribute(lr)
  if (n == null) return !1
  if (n === '') return !0
  {
    const s = n.split(',')
    return t === 0 && s.includes('children') ? !0 : n.split(',').includes(Vl[t])
  }
}
Pn().requestIdleCallback
Pn().cancelIdleCallback
const pt = (e) => !!e.type.__asyncLoader,
  jn = (e) => e.type.__isKeepAlive
function kl(e, t) {
  Ii(e, 'a', t)
}
function Ul(e, t) {
  Ii(e, 'da', t)
}
function Ii(e, t, n = ue) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Vn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) jn(r.parent.vnode) && Bl(s, t, n, r), (r = r.parent)
  }
}
function Bl(e, t, n, s) {
  const r = Vn(t, e, s, !0)
  kn(() => {
    Is(s[t], r)
  }, n)
}
function Vn(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          rt()
          const l = en(n),
            c = De(t, n, e, o)
          return l(), it(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const Xe =
    (e) =>
    (t, n = ue) => {
      ;(!Xt || e === 'sp') && Vn(e, (...s) => t(...s), n)
    },
  Kl = Xe('bm'),
  Ot = Xe('m'),
  Wl = Xe('bu'),
  ql = Xe('u'),
  Pi = Xe('bum'),
  kn = Xe('um'),
  Gl = Xe('sp'),
  Yl = Xe('rtg'),
  Xl = Xe('rtc')
function Jl(e, t = ue) {
  Vn('ec', e, t)
}
const Us = 'components',
  zl = 'directives'
function af(e, t) {
  return Bs(Us, e, !0, t) || e
}
const Li = Symbol.for('v-ndc')
function ff(e) {
  return re(e) ? Bs(Us, e, !1) || e : e || Li
}
function uf(e) {
  return Bs(zl, e)
}
function Bs(e, t, n = !0, s = !1) {
  const r = ce || ue
  if (r) {
    const i = r.type
    if (e === Us) {
      const l = Fc(i, !1)
      if (l && (l === t || l === Pe(t) || l === In(Pe(t)))) return i
    }
    const o = cr(r[e] || i[e], t) || cr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function cr(e, t) {
  return e && (e[t] || e[Pe(t)] || e[In(Pe(t))])
}
function df(e, t, n, s) {
  let r
  const i = n,
    o = D(e)
  if (o || re(e)) {
    const l = o && ht(e)
    let c = !1
    l && ((c = !Ie(e)), (e = Nn(e))), (r = new Array(e.length))
    for (let u = 0, a = e.length; u < a; u++)
      r[u] = t(c ? ye(e[u]) : e[u], u, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
  } else if (Z(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, u = l.length; c < u; c++) {
        const a = l[c]
        r[c] = t(e[a], a, c, i)
      }
    }
  else r = []
  return r
}
function hf(e, t, n = {}, s, r) {
  if (ce.ce || (ce.parent && pt(ce.parent) && ce.parent.ce))
    return (
      t !== 'default' && (n.name = t),
      Es(),
      Cs(Se, null, [he('slot', n, s && s())], 64)
    )
  let i = e[t]
  i && i._c && (i._d = !1), Es()
  const o = i && Ni(i(n)),
    l = n.key || (o && o.key),
    c = Cs(
      Se,
      { key: (l && !He(l) ? l : `_${t}`) + (!o && s ? '_fb' : '') },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !r && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']),
    i && i._c && (i._d = !0),
    c
  )
}
function Ni(e) {
  return e.some((t) =>
    Yt(t) ? !(t.type === ve || (t.type === Se && !Ni(t.children))) : !0,
  )
    ? e
    : null
}
function pf(e, t) {
  const n = {}
  for (const s in e) n[/[A-Z]/.test(s) ? `on:${s}` : gn(s)] = e[s]
  return n
}
const bs = (e) => (e ? (oo(e) ? Wn(e) : bs(e.parent)) : null),
  $t = le(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => bs(e.parent),
    $root: (e) => bs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ks(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ks(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = $n.bind(e.proxy)),
    $watch: (e) => _c.bind(e),
  }),
  es = (e, t) => e !== ee && !e.__isScriptSetup && z(e, t),
  Ql = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e
      let u
      if (t[0] !== '$') {
        const S = o[t]
        if (S !== void 0)
          switch (S) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (es(s, t)) return (o[t] = 1), s[t]
          if (r !== ee && z(r, t)) return (o[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && z(u, t)) return (o[t] = 3), i[t]
          if (n !== ee && z(n, t)) return (o[t] = 4), n[t]
          ws && (o[t] = 0)
        }
      }
      const a = $t[t]
      let h, v
      if (a) return t === '$attrs' && me(e.attrs, 'get', ''), a(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ee && z(n, t)) return (o[t] = 4), n[t]
      if (((v = c.config.globalProperties), z(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return es(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && z(s, t)
          ? ((s[t] = n), !0)
          : z(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l
      return (
        !!n[o] ||
        (e !== ee && z(e, o)) ||
        es(t, o) ||
        ((l = i[0]) && z(l, o)) ||
        z(s, o) ||
        z($t, o) ||
        z(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : z(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function gf() {
  return Zl().slots
}
function Zl() {
  const e = Kn()
  return e.setupContext || (e.setupContext = co(e))
}
function ar(e) {
  return D(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ws = !0
function ec(e) {
  const t = Ks(e),
    n = e.proxy,
    s = e.ctx
  ;(ws = !1), t.beforeCreate && fr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: a,
    beforeMount: h,
    mounted: v,
    beforeUpdate: S,
    updated: P,
    activated: O,
    deactivated: G,
    beforeDestroy: U,
    beforeUnmount: W,
    destroyed: g,
    unmounted: p,
    render: A,
    renderTracked: j,
    renderTriggered: V,
    errorCaptured: q,
    serverPrefetch: I,
    expose: _,
    inheritAttrs: L,
    components: b,
    directives: k,
    filters: se,
  } = t
  if ((u && tc(u, s, null), o))
    for (const Y in o) {
      const F = o[Y]
      K(F) && (s[Y] = F.bind(n))
    }
  if (r) {
    const Y = r.call(n, n)
    Z(Y) && (e.data = Fn(Y))
  }
  if (((ws = !0), i))
    for (const Y in i) {
      const F = i[Y],
        fe = K(F) ? F.bind(n, n) : K(F.get) ? F.get.bind(n, n) : Ue,
        tn = !K(F) && K(F.set) ? F.set.bind(n) : Ue,
        ot = oe({ get: fe, set: tn })
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: ($e) => (ot.value = $e),
      })
    }
  if (l) for (const Y in l) Fi(l[Y], s, n, Y)
  if (c) {
    const Y = K(c) ? c.call(n) : c
    Reflect.ownKeys(Y).forEach((F) => {
      lc(F, Y[F])
    })
  }
  a && fr(a, e, 'c')
  function H(Y, F) {
    D(F) ? F.forEach((fe) => Y(fe.bind(n))) : F && Y(F.bind(n))
  }
  if (
    (H(Kl, h),
    H(Ot, v),
    H(Wl, S),
    H(ql, P),
    H(kl, O),
    H(Ul, G),
    H(Jl, q),
    H(Xl, j),
    H(Yl, V),
    H(Pi, W),
    H(kn, p),
    H(Gl, I),
    D(_))
  )
    if (_.length) {
      const Y = e.exposed || (e.exposed = {})
      _.forEach((F) => {
        Object.defineProperty(Y, F, {
          get: () => n[F],
          set: (fe) => (n[F] = fe),
        })
      })
    } else e.exposed || (e.exposed = {})
  A && e.render === Ue && (e.render = A),
    L != null && (e.inheritAttrs = L),
    b && (e.components = b),
    k && (e.directives = k),
    I && Mi(e)
}
function tc(e, t, n = Ue) {
  D(e) && (e = Ss(e))
  for (const s in e) {
    const r = e[s]
    let i
    Z(r)
      ? 'default' in r
        ? (i = At(r.from || s, r.default, !0))
        : (i = At(r.from || s))
      : (i = At(r)),
      ae(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i)
  }
}
function fr(e, t, n) {
  De(D(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Fi(e, t, n, s) {
  let r = s.includes('.') ? zi(n, s) : () => n[s]
  if (re(e)) {
    const i = t[e]
    K(i) && Fe(r, i)
  } else if (K(e)) Fe(r, e.bind(n))
  else if (Z(e))
    if (D(e)) e.forEach((i) => Fi(i, t, n, s))
    else {
      const i = K(e.handler) ? e.handler.bind(n) : t[e.handler]
      K(i) && Fe(r, i, e)
    }
}
function Ks(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((u) => An(c, u, o, !0)),
          An(c, t, o)),
    Z(t) && i.set(t, c),
    c
  )
}
function An(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && An(e, i, n, !0), r && r.forEach((o) => An(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = nc[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const nc = {
  data: ur,
  props: dr,
  emits: dr,
  methods: Ft,
  computed: Ft,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: Ft,
  directives: Ft,
  watch: rc,
  provide: ur,
  inject: sc,
}
function ur(e, t) {
  return t
    ? e
      ? function () {
          return le(
            K(e) ? e.call(this, this) : e,
            K(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function sc(e, t) {
  return Ft(Ss(e), Ss(t))
}
function Ss(e) {
  if (D(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ft(e, t) {
  return e ? le(Object.create(null), e, t) : t
}
function dr(e, t) {
  return e
    ? D(e) && D(t)
      ? [...new Set([...e, ...t])]
      : le(Object.create(null), ar(e), ar(t ?? {}))
    : t
}
function rc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = le(Object.create(null), e)
  for (const s in t) n[s] = _e(e[s], t[s])
  return n
}
function Hi() {
  return {
    app: null,
    config: {
      isNativeTag: Fo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let ic = 0
function oc(e, t) {
  return function (s, r = null) {
    K(s) || (s = le({}, s)), r != null && !Z(r) && (r = null)
    const i = Hi(),
      o = new WeakSet(),
      l = []
    let c = !1
    const u = (i.app = {
      _uid: ic++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Dc,
      get config() {
        return i.config
      },
      set config(a) {},
      use(a, ...h) {
        return (
          o.has(a) ||
            (a && K(a.install)
              ? (o.add(a), a.install(u, ...h))
              : K(a) && (o.add(a), a(u, ...h))),
          u
        )
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), u
      },
      component(a, h) {
        return h ? ((i.components[a] = h), u) : i.components[a]
      },
      directive(a, h) {
        return h ? ((i.directives[a] = h), u) : i.directives[a]
      },
      mount(a, h, v) {
        if (!c) {
          const S = u._ceVNode || he(s, r)
          return (
            (S.appContext = i),
            v === !0 ? (v = 'svg') : v === !1 && (v = void 0),
            h && t ? t(S, a) : e(S, a, v),
            (c = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            Wn(S.component)
          )
        }
      },
      onUnmount(a) {
        l.push(a)
      },
      unmount() {
        c &&
          (De(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__)
      },
      provide(a, h) {
        return (i.provides[a] = h), u
      },
      runWithContext(a) {
        const h = Tt
        Tt = u
        try {
          return a()
        } finally {
          Tt = h
        }
      },
    })
    return u
  }
}
let Tt = null
function lc(e, t) {
  if (ue) {
    let n = ue.provides
    const s = ue.parent && ue.parent.provides
    s === n && (n = ue.provides = Object.create(s)), (n[e] = t)
  }
}
function At(e, t, n = !1) {
  const s = ue || ce
  if (s || Tt) {
    const r = Tt
      ? Tt._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && K(t) ? t.call(s && s.proxy) : t
  }
}
const Di = {},
  $i = () => Object.create(Di),
  ji = (e) => Object.getPrototypeOf(e) === Di
function cc(e, t, n, s = !1) {
  const r = {},
    i = $i()
  ;(e.propsDefaults = Object.create(null)), Vi(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : yl(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function ac(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = J(r),
    [c] = e.propsOptions
  let u = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps
      for (let h = 0; h < a.length; h++) {
        let v = a[h]
        if (Bn(e.emitsOptions, v)) continue
        const S = t[v]
        if (c)
          if (z(i, v)) S !== i[v] && ((i[v] = S), (u = !0))
          else {
            const P = Pe(v)
            r[P] = xs(c, l, P, S, e, !1)
          }
        else S !== i[v] && ((i[v] = S), (u = !0))
      }
    }
  } else {
    Vi(e, t, r, i) && (u = !0)
    let a
    for (const h in l)
      (!t || (!z(t, h) && ((a = st(h)) === h || !z(t, a)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[a] !== void 0) &&
            (r[h] = xs(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l) for (const h in i) (!t || !z(t, h)) && (delete i[h], (u = !0))
  }
  u && qe(e.attrs, 'set', '')
}
function Vi(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (Et(c)) continue
      const u = t[c]
      let a
      r && z(r, (a = Pe(c)))
        ? !i || !i.includes(a)
          ? (n[a] = u)
          : ((l || (l = {}))[a] = u)
        : Bn(e.emitsOptions, c) ||
          ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)))
    }
  if (i) {
    const c = J(n),
      u = l || ee
    for (let a = 0; a < i.length; a++) {
      const h = i[a]
      n[h] = xs(r, c, h, u[h], e, !z(u, h))
    }
  }
  return o
}
function xs(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = z(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && K(c)) {
        const { propsDefaults: u } = r
        if (n in u) s = u[n]
        else {
          const a = en(r)
          ;(s = u[n] = c.call(null, t)), a()
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === st(n)) && (s = !0))
  }
  return s
}
const fc = new WeakMap()
function ki(e, t, n = !1) {
  const s = n ? fc : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!K(e)) {
    const a = (h) => {
      c = !0
      const [v, S] = ki(h, t, !0)
      le(o, v), S && l.push(...S)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!i && !c) return Z(e) && s.set(e, St), St
  if (D(i))
    for (let a = 0; a < i.length; a++) {
      const h = Pe(i[a])
      hr(h) && (o[h] = ee)
    }
  else if (i)
    for (const a in i) {
      const h = Pe(a)
      if (hr(h)) {
        const v = i[a],
          S = (o[h] = D(v) || K(v) ? { type: v } : le({}, v)),
          P = S.type
        let O = !1,
          G = !0
        if (D(P))
          for (let U = 0; U < P.length; ++U) {
            const W = P[U],
              g = K(W) && W.name
            if (g === 'Boolean') {
              O = !0
              break
            } else g === 'String' && (G = !1)
          }
        else O = K(P) && P.name === 'Boolean'
        ;(S[0] = O), (S[1] = G), (O || z(S, 'default')) && l.push(h)
      }
    }
  const u = [o, l]
  return Z(e) && s.set(e, u), u
}
function hr(e) {
  return e[0] !== '$' && !Et(e)
}
const Ui = (e) => e[0] === '_' || e === '$stable',
  Ws = (e) => (D(e) ? e.map(Me) : [Me(e)]),
  uc = (e, t, n) => {
    if (t._n) return t
    const s = Pl((...r) => Ws(t(...r)), n)
    return (s._c = !1), s
  },
  Bi = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ui(r)) continue
      const i = e[r]
      if (K(i)) t[r] = uc(r, i, s)
      else if (i != null) {
        const o = Ws(i)
        t[r] = () => o
      }
    }
  },
  Ki = (e, t) => {
    const n = Ws(t)
    e.slots.default = () => n
  },
  Wi = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  dc = (e, t, n) => {
    const s = (e.slots = $i())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Wi(s, t, n), n && Xr(s, '_', r, !0)) : Bi(t, s)
    } else t && Ki(e, t)
  },
  hc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ee
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : Wi(r, t, n)
        : ((i = !t.$stable), Bi(t, r)),
        (o = t)
    } else t && (Ki(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Ui(l) && o[l] == null && delete r[l]
  },
  Te = to
function pc(e) {
  return qi(e)
}
function gc(e) {
  return qi(e, jl)
}
function qi(e, t) {
  const n = Pn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: a,
      parentNode: h,
      nextSibling: v,
      setScopeId: S = Ue,
      insertStaticContent: P,
    } = e,
    O = (
      f,
      d,
      m,
      x = null,
      y = null,
      w = null,
      R = void 0,
      T = null,
      C = !!d.dynamicChildren,
    ) => {
      if (f === d) return
      f && !ut(f, d) && ((x = nn(f)), $e(f, y, w, !0), (f = null)),
        d.patchFlag === -2 && ((C = !1), (d.dynamicChildren = null))
      const { type: E, ref: $, shapeFlag: M } = d
      switch (E) {
        case gt:
          G(f, d, m, x)
          break
        case ve:
          U(f, d, m, x)
          break
        case jt:
          f == null && W(d, m, x, R)
          break
        case Se:
          b(f, d, m, x, y, w, R, T, C)
          break
        default:
          M & 1
            ? A(f, d, m, x, y, w, R, T, C)
            : M & 6
              ? k(f, d, m, x, y, w, R, T, C)
              : (M & 64 || M & 128) && E.process(f, d, m, x, y, w, R, T, C, vt)
      }
      $ != null && y && qt($, f && f.ref, w, d || f, !d)
    },
    G = (f, d, m, x) => {
      if (f == null) s((d.el = l(d.children)), m, x)
      else {
        const y = (d.el = f.el)
        d.children !== f.children && u(y, d.children)
      }
    },
    U = (f, d, m, x) => {
      f == null ? s((d.el = c(d.children || '')), m, x) : (d.el = f.el)
    },
    W = (f, d, m, x) => {
      ;[f.el, f.anchor] = P(f.children, d, m, x, f.el, f.anchor)
    },
    g = ({ el: f, anchor: d }, m, x) => {
      let y
      for (; f && f !== d; ) (y = v(f)), s(f, m, x), (f = y)
      s(d, m, x)
    },
    p = ({ el: f, anchor: d }) => {
      let m
      for (; f && f !== d; ) (m = v(f)), r(f), (f = m)
      r(d)
    },
    A = (f, d, m, x, y, w, R, T, C) => {
      d.type === 'svg' ? (R = 'svg') : d.type === 'math' && (R = 'mathml'),
        f == null ? j(d, m, x, y, w, R, T, C) : I(f, d, y, w, R, T, C)
    },
    j = (f, d, m, x, y, w, R, T) => {
      let C, E
      const { props: $, shapeFlag: M, transition: N, dirs: B } = f
      if (
        ((C = f.el = o(f.type, w, $ && $.is, $)),
        M & 8
          ? a(C, f.children)
          : M & 16 && q(f.children, C, null, x, y, ts(f, w), R, T),
        B && ke(f, null, x, 'created'),
        V(C, f, f.scopeId, R, x),
        $)
      ) {
        for (const te in $)
          te !== 'value' && !Et(te) && i(C, te, null, $[te], w, x)
        'value' in $ && i(C, 'value', null, $.value, w),
          (E = $.onVnodeBeforeMount) && Oe(E, x, f)
      }
      B && ke(f, null, x, 'beforeMount')
      const X = Gi(y, N)
      X && N.beforeEnter(C),
        s(C, d, m),
        ((E = $ && $.onVnodeMounted) || X || B) &&
          Te(() => {
            E && Oe(E, x, f), X && N.enter(C), B && ke(f, null, x, 'mounted')
          }, y)
    },
    V = (f, d, m, x, y) => {
      if ((m && S(f, m), x)) for (let w = 0; w < x.length; w++) S(f, x[w])
      if (y) {
        let w = y.subTree
        if (
          d === w ||
          (eo(w.type) && (w.ssContent === d || w.ssFallback === d))
        ) {
          const R = y.vnode
          V(f, R, R.scopeId, R.slotScopeIds, y.parent)
        }
      }
    },
    q = (f, d, m, x, y, w, R, T, C = 0) => {
      for (let E = C; E < f.length; E++) {
        const $ = (f[E] = T ? Ze(f[E]) : Me(f[E]))
        O(null, $, d, m, x, y, w, R, T)
      }
    },
    I = (f, d, m, x, y, w, R) => {
      const T = (d.el = f.el)
      let { patchFlag: C, dynamicChildren: E, dirs: $ } = d
      C |= f.patchFlag & 16
      const M = f.props || ee,
        N = d.props || ee
      let B
      if (
        (m && lt(m, !1),
        (B = N.onVnodeBeforeUpdate) && Oe(B, m, d, f),
        $ && ke(d, f, m, 'beforeUpdate'),
        m && lt(m, !0),
        ((M.innerHTML && N.innerHTML == null) ||
          (M.textContent && N.textContent == null)) &&
          a(T, ''),
        E
          ? _(f.dynamicChildren, E, T, m, x, ts(d, y), w)
          : R || F(f, d, T, null, m, x, ts(d, y), w, !1),
        C > 0)
      ) {
        if (C & 16) L(T, M, N, m, y)
        else if (
          (C & 2 && M.class !== N.class && i(T, 'class', null, N.class, y),
          C & 4 && i(T, 'style', M.style, N.style, y),
          C & 8)
        ) {
          const X = d.dynamicProps
          for (let te = 0; te < X.length; te++) {
            const Q = X[te],
              xe = M[Q],
              pe = N[Q]
            ;(pe !== xe || Q === 'value') && i(T, Q, xe, pe, y, m)
          }
        }
        C & 1 && f.children !== d.children && a(T, d.children)
      } else !R && E == null && L(T, M, N, m, y)
      ;((B = N.onVnodeUpdated) || $) &&
        Te(() => {
          B && Oe(B, m, d, f), $ && ke(d, f, m, 'updated')
        }, x)
    },
    _ = (f, d, m, x, y, w, R) => {
      for (let T = 0; T < d.length; T++) {
        const C = f[T],
          E = d[T],
          $ =
            C.el && (C.type === Se || !ut(C, E) || C.shapeFlag & 70)
              ? h(C.el)
              : m
        O(C, E, $, null, x, y, w, R, !0)
      }
    },
    L = (f, d, m, x, y) => {
      if (d !== m) {
        if (d !== ee)
          for (const w in d) !Et(w) && !(w in m) && i(f, w, d[w], null, y, x)
        for (const w in m) {
          if (Et(w)) continue
          const R = m[w],
            T = d[w]
          R !== T && w !== 'value' && i(f, w, T, R, y, x)
        }
        'value' in m && i(f, 'value', d.value, m.value, y)
      }
    },
    b = (f, d, m, x, y, w, R, T, C) => {
      const E = (d.el = f ? f.el : l('')),
        $ = (d.anchor = f ? f.anchor : l(''))
      let { patchFlag: M, dynamicChildren: N, slotScopeIds: B } = d
      B && (T = T ? T.concat(B) : B),
        f == null
          ? (s(E, m, x), s($, m, x), q(d.children || [], m, $, y, w, R, T, C))
          : M > 0 && M & 64 && N && f.dynamicChildren
            ? (_(f.dynamicChildren, N, m, y, w, R, T),
              (d.key != null || (y && d === y.subTree)) && Yi(f, d, !0))
            : F(f, d, m, $, y, w, R, T, C)
    },
    k = (f, d, m, x, y, w, R, T, C) => {
      ;(d.slotScopeIds = T),
        f == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, m, x, R, C)
            : se(d, m, x, y, w, R, C)
          : ie(f, d, C)
    },
    se = (f, d, m, x, y, w, R) => {
      const T = (f.component = Ic(f, x, y))
      if ((jn(f) && (T.ctx.renderer = vt), Pc(T, !1, R), T.asyncDep)) {
        if ((y && y.registerDep(T, H, R), !f.el)) {
          const C = (T.subTree = he(ve))
          U(null, C, d, m)
        }
      } else H(T, f, d, m, y, w, R)
    },
    ie = (f, d, m) => {
      const x = (d.component = f.component)
      if (Ec(f, d, m))
        if (x.asyncDep && !x.asyncResolved) {
          Y(x, d, m)
          return
        } else (x.next = d), x.update()
      else (d.el = f.el), (x.vnode = d)
    },
    H = (f, d, m, x, y, w, R) => {
      const T = () => {
        if (f.isMounted) {
          let { next: M, bu: N, u: B, parent: X, vnode: te } = f
          {
            const Ee = Xi(f)
            if (Ee) {
              M && ((M.el = te.el), Y(f, M, R)),
                Ee.asyncDep.then(() => {
                  f.isUnmounted || T()
                })
              return
            }
          }
          let Q = M,
            xe
          lt(f, !1),
            M ? ((M.el = te.el), Y(f, M, R)) : (M = te),
            N && mn(N),
            (xe = M.props && M.props.onVnodeBeforeUpdate) && Oe(xe, X, M, te),
            lt(f, !0)
          const pe = ns(f),
            Le = f.subTree
          ;(f.subTree = pe),
            O(Le, pe, h(Le.el), nn(Le), f, y, w),
            (M.el = pe.el),
            Q === null && Zi(f, pe.el),
            B && Te(B, y),
            (xe = M.props && M.props.onVnodeUpdated) &&
              Te(() => Oe(xe, X, M, te), y)
        } else {
          let M
          const { el: N, props: B } = d,
            { bm: X, m: te, parent: Q, root: xe, type: pe } = f,
            Le = pt(d)
          if (
            (lt(f, !1),
            X && mn(X),
            !Le && (M = B && B.onVnodeBeforeMount) && Oe(M, Q, d),
            lt(f, !0),
            N && Yn)
          ) {
            const Ee = () => {
              ;(f.subTree = ns(f)), Yn(N, f.subTree, f, y, null)
            }
            Le && pe.__asyncHydrate ? pe.__asyncHydrate(N, f, Ee) : Ee()
          } else {
            xe.ce && xe.ce._injectChildStyle(pe)
            const Ee = (f.subTree = ns(f))
            O(null, Ee, m, x, f, y, w), (d.el = Ee.el)
          }
          if ((te && Te(te, y), !Le && (M = B && B.onVnodeMounted))) {
            const Ee = d
            Te(() => Oe(M, Q, Ee), y)
          }
          ;(d.shapeFlag & 256 ||
            (Q && pt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
            f.a &&
            Te(f.a, y),
            (f.isMounted = !0),
            (d = m = x = null)
        }
      }
      f.scope.on()
      const C = (f.effect = new ei(T))
      f.scope.off()
      const E = (f.update = C.run.bind(C)),
        $ = (f.job = C.runIfDirty.bind(C))
      ;($.i = f), ($.id = f.uid), (C.scheduler = () => ks($)), lt(f, !0), E()
    },
    Y = (f, d, m) => {
      d.component = f
      const x = f.vnode.props
      ;(f.vnode = d),
        (f.next = null),
        ac(f, d.props, x, m),
        hc(f, d.children, m),
        rt(),
        rr(f),
        it()
    },
    F = (f, d, m, x, y, w, R, T, C = !1) => {
      const E = f && f.children,
        $ = f ? f.shapeFlag : 0,
        M = d.children,
        { patchFlag: N, shapeFlag: B } = d
      if (N > 0) {
        if (N & 128) {
          tn(E, M, m, x, y, w, R, T, C)
          return
        } else if (N & 256) {
          fe(E, M, m, x, y, w, R, T, C)
          return
        }
      }
      B & 8
        ? ($ & 16 && Mt(E, y, w), M !== E && a(m, M))
        : $ & 16
          ? B & 16
            ? tn(E, M, m, x, y, w, R, T, C)
            : Mt(E, y, w, !0)
          : ($ & 8 && a(m, ''), B & 16 && q(M, m, x, y, w, R, T, C))
    },
    fe = (f, d, m, x, y, w, R, T, C) => {
      ;(f = f || St), (d = d || St)
      const E = f.length,
        $ = d.length,
        M = Math.min(E, $)
      let N
      for (N = 0; N < M; N++) {
        const B = (d[N] = C ? Ze(d[N]) : Me(d[N]))
        O(f[N], B, m, null, y, w, R, T, C)
      }
      E > $ ? Mt(f, y, w, !0, !1, M) : q(d, m, x, y, w, R, T, C, M)
    },
    tn = (f, d, m, x, y, w, R, T, C) => {
      let E = 0
      const $ = d.length
      let M = f.length - 1,
        N = $ - 1
      for (; E <= M && E <= N; ) {
        const B = f[E],
          X = (d[E] = C ? Ze(d[E]) : Me(d[E]))
        if (ut(B, X)) O(B, X, m, null, y, w, R, T, C)
        else break
        E++
      }
      for (; E <= M && E <= N; ) {
        const B = f[M],
          X = (d[N] = C ? Ze(d[N]) : Me(d[N]))
        if (ut(B, X)) O(B, X, m, null, y, w, R, T, C)
        else break
        M--, N--
      }
      if (E > M) {
        if (E <= N) {
          const B = N + 1,
            X = B < $ ? d[B].el : x
          for (; E <= N; )
            O(null, (d[E] = C ? Ze(d[E]) : Me(d[E])), m, X, y, w, R, T, C), E++
        }
      } else if (E > N) for (; E <= M; ) $e(f[E], y, w, !0), E++
      else {
        const B = E,
          X = E,
          te = new Map()
        for (E = X; E <= N; E++) {
          const Ce = (d[E] = C ? Ze(d[E]) : Me(d[E]))
          Ce.key != null && te.set(Ce.key, E)
        }
        let Q,
          xe = 0
        const pe = N - X + 1
        let Le = !1,
          Ee = 0
        const It = new Array(pe)
        for (E = 0; E < pe; E++) It[E] = 0
        for (E = B; E <= M; E++) {
          const Ce = f[E]
          if (xe >= pe) {
            $e(Ce, y, w, !0)
            continue
          }
          let je
          if (Ce.key != null) je = te.get(Ce.key)
          else
            for (Q = X; Q <= N; Q++)
              if (It[Q - X] === 0 && ut(Ce, d[Q])) {
                je = Q
                break
              }
          je === void 0
            ? $e(Ce, y, w, !0)
            : ((It[je - X] = E + 1),
              je >= Ee ? (Ee = je) : (Le = !0),
              O(Ce, d[je], m, null, y, w, R, T, C),
              xe++)
        }
        const Qs = Le ? mc(It) : St
        for (Q = Qs.length - 1, E = pe - 1; E >= 0; E--) {
          const Ce = X + E,
            je = d[Ce],
            Zs = Ce + 1 < $ ? d[Ce + 1].el : x
          It[E] === 0
            ? O(null, je, m, Zs, y, w, R, T, C)
            : Le && (Q < 0 || E !== Qs[Q] ? ot(je, m, Zs, 2) : Q--)
        }
      }
    },
    ot = (f, d, m, x, y = null) => {
      const { el: w, type: R, transition: T, children: C, shapeFlag: E } = f
      if (E & 6) {
        ot(f.component.subTree, d, m, x)
        return
      }
      if (E & 128) {
        f.suspense.move(d, m, x)
        return
      }
      if (E & 64) {
        R.move(f, d, m, vt)
        return
      }
      if (R === Se) {
        s(w, d, m)
        for (let M = 0; M < C.length; M++) ot(C[M], d, m, x)
        s(f.anchor, d, m)
        return
      }
      if (R === jt) {
        g(f, d, m)
        return
      }
      if (x !== 2 && E & 1 && T)
        if (x === 0) T.beforeEnter(w), s(w, d, m), Te(() => T.enter(w), y)
        else {
          const { leave: M, delayLeave: N, afterLeave: B } = T,
            X = () => s(w, d, m),
            te = () => {
              M(w, () => {
                X(), B && B()
              })
            }
          N ? N(w, X, te) : te()
        }
      else s(w, d, m)
    },
    $e = (f, d, m, x = !1, y = !1) => {
      const {
        type: w,
        props: R,
        ref: T,
        children: C,
        dynamicChildren: E,
        shapeFlag: $,
        patchFlag: M,
        dirs: N,
        cacheIndex: B,
      } = f
      if (
        (M === -2 && (y = !1),
        T != null && qt(T, null, m, f, !0),
        B != null && (d.renderCache[B] = void 0),
        $ & 256)
      ) {
        d.ctx.deactivate(f)
        return
      }
      const X = $ & 1 && N,
        te = !pt(f)
      let Q
      if ((te && (Q = R && R.onVnodeBeforeUnmount) && Oe(Q, d, f), $ & 6))
        No(f.component, m, x)
      else {
        if ($ & 128) {
          f.suspense.unmount(m, x)
          return
        }
        X && ke(f, null, d, 'beforeUnmount'),
          $ & 64
            ? f.type.remove(f, d, m, vt, x)
            : E && !E.hasOnce && (w !== Se || (M > 0 && M & 64))
              ? Mt(E, d, m, !1, !0)
              : ((w === Se && M & 384) || (!y && $ & 16)) && Mt(C, d, m),
          x && Js(f)
      }
      ;((te && (Q = R && R.onVnodeUnmounted)) || X) &&
        Te(() => {
          Q && Oe(Q, d, f), X && ke(f, null, d, 'unmounted')
        }, m)
    },
    Js = (f) => {
      const { type: d, el: m, anchor: x, transition: y } = f
      if (d === Se) {
        Lo(m, x)
        return
      }
      if (d === jt) {
        p(f)
        return
      }
      const w = () => {
        r(m), y && !y.persisted && y.afterLeave && y.afterLeave()
      }
      if (f.shapeFlag & 1 && y && !y.persisted) {
        const { leave: R, delayLeave: T } = y,
          C = () => R(m, w)
        T ? T(f.el, w, C) : C()
      } else w()
    },
    Lo = (f, d) => {
      let m
      for (; f !== d; ) (m = v(f)), r(f), (f = m)
      r(d)
    },
    No = (f, d, m) => {
      const { bum: x, scope: y, job: w, subTree: R, um: T, m: C, a: E } = f
      pr(C),
        pr(E),
        x && mn(x),
        y.stop(),
        w && ((w.flags |= 8), $e(R, f, d, m)),
        T && Te(T, d),
        Te(() => {
          f.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    Mt = (f, d, m, x = !1, y = !1, w = 0) => {
      for (let R = w; R < f.length; R++) $e(f[R], d, m, x, y)
    },
    nn = (f) => {
      if (f.shapeFlag & 6) return nn(f.component.subTree)
      if (f.shapeFlag & 128) return f.suspense.next()
      const d = v(f.anchor || f.el),
        m = d && d[Ll]
      return m ? v(m) : d
    }
  let qn = !1
  const zs = (f, d, m) => {
      f == null
        ? d._vnode && $e(d._vnode, null, null, !0)
        : O(d._vnode || null, f, d, null, null, null, m),
        (d._vnode = f),
        qn || ((qn = !0), rr(), Cn(), (qn = !1))
    },
    vt = {
      p: O,
      um: $e,
      m: ot,
      r: Js,
      mt: se,
      mc: q,
      pc: F,
      pbc: _,
      n: nn,
      o: e,
    }
  let Gn, Yn
  return (
    t && ([Gn, Yn] = t(vt)), { render: zs, hydrate: Gn, createApp: oc(zs, Gn) }
  )
}
function ts({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function lt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Gi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Yi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (D(s) && D(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Ze(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Yi(o, l)),
        l.type === gt && (l.el = o.el)
    }
}
function mc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l)
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function Xi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Xi(t)
}
function pr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const yc = Symbol.for('v-scx'),
  vc = () => At(yc)
function Ji(e, t) {
  return Un(e, null, t)
}
function mf(e, t) {
  return Un(e, null, { flush: 'post' })
}
function Fe(e, t, n) {
  return Un(e, t, n)
}
function Un(e, t, n = ee) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = le({}, n),
    c = (t && s) || (!t && i !== 'post')
  let u
  if (Xt) {
    if (i === 'sync') {
      const S = vc()
      u = S.__watcherHandles || (S.__watcherHandles = [])
    } else if (!c) {
      const S = () => {}
      return (S.stop = Ue), (S.resume = Ue), (S.pause = Ue), S
    }
  }
  const a = ue
  l.call = (S, P, O) => De(S, a, P, O)
  let h = !1
  i === 'post'
    ? (l.scheduler = (S) => {
        Te(S, a && a.suspense)
      })
    : i !== 'sync' &&
      ((h = !0),
      (l.scheduler = (S, P) => {
        P ? S() : ks(S)
      })),
    (l.augmentJob = (S) => {
      t && (S.flags |= 4),
        h && ((S.flags |= 2), a && ((S.id = a.uid), (S.i = a)))
    })
  const v = Rl(e, t, l)
  return Xt && (u ? u.push(v) : c && v()), v
}
function _c(e, t, n) {
  const s = this.proxy,
    r = re(e) ? (e.includes('.') ? zi(s, e) : () => s[e]) : e.bind(s, s)
  let i
  K(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = en(this),
    l = Un(r, i.bind(s), n)
  return o(), l
}
function zi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const bc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${st(t)}Modifiers`]
function wc(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ee
  let r = n
  const i = t.startsWith('update:'),
    o = i && bc(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((a) => (re(a) ? a.trim() : a))),
    o.number && (r = n.map(Vo)))
  let l,
    c = s[(l = gn(t))] || s[(l = gn(Pe(t)))]
  !c && i && (c = s[(l = gn(st(t)))]), c && De(c, e, 6, r)
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), De(u, e, 6, r)
  }
}
function Qi(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!K(e)) {
    const c = (u) => {
      const a = Qi(u, t, !0)
      a && ((l = !0), le(o, a))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (Z(e) && s.set(e, null), null)
    : (D(i) ? i.forEach((c) => (o[c] = null)) : le(o, i),
      Z(e) && s.set(e, o),
      o)
}
function Bn(e, t) {
  return !e || !zt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, st(t)) || z(e, t))
}
function ns(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: u,
      renderCache: a,
      props: h,
      data: v,
      setupState: S,
      ctx: P,
      inheritAttrs: O,
    } = e,
    G = Tn(e)
  let U, W
  try {
    if (n.shapeFlag & 4) {
      const p = r || s,
        A = p
      ;(U = Me(u.call(A, p, a, h, S, v, P))), (W = l)
    } else {
      const p = t
      ;(U = Me(
        p.length > 1 ? p(h, { attrs: l, slots: o, emit: c }) : p(h, null),
      )),
        (W = t.props ? l : Sc(l))
    }
  } catch (p) {
    ;(Vt.length = 0), Dn(p, e, 1), (U = he(ve))
  }
  let g = U
  if (W && O !== !1) {
    const p = Object.keys(W),
      { shapeFlag: A } = g
    p.length &&
      A & 7 &&
      (i && p.some(Ms) && (W = xc(W, i)), (g = nt(g, W, !1, !0)))
  }
  return (
    n.dirs &&
      ((g = nt(g, null, !1, !0)),
      (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Wt(g, n.transition),
    (U = g),
    Tn(G),
    U
  )
}
const Sc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || zt(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  xc = (e, t) => {
    const n = {}
    for (const s in e) (!Ms(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Ec(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? gr(s, o, u) : !!o
    if (c & 8) {
      const a = t.dynamicProps
      for (let h = 0; h < a.length; h++) {
        const v = a[h]
        if (o[v] !== s[v] && !Bn(u, v)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? gr(s, o, u)
            : !0
          : !!o
  return !1
}
function gr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Bn(n, i)) return !0
  }
  return !1
}
function Zi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const eo = (e) => e.__isSuspense
function to(e, t) {
  t && t.pendingBranch
    ? D(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Il(e)
}
const Se = Symbol.for('v-fgt'),
  gt = Symbol.for('v-txt'),
  ve = Symbol.for('v-cmt'),
  jt = Symbol.for('v-stc'),
  Vt = []
let Ae = null
function Es(e = !1) {
  Vt.push((Ae = e ? null : []))
}
function Cc() {
  Vt.pop(), (Ae = Vt[Vt.length - 1] || null)
}
let Gt = 1
function mr(e, t = !1) {
  ;(Gt += e), e < 0 && Ae && t && (Ae.hasOnce = !0)
}
function no(e) {
  return (
    (e.dynamicChildren = Gt > 0 ? Ae || St : null),
    Cc(),
    Gt > 0 && Ae && Ae.push(e),
    e
  )
}
function yf(e, t, n, s, r, i) {
  return no(ro(e, t, n, s, r, i, !0))
}
function Cs(e, t, n, s, r) {
  return no(he(e, t, n, s, r, !0))
}
function Yt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ut(e, t) {
  return e.type === t.type && e.key === t.key
}
const so = ({ key: e }) => e ?? null,
  vn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? re(e) || ae(e) || K(e)
        ? { i: ce, r: e, k: t, f: !!n }
        : e
      : null
  )
function ro(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Se ? 0 : 1,
  o = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && so(t),
    ref: t && vn(t),
    scopeId: Si,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ce,
  }
  return (
    l
      ? (qs(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= re(n) ? 8 : 16),
    Gt > 0 &&
      !o &&
      Ae &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ae.push(c),
    c
  )
}
const he = Tc
function Tc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Li) && (e = ve), Yt(e))) {
    const l = nt(e, t, !0)
    return (
      n && qs(l, n),
      Gt > 0 &&
        !i &&
        Ae &&
        (l.shapeFlag & 6 ? (Ae[Ae.indexOf(e)] = l) : Ae.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Hc(e) && (e = e.__vccOpts), t)) {
    t = Ac(t)
    let { class: l, style: c } = t
    l && !re(l) && (t.class = Ns(l)),
      Z(c) && (Vs(c) && !D(c) && (c = le({}, c)), (t.style = Ls(c)))
  }
  const o = re(e) ? 1 : eo(e) ? 128 : xi(e) ? 64 : Z(e) ? 4 : K(e) ? 2 : 0
  return ro(e, t, n, s, r, o, i, !0)
}
function Ac(e) {
  return e ? (Vs(e) || ji(e) ? le({}, e) : e) : null
}
function nt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    u = t ? Rc(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && so(u),
      ref:
        t && t.ref
          ? n && i
            ? D(i)
              ? i.concat(vn(t))
              : [i, vn(t)]
            : vn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Se ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && nt(e.ssContent),
      ssFallback: e.ssFallback && nt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return c && s && Wt(a, c.clone(a)), a
}
function io(e = ' ', t = 0) {
  return he(gt, null, e, t)
}
function vf(e, t) {
  const n = he(jt, null, e)
  return (n.staticCount = t), n
}
function _f(e = '', t = !1) {
  return t ? (Es(), Cs(ve, null, e)) : he(ve, null, e)
}
function Me(e) {
  return e == null || typeof e == 'boolean'
    ? he(ve)
    : D(e)
      ? he(Se, null, e.slice())
      : Yt(e)
        ? Ze(e)
        : he(gt, null, String(e))
}
function Ze(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nt(e)
}
function qs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (D(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), qs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !ji(t)
        ? (t._ctx = ce)
        : r === 3 &&
          ce &&
          (ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    K(t)
      ? ((t = { default: t, _ctx: ce }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [io(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Rc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Ns([t.class, s.class]))
      else if (r === 'style') t.style = Ls([t.style, s.style])
      else if (zt(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(D(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Oe(e, t, n, s = null) {
  De(e, t, 7, [n, s])
}
const Oc = Hi()
let Mc = 0
function Ic(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Oc,
    i = {
      uid: Mc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Jo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ki(s, r),
      emitsOptions: Qi(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = wc.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let ue = null
const Kn = () => ue || ce
let Rn, Ts
{
  const e = Pn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(Rn = t('__VUE_INSTANCE_SETTERS__', (n) => (ue = n))),
    (Ts = t('__VUE_SSR_SETTERS__', (n) => (Xt = n)))
}
const en = (e) => {
    const t = ue
    return (
      Rn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Rn(t)
      }
    )
  },
  yr = () => {
    ue && ue.scope.off(), Rn(null)
  }
function oo(e) {
  return e.vnode.shapeFlag & 4
}
let Xt = !1
function Pc(e, t = !1, n = !1) {
  t && Ts(t)
  const { props: s, children: r } = e.vnode,
    i = oo(e)
  cc(e, s, i, t), dc(e, r, n)
  const o = i ? Lc(e, t) : void 0
  return t && Ts(!1), o
}
function Lc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Ql))
  const { setup: s } = n
  if (s) {
    rt()
    const r = (e.setupContext = s.length > 1 ? co(e) : null),
      i = en(e),
      o = Zt(s, e, 0, [e.props, r]),
      l = qr(o)
    if ((it(), i(), (l || e.sp) && !pt(e) && Mi(e), l)) {
      if ((o.then(yr, yr), t))
        return o
          .then((c) => {
            vr(e, c, t)
          })
          .catch((c) => {
            Dn(c, e, 0)
          })
      e.asyncDep = o
    } else vr(e, o, t)
  } else lo(e, t)
}
function vr(e, t, n) {
  K(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = yi(t)),
    lo(e, n)
}
let _r
function lo(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && _r && !s.render) {
      const r = s.template || Ks(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          u = le(le({ isCustomElement: i, delimiters: l }, o), c)
        s.render = _r(r, u)
      }
    }
    e.render = s.render || Ue
  }
  {
    const r = en(e)
    rt()
    try {
      ec(e)
    } finally {
      it(), r()
    }
  }
}
const Nc = {
  get(e, t) {
    return me(e, 'get', ''), e[t]
  },
}
function co(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Nc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Wn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(yi(yn(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in $t) return $t[n](e)
          },
          has(t, n) {
            return n in t || n in $t
          },
        }))
    : e.proxy
}
function Fc(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Hc(e) {
  return K(e) && '__vccOpts' in e
}
const oe = (e, t) => Tl(e, t, Xt)
function As(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Z(t) && !D(t)
      ? Yt(t)
        ? he(e, null, [t])
        : he(e, t)
      : he(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Yt(n) && (n = [n]),
      he(e, t, n))
}
const Dc = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Rs
const br = typeof window < 'u' && window.trustedTypes
if (br)
  try {
    Rs = br.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const ao = Rs ? (e) => Rs.createHTML(e) : (e) => e,
  $c = 'http://www.w3.org/2000/svg',
  jc = 'http://www.w3.org/1998/Math/MathML',
  We = typeof document < 'u' ? document : null,
  wr = We && We.createElement('template'),
  Vc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? We.createElementNS($c, e)
          : t === 'mathml'
            ? We.createElementNS(jc, e)
            : n
              ? We.createElement(e, { is: n })
              : We.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => We.createTextNode(e),
    createComment: (e) => We.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => We.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        wr.innerHTML = ao(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e,
        )
        const l = wr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Je = 'transition',
  Lt = 'animation',
  Jt = Symbol('_vtc'),
  fo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  kc = le({}, Ei, fo),
  Uc = (e) => ((e.displayName = 'Transition'), (e.props = kc), e),
  bf = Uc((e, { slots: t }) => As(Hl, Bc(e), t)),
  ct = (e, t = []) => {
    D(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Sr = (e) => (e ? (D(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Bc(e) {
  const t = {}
  for (const b in e) b in fo || (t[b] = e[b])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = o,
      appearToClass: a = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: S = `${n}-leave-to`,
    } = e,
    P = Kc(r),
    O = P && P[0],
    G = P && P[1],
    {
      onBeforeEnter: U,
      onEnter: W,
      onEnterCancelled: g,
      onLeave: p,
      onLeaveCancelled: A,
      onBeforeAppear: j = U,
      onAppear: V = W,
      onAppearCancelled: q = g,
    } = t,
    I = (b, k, se, ie) => {
      ;(b._enterCancelled = ie), at(b, k ? a : l), at(b, k ? u : o), se && se()
    },
    _ = (b, k) => {
      ;(b._isLeaving = !1), at(b, h), at(b, S), at(b, v), k && k()
    },
    L = (b) => (k, se) => {
      const ie = b ? V : W,
        H = () => I(k, b, se)
      ct(ie, [k, H]),
        xr(() => {
          at(k, b ? c : i), Ke(k, b ? a : l), Sr(ie) || Er(k, s, O, H)
        })
    }
  return le(t, {
    onBeforeEnter(b) {
      ct(U, [b]), Ke(b, i), Ke(b, o)
    },
    onBeforeAppear(b) {
      ct(j, [b]), Ke(b, c), Ke(b, u)
    },
    onEnter: L(!1),
    onAppear: L(!0),
    onLeave(b, k) {
      b._isLeaving = !0
      const se = () => _(b, k)
      Ke(b, h),
        b._enterCancelled ? (Ke(b, v), Ar()) : (Ar(), Ke(b, v)),
        xr(() => {
          b._isLeaving && (at(b, h), Ke(b, S), Sr(p) || Er(b, s, G, se))
        }),
        ct(p, [b, se])
    },
    onEnterCancelled(b) {
      I(b, !1, void 0, !0), ct(g, [b])
    },
    onAppearCancelled(b) {
      I(b, !0, void 0, !0), ct(q, [b])
    },
    onLeaveCancelled(b) {
      _(b), ct(A, [b])
    },
  })
}
function Kc(e) {
  if (e == null) return null
  if (Z(e)) return [ss(e.enter), ss(e.leave)]
  {
    const t = ss(e)
    return [t, t]
  }
}
function ss(e) {
  return ko(e)
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Jt] || (e[Jt] = new Set())).add(t)
}
function at(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[Jt]
  n && (n.delete(t), n.size || (e[Jt] = void 0))
}
function xr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Wc = 0
function Er(e, t, n, s) {
  const r = (e._endId = ++Wc),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = qc(e, t)
  if (!o) return s()
  const u = o + 'end'
  let a = 0
  const h = () => {
      e.removeEventListener(u, v), i()
    },
    v = (S) => {
      S.target === e && ++a >= c && h()
    }
  setTimeout(() => {
    a < c && h()
  }, l + 1),
    e.addEventListener(u, v)
}
function qc(e, t) {
  const n = window.getComputedStyle(e),
    s = (P) => (n[P] || '').split(', '),
    r = s(`${Je}Delay`),
    i = s(`${Je}Duration`),
    o = Cr(r, i),
    l = s(`${Lt}Delay`),
    c = s(`${Lt}Duration`),
    u = Cr(l, c)
  let a = null,
    h = 0,
    v = 0
  t === Je
    ? o > 0 && ((a = Je), (h = o), (v = i.length))
    : t === Lt
      ? u > 0 && ((a = Lt), (h = u), (v = c.length))
      : ((h = Math.max(o, u)),
        (a = h > 0 ? (o > u ? Je : Lt) : null),
        (v = a ? (a === Je ? i.length : c.length) : 0))
  const S =
    a === Je && /\b(transform|all)(,|$)/.test(s(`${Je}Property`).toString())
  return { type: a, timeout: h, propCount: v, hasTransform: S }
}
function Cr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Tr(n) + Tr(e[s])))
}
function Tr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Ar() {
  return document.body.offsetHeight
}
function Gc(e, t, n) {
  const s = e[Jt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const On = Symbol('_vod'),
  uo = Symbol('_vsh'),
  wf = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[On] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Nt(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Nt(e, !0), s.enter(e))
            : s.leave(e, () => {
                Nt(e, !1)
              })
          : Nt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Nt(e, t)
    },
  }
function Nt(e, t) {
  ;(e.style.display = t ? e[On] : 'none'), (e[uo] = !t)
}
const Yc = Symbol(''),
  Xc = /(^|;)\s*display\s*:/
function Jc(e, t, n) {
  const s = e.style,
    r = re(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (re(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && _n(s, l, '')
        }
      else for (const o in t) n[o] == null && _n(s, o, '')
    for (const o in n) o === 'display' && (i = !0), _n(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[Yc]
      o && (n += ';' + o), (s.cssText = n), (i = Xc.test(n))
    }
  } else t && e.removeAttribute('style')
  On in e && ((e[On] = i ? s.display : ''), e[uo] && (s.display = 'none'))
}
const Rr = /\s*!important$/
function _n(e, t, n) {
  if (D(n)) n.forEach((s) => _n(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = zc(e, t)
    Rr.test(n)
      ? e.setProperty(st(s), n.replace(Rr, ''), 'important')
      : (e[s] = n)
  }
}
const Or = ['Webkit', 'Moz', 'ms'],
  rs = {}
function zc(e, t) {
  const n = rs[t]
  if (n) return n
  let s = Pe(t)
  if (s !== 'filter' && s in e) return (rs[t] = s)
  s = In(s)
  for (let r = 0; r < Or.length; r++) {
    const i = Or[r] + s
    if (i in e) return (rs[t] = i)
  }
  return t
}
const Mr = 'http://www.w3.org/1999/xlink'
function Ir(e, t, n, s, r, i = Go(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Mr, t.slice(6, t.length))
      : e.setAttributeNS(Mr, t, n)
    : n == null || (i && !Jr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : He(n) ? String(n) : n)
}
function Pr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? ao(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = Jr(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function ho(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Qc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Lr = Symbol('_vei')
function Zc(e, t, n, s, r = null) {
  const i = e[Lr] || (e[Lr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = ea(t)
    if (s) {
      const u = (i[t] = sa(s, r))
      ho(e, l, u, c)
    } else o && (Qc(e, l, o, c), (i[t] = void 0))
  }
}
const Nr = /(?:Once|Passive|Capture)$/
function ea(e) {
  let t
  if (Nr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Nr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : st(e.slice(2)), t]
}
let is = 0
const ta = Promise.resolve(),
  na = () => is || (ta.then(() => (is = 0)), (is = Date.now()))
function sa(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    De(ra(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = na()), n
}
function ra(e, t) {
  if (D(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Fr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ia = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Gc(e, s, o)
      : t === 'style'
        ? Jc(e, n, s)
        : zt(t)
          ? Ms(t) || Zc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : oa(e, t, s, o)
              )
            ? (Pr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Ir(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !re(s))
              ? Pr(e, Pe(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Ir(e, t, s, o))
  }
function oa(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Fr(t) && K(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return Fr(t) && re(n) ? !1 : t in e
}
const Hr = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1
    return D(t) ? (n) => mn(t, n) : t
  },
  os = Symbol('_assign'),
  Sf = {
    created(e, { value: t }, n) {
      ;(e.checked = wn(t, n.props.value)),
        (e[os] = Hr(n)),
        ho(e, 'change', () => {
          e[os](la(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;(e[os] = Hr(s)), t !== n && (e.checked = wn(t, s.props.value))
    },
  }
function la(e) {
  return '_value' in e ? e._value : e.value
}
const ca = ['ctrl', 'shift', 'alt', 'meta'],
  aa = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => ca.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  xf = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = aa[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  fa = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Ef = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = st(r.key)
        if (t.some((o) => o === i || fa[o] === i)) return e(r)
      })
    )
  },
  po = le({ patchProp: ia }, Vc)
let kt,
  Dr = !1
function go() {
  return kt || (kt = pc(po))
}
function ua() {
  return (kt = Dr ? kt : gc(po)), (Dr = !0), kt
}
const Cf = (...e) => {
    go().render(...e)
  },
  Tf = (...e) => {
    const t = go().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = yo(s)
        if (!r) return
        const i = t._component
        !K(i) && !i.render && !i.template && (i.template = r.innerHTML),
          r.nodeType === 1 && (r.textContent = '')
        const o = n(r, !1, mo(r))
        return (
          r instanceof Element &&
            (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  },
  Af = (...e) => {
    const t = ua().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = yo(s)
        if (r) return n(r, !0, mo(r))
      }),
      t
    )
  }
function mo(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function yo(e) {
  return re(e) ? document.querySelector(e) : e
}
const Rf = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  da = window.__VP_SITE_DATA__
function Gs(e) {
  return Zr() ? (zo(e), !0) : !1
}
function tt(e) {
  return typeof e == 'function' ? e() : mi(e)
}
const vo = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const ha = Object.prototype.toString,
  pa = (e) => ha.call(e) === '[object Object]',
  _o = () => {},
  $r = ga()
function ga() {
  var e, t
  return (
    vo &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent,
        )))
  )
}
function ma(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
      )
        .then(r)
        .catch(i)
    })
  }
  return n
}
const bo = (e) => e()
function ya(e = bo) {
  const t = de(!0)
  function n() {
    t.value = !1
  }
  function s() {
    t.value = !0
  }
  const r = (...i) => {
    t.value && e(...i)
  }
  return { isActive: Hn(t), pause: n, resume: s, eventFilter: r }
}
function va(e) {
  return Kn()
}
function wo(...e) {
  if (e.length !== 1) return El(...e)
  const t = e[0]
  return typeof t == 'function' ? Hn(wl(() => ({ get: t, set: _o }))) : de(t)
}
function _a(e, t, n = {}) {
  const { eventFilter: s = bo, ...r } = n
  return Fe(e, ma(s, t), r)
}
function ba(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = ya(s)
  return {
    stop: _a(e, t, { ...r, eventFilter: i }),
    pause: o,
    resume: l,
    isActive: c,
  }
}
function Ys(e, t = !0, n) {
  va() ? Ot(e, n) : t ? e() : $n(e)
}
const Ye = vo ? window : void 0
function So(e) {
  var t
  const n = tt(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function Rt(...e) {
  let t, n, s, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Ye))
      : ([t, n, s, r] = e),
    !t)
  )
    return _o
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    o = () => {
      i.forEach((a) => a()), (i.length = 0)
    },
    l = (a, h, v, S) => (
      a.addEventListener(h, v, S), () => a.removeEventListener(h, v, S)
    ),
    c = Fe(
      () => [So(t), tt(r)],
      ([a, h]) => {
        if ((o(), !a)) return
        const v = pa(h) ? { ...h } : h
        i.push(...n.flatMap((S) => s.map((P) => l(a, S, P, v))))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      c(), o()
    }
  return Gs(u), u
}
function wa(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function Of(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const {
      target: r = Ye,
      eventName: i = 'keydown',
      passive: o = !1,
      dedupe: l = !1,
    } = s,
    c = wa(t)
  return Rt(
    r,
    i,
    (a) => {
      ;(a.repeat && tt(l)) || (c(a) && n(a))
    },
    o,
  )
}
function Sa() {
  const e = de(!1),
    t = Kn()
  return (
    t &&
      Ot(() => {
        e.value = !0
      }, t),
    e
  )
}
function xa(e) {
  const t = Sa()
  return oe(() => (t.value, !!e()))
}
function xo(e, t = {}) {
  const { window: n = Ye } = t,
    s = xa(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
  let r
  const i = de(!1),
    o = (u) => {
      i.value = u.matches
    },
    l = () => {
      r &&
        ('removeEventListener' in r
          ? r.removeEventListener('change', o)
          : r.removeListener(o))
    },
    c = Ji(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(tt(e))),
        'addEventListener' in r
          ? r.addEventListener('change', o)
          : r.addListener(o),
        (i.value = r.matches))
    })
  return (
    Gs(() => {
      c(), l(), (r = void 0)
    }),
    i
  )
}
const un =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  dn = '__vueuse_ssr_handlers__',
  Ea = Ca()
function Ca() {
  return dn in un || (un[dn] = un[dn] || {}), un[dn]
}
function Eo(e, t) {
  return Ea[e] || t
}
function Xs(e) {
  return xo('(prefers-color-scheme: dark)', e)
}
function Ta(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const Aa = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  jr = 'vueuse-storage'
function Ra(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: u = !1,
      shallow: a,
      window: h = Ye,
      eventFilter: v,
      onError: S = (_) => {
        console.error(_)
      },
      initOnMounted: P,
    } = s,
    O = (a ? pi : de)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = Eo('getDefaultStorage', () => {
        var _
        return (_ = Ye) == null ? void 0 : _.localStorage
      })()
    } catch (_) {
      S(_)
    }
  if (!n) return O
  const G = tt(t),
    U = Ta(G),
    W = (r = s.serializer) != null ? r : Aa[U],
    { pause: g, resume: p } = ba(O, () => j(O.value), {
      flush: i,
      deep: o,
      eventFilter: v,
    })
  h &&
    l &&
    Ys(() => {
      n instanceof Storage ? Rt(h, 'storage', q) : Rt(h, jr, I), P && q()
    }),
    P || q()
  function A(_, L) {
    if (h) {
      const b = { key: e, oldValue: _, newValue: L, storageArea: n }
      h.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent('storage', b)
          : new CustomEvent(jr, { detail: b }),
      )
    }
  }
  function j(_) {
    try {
      const L = n.getItem(e)
      if (_ == null) A(L, null), n.removeItem(e)
      else {
        const b = W.write(_)
        L !== b && (n.setItem(e, b), A(L, b))
      }
    } catch (L) {
      S(L)
    }
  }
  function V(_) {
    const L = _ ? _.newValue : n.getItem(e)
    if (L == null) return c && G != null && n.setItem(e, W.write(G)), G
    if (!_ && u) {
      const b = W.read(L)
      return typeof u == 'function'
        ? u(b, G)
        : U === 'object' && !Array.isArray(b)
          ? { ...G, ...b }
          : b
    } else return typeof L != 'string' ? L : W.read(L)
  }
  function q(_) {
    if (!(_ && _.storageArea !== n)) {
      if (_ && _.key == null) {
        O.value = G
        return
      }
      if (!(_ && _.key !== e)) {
        g()
        try {
          ;(_ == null ? void 0 : _.newValue) !== W.write(O.value) &&
            (O.value = V(_))
        } catch (L) {
          S(L)
        } finally {
          _ ? $n(p) : p()
        }
      }
    }
  }
  function I(_) {
    q(_.detail)
  }
  return O
}
const Oa =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function Ma(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = Ye,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: u,
      disableTransition: a = !0,
    } = e,
    h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    v = Xs({ window: r }),
    S = oe(() => (v.value ? 'dark' : 'light')),
    P =
      c ||
      (o == null
        ? wo(s)
        : Ra(o, s, i, { window: r, listenToStorageChanges: l })),
    O = oe(() => (P.value === 'auto' ? S.value : P.value)),
    G = Eo('updateHTMLAttrs', (p, A, j) => {
      const V =
        typeof p == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(p)
          : So(p)
      if (!V) return
      const q = new Set(),
        I = new Set()
      let _ = null
      if (A === 'class') {
        const b = j.split(/\s/g)
        Object.values(h)
          .flatMap((k) => (k || '').split(/\s/g))
          .filter(Boolean)
          .forEach((k) => {
            b.includes(k) ? q.add(k) : I.add(k)
          })
      } else _ = { key: A, value: j }
      if (q.size === 0 && I.size === 0 && _ === null) return
      let L
      a &&
        ((L = r.document.createElement('style')),
        L.appendChild(document.createTextNode(Oa)),
        r.document.head.appendChild(L))
      for (const b of q) V.classList.add(b)
      for (const b of I) V.classList.remove(b)
      _ && V.setAttribute(_.key, _.value),
        a && (r.getComputedStyle(L).opacity, document.head.removeChild(L))
    })
  function U(p) {
    var A
    G(t, n, (A = h[p]) != null ? A : p)
  }
  function W(p) {
    e.onChanged ? e.onChanged(p, U) : U(p)
  }
  Fe(O, W, { flush: 'post', immediate: !0 }), Ys(() => W(O.value))
  const g = oe({
    get() {
      return u ? P.value : O.value
    },
    set(p) {
      P.value = p
    },
  })
  try {
    return Object.assign(g, { store: P, system: S, state: O })
  } catch {
    return g
  }
}
function Ia(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = Ye } = e,
    r = Ma({
      ...e,
      onChanged: (l, c) => {
        var u
        e.onChanged
          ? (u = e.onChanged) == null || u.call(e, l === 'dark', c, l)
          : c(l)
      },
      modes: { dark: t, light: n },
    }),
    i = oe(() =>
      r.system ? r.system.value : Xs({ window: s }).value ? 'dark' : 'light',
    )
  return oe({
    get() {
      return r.value === 'dark'
    },
    set(l) {
      const c = l ? 'dark' : 'light'
      i.value === c ? (r.value = 'auto') : (r.value = c)
    },
  })
}
function ls(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e
}
function Co(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : Co(n)
  }
}
function Pa(e) {
  const t = e || window.event,
    n = t.target
  return Co(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const cs = new WeakMap()
function Mf(e, t = !1) {
  const n = de(t)
  let s = null,
    r = ''
  Fe(
    wo(e),
    (l) => {
      const c = ls(tt(l))
      if (c) {
        const u = c
        if (
          (cs.get(u) || cs.set(u, u.style.overflow),
          u.style.overflow !== 'hidden' && (r = u.style.overflow),
          u.style.overflow === 'hidden')
        )
          return (n.value = !0)
        if (n.value) return (u.style.overflow = 'hidden')
      }
    },
    { immediate: !0 },
  )
  const i = () => {
      const l = ls(tt(e))
      !l ||
        n.value ||
        ($r &&
          (s = Rt(
            l,
            'touchmove',
            (c) => {
              Pa(c)
            },
            { passive: !1 },
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      const l = ls(tt(e))
      !l ||
        !n.value ||
        ($r && (s == null || s()),
        (l.style.overflow = r),
        cs.delete(l),
        (n.value = !1))
    }
  return (
    Gs(o),
    oe({
      get() {
        return n.value
      },
      set(l) {
        l ? i() : o()
      },
    })
  )
}
function If(e = {}) {
  const { window: t = Ye, behavior: n = 'auto' } = e
  if (!t) return { x: de(0), y: de(0) }
  const s = de(t.scrollX),
    r = de(t.scrollY),
    i = oe({
      get() {
        return s.value
      },
      set(l) {
        scrollTo({ left: l, behavior: n })
      },
    }),
    o = oe({
      get() {
        return r.value
      },
      set(l) {
        scrollTo({ top: l, behavior: n })
      },
    })
  return (
    Rt(
      t,
      'scroll',
      () => {
        ;(s.value = t.scrollX), (r.value = t.scrollY)
      },
      { capture: !1, passive: !0 },
    ),
    { x: i, y: o }
  )
}
function Pf(e = {}) {
  const {
      window: t = Ye,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = 'inner',
    } = e,
    l = de(n),
    c = de(s),
    u = () => {
      t &&
        (o === 'outer'
          ? ((l.value = t.outerWidth), (c.value = t.outerHeight))
          : i
            ? ((l.value = t.innerWidth), (c.value = t.innerHeight))
            : ((l.value = t.document.documentElement.clientWidth),
              (c.value = t.document.documentElement.clientHeight)))
    }
  if ((u(), Ys(u), Rt('resize', u, { passive: !0 }), r)) {
    const a = xo('(orientation: portrait)')
    Fe(a, () => u())
  }
  return { width: l, height: c }
}
const as = {
  BASE_URL: '/Versakit/',
  DEV: !1,
  MODE: 'production',
  PROD: !0,
  SSR: !1,
}
var fs = {}
const To = /^(?:[a-z]+:|\/\/)/i,
  La = 'vitepress-theme-appearance',
  Na = /#.*$/,
  Fa = /[?#].*$/,
  Ha = /(?:(^|\/)index)?\.(?:md|html)$/,
  ge = typeof document < 'u',
  Ao = {
    relativePath: '404.md',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function Da(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = Vr(`/${e}`)), n)) return new RegExp(t).test(e)
  if (Vr(t) !== e) return !1
  const s = t.match(Na)
  return s ? (ge ? location.hash : '') === s[0] : !0
}
function Vr(e) {
  return decodeURI(e).replace(Fa, '').replace(Ha, '$1')
}
function $a(e) {
  return To.test(e)
}
function ja(e, t) {
  return (
    Object.keys((e == null ? void 0 : e.locales) || {}).find(
      (n) => n !== 'root' && !$a(n) && Da(t, `/${n}/`, !0),
    ) || 'root'
  )
}
function Va(e, t) {
  var s, r, i, o, l, c, u
  const n = ja(e, t)
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: Oo(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig),
    },
  })
}
function Ro(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = ka(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function ka(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function Ua(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function Oo(e, t) {
  return [...e.filter((n) => !Ua(t, n)), ...t]
}
const Ba = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  Ka = /^[a-z]:/i
function kr(e) {
  const t = Ka.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(Ba, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const us = new Set()
function Wa(e) {
  if (us.size === 0) {
    const n =
      (typeof process == 'object' &&
        (fs == null ? void 0 : fs.VITE_EXTRA_EXTENSIONS)) ||
      (as == null ? void 0 : as.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => us.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !us.has(t.toLowerCase())
}
const qa = Symbol(),
  mt = pi(da)
function Lf(e) {
  const t = oe(() => Va(mt.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? de(!0)
        : n === 'force-auto'
          ? Xs()
          : n
            ? Ia({
                storageKey: La,
                initialValue: () => (n === 'dark' ? 'dark' : 'auto'),
                ...(typeof n == 'object' ? n : {}),
              })
            : de(!1),
    r = de(ge ? location.hash : '')
  return (
    ge &&
      window.addEventListener('hashchange', () => {
        r.value = location.hash
      }),
    Fe(
      () => e.data,
      () => {
        r.value = ge ? location.hash : ''
      },
    ),
    {
      site: t,
      theme: oe(() => t.value.themeConfig),
      page: oe(() => e.data),
      frontmatter: oe(() => e.data.frontmatter),
      params: oe(() => e.data.params),
      lang: oe(() => t.value.lang),
      dir: oe(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: oe(() => t.value.localeIndex || 'root'),
      title: oe(() => Ro(t.value, e.data)),
      description: oe(() => e.data.description || t.value.description),
      isDark: s,
      hash: oe(() => r.value),
    }
  )
}
function Ga() {
  const e = At(qa)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function Ya(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function Ur(e) {
  return To.test(e) || !e.startsWith('/') ? e : Ya(mt.value.base, e)
}
function Xa(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), ge)) {
    const n = '/Versakit/'
    t = kr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${kr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let bn = []
function Nf(e) {
  bn.push(e),
    kn(() => {
      bn = bn.filter((t) => t !== e)
    })
}
function Ja() {
  let e = mt.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = Br(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = Br(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function Br(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const za = Symbol(),
  Mo = 'http://a.com',
  Qa = () => ({ path: '/', component: null, data: Ao })
function Ff(e, t) {
  const n = Fn(Qa()),
    s = { route: n, go: r }
  async function r(l = ge ? location.href : '/') {
    var c, u
    ;(l = ds(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        (ge &&
          l !== ds(location.href) &&
          (history.replaceState({ scrollPosition: window.scrollY }, ''),
          history.pushState({}, '', l)),
        await o(l),
        await ((u = s.onAfterRouteChanged) == null ? void 0 : u.call(s, l)))
  }
  let i = null
  async function o(l, c = 0, u = !1) {
    var v, S
    if (
      (await ((v = s.onBeforePageLoad) == null ? void 0 : v.call(s, l))) === !1
    )
      return
    const a = new URL(l, Mo),
      h = (i = a.pathname)
    try {
      let P = await e(h)
      if (!P) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: O, __pageData: G } = P
        if (!O) throw new Error(`Invalid route component: ${O}`)
        await ((S = s.onAfterPageLoad) == null ? void 0 : S.call(s, l)),
          (n.path = ge ? h : Ur(h)),
          (n.component = yn(O)),
          (n.data = yn(G)),
          ge &&
            $n(() => {
              let U =
                mt.value.base +
                G.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!mt.value.cleanUrls && !U.endsWith('/') && (U += '.html'),
                U !== a.pathname &&
                  ((a.pathname = U),
                  (l = U + a.search + a.hash),
                  history.replaceState({}, '', l)),
                a.hash && !c)
              ) {
                let W = null
                try {
                  W = document.getElementById(
                    decodeURIComponent(a.hash).slice(1),
                  )
                } catch (g) {
                  console.warn(g)
                }
                if (W) {
                  Kr(W, a.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            })
      }
    } catch (P) {
      if (
        (!/fetch|Page not found/.test(P.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(P),
        !u)
      )
        try {
          const O = await fetch(mt.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await O.json()), await o(l, c, !0)
          return
        } catch {}
      if (i === h) {
        ;(i = null), (n.path = ge ? h : Ur(h)), (n.component = t ? yn(t) : null)
        const O = ge
          ? h
              .replace(/(^|\/)$/, '$1index')
              .replace(/(\.html)?$/, '.md')
              .replace(/^\//, '')
          : '404.md'
        n.data = { ...Ao, relativePath: O }
      }
    }
  }
  return (
    ge &&
      (history.state === null && history.replaceState({}, ''),
      window.addEventListener(
        'click',
        (l) => {
          if (
            l.defaultPrevented ||
            !(l.target instanceof Element) ||
            l.target.closest('button') ||
            l.button !== 0 ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            l.metaKey
          )
            return
          const c = l.target.closest('a')
          if (
            !c ||
            c.closest('.vp-raw') ||
            c.hasAttribute('download') ||
            c.hasAttribute('target')
          )
            return
          const u =
            c.getAttribute('href') ??
            (c instanceof SVGAElement ? c.getAttribute('xlink:href') : null)
          if (u == null) return
          const {
              href: a,
              origin: h,
              pathname: v,
              hash: S,
              search: P,
            } = new URL(u, c.baseURI),
            O = new URL(location.href)
          h === O.origin &&
            Wa(v) &&
            (l.preventDefault(),
            v === O.pathname && P === O.search
              ? (S !== O.hash &&
                  (history.pushState({}, '', a),
                  window.dispatchEvent(
                    new HashChangeEvent('hashchange', {
                      oldURL: O.href,
                      newURL: a,
                    }),
                  )),
                S
                  ? Kr(c, S, c.classList.contains('header-anchor'))
                  : window.scrollTo(0, 0))
              : r(a))
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', async (l) => {
        var c
        l.state !== null &&
          (await o(ds(location.href), (l.state && l.state.scrollPosition) || 0),
          (c = s.onAfterRouteChanged) == null || c.call(s, location.href))
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function Za() {
  const e = At(za)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function Io() {
  return Za().route
}
function Kr(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({ left: 0, top: o, behavior: 'smooth' })
    }
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - Ja() + i
    requestAnimationFrame(r)
  }
}
function ds(e) {
  const t = new URL(e, Mo)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    mt.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const hn = () => bn.forEach((e) => e()),
  Hf = Oi({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = Io(),
        { frontmatter: n, site: s } = Ga()
      return (
        Fe(n, hn, { deep: !0, flush: 'post' }),
        () =>
          As(
            e.as,
            s.value.contentProps ?? { style: { position: 'relative' } },
            [
              t.component
                ? As(t.component, {
                    onVnodeMounted: hn,
                    onVnodeUpdated: hn,
                    onVnodeUnmounted: hn,
                  })
                : '404 Page Not Found',
            ],
          )
      )
    },
  }),
  Df = Oi({
    setup(e, { slots: t }) {
      const n = de(!1)
      return (
        Ot(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
function $f() {
  ge &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement
        if (!s) return
        const r = Array.from(s.querySelectorAll('input')).indexOf(t)
        if (r < 0) return
        const i = s.querySelector('.blocks')
        if (!i) return
        const o = Array.from(i.children).find((u) =>
          u.classList.contains('active'),
        )
        if (!o) return
        const l = i.children[r]
        if (!l || o === l) return
        o.classList.remove('active'), l.classList.add('active')
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function jf() {
  if (ge) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!r || !i) return
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((a) => a.remove())
        let u = c.textContent || ''
        o && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
          ef(u).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const a = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, a)
          })
      }
    })
  }
}
async function ef(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus()
  }
}
function Vf(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;(n = !1),
        i.forEach((l) => {
          const c = hs(l)
          for (const u of document.head.children)
            if (u.isEqualNode(c)) {
              s.push(u)
              return
            }
        })
      return
    }
    const o = i.map(hs)
    s.forEach((l, c) => {
      const u = o.findIndex((a) =>
        a == null ? void 0 : a.isEqualNode(l ?? null),
      )
      u !== -1 ? delete o[u] : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean))
  }
  Ji(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = Ro(o, i)
    u !== document.title && (document.title = u)
    const a = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== a && h.setAttribute('content', a)
      : hs(['meta', { name: 'description', content: a }]),
      r(Oo(o.head, nf(c)))
  })
}
function hs([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return (
    n && (s.innerHTML = n),
    e === 'script' && t.async == null && (s.async = !1),
    s
  )
}
function tf(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function nf(e) {
  return e.filter((t) => !tf(t))
}
const ps = new Set(),
  Po = () => document.createElement('link'),
  sf = (e) => {
    const t = Po()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  rf = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let pn
const of =
  ge &&
  (pn = Po()) &&
  pn.relList &&
  pn.relList.supports &&
  pn.relList.supports('prefetch')
    ? sf
    : rf
function kf() {
  if (!ge || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!ps.has(c)) {
              ps.add(c)
              const u = Xa(c)
              u && of(u)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI,
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : ps.add(l)))
        })
      })
  }
  Ot(s)
  const r = Io()
  Fe(() => r.path, s),
    kn(() => {
      n && n.disconnect()
    })
}
export {
  $n as $,
  Sf as A,
  df as B,
  pi as C,
  Ot as D,
  Ga as E,
  Se as F,
  $a as G,
  Wa as H,
  Ur as I,
  Da as J,
  xo as K,
  Ji as L,
  kn as M,
  mf as N,
  ql as O,
  Ja as P,
  af as Q,
  Nf as R,
  To as S,
  bf as T,
  ff as U,
  Io as V,
  Rc as W,
  At as X,
  Pf as Y,
  Of as Z,
  Rf as _,
  Es as a,
  If as a0,
  ge as a1,
  Hn as a2,
  Mf as a3,
  lc as a4,
  pf as a5,
  Ef as a6,
  Pi as a7,
  gf as a8,
  vf as a9,
  Fn as aa,
  lf as ab,
  uf as ac,
  Tf as ad,
  Vf as ae,
  za as af,
  Lf as ag,
  qa as ah,
  Hf as ai,
  Df as aj,
  mt as ak,
  Af as al,
  Ff as am,
  Xa as an,
  kf as ao,
  jf as ap,
  $f as aq,
  yf as b,
  oe as c,
  Oi as d,
  ro as e,
  _f as f,
  Zr as g,
  As as h,
  ae as i,
  Cs as j,
  hf as k,
  Ns as l,
  de as m,
  Ls as n,
  zo as o,
  Pl as p,
  cf as q,
  Cf as r,
  yl as s,
  xf as t,
  mi as u,
  Xo as v,
  Fe as w,
  he as x,
  wf as y,
  io as z,
}
