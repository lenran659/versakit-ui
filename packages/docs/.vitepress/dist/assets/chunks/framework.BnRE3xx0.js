/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Rs(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const ee = {},
  St = [],
  ke = () => {},
  Ro = () => !1,
  Xt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ms = (e) => e.startsWith('onUpdate:'),
  le = Object.assign,
  Is = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Mo = Object.prototype.hasOwnProperty,
  z = (e, t) => Mo.call(e, t),
  D = Array.isArray,
  xt = (e) => Jt(e) === '[object Map]',
  Br = (e) => Jt(e) === '[object Set]',
  Qs = (e) => Jt(e) === '[object Date]',
  q = (e) => typeof e == 'function',
  re = (e) => typeof e == 'string',
  He = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  Kr = (e) => (Z(e) || q(e)) && q(e.then) && q(e.catch),
  Wr = Object.prototype.toString,
  Jt = (e) => Wr.call(e),
  Io = (e) => Jt(e).slice(8, -1),
  qr = (e) => Jt(e) === '[object Object]',
  Ps = (e) =>
    re(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Et = Rs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Rn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Po = /-(\w)/g,
  Pe = Rn((e) => e.replace(Po, (t, n) => (n ? n.toUpperCase() : ''))),
  Lo = /\B([A-Z])/g,
  st = Rn((e) => e.replace(Lo, '-$1').toLowerCase()),
  Mn = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hn = Rn((e) => (e ? `on${Mn(e)}` : '')),
  et = (e, t) => !Object.is(e, t),
  pn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Gr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  No = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Fo = (e) => {
    const t = re(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Zs
const In = () =>
  Zs ||
  (Zs =
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
        r = re(s) ? jo(s) : Ls(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (re(e) || Z(e)) return e
}
const Ho = /;(?![^(]*\))/g,
  Do = /:([^]+)/,
  $o = /\/\*[^]*?\*\//g
function jo(e) {
  const t = {}
  return (
    e
      .replace($o, '')
      .split(Ho)
      .forEach((n) => {
        if (n) {
          const s = n.split(Do)
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
const Vo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Uo = Rs(Vo)
function Yr(e) {
  return !!e || e === ''
}
function ko(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = bn(e[s], t[s])
  return n
}
function bn(e, t) {
  if (e === t) return !0
  let n = Qs(e),
    s = Qs(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = He(e)), (s = He(t)), n || s)) return e === t
  if (((n = D(e)), (s = D(t)), n || s)) return n && s ? ko(e, t) : !1
  if (((n = Z(e)), (s = Z(t)), n || s)) {
    if (!n || !s) return !1
    const r = Object.keys(e).length,
      i = Object.keys(t).length
    if (r !== i) return !1
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o)
      if ((l && !c) || (!l && c) || !bn(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
const Xr = (e) => !!(e && e.__v_isRef === !0),
  Bo = (e) =>
    re(e)
      ? e
      : e == null
        ? ''
        : D(e) || (Z(e) && (e.toString === Wr || !q(e.toString)))
          ? Xr(e)
            ? Bo(e.value)
            : JSON.stringify(e, Jr, 2)
          : String(e),
  Jr = (e, t) =>
    Xr(t)
      ? Jr(e, t.value)
      : xt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Yn(s, i) + ' =>'] = r), n),
              {},
            ),
          }
        : Br(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Yn(n)) }
          : He(t)
            ? Yn(t)
            : Z(t) && !D(t) && !qr(t)
              ? String(t)
              : t,
  Yn = (e, t = '') => {
    var n
    return He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be
class Ko {
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
function zr() {
  return be
}
function Wo(e, t = !1) {
  be && be.cleanups.push(e)
}
let ne
const Xn = new WeakSet()
class Qr {
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
      ((this.flags &= -65), Xn.has(this) && (Xn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ei(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), er(this), ti(this)
    const t = ne,
      n = Ne
    ;(ne = this), (Ne = !0)
    try {
      return this.fn()
    } finally {
      ni(this), (ne = t), (Ne = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ds(t)
      ;(this.deps = this.depsTail = void 0),
        er(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Xn.add(this)
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
let Zr = 0,
  Ht,
  Dt
function ei(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = Dt), (Dt = e)
    return
  }
  ;(e.next = Ht), (Ht = e)
}
function Fs() {
  Zr++
}
function Hs() {
  if (--Zr > 0) return
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
function ti(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function ni(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), Ds(s), qo(s)) : (t = s),
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
      (t.dep.computed && (si(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function si(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Vt)
  )
    return
  e.globalVersion = Vt
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !gs(e))) {
    e.flags &= -3
    return
  }
  const n = ne,
    s = Ne
  ;(ne = e), (Ne = !0)
  try {
    ti(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || et(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(ne = n), (Ne = s), ni(e), (e.flags &= -3)
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
function qo(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Ne = !0
const ri = []
function rt() {
  ri.push(Ne), (Ne = !1)
}
function it() {
  const e = ri.pop()
  Ne = e === void 0 ? !0 : e
}
function er(e) {
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
let Vt = 0
class Go {
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
class Pn {
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
      (n = this.activeLink = new Go(ne, this)),
        ne.deps
          ? ((n.prevDep = ne.depsTail),
            (ne.depsTail.nextDep = n),
            (ne.depsTail = n))
          : (ne.deps = ne.depsTail = n),
        ii(n)
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
    this.version++, Vt++, this.notify(t)
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
function ii(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) ii(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const wn = new WeakMap(),
  dt = Symbol(''),
  ms = Symbol(''),
  Ut = Symbol('')
function ge(e, t, n) {
  if (Ne && ne) {
    let s = wn.get(e)
    s || wn.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Pn())), (r.map = s), (r.key = n)), r.track()
  }
}
function qe(e, t, n, s, r, i) {
  const o = wn.get(e)
  if (!o) {
    Vt++
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
        ;(v === 'length' || v === Ut || (!He(v) && v >= a)) && l(h)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Ut)), t)
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
function Yo(e, t) {
  const n = wn.get(e)
  return n && n.get(t)
}
function _t(e) {
  const t = J(e)
  return t === e ? t : (ge(t, 'iterate', Ut), Ie(e) ? t : t.map(me))
}
function Ln(e) {
  return ge((e = J(e)), 'iterate', Ut), e
}
const Xo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jn(this, Symbol.iterator, me)
  },
  concat(...e) {
    return _t(this).concat(...e.map((t) => (D(t) ? _t(t) : t)))
  },
  entries() {
    return Jn(this, 'entries', (e) => ((e[1] = me(e[1])), e))
  },
  every(e, t) {
    return Be(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Be(this, 'filter', e, t, (n) => n.map(me), arguments)
  },
  find(e, t) {
    return Be(this, 'find', e, t, me, arguments)
  },
  findIndex(e, t) {
    return Be(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Be(this, 'findLast', e, t, me, arguments)
  },
  findLastIndex(e, t) {
    return Be(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Be(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return zn(this, 'includes', e)
  },
  indexOf(...e) {
    return zn(this, 'indexOf', e)
  },
  join(e) {
    return _t(this).join(e)
  },
  lastIndexOf(...e) {
    return zn(this, 'lastIndexOf', e)
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
    return tr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return tr(this, 'reduceRight', e, t)
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
    return Jn(this, 'values', me)
  },
}
function Jn(e, t, n) {
  const s = Ln(e),
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
const Jo = Array.prototype
function Be(e, t, n, s, r, i) {
  const o = Ln(e),
    l = o !== e && !Ie(e),
    c = o[t]
  if (c !== Jo[t]) {
    const h = c.apply(e, i)
    return l ? me(h) : h
  }
  let u = n
  o !== e &&
    (l
      ? (u = function (h, v) {
          return n.call(this, me(h), v, e)
        })
      : n.length > 2 &&
        (u = function (h, v) {
          return n.call(this, h, v, e)
        }))
  const a = c.call(o, u, s)
  return l && r ? r(a) : a
}
function tr(e, t, n, s) {
  const r = Ln(e)
  let i = n
  return (
    r !== e &&
      (Ie(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, me(l), c, e)
          })),
    r[t](i, ...s)
  )
}
function zn(e, t, n) {
  const s = J(e)
  ge(s, 'iterate', Ut)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Vs(n[0]) ? ((n[0] = J(n[0])), s[t](...n)) : r
}
function Pt(e, t, n = []) {
  rt(), Fs()
  const s = J(e)[t].apply(e, n)
  return Hs(), it(), s
}
const zo = Rs('__proto__,__v_isRef,__isVue'),
  oi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(He),
  )
function Qo(e) {
  He(e) || (e = String(e))
  const t = J(this)
  return ge(t, 'has', e), t.hasOwnProperty(e)
}
class li {
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
      return s === (r ? (i ? cl : ui) : i ? fi : ai).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = D(t)
    if (!r) {
      let c
      if (o && (c = Xo[n])) return c
      if (n === 'hasOwnProperty') return Qo
    }
    const l = Reflect.get(t, n, ae(t) ? t : s)
    return (He(n) ? oi.has(n) : zo(n)) || (r || ge(t, 'get', n), i)
      ? l
      : ae(l)
        ? o && Ps(n)
          ? l
          : l.value
        : Z(l)
          ? r
            ? Fn(l)
            : Nn(l)
          : l
  }
}
class ci extends li {
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
    return (!He(n) || !oi.has(n)) && ge(t, 'has', n), s
  }
  ownKeys(t) {
    return ge(t, 'iterate', D(t) ? 'length' : dt), Reflect.ownKeys(t)
  }
}
class Zo extends li {
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
const el = new ci(),
  tl = new Zo(),
  nl = new ci(!0)
const ys = (e) => e,
  tn = (e) => Reflect.getPrototypeOf(e)
function sl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = J(r),
      o = xt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      a = n ? ys : t ? vs : me
    return (
      !t && ge(i, 'iterate', c ? ms : dt),
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
function nn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function rl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      e || (et(r, l) && ge(o, 'get', r), ge(o, 'get', l))
      const { has: c } = tn(o),
        u = t ? ys : e ? vs : me
      if (c.call(o, r)) return u(i.get(r))
      if (c.call(o, l)) return u(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && ge(J(r), 'iterate', dt), Reflect.get(r, 'size', r)
    },
    has(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      return (
        e || (et(r, l) && ge(o, 'has', r), ge(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = J(l),
        u = t ? ys : e ? vs : me
      return (
        !e && ge(c, 'iterate', dt),
        l.forEach((a, h) => r.call(i, u(a), u(h), o))
      )
    },
  }
  return (
    le(
      n,
      e
        ? {
            add: nn('add'),
            set: nn('set'),
            delete: nn('delete'),
            clear: nn('clear'),
          }
        : {
            add(r) {
              !t && !Ie(r) && !yt(r) && (r = J(r))
              const i = J(this)
              return (
                tn(i).has.call(i, r) || (i.add(r), qe(i, 'add', r, r)), this
              )
            },
            set(r, i) {
              !t && !Ie(i) && !yt(i) && (i = J(i))
              const o = J(this),
                { has: l, get: c } = tn(o)
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
                { has: o, get: l } = tn(i)
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
      n[r] = sl(r, e, t)
    }),
    n
  )
}
function $s(e, t) {
  const n = rl(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(z(n, r) && r in s ? n : s, r, i)
}
const il = { get: $s(!1, !1) },
  ol = { get: $s(!1, !0) },
  ll = { get: $s(!0, !1) }
const ai = new WeakMap(),
  fi = new WeakMap(),
  ui = new WeakMap(),
  cl = new WeakMap()
function al(e) {
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
function fl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : al(Io(e))
}
function Nn(e) {
  return yt(e) ? e : js(e, !1, el, il, ai)
}
function ul(e) {
  return js(e, !1, nl, ol, fi)
}
function Fn(e) {
  return js(e, !0, tl, ll, ui)
}
function js(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = fl(e)
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
function gn(e) {
  return !z(e, '__v_skip') && Object.isExtensible(e) && Gr(e, '__v_skip', !0), e
}
const me = (e) => (Z(e) ? Nn(e) : e),
  vs = (e) => (Z(e) ? Fn(e) : e)
function ae(e) {
  return e ? e.__v_isRef === !0 : !1
}
function de(e) {
  return hi(e, !1)
}
function di(e) {
  return hi(e, !0)
}
function hi(e, t) {
  return ae(e) ? e : new dl(e, t)
}
class dl {
  constructor(t, n) {
    ;(this.dep = new Pn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : me(t)),
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
        (this._value = s ? t : me(t)),
        this.dep.trigger())
  }
}
function pi(e) {
  return ae(e) ? e.value : e
}
const hl = {
  get: (e, t, n) => (t === '__v_raw' ? e : pi(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return ae(r) && !ae(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function gi(e) {
  return ht(e) ? e : new Proxy(e, hl)
}
class pl {
  constructor(t) {
    ;(this.__v_isRef = !0), (this._value = void 0)
    const n = (this.dep = new Pn()),
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
function gl(e) {
  return new pl(e)
}
class ml {
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
    return Yo(J(this._object), this._key)
  }
}
class yl {
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
function vl(e, t, n) {
  return ae(e)
    ? e
    : q(e)
      ? new yl(e)
      : Z(e) && arguments.length > 1
        ? _l(e, t, n)
        : de(e)
}
function _l(e, t, n) {
  const s = e[t]
  return ae(s) ? s : new ml(e, t, n)
}
class bl {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Pn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Vt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ne !== this))
      return ei(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return si(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function wl(e, t, n = !1) {
  let s, r
  return q(e) ? (s = e) : ((s = e.get), (r = e.set)), new bl(s, r, n)
}
const sn = {},
  Sn = new WeakMap()
let ft
function Sl(e, t = !1, n = ft) {
  if (n) {
    let s = Sn.get(n)
    s || Sn.set(n, (s = [])), s.push(e)
  }
}
function xl(e, t, n = ee) {
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
    R = !1
  if (
    (ae(e)
      ? ((h = () => e.value), (P = Ie(e)))
      : ht(e)
        ? ((h = () => u(e)), (P = !0))
        : D(e)
          ? ((R = !0),
            (P = e.some((p) => ht(p) || Ie(p))),
            (h = () =>
              e.map((p) => {
                if (ae(p)) return p.value
                if (ht(p)) return u(p)
                if (q(p)) return c ? c(p, 2) : p()
              })))
          : q(e)
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
            : (h = ke),
    t && r)
  ) {
    const p = h,
      A = r === !0 ? 1 / 0 : r
    h = () => Ge(p(), A)
  }
  const G = zr(),
    k = () => {
      a.stop(), G && G.active && Is(G.effects, a)
    }
  if (i && t) {
    const p = t
    t = (...A) => {
      p(...A), k()
    }
  }
  let K = R ? new Array(e.length).fill(sn) : sn
  const g = (p) => {
    if (!(!(a.flags & 1) || (!a.dirty && !p)))
      if (t) {
        const A = a.run()
        if (r || P || (R ? A.some((j, V) => et(j, K[V])) : et(A, K))) {
          v && v()
          const j = ft
          ft = a
          try {
            const V = [A, K === sn ? void 0 : R && K[0] === sn ? [] : K, S]
            c ? c(t, 3, V) : t(...V), (K = A)
          } finally {
            ft = j
          }
        }
      } else a.run()
  }
  return (
    l && l(g),
    (a = new Qr(h)),
    (a.scheduler = o ? () => o(g, !1) : g),
    (S = (p) => Sl(p, !1, a)),
    (v = a.onStop =
      () => {
        const p = Sn.get(a)
        if (p) {
          if (c) c(p, 4)
          else for (const A of p) A()
          Sn.delete(a)
        }
      }),
    t ? (s ? g(!0) : (K = a.run())) : o ? o(g.bind(null, !0), !0) : a.run(),
    (k.pause = a.pause.bind(a)),
    (k.resume = a.resume.bind(a)),
    (k.stop = k),
    k
  )
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, ae(e))) Ge(e.value, t, n)
  else if (D(e)) for (let s = 0; s < e.length; s++) Ge(e[s], t, n)
  else if (Br(e) || xt(e))
    e.forEach((s) => {
      Ge(s, t, n)
    })
  else if (qr(e)) {
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
 **/ function zt(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Hn(r, t, n)
  }
}
function De(e, t, n, s) {
  if (q(e)) {
    const r = zt(e, t, n, s)
    return (
      r &&
        Kr(r) &&
        r.catch((i) => {
          Hn(i, t, n)
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
function Hn(e, t, n, s = !0) {
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
      rt(), zt(i, null, 10, [e, c, u]), it()
      return
    }
  }
  El(e, n, r, s, o)
}
function El(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const we = []
let Ve = -1
const Ct = []
let ze = null,
  wt = 0
const mi = Promise.resolve()
let xn = null
function Dn(e) {
  const t = xn || mi
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Cl(e) {
  let t = Ve + 1,
    n = we.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = we[s],
      i = kt(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Us(e) {
  if (!(e.flags & 1)) {
    const t = kt(e),
      n = we[we.length - 1]
    !n || (!(e.flags & 2) && t >= kt(n)) ? we.push(e) : we.splice(Cl(t), 0, e),
      (e.flags |= 1),
      yi()
  }
}
function yi() {
  xn || (xn = mi.then(vi))
}
function Tl(e) {
  D(e)
    ? Ct.push(...e)
    : ze && e.id === -1
      ? ze.splice(wt + 1, 0, e)
      : e.flags & 1 || (Ct.push(e), (e.flags |= 1)),
    yi()
}
function nr(e, t, n = Ve + 1) {
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
function En(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort((n, s) => kt(n) - kt(s))
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
const kt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function vi(e) {
  try {
    for (Ve = 0; Ve < we.length; Ve++) {
      const t = we[Ve]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        zt(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ve < we.length; Ve++) {
      const t = we[Ve]
      t && (t.flags &= -2)
    }
    ;(Ve = -1),
      (we.length = 0),
      En(),
      (xn = null),
      (we.length || Ct.length) && vi()
  }
}
let ce = null,
  _i = null
function Cn(e) {
  const t = ce
  return (ce = e), (_i = (e && e.type.__scopeId) || null), t
}
function Al(e, t = ce, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && pr(-1)
    const i = Cn(t)
    let o
    try {
      o = e(...r)
    } finally {
      Cn(i), s._d && pr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function sf(e, t) {
  if (ce === null) return e
  const n = Kn(ce),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r]
    i &&
      (q(i) && (i = { mounted: i, updated: i }),
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
function Ue(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (rt(), De(c, n, 8, [e.el, l, e, t]), it())
  }
}
const Ol = Symbol('_vte'),
  bi = (e) => e.__isTeleport,
  Qe = Symbol('_leaveCb'),
  rn = Symbol('_enterCb')
function Rl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Rt(() => {
      e.isMounted = !0
    }),
    Ri(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Oe = [Function, Array],
  wi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Oe,
    onEnter: Oe,
    onAfterEnter: Oe,
    onEnterCancelled: Oe,
    onBeforeLeave: Oe,
    onLeave: Oe,
    onAfterLeave: Oe,
    onLeaveCancelled: Oe,
    onBeforeAppear: Oe,
    onAppear: Oe,
    onAfterAppear: Oe,
    onAppearCancelled: Oe,
  },
  Si = (e) => {
    const t = e.subTree
    return t.component ? Si(t.component) : t
  },
  Ml = {
    name: 'BaseTransition',
    props: wi,
    setup(e, { slots: t }) {
      const n = Bn(),
        s = Rl()
      return () => {
        const r = t.default && Ci(t.default(), !0)
        if (!r || !r.length) return
        const i = xi(r),
          o = J(e),
          { mode: l } = o
        if (s.isLeaving) return Qn(i)
        const c = sr(i)
        if (!c) return Qn(i)
        let u = _s(c, o, s, n, (h) => (u = h))
        c.type !== ye && Bt(c, u)
        let a = n.subTree && sr(n.subTree)
        if (a && a.type !== ye && !ut(c, a) && Si(n).type !== ye) {
          let h = _s(a, o, s, n)
          if ((Bt(a, h), l === 'out-in' && c.type !== ye))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete h.afterLeave,
                  (a = void 0)
              }),
              Qn(i)
            )
          l === 'in-out' && c.type !== ye
            ? (h.delayLeave = (v, S, P) => {
                const R = Ei(s, a)
                ;(R[String(a.key)] = a),
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
function xi(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ye) {
        t = n
        break
      }
  }
  return t
}
const Il = Ml
function Ei(e, t) {
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
      onLeaveCancelled: R,
      onBeforeAppear: G,
      onAppear: k,
      onAfterAppear: K,
      onAppearCancelled: g,
    } = t,
    p = String(e.key),
    A = Ei(n, e),
    j = (I, _) => {
      I && De(I, s, 9, _)
    },
    V = (I, _) => {
      const L = _[1]
      j(I, _),
        D(I) ? I.every((b) => b.length <= 1) && L() : I.length <= 1 && L()
    },
    W = {
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
          if (i) (_ = k || u), (L = K || a), (b = g || h)
          else return
        let U = !1
        const se = (I[rn] = (ie) => {
          U ||
            ((U = !0),
            ie ? j(b, [I]) : j(L, [I]),
            W.delayedLeave && W.delayedLeave(),
            (I[rn] = void 0))
        })
        _ ? V(_, [I, se]) : se()
      },
      leave(I, _) {
        const L = String(e.key)
        if ((I[rn] && I[rn](!0), n.isUnmounting)) return _()
        j(v, [I])
        let b = !1
        const U = (I[Qe] = (se) => {
          b ||
            ((b = !0),
            _(),
            se ? j(R, [I]) : j(P, [I]),
            (I[Qe] = void 0),
            A[L] === e && delete A[L])
        })
        ;(A[L] = e), S ? V(S, [I, U]) : U()
      },
      clone(I) {
        const _ = _s(I, t, n, s, r)
        return r && r(_), _
      },
    }
  return W
}
function Qn(e) {
  if ($n(e)) return (e = nt(e)), (e.children = null), e
}
function sr(e) {
  if (!$n(e)) return bi(e.type) && e.children ? xi(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && q(n.default)) return n.default()
  }
}
function Bt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Bt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Ci(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === Se
      ? (o.patchFlag & 128 && r++, (s = s.concat(Ci(o.children, t, l))))
      : (t || o.type !== ye) && s.push(l != null ? nt(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Ti(e, t) {
  return q(e) ? le({ name: e.name }, t, { setup: e }) : e
}
function Ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function Kt(e, t, n, s, r = !1) {
  if (D(e)) {
    e.forEach((P, R) => Kt(P, t && (D(t) ? t[R] : t), n, s, r))
    return
  }
  if (pt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Kt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? Kn(s.component) : s.el,
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
    q(c))
  )
    zt(c, l, 12, [o, a])
  else {
    const P = re(c),
      R = ae(c)
    if (P || R) {
      const G = () => {
        if (e.f) {
          const k = P ? (S(c) ? h[c] : a[c]) : c.value
          r
            ? D(k) && Is(k, i)
            : D(k)
              ? k.includes(i) || k.push(i)
              : P
                ? ((a[c] = [i]), S(c) && (h[c] = a[c]))
                : ((c.value = [i]), e.k && (a[e.k] = c.value))
        } else
          P
            ? ((a[c] = o), S(c) && (h[c] = o))
            : R && ((c.value = o), e.k && (a[e.k] = o))
      }
      o ? ((G.id = -1), Te(G, n)) : G()
    }
  }
}
let rr = !1
const bt = () => {
    rr ||
      (console.error('Hydration completed but contains mismatches.'), (rr = !0))
  },
  Pl = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Ll = (e) => e.namespaceURI.includes('MathML'),
  on = (e) => {
    if (e.nodeType === 1) {
      if (Pl(e)) return 'svg'
      if (Ll(e)) return 'mathml'
    }
  },
  ln = (e) => e.nodeType === 8
function Nl(e) {
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
        n(null, g, p), En(), (p._vnode = g)
        return
      }
      h(p.firstChild, g, null, null, null), En(), (p._vnode = g)
    },
    h = (g, p, A, j, V, W = !1) => {
      W = W || !!p.dynamicChildren
      const I = ln(g) && g.data === '[',
        _ = () => R(g, p, A, j, V, I),
        { type: L, ref: b, shapeFlag: U, patchFlag: se } = p
      let ie = g.nodeType
      ;(p.el = g), se === -2 && ((W = !1), (p.dynamicChildren = null))
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
        case ye:
          K(g)
            ? ((H = i(g)), k((p.el = g.content.firstChild), g, A))
            : ie !== 8 || I
              ? (H = _())
              : (H = i(g))
          break
        case mn:
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
          I ? (H = P(g, p, A, j, V, W)) : (H = _())
          break
        default:
          if (U & 1)
            (ie !== 1 || p.type.toLowerCase() !== g.tagName.toLowerCase()) &&
            !K(g)
              ? (H = _())
              : (H = v(g, p, A, j, V, W))
          else if (U & 6) {
            p.slotScopeIds = V
            const Y = o(g)
            if (
              (I
                ? (H = G(g))
                : ln(g) && g.data === 'teleport start'
                  ? (H = G(g, g.data, 'teleport end'))
                  : (H = i(g)),
              t(p, Y, null, A, j, on(Y), W),
              pt(p) && !p.type.__asyncResolved)
            ) {
              let F
              I
                ? ((F = ve(Se)),
                  (F.anchor = H ? H.previousSibling : Y.lastChild))
                : (F = g.nodeType === 3 ? so('') : ve('div')),
                (F.el = g),
                (p.component.subTree = F)
            }
          } else
            U & 64
              ? ie !== 8
                ? (H = _())
                : (H = p.type.hydrate(g, p, A, j, V, W, e, S))
              : U & 128 &&
                (H = p.type.hydrate(g, p, A, j, on(o(g)), V, W, e, h))
      }
      return b != null && Kt(b, null, j, p), H
    },
    v = (g, p, A, j, V, W) => {
      W = W || !!p.dynamicChildren
      const {
          type: I,
          props: _,
          patchFlag: L,
          shapeFlag: b,
          dirs: U,
          transition: se,
        } = p,
        ie = I === 'input' || I === 'option'
      if (ie || L !== -1) {
        U && Ue(p, null, A, 'created')
        let H = !1
        if (K(g)) {
          H = Wi(null, se) && A && A.vnode.props && A.vnode.props.appear
          const F = g.content.firstChild
          H && se.beforeEnter(F), k(F, g, A), (p.el = g = F)
        }
        if (b & 16 && !(_ && (_.innerHTML || _.textContent))) {
          let F = S(g.firstChild, p, g, A, j, V, W)
          for (; F; ) {
            cn(g, 1) || bt()
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
              (cn(g, 0) || bt(), (g.textContent = p.children))
        }
        if (_) {
          if (ie || !W || L & 48) {
            const F = g.tagName.includes('-')
            for (const fe in _)
              ((ie && (fe.endsWith('value') || fe === 'indeterminate')) ||
                (Xt(fe) && !Et(fe)) ||
                fe[0] === '.' ||
                F) &&
                s(g, fe, null, _[fe], void 0, A)
          } else if (_.onClick) s(g, 'onClick', null, _.onClick, void 0, A)
          else if (L & 4 && ht(_.style)) for (const F in _.style) _.style[F]
        }
        let Y
        ;(Y = _ && _.onVnodeBeforeMount) && Re(Y, A, p),
          U && Ue(p, null, A, 'beforeMount'),
          ((Y = _ && _.onVnodeMounted) || U || H) &&
            Zi(() => {
              Y && Re(Y, A, p), H && se.enter(g), U && Ue(p, null, A, 'mounted')
            }, j)
      }
      return g.nextSibling
    },
    S = (g, p, A, j, V, W, I) => {
      I = I || !!p.dynamicChildren
      const _ = p.children,
        L = _.length
      for (let b = 0; b < L; b++) {
        const U = I ? _[b] : (_[b] = Me(_[b])),
          se = U.type === gt
        g
          ? (se &&
              !I &&
              b + 1 < L &&
              Me(_[b + 1]).type === gt &&
              (c(r(g.data.slice(U.children.length)), A, i(g)),
              (g.data = U.children)),
            (g = h(g, U, j, V, W, I)))
          : se && !U.children
            ? c((U.el = r('')), A)
            : (cn(A, 1) || bt(), n(null, U, A, null, j, V, on(A), W))
      }
      return g
    },
    P = (g, p, A, j, V, W) => {
      const { slotScopeIds: I } = p
      I && (V = V ? V.concat(I) : I)
      const _ = o(g),
        L = S(i(g), p, _, A, j, V, W)
      return L && ln(L) && L.data === ']'
        ? i((p.anchor = L))
        : (bt(), c((p.anchor = u(']')), _, L), L)
    },
    R = (g, p, A, j, V, W) => {
      if ((cn(g.parentElement, 1) || bt(), (p.el = null), W)) {
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
        n(null, p, _, I, A, j, on(_), V),
        A && ((A.vnode.el = p.el), zi(A, p.el)),
        I
      )
    },
    G = (g, p = '[', A = ']') => {
      let j = 0
      for (; g; )
        if (((g = i(g)), g && ln(g) && (g.data === p && j++, g.data === A))) {
          if (j === 0) return i(g)
          j--
        }
      return g
    },
    k = (g, p, A) => {
      const j = p.parentNode
      j && j.replaceChild(g, p)
      let V = A
      for (; V; )
        V.vnode.el === p && (V.vnode.el = V.subTree.el = g), (V = V.parent)
    },
    K = (g) => g.nodeType === 1 && g.tagName === 'TEMPLATE'
  return [a, h]
}
const ir = 'data-allow-mismatch',
  Fl = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function cn(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(ir); ) e = e.parentElement
  const n = e && e.getAttribute(ir)
  if (n == null) return !1
  if (n === '') return !0
  {
    const s = n.split(',')
    return t === 0 && s.includes('children') ? !0 : n.split(',').includes(Fl[t])
  }
}
In().requestIdleCallback
In().cancelIdleCallback
const pt = (e) => !!e.type.__asyncLoader,
  $n = (e) => e.type.__isKeepAlive
function Hl(e, t) {
  Oi(e, 'a', t)
}
function Dl(e, t) {
  Oi(e, 'da', t)
}
function Oi(e, t, n = ue) {
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
  if ((jn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) $n(r.parent.vnode) && $l(s, t, n, r), (r = r.parent)
  }
}
function $l(e, t, n, s) {
  const r = jn(t, e, s, !0)
  Vn(() => {
    Is(s[t], r)
  }, n)
}
function jn(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          rt()
          const l = Qt(n),
            c = De(t, n, e, o)
          return l(), it(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const Xe =
    (e) =>
    (t, n = ue) => {
      ;(!Gt || e === 'sp') && jn(e, (...s) => t(...s), n)
    },
  jl = Xe('bm'),
  Rt = Xe('m'),
  Vl = Xe('bu'),
  Ul = Xe('u'),
  Ri = Xe('bum'),
  Vn = Xe('um'),
  kl = Xe('sp'),
  Bl = Xe('rtg'),
  Kl = Xe('rtc')
function Wl(e, t = ue) {
  jn('ec', e, t)
}
const Mi = 'components'
function rf(e, t) {
  return Pi(Mi, e, !0, t) || e
}
const Ii = Symbol.for('v-ndc')
function of(e) {
  return re(e) ? Pi(Mi, e, !1) || e : e || Ii
}
function Pi(e, t, n = !0, s = !1) {
  const r = ce || ue
  if (r) {
    const i = r.type
    {
      const l = Rc(i, !1)
      if (l && (l === t || l === Pe(t) || l === Mn(Pe(t)))) return i
    }
    const o = or(r[e] || i[e], t) || or(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function or(e, t) {
  return e && (e[t] || e[Pe(t)] || e[Mn(Pe(t))])
}
function lf(e, t, n, s) {
  let r
  const i = n,
    o = D(e)
  if (o || re(e)) {
    const l = o && ht(e)
    let c = !1
    l && ((c = !Ie(e)), (e = Ln(e))), (r = new Array(e.length))
    for (let u = 0, a = e.length; u < a; u++)
      r[u] = t(c ? me(e[u]) : e[u], u, void 0, i)
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
function cf(e, t, n = {}, s, r) {
  if (ce.ce || (ce.parent && pt(ce.parent) && ce.parent.ce))
    return (
      t !== 'default' && (n.name = t),
      Es(),
      Cs(Se, null, [ve('slot', n, s && s())], 64)
    )
  let i = e[t]
  i && i._c && (i._d = !1), Es()
  const o = i && Li(i(n)),
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
function Li(e) {
  return e.some((t) =>
    qt(t) ? !(t.type === ye || (t.type === Se && !Li(t.children))) : !0,
  )
    ? e
    : null
}
function af(e, t) {
  const n = {}
  for (const s in e) n[/[A-Z]/.test(s) ? `on:${s}` : hn(s)] = e[s]
  return n
}
const bs = (e) => (e ? (ro(e) ? Kn(e) : bs(e.parent)) : null),
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
    $options: (e) => ks(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Us(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Dn.bind(e.proxy)),
    $watch: (e) => hc.bind(e),
  }),
  Zn = (e, t) => e !== ee && !e.__isScriptSetup && z(e, t),
  ql = {
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
          if (Zn(s, t)) return (o[t] = 1), s[t]
          if (r !== ee && z(r, t)) return (o[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && z(u, t)) return (o[t] = 3), i[t]
          if (n !== ee && z(n, t)) return (o[t] = 4), n[t]
          ws && (o[t] = 0)
        }
      }
      const a = $t[t]
      let h, v
      if (a) return t === '$attrs' && ge(e.attrs, 'get', ''), a(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ee && z(n, t)) return (o[t] = 4), n[t]
      if (((v = c.config.globalProperties), z(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return Zn(r, t)
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
        Zn(t, o) ||
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
function ff() {
  return Gl().slots
}
function Gl() {
  const e = Bn()
  return e.setupContext || (e.setupContext = oo(e))
}
function lr(e) {
  return D(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ws = !0
function Yl(e) {
  const t = ks(e),
    n = e.proxy,
    s = e.ctx
  ;(ws = !1), t.beforeCreate && cr(t.beforeCreate, e, 'bc')
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
    activated: R,
    deactivated: G,
    beforeDestroy: k,
    beforeUnmount: K,
    destroyed: g,
    unmounted: p,
    render: A,
    renderTracked: j,
    renderTriggered: V,
    errorCaptured: W,
    serverPrefetch: I,
    expose: _,
    inheritAttrs: L,
    components: b,
    directives: U,
    filters: se,
  } = t
  if ((u && Xl(u, s, null), o))
    for (const Y in o) {
      const F = o[Y]
      q(F) && (s[Y] = F.bind(n))
    }
  if (r) {
    const Y = r.call(n, n)
    Z(Y) && (e.data = Nn(Y))
  }
  if (((ws = !0), i))
    for (const Y in i) {
      const F = i[Y],
        fe = q(F) ? F.bind(n, n) : q(F.get) ? F.get.bind(n, n) : ke,
        Zt = !q(F) && q(F.set) ? F.set.bind(n) : ke,
        ot = oe({ get: fe, set: Zt })
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: ($e) => (ot.value = $e),
      })
    }
  if (l) for (const Y in l) Ni(l[Y], s, n, Y)
  if (c) {
    const Y = q(c) ? c.call(n) : c
    Reflect.ownKeys(Y).forEach((F) => {
      tc(F, Y[F])
    })
  }
  a && cr(a, e, 'c')
  function H(Y, F) {
    D(F) ? F.forEach((fe) => Y(fe.bind(n))) : F && Y(F.bind(n))
  }
  if (
    (H(jl, h),
    H(Rt, v),
    H(Vl, S),
    H(Ul, P),
    H(Hl, R),
    H(Dl, G),
    H(Wl, W),
    H(Kl, j),
    H(Bl, V),
    H(Ri, K),
    H(Vn, p),
    H(kl, I),
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
  A && e.render === ke && (e.render = A),
    L != null && (e.inheritAttrs = L),
    b && (e.components = b),
    U && (e.directives = U),
    I && Ai(e)
}
function Xl(e, t, n = ke) {
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
function cr(e, t, n) {
  De(D(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ni(e, t, n, s) {
  let r = s.includes('.') ? Xi(n, s) : () => n[s]
  if (re(e)) {
    const i = t[e]
    q(i) && Fe(r, i)
  } else if (q(e)) Fe(r, e.bind(n))
  else if (Z(e))
    if (D(e)) e.forEach((i) => Ni(i, t, n, s))
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler]
      q(i) && Fe(r, i, e)
    }
}
function ks(e) {
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
          r.length && r.forEach((u) => Tn(c, u, o, !0)),
          Tn(c, t, o)),
    Z(t) && i.set(t, c),
    c
  )
}
function Tn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && Tn(e, i, n, !0), r && r.forEach((o) => Tn(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Jl[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Jl = {
  data: ar,
  props: fr,
  emits: fr,
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
  watch: Ql,
  provide: ar,
  inject: zl,
}
function ar(e, t) {
  return t
    ? e
      ? function () {
          return le(
            q(e) ? e.call(this, this) : e,
            q(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function zl(e, t) {
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
function fr(e, t) {
  return e
    ? D(e) && D(t)
      ? [...new Set([...e, ...t])]
      : le(Object.create(null), lr(e), lr(t ?? {}))
    : t
}
function Ql(e, t) {
  if (!e) return t
  if (!t) return e
  const n = le(Object.create(null), e)
  for (const s in t) n[s] = _e(e[s], t[s])
  return n
}
function Fi() {
  return {
    app: null,
    config: {
      isNativeTag: Ro,
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
let Zl = 0
function ec(e, t) {
  return function (s, r = null) {
    q(s) || (s = le({}, s)), r != null && !Z(r) && (r = null)
    const i = Fi(),
      o = new WeakSet(),
      l = []
    let c = !1
    const u = (i.app = {
      _uid: Zl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Ic,
      get config() {
        return i.config
      },
      set config(a) {},
      use(a, ...h) {
        return (
          o.has(a) ||
            (a && q(a.install)
              ? (o.add(a), a.install(u, ...h))
              : q(a) && (o.add(a), a(u, ...h))),
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
          const S = u._ceVNode || ve(s, r)
          return (
            (S.appContext = i),
            v === !0 ? (v = 'svg') : v === !1 && (v = void 0),
            h && t ? t(S, a) : e(S, a, v),
            (c = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            Kn(S.component)
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
function tc(e, t) {
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
    if (arguments.length > 1) return n && q(t) ? t.call(s && s.proxy) : t
  }
}
const Hi = {},
  Di = () => Object.create(Hi),
  $i = (e) => Object.getPrototypeOf(e) === Hi
function nc(e, t, n, s = !1) {
  const r = {},
    i = Di()
  ;(e.propsDefaults = Object.create(null)), ji(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : ul(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function sc(e, t, n, s) {
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
        if (kn(e.emitsOptions, v)) continue
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
    ji(e, t, r, i) && (u = !0)
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
function ji(e, t, n, s) {
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
        : kn(e.emitsOptions, c) ||
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
      if (o.type !== Function && !o.skipFactory && q(c)) {
        const { propsDefaults: u } = r
        if (n in u) s = u[n]
        else {
          const a = Qt(r)
          ;(s = u[n] = c.call(null, t)), a()
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === st(n)) && (s = !0))
  }
  return s
}
const rc = new WeakMap()
function Vi(e, t, n = !1) {
  const s = n ? rc : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!q(e)) {
    const a = (h) => {
      c = !0
      const [v, S] = Vi(h, t, !0)
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
      ur(h) && (o[h] = ee)
    }
  else if (i)
    for (const a in i) {
      const h = Pe(a)
      if (ur(h)) {
        const v = i[a],
          S = (o[h] = D(v) || q(v) ? { type: v } : le({}, v)),
          P = S.type
        let R = !1,
          G = !0
        if (D(P))
          for (let k = 0; k < P.length; ++k) {
            const K = P[k],
              g = q(K) && K.name
            if (g === 'Boolean') {
              R = !0
              break
            } else g === 'String' && (G = !1)
          }
        else R = q(P) && P.name === 'Boolean'
        ;(S[0] = R), (S[1] = G), (R || z(S, 'default')) && l.push(h)
      }
    }
  const u = [o, l]
  return Z(e) && s.set(e, u), u
}
function ur(e) {
  return e[0] !== '$' && !Et(e)
}
const Ui = (e) => e[0] === '_' || e === '$stable',
  Bs = (e) => (D(e) ? e.map(Me) : [Me(e)]),
  ic = (e, t, n) => {
    if (t._n) return t
    const s = Al((...r) => Bs(t(...r)), n)
    return (s._c = !1), s
  },
  ki = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ui(r)) continue
      const i = e[r]
      if (q(i)) t[r] = ic(r, i, s)
      else if (i != null) {
        const o = Bs(i)
        t[r] = () => o
      }
    }
  },
  Bi = (e, t) => {
    const n = Bs(t)
    e.slots.default = () => n
  },
  Ki = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  oc = (e, t, n) => {
    const s = (e.slots = Di())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Ki(s, t, n), n && Gr(s, '_', r, !0)) : ki(t, s)
    } else t && Bi(e, t)
  },
  lc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ee
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : Ki(r, t, n)
        : ((i = !t.$stable), ki(t, r)),
        (o = t)
    } else t && (Bi(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Ui(l) && o[l] == null && delete r[l]
  },
  Te = Zi
function cc(e) {
  return ac(e, Nl)
}
function ac(e, t) {
  const n = In()
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
      setScopeId: S = ke,
      insertStaticContent: P,
    } = e,
    R = (
      f,
      d,
      m,
      x = null,
      y = null,
      w = null,
      O = void 0,
      T = null,
      C = !!d.dynamicChildren,
    ) => {
      if (f === d) return
      f && !ut(f, d) && ((x = en(f)), $e(f, y, w, !0), (f = null)),
        d.patchFlag === -2 && ((C = !1), (d.dynamicChildren = null))
      const { type: E, ref: $, shapeFlag: M } = d
      switch (E) {
        case gt:
          G(f, d, m, x)
          break
        case ye:
          k(f, d, m, x)
          break
        case mn:
          f == null && K(d, m, x, O)
          break
        case Se:
          b(f, d, m, x, y, w, O, T, C)
          break
        default:
          M & 1
            ? A(f, d, m, x, y, w, O, T, C)
            : M & 6
              ? U(f, d, m, x, y, w, O, T, C)
              : (M & 64 || M & 128) && E.process(f, d, m, x, y, w, O, T, C, vt)
      }
      $ != null && y && Kt($, f && f.ref, w, d || f, !d)
    },
    G = (f, d, m, x) => {
      if (f == null) s((d.el = l(d.children)), m, x)
      else {
        const y = (d.el = f.el)
        d.children !== f.children && u(y, d.children)
      }
    },
    k = (f, d, m, x) => {
      f == null ? s((d.el = c(d.children || '')), m, x) : (d.el = f.el)
    },
    K = (f, d, m, x) => {
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
    A = (f, d, m, x, y, w, O, T, C) => {
      d.type === 'svg' ? (O = 'svg') : d.type === 'math' && (O = 'mathml'),
        f == null ? j(d, m, x, y, w, O, T, C) : I(f, d, y, w, O, T, C)
    },
    j = (f, d, m, x, y, w, O, T) => {
      let C, E
      const { props: $, shapeFlag: M, transition: N, dirs: B } = f
      if (
        ((C = f.el = o(f.type, w, $ && $.is, $)),
        M & 8
          ? a(C, f.children)
          : M & 16 && W(f.children, C, null, x, y, es(f, w), O, T),
        B && Ue(f, null, x, 'created'),
        V(C, f, f.scopeId, O, x),
        $)
      ) {
        for (const te in $)
          te !== 'value' && !Et(te) && i(C, te, null, $[te], w, x)
        'value' in $ && i(C, 'value', null, $.value, w),
          (E = $.onVnodeBeforeMount) && Re(E, x, f)
      }
      B && Ue(f, null, x, 'beforeMount')
      const X = Wi(y, N)
      X && N.beforeEnter(C),
        s(C, d, m),
        ((E = $ && $.onVnodeMounted) || X || B) &&
          Te(() => {
            E && Re(E, x, f), X && N.enter(C), B && Ue(f, null, x, 'mounted')
          }, y)
    },
    V = (f, d, m, x, y) => {
      if ((m && S(f, m), x)) for (let w = 0; w < x.length; w++) S(f, x[w])
      if (y) {
        let w = y.subTree
        if (
          d === w ||
          (Qi(w.type) && (w.ssContent === d || w.ssFallback === d))
        ) {
          const O = y.vnode
          V(f, O, O.scopeId, O.slotScopeIds, y.parent)
        }
      }
    },
    W = (f, d, m, x, y, w, O, T, C = 0) => {
      for (let E = C; E < f.length; E++) {
        const $ = (f[E] = T ? Ze(f[E]) : Me(f[E]))
        R(null, $, d, m, x, y, w, O, T)
      }
    },
    I = (f, d, m, x, y, w, O) => {
      const T = (d.el = f.el)
      let { patchFlag: C, dynamicChildren: E, dirs: $ } = d
      C |= f.patchFlag & 16
      const M = f.props || ee,
        N = d.props || ee
      let B
      if (
        (m && lt(m, !1),
        (B = N.onVnodeBeforeUpdate) && Re(B, m, d, f),
        $ && Ue(d, f, m, 'beforeUpdate'),
        m && lt(m, !0),
        ((M.innerHTML && N.innerHTML == null) ||
          (M.textContent && N.textContent == null)) &&
          a(T, ''),
        E
          ? _(f.dynamicChildren, E, T, m, x, es(d, y), w)
          : O || F(f, d, T, null, m, x, es(d, y), w, !1),
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
              he = N[Q]
            ;(he !== xe || Q === 'value') && i(T, Q, xe, he, y, m)
          }
        }
        C & 1 && f.children !== d.children && a(T, d.children)
      } else !O && E == null && L(T, M, N, m, y)
      ;((B = N.onVnodeUpdated) || $) &&
        Te(() => {
          B && Re(B, m, d, f), $ && Ue(d, f, m, 'updated')
        }, x)
    },
    _ = (f, d, m, x, y, w, O) => {
      for (let T = 0; T < d.length; T++) {
        const C = f[T],
          E = d[T],
          $ =
            C.el && (C.type === Se || !ut(C, E) || C.shapeFlag & 70)
              ? h(C.el)
              : m
        R(C, E, $, null, x, y, w, O, !0)
      }
    },
    L = (f, d, m, x, y) => {
      if (d !== m) {
        if (d !== ee)
          for (const w in d) !Et(w) && !(w in m) && i(f, w, d[w], null, y, x)
        for (const w in m) {
          if (Et(w)) continue
          const O = m[w],
            T = d[w]
          O !== T && w !== 'value' && i(f, w, T, O, y, x)
        }
        'value' in m && i(f, 'value', d.value, m.value, y)
      }
    },
    b = (f, d, m, x, y, w, O, T, C) => {
      const E = (d.el = f ? f.el : l('')),
        $ = (d.anchor = f ? f.anchor : l(''))
      let { patchFlag: M, dynamicChildren: N, slotScopeIds: B } = d
      B && (T = T ? T.concat(B) : B),
        f == null
          ? (s(E, m, x), s($, m, x), W(d.children || [], m, $, y, w, O, T, C))
          : M > 0 && M & 64 && N && f.dynamicChildren
            ? (_(f.dynamicChildren, N, m, y, w, O, T),
              (d.key != null || (y && d === y.subTree)) && qi(f, d, !0))
            : F(f, d, m, $, y, w, O, T, C)
    },
    U = (f, d, m, x, y, w, O, T, C) => {
      ;(d.slotScopeIds = T),
        f == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, m, x, O, C)
            : se(d, m, x, y, w, O, C)
          : ie(f, d, C)
    },
    se = (f, d, m, x, y, w, O) => {
      const T = (f.component = Cc(f, x, y))
      if (($n(f) && (T.ctx.renderer = vt), Tc(T, !1, O), T.asyncDep)) {
        if ((y && y.registerDep(T, H, O), !f.el)) {
          const C = (T.subTree = ve(ye))
          k(null, C, d, m)
        }
      } else H(T, f, d, m, y, w, O)
    },
    ie = (f, d, m) => {
      const x = (d.component = f.component)
      if (vc(f, d, m))
        if (x.asyncDep && !x.asyncResolved) {
          Y(x, d, m)
          return
        } else (x.next = d), x.update()
      else (d.el = f.el), (x.vnode = d)
    },
    H = (f, d, m, x, y, w, O) => {
      const T = () => {
        if (f.isMounted) {
          let { next: M, bu: N, u: B, parent: X, vnode: te } = f
          {
            const Ee = Gi(f)
            if (Ee) {
              M && ((M.el = te.el), Y(f, M, O)),
                Ee.asyncDep.then(() => {
                  f.isUnmounted || T()
                })
              return
            }
          }
          let Q = M,
            xe
          lt(f, !1),
            M ? ((M.el = te.el), Y(f, M, O)) : (M = te),
            N && pn(N),
            (xe = M.props && M.props.onVnodeBeforeUpdate) && Re(xe, X, M, te),
            lt(f, !0)
          const he = ts(f),
            Le = f.subTree
          ;(f.subTree = he),
            R(Le, he, h(Le.el), en(Le), f, y, w),
            (M.el = he.el),
            Q === null && zi(f, he.el),
            B && Te(B, y),
            (xe = M.props && M.props.onVnodeUpdated) &&
              Te(() => Re(xe, X, M, te), y)
        } else {
          let M
          const { el: N, props: B } = d,
            { bm: X, m: te, parent: Q, root: xe, type: he } = f,
            Le = pt(d)
          if (
            (lt(f, !1),
            X && pn(X),
            !Le && (M = B && B.onVnodeBeforeMount) && Re(M, Q, d),
            lt(f, !0),
            N && Gn)
          ) {
            const Ee = () => {
              ;(f.subTree = ts(f)), Gn(N, f.subTree, f, y, null)
            }
            Le && he.__asyncHydrate ? he.__asyncHydrate(N, f, Ee) : Ee()
          } else {
            xe.ce && xe.ce._injectChildStyle(he)
            const Ee = (f.subTree = ts(f))
            R(null, Ee, m, x, f, y, w), (d.el = Ee.el)
          }
          if ((te && Te(te, y), !Le && (M = B && B.onVnodeMounted))) {
            const Ee = d
            Te(() => Re(M, Q, Ee), y)
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
      const C = (f.effect = new Qr(T))
      f.scope.off()
      const E = (f.update = C.run.bind(C)),
        $ = (f.job = C.runIfDirty.bind(C))
      ;($.i = f), ($.id = f.uid), (C.scheduler = () => Us($)), lt(f, !0), E()
    },
    Y = (f, d, m) => {
      d.component = f
      const x = f.vnode.props
      ;(f.vnode = d),
        (f.next = null),
        sc(f, d.props, x, m),
        lc(f, d.children, m),
        rt(),
        nr(f),
        it()
    },
    F = (f, d, m, x, y, w, O, T, C = !1) => {
      const E = f && f.children,
        $ = f ? f.shapeFlag : 0,
        M = d.children,
        { patchFlag: N, shapeFlag: B } = d
      if (N > 0) {
        if (N & 128) {
          Zt(E, M, m, x, y, w, O, T, C)
          return
        } else if (N & 256) {
          fe(E, M, m, x, y, w, O, T, C)
          return
        }
      }
      B & 8
        ? ($ & 16 && Mt(E, y, w), M !== E && a(m, M))
        : $ & 16
          ? B & 16
            ? Zt(E, M, m, x, y, w, O, T, C)
            : Mt(E, y, w, !0)
          : ($ & 8 && a(m, ''), B & 16 && W(M, m, x, y, w, O, T, C))
    },
    fe = (f, d, m, x, y, w, O, T, C) => {
      ;(f = f || St), (d = d || St)
      const E = f.length,
        $ = d.length,
        M = Math.min(E, $)
      let N
      for (N = 0; N < M; N++) {
        const B = (d[N] = C ? Ze(d[N]) : Me(d[N]))
        R(f[N], B, m, null, y, w, O, T, C)
      }
      E > $ ? Mt(f, y, w, !0, !1, M) : W(d, m, x, y, w, O, T, C, M)
    },
    Zt = (f, d, m, x, y, w, O, T, C) => {
      let E = 0
      const $ = d.length
      let M = f.length - 1,
        N = $ - 1
      for (; E <= M && E <= N; ) {
        const B = f[E],
          X = (d[E] = C ? Ze(d[E]) : Me(d[E]))
        if (ut(B, X)) R(B, X, m, null, y, w, O, T, C)
        else break
        E++
      }
      for (; E <= M && E <= N; ) {
        const B = f[M],
          X = (d[N] = C ? Ze(d[N]) : Me(d[N]))
        if (ut(B, X)) R(B, X, m, null, y, w, O, T, C)
        else break
        M--, N--
      }
      if (E > M) {
        if (E <= N) {
          const B = N + 1,
            X = B < $ ? d[B].el : x
          for (; E <= N; )
            R(null, (d[E] = C ? Ze(d[E]) : Me(d[E])), m, X, y, w, O, T, C), E++
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
        const he = N - X + 1
        let Le = !1,
          Ee = 0
        const It = new Array(he)
        for (E = 0; E < he; E++) It[E] = 0
        for (E = B; E <= M; E++) {
          const Ce = f[E]
          if (xe >= he) {
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
              R(Ce, d[je], m, null, y, w, O, T, C),
              xe++)
        }
        const Js = Le ? fc(It) : St
        for (Q = Js.length - 1, E = he - 1; E >= 0; E--) {
          const Ce = X + E,
            je = d[Ce],
            zs = Ce + 1 < $ ? d[Ce + 1].el : x
          It[E] === 0
            ? R(null, je, m, zs, y, w, O, T, C)
            : Le && (Q < 0 || E !== Js[Q] ? ot(je, m, zs, 2) : Q--)
        }
      }
    },
    ot = (f, d, m, x, y = null) => {
      const { el: w, type: O, transition: T, children: C, shapeFlag: E } = f
      if (E & 6) {
        ot(f.component.subTree, d, m, x)
        return
      }
      if (E & 128) {
        f.suspense.move(d, m, x)
        return
      }
      if (E & 64) {
        O.move(f, d, m, vt)
        return
      }
      if (O === Se) {
        s(w, d, m)
        for (let M = 0; M < C.length; M++) ot(C[M], d, m, x)
        s(f.anchor, d, m)
        return
      }
      if (O === mn) {
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
        props: O,
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
        T != null && Kt(T, null, m, f, !0),
        B != null && (d.renderCache[B] = void 0),
        $ & 256)
      ) {
        d.ctx.deactivate(f)
        return
      }
      const X = $ & 1 && N,
        te = !pt(f)
      let Q
      if ((te && (Q = O && O.onVnodeBeforeUnmount) && Re(Q, d, f), $ & 6))
        Oo(f.component, m, x)
      else {
        if ($ & 128) {
          f.suspense.unmount(m, x)
          return
        }
        X && Ue(f, null, d, 'beforeUnmount'),
          $ & 64
            ? f.type.remove(f, d, m, vt, x)
            : E && !E.hasOnce && (w !== Se || (M > 0 && M & 64))
              ? Mt(E, d, m, !1, !0)
              : ((w === Se && M & 384) || (!y && $ & 16)) && Mt(C, d, m),
          x && Ys(f)
      }
      ;((te && (Q = O && O.onVnodeUnmounted)) || X) &&
        Te(() => {
          Q && Re(Q, d, f), X && Ue(f, null, d, 'unmounted')
        }, m)
    },
    Ys = (f) => {
      const { type: d, el: m, anchor: x, transition: y } = f
      if (d === Se) {
        Ao(m, x)
        return
      }
      if (d === mn) {
        p(f)
        return
      }
      const w = () => {
        r(m), y && !y.persisted && y.afterLeave && y.afterLeave()
      }
      if (f.shapeFlag & 1 && y && !y.persisted) {
        const { leave: O, delayLeave: T } = y,
          C = () => O(m, w)
        T ? T(f.el, w, C) : C()
      } else w()
    },
    Ao = (f, d) => {
      let m
      for (; f !== d; ) (m = v(f)), r(f), (f = m)
      r(d)
    },
    Oo = (f, d, m) => {
      const { bum: x, scope: y, job: w, subTree: O, um: T, m: C, a: E } = f
      dr(C),
        dr(E),
        x && pn(x),
        y.stop(),
        w && ((w.flags |= 8), $e(O, f, d, m)),
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
      for (let O = w; O < f.length; O++) $e(f[O], d, m, x, y)
    },
    en = (f) => {
      if (f.shapeFlag & 6) return en(f.component.subTree)
      if (f.shapeFlag & 128) return f.suspense.next()
      const d = v(f.anchor || f.el),
        m = d && d[Ol]
      return m ? v(m) : d
    }
  let Wn = !1
  const Xs = (f, d, m) => {
      f == null
        ? d._vnode && $e(d._vnode, null, null, !0)
        : R(d._vnode || null, f, d, null, null, null, m),
        (d._vnode = f),
        Wn || ((Wn = !0), nr(), En(), (Wn = !1))
    },
    vt = {
      p: R,
      um: $e,
      m: ot,
      r: Ys,
      mt: se,
      mc: W,
      pc: F,
      pbc: _,
      n: en,
      o: e,
    }
  let qn, Gn
  return (
    t && ([qn, Gn] = t(vt)), { render: Xs, hydrate: qn, createApp: ec(Xs, qn) }
  )
}
function es({ type: e, props: t }, n) {
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
function Wi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function qi(e, t, n = !1) {
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
        !n && l.patchFlag !== -2 && qi(o, l)),
        l.type === gt && (l.el = o.el)
    }
}
function fc(e) {
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
function Gi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Gi(t)
}
function dr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const uc = Symbol.for('v-scx'),
  dc = () => At(uc)
function Yi(e, t) {
  return Un(e, null, t)
}
function uf(e, t) {
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
  if (Gt) {
    if (i === 'sync') {
      const S = dc()
      u = S.__watcherHandles || (S.__watcherHandles = [])
    } else if (!c) {
      const S = () => {}
      return (S.stop = ke), (S.resume = ke), (S.pause = ke), S
    }
  }
  const a = ue
  l.call = (S, P, R) => De(S, a, P, R)
  let h = !1
  i === 'post'
    ? (l.scheduler = (S) => {
        Te(S, a && a.suspense)
      })
    : i !== 'sync' &&
      ((h = !0),
      (l.scheduler = (S, P) => {
        P ? S() : Us(S)
      })),
    (l.augmentJob = (S) => {
      t && (S.flags |= 4),
        h && ((S.flags |= 2), a && ((S.id = a.uid), (S.i = a)))
    })
  const v = xl(e, t, l)
  return Gt && (u ? u.push(v) : c && v()), v
}
function hc(e, t, n) {
  const s = this.proxy,
    r = re(e) ? (e.includes('.') ? Xi(s, e) : () => s[e]) : e.bind(s, s)
  let i
  q(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = Qt(this),
    l = Un(r, i.bind(s), n)
  return o(), l
}
function Xi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const pc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${st(t)}Modifiers`]
function gc(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ee
  let r = n
  const i = t.startsWith('update:'),
    o = i && pc(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((a) => (re(a) ? a.trim() : a))),
    o.number && (r = n.map(No)))
  let l,
    c = s[(l = hn(t))] || s[(l = hn(Pe(t)))]
  !c && i && (c = s[(l = hn(st(t)))]), c && De(c, e, 6, r)
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), De(u, e, 6, r)
  }
}
function Ji(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!q(e)) {
    const c = (u) => {
      const a = Ji(u, t, !0)
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
function kn(e, t) {
  return !e || !Xt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, st(t)) || z(e, t))
}
function ts(e) {
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
      inheritAttrs: R,
    } = e,
    G = Cn(e)
  let k, K
  try {
    if (n.shapeFlag & 4) {
      const p = r || s,
        A = p
      ;(k = Me(u.call(A, p, a, h, S, v, P))), (K = l)
    } else {
      const p = t
      ;(k = Me(
        p.length > 1 ? p(h, { attrs: l, slots: o, emit: c }) : p(h, null),
      )),
        (K = t.props ? l : mc(l))
    }
  } catch (p) {
    ;(jt.length = 0), Hn(p, e, 1), (k = ve(ye))
  }
  let g = k
  if (K && R !== !1) {
    const p = Object.keys(K),
      { shapeFlag: A } = g
    p.length &&
      A & 7 &&
      (i && p.some(Ms) && (K = yc(K, i)), (g = nt(g, K, !1, !0)))
  }
  return (
    n.dirs &&
      ((g = nt(g, null, !1, !0)),
      (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Bt(g, n.transition),
    (k = g),
    Cn(G),
    k
  )
}
const mc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Xt(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  yc = (e, t) => {
    const n = {}
    for (const s in e) (!Ms(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function vc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? hr(s, o, u) : !!o
    if (c & 8) {
      const a = t.dynamicProps
      for (let h = 0; h < a.length; h++) {
        const v = a[h]
        if (o[v] !== s[v] && !kn(u, v)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? hr(s, o, u)
            : !0
          : !!o
  return !1
}
function hr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !kn(n, i)) return !0
  }
  return !1
}
function zi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Qi = (e) => e.__isSuspense
function Zi(e, t) {
  t && t.pendingBranch
    ? D(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Tl(e)
}
const Se = Symbol.for('v-fgt'),
  gt = Symbol.for('v-txt'),
  ye = Symbol.for('v-cmt'),
  mn = Symbol.for('v-stc'),
  jt = []
let Ae = null
function Es(e = !1) {
  jt.push((Ae = e ? null : []))
}
function _c() {
  jt.pop(), (Ae = jt[jt.length - 1] || null)
}
let Wt = 1
function pr(e, t = !1) {
  ;(Wt += e), e < 0 && Ae && t && (Ae.hasOnce = !0)
}
function eo(e) {
  return (
    (e.dynamicChildren = Wt > 0 ? Ae || St : null),
    _c(),
    Wt > 0 && Ae && Ae.push(e),
    e
  )
}
function df(e, t, n, s, r, i) {
  return eo(no(e, t, n, s, r, i, !0))
}
function Cs(e, t, n, s, r) {
  return eo(ve(e, t, n, s, r, !0))
}
function qt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ut(e, t) {
  return e.type === t.type && e.key === t.key
}
const to = ({ key: e }) => e ?? null,
  yn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? re(e) || ae(e) || q(e)
        ? { i: ce, r: e, k: t, f: !!n }
        : e
      : null
  )
function no(
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
    key: t && to(t),
    ref: t && yn(t),
    scopeId: _i,
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
      ? (Ks(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= re(n) ? 8 : 16),
    Wt > 0 &&
      !o &&
      Ae &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ae.push(c),
    c
  )
}
const ve = bc
function bc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Ii) && (e = ye), qt(e))) {
    const l = nt(e, t, !0)
    return (
      n && Ks(l, n),
      Wt > 0 &&
        !i &&
        Ae &&
        (l.shapeFlag & 6 ? (Ae[Ae.indexOf(e)] = l) : Ae.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Mc(e) && (e = e.__vccOpts), t)) {
    t = wc(t)
    let { class: l, style: c } = t
    l && !re(l) && (t.class = Ns(l)),
      Z(c) && (Vs(c) && !D(c) && (c = le({}, c)), (t.style = Ls(c)))
  }
  const o = re(e) ? 1 : Qi(e) ? 128 : bi(e) ? 64 : Z(e) ? 4 : q(e) ? 2 : 0
  return no(e, t, n, s, r, o, i, !0)
}
function wc(e) {
  return e ? (Vs(e) || $i(e) ? le({}, e) : e) : null
}
function nt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    u = t ? Sc(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && to(u),
      ref:
        t && t.ref
          ? n && i
            ? D(i)
              ? i.concat(yn(t))
              : [i, yn(t)]
            : yn(t)
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
  return c && s && Bt(a, c.clone(a)), a
}
function so(e = ' ', t = 0) {
  return ve(gt, null, e, t)
}
function hf(e = '', t = !1) {
  return t ? (Es(), Cs(ye, null, e)) : ve(ye, null, e)
}
function Me(e) {
  return e == null || typeof e == 'boolean'
    ? ve(ye)
    : D(e)
      ? ve(Se, null, e.slice())
      : qt(e)
        ? Ze(e)
        : ve(gt, null, String(e))
}
function Ze(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nt(e)
}
function Ks(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (D(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Ks(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !$i(t)
        ? (t._ctx = ce)
        : r === 3 &&
          ce &&
          (ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    q(t)
      ? ((t = { default: t, _ctx: ce }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [so(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Sc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Ns([t.class, s.class]))
      else if (r === 'style') t.style = Ls([t.style, s.style])
      else if (Xt(r)) {
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
function Re(e, t, n, s = null) {
  De(e, t, 7, [n, s])
}
const xc = Fi()
let Ec = 0
function Cc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || xc,
    i = {
      uid: Ec++,
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
      scope: new Ko(!0),
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
      propsOptions: Vi(s, r),
      emitsOptions: Ji(s, r),
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
    (i.emit = gc.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let ue = null
const Bn = () => ue || ce
let An, Ts
{
  const e = In(),
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
  ;(An = t('__VUE_INSTANCE_SETTERS__', (n) => (ue = n))),
    (Ts = t('__VUE_SSR_SETTERS__', (n) => (Gt = n)))
}
const Qt = (e) => {
    const t = ue
    return (
      An(e),
      e.scope.on(),
      () => {
        e.scope.off(), An(t)
      }
    )
  },
  gr = () => {
    ue && ue.scope.off(), An(null)
  }
function ro(e) {
  return e.vnode.shapeFlag & 4
}
let Gt = !1
function Tc(e, t = !1, n = !1) {
  t && Ts(t)
  const { props: s, children: r } = e.vnode,
    i = ro(e)
  nc(e, s, i, t), oc(e, r, n)
  const o = i ? Ac(e, t) : void 0
  return t && Ts(!1), o
}
function Ac(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ql))
  const { setup: s } = n
  if (s) {
    rt()
    const r = (e.setupContext = s.length > 1 ? oo(e) : null),
      i = Qt(e),
      o = zt(s, e, 0, [e.props, r]),
      l = Kr(o)
    if ((it(), i(), (l || e.sp) && !pt(e) && Ai(e), l)) {
      if ((o.then(gr, gr), t))
        return o
          .then((c) => {
            mr(e, c, t)
          })
          .catch((c) => {
            Hn(c, e, 0)
          })
      e.asyncDep = o
    } else mr(e, o, t)
  } else io(e, t)
}
function mr(e, t, n) {
  q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = gi(t)),
    io(e, n)
}
let yr
function io(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && yr && !s.render) {
      const r = s.template || ks(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          u = le(le({ isCustomElement: i, delimiters: l }, o), c)
        s.render = yr(r, u)
      }
    }
    e.render = s.render || ke
  }
  {
    const r = Qt(e)
    rt()
    try {
      Yl(e)
    } finally {
      it(), r()
    }
  }
}
const Oc = {
  get(e, t) {
    return ge(e, 'get', ''), e[t]
  },
}
function oo(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Oc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Kn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(gi(gn(e.exposed)), {
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
function Rc(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Mc(e) {
  return q(e) && '__vccOpts' in e
}
const oe = (e, t) => wl(e, t, Gt)
function As(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Z(t) && !D(t)
      ? qt(t)
        ? ve(e, null, [t])
        : ve(e, t)
      : ve(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && qt(n) && (n = [n]),
      ve(e, t, n))
}
const Ic = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Os
const vr = typeof window < 'u' && window.trustedTypes
if (vr)
  try {
    Os = vr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const lo = Os ? (e) => Os.createHTML(e) : (e) => e,
  Pc = 'http://www.w3.org/2000/svg',
  Lc = 'http://www.w3.org/1998/Math/MathML',
  We = typeof document < 'u' ? document : null,
  _r = We && We.createElement('template'),
  Nc = {
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
          ? We.createElementNS(Pc, e)
          : t === 'mathml'
            ? We.createElementNS(Lc, e)
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
        _r.innerHTML = lo(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e,
        )
        const l = _r.content
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
  Yt = Symbol('_vtc'),
  co = {
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
  Fc = le({}, wi, co),
  Hc = (e) => ((e.displayName = 'Transition'), (e.props = Fc), e),
  pf = Hc((e, { slots: t }) => As(Il, Dc(e), t)),
  ct = (e, t = []) => {
    D(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  br = (e) => (e ? (D(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Dc(e) {
  const t = {}
  for (const b in e) b in co || (t[b] = e[b])
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
    P = $c(r),
    R = P && P[0],
    G = P && P[1],
    {
      onBeforeEnter: k,
      onEnter: K,
      onEnterCancelled: g,
      onLeave: p,
      onLeaveCancelled: A,
      onBeforeAppear: j = k,
      onAppear: V = K,
      onAppearCancelled: W = g,
    } = t,
    I = (b, U, se, ie) => {
      ;(b._enterCancelled = ie), at(b, U ? a : l), at(b, U ? u : o), se && se()
    },
    _ = (b, U) => {
      ;(b._isLeaving = !1), at(b, h), at(b, S), at(b, v), U && U()
    },
    L = (b) => (U, se) => {
      const ie = b ? V : K,
        H = () => I(U, b, se)
      ct(ie, [U, H]),
        wr(() => {
          at(U, b ? c : i), Ke(U, b ? a : l), br(ie) || Sr(U, s, R, H)
        })
    }
  return le(t, {
    onBeforeEnter(b) {
      ct(k, [b]), Ke(b, i), Ke(b, o)
    },
    onBeforeAppear(b) {
      ct(j, [b]), Ke(b, c), Ke(b, u)
    },
    onEnter: L(!1),
    onAppear: L(!0),
    onLeave(b, U) {
      b._isLeaving = !0
      const se = () => _(b, U)
      Ke(b, h),
        b._enterCancelled ? (Ke(b, v), Cr()) : (Cr(), Ke(b, v)),
        wr(() => {
          b._isLeaving && (at(b, h), Ke(b, S), br(p) || Sr(b, s, G, se))
        }),
        ct(p, [b, se])
    },
    onEnterCancelled(b) {
      I(b, !1, void 0, !0), ct(g, [b])
    },
    onAppearCancelled(b) {
      I(b, !0, void 0, !0), ct(W, [b])
    },
    onLeaveCancelled(b) {
      _(b), ct(A, [b])
    },
  })
}
function $c(e) {
  if (e == null) return null
  if (Z(e)) return [ns(e.enter), ns(e.leave)]
  {
    const t = ns(e)
    return [t, t]
  }
}
function ns(e) {
  return Fo(e)
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Yt] || (e[Yt] = new Set())).add(t)
}
function at(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[Yt]
  n && (n.delete(t), n.size || (e[Yt] = void 0))
}
function wr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let jc = 0
function Sr(e, t, n, s) {
  const r = (e._endId = ++jc),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = Vc(e, t)
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
function Vc(e, t) {
  const n = window.getComputedStyle(e),
    s = (P) => (n[P] || '').split(', '),
    r = s(`${Je}Delay`),
    i = s(`${Je}Duration`),
    o = xr(r, i),
    l = s(`${Lt}Delay`),
    c = s(`${Lt}Duration`),
    u = xr(l, c)
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
function xr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Er(n) + Er(e[s])))
}
function Er(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Cr() {
  return document.body.offsetHeight
}
function Uc(e, t, n) {
  const s = e[Yt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const On = Symbol('_vod'),
  ao = Symbol('_vsh'),
  gf = {
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
  ;(e.style.display = t ? e[On] : 'none'), (e[ao] = !t)
}
const kc = Symbol(''),
  Bc = /(^|;)\s*display\s*:/
function Kc(e, t, n) {
  const s = e.style,
    r = re(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (re(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && vn(s, l, '')
        }
      else for (const o in t) n[o] == null && vn(s, o, '')
    for (const o in n) o === 'display' && (i = !0), vn(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[kc]
      o && (n += ';' + o), (s.cssText = n), (i = Bc.test(n))
    }
  } else t && e.removeAttribute('style')
  On in e && ((e[On] = i ? s.display : ''), e[ao] && (s.display = 'none'))
}
const Tr = /\s*!important$/
function vn(e, t, n) {
  if (D(n)) n.forEach((s) => vn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Wc(e, t)
    Tr.test(n)
      ? e.setProperty(st(s), n.replace(Tr, ''), 'important')
      : (e[s] = n)
  }
}
const Ar = ['Webkit', 'Moz', 'ms'],
  ss = {}
function Wc(e, t) {
  const n = ss[t]
  if (n) return n
  let s = Pe(t)
  if (s !== 'filter' && s in e) return (ss[t] = s)
  s = Mn(s)
  for (let r = 0; r < Ar.length; r++) {
    const i = Ar[r] + s
    if (i in e) return (ss[t] = i)
  }
  return t
}
const Or = 'http://www.w3.org/1999/xlink'
function Rr(e, t, n, s, r, i = Uo(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Or, t.slice(6, t.length))
      : e.setAttributeNS(Or, t, n)
    : n == null || (i && !Yr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : He(n) ? String(n) : n)
}
function Mr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? lo(n) : n)
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
      ? (n = Yr(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function fo(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function qc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Ir = Symbol('_vei')
function Gc(e, t, n, s, r = null) {
  const i = e[Ir] || (e[Ir] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = Yc(t)
    if (s) {
      const u = (i[t] = zc(s, r))
      fo(e, l, u, c)
    } else o && (qc(e, l, o, c), (i[t] = void 0))
  }
}
const Pr = /(?:Once|Passive|Capture)$/
function Yc(e) {
  let t
  if (Pr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Pr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : st(e.slice(2)), t]
}
let rs = 0
const Xc = Promise.resolve(),
  Jc = () => rs || (Xc.then(() => (rs = 0)), (rs = Date.now()))
function zc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    De(Qc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Jc()), n
}
function Qc(e, t) {
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
const Lr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Zc = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Uc(e, s, o)
      : t === 'style'
        ? Kc(e, n, s)
        : Xt(t)
          ? Ms(t) || Gc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : ea(e, t, s, o)
              )
            ? (Mr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Rr(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !re(s))
              ? Mr(e, Pe(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Rr(e, t, s, o))
  }
function ea(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Lr(t) && q(n))
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
  return Lr(t) && re(n) ? !1 : t in e
}
const Nr = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1
    return D(t) ? (n) => pn(t, n) : t
  },
  is = Symbol('_assign'),
  mf = {
    created(e, { value: t }, n) {
      ;(e.checked = bn(t, n.props.value)),
        (e[is] = Nr(n)),
        fo(e, 'change', () => {
          e[is](ta(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;(e[is] = Nr(s)), t !== n && (e.checked = bn(t, s.props.value))
    },
  }
function ta(e) {
  return '_value' in e ? e._value : e.value
}
const na = ['ctrl', 'shift', 'alt', 'meta'],
  sa = {
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
    exact: (e, t) => na.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  yf = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = sa[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  ra = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  vf = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = st(r.key)
        if (t.some((o) => o === i || ra[o] === i)) return e(r)
      })
    )
  },
  ia = le({ patchProp: Zc }, Nc)
let os,
  Fr = !1
function oa() {
  return (os = Fr ? os : cc(ia)), (Fr = !0), os
}
const _f = (...e) => {
  const t = oa().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = ca(s)
      if (r) return n(r, !0, la(r))
    }),
    t
  )
}
function la(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function ca(e) {
  return re(e) ? document.querySelector(e) : e
}
const bf = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  aa = window.__VP_SITE_DATA__
function Ws(e) {
  return zr() ? (Wo(e), !0) : !1
}
function tt(e) {
  return typeof e == 'function' ? e() : pi(e)
}
const uo = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const fa = Object.prototype.toString,
  ua = (e) => fa.call(e) === '[object Object]',
  ho = () => {},
  Hr = da()
function da() {
  var e, t
  return (
    uo &&
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
function ha(e, t) {
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
const po = (e) => e()
function pa(e = po) {
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
  return { isActive: Fn(t), pause: n, resume: s, eventFilter: r }
}
function ga(e) {
  return Bn()
}
function go(...e) {
  if (e.length !== 1) return vl(...e)
  const t = e[0]
  return typeof t == 'function' ? Fn(gl(() => ({ get: t, set: ho }))) : de(t)
}
function ma(e, t, n = {}) {
  const { eventFilter: s = po, ...r } = n
  return Fe(e, ha(s, t), r)
}
function ya(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = pa(s)
  return {
    stop: ma(e, t, { ...r, eventFilter: i }),
    pause: o,
    resume: l,
    isActive: c,
  }
}
function qs(e, t = !0, n) {
  ga() ? Rt(e, n) : t ? e() : Dn(e)
}
const Ye = uo ? window : void 0
function mo(e) {
  var t
  const n = tt(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function Ot(...e) {
  let t, n, s, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Ye))
      : ([t, n, s, r] = e),
    !t)
  )
    return ho
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    o = () => {
      i.forEach((a) => a()), (i.length = 0)
    },
    l = (a, h, v, S) => (
      a.addEventListener(h, v, S), () => a.removeEventListener(h, v, S)
    ),
    c = Fe(
      () => [mo(t), tt(r)],
      ([a, h]) => {
        if ((o(), !a)) return
        const v = ua(h) ? { ...h } : h
        i.push(...n.flatMap((S) => s.map((P) => l(a, S, P, v))))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      c(), o()
    }
  return Ws(u), u
}
function va(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function wf(...e) {
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
    c = va(t)
  return Ot(
    r,
    i,
    (a) => {
      ;(a.repeat && tt(l)) || (c(a) && n(a))
    },
    o,
  )
}
function _a() {
  const e = de(!1),
    t = Bn()
  return (
    t &&
      Rt(() => {
        e.value = !0
      }, t),
    e
  )
}
function ba(e) {
  const t = _a()
  return oe(() => (t.value, !!e()))
}
function yo(e, t = {}) {
  const { window: n = Ye } = t,
    s = ba(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
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
    c = Yi(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(tt(e))),
        'addEventListener' in r
          ? r.addEventListener('change', o)
          : r.addListener(o),
        (i.value = r.matches))
    })
  return (
    Ws(() => {
      c(), l(), (r = void 0)
    }),
    i
  )
}
const an =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  fn = '__vueuse_ssr_handlers__',
  wa = Sa()
function Sa() {
  return fn in an || (an[fn] = an[fn] || {}), an[fn]
}
function vo(e, t) {
  return wa[e] || t
}
function Gs(e) {
  return yo('(prefers-color-scheme: dark)', e)
}
function xa(e) {
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
const Ea = {
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
  Dr = 'vueuse-storage'
function Ca(e, t, n, s = {}) {
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
    R = (a ? di : de)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = vo('getDefaultStorage', () => {
        var _
        return (_ = Ye) == null ? void 0 : _.localStorage
      })()
    } catch (_) {
      S(_)
    }
  if (!n) return R
  const G = tt(t),
    k = xa(G),
    K = (r = s.serializer) != null ? r : Ea[k],
    { pause: g, resume: p } = ya(R, () => j(R.value), {
      flush: i,
      deep: o,
      eventFilter: v,
    })
  h &&
    l &&
    qs(() => {
      n instanceof Storage ? Ot(h, 'storage', W) : Ot(h, Dr, I), P && W()
    }),
    P || W()
  function A(_, L) {
    if (h) {
      const b = { key: e, oldValue: _, newValue: L, storageArea: n }
      h.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent('storage', b)
          : new CustomEvent(Dr, { detail: b }),
      )
    }
  }
  function j(_) {
    try {
      const L = n.getItem(e)
      if (_ == null) A(L, null), n.removeItem(e)
      else {
        const b = K.write(_)
        L !== b && (n.setItem(e, b), A(L, b))
      }
    } catch (L) {
      S(L)
    }
  }
  function V(_) {
    const L = _ ? _.newValue : n.getItem(e)
    if (L == null) return c && G != null && n.setItem(e, K.write(G)), G
    if (!_ && u) {
      const b = K.read(L)
      return typeof u == 'function'
        ? u(b, G)
        : k === 'object' && !Array.isArray(b)
          ? { ...G, ...b }
          : b
    } else return typeof L != 'string' ? L : K.read(L)
  }
  function W(_) {
    if (!(_ && _.storageArea !== n)) {
      if (_ && _.key == null) {
        R.value = G
        return
      }
      if (!(_ && _.key !== e)) {
        g()
        try {
          ;(_ == null ? void 0 : _.newValue) !== K.write(R.value) &&
            (R.value = V(_))
        } catch (L) {
          S(L)
        } finally {
          _ ? Dn(p) : p()
        }
      }
    }
  }
  function I(_) {
    W(_.detail)
  }
  return R
}
const Ta =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function Aa(e = {}) {
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
    v = Gs({ window: r }),
    S = oe(() => (v.value ? 'dark' : 'light')),
    P =
      c ||
      (o == null
        ? go(s)
        : Ca(o, s, i, { window: r, listenToStorageChanges: l })),
    R = oe(() => (P.value === 'auto' ? S.value : P.value)),
    G = vo('updateHTMLAttrs', (p, A, j) => {
      const V =
        typeof p == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(p)
          : mo(p)
      if (!V) return
      const W = new Set(),
        I = new Set()
      let _ = null
      if (A === 'class') {
        const b = j.split(/\s/g)
        Object.values(h)
          .flatMap((U) => (U || '').split(/\s/g))
          .filter(Boolean)
          .forEach((U) => {
            b.includes(U) ? W.add(U) : I.add(U)
          })
      } else _ = { key: A, value: j }
      if (W.size === 0 && I.size === 0 && _ === null) return
      let L
      a &&
        ((L = r.document.createElement('style')),
        L.appendChild(document.createTextNode(Ta)),
        r.document.head.appendChild(L))
      for (const b of W) V.classList.add(b)
      for (const b of I) V.classList.remove(b)
      _ && V.setAttribute(_.key, _.value),
        a && (r.getComputedStyle(L).opacity, document.head.removeChild(L))
    })
  function k(p) {
    var A
    G(t, n, (A = h[p]) != null ? A : p)
  }
  function K(p) {
    e.onChanged ? e.onChanged(p, k) : k(p)
  }
  Fe(R, K, { flush: 'post', immediate: !0 }), qs(() => K(R.value))
  const g = oe({
    get() {
      return u ? P.value : R.value
    },
    set(p) {
      P.value = p
    },
  })
  try {
    return Object.assign(g, { store: P, system: S, state: R })
  } catch {
    return g
  }
}
function Oa(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = Ye } = e,
    r = Aa({
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
      r.system ? r.system.value : Gs({ window: s }).value ? 'dark' : 'light',
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
function _o(e) {
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
    return !n || n.tagName === 'BODY' ? !1 : _o(n)
  }
}
function Ra(e) {
  const t = e || window.event,
    n = t.target
  return _o(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const cs = new WeakMap()
function Sf(e, t = !1) {
  const n = de(t)
  let s = null,
    r = ''
  Fe(
    go(e),
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
        (Hr &&
          (s = Ot(
            l,
            'touchmove',
            (c) => {
              Ra(c)
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
        (Hr && (s == null || s()),
        (l.style.overflow = r),
        cs.delete(l),
        (n.value = !1))
    }
  return (
    Ws(o),
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
function xf(e = {}) {
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
    Ot(
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
function Ef(e = {}) {
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
  if ((u(), qs(u), Ot('resize', u, { passive: !0 }), r)) {
    const a = yo('(orientation: portrait)')
    Fe(a, () => u())
  }
  return { width: l, height: c }
}
const as = {
  BASE_URL: '/versakit/',
  DEV: !1,
  MODE: 'production',
  PROD: !0,
  SSR: !1,
}
var fs = {}
const bo = /^(?:[a-z]+:|\/\/)/i,
  Ma = 'vitepress-theme-appearance',
  Ia = /#.*$/,
  Pa = /[?#].*$/,
  La = /(?:(^|\/)index)?\.(?:md|html)$/,
  pe = typeof document < 'u',
  wo = {
    relativePath: '404.md',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function Na(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = $r(`/${e}`)), n)) return new RegExp(t).test(e)
  if ($r(t) !== e) return !1
  const s = t.match(Ia)
  return s ? (pe ? location.hash : '') === s[0] : !0
}
function $r(e) {
  return decodeURI(e).replace(Pa, '').replace(La, '$1')
}
function Fa(e) {
  return bo.test(e)
}
function Ha(e, t) {
  return (
    Object.keys((e == null ? void 0 : e.locales) || {}).find(
      (n) => n !== 'root' && !Fa(n) && Na(t, `/${n}/`, !0),
    ) || 'root'
  )
}
function Da(e, t) {
  var s, r, i, o, l, c, u
  const n = Ha(e, t)
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
    head: xo(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig),
    },
  })
}
function So(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = $a(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function $a(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function ja(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function xo(e, t) {
  return [...e.filter((n) => !ja(t, n)), ...t]
}
const Va = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  Ua = /^[a-z]:/i
function jr(e) {
  const t = Ua.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(Va, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const us = new Set()
function ka(e) {
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
const Ba = Symbol(),
  mt = di(aa)
function Cf(e) {
  const t = oe(() => Da(mt.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? de(!0)
        : n === 'force-auto'
          ? Gs()
          : n
            ? Oa({
                storageKey: Ma,
                initialValue: () => (n === 'dark' ? 'dark' : 'auto'),
                ...(typeof n == 'object' ? n : {}),
              })
            : de(!1),
    r = de(pe ? location.hash : '')
  return (
    pe &&
      window.addEventListener('hashchange', () => {
        r.value = location.hash
      }),
    Fe(
      () => e.data,
      () => {
        r.value = pe ? location.hash : ''
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
      title: oe(() => So(t.value, e.data)),
      description: oe(() => e.data.description || t.value.description),
      isDark: s,
      hash: oe(() => r.value),
    }
  )
}
function Ka() {
  const e = At(Ba)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function Wa(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function Vr(e) {
  return bo.test(e) || !e.startsWith('/') ? e : Wa(mt.value.base, e)
}
function qa(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), pe)) {
    const n = '/versakit/'
    t = jr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
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
  } else t = `./${jr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let _n = []
function Tf(e) {
  _n.push(e),
    Vn(() => {
      _n = _n.filter((t) => t !== e)
    })
}
function Ga() {
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
  else if (typeof e == 'string') t = Ur(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = Ur(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function Ur(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const Ya = Symbol(),
  Eo = 'http://a.com',
  Xa = () => ({ path: '/', component: null, data: wo })
function Af(e, t) {
  const n = Nn(Xa()),
    s = { route: n, go: r }
  async function r(l = pe ? location.href : '/') {
    var c, u
    ;(l = ds(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        (pe &&
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
    const a = new URL(l, Eo),
      h = (i = a.pathname)
    try {
      let P = await e(h)
      if (!P) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: R, __pageData: G } = P
        if (!R) throw new Error(`Invalid route component: ${R}`)
        await ((S = s.onAfterPageLoad) == null ? void 0 : S.call(s, l)),
          (n.path = pe ? h : Vr(h)),
          (n.component = gn(R)),
          (n.data = gn(G)),
          pe &&
            Dn(() => {
              let k =
                mt.value.base +
                G.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!mt.value.cleanUrls && !k.endsWith('/') && (k += '.html'),
                k !== a.pathname &&
                  ((a.pathname = k),
                  (l = k + a.search + a.hash),
                  history.replaceState({}, '', l)),
                a.hash && !c)
              ) {
                let K = null
                try {
                  K = document.getElementById(
                    decodeURIComponent(a.hash).slice(1),
                  )
                } catch (g) {
                  console.warn(g)
                }
                if (K) {
                  kr(K, a.hash)
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
          const R = await fetch(mt.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await R.json()), await o(l, c, !0)
          return
        } catch {}
      if (i === h) {
        ;(i = null), (n.path = pe ? h : Vr(h)), (n.component = t ? gn(t) : null)
        const R = pe
          ? h
              .replace(/(^|\/)$/, '$1index')
              .replace(/(\.html)?$/, '.md')
              .replace(/^\//, '')
          : '404.md'
        n.data = { ...wo, relativePath: R }
      }
    }
  }
  return (
    pe &&
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
            R = new URL(location.href)
          h === R.origin &&
            ka(v) &&
            (l.preventDefault(),
            v === R.pathname && P === R.search
              ? (S !== R.hash &&
                  (history.pushState({}, '', a),
                  window.dispatchEvent(
                    new HashChangeEvent('hashchange', {
                      oldURL: R.href,
                      newURL: a,
                    }),
                  )),
                S
                  ? kr(c, S, c.classList.contains('header-anchor'))
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
function Ja() {
  const e = At(Ya)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function Co() {
  return Ja().route
}
function kr(e, t, n = !1) {
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
      o = window.scrollY + s.getBoundingClientRect().top - Ga() + i
    requestAnimationFrame(r)
  }
}
function ds(e) {
  const t = new URL(e, Eo)
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
const un = () => _n.forEach((e) => e()),
  Of = Ti({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = Co(),
        { frontmatter: n, site: s } = Ka()
      return (
        Fe(n, un, { deep: !0, flush: 'post' }),
        () =>
          As(
            e.as,
            s.value.contentProps ?? { style: { position: 'relative' } },
            [
              t.component
                ? As(t.component, {
                    onVnodeMounted: un,
                    onVnodeUpdated: un,
                    onVnodeUnmounted: un,
                  })
                : '404 Page Not Found',
            ],
          )
      )
    },
  }),
  Rf = Ti({
    setup(e, { slots: t }) {
      const n = de(!1)
      return (
        Rt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
function Mf() {
  pe &&
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
function If() {
  if (pe) {
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
          za(u).then(() => {
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
async function za(e) {
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
function Pf(e, t) {
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
  Yi(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = So(o, i)
    u !== document.title && (document.title = u)
    const a = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== a && h.setAttribute('content', a)
      : hs(['meta', { name: 'description', content: a }]),
      r(xo(o.head, Za(c)))
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
function Qa(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function Za(e) {
  return e.filter((t) => !Qa(t))
}
const ps = new Set(),
  To = () => document.createElement('link'),
  ef = (e) => {
    const t = To()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  tf = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let dn
const nf =
  pe &&
  (dn = To()) &&
  dn.relList &&
  dn.relList.supports &&
  dn.relList.supports('prefetch')
    ? ef
    : tf
function Lf() {
  if (!pe || !window.IntersectionObserver) return
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
              const u = qa(c)
              u && nf(u)
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
  Rt(s)
  const r = Co()
  Fe(() => r.path, s),
    Vn(() => {
      n && n.disconnect()
    })
}
export {
  ff as $,
  Ga as A,
  rf as B,
  lf as C,
  di as D,
  Tf as E,
  Se as F,
  ve as G,
  of as H,
  bo as I,
  Co as J,
  Sc as K,
  At as L,
  Ef as M,
  Ls as N,
  wf as O,
  Dn as P,
  xf as Q,
  pe as R,
  Fn as S,
  pf as T,
  Sf as U,
  tc as V,
  vf as W,
  af as X,
  Ri as Y,
  yf as Z,
  bf as _,
  so as a,
  ae as a0,
  zr as a1,
  Wo as a2,
  sf as a3,
  gf as a4,
  mf as a5,
  Pf as a6,
  Ya as a7,
  Cf as a8,
  Ba as a9,
  Of as aa,
  Rf as ab,
  mt as ac,
  _f as ad,
  Af as ae,
  qa as af,
  Lf as ag,
  If as ah,
  Mf as ai,
  As as aj,
  Cs as b,
  df as c,
  Ti as d,
  hf as e,
  ka as f,
  Vr as g,
  oe as h,
  Fa as i,
  no as j,
  pi as k,
  Na as l,
  yo as m,
  Ns as n,
  Es as o,
  de as p,
  Fe as q,
  cf as r,
  Yi as s,
  Bo as t,
  Ka as u,
  Rt as v,
  Al as w,
  Vn as x,
  uf as y,
  Ul as z,
}
